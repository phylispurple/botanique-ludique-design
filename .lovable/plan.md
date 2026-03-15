

## Plan : Créer une page démo basée sur la maquette Manus

La maquette HTML que tu as partagée a un style **brutalist/éditorial** très marqué : typographies massives (Archivo Black), bordures noires épaisses, cartes avec box-shadow décalées, bandeaux marquee défilants, grille sans gaps (collée), et une palette cream/green/orange/purple.

Je vais créer une nouvelle page sur `/demo-manus` qui retranscrit fidèlement cette maquette en React + Tailwind, sans toucher au site actuel.

### Ce qui sera créé

**1. `src/pages/DemoManus.tsx`** — Page complète avec toutes les sections :
- **Navigation flottante latérale** (pilules verticales à gauche, masquée sur mobile)
- **Hero plein écran** avec le background existant, titre "BOTANIQUE LUDIQUE" en typo massive uppercase, boutons avec hover box-shadow décalé
- **Marquee bands** (olive, black, purple) avec animation CSS infinie défilante
- **Section About** en grid 2 colonnes : texte + stats dans des boîtes bordées
- **Gallery strip** : 5 images en bande horizontale avec bordures noires
- **Grille ateliers** : 8 cartes numérotées (01-08) avec labels colorés par catégorie, hover scale + box-shadow
- **Témoignages** : 3 cartes avec guillemets géants et étoiles
- **Trust bar** : 6 items icônes sur fond cream-dark
- **Partners** : logos en grayscale avec hover
- **Section Association** : fond purple, grille 2x2, barre CTA jaune
- **Contact** : split screen (vert + formulaire)
- **Newsletter** : barre noire avec input/bouton
- **Footer** : grille 4 colonnes, fond noir

**2. Route dans `App.tsx`** — Ajout de `/demo-manus`

### Approche technique

- Polices Google Fonts : Archivo Black, Space Mono, DM Sans (chargées via `index.html` ou import CSS)
- CSS custom dans le composant (ou fichier CSS dédié) pour les animations marquee et le style brutaliste
- Réutilisation des images existantes (`src/assets/`)
- Texture grain en overlay via SVG inline (comme dans la maquette)
- Responsive : 3 breakpoints fidèles à la maquette (>1100px, >700px, mobile)

