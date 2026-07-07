// -------------------------------------------------------------- Popup -------------------------------------------------------------------------------------------------

function afficherPopupMenus(categorieRecherchee) {
  closeAllPopups();

  const containerPopupMenus = document.getElementById('container-popup-menus');

  if (!containerPopupMenus) {
    console.error('Conteneur popupMenus introuvable');
    return;
  }

  containerPopupMenus.style.display = 'flex';
  containerPopupMenus.innerHTML = '';

  fetch('./data/categories.json')
    .then((response) => response.json())
    .then((popups) => {
      console.log(popups);

      const popup = popups.find((item) => item.title === categorieRecherchee);

      if (!popup) {
        console.error('Aucune popupNav trouvée pour :', categorieRecherchee);
        return;
      }

      const addPopup = document.createElement('section');
      addPopup.id = 'popup';

      const btnRetour = document.createElement('button');
      btnRetour.id = 'btn-retour';
      btnRetour.textContent = 'Retour';
      btnRetour.tabIndex = 0;
      btnRetour.addEventListener('click', () => {
        if (step > 1) {
          step--;
          defilerPopupMenus();
        }
      });
      btnRetour.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          btnRetour.click();
        }
      });

      const addLogoCroix = document.createElement('div');
      addLogoCroix.id = 'img-logo-croix';

      const addImgLogoCroix = document.createElement('img');
      addImgLogoCroix.id = 'croix';
      addImgLogoCroix.src = './assets/supprimer.png';
      addImgLogoCroix.alt = 'Logo Croix';
      addImgLogoCroix.tabIndex = 0;

      addImgLogoCroix.addEventListener('click', () => {
        containerPopupMenus.style.display = 'none';
        containerPopupMenus.innerHTML = '';
      });

      addImgLogoCroix.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          addImgLogoCroix.click();
        }
      });

      containerPopupMenus.appendChild(addPopup);
      addPopup.focus();
      addPopup.appendChild(addLogoCroix);
      addLogoCroix.appendChild(btnRetour);
      addLogoCroix.appendChild(addImgLogoCroix);

      const addContainerTitreDescriptionImg = document.createElement('div');
      addContainerTitreDescriptionImg.id = 'container-titre-description-img';

      const addContainerTitreDescriptionPopup = document.createElement('div');
      addContainerTitreDescriptionPopup.id = 'container-titre-descritpion-popup';

      const titrePopup = document.createElement('h1');
      titrePopup.textContent = 'Une grosse faim ?';

      const descriptionPopup = document.createElement('p');
      descriptionPopup.id = 'texte-description-popup';
      descriptionPopup.textContent = 'Le menu maxi Best Of comprend un sandwich, une grande frite et une boisson 50 Cl';

      const addContainerChoixTaille = document.createElement('div');
      addContainerChoixTaille.id = 'container-choix-taille';

      const containerChoixBoissons = document.createElement('div');
      containerChoixBoissons.classList.add('nav-popup-boissons');
      containerChoixBoissons.style.display = 'none';

      const addContainerPetiteTaille = document.createElement('div');
      addContainerPetiteTaille.classList.add('container-taille');
      addContainerPetiteTaille.tabIndex = 0;

      const addDivParentImgPetiteTaille = document.createElement('div');

      const imgPetiteTaille = document.createElement('img');
      imgPetiteTaille.id = 'img-petite-taille';
      imgPetiteTaille.src = './assets/illustration-best-of.png';
      imgPetiteTaille.alt = 'Petite Taille';

      const addDivTxtChoixPetiteTaille = document.createElement('div');

      const texteChoixPetiteTaille = document.createElement('span');
      texteChoixPetiteTaille.classList.add('texte-choix-taille');
      texteChoixPetiteTaille.textContent = 'Menu Best Of';

      const addContainerGrandeTaille = document.createElement('div');
      addContainerGrandeTaille.classList.add('container-taille');
      addContainerGrandeTaille.tabIndex = 0;

      const addDivParentImgGrandeTaille = document.createElement('div');
      addDivParentImgGrandeTaille.classList.add('container-grande-taille');

      const imgGrandeTaille = document.createElement('img');
      imgGrandeTaille.id = 'img-grande-taille';
      imgGrandeTaille.src = './assets/illustration-maxi-best-of.png';
      imgGrandeTaille.alt = 'Grande Taille';

      const addDivTxtChoixGrandeTaille = document.createElement('div');

      const texteChoixGrandeTaille = document.createElement('span');
      texteChoixGrandeTaille.classList.add('texte-choix-taille');
      texteChoixGrandeTaille.textContent = 'Menu Maxi Best Of';

      addPopup.appendChild(addContainerTitreDescriptionImg);

      addContainerTitreDescriptionImg.appendChild(addContainerTitreDescriptionPopup);
      addContainerTitreDescriptionImg.appendChild(addContainerChoixTaille);

      addContainerTitreDescriptionPopup.appendChild(titrePopup);
      addContainerTitreDescriptionPopup.appendChild(descriptionPopup);

      addContainerChoixTaille.appendChild(addContainerPetiteTaille);
      addContainerChoixTaille.appendChild(addContainerGrandeTaille);

      addContainerPetiteTaille.appendChild(addDivParentImgPetiteTaille);
      addContainerPetiteTaille.appendChild(addDivTxtChoixPetiteTaille);

      addDivParentImgPetiteTaille.appendChild(imgPetiteTaille);
      addDivTxtChoixPetiteTaille.appendChild(texteChoixPetiteTaille);

      addContainerGrandeTaille.appendChild(addDivParentImgGrandeTaille);
      addContainerGrandeTaille.appendChild(addDivTxtChoixGrandeTaille);

      addDivParentImgGrandeTaille.appendChild(imgGrandeTaille);
      addDivTxtChoixGrandeTaille.appendChild(texteChoixGrandeTaille);

      const addContainerBtnValidation = document.createElement('div');
      addContainerBtnValidation.id = 'container-btn-validation';

      let step = 1;
      const OpenbtnEtapeSuivante = document.createElement('button');
      OpenbtnEtapeSuivante.id = 'btn-etape-suivante';
      OpenbtnEtapeSuivante.textContent = 'Étape suivante';

      OpenbtnEtapeSuivante.addEventListener('click', () => {
        let cardSelected = null;

        if (step === 1 || step === 2) {
          cardSelected = document.querySelector('.container-taille.activeBorder');
        }

        if (step === 3 || step === 4) {
          cardSelected = document.querySelector('.card-categories-nav.activeBorder');
        }

        if (!cardSelected) {
          alert('Veuillez sélectionner un élément avant de continuer.');
          return;
        }

        if (step === 4) {
          containerPopupMenus.style.display = 'none';
          containerPopupMenus.innerHTML = '';

          ajouterMenuPanier();
          afficherPanier();
        }

        if (step < 4) {
          cardSelected.classList.remove('activeBorder');
          step++;
          defilerPopupMenus();
        }
        console.log(step);
      });

      addPopup.appendChild(addContainerBtnValidation);
      addContainerBtnValidation.appendChild(OpenbtnEtapeSuivante);

      function gererChoixPetiteTaille() {
        addContainerPetiteTaille.addEventListener('click', () => {
          addContainerPetiteTaille.classList.add('activeBorder');
          addContainerGrandeTaille.classList.remove('activeBorder');

          if (step === 1) {
            titrePopup.textContent = 'Une petite faim ?';
            descriptionPopup.textContent = 'Le menu Best Of comprend un sandwich, une moyenne frite et une boisson 30 Cl';
            texteChoixPetiteTaille.textContent = 'Menu Best Of';
            imgPetiteTaille.src = './assets/illustration-best-of.png';
            imgPetiteTaille.alt = 'image best of';
            localStorage.setItem('memoireMenu', 'Best of');
          }

          if (step === 2) {
            titrePopup.textContent = 'Choisissez votre accompagnement';
            descriptionPopup.textContent = 'Frites, potatoes, la pomme de terre dans tous ses états';
            texteChoixPetiteTaille.textContent = 'Frites';
            imgPetiteTaille.src = './assets/frites/MOYENNE_FRITE.png';
            imgPetiteTaille.alt = 'image moyenne frite';
            localStorage.setItem('memoireAccompagnement', 'Frites');
          }
        });

        addContainerPetiteTaille.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            addContainerPetiteTaille.click();
          }
        });
      }

      function gererChoixGrandeTaille() {
        addContainerGrandeTaille.addEventListener('click', () => {
          console.log('GRANDE');

          addContainerGrandeTaille.classList.add('activeBorder');
          addContainerPetiteTaille.classList.remove('activeBorder');

          if (step === 1) {
            titrePopup.textContent = 'Une grosse faim ?';
            descriptionPopup.textContent = 'Le menu maxi Best Of comprend un sandwich, une grande frite et une boisson 50 Cl';
            texteChoixGrandeTaille.textContent = 'Menu Maxi Best Of';
            imgGrandeTaille.src = './assets/illustration-maxi-best-of.png';
            imgGrandeTaille.alt = 'image maxi best of';
            localStorage.setItem('memoireMenu', 'Maxi Best Of');
          }

          if (step === 2) {
            titrePopup.textContent = 'Choisissez votre accompagnement';
            descriptionPopup.textContent = 'Frites, potatoes, la pomme de terre dans tous ses états';
            texteChoixPetiteTaille.textContent = 'Frites';
            imgPetiteTaille.src = './assets/frites/MOYENNE_FRITE.png';
            imgPetiteTaille.alt = 'image moyenne frites';
            texteChoixGrandeTaille.textContent = 'Potatoes';
            imgGrandeTaille.src = './assets/frites/GRANDE_POTATOES.png';
            imgGrandeTaille.alt = 'image grand potatoes';
            localStorage.setItem('memoireAccompagnement', 'Potatoes');
          }
        });

        addContainerGrandeTaille.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            addContainerGrandeTaille.click();
          }
        });
      }

      function defilerPopupMenus() {
        switch (step) {
          case 1:
            addContainerPetiteTaille.classList.remove('activeBorder');
            addContainerGrandeTaille.classList.remove('activeBorder');
            btnRetour.style.visibility = 'hidden';
            btnRetour.tabIndex = -1;
            titrePopup.style.display = 'flex';
            descriptionPopup.style.display = 'flex';
            imgPetiteTaille.style.display = 'flex';
            imgGrandeTaille.style.display = 'flex';
            OpenbtnEtapeSuivante.style.display = 'flex';
            OpenbtnEtapeSuivante.textContent = 'Étape suivante';

            titrePopup.textContent = 'Une grosse faim ?';
            descriptionPopup.textContent = 'Les menus comprennent un sandwich, une frite et une boisson';
            texteChoixPetiteTaille.textContent = 'Menu Best Of';
            imgPetiteTaille.src = './assets/illustration-best-of.png';
            imgPetiteTaille.alt = 'image best of';
            texteChoixGrandeTaille.textContent = 'Menu Maxi Best Of';
            imgGrandeTaille.src = './assets/illustration-maxi-best-of.png';
            imgGrandeTaille.alt = 'image maxi best of';

            gererChoixPetiteTaille();
            gererChoixGrandeTaille();

            addContainerPetiteTaille.focus();

            break;

          case 2:
            addContainerPetiteTaille.classList.remove('activeBorder');
            addContainerGrandeTaille.classList.remove('activeBorder');

            btnRetour.style.visibility = 'visible';
            btnRetour.tabIndex = 0;
            containerChoixBoissons.style.display = 'none';
            titrePopup.style.display = 'flex';
            descriptionPopup.style.display = 'flex';
            addContainerPetiteTaille.style.display = 'flex';
            addContainerGrandeTaille.style.display = 'flex';
            OpenbtnEtapeSuivante.style.display = 'flex';
            OpenbtnEtapeSuivante.textContent = 'Étape suivante';

            titrePopup.textContent = 'Choisissez votre accompagnement';
            descriptionPopup.textContent = 'Frites, potatoes, la pomme de terre dans tous ses états';
            texteChoixPetiteTaille.textContent = 'Frites';
            imgPetiteTaille.src = './assets/frites/MOYENNE_FRITE.png';
            imgPetiteTaille.alt = ' image moyenne frite';
            texteChoixGrandeTaille.textContent = 'Potatoes';
            imgGrandeTaille.src = './assets/frites/GRANDE_POTATOES.png';
            imgGrandeTaille.alt = 'image grande potatoes';

            gererChoixPetiteTaille();
            gererChoixGrandeTaille();

            addContainerPetiteTaille.focus();

            break;

          case 3:
            addContainerPetiteTaille.style.display = 'none';
            addContainerGrandeTaille.style.display = 'none';
            addContainerChoixTaille.style.display = 'flex';
            btnRetour.style.display = 'flex';
            titrePopup.style.display = 'flex';
            descriptionPopup.style.display = 'flex';

            titrePopup.textContent = 'Choisissez votre boisson';
            descriptionPopup.textContent = 'Un soda , un jus de fruit ou un verre d’eau pour accompagner votre repas';

            fetch('./data/produits.json')
              .then((response) => response.json())
              .then((data) => {
                const listboissons = data.boissons;

                containerChoixBoissons.innerHTML = '';
                containerChoixBoissons.style.display = 'flex';

                const imgFlecheGaucheBoissons = document.createElement('img');
                imgFlecheGaucheBoissons.id = 'fleche-gauche';
                imgFlecheGaucheBoissons.src = './assets/fleche-slider.png';
                imgFlecheGaucheBoissons.alt = 'image fleche slider gauche';
                imgFlecheGaucheBoissons.tabIndex = 0;

                let compteur = 0;
                const max = 5;
                function largeurBoisson() {
                  const carte = containerListBoissons.querySelector('.card-categories-nav');
                  const gap = parseInt(window.getComputedStyle(containerListBoissons).gap) || 0;

                  return carte.offsetWidth + gap;
                }
                imgFlecheGaucheBoissons.addEventListener('click', () => {
                  if (compteur > 0) {
                    compteur--;
                    containerListBoissons.style.transform = `translateX(-${largeurBoisson() * compteur}px)`;
                  }
                });

                imgFlecheGaucheBoissons.addEventListener('keydown', (e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    imgFlecheGaucheBoissons.click();
                  }
                });

                const choixBoissons = document.createElement('div');
                choixBoissons.id = 'choix-categorie-produits';

                const containerListBoissons = document.createElement('div');
                containerListBoissons.id = 'container-liste-categories';

                const imgFlecheDroiteBoissons = document.createElement('img');
                imgFlecheDroiteBoissons.classList.add('fleche-droite');
                imgFlecheDroiteBoissons.src = './assets/fleche-slider.png';
                imgFlecheDroiteBoissons.alt = 'image fleche slider droite';
                imgFlecheDroiteBoissons.tabIndex = 0;

                imgFlecheDroiteBoissons.addEventListener('click', () => {
                  if (compteur < max) {
                    compteur++;
                    containerListBoissons.style.transform = `translateX(-${largeurBoisson() * compteur}px)`;
                  }
                });

                imgFlecheDroiteBoissons.addEventListener('keydown', (e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    imgFlecheDroiteBoissons.click();
                  }
                });

                choixBoissons.appendChild(containerListBoissons);

                containerChoixBoissons.appendChild(imgFlecheGaucheBoissons);
                containerChoixBoissons.appendChild(choixBoissons);
                containerChoixBoissons.appendChild(imgFlecheDroiteBoissons);

                addContainerChoixTaille.appendChild(containerChoixBoissons);

                listboissons.forEach((boisson) => {
                  const cardBoissons = document.createElement('div');
                  cardBoissons.classList.add('card-categories-nav');
                  cardBoissons.tabIndex = 0;
                  cardBoissons.addEventListener('click', () => {
                    console.log('clic');
                    document.querySelectorAll('.card-categories-nav').forEach((cardBoisson) => {
                      cardBoisson.classList.remove('activeBorder');
                    });
                    cardBoissons.classList.add('activeBorder');
                    localStorage.setItem('memoireBoisson', boisson.nom);
                    console.log('memoireBoisson =', boisson.nom);
                  });
                  cardBoissons.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      cardBoissons.click();
                    }
                  });

                  const containerImgCardBoisson = document.createElement('div');
                  containerImgCardBoisson.classList.add('container-img-card-categorie');

                  const imgCardBoisson = document.createElement('img');
                  imgCardBoisson.classList.add('img-card-categorie');
                  imgCardBoisson.src = boisson.image;
                  imgCardBoisson.alt = `Image de la catégorie ${boisson.nom}`;

                  const containerTitreCardBoisson = document.createElement('div');
                  containerTitreCardBoisson.classList.add('container-titre-img-nav');

                  const titreCardBoisson = document.createElement('p');
                  titreCardBoisson.classList.add('titre-img-nav');
                  titreCardBoisson.textContent = boisson.nom;

                  containerImgCardBoisson.appendChild(imgCardBoisson);
                  containerTitreCardBoisson.appendChild(titreCardBoisson);

                  cardBoissons.appendChild(containerImgCardBoisson);
                  cardBoissons.appendChild(containerTitreCardBoisson);

                  containerListBoissons.appendChild(cardBoissons);
                });
                imgFlecheGaucheBoissons.focus();
              });

            break;

          case 4:
            addContainerPetiteTaille.style.display = 'none';
            addContainerGrandeTaille.style.display = 'none';
            addContainerChoixTaille.style.display = 'flex';

            btnRetour.style.display = 'flex';
            titrePopup.style.display = 'flex';
            descriptionPopup.style.display = 'flex';

            titrePopup.textContent = 'Choisissez votre sauce';
            descriptionPopup.innerHTML = 'Douce, relevée ou gourmande… laquelle sera votre coup de cœur&nbsp;?';

            fetch('./data/produits.json')
              .then((response) => response.json())
              .then((data) => {
                const listsauces = data.sauces;

                containerChoixBoissons.innerHTML = '';
                containerChoixBoissons.style.display = 'flex';

                const imgFlecheGaucheBoissons = document.createElement('img');
                imgFlecheGaucheBoissons.id = 'fleche-gauche';
                imgFlecheGaucheBoissons.src = './assets/fleche-slider.png';
                imgFlecheGaucheBoissons.alt = 'image fleche slider gauche';
                imgFlecheGaucheBoissons.tabIndex = 0;

                let compteur = 0;
                const max = 5;
                function largeurBoisson() {
                  const carte = containerListBoissons.querySelector('.card-categories-nav');
                  const gap = parseInt(window.getComputedStyle(containerListBoissons).gap) || 0;

                  return carte.offsetWidth + gap;
                }
                imgFlecheGaucheBoissons.addEventListener('click', () => {
                  if (compteur > 0) {
                    compteur--;
                    containerListBoissons.style.transform = `translateX(-${largeurBoisson() * compteur}px)`;
                  }
                });
                imgFlecheGaucheBoissons.addEventListener('keydown', (e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    imgFlecheGaucheBoissons.click();
                  }
                });

                const choixBoissons = document.createElement('div');
                choixBoissons.id = 'choix-categorie-produits';

                const containerListBoissons = document.createElement('div');
                containerListBoissons.id = 'container-liste-categories';

                const imgFlecheDroiteBoissons = document.createElement('img');
                imgFlecheDroiteBoissons.classList.add('fleche-droite');
                imgFlecheDroiteBoissons.src = './assets/fleche-slider.png';
                imgFlecheDroiteBoissons.alt = 'image fleche slider droite';
                imgFlecheDroiteBoissons.tabIndex = 0;

                imgFlecheDroiteBoissons.addEventListener('click', () => {
                  if (compteur < max) {
                    compteur++;
                    containerListBoissons.style.transform = `translateX(-${largeurBoisson() * compteur}px)`;
                  }
                });
                imgFlecheDroiteBoissons.addEventListener('keydown', (e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    imgFlecheDroiteBoissons.click();
                  }
                });

                choixBoissons.appendChild(containerListBoissons);

                containerChoixBoissons.appendChild(imgFlecheGaucheBoissons);
                containerChoixBoissons.appendChild(choixBoissons);
                containerChoixBoissons.appendChild(imgFlecheDroiteBoissons);

                addContainerChoixTaille.appendChild(containerChoixBoissons);

                listsauces.forEach((sauce) => {
                  const cardBoissons = document.createElement('div');
                  cardBoissons.classList.add('card-categories-nav');
                  cardBoissons.tabIndex = 0;
                  cardBoissons.addEventListener('click', () => {
                    console.log('clic');
                    document.querySelectorAll('.card-categories-nav').forEach((cardBoisson) => {
                      cardBoisson.classList.remove('activeBorder');
                    });
                    cardBoissons.classList.add('activeBorder');
                    localStorage.setItem('memoireSauce', sauce.nom);
                    console.log('memoireSauce =', sauce.nom);
                  });
                  cardBoissons.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      cardBoissons.click();
                    }
                  });

                  const containerImgCardBoisson = document.createElement('div');
                  containerImgCardBoisson.classList.add('container-img-card-categorie');

                  const imgCardBoisson = document.createElement('img');
                  imgCardBoisson.classList.add('img-card-categorie');
                  imgCardBoisson.src = sauce.image;
                  imgCardBoisson.alt = `Image de la catégorie ${sauce.nom}`;

                  const containerTitreCardBoisson = document.createElement('div');
                  containerTitreCardBoisson.classList.add('container-titre-img-nav');

                  const titreCardBoisson = document.createElement('p');
                  titreCardBoisson.classList.add('titre-img-nav');
                  titreCardBoisson.textContent = sauce.nom;

                  containerImgCardBoisson.appendChild(imgCardBoisson);
                  containerTitreCardBoisson.appendChild(titreCardBoisson);

                  cardBoissons.appendChild(containerImgCardBoisson);
                  cardBoissons.appendChild(containerTitreCardBoisson);

                  containerListBoissons.appendChild(cardBoissons);
                });
                imgFlecheGaucheBoissons.focus();
              });

            OpenbtnEtapeSuivante.textContent = 'Ajouter le menu à ma commande';

            break;
        }
      }

      defilerPopupMenus();
    });
}

