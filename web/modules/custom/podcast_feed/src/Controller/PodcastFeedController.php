<?php

namespace Drupal\podcast_feed\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Entity\EntityTypeManager;
use Drupal\Core\Entity\Query\QueryInterface;
use Drupal\Core\Entity\Query\Sql\Query;
use Drupal\Core\File\FileUrlGenerator;
use Drupal\node\Entity\Node;
use Drupal\taxonomy\Entity\Term;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class PodcastFeedController.
 */
class PodcastFeedController extends ControllerBase {

  public function __construct(
    private FileUrlGenerator $fileUrlGenerator,
    protected $entityTypeManager,
    private $urlGenerator,
    private $renderer
  )
  {
  }

  public static function create(ContainerInterface $container)
  {
    return new static(
      $container->get('file_url_generator'),
      $container->get('entity_type.manager'),
      $container->get('url_generator'),
      $container->get('renderer')
    );
  }

  /**
   * The index method returns podcast XML.
   *
   * @return \Symfony\Component\HttpFoundation\Response
   */
  public function index(): Response
  {
    $items = [];

    $nids = $this->entityTypeManager->getStorage('node')
      ->getQuery()
      ->accessCheck(TRUE)
      ->condition('type', 'podcast')
      ->condition('status', 1)
      ->condition('field_podcast.entity.field_include_in_podcast_feed', 1)
      ->sort('created', 'DESC')
      ->execute();
    $nodes = $this->entityTypeManager->getStorage('node')->loadMultiple($nids);

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
        'title' => $this->getEpisodeTitle($term, $node),
        'pubDate' => $node->getCreatedTime(),
        'link' => $node->toUrl('canonical', ['absolute' => true]),
        'guid' => $node->uuid(),
        'description' => $this->truncateDescription($fieldPopis[0]['value'], 300),
        'subtitle' => $this->truncateDescription($fieldPopis[0]['value'], 300),
        'encoded' => $this->truncateDescription($fieldPopis[0]['value'], 300),
        'filePath' => $this->fileUrlGenerator->generateAbsoluteString($file->getFileUri()),
        'fileSize' => $file->getSize(),
        'fileType' => $file->getMimeType(),
        'image' => $this->fileUrlGenerator->generateAbsoluteString($image->getFileUri()),
        'playtime' => $playtime[0]['value'],
        ];
    }

    $channel = [
      'url' => $this->urlGenerator->generateFromRoute('<front>', [], ['absolute' => true]),
      'lastBuildDate' => $lastBuildDate,
      'atomLink' => $this->urlGenerator->generateFromRoute('podcast.feed', [], ['absolute' => true]),
    ];

    $build = [
      '#theme' => 'podcast_feed',
      '#items' => $items,
      '#channel' => $channel,
      '#cache' => ['max-age' => 0],
    ];

    $output = $this->renderer->renderRoot($build);

    $response = new Response();
    $response->setContent($output);
    $response->headers->set('Content-Type', 'text/xml');

    return $response;
  }

  private function truncateDescription($text, $limit = 200): string
  {
    $append = false;
    $text = strip_tags($text);
    if (mb_strlen(mb_substr($text, 0, $limit)) < strlen($text)) {
      $append = true;
    }
    return mb_substr(html_entity_decode($text), 0, $limit) . ($append ? '...' : '');
  }

  private function getEpisodeTitle(Term $term, Node $node): string {
    return $term->getName() . ' (' . $node->get('field_cislo_epizody')->getValue()[0]['value'] . ') - ' . $node->getTitle();
  }

}
