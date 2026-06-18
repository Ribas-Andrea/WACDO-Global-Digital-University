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
      quantite: 1,
      type: { menu, burger, prix },
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

    const containerTitreLogo = document.createElement('div');
    containerTitreLogo.classList.add('container-titre-logo');

    const titrePanier = document.createElement('h3');
    const nomBurger = article.type.burger.replace("Menu ", ""); // permet d'enlever le mot menu de chaque titre de menu du fichier json
    const libelleMenu = article.quantite > 1 ? 'Menus' : 'Menu'; // mettre menus au pluriel si quantité >  
    titrePanier.textContent =`${article.quantite} ${libelleMenu} ${article.type.menu} ${nomBurger} `;

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

    const listPanier = document.createElement('ul');
    listPanier.classList.add('liste-detail-produits');

    const containerListPrix = document.createElement('div');
    containerListPrix.classList.add('container-list-prix');

    Object.entries(article.options).forEach(([cle, valeur]) => {
      const li = document.createElement('li');
      li.textContent = valeur;
      listPanier.appendChild(li);
    });

    const prixMenu = document.createElement ('p');
    prixMenu.classList.add('prix-menu');
    prixMenu.textContent = `${(article.type.prix * article.quantite).toFixed(2)} €`;


    
    containerListPrix.appendChild(listPanier);
    containerListPrix.appendChild(prixMenu);

    containerTitreLogo.appendChild(titrePanier);
    containerTitreLogo.appendChild(logoSupp);

    prodPanier.appendChild(containerTitreLogo);
    prodPanier.appendChild(containerListPrix);

    containerPanier.appendChild(prodPanier);
  });
}

function ajouterArticleAuPanier() {
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
      quantite: 1,
      type: { 
        article : article,
        prix
    },
    });
  }
  console.log("PANIER AJOUTÉ :", panier);
  afficherArticlePanier();
}

function afficherArticlePanier() {
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

    const containerTitreLogo = document.createElement('div');
    containerTitreLogo.classList.add('container-titre-logo');

    const titrePanier = document.createElement('h3');
    titrePanier.textContent = article.type.article;

    const logoSupp = document.createElement('img');
    logoSupp.classList.add('logo-trash');
    logoSupp.src = './assets/trash.png';
    logoSupp.alt = 'Supprimer';
    logoSupp.addEventListener('click', () =>{
        if (confirm("Êtes-vous sûr de vouloir supprimer cet article?")) {
        supprimerPanier(index)
        console.log("Suppression effectuée");
        } else {
        console.log("Suppression annulée");
        }
      
    })

    const prixArticle = document.createElement ('p');
    prixArticle.classList.add('prix-menu');
    prixArticle.textContent = `${(article.type.prix * article.quantite).toFixed(2)} €`;


    containerTitreLogo.appendChild(titrePanier);
    containerTitreLogo.appendChild(logoSupp);

    prodPanier.appendChild(containerTitreLogo);
    prodPanier.appendChild(prixArticle);

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


  afficherPanier();
}

function supprimerPanier(index) {
  if (index < 0 || index >= panier.length) return;

  panier.splice(index, 1);

  afficherPanier();
}