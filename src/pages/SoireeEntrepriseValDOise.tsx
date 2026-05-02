import OccasionTemplate from "@/components/OccasionTemplate";
import { Sparkles } from "lucide-react";

const SoireeEntrepriseValDOise = () => (
  <OccasionTemplate data={{
    "slug": "soiree-entreprise-val-d-oise",
    "icon": Sparkles,
    "eyebrow": "Soirée entreprise",
    "title": "Animation soirée entreprise végétale Val-d'Oise",
    "metaTitle": "Animation soirée entreprise Val-d'Oise, format végétal",
    "metaDesc": "Animation soirée entreprise dans le 95 Val-d'Oise autour du végétal. Format atelier debout, fluide, en parallèle d'un cocktail.",
    "pitch": "Une animation de soirée qui ne perturbe pas le cocktail, pensée pour les sièges installés à Cergy-Pontoise, les centres logistiques de la plaine de France et les structures associatives du Vexin. Format debout, fluide, où chacun·e passe à son rythme et repart avec une création.",
    "why": [
            {
                    "title": "Format adapté à votre lieu",
                    "desc": "Rooftop, loft, salon de réception, espace atypique : nous nous adaptons aux contraintes des lieux d'événement du Val-d'Oise."
            },
            {
                    "title": "Parle à tout le monde",
                    "desc": "Pas besoin d'expertise. Le format est conçu pour que chacun·e réussisse sa création en quinze minutes maximum."
            },
            {
                    "title": "Mémorable et photogénique",
                    "desc": "Une animation qui se raconte le lendemain et qui marque la soirée bien plus qu'un photobooth. Des équipes qui apprécient les formats authentiques, ancrés dans un vrai territoire plutôt qu'une animation hors-sol."
            }
    ],
    "formula": [
            {
                    "line": "Stand atelier",
                    "detail": "Îlot pendant le cocktail dans un domaine du Vexin ou une salle de réception à Cergy, avec animatrice et matériel."
            },
            {
                    "line": "Mini créations",
                    "detail": "Formats rapides (bouture, mini terrarium, sachet aromatique), adaptés au flux d'une soirée."
            },
            {
                    "line": "À emporter",
                    "detail": "Emballage soigné, parfait pour le retour en voiture vers Paris ou la province."
            },
            {
                    "line": "Module long",
                    "detail": "Atelier assis pour un sous-groupe, en parallèle du stand debout grand public."
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
                    "q": "Disponible dans tout le 95 ?",
                    "a": "Oui, à Cergy, Argenteuil, Sarcelles, Pontoise et au-delà. Nous nous adaptons aux contraintes des lieux d'événement (rooftops, lofts, salons de réception)."
            },
            {
                    "q": "Soirée fin d'année ?",
                    "a": "Très demandé : les sièges installés à Cergy-Pontoise et les structures du Vexin concentrent leurs soirées en décembre. À anticiper deux à trois mois à l'avance."
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
export default SoireeEntrepriseValDOise;
