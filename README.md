# Maison Sucrée

Boulangerie-pâtisserie artisanale fictive — **Marseille**  
Projet académique **Da Vinci** (UI/UX + front-end, 4 jours)

---

## Objectif

Démontrer le processus complet :

**Recherche → UX → UI → Prototype → Développement → Tests → Améliorations**

Sans sur-ingénierie : site **petit, soigné, cohérent, fonctionnel**.

---

## Lancer le site

Ouvrir `index.html` dans un navigateur, **ou** servir en local :

```bash
# Exemple Python
python -m http.server 8080
```

Puis aller sur `http://localhost:8080`.

> Le panier utilise `localStorage` : un serveur local évite parfois des restrictions navigateur sur `file://`.

---

## Structure

```text
Maison_Sucree/
├── index.html          Accueil
├── menu.html           Menu + filtres
├── product.html        Fiche produit
├── cart.html           Panier / commande
├── about.html          À propos
├── contact.html        Contact + formulaire
├── css/style.css
├── js/
│   ├── products.js     Catalogue
│   ├── cart.js         Panier + localStorage
│   ├── menu.js         Filtrage
│   └── main.js         Nav, toast, formulaire
├── assets/images/
├── docs/
│   ├── research.md
│   ├── ux.md
│   ├── testing.md
│   ├── wireframes/
│   └── presentation/
└── README.md
```

---

## Fonctionnalités

| Fonction | Statut |
| -------- | ------ |
| Navigation | Oui |
| Filtrage catégories | Oui |
| Fiche produit | Oui |
| Panier (ajout / qty / suppression / total) | Oui |
| localStorage | Oui |
| Formulaire contact (validation + succès) | Oui |
| Responsive desktop / mobile | Oui |
| Paiement / backend / auth | Hors scope |

---

## Documentation UX

| Fichier | Contenu |
| ------- | ------- |
| [docs/research.md](docs/research.md) | Personas, concurrents, questionnaire |
| [docs/ux.md](docs/ux.md) | Exigences, IA, flows, design system |
| [docs/testing.md](docs/testing.md) | Tests + itérations |
| [docs/wireframes/wireframes.md](docs/wireframes/wireframes.md) | Wireframes |
| [docs/presentation/slides.md](docs/presentation/slides.md) | Plan 12 slides |

---

## Design system (résumé)

- **Fonds :** crème `#F7F3EE`, beige `#EDE6DC`
- **Texte :** brun foncé `#2C2420`
- **Primaire :** chocolat `#5C3D2E`
- **Accent :** terracotta `#A65D45`
- **Titres :** Cormorant Garamond
- **Corps :** Source Sans 3

---

## Plan 4 jours

| Jour | Focus |
| ---- | ----- |
| 1 | Recherche + UX + wireframes |
| 2 | Figma (UI + prototype) |
| 3 | HTML / CSS / JS |
| 4 | Tests + améliorations + présentation |

---

## Code review — points à expliquer

**HTML :** sémantique, nav, formulaires, accessibilité  
**CSS :** Flexbox, Grid, media queries, variables  
**JS :** DOM, événements, filtres, panier, `localStorage`, validation

---

## Auteur

Projet solo — recherche, UX, UI, développement et tests.
