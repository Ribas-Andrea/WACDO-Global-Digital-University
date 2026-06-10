const panier = []; // Creation d'un tableau pour les articles du panier


// Création de la fonction pour afficher les données de la nav bar dans la console puis dans le DOM:
function getDataCat() {
  // Pour insérer catNav dans le DOM :
  const catList = document.getElementById('container-liste-categories');

  // fonction fetch pour récupérer les données du json
  fetch('./data/categories.json')
    .then((response) => response.json())
    .then((categories) => {
      console.log(categories);

      // On créer les différentes section/div/p/img du html :
      categories.forEach((cat, index) => {
        // Fichier html en dur :
        // <div class="card-categories-nav">
        //   <div class="container-img-card-categorie">
        //          <img class="img-card-categorie" src="assets/categories/menus.png" alt="produits" />
        //   </div>
        //   <div class="container-titre-img-nav">
        //          <p class="titre-img-nav">produits</p>
        //   </div>
        // </div>

        // 1- on ajoute catNav et on lui met une écoute au click
        const catNav = document.createElement('div'); // creation de la div sur le dom
        catNav.id = index; // creation d'un id par card (pour pouvoir ajouter une couleur de bordure à chaque écoute (à chaque click))
        catNav.classList.add('card-categories-nav'); // Ajoute une class à chaque card (pour le CSS)
        // Cela revient à dire que nous mettons des paramètres à catNav : let catNav = { id: 0, classList: [], addEventListener: () => {}...... }

        function selectionnerCard(event) {
          // Création de la fonction pour selectionner une card

          const catListCard = document.getElementById('container-liste-categories'); // Au click je récupère la div parente (avec l'id container-liste-categories) qui à toute les div enfant pour les cards de la nav

          // Parcourir l'élément catListCard pour récupéré cet élément enfant
          // let catNav = { id: 0, classList: [], addEventListener: () => {}, children: []...... } => dans ma console, je voit que catNav à la propriété children

          for (let index = 0; index < catListCard.children.length; index++) {
            // Parcourir la liste des enfants du parent (la liste des cards de la nav) avec la boucle for :
            // let index = 0                     => Initialisation du point de départ de la boucle for (0 est le première élément du tableau)
            // index < catList2.children.length  => Comparaison pour savoir quand on sort de la boucle (si l'index est inférieur au nombre d'élément de la liste on continue le traitement) : Attention on utilise strictement inférieur au nombre d'élément car dans un tableau le premier élément commence toujours à 0 (donc pour burger il y a 8 éléments, mais le 8ème est le 7ème)
            // Index++                           => Ajoute à chaque fin de boucle +1 à la variable index

            const cardInitiale = catListCard.children[index]; // Récupération de l'élément enfants  catListCard(parent).children(enfant)[index](on prend l'enfant à la position index)
            cardInitiale.style.borderColor = '#6e6e6e'; // On applique une couleur de bordure initial (et permettra à revenir à cette couleur à la fin de l'évènement)
            cardInitiale.style.borderWidth = '1px'; // on remet la bordure à 1px
          } // fin de la boucle

          // Ajout de la brodure jaune :
          const catNavSelectCard = document.getElementById(index); // on créer une variable catNavSelectCard avec l'id index que l'on a créer précédement
          catNavSelectCard.style.borderColor = '#ffc836'; // on pplique une couleur jaune au click (à la selection de la card)
          catNavSelectCard.style.borderWidth = '4px'; // on applique une largeur de bordure de 4px

          // Ajout du contenu correspondant (permet de lancer les fonction titre, description et produits selon l'id) :

          if (index === 0) {
            afficherPopupNav('menus');
            afficherDescription(index);
            afficherProduits('menus');
          }

          if (index === 1) {
            afficherPopupNav('boissons');
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
        } // fin de la fonction => cette fonction permet de mettre en jaune au click, et lorsque l'on click sur une autre card, celli-ci deviendra jaune et la première reviendra à sa couleur initiale

        catNav.addEventListener('click', selectionnerCard); // on créer l'évènement d'écoute sur catNav au click et on applique la fonction selectionnerCard

        // 2- On ajoute les autres div au DOM

        const catNavContainerImgCard = document.createElement('div');
        catNavContainerImgCard.classList.add('container-img-card-categorie');

        const catNavImgCard = document.createElement('img');
        catNavImgCard.classList.add('img-card-categorie');

        catNavImgCard.src = cat.image; // cat.image : on récupère les données json grâce à la console (ici, on ouvre les catégories (cat) et la partie image de la categorie(image)), attention de bien mettre src pour une image :

        const catNavContainerTitreImg = document.createElement('div');
        catNavContainerTitreImg.classList.add('container-titre-img-nav');

        const catNavTitreImg = document.createElement('p');
        catNavTitreImg.classList.add('titre-img-nav');

        catNavTitreImg.textContent = cat.title; // cat.title : on récupère les données json grâce à la console (ici, on ouvre les catégories (cat) et la partie titre de la catégorie(title)) :

        // On insère les div enfants dans les div parentes selon le fichier html :

        // 1/ création des 2 éléments (img et p) à l'interieur des div
        catNavContainerImgCard.appendChild(catNavImgCard);
        catNavContainerTitreImg.appendChild(catNavTitreImg);

        // 2/ creation des 2 div (container) à l'interieur de la div catNav
        catNav.appendChild(catNavContainerImgCard);
        catNav.appendChild(catNavContainerTitreImg);

        // On ajoute ces implémentation dans le dom :
        catList.appendChild(catNav);
      });
    })
    .catch((err) => {
      console.log('<<<<<<<<<<<<<<', err);
      window.location.href = 'index.html';
    });
}

// Creation de la fonction pour afficher les données titre et descritpion dans le DOM :
function afficherDescription(indexCategorie) {
  const titreProd = document.getElementById('container-nos-produits');
  console.log(titreProd);
  titreProd.innerHTML = ''; // vide les anciens produits


  fetch('./data/categories.json')
    .then((response) => response.json())
    .then((categories) => {
      console.log(categories);

      categories.forEach((titre, index) => {
        console.log(titre, index);

        // <div class="titre-produits"> titreSection
        //   <h1>Nos menus</h1> titreProduit
        //   <p id="description-produits">Un Sandwich,une friture ou une salade et une boisson</p> titreDescritption
        // </div>

        if (index === indexCategorie) {
          const titreSection = document.createElement('div');
          titreSection.classList.add('titre-produits');

          const titreProduit = document.createElement('h1');
          titreProduit.textContent = 'Nos ' + titre.title;
          console.log(titreProduit.textContent);

          const titreDescription = document.createElement('p');
          titreDescription.textContent = titre.description;

          titreProd.appendChild(titreSection);
          titreSection.appendChild(titreProduit);
          titreSection.appendChild(titreDescription);
        }
      });
    })
    .catch((err) => {
      console.log('<<<<<<<<<<<<<<', err);
      window.location.href = 'index.html';
    });
}

// Creation de la fonction pour afficher les données des produits dans le DOM :
function afficherProduits(categories) {
  const prodList = document.getElementById('container-zone-choix');
  prodList.innerHTML = ''; // vide les anciens produits



  fetch('./data/produits.json')
    .then((response) => response.json())
    .then((produits) => {
      console.log(produits);

      produits[categories].forEach((prod) => {
        console.log(produits);

        // <div id="container-zone-choix">  prodContainerZoneChoix
        //   <article class="card-choix"> prodCardChoix
        //     <div class="container-img-card"> prodContainerImgCard
        //                  <img class="img-card-produits" src="assets/burgers/BIG_TASTY_BACON_1_VIANDE.png" alt="BIG_TASTY_BACON_1_VIANDE" /> prodImgCard
        //      </div>
        //     <div class="container-titre-prix"> prodContainerTitrePrix
        //       <h2 class="nom-du-produit">Big Tasty Bacon 1 viande</h2> prodNom
        //       <span class="prix-produit">7.50€</span> prodPrix
        //     </div>
        //   </article>
        // </div>

        const prodContainerZoneChoix = document.createElement('div');
        prodContainerZoneChoix.classList.add('container-zone-choix');

        const prodCardChoix = document.createElement('article');
        prodCardChoix.classList.add('card-choix');
        prodCardChoix.dataset.id = prod.id;




        prodCardChoix.addEventListener('click', () =>{
            
            console.log('Vous avez cliquer sur un article');
            const id = Number(prodCardChoix.dataset.id); // .dataset : est une propriété qui donne accès aux attributs HTML data-* et number permet de la convertir en nombre.
            console.log('id cliqué :', id);

            const categories = {
                1: 'menus',
                2: 'boissons',
                3: 'burgers',
                4: 'frites',
                5: 'encas',
                6: 'wraps',
                7: 'salades',
                8: 'desserts',
                9: 'sauces'
            };

            afficherPopup(categories[id]);

            
            

            // console.table(panier)
            // // Exemple d'ajout d'un tableau avec les articles choisi ( lien avec const panier = [];)
            // panier.push({
            //     type: categories,
            //     nom: prod.nom,
            //     prix: prod.prix,
            //     options: {}
            // });

            // afficherPanier();
        });
        
        const prodContainerImgCard = document.createElement('div');
        prodContainerImgCard.classList.add('container-img-card');

        const prodImgCard = document.createElement('img');
        prodImgCard.classList.add('img-card-produits');
        prodImgCard.src = prod.image;

        const prodContainerTitrePrix = document.createElement('div');
        prodContainerTitrePrix.classList.add('container-titre-prix');

        const prodNom = document.createElement('h2');
        prodNom.classList.add('nom-du-produit');
        prodNom.textContent = prod.nom;

        const prodPrix = document.createElement('span');
        prodPrix.classList.add('prix-produit');
        prodContainerTitrePrix.textContent = prod.prix;

        // <div id="container-zone-choix"> prodList
        //   <div id="container-zone-choix"> </div> prodContainerZoneChoix
        // </div>
        //

        prodList.appendChild(prodContainerZoneChoix);

        // <div id="container-zone-choix">  prodContainerZoneChoix
        //   <article class="card-choix"> prodCardChoix
        //   </article>
        // </div>

        prodContainerZoneChoix.appendChild(prodCardChoix);

        // <article class="card-choix"> prodCardChoix
        //   <div class="container-img-card"> prodContainerImgCard
        //     </div>
        //   <div class="container-titre-prix"> prodContainerTitrePrix
        //   </div>
        // </article>

        prodCardChoix.appendChild(prodContainerImgCard);
        prodCardChoix.appendChild(prodContainerTitrePrix);

        // <div class="container-img-card"> prodContainerImgCard
        //     <img class="img-card-produits" src="assets/burgers/BIG_TASTY_BACON_1_VIANDE.png" alt="BIG_TASTY_BACON_1_VIANDE" /> prodImgCard
        // </div>

        prodContainerImgCard.appendChild(prodImgCard);

        // <div class="container-titre-prix"> prodContainerTitrePrix
        //     <h2 class="nom-du-produit">Big Tasty Bacon 1 viande</h2> prodNom
        //     <span class="prix-produit">7.50€</span> prodPrix
        // </div>

        prodContainerTitrePrix.appendChild(prodNom);
        prodContainerTitrePrix.appendChild(prodPrix);
      });
    })
    // .catch((err) => {
    //   console.log('<<<<<<<<<<<<<<', err);
    //   window.location.href = 'index.html';
    // });
}

// Creation de la fonction pour afficher la popup de choix du menus à partir de la nav : 
function afficherPopupNav (categorieRecherchee){

  const containerPopupNav = document.getElementById('container-popup');
  console.log(containerPopupNav);

  // on vérifie si containerPopup existe : 
    if (!containerPopupNav) {
      console.error('Conteneur popupNav introuvable');
      return;
    }

      // pour enlever le display none de la popup
  containerPopupNav.style.display = 'flex';
  containerPopupNav.innerHTML = ''; 

    fetch('./data/categories.json')
      .then((response) => response.json())
      .then((popups) => {
        console.log(popups);

        const popup = popups.find(
          item => item.title === categorieRecherchee
        );

        if (!popup) {
          console.error("Aucune popupNav trouvée pour :", categorieRecherchee);
          return;
        }

    

  //   <section id="popup">   addPopup
  //     <div id="img-logo-croix"> addLogoCroix
  //       <img id="croix" src="./assets/supprimer.png" alt="Logo croix Fermeture" /> addImgLogoCroix
  //     </div>
  //     <div id="container-titre-description-img"> addContainerTitreDescriptionImg
  //       <div id="container-titre-descritpion-popup"> addContainerTitreDescriptionPopup
  //         <h1>Une petite soif ?</h1> titrePopup
  //         <p id="texte-description-popup">Choisissez la taille de votre boisson, +0.50€ pour le format 50Cl</p> descriptionPopup
  //       </div>
  //       <div id="container-choix-taille"> addContainerChoixTaille
  //         <div class="container-taille"> addContainerPetiteTaille
  //           <div> addDivParentImgTaille
  //             <img id="img-petite-taille" src="./assets/boissons/coca-cola.png" alt="Illustration 30 Cl" /> imgPetiteTaille
  //           </div>
  //           <div> addDivTxtChoixTaille
  //             <span class="texte-choix-taille">30 Cl</span> texteChoixTaille
  //           </div>
  //         </div>
  //         <div class="container-taille"> addContainerGrandeTaille
  //           <div> addDivParentImgTaille
  //             <img id="img-grande-taille" src="./assets/boissons/coca-cola.png" alt="Illustration 50 Cl" /> imgGrandeTaille
  //           </div>
  //           <div> addDivTxtChoixTaille
  //             <span class="texte-choix-taille">50 Cl</span> texteChoixTaille
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <div id="container-parent-compteur"> addContainerParentCompteur
  //       <div id="container-compteur"> addContaineCompteur
  //         <button id="btn-moins">-</button> btnMoins
  //         <span id="valeur-compteur"> 1 </span> valeurCompteur
  //         <button id="btn-plus">+</button> btnPlus
  //       </div>
  //     </div>
  //     <div id="container-btn-validation"> addContainerBtnValidation
  //       <button id="btn-annuler-commande">Annuler</button> btnAnnuler
  //       <button id="btn-ajouter-commande">Ajouter a ma commande</button> btnAjouter
  //     </div>
  //   </section>
  // </main>



  // parent main id container-popup
  //   > addPopup section  id popup
  //     > addLogoCroix div id img-logo-croix 
  //       > addImgLogoCroix img id croix


      const addPopup = document.createElement ('section');
      addPopup.id = 'popup';

      const addLogoCroix = document.createElement ('div');
      addLogoCroix.id ='img-logo-croix';

      const addImgLogoCroix = document.createElement ('img');
      addImgLogoCroix.id ='croix';
      addImgLogoCroix.src = './assets/supprimer.png';
      addImgLogoCroix.alt = 'Logo Croix';


      // pour fermer la popup avec la croix
      addImgLogoCroix.addEventListener('click', () => {
      containerPopupNav.style.display = 'none';
      containerPopupNav.innerHTML = '';
      });

      containerPopupNav.appendChild(addPopup);
      addPopup.appendChild(addLogoCroix);
      addLogoCroix.appendChild(addImgLogoCroix);

    // > addContainerTitreDescriptionImg div id container-titre-description-img
    //   > addContainerTitreDescriptionPopup div id container-titre-descritpion-popup
    //     > titrePopup h1 
    //     > descriptionPopup p id texte-description-popup
    //   > addContainerChoixTaille div id container-choix-taille
    //     > addContainerPetiteTaille div class container-taille
    //       > addDivParentImgPetiteTaille div 
    //         > imgPetiteTaille img id img-petite-taille
    //       > addDivTxtChoixPetiteTaille div
    //         > texteChoixPetiteTaille span class texte-choix-taille
    //     > addContainerGrandeTaille div class container-taille
    //       > addDivParentImgGrandeTaille div 
    //         > imgGrandeTaille img id img-grande-taille
    //       > addDivTxtChoixGrandeTaille div
    //         > texteChoixGrandeTaille span class texte-choix-taille


      const addContainerTitreDescriptionImg = document.createElement ('div');
      addContainerTitreDescriptionImg.id = 'container-titre-description-img';

      const addContainerTitreDescriptionPopup = document.createElement ('div');
      addContainerTitreDescriptionPopup.id = 'container-titre-descritpion-popup';

      const titrePopup = document.createElement ('h1');
      titrePopup.textContent = "Une grosse faim ?"

      const descriptionPopup = document.createElement ('p');
      descriptionPopup.id = 'texte-description-popup';
      descriptionPopup.textContent = "Le menu maxi Best Of comprend un sandwich, une grande frite et une boisson 50 Cl";

      const addContainerChoixTaille = document.createElement ('div');
      addContainerChoixTaille.id ='container-choix-taille';

      // Ceci permet de créer le conteneur pour les boissons pour l'afficher puis l'enlever avec la flèche retour
      const containerChoixBoissons = document.createElement('div');
      containerChoixBoissons.classList.add('nav-popup-boissons');
      containerChoixBoissons.style.display = 'none';

      const addContainerPetiteTaille = document.createElement ('div');
      addContainerPetiteTaille.classList.add('container-taille');
      addContainerPetiteTaille.addEventListener("click", () => {
      addContainerPetiteTaille.classList.add("activeBorder");
      addContainerGrandeTaille.classList.remove("activeBorder");
      });

      const addDivParentImgPetiteTaille = document.createElement ('div');

      const imgPetiteTaille = document.createElement ('img');
      imgPetiteTaille.id = 'img-petite-taille';
      imgPetiteTaille.src= "./assets/illustration-best-of.png";
      imgPetiteTaille.alt = 'Petite Taille';

      const addDivTxtChoixPetiteTaille = document.createElement ('div');

      const texteChoixPetiteTaille = document.createElement ('span');
      texteChoixPetiteTaille.classList.add('texte-choix-taille');
      texteChoixPetiteTaille.textContent='Menu Best Of'

      const addContainerGrandeTaille = document.createElement ('div');
      addContainerGrandeTaille.classList.add('container-taille');
      addContainerGrandeTaille.addEventListener("click", () => {
      addContainerGrandeTaille.classList.add("activeBorder");
      addContainerPetiteTaille.classList.remove("activeBorder");
      });

      const addDivParentImgGrandeTaille = document.createElement ('div');

      const imgGrandeTaille = document.createElement ('img');
      imgGrandeTaille.id = 'img-grande-taille';
      imgGrandeTaille.src= "./assets/illustration-maxi-best-of.png";
      imgGrandeTaille.alt = 'Grande Taille';

      const addDivTxtChoixGrandeTaille = document.createElement ('div');

      const texteChoixGrandeTaille = document.createElement ('span');
      texteChoixGrandeTaille.classList.add('texte-choix-taille');
      texteChoixGrandeTaille.textContent='Menu Maxi Best Of';

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


    // > addContainerBtnValidation div id container-btn-validation
    //   > btnAnnuler  button id btn-annuler-commande
    //   > btnAjouter button id btn-ajouter-commande
      
      const addContainerBtnValidation = document.createElement('div');
      addContainerBtnValidation.id = 'container-btn-validation';

  // On utilise switch case pour modifier les éléments à l'interieur de la popup sans modifier le style de la popup : 
      let step = 1;

  // Ajout du bouton suivant : 
      const OpenbtnEtapeSuivante = document.createElement('button');
      OpenbtnEtapeSuivante.id = 'btn-etape-suivante';
      OpenbtnEtapeSuivante.textContent = 'Étape suivante';

      OpenbtnEtapeSuivante.addEventListener("click", () => {

        if(step < 4){
          step++;
          afficherEtape();
        }

      });


  // Ajout du bouton retour : 
      const btnRetour = document.createElement('button');
      btnRetour.id = 'btn-retour';
      btnRetour.textContent = 'Retour';
      btnRetour.addEventListener("click", () => {

        if(step > 1){
          step--;
          afficherEtape();
        }

      });

            addPopup.appendChild(addContainerBtnValidation);
            addContainerBtnValidation.appendChild(OpenbtnEtapeSuivante);
            addLogoCroix.appendChild(btnRetour);

        function afficherEtape() {

          switch(step) {

            case 1:
              btnRetour.style.display = 'none';
              titrePopup.style.display = 'flex';
              descriptionPopup.style.display = 'flex';
              imgPetiteTaille.style.display = 'flex';
              imgGrandeTaille.style.display = 'flex';


              // mettre un switch case avec evenement au click sur le menu pour afficher 50Cl ou 30cl sur le titre
              
              texteChoixPetiteTaille.textContent = 'Menu Best Of';
              imgPetiteTaille.src= "./assets/illustration-best-of.png";

              texteChoixGrandeTaille.textContent = 'Menu Maxi Best Of';
              imgGrandeTaille.src= "./assets/illustration-maxi-best-of.png";
              titrePopup.textContent = "Une grosse faim ?";
              descriptionPopup.textContent = "Le menu maxi Best Of comprend un sandwich, une grande frite et une boisson 50 Cl";
              
              break;

            case 2:
              btnRetour.style.display = 'flex';
              titrePopup.style.display = 'flex';
              descriptionPopup.style.display = 'flex';
              containerChoixBoissons.style.display = 'none';
              addContainerPetiteTaille.style.display = 'flex';
              addContainerGrandeTaille.style.display = 'flex';
              titrePopup.textContent = "Choisissez votre accompagnement";
              descriptionPopup.textContent = "Frites, potatoes, la pomme de terre dans tous ses états";
              texteChoixGrandeTaille.textContent='Potatoes';
              imgGrandeTaille.src= "./assets/frites/GRANDE_POTATOES.png";
              imgGrandeTaille.style.width = "100%";
              imgGrandeTaille.style.height = "100%";
              texteChoixPetiteTaille.textContent='Frites';
              imgPetiteTaille.src= "./assets/frites/MOYENNE_FRITE.png";
              break;

            case 3:
              btnRetour.style.display = 'flex';
              titrePopup.style.display = 'flex';
              descriptionPopup.style.display = 'flex';
              addContainerPetiteTaille.style.display = 'none';
              addContainerGrandeTaille.style.display = 'none';
              addContainerChoixTaille.style.display = 'block';
              titrePopup.textContent = "Choisissez votre boisson";
              descriptionPopup.textContent = "Un soda , un jus de fruit ou un verre d’eau pour accompagner votre repas";

              fetch('./data/produits.json')
                .then(response => response.json())
                .then(data => {

                  const listboissons = data.boissons;

{/* <main id="container-popup">
    <div id="nav-popup-boissons"> containerChoixBoissons
          <nav id="nav-page-produits"> navPopupBoissons
                  <img id="fleche-gauche" src="assets/fleche-slider.png" alt="fleche-slider-gauche" />  imgFlecheGaucheBoissons
                  <div id="choix-categorie-produits"> choixBoissons
                            <div id="container-liste-categories"> containerListBoissons
                                            <div class="card-categories-nav"> cardBoisson
                                                <div class="container-img-card-categorie"> containerImgCardBoisson
                                                            <img class="img-card-categorie"> imgCardBoisson
                                                </div>
                                                <div class="container-titre-img-nav"> containerTitreCardBoisson
                                                            <p class="titre-img-nav"></p> titreCardBoisson
                                                </div>
                                            </div>

                            </div>
                  </div>
                  <img class="fleche-droite" src="assets/fleche-slider.png" alt="fleche-slider-droite" /> imgFlecheDroiteBoissons
          </nav>
    </div>    
</main> */}

// Element conteneur des boissons avec les flèches : 




                  containerChoixBoissons.innerHTML = '';
                  containerChoixBoissons.style.display = 'block';
                  // le conteneur des boissons a déjà été créer plus tôt dans la fonction, donc on le vide et le réaffiche avec les bon éléments

                  const imgFlecheGaucheBoissons = document.createElement('img');
                  imgFlecheGaucheBoissons.id ="fleche-gauche";
                  imgFlecheGaucheBoissons.src = './assets/fleche-slider.png';

                      let compteur = 0;
                      const max = 4; // exemple à adapter selon nombre de catégories visibles
                      imgFlecheGaucheBoissons.addEventListener('click', () => {

                        if (compteur > 0 ) {
                            compteur--;
                            containerListBoissons.style.transform = `translateX(-${145 * compteur}px)`;
                        }
                      });





                  const choixBoissons = document.createElement('div');
                  choixBoissons.id = "choix-categorie-produits"; 

                  const containerListBoissons = document.createElement('div');
                  containerListBoissons.id ="container-liste-categories";

                  const imgFlecheDroiteBoissons = document.createElement('img');
                  imgFlecheDroiteBoissons.classList.add ('fleche-droite');
                  imgFlecheDroiteBoissons.src = './assets/fleche-slider.png';

                      imgFlecheDroiteBoissons.addEventListener('click', () => {

                          if (compteur < max) {
                              compteur++;
                              containerListBoissons.style.transform = `translateX(-${145 * compteur}px)`;
                          }
                      });



                  choixBoissons.appendChild(containerListBoissons);

                  containerChoixBoissons.appendChild(imgFlecheGaucheBoissons);
                  containerChoixBoissons.appendChild(choixBoissons);
                  containerChoixBoissons.appendChild(imgFlecheDroiteBoissons);

                  addContainerChoixTaille.appendChild(containerChoixBoissons);

                      listboissons.forEach((boisson) => {


// La creation des card boissons : 
                      
                        const cardBoisson = document.createElement('div');
                        cardBoisson.classList.add('card-categories-nav');

                        const containerImgCardBoisson = document.createElement('div');
                        containerImgCardBoisson.classList.add('container-img-card-categorie');

                        const imgCardBoisson = document.createElement('img');
                        imgCardBoisson.classList.add('img-card-categorie');
                        imgCardBoisson.src = boisson.image;

                        const containerTitreCardBoisson = document.createElement('div');
                        containerTitreCardBoisson.classList.add('container-titre-img-nav');

                        const titreCardBoisson = document.createElement('p');
                        titreCardBoisson.classList.add('titre-img-nav');
                        titreCardBoisson.textContent = boisson.nom;

                        containerImgCardBoisson.appendChild(imgCardBoisson);
                        containerTitreCardBoisson.appendChild(titreCardBoisson);

                        cardBoisson.appendChild(containerImgCardBoisson);
                        cardBoisson.appendChild(containerTitreCardBoisson);


                        containerListBoissons.appendChild(cardBoisson);

                      });

              });


              OpenbtnEtapeSuivante.textContent = 'Ajouter le menu à ma commande';
              break;

            case 4:
              OpenbtnEtapeSuivante.addEventListener('click', () => {
                  if(step === 4){
                  afficherPanier();
                  }
              })
              break;  
          };


        }
      afficherEtape();
      });
};


// Creation de la fonction pour afficher les popup par la section principale : 
// function afficherPopup (categorieRecherchee){

// const containerPopup = document.getElementById('container-popup');
// console.log(containerPopup);

// // on vérifie si containerPopup existe : 
//   if (!containerPopup) {
//     console.error('Conteneur popup introuvable');
//     return;
//     }

//     // pour enlever le display none de la popup
// containerPopup.style.display = 'flex';
// containerPopup.innerHTML = ''; 

//   fetch('./data/categories.json')
//     .then((response) => response.json())
//     .then((popups) => {
//       console.log(popups);

//        const popup = popups.find(
//         item => item.title === categorieRecherchee
//       );

//       if (!popup) {
//         console.error("Aucune popup trouvée pour :", categorieRecherchee);
//         return;
//       }

  

// //   <section id="popup">   addPopup
// //     <div id="img-logo-croix"> addLogoCroix
// //       <img id="croix" src="./assets/supprimer.png" alt="Logo croix Fermeture" /> addImgLogoCroix
// //     </div>
// //     <div id="container-titre-description-img"> addContainerTitreDescriptionImg
// //       <div id="container-titre-descritpion-popup"> addContainerTitreDescriptionPopup
// //         <h1>Une petite soif ?</h1> titrePopup
// //         <p id="texte-description-popup">Choisissez la taille de votre boisson, +0.50€ pour le format 50Cl</p> descriptionPopup
// //       </div>
// //       <div id="container-choix-taille"> addContainerChoixTaille
// //         <div class="container-taille"> addContainerPetiteTaille
// //           <div> addDivParentImgTaille
// //             <img id="img-petite-taille" src="./assets/boissons/coca-cola.png" alt="Illustration 30 Cl" /> imgPetiteTaille
// //           </div>
// //           <div> addDivTxtChoixTaille
// //             <span class="texte-choix-taille">30 Cl</span> texteChoixTaille
// //           </div>
// //         </div>
// //         <div class="container-taille"> addContainerGrandeTaille
// //           <div> addDivParentImgTaille
// //             <img id="img-grande-taille" src="./assets/boissons/coca-cola.png" alt="Illustration 50 Cl" /> imgGrandeTaille
// //           </div>
// //           <div> addDivTxtChoixTaille
// //             <span class="texte-choix-taille">50 Cl</span> texteChoixTaille
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //     <div id="container-parent-compteur"> addContainerParentCompteur
// //       <div id="container-compteur"> addContaineCompteur
// //         <button id="btn-moins">-</button> btnMoins
// //         <span id="valeur-compteur"> 1 </span> valeurCompteur
// //         <button id="btn-plus">+</button> btnPlus
// //       </div>
// //     </div>
// //     <div id="container-btn-validation"> addContainerBtnValidation
// //       <button id="btn-annuler-commande">Annuler</button> btnAnnuler
// //       <button id="btn-ajouter-commande">Ajouter a ma commande</button> btnAjouter
// //     </div>
// //   </section>
// // </main>



// // parent main id container-popup
// //   > addPopup section  id popup
// //     > addLogoCroix div id img-logo-croix 
// //       > addImgLogoCroix img id croix


//     const addPopup = document.createElement ('section');
//     addPopup.id = 'popup';


//     const addLogoCroix = document.createElement ('div');
//     addLogoCroix.id ='img-logo-croix';

//     const addImgLogoCroix = document.createElement ('img');
//     addImgLogoCroix.id ='croix';
//     addImgLogoCroix.src = './assets/supprimer.png';
//     addImgLogoCroix.alt = 'Logo Croix';


//     // pour fermer la popup avec la croix
//     addImgLogoCroix.addEventListener('click', () => {
//     containerPopup.style.display = 'none';
//     containerPopup.innerHTML = '';
// });

//     containerPopup.appendChild(addPopup);
//     addPopup.appendChild(addLogoCroix);
//     addLogoCroix.appendChild(addImgLogoCroix);

//   // > addContainerTitreDescriptionImg div id container-titre-description-img
//   //   > addContainerTitreDescriptionPopup div id container-titre-descritpion-popup
//   //     > titrePopup h1 
//   //     > descriptionPopup p id texte-description-popup
//   //   > addContainerChoixTaille div id container-choix-taille
//   //     > addContainerPetiteTaille div class container-taille
//   //       > addDivParentImgPetiteTaille div 
//   //         > imgPetiteTaille img id img-petite-taille
//   //       > addDivTxtChoixPetiteTaille div
//   //         > texteChoixPetiteTaille span class texte-choix-taille
//   //     > addContainerGrandeTaille div class container-taille
//   //       > addDivParentImgGrandeTaille div 
//   //         > imgGrandeTaille img id img-grande-taille
//   //       > addDivTxtChoixGrandeTaille div
//   //         > texteChoixGrandeTaille span class texte-choix-taille


//     const addContainerTitreDescriptionImg = document.createElement ('div');
//     addContainerTitreDescriptionImg.id = 'container-titre-description-img';

//     const addContainerTitreDescriptionPopup = document.createElement ('div');
//     addContainerTitreDescriptionPopup.id = 'container-titre-descritpion-popup';

//     const titrePopup = document.createElement ('h1');
//     titrePopup.textContent = popup.title

//     const descriptionPopup = document.createElement ('p');
//     descriptionPopup.id = 'texte-description-popup';
//     descriptionPopup.textContent = popup.description;

//     const addContainerChoixTaille = document.createElement ('div');
//     addContainerChoixTaille.id = 'container-choix-taille';

//     const addContainerPetiteTaille = document.createElement ('div');
//     addContainerPetiteTaille.classList.add('container-taille');

//     const addDivParentImgPetiteTaille = document.createElement ('div');

//     const imgPetiteTaille = document.createElement ('img');
//     imgPetiteTaille.id = 'img-petite-taille';
//     imgPetiteTaille.src = popup.image;
//     imgPetiteTaille.alt = 'Petite Taille';

//     const addDivTxtChoixPetiteTaille = document.createElement ('div');

//     const texteChoixPetiteTaille = document.createElement ('span');
//     texteChoixPetiteTaille.classList.add('texte-choix-taille');
//     texteChoixPetiteTaille.textContent='30 Cl'

//     const addContainerGrandeTaille = document.createElement ('div');
//     addContainerGrandeTaille.classList.add('container-taille');

//     const addDivParentImgGrandeTaille = document.createElement ('div');

//     const imgGrandeTaille = document.createElement ('img');
//     imgGrandeTaille.id = 'img-grande-taille';
//     imgGrandeTaille.src = popup.image;
//     imgGrandeTaille.alt = 'Grande Taille';

//     const addDivTxtChoixGrandeTaille = document.createElement ('div');

//     const texteChoixGrandeTaille = document.createElement ('span');
//     texteChoixGrandeTaille.classList.add('texte-choix-taille');
//     texteChoixGrandeTaille.textContent='50 Cl'

//     addPopup.appendChild(addContainerTitreDescriptionImg);

//     addContainerTitreDescriptionImg.appendChild(addContainerTitreDescriptionPopup);
//     addContainerTitreDescriptionImg.appendChild(addContainerChoixTaille);

//     addContainerTitreDescriptionPopup.appendChild(titrePopup);
//     addContainerTitreDescriptionPopup.appendChild(descriptionPopup);

//     addContainerChoixTaille.appendChild(addContainerPetiteTaille);
//     addContainerChoixTaille.appendChild(addContainerGrandeTaille);

//     addContainerPetiteTaille.appendChild(addDivParentImgPetiteTaille);
//     addContainerPetiteTaille.appendChild(addDivTxtChoixPetiteTaille);


//     addDivParentImgPetiteTaille.appendChild(imgPetiteTaille);
//     addDivTxtChoixPetiteTaille.appendChild(texteChoixPetiteTaille);


//     addContainerGrandeTaille.appendChild(addDivParentImgGrandeTaille);
//     addContainerGrandeTaille.appendChild(addDivTxtChoixGrandeTaille);


//     addDivParentImgGrandeTaille.appendChild(imgGrandeTaille);
//     addDivTxtChoixGrandeTaille.appendChild(texteChoixGrandeTaille);


//   // > addContainerParentCompteur div id container-parent-compteur
//   //   > addContaineCompteur div  id container-compteur
//   //     > btnMoins button id btn-moins
//   //     > valeurCompteur span id valeur-compteur
//   //     > btnPlus button id btn-plus

    
//     const addContainerParentCompteur = document.createElement ('div');
//     addContainerParentCompteur.id = 'container-parent-compteur';

//     const addContaineCompteur = document.createElement ('div');
//     addContaineCompteur.id = 'container-compteur';

//     const btnMoins = document.createElement ('button');
//     btnMoins.id = 'btn-moins';
//     btnMoins.textContent='-';

//     const valeurCompteur = document.createElement ('span');
//     valeurCompteur.id = 'valeur-compteur';

//     const btnPlus = document.createElement ('button');
//     btnPlus.id = 'btn-plus';
//     btnPlus.textContent='+';

//     addPopup.appendChild(addContainerParentCompteur);

//     addContainerParentCompteur.appendChild(addContaineCompteur);
//     addContaineCompteur.appendChild(btnMoins);
//     addContaineCompteur.appendChild(valeurCompteur);
//     addContaineCompteur.appendChild(btnPlus);

//   // > addContainerBtnValidation div id container-btn-validation
//   //   > btnAnnuler  button id btn-annuler-commande
//   //   > btnAjouter button id btn-ajouter-commande
    
//     const addContainerBtnValidation = document.createElement('div');
//     addContainerBtnValidation.id = 'container-btn-validation';

//     const btnAnnuler = document.createElement ('button');
//     btnAnnuler.id = 'btn-annuler-commande';

//     const btnAjouter = document.createElement ('button');
//     btnAjouter.id = 'btn-ajouter-commande';

//     addPopup.appendChild(addContainerBtnValidation);
//     addContainerBtnValidation.appendChild(btnAnnuler);
//     addContainerBtnValidation.appendChild(btnAjouter);

//   });
// }



// -------------------------------------------------------------- Panier -----------------------------------------------------------------------------------


function afficherPanier(){
  const containerPanier = document.getElementById('container-articles-panier');
  console.log(containerPanier);
  containerPanier.innerHTML = ''; 
  if (!containerPanier) {
    console.error('Conteneur panier introuvable');
    return;
    }

  panier.forEach((article) => {
    console.log(article) ;


// <article class="produits-panier">
//     <h3>Menu 1</h3>
//     <img class="logo-trash" src="assets/trash.png" alt="Logo Supprimer" />
// </article>
// <ul class="liste-detail-produits">
//   <li>frite</li>
//   <li>sprite</li>
//   <li>ketchup</li>
//   <li>sauce deluxe</li>
// </ul>


const prodPanier = document.createElement ('article');
prodPanier.classList.add('produits-panier');

const titrePanier = document.createElement('h3');
titrePanier.textContent = article.nom;

const logoSupp = document.createElement ('img');
logoSupp.classList.add('logo-trash');
logoSupp.src = './assets/trash.png';
logoSupp.alt = 'Supprimer';


prodPanier.appendChild(titrePanier);
prodPanier.appendChild(logoSupp);

const listPanier = document.createElement('ul');
listPanier.classList.add('liste-detail-produits');

Object.entries(article.options).forEach(([cle, valeur]) => {
    const li = document.createElement('li');
    li.textContent = valeur;
    listPanier.appendChild(li);
});


containerPanier.appendChild(prodPanier);
containerPanier.appendChild(listPanier);

  })
}


getDataCat();

// Les fonctions (afficherDescription()) et (afficherProduits()) sont lancés directement dans la fonction principale getDataCat() grâce à la detection du clic de la nav bar


