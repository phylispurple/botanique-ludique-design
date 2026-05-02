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
    "pitch": "Un croisement entre le livre et le vivant, pensé pour le réseau des médiathèques parisien·nes. Le réseau des bibliothèques municipales de Paris (BMVR, BSI, médiathèques d'arrondissement) programme régulièrement sur la nature en ville. Nous prolongeons les fonds documentaires par une expérience sensorielle.",
    "why": [
            {
                    "title": "Public médiathèque",
                    "desc": "Familles, classes, ados, adultes curieux, seniors lecteurs. Nos formats s'adaptent à chaque tranche d'horaire de votre programmation."
            },
            {
                    "title": "Lien aux fonds",
                    "desc": "Nous nous appuyons sur les ouvrages déjà présents dans votre médiathèque (jardinage, sciences, jeunesse) pour ancrer la médiation."
            },
            {
                    "title": "Approche documentée",
                    "desc": "Notre médiatrice, anthropologue formée à l'EHESS, apporte une vraie épaisseur intellectuelle, en cohérence avec une institution culturelle."
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
                    "a": "Nous travaillons régulièrement avec des institutions publiques et adaptons nos devis aux cadres conventionnés. Notre statut associatif facilite la facturation."
            },
            {
                    "q": "Disponible partout dans le 75 ?",
                    "a": "Oui, à tous les arrondissements parisiens et au-delà. Nous nous déplaçons avec tout le matériel nécessaire à l'animation."
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
export default MediathequeParis;
