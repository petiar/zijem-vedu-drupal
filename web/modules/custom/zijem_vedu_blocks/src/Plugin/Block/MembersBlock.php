<?php

namespace Drupal\zijem_vedu_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use GraphQL\Client;
use GraphQL\Query;

/**
 * Blok pre titulnú stránku úplne hore
 *
 * @Block(
 *   id="members_block",
 *   admin_label = @Translation ("Členovia Žijem vedu")
 * )
 */

class MembersBlock extends BlockBase
{
  public function build() {
    $gql = (new Query('platform_users_featured'))
      ->setSelectionSet([
          'id',
          (new Query('user_ref'))
            ->setSelectionSet([
              'avatar',
              'id',
              (new Query('name'))
                ->setSelectionSet([
                  'first_name',
                  'last_name',
                ])
            ])
        ]
      );

    $client = new Client('https://zijemvedu.solved.fi/api/graphql');

    $results = $client->runQuery($gql)->getData();
    $members = $results->platform_users_featured;

    return [
      '#theme' => 'members_block',
      '#members' => $members,
    ];
  }
}
