<?php

namespace Drupal\zijem_vedu_pages\Controller;

use Drupal\Core\Controller\ControllerBase;
use http\Client\Request;
use Laminas\Diactoros\Response\JsonResponse;

class ZijemVeduNewsletterController extends ControllerBase {
  public const NEWSLETTER_ID = 1;
  public const NEWSLETTER_SUBSCRIPTION_SOURCE_WEBPAGE = 'webpage';
  public function subscribe() {
    $notices = [];
    $errors = [];
    $email = \Drupal::request()->get('email');

    /** @var \Drupal\Component\Utility\EmailValidator $emailValidator */
    $emailValidator = \Drupal::service('email.validator');
    /** @var \Drupal\simplenews\Subscription\SubscriptionManagerInterface $subscriptionManager */
    $subscriptionManager = \Drupal::service('simplenews.subscription_manager');

    if (!$emailValidator->isValid($email)) {
      $errors[] = 'Toto veru nevyzerá na platný e-mail...';
    }
    if ($subscriptionManager->isSubscribed($email, self::NEWSLETTER_ID)) {
      $errors[] = 'Tento e-mail už registrujeme, vďaka!';
    }
    if (empty($errors)) {
      $subscriptionManager->subscribe($email, self::NEWSLETTER_ID, false, self::NEWSLETTER_SUBSCRIPTION_SOURCE_WEBPAGE);
      $subscriptionManager->reset();
      if ($subscriptionManager->isSubscribed($email, self::NEWSLETTER_ID)) {
        $notices[] = 'Úspešne prihlásený, ďakujeme!';
      }
    }
    return new JsonResponse(['errors' => $errors, 'notices' => $notices]);
  }

  public function articles() {
    return [];
  }

  public function platforma() {
    return [];
  }

  public function about() {
    return [];
  }
}
