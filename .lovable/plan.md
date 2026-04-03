

## Plan : Simplifier le mail de confirmation Wardian Case

### Objectif
Réécrire le contenu du template email pour qu'il soit simple, chaleureux et sans encadrés (les `infoBox` et `messageBox` sur fond blanc avec bordures). Le texte suit exactement ce que tu as demandé.

### Changements sur `wardian-case-registration.tsx`

**Contenu du mail :**
- "Bonjour {prénom} !"
- "Merci beaucoup pour ton inscription à l'atelier Wardian Case ! 🌿"
- "Je te promets qu'on passera un super moment à parler de l'histoire fascinante des terrariums, et que la création de ton mini terrarium te plaira."
- "N'hésite pas à en parler autour de toi — si des amis seraient intéressés par le sujet, ils sont les bienvenus !"
- Si `userMessage` est présent : "Tu m'as laissé ce message : « {message} » — je te réponds au plus vite !"
- "Si tu as la moindre question d'ici là, réponds simplement à cet email."
- "À très bientôt !"
- "Vanessa de Botanique Ludique 🍀"

**Suppressions :**
- Retrait des `Section` encadrées (`infoBox`, `messageBox`) — tout devient du texte simple avec le même style `text`
- Retrait des styles `infoBox`, `infoText`, `messageBox`, `messageText`, `messageReply`
- Le message utilisateur s'intègre naturellement dans le flux du texte (pas d'encadré séparé)

**Conservation :**
- Header vert avec "🌿 Botanique Ludique"
- Fond crème pour le contenu
- Footer noir
- Palette de couleurs botanique existante

### Redéploiement
- Déployer `send-transactional-email` après la modification pour que le nouveau contenu soit actif

