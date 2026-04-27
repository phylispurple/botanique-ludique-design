# Email de confirmation Mauvaises Herbes — version illustrée

## Objectif

Remplacer le contenu textuel actuel de l'email de confirmation **Mauvaises herbes / Bombes de graines** par l'illustration fournie (qui contient déjà toutes les infos pratiques), tout en conservant un encart personnalisé dynamique en dessous.

## Pourquoi cette structure (image + bloc dynamique)

L'illustration est statique : une fois intégrée, elle est la même pour tous les inscrits. Or l'email doit toujours :
- Saluer le participant **par son prénom**
- Reprendre le **message** qu'il a laissé dans le formulaire (s'il y en a un)
- Confirmer le **tarif calculé** selon le nombre de personnes inscrites

Donc l'email aura deux zones :
1. **Bandeau image** (l'illustration fournie, pleine largeur ~600px) qui contient déjà : titre, programme, date, lieu, tarif de base, esprit de l'atelier, signature Vanessa.
2. **Bloc dynamique en dessous** (minimal, sobre) avec :
   - "Bonjour [Prénom]"
   - Récap du nombre de places réservées + tarif total calculé
   - Affichage du message du participant + "Je te réponds au plus vite"
   - Phrase de relance "Si tu as la moindre question, réponds simplement à cet email"

## Étapes techniques

1. **Hébergement de l'illustration**
   - Copier `Validation_inscription_atelier_bombes_de_graines.png` dans `public/email-assets/` pour qu'elle soit accessible via une URL publique (les images d'email doivent être hébergées sur une URL absolue, pas en pièce jointe ni en src/assets bundlé).
   - URL finale : `https://botaniqueludique.com/email-assets/validation-mauvaises-herbes.png`

2. **Refonte du template** `supabase/functions/_shared/transactional-email-templates/mauvaises-herbes-registration.tsx`
   - Remplacer tout le contenu décoratif (bandeau vert, headers, sections texte) par un composant `<Img>` React Email pointant vers l'URL publique
   - Garder uniquement, en dessous de l'image : le bloc personnalisé minimaliste (prénom, récap inscription, message, relance)
   - Conserver le `<Preview>` (texte d'aperçu dans la boîte de réception)
   - Garder le `subject` actuel

3. **Déploiement**
   - Redéployer `send-transactional-email` et `preview-transactional-email` pour que les changements soient pris en compte

## Ce qui n'est PAS modifié (pour l'instant)

- Les emails des **autres ateliers** (Wardian Case, Teintures végétales) gardent leur format actuel. Quand tu auras une illustration pour eux, on appliquera la même logique.
- L'**email admin** (celui que tu reçois) reste inchangé : tu dois pouvoir scanner rapidement les coordonnées du participant, une illustration n'a pas de valeur ajoutée ici.
- Le **footer de désinscription** (ajouté automatiquement par le système) reste, c'est obligatoire légalement.

## Résultat attendu

Quand quelqu'un s'inscrit à l'atelier Mauvaises herbes, il reçoit un email où :
- L'illustration apparaît en grand dès l'ouverture, comme une carte d'invitation
- Juste en dessous, un mot court et personnalisé avec son prénom et la confirmation de son inscription
- Le tout signé Vanessa, dans la continuité de l'image

## Note importante

Certains clients mail (Outlook desktop notamment) bloquent les images par défaut. Le bloc texte personnalisé en dessous garantit que les infos essentielles (prénom, confirmation, tarif) restent lisibles même image bloquée.