/**
 * Formes « galets » du style organique (accueil, ateliers, médiation, CSE, contact).
 * Coins arrondis irréguliers, différents d'un élément à l'autre.
 */
export const GALETS = [
  "34px 58px 30px 54px / 54px 30px 58px 34px",
  "58px 30px 56px 34px / 30px 56px 34px 58px",
  "40px 54px 34px 60px / 60px 36px 54px 40px",
  "52px 36px 60px 32px / 36px 60px 32px 52px",
];

/** Galets plus doux pour les photos. */
export const GALETS_PHOTO = [
  "28px 52px 32px 48px / 48px 30px 52px 32px",
  "50px 28px 46px 34px / 30px 48px 32px 50px",
  "36px 48px 28px 54px / 54px 34px 48px 28px",
];

export const galet = (i: number) => ({ borderRadius: GALETS[i % GALETS.length] });
export const galetPhoto = (i: number) => ({ borderRadius: GALETS_PHOTO[i % GALETS_PHOTO.length] });

/** Pastille ronde irrégulière (dates, icônes). */
export const PASTILLE = { borderRadius: "55% 45% 52% 48% / 46% 54% 46% 54%" };
