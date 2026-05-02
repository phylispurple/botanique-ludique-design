import OccasionTemplate from "@/components/OccasionTemplate";
import { Sparkles } from "lucide-react";

const FestivalCulturelValDOise = () => (
  <OccasionTemplate data={{
    "slug": "festival-culturel-val-d-oise",
    "icon": Sparkles,
    "eyebrow": "Festival culturel",
    "title": "Intervention festival culturel Val-d'Oise",
    "metaTitle": "Intervention festival culturel Val-d'Oise, atelier végétal",
    "metaDesc": "Intervention en festival culturel dans le 95 Val-d'Oise. Atelier ou conférence ethnobotanique, format adapté au public festivalier.",
    "pitch": "Un programme botanique pour les festivals culturels du Val-d'Oise. Le 95 accueille des festivals comme le Festival d'Auvers-sur-Oise, Cergy Soit ! et des temps forts portés par les communautés d'agglomération. Conférence, atelier ou stand permanent, pensés pour le rythme festivalier et le grand public.",
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
                    "desc": "Notre approche ethnobotanique apporte une vraie profondeur intellectuelle, en cohérence avec les festivals exigeants du Val-d'Oise."
            }
    ],
    "formula": [
            {
                    "line": "Conférence",
                    "detail": "Une heure de présentation grand public, avec questions du public. Sur un thème lié à votre programmation."
            },
            {
                    "line": "Atelier participatif",
                    "detail": "Animation guidée pour un nombre limité, sur inscription. Format idéal pour créer un moment singulier dans le festival."
            },
            {
                    "line": "Stand permanent",
                    "detail": "Présence sur plusieurs heures, démonstrations et échanges en libre accès. Visibilité maximale pour le festival."
            },
            {
                    "line": "Programmation complète",
                    "detail": "Combinaison des formats sur plusieurs jours, articulée avec votre direction artistique."
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
                    "q": "Logistique festival ?",
                    "a": "Nous sommes habitué·e·s aux contraintes : timing serré, public mouvant, météo aléatoire, lieux atypiques. Nous nous adaptons."
            },
            {
                    "q": "Intervention dans le 95 ?",
                    "a": "Oui, à Cergy, Argenteuil, Sarcelles, Pontoise et plus largement du Val-d'Oise. Nous nous déplaçons avec tout le matériel."
            },
            {
                    "q": "Format extérieur tenable ?",
                    "a": "Oui, avec un abri ou une tonnelle. Nous adaptons les ateliers à la météo et avons toujours un plan B en cas de pluie."
            },
            {
                    "q": "Subventionnement ?",
                    "a": "Nous savons travailler avec des structures conventionnées DRAC, région ou département. Notre statut associatif simplifie les démarches."
            }
    ]
  }} />
);
export default FestivalCulturelValDOise;
