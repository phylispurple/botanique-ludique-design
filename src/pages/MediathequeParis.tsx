import OccasionTemplate from "@/components/OccasionTemplate";
import { Sparkles } from "lucide-react";

const MediathequeParis = () => (
  <OccasionTemplate data={{
    "slug": "mediatheque-paris",
    "icon": Sparkles,
    "eyebrow": "Médiathèque",
    "title": "Intervention en médiathèque Paris",
    "metaTitle": "Intervention médiathèque Paris, animation botanique",
    "metaDesc": "Intervention en médiathèque dans le 75 Paris. Animation botanique pour public familial, scolaire ou adulte, autour du livre et du vivant.",
    "pitch": "Un croisement naturel entre le livre et le vivant. Dans le Paris, nous animons des temps en médiathèque qui prolongent la lecture par l'expérience sensorielle.",
    "why": [
        {
            "title": "Public large",
            "desc": "Familles, classes, ados, adultes. Nos formats s'adaptent au public attendu."
        },
        {
            "title": "Lien au fonds",
            "desc": "Nous nous appuyons sur les ouvrages de la médiathèque pour ancrer l'animation."
        },
        {
            "title": "Médiation douce",
            "desc": "Une approche sensible, manuelle, sans pression de performance."
        }
    ],
    "formula": [
        {
            "line": "Heure du conte",
            "detail": "Lecture d'un texte botanique pour les plus jeunes, prolongée par une activité."
        },
        {
            "line": "Atelier découverte",
            "detail": "Initiation au terrarium, au kokedama ou à la teinture pour un groupe."
        },
        {
            "line": "Conférence",
            "detail": "Présentation grand public sur l'ethnobotanique, l'histoire des plantes."
        },
        {
            "line": "Cycle thématique",
            "detail": "Programmation sur plusieurs semaines, autour d'une saison ou d'un thème."
        }
    ],
    "practical": [
        {
            "label": "Durée",
            "value": "1h à 2h"
        },
        {
            "label": "Public",
            "value": "Tous publics"
        },
        {
            "label": "Lieu",
            "value": "Paris (75)"
        },
        {
            "label": "Tarif",
            "value": "Sur devis"
        }
    ],
    "related": [
        {
            "to": "/balades-botaniques",
            "label": "Balades"
        },
        {
            "to": "/team-building-nature-entreprise",
            "label": "Team building"
        },
        {
            "to": "/balade-botanique-paris",
            "label": "Balade Paris"
        }
    ],
    "faqs": [
        {
            "q": "Conventionnée DRAC ou département ?",
            "a": "Nous travaillons régulièrement avec des institutions publiques et adaptons nos devis à leurs cadres."
        },
        {
            "q": "Disponible partout dans le 75 ?",
            "a": "Oui, à Paris intra-muros, tous les arrondissements et au-delà."
        },
        {
            "q": "Format en cycle possible ?",
            "a": "Oui, nous proposons des programmations sur plusieurs semaines ou plusieurs saisons."
        },
        {
            "q": "Matériel fourni ?",
            "a": "Oui, tout le matériel végétal et l'outillage sont apportés par l'équipe."
        }
    ]
}} />
);
export default MediathequeParis;