function afficherPopupBoissons(produitRecherche) {
  closeAllPopups();

  localStorage.removeItem('memoireTaille');
  localStorage.removeItem('memoirePrix');
  localStorage.removeItem('memoireCompteur');

  const containerPopupBoissons = document.getElementById('container-popup-boissons');

  if (!containerPopupBoissons) {
    console.error('Conteneur popup introuvable');
    return;
  }

  containerPopupBoissons.style.display = 'flex';
  containerPopupBoissons.innerHTML = '';

  fetch('./data/produits.json')
    .then((response) => response.json())
    .then((popups) => {
      console.log(popups.boissons);

      const boisson = popups.boissons.find((item) => item.nom === produitRecherche);

      if (!boisson) {
        console.error('Aucune boisson trouvée pour :', produitRecherche);
        return;
      }

      const addPopup = document.createElement('section');
      addPopup.id = 'popup';
      addPopup.tabIndex = 0;

      const addLogoCroix = document.createElement('div');
      addLogoCroix.id = 'img-logo-croix';

      const addImgLogoCroix = document.createElement('img');
      addImgLogoCroix.id = 'croix';
      addImgLogoCroix.tabIndex = 0;
      addImgLogoCroix.src = './assets/supprimer.png';
      addImgLogoCroix.alt = 'Logo Croix';

      addImgLogoCroix.addEventListener('click', () => {
        containerPopupBoissons.style.display = 'none';
        containerPopupBoissons.innerHTML = '';
        localStorage.removeItem('memoireTaille');
        localStorage.removeItem('memoirePrix');
        localStorage.removeItem('memoireCompteur');
      });

      addImgLogoCroix.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          addImgLogoCroix.click();
        }
      });

      containerPopupBoissons.appendChild(addPopup);
      addPopup.focus();
      addPopup.appendChild(addLogoCroix);
      addLogoCroix.appendChild(addImgLogoCroix);

      const addContainerTitreDescriptionImg = document.createElement('div');
      addContainerTitreDescriptionImg.id = 'container-titre-description-img';

      const addContainerTitreDescriptionPopup = document.createElement('div');
      addContainerTitreDescriptionPopup.id = 'container-titre-descritpion-popup';

      const titrePopup = document.createElement('h1');
      titrePopup.textContent = 'Une petite soif ? ';

      const descriptionPopup = document.createElement('p');
      descriptionPopup.id = 'texte-description-popup';
      descriptionPopup.textContent = 'Choisissez la taille de votre boisson,  +0.50€ pour le format 50 Cl';

      const addContainerChoixTaille = document.createElement('div');
      addContainerChoixTaille.id = 'container-choix-taille';

      const addContainerPetiteTaille = document.createElement('div');
      addContainerPetiteTaille.classList.add('container-taille');
      addContainerPetiteTaille.tabIndex = 0;
      addContainerPetiteTaille.addEventListener('click', () => {
        console.log('clic petite taille');
        addContainerGrandeTaille.classList.remove('activeBorder');
        addContainerPetiteTaille.classList.add('activeBorder');
        localStorage.setItem(
          'memoireTaille',
          JSON.stringify({
            nom: boisson.nom,
            taille: 'petite'
          })
        );
        localStorage.setItem('memoirePrix', boisson.prix);
      });

      addContainerPetiteTaille.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          addContainerPetiteTaille.click();
        }
      });

      const addDivParentImgPetiteTaille = document.createElement('div');
      addDivParentImgPetiteTaille.style.display = 'flex';
      addDivParentImgPetiteTaille.style.justifyContent = 'center';

      const imgPetiteTaille = document.createElement('img');
      imgPetiteTaille.id = 'img-petite-taille';
      imgPetiteTaille.src = './assets/boissons/coca-cola.png';
      imgPetiteTaille.alt = 'Boisson Petite Taille';
      imgPetiteTaille.style.width = '80%';
      imgPetiteTaille.style.height = '100%';

      const addDivTxtChoixPetiteTaille = document.createElement('div');

      const texteChoixPetiteTaille = document.createElement('span');
      texteChoixPetiteTaille.classList.add('texte-choix-taille');
      texteChoixPetiteTaille.textContent = '30 Cl';

      const addContainerGrandeTaille = document.createElement('div');
      addContainerGrandeTaille.classList.add('container-taille');
      addContainerGrandeTaille.tabIndex = 0;
      addContainerGrandeTaille.addEventListener('click', () => {
        console.log('clic grande taille');
        addContainerPetiteTaille.classList.remove('activeBorder');
        addContainerGrandeTaille.classList.add('activeBorder');
        localStorage.setItem(
          'memoireTaille',
          JSON.stringify({
            nom: boisson.nom,
            taille: 'grande'
          })
        );
        localStorage.setItem('memoirePrix', boisson.prix);
      });
      addContainerGrandeTaille.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          addContainerGrandeTaille.click();
        }
      });

      const addDivParentImgGrandeTaille = document.createElement('div');
      addDivParentImgGrandeTaille.style.display = 'flex';
      addDivParentImgGrandeTaille.style.justifyContent = 'center';

      const imgGrandeTaille = document.createElement('img');
      imgGrandeTaille.id = 'img-grande-taille';
      imgGrandeTaille.src = './assets/boissons/coca-cola.png';
      imgGrandeTaille.alt = 'Boisson Grande Taille';

      const addDivTxtChoixGrandeTaille = document.createElement('div');

      const texteChoixGrandeTaille = document.createElement('span');
      texteChoixGrandeTaille.classList.add('texte-choix-taille');
      texteChoixGrandeTaille.textContent = '50 Cl';

      addPopup.appendChild(addContainerTitreDescriptionImg);

      addContainerTitreDescriptionImg.appendChild(addContainerTitreDescriptionPopup);
      addContainerTitreDescriptionImg.appendChild(addContainerChoixTaille);

      addContainerTitreDescriptionPopup.appendChild(titrePopup);
      addContainerTitreDescriptionPopup.appendChild(descriptionPopup);

      addContainerChoixTaille.appendChild(addContainerPetiteTaille);
      addContainerChoixTaille.appendChild(addContainerGrandeTaille);

      addContainerPetiteTaille.appendChild(addDivParentImgPetiteTaille);
      addContainerPetiteTaille.appendChild(addDivTxtChoixPetiteTaille);

      addDivParentImgPetiteTaille.appendChild(imgPetiteTaille);
      addDivTxtChoixPetiteTaille.appendChild(texteChoixPetiteTaille);

      addContainerGrandeTaille.appendChild(addDivParentImgGrandeTaille);
      addContainerGrandeTaille.appendChild(addDivTxtChoixGrandeTaille);

      addDivParentImgGrandeTaille.appendChild(imgGrandeTaille);
      addDivTxtChoixGrandeTaille.appendChild(texteChoixGrandeTaille);

      const addContainerParentCompteur = document.createElement('div');
      addContainerParentCompteur.id = 'container-parent-compteur';

      const addContaineCompteur = document.createElement('div');
      addContaineCompteur.id = 'container-compteur';

      const btnMoins = document.createElement('button');
      btnMoins.id = 'btn-moins';
      btnMoins.textContent = '-';
      btnMoins.addEventListener('click', () => {
        if (compteur > 1) {
          compteur--;
          valeurCompteur.textContent = compteur;
        }
      });

      const valeurCompteur = document.createElement('span');
      valeurCompteur.id = 'valeur-compteur';
      valeurCompteur.textContent = '1';

      const btnPlus = document.createElement('button');
      btnPlus.id = 'btn-plus';
      btnPlus.textContent = '+';
      let compteur = 1;
      valeurCompteur.textContent = compteur;
      btnPlus.addEventListener('click', () => {
        if (compteur < 10) {
          compteur++;
        }
        valeurCompteur.textContent = compteur;
        localStorage.setItem('memoireCompteur', compteur);
      });

      addPopup.appendChild(addContainerParentCompteur);

      addContainerParentCompteur.appendChild(addContaineCompteur);
      addContaineCompteur.appendChild(btnMoins);
      addContaineCompteur.appendChild(valeurCompteur);
      addContaineCompteur.appendChild(btnPlus);

      const addContainerBtnValidation = document.createElement('div');
      addContainerBtnValidation.id = 'container-btn-validation';

      const btnAnnuler = document.createElement('button');
      btnAnnuler.id = 'btn-annuler-commande';
      btnAnnuler.textContent = 'Annuler';
      btnAnnuler.addEventListener('click', () => {
        localStorage.removeItem('memoireTaille');
        localStorage.removeItem('memoirePrix');
        localStorage.removeItem('memoireCompteur');

        addContainerPetiteTaille.classList.remove('activeBorder');
        addContainerGrandeTaille.classList.remove('activeBorder');

        compteur = 1;
        valeurCompteur.textContent = compteur;
      });

      const btnAjouter = document.createElement('button');
      btnAjouter.id = 'btn-ajouter-commande';
      btnAjouter.textContent = 'Ajouter à ma commande';
      btnAjouter.addEventListener('click', () => {
        const ajoutOk = ajouterBoissonPanier();

        if (!ajoutOk) {
          return;
        }
        afficherPanier();
        containerPopupBoissons.style.display = 'none';
        containerPopupBoissons.innerHTML = '';
      });

      addPopup.appendChild(addContainerBtnValidation);
      addContainerBtnValidation.appendChild(btnAnnuler);
      addContainerBtnValidation.appendChild(btnAjouter);
    });
}

