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
  currentPage++; // Do currentPage + 1, because we want to load the next page
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