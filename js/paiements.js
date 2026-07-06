function afficherNumeroCommande() {
  const titreH1 = document.getElementById('container-titre');
  const mode = localStorage.getItem('mode');
  let numeroCommande = localStorage.getItem('memoireNumeroCommande');

  titreH1.innerHTML += `

      <h1 class="titreH1">
        Votre Commande ${mode} n° ${numeroCommande} du ${new Date().toLocaleDateString('fr-FR')}&nbsp;:
      </h1>
  `;

  // console.log('Mode :', numeroCommande);
}
afficherNumeroCommande();

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
        Total (TTC)&nbsp;: 
        </div>
        <div class="montantTotal"> ${prixTotal}&nbsp;€
        </div>
      </h3>
    </div>
  `;

  affichagePanier.innerHTML += `
  <div class="barre-separation"></div>
  `;

  panier.forEach((produit) => {
    let nom = '';
    let nomBurger = (produit.type?.burger || '').replace('Menu ', ''); // permet d'enlever le mot menu de chaque titre de menu du fichier json

    if (produit.typeElement === 'menu') {
      nom = `Menu ${produit.type.menu} ${nomBurger}`;
    } else {
      nom = produit.type.article;
    }

    affichagePanier.innerHTML += `
  
    <div class="article">
         <div> 
            <h4>${nom}</h4>
            
            <p class="quantite">Quantité :&nbsp;${produit.quantite}</p>
        </div>
        <div>
            <p class="prix-article">${(produit.quantite * produit.type.prix).toFixed(2)}&nbsp;€</p>
        </div>
    </div>
  `;
  });
}

afficherPanierPaiement();

function afficherModePaiement() {
  document.querySelectorAll('.choixRglt').forEach((input) => {
    input.addEventListener('change', (e) => {
      localStorage.setItem('memoireModePaiement', e.target.value);
      console.log('STOCKÉ =', e.target);
      // boucle pour rtirer la bordure partout ou elle est utilisée => parcourrir les éléments qui ont la classe choixRglt (sur chaque élément je retire la class selected)
      // Enlever la bordure de tous les labels
      document.querySelectorAll('.form-type-paiement').forEach((label) => {
        label.classList.remove('activeBorder');
      });

      // Ajouter la bordure au label correspondant
      const label = document.querySelector(`label[for="${e.target.id}"]`);
      label.classList.add('activeBorder');
    });
  });

  document.querySelectorAll('.form-type-paiement').forEach((label) => {
    label.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();

        const input = document.getElementById(label.htmlFor);
        input.click(); // coche le radio et déclenche "change"
      }
    });
  });
}

afficherModePaiement();

function validationCommande() {
  const redirection = document.querySelector('.btn-paiement');
  redirection.addEventListener('click', async (event) => {
    event.preventDefault();
    console.log('Vous avez cliqué sur payer');
    const cardSelected = document.querySelector('.choixRglt:checked');
    if (!cardSelected) {
      alert('Veuillez sélectionner un mode de paiement.');
      return;
    }
    if (!confirm('Êtes-vous sûr de vouloir valider votre commande ?')) {
      return; // L'utilisateur annule, on arrête tout.
    }

    // récupération des données
    const data = {
      modePaiement: localStorage.getItem('memoireModePaiement'),
      modeCommande: localStorage.getItem('mode'),
      panier: JSON.parse(localStorage.getItem('panier'))
    };

    console.log('Envoi des données :', data);

    // Sauvegarde locale
    localStorage.setItem('commande', JSON.stringify(data));

    console.log('AVANT FETCH');
    // Déclaration fetch pour envoie fausse API :
    let response;

    try {
      response = await fetch('https://api.local/commande', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      // cas où fetch répond mais pas exploitable
      if (!response || !response.ok) {
        throw new Error('Réponse API invalide');
      }
    } catch (error) {
      console.warn('API indisponible → simulation');

      response = {
        ok: true,
        json: async () => ({
          message: 'Commande simulée (fallback local)'
        })
      };
    }

    const result = await response.json();
    console.log('Réponse finale :', result);

    console.log('APRÈS FETCH');

    sessionStorage.setItem('commandeValidee', 'true');
    window.location.href = 'menus.html';
  });
}

validationCommande();
