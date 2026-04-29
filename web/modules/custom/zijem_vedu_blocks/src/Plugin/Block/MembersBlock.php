<?php

namespace Drupal\zijem_vedu_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Cache\CacheBackendInterface;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\zijem_vedu_blocks\SolvedApiService;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Blok pre titulnú stránku úplne hore
 *
 * @Block(
 *   id="members_block",
 *   admin_label = @Translation ("Členovia Žijem vedu")
 * )
 */

class MembersBlock extends BlockBase implements ContainerFactoryPluginInterface
{
  public function __construct(
    array $configuration,
    $plugin_id,
    $plugin_definition,
    protected SolvedApiService $solved_api,
    protected CacheBackendInterface $cache,
  ) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
  }

  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('zijem_vedu_blocks.solved_api'),
      $container->get('cache.default'),
    );
  }

  public function build() {
    $cid = 'zijem_vedu_blocks:members';
    if ($cached = $this->cache->get($cid)) {
      $members = $cached->data;
    }
    else {
      try {
        $members = $this->solved_api->getFeaturedUsers();
        $this->cache->set($cid, $members, time() + 3600);
      }
      catch (\Exception $e) {
        \Drupal::logger('zijem_vedu_blocks')->error('Solved API error: @msg', ['@msg' => $e->getMessage()]);
        $members = [];
      }
    }

    return [
      '#theme' => 'members_block',
      '#members' => $members,
    ];
  }
}
