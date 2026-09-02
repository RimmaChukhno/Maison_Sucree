# Préparation code review

Questions probables et réponses courtes (à reformuler avec vos mots).

---

## HTML

**Pourquoi des balises sémantiques ?**  
`header`, `nav`, `main`, `footer`, `section`, `article` clarifient la structure pour l’accessibilité et le SEO.

**Accessibilité formulaires ?**  
Chaque champ a un `<label for="…">`. Les erreurs sont annoncées via classes + messages.

**Boutons vs divs ?**  
Les actions utilisent `<button>` ou `<a>` — focus clavier et sémantique corrects.

---

## CSS

**Flexbox ?**  
Header, actions hero, actions cartes, résumé panier.

**Grid ?**  
Grilles produits, spécialités, contact, détail produit, footer.

**Responsive ?**  
`clamp`, `minmax`, media queries à 900px / 768px / 480px. Menu burger sous 768px.

**Variables CSS ?**  
Couleurs et typos centralisées dans `:root` pour la cohérence.

---

## JavaScript

**Filtrage ?**  
`menu.js` : clic sur `.filter-btn` → filtre `PRODUCTS` par `category` → re-render des cartes.

**Panier ?**  
Tableau `{ id, quantity }` dans `localStorage` (`maisonSucreeCart`).  
Fonctions : `addToCart`, `setCartQuantity`, `removeFromCart`, `getCartTotal`.

**Fiche produit ?**  
`URLSearchParams` lit `?id=`, `getProductById` charge les données.

**Validation contact ?**  
`preventDefault`, tests longueur / e-mail, classe `is-error`, message succès simulé.

**Toast / badge ?**  
Feedback UX après ajout (itération post-test).

---

## Hors scope (à dire clairement)

Pas de backend, paiement, auth, base de données — volontaire pour un prototype 4 jours.
