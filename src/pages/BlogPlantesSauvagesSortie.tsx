import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import BackToTop from "@/components/BackToTop";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const BlogPlantesSauvagesSortie = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SEO
        title="5 plantes sauvages à identifier lors d'une sortie scolaire en Île-de-France — Botanique Ludique"
        description="Découvrez 5 plantes sauvages faciles à identifier avec vos élèves lors d'une sortie nature en Île-de-France. Guide pratique pour enseignants et animateurs."
        keywords="plantes sauvages Île-de-France, sortie scolaire nature, identification plantes, sortie pédagogique botanique"
        canonical="/blog/plantes-sauvages-sortie-scolaire-ile-de-france"
      />
      <SchemaOrg
        type="Article"
        data={{
          headline: "5 plantes sauvages à identifier lors d'une sortie scolaire en Île-de-France",
          description: "Guide d'identification de 5 plantes sauvages communes pour les sorties scolaires en Île-de-France.",
          datePublished: "2026-03-18",
          slug: "plantes-sauvages-sortie-scolaire-ile-de-france",
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        data={{ items: [
          { name: "Accueil", url: "https://botaniqueludique.com/" },
          { name: "Blog", url: "https://botaniqueludique.com/blog" },
          { name: "5 plantes sauvages", url: "https://botaniqueludique.com/blog/plantes-sauvages-sortie-scolaire-ile-de-france" }
        ]}}
      />
      <Navigation />

      <article className="pt-32 pb-20 px-6 md:px-16 lg:px-[120px]">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-5">Ressources pédagogiques</span>
            <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.95] tracking-[-2px] text-[hsl(var(--black))] mb-8">
              5 plantes sauvages à identifier lors d'une sortie scolaire en Île-de-France
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="prose prose-lg max-w-none text-[hsl(var(--black))]/80 space-y-6">
              <p>
                Une sortie scolaire nature en Île-de-France ne nécessite pas de partir au bout du monde. 
                Les parcs, forêts et même les trottoirs regorgent de plantes sauvages fascinantes. 
                Voici cinq espèces que vos élèves peuvent identifier facilement, avec des anecdotes 
                ethnobotaniques pour enrichir l'observation.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                1. Le Plantain lancéolé (Plantago lanceolata)
              </h2>
              <p>
                Présent partout — pelouses, bords de chemins, cours d'école —, le plantain lancéolé est l'une 
                des plantes médicinales les plus anciennes d'Europe. Ses feuilles froissées apaisent les piqûres 
                d'insectes, un usage que les enfants adorent tester sur le terrain. En SVT, il illustre 
                parfaitement l'adaptation des plantes aux milieux piétinés.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                2. La Grande Ortie (Urtica dioica)
              </h2>
              <p>
                Redoutée pour ses poils urticants, l'ortie est pourtant une plante extraordinaire. 
                Riche en fer et en protéines, elle a été utilisée pour fabriquer des textiles avant le coton. 
                Lors d'une sortie pédagogique plantes sauvages, elle permet d'aborder les défenses des 
                végétaux, les chaînes alimentaires (elle nourrit les chenilles de papillons) et l'histoire 
                textile pré-industrielle.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                3. Le Lierre terrestre (Glechoma hederacea)
              </h2>
              <p>
                Cette petite plante rampante aux fleurs violettes tapisse les sous-bois et les jardins. 
                Elle était utilisée dans le brassage de la bière avant le houblon. Son odeur mentholée 
                caractéristique en fait un excellent support pour un atelier d'identification sensorielle 
                — les élèves l'identifient les yeux fermés.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                4. Le Pissenlit (Taraxacum officinale)
              </h2>
              <p>
                Tout le monde connaît le pissenlit, mais peu savent qu'il illustre des concepts de SVT 
                essentiels : la dissémination des graines par le vent (anémochorie), la symbiose avec 
                les pollinisateurs, et la capacité des plantes pionnières à coloniser des milieux dégradés. 
                Son latex blanc peut même servir de base pour des expériences sur la chimie végétale.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                5. La Pâquerette (Bellis perennis)
              </h2>
              <p>
                Présente dans toutes les pelouses d'Île-de-France, la pâquerette est un excellent point 
                d'entrée pour étudier la structure florale. Ce que l'on prend pour une « fleur » est en 
                réalité un capitule composé de dizaines de petites fleurs — une découverte qui émerveille 
                systématiquement les élèves de collège. Elle permet aussi d'aborder les rythmes biologiques : 
                elle s'ouvre le jour et se referme la nuit.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                Organiser votre sortie
              </h2>
              <p>
                Pour transformer cette identification en véritable sortie scolaire botanique dans les Yvelines (78) 
                ou ailleurs en Île-de-France, Botanique Ludique propose des balades botaniques guidées adaptées 
                aux programmes scolaires. L'animatrice fournit les loupes, les clés d'identification et un 
                carnet de terrain pour chaque élève.
              </p>

              <div className="border-brutal bg-[hsl(var(--green-pale))] p-8 mt-10">
                <h3 className="font-display text-lg uppercase text-[hsl(var(--black))] mb-3">Organiser une sortie botanique</h3>
                <p className="text-sm text-[hsl(var(--black))]/70 mb-4">
                  Découvrez nos <Link to="/etablissements-scolaires" className="underline text-[hsl(var(--olive))]">interventions pour collèges et lycées</Link> ou 
                  explorez la <Link to="/#mediation" className="underline text-[hsl(var(--olive))]">section médiation et balades botaniques</Link>.
                </p>
                <Link
                  to="/contact"
                  className="btn-brutal bg-[hsl(var(--olive))] text-[hsl(var(--cream))] border-[hsl(var(--black))] inline-flex items-center gap-2"
                >
                  Réserver une sortie <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </article>

      <BackToTop />
      <Footer />
    </div>
  );
};

export default BlogPlantesSauvagesSortie;
