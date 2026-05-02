import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import BackToTop from "@/components/BackToTop";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const BlogFeteNatureMairie = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SEO
        title="Organiser la Fête de la Nature dans votre commune, guide pratique"
        description="Guide pour les mairies : organiser un évènement Fête de la Nature réussi. Calendrier 2026, ateliers possibles, partenariats, communication, retombées."
        keywords="organiser fête de la nature mairie, animation fête nature commune, programme municipal nature mai, atelier botanique évènement public, partenariat fête nature"
        canonical="/blog/organiser-fete-nature-mairie"
      />
      <SchemaOrg
        type="Article"
        data={{
          headline: "Organiser la Fête de la Nature dans votre commune, guide pratique",
          description: "Guide pour les mairies : organiser un évènement Fête de la Nature réussi.",
          datePublished: "2026-04-08",
          slug: "organiser-fete-nature-mairie",
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        data={{ items: [
          { name: "Accueil", url: "https://botaniqueludique.com/" },
          { name: "Blog", url: "https://botaniqueludique.com/blog" },
          { name: "Fête de la Nature en mairie", url: "https://botaniqueludique.com/blog/organiser-fete-nature-mairie" }
        ]}}
      />
      <Navigation />

      <article className="pt-32 pb-20 px-6 md:px-16 lg:px-[120px]">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-5">Ressources collectivités</span>
            <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.95] tracking-[-2px] text-[hsl(var(--black))] mb-8">
              Organiser la Fête de la Nature dans votre commune
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="prose prose-lg max-w-none text-[hsl(var(--black))]/80 space-y-6">
              <p>
                La Fête de la Nature, organisée chaque année autour du 22 mai (date de la Journée mondiale de la biodiversité),
                est devenue un rendez-vous incontournable pour les communes qui souhaitent valoriser leur patrimoine vivant.
                Voici un guide pratique pour construire une programmation municipale réussie.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                Calendrier et anticipation
              </h2>
              <p>
                La Fête de la Nature 2026 se tiendra du 20 au 24 mai. Pour une commune de moins de 20 000 habitants, prévoyez
                un démarrage de la préparation au minimum quatre mois en amont, soit dès janvier. Les délibérations budgétaires,
                les conventions avec partenaires associatifs et la communication municipale demandent ce temps de maturation.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                Trois formats qui fonctionnent
              </h2>
              <p>
                <strong>La balade botanique guidée.</strong> Format intimiste pour 15 à 25 personnes, qui valorise un parc municipal,
                un cimetière paysager ou un sentier nature. Idéale pour les amateurs de patrimoine vert.
              </p>
              <p>
                <strong>Le stand d'atelier en accès libre.</strong> Bombes à graines, identification de plantes sauvages, semis :
                un format qui touche un large public familial sur une journée, avec un fort coefficient de passage.
              </p>
              <p>
                <strong>L'atelier sur inscription.</strong> Kokedama, terrarium ou teinture végétale en petits groupes,
                pour fidéliser un public et créer une programmation qualitative.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                Lieux à privilégier
              </h2>
              <p>
                Parcs municipaux, jardins partagés, médiathèques avec terrasse, marchés couverts : les lieux qui mêlent passage spontané
                et confort logistique fonctionnent le mieux. Évitez les salles polyvalentes fermées : la Fête de la Nature gagne à se vivre dehors.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                Communication et inscriptions au registre national
              </h2>
              <p>
                Pensez à inscrire votre évènement sur le site officiel <em>fetedelanature.com</em>, qui fédère toutes les manifestations
                en France. Cette inscription est gratuite et offre une visibilité nationale, en plus d'apporter le label officiel.
                Côté communication locale : bulletin municipal, panneaux d'affichage, page Facebook de la mairie, écrans dynamiques.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                Budget indicatif
              </h2>
              <p>
                Pour une commune moyenne, prévoyez une enveloppe entre 800 et 3 000 euros selon le nombre d'animations.
                Cela couvre les prestations d'animation, les fournitures végétales et la communication ciblée.
                Cette ligne entre généralement dans le budget « action culturelle » ou « développement durable » de la commune.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                Mesurer les retombées
              </h2>
              <p>
                Photos, comptage des participants, livre d'or, questionnaire de satisfaction : ces éléments seront précieux
                pour valoriser l'action en conseil municipal et obtenir le renouvellement de la programmation l'année suivante.
                C'est aussi un argument fort pour candidater au label « Territoire engagé pour la nature » de l'OFB.
              </p>

              <p className="text-base text-[hsl(var(--black))]/70 italic mt-8">
                Botanique Ludique propose des animations clé en main pour la Fête de la Nature dans toute l'Île-de-France :
                stand d'atelier, balade botanique, intervention en médiathèque. Devis sur mesure et conventionnement public.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="mt-16 border-t-[3px] border-[hsl(var(--black))] pt-10">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[hsl(var(--black))] text-[hsl(var(--cream))] px-8 py-4 font-mono-brand text-sm uppercase tracking-[2px] border-[3px] border-[hsl(var(--black))] hover:bg-[hsl(var(--cream))] hover:text-[hsl(var(--black))] transition-colors">
                Programmer Fête de la Nature 2026 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </article>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default BlogFeteNatureMairie;
