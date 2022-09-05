<?php

namespace Drupal\podcast_feed\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\File\FileUrlGenerator;
use Drupal\Core\Url;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class PodcastFeedController.
 */
class PodcastFeedController extends ControllerBase {

  /**
   * Hello.
   *
   * @return string
   *   Return Hello string.
   */
  public function index() {
    $items = [];

    $nids = \Drupal::entityQuery('node')
      ->condition('type', 'podcast')
      ->condition('status', 1)
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
      /** @var FileUrlGenerator $fileUrlGenerator */
      $fileUrlGenerator = \Drupal::service('file_url_generator');
      $taxonomy = $node->get('field_podcast')->entity;
      $image = $taxonomy->get('field_header_obrazok')->entity;
      $playtime = $node->get('field_playtime_string')->getValue();
      $items[] = [
        'title' => $node->getTitle(),
        'pubDate' => $node->getCreatedTime(),
        'link' => $node->toUrl('canonical', ['absolute' => true]),
        'guid' => $node->uuid(),
        'description' => $fieldPopis[0]['value'],
        'subtitle' => substr(strip_tags($fieldPopis[0]['value']), 0, 200),
        'encoded' => substr(strip_tags($fieldPopis[0]['value']), 0, 200),
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

}
