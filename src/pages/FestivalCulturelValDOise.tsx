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
    "pitch": "Un programme botanique dans votre festival, dans le Val-d'Oise. Conférence, atelier ou stand, pensés pour le public et le rythme festivalier.",
    "why": [
        {
            "title": "Différenciant",
            "desc": "Une proposition rare dans la programmation festival."
        },
        {
            "title": "Inclusif",
            "desc": "Nos formats parlent aux familles, aux ados, aux adultes curieux."
        },
        {
            "title": "Documenté",
            "desc": "Notre approche ethnobotanique apporte une vraie épaisseur intellectuelle."
        }
    ],
    "formula": [
        {
            "line": "Conférence",
            "detail": "Une heure de présentation grand public, avec questions du public."
        },
        {
            "line": "Atelier participatif",
            "detail": "Animation guidée pour un nombre limité, sur inscription."
        },
        {
            "line": "Stand permanent",
            "detail": "Présence sur plusieurs heures, démonstrations et échanges en libre accès."
        },
        {
            "line": "Programmation complète",
            "detail": "Combinaison des formats sur plusieurs jours."
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
            "a": "Nous sommes habitué·e·s aux contraintes : timing serré, public mouvant, météo aléatoire."
        },
        {
            "q": "Intervention dans le 95 ?",
            "a": "Oui, à Cergy, Argenteuil, Sarcelles, Pontoise et plus largement."
        },
        {
            "q": "Format extérieur tenable ?",
            "a": "Oui, avec un abri ou une tonnelle. Nous adaptons les ateliers à la météo."
        },
        {
            "q": "Subventionnement ?",
            "a": "Nous savons travailler avec des structures conventionnées DRAC ou département."
        }
    ]
}} />
);
export default FestivalCulturelValDOise;
