import OccasionTemplate from "@/components/OccasionTemplate";
import { Sparkles } from "lucide-react";

const OnboardingYvelines = () => (
  <OccasionTemplate data={{
    "slug": "onboarding-yvelines",
    "icon": Sparkles,
    "eyebrow": "Onboarding",
    "title": "Atelier onboarding collaborateurs Yvelines",
    "metaTitle": "Atelier onboarding Yvelines, intégration végétale",
    "metaDesc": "Atelier onboarding collaborateurs dans le 78 Yvelines. Animation végétale pour intégrer vos nouvelles recrues autrement.",
    "pitch": "Intégrer ses nouvelles recrues autrement, dans Yvelines. Un atelier botanique pour faire connaissance, créer des liens et marquer le premier jour avec un objet vivant à emporter sur son bureau.",
    "why": [
            {
                    "title": "Faciliter le lien",
                    "desc": "L'atelier manuel met les recrues à l'aise plus vite qu'un tour de table classique. Les mains travaillent, les langues se délient sans effort."
            },
            {
                    "title": "Cadeau d'accueil",
                    "desc": "Chaque nouveau·elle repart avec une plante qui grandira sur son bureau. Un point de repère vivant dans l'espace de travail."
            },
            {
                    "title": "Marque employeur",
                    "desc": "Un onboarding mémorable qui se raconte sur LinkedIn et entre futur·e·s candidat·e·s. Un signe de soin envers les équipes."
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
                    "q": "Format mensuel possible ?",
                    "a": "Oui, nous pouvons venir tous les mois pour vos nouvelles vagues d'onboarding. C'est même la formule la plus efficace pour installer un rituel."
            },
            {
                    "q": "Vous venez dans le 78 ?",
                    "a": "Oui, à Versailles, Saint-Germain-en-Laye, Maurepas, Mantes-la-Jolie et plus largement en IDF. Notre équipe se déplace avec tout le matériel."
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
export default OnboardingYvelines;
