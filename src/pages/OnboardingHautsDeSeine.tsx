import OccasionTemplate from "@/components/OccasionTemplate";
import { Sparkles } from "lucide-react";

const OnboardingHautsDeSeine = () => (
  <OccasionTemplate data={{
    "slug": "onboarding-hauts-de-seine",
    "icon": Sparkles,
    "eyebrow": "Onboarding",
    "title": "Atelier onboarding collaborateurs Hauts-de-Seine",
    "metaTitle": "Atelier onboarding Hauts-de-Seine, intégration végétale",
    "metaDesc": "Atelier onboarding collaborateurs dans le 92 Hauts-de-Seine. Animation végétale pour intégrer vos nouvelles recrues autrement.",
    "pitch": "Intégrer ses nouvelles recrues autrement, pensé pour les sièges sociaux de La Défense, les médias d'Issy-les-Moulineaux et les start-ups de Boulogne-Billancourt. Un atelier botanique en début de journée d'arrivée, qui crée des liens et marque le premier jour avec un objet vivant.",
    "why": [
            {
                    "title": "Brise-glace efficace",
                    "desc": "Plus rapide qu'un tour de table classique. Les mains travaillent, les langues se délient sans pression."
            },
            {
                    "title": "Cadeau d'accueil",
                    "desc": "Chaque nouveau·elle repart avec une plante qui grandira sur son bureau des Hauts-de-Seine. Un point de repère vivant dans l'espace de travail."
            },
            {
                    "title": "Marque employeur",
                    "desc": "Le 92 concentre la plus forte densité de sièges sociaux d'Île-de-France, avec une demande RSE et bien-être au travail particulièrement marquée. Un onboarding mémorable participe à votre attractivité auprès des futur·e·s candidat·e·s."
            }
    ],
    "formula": [
            {
                    "line": "Accueil",
                    "detail": "Présentation du format et des intervenant·e·s en quelques minutes, autour d'un café."
            },
            {
                    "line": "Atelier",
                    "detail": "Création guidée, terrarium, kokedama ou bouture personnalisée selon votre brief et la durée disponible."
            },
            {
                    "line": "Mot RH",
                    "detail": "Vous reprenez la main pour le mot d'accueil officiel, dans une ambiance plus détendue qu'à l'arrivée."
            },
            {
                    "line": "Goûter",
                    "detail": "En option, nous gérons aussi un moment convivial autour de l'atelier, avec boissons et collations."
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
                    "q": "Format mensuel possible ?",
                    "a": "Oui, nous pouvons venir tous les mois pour vos nouvelles vagues d'onboarding. C'est même la formule la plus efficace pour installer un rituel."
            },
            {
                    "q": "Vous venez dans le 92 ?",
                    "a": "Oui, à Boulogne-Billancourt, Nanterre, Issy-les-Moulineaux, Neuilly et plus largement en IDF. Notre équipe se déplace avec tout le matériel."
            },
            {
                    "q": "Personnalisation marque employeur ?",
                    "a": "Oui, étiquette personnalisée, choix de plantes alignées avec vos valeurs, palette de couleurs aux teintes de votre charte."
            },
            {
                    "q": "Délai d'organisation ?",
                    "a": "Trois semaines minimum pour caler les agendas et préparer le matériel. Les onboarding récurrents sont planifiés en début d'année."
            }
    ]
  }} />
);
export default OnboardingHautsDeSeine;
