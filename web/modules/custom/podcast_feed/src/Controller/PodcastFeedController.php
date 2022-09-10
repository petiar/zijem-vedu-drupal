<?php

namespace Drupal\podcast_feed\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\File\FileUrlGenerator;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class PodcastFeedController.
 */
class PodcastFeedController extends ControllerBase {

  /**
   * The index method returns podcast XML.
   *
   * @return \Symfony\Component\HttpFoundation\Response
   */
  public function index() {
    /** @var FileUrlGenerator $fileUrlGenerator */
    $fileUrlGenerator = \Drupal::service('file_url_generator');
    $items = [];

    $nids = \Drupal::entityQuery('node')
      ->condition('type', 'podcast')
      ->condition('status', 1)
      ->sort('created', 'DESC')
      ->execute();
    $nodes = \Drupal\node\Entity\Node::loadMultiple($nids);

    $lastBuildDate = 0;
    foreach ($nodes as $node) {
      if ($node->getCreatedTime() > $lastBuildDate) {
        $lastBuildDate = $node->getCreatedTime();
      }
      $fieldPopis = $node->get('field_popis')->getValue();
      /** @var \Drupal\file\Entity\File $file */
      $file = $node->get('field_subor')->entity;
      /** @var \Drupal\taxonomy\Entity\Term $term */
      $term = $node->get('field_podcast')->entity;
      $image = $term->get('field_header_obrazok')->entity;
      $playtime = $node->get('field_playtime_string')->getValue();
      $items[] = [
        'podcast' => $term->getName(),
        'title' => $node->getTitle(),
        'pubDate' => $node->getCreatedTime(),
        'link' => $node->toUrl('canonical', ['absolute' => true]),
        'guid' => $node->uuid(),
        'description' => $this->truncateDescription($fieldPopis[0]['value'], 300),
        'subtitle' => $this->truncateDescription($fieldPopis[0]['value'], 300),
        'encoded' => $this->truncateDescription($fieldPopis[0]['value'], 300),
        'filePath' => $fileUrlGenerator->generateAbsoluteString($file->getFileUri()),
        'fileSize' => $file->getSize(),
        'fileType' => $file->getMimeType(),
        'image' => $fileUrlGenerator->generateAbsoluteString($image->getFileUri()),
        'playtime' => $playtime[0]['value'],
        ];
    }

    $channel = [
      'url' => \Drupal::urlGenerator()->generateFromRoute('<front>', [], ['absolute' => true]),
      'lastBuildDate' => $lastBuildDate,
      'atomLink' => \Drupal::urlGenerator()->generateFromRoute('podcast.feed', [], ['absolute' => true]),
    ];

    $build = [
      '#theme' => 'podcast_feed',
      '#items' => $items,
      '#channel' => $channel,
      '#cache' => ['max-age' => 0],
    ];

    $output = \Drupal::service('renderer')->renderRoot($build);

    $response = new Response();
    $response->setContent($output);
    $response->headers->set('Content-Type', 'text/xml');

    return $response;
  }

  function truncateDescription($text, $limit = 200) {
    $append = false;
    $text = strip_tags($text);
    if (mb_strlen(mb_substr($text, 0, $limit)) < strlen($text)) {
      $append = true;
    }
    return mb_substr(html_entity_decode($text), 0, $limit) . ($append ? '...' : '');
  }

}
