<?php

namespace Drupal\zijem_vedu_mailchimp;

use Drupal\Core\Site\Settings;
use MailchimpMarketing;

/**
 * Service description.
 */
class Api {

  /**
   * The site settings.
   *
   * @var \Drupal\Core\Site\Settings
   */
  protected $settings;

  /**
   * @var \MailchimpMarketing\ApiClient
   */
  protected $mailchimp;

  /**
   * Constructs an Api object.
   *
   * @param \Drupal\Core\Site\Settings $settings
   *   The site settings.
   */
  public function __construct(Settings $settings) {
    $this->settings = $settings;
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
