<?php

namespace Drupal\zijem_vedu_blocks;

use GraphQL\Client;
use GraphQL\Query;

class SolvedApiService {
  /**
   * @var Client
   */
  private $client;

  public function __construct() {
    $this->client = new Client('https://zijemvedu.solved.fi/api/graphql');
  }
  public function getClient(): Client
  {
    return $this->client;
  }

  public function getFeaturedUsers() {
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

    $results = $this->client->runQuery($gql)->getData();
    return $results->platform_users_featured;
  }
}
