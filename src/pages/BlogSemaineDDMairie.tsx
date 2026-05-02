import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import BackToTop from "@/components/BackToTop";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const BlogSemaineDDMairie = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SEO
        title="Semaine du Développement Durable, 5 ateliers nature pour mairies"
        description="Cinq ateliers botaniques clé en main pour la Semaine Européenne du Développement Durable en mairie. Bombes à graines, teinture, kokedama, terrarium, conférences."
        keywords="semaine développement durable mairie, SEDD animation municipale, atelier biodiversité commune, animation écologie mairie, programme développement durable collectivité"
        canonical="/blog/semaine-developpement-durable-mairie"
      />
      <SchemaOrg
        type="Article"
        data={{
          headline: "Semaine du Développement Durable en mairie, 5 ateliers clé en main",
          description: "Cinq ateliers botaniques clé en main pour la Semaine Européenne du Développement Durable en mairie.",
          datePublished: "2026-04-03",
          slug: "semaine-developpement-durable-mairie",
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        data={{ items: [
          { name: "Accueil", url: "https://botaniqueludique.com/" },
          { name: "Blog", url: "https://botaniqueludique.com/blog" },
          { name: "Semaine DD en mairie", url: "https://botaniqueludique.com/blog/semaine-developpement-durable-mairie" }
        ]}}
      />
      <Navigation />

      <article className="pt-32 pb-20 px-6 md:px-16 lg:px-[120px]">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-5">Ressources collectivités</span>
            <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.95] tracking-[-2px] text-[hsl(var(--black))] mb-8">
              Semaine Européenne du Développement Durable, 5 ateliers en mairie
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="prose prose-lg max-w-none text-[hsl(var(--black))]/80 space-y-6">
              <p>
                La Semaine Européenne du Développement Durable, qui se tient chaque année du 18 septembre au 8 octobre,
                offre aux communes un cadre national pour mobiliser leurs habitants autour de la transition écologique.
                Voici cinq formats d'animations botaniques particulièrement adaptés aux contraintes municipales.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                1. Atelier bombes à graines
              </h2>
              <p>
                Format passe-partout, idéal en stand sur une place ou un marché. Argile, terreau, mélange de graines mellifères,
                les participants repartent avec leurs propres bombes à lancer dans des zones à reverdir.
                Format intergénérationnel, accessible à partir de cinq ans, jusqu'à 60 personnes par session de deux heures.
                Sensibilisation directe à la biodiversité urbaine et aux pollinisateurs.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                2. Atelier teinture végétale
              </h2>
              <p>
                Atelier qui allie créativité et message fort sur l'industrie textile. Les participants teignent un foulard ou un tote-bag
                avec des plantes tinctoriales locales, garance, gaude, indigo. Permet d'aborder les enjeux du fast fashion,
                la pollution chimique des cours d'eau et la richesse des savoirs traditionnels. Format en intérieur, deux heures, vingt personnes.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                3. Atelier kokedama
              </h2>
              <p>
                La sphère japonaise de mousse permet d'introduire les notions de jardinage sans pot, de plante d'intérieur résiliente
                et de design biomimétique. Apprécié des publics adultes et adolescents, format quinze personnes, deux heures.
                Chaque participant repart avec sa création, ce qui prolonge le geste éducatif à la maison.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                4. Atelier terrarium et écosystème
              </h2>
              <p>
                Le terrarium est un excellent prétexte pour parler d'écosystème fermé, de cycle de l'eau, de symbiose et de biodiversité miniature.
                L'atelier mêle pratique manuelle et médiation scientifique. Format quinze personnes, une heure et demie à deux heures.
                Particulièrement bien adapté aux médiathèques et aux centres sociaux.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                5. Conférence ethnobotanique
              </h2>
              <p>
                Pour clôturer la semaine en beauté, une conférence d'une heure trente sur un thème porteur :
                « les plantes et le colonialisme », « histoire des jardins ouvriers », « la végétalisation des villes ».
                Format médiathèque, salle municipale, foyer rural, public adulte ou mixte adolescent et adulte.
                Permet à votre programmation de gagner en profondeur intellectuelle.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                Combiner les formats pour une semaine entière
              </h2>
              <p>
                Pour une commune ambitieuse, l'idéal est de combiner deux ou trois formats sur la semaine : un stand grand public le samedi,
                un atelier sur inscription en milieu de semaine, une conférence en soirée. Ce trio touche des publics différents et donne
                à la programmation une vraie densité, valorisable auprès des financeurs et de la presse locale.
              </p>

              <p className="text-base text-[hsl(var(--black))]/70 italic mt-8">
                Botanique Ludique propose ces cinq formats clé en main pour la SEDD, dans toutes les communes d'Île-de-France.
                Matériel inclus, médiatrice diplômée EHESS, devis sous deux jours.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="mt-16 border-t-[3px] border-[hsl(var(--black))] pt-10">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[hsl(var(--black))] text-[hsl(var(--cream))] px-8 py-4 font-mono-brand text-sm uppercase tracking-[2px] border-[3px] border-[hsl(var(--black))] hover:bg-[hsl(var(--cream))] hover:text-[hsl(var(--black))] transition-colors">
                Programmer une SEDD <ArrowRight className="w-4 h-4" />
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

export default BlogSemaineDDMairie;
