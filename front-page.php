<?php get_header(); ?>

<div class="galerie">
    <?php
    $galeries = new WP_Query(['post_type' => 'galerie']);
    if ($galeries->have_posts()) :
        ?>
        <?php while ($galeries->have_posts()) : $galeries->the_post(); ?>
            <div class="galerie-post">
                <?php get_template_part('template-part/content', 'galerie-post'); ?>
            </div>
        <?php endwhile; ?>
    <?php endif; ?>
</div>

<!-- Div contenant ma lightbox -->
<!-- <div class="lightbox">
    <span class="lightbox-close">&times;</span>
    <div class="">
        <button class="lightbox-next">Suivante</button>
        <img class="lightbox-arrow-next" src="<?php echo get_template_directory_uri(); ?>/assets/icons/arrow.svg" alt="">
    </div>
    <div class="">
        <button class="lightbox-prev">Précédente</button>
        <img class="lightbox-arrow-prev" src="<?php echo get_template_directory_uri(); ?>/assets/icons/arrow.svg" alt="">
    </div>
    <div class="lightbox-container">
        <a class="img-lightbox" href="<?php the_permalink(); ?>"><?php the_post_thumbnail(); ?></a>
    </div>
</div> -->

<div class="btn-charger-plus">
    <button id="charger-plus">Charger plus</button>
</div>

<?php get_footer(); ?>
