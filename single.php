<?php get_header(); ?>

<div class="items item">
    <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
            <article class="galerie-single-post">
                <div class="infos">
                    <h1><?php the_title(); ?></h1>
                    <p><?php the_field('reference'); ?></p>
                    <p><?php the_field('categorie'); ?></p>
                    <p><?php the_field('format'); ?></p>
                    <p><?php the_field('type'); ?></p>
                    <p><?php the_field('annee'); ?></p>
                </div>
                <div class="img-post">
                <?php the_post_thumbnail(); ?>
                </div>
            </article>
            <div class="info-compl">
                <p>Cette photo vous intéresse ?</p>
                <input class="btn-single-post" type="button" value="Contact">
                <?php get_template_part('template-part/next-and-prev'); ?>
            </div>
            <div class="info-similaire">
                <p>Vous aimerez aussi</p>
            </div>
        <?php endwhile; ?>
    <?php endif; ?>
</div>

<?php get_footer(); ?>
