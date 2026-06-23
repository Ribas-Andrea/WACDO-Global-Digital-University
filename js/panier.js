const panier = []; 
// Creation d'un tableau pour les articles du panier

// Pour afficher le message du panier vide au chargement : 
document.addEventListener("DOMContentLoaded", () => {
  afficherPanier();
});

// -------------------------------------------------------------- Panier -------------------------------------------------------------------------------------------------

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


function ajouterMenuPanier() {
  const menu = localStorage.getItem("memoireMenu");
  const burger = localStorage.getItem("memoireBurger");
  const boisson = localStorage.getItem("memoireBoisson");
  const accompagnement = localStorage.getItem("memoireAccompagnement");
  const prix = Number(localStorage.getItem("memoirePrix"));

  if (!menu && !burger && !prix) {
    console.warn("Aucun produit sélectionné");
    return;
  }

    // On recherche s'il y a un produit identique : (on met p pour le nom d'une variable)
  const produitExistant = panier.find(p =>
    p.type.menu === menu &&
    p.type.burger === burger &&
    p.type.prix === prix &&
    p.options.boisson === boisson &&
    p.options.accompagnement === accompagnement
  );

  if (produitExistant) {
    // Si le produit existe déjà alors on augmente la quantité : 
    produitExistant.quantite += 1;
  } else {
    // sinon on créer le nouveau produit : 
    panier.push({
      typeElement : "menu",
      quantite: 1,
      type: { menu, burger, prix },
      options: { accompagnement, boisson }
    });
  }
  console.log("PANIER AJOUTÉ :", panier);
  // afficherMenuPanier();
  afficherPanier();
  totalPanier();
}

function ajouterBoissonPanier() {
  const data = JSON.parse(localStorage.getItem("memoireTaille"));
  const prix = Number(localStorage.getItem("memoirePrix"));
  const compteur = Number(localStorage.getItem("memoireCompteur")) || 1;

  const boisson = data?.nom; // “si data existe, prends nom, sinon retourne undefined”
  const taille = data?.taille;  // “si data existe, prends taille, sinon retourne undefined”

  if (!taille || !prix) {
    console.warn("Veuillez sélectionner une taille.");
    alert("Veuillez sélectionner une taille.");
    return false;
  }

    // On recherche s'il y a un produit identique : (on met p pour le nom d'une variable)
  const produitExistant = panier.find(p =>
      p.type.article === boisson &&
      p.type.taille === taille
  ); // “si même boisson ET même taille → j’additionne”

  if (produitExistant) {
    // Si le produit existe déjà alors on augmente la quantité : 
    produitExistant.quantite += compteur;
  } else {
    // sinon on créer le nouveau produit : 
    panier.push({
      typeElement : "boisson",
      quantite: compteur,
      type: { 
        article : boisson,
        taille : taille,
        prix,
    },
    });
  }
  console.log("PANIER AJOUTÉ :", panier);
  // afficherBoissonPanier();
  afficherPanier();
  totalPanier();

  return true;
}

function ajouterArticlePanier() {
  const article = localStorage.getItem("memoireArticle");
  const prix = Number(localStorage.getItem("memoirePrix"));


  if (!article) {
    console.warn("Aucun produit sélectionné");
    return;
  }

    // On recherche s'il y a un produit identique : (on met p pour le nom d'une variable)
  const produitExistant = panier.find(p =>
    p.type.article === article
  );

  if (produitExistant) {
    // Si le produit existe déjà alors on augmente la quantité : 
    produitExistant.quantite += 1;
  } else {
    // sinon on créer le nouveau produit : 
    panier.push({
      typeElement : "article",
      quantite: 1,
      type: { 
        article : article,
        prix
    },
    });
  }
  console.log("PANIER AJOUTÉ :", panier);
  // afficherArticlePanier();
  afficherPanier();
  totalPanier();
}

