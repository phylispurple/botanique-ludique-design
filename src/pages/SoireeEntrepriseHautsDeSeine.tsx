import OccasionTemplate from "@/components/OccasionTemplate";
import { Sparkles } from "lucide-react";

const SoireeEntrepriseHautsDeSeine = () => (
  <OccasionTemplate data={{
    "slug": "soiree-entreprise-hauts-de-seine",
    "icon": Sparkles,
    "eyebrow": "Soirée entreprise",
    "title": "Animation soirée entreprise végétale Hauts-de-Seine",
    "metaTitle": "Animation soirée entreprise Hauts-de-Seine, format végétal",
    "metaDesc": "Animation soirée entreprise dans le 92 Hauts-de-Seine autour du végétal. Format atelier debout, fluide, en parallèle d'un cocktail.",
    "pitch": "Une animation de soirée qui ne perturbe pas le cocktail, pensée pour les sièges sociaux de La Défense, les médias d'Issy-les-Moulineaux et les start-ups de Boulogne-Billancourt. Format debout, fluide, où chacun·e passe à son rythme et repart avec une création.",
    "why": [
            {
                    "title": "Format adapté à votre lieu",
                    "desc": "Rooftop, loft, salon de réception, espace atypique : nous nous adaptons aux contraintes des lieux d'événement des Hauts-de-Seine."
            },
            {
                    "title": "Parle à tout le monde",
                    "desc": "Pas besoin d'expertise. Le format est conçu pour que chacun·e réussisse sa création en quinze minutes maximum."
            },
            {
                    "title": "Mémorable et photogénique",
                    "desc": "Une animation qui se raconte le lendemain et qui marque la soirée bien plus qu'un photobooth. Des équipes habituées aux animations corporate haut de gamme, qui cherchent du sens et de l'authenticité."
            }
    ],
    "formula": [
            {
                    "line": "Stand atelier",
                    "detail": "Îlot pendant le cocktail dans un rooftop de La Défense ou un loft de Boulogne, avec animatrice et matériel complet."
            },
            {
                    "line": "Mini créations",
                    "detail": "Formats très rapides (bouture, mini terrarium, sachet aromatique) adaptés au flux d'une soirée corporate dense."
            },
            {
                    "line": "À emporter",
                    "detail": "Création dans un emballage soigné, glissable dans un sac, pratique pour le retour en transports."
            },
            {
                    "line": "Module premium",
                    "detail": "Atelier assis pour les VIP ou les invité·e·s clés, en parallèle du stand grand public."
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
                    "q": "Disponible dans tout le 92 ?",
                    "a": "Oui, à Boulogne-Billancourt, Nanterre, Issy-les-Moulineaux, Neuilly et au-delà. Nous nous adaptons aux contraintes des lieux d'événement (rooftops, lofts, salons de réception)."
            },
            {
                    "q": "Soirée fin d'année ?",
                    "a": "Très demandé : les sièges sociaux de La Défense, les médias d'Issy et les start-ups de Boulogne concentrent leurs soirées en décembre. À anticiper deux à trois mois à l'avance."
            },
            {
                    "q": "Personnalisation possible ?",
                    "a": "Oui, étiquettes personnalisées, choix de plantes, packaging à votre image, en lien avec votre équipe communication."
            },
            {
                    "q": "Format extérieur ?",
                    "a": "Possible en saison douce, à condition d'avoir un abri en cas de pluie. Évité entre novembre et mars sauf lieux couverts."
            }
    ]
  }} />
);
export default SoireeEntrepriseHautsDeSeine;
