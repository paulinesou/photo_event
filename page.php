<?php get_header(); ?>

<div class="bloc-page page">
    <h1><?= the_title(); ?></h1>
    <div class="page__contenu">
        <?= the_content(); ?>
    </div>
</div>

<?php get_footer(); ?>
