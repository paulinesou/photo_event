// MODALE CONTACT MENU

const modal = document.getElementById("modal");
const contactMenu = document.getElementById("menu-item-212"); 
const contactPost = document.getElementById("btn-contact");

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

const valeurDiv = document.getElementsByClassName('ref-contact').innerText;
const champInput = document.getElementById('ref');

champInput.value = valeurDiv;