const panier = []; 
// Creation d'un tableau pour les articles du panier

// -------------------------------------------------------------- NavBar -------------------------------------------------------------------------------------------------
// Création de la fonction pour afficher les données de la nav bar dans la console puis dans le DOM:
function getDataCat() {

// Pour insérer catNav dans le DOM (dans l'élément ayant l'id container-liste-categories):
  const catList = document.getElementById('container-liste-categories');


// fonction fetch pour récupérer les données du fichier JSON des categories :
  fetch('./data/categories.json') 
// // fetch : Sert à récupérer des données depuis Internet (API, serveur) : on va chercher dans le fichier JSON
    .then((response) => response.json()) 
// puis convertit la réponse en objet Javascript
    .then((categories) => {
// puis on parcourt les categories du fichier JSON
// console.log(categories); // on vérifie que categories soient bien récupérées avec un message dans la console

// Création des diiférentes balises HTML (div, img, p,..) : Fichier html en dur :
// <div class="card-categories-nav">
//   <div class="container-img-card-categorie">
//          <img class="img-card-categorie" src="assets/categories/menus.png" alt="produits" />
//   </div>
//   <div class="container-titre-img-nav">
//          <p class="titre-img-nav">produits</p>
//   </div>
// </div>
      categories.forEach((cat, index) => {
// Sert à boucler sur un tableau déjà disponible : forEach = je parcours un tableau dont on a déjà les données

// 1- Création des différentes cartes de la nav bar ( toutes les catégories) et ajout d'un écouteur d'évènement au clic
        
        const catNav = document.createElement('div'); 
// creation de la div en mémoire pour l'inclure avec appendChild sur le DOM
        catNav.id = index; 
// Attribue un identifiant unique à chaque carte (permet notamment de modifier son apparence lors d'un clic (voir boucle for en dessous))
        catNav.classList.add('card-categories-nav'); 
// Ajoute une class à chaque card (pour le CSS)
// Ces 2 dernières lignes : Cela revient à dire que nous mettons des paramètres à catNav : let catNav = { id: 0, classList: []) pour ensuite mettre une écoute :  addEventListener: () => {}...... }

        function selectionnerCard(event) {
// Création de la fonction pour selectionner une card

          const catListCard = document.getElementById('container-liste-categories'); 
// Au clic, on récupère la div parente ayant l'ID "container-liste-categories" qui contient toutes les cartes de la nav bar.

// On parcourt les enfants de catListCard afin de récupérer chaque carte.
// Dans la console, on peut observer que chaque élément DOM possède
// une propriété "children" contenant ses éléments enfants.

// Exemple simplifié :
// let catNav = {
//   id: 0,
//   classList: [],
//   children: [],
//   addEventListener: () => {}
// };

          for (let index = 0; index < catListCard.children.length; index++) {
// Parcours de la liste des enfants du conteneur parent
// (la liste des cartes de navigation) à l'aide d'une boucle for.

// let index = 0
// => Initialise le compteur de boucle à 0
// (le premier élément d'un tableau se trouve toujours à l'index 0).

// index < catListCard.children.length
// => La boucle continue tant que l'index est inférieur
// au nombre total d'éléments de la liste.

// Attention : on utilise "<" et non "<="
// car les index commencent à 0.
// Exemple : si la liste contient 8 éléments,
// leurs index vont de 0 à 7.

// index++
// => Incrémente l'index de 1 à chaque tour de boucle.

            const cardInitiale = catListCard.children[index]; 
// Récupération de l'élément enfants  catListCard(parent).children(enfant)[index](on prend l'enfant à la position index)
            cardInitiale.style.borderColor = '#6e6e6e'; 
// On applique une couleur de bordure initial (et permettra à revenir à cette couleur à la fin de l'évènement)
            cardInitiale.style.borderWidth = '1px'; 
// on remet la bordure à 1px
          } 
// fin de la boucle

// Ajout de la bordure jaune sur la carte selectionnée:
          const catNavSelectCard = document.getElementById(index); 
// on récupère la carte correspondant à l'ID "index" que l'on a créé précédemment lors de la génération des cartes.
          catNavSelectCard.style.borderColor = '#ffc836'; 
// on applique une couleur jaune au click (à la selection de la card)
          catNavSelectCard.style.borderWidth = '4px'; 
// on applique une largeur de bordure de 4px

// Affiche le contenu correspondant à la catégorie sélectionnée selon l'index de la carte cliquée, on appelle :
// - afficherDescription() pour mettre à jour le texte descriptif,
// - afficherProduits() pour afficher les produits de la catégorie.


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
// fin de la fonction => Cette fonction met en évidence la carte sélectionnée en jaune.
// Lorsqu'une autre carte est cliquée, elle devient à son tour sélectionnée et la précédente retrouve son apparence par défaut.


        catNav.addEventListener('click', selectionnerCard); 
// on créer l'évènement d'écoute sur catNav au click et on applique la fonction selectionnerCard crée précédement.

// 2- On ajoute les autres éléments HTML au DOM : 

        const catNavContainerImgCard = document.createElement('div');
        catNavContainerImgCard.classList.add('container-img-card-categorie');

        const catNavImgCard = document.createElement('img');
        catNavImgCard.classList.add('img-card-categorie');

        catNavImgCard.src = cat.image; 
// cat.image : on récupère les données JSON grâce à la console (ici, on ouvre les catégories (cat) et la partie image de la categorie(image)), attention de bien mettre src pour une image :

        const catNavContainerTitreImg = document.createElement('div');
        catNavContainerTitreImg.classList.add('container-titre-img-nav');

        const catNavTitreImg = document.createElement('p');
        catNavTitreImg.classList.add('titre-img-nav');

        catNavTitreImg.textContent = cat.title; 
// cat.title : on récupère les données json grâce à la console (ici, on ouvre les catégories (cat) et la partie titre de la catégorie(title)) :

// On insère les div enfants dans les div parentes selon le fichier html :
// 1/ Ajout des éléments(img et p) dans leurs div respectives : 
        catNavContainerImgCard.appendChild(catNavImgCard);
        catNavContainerTitreImg.appendChild(catNavTitreImg);

// 2 - Ajout des conteneurs dans la carte principale catNav : 
        catNav.appendChild(catNavContainerImgCard);
        catNav.appendChild(catNavContainerTitreImg);

// 3 - Ajout de la carte dans le conteneur principal du DOM : 
        catList.appendChild(catNav);
      });
    })
    .catch((err) => {
//.catch() sert à gérer les erreurs d’une promesse (fetch ici).
// Si quelque chose échoue dans :
// le fetch
// ou le response.json()
// ou le .then(...)
      // console.log(err);
// Affiche l’erreur dans la console du navigateur.
      window.location.href = 'index.html';
//Redirige l’utilisateur vers une autre page.
    });
}






// ----------------------------------------------------------------- Main (Titre + Descritpion + Produits) ----------------------------------------------------------------






// Creation de la fonction pour afficher les données titre et descritpion dans le DOM :
function afficherDescription(indexCategorie) {
// indexCategorie est une variable d'entrée, elle sert à recevoir une valeur au moment où la fonction est appelée.
// Autrement dit, elle représente généralement :
// l’index (position) d’une catégorie dans un tableau
// ou un identifiant numérique permettant de savoir quelle catégorie afficher


  const titreProd = document.getElementById('container-nos-produits');
  console.log(titreProd);
// Vérifie si titreprod existe dans la console
  titreProd.innerHTML = ''; 
// vide les anciens titre/ desription des produits


  fetch('./data/categories.json')
    .then((response) => response.json())
  // Convertion en données javascript
    .then((categories) => {
      // console.log(categories);

      categories.forEach((titre, index) => {
      // console.log(titre, index);

// Elle reçoit deux paramètres :

// 1) titre

// correspond à l’élément actuel du tableau

// 1er tour → "Menu"
// 2e tour → "Boissons"
// 3e tour → "Burgers"
// et ..

// 2) index

// correspond à la position de l’élément dans le tableau

// 0 pour "Menu"
// 1 pour "Boissons"
// 2 pour "Burgers"
// etc..


        

        // <div class="titre-produits"> titreSection
        //   <h1>Nos menus</h1> titreProduit
        //   <p id="description-produits">Un Sandwich,une friture ou une salade et une boisson</p> titreDescritption
        // </div>

        if (index === indexCategorie) {
// Sert à savoir si on est dans la bonne catégorie
// index = position actuelle dans la boucle
// indexCategorie = catégorie choisie
// Si je suis sur l'index 1 alors titre.title sera menus
          const titreSection = document.createElement('div');
          titreSection.classList.add('titre-produits');

          const titreProduit = document.createElement('h1');
          titreProduit.textContent = 'Nos ' + titre.title;
          // console.log(titreProduit.textContent); 
// on vérifie ce que contient le titre

          const titreDescription = document.createElement('p');
          titreDescription.textContent = titre.description;

          titreProd.appendChild(titreSection);
          titreSection.appendChild(titreProduit);
          titreSection.appendChild(titreDescription);
        }
      });
    })
    .catch((err) => {
      // console.log(err);
      window.location.href = 'index.html';
    });
}

// Creation de la fonction pour afficher les données des produits dans le DOM :
function afficherProduits(categories) {
  const prodList = document.getElementById('container-zone-choix');
  prodList.innerHTML = ''; 
// vide les anciens produits


  fetch('./data/produits.json')
    .then((response) => response.json())
// Reconvertit en données javascript
    .then((produits) => {
      // console.log(produits);

      produits[categories].forEach((prod) => {
// On accède à une propriété d’un objet ou d’un tableau.
// produits = objet ou tableau principal
// categories = une variable
// On utilise les crochets car le fichier JSON est un objet avec plusieurs catégories et chaque catégorie contient un tableau de produits. Chaque catégorie = un tiroir  et Chaque objet = un produit dans le tiroir
        // console.log(produits); 
// affiche les données du JSON

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
// Ajout de l'évènement au clic pour mettre une bordure (cette bordure va se situer dans la selection des poduits du main)
        prodContainerZoneChoix.addEventListener("click", () => {
          // console.log("clic");
            document.querySelectorAll('.container-zone-choix').forEach(prodCardBoisson => {
            prodCardBoisson.classList.remove('activeBorder');
// Enlève toutes les bordures jaunes
            });
            prodContainerZoneChoix.classList.add("activeBorder");
// Affecte la bordure jaune à l'élément selectionné


// Création de plusieurs if pour l'ouverture des popups : 
            if (categories === "boissons"){
// Si je suis dans la catégorie des boissons
              afficherPopupBoissons("boissons");
// Je vais afficher la popup concernant les boissons
            }
            if (categories === "menus"){
// Si je suis dans la catégorie des menus
              afficherPopupNav('menus');;
// Je vais afficher la popup concernant les menus
            }
// Si je veux choisir d'ajouter ou enlever des ingrédients d'un burger je devrais utiliser :
//             if (categories === "burgers"){
// // Si je suis dans la catégorie des burgers
//               afficherPopupBurgers('burgers');;
// // Je vais afficher la popup concernant les burgers
//             }
// et je devrais créer la fonction afficherPopupBurgers
            
            });

        const prodCardChoix = document.createElement('article');
        prodCardChoix.classList.add('card-choix');
        prodCardChoix.dataset.id = prod.id; 
// Création (ou assignation) de l’id dans le HTML via JavaScript
// prodCardChoix = élément HTML (une carte produit)
// .dataset = accès aux attributs data-*
// .id = nom de l'attribut (data-id)
// prod.id = valeur venant de l'objet produit

// Evènement au clic pour mettre un id par catégorie et afficher la bonne categorie selon où l'on a cliqué sur la nav bar
        prodCardChoix.addEventListener('click', () =>{
            
            // console.log('Vous avez cliquer sur un article');
// Message de la console pour vérifier que le clic fonctionne sur le bon élément

            const id = Number(prodCardChoix.dataset.id); 
// Récupération de l'id stocké dans l'attribut HTML data-id
// dataset permet d'accéder aux attributs data-*
// Number() convertit la valeur (string) en nombre


            console.log('>>>>>>>>>>>','id cliqué :', id);
// Donne le numéro de l'id cliqué dans la console : il y a écrit : id cliqué + numro de l'id



// Table de correspondance entre l'id et la catégorie : 
// exemple : “Si j’ai l’ID 9 → je veux la catégorie 'sauces'”
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


            console.table(panier)
// Affiche le contenu du tableau panier sous forme de tableau dans la console ( lien avec const panier = [];)

            panier.push({
// Ajout un objet dans le tableau panier.
                type: categories[id],
// Pour récupérer les catégories du fichier JSON
// [id] permet de ne pas stocker l'objet entier categories
                nom: prod.nom,
// Pour récupérer les noms du fichier JSON
                prix: prod.prix,
// Pour récupérer les prix du fichier JSON
                options: {}
// objet vide pour plus tard
            });

            afficherPanier();
// Mise à jour du panier
        });
        
        const prodContainerImgCard = document.createElement('div');
        prodContainerImgCard.classList.add('container-img-card');

        const prodImgCard = document.createElement('img');
        prodImgCard.classList.add('img-card-produits');
        prodImgCard.src = prod.image;

        const prodContainerTitrePrix = document.createElement('div');
        prodContainerTitrePrix.classList.add('container-titre-prix');
        prodContainerTitrePrix.style.alignItems = 'center';

        const prodNom = document.createElement('h2');
        prodNom.classList.add('nom-du-produit');
        prodNom.textContent = prod.nom;
        prodNom.style.paddingTop = '15px';

        const prodPrix = document.createElement('span');
        prodPrix.classList.add('prix-produit');
        prodPrix.textContent = prod.prix.toFixed(2) + ' €'; // toFixed pour ajouter une 2eme décimale
        prodPrix.style.paddingTop = '15px';

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
    .catch((err) => {
      // console.log(err);
      window.location.href = 'index.html';
    });
}





// -------------------------------------------------------------- Popup -------------------------------------------------------------------------------------------------





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
          afficherPopupMenu();
        }

      });


  // Ajout du bouton retour : 
      const btnRetour = document.createElement('button');
      btnRetour.id = 'btn-retour';
      btnRetour.textContent = 'Retour';
      btnRetour.addEventListener("click", () => {

        if(step > 1){
          step--;
          afficherPopupMenu();
        }

      });

            addPopup.appendChild(addContainerBtnValidation);
            addContainerBtnValidation.appendChild(OpenbtnEtapeSuivante);
            addLogoCroix.appendChild(btnRetour);

        function afficherPopupMenu() {

          switch(step) {

            case 1:

            // ces éléments permettent de remettre les éléments du case 1 avec le bouton retour

              // pour cacher le bouton retour sur la case 1
              btnRetour.style.display = 'none'; 
              // pour afficher tous ces éléments : 
              titrePopup.style.display = 'flex';
              descriptionPopup.style.display = 'flex';
              imgPetiteTaille.style.display = 'flex';
              imgGrandeTaille.style.display = 'flex';
              OpenbtnEtapeSuivante.style.display = 'flex';
              // pour remettre le titre du bouton orsque l'on clique sur le bouton retour : 
              OpenbtnEtapeSuivante.textContent = 'Étape suivante';


              // Evenement au click pour selectionner le menu et changer le texte pour afficher 50Cl/30cl et petite faim/grosse faim sur le titre
                addContainerGrandeTaille.addEventListener("click", () => {
                addContainerGrandeTaille.classList.add("activeBorder");
                addContainerPetiteTaille.classList.remove("activeBorder");
                // Modification du titre, de la description et de l'image
                titrePopup.textContent = "Une grosse faim ?";
                descriptionPopup.textContent = "Le menu maxi Best Of comprend un sandwich, une grande frite et une boisson 50 Cl";
                texteChoixGrandeTaille.textContent = 'Menu Maxi Best Of';
                imgGrandeTaille.src= "./assets/illustration-maxi-best-of.png";
                });


                addContainerPetiteTaille.addEventListener("click", () => {
                addContainerPetiteTaille.classList.add("activeBorder");
                addContainerGrandeTaille.classList.remove("activeBorder");
                // Modification du titre, de la description et de l'image
                titrePopup.textContent = "Une petite faim ?";
                descriptionPopup.textContent = "Le menu Best Of comprend un sandwich, une moyenne frite et une boisson 30 Cl";
                texteChoixPetiteTaille.textContent = 'Menu Best Of';
                imgPetiteTaille.src= "./assets/illustration-best-of.png";
                });
              
              break;

            case 2:
              // ces éléments permettent de remettre les éléments du case 2 avec le bouton retour
              // On fait apparaître le bouton retour : 
              btnRetour.style.display = 'flex';
              // Pour cacher le conteneur des boissons avec le bouton retour : 
              containerChoixBoissons.style.display = 'none';
              // Pour afficher tous ces éléments : 
              titrePopup.style.display = 'flex';
              descriptionPopup.style.display = 'flex';
              addContainerPetiteTaille.style.display = 'flex';
              addContainerGrandeTaille.style.display = 'flex';
              OpenbtnEtapeSuivante.style.display = 'flex';
              // pour remettre le titre du bouton orsque l'on clique sur le bouton retour : 
              OpenbtnEtapeSuivante.textContent = 'Étape suivante';

              // Popup frites potatoes sans click : 
              titrePopup.textContent = "Choisissez votre accompagnement";
              descriptionPopup.textContent = "Frites, potatoes, la pomme de terre dans tous ses états";
              texteChoixPetiteTaille.textContent='Frites';
              imgPetiteTaille.src= "./assets/frites/MOYENNE_FRITE.png";
              texteChoixGrandeTaille.textContent='Potatoes';
              imgGrandeTaille.src= "./assets/frites/GRANDE_POTATOES.png";
              imgGrandeTaille.style.width = "100%";
              imgGrandeTaille.style.height = "100%";


              // Click sur l'image de gauche
              addContainerPetiteTaille.addEventListener("click", () => {
              addContainerPetiteTaille.classList.add("activeBorder");
              addContainerGrandeTaille.classList.remove("activeBorder");
              // Modification du titre, de la description et de l'image
              titrePopup.textContent = "Choisissez votre accompagnement";
              descriptionPopup.textContent = "Frites, potatoes, la pomme de terre dans tous ses états";
              texteChoixPetiteTaille.textContent='Frites';
              imgPetiteTaille.src= "./assets/frites/MOYENNE_FRITE.png";
              });


              // Click sur l'image de gauche
              addContainerGrandeTaille.addEventListener("click", () => {
              addContainerGrandeTaille.classList.add("activeBorder");
              addContainerPetiteTaille.classList.remove("activeBorder");
              // Modification du titre, de la description et de l'image
              titrePopup.textContent = "Choisissez votre accompagnement";
              descriptionPopup.textContent = "Frites, potatoes, la pomme de terre dans tous ses états";
              texteChoixGrandeTaille.textContent='Potatoes';
              imgGrandeTaille.src= "./assets/frites/GRANDE_POTATOES.png";
              imgGrandeTaille.style.width = "100%";
              imgGrandeTaille.style.height = "100%";
              });



              break;

            case 3:
              // ces éléments permettent de remettre les éléments du case 3 avec le bouton retour
              // Pour cacher les cartes frites/potatoes : 
              addContainerPetiteTaille.style.display = 'none';
              addContainerGrandeTaille.style.display = 'none';
              // Pour recevoir le conteneur des boissons : 
              addContainerChoixTaille.style.display = 'flex';
              // Pour afficher tous ces éléments : 
              btnRetour.style.display = 'flex';
              titrePopup.style.display = 'flex';
              descriptionPopup.style.display = 'flex';

              

              // Modification du titre et de la description
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
                   // Le slider des boissons est visible : 
                  containerChoixBoissons.style.display = 'flex';
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
                      
                        const cardBoissons = document.createElement('div');
                        cardBoissons.classList.add('card-categories-nav');
                        cardBoissons.addEventListener("click", () => {
                          console.log("clic");
                          document.querySelectorAll('.card-categories-nav').forEach(cardBoisson => {
                            cardBoisson.classList.remove('activeBorder');
                            });
                            cardBoissons.classList.add("activeBorder");
                            // afficherPopupBoissons(categorieRecherchee); on le mettra seulement si c'est demandé
                        });

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

                        cardBoissons.appendChild(containerImgCardBoisson);
                        cardBoissons.appendChild(containerTitreCardBoisson);


                        containerListBoissons.appendChild(cardBoissons);

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


      afficherPopupMenu();
      });
};


// Creation de la fonction pour afficher les popup par la section principale : 
function afficherPopupBoissons (categorieRecherchee){

const prodContainerZoneChoix = document.getElementById('container-popup');
console.log(prodContainerZoneChoix);

// on vérifie si containerPopup existe : 
  if (!prodContainerZoneChoix) {
    console.error('Conteneur popup introuvable');
    return;
    }

    // pour enlever le display none de la popup
prodContainerZoneChoix.style.display = 'flex';
prodContainerZoneChoix.innerHTML = '';  // enlève la popup de la nav

  fetch('./data/categories.json')
    .then((response) => response.json())
    .then((popups) => {
      console.log(popups);

       const popupBoissons = popups.find(
        item => item.title === categorieRecherchee
      );

      if (!popupBoissons) {
        console.error("Aucune popup trouvée pour :", categorieRecherchee);
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
    prodContainerZoneChoix.style.display = 'none';
    prodContainerZoneChoix.innerHTML = '';
});

    prodContainerZoneChoix.appendChild(addPopup);
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
    titrePopup.textContent = "Une petite soif ? "

    const descriptionPopup = document.createElement ('p');
    descriptionPopup.id = 'texte-description-popup';
    descriptionPopup.textContent = "Choisissez la taille de votre boisson,  +0.50€ pour le format 50 Cl";

    const addContainerChoixTaille = document.createElement ('div');
    addContainerChoixTaille.id = 'container-choix-taille';

    const addContainerPetiteTaille = document.createElement ('div');
    addContainerPetiteTaille.classList.add('container-taille');
        addContainerPetiteTaille.addEventListener("click", () => {
        console.log("clic");
        addContainerGrandeTaille.classList.remove('activeBorder');
        addContainerPetiteTaille.classList.add("activeBorder");
        });

    const addDivParentImgPetiteTaille = document.createElement ('div');
    addDivParentImgPetiteTaille.style.display ="flex";
    addDivParentImgPetiteTaille.style.justifyContent ="center";


    const imgPetiteTaille = document.createElement ('img');
    imgPetiteTaille.id = 'img-petite-taille';
    imgPetiteTaille.src = "./assets/boissons/coca-cola.png";
    imgPetiteTaille.alt = 'Petite Taille';
    imgPetiteTaille.style.width = "80%";
    imgPetiteTaille.style.height = "100%";



    const addDivTxtChoixPetiteTaille = document.createElement ('div');

    const texteChoixPetiteTaille = document.createElement ('span');
    texteChoixPetiteTaille.classList.add('texte-choix-taille');
    texteChoixPetiteTaille.textContent='30 Cl'

    const addContainerGrandeTaille = document.createElement ('div');
    addContainerGrandeTaille.classList.add('container-taille');
        addContainerGrandeTaille.addEventListener("click", () => {
        console.log("clic");
        addContainerPetiteTaille.classList.remove('activeBorder');
        addContainerGrandeTaille.classList.add("activeBorder");
        });


    const addDivParentImgGrandeTaille = document.createElement ('div');
    addDivParentImgGrandeTaille.style.display ="flex";
    addDivParentImgGrandeTaille.style.justifyContent ="center";

    const imgGrandeTaille = document.createElement ('img');
    imgGrandeTaille.id = 'img-grande-taille';
    imgGrandeTaille.src = "./assets/boissons/coca-cola.png";
    imgGrandeTaille.alt = 'Grande Taille';

    const addDivTxtChoixGrandeTaille = document.createElement ('div');

    const texteChoixGrandeTaille = document.createElement ('span');
    texteChoixGrandeTaille.classList.add('texte-choix-taille');
    texteChoixGrandeTaille.textContent='50 Cl'

    

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


  // > addContainerParentCompteur div id container-parent-compteur
  //   > addContaineCompteur div  id container-compteur
  //     > btnMoins button id btn-moins
  //     > valeurCompteur span id valeur-compteur
  //     > btnPlus button id btn-plus

    
    const addContainerParentCompteur = document.createElement ('div');
    addContainerParentCompteur.id = 'container-parent-compteur';

    const addContaineCompteur = document.createElement ('div');
    addContaineCompteur.id = 'container-compteur';

    const btnMoins = document.createElement ('button');
    btnMoins.id = 'btn-moins';
    btnMoins.textContent='-';
    btnMoins.addEventListener('click', () => {
      if (compteur > 1) {
      compteur--;
      valeurCompteur.textContent = compteur;
      }
    });

    const valeurCompteur = document.createElement ('span');
    valeurCompteur.id = 'valeur-compteur';
    valeurCompteur.textContent='1';

    const btnPlus = document.createElement ('button');
    btnPlus.id = 'btn-plus';
    btnPlus.textContent='+';
    let compteur = 1;
    valeurCompteur.textContent = compteur;
    btnPlus.addEventListener('click', () =>{
      if (compteur < 10) { // limite de 10 boissons
        compteur++;
      }
      valeurCompteur.textContent = compteur;
    })

    addPopup.appendChild(addContainerParentCompteur);

    addContainerParentCompteur.appendChild(addContaineCompteur);
    addContaineCompteur.appendChild(btnMoins);
    addContaineCompteur.appendChild(valeurCompteur);
    addContaineCompteur.appendChild(btnPlus);

  // > addContainerBtnValidation div id container-btn-validation
  //   > btnAnnuler  button id btn-annuler-commande
  //   > btnAjouter button id btn-ajouter-commande
    
    const addContainerBtnValidation = document.createElement('div');
    addContainerBtnValidation.id = 'container-btn-validation';

    const btnAnnuler = document.createElement ('button');
    btnAnnuler.id = 'btn-annuler-commande';
    btnAnnuler.textContent = "Annuler";

    const btnAjouter = document.createElement ('button');
    btnAjouter.id = 'btn-ajouter-commande';
    btnAjouter.textContent = "Ajouter à ma commande";

    addPopup.appendChild(addContainerBtnValidation);
    addContainerBtnValidation.appendChild(btnAnnuler);
    addContainerBtnValidation.appendChild(btnAjouter);

  });
}



