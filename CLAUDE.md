# Botanique Ludique — Site Web

Site vitrine de **Botanique Ludique**, ateliers d'ethnobotanique à Paris et en Île-de-France (Yvelines 78, Hauts-de-Seine 92, Val-d'Oise 95).  
Fondatrice : **Vanessa Charlery**, animatrice ethnobotaniste formée à l'EHESS.

## Stack technique

- **Frontend** : React 18 + TypeScript + Vite (port 8080)
- **UI** : Tailwind CSS + shadcn/ui + Radix · Style brutaliste botanique (bordures épaisses, ombres offset, palette crème/olive/terracotta)
- **Routing** : react-router-dom v6, SPA avec 116 routes (code-split via `React.lazy`)
- **SEO** : `react-helmet-async` pour les métadonnées par page, `SchemaOrg.tsx` pour les données structurées (Organization, LocalBusiness, Course, FAQ, etc.)
- **Backend** : Supabase (formulaire contact, témoignages, newsletter). Variables d'env `VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY` requises.
- **Déploiement** : Netlify (auto-deploy sur push `main`). Config dans `netlify.toml`.
- **Domaine** : botaniqueludique.com · DNS et emails pro chez Namecheap (MX PrivateEmail — ne pas toucher).

## Commandes

```bash
npm run dev           # Serveur de développement (localhost:8080)
npm run build         # Build + injection des métadonnées SEO
npm run seo:capture   # Capture les métadonnées de toutes les routes (nécessite Chrome)
npm run audit         # Vérifie collisions, sitemap, images, SEO, imports cassés
npm run lint          # ESLint
```

## Architecture importante

### SEO / Métadonnées de partage

Le site est une SPA : les crawlers (LinkedIn, WhatsApp) ne voient que le HTML statique. Pour que les aperçus de partage fonctionnent :

1. `npm run seo:capture` lance Chrome, visite les 114 routes, capture titres/descriptions/og/canonical/JSON-LD → écrit `seo-snapshot.json` avec une empreinte SHA256.
2. `npm run build` appelle `inject-meta.mjs` qui lit le snapshot et écrit un `index.html` par route avec le bon `<head>`.
3. Un **pre-commit hook** (`.githooks/pre-commit`) bloque le commit si l'empreinte SEO a changé sans que le snapshot ait été régénéré.

**Après toute modification d'un titre, description, canonical, noindex, ou du contenu de `SEO.tsx` / `SchemaOrg.tsx`** : relancer `npm run seo:capture` et commiter `seo-snapshot.json`.

### Fichiers clés

| Fichier | Rôle |
|---|---|
| `src/components/SEO.tsx` | Balises `<head>` par page (title, og, canonical, noindex) |
| `src/components/SchemaOrg.tsx` | Données structurées JSON-LD |
| `src/App.tsx` | Toutes les routes, code-splitting |
| `src/pages/Index.tsx` | Page d'accueil |
| `src/components/Navigation.tsx` | Menu desktop + mobile |
| `src/components/ConferencesSavoirs.tsx` | Section médiation (conférences, ateliers hybrides, balades) |
| `public/sitemap.xml` | Sitemap — ne contient que les pages éditoriales, pas les satellites |
| `seo-snapshot.json` | Métadonnées SEO capturées (versionné) |
| `scripts/seo-fingerprint.mjs` | Calcul d'empreinte SEO |
| `scripts/optimize-images.mjs` | Compression d'images (sharp, max 1600px, qualité 82) |
| `scripts/audit.mjs` | Audit de santé du site (7 vérifications) |

### Polices

- **Archivo Black** : titres (`.font-display`)
- **Space Mono** : labels, navigation, badges (`.font-mono-brand`)
- **DM Sans** : corps de texte (`.font-body`)
- **Fraunces** : citations/témoignages (`.font-editorial`)

### Palette CSS (variables HSL dans `:root`)

- `--cream` : fond principal (36 33% 93%)
- `--black` : texte (0 0% 10%)
- `--olive` / `--olive-light` : accent principal vert
- `--orange` : accent secondaire (CTA)
- `--green` / `--green-pale` : accents botaniques
- `--blue` : section médiation (210 41% 24%)

### Classes utilitaires brutalistes

- `.border-brutal` / `.border-brutal-thin` : bordures 3px / 2px noires
- `.shadow-brutal` / `.shadow-brutal-lg` : ombres offset
- `.btn-brutal` : bouton brutaliste (bordure + ombre + uppercase + mono)
- `.card-brutal` : carte avec hover offset
- `.section-label` : sous-titre mono 10px olive uppercase

## Pièges connus

1. **Fichiers `public/*.html`** : Netlify les sert en priorité sur la route React. Il y a ~370 fichiers HTML hérités de Lovable dans `public/`. Avant d'ajouter un `.html`, vérifier qu'il ne masque pas une route React (`npm run audit` le fait).

2. **Pages noindex** : `SEO.tsx` contient `AUTO_NOINDEX_PATTERNS` qui rend automatiquement noindex les pages satellites par ville. Les 4 pages balade par département sont indexables (contenu différencié). Ne pas ajouter les autres au sitemap.

3. **Images** : les images ont été récupérées de Lovable et sont dans `src/assets/`. Après ajout de nouvelles photos, lancer `node scripts/optimize-images.mjs`. Le script supporte `--dry` pour simuler.

4. **AnimatedSection** : utilise IntersectionObserver avec `triggerOnce: false`. Les éléments apparaissent avec un fade-in au scroll. Si le navigateur est en arrière-plan, les animations ne se déclenchent pas (c'est normal, pas un bug).

5. **Supabase** : les témoignages sont chargés dynamiquement. Le formulaire de contact et la newsletter passent par Supabase. L'admin des témoignages est sur `/admin/testimonials` (accessible uniquement aux utilisateurs avec le rôle `admin` dans `user_roles`).

6. **Google Business Profile** : le kgmid `/g/11yr39lw07` est dans les `sameAs` de `SchemaOrg.tsx`.

## Ce qui reste à faire

- **Analytics** : aucun outil de mesure installé. `src/lib/analytics.ts` existe et est branché sur 7 points de conversion, mais n'envoie nulle part. Plausible recommandé (cookie-less). Le bandeau cookies a un toggle "analytics" qui ne pilote rien.
- **45 pages sans `<SEO>`** : pages événementielles et géographiques qui n'ont ni titre ni description. Visibles avec `npm run audit`.
- **27 routes indexables absentes du sitemap** : pages légitimes (team building, ateliers par ville, etc.) à ajouter sélectivement.
- **Images lourdes** : 7 images > 500 Ko (dont un GIF de 5 Mo). Plaquette PDF de 8 Mo.
