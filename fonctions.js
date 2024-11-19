"use strict";

//Mise en place du fond et de la couleur pour la page active
const activePage = window.location.pathname;

const lienNav = document.querySelectorAll('nav a');
for (const element of lienNav) {
    if (element.pathname === activePage) {
        element.classList.add('active');
    }
}

//Mise en place du rebond
const rebond = document.querySelector('.rebond');

// Variables pour le mouvement
let position = -580;
let direction = 1;      // Direction du mouvement (1 = descente, -1 = montée)
let speed = 1;          // Vitesse
let gravity = 0.9;      // gravité
let vitesseApresRebond = 0.2; //réduit la vitesse après chaque rebond
let interval;

// Limite inférieure
const positionSol = 0; //Le sol

// Fonction pour animer l'élément
function animationRebond() {
    speed += gravity * direction;

    position += speed;
    rebond.style.transform = `translateY(${position}px)`;

    // Inverser la direction en position en bas
    if (position >= positionSol) {
        position = positionSol;
        speed = -speed * vitesseApresRebond;
    }
}
