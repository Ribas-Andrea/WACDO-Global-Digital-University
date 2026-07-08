// -------------------------------------------------------------- NavBar -------------------------------------------------------------------------------------------------

function getDataCat() {
  const catList = document.getElementById('container-liste-categories');

  fetch('./data/categories.json')
    .then((response) => response.json())
    .then((categories) => {
      categories.forEach((cat, index) => {
        const catNav = document.createElement('div');
        catNav.id = index;
        catNav.classList.add('card-categories-nav');
        catNav.tabIndex = 0;
        function selectionnerCard(event) {
          const catListCard = document.getElementById('container-liste-categories');
          for (let index = 0; index < catListCard.children.length; index++) {
            const cardInitiale = catListCard.children[index];
            cardInitiale.classList.remove('activeBorder');
          }
          const catNavSelectCard = document.getElementById(index);
          catNavSelectCard.classList.add('activeBorder');

          if (index === 0) {
            afficherDescription(index);
            afficherProduits('menus');
          }
          if (index === 1) {
            afficherDescription(index);
            afficherProduits('boissons');
          }
          if (index === 2) {
            afficherDescription(index);
            afficherProduits('burgers');
          }
          if (index === 3) {
            afficherDescription(index);
            afficherProduits('frites');
          }
          if (index === 4) {
            afficherDescription(index);
            afficherProduits('encas');
          }
          if (index === 5) {
            afficherDescription(index);
            afficherProduits('wraps');
          }
          if (index === 6) {
            afficherDescription(index);
            afficherProduits('salades');
          }
          if (index === 7) {
            afficherDescription(index);
            afficherProduits('desserts');
          }
          if (index === 8) {
            afficherDescription(index);
            afficherProduits('sauces');
          }
        }

        catNav.addEventListener('click', selectionnerCard);
        catNav.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            catNav.click();
          }
        });

        const catNavContainerImgCard = document.createElement('div');
        catNavContainerImgCard.classList.add('container-img-card-categorie');

        const picture = document.createElement('picture');
        const source = document.createElement('source');
        source.srcset = cat.imageWebp;
        source.type = 'image/webp';

        const catNavImgCard = document.createElement('img');
        catNavImgCard.classList.add('img-card-categorie');
        catNavImgCard.src = cat.image;
        catNavImgCard.alt = `Image de la catégorie ${cat.title}`;

        picture.appendChild(source);
        picture.appendChild(catNavImgCard);

        const catNavContainerTitreImg = document.createElement('div');
        catNavContainerTitreImg.classList.add('container-titre-img-nav');

        const catNavTitreImg = document.createElement('p');
        catNavTitreImg.classList.add('titre-img-nav');
        catNavTitreImg.textContent = cat.title;

        catNavContainerImgCard.appendChild(picture);
        catNavContainerTitreImg.appendChild(catNavTitreImg);

        catNav.appendChild(catNavContainerImgCard);
        catNav.appendChild(catNavContainerTitreImg);

        catList.appendChild(catNav);
      });
    })
    .catch((err) => {
      window.location.href = 'index.html';
    });
}

function flecheNav() {
  const flecheGauche = document.getElementById('fleche-gauche-nav');
  const flecheDroite = document.querySelector('.fleche-droite-nav');
  const container = document.getElementById('container-liste-categories');
  let compteur = 0;
  const max = 6;

  function largeurProduit() {
    const produit = container.querySelector('.card-categories-nav');
    const style = window.getComputedStyle(produit);

    const gap = parseInt(window.getComputedStyle(container).gap) || 0;
    return produit.offsetWidth + gap;
  }

  flecheDroite.addEventListener('click', () => {
    if (compteur < max) {
      compteur++;
      container.style.transform = `translateX(-${largeurProduit() * compteur}px)`;
    }
  });

  flecheGauche.addEventListener('click', () => {
    if (compteur > 0) {
      compteur--;
      container.style.transform = `translateX(-${largeurProduit() * compteur}px)`;
    }
  });
}

// ----------------------------------------------------------------- Main (Titre + Descritpion + Produits) ----------------------------------------------------------------

function afficherDescription(indexCategorie) {
  const titreProd = document.getElementById('container-nos-produits');
  console.log(titreProd);
  titreProd.innerHTML = '';

  fetch('./data/categories.json')
    .then((response) => response.json())
    .then((categories) => {
      categories.forEach((titre, index) => {
        if (index === indexCategorie) {
          const titreSection = document.createElement('div');
          titreSection.classList.add('titre-produits');

          const titreProduit = document.createElement('h1');
          titreProduit.textContent = 'Nos ' + titre.title;

          const titreDescription = document.createElement('p');
          titreDescription.id = 'description-produits';
          titreDescription.textContent = titre.description;

          titreProd.appendChild(titreSection);
          titreSection.appendChild(titreProduit);
          titreSection.appendChild(titreDescription);
        }
      });
    })
    .catch((err) => {
      window.location.href = 'index.html';
    });
}

