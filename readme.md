# Fichiers fournis
Les assets (fichiers images) et la liste des produits ainsi que des catégories (au format json)

## Lien public vers le prototype figma
https://www.figma.com/design/0qnd0pH4qryZqjzXcB4qjN/borne?node-id=97-775&t=SJ4QkHUyIRA5QSb0-1


## Explication des fichiers

html : 
* index : choix du mode de commande (surplace ou à emporter),
* menus : affiche tout les articles et le panier,
* paiement : affiche le détail de la commande et le choix du mode de paiement
* chevalet : permet à l'utilisateur de remplir un numéro de chevalet
* remerciement : page de remerciement 
* popup : fichier qui ne sert plus  :a été utiliser pour la construction de la popup avec le css

css : donne le style de chaque page

js : 
* index : permet la selection entre surplace ou à emporter, de donner un numéro de commande et de les enregistrer dans le local storage
* menus : 
  1/ permet de choisir une catégorie : avec défilement des catégorie avec les flèches (function flecheNav ()) : 
      - si menus : popup menus + enregistrement dans le localStorage
      - si boissons : popup boissons + enregistrement dans le localStorage
      - si autres articles : popup articles + enregistrement dans le localStorage
  2/ permet d'afficher les articles dans le panier en fonctions du choix de l'utilisateur + enregistrement dans le localStorage
  3/ permet l'abandon ou la validation du panier + enregistrement dans le localStorage + redirection sur la page de paiements.html
  4/ Après avoir été sur la page de paiement qui a retourné sur cette page : il y a un message de validation de commande : succès ou echec
* popup : permet d'afficher dans la page menus.html les poppups menus, boissons et articles cités précédements
* panier : permet de montrer le numéro de commande + l'ajout de chaque type de produits (menus, boissons, articles) et l'affichage correct de ceux-ci avec le calcul du montant total du panier.
* paiements : permet de reprendre le panier du localStorage et de l'afficher la page paiements.html avec le numéro de commande (de la page index.html) 
avec la date du jour et le mode de commande. Permet aussi à l'utilisateur de faire un choix de mode de paiement et de cliquer sur payer et avoir un renvoie 
vers la page menus.html
* chevalet : permet à l'utilisateur de remlir le uméro de chevalet  :seulement 3 chiffres et pas autres chose et un seul chiffre par input + bouton de validation
* remerciements : permet de revenir à la page index pour faire une nouvelle commande

assets : regroupe toutes les images du site

data  :regroupe tous les fichiers json utilisés
