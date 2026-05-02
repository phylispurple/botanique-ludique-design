import OccasionTemplate from "@/components/OccasionTemplate";
import { Sparkles } from "lucide-react";

const SeminaireEntrepriseYvelines = () => (
  <OccasionTemplate data={{
    "slug": "seminaire-entreprise-yvelines",
    "icon": Sparkles,
    "eyebrow": "Séminaire entreprise",
    "title": "Animation séminaire entreprise Yvelines",
    "metaTitle": "Animation séminaire entreprise Yvelines, végétal",
    "metaDesc": "Animation séminaire entreprise dans le 78 Yvelines autour du végétal. Module ou journée complète, terrarium, kokedama, balade.",
    "pitch": "Une animation qui ne ressemble pas aux autres, dans le Yvelines. Un temps végétal en plein milieu de votre séminaire, qui crée du lien autrement et marque durablement.",
    "why": [
        {
            "title": "Sortir du cadre",
            "desc": "Un temps manuel et calme qui change radicalement de la dynamique d'un séminaire classique."
        },
        {
            "title": "Créer du lien",
            "desc": "Les ateliers font tomber les rôles et hiérarchies. Les équipes se redécouvrent."
        },
        {
            "title": "Souvenir tangible",
            "desc": "Chaque participant·e repart avec sa création, qui rappellera le séminaire pendant des mois."
        }
    ],
    "formula": [
        {
            "line": "Module 2h",
            "detail": "Inséré dans une journée plus large, idéal en fin de matinée ou d'après-midi."
        },
        {
            "line": "Demi-journée",
            "detail": "Atelier complet plus balade ethnobotanique dans un parc proche."
        },
        {
            "line": "Journée complète",
            "detail": "Programme sur mesure mêlant ateliers, balade, conférence et restitution."
        },
        {
            "line": "Format hybride",
            "detail": "Combinaison atelier intérieur et balade extérieure, apprécié au printemps."
        }
    ],
    "practical": [
        {
            "label": "Durée",
            "value": "2h à 1 journée"
        },
        {
            "label": "Groupe",
            "value": "10 à 60 pers."
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
            "q": "Vous intervenez dans tout le 78 ?",
            "a": "Oui, à Versailles, Saint-Germain-en-Laye, Maurepas, Mantes-la-Jolie et plus largement. Notre équipe se déplace avec tout le matériel."
        },
        {
            "q": "Combien de personnes maximum ?",
            "a": "Jusqu'à soixante. Au-delà, format à double animatrice possible."
        },
        {
            "q": "Délai de réservation ?",
            "a": "Six à huit semaines à l'avance idéalement, davantage pour les périodes denses."
        },
        {
            "q": "Adaptation à votre charte ?",
            "a": "Oui, sur devis. Nous adaptons communication, supports et certaines créations à votre identité."
        }
    ]
}} />
);
export default SeminaireEntrepriseYvelines;
