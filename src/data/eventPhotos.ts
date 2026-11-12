// Photos d'animations en entreprise (salon parisien, sacs kraft, invités).
// Utilisées sur l'accueil, la page team building et les pages entreprises / CSE.
import terrariumTable from "@/assets/event-terrarium-table.webp";
import terrariumMains from "@/assets/event-terrarium-mains.webp";
import kokedamaMains from "@/assets/event-kokedama-mains.webp";
import sachetsSenteur from "@/assets/event-sachets-senteur.webp";
import teinturePetales from "@/assets/event-teinture-petales.webp";
import soiesSuspendues from "@/assets/event-soies-suspendues.webp";

export const EVENT_PHOTO = {
  terrariumTable,
  terrariumMains,
  kokedamaMains,
  sachetsSenteur,
  teinturePetales,
  soiesSuspendues,
};

export const EVENT_PHOTOS = [
  { src: terrariumTable, alt: "Terrariums en bocal et sacs kraft prêts pour une animation en entreprise" },
  { src: terrariumMains, alt: "Composition d'un terrarium pendant un atelier en entreprise" },
  { src: kokedamaMains, alt: "Façonnage d'un kokedama lors d'un événement d'entreprise" },
  { src: sachetsSenteur, alt: "Stand de sachets de senteurs aux épices pour un événement" },
  { src: teinturePetales, alt: "Impression végétale de pétales sur soie" },
  { src: soiesSuspendues, alt: "Carrés de soie teints aux plantes, suspendus à la fenêtre" },
];
