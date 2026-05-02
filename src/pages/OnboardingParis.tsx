import OccasionTemplate from "@/components/OccasionTemplate";
import { Sparkles } from "lucide-react";

const OnboardingParis = () => (
  <OccasionTemplate data={{
    "slug": "onboarding-paris",
    "icon": Sparkles,
    "eyebrow": "Onboarding",
    "title": "Atelier onboarding collaborateurs Paris",
    "metaTitle": "Atelier onboarding Paris, intégration végétale",
    "metaDesc": "Atelier onboarding collaborateurs dans le 75 Paris. Animation végétale pour intégrer vos nouvelles recrues autrement.",
    "pitch": "Intégrer ses nouvelles recrues autrement, dans le Paris. Un atelier botanique pour faire connaissance, créer des liens et marquer le premier jour.",
    "why": [
        {
            "title": "Faciliter le lien",
            "desc": "L'atelier manuel met les recrues à l'aise plus vite qu'un tour de table."
        },
        {
            "title": "Cadeau d'accueil",
            "desc": "Chaque nouveau·elle repart avec une plante qui grandira sur son bureau."
        },
        {
            "title": "Marque employeur",
            "desc": "Un onboarding mémorable qui se raconte et se partage."
        }
    ],
    "formula": [
        {
            "line": "Accueil",
            "detail": "Présentation du format et des intervenant·e·s en quelques minutes."
        },
        {
            "line": "Atelier",
            "detail": "Création guidée, terrarium, kokedama ou bouture personnalisée."
        },
        {
            "line": "Mot RH",
            "detail": "Vous reprenez la main pour le mot d'accueil officiel."
        },
        {
            "line": "Goûter",
            "detail": "En option, nous gérons aussi un moment convivial autour de l'atelier."
        }
    ],
    "practical": [
        {
            "label": "Durée",
            "value": "1h30 à 2h"
        },
        {
            "label": "Groupe",
            "value": "5 à 30 pers."
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
            "q": "Format mensuel possible ?",
            "a": "Oui, nous pouvons venir tous les mois pour vos nouvelles vagues d'onboarding."
        },
        {
            "q": "Vous venez dans le 75 ?",
            "a": "Oui, à Paris intra-muros, tous les arrondissements et plus largement en IDF."
        },
        {
            "q": "Personnalisation marque employeur ?",
            "a": "Oui, étiquette personnalisée, choix de plantes, palette couleurs."
        },
        {
            "q": "Délai d'organisation ?",
            "a": "Trois semaines minimum pour caler agendas et matériel."
        }
    ]
}} />
);
export default OnboardingParis;
