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
        catNav.tabIndex = 0;
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
            cardInitiale.classList.remove('activeBorder');
          }

          // Ajout de la bordure jaune sur la carte selectionnée:
          const catNavSelectCard = document.getElementById(index);
          // on récupère la carte correspondant à l'ID "index" que l'on a créé précédemment lors de la génération des cartes.
          catNavSelectCard.classList.add('activeBorder');

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
        catNav.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            catNav.click(); // Déclenche exactement le même comportement que le clic mais avec la touche entrée
          }
        });

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

function flecheNav() {
  // Pour faire défiler la nav barre au clique sur la flèche

  const flecheGauche = document.getElementById('fleche-gauche');
  const flecheDroite = document.querySelector('.fleche-droite');
  const container = document.getElementById('container-liste-categories');
  let compteur = 0;
  const max = 6; // exemple à adapter selon nombre de catégories visibles

  // Fonction qui sert à calculer automatiquement de combien le slider doit se déplacer lorsqu'on clique sur une flèche :
  function largeurProduit() {
    const produit = container.querySelector('.card-categories-nav');
    const style = window.getComputedStyle(produit);

    const gap = parseInt(window.getComputedStyle(container).gap) || 0;
    // on récupère la gap : getComputedStyle() demande au navigateur :"Quelle est la valeur réelle du gap ?" ; Le || 0 signifie :"Si jamais il n'y a pas de gap, utilise 0." ; parseInt transform 35px en chiffre 35

    return produit.offsetWidth + gap;
    //offsetWidth est la largeur réelle de la carte. Donc la fonction retourne la largeur de la carte + le gap
  }

  // Flèche droite
  flecheDroite.addEventListener('click', () => {
    if (compteur < max) {
      compteur++;
      container.style.transform = `translateX(-${largeurProduit() * compteur}px)`;
    }
  });

  // Flèche gauche

  flecheGauche.addEventListener('click', () => {
    if (compteur > 0) {
      compteur--;
      container.style.transform = `translateX(-${largeurProduit() * compteur}px)`;
    }
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
          titreDescription.id = 'description-produits';
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
        // On accède à une propriété d’un objet ou d’un tableau : {"categories"[]
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
        prodContainerZoneChoix.addEventListener('click', () => {
          // console.log("click");
          document.querySelectorAll('.container-zone-choix').forEach((prodCard) => {
            prodCard.classList.remove('activeBorder');
            // Enlève toutes les bordures jaunes
          });
          prodContainerZoneChoix.classList.add('activeBorder');
          // Affecte la bordure jaune à l'élément selectionné

          // Création de plusieurs if pour l'ouverture des popups :
          if (categories === 'boissons') {
            // Si je suis dans la catégorie des boissons
            afficherPopupBoissons(prod.nom);
            // Je vais afficher la popup concernant les boissons
          }
          if (categories === 'menus') {
            // Si je suis dans la catégorie des menus
            afficherPopupMenus('menus');
            // Je vais afficher la popup concernant les menus
          }
          if (
            categories === 'burgers' ||
            categories === 'frites' ||
            categories === 'encas' ||
            categories === 'wraps' ||
            categories === 'salades' ||
            categories === 'desserts' ||
            categories === 'sauces'
          ) {
            // Si je suis dans la catégorie des burgers
            afficherPopupArticles();
            // Je vais afficher la popup concernant le boutons de validation pour le panier
          }
        });

        const prodCardChoix = document.createElement('article');
        prodCardChoix.classList.add('card-choix');
        prodCardChoix.tabIndex = 0;
        prodCardChoix.dataset.id = prod.id;
        // Création (ou assignation) de l’id dans le HTML via JavaScript
        // prodCardChoix = élément HTML (une carte produit)
        // .dataset = accès aux attributs data-*
        // .id = nom de l'attribut (data-id)
        // prod.id = valeur venant de l'objet produit

        // Evènement au clic pour mettre un id par catégorie et afficher la bonne categorie selon où l'on a cliqué sur la nav bar
        prodCardChoix.addEventListener('click', () => {
          localStorage.setItem('memoireBurger', prod.nom);
          console.log('memoireBurger =', prod.nom);

          localStorage.setItem('memoireArticle', prod.nom);
          console.log('memoireArticle =', prod.nom);

          Number(localStorage.setItem('memoirePrix', prod.prix));

          // console.log('Vous avez cliquer sur un article');
          // Message de la console pour vérifier que le clic fonctionne sur le bon élément

          const id = Number(prodCardChoix.dataset.id);
          // Récupération de l'id stocké dans l'attribut HTML data-id
          // dataset permet d'accéder aux attributs data-*
          // Number() convertit la valeur (string) en nombre

          console.log('id cliqué :', id);
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
        });

        prodCardChoix.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            prodCardChoix.click(); // Déclenche exactement le même comportement que le clic
          }
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
        prodPrix.innerHTML = `${prod.prix.toFixed(2)}&nbsp;€`; // toFixed pour ajouter une 2eme décimale

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

function afficherMessageAPIValidationCommande() {
  document.addEventListener('DOMContentLoaded', () => {
    if (sessionStorage.getItem('commandeValidee') === 'true') {
      sessionStorage.removeItem('commandeValidee');
      // Afficher la popup
      afficherPopupMessageAPISucces();
      // alert("Votre commande a été validée avec succès !");
    } else if (sessionStorage.getItem('commandeValidee') === 'false') {
      sessionStorage.removeItem('commandeValidee');
      afficherPopupMessageAPIErreur();
      // pour vérifier : aller dans l'inspecteur/application/sessionStorage/remplacer les donnees par commandeValidee puis false et recharger la page : la popup affiche bien le message d'erreur
    }
  });
}

// -------------------------------------------------------------- Lancement des fonctions -------------------------------------------------------------------------------------------------

getDataCat();
flecheNav();
afficherMessageAPIValidationCommande();
// Les fonctions (afficherDescription()) et (afficherProduits()) sont lancées directement dans la fonction principale getDataCat() grâce à la detection du clic de la nav bar
