import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import BackToTop from "@/components/BackToTop";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const BlogBotaniqueCollege = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SEO
        title="Comment intégrer la botanique dans un projet pédagogique de collège — Botanique Ludique"
        description="Guide pratique pour enseignants : intégrer la botanique dans un projet pédagogique de collège. Liens avec les programmes SVT, EMC. Exemples concrets en Île-de-France."
        keywords="botanique collège, projet pédagogique SVT, atelier botanique scolaire, intervention pédagogique botanique"
        canonical="/blog/botanique-projet-pedagogique-college"
      />
      <SchemaOrg
        type="Article"
        data={{
          headline: "Comment intégrer la botanique dans un projet pédagogique de collège",
          description: "Guide pratique pour enseignants : intégrer la botanique dans un projet pédagogique de collège.",
          datePublished: "2026-03-20",
          slug: "botanique-projet-pedagogique-college",
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        data={{ items: [
          { name: "Accueil", url: "https://botaniqueludique.com/" },
          { name: "Blog", url: "https://botaniqueludique.com/blog" },
          { name: "Botanique et projet pédagogique", url: "https://botaniqueludique.com/blog/botanique-projet-pedagogique-college" }
        ]}}
      />
      <Navigation />

      <article className="pt-32 pb-20 px-6 md:px-16 lg:px-[120px]">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-5">Ressources pédagogiques</span>
            <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.95] tracking-[-2px] text-[hsl(var(--black))] mb-8">
              Comment intégrer la botanique dans un projet pédagogique de collège
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="prose prose-lg max-w-none text-[hsl(var(--black))]/80 space-y-6">
              <p>
                La botanique est un levier pédagogique puissant et pourtant sous-exploité dans les collèges. 
                Au croisement des sciences du vivant, de la géographie et de l'éducation morale et civique, 
                elle offre un terrain concret pour aborder des notions abstraites comme la biodiversité, 
                les écosystèmes ou le développement durable.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                Pourquoi la botanique au collège ?
              </h2>
              <p>
                Les programmes de SVT au cycle 4 (5e-3e) incluent explicitement l'étude de la biodiversité, 
                des interactions entre espèces et des écosystèmes. Un <strong>atelier botanique au collège</strong> permet 
                de concrétiser ces notions. Plutôt que d'étudier un schéma de photosynthèse dans un manuel, 
                les élèves manipulent des plantes vivantes, observent des racines, identifient des espèces 
                dans leur environnement immédiat.
              </p>
              <p>
                L'approche ethnobotanique ajoute une dimension culturelle : les élèves découvrent comment 
                différentes sociétés utilisent les plantes pour se soigner, se nourrir, teindre des textiles 
                ou construire. Cette interdisciplinarité naturelle permet de croiser SVT, histoire-géographie 
                et arts plastiques dans un même projet.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                Trois formats d'intervention
              </h2>
              <p>
                <strong>1. L'atelier en classe (1h30-2h)</strong> : une intervention pédagogique botanique 
                avec présentation théorique et création pratique (teinture végétale, kokedama, herbier scientifique). 
                Chaque élève repart avec sa création.
              </p>
              <p>
                <strong>2. La sortie terrain (demi-journée)</strong> : une sortie scolaire nature dans les Yvelines 
                ou en forêt francilienne. Identification de plantes, collecte pour herbier, observation des 
                interactions entre espèces.
              </p>
              <p>
                <strong>3. Le cycle pluridisciplinaire (3-6 séances)</strong> : un programme sur plusieurs 
                semaines intégrant SVT, EMC et arts. Les élèves produisent un livret, une exposition ou 
                une restitution orale.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                Liens avec les programmes officiels
              </h2>
              <p>
                En SVT, la botanique couvre les thèmes « Le vivant et son évolution » et « La planète Terre, 
                l'environnement et l'action humaine ». En EMC, elle nourrit les discussions sur la responsabilité 
                environnementale. En géographie, elle illustre les enjeux d'aménagement du territoire et 
                d'agriculture durable.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                Financer son projet
              </h2>
              <p>
                Plusieurs dispositifs existent : le Fonds citoyen, les conventions avec la Région Île-de-France, 
                les budgets communaux dédiés à l'éducation à l'environnement, ou tout simplement le budget 
                de la coopérative scolaire. N'hésitez pas à nous contacter pour un devis adapté à votre budget.
              </p>

              <div className="border-brutal bg-[hsl(var(--green-pale))] p-8 mt-10">
                <h3 className="font-display text-lg uppercase text-[hsl(var(--black))] mb-3">Vous êtes enseignant ou CPE ?</h3>
                <p className="text-sm text-[hsl(var(--black))]/70 mb-4">
                  Consultez notre <Link to="/etablissements-scolaires" className="underline text-[hsl(var(--olive))]">page dédiée aux établissements scolaires</Link> ou 
                  découvrez nos <Link to="/workshops" className="underline text-[hsl(var(--olive))]">ateliers botaniques</Link>.
                </p>
                <Link
                  to="/contact"
                  className="btn-brutal bg-[hsl(var(--olive))] text-[hsl(var(--cream))] border-[hsl(var(--black))] inline-flex items-center gap-2"
                >
                  Demander un devis <ArrowRight className="w-4 h-4" />
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

export default BlogBotaniqueCollege;
