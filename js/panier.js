const panier = []; 
// Creation d'un tableau pour les articles du panier




// -------------------------------------------------------------- Panier -------------------------------------------------------------------------------------------------


function afficherPanier(){
  const containerPanier = document.getElementById('container-articles-panier');

  if (!containerPanier) {
    console.error('Conteneur panier introuvable');
    return;
    }


  // console.log(containerPanier);
  containerPanier.innerHTML = ''; 
// on vérifie si containerPanier existe, si ce n'est pas le cas, la console affiche une erreur : 

// // **********************************************Local Storage *************************************

// localStorage.getItem("memoireMenu");

// localStorage.getItem("memoireBurger");

// localStorage.getItem("memoireAccompagnement");

// localStorage.getItem("memoireBoisson");

// // *************************************************************************************************

  panier.forEach((article) => {
    // console.log(article) ;


// <article class="produits-panier">
//    <div> containerTitreLogo
//     <h3>Menu 1</h3>
//     <img class="logo-trash" src="assets/trash.png" alt="Logo Supprimer" />
//    </div>
// <ul class="liste-detail-produits">
//   <li>frite</li>
//   <li>sprite</li>
//   <li>ketchup</li>
//   <li>sauce deluxe</li>
// </ul>
// </article>


const prodPanier = document.createElement ('article');
prodPanier.classList.add('produits-panier');

const containerTitreLogo = document.createElement ('div');
containerTitreLogo.classList.add('container-titre-logo');

const titrePanier = document.createElement('h3');
const nomMenu = article.type.menu.replace("Menu ", ""); // permet d'enlever le mot menu de chaque titre de menu du fichier json
const nomBurger = article.type.burger.replace("Menu ", ""); // permet d'enlever le mot menu de chaque titre de menu du fichier json
const libelleMenu = article.quantite > 1 ? 'Menus' : 'Menu';
titrePanier.textContent = `${article.quantite} ${libelleMenu} ${nomMenu} ${nomBurger}`;
console.log("burger :", article.type.burger);

const logoSupp = document.createElement ('img');
logoSupp.classList.add('logo-trash');
logoSupp.src = './assets/trash.png';
logoSupp.alt = 'Supprimer';

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

containerTitreLogo.appendChild(titrePanier);
containerTitreLogo.appendChild(logoSupp);



prodPanier.appendChild(containerTitreLogo);
prodPanier.appendChild(listPanier);



containerPanier.appendChild(prodPanier);


console.log(localStorage);

// **********************************************Local Storage *************************************

  // if (memoireBurger === "burgerChoisi") {
  //   prodpanier.textContent = "";
  // }; 

  // if (memoireMenu === "memoireMenu") {
  //   prodpanier.textContent = "";
  // }; 


  // *************************************************************************************************

  })


}

afficherPanier();

function afficherNumeroCommande(){
  const mode = localStorage.getItem("mode");
  console.log(localStorage.getItem("mode"));


if (mode === "surplace") {
  document.getElementById("numero-commande-sur-place").textContent = "327";
}; 
if (mode === "emporter") {
  document.getElementById("numero-commande-emporter").textContent = "73";
}
}

afficherNumeroCommande()


