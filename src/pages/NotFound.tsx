import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight, Leaf, Briefcase, Calendar, Info, BookOpen, Mail, Compass } from "lucide-react";

const hubs = [
  {
    to: "/workshops",
    icon: Leaf,
    title: "Ateliers botaniques",
    desc: "Teinture végétale, kokedama, terrarium, herbier. Tous nos ateliers créatifs pour reconnecter l'humain au végétal.",
  },
  {
    to: "/pro",
    icon: Briefcase,
    title: "Pro & entreprises",
    desc: "Team building végétal, animations CSE, onboarding, événements corporate. Devis personnalisé.",
  },
  {
    to: "/team-building-rse-paris",
    icon: Compass,
    title: "Team building RSE",
    desc: "Cohésion d'équipe autour du végétal. Ateliers écoresponsables pour renforcer la collaboration.",
  },
  {
    to: "/ateliers-botaniques-yvelines",
    icon: Leaf,
    title: "Ateliers en Yvelines",
    desc: "Nos ateliers à Saint-Germain, Le Pecq, Rambouillet et dans tout le département.",
  },
  {
    to: "/blog",
    icon: BookOpen,
    title: "Blog",
    desc: "Botanique coloniale, plantes sauvages, patrimoine végétal. Articles ethnobotaniques.",
  },
  {
    to: "/agenda",
    icon: Calendar,
    title: "Agenda",
    desc: "Prochaines dates d'ateliers et événements. Inscrivez-vous en ligne.",
  },
  {
    to: "/about",
    icon: Info,
    title: "À propos",
    desc: "Notre approche, notre parcours et la philosophie de la médiation ethnobotanique.",
  },
  {
    to: "/contact",
    icon: Mail,
    title: "Contact",
    desc: "Une question, un projet sur mesure ? Écrivez-nous directement.",
  },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[hsl(var(--cream))] text-[hsl(var(--black))]">
      <SEO
        title="Page non trouvée"
        description="La page que vous recherchez n'existe pas. Retrouvez nos ateliers botaniques, team building et médiation végétale."
        canonical="/404"
      />
      <Navigation />

      <main className="pt-24">
        {/* Hero 404 */}
        <section className="border-b-[3px] border-[hsl(var(--black))] py-20 px-6 md:px-16 lg:px-[120px]">
          <AnimatedSection>
            <span className="font-mono-brand text-[11px] tracking-[3px] uppercase text-[hsl(var(--black))]/60 block mb-6">
              Erreur 404
            </span>
            <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] uppercase leading-[0.95] tracking-[-2px] mb-8 max-w-[1100px]">
              Cette page<br />n'existe pas
            </h1>
            <p className="text-lg leading-[1.7] max-w-[720px] text-[hsl(var(--black))]/80 mb-6">
              L'URL demandée n'a pas été trouvée. Peut-être a-t-elle été déplacée ou supprimée lors de la refonte du site.
            </p>
            <p className="text-base leading-[1.7] max-w-[720px] text-[hsl(var(--black))]/65">
              Voici nos pages principales pour poursuivre votre visite.
            </p>
          </AnimatedSection>
        </section>

        {/* Grille de liens */}
        <section className="px-6 md:px-16 lg:px-[120px] py-20">
          <AnimatedSection>
            <span className="font-mono-brand text-[11px] tracking-[3px] uppercase text-[hsl(var(--black))]/60 block mb-4">
              Explorer le site
            </span>
            <h2 className="font-display text-2xl md:text-4xl uppercase leading-[1] mb-14 max-w-[700px]">
              Nos hubs<br />principaux
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
            {hubs.map((h, idx) => {
              const Icon = h.icon;
              return (
                <AnimatedSection key={h.to} delay={idx * 80} className="h-full">
                  <Link
                    to={h.to}
                    className="group h-full p-8 md:p-10 border-[3px] border-[hsl(var(--black))] -mt-[3px] -ml-[3px] flex flex-col bg-[hsl(var(--cream))] hover:bg-[hsl(var(--black))] hover:text-[hsl(var(--cream))] transition-colors duration-200"
                  >
                    <Icon className="w-8 h-8 mb-6" strokeWidth={1.5} />
                    <h3 className="font-display text-xl md:text-[22px] uppercase leading-[1.1] mb-4">
                      {h.title}
                    </h3>
                    <p className="text-sm leading-[1.7] opacity-75 mb-6 flex-1">
                      {h.desc}
                    </p>
                    <span className="inline-flex items-center gap-2 font-mono-brand text-[11px] uppercase tracking-[2px] mt-auto">
                      Explorer <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </section>

        {/* CTA Contact */}
        <section className="bg-[hsl(var(--black))] text-[hsl(var(--cream))] py-14 px-6 md:px-16 lg:px-[120px]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-[640px]">
              <h3 className="font-display text-2xl md:text-3xl uppercase leading-[1.05] mb-3">
                Vous cherchiez quelque chose de spécifique ?
              </h3>
              <p className="text-sm leading-[1.7] opacity-75">
                Contactez-nous directement. Nous vous redirigerons vers la bonne page ou construirons ensemble une réponse à votre projet.
              </p>
            </div>
            <Link
              to="/contact"
              className="btn-brutal bg-[hsl(var(--cream))] text-[hsl(var(--black))] border-[hsl(var(--cream))] text-sm px-8 py-4 flex-shrink-0"
            >
              Nous écrire →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
