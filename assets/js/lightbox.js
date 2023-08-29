// LIGHTBOX

document.addEventListener("DOMContentLoaded", function() {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = lightbox.querySelector(".img-lightbox img");
    const lightboxClose = document.querySelector(".lightbox-close");
    const iconsEcran = document.querySelectorAll(".icon-plein-ecran");

    let srcValue ="";
    let refValue ="";
    let catValue ="";

    // Fonction à exécuter lorsque n'importe quelle icône est cliquée
  function afficherAlerte(event) {
    lightbox.style.display = 'block';

    // Récupérer la valeur de l'attribut 'rel' de l'icône cliquée
    let iconClicked = event.target;
    let relValue = iconClicked.getAttribute("rel");
    let parentImageGalerie = event.target.parentElement.parentElement; // Remonter deux niveaux parents
    console.log(parentImageGalerie);

    // Trouver l'élément img à l'intérieur de l'élément parent
    let  imageElement = parentImageGalerie.querySelector("img");
    srcValue = imageElement.getAttribute("src");
    console.log("Valeur de rel :", relValue);
    console.log("Valeur du src ;", srcValue);

    // Trouver l'élément à l'intérieur de l'élément parent
    let contenuRefElement = parentImageGalerie.querySelector(".contenu-ref");
    let contenuCatElement = parentImageGalerie.querySelector(".contenu-categorie");

    // Récupérer le contenu textuel de l'élément .contenu-ref et .contenu-categorie
    refValue = contenuRefElement.textContent;
    catValue = contenuCatElement.textContent;

    console.log("Valeur de rel :", relValue);
    console.log("Valeur du src ;", srcValue);
    console.log("Valeur de ref ;", refValue);
    console.log("Valeur de cat ;", catValue);

    // Injecter la valeur de 'rel' dans l'attribut 'src' de l'image de la lightbox
    lightboxImage.setAttribute("src", srcValue);

    // Trouver l'élément avec la classe .lightbox-ref et .lightbox-categorie
    let lightboxRefElement = document.querySelector(".lightbox-ref");
    let lightboxCatElement = document.querySelector(".lightbox-categorie")

    // Injecter les contenus textuel dans l'élément .lightbox-ref
    lightboxRefElement.textContent = refValue;
    lightboxCatElement.textContent = catValue;
  }

  // Ajout d'un gestionnaire d'événement pour le clic à chaque icône
  iconsEcran.forEach(icon => {
    icon.addEventListener("click", afficherAlerte);
  });
    // Fermeture de la lightbox
    lightboxClose.addEventListener("click", function(){
      lightbox.style.display = "none";
    });

   // Précédent
  // Sélectionne l'élément du bouton précédent dans la lightbox
  var lightboxPrev = document.querySelector('.lightbox-prev');

  // Ajoute un écouteur d'événements pour le clic sur le bouton précédent
  lightboxPrev.addEventListener('click', function() {
    // Trouve tous les conteneurs .galerie-post
      var allGaleriePosts = document.querySelectorAll('.galerie-post');
  
      // Trouve l'élément .galerie-post de l'image actuellement affichée
      var currentGaleriePost = null;
      for (var i = 0; i < allGaleriePosts.length; i++) {
          var galeriePost = allGaleriePosts[i];
          var image = galeriePost.querySelector('.img-galerie img');
          var imageSrc = image.getAttribute('src');
          var imageRef = galeriePost.querySelector('.contenu-ref');
          var imageCat = galeriePost.querySelector('.contenu-categorie');
  
          // Vérifie si l'attribut 'src' de l'image correspond à la valeur de srcValue
          if (imageSrc === srcValue) {
              currentGaleriePost = galeriePost; // Définit l'élément galerie-post actuel
              break; // Sort de la boucle dès que l'élément est trouvé
          }

          if (imageRef === refValue) {
            currentGaleriePost = galeriePost;
              break;
          }

          if (imageCat === catValue) {
            currentGaleriePost = galeriePost;
              break;
          }
      }
  
      // Si nous avons trouvé l'élément .galerie-post actuel
      if (currentGaleriePost) {
          // Trouve l'élément .galerie-post précédent
          var prevGaleriePost = currentGaleriePost.previousElementSibling;
  
          // Si l'élément précédent existe
          if (prevGaleriePost) {
              // Trouve l'image dans l'élément .galerie-post précédent
              var prevImage = prevGaleriePost.querySelector('.img-galerie img');
  
              // Récupère la source de l'image précédente
              var prevImageSrc = prevImage.getAttribute('src');

              // Récupère la référence  et la catégorie de l'image précédente
              var prevImageRef = prevGaleriePost.querySelector('.contenu-ref');
              var prevImageCat = prevGaleriePost.querySelector('.contenu-categorie');
  
              // Met à jour la valeur de srcValue avec la source de l'image précédente
              srcValue = prevImageSrc;

              // Met à jour la valeur de refValue
              refValue = prevImageRef;
              catValue = prevImageCat;
  
              // Affiche un message dans la console avec la nouvelle valeur de srcValue
              console.log('Nouvelle valeur de srcValue :', srcValue);
              console.log('Nouvelle valeur de refValue :', refValue);
              console.log('Nouvelle valeur de catValue :', catValue);
  
              // Met à jour la source de l'image et les infos dans la lightbox avec la nouvelle source
              lightboxImage.setAttribute("src", srcValue);
              lightboxRefElement.textContent = refValue;
              lightboxCatElement.textContent = catValue;
          } else {
              console.log("C'est la première image, il n'y a pas d'image précédente.");
          }
      }
  });
  
  var lightboxNext = document.querySelector('.lightbox-next');
  
  lightboxNext.addEventListener('click', function() {
      var allGaleriePosts = document.querySelectorAll('.galerie-post'); // Trouver tous les conteneurs galerie-post
  
      // Trouver l'élément .galerie-post de l'image actuellement affichée
      var currentGaleriePost = null;
      for (var i = 0; i < allGaleriePosts.length; i++) {
          var galeriePost = allGaleriePosts[i];
          var image = galeriePost.querySelector('.img-galerie img');
          var imageSrc = image.getAttribute('src');
          var imageRef = galeriePost.querySelector('.contenu-ref')
          var imageCat = galeriePost.querySelector('.contenu-categorie')
  
          if (imageSrc === srcValue) {
              currentGaleriePost = galeriePost;
              break;
          }

          if (imageRef === refValue) {
            currentGaleriePost = galeriePost;
              break;
          }

          if (imageCat === catValue) {
            currentGaleriePost = galeriePost;
              break;
          }
      }
  
      // Si nous avons trouvé l'élément .galerie-post actuel
      if (currentGaleriePost) {
          var nextGaleriePost = currentGaleriePost.nextElementSibling; // Trouver l'élément suivant
  
          if (nextGaleriePost) {
              var nextImage = nextGaleriePost.querySelector('.img-galerie img'); // Trouver l'image suivante
              var nextImageSrc = nextImage.getAttribute('src'); // Récupérer la source de l'image suivante
              var nextImageRef = nextGaleriePost.querySelector('.contenu-ref');
              var nextImageCat = nextGaleriePost.querySelector('.contenu-categorie');
  
              // Mettre à jour la valeur de srcValue avec la source de l'image suivante
              srcValue = nextImageSrc;
              refValue = nextImageRef;
              catValue = nextImageCat;
  
              // Faire autre chose avec la nouvelle valeur de srcValue
              console.log('Nouvelle valeur de srcValue :', srcValue);
              lightboxImage.setAttribute("src", srcValue);
              lightboxRefElement.textContent = refValue;
              lightboxCatElement.textContent = catValue;

          } else {
              console.log("C'est la dernière image, il n'y a pas d'image suivante.");
          }
      }
  });
});