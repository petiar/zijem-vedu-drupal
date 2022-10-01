<?php

namespace Drupal\zijem_vedu_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * @Block(
 *   id = "zijem_vedu_block",
 *   admin_label = "Žijem vedu blok"
 *   )
 */
class ZijemVeduBlock extends BlockBase {
  public function build() {
    return [
      '#theme' => 'zijem_vedu_block',
      '#variables' => $this->getConfiguration(),
    ];
  }

  public function blockForm($form, FormStateInterface $form_state) {
    $config = $this->configuration;

    $form['zv_block_content'] = [
      '#type' => 'textarea',
      '#title' => 'Text bloku',
      '#required' => true,
      '#default_value' => $config['zv_block_content'],
    ];

    $form['zv_block_link'] = [
      '#type' => 'url',
      '#title' => 'Link pre button',
      '#required' => true,
      '#default_value' => $config['zv_block_link'],
    ];

    $form['zv_block_link_text'] = [
      '#type' => 'textfield',
      '#title' => 'Text pre button',
      '#required' => true,
      '#default_value' => $config['zv_block_link_text'],
    ];

    return $form;
  }

  public function blockSubmit($form, FormStateInterface $form_state) {
    $this->configuration['zv_block_content'] = $form_state->getValue('zv_block_content');
    $this->configuration['zv_block_link'] = $form_state->getValue('zv_block_link');
    $this->configuration['zv_block_link_text'] = $form_state->getValue('zv_block_link_text');
  }

}
