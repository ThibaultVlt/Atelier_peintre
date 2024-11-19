"use strict";


// Démarrer l'animation après un court délai pour s'assurer que l'élément est prêt
setTimeout(() => {
    rebond.style.opacity = 1; // Commencer visible
    let interval = setInterval(animationRebond, 20); // Appeler la fonction toutes les 30 ms
}, 1000); // Démarre après 1 seconde pour donner un temps de chargement

