<?php 

// Fichiers CSS et JS

function photoevent_add_theme_scripts()
{
  // css
  wp_enqueue_style('style', get_stylesheet_uri(), array(), '1.0');

  // Déclarer jQuery
  wp_enqueue_script('jquery' );
    
  // Déclarer le JS
  wp_enqueue_script('script', get_template_directory_uri() . '/assets/js/script.js', array( 'jquery' ), '1.0', true);
  wp_enqueue_script('lightbox', get_template_directory_uri() . '/assets/js/lightbox.js', array( 'jquery' ), '1.0', true);
}

add_action('wp_enqueue_scripts', 'photoevent_add_theme_scripts');

// Déclaration des Menus

function photoevent_register_menus() {
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
      'posts_per_page' => 6,
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
    } 
    else {
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

add_action('wp_ajax_my_filter', 'my_filter_function'); // Utilisez 'wp_ajax' pour les utilisateurs connectés
add_action('wp_ajax_nopriv_my_filter', 'my_filter_function'); // Utilisez 'wp_ajax_nopriv' pour les utilisateurs non connectés

function my_filter_function() {
  if (isset($_GET['category'])) {
    global $wpdb;
    $category_filter = sanitize_text_field($_GET['category']);
    $query_args = array(
      'post_type' => 'galerie',
      'posts_per_page' => -1,
      'meta_query' => array(
        array(
          'key' => 'categorie',
          'value' => $category_filter,
          'compare' => '=',
        ),
      ),
    );

    $query = new WP_Query($query_args);

    if ($query->have_posts()) {
      while ($query->have_posts()) {
        $query->the_post();
        echo '<h2>' . get_the_title() . '</h2>';
      }
      wp_reset_postdata();
      } 
      else {
    }
    die();
  }
}

// Fonction qui va effectuer la requête AJAX pour filtrer les résultats
function filter() {

  if($_POST['categorieSelection']==""){
    $_POST['categorieSelection']="all";
  }

  if($_POST['formatSelection']==""){
    $_POST['formatSelection']="all";
  }

  // Crée une nouvelle requête WP_Query en fonction des paramètres reçus par la requête AJAX
  $requeteAjax = new WP_Query(array(

    'post_type' => 'galerie', // Type de publication personnalisé
    'orderby' => 'date', // Ordonner par date
    'order' => $_POST['orderDirection'], // Direction de tri (reçue depuis la requête AJAX)
    'posts_per_page' => 6, // Nombre d'articles à afficher par page
    'paged' => $_POST['page'], // Page actuelle (reçue depuis la requête AJAX)
    'tax_query' =>
    array(
      'relation' => 'AND', // Relation entre les clauses taxonomiques (ET)
      // Si la catégorie n'est pas "all", ajoute une clause de taxonomie pour la catégorie
      $_POST['categorieSelection'] != "all" ?
      array(
        'taxonomy' => $_POST['categorieTaxonomie'], // Taxonomie pour la catégorie
        'field' => 'slug', // Comparaison basée sur le slug
        'terms' => $_POST['categorieSelection'], // Valeur sélectionnée pour la catégorie
      )
      : '',
      // Si le format n'est pas "all", ajoute une clause de taxonomie pour le format
      $_POST['formatSelection'] != "all" ?
      array(
        'taxonomy' => $_POST['formatTaxonomie'], // Taxonomie pour le format
        'field' => 'slug', // Comparaison basée sur le slug
        'terms' => $_POST['formatSelection'], // Valeur sélectionnée pour le format
      )
      : '',
    )
  ));

  // Appelle la fonction 'afficherImages' avec la requête AJAX et un booléen 'true'
  afficherImages($requeteAjax, true);

}


// Ajoute l'action 'wp_ajax_nopriv_filter' pour les utilisateurs non connectés
add_action('wp_ajax_nopriv_filter', 'filter');

// Ajoute l'action 'wp_ajax_filter' pour les utilisateurs connectés
add_action('wp_ajax_filter', 'filter');

function afficherImages($galerie, $exit) {

  if($galerie->have_posts()) {
    while ($galerie->have_posts()) { ?>
      <?php $galerie->the_post(); ?>
      <div class="galerie-post">
        <article>
          <!-- Div contenant mon image -->
          <div class="image-galerie">
            <a class="img-galerie" href="<?php the_permalink(); ?>"><?php the_post_thumbnail(); ?></a>
          </div>
          <!-- Div contenant les éléments au survol -->
          <div class="image-contenu">
            <i class="icon-plein-ecran fa-solid fa-expand"></i>
            <a class="" href="<?php the_permalink(); ?>"><i class="icon-oeil fa-regular fa-eye"></a></i>
            <p class="contenu-ref"><?php the_field('reference'); ?></p>
            <p class="contenu-categorie"><?php the_field('categorie'); ?></p>
          </div>
        </article>
      </div>        
      <?php
    }
  }
  else {
  }
  
  wp_reset_postdata();
  if ($exit) {
    exit(); 
  }
}
