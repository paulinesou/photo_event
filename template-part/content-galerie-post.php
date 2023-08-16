<div class="galerie-post">
<article>
    <?php if (get_post_type() === 'galerie') : ?>

        <!-- Div contenant mon image -->
        <div class="image-galerie">
            <a class="img-galerie" href="<?php the_permalink(); ?>"><?php the_post_thumbnail(); ?></a>
        </div>

        <!-- Div contenant les éléments au survol -->
        <div class="image-contenu">
            <i class="icon-plein-ecran fa-solid fa-expand"></i>
            <a class="" href="<?php the_permalink(); ?>"><i class="icon-oeil fa-regular fa-eye"></a></i>
            <p class="contenu-ref"><?php the_field('reference'); ?></p>
            <p class="contenu-categorie"><?php the_field('categorie'); ?></p>
        </div>

    <?php endif; ?>
</article>
    </div>