// Création de la fonction pour afficher les données dans la console puis dans le DOM: 
function getDataCat(){

// Pour insérer catNav dans le DOM :
const catList = document.getElementById('container-liste-categories');

// fonction fetch pour récupérer les données du json
  fetch("./data/categories.json")
  .then(response=> response.json())
  .then(categories => {
      console.log(categories);
    
// On créer les différentes section/div/p/img du html : 
      categories.forEach((cat) => {

            // <div class="card-categories-nav">
                  //   <div class="container-img-card-categorie">
                  //          <img class="img-card-categorie" src="assets/categories/menus.png" alt="produits" />
                  //   </div>
                  //   <div class="container-titre-img-nav">
                  //          <p class="titre-img-nav">produits</p>
                  //   </div>
            // </div>

            const catNav = document.createElement('div');
            catNav.classList.add('card-categories-nav');

            const catNavContainerImgCard = document.createElement('div');
            catNavContainerImgCard.classList.add('container-img-card-categorie');

            const catNavImgCard = document.createElement('img');
            catNavImgCard.classList.add('img-card-categorie');
            // on récupère les données json grâce à la console (ici, on ouvre les catégories (cat) et la partie image de la categorie(image)), attention de bien mettre src pour une image : 
            catNavImgCard.src = cat.image;

            const catNavContainerTitreImg = document.createElement('div');
            catNavContainerTitreImg.classList.add('container-titre-img-nav');

            const catNavTitreImg = document.createElement('p');
            catNavTitreImg.classList.add('titre-img-nav');
            // on récupère les données json grâce à la console (ici, on ouvre les catégories (cat) et la partie titre de la catégorie(title)) : 
            catNavTitreImg.textContent = cat.title;

      // On implemente les div les une dans les autres selon le fichier html : 

      // 1/ creéation des 2 éléments (img et p) à l'interieur des div
      catNavContainerImgCard.appendChild(catNavImgCard);
      catNavContainerTitreImg.appendChild(catNavTitreImg);

      // 2/ creation des 2 div (container) à l'interieur de la div catNav
      catNav.appendChild(catNavContainerImgCard);
      catNav.appendChild(catNavContainerTitreImg);

      // On ajoute ces implémentation dans le dom : 
      catList.appendChild(catNav);

      // On redirige sur les bonnes catégorie avec l'évènement au clic : 
      // catNav.addEventListener('click', function(){
      //       fetch
      // })

      })
  })
  }

  function getDataProdTitreDescription(){

const titreProd = document.getElementById('container-nos-produits');
console.log(titreProd);

  fetch("./data/produits.json")
  .then(response => response.json())
  .then(produits => {
      console.log(produits);

      Object.keys(produits).forEach((titre) => {
      console.log(titre);

// <div class="titre-produits"> titreSection
//   <h1>Nos menus</h1> titreProduit
//   <p id="description-produits">Un Sandwich,une friture ou une salade et une boisson</p> titreDescritption
// </div>

        const titreSection = document.createElement('div');
        titreSection.classList.add('titre-produits');

        const titreProduit = document.createElement('h1');
        titreProduit.textContent = 'Nos ' + titre;
        console.log(titreProduit.textContent);

        const titreDescritption = document.createElement('p');

        titreProd.appendChild(titreSection);
        titreSection.appendChild(titreProduit);
        titreSection.appendChild(titreDescritption);

      })
  })
}


function getDataProd(){

const prodList = document.getElementById('container-zone-choix');
  fetch("./data/produits.json")
  .then(response => response.json())
  .then(produits => {
      console.log(produits);

      produits.menus.forEach((prod) => {



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
      
        prodContainerImgCard.appendChild(prodImgCard)


// <div class="container-titre-prix"> prodContainerTitrePrix
//     <h2 class="nom-du-produit">Big Tasty Bacon 1 viande</h2> prodNom
//     <span class="prix-produit">7.50€</span> prodPrix
// </div>

        prodContainerTitrePrix.appendChild(prodNom)
        prodContainerTitrePrix.appendChild(prodPrix)

      })
  })
}

  // On oublie pas de lancer les fonctions :
getDataCat();
getDataProdTitreDescription();
getDataProd();