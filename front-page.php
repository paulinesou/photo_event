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
    <button class="lightbox-close">Fermer</button>
    <button class="lightbox-next">Suivant</button>
    <button class="lightbox-prev">Précédent</button>
    <div class="lightbox-container">
        <a class="img-galerie" href="<?php the_permalink(); ?>"><?php the_post_thumbnail(); ?></a>
    </div>
</div> -->

<div class="btn-charger-plus">
    <button id="charger-plus">Charger plus</button>
</div>

<?php get_footer(); ?>
