
function afficherNumeroCommande () {
const titreH1 = document.getElementById('container-titre');
const mode = localStorage.getItem('mode');
let numeroCommande = localStorage.getItem('memoireNumeroCommande');


titreH1.innerHTML += `

      <h1 class="titreH1">
        Votre Commande ${mode} n° ${numeroCommande} du ${new Date().toLocaleDateString("fr-FR")} :
      </h1>
  `;

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


function validationCommande () {

  const redirection = document.querySelector('.btn-paiement');
  redirection.addEventListener('click', async (event) => {
    event.preventDefault();
    console.log("Vous avez cliqué sur payer");
    const cardSelected = document.querySelector('.choixRglt:checked');
    if (!cardSelected) {
        alert("Veuillez sélectionner un mode de paiement.");
        return;
    }
    


    // récupération des données
    const data = {
      modePaiement :  localStorage.getItem('memoireModePaiement'),
      modeCommande : localStorage.getItem("mode"),
      panier : localStorage.getItem("panier")
    }; 

    console.log("Envoi des données :", data);


    // Sauvegarde locale
    localStorage.setItem("commande", JSON.stringify(data));


   
// Déclaration fetch pour envoie fausse API : 
    const response = await fetch('https://api.local/commande',{
        method: 'POST',
        headers : {'Content-Type' : 'application/json'},
        body: JSON.stringify(data)
    }).catch(() => {
      // Simulation si pas de backend
      return {
        ok: true,
        json: async () => ({
          message: "Commande simulée (pas de backend)"
        })
      };
    });

    const result = await response.json();
    console.log("Réponse API simulée :", result);

     if (confirm('êtes-vous sûr de votre choix ?')){
      sessionStorage.setItem("commandeValidee", "true");
      window.location.href = 'menus.html';
     }
  })
}

validationCommande ()

// function popupvalidationCommande (){
// alert('Votre commande a bien été prise en compte !')
// }


// function afficherPopupValidation (){

// const validationChoix = document.getElementById('container-popup-articles');

// // on vérifie si containerPopup existe : 
//   if (!validationChoix) {
//     console.error('Conteneur popup introuvable');
//     return;
//     }

// // pour enlever le display none de la popup
// validationChoix.style.display = 'flex';
// validationChoix.innerHTML = '';  
// // enlève la popup de la nav


//     const addPopup = document.createElement ('section');
//     addPopup.id = 'popupValider';


//     const addLogoCroix = document.createElement ('div');
//     addLogoCroix.id ='img-logo-croix';

//     const addImgLogoCroix = document.createElement ('img');
//     addImgLogoCroix.id ='croix';
//     addImgLogoCroix.src = './assets/supprimer.png';
//     addImgLogoCroix.alt = 'Logo Croix';


//     // pour fermer la popup avec la croix
//     addImgLogoCroix.addEventListener('click', () => {
//     validationChoix.style.display = 'none';
//     validationChoix.innerHTML = '';
// });

//     validationChoix.appendChild(addPopup);
//     addPopup.appendChild(addLogoCroix);
//     addLogoCroix.appendChild(addImgLogoCroix);

    
// // Ajout phrase de confirmation d'ajout d'un article : 
//       const containerDemandeValidation = document.createElement('div');
//       const demandeValidation = document.createElement('p');
//       const memoireArticle = localStorage.getItem("memoireArticle");
//       demandeValidation.textContent = `Voulez-vous ajouter  ${memoireArticle} à votre panier ?`;
//       demandeValidation.style.paddingBottom = '20px';



//   // Ajout du bouton de validation : 
//       const btnValidation = document.createElement('button');
//       btnValidation.id = 'btn-etape-suivante';
//       btnValidation.textContent = 'Valider';
//       btnValidation.addEventListener('click', () => {
//         ajouterArticlePanier();
//         validationChoix.style.display = 'none';
//         validationChoix.innerHTML = '';
//       })

//       containerDemandeValidation.appendChild(demandeValidation);
//       containerDemandeValidation.appendChild(btnValidation);

//       addPopup.appendChild(containerDemandeValidation);



// }