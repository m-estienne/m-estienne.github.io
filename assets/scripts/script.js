const btn = document.querySelector('#menu');
const nav = document.querySelector('.navbar');

btn.addEventListener('click', navbarClick);

//Afficher et masquer la navbar au click sur le bouton
function navbarClick() {
    nav.classList.toggle('hide')
};