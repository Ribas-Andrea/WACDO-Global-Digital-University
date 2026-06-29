
function afficherNumeroCommande () {
const titreH1 = document.getElementById('container-titre');
const mode = localStorage.getItem('mode');
let numeroCommande = localStorage.getItem('memoireNumeroCommande');


titreH1.innerHTML += `

      <h1 class="titreH1">
        Votre Commande ${mode} n° ${numeroCommande} du ${new Date().toLocaleDateString("fr-FR")} :
      </h1>
  `;

// ajouter date.now() pour afficher la date
// console.log('Mode :', numeroCommande);
}
afficherNumeroCommande ()



function afficherPanierPaiement() {

const affichagePanier = document.querySelector('.panier');

const panier = JSON.parse(localStorage.getItem('panier')) || [];
const prixTotal = localStorage.getItem('memoirePrixTotal') || '0.00';



console.log('Panier :', panier);
console.log('Total :', prixTotal);




  affichagePanier.innerHTML += `
    <div class="total">
      <h3>
        <div class="titreTotal">
        Total (TTC): 
        </div>
        <div class="montantTotal"> ${prixTotal} €
        </div>
      </h3>
    </div>
  `;

  affichagePanier.innerHTML += `
  <div class="barre-separation"></div>
  `;

panier.forEach(produit => {

  let nom = '';
  let nomBurger = (produit.type?.burger || "").replace("Menu ", ""); // permet d'enlever le mot menu de chaque titre de menu du fichier json


  if (produit.typeElement === 'menu') {

    nom = `Menu ${produit.type.menu} ${nomBurger}`;
  } else {
    nom = produit.type.article;
  }

  affichagePanier.innerHTML += `
  
    <div class="article">
         <div> 
            <h4>${nom}</h4>
            
            <p>Quantité : ${produit.quantite}</p>
        </div>
        <div>
            <p>${(produit.quantite * produit.type.prix).toFixed(2)} €</p>
        </div>
    </div>
  `;
});

};

afficherPanierPaiement()

function afficherModePaiement() {

  document.querySelectorAll('.choixRglt').forEach(input => {
    input.addEventListener('change', (e) => {
      localStorage.setItem('memoireModePaiement', e.target.value);
      console.log('STOCKÉ =', e.target);
// boucle pour rtirer la bordure partout ou elle est utilisée => parcourrir les éléments qui ont la classe choixRglt (sur chaque élément je retire la class selected)
// Enlever la bordure de tous les labels
        document.querySelectorAll('.form-type-paiement').forEach(label => {
            label.classList.remove('activeBorder');
        });

        // Ajouter la bordure au label correspondant
        const label = document.querySelector(`label[for="${e.target.id}"]`);
        label.classList.add('activeBorder');
    });
  });

}


afficherModePaiement ()


function payer () {
  const saved = localStorage.getItem('memoireModePaiement');
  console.log('Mode de paiement choisi :',saved);
  const prixTotal = localStorage.getItem('memoirePrixTotal') || '0.00';
  console.log('prix total panier : ', prixTotal)
  const mode = localStorage.getItem("mode");
  console.log("MODE:", mode);

const redirection = document.querySelector('.btn-paiement');
redirection.addEventListener('click', () => {
  event.preventDefault();
  console.log("Vous avez cliqué sur payer");
  const cardSelected = document.querySelector('.choixRglt:checked');
  if (!cardSelected) {
      alert("Veuillez sélectionner un mode de paiement.");
      return;
  }
  if(mode === "sur place"){
        if (confirm('êtes-vous sûr de votre choix ?')){
          window.location.href = 'chevalet.html';
        }
  } else if (mode === "à emporter"){
        if (confirm('êtes-vous sûr de votre choix ?')){
          window.location.href = 'remerciements.html';
        }

  }

  
})

}

payer ()