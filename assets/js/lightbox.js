// LIGHTBOX

document.addEventListener("DOMContentLoaded", function() {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = lightbox.querySelector(".img-lightbox img");
    const lightboxClose = document.querySelector(".lightbox-close");
    const iconsEcran = document.querySelectorAll(".icon-plein-ecran");

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
    let srcValue = imageElement.getAttribute("src");
    console.log("Valeur de rel :", relValue);
    console.log("Valeur du src ;", srcValue);

    // Récupération Référence et Catégorie

    // let refElement = parentImageGalerie.querySelector("p");
    // let refValue = refElement.getAttribute("lightbox-ref");
    // lightboxImage.setAttribute("p", refValue);

    // let refImage = document.querySelector(".contenu-ref");
    // let categorieImage = document.querySelector(".contenu-categorie");
    // let paragrapheRefLightbox = lightbox.querySelector(".lightbox-ref");
    // let paragrapheCatLightbox = lightbox.querySelector(".lightbox-categorie");
    
    // const contenuRefLightbox = refImage.textContent;
    // paragrapheRefLightbox.value = contenuRefLightbox;

    // const contenuCatLightbox = categorieImage.textContent;
    // paragrapheCatLightbox.value = contenuCatLightbox;
   

    // Injecter la valeur de 'rel' dans l'attribut 'src' de l'image de la lightbox
    lightboxImage.setAttribute("src", srcValue);
  }

  // Ajout d'un gestionnaire d'événement pour le clic à chaque icône
  iconsEcran.forEach(icon => {
    icon.addEventListener("click", afficherAlerte);
  });
    // Fermeture de la lightbox
    lightboxClose.addEventListener("click", function(){
      lightbox.style.display = "none";
    });
});