function afficherProduits(categories) {
  const prodList = document.getElementById('container-zone-choix');
  prodList.innerHTML = '';

  fetch('./data/produits.json')
    .then((response) => response.json())
    .then((produits) => {
      produits[categories].forEach((prod) => {
        const prodContainerZoneChoix = document.createElement('div');
        prodContainerZoneChoix.classList.add('container-zone-choix');
        prodContainerZoneChoix.addEventListener('click', () => {
          document.querySelectorAll('.container-zone-choix').forEach((prodCard) => {
            prodCard.classList.remove('activeBorder');
          });
          prodContainerZoneChoix.classList.add('activeBorder');
          if (categories === 'boissons') {
            afficherPopupBoissons(prod.nom);
          }
          if (categories === 'menus') {
            afficherPopupMenus('menus');
          }
          if (
            categories === 'burgers' ||
            categories === 'frites' ||
            categories === 'encas' ||
            categories === 'wraps' ||
            categories === 'salades' ||
            categories === 'desserts' ||
            categories === 'sauces'
          )
            afficherPopupArticles();
        });

        const prodCardChoix = document.createElement('article');
        prodCardChoix.classList.add('card-choix');
        prodCardChoix.tabIndex = 0;
        prodCardChoix.dataset.id = prod.id;
        prodCardChoix.addEventListener('click', () => {
          localStorage.setItem('memoireBurger', prod.nom);
          console.log('memoireBurger =', prod.nom);

          localStorage.setItem('memoireArticle', prod.nom);
          console.log('memoireArticle =', prod.nom);

          Number(localStorage.setItem('memoirePrix', prod.prix));

          const id = Number(prodCardChoix.dataset.id);

          console.log('id cliqué :', id);
        });

        prodCardChoix.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            prodCardChoix.click();
          }
        });

        const prodContainerImgCard = document.createElement('div');
        prodContainerImgCard.classList.add('container-img-card');

        const prodPicture = document.createElement('picture');

        const prodSource = document.createElement('source');
        prodSource.srcset = prod.imageWebp;
        prodSource.type = 'image/webp';

        const prodImgCard = document.createElement('img');
        prodImgCard.classList.add('img-card-produits');
        prodImgCard.src = prod.image;
        prodImgCard.alt = ` ${prod.nom}`;

        prodPicture.appendChild(prodSource);
        prodPicture.appendChild(prodImgCard);

        const prodContainerTitrePrix = document.createElement('div');
        prodContainerTitrePrix.classList.add('container-titre-prix');
        prodContainerTitrePrix.style.alignItems = 'center';

        const prodNom = document.createElement('h2');
        prodNom.classList.add('nom-du-produit');
        prodNom.textContent = prod.nom;
        prodNom.style.paddingTop = '15px';

        const prodPrix = document.createElement('span');
        prodPrix.classList.add('prix-produit');
        prodPrix.innerHTML = `${prod.prix.toFixed(2)}&nbsp;€`;

        prodList.appendChild(prodContainerZoneChoix);

        prodContainerZoneChoix.appendChild(prodCardChoix);

        prodCardChoix.appendChild(prodContainerImgCard);
        prodCardChoix.appendChild(prodContainerTitrePrix);

        prodContainerImgCard.appendChild(prodPicture);

        prodContainerTitrePrix.appendChild(prodNom);
        prodContainerTitrePrix.appendChild(prodPrix);
      });
    })
    .catch((err) => {
      window.location.href = 'index.html';
    });
}

function afficherMessageAPIValidationCommande() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', verifierEtAfficher);
  } else {
    verifierEtAfficher();
  }
}

function verifierEtAfficher() {
  const statut = sessionStorage.getItem('commandeValidee');
  console.log('Valeur lue dans sessionStorage :', statut);
  if (statut === 'true') {
    sessionStorage.removeItem('commandeValidee');
    afficherPopupMessageAPISucces();
  } else if (statut === 'false') {
    sessionStorage.removeItem('commandeValidee');
    afficherPopupMessageAPIErreur();
  }
}

// -------------------------------------------------------------- Lancement des fonctions -------------------------------------------------------------------------------------------------

getDataCat();
flecheNav();
afficherMessageAPIValidationCommande();
