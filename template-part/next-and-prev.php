<div class="nextandprev">
    <div class="img-arrow">
        <a class="image-next-prev" href="<?php the_permalink(); ?>"><?php the_post_thumbnail(); ?></a>
    </div>
    <div class="arrows">
        <div class="next">
            <?php next_post_link('%link','<i class="fas fa-arrow-left"></i>'); ?>
        </div>
        <div class="prev">
            <?php previous_post_link('%link', '<i class="fas fa-arrow-right"></i>'); ?>
        </div>
    </div>
</div>