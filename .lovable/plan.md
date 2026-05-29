## Objectif

Enrichir le mail de confirmation Wardian Case avec des informations pratiques importantes, en respectant le ton soft et inclusif et le style brutaliste (uppercase bold, fond Cream, sans emojis dans les nouvelles sections).

## Nouveau bloc "INFOS PRATIQUES" (à insérer juste avant la signature)

Encadré brutaliste, fond Cream, bordure 2px noire, titre en uppercase bold. Liste de points courts et clairs :

1. **Annulation** : « Si tu dois finalement annuler, préviens-moi au plus tard la veille de l'atelier. Cela me permettra de proposer ta place à une personne sur liste d'attente. »

2. **Paiement en espèces** : « Merci de prévoir l'appoint le jour de l'atelier. Je n'ai pas toujours la monnaie sur place. Montant à régler : {totalPrice}€ ({participantCount} × {unitPrice}€). »

3. **Ponctualité** : « Merci d'arriver quelques minutes en avance pour qu'on puisse démarrer ensemble à 16h. »

4. **Accès au lieu** : « La Rochefoucauld, Paris 14e. Métro Denfert-Rochereau ou Mouton-Duvernet. Je t'enverrai l'adresse précise et le code d'entrée quelques jours avant. »

5. **Tenue** : « Prévois une tenue dans laquelle tu peux te salir, on manipule de la terre et des plantes. »

6. **Repartir avec ton terrarium** : « Pense à venir avec un sac un peu solide ou un cabas pour transporter ton bocal en toute sécurité. »

7. **Allergies, mobilité réduite, besoins spécifiques** : « Signale-moi tout besoin particulier en répondant à ce mail, je m'adapte avec plaisir. »

## Détails techniques

**Fichier modifié** : `supabase/functions/_shared/transactional-email-templates/wardian-case-juin-registration.tsx`

- Ajout des props `totalPrice` et `participantCount` à l'interface `Props` (déjà envoyées par le formulaire pour le template admin, à ajouter aussi côté participant dans `InscriptionTerrariumJuin.tsx`).
- Nouvelle `Section` `practicalInfo` insérée entre le bloc `bottomBand` (ou `userMsgSection` si présent) et le `Hr` final avant la signature.
- Styles cohérents avec l'existant : encadré `border: 2px solid ink`, fond `cream`, titre `sectionHeader` (chip sage), items en `listItem` avec un label uppercase bold suivi du texte en monospace Courier.
- Pas d'emojis dans ce bloc (respect de la règle brand : light punctuation, no heavy bullet lists, soft tone). Pas d'em-dashes.
- Mise à jour du `previewData` pour inclure `totalPrice: 24` et `participantCount: 2`.

**Fichier modifié** : `src/pages/InscriptionTerrariumJuin.tsx`
- Ajouter `totalPrice` et `participantCount` dans le `templateData` envoyé à `send-transactional-email` côté participant.

**Redéploiement** : `send-transactional-email` après modification du template.

## Test final

Envoi d'un mail de test à `phylispurple@gmail.com` avec bocal 5L, 2 participants, total 36€ pour vérifier le rendu.
