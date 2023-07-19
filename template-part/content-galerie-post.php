<article>
    <?php if (get_post_type() === 'galerie') : ?>
        <a class="img-galerie" href="<?php the_permalink(); ?>"><?php the_post_thumbnail(); ?></a>
    <?php endif; ?>
</article>