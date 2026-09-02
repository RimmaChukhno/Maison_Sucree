# Maison Sucrée — Tests d’utilisabilité & itérations

> Projet Da Vinci — Day 4

---

## 1. Tâches de test (4)

| # | Tâche | Succès attendu |
| - | ----- | -------------- |
| T1 | Trouver une viennoiserie | Filtrer ou repérer une pâtisserie sur le Menu |
| T2 | Ouvrir la fiche produit | Atterrir sur `product.html` avec détails |
| T3 | Ajouter au panier | Produit visible dans le panier, total à jour |
| T4 | Trouver les horaires d’ouverture | Horaires trouvés (Contact, Accueil ou Footer) |

---

## 2. Protocole

- 3 à 5 participants si possible
- Observer sans guider
- Noter : succès / échec, difficulté (1–5), commentaires, temps optionnel
- Ne pas présenter des résultats inventés comme « réels »

---

## 3. Résultats — test d’utilisabilité **simulé**

> **Label clair :** tableau ci-dessous = **test simulé** à titre pédagogique.  
> Remplacer par de vrais résultats après sessions réelles (recommandé Day 4 matin).

| Tâche | Utilisateur 1 | Utilisateur 2 | Utilisateur 3 |
| ----- | ------------- | ------------- | ------------- |
| Trouver une viennoiserie | ✓ | ✓ | ✓ |
| Ouvrir la fiche produit | ✓ | ✓ | ✓ |
| Ajouter au panier | ✓ | ✗* | ✓ |
| Trouver les horaires | ✓ | ✓ | ✗** |

\* U2 n’a pas remarqué le badge panier après ajout.  
\*\* U3 a cherché uniquement dans le header, pas le footer / Contact.

**Difficulté moyenne (simulée, 1 = facile / 5 = difficile)**

| Tâche | Moyenne |
| ----- | ------- |
| T1 | 1.3 |
| T2 | 1.5 |
| T3 | 2.7 |
| T4 | 2.3 |

---

## 4. Problèmes UX identifiés → solutions

### Problème 1 — Le panier n’est pas assez visible

**Observation (simulée) :** après « Ajouter », certains utilisateurs ne voient pas le feedback.

**Solution :**

- Badge compteur sur l’icône panier
- Notification toast : « Ajouté à votre commande. »

### Problème 2 — Horaires difficiles à trouver

**Observation (simulée) :** un utilisateur ne trouve pas les horaires rapidement.

**Solution :**

- Horaires sur Accueil (section Lieu)
- Page Contact
- Footer sur toutes les pages

### Problème 3 — Confirmation d’ajout floue

**Solution :** toast succès + mise à jour immédiate du compteur panier.

---

## 5. Avant / après (notes de design)

| Avant | Après |
| ----- | ----- |
| Icône panier seule | Icône + badge nombre d’articles |
| Pas de feedback à l’ajout | Toast « Ajouté à votre commande. » |
| Horaires surtout sur Contact | Horaires Accueil + Contact + Footer |

---

## 6. Checklist de validation finale

- [x] Comprendre Maison Sucrée immédiatement
- [x] Atteindre le menu facilement
- [x] Filtrer les produits
- [x] Ouvrir un produit
- [x] Lire les infos produit
- [x] Ajouter à la commande
- [x] Modifier le panier
- [x] Trouver l’adresse
- [x] Trouver les horaires
- [x] Desktop + mobile utilisables
