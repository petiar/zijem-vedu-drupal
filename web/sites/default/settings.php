<?php

/**
 * Salt for one-time login links, cancel links, form tokens, etc.
 */
$settings['hash_salt'] = '5sfN9g5oHTdyUyqf00l4PgnPDO1H1Iw3Xvmp6CEtZDe_amifyl07Tl12gctxqvkkNJlQt8OdBg';

/**
 * Access control for update.php script.
 */
$settings['update_free_access'] = FALSE;

/**
 * Load services definition file.
 */
$settings['container_yamls'][] = $app_root . '/' . $site_path . '/services.yml';

/**
 * The default list of directories that will be ignored by Drupal's file API.
 */
$settings['file_scan_ignore_directories'] = [
  'node_modules',
  'bower_components',
];

/**
 * The default number of entities to update in a batch process.
 */
$settings['entity_update_batch_size'] = 50;

/**
 * Entity update backup.
 */
$settings['entity_update_backup'] = TRUE;

/**
 * Node migration type.
 */
$settings['migrate_node_migrate_type_classic'] = FALSE;

$databases['default']['default'] = array (
  'database' => 'drupal_zijem_vedu',
  'username' => 'drupal_zijem_ved',
  'password' => 'Cf5-\Q]q0T',
  'prefix' => '',
  'host' => 'mariadb103.r1.websupport.sk',
  'port' => '3313',
  'namespace' => 'Drupal\\mysql\\Driver\\Database\\mysql',
  'driver' => 'mysql',
  'autoload' => 'core/modules/mysql/src/Driver/Database/mysql/',
);
$settings['config_sync_directory'] = 'sites/default/files/config_xy8dytZWsgb-iK5W_zAfsjf8BCOH0FBcXfsSziJKfAcLwNXCLcl2RQvIdB-liwra-1UBK0IOkA/sync';

/**
 * Load local development override configuration, if available.
 */

if (file_exists($app_root . '/' . $site_path . '/settings.local.php')) {
  include $app_root . '/' . $site_path . '/settings.local.php';
}
