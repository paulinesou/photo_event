<?php 

// Fichiers CSS et JS

function photoevent_add_theme_scripts()
{
    // css
    wp_enqueue_style('style', get_stylesheet_uri(), array(), '1.0');

    // js
    // wp_enqueue_script('script', get_template_directory_uri() . '/assets/js/script.js', '', null, true);
        // Déclarer jQuery
        wp_enqueue_script('jquery' );
    
        // Déclarer le JS
        wp_enqueue_script( 
            'script', 
            get_template_directory_uri() . '/assets/js/script.js', 
            array( 'jquery' ), 
            '1.0', 
            true
        );
    
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

// CHARGER PLUS

  function weichie_load_more() {
    $ajaxposts = new WP_Query([
      'post_type' => 'galerie',
      'posts_per_page' => 12,
      'paged' => $_POST['paged'],
    ]);
  
    $response = '';
    $max_pages = $ajaxposts->max_num_pages;
  
    if($ajaxposts->have_posts()) {
      ob_start();
      while($ajaxposts->have_posts()) : $ajaxposts->the_post();
          $response .= get_template_part('template-part/content', 'galerie-post');
      endwhile;
      $output = ob_get_contents();
      ob_end_clean();
    } else {
      $response = '';
    }
  
    $result = [
      'max' => $max_pages,
      'html' => $output,
    ];
  
    echo json_encode($result);
    exit;
  }
  add_action('wp_ajax_weichie_load_more', 'weichie_load_more');
  add_action('wp_ajax_nopriv_weichie_load_more', 'weichie_load_more');

// FILTRE