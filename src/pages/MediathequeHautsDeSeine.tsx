import OccasionTemplate from "@/components/OccasionTemplate";
import { Sparkles } from "lucide-react";

const MediathequeHautsDeSeine = () => (
  <OccasionTemplate data={{
    "slug": "mediatheque-hauts-de-seine",
    "icon": Sparkles,
    "eyebrow": "Médiathèque",
    "title": "Intervention en médiathèque Hauts-de-Seine",
    "metaTitle": "Intervention médiathèque Hauts-de-Seine, animation botanique",
    "metaDesc": "Intervention en médiathèque dans le 92 Hauts-de-Seine. Animation botanique pour public familial, scolaire ou adulte, autour du livre et du vivant.",
    "pitch": "Un croisement entre le livre et le vivant, pensé pour le réseau des médiathèques des Hauts-de-Seine. Les médiathèques altoséquanaises proposent une programmation riche, avec des moyens importants pour la médiation scientifique et naturelle. Nous prolongeons les fonds documentaires par une expérience sensorielle.",
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
                    "detail": "Lecture pour les jeunes lecteurs autour d'une plante, format apprécié dans les médiathèques de Vallée Sud Grand Paris."
            },
            {
                    "line": "Atelier découverte",
                    "detail": "Initiation au terrarium ou à la teinture pour un groupe limité, sur inscription préalable."
            },
            {
                    "line": "Conférence",
                    "detail": "Présentation sur l'arboretum de la Vallée-aux-Loups ou sur Joséphine et la Malmaison, en lien avec le patrimoine altoséquanais."
            },
            {
                    "line": "Cycle thématique",
                    "detail": "Programmation sur plusieurs mois en lien avec une exposition ou un fonds documentaire de votre établissement."
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
            "value": "Hauts-de-Seine (92)"
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
            "to": "/balade-botanique-hauts-de-seine",
            "label": "Balade Hauts-de-Seine"
        }
    ],
    "faqs": [
            {
                    "q": "Travail avec institutions publiques ?",
                    "a": "Oui, nous intervenons régulièrement avec le réseau des médiathèques de Vallée Sud Grand Paris, Paris Ouest La Défense et Boucle Nord de Seine. Notre statut associatif facilite la facturation publique."
            },
            {
                    "q": "Disponible partout dans le 92 ?",
                    "a": "Oui, à Boulogne-Billancourt, Nanterre, Issy-les-Moulineaux, Neuilly et plus largement. Nous nous déplaçons avec tout le matériel."
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
export default MediathequeHautsDeSeine;
