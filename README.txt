Accessibilité des ressources JSON via une URL locale : 
http://localhost:5500/data/produits.json
http://localhost:5500/data/categories.json

Outils utilisé : 
Internet : pour les recherche sur la doc officiel comme mdn,
ChatGpt pour me debugger lorsque je ne trouve pas au bout d'une heure
Youtube : 
 * La gestion du local storage pour le panier : https://www.youtube.com/watch?v=vMT4NNFYno0


Etapes avancement github : 

1/ Mise en place de l'environnement + github
2/ Creation page index.html + CSS 6 responsive + verification code html/CSS W3C
3/ Creation feuille de style par page + creation page menu avec CSS
4/ Responsive + verification W3C (page menus)
5/ Creation page chevalet + css + creation page remerciements + css+ + modification px/% suite RDV mentor +  verification W3C
6/ Creation popup boissons petites-grandes + renommage class et id
7/ Responsive page index.html
8/ Responsive page menus.html
9/ Responsive page chevalet.html + page remerciements.html + correction code page popup.html
10/ Test responsive mobile taille 300 (mon mobile 286*516) (selon chatgpt il fait 360*800px)
11/ Test 2 responsive mobile taille 300
12/ Responsive mobile page menus.html + page chevalet.html + responsive page popup.html
13/ Correction des balises (main/article/section/div) sur toutes les pages
14/ Fixation des erreurs W3C
15/ Javascript nav + menus
16/ Javascript : addEventListener au click sur les card avec affichage titre,Description et produits + défiler de la navbar
17/ Javascript : ajout d'erreur avec catch + reprise du responsive de la zone de choix
18 / Javascript : début ajout au panier 1 menu
19/ Javascript : ajout de la popup sur le click de la nav bar pour le choix du menu
20/ Modification popup boissons avec ajout class imbriqué de la nav bar pour pouvoir modifier les tailles sur la popup + modification des étapes du switch pour effecer le contenu et le remettre avec le btn retour
21/ Corection des problèmes d'affichage css suite à l'ajout du conteneur de boissons et de l'affichage du texte avec le bouton retour de la poopup de la nav + creation popup de la boisson en javascript
22/ Correction des fonctions afficherPopupNav et afficherPopupBoisson qui étaient appliquées au mauvais endroit pour l'affecter au bon endroit  + Mise à jour des commentaires javascript de la fonction getDataCat()
23/ Mise à jour des commentaires javascript des fonction afficherProduits () et afficherDescritpion ()
24/ Mise à jour des commentaires javascript de la fonction afficherPanier()
25/ Mise à jour des commentaires javascript des fonctions afficherPopupBoisson() et afficherPopupNav()
26/ Creation évènement au click sur la page index.html sur place et à emporter
27/ Creation du changement de numero de commande surplace et à emporter dans le panier
28/ Ajout panier avec memoire popupmenu
29/ Isolement des fonction du panier dans le fichier javascript dédié
30/ Renommage fonction defilerPopupMenus + modification emplacement setItem pour le type de menu et l'accompagnement du local storage
31/ Gérer l'affichage du menu dans le panier correctement
32/ Gestion des quantité du panier et ajout de l'évènement au clic pour la suppression
33/ Ajout du prix du menu + prix du menu en fonction de la quantité + message d'alert si non click de choix et message de confirmation sur la poubelle de suppression du panier
34/ Ajout d'un bouton de validation pour envoyer au panier d'un burger
35/ Ajout des boissons au panier
36/ A faire : 
 - Les menus deviennent undifined à l'ajout de sautres produits
 - Lorsque je choisis plusieurs boissons, il n'y en a qu'une au panier
 - faire le click du bouton annuler des boissons
 - correction de la suppression de la poubelle qui supprime tout le panier
 - les quantités disparaissent à l'ajout de d'autres produits
 - pas de quantités si plusieurs au niveau des articles seuls
 - mettre en place le total du panier