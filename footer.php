<footer class="site__footer">
		<?php wp_nav_menu( array( 'theme_location' => 'footer' ) ); ?>
		<?php get_template_part('template-part/modale', 'contact-menu'); ?>
		<?php get_template_part('template-part/modale', 'contact-post'); ?>
	</footer>
  
	<?php wp_footer(); ?>
</body>
</html>