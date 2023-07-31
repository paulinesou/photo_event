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

// Étape 1 : Récupérer l'élément du DOM avec la classe "ref"
const paragraph = document.querySelector('.ref-contact');

// Étape 2 : Récupérer le contenu textuel de l'élément
const contenuTextuel = paragraph.textContent;
const champRef = document.getElementById('ref');

champRef.value = contenuTextuel;

// LIGHTBOX

class Lightbox {
    static init(){
        const links = document.querySelectorAll('a [href$="jpeg"]')
        .forEach(link => link.addEventListener('click', e => {
            e.preventDefault()
            new Lightbox(e.currentTarget.getAttribute('href'))
        }));
    }
}

constructor(url);{
    const element = this.buildDOM(url)
    document.body.appendChild(element)
}

buildDOM(url); {
    const dom = document.createElement('div')
    dom.classList.add('lightbox')
    dom.innerHTML = `<button class="lightbox-close">Fermer</button>
        <button class="lightbox-next">Suivant</button>
        <button class="lightbox-prev">Précédent</button>
        <div class="lightbox-container"></div>`
    dom.querySelector('.lightbox-close').addEventListener('click', this.close.bind(this))
    dom.querySelector('.lightbox-next').addEventListener('click', this.next.bind(this))
    dom.querySelector('.lightbox-prev').addEventListener('click', this.prev.bind(this))
    return dom
}