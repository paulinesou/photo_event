// MENU BURGER

var sidenavBurger = document.getElementById("myMenuBurger");
var openMenuBurger = document.getElementById("toggle")

openMenuBurger.onclick = openBurger;

function openBurger(){
  document.body.style.overflow = 'hidden';
  sidenavBurger.classList.add("active");
}

function closeBurger() {
  document.body.style.overflow = 'auto';
  sidenavBurger.classList.remove("active");
}

// CHARGER PLUS 

let currentPage = 1;
jQuery('#btn-charger-plus').on('click', function() {
  currentPage++; 

  jQuery.ajax({
    type: 'POST',
    url: 'wp-admin/admin-ajax.php',
    dataType: 'json',
    data: {
      action: 'weichie_load_more',
      paged: currentPage,
    },
    success: function (res) {
      jQuery('.galerie').append(res.html);
    }
  });
});

// FILTRES

document.addEventListener('DOMContentLoaded', function() {

  var selectElements = document.querySelectorAll('.filters_text');

  // Gestion du formulaire de filtrage
  selectElements.forEach(function(selectElement) {
    selectElement.addEventListener('change', function() {
      pageActuelle = 1;
      ajaxRequest(false); // Effectue une requête AJAX pour filtrer les images
    });
  });

  // Fonction pour effectuer une requête AJAX et mettre à jour la galerie de photos
  function ajaxRequest(chargerPlus) {

    // Sélectionne l'élément avec l'ID 'categories'
    var categorie = jQuery('#categorie');

    // Récupère l'ID de la catégorie
    var categorieTaxonomie = categorie.attr('id');

    // Récupère la valeur sélectionnée dans l'élément 'categories'
    var categorieSelection = categorie.find('option:selected').val();

    // Sélectionne l'élément avec l'ID 'format'
    var format = jQuery('#format');

    // Récupère l'ID du format
    var formatTaxonomie = format.attr('id');

    // Récupère la valeur sélectionnée dans l'élément 'format'
    var formatSelection = format.find('option:selected').val();

    // Sélectionne l'élément avec l'ID 'ordre' et récupère la valeur sélectionnée
    var ordre = jQuery('#sort-dates').find('option:selected').val();

    // Effectue une requête AJAX
    jQuery.ajax({
      type: 'POST', // Méthode de la requête
      url: 'wp-admin/admin-ajax.php', // URL du fichier WordPress AJAX
      dataType: 'html', // Type de données attendues en réponse
      data: {
        // Données à envoyer dans la requête
        action: 'filter', // Action à exécuter côté serveur
        categorieTaxonomie: categorieTaxonomie, // ID de la catégorie
        categorieSelection: categorieSelection, // Valeur sélectionnée dans la catégorie
        formatTaxonomie: formatTaxonomie, // ID du format
        formatSelection: formatSelection, // Valeur sélectionnée dans le format
        orderDirection: ordre, // Direction de tri sélectionnée
        page: pageActuelle // Numéro de page actuel (devrait être défini ailleurs dans le code)
      },
      success: function(resultat) {

        // Fonction à exécuter en cas de succès de la requête
        if (chargerPlus) {
          jQuery('.galerie').append(resultat); // Ajoute les résultats à la fin de la galerie
        } else {
          jQuery('.galerie').html(resultat); // Remplace le contenu de la galerie avec les résultats
        }

        document.querySelectorAll(".icon-plein-ecran").forEach(icon => {
          icon.addEventListener("click", afficherAlerte);
        })
      },

      error: function(result) {
        // Fonction à exécuter en cas d'erreur dans la requête
        console.warn(result); // Affiche l'erreur dans la console
      }
    });
  }
});

function afficherAlerte(){

  let lightbox = document.getElementById("lightbox");
  let lightboxImage = lightbox.querySelector(".img-lightbox img");

  lightbox.style.display = 'block';

  let srcValue ="";
  let refValue ="";
  let catValue ="";

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

  // Injecter la valeur de 'rel' dans l'attribut 'src' de l'image de la lightbox
  lightboxImage.setAttribute("src", srcValue);

  // Trouver l'élément avec la classe .lightbox-ref et .lightbox-categorie
  let lightboxRefElement = document.querySelector(".lightbox-ref");
  let lightboxCatElement = document.querySelector(".lightbox-categorie")

  // Injecter les contenus textuel dans l'élément .lightbox-ref
  lightboxRefElement.textContent = refValue;
  lightboxCatElement.textContent = catValue;

  // Précédent
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

        // Met à jour la source de l'image et les infos dans la lightbox avec la nouvelle source
        lightboxImage.setAttribute("src", srcValue);
        lightboxRefElement.textContent = refValue.textContent;
        lightboxCatElement.textContent = catValue.textContent;   
      } 
      else {
      }
    }
  });
  
  // Suivant
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
        lightboxImage.setAttribute("src", srcValue);
        lightboxRefElement.textContent = refValue.textContent;
        lightboxCatElement.textContent = catValue.textContent;
      } 
      else {
      }
    }
  });
}

// SURVOL NEXT-PREV SINGLE

// Sélection des flèches .prev et .next
const prevArrow = document.querySelector('.prev');
const nextArrow = document.querySelector('.next');

// Sélection des images .image-prev et .image-next
const imagePrev = document.querySelector('.image-prev');
const imageNext = document.querySelector('.image-next');

if (nextArrow !== null) {
  nextArrow.addEventListener('mouseenter', () => {
    imageNext.style.opacity = '1';
    imageNext.style.visibility = 'visible';
  });

  nextArrow.addEventListener('mouseleave', () => {
    imageNext.style.opacity = '0';
    imageNext.style.visibility = 'hidden';
  });
}

if (prevArrow !== null) {
  // Ajout des écouteurs d'événements pour le survol des flèches
  prevArrow.addEventListener('mouseenter', () => {
    imagePrev.style.opacity = '1';
    imagePrev.style.visibility = 'visible';
  });

  prevArrow.addEventListener('mouseleave', () => {
    imagePrev.style.opacity = '0';
    imagePrev.style.visibility = 'hidden';
  });
}

// MODALE CONTACT MENU

const modal = document.getElementById("modal");
const contactMenu = document.getElementById("menu-item-212"); 
const contactPost = document.querySelector(".btn-contact");
const contactBurger = document.getElementById("contact-burger");

contactMenu.onclick = function(event){
  modal.style.display = 'block';
  event.preventDefault();
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

if (contactPost !== null) {
  contactPost.onclick = function(){
    modal.style.display = 'block';
  }
}

if (contactBurger !== null) {
  contactBurger.onclick = function(event){
    event.preventDefault();
    modal.style.display = 'block';
  }
}

// RECUPERER REFERENCE FORMULAIRE POST

// Étape 1 : Récupérer l'élément du DOM avec la classe "ref"
const paragraph = document.querySelector('.ref-contact');

if (paragraph !== null) {
  // Étape 2 : Récupérer le contenu textuel de l'élément
  const contenuTextuel = paragraph.textContent;
  const champRef = document.getElementById('ref');

  champRef.value = contenuTextuel;
}

// TOUS DROITS RESERVES

const mention = document.getElementById("menu-item-359");

mention.onclick = function(event){
  event.preventDefault();
}