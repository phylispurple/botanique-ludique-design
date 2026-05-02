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
    "pitch": "Intégrer ses nouvelles recrues autrement, pensé pour les sièges des grandes maisons du 8e, les agences créatives du 11e et du 18e, les institutions culturelles et associations du 13e. Un atelier botanique en début de journée d'arrivée, qui crée des liens et marque le premier jour avec un objet vivant.",
    "why": [
            {
                    "title": "Brise-glace efficace",
                    "desc": "Plus rapide qu'un tour de table classique. Les mains travaillent, les langues se délient sans pression."
            },
            {
                    "title": "Cadeau d'accueil",
                    "desc": "Chaque nouveau·elle repart avec une plante qui grandira sur son bureau parisien·nes. Un point de repère vivant dans l'espace de travail."
            },
            {
                    "title": "Marque employeur",
                    "desc": "Paris concentre une demande très forte en animations originales, avec un tissu B2B varié allant des petites équipes créatives aux grandes directions communication. Un onboarding mémorable participe à votre attractivité auprès des futur·e·s candidat·e·s."
            }
    ],
    "formula": [
            {
                    "line": "Accueil",
                    "detail": "Présentation du format dans vos locaux parisiens, à n'importe quel arrondissement."
            },
            {
                    "line": "Atelier",
                    "detail": "Création guidée terrarium, kokedama ou bouture personnalisée selon votre brief et la durée disponible."
            },
            {
                    "line": "Mot RH",
                    "detail": "Vous reprenez la main pour le mot d'accueil officiel, dans une ambiance déjà détendue par l'atelier."
            },
            {
                    "line": "Goûter",
                    "detail": "En option, nous gérons un moment convivial autour de l'atelier, avec produits issus de circuits courts parisiens."
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
                    "a": "Oui, nous venons tous les mois pour vos vagues d'onboarding récurrentes. Format apprécié des entreprises de tous les arrondissements parisiens, de la rive gauche aux quartiers de l'Est qui recrutent en continu."
            },
            {
                    "q": "Vous venez dans le 75 ?",
                    "a": "Oui, partout parisien·nes. Notre équipe se déplace avec tout le matériel."
            },
            {
                    "q": "Personnalisation marque employeur ?",
                    "a": "Oui, étiquettes personnalisées, choix de plantes alignées avec vos valeurs, palette de couleurs aux teintes de votre charte."
            },
            {
                    "q": "Délai d'organisation ?",
                    "a": "Trois semaines minimum pour caler les agendas. Les sièges des grandes maisons du 8e, les agences créatives du 11e et du 18e privilégient les onboarding planifiés en début d'année."
            }
    ]
  }} />
);
export default OnboardingParis;
