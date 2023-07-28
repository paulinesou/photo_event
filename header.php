<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    
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
        </div>
        <!-- Condition d'affichage de l'image de mon header -->
        <?php if (is_front_page()) :?>
        <div>
            <img class="text-header" src="<?php echo get_template_directory_uri(); ?>/assets/images/titre_header.png" alt="Titre du header">
            <!-- <img class="background-header" src="<?php echo get_template_directory_uri(); ?>/assets/images/nathalie-11.jpeg" alt="Photo de la photographe Nathalie Mota"> -->
            <?php
                $images = array("/assets/images/nathalie-0.jpeg", "/assets/images/nathalie-1.jpeg", "/assets/images/nathalie-2.jpeg", "/assets/images/nathalie-3.jpeg", "/assets/images/nathalie-4.jpeg", "/assets/images/nathalie-5.jpeg", "/assets/images/nathalie-6.jpeg", "/assets/images/nathalie-7.jpeg", "/assets/images/nathalie-8.jpeg", "/assets/images/nathalie-9.jpeg", "/assets/images/nathalie-10.jpeg", "/assets/images/nathalie-11.jpeg", "/assets/images/nathalie-12.jpeg", "/assets/images/nathalie-13.jpeg", "/assets/images/nathalie-14.jpeg", "/assets/images/nathalie-15.jpeg");
                $key = array_rand($images);
                echo '<img src="' . $images[$key] . '"> '; ?>

        </div>
        <?php endif; ?>
    </header>
    
    <?php wp_body_open(); ?>