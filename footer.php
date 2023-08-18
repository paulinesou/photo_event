<!-- Div contenant ma lightbox -->

<div id="lightbox">
    <span class="lightbox-close">&times;</span>
    <button class="lightbox-next">Suivante &rarr;</button>
	<button class="lightbox-prev">&larr; Précédente</button>
    <div class="lightbox-img">
        <a class="img-lightbox" href="<?php the_permalink();?>"><img src=""></a>
    </div>
    <div class="lightbox-info">
            <p class="lightbox-ref"><?php the_field('reference');?></p>
            <p class="lightbox-categorie">Catégorie</p>
    </div>
</div>

<!-- FOOTER -->

<footer class="site__footer">
		<?php wp_nav_menu( array( 'theme_location' => 'footer' ) ); ?>
		<?php get_template_part('template-part/modale', 'contact-menu'); ?>
	</footer>
  
	<?php wp_footer(); ?>
</body>
</html>