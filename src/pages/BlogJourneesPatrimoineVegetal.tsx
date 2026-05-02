import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import BackToTop from "@/components/BackToTop";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const BlogJourneesPatrimoineVegetal = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SEO
        title="Journées du Patrimoine, idées d'animations végétales pour collectivités"
        description="Cinq idées d'animations botaniques pour les Journées Européennes du Patrimoine. Balade dans les parcs historiques, conférence sur les jardins, atelier herbier, médiation."
        keywords="journées européennes du patrimoine animation, JEP mairie programme, patrimoine végétal jardin historique, animation parc patrimonial, conférence jardin historique"
        canonical="/blog/journees-patrimoine-animations-vegetales"
      />
      <SchemaOrg
        type="Article"
        data={{
          headline: "Journées du Patrimoine, idées d'animations végétales pour collectivités",
          description: "Cinq idées d'animations botaniques pour les Journées Européennes du Patrimoine.",
          datePublished: "2026-04-05",
          slug: "journees-patrimoine-animations-vegetales",
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        data={{ items: [
          { name: "Accueil", url: "https://botaniqueludique.com/" },
          { name: "Blog", url: "https://botaniqueludique.com/blog" },
          { name: "Journées du Patrimoine", url: "https://botaniqueludique.com/blog/journees-patrimoine-animations-vegetales" }
        ]}}
      />
      <Navigation />

      <article className="pt-32 pb-20 px-6 md:px-16 lg:px-[120px]">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-5">Ressources collectivités</span>
            <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.95] tracking-[-2px] text-[hsl(var(--black))] mb-8">
              Journées du Patrimoine, idées d'animations végétales
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="prose prose-lg max-w-none text-[hsl(var(--black))]/80 space-y-6">
              <p>
                Le patrimoine ne se limite pas aux pierres. Jardins historiques, alignements d'arbres, rosiers anciens, vergers conservatoires,
                serres municipales : le végétal raconte une histoire dense, souvent méconnue. Les Journées Européennes du Patrimoine,
                qui se tiennent chaque troisième week-end de septembre, sont l'occasion idéale de la mettre en lumière.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                1. La balade botanique dans un parc historique
              </h2>
              <p>
                Un parc municipal, un jardin de presbytère, une ancienne propriété bourgeoise : ces espaces conservent souvent des essences plantées
                il y a un siècle ou plus. Une balade guidée, deux heures, format trente personnes maximum, permet de relier l'histoire des plantations
                à celle de la commune. Très demandée, à proposer sur inscription.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                2. La conférence sur l'histoire d'un jardin local
              </h2>
              <p>
                Format médiathèque ou salle municipale, une heure et demie, ouvert à tous. La conférence peut s'appuyer sur un fonds documentaire local
                et sur des recherches archivistiques. Des sujets comme l'arrivée des palmiers à Paris, l'invention du jardin paysager,
                ou l'histoire des jardins ouvriers de votre commune fonctionnent particulièrement bien.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                3. L'atelier herbier patrimonial
              </h2>
              <p>
                En atelier, les participants composent leur propre herbier à partir de plantes récoltées sur place. La médiation associe
                la technique de l'herbier (pliage, séchage, étiquetage) à l'histoire des grands botanistes français : Tournefort, Lamarck, Adanson.
                Format adapté aux familles comme aux adultes curieux.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                4. La visite des serres municipales
              </h2>
              <p>
                De nombreuses communes possèdent encore des serres techniques héritées du XIXe siècle, peu visitées le reste de l'année.
                Ouvrir ces serres pour un week-end, accompagné d'un médiateur botanique, attire un public curieux et valorise le travail
                des jardiniers municipaux.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                5. Le cyanotype végétal et la mémoire des plantes
              </h2>
              <p>
                Procédé photographique inventé en 1842, le cyanotype permet de fixer la silhouette d'une plante sur du papier sensibilisé.
                C'est un atelier patrimonial autant que créatif. Les participants repartent avec une œuvre unique et une nouvelle attention
                portée aux feuillages communs.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                Anticiper et conventionner
              </h2>
              <p>
                Les JEP sont annoncées chaque été, mais leur préparation se fait dès le printemps. Pour une animation extérieure,
                une convention avec la mairie ou le service du patrimoine est indispensable. Pensez à intégrer l'animation dans le programme officiel
                déposé sur la plateforme du Ministère de la Culture, qui apporte une visibilité nationale.
              </p>

              <p className="text-base text-[hsl(var(--black))]/70 italic mt-8">
                Botanique Ludique conçoit et anime des médiations patrimoniales végétales pour les communes d'Île-de-France :
                balades historiques, conférences, ateliers en serre. Sur devis, conventionnement public.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="mt-16 border-t-[3px] border-[hsl(var(--black))] pt-10">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[hsl(var(--black))] text-[hsl(var(--cream))] px-8 py-4 font-mono-brand text-sm uppercase tracking-[2px] border-[3px] border-[hsl(var(--black))] hover:bg-[hsl(var(--cream))] hover:text-[hsl(var(--black))] transition-colors">
                Préparer les JEP 2026 <ArrowRight className="w-4 h-4" />
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

export default BlogJourneesPatrimoineVegetal;
