


// -------------------------------------------------------------- Popup -------------------------------------------------------------------------------------------------





// Creation de la fonction pour afficher la popup de choix du menus à partir de la nav : 
function afficherPopupMenus (categorieRecherchee){

  const containerPopupMenus = document.getElementById('container-popup-menus');
  // console.log(containerPopupMenus);

// on vérifie si containerPopup existe : 
    if (!containerPopupMenus) {
      console.error('Conteneur popupMenus introuvable');
      return;
    }

// pour enlever le display none de la popup (elle s'affichera seulement au click sur le bouton de l'un des menus situés dans les produits du main) : 
  containerPopupMenus.style.display = 'flex';
// affiche la popup
  containerPopupMenus.innerHTML = ''; 
// Vide le conteneur (celui des boissons), sinon les flèche reste

    fetch('./data/categories.json')
      .then((response) => response.json())
      .then((popups) => {
        console.log(popups);

        const popup = popups.find(
// popups est un tableau (array) qui contient plusieurs objets (le json categories : [{}])
// La méthode .find() parcourt le tableau et retourne le premier élément qui correspond à une condition. Si aucun élément ne correspond, elle retourne undefined.
          item => item.title === categorieRecherchee
// C’est une fonction fléchée (arrow function) qui teste chaque élément :
// item = un élément du tableau popups
// item.title = le titre de cet élément
// categorieRecherchee = la valeur recherchée
// “Trouve dans popups l’objet dont le title est égal à categorieRecherchee”
// Si un objet a title === categorieRecherchee, il est stocké dans popup
// Sinon, popup vaut undefined
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
      containerPopupMenus.style.display = 'none';
      containerPopupMenus.innerHTML = '';
      });

      containerPopupMenus.appendChild(addPopup);
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

// Ceci permet de créer le conteneur pour les boissons pour l'afficher puis l'enlever avec la flèche retour grace au display none, 
// on utilisera display flex pour la faire apparaitre dans le switch case de la fonction defilerPopupMenus() au case n° 3 et le refaire disparaitre au case n°2 avec le bouton retour
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
  // “Je crée une variable appelée step et elle commence à 1.”

  // Ajout du bouton suivant : 
      const OpenbtnEtapeSuivante = document.createElement('button');
      OpenbtnEtapeSuivante.id = 'btn-etape-suivante';
      OpenbtnEtapeSuivante.textContent = 'Étape suivante';

// Evènement au click pour que lorsque je clique sur suivant, je passe au case suivant (step ++);
      OpenbtnEtapeSuivante.addEventListener("click", () => {

let cardSelected = null;

  if (step === 1 || step === 2 ) {
    cardSelected = document.querySelector(
      ".container-taille.activeBorder"
    );
  }

    if (step === 3 || step === 4) {
    cardSelected = document.querySelector(
      ".card-categories-nav.activeBorder"
    );
  }

  if (!cardSelected) {
  alert("Veuillez sélectionner un élément avant de continuer.");
  return;
}

// pour fermer la popup avec le bouton 'Ajouter le menu à ma commande'
  if(step === 4){
  containerPopupMenus.style.display = 'none';
  containerPopupMenus.innerHTML = '';


  ajouterMenuPanier();
  afficherPanier();

  }

  if (step < 4) {
    cardSelected.classList.remove("activeBorder");
    step++;
    defilerPopupMenus();
  }
console.log(step)
      });


// Ajout du bouton retour : 
// Evènement au click pour que lorsque je clique sur retour, je retourne au case précédent (step --) sans retourner avant la 1 qui n'existe pas donc strictement >;
      const btnRetour = document.createElement('button');
      btnRetour.id = 'btn-retour';
      btnRetour.textContent = 'Retour';
      btnRetour.addEventListener("click", () => {

        if(step > 1){
          step--;
          defilerPopupMenus();
        }

      });

            addPopup.appendChild(addContainerBtnValidation);
            addContainerBtnValidation.appendChild(OpenbtnEtapeSuivante);
            addLogoCroix.appendChild(btnRetour);


function gererChoixPetiteTaille() {

  addContainerPetiteTaille.addEventListener("click", () => {

  addContainerPetiteTaille.classList.add("activeBorder");
  addContainerGrandeTaille.classList.remove("activeBorder");

      if(step === 1){
        titrePopup.textContent = "Une petite faim ?";
        descriptionPopup.textContent = "Le menu Best Of comprend un sandwich, une moyenne frite et une boisson 30 Cl";
        texteChoixPetiteTaille.textContent = 'Menu Best Of';
        imgPetiteTaille.src= "./assets/illustration-best-of.png";
        localStorage.setItem("memoireMenu", "Best of");
      }

      if(step === 2){
        titrePopup.textContent = "Choisissez votre accompagnement";
        descriptionPopup.textContent = "Frites, potatoes, la pomme de terre dans tous ses états";
        texteChoixPetiteTaille.textContent='Frites';
        imgPetiteTaille.src= "./assets/frites/MOYENNE_FRITE.png";
        localStorage.setItem("memoireAccompagnement", "Frites");
      }
});
}

function gererChoixGrandeTaille() {

  addContainerGrandeTaille.addEventListener("click", () => {
  console.log("GRANDE");

  addContainerGrandeTaille.classList.add("activeBorder");
  addContainerPetiteTaille.classList.remove("activeBorder");

        if(step === 1){
          titrePopup.textContent = "Une grosse faim ?";
          descriptionPopup.textContent = "Le menu maxi Best Of comprend un sandwich, une grande frite et une boisson 50 Cl";
          texteChoixGrandeTaille.textContent = 'Menu Maxi Best Of';
          imgGrandeTaille.src= "./assets/illustration-maxi-best-of.png";
          localStorage.setItem("memoireMenu", "Maxi Best Of");
        }

        if(step === 2){
          titrePopup.textContent = "Choisissez votre accompagnement";
          descriptionPopup.textContent = "Frites, potatoes, la pomme de terre dans tous ses états";
          texteChoixPetiteTaille.textContent='Frites';
          imgPetiteTaille.src= "./assets/frites/MOYENNE_FRITE.png";
          texteChoixGrandeTaille.textContent='Potatoes';
          imgGrandeTaille.src= "./assets/frites/GRANDE_POTATOES.png";
          imgGrandeTaille.style.width = "100%";
          imgGrandeTaille.style.height = "100%";
          localStorage.setItem("memoireAccompagnement", "Potatoes");
        }
  });
}



        function defilerPopupMenus() {

          switch(step) {

            case 1:

            // On remet le local storage a 0 : 
            addContainerPetiteTaille.classList.remove("activeBorder");
            addContainerGrandeTaille.classList.remove("activeBorder");

            // ces éléments permettent de remettre les éléments du case 1 avec le bouton retour

              // pour cacher le bouton retour sur la case 1
              btnRetour.style.display = 'none'; 
              // pour afficher tous ces éléments : 
              titrePopup.style.display = 'flex';
              descriptionPopup.style.display = 'flex';
              imgPetiteTaille.style.display = 'flex';
              imgGrandeTaille.style.display = 'flex';
              OpenbtnEtapeSuivante.style.display = 'flex';
              // pour remettre le titre du bouton lorsque l'on clique sur le bouton retour : 
              OpenbtnEtapeSuivante.textContent = 'Étape suivante';

              // Popup menus d'origine sans click (permet de retrouver ces élément avec le bouton retour du case 2) : 
              titrePopup.textContent = "Une grosse faim ?";
              descriptionPopup.textContent = "Les menus comprennent un sandwich, une frite et une boisson";
              texteChoixPetiteTaille.textContent='Menu Best Of';
              imgPetiteTaille.src= "./assets/illustration-best-of.png";
              texteChoixGrandeTaille.textContent='Menu Maxi Best Of';
              imgGrandeTaille.src= "./assets/illustration-maxi-best-of.png";

              gererChoixPetiteTaille()
              gererChoixGrandeTaille()


              break;

            case 2:

            // On remet le local storage a 0 : 
            addContainerPetiteTaille.classList.remove("activeBorder");
            addContainerGrandeTaille.classList.remove("activeBorder");

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

              gererChoixPetiteTaille()
              gererChoixGrandeTaille()

              break;

            case 3:
              // ces éléments permettent d'enlever les éléments du case 3 avec le bouton retour
              // Pour cacher les cartes frites/potatoes : 
              addContainerPetiteTaille.style.display = 'none';
              addContainerGrandeTaille.style.display = 'none';
              // ces éléments permettent de mettre les éléments du case 3
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
// data contient le contenu du fichier JSON après sa lecture et sa conversion en objet JavaScript.
// data.boissons accède à la propriété boissons de l'objet data.
// On stocke ce tableau dans une nouvelle constante appelée listboissons.

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


// On met en place un compteur pour déplacer la nav bar au click des flèches sans dépasser 4 click : 
                      let compteur = 0;
                      const max = 4; // exemple à adapter selon nombre de catégories visibles
                      imgFlecheGaucheBoissons.addEventListener('click', () => {

                        if (compteur > 0 ) {
                            compteur--;
                            containerListBoissons.style.transform = `translateX(-${145 * compteur}px)`;
// Permet de déplacer 1 card par une card grace à la taille de 145px (taille de la card + le gap)
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
// Récupère toutes les cartes ayant cette classe : <div class="card-categories-nav"></div> puis on parcourt chaque carte une par une pour enlever la bordure jaune s'il y en a une

                            cardBoisson.classList.remove('activeBorder');
                            });
                            cardBoissons.classList.add("activeBorder");
// On active la bordure sur la carte selectionnée


// ********************************************** Local Storage *************************************

// On stocke ici la boisson sélectionnée (la dernière cliquée)
// IMPORTANT : ce n'est pas un tableau, juste une seule valeur

// Quand l'utilisateur clique sur une boisson :
localStorage.setItem("memoireBoisson", boisson.nom);
console.log("memoireBoisson =", boisson.nom);
// ↑ On enregistre l'id de la boisson
// ↑ À chaque nouveau clic, cette valeur est écrasée
// → donc il ne reste TOUJOURS que la dernière boisson choisie


// *************************************************************************************************
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

// Evènement au click pour ajouter au panier avec retour à la page menu :  ( à finir) 
// Inclure des variable "type burger, type menus, type boisson, type accompagnement" pour mémoriser les choix et les mettre dans la fonction afficherPanier 

              break;  
          
            case 4:
              // ces éléments permettent d'enlever les éléments du case 3 avec le bouton retour
              // Pour cacher les cartes frites/potatoes : 
              addContainerPetiteTaille.style.display = 'none';
              addContainerGrandeTaille.style.display = 'none';
              // ces éléments permettent de mettre les éléments du case 3
              // Pour recevoir le conteneur des boissons : 
              addContainerChoixTaille.style.display = 'flex';
              // Pour afficher tous ces éléments : 
              btnRetour.style.display = 'flex';
              titrePopup.style.display = 'flex';
              descriptionPopup.style.display = 'flex';

              

              // Modification du titre et de la description
              titrePopup.textContent = "Choisissez votre sauce";
              descriptionPopup.textContent = "Une sauce ?";

              fetch('./data/produits.json')
                .then(response => response.json())
                .then(data => {

                  const listsauces = data.sauces;

                  containerChoixBoissons.innerHTML = '';
                  containerChoixBoissons.style.display = 'flex';

                  const imgFlecheGaucheBoissons = document.createElement('img');
                  imgFlecheGaucheBoissons.id ="fleche-gauche";
                  imgFlecheGaucheBoissons.src = './assets/fleche-slider.png';


// On met en place un compteur pour déplacer la nav bar au click des flèches sans dépasser 4 click : 
                      let compteur = 0;
                      const max = 4; // exemple à adapter selon nombre de catégories visibles
                      imgFlecheGaucheBoissons.addEventListener('click', () => {

                        if (compteur > 0 ) {
                            compteur--;
                            containerListBoissons.style.transform = `translateX(-${145 * compteur}px)`;
// Permet de déplacer 1 card par une card grace à la taille de 145px (taille de la card + le gap)
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

                      listsauces.forEach((sauce) => {


// La creation des card boissons : 
                      
                        const cardBoissons = document.createElement('div');
                        cardBoissons.classList.add('card-categories-nav');
                        cardBoissons.addEventListener("click", () => {
                          console.log("clic");
                          document.querySelectorAll('.card-categories-nav').forEach(cardBoisson => {
// Récupère toutes les cartes ayant cette classe : <div class="card-categories-nav"></div> puis on parcourt chaque carte une par une pour enlever la bordure jaune s'il y en a une

                            cardBoisson.classList.remove('activeBorder');
                            });
                            cardBoissons.classList.add("activeBorder");
// On active la bordure sur la carte selectionnée


// ********************************************** Local Storage *************************************

// On stocke ici la boisson sélectionnée (la dernière cliquée)
// IMPORTANT : ce n'est pas un tableau, juste une seule valeur

// Quand l'utilisateur clique sur une boisson :
localStorage.setItem("memoireSauce", sauce.nom);
console.log("memoireSauce =", sauce.nom);
// ↑ On enregistre l'id de la boisson
// ↑ À chaque nouveau clic, cette valeur est écrasée
// → donc il ne reste TOUJOURS que la dernière boisson choisie


// *************************************************************************************************
                        });

                        const containerImgCardBoisson = document.createElement('div');
                        containerImgCardBoisson.classList.add('container-img-card-categorie');

                        const imgCardBoisson = document.createElement('img');
                        imgCardBoisson.classList.add('img-card-categorie');
                        imgCardBoisson.src = sauce.image;

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

              });


              OpenbtnEtapeSuivante.textContent = 'Ajouter le menu à ma commande';


// Evènement au click pour ajouter au panier avec retour à la page menu :  ( à finir) 
// Inclure des variable "type burger, type menus, type boisson, type accompagnement" pour mémoriser les choix et les mettre dans la fonction afficherPanier 

              break;  


            };
          

          

        }


      defilerPopupMenus();
      });
};


// Creation de la fonction pour afficher les popup par la section principale : 
function afficherPopupBoissons (produitRecherche){

  localStorage.removeItem("memoireTaille");
  localStorage.removeItem("memoirePrix");
  localStorage.removeItem("memoireCompteur");

const containerPopupBoissons = document.getElementById('container-popup-boissons');
// console.log(prodContainerZoneChoix);

// on vérifie si containerPopup existe : 
  if (!containerPopupBoissons) {
    console.error('Conteneur popup introuvable');
    return;
    }

// pour enlever le display none de la popup
containerPopupBoissons.style.display = 'flex';
containerPopupBoissons.innerHTML = '';  
// enlève la popup de la nav

  fetch('./data/produits.json')
    .then((response) => response.json())
    .then((popups) => {
      console.log(popups.boissons);

       const boisson = popups.boissons.find(
        item => item.nom === produitRecherche
      );

      if (!boisson) {
        console.error("Aucune boisson trouvée pour :", produitRecherche);
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
    containerPopupBoissons.style.display = 'none';
    containerPopupBoissons.innerHTML = '';
    localStorage.removeItem("memoireTaille");
    localStorage.removeItem("memoirePrix");
    localStorage.removeItem("memoireCompteur");
    });

    containerPopupBoissons.appendChild(addPopup);
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
        console.log("clic petite taille");
        addContainerGrandeTaille.classList.remove('activeBorder');
        addContainerPetiteTaille.classList.add("activeBorder");
            localStorage.setItem("memoireTaille", JSON.stringify({
                nom: boisson.nom,
                taille: "petite"
            }));
            localStorage.setItem("memoirePrix", boisson.prix);
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
        console.log("clic grande taille");
        addContainerPetiteTaille.classList.remove('activeBorder');
        addContainerGrandeTaille.classList.add("activeBorder");
            localStorage.setItem("memoireTaille", JSON.stringify({
                nom: boisson.nom,
                taille: "grande"
            }));
            localStorage.setItem("memoirePrix", boisson.prix);
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
    // Evènement au clic pour baisser la valeur du compteur sans aller en dessous de 1 (strictement >)
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
    // On initialise le compteur a 1
    valeurCompteur.textContent = compteur;
    // On applique un texte avec la valeur du compteur
     // Evènement au clic pour baisser la valeur du compteur
    btnPlus.addEventListener('click', () =>{
      if (compteur < 10) { // limite de 10 boissons
        compteur++;
      }
      valeurCompteur.textContent = compteur;
  // permet de changer la valeur du compteur au clic
    localStorage.setItem("memoireCompteur", compteur);
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
    btnAnnuler.addEventListener('click', () => {
        localStorage.removeItem("memoireTaille");
        localStorage.removeItem("memoirePrix");
        localStorage.removeItem("memoireCompteur");

        // Enlever la bordure de sélection
        addContainerPetiteTaille.classList.remove('activeBorder');
        addContainerGrandeTaille.classList.remove('activeBorder');

        // Remettre le compteur à sa valeur initiale
        compteur = 1;
        valeurCompteur.textContent = compteur;
    });
    const btnAjouter = document.createElement ('button');
    btnAjouter.id = 'btn-ajouter-commande';
    btnAjouter.textContent = "Ajouter à ma commande";
    btnAjouter.addEventListener('click', () =>{

      const ajoutOk = ajouterBoissonPanier();

      if (!ajoutOk) {
        return;
      }
      // ajouterBoissonPanier()
      afficherPanier()
      containerPopupBoissons.style.display = 'none';
      containerPopupBoissons.innerHTML = '';

    });

    addPopup.appendChild(addContainerBtnValidation);
    addContainerBtnValidation.appendChild(btnAnnuler);
    addContainerBtnValidation.appendChild(btnAjouter);

    });
}



function afficherPopupValidation (){

const validationChoix = document.getElementById('container-popup-articles');

// on vérifie si containerPopup existe : 
  if (!validationChoix) {
    console.error('Conteneur popup introuvable');
    return;
    }

// pour enlever le display none de la popup
validationChoix.style.display = 'flex';
validationChoix.innerHTML = '';  
// enlève la popup de la nav


    const addPopup = document.createElement ('section');
    addPopup.id = 'popupValider';


    const addLogoCroix = document.createElement ('div');
    addLogoCroix.id ='img-logo-croix';

    const addImgLogoCroix = document.createElement ('img');
    addImgLogoCroix.id ='croix';
    addImgLogoCroix.src = './assets/supprimer.png';
    addImgLogoCroix.alt = 'Logo Croix';


    // pour fermer la popup avec la croix
    addImgLogoCroix.addEventListener('click', () => {
    validationChoix.style.display = 'none';
    validationChoix.innerHTML = '';
});

    validationChoix.appendChild(addPopup);
    addPopup.appendChild(addLogoCroix);
    addLogoCroix.appendChild(addImgLogoCroix);

    
// Ajout phrase de confirmation d'ajout d'un article : 
      const containerDemandeValidation = document.createElement('div');
      const demandeValidation = document.createElement('p');
      const memoireArticle = localStorage.getItem("memoireArticle");
      demandeValidation.textContent = `Voulez-vous ajouter  ${memoireArticle} à votre panier ?`;
      demandeValidation.style.paddingBottom = '20px';



  // Ajout du bouton de validation : 
      const btnValidation = document.createElement('button');
      btnValidation.id = 'btn-etape-suivante';
      btnValidation.textContent = 'Valider';
      btnValidation.addEventListener('click', () => {
        ajouterArticlePanier();
        validationChoix.style.display = 'none';
        validationChoix.innerHTML = '';
      })

      containerDemandeValidation.appendChild(demandeValidation);
      containerDemandeValidation.appendChild(btnValidation);

      addPopup.appendChild(containerDemandeValidation);



}