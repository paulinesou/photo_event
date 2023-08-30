<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <!-- Lien bibliothèque font awesome -->
    <script src="https://kit.fontawesome.com/61f1f173b3.js" crossorigin="anonymous"></script>
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
   
    <header class="header">
        <div class="nav-header">
            <a href="<?php echo home_url( '/' ); ?>">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo.png" alt="Logo de la photographe Nathalie Mota">
            </a>  
            <?php 
            wp_nav_menu([
                'menu' => 'main', 
                'container' => false, // afin d'éviter d'avoir une div autour
                'class' => 'header_menu', // class personnalisée
            ]);
            ?>

            <!-- Integration de mon template menu burger -->
            <?php get_template_part( 'template-part/menu','burger' ); ?>

        </div>

        <!-- Condition d'affichage de l'image de mon header -->
        <?php if (is_front_page()) :?>
        <div class="img-text-header">
            <img class="text-header" src="<?php echo get_template_directory_uri(); ?>/assets/images/titre_header.png" alt="Titre du header">
            <?php
                $images = array("nathalie-0.jpeg", "nathalie-1.jpeg", "nathalie-2.jpeg", "nathalie-3.jpeg", "nathalie-4.jpeg", "nathalie-5.jpeg", "nathalie-6.jpeg", "nathalie-7.jpeg", "nathalie-8.jpeg", "nathalie-9.jpeg", "nathalie-10.jpeg", "nathalie-11.jpeg", "nathalie-12.jpeg", "nathalie-13.jpeg", "nathalie-14.jpeg", "nathalie-15.jpeg");
                $key = array_rand($images);
                echo '<img class="background-header" src="'. get_template_directory_uri().'/assets/images/'. $images[$key] . '"> '; ?>

        </div>
        <?php endif; ?>
    </header>
    
<?php wp_body_open(); ?>