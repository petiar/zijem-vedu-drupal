<?php

namespace Drupal\podcast_feed\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\File\FileUrlGeneratorInterface;
use Drupal\Core\Render\RendererInterface;
use Drupal\Core\Routing\UrlGeneratorInterface;
use Drupal\node\Entity\Node;
use Drupal\taxonomy\Entity\Term;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class PodcastFeedController extends ControllerBase {

  public function __construct(
    private readonly FileUrlGeneratorInterface $fileUrlGenerator,
    private readonly UrlGeneratorInterface $urlGenerator,
    private readonly RendererInterface $renderer,
  ) {}

  public static function create(ContainerInterface $container): static {
    return new static(
      $container->get('file_url_generator'),
      $container->get('url_generator'),
      $container->get('renderer'),
    );
  }

  public function index(Request $request): Response {
    $nids = $this->entityTypeManager()->getStorage('node')
      ->getQuery()
      ->accessCheck(TRUE)
      ->condition('type', 'podcast')
      ->condition('status', 1)
      ->condition('field_podcast.entity.field_include_in_podcast_feed', 1)
      ->sort('created', 'DESC')
      ->execute();

    $nodes = $this->entityTypeManager()->getStorage('node')->loadMultiple($nids);

    $items = [];
    $lastBuildDate = 0;

    foreach ($nodes as $node) {
      /** @var \Drupal\file\Entity\File|null $file */
      $file = $node->get('field_subor')->entity;
      /** @var \Drupal\taxonomy\Entity\Term|null $term */
      $term = $node->get('field_podcast')->entity;
      if (!$file || !$term) {
        continue;
      }

      $created = $node->getCreatedTime();
      if ($created > $lastBuildDate) {
        $lastBuildDate = $created;
      }

      $image = $term->get('field_header_obrazok')->entity;
      $fieldPopis = $node->get('field_popis')->getValue();
      $playtime = $node->get('field_playtime_string')->getValue();
      $description = !empty($fieldPopis[0]['value']) ? $this->truncateDescription($fieldPopis[0]['value'], 300) : '';

      $items[] = [
        'podcast'   => $term->getName(),
        'title'     => $this->getEpisodeTitle($term, $node),
        'pubDate'   => $created,
        'link'      => $node->toUrl('canonical', ['absolute' => TRUE]),
        'guid'      => $node->uuid(),
        'description' => $description,
        'filePath'  => $this->fileUrlGenerator->generateAbsoluteString($file->getFileUri()),
        'fileSize'  => $file->getSize(),
        'fileType'  => $file->getMimeType(),
        'image'     => $image ? $this->fileUrlGenerator->generateAbsoluteString($image->getFileUri()) : '',
        'playtime'  => $playtime[0]['value'] ?? '',
      ];
    }

    // Podpora podmienečného GET — vráti 304 ak sa feed nezmenil.
    $etag = md5($lastBuildDate . count($items));
    if ($request->headers->get('If-None-Match') === $etag) {
      return new Response('', Response::HTTP_NOT_MODIFIED);
    }

    $build = [
      '#theme' => 'podcast_feed',
      '#items' => $items,
      '#channel' => [
        'url'           => $this->urlGenerator->generateFromRoute('<front>', [], ['absolute' => TRUE]),
        'lastBuildDate' => $lastBuildDate,
        'atomLink'      => $this->urlGenerator->generateFromRoute('podcast.feed', [], ['absolute' => TRUE]),
        'artworkUrl'    => $request->getSchemeAndHttpHost() . '/themes/custom/zijem_vedu/img/podcast-header.png',
      ],
      '#cache' => [
        'max-age' => 3600,
        'tags'    => ['node_list:podcast'],
      ],
    ];

    $output = $this->renderer->renderRoot($build);

    $response = new Response($output);
    $response->headers->set('Content-Type', 'application/rss+xml; charset=UTF-8');
    $response->headers->set('ETag', $etag);
    $response->headers->set('Last-Modified', gmdate('D, d M Y H:i:s', $lastBuildDate) . ' GMT');
    $response->headers->set('Cache-Control', 'public, max-age=3600');

    return $response;
  }

  private function truncateDescription(string $text, int $limit = 200): string {
    $text = strip_tags(html_entity_decode($text));
    if (mb_strlen($text) <= $limit) {
      return $text;
    }
    return mb_substr($text, 0, $limit) . '...';
  }

  private function getEpisodeTitle(Term $term, Node $node): string {
    $epizody = $node->get('field_cislo_epizody')->getValue();
    $number = !empty($epizody[0]['value']) ? ' (' . $epizody[0]['value'] . ')' : '';
    return $term->getName() . $number . ' - ' . $node->getTitle();
  }

}