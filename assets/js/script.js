// MODALE CONTACT

var modal = document.getElementById("modal");
var contact = document.getElementById("btn-contact");

contact.onclick = function(){
    modal.style.display = 'block';
}

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = 'none';
    }
}