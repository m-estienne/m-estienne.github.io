const btn = document.querySelector('#menu');
const nav = document.querySelector('.navbar');
const header = document.querySelector('header');
const onScroll = document.querySelector('.onScroll');
let backgroundImg = ['./assets/img/background.jpg', './assets/img/background2.jpg', './assets/img/background3.jpg'];
let imageIndex = 0;

/*Changer l'image de fond du header*/ 
function changeImage() {
    header.style.backgroundImage = 'url('+backgroundImg[imageIndex]+')';
  imageIndex++;
  if (imageIndex >= backgroundImg.length) {
    imageIndex = 0;
  }
}

//Afficher et masquer la navbar au click sur le bouton
function navbarClick() {
    nav.classList.toggle('hide')
};

//charger la suite de la page au scroll
function loadOnScroll() {
    if(scrollY >= 950){
    onScroll.classList.remove('hide');
    }
}

setInterval(changeImage,15000);
document.addEventListener('scroll', loadOnScroll);
btn.addEventListener('click', navbarClick);

