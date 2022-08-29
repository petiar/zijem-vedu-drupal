<?php

namespace Drupal\zijem_vedu_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Blok pre titulnú stránku úplne hore
 *
 * @Block(
 *   id="spajame_block",
 *   admin_label = @Translation ("Spájame Block")
 * )
 */

class SpajameBlock extends BlockBase
{
  public function build() {
    return [
      '#theme' => 'spajame_block',
      // '#markup' => 'Halo halo',
    ];
  }
}