function afficherPopupArticles() {
  closeAllPopups();

  const validationChoix = document.getElementById('container-popup-articles');

  if (!validationChoix) {
    console.error('Conteneur popup introuvable');
    return;
  }

  validationChoix.style.display = 'flex';
  validationChoix.innerHTML = '';

  const addPopup = document.createElement('section');
  addPopup.id = 'popupValider';
  addPopup.tabIndex = 0;

  const addLogoCroix = document.createElement('div');
  addLogoCroix.id = 'img-logo-croix';

  const addImgLogoCroix = document.createElement('img');
  addImgLogoCroix.id = 'croix';
  addImgLogoCroix.tabIndex = 0;
  addImgLogoCroix.src = './assets/supprimer.png';
  addImgLogoCroix.alt = 'Logo Croix';

  addImgLogoCroix.addEventListener('click', () => {
    validationChoix.style.display = 'none';
    validationChoix.innerHTML = '';
  });
  addImgLogoCroix.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addImgLogoCroix.click();
    }
  });

  validationChoix.appendChild(addPopup);
  addPopup.focus();
  addPopup.appendChild(addLogoCroix);
  addLogoCroix.appendChild(addImgLogoCroix);

  const containerDemandeValidation = document.createElement('div');
  const demandeValidation = document.createElement('p');
  const memoireArticle = localStorage.getItem('memoireArticle');
  demandeValidation.innerHTML = `Voulez-vous ajouter  ${memoireArticle} à votre panier&nbsp;?`;
  demandeValidation.style.paddingBottom = '20px';

  const btnValidation = document.createElement('button');
  btnValidation.id = 'btn-etape-suivante';
  btnValidation.textContent = 'Valider';
  btnValidation.addEventListener('click', () => {
    ajouterArticlePanier();
    validationChoix.style.display = 'none';
    validationChoix.innerHTML = '';
  });

  containerDemandeValidation.appendChild(demandeValidation);
  containerDemandeValidation.appendChild(btnValidation);

  addPopup.appendChild(containerDemandeValidation);
}