function afficherPanier() {
  const containerPanier = document.getElementById('container-articles-panier');

  if (!containerPanier) {
    console.error('Conteneur panier introuvable');
    return;
  }

  containerPanier.innerHTML = '';

  if (panier.length === 0) {
    containerPanier.innerHTML = `
    <p>Votre panier est vide</p>
    </br>
    <p> <strong> Ajoutez des produits pour poursuivre votre commande.</strong> </p>
`;
    return;
  }

  panier.forEach((article, index) => {


    const prodPanier = document.createElement('article');
    prodPanier.classList.add('produits-panier');

    const logoSupp = document.createElement('img');
    logoSupp.classList.add('logo-trash');
    logoSupp.src = './assets/trash.png';
    logoSupp.alt = 'Supprimer';
    logoSupp.addEventListener('click', () =>{
        if (confirm("Êtes-vous sûr de vouloir supprimer ce menu?")) {
        supprimerPanier(index)
        console.log("Suppression effectuée");
        } else {
        console.log("Suppression annulée");
        }
    })


    let titrePanier;
    let prixElement;


    // préparation panier en fonction du menu, du produit ou de la boisson : 

    if (article.typeElement === "menu"){


        const containerTitreLogo = document.createElement('div');
        containerTitreLogo.classList.add('container-titre-logo');

        const containerListPrix = document.createElement('div');
        containerListPrix.classList.add('container-list-prix');

        titrePanier = document.createElement('h3');
        const nomBurger = (article.type?.burger || "").replace("Menu ", ""); // permet d'enlever le mot menu de chaque titre de menu du fichier json
        const libelleMenu = article.quantite > 1 ? 'Menus' : 'Menu'; // mettre menus au pluriel si quantité >  
        titrePanier.textContent =`${article.quantite} ${libelleMenu} ${article.type.menu} ${nomBurger} `;

        
        const listPanier = document.createElement('ul');
        listPanier.classList.add('liste-detail-produits');



        Object.entries(article.options).forEach(([cle, valeur]) => {
        const li = document.createElement('li');
        li.textContent = valeur;
        listPanier.appendChild(li);
        });


        let prix = article.type.prix * article.quantite;

        if (article.type.menu === "Maxi Best of") {
        prix += 1.20 * article.quantite;
        }

        prixElement = document.createElement ('p');
        prixElement.classList.add('prix-menu');
        prixElement.textContent = `${prix.toFixed(2)} €`;


        containerListPrix.appendChild(listPanier);
        containerListPrix.appendChild(prixElement);

        containerTitreLogo.appendChild(titrePanier);
        containerTitreLogo.appendChild(logoSupp);

        prodPanier.appendChild(containerTitreLogo);
        prodPanier.appendChild(containerListPrix);

        
    } else if (article.typeElement === "boisson"){

        // code pour boisson
    const containerTitreLogoPrix = document.createElement('div');
    containerTitreLogoPrix.classList.add('container-titre-logo');

    const containerLogoPrix = document.createElement('div');
    containerLogoPrix.classList.add('container-logo-prix');
        
    titrePanier = document.createElement('h3');
    const pluriel = article.quantite > 1;
    const tailleBoisson = article.type.taille === "grande" ? "Grand" : "Petit";
    // si je veux plus tard mettre un genre ex: petite eau (au féminin), il faudra toucher au JSOn et ajouter un genre
    const tailleBoissonAjoutPluriel = pluriel
    ? tailleBoisson + "s"
    : tailleBoisson;
    titrePanier.textContent = `${article.quantite} ${tailleBoissonAjoutPluriel} ${article.type.article}`;


    prixElement = document.createElement('p');
    prixElement.classList.add('prix-boisson');
    // const taille = localStorage.getItem("memoireGrandeTaille");

    let prix = article.type.prix * article.quantite;

        if (article.type.taille === "grande") {
        prix += 0.50 * article.quantite;
        }

    prixElement.textContent = `${prix.toFixed(2)} €`;

  
    containerLogoPrix.appendChild(logoSupp);
    containerLogoPrix.appendChild(prixElement);

    containerTitreLogoPrix.appendChild(titrePanier);
    containerTitreLogoPrix.appendChild(containerLogoPrix);

    prodPanier.appendChild(containerTitreLogoPrix);


    } else if (article.typeElement === "article"){

        // code pour article

    const containerTitreLogoPrix = document.createElement('div');
    containerTitreLogoPrix.classList.add('container-titre-logo');

    const containerLogoPrix = document.createElement('div');
    containerLogoPrix.classList.add('container-logo-prix');

    titrePanier = document.createElement('h3');
    titrePanier.textContent = ` ${article.quantite} ${article.type.article}`;

    prixElement = document.createElement ('p');
    prixElement.classList.add('prix-article');
    prixElement.textContent = `${(article.type.prix * article.quantite).toFixed(2)} €`;
 
    containerLogoPrix.appendChild(logoSupp);
    containerLogoPrix.appendChild(prixElement);

    containerTitreLogoPrix.appendChild(titrePanier);
    containerTitreLogoPrix.appendChild(containerLogoPrix);

    prodPanier.appendChild(containerTitreLogoPrix);
    }

    containerPanier.appendChild(prodPanier);
  });
}


function changerQuantite(index, quantity){
  // trouver le produit dans le panier : 
  const produit = panier[index];
  if (!produit) return; // si le produit n'existe pas on arrête la fonction
 const nouvelleQuantite =  produit.quantite + quantity;
   
  if (nouvelleQuantite <= 0) {
    panier.splice(index, 1);

  } else {
    produit.quantite = nouvelleQuantite;
  }


  // afficherMenuPanier();
  afficherPanier();
}

function supprimerPanier(index) {
  if (index < 0 || index >= panier.length) return;

  panier.splice(index, 1);

  // afficherMenuPanier();
  afficherPanier();
}





function getPrix(produit) {
  return produit?.type?.prix ?? 0;
  // pour retrouver le prix des produit pour calculer le total
  // explication : 
  // si produit existe  alors OK
  // sinon c'est undefined (pas d’erreur)
  // si type existe alors  OK
  // sinon c'est undefined
}

function totalPanier(){

const prixTotal = document.getElementById('montant');

  console.log("PANIER =", panier);
  let total = 0;
  console.log(total);

  for(let produit of panier){
    total += produit.quantite * getPrix(produit);
  }

  const totalForm = total.toFixed(2) + " €";

  if (prixTotal) {
  prixTotal.textContent = totalForm;
}

  return total;


}
totalPanier()