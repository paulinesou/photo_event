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
        <div class="img-header">
            <img class="text-header" src="<?php echo get_template_directory_uri(); ?>/assets/images/titre_header.png" alt="Titre du header">
            <img class="background-header" src="<?php echo get_template_directory_uri(); ?>/assets/images/nathalie-11.jpeg" alt="Photo de la photographe Nathalie Mota">
        
        </div>

    </header>
    
    <?php wp_body_open(); ?>