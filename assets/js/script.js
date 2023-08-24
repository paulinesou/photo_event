// MENU BURGER

var sidenavBurger = document.getElementById("myMenuBurger");
var openBtnBurger = document.getElementById("openBtnBurger");
var closeBtnBurger = document.getElementById("closeBtnBurger");

openBtnBurger.onclick = openNav;
closeBtnBurger.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenavBurger.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenavBurger.classList.remove("active");
}

// CHARGER PLUS 

let currentPage = 1;
jQuery('#btn-charger-plus').on('click', function() {
  currentPage++; 
  console.log('hello');

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

      // Affiche une alerte pour indiquer que la fonction AJAX a été déclenchée
      // alert("ajax fonction");

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

      console.log("categorie : "+categorie);
      console.log("categorieTaxonomie : "+categorieTaxonomie);
      console.log("categorieSelection : "+categorieSelection);
      console.log("format : "+format);
      console.log("formatTaxonomie : "+formatTaxonomie);
      console.log("formatSelection : "+formatSelection);
      console.log("ordre : "+ordre);

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

            // alert("bravo");
              console.log("resultat : "+resultat);

              // Fonction à exécuter en cas de succès de la requête
              if (chargerPlus) {
                  jQuery('.galerie').append(resultat); // Ajoute les résultats à la fin de la galerie
              } else {
                  jQuery('.galerie').html(resultat); // Remplace le contenu de la galerie avec les résultats
              }
          },
          error: function(result) {
            // alert("échec");
              // Fonction à exécuter en cas d'erreur dans la requête
              console.warn(result); // Affiche l'erreur dans la console
          }
      });
  }
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