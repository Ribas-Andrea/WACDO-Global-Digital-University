const panier = []; 
// Creation d'un tableau pour les articles du panier




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


function ajouterAuPanier() {
  const menu = localStorage.getItem("memoireMenu");
  const burger = localStorage.getItem("memoireBurger");
  const boisson = localStorage.getItem("memoireBoisson");
  const accompagnement = localStorage.getItem("memoireAccompagnement");

  if (!menu && !burger) {
    console.warn("Aucun produit sélectionné");
    return;
  }

    // On recherche s'il y a un produit identique : (on met p pour le nom d'une variable)
  const produitExistant = panier.find(p =>
    p.type.menu === menu &&
    p.type.burger === burger &&
    p.options.boisson === boisson &&
    p.options.accompagnement === accompagnement
  );

  if (produitExistant) {
    // Si le produit existe déjà alors on augmente la quantité : 
    produitExistant.quantite += 1;
  } else {
    // sinon on créer le nouveau produit : 
    panier.push({
      quantite: 1,
      type: { menu, burger },
      options: { accompagnement, boisson }
    });
  }
  console.log("PANIER AJOUTÉ :", panier);
  afficherPanier();
}

function afficherPanier() {
  const containerPanier = document.getElementById('container-articles-panier');

  if (!containerPanier) {
    console.error('Conteneur panier introuvable');
    return;
  }

  containerPanier.innerHTML = '';

  if (panier.length === 0) {
    containerPanier.innerHTML = "<p>Panier vide</p>";
    return;
  }

  panier.forEach((article, index) => {
    const prodPanier = document.createElement('article');
    prodPanier.classList.add('produits-panier');

    const containerTitreLogo = document.createElement('div');
    containerTitreLogo.classList.add('container-titre-logo');

    const titrePanier = document.createElement('h3');
    const nomBurger = article.type.burger.replace("Menu ", ""); // permet d'enlever le mot menu de chaque titre de menu du fichier json
    const libelleMenu = article.quantite > 1 ? 'Menus' : 'Menu';
    titrePanier.textContent =`${article.quantite} ${libelleMenu} ${article.type.menu} ${nomBurger}`;

    const logoSupp = document.createElement('img');
    logoSupp.classList.add('logo-trash');
    logoSupp.src = './assets/trash.png';
    logoSupp.alt = 'Supprimer';
    logoSupp.addEventListener('click', () =>{
      supprimerPanier(index);
    })

    const listPanier = document.createElement('ul');
    listPanier.classList.add('liste-detail-produits');

    Object.entries(article.options).forEach(([cle, valeur]) => {
      const li = document.createElement('li');
      li.textContent = valeur;
      listPanier.appendChild(li);
    });

    containerTitreLogo.appendChild(titrePanier);
    containerTitreLogo.appendChild(logoSupp);

    prodPanier.appendChild(containerTitreLogo);
    prodPanier.appendChild(listPanier);

    containerPanier.appendChild(prodPanier);
  });
}

afficherPanier();



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

  afficherPanier();
}


function supprimerPanier(index) {
  if (index < 0 || index >= panier.length) return;

  panier.splice(index, 1);

  afficherPanier();
}