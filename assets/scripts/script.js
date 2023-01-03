const btn = document.querySelector('#menu');
const nav = document.querySelector('.navbar');
const header = document.querySelector('header');
const onScroll = document.querySelector('.onScroll');
let backgroundImg = ['./assets/img/background.jpg', './assets/img/background2.jpg', './assets/img/background3.jpg'];
let imageIndex = 0;

//Fonctions permettant de changer les images miniatures au clic
const leftFirst = document.querySelector('#arrowLeftFirst');
const rightFirst = document.querySelector('#arrowRightFirst');
const imgFirst = document.querySelector('#firstCarImage');

rightFirst.addEventListener('click', () =>{
    imgFirst.src = './assets/img/vehicule1bis.jpg';
});

leftFirst.addEventListener('click', () =>{
    imgFirst.src = './assets/img/vehicule1.png';
});

const leftSecond = document.querySelector('#arrowLeftSecond');
const rightSecond = document.querySelector('#arrowRightSecond');
const imgSecond = document.querySelector('#secondCarImage');

rightSecond.addEventListener('click', () =>{
    imgSecond.src = './assets/img/vehicule2bis.jpg';
});

leftSecond.addEventListener('click', () =>{
    imgSecond.src = './assets/img/vehicule2.png';
});

const leftThird = document.querySelector('#arrowLeftThird');
const rightThird = document.querySelector('#arrowRightThird');
const imgThird = document.querySelector('#thirdCarImage');

rightThird.addEventListener('click', () =>{
    imgThird.src = './assets/img/vehicule3bis.jpg';
});

leftThird.addEventListener('click', () =>{
    imgThird.src = './assets/img/vehicule3.png';
});


const leftFourth = document.querySelector('#arrowLeftFourth');
const rightFourth = document.querySelector('#arrowRightFourth');
const imgFourth = document.querySelector('#fourthCarImage');

rightFourth.addEventListener('click', () =>{
    imgFourth.src = './assets/img/vehicule4bis.jpg';
});

leftFourth.addEventListener('click', () =>{
    imgFourth.src = './assets/img/vehicule4.png';
});

const leftFifth = document.querySelector('#arrowLeftFifth');
const rightFifth = document.querySelector('#arrowRightFifth');
const imgFifth = document.querySelector('#fifthCarImage');

rightFifth.addEventListener('click', () =>{
    imgFifth.src = './assets/img/vehicule1bis.jpg';
});

leftFifth.addEventListener('click', () =>{
    imgFifth.src = './assets/img/vehicule1.png';
});

const leftSixth = document.querySelector('#arrowLeftSixth');
const rightSixth = document.querySelector('#arrowRightSixth');
const imgSixth = document.querySelector('#sixthCarImage');

rightSixth.addEventListener('click', () =>{
    imgSixth.src = './assets/img/vehicule2bis.jpg';
});

leftSixth.addEventListener('click', () =>{
    imgSixth.src = './assets/img/vehicule2.png';
});


const leftSeventh = document.querySelector('#arrowLeftSeventh');
const rightSeventh = document.querySelector('#arrowRightSeventh');
const imgSeventh = document.querySelector('#seventhCarImage');

rightSeventh.addEventListener('click', () =>{
    imgSeventh.src = './assets/img/vehicule3bis.jpg';
});

leftSeventh.addEventListener('click', () =>{
    imgSeventh.src = './assets/img/vehicule3.png';
});


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
    onScroll.classList.remove('hide');
    
}

setInterval(changeImage,15000);
document.addEventListener('scroll', loadOnScroll);
btn.addEventListener('click', navbarClick);

