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

    // Trouver l'élément img à l'intérieur de l'élément parent
    let  imageElement = parentImageGalerie.querySelector("img");
    let srcValue = imageElement.getAttribute("src");
    console.log("Valeur de rel :", relValue);
    console.log("Valeur du src ;", srcValue);

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

// MODALE CONTACT MENU

const modal = document.getElementById("modal");
const contactMenu = document.getElementById("menu-item-212"); 
const contactPost = document.querySelector(".btn-contact");

contactMenu.onclick = function(event){
    modal.style.display = 'block';
    event.preventDefault();
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

contactPost.onclick = function(){
    modal.style.display = 'block';
}

// RECUPERER REFERENCE FORMULAIRE POST

// Étape 1 : Récupérer l'élément du DOM avec la classe "ref"
const paragraph = document.querySelector('.ref-contact');

// Étape 2 : Récupérer le contenu textuel de l'élément
const contenuTextuel = paragraph.textContent;
const champRef = document.getElementById('ref');

champRef.value = contenuTextuel;

// CHARGER PLUS 

// let currentPage = 1;
// $('#btn-charger-plus').on('click', function() {
//   currentPage++; // Do currentPage + 1, because we want to load the next page
//   $.ajax({
//     type: 'POST',
//     url: '/wp-admin/admin-ajax.php',
//     dataType: 'html',
//     data: {
//       action: 'weichie_load_more',
//       paged: currentPage,
//     },
//     success: function (res) {
//       $('.publication-list').append(res);
//     }
//   });
// });

