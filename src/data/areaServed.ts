// Zone d'intervention : toute l'Île-de-France, ses 8 départements
const wiki = (page: string) => `https://fr.wikipedia.org/wiki/${page}`;
export const AREA_SERVED_IDF = [
  { "@type": "State", "name": "Île-de-France", "sameAs": wiki("%C3%8Ele-de-France") },
  { "@type": "City", "name": "Paris", "sameAs": wiki("Paris") },
  { "@type": "AdministrativeArea", "name": "Seine-et-Marne", "sameAs": wiki("Seine-et-Marne") },
  { "@type": "AdministrativeArea", "name": "Yvelines", "sameAs": wiki("Yvelines") },
  { "@type": "AdministrativeArea", "name": "Essonne", "sameAs": wiki("Essonne_(d%C3%A9partement)") },
  { "@type": "AdministrativeArea", "name": "Hauts-de-Seine", "sameAs": wiki("Hauts-de-Seine") },
  { "@type": "AdministrativeArea", "name": "Seine-Saint-Denis", "sameAs": wiki("Seine-Saint-Denis") },
  { "@type": "AdministrativeArea", "name": "Val-de-Marne", "sameAs": wiki("Val-de-Marne") },
  { "@type": "AdministrativeArea", "name": "Val-d'Oise", "sameAs": wiki("Val-d%27Oise") },
];
