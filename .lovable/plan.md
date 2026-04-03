

## Refonte complète du mail de confirmation Wardian Case

### Résumé des changements

Réécriture du contenu du template `wardian-case-registration.tsx` pour un ton plus chaleureux, avec toutes les infos pratiques demandées.

### Modifications du fichier `wardian-case-registration.tsx`

**Header :**
- "ATELIER TERRARIUM" → "ATELIER WARDIAN CASE"
- Suppression de l'emoji 🌿 (ligne `headerEmoji`)

**Objet du mail :** Retirer le 🌿
- `Confirmation de ton inscription, Atelier Wardian Case`

**Preview text :** Retirer le 🌿

**Nouveau corps du mail :**

> **BONJOUR {prénom} !**
>
> Merci pour ton inscription à l'atelier Wardian Case, j'ai hâte de t'y retrouver !
>
> On va passer un super moment ensemble à plonger dans l'histoire fascinante des Wardian Cases victoriens, et tu repartiras avec ton propre mini terrarium.
>
> **RENDEZ-VOUS**
> *(section encadrée, bordure olive à gauche)*
> Mardi 22 avril 2026, 16h00 – 17h30
> La Rochefoucauld, Paris 14e (Denfert-Rochereau)
>
> **RÈGLEMENT**
> *(section encadrée, bordure olive à gauche)*
> Tu peux régler via PayPal 48h avant l'atelier pour confirmer ta place, ou en espèces sur place 10 à 15 minutes avant le début.
>
> N'hésite pas à en parler autour de toi, si des amis sont intéressés, ils sont les bienvenus !
>
> *(Si message utilisateur :)*
> « {message} »
> Je te réponds au plus vite !
>
> Si tu as la moindre question d'ici là, réponds simplement à cet email.
>
> À très bientôt !

**Signature et footer :** Inchangés (Vanessa, Botanique Ludique 🍀)

### Design

Pas de changement de palette ni de structure visuelle. Ajout de deux petites sections "Rendez-vous" et "Règlement" stylées comme la section message (fond blanc, bordure olive à gauche) pour que les infos pratiques ressortent bien.

### Après modification

Redéploiement de la Edge Function `send-transactional-email`.

