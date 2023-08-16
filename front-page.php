<?php get_header(); ?>

<!-- Div contant mes filtres -->

<div id="home-filtre" class="filtre">
    <form method="get" id="searchform" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	    <input type="hidden" name="post_type" value="galerie" />
    </form>
    <div class="filtre-cat-form">
        <select name="filtre-categorie">
            <option value="" selected="">Catégorie</option>
            <option value="categorie">Cat</option>
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
    $galeries = new WP_Query([
        'post_type' => 'galerie',
        'posts_per_page' => 12,
        // 'posts_per_page' => 2,
        'paged' => 1,
    ]);
    
    if ($galeries->have_posts()) :
    ?>
        <?php while ($galeries->have_posts()) : $galeries->the_post(); ?>
            
                <?php get_template_part('template-part/content', 'galerie-post'); ?>
        
        <?php endwhile; ?>
    <?php endif; ?>
    <?php wp_reset_postdata(); ?>
</div>

<!-- Bouton charger plus -->

<div class="charger-plus">
  <a href="#!" class="btn" id="btn-charger-plus">Charger plus</a>
</div>

<!-- <div class="btn__wrapper">
  <a href="#!" class="btn btn__primary" id="load-more">Load more</a>
</div> -->

<!-- Div contenant ma lightbox -->
<div id="lightbox">
    <span class="lightbox-close">&times;</span>
    <div class="">
        <button class="lightbox-next">Suivante &rarr;</button>
    </div>
    <div class="">
        <button class="lightbox-prev">&larr; Précédente</button>
    </div>
    <div class="lightbox-img">
        <a class="img-lightbox" href="<?php the_permalink();?>"><img src=""></a>
    </div>
    <div class="lightbox-info">
            <p class="lightbox-ref"></p>
            <p class="lightbox-categorie"></p>
    </div>
</div>

<?php get_footer(); ?>
