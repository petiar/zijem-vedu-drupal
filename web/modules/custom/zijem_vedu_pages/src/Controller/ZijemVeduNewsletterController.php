<?php

namespace Drupal\zijem_vedu_pages\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Database\Log;
use http\Client\Request;
use Laminas\Diactoros\Response\JsonResponse;

class ZijemVeduNewsletterController extends ControllerBase {
  public const NEWSLETTER_ID = 1;
  public const NEWSLETTER_SUBSCRIPTION_SOURCE_WEBPAGE = 'webpage';
  public const NEWSLETTER_MAILCHIMP_LIST_ID = '0c83062f96';
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
      /*
       * Toto som dal preč, lebo ten sync s newsletterom na Drupale a na Mailchimpe nemám úplne 1:1 syncnutý, tak nech to nepletie.
      if ($subscriptionManager->isSubscribed($email, self::NEWSLETTER_ID)) {
        $errors[] = 'Tento e-mail už registrujeme, vďaka!';
      }
      */
      if (empty($errors)) {
        // Oh, thank you, Mailchimp, that was easy! ;-)
        $result = mailchimp_subscribe(self::NEWSLETTER_MAILCHIMP_LIST_ID, $email, null, [], true);
        \Drupal::logger('zijem-vedu-newsletter')->notice('Prihlásenie do Mailchimpu pre {email}', ['email' => $email]);
        if (empty($result)) {
          \Drupal::logger('zijem-vedu-newsletter')->error('Problém s prihlásením {email}', ['email' => $email]);
        }
        $subscriptionManager->subscribe($email, self::NEWSLETTER_ID, FALSE, self::NEWSLETTER_SUBSCRIPTION_SOURCE_WEBPAGE);
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
