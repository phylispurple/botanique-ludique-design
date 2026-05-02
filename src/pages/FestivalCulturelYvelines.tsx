import OccasionTemplate from "@/components/OccasionTemplate";
import { Sparkles } from "lucide-react";

const FestivalCulturelYvelines = () => (
  <OccasionTemplate data={{
    "slug": "festival-culturel-yvelines",
    "icon": Sparkles,
    "eyebrow": "Festival culturel",
    "title": "Intervention festival culturel Yvelines",
    "metaTitle": "Intervention festival culturel Yvelines, atelier végétal",
    "metaDesc": "Intervention en festival culturel dans le 78 Yvelines. Atelier ou conférence ethnobotanique, format adapté au public festivalier.",
    "pitch": "Un programme botanique dans votre festival, dans Yvelines. Conférence, atelier ou stand permanent, pensés pour le public et le rythme festivalier, avec une vraie épaisseur intellectuelle.",
    "why": [
            {
                    "title": "Différenciant",
                    "desc": "Une proposition rare dans la programmation festival classique, qui apporte une dimension scientifique et sensorielle."
            },
            {
                    "title": "Inclusif",
                    "desc": "Nos formats parlent aux familles, aux ados, aux adultes curieux, aux seniors. Pas besoin d'être botaniste pour entrer."
            },
            {
                    "title": "Documenté",
                    "desc": "Notre approche ethnobotanique apporte une réelle profondeur intellectuelle, en cohérence avec les festivals exigeants."
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
                    "q": "Logistique festival ?",
                    "a": "Nous sommes habitué·e·s aux contraintes : timing serré, public mouvant, météo aléatoire, lieux atypiques. Nous nous adaptons."
            },
            {
                    "q": "Intervention dans le 78 ?",
                    "a": "Oui, à Versailles, Saint-Germain-en-Laye, Maurepas, Mantes-la-Jolie et plus largement des Yvelines. Nous nous déplaçons avec tout le matériel."
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
export default FestivalCulturelYvelines;
