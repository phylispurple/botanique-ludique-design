import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import BackToTop from "@/components/BackToTop";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const BlogMediationScientifique = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SEO
        title="Qu'est-ce que la médiation scientifique ? Définition et exemples — Botanique Ludique"
        description="Définition de la médiation scientifique, ses objectifs et des exemples concrets en botanique. Vulgarisation, conférences, ateliers nature pour le grand public."
        keywords="médiation scientifique définition, vulgarisation scientifique, médiation botanique, conférence scientifique grand public"
        canonical="/blog/mediation-scientifique-definition-exemples"
      />
      <SchemaOrg
        type="Article"
        data={{
          headline: "Qu'est-ce que la médiation scientifique ? Définition et exemples",
          description: "Définition et exemples concrets de médiation scientifique en botanique.",
          datePublished: "2026-03-15",
          slug: "mediation-scientifique-definition-exemples",
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        data={{ items: [
          { name: "Accueil", url: "https://botaniqueludique.com/" },
          { name: "Blog", url: "https://botaniqueludique.com/blog" },
          { name: "Médiation scientifique", url: "https://botaniqueludique.com/blog/mediation-scientifique-definition-exemples" }
        ]}}
      />
      <Navigation />

      <article className="pt-32 pb-20 px-6 md:px-16 lg:px-[120px]">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-5">Ressources</span>
            <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.95] tracking-[-2px] text-[hsl(var(--black))] mb-8">
              Qu'est-ce que la médiation scientifique ? Définition et exemples
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="prose prose-lg max-w-none text-[hsl(var(--black))]/80 space-y-6">
              <p>
                La médiation scientifique désigne l'ensemble des actions qui visent à rendre les savoirs 
                scientifiques accessibles au grand public. Elle ne se limite pas à la vulgarisation : 
                elle implique un véritable dialogue entre les chercheurs, les artistes et les publics, 
                dans une démarche de transmission et d'appropriation des connaissances.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                Définition et objectifs
              </h2>
              <p>
                Là où la vulgarisation scientifique se concentre sur la simplification d'un savoir 
                (articles, vidéos, réseaux sociaux), la médiation scientifique va plus loin. Elle crée 
                des situations d'échange où le public n'est pas simple récepteur mais participant actif. 
                Un atelier de teinture végétale, par exemple, est un acte de médiation : les participants 
                découvrent la chimie des pigments, l'histoire des plantes tinctoriales et les enjeux 
                écologiques du textile — tout en fabriquant quelque chose de leurs mains.
              </p>
              <p>
                Les objectifs de la médiation scientifique sont multiples : développer l'esprit critique, 
                susciter la curiosité, faire comprendre les enjeux environnementaux contemporains, 
                et créer du lien entre le monde de la recherche et la société civile.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                La médiation scientifique en botanique
              </h2>
              <p>
                En botanique, la médiation prend des formes variées. Chez Botanique Ludique, nous 
                pratiquons une médiation scientifique scolaire et grand public qui s'appuie sur 
                l'ethnobotanique — l'étude des relations entre les plantes et les sociétés humaines.
              </p>
              <p>
                Concrètement, cela se traduit par :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Des conférences</strong> avec des chercheurs et artistes sur l'écologie, la biodiversité et l'anthropologie du vivant — une forme de conférence botanique en Île-de-France accessible à tous.</li>
                <li><strong>Des ateliers pratiques</strong> où la création manuelle (kokedama, terrarium, teinture végétale) est un prétexte pour transmettre des savoirs scientifiques et culturels.</li>
                <li><strong>Des balades botaniques guidées</strong> dans les Yvelines, à Paris et en Île-de-France, pour apprendre à identifier les plantes dans leur milieu.</li>
                <li><strong>De la vulgarisation scientifique sur les réseaux sociaux</strong>, avec des contenus qui déconstruisent nos idées reçues sur le monde végétal.</li>
              </ul>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                Exemples concrets
              </h2>
              <p>
                <strong>En milieu scolaire</strong> : une intervention sur les espèces exotiques envahissantes 
                en classe de 5e, où les élèves identifient les plantes invasives de leur quartier et comprennent 
                les mécanismes de colonisation biologique.
              </p>
              <p>
                <strong>En entreprise</strong> : un atelier nature entreprise sous forme de team building 
                botanique, où les collaborateurs créent ensemble un terrarium tout en découvrant les 
                écosystèmes miniatures.
              </p>
              <p>
                <strong>Pour le grand public</strong> : une balade botanique guidée dans les Yvelines qui 
                mêle identification de plantes, anecdotes historiques et sensibilisation à la biodiversité locale.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                Pourquoi c'est important
              </h2>
              <p>
                À l'heure du changement climatique et de l'effondrement de la biodiversité, la médiation 
                scientifique est plus nécessaire que jamais. Elle permet aux citoyens de comprendre les 
                enjeux, de s'en emparer et d'agir à leur échelle. Elle forme aussi le regard : après 
                une balade botanique, on ne regarde plus un trottoir ou une forêt de la même façon.
              </p>

              <div className="border-brutal bg-[hsl(var(--green-pale))] p-8 mt-10">
                <h3 className="font-display text-lg uppercase text-[hsl(var(--black))] mb-3">Envie de médiation scientifique ?</h3>
                <p className="text-sm text-[hsl(var(--black))]/70 mb-4">
                  Découvrez nos <Link to="/#mediation" className="underline text-[hsl(var(--olive))]">conférences et balades botaniques</Link>, 
                  nos <Link to="/workshops" className="underline text-[hsl(var(--olive))]">ateliers de médiation par la pratique</Link>, 
                  ou nos <Link to="/etablissements-scolaires" className="underline text-[hsl(var(--olive))]">interventions pédagogiques pour collèges et lycées</Link>.
                </p>
                <Link
                  to="/contact"
                  className="btn-brutal bg-[hsl(var(--olive))] text-[hsl(var(--cream))] border-[hsl(var(--black))] inline-flex items-center gap-2"
                >
                  Nous contacter <ArrowRight className="w-4 h-4" />
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

export default BlogMediationScientifique;
