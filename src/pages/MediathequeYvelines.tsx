import OccasionTemplate from "@/components/OccasionTemplate";
import { Sparkles } from "lucide-react";

const MediathequeYvelines = () => (
  <OccasionTemplate data={{
    "slug": "mediatheque-yvelines",
    "icon": Sparkles,
    "eyebrow": "Médiathèque",
    "title": "Intervention en médiathèque Yvelines",
    "metaTitle": "Intervention médiathèque Yvelines, animation botanique",
    "metaDesc": "Intervention en médiathèque dans le 78 Yvelines. Animation botanique pour public familial, scolaire ou adulte, autour du livre et du vivant.",
    "pitch": "Un croisement entre le livre et le vivant, pensé pour le réseau des médiathèques des Yvelines. Les médiathèques des Yvelines sont nombreuses à programmer sur la nature, en lien avec le Réseau Carel et les politiques départementales. Nous prolongeons les fonds documentaires par une expérience sensorielle.",
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
                    "detail": "Lecture d'un texte botanique pour les 3-7 ans, prolongée par une activité tactile, format calé sur les heures du conte habituelles."
            },
            {
                    "line": "Atelier découverte",
                    "detail": "Initiation au terrarium ou au kokedama pour un groupe restreint sur inscription, format apprécié des médiathèques de Versailles Grand Parc."
            },
            {
                    "line": "Conférence",
                    "detail": "Présentation grand public sur l'ethnobotanique ou sur l'histoire du Potager du Roi, en lien avec le patrimoine local."
            },
            {
                    "line": "Cycle saisonnier",
                    "detail": "Programmation sur quatre saisons en lien avec les fonds jeunesse et nature de votre médiathèque."
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
            "value": "Yvelines (78)"
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
            "to": "/balade-botanique-yvelines",
            "label": "Balade Yvelines"
        }
    ],
    "faqs": [
            {
                    "q": "Travail avec institutions publiques ?",
                    "a": "Oui, nous intervenons régulièrement avec le réseau des médiathèques portées par les communautés d'agglomération de Saint-Quentin-en-Yvelines, Versailles Grand Parc et Mantes Communauté. Notre statut associatif facilite la facturation publique."
            },
            {
                    "q": "Disponible partout dans le 78 ?",
                    "a": "Oui, à Versailles, Saint-Germain-en-Laye, Maurepas, Mantes-la-Jolie et plus largement. Nous nous déplaçons avec tout le matériel."
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
export default MediathequeYvelines;
