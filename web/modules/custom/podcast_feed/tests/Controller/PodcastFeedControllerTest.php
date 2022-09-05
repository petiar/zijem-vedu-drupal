<?php

namespace Drupal\podcast_feed\Tests;

use Drupal\simpletest\WebTestBase;

/**
 * Provides automated tests for the podcast_feed module.
 */
class PodcastFeedControllerTest extends WebTestBase {


  /**
   * {@inheritdoc}
   */
  public static function getInfo() {
    return [
      'name' => "podcast_feed PodcastFeedController's controller functionality",
      'description' => 'Test Unit for module podcast_feed and controller PodcastFeedController.',
      'group' => 'Other',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function setUp() {
    parent::setUp();
  }

  /**
   * Tests podcast_feed functionality.
   */
  public function testPodcastFeedController() {
    // Check that the basic functions of module podcast_feed.
    $this->assertEquals(TRUE, TRUE, 'Test Unit Generated via Drupal Console.');
  }

}
