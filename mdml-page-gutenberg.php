<?php
/**
 * Plugin Name:       MDML Page
 * Plugin URI:        https://www.creativeapps.fr/
 * Description:       Permet l&#39;ajout d&#39;un bloc Gutenberg MDML page dans une page.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Creative Apps
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       mdml-page-gutenberg
 * Domain Path:       /languages
 *
 * @package           creativeapps
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function creativeapps_mdml_page_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'creativeapps_mdml_page_block_init' );
