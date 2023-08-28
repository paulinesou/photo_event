<div class="nextandprev">
    <!-- Div contenant mes deux flèches -->
    <div class="arrows">
        <?php
        // Récupère le post précédent et le post suivant
        $prevPost = get_previous_post();
        $nextPost = get_next_post();
        ?>

        <!-- Si un post précédent existe -->
        <?php if (!empty($prevPost)) {
            // Récupère l'URL de l'image mise en avant du post précédent
            $prevThumbnail = get_the_post_thumbnail_url( $prevPost->ID );
            // Récupère le lien vers le post précédent
            $prevLink = get_permalink($prevPost);
            ?>
            <!-- Div contenant ma flèche de gauche -->
            <div class="prev">
            <a href="<?php echo $prevLink; ?>">
                <i class="fas fa-arrow-left"></i>
            </a>
            </div>

        <!-- Si aucun post précédent n'existe -->
        <?php } else { ?>
            <!-- Affiche une flèche gauche (désactivée ou avec un comportement différent) -->
            <i class="fas fa-arrow-left"></i>
        <?php } ?>

        <!-- Si un post suivant existe -->
        <?php if (!empty($nextPost)) {
            // Récupère l'URL de l'image mise en avant du post suivant
            $nextThumbnail = get_the_post_thumbnail_url( $nextPost->ID );
            // Récupère le lien vers le post suivant
            $nextLink = get_permalink($nextPost);
            ?>
            <!-- Div contenant ma flèche de droite -->
            <div class="next">
            <a href="<?php echo $nextLink; ?>">
                <!-- Affiche une flèche droite -->
                <i class="fas fa-arrow-right"></i>
            </a>
            </div>

        <?php } ?>

    </div>

    <!-- Affiche l'image précédente en miniature -->
    <div class="img-arrow">
        <img class="image-prev" src="<?php echo $prevThumbnail; ?>" alt="Prévisualisation image précédente">
    </div>

    <!-- Affiche l'image suivante en miniature -->
    <div class="img-arrow">
        <img class="image-next" src="<?php echo $nextThumbnail; ?>" alt="Prévisualisation image suivante">
    </div>

</div>