// MODALE CONTACT MENU

let modalMenu = document.getElementById("modalMenu");
let contactMenu = document.getElementById("menu-item-212"); 

contactMenu.onclick = function(event){
    modalMenu.style.display = 'block';
    event.preventDefault();
}

window.onclick = function(event) {
    if (event.target == modalMenu) {
        modalMenu.style.display = "none";
    }
}

// MODALE CONTACT PAGE POST

let modalPost = document.getElementById("modalPost");
let contactPost = document.getElementById("btn-contact");

contactPost.onclick = function(){
    modalPost.style.display = 'block';
}

// RECUPERER REFERENCE