// -------------------------------------------------------------- Panier -------------------------------------------------------------------------------------------------


function afficherPanier(){
  const containerPanier = document.getElementById('container-articles-panier');
  // console.log(containerPanier);
  containerPanier.innerHTML = ''; 
// on vérifie si containerPanier existe, si ce n'est pas le cas, la console affiche une erreur : 
  if (!containerPanier) {
    console.error('Conteneur panier introuvable');
    return;
    }


  panier.forEach((article) => {
    // console.log(article) ;


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
// article.options est un objet (ex : { menu: "best", accompagnement: "Frites" }).
// Object.entries(...) transforme cet objet en tableau de paires : [["menu", "best of"], ["accompagnement", "Frites"]] : ForEach fonctionne uniquement avec des tableaus et non des objects
// .forEach(...) parcourt chaque paire.
// ([cle, valeur]) utilise la déstructuration :
// cle = la clé (ex: "menu")
// valeur = la valeur (ex: "best")

    const li = document.createElement('li');
    li.textContent = valeur;
    listPanier.appendChild(li);
});


containerPanier.appendChild(prodPanier);
containerPanier.appendChild(listPanier);

  })
}





// -------------------------------------------------------------- Lancement des fonctions -------------------------------------------------------------------------------------------------


getDataCat();

// Les fonctions (afficherDescription()) et (afficherProduits()) sont lancés directement dans la fonction principale getDataCat() grâce à la detection du clic de la nav bar


