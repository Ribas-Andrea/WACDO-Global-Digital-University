function choixLieu() {
  const btnChoixLieuSurPlace = document.querySelector('.btn-choix-lieu-sur-place');
  const btnChoixLieuEmporter = document.querySelector('.btn-choix-lieu-emporter');
  // Attention si on met querySelectorAll, il faudra un forEach car il sert à parcourir plusieurs éléments d'une même class

  if (!btnChoixLieuSurPlace || !btnChoixLieuEmporter) {
    console.error('Boutons introuvables');
    return;
  }

  btnChoixLieuSurPlace.addEventListener('click', () => {
    console.log('click sur place');
    btnChoixLieuSurPlace.classList.add('activeBorder');
    btnChoixLieuEmporter.classList.remove('activeBorder');
    const mode = localStorage.setItem('mode', 'sur place');
    console.log('mode =', mode);
    window.location.href = 'menus.html';
  });

  btnChoixLieuEmporter.addEventListener('click', () => {
    console.log('click à emporter');
    btnChoixLieuEmporter.classList.add('activeBorder');
    btnChoixLieuSurPlace.classList.remove('activeBorder');
    const mode = localStorage.setItem('mode', 'à emporter');
    window.location.href = 'menus.html';
  });
}

choixLieu();
