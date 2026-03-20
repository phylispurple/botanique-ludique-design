import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { Leaf, Briefcase, ArrowRight } from "lucide-react";

const DualEntrySection = () => {
  return (
    <section className="py-0 border-y-[3px] border-[hsl(var(--black))]">
      <div className="grid md:grid-cols-2">
        {/* ASSOCIATION */}
        <Link
          to="/association"
          className="group relative p-12 md:p-16 bg-[hsl(var(--green-pale))] border-b-[3px] md:border-b-0 md:border-r-[3px] border-[hsl(var(--black))] no-underline transition-colors duration-300 hover:bg-[hsl(73,37%,44%)]/15"
        >
          <AnimatedSection direction="left">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 border-brutal flex items-center justify-center bg-[hsl(var(--cream))] flex-shrink-0">
                <Leaf className="w-5 h-5 text-[hsl(var(--olive))]" />
              </div>
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[3px] text-[hsl(var(--olive))]">Association loi 1901</span>
                <h2 className="font-display text-[clamp(1.5rem,4vw,2.5rem)] uppercase leading-[0.95] tracking-[-1px] text-[hsl(var(--black))]">
                  Botanique<br/>Ludique
                </h2>
              </div>
            </div>
            <p className="text-base leading-[1.8] text-[hsl(var(--black))]/70 mb-6 max-w-md">
              Médiation culturelle et scientifique autour du végétal. Ateliers ouverts à tous, 
              interventions en EHPAD, écoles, centres sociaux et balades botaniques.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Ateliers publics", "EHPAD", "Écoles", "Médiations", "Balades"].map(tag => (
                <span key={tag} className="font-mono text-[9px] uppercase tracking-[1.5px] px-3 py-1 border border-[hsl(var(--olive))]/30 text-[hsl(var(--olive))]">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[2px] text-[hsl(var(--olive))] group-hover:gap-3 transition-all">
              Découvrir l'association <ArrowRight size={14} />
            </div>
          </AnimatedSection>
        </Link>

        {/* PRESTATIONS INDÉPENDANTES */}
        <Link
          to="/pro"
          className="group relative p-12 md:p-16 bg-[hsl(var(--cream))] no-underline transition-colors duration-300 hover:bg-[hsl(13,76%,61%)]/8"
        >
          <AnimatedSection direction="right" delay={150}>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 border-brutal flex items-center justify-center bg-[hsl(var(--orange))]/10 flex-shrink-0">
                <Briefcase className="w-5 h-5 text-[hsl(var(--orange))]" />
              </div>
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[3px] text-[hsl(var(--orange))]">Vanessa Charlery · Indépendante</span>
                <h2 className="font-display text-[clamp(1.5rem,4vw,2.5rem)] uppercase leading-[0.95] tracking-[-1px] text-[hsl(var(--black))]">
                  Prestations<br/>Sur Mesure
                </h2>
              </div>
            </div>
            <p className="text-base leading-[1.8] text-[hsl(var(--black))]/70 mb-6 max-w-md">
              Ateliers nature pour entreprises, team building RSE, événements privés (EVJF, mariages), 
              conférences et interventions en tant qu'ethnobotaniste.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Team Building", "Séminaires", "EVJF", "Mariages", "Conférences"].map(tag => (
                <span key={tag} className="font-mono text-[9px] uppercase tracking-[1.5px] px-3 py-1 border border-[hsl(var(--orange))]/30 text-[hsl(var(--orange))]">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[2px] text-[hsl(var(--orange))] group-hover:gap-3 transition-all">
              Voir les prestations <ArrowRight size={14} />
            </div>
          </AnimatedSection>
        </Link>
      </div>
    </section>
  );
};

export default DualEntrySection;
