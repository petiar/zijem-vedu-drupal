<?php

namespace Drupal\zijem_vedu_mailchimp\Form;

use Drupal\Console\Bootstrap\Drupal;
use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\zijem_vedu_mailchimp\Api;
use GuzzleHttp\Exception\RequestException;
use MailchimpMarketing;
use Drupal\Component\DependencyInjection\ContainerInterface;

/**
 * Configure Zijem vedu mailchimp settings for this site.
 */
class SettingsForm extends ConfigFormBase {

  public static function create(ContainerInterface|\Symfony\Component\DependencyInjection\ContainerInterface $container) {
    return new static(
      $container->get('zijem_vedu_mailchimp.api')
    );
  }

  public function __construct(Api $mailchimpApiService) {
    $this->mailchimpApiService = $mailchimpApiService;
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'zijem_vedu_mailchimp_settings';
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return ['zijem_vedu_mailchimp.settings'];
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    if (!$this->config('zijem_vedu_mailchimp.settings')->get('api_key') ||
    !$this->config('zijem_vedu_mailchimp.settings')->get('server_prefix')) {
      $lists = [];
    }
    else {
      $lists = $this->getLists();
    }
    $form['api_key'] = [
      '#type' => 'textfield',
      '#title' => $this->t('API key'),
      '#default_value' => $this->config('zijem_vedu_mailchimp.settings')->get('api_key'),
    ];
    $form['server_prefix'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Server prefix'),
      '#default_value' => $this->config('zijem_vedu_mailchimp.settings')->get('server_prefix'),
    ];
    $form['list_id'] = [
      '#type' => 'select',
      '#title' => $this->t('Mailchimp List ID'),
      '#options' => $lists,
      '#default_value' => $this->config('zijem_vedu_mailchimp.settings')->get('list_id')
    ];
    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    parent::validateForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $this->config('zijem_vedu_mailchimp.settings')
      ->set('api_key', $form_state->getValue('api_key'))
      ->set('server_prefix', $form_state->getValue('server_prefix'))
      ->set('list_id', $form_state->getValue('list_id'))
      ->save();
    parent::submitForm($form, $form_state);
  }

  private function getLists() {
    try {
      $lists = $this->mailchimpApiService->getMailchimpApi()->lists->getAllLists();
    }
    catch (RequestException $e) {
      \Drupal::logger('mailchimp')->alert($e->getMessage());
      \Drupal::messenger()->addError($e->getMessage());
    }
    if (!$lists) {
      return [];
    }
    return array_column($lists->lists, 'name', 'id');
  }
}
