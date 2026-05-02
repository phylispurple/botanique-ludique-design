import OccasionTemplate from "@/components/OccasionTemplate";
import { Sparkles } from "lucide-react";

const MediathequeValDOise = () => (
  <OccasionTemplate data={{
    "slug": "mediatheque-val-d-oise",
    "icon": Sparkles,
    "eyebrow": "Médiathèque",
    "title": "Intervention en médiathèque Val-d'Oise",
    "metaTitle": "Intervention médiathèque Val-d'Oise, animation botanique",
    "metaDesc": "Intervention en médiathèque dans le 95 Val-d'Oise. Animation botanique pour public familial, scolaire ou adulte, autour du livre et du vivant.",
    "pitch": "Un croisement naturel entre le livre et le vivant, dans Val-d'Oise. Nous animons des temps en médiathèque qui prolongent la lecture par l'expérience sensorielle, en s'appuyant sur les fonds documentaires.",
    "why": [
            {
                    "title": "Public large",
                    "desc": "Familles, classes en sortie, ados, adultes curieux, seniors lecteurs. Nos formats s'adaptent au public attendu et à la temporalité disponible."
            },
            {
                    "title": "Lien au fonds",
                    "desc": "Nous nous appuyons sur les ouvrages déjà présents dans la médiathèque pour ancrer l'animation dans une médiation documentaire concrète."
            },
            {
                    "title": "Médiation douce",
                    "desc": "Une approche sensible, manuelle, sans pression de performance. Le contact aux plantes ouvre des conversations qu'un livre seul n'ouvrirait pas."
            }
    ],
    "formula": [
            {
                    "line": "Heure du conte",
                    "detail": "Lecture d'un texte botanique pour les plus jeunes, prolongée par une activité tactile autour d'une plante."
            },
            {
                    "line": "Atelier découverte",
                    "detail": "Initiation au terrarium, au kokedama ou à la teinture pour un groupe restreint, sur inscription préalable."
            },
            {
                    "line": "Conférence",
                    "detail": "Présentation grand public sur l'ethnobotanique, l'histoire des plantes ou un thème en lien avec la programmation."
            },
            {
                    "line": "Cycle thématique",
                    "detail": "Programmation sur plusieurs semaines, autour d'une saison ou d'un fil documentaire, avec restitution publique."
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
            "value": "Val-d'Oise (95)"
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
            "to": "/balade-botanique-val-d-oise",
            "label": "Balade Val-d'Oise"
        }
    ],
    "faqs": [
            {
                    "q": "Conventionnée DRAC ou département ?",
                    "a": "Nous travaillons régulièrement avec des institutions publiques et adaptons nos devis aux cadres conventionnés. Notre statut associatif facilite la facturation."
            },
            {
                    "q": "Disponible partout dans le 95 ?",
                    "a": "Oui, à Cergy, Argenteuil, Sarcelles, Pontoise et au-delà. Nous nous déplaçons avec tout le matériel nécessaire à l'animation."
            },
            {
                    "q": "Format en cycle possible ?",
                    "a": "Oui, c'est même la formule la plus impactante. Une présence répétée crée un public fidèle et une médiation qui s'approfondit."
            },
            {
                    "q": "Matériel fourni ?",
                    "a": "Oui, tout le matériel végétal et l'outillage sont apportés par notre équipe. La médiathèque fournit l'espace et l'eau."
            }
    ]
  }} />
);
export default MediathequeValDOise;
