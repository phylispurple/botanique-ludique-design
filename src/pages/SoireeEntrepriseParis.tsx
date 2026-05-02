import OccasionTemplate from "@/components/OccasionTemplate";
import { Sparkles } from "lucide-react";

const SoireeEntrepriseParis = () => (
  <OccasionTemplate data={{
    "slug": "soiree-entreprise-paris",
    "icon": Sparkles,
    "eyebrow": "Soirée entreprise",
    "title": "Animation soirée entreprise végétale Paris",
    "metaTitle": "Animation soirée entreprise Paris, format végétal",
    "metaDesc": "Animation soirée entreprise dans le 75 Paris autour du végétal. Format atelier debout, fluide, en parallèle d'un cocktail.",
    "pitch": "Une animation de soirée qui ne perturbe pas le cocktail, dans Paris. Format debout, fluide, où chacun·e passe à son rythme et repart avec une création.",
    "why": [
            {
                    "title": "Format debout",
                    "desc": "L'atelier vient à eux, en îlot, sans interrompre la circulation des invité·e·s entre buffet et bar."
            },
            {
                    "title": "Parle à tout le monde",
                    "desc": "Pas besoin d'expertise. Le format est conçu pour que chacun·e réussisse sa création en quinze minutes maximum."
            },
            {
                    "title": "Mémorable",
                    "desc": "Une animation qui se raconte le lendemain et qui marque la soirée bien plus qu'un photobooth."
            }
    ],
    "formula": [
            {
                    "line": "Stand atelier",
                    "detail": "Un îlot installé pendant le cocktail, avec une animatrice et tout le matériel pour les passages successifs."
            },
            {
                    "line": "Mini créations",
                    "detail": "Bouture, mini terrarium en flacon, sachet aromatique. Formats rapides, adaptés au flux d'une soirée."
            },
            {
                    "line": "À emporter",
                    "detail": "Chaque personne repart avec sa création dans un emballage soigné, prêt à être glissé dans un sac."
            },
            {
                    "line": "Module long",
                    "detail": "Possibilité d'un atelier assis pour un nombre limité de participants, en parallèle du stand debout."
            }
    ],
    "practical": [
        {
            "label": "Durée",
            "value": "2h à 4h"
        },
        {
            "label": "Groupe",
            "value": "20 à 100 pers."
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
                    "q": "Disponible dans tout le 75 ?",
                    "a": "Oui, tous les arrondissements parisiens et au-delà. Nous nous adaptons aux contraintes de lieux d'événement (rooftops, lofts, salons)."
            },
            {
                    "q": "Soirée fin d'année ?",
                    "a": "C'est une période très demandée, à anticiper deux mois à l'avance. Décembre se remplit dès septembre."
            },
            {
                    "q": "Personnalisation possible ?",
                    "a": "Oui, étiquette personnalisée, choix de plantes, packaging à votre image. Nous travaillons avec votre équipe communication."
            },
            {
                    "q": "Format extérieur ?",
                    "a": "Possible en saison douce, à condition d'avoir un abri en cas de pluie. Nous évitons les soirées en extérieur entre novembre et mars."
            }
    ]
  }} />
);
export default SoireeEntrepriseParis;
