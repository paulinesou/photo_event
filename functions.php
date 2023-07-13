<?php 

// Fichiers CSS et JS

function photoevent_add_theme_scripts()
{
    // css
    wp_enqueue_style('style', get_stylesheet_uri(), array(), '1.0');

    // js
    wp_enqueue_script('script', get_template_directory_uri() . '/assets/js/script.js', '', null, true);
}

add_action('wp_enqueue_scripts', 'photoevent_add_theme_scripts');

// Menu

function photoevent_register_menus()
{
    register_nav_menus([
        'main' => 'Menu Principal',
        'footer' => 'Pied de page'
    ]);
}

add_action('init', 'photoevent_register_menus');

// Ajouter la prise en charge des images mises en avant
add_theme_support( 'post-thumbnails' );

// Ajouter automatiquement le titre du site dans l'en-tête du site
add_theme_support( 'title-tag' );