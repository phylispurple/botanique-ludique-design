

## Plan : Ajouter la photo + bande photo interactive

### 1. Ajouter la photo du mini terrarium

- Copier `user-uploads://mini_terrarium.jpeg` → `src/assets/gallery-mini-terrarium.webp`
- L'ajouter dans la liste `items` de `Gallery.tsx` (avec caption "Mini terrarium en bocal")
- L'ajouter aussi dans le tableau d'images de la bande défilante sur `Index.tsx`

### 2. Refondre la bande photo de la page d'accueil

Remplacer l'animation CSS `animate-marquee` par un composant interactif `PhotoCarousel` qui :

- **Défilement continu automatique** : les photos défilent en boucle infinie (comme actuellement)
- **Mélange aléatoire** : à chaque chargement, l'ordre des photos est randomisé
- **Interactions utilisateur** :
  - **Drag / swipe** : glisser à la souris (desktop) ou au doigt (mobile) pour déplacer les photos dans un sens ou l'autre
  - **Pause au survol** : le défilement s'arrête quand la souris est sur la bande
  - **Scroll horizontal** : la molette (ou trackpad) contrôle le défilement quand le curseur est sur la bande
  - Quand l'utilisateur lâche, le défilement automatique reprend doucement

### Détails techniques

- Nouveau composant `src/components/PhotoCarousel.tsx` utilisant `useRef` + `requestAnimationFrame` pour un défilement fluide sans dépendance externe
- Gestion des événements `mousedown/mousemove/mouseup` + `touchstart/touchmove/touchend` pour le drag
- `onWheel` pour le scroll horizontal
- `onMouseEnter/Leave` pour la pause
- Boucle infinie : dupliquer les images et repositionner silencieusement quand on atteint la fin
- Fisher-Yates shuffle au montage du composant pour l'ordre aléatoire
- Remplace le `<div className="flex gap-4 animate-marquee">` dans `Index.tsx` par `<PhotoCarousel />`

