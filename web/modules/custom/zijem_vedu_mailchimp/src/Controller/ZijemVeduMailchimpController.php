<?php

namespace Drupal\zijem_vedu_mailchimp\Controller;

use Drupal\Core\Controller\ControllerBase;
use GuzzleHttp\Exception\RequestException;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * Returns responses for Žijem vedu Mailchimp Integration routes.
 */
class ZijemVeduMailchimpController extends ControllerBase {

  public function subscribe() {
    $notices = [];
    $errors = [];
    $email = \Drupal::request()->get('email');

    /** @var \Drupal\Component\Utility\EmailValidator $emailValidator */
    $emailValidator = \Drupal::service('email.validator');
    /** @var \Drupal\zijem_vedu_mailchimp\Api $mailchimpService */
    $mailchimpService = \Drupal::service('zijem_vedu_mailchimp.api');

    if (!$emailValidator->isValid($email)) {
      $errors[] = 'Toto veru nevyzerá na platný e-mail...';
    }

    if (empty($errors)) {
      $list_id = \Drupal::config('zijem_vedu_mailchimp.settings')->get('list_id');
      /** @var \GuzzleHttp\Psr7\Response $subscription */
      try {
        $mailchimpService->getMailchimpApi()->lists->addListMember($list_id, [
          'email_address' => $email,
          'status' => 'subscribed',
          'email_type' => 'html',
        ]);
        $notices[] = 'Úspešne prihlásený, ďakujeme!';
      }
      catch (RequestException $e) {
        $error = $e->getResponse()->getBody()->getContents();
        $response = json_decode($error);
        $errors[] = 'S prihlásením bol problém, skúste neskôr, prosím. Pozrieme sa na to. (Chyba: ' . $response->title . ')';
        \Drupal::logger('mailchimp')->error('Bol problém s prihlásením {email}, chyba: {error}', [
          'email' => $email,
          'error' => $error,
        ]);
      }
    }

    return new JsonResponse(['errors' => $errors, 'notices' => $notices]);
  }

}
