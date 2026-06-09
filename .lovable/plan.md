# Plan d'action SEO — Résoudre « Détectée, actuellement non indexée »

## Diagnostic

- **214 pages React** dans `src/pages/` + **255 URLs** dans `sitemap.xml`
- Google détecte 216 pages non indexées → **trop de pages similaires** ciblant des variantes de mots-clés (cannibalisation + crawl budget dilué)
- Beaucoup de doublons sémantiques détectés visuellement : `atelier-botanique-{ville}` × 12 villes, `animatrice-nature-{département}` × 5, `atelier-botanique-{adulte|enfant}-{département}` × 10, `intervenant-scientifique-{département}` × 5, `mediation-scientifique-{département}` × 5, `mediation-botanique-{département}` × 5, etc.
- Signal négatif fort : `/index.html` listé dans le sitemap (doublon de `/`)

Google interprète cette masse comme du **doorway content** (pages SEO programmatiques peu différenciées) et arrête de les indexer.

## Phase 1 — Audit & élagage du sitemap (semaine 1)

**Objectif** : passer de 255 URLs à ~80-100 URLs vraiment stratégiques.

1. **Catégoriser les 255 URLs** dans un tableau (export CSV depuis le script) selon 3 statuts :
   - **GARDER** : pages piliers (home, /workshops, /pro, /agenda, /blog, hubs départementaux, contact, about)
   - **FUSIONNER** : variantes proches → rediriger vers une page mère plus forte
   - **DÉSINDEXER** : pages quasi-vides ou ultra-redondantes

2. **Règles de fusion proposées** (à valider avec toi) :
   - Les 5 `intervenant-scientifique-*` + 5 `mediation-scientifique-*` + 5 `mediation-botanique-*` → fusionner en **1 hub** `/mediation-scientifique-idf` avec sections par département
   - Les 5 `animatrice-nature-*` / `animatrice-botanique-*` → garder **1 par département** maximum (5 au lieu de 10)
   - Les 12 `atelier-botanique-{ville}` (Boulogne, Cergy, Chatou, Conflans, Le Pecq, Le Vésinet, Nanterre, Rambouillet, Rueil, Saint-Germain, Versailles) → garder uniquement les **3-4 villes à plus fort volume de recherche** (vérifié via Semrush), rediriger les autres vers le hub départemental
   - Les `atelier-botanique-{adulte|enfant}-{département}` × 10 → fusionner adulte+enfant par département (5 pages au lieu de 10)
   - Tous les doublons type `/index.html`, `/calendrier` vs `/calendar`, `/b2b` vs `/pro` → choisir 1 URL canonique, rediriger l'autre

3. **Retirer du sitemap** :
   - `/index.html` (doublon évident)
   - Toutes les URLs marquées « DÉSINDEXER » ou « FUSIONNER »
   - Pages techniques : `/inscription/*`, `/admin/*`

4. **Ajouter aux pages désindexées** : `<meta name="robots" content="noindex,follow" />` via `<SEO>` pour libérer le crawl budget, puis mettre en place des **redirections 301 côté React Router** vers la page mère.

## Phase 2 — Maillage interne (semaine 2)

**Objectif** : injecter dans Google que les pages restantes sont importantes.

1. **Hubs départementaux renforcés** : sur `/atelier-botanique-paris`, `/ateliers-botaniques-yvelines`, `/animation-botanique-hauts-de-seine`, `/animation-botanique-val-d-oise`, ajouter une section « Nos ateliers dans le département » avec **6-10 liens internes contextuels** vers les pages ville/thème conservées.

2. **Footer enrichi** : ajouter une colonne « Par département » avec les 5 hubs IDF (déjà partiellement présent à vérifier) → présent sur **toutes** les pages = signal fort.

3. **Blog → pages commerciales** : chaque article de blog (`/blog/*`) doit pointer vers 2-3 pages SEO pertinentes en CTA contextuel (déjà partiellement fait, à généraliser).

4. **Home → top 10 pages prioritaires** : ajouter une section discrète « Découvrir nos ateliers en Île-de-France » avec liens directs vers les 10 pages stratégiques (celles déjà soumises à GSC).

5. **Breadcrumb obligatoire** sur toutes les pages SEO (déjà présent en Schema, vérifier le rendu visuel cliquable).

## Phase 3 — Étoffer ou désindexer (semaines 3-4)

**Objectif** : chaque page conservée doit avoir un contenu **unique, dense, utile**.

**Critères « page à étoffer »** :
- Moins de 800 mots
- Plus de 60% de contenu identique à une autre page (templates dupliqués)
- Pas de témoignage spécifique, pas de FAQ locale, pas d'exemple concret

**Pour chaque page conservée, ajouter** :
- Un paragraphe **spécifique au territoire** (ex: « À Versailles, nous intervenons dans les écoles du quartier Notre-Dame, à proximité du Potager du Roi… »)
- Une **FAQ de 4-5 questions locales** (Schema FAQPage déjà en place)
- 1-2 **témoignages réels** (table `testimonials`) filtrés par contexte
- Une **image authentique** avec alt-text descriptif local

**Désindexer définitivement** les pages qui ne peuvent pas être étoffées de manière crédible (pas d'intervention réelle dans la ville, pas de demande locale).

## Phase 4 — Suivi GSC (continu)

- Tableau de bord hebdo : combien de pages passent de « Détectée » à « Indexée »
- Re-soumettre les 10 URLs prioritaires à chaque vague de fusions/étoffements
- Rescan SEO Lovable après chaque phase

## Volume de travail estimé

- **Phase 1** (audit + élagage sitemap + redirections) : ~2 jours de travail concentré
- **Phase 2** (maillage) : ~1 jour
- **Phase 3** (étoffement) : ~30 min par page × 40 pages prioritaires = ~20h, étalable sur 3-4 semaines

## Détails techniques

- **Sitemap** : `public/sitemap.xml` (statique, hand-edited). À regénérer manuellement après l'audit. Pas de script générateur en place.
- **Redirections 301** : impossible côté Lovable (pas de config serveur). Solution : composant `<Navigate replace />` de React Router sur chaque ancienne route + canonical pointant vers la cible. Google traite le `<Navigate>` comme un soft-redirect (acceptable mais moins fort qu'un vrai 301).
- **Noindex par page** : prop à ajouter au composant `<SEO>` (actuellement il force `index, follow` en dur), pour rendre `<meta name="robots" content="noindex,follow" />` configurable par route.
- **Données conservées** : aucune suppression de fichier `src/pages/*.tsx` proposée tant que tu n'as pas validé ; on commence par noindex + retrait du sitemap, suppression seulement après 2 mois de stabilisation.

## Ce que j'ai besoin de toi avant de coder

1. **Validation des règles de fusion** (Phase 1, point 2) — surtout les 12 villes : lesquelles gardes-tu absolument (où tu interviens vraiment) ?
2. **Accord pour utiliser Semrush** pour vérifier le volume de recherche réel des villes et départements avant de couper ?
3. **Priorité** : tu veux que je commence par Phase 1 (sitemap + noindex), ou par Phase 2 (maillage, plus visible immédiatement) ?
