const btnEnregistrerNumero = document.querySelector('.btn-chevalet');
btnEnregistrerNumero.addEventListener('click', () => {
  console.log('vous avez enregistrer le numéro de commande')
  event.preventDefault();
  window.location.href = './remerciements.html'
})