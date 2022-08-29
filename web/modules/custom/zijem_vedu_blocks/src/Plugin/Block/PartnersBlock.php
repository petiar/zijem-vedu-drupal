<?php

namespace Drupal\zijem_vedu_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Blok pre titulnú stránku úplne hore
 *
 * @Block(
 *   id="partners_block",
 *   admin_label = @Translation ("Partneri Žijem vedu")
 * )
 */

class PartnersBlock extends BlockBase
{
  public function build() {
    return [
      '#theme' => 'partners_block',
    ];
  }
}
