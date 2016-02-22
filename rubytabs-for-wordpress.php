<?php
/**
 * RubyTabs WordPress Plugin
 * @package         RubyTabs
 * @author          HaiBach
 * @link            http://haibach.net/rubytabs
 *
 *
 * Plugin Name:     RubyTabs Insert Scripts
 * Plugin URI:      http://haibach.net/rubytabs
 * Description:     RubyTabs is one of best Tabs/Slider plug-in when integrated touch gestrue swipe, responsive, lazyload....
 * Version:         1.02
 * Author:          HaiBach
 * Author URI:      haibach.net
 * Tested up to:    4.4
 */




/**
 * CHECK FIRST!
 *  + Kiem tra plugin co chay trong wordpress -> kiem tra bien wpinc
 *  + Kiem tra wordpress co upgrading hay khong -> loai bo rubytabs loading
 */
if( !defined('WPINC') ) die();
if( defined('WP_INSTALLING') && WP_INSTALLING ) return;







/**
 * DANG KI VA LOAI BO PLUGIN
 */
/* ACTIVED */
function rt01_activation() {

    $rubytabs = array(
        'info'          => array(
                            'version'       => '1.02',
                            'author'        => 'HaiBach',
                            'description'   => 'RubyTabs for wordpress' )
    );

    // DANG KI HOAC CAP NHAT OPTIONS CHINH RUBYTABS
    update_option('rubytabs', $rubytabs, true);
}

/* DEACTIVED */
function rt01_deactivation() {

    // Xoa options
    delete_option('rubytabs');
}

register_activation_hook(__FILE__, 'rt01_activation');
register_deactivation_hook(__FILE__, 'rt01_deactivation');








/**
 * INSERT SCRIPTS & STYLES
 * Neu khong hien thi phien ban version thi verion bang NULL
 */
function rt01register_scripts() {

    // Bien khoi tao va shortcut ban dau
    $version = get_option('rubytabs')['info']['version'];

    wp_register_style('rt01css-core', plugins_url('/ruby/rubytabs.css', __FILE__), array(), $version);
    wp_register_style('r01css-animate', plugins_url('/ruby//ruby.animate.css', __FILE__), array(), $version);

    wp_register_script('rt01js-header', plugins_url('/ruby/rubytabs.js', __FILE__), array(), $version);
    wp_register_script('rt01js-footer', plugins_url('/ruby/rubytabs.js', __FILE__), array(), $version, true);
}

// CHEN STYLE + SCRIPT VAO TRANG FRONTS CUA THEME 
function rt01scripts_page_front() {
    global $post;

    // Kiem tra doi tuong dc ke thua` cua class WP_Post
    // Kiem tra noi dung trong Post co chua shortcode hay khong
    // Kiem tra trong trang co' ton` tai. function 'rubytabs' hay khong
    // if( !(is_a($post, 'WP_Post') && (has_shortcode($post->post_content, 'rubytabs') || function_exists('rubytabs'))) ) return;
    if( !is_a($post, 'WP_Post') ) return;


    // Script se~ chen` vao trong trang neu co' rubytabs
    wp_enqueue_style('rt01css-core');
    wp_enqueue_style('r01css-animate');   // Kiem tra co' chen` hay khong
    wp_enqueue_script('rt01js-footer');
}

// CHEN STYLE + SCRIPT VAO TRANG RUBYTABS SETUP
function rt01scripts_page_rubytabs() {
    // Kiem tra rubytabs co' chen` vao chua !!! quan trong --> tranh xung dot
    wp_enqueue_style('rt01css-core');
    wp_enqueue_style('r01css-animate');
    wp_enqueue_script('rt01js-footer');;
}

add_action('init', 'rt01register_scripts');
add_action('wp_enqueue_scripts', 'rt01scripts_page_front', 11);



