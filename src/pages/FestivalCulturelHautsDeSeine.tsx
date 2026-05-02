import OccasionTemplate from "@/components/OccasionTemplate";
import { Sparkles } from "lucide-react";

const FestivalCulturelHautsDeSeine = () => (
  <OccasionTemplate data={{
    "slug": "festival-culturel-hauts-de-seine",
    "icon": Sparkles,
    "eyebrow": "Festival culturel",
    "title": "Intervention festival culturel Hauts-de-Seine",
    "metaTitle": "Intervention festival culturel Hauts-de-Seine, atelier végétal",
    "metaDesc": "Intervention en festival culturel dans le 92 Hauts-de-Seine. Atelier ou conférence ethnobotanique, format adapté au public festivalier.",
    "pitch": "Un programme botanique pour les festivals culturels des Hauts-de-Seine. Le 92 héberge des festivals comme Chorus, le festival de Saint-Cloud, et des événements de quartier autour de la culture et de l'écologie. Conférence, atelier ou stand permanent, pensés pour le rythme festivalier et le grand public.",
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
                    "desc": "Notre approche ethnobotanique apporte une vraie profondeur intellectuelle, en cohérence avec les festivals exigeants des Hauts-de-Seine."
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
                    "q": "Logistique festival ?",
                    "a": "Nous sommes habitué·e·s aux contraintes : timing serré, public mouvant, météo aléatoire, lieux atypiques. Nous nous adaptons."
            },
            {
                    "q": "Intervention dans le 92 ?",
                    "a": "Oui, à Boulogne-Billancourt, Nanterre, Issy-les-Moulineaux, Neuilly et plus largement des Hauts-de-Seine. Nous nous déplaçons avec tout le matériel."
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
export default FestivalCulturelHautsDeSeine;
