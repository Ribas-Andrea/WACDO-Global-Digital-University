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
18/ Javascript : début ajout au panier 1 menu
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
36/ Correction erreur sur panier undefined : rassemblement des 3 fonctions afficher panier en une
37/ Correction ajout barre de scroll du panier avec boutons visibles + ajout de la quantité pour les articles seuls
38/ Ajout de la quantite des boissons
39/ Correction de l'ajout de la boisson : lien entre la quantité et la taille choisie + maj localstorage à l'ouverture de la popup + message d'alert si non selection
40/ Correction du bouton annuler : ne pas fermer l popup mais tout réinitialiser
41/ Correction bouton ajouter des boisson : erreur de parenthèses
42/ Mise en place du total du panier + modification css pour affichage du prix des boissons et des articles seuls
43/ Ajustement du prix maxi best of +1.20€
44/ Correction problème affichage de la popup menu au case 1 avec le bouton retour du case 2
45/ Correction total panier à la suppression d'un article + function abandon du panier
46/ Ajout de la redirection vers les page chevalet + remerciements au bouton payer + ajout du bouton nouvelle commande sur la page remerciements
47/ Ajout du choix des sauces dans les step (step 4)
48/ Début de la page paiement
49/ Avancement de la page paiement : creation du titre avec le mode et numero de commande + mise en page du panier
50/ Ajout de la date de la commande
51/ Correction taille de la poubelle du panier
52/ Ajout de la bordure à la selection d'un choix de paiement + message de confirmation et verification si selection d'un paiement sur le bouton payer + modification de l'affichage du panier dans la partie de paiement (deplacement du mot menu)
53/ Envoie de la commande vers une API fictive en method post avec en-tête 'Content-Type' : 'application/json'
54/ Mise en place du message de confirmation de commande prise en compte + message utilisateur pour la réponse de l'API (succes ou erreur)
55/ Ajout de la condition de ne pas avoir le panier vide pour le valider + vidage du local storage pour une nouvelle commande et bouton abandon
56/ Responsive page chevalet + page remerciements + page menus (nav + produit + panier) + popup articles + popup boissons + popup menus
57/ Responsive page paiements
58/ Modif mediaqueries suite rdv mentor (fusion de plusieurs taille) + modif affichage produit de flex-start a space-arround
59/ Résolution texte avec la commande &nbsp; ou \u00A0 pour éviter que les deux point aillent à la ligne seuls
60/ Résolution déplacement des card avec les flèches en fonction du responsive + début de vérification du fonctionnement avec tab (page menu avec popup menus)
61/ Suite fonctionnement avec TAB popupBoissons + popupArticles + page paiements + popupValidationAPI + modification envoie API pour avoir le message de confirmation avant l'envoie des données
62/ Test modification chemin d'accès images du fichier JSON categories pour test mobile
63/ Test modification chemin d'accès images du fichier JSON produits pour test mobile (partie menus)
64/ Ajout d'une fonction de fermeture des popups pour adaptation sur firefox + verification fonctionnalité edge ok

A faire : 

I/ Séquence 6 : 
  - Vérifier toutes les fonctionnalitées (pc + mobile) sur plusieurs navigateurs + vérification si erreur dans la console
  - Passage des fichiers au w3C + corriger les erreurs + refaire le test avec tab vérifier que tout fonctionne et si modif de fichier refaire w3C
  - Regarder la vidéo de ressources + faire le quizz

II/Séquence 7 : 
