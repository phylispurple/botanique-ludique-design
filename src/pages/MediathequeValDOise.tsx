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
    "pitch": "Un croisement entre le livre et le vivant, pensé pour le réseau des médiathèques du Val-d'Oise. Le réseau des médiathèques val-d'oisiennes est porté par le département, avec une politique active de médiation scientifique pour les publics jeunes et familiaux. Nous prolongeons les fonds documentaires par une expérience sensorielle.",
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
                    "detail": "Lecture pour les jeunes lecteurs autour d'une plante, en lien avec le réseau départemental des médiathèques."
            },
            {
                    "line": "Atelier découverte",
                    "detail": "Initiation au terrarium ou au kokedama pour un petit groupe, sur inscription."
            },
            {
                    "line": "Conférence",
                    "detail": "Présentation sur l'abbaye de Royaumont, les paysages d'Auvers-sur-Oise ou l'agriculture maraîchère historique."
            },
            {
                    "line": "Cycle thématique",
                    "detail": "Programmation sur plusieurs séances en lien avec une exposition ou un fonds local de votre médiathèque."
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
                    "q": "Travail avec institutions publiques ?",
                    "a": "Oui, nous intervenons régulièrement avec le réseau départemental des médiathèques val-d'oisiennes, porté par le Conseil Départemental. Notre statut associatif facilite la facturation publique."
            },
            {
                    "q": "Disponible partout dans le 95 ?",
                    "a": "Oui, à Cergy, Argenteuil, Sarcelles, Pontoise et plus largement. Nous nous déplaçons avec tout le matériel."
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
export default MediathequeValDOise;
