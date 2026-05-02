import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import BackToTop from "@/components/BackToTop";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const BlogFinancerAnimationCCAS = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SEO
        title="Comment financer une animation nature en CCAS, guide 2026"
        description="Lignes budgétaires, dispositifs et conseils pratiques pour financer une animation botanique en CCAS. Action sociale, Conférence des financeurs, ARS, mutuelles, mécénat."
        keywords="financer animation CCAS, budget action sociale senior, conférence des financeurs, animation nature résidence autonomie, ARS prévention perte autonomie"
        canonical="/blog/financer-animation-nature-ccas"
      />
      <SchemaOrg
        type="Article"
        data={{
          headline: "Comment financer une animation nature en CCAS, guide 2026",
          description: "Guide pratique pour les CCAS qui souhaitent organiser des animations nature : lignes budgétaires, dispositifs publics, mécénat.",
          datePublished: "2026-04-10",
          slug: "financer-animation-nature-ccas",
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        data={{ items: [
          { name: "Accueil", url: "https://botaniqueludique.com/" },
          { name: "Blog", url: "https://botaniqueludique.com/blog" },
          { name: "Financer une animation CCAS", url: "https://botaniqueludique.com/blog/financer-animation-nature-ccas" }
        ]}}
      />
      <Navigation />

      <article className="pt-32 pb-20 px-6 md:px-16 lg:px-[120px]">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-5">Ressources collectivités</span>
            <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.95] tracking-[-2px] text-[hsl(var(--black))] mb-8">
              Comment financer une animation nature en CCAS
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="prose prose-lg max-w-none text-[hsl(var(--black))]/80 space-y-6">
              <p>
                Les Centres Communaux d'Action Sociale jouent un rôle clé dans la prévention de l'isolement des personnes âgées
                et l'animation des résidences autonomie. Mais le financement d'une animation nature, kokedama, terrarium, balade botanique,
                n'est pas toujours évident à monter. Voici un panorama des dispositifs mobilisables en 2026.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                1. Le budget propre du CCAS
              </h2>
              <p>
                La ligne « animation et lien social » du budget CCAS est la voie la plus directe. Elle finance les ateliers ponctuels
                ou récurrents en résidence autonomie, en accueil de jour ou pour les bénéficiaires du portage de repas.
                Les montants varient selon la taille de la commune, mais une animation botanique de deux heures pour quinze personnes
                entre généralement dans une enveloppe modeste, comparable à un atelier mémoire ou un loto.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                2. La Conférence des financeurs de la prévention de la perte d'autonomie
              </h2>
              <p>
                Pilotée par le Conseil départemental, la Conférence des financeurs lance chaque année des appels à projets pour des actions
                de prévention auprès des plus de 60 ans. Les animations nature s'inscrivent parfaitement dans les axes « lien social »
                et « stimulation cognitive ». Les CCAS peuvent répondre directement, ou s'associer à un porteur associatif comme Botanique Ludique.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                3. L'ARS Île-de-France et les CPOM
              </h2>
              <p>
                Pour les EHPAD et résidences autonomie publiques, les Contrats Pluriannuels d'Objectifs et de Moyens conclus avec l'ARS
                intègrent souvent des objectifs de qualité de vie et d'animation. Une convention avec un prestataire d'ateliers nature
                peut entrer dans ces objectifs et bénéficier de financements dédiés.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                4. Caisses de retraite et mutuelles
              </h2>
              <p>
                CARSAT, Agirc-Arrco, MSA, mutuelles seniors, plusieurs caisses financent des actions collectives de prévention,
                souvent dans le cadre de programmes pluriannuels. Les CCAS qui co-construisent avec ces partenaires multiplient leurs ressources
                et inscrivent les animations dans la durée.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                5. Mécénat local et fonds de dotation
              </h2>
              <p>
                Banques régionales, fondations d'entreprise, fonds de dotation territoriaux peuvent compléter un budget. Le mécénat
                en nature est aussi une piste : matériel végétal offert par une jardinerie locale, salle prêtée par une copropriété.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                Conseil pratique pour monter votre dossier
              </h2>
              <p>
                Privilégiez les programmes pluriannuels plutôt que les actions ponctuelles. Un cycle de quatre ou six séances réparties dans l'année
                est plus impactant pour les bénéficiaires et plus simple à valoriser auprès des financeurs. Documentez systématiquement chaque séance
                avec photos, témoignages et indicateurs de participation : ces données serviront vos demandes futures.
              </p>

              <p className="text-base text-[hsl(var(--black))]/70 italic mt-8">
                Botanique Ludique accompagne les CCAS d'Île-de-France dans la conception d'animations nature adaptées à leurs publics seniors.
                Statut associatif, facturation publique, intervention clé en main.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="mt-16 border-t-[3px] border-[hsl(var(--black))] pt-10">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[hsl(var(--black))] text-[hsl(var(--cream))] px-8 py-4 font-mono-brand text-sm uppercase tracking-[2px] border-[3px] border-[hsl(var(--black))] hover:bg-[hsl(var(--cream))] hover:text-[hsl(var(--black))] transition-colors">
                Demander un devis CCAS <ArrowRight className="w-4 h-4" />
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

export default BlogFinancerAnimationCCAS;
