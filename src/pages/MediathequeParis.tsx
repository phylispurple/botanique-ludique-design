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
                    "detail": "Lecture pour les plus jeunes autour d'une plante, format calé sur les heures du conte des bibliothèques municipales."
            },
            {
                    "line": "Atelier découverte",
                    "detail": "Initiation au terrarium, kokedama ou teinture pour un groupe sur inscription, format apprécié des médiathèques d'arrondissement."
            },
            {
                    "line": "Conférence",
                    "detail": "Présentation sur l'histoire du Muséum, des serres d'Auteuil ou de l'urbanisme végétal haussmannien."
            },
            {
                    "line": "Cycle thématique",
                    "detail": "Programmation sur plusieurs séances en lien avec un cycle de la BSI ou de la BMVR."
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
                    "q": "Travail avec institutions publiques ?",
                    "a": "Oui, nous intervenons régulièrement avec le réseau des bibliothèques municipales de Paris (BMVR, BSI, médiathèques d'arrondissement). Notre statut associatif facilite la facturation publique."
            },
            {
                    "q": "Disponible partout dans le 75 ?",
                    "a": "Oui, à tous les arrondissements parisiens et plus largement. Nous nous déplaçons avec tout le matériel."
            },
            {
                    "q": "Formats en cycle possibles ?",
                    "a": "Oui, c'est la formule la plus impactante : une présence répétée crée un public fidèle et une médiation qui s'approfondit."
            },
            {
                    "q": "Matériel fourni ?",
                    "a": "Oui, tout le matériel végétal et l'outillage sont apportés par notre équipe. La médiathèque fournit l'espace, l'eau et un point électrique."
            }
    ]
  }} />
);
export default MediathequeParis;
