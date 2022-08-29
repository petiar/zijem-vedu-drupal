<?php

namespace Drupal\zijem_vedu_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Blok pre titulnú stránku úplne hore
 *
 * @Block(
 *   id="followus_block",
 *   admin_label = @Translation ("Follow us")
 * )
 */

class FollowusBlock extends BlockBase
{
  public function build() {
    return [
      '#theme' => 'followus_block',
    ];
  }
}
