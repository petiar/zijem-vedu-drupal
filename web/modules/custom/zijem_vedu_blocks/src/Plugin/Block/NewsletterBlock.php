<?php

namespace Drupal\zijem_vedu_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Blok pre titulnú stránku úplne hore
 *
 * @Block(
 *   id="newsletter_block",
 *   admin_label = @Translation ("Newsletter Žijem vedu")
 * )
 */

class NewsletterBlock extends BlockBase
{
  public function build() {
    return [
      '#theme' => 'newsletter_block',
    ];
  }
}
