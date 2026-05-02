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
    "pitch": "Une animation de soirée qui ne perturbe pas le cocktail, dans le Hauts-de-Seine. Format debout, fluide, où chacun·e passe à son rythme et repart avec une création.",
    "why": [
        {
            "title": "Format debout",
            "desc": "L'atelier vient à eux, en îlot, sans interrompre la circulation."
        },
        {
            "title": "Parle à tout le monde",
            "desc": "Pas besoin d'expertise. Tout le monde repart avec un objet réussi."
        },
        {
            "title": "Mémorable",
            "desc": "Une animation qui se raconte ensuite et qui marque la soirée."
        }
    ],
    "formula": [
        {
            "line": "Stand atelier",
            "detail": "Un îlot installé pendant le cocktail, avec une animatrice et tout le matériel."
        },
        {
            "line": "Mini créations",
            "detail": "Bouture, mini terrarium, sachet aromatique, formats rapides."
        },
        {
            "line": "À emporter",
            "detail": "Chaque personne repart avec sa création dans un emballage soigné."
        },
        {
            "line": "Module long",
            "detail": "Possibilité d'un atelier assis pour un nombre limité de participants."
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
            "a": "Oui, Boulogne-Billancourt, Nanterre, Issy-les-Moulineaux, Neuilly et au-delà."
        },
        {
            "q": "Soirée fin d'année ?",
            "a": "C'est une période très demandée, à anticiper deux mois à l'avance."
        },
        {
            "q": "Personnalisation possible ?",
            "a": "Oui, étiquette, choix de plantes, packaging à votre image."
        },
        {
            "q": "Format extérieur ?",
            "a": "Possible en saison douce, à condition d'avoir un abri en cas de pluie."
        }
    ]
}} />
);
export default SoireeEntrepriseHautsDeSeine;
