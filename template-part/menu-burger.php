<!-- Bouton burger -->
<input id="toggle" type="checkbox"></input>

<label for="toggle" class="hamburger">
  <div class="top-bun"></div>
  <div class="meat"></div>
  <div class="bottom-bun"></div>
</label>

<!-- Div de mon menu burger -->
<div id="myMenuBurger" class="nav menuBurger">
  <div class="nav-wrapper">
    <nav class="lienBurger">
      <a href=""<?php echo home_url( '/' ); ?>>Accueil</a><br>
      <a href="http://localhost/oc_photo_event/a-propos/">A propos</a><br>
      <a href="<?php echo get_site_url(); ?>">Contact</a><br>
    </nav>
  </div>
</div>


<!-- <div id="myMenuBurger" class="menuBurger">
  <ul class="lienBurger">
    <li><a href=""<?php echo home_url( '/' ); ?>>Accueil</a></li>
    <li><a href="http://localhost/oc_photo_event/a-propos/">A propos</a></li>
    <li><a href="<?php echo get_site_url(); ?>">Contact</a></li>
  </ul>
</div> -->