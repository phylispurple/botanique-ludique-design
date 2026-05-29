# Choix bocal 3L (12€) ou 5L (18€) — Atelier Wardian Case 6 juin

## Objectif

Permettre à chaque participant·e de choisir entre un bocal 3L à 12€ ou un bocal 5L à 18€ sur le formulaire `/inscription/terrarium-6-juin`, en tenant compte du stock disponible (4 bocaux 3L, 2 bocaux 5L).

## Modifications du formulaire (`src/pages/InscriptionTerrariumJuin.tsx`)

1. **Nouveau champ "Taille du bocal"** (radio brutaliste, même style que `InscriptionWardianCase.tsx`)
   - Option 3L à 12€
   - Option 5L à 18€

2. **Recalcul du tarif** : `prix unitaire × nombre de personnes`, où prix unitaire dépend du choix (12€ ou 18€).

3. **Pricing dans le bloc latéral** : remplacer la ligne "12€ par personne" par les deux tarifs.

4. **Mention stock limité** : petit avertissement sous le sélecteur, "Stock limité, premiers inscrits premiers servis".

## Gestion du stock (côté frontend, simple et pragmatique)

Pas de table Supabase ajoutée. On gère deux constantes en haut du fichier :

```ts
const STOCK_3L = 4;
const STOCK_5L = 2;
```

Tu pourras décrémenter ces valeurs à la main dans le code au fur et à mesure des inscriptions reçues par email (rapide, pas besoin d'admin). Quand une taille atteint 0, l'option est désactivée dans le formulaire avec la mention "Épuisé".

Le champ "Nombre de personnes" est aussi capé par le stock restant de la taille choisie (ex. si 5L choisi et stock=2, max 2 personnes).

## Email admin (`templateData` envoyé à `wardian-case-admin-notification`)

Le champ `bocal` envoyé à l'edge function reflètera le choix exact : `"Bocal 3 litres (12€/personne)"` ou `"Bocal 5 litres (18€/personne)"`. Aucun changement template requis, le champ existe déjà.

## Email de confirmation participant

Le template `wardian-case-juin-registration.tsx` mentionne actuellement "bocal 3L". À adapter pour rendre la taille dynamique :
- Ajouter un champ `jarSize` (ex. "3 litres" ou "5 litres") dans `templateData`
- Remplacer la mention en dur par cette variable dans le template.

## Cohérence tarifaire

12€ pour 3L et 18€ pour 5L : ratio +50% prix pour +66% de volume, cohérent et même légèrement avantageux pour le client sur le 5L. Validé.

## Fichiers modifiés

- `src/pages/InscriptionTerrariumJuin.tsx` (champ taille, calcul prix, capping stock)
- `supabase/functions/_shared/transactional-email-templates/wardian-case-juin-registration.tsx` (variable `jarSize`)

Aucune migration DB, aucune nouvelle dépendance.
