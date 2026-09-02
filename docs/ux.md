# Maison Sucrée — UX Design

> Document de conception UX — projet Da Vinci (4 jours)

---

## 1. Exigences UX

### UX-01 — Compréhension immédiate
L’utilisateur comprend en quelques secondes que Maison Sucrée est une boulangerie-pâtisserie artisanale à Marseille.

### UX-02 — Accès rapide au menu
Depuis l’accueil, un CTA principal mène directement au menu.

### UX-03 — Catégories claires
Les produits sont organisés : Gâteaux, Viennoiseries, Pains, Boissons (+ filtre « Tous »).

### UX-04 — Prix visibles
Le prix apparaît sur les cartes produit, sans ouvrir la fiche.

### UX-05 — Fiche produit
Nom, description, prix, ingrédients, allergènes, quantité.

### UX-06 — Commande simple
Ajout au panier, modification quantités, total, sans paiement réel.

### UX-07 — Localisation
Adresse, horaires et contact accessibles (page Contact + footer + section Accueil).

---

## 2. Architecture de l’information

```text
ACCUEIL (index.html)
│
├── MENU (menu.html)
│   ├── Tous
│   ├── Gâteaux (cakes)
│   ├── Viennoiseries (pastries)
│   ├── Pains (bread)
│   └── Boissons (drinks)
│
├── DÉTAIL PRODUIT (product.html?id=…)
│
├── COMMANDE / PANIER (cart.html)
│
├── À PROPOS (about.html)
│
└── CONTACT (contact.html)
```

Navigation header : Accueil · Menu · À propos · Contact · Icône panier

---

## 3. Parcours utilisateurs

### Flux 1 — Découvrir un produit

```text
Accueil
  → Menu
  → Filtrer (ex. Viennoiseries)
  → Carte produit
  → Fiche détail
```

### Flux 2 — Ajouter à la commande

```text
Accueil / Menu
  → Produit
  → Ajouter à la commande
  → Notification « Ajouté »
  → Panier
  → Résumé / Passer la commande (simulation)
```

### Flux 3 — Trouver la boutique

```text
Accueil
  → Contact
  → Adresse / Horaires
  → Carte (placeholder)
```

---

## 4. Identité visuelle

### Ambiance
Élégant · chaleureux · français · artisanal · moderne · minimal

### Palette

| Rôle | Hex | Usage |
| ---- | --- | ----- |
| Fond | `#F7F3EE` | Background principal |
| Secondaire | `#EDE6DC` | Sections alternées |
| Texte | `#2C2420` | Titres et corps |
| Primaire | `#5C3D2E` | Brun chocolat — boutons, nav |
| Accent | `#A65D45` | Terracotta atténué — CTA hover, liens |
| Blanc | `#FFFFFF` | Cartes, formulaires |
| Bordure | `#D9CFC3` | Séparateurs |

### Typographie

| Niveau | Police | Taille (desktop) | Poids | Interligne |
| ------ | ------ | ---------------- | ----- | ---------- |
| H1 | Cormorant Garamond | 3.5rem | 600 | 1.15 |
| H2 | Cormorant Garamond | 2.25rem | 600 | 1.2 |
| H3 | Cormorant Garamond | 1.5rem | 600 | 1.3 |
| Body | Source Sans 3 | 1rem | 400 | 1.6 |
| Small | Source Sans 3 | 0.875rem | 400 | 1.5 |
| Button | Source Sans 3 | 0.9375rem | 600 | 1 |

---

## 5. Composants UI (spécification Figma)

À créer dans Figma (Day 2) :

- Boutons : Primary / Secondary / Disabled
- Carte produit : Default / Hover
- Navigation : Desktop / Mobile
- Filtre catégorie : Default / Active
- Sélecteur quantité
- Champs formulaire : Default / Focus / Error
- Ligne panier
- Notification succès

---

## 6. Wireframes

Voir `docs/wireframes/` — maquettes basse fidélité (layout + hiérarchie, sans couleurs finales).

Écrans :

1. Accueil
2. Menu
3. Détail produit
4. Panier
5. À propos
6. Contact

Versions Desktop 1440×900 et Mobile 390×844 à produire aussi en Figma.

---

## 7. Prototype Figma (interactions prévues)

| Déclencheur | Destination |
| ----------- | ----------- |
| « Découvrir le menu » | Menu |
| Carte / Voir détails | Product |
| Ajouter à la commande | Cart (+ notif) |
| Continuer vos achats | Menu |
| Nav header | Pages correspondantes |
| Burger mobile | Menu overlay |

> Le site HTML/CSS/JS sert de prototype interactif fonctionnel pour la démo et les tests.
> Le fichier Figma reste la référence visuelle haute fidélité (à réaliser Day 2).

---

## 8. Accessibilité (bases)

- HTML sémantique (`header`, `nav`, `main`, `footer`, `form`)
- `alt` sur les images
- Contraste texte / fond suffisant
- Focus visible
- Labels sur les champs
- Boutons natifs (pas de `div` cliquables)
- Navigation clavier
