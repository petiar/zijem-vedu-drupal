<?php

namespace Drupal\zijem_vedu_pages\Controller;

use Drupal\Core\Controller\ControllerBase;

class ZijemVeduPagesController extends ControllerBase {
  public function articles() {
    return [];
  }

  public function platforma() {
    return [];
  }

  public function about() {
    return [];
  }

  public function numbers() {
    return [
      '#theme' => 'zijem_vedu_numbers',
      '#attached' => [
        'library' => [
          'zijem_vedu/numbers',
          'zijem_vedu/bootstrap'
        ],
      ],
    ];
  }
}
