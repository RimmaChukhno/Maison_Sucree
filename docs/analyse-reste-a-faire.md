# Analyse d’écart — Brief Da Vinci vs projet actuel

> Date : 1 sept. 2026  
> Sources : `Da Vinci.pdf` (officiel) + état du dossier `Maison_Sucree`

---

## 0. Alerte importante (à vérifier avec le prof)

Le PDF officiel demande de choisir **parmi** :

- Gestion de tâches / TODO / Agenda / Notes / **Jeu vidéo**

Or le projet actuel est un **site boulangerie** (Maison Sucrée).

| Action | Priorité |
| ------ | -------- |
| Confirmer auprès du formateur que le site vitrine / commande locale est accepté | **Critique** |
| Si non : soit pivoter le sujet, soit justifier « analyse d’un site existant + nouvelle interface » comme produit web | Critique |

Tant que ce n’est pas clarifié, ne pas investir 2 jours de plus dans Figma sur le mauvais sujet.

---

## 1. Exigences du PDF officiel — statut

| Exigence Da Vinci | Statut | Preuve / écart |
| ----------------- | ------ | -------------- |
| 1. Étude concepts UI/UX + bonnes pratiques | ⚠️ Partiel | Docs présents ; pas de courte synthèse « concepts de base » dédiée |
| 2. Analyse d’un site / app / jeu existant | ✅ Fait | `docs/research.md` (3 concurrents) |
| 3a. Identifier besoins utilisateurs | ✅ Fait | Personas + exigences UX |
| 3b. Enquêtes / interviews / tests | ⚠️ Simulé | Questionnaire + tests **étiquetés simulés** — le PDF attend des données collectées |
| 4a. Fonctionnalités + parcours | ✅ Fait | `docs/ux.md` |
| 4b. Wireframes + maquettes | ⚠️ Partiel | Wireframes en Markdown seulement — **pas dans Figma** |
| 4c. **Utiliser Figma** | ❌ Manquant | **Bloquant pour la note** |
| 4d. Composants UI (boutons, forms…) | ⚠️ Partiel | Dans le CSS / code ; **pas en bibliothèque Figma** |
| 5a. Optimiser flux / interactions | ✅ Fait | Nav, filtres, panier, toast |
| 5b. Animations / transitions | ⚠️ Léger | Hover + fade hero ; peu d’animations UX |
| 5c. Responsive multi-appareils | ✅ Fait | CSS + media queries |
| 6a–c. Prototype front-end | ✅ Fort | HTML/CSS/JS complet, au-delà du minimum |
| Résultat : étude produit | ✅ | |
| Résultat : étude UI/UX pré-dev | ⚠️ | Manque Figma comme preuve visuelle |
| Résultat : prototype simple | ✅ | |
| Rendu : présentation + support | ❌ | Outline Markdown seulement |
| Slides : organisation équipe | ❌ | Pas encore de vrai deck |
| Slides : problèmes + solutions | ⚠️ | Notés dans `testing.md` / outline — pas en slides |
| Slides : démonstration | ❌ | À répéter live |
| Revue de code | ⚠️ | `docs/code-review.md` prêt ; à répéter à l’oral |
| GitHub `prenom-nom/DaVinci` | ❌ | Pas de dépôt / remote visible |

---

## 2. Ce qui est déjà solide (ne pas refaire)

- Site 6 pages fonctionnel (menu, filtres, fiche, panier, contact)
- Design system en CSS (couleurs, typo, composants)
- Documentation recherche / UX / wireframes texte / plan
- Prototype **plus avancé** que le minimum du PDF

**Verdict :** le code est en avance ; **Figma + rendu académique** sont en retard.

---

## 3. Ce qu’il reste vraiment à faire (par priorité)

### P0 — Bloquant soutenance / note

1. **Clarifier le type de projet** avec le prof (boulangerie OK ?)
2. **Figma obligatoire**
   - Design system (couleurs, typo, boutons, cartes, forms, nav)
   - Wireframes (ou importer/recréer ceux du Markdown)
   - Maquettes hi-fi desktop + mobile (au moins Accueil, Menu, Produit, Panier, Contact)
   - Prototype cliquable (parcours commande)
3. **Présentation (PowerPoint / Google Slides / PDF)**
   - Organisation équipe
   - Problèmes + solutions
   - Démo
   - (+ recherche, analyse, UX, Figma — pour raconter le processus)
