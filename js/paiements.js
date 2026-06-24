const affichagePanier = document.querySelector('.panier');

const panier = JSON.parse(localStorage.getItem('panier')) || [];
const prixTotal = localStorage.getItem('memoirePrixTotal') || '0.00';

console.log('Panier :', panier);
console.log('Total :', prixTotal);

panier.forEach(produit => {

  let nom = '';

  if (produit.typeElement === 'menu') {
    nom = `${produit.type.menu} ${produit.type.burger}`;
  } else {
    nom = produit.type.article;
  }

  affichagePanier.innerHTML += `
    <div class="article">
      <h3>${nom}</h3>
      <p>Quantité : ${produit.quantite}</p>
    </div>
  `;
});

affichagePanier.innerHTML += `
  <div class="total">
    <h2>Total du panier : ${prixTotal} €</h2>
  </div>
`;