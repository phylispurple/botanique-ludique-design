/**
 * Protections anti-robots des formulaires (contact, devis, newsletter).
 *
 * 1. Champ piège : invisible pour les humains, les robots le remplissent.
 * 2. Délai minimum : un humain met plus de 3 secondes à remplir un formulaire.
 * 3. Liens interdits : les arnaques glissent presque toujours un lien
 *    (« le projet est détaillé ici : … »). Un vrai prospect n'en a pas besoin.
 *
 * Quand un robot est détecté, on affiche un faux succès sans rien envoyer,
 * pour qu'il ne cherche pas à contourner la protection.
 */
import { useRef } from "react";

export const HONEYPOT_NAME = "website";
const MIN_FILL_MS = 3000;

/** Champ caché à placer dans le <form>. Non contrôlé : on lit sa valeur à l'envoi. */
export const HoneypotField = () => (
  <div
    aria-hidden="true"
    style={{ position: "absolute", left: "-10000px", top: "auto", width: 1, height: 1, overflow: "hidden" }}
  >
    <label>
      Ne pas remplir ce champ
      <input type="text" name={HONEYPOT_NAME} tabIndex={-1} autoComplete="off" defaultValue="" />
    </label>
  </div>
);

/** Mémorise l'heure d'affichage du formulaire et dit si l'envoi ressemble à un robot. */
export const useBotCheck = () => {
  const startedAt = useRef(Date.now());
  return {
    isBot: (form: HTMLFormElement): boolean => {
      const trap = form.elements.namedItem(HONEYPOT_NAME) as HTMLInputElement | null;
      if (trap && trap.value.trim() !== "") return true;
      return Date.now() - startedAt.current < MIN_FILL_MS;
    },
    reset: () => {
      startedAt.current = Date.now();
    },
  };
};

/** Détecte un lien : http(s)://, www., ou un domaine suivi d'un chemin (ex. site.online/fr/...). */
const LINK_RE = /(https?:\/\/|www\.|\b[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,}\/\S)/i;

export const containsLink = (...texts: (string | undefined)[]): boolean =>
  texts.some((t) => !!t && LINK_RE.test(t));

export const LINK_ERROR_MESSAGE =
  "Par sécurité, les liens ne sont pas acceptés dans le formulaire. Merci de le retirer, ou d'écrire directement à contact@botaniqueludique.com.";
