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
                    "detail": "Une heure de présentation grand public, format apprécié des festivals comme Chorus ou les rencontres autour de l'écologie des Hauts-de-Seine."
            },
            {
                    "line": "Atelier participatif",
                    "detail": "Animation guidée pour un nombre limité, sur inscription. Format adapté aux festivals urbains et corporate."
            },
            {
                    "line": "Stand permanent",
                    "detail": "Présence sur plusieurs heures avec démonstrations en continu, idéal pour les festivals à fort flux."
            },
            {
                    "line": "Programmation longue",
                    "detail": "Combinaison de formats sur plusieurs jours, en lien avec votre direction artistique et votre fil conducteur."
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
                    "a": "Nous sommes habitué·e·s aux contraintes des festivals : timing serré, public mouvant, météo aléatoire, lieux atypiques. Notre matériel est conçu pour ces conditions."
            },
            {
                    "q": "Intervention dans le 92 ?",
                    "a": "Oui, à Boulogne-Billancourt, Nanterre, Issy-les-Moulineaux, Neuilly et plus largement, en lien avec des festivals comme Chorus, le festival de Saint-Cloud ou les Rencontres ImagiSciences."
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
export default FestivalCulturelHautsDeSeine;
