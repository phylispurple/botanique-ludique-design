import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { PenLine, CalendarDays, Lock, Sprout } from "lucide-react";

const cards = [
  {
    icon: PenLine,
    title: "Adhésion en ligne",
    desc: "L'adhésion est incluse dans le tarif de votre première activité, ou gratuite sur simple inscription. Elle vous donne accès aux tarifs préférentiels, à la programmation en avant-première, aux événements réservés aux membres et à l'espace communautaire.",
    link: "/contact",
    linkText: "À venir",
    disabled: true,
  },
  {
    icon: CalendarDays,
    title: "Agenda & Événements",
    desc: "Balades botaniques, sorties nature, ateliers ouverts, conférences, projections, concerts autour des musiques et pratiques culturelles liés au monde végétal et aux savoirs autochtones.",
    link: "/workshops",
    linkText: "À venir",
    disabled: true,
  },
  {
    icon: Lock,
    title: "Espace Membres",
    desc: "Ressources réservées : comptes-rendus, photos des sorties, fiches botaniques, documents de l'association. Accès à un espace d'échange pour proposer des projets et s'impliquer dans la vie associative.",
    link: "/association",
    linkText: "À venir",
    disabled: true,
  },
  {
    icon: Sprout,
    title: "Notre Mission",
    desc: "Financer l'intervention de chercheurs et d'artistes méconnus, rendre accessibles des disciplines souvent réservées au milieu académique, et contribuer à une meilleure rémunération du secteur de la recherche.",
    link: "/association",
    linkText: "En savoir plus →",
    disabled: false,
  },
];

const bureau = [
  { name: "Vanessa Charlery", role: "Présidente" },
  { name: "Benjamin Riou", role: "Secrétaire" },
];

const AssociationSection = () => {
  return (
    <section>
      {/* Purple top */}
      <div className="bg-[hsl(280_33%_36%)] text-white py-20 px-6 md:px-16 lg:px-[120px] relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute -top-20 -right-16 w-[400px] h-[400px] bg-white/5 rounded-full pointer-events-none" />

        <AnimatedSection>
          <span className="section-label block mb-4 text-white/50">
            Association loi 1901 · Le Pecq (78230)
          </span>
          <h2 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] uppercase leading-[0.95] tracking-[-2px] text-white mb-4">
            L'Asso­ciation
          </h2>
          <p className="font-mono-brand text-[15px] max-w-[540px] text-white/80 leading-[1.7] mb-4">
            L'association Botanique Ludique a une mission distincte des ateliers : financer et rémunérer des chercheurs, artistes et praticiens dont les disciplines — ethnobotanique, anthropologie, teinture végétale — restent souvent méconnues ou inaccessibles au grand public.
          </p>
          <p className="font-mono-brand text-[15px] max-w-[540px] text-white/80 leading-[1.7] mb-12">
            En soutenant ces intervenants, nous contribuons à la reconnaissance de savoirs précieux et à une meilleure rémunération d'un secteur de la recherche trop souvent précaire.
          </p>
        </AnimatedSection>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-0 relative z-10">
          {cards.map((card, idx) => (
            <AnimatedSection key={idx} delay={idx * 100} className="h-full">
              <div className="h-full p-12 border-2 border-white/15 -mt-px -ml-px transition-all duration-300 hover:bg-white/[0.08] group flex flex-col">
                <card.icon className="w-8 h-8 text-[hsl(48_76%_65%)] mb-5" strokeWidth={1.5} />
                <h3 className="font-display text-[22px] uppercase mb-3 text-white">
                  {card.title}
                </h3>
                <p className="text-sm leading-[1.7] text-white/75 text-justify flex-1">
                  {card.desc}
                </p>
                {card.disabled ? (
                  <span className="inline-flex items-center gap-2 mt-4 font-display text-xs uppercase tracking-[2px] text-white/40">
                    {card.linkText}
                  </span>
                ) : (
                  <Link
                    to={card.link}
                    className="inline-flex items-center gap-2 mt-4 font-display text-xs uppercase tracking-[2px] text-[hsl(48_76%_65%)] no-underline group-hover:gap-4 transition-all duration-300"
                  >
                    {card.linkText}
                  </Link>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bureau bar */}
        <div className="bg-white/[0.06] py-7 px-6 md:px-10 flex flex-wrap items-center gap-6 md:gap-10 border-t border-white/[0.12] mt-0">
          <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-white/40 flex-shrink-0">
            Bureau
          </span>
          <div className="flex flex-wrap gap-6">
            {bureau.map((member, idx) => (
              <div key={idx} className="flex flex-col">
                <strong className="font-display text-sm uppercase text-white">
                  {member.name}
                </strong>
                <span className="font-mono-brand text-[10px] text-white/50 uppercase tracking-[1px]">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Yellow CTA bar */}
      <div className="bg-[hsl(54_92%_51%)] py-7 px-6 md:px-16 lg:px-[120px] flex flex-col md:flex-row items-center justify-between gap-5">
        <h3 className="font-display text-xl md:text-[26px] uppercase text-[hsl(var(--black))]">
          Envie de nous rejoindre ?
        </h3>
        <Link
          to="/association"
          className="btn-brutal bg-[hsl(280_33%_36%)] text-white border-[hsl(var(--black))] hover:bg-[hsl(var(--black))] hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_hsl(280_33%_36%)] text-sm px-9 py-4 flex-shrink-0"
        >
          Adhérer maintenant →
        </Link>
      </div>
    </section>
  );
};

export default AssociationSection;
