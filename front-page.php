<?php get_header(); ?>

<!-- Div contant mes filtres -->

<div class="filtre">
    <div class="filtre-cat-form">
        <select name="filtre-categorie">
            <option value="" selected="">Catégorie</option>
            <option value="reception">Réception</option>
            <option value="mariage">Marage</option>
            <option value="concert">Concert</option>
            <option value="television">Télévision</option>
        </select>
        <select name="filtre-format">
            <option value="" selected="">Formats</option>
            <option value="portrait">Portrait</option>
            <option value="paysage">Paysage</option>
        </select>
    </div>
    <div class="filtre-tri">
        <select name="filtre-date">
            <option value="" selected="">Trier par</option>
            <option value="asc">Les plus récentes</option>
            <option value="des">Les plus anciennes</option>
        </select>
    </div>
</div>

<!-- Div contenant ma galerie photo -->

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

<div class="charger-plus">
    <button class="btn btn-charger-plus">Charger plus</button>
</div>

<?php get_footer(); ?>
