// LIGHTBOX

const lightbox = document.getElementById("lightbox");
const lightboxClose = document.querySelector(".lightbox-close");
const iconsEcran = document.querySelectorAll(".icon-plein-ecran");

// Fonction à exécuter lorsque l'icône est cliquée
function afficherAlerte() {
    lightbox.style.display = 'block';
    console.log("Open Lightbox");
}

// Ajout d'un gestionnaire d'événement pour le clic à chaque icône
iconsEcran.forEach(icon => {
    icon.addEventListener("click", afficherAlerte);
});

// Fermeture de la lightbox
lightboxClose.addEventListener("click", function(){
  lightbox.style.display = "none";
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


