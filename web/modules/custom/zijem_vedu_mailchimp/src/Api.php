<?php

namespace Drupal\zijem_vedu_mailchimp;

use MailchimpMarketing;

/**
 * Service description.
 */
class Api {

  /**
   * @var \MailchimpMarketing\ApiClient
   */
  protected $mailchimp;

  /**
   * Constructs an Api object.
   */
  public function __construct() {
    $config = \Drupal::configFactory()->get('zijem_vedu_mailchimp.settings');
    $this->mailchimp = new MailchimpMarketing\ApiClient();

    $this->mailchimp->setConfig([
      'apiKey' => $config->get('api_key'),
      'server' => $config->get('server_prefix'),
    ]);
  }

  /**
   * Method description.
   */
  public function getMailchimpApi() {
    return $this->mailchimp;
  }

}