4. **Repo GitHub** `https://github.com/prenom-nom/DaVinci`
5. **Démo orale** répétée (2–3 min parcours fluide)

### P1 — Fortement recommandé (PDF §3 recherche utilisateur)

6. **Vraie mini-enquête** (5–8 personnes) avec le questionnaire existant  
7. **Vrais tests d’utilisabilité** (3–5 personnes, 4 tâches)  
8. Mettre à jour `docs/testing.md` + 1–2 slides « avant/après »

### P2 — Polish (qualité / crédibilité)

9. Remplacer SVG placeholders par **vraies photos** (Unsplash / shooting)
10. Captures d’écran site + Figma pour les slides
11. 2–3 animations CSS supplémentaires (page transitions légères, toast, filtres)
12. Relire accessibilité + bugs responsive sur téléphone réel

### P3 — Optionnel (nice to have)

13. Page « Concepts UI/UX » courte dans `docs/` (répond au §1a du PDF)
14. Lien Figma public dans le README
15. Vidéo démo 60–90 s en secours

---

## 4. Plan d’action recommandé (reste du projet)

Hypothèse : **~2 à 3 jours** disponibles après aujourd’hui.

### Jour A — Figma (priorité absolue)

| Moment | Tâche | Durée |
| ------ | ----- | ----- |
| Matin | Design system Figma (couleurs, typo, boutons, inputs, carte produit, filtres, nav) | 2–3 h |
| Midi | Wireframes 6 écrans (desktop) — reprise de `docs/wireframes` | 1–2 h |
| Après-midi | Maquettes hi-fi : Accueil + Menu + Produit + Panier | 3–4 h |
| Soir | Contact + À propos + versions mobile (Accueil + Menu au minimum) | 2–3 h |

**Fin Jour A :** fichier Figma partageable + frames desktop principales.

### Jour B — Prototype Figma + polish site + GitHub

| Moment | Tâche | Durée |
| ------ | ----- | ----- |
| Matin | Prototype Figma : liens nav + parcours Menu → Produit → Panier | 2 h |
| Matin | Export captures Figma | 30 min |
| Après-midi | Photos réelles (remplacer SVG) + petits ajustements CSS | 2–3 h |
| Après-midi | Créer repo GitHub `PrenomNom/DaVinci`, push, README à jour (lien Figma) | 1 h |
| Soir | Mini-enquête réelle OU tests usabilité (même 3 amis) | 1–2 h |

**Fin Jour B :** Figma prototype + GitHub + données utilisateur moins « simulées ».

### Jour C — Présentation + démo + code review

| Moment | Tâche | Durée |
| ------ | ----- | ----- |
| Matin | Construire le deck (voir structure ci-dessous) | 2–3 h |
| Matin | Intégrer captures + problèmes/solutions | 1 h |
| Après-midi | Répéter démo live (script 2–3 min) | 1 h |
| Après-midi | Répéter code review (`docs/code-review.md`) | 45 min |
| Soir | Checklist finale + commit / tag release | 30 min |

---

## 5. Structure minimale des slides (conforme PDF)

Le PDF impose au minimum : **équipe · problèmes/solutions · démo**.  
Recommandé d’élargir pour prouver le processus :

1. Titre — Maison Sucrée / Da Vinci  
2. Organisation (solo : qui a fait quoi)  
3. Objectif / problème utilisateur  
4. Analyse produit existant  
5. Recherche utilisateur (vrai si possible)  
6. Décisions UX  
7. Wireframes  
8. UI Figma  
9. Prototype Figma  
10. Développement (stack + architecture)  
11. **Problèmes rencontrés + solutions** ← obligatoire  
12. **Démonstration** ← obligatoire  

---

## 6. Checklist « prêt à rendre »

- [ ] Accord sujet avec le prof  
- [ ] Figma : system + maquettes + prototype  
- [ ] Lien Figma dans README  
- [ ] GitHub `…/DaVinci` public ou accessible au jury  
- [ ] Support de présentation (PDF/PPT)  
- [ ] Démo répétée sans bug panier / filtre  
- [ ] Au moins quelques vrais retours utilisateurs  
- [ ] Pouvoir expliquer HTML / CSS / JS à l’oral  

---

## 7. Synthèse en une phrase

**Le prototype web est prêt ; il manque surtout Figma (obligatoire), le rendu GitHub + présentation, et de préférer de vraies données utilisateurs aux résultats simulés.**
