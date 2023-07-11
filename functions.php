<?php 

function photoevent_register_assets() {
    
    // Déclarer jQuery
    // wp_enqueue_script('jquery' );
    
    // Déclarer le JS
	wp_enqueue_script('photoevent', get_template_directory_uri() . '/assets/js/script.js', array( 'jquery' ), '1.0', true);
    
    // Déclarer le fichier style.css à la racine du thème
    wp_enqueue_style('photoevent', get_stylesheet_uri(), array(), '1.0');

}
add_action( 'wp_enqueue_scripts', 'photoevent_register_assets' );

// Ajouter la prise en charge des images mises en avant
add_theme_support( 'post-thumbnails' );

// Ajouter automatiquement le titre du site dans l'en-tête du site
add_theme_support( 'title-tag' );

// Déclaration de mes deux emplacements de menus
register_nav_menus( array(
	'main' => 'Menu Principal',
	'footer' => 'Bas de page',
) );