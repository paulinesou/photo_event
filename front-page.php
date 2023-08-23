<?php get_header(); ?>

<!-- Section contenant mes filtres -->

<?php
    $terms_pic_category = get_terms(array(
        'taxonomy' => 'categorie',
        'hide_empty' => true,
    ));

    $terms_pic_formats = get_terms(array(
        'taxonomy' => 'format',
        'hide_empty' => true,
    ));

    $args = array(
        'post_type' => 'galerie',
        'orderby' => 'date',
        'order' => 'ASC',
        'posts_per_page' => 6,
        'paged' => 1,
    );
    ?>

<section id="home-filtre" class="filtre">
    <div class="filtre-cat-form">
        <form id="filter-cat" class="js-filter-form">
            <label for="categorie" class="letters-transform ">Catégories</label>
            <select name="categories" id="categorie" class="filters_text">
                <option value="">Toutes les photos</option>
                <?php
                if (!empty($terms_pic_category) && !is_wp_error($terms_pic_category)) {
                    foreach ($terms_pic_category as $individual_pic_cat) {
                        $option_value = $individual_pic_cat->slug;
                        $option_name = $individual_pic_cat->name;
                        echo '<option value="' . $option_value . '">' . $option_name . '</option>';
                    }
                } ?>
            </select>
        </form>
    
        <form id="filter-formats">
            <label for="format" class="letters-transform">Formats</label>
            <select name="format" id="format" class="filters_text">
                <option value="">Toutes les photos</option>
                <?php
                if (!empty($terms_pic_formats) && !is_wp_error($terms_pic_formats)) {
                    foreach ($terms_pic_formats as $pic_format) {
                        $format_option_value = $pic_format->slug;
                        $format_option_name = $pic_format->name;
                        echo '<option value="' . $format_option_value . '">' . $format_option_name . '</option>';
                    }
                } ?>
            </select>

        </form>
    </div>
        
    <form id="filter-date">
        <div class="filtre-tri">
            <label for="sort-by" class="letters-transform">Trier par</label>
            <select name="sort" id="sort-dates" class="filters_text">
                <option value=""></option>
                <option value="DESC">Nouveautés</option>
                <option value="ASC">Les plus anciens</option>
            </select>
        </div>
    </form>
</section>

<!-- Div contenant ma galerie photo -->

<div class="galerie">

    <?php
    $galeries = new WP_Query([
        'post_type' => 'galerie',
        'posts_per_page' => 6,
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

<?php get_footer(); ?>
