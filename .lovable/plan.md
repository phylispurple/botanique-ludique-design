## Objectif

Élargir l'audience SEO B2B au-delà des requêtes directes (QVCT, RSE, team building déjà couvertes) en captant des recherches **amont** de RH/Office Manager/dirigeants PME. Ces lecteurs ne cherchent pas encore un atelier nature : ils cherchent une solution à un problème RH (burn-out, rétention, onboarding, RPS). Les articles les amènent au site, les éduquent, puis les renvoient vers les landings pros existantes.

## Méthode

Réutilisation du système existant : ajouter 10 entrées dans `src/data/proBlogArticles.ts`. Aucun nouveau composant, aucune nouvelle route à câbler manuellement, le template `ProBlogArticle.tsx` les rend automatiquement. Sitemap mis à jour.

## Les 10 articles (sujets, requête cible, volume estimé)

| # | Titre | Slug | Mot-clé cible | Volume FR/mois |
|---|---|---|---|---|
| 1 | Prévenir le burn-out en entreprise : 8 actions concrètes pour managers | `prevenir-burn-out-entreprise-actions-manager` | prévention burn out entreprise | 590 |
| 2 | Onboarding réussi : le rôle sous-estimé des rituels collectifs | `onboarding-reussi-rituels-collectifs-entreprise` | onboarding entreprise | 1900 |
| 3 | Marque employeur : 7 leviers qui marchent mieux que les baby-foot | `marque-employeur-leviers-attractivite-pme` | marque employeur | 8100 |
| 4 | Rétention des talents en PME : ce que les grandes entreprises ne disent pas | `retention-talents-pme-strategies` | rétention talents | 720 |
| 5 | Biophilie au bureau : aménager pour le bien-être (guide complet) | `biophilie-bureau-amenagement-bien-etre` | biophilie | 2400 |
| 6 | Risques Psychosociaux (RPS) : 5 dispositifs préventifs efficaces | `rps-prevention-dispositifs-entreprise` | prévention rps | 480 |
| 7 | Bilan RSE annuel : checklist pour PME sans direction RSE dédiée | `bilan-rse-annuel-checklist-pme` | bilan rse | 720 |
| 8 | Animations de Noël entreprise : 10 idées éthiques et mémorables | `animations-noel-entreprise-ethiques-idees` | animation noel entreprise | 1300 |
| 9 | Réintégration télétravail : comment recréer du lien quand l'équipe revient au bureau | `reintegration-teletravail-cohesion-equipe` | retour bureau télétravail | 390 |
| 10 | Pass Culture entreprise et CSE : utiliser le budget culturel autrement | `pass-culture-cse-budget-culturel-entreprise` | budget cse culture | 320 |

**Pool total visé : ~17 000 recherches/mois cumulées**, difficulté faible à moyenne. Objectif réaliste 6-12 mois : 200 à 600 visiteurs SEO/mois en plus.

## Structure de chaque article

Pattern déjà éprouvé sur les 7 existants :
- 6 à 8 sections H2 avec 2-3 paragraphes chacune
- 1 liste à puces maximum par article (memory: éviter les listes lourdes)
- Ton anthropologique/scientifique soft, posture conseil pas vente
- ~1200-1500 mots uniques par article
- CTA contextualisé en bas pointant vers la landing pro la plus proche
- 2-3 `relatedLandings` pour le maillage interne

## Maillage stratégique (le point qui fait la différence)

Chaque article renvoie vers 2-3 landings B2B existantes. Exemple :
- Article "burn-out" → landings `atelier-qvct-paris`, `animation-bien-etre-entreprise`
- Article "marque employeur" → landings `team-building-nature-paris`, `seminaire-vert-paris`
- Article "RSE bilan" → landings `animation-rse-entreprise`, `atelier-developpement-durable-entreprise`

Ce maillage transfère le "jus SEO" des articles top-of-funnel vers les pages qui convertissent.

## Détails techniques

```text
src/data/proBlogArticles.ts        → +10 entrées dans PRO_ARTICLES
public/sitemap.xml                 → +10 URLs /blog-pro/{slug}
src/pages/ProBlogArticle.tsx       → aucune modif (template existant suffit)
src/App.tsx                        → aucune modif (routes générées en boucle)
```

Schemas.org `Article` + `BreadcrumbList` déjà gérés par le template. Pas de migration DB. Pas de nouveau composant. Pas de dépendance ajoutée.

## Risques et anticipation

- **Duplicate content avec articles existants** : les 10 nouveaux sujets sont volontairement déconnectés thématiquement des 7 actuels (RH amont vs QVCT direct), zéro chevauchement.
- **Thin content** : minimum 1200 mots/article garanti, ce qui sort largement du seuil Google.
- **Maillage interne** : si on en ajoute 10 d'un coup, certains pourraient mettre du temps à être crawlés. Sitemap mis à jour pour accélérer l'indexation.

## Hors scope

- Pas de génération d'images (memory: photos authentiques préférées, IA réservée aux pédagogiques sans alternative photo)
- Pas de nouvelle catégorie blog
- Pas de modification du template visuel
- Pas de campagne d'annonce externe (LinkedIn, newsletter) → décision séparée

## Livrable

Après implémentation, tu auras 17 articles pro au total. Tu pourras à tout moment relire chaque entrée dans `proBlogArticles.ts` et faire éditer un wording si besoin (texte centralisé, modification rapide).
