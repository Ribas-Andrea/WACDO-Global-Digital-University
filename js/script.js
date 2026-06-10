// Pour faire défiler la nav barre au clique sur la flèche

const flecheGauche = document.getElementById('fleche-gauche');
const flecheDroite = document.querySelector('.fleche-droite');
const container = document.getElementById('container-liste-categories');
let compteur = 0;
const max = 6; // exemple à adapter selon nombre de catégories visibles

// Flèche droite
flecheDroite.addEventListener('click', () => {

    if (compteur < max) {
        compteur++;
        container.style.transform = `translateX(-${185 * compteur}px)`;
    }
});

// Flèche gauche

  flecheGauche.addEventListener('click', () => {

    if (compteur > 0 ) {
        compteur--;
        container.style.transform = `translateX(-${185 * compteur}px)`;
    }
  });