function afficherPopupMessageAPISucces() {
  closeAllPopups();

  const messageValidation = document.getElementById('succes-commande');
  const modeCommande = localStorage.getItem('mode');

  if (!messageValidation) {
    console.error('Conteneur popup introuvable');
    return;
  }

  messageValidation.style.display = 'flex';
  messageValidation.innerHTML = '';

  const addPopup = document.createElement('section');
  addPopup.id = 'popupValider';
  addPopup.tabIndex = 0;

  const addLogoCroix = document.createElement('div');
  addLogoCroix.id = 'img-logo-croix';

  const addImgLogoCroix = document.createElement('img');
  addImgLogoCroix.id = 'croix';
  addImgLogoCroix.tabIndex = 0;
  addImgLogoCroix.src = './assets/supprimer.png';
  addImgLogoCroix.alt = 'Logo Croix';

  addImgLogoCroix.addEventListener('click', () => {
    console.log('tu as cliqué sur la croix');
    messageValidation.style.display = 'none';
    messageValidation.innerHTML = '';
  });
  addImgLogoCroix.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addImgLogoCroix.click();
    }
  });

  messageValidation.appendChild(addPopup);
  addPopup.focus();
  addPopup.appendChild(addLogoCroix);
  addLogoCroix.appendChild(addImgLogoCroix);

  const containerDemandeValidation = document.createElement('div');
  const demandeValidation = document.createElement('p');
  const memoireArticle = localStorage.getItem('memoireArticle');
  demandeValidation.innerHTML = 'Votre commande a été validée avec succès&nbsp;!';
  demandeValidation.style.paddingBottom = '20px';

  const btnValidation = document.createElement('button');
  btnValidation.id = 'btn-etape-suivante';
  btnValidation.textContent = 'OK';
  btnValidation.addEventListener('click', () => {
    if (modeCommande === 'sur place') {
      window.location.href = 'chevalet.html';
    } else if (modeCommande === 'à emporter') {
      window.location.href = 'remerciements.html';
    }
  });

  containerDemandeValidation.appendChild(demandeValidation);
  containerDemandeValidation.appendChild(btnValidation);

  addPopup.appendChild(containerDemandeValidation);
}

