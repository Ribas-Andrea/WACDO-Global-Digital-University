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



        prodCardChoix.addEventListener('click', () =>{
            
            console.log('Vous avez cliquer sur un menu');
            console.table(panier)
            // Exemple d'ajout d'un tableau avec les articles choisi ( lien avec const panier = [];)
            panier.push({
                type: categories,
                nom: prod.nom,
                prix: prod.prix,
                options: {}
            });

            afficherPanier();
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
    .catch((err) => {
      console.log('<<<<<<<<<<<<<<', err);
      window.location.href = 'index.html';
    });
}


const panier = []; // Creation d'un tableau pour les articles du panier

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

// On oublie pas de lancer les fonctions :
getDataCat();

// Les fonctions (afficherDescription()) et (afficherProduits()) sont lancés directement dans la fonction principale getDataCat() grâce à la detection du clic de la nav bar


