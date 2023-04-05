<?php

namespace Drupal\zijem_vedu_mailchimp\Controller;

use Drupal\Component\Utility\EmailValidator;
use Drupal\Core\Controller\ControllerBase;
use Drupal\zijem_vedu_mailchimp\Api;
use GuzzleHttp\Exception\RequestException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * Returns responses for Žijem vedu Mailchimp Integration routes.
 */
class ZijemVeduMailchimpController extends ControllerBase {
  public function __construct(
    protected EmailValidator $emailValidator,
    protected Api $mailchimpService
  ) {}

  public static function create(ContainerInterface $container)
  {
    return new static (
      $container->get('email.validator'),
      $container->get('zijem_vedu_mailchimp.api')
    );
  }

  public function subscribe(Request $request) {
    $notices = [];
    $errors = [];
    $email = $request->get('email');

    if (!$this->emailValidator->isValid($email)) {
      $errors[] = 'Toto veru nevyzerá na platný e-mail...';
    }

    if (empty($errors)) {
      $list_id = \Drupal::config('zijem_vedu_mailchimp.settings')->get('list_id');
      /** @var \GuzzleHttp\Psr7\Response $subscription */
      try {
        $this->mailchimpService->getMailchimpApi()->lists->addListMember($list_id, [
          'email_address' => $email,
          'status' => 'subscribed',
          'email_type' => 'html',
          'merge_fields' => [
            'FNAME' => 'Web',
            'LNAME'=> 'Subscriber',
            'COUNTRY' => 'SK',
          ],
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
