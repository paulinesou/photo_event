<?php get_header(); ?>

<div class="items item">
    <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
            <article class="galerie-single-post">
                <div class="infos">
                    <h1><?php the_title(); ?></h1>
                    <p><?php echo get_field_object('reference')['label'];?> : 
                    <span class="ref-contact"><?php the_field('reference');?></span></p>
                    <p><?php echo get_field_object('categorie')['label']; ?> :
                    <?php the_field('categorie'); ?></p>
                    <p><?php echo get_field_object('format')['label']; ?> :
                    <?php the_field('format'); ?></p>
                    <p><?php echo get_field_object('type')['label']; ?> :
                    <?php the_field('type'); ?></p>
                    <p><?php echo get_field_object('annee')['label']; ?> :
                    <?php the_field('annee'); ?></p>
                </div>
                <div class="img-post">
                        <!-- Div contenant mon image -->
                        <div class="single-similaire">
                            <?php the_post_thumbnail(); ?>
                        </div>
                            <!-- Div contenant les éléments au survol -->
                        <div class="single-image-contenu">
                            <i class="icon-plein-ecran fa-solid fa-expand"></i>
                        </div>
                    </div>
                    
                </div>
            </article>
            <div class="info-next-prev">
                <div class="info-compl">
                    <p>Cette photo vous intéresse ?</p>
                    <button class="btn btn-contact">Contact</button>
                </div>
                <?php get_template_part('template-part/next-and-prev'); ?>
            </div>
            <div class="info-similaire">
                <p>Vous aimerez aussi</p>
            
                <div class="img-article-similaire">
                <?php 
                // 1. On définit les arguments pour définir ce que l'on souhaite récupérer
                $args = array(
                'post_type' => 'any',
                'meta_key' => 'categorie',
                'meta_value' => get_field('categorie'), 
                'posts_per_page' => 2,
                'paged' => 1,
                'post__not_in'   => array( get_the_ID() ),
                );

                // 2. On exécute la WP Query
                $my_query = new WP_Query( $args );

                // 3. On lance la boucle !
                if( $my_query->have_posts() ) : while( $my_query->have_posts() ) : $my_query->the_post(); ?>

                    <div class="single-post">
                        <!-- Div contenant mon image -->
                        <div class="single-similaire">
                            <a class="" href="<?php the_permalink(); ?>"><?php the_post_thumbnail(); ?></a>
                        </div>
                            <!-- Div contenant les éléments au survol -->
                        <div class="image-contenu">
                            <i class="icon-plein-ecran fa-solid fa-expand"></i>
                            <a class="" href="<?php the_permalink(); ?>"><i class="icon-oeil fa-regular fa-eye"></a></i>
                        </div>
                    </div>

                <?php endwhile;
                endif;

                // 4. On réinitialise à la requête principale (important)
                wp_reset_postdata(); ?>
                </div>
                
                <div class="plus-photo">
                    <a href="<?php echo home_url( '/#home-filtre' ); ?>"><button class="btn btn-photo">Toutes les photos</button></a>
                </div>
            </div>
        <?php endwhile; ?>
    <?php endif; ?>
</div>

<?php get_footer(); ?>
