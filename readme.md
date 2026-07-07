# WACDO

## Description du projet

WACDO est une application Front-end simulant une borne de commande numérique pour un restaurant de restauration rapide.

Ce projet a été réalisé dans le cadre d'une évaluation de développement Front-end. Il consiste à intégrer une maquette fournie et à développer une interface interactive permettant aux clients de composer, personnaliser et valider leur commande.

L'application est responsive et s'adapte à différentes résolutions d'écran afin d'offrir une expérience utilisateur fluide sur les bornes numériques.

**Maquette Figma :** [Lien vers le prototype](https://www.figma.com/design/0qnd0pH4qryZqjzXcB4qjN/borne?node-id=97-775&t=SJ4QkHUyIRA5QSb0-1)

**Version en ligne :** [Voir la démo](https://ribas-andrea.github.io/WACDO-Global-Digital-University/menus.html)

---

## Fonctionnalités

L'application permet de :

* Choisir le mode de consommation (**Sur place** ou **À emporter**).
* Charger dynamiquement les catégories, menus et produits depuis des fichiers JSON.
* Naviguer entre les différentes catégories de produits.
* Composer une commande avec des produits individuels ou des menus.
* Personnaliser les menus (burger, accompagnement, boisson et sauce).
* Gérer les différentes tailles des boissons et accompagnements avec mise à jour automatique du prix.
* Ajouter des articles au panier.
* Calculer automatiquement le montant total de la commande.
* Saisir un numéro de chevalet pour les commandes sur place.
* Valider la commande.
* Simuler l'envoi des informations de commande au format JSON vers une API fictive.
* Afficher une page de confirmation après validation.

---

## Fonctionnement — parcours utilisateur

1. Choix du mode de consommation (Sur place ou À emporter).
2. Chargement des catégories et produits depuis des fichiers JSON.
3. Affichage dynamique des produits grâce à JavaScript.
4. Sélection et personnalisation des produits ou menus.
5. Ajout des articles au panier.
6. Calcul automatique du montant de la commande.
7. Validation de la commande avec saisie du numéro de chevalet si nécessaire.
8. Envoi des données de la commande au format JSON vers une API fictive.
9. Affichage d'une page de remerciement confirmant la prise en compte de la commande.

---

## Structure du projet

```text
WACDO/
│
├── assets/          # Images et ressources graphiques
├── css/             # Feuilles de style
├── data/            # Fichiers JSON (catégories, produits)
├── js/              # Scripts JavaScript
├── index.html
├── menus.html
├── chevalet.html
├── paiements.html
├── remerciements.html
├── popup.html
└── README.md
```

### Détail des pages HTML

| Page | Rôle |
|---|---|
| `index.html` | Choix du mode de commande (sur place ou à emporter) |
| `menus.html` | Affiche tous les articles disponibles et le panier |
| `paiement.html` | Affiche le détail de la commande et le choix du mode de paiement |
| `chevalet.html` | Permet à l'utilisateur de saisir un numéro de chevalet |
| `remerciements.html` | Page de remerciement en fin de commande |
| `popup.html` | Ancien fichier de construction des popups (CSS) — n'est plus utilisé |

### Détail des scripts JavaScript

* **`index.js`** — Gère la sélection entre "sur place" et "à emporter", génère un numéro de commande et enregistre les informations dans le `localStorage`.

* **`menus.js`** — Cœur de la logique de commande :
  * Sélection d'une catégorie avec défilement via des flèches (`flecheNav()`), qui déclenche l'ouverture de la popup correspondante (menus, boissons ou autres articles) et enregistre le choix dans le `localStorage`.
  * Affichage des articles du panier selon les choix de l'utilisateur, avec mise à jour du `localStorage`.
  * Gestion de l'abandon ou de la validation du panier, avec redirection vers `paiements.html`.
  * Au retour de la page de paiement, affichage d'un message de succès ou d'échec de la commande, puis redirection vers `chevalet.html` si la commande est "sur place", ou vers `remerciements.html` si elle est "à emporter".

* **`popup.js`** — Affiche dans `menus.html` les popups de sélection (menus, boissons, articles).

* **`panier.js`** — Affiche le numéro de commande, l'ajout de chaque type de produit (menus, boissons, articles) et calcule le montant total du panier.

* **`paiements.js`** — Récupère le panier depuis le `localStorage` et l'affiche sur `paiements.html` avec le numéro de commande, la date du jour et le mode de commande choisi. Gère le choix du mode de paiement et redirige vers `menus.html` après validation.

* **`chevalet.js`** — Permet la saisie du numéro de chevalet (3 chiffres, un seul chiffre par champ) et sa validation.

* **`remerciements.js`** — Permet de revenir à `index.html` pour lancer une nouvelle commande.

### Autres dossiers

* **`assets/`** — Regroupe toutes les images du site (illustrations, icônes, logo).
* **`css/`** — Une feuille de style par page, plus un fichier `style.css` global.
* **`data/`** — Fichiers `categories.json` et `produits.json` utilisés pour générer dynamiquement le contenu.

---

## Technologies utilisées

* **HTML5** — structure sémantique des pages.
* **CSS3** — mise en page, animations et responsive design.
* **JavaScript (Vanilla JS)** — logique métier, manipulation du DOM et gestion des interactions.
* **JSON** — stockage des données des catégories, menus et produits.
* **AJAX (Fetch API)** — chargement dynamique des données JSON.
* **LocalStorage / SessionStorage** — mémorisation temporaire des informations de commande.
* **Google Fonts** — intégration de la police *Source Sans 3*.

---

## Installation

### Exécution en local

1. Cloner ou télécharger le projet.
2. Ouvrir le dossier dans Visual Studio Code (ou un autre éditeur).
3. Lancer le projet avec un serveur local (par exemple **Live Server**).

> L'utilisation d'un serveur local est nécessaire afin de permettre le chargement des fichiers JSON via la Fetch API.

---

## Tests et validation

Le projet a été testé afin de vérifier :

* le chargement des fichiers JSON ;
* l'affichage dynamique des catégories et des produits ;
* la navigation entre les différentes catégories ;
* la personnalisation des menus ;
* la gestion du panier ;
* le calcul automatique des prix ;
* la validation de la commande ;
* le responsive design sur différentes résolutions d'écran.

### Validation technique

* Validation **HTML** réalisée avec le validateur **W3C** (aucune erreur).
* Validation **CSS** réalisée avec le validateur **W3C** (aucune erreur).
* Les quelques avertissements restants concernent des titres générés dynamiquement par JavaScript après le chargement des données JSON.
* Vérification de l'accessibilité (navigation clavier, attributs `alt`, labels de formulaires, structure sémantique).
---

## Accessibilité des ressources JSON via une URL locale

http://localhost:5500/data/produits.json
http://localhost:5500/data/categories.json

---

## Déploiement

L'application est hébergée avec **GitHub Pages**.

**Version en ligne :** https://ribas-andrea.github.io/WACDO-Global-Digital-University/index.html


---


## Auteur

Projet réalisé par **Andrea Ribas** dans le cadre de la certification **Développeur web Node option Angular** à **Global Digital University**.