function afficherPopupMessageAPIErreur() {
  closeAllPopups();

  const messageValidation = document.getElementById('succes-commande');
  const modeCommande = localStorage.getItem('mode');

  if (!messageValidation) {
    console.error('Conteneur popup introuvable');
    return;
  }

  messageValidation.style.display = 'flex';
  messageValidation.innerHTML = '';

  const addPopup = document.createElement('section');
  addPopup.id = 'popupValider';

  const addLogoCroix = document.createElement('div');
  addLogoCroix.id = 'img-logo-croix';

  const addImgLogoCroix = document.createElement('img');
  addImgLogoCroix.id = 'croix';
  addImgLogoCroix.src = './assets/supprimer.png';
  addImgLogoCroix.alt = 'Logo Croix';

  addImgLogoCroix.addEventListener('click', () => {
    messageValidation.style.display = 'none';
    messageValidation.innerHTML = '';
  });

  messageValidation.appendChild(addPopup);
  addPopup.appendChild(addLogoCroix);
  addLogoCroix.appendChild(addImgLogoCroix);

  const containerDemandeValidation = document.createElement('div');
  const demandeValidation = document.createElement('p');
  const memoireArticle = localStorage.getItem('memoireArticle');
  demandeValidation.innerHTML = "Une erreur s'est produite&nbsp;!";
  demandeValidation.style.paddingBottom = '20px';

  const btnValidation = document.createElement('button');
  btnValidation.id = 'btn-etape-suivante';
  btnValidation.textContent = 'OK';
  btnValidation.addEventListener('click', () => {
    console.log('Vous avez cliqué sur ok');
    if (modeCommande === 'sur place') {
      window.location.href = 'chevalet.html';
    } else if (modeCommande === 'à emporter') {
      window.location.href = 'remerciements.html';
    }
  });

  containerDemandeValidation.appendChild(demandeValidation);
  containerDemandeValidation.appendChild(btnValidation);

  addPopup.appendChild(containerDemandeValidation);
}

function closeAllPopups() {
  document.getElementById('container-popup-articles').style.display = 'none';
  document.getElementById('succes-commande').style.display = 'none';
}
