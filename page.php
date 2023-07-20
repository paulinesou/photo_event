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

<?php get_footer(); ?>
