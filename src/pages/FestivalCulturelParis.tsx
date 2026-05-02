import OccasionTemplate from "@/components/OccasionTemplate";
import { Sparkles } from "lucide-react";

const FestivalCulturelParis = () => (
  <OccasionTemplate data={{
    "slug": "festival-culturel-paris",
    "icon": Sparkles,
    "eyebrow": "Festival culturel",
    "title": "Intervention festival culturel Paris",
    "metaTitle": "Intervention festival culturel Paris, atelier végétal",
    "metaDesc": "Intervention en festival culturel dans le 75 Paris. Atelier ou conférence ethnobotanique, format adapté au public festivalier.",
    "pitch": "Un programme botanique pour les festivals culturels parisien·nes. Paris accueille des festivals culturels exigeants (Nuit Blanche, Pavillon de l'Eau, Fête des Jardins) qui programment volontiers sur le végétal et le vivant. Conférence, atelier ou stand permanent, pensés pour le rythme festivalier et le grand public.",
    "why": [
            {
                    "title": "Différenciant",
                    "desc": "Une proposition rare dans la programmation culturelle, qui apporte une dimension scientifique et sensorielle bienvenue."
            },
            {
                    "title": "Inclusif",
                    "desc": "Nos formats parlent aux familles, aux ados, aux adultes curieux, aux seniors. Pas besoin d'être botaniste pour entrer."
            },
            {
                    "title": "Documenté",
                    "desc": "Notre approche ethnobotanique apporte une vraie profondeur intellectuelle, en cohérence avec les festivals exigeants parisien·nes."
            }
    ],
    "formula": [
            {
                    "line": "Conférence",
                    "detail": "Une heure de présentation grand public, format apprécié des festivals parisiens comme la Nuit Blanche ou la Fête des Jardins."
            },
            {
                    "line": "Atelier participatif",
                    "detail": "Animation guidée sur inscription pour un public limité, dans un kiosque ou un espace dédié."
            },
            {
                    "line": "Stand permanent",
                    "detail": "Présence sur plusieurs heures dans un parc parisien ou une cour d'institution culturelle."
            },
            {
                    "line": "Programmation longue",
                    "detail": "Cycle complet sur la durée du festival, combinaison de tous les formats."
            }
    ],
    "practical": [
        {
            "label": "Durée",
            "value": "1h à plusieurs jours"
        },
        {
            "label": "Public",
            "value": "Festival, tous publics"
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
                    "q": "Logistique festival ?",
                    "a": "Nous sommes habitué·e·s aux contraintes des festivals : timing serré, public mouvant, météo aléatoire, lieux atypiques. Notre matériel est conçu pour ces conditions."
            },
            {
                    "q": "Intervention dans le 75 ?",
                    "a": "Oui, à tous les arrondissements parisiens et plus largement, en lien avec des festivals comme Nuit Blanche, la Fête des Jardins ou les programmations du Pavillon de l'Eau."
            },
            {
                    "q": "Format extérieur tenable ?",
                    "a": "Oui, avec un abri ou une tonnelle. Plan B systématique en cas de pluie, indispensable pour les festivals d'été."
            },
            {
                    "q": "Subventionnement ?",
                    "a": "Nous travaillons avec des structures conventionnées DRAC, région ou département. Notre statut associatif simplifie les démarches."
            }
    ]
  }} />
);
export default FestivalCulturelParis;
