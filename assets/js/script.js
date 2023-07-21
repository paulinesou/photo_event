var modal = document.getElementById("modal");
var contact = document.getElementById("menu-item-212");

contact.onclick = function(){
    modal.style.display = 'block';
}

window.onclick = function(event){
    if(event.targer == modal){
        modal.style.display = 'none';
    }
}