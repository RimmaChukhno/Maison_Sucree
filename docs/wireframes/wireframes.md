# Maison Sucrée — Wireframes basse fidélité

> Layout et hiérarchie uniquement — pas de couleurs finales.
> À reproduire / affiner dans Figma (Day 2).

Légende : `[ ]` = zone · `BTN` = bouton · `====` = image

---

## Desktop — Accueil (1440)

```text
+------------------------------------------------------------------+
| LOGO MAISON SUCRÉE     Accueil  Menu  À propos  Contact   [panier]|
+------------------------------------------------------------------+
|                                                                  |
|  ======================== HERO IMAGE ==========================  |
|                                                                  |
|     H1 Artisan bakery in Marseille                               |
|     Sub French pastries, handmade every day.                     |
|     [ Découvrir le menu ]  [ Nous rendre visite ]                |
|                                                                  |
+------------------------------------------------------------------+
|  Spécialités                                                     |
|  [ Gâteaux ]     [ Viennoiseries ]     [ Café ]                  |
+------------------------------------------------------------------+
|  Best-sellers                                                    |
|  [img|nom|desc|prix|BTN] [img|…] [img|…] [img|…]                 |
+------------------------------------------------------------------+
|  À propos (texte court)                                          |
+------------------------------------------------------------------+
|  Lieu : adresse + horaires                                       |
+------------------------------------------------------------------+
|  FOOTER : nav · contact · horaires                               |
+------------------------------------------------------------------+
```

---

## Desktop — Menu

```text
| LOGO … nav … panier                                              |
| H1 Notre Menu                                                    |
| [ Tous ] [ Gâteaux ] [ Viennoiseries ] [ Pains ] [ Boissons ]    |
|                                                                  |
|  grille 3–4 colonnes de cartes produit                           |
|  [img][nom][desc][prix][Détails][Ajouter]                        |
```

---

## Desktop — Produit

```text
| LOGO … nav …                                                     |
|  [======== IMAGE LARGE ========]   Nom                           |
|                                    Description                   |
|                                    Prix                          |
|                                    Ingrédients / Allergènes      |
|                                    [-] qty [+]                   |
|                                    [ AJOUTER À LA COMMANDE ]     |
```

---

## Desktop — Panier

```text
| Votre commande                                                   |
| Ligne produit …… qty …… prix …… [supprimer]                      |
| --------------------------------                                 |
| Total                                                            |
| [ Continuer vos achats ]  [ Passer la commande ]                 |
```

---

## Desktop — À propos

```text
| Histoire | Approche artisanale | Ingrédients | Valeurs           |
| Petite galerie 3 images                                          |
```

---

## Desktop — Contact

```text
| Adresse | Horaires | Tél | Email                                 |
| [==== carte placeholder ====]                                    |
| Formulaire : Nom | Email | Message | [ Envoyer ]                 |
```

---

## Mobile (390) — principes

```text
| LOGO                    [☰] [panier]                             |
| menu drawer : Accueil, Menu, À propos, Contact                   |
| Hero full width, CTA empilés                                     |
| Grille produits 1 colonne                                        |
| Fiche produit : image au-dessus, infos en dessous                |
```

---

## Flux (schéma)

```text
HOME ──► MENU ──► FILTER ──► PRODUCT ──► ADD ──► CART
  │                                              │
  └──────────────► CONTACT ◄─────────────────────┘
                     │
                     └─ Adresse / Horaires / Carte
```
