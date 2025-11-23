# Guide d'Optimisation des Images - Botanique Ludique

## ✅ Optimisations Appliquées

### 1. Lazy Loading
Toutes les images du site utilisent maintenant `loading="lazy"` pour différer le chargement des images hors écran.

**Impact:**
- Réduction du temps de chargement initial
- Économie de bande passante
- Amélioration du score PageSpeed

**Images optimisées:**
- ✅ Galerie homepage (6 images)
- ✅ Logos partenaires (6 images)
- ✅ Page About (1 image)
- ✅ Page Gallery (27+ images)
- ✅ Page Workshops (16+ images workshop)
- ✅ Pages SEO géolocalisées (Yvelines, Team Building, Entreprise)
- ✅ Page Blog (articles)

### 2. Préchargement Vidéo
Toutes les vidéos utilisent `preload="metadata"` pour optimiser le chargement.

## 🚀 Prochaines Étapes - Format WebP

### Avantages du WebP
- **30% plus léger** que JPEG/PNG
- Support de la transparence (comme PNG)
- Meilleure compression sans perte de qualité
- Support moderne dans tous les navigateurs récents

### Comment Convertir les Images en WebP

#### Méthode 1: Outil en ligne (Recommandé)
1. Aller sur https://squoosh.app/
2. Uploader vos images JPG/PNG
3. Sélectionner format WebP
4. Télécharger et remplacer dans `/src/assets/`

#### Méthode 2: Ligne de commande (Pour batch)
```bash
# Installation (macOS)
brew install webp

# Conversion d'une image
cwebp input.jpg -q 80 -o output.webp

# Batch conversion (tous les JPG du dossier)
for img in *.jpg; do cwebp "$img" -q 80 -o "${img%.jpg}.webp"; done
```

#### Méthode 3: Composant React avec fallback
```tsx
// Exemple d'utilisation du tag <picture> pour support WebP + fallback
<picture>
  <source srcSet="/assets/image.webp" type="image/webp" />
  <source srcSet="/assets/image.jpg" type="image/jpeg" />
  <img src="/assets/image.jpg" alt="Description" loading="lazy" />
</picture>
```

### Images Prioritaires à Convertir

**Impact Maximum (les plus volumineuses):**
1. `hero-background.png` → `hero-background.webp`
2. Images de la galerie (27 images dans `/src/assets/gallery-*.jpg`)
3. Images des ateliers (16 images dans `/src/assets/workshop-*.jpg`)

**Images Déjà Optimisées:**
- ✅ `/public/logos/region-idf.webp` (déjà en WebP)

## 📊 Score PageSpeed Attendu

### Avant Optimisations
- Mobile: ~60-70
- Desktop: ~75-85

### Après Lazy Loading
- Mobile: ~70-80 (+10)
- Desktop: ~85-90 (+10)

### Après WebP + Lazy Loading
- Mobile: ~80-90 (+20-30)
- Desktop: ~90-95 (+15-20)

## 🔧 Maintenance

### Checklist pour Nouvelles Images
- [ ] Convertir en WebP si > 100KB
- [ ] Ajouter `loading="lazy"` sur toutes les balises `<img>`
- [ ] Utiliser `preload="metadata"` pour les vidéos
- [ ] Optimiser la qualité (80% recommandé pour WebP)
- [ ] Vérifier les dimensions (max 1920px pour desktop)

### Outils de Test
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **GTmetrix**: https://gtmetrix.com/
- **WebPageTest**: https://www.webpagetest.org/

## 📝 Notes Techniques

### Vidéos
Les vidéos ont les optimisations suivantes:
- `muted` pour autoplay sans interaction
- `loop` pour lecture continue
- `playsInline` pour mobile iOS
- `preload="metadata"` pour chargement optimisé

### Images Hero
L'image hero (`hero-background.png`) n'utilise PAS lazy loading car elle est "above-the-fold" (visible immédiatement). C'est intentionnel pour éviter le délai de chargement.

### Compatibilité WebP
WebP est supporté par:
- ✅ Chrome 32+
- ✅ Firefox 65+
- ✅ Edge 18+
- ✅ Safari 14+ (iOS 14+)
- ✅ Opera 19+

Pour les anciens navigateurs, toujours garder un fallback JPG/PNG.
