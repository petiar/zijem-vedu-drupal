<?php

namespace Drupal\zijem_vedu_mailchimp\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Blok pre titulnú stránku úplne hore
 *
 * @Block(
 *   id="zijem_vedu_mailchimp_block",
 *   admin_label = @Translation ("Žijem vedu Mailchimp Block")
 * )
 */

class ZijemVeduMailchimpBlock extends BlockBase
{
  public function build() {
    return [
      '#theme' => 'zijem_vedu_mailchimp_block',
      '#attached' => [
        'library' => [
          'zijem_vedu_mailchimp/zijem_vedu_mailchimp',
        ],
      ],
    ];
  }
}
