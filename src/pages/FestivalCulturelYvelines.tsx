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
    "pitch": "Un programme botanique pour les festivals culturels des Yvelines. Le département accueille des festivals patrimoniaux (Mois Molière à Versailles, Blues sur Seine à Mantes) où la dimension culturelle est forte. Conférence, atelier ou stand permanent, pensés pour le rythme festivalier et le grand public.",
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
                    "desc": "Notre approche ethnobotanique apporte une vraie profondeur intellectuelle, en cohérence avec les festivals exigeants des Yvelines."
            }
    ],
    "formula": [
            {
                    "line": "Conférence",
                    "detail": "Une heure de présentation grand public, idéale pour des festivals patrimoniaux comme le Mois Molière à Versailles."
            },
            {
                    "line": "Atelier participatif",
                    "detail": "Animation guidée pour 10-15 personnes sur inscription, format apprécié des festivals familiaux des Yvelines."
            },
            {
                    "line": "Stand permanent",
                    "detail": "Présence sur plusieurs heures dans un village festival, démonstrations et échanges en libre accès."
            },
            {
                    "line": "Programmation longue",
                    "detail": "Combinaison conférence + ateliers + stand sur plusieurs jours, articulée avec votre direction artistique."
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
                    "a": "Nous sommes habitué·e·s aux contraintes des festivals : timing serré, public mouvant, météo aléatoire, lieux atypiques. Notre matériel est conçu pour ces conditions."
            },
            {
                    "q": "Intervention dans le 78 ?",
                    "a": "Oui, à Versailles, Saint-Germain-en-Laye, Maurepas, Mantes-la-Jolie et plus largement, en lien avec des festivals patrimoniaux comme le Mois Molière à Versailles ou Blues sur Seine à Mantes."
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
export default FestivalCulturelYvelines;
