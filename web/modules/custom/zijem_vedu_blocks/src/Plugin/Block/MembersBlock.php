<?php

namespace Drupal\zijem_vedu_blocks\Plugin\Block;

use Drupal\Component\DependencyInjection\Container;
use Drupal\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Block\BlockBase;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use GraphQL\Client;
use GraphQL\Query;
use Drupal\zijem_vedu_blocks\SolvedApiService;

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
    protected SolvedApiService $solved_api)
  {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
  }

  public static function create(\Symfony\Component\DependencyInjection\ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition)
  {
    return new static (
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('zijem_vedu_blocks.solved_api')
    );
  }

  public function build() {
    $members = $this->solved_api->getFeaturedUsers();

    return [
      '#theme' => 'members_block',
      '#members' => $members,
    ];
  }
}
