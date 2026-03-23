import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { GraduationCap, Sprout, Microscope, Landmark, Users, Building2, Leaf, Globe } from "lucide-react";

const conferences = [
  {
    num: "CONFÉRENCE",
    title: "Ethnobotanique & Anthropologie des plantes",
    desc: "Voyage au cœur des relations millénaires entre les humains et le monde végétal. Comment les cultures, de l'Asie à l'Europe, ont-elles utilisé, nommé et sacré les plantes ? Une lecture croisée entre sciences du vivant et sciences humaines.",
    tags: ["Musées", "Médiathèques", "Centres culturels", "Grand public"],
  },
  {
    num: "COURS & INTERVENTION",
    title: "Espèces Exotiques Envahissantes",
    desc: "Comprendre les dynamiques écologiques des plantes invasives et leurs enjeux pour la biodiversité locale. Un contenu pédagogique déjà expérimenté en milieu scolaire (collège), adaptable à différents niveaux et formats.",
    tags: ["Collèges & Lycées", "Associations environnementales", "Collectivités"],
  },
  {
    num: "ETHNOBOTANIQUE",
    title: "Plantes & Cultures du Monde",
    desc: "Un voyage ethnobotanique à travers les usages culturels, médicinaux et symboliques des plantes dans différentes sociétés. Instruments de musique végétaux, teintures ancestrales, pharmacopées traditionnelles — la diversité des savoirs autochtones liés au végétal.",
    tags: ["Universités", "Festivals scientifiques", "Institutions culturelles"],
  },
  {
    num: "VULGARISATION",
    title: "Rendre la Science Accessible",
    desc: "Médiation scientifique et vulgarisation de la botanique, de l'écologie et de l'ethnobotanique pour tous les publics. Une approche pratiquée sur les réseaux sociaux et adaptable en format conférence, atelier ou intervention media.",
    tags: ["Grand public", "Événements", "Médias", "Structures éducatives"],
  },
];

const balades = [
  {
    icon: Building2,
    title: "Botanique Urbaine",
    desc: "Découvrir les plantes qui poussent dans les interstices de la ville — trottoirs, friches, jardins partagés. Une exploration du vivant à deux pas de chez soi.",
    season: "Toute l'année · 2h · Tous publics",
  },
  {
    icon: Leaf,
    title: "Plantes Sauvages & Usages",
    desc: "Identifier les plantes comestibles, médicinales et tinctoriales dans la nature. Un regard ethnobotanique sur les savoirs populaires liés aux plantes sauvages.",
    season: "Printemps · Été · Demi-journée",
  },
  {
    icon: Globe,
    title: "Ethnobotanique de Terrain",
    desc: "Une balade pour comprendre les relations culturelles entre une société et ses plantes locales — histoire, usages, symboliques. Idéal pour les groupes curieux de sciences humaines.",
    season: "Sur demande · Adapté au groupe",
  },
];

const modules = [
  { icon: GraduationCap, label: "Intervention en classe", duration: "1h – 2h" },
  { icon: Sprout, label: "Journée pédagogique", duration: "Demi-journée ou journée" },
  { icon: Microscope, label: "Module pluridisciplinaire", duration: "Plusieurs séances" },
  { icon: Landmark, label: "Conférence institutionnelle", duration: "Sur mesure" },
  { icon: Users, label: "Atelier de médiation", duration: "Musées, médiathèques" },
];

const ConferencesSavoirs = () => {
  return (
    <section id="mediation" className="bg-[hsl(210_41%_24%)] text-[hsl(var(--cream))]">
      {/* Main content */}
      <div className="py-20 px-6 md:px-16 lg:px-[120px]">
        <AnimatedSection>
          <span className="section-label block mb-5" style={{ color: 'hsl(73 44% 67%)' }}>
            Expertise académique & médiation scientifique
          </span>
          <h2 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] uppercase leading-[0.95] tracking-[-2px] text-white mb-5">
            Conférences<br />& Savoirs
          </h2>
          <p className="text-lg leading-[1.7] text-white/80 max-w-[620px] mb-14 text-justify">
            Diplômée en anthropologie et spécialiste en ethnobotanique, Vanessa Charlery intervient auprès des institutions culturelles, éducatives et scientifiques pour des conférences, cours et interventions sur mesure.
          </p>
        </AnimatedSection>

        {/* Conference cards grid */}
        <div className="grid md:grid-cols-2 gap-0">
          {conferences.map((conf, idx) => (
            <AnimatedSection key={idx} delay={idx * 100} className="h-full">
              <div className="h-full p-10 md:p-11 border border-white/[0.12] -mt-px -ml-px relative overflow-hidden group transition-colors duration-300 hover:bg-white/5 flex flex-col">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[hsl(73_44%_67%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="font-mono-brand text-[10px] tracking-[3px] text-[hsl(73_44%_67%)] mb-4 block">
                  {conf.num}
                </span>
                <h3 className="font-display text-xl md:text-[22px] uppercase leading-[1.05] mb-3.5 text-white">
                  {conf.title}
                </h3>
                <p className="text-sm leading-[1.7] text-white/70 mb-5 text-justify flex-1">
                  {conf.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {conf.tags.map(tag => (
                    <span
                      key={tag}
                      className="font-mono-brand text-[9px] uppercase tracking-[1.5px] px-2.5 py-1 border border-white/25 text-white/60 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Balades botaniques */}
        <div className="border-t border-white/[0.12] pt-16 mt-0">
          <AnimatedSection>
            <span className="section-label block mb-4" style={{ color: 'hsl(73 44% 67%)' }}>
              Sorties nature & exploration
            </span>
            <h3 className="font-display text-[clamp(2rem,5vw,4.5rem)] uppercase leading-[0.95] tracking-[-2px] text-white mb-4">
              Balades<br />Botaniques
            </h3>
            <p className="text-base text-white/70 max-w-[560px] leading-[1.7] mb-12">
              Des sorties guidées pour observer, identifier et comprendre les plantes dans leur milieu naturel ou urbain. Chaque balade est une invitation à redécouvrir notre environnement végétal.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-0">
            {balades.map((balade, idx) => (
              <AnimatedSection key={idx} delay={idx * 120}>
                <div className="p-9 border border-white/10 -mt-px -ml-px transition-colors duration-300 hover:bg-white/[0.06]">
                  <balade.icon className="w-7 h-7 text-[hsl(73_44%_67%)] mb-4" strokeWidth={1.5} />
                  <h3 className="font-display text-lg uppercase mb-2.5 text-white leading-[1.15]">
                    {balade.title}
                  </h3>
                  <p className="text-[13px] leading-[1.6] text-white/60 text-justify">
                    {balade.desc}
                  </p>
                  <span className="inline-block mt-3.5 font-mono-brand text-[9px] uppercase tracking-[2px] text-[hsl(73_44%_67%)]">
                    {balade.season}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Modules pédagogiques */}
        <div className="border-t border-white/[0.12] pt-14 mt-0 grid md:grid-cols-2 gap-12 items-center pb-14">
          <AnimatedSection direction="left">
            <div>
              <span className="section-label block mb-3" style={{ color: 'hsl(73 44% 67%)' }}>
                Pour les institutions
              </span>
              <h3 className="font-display text-3xl md:text-4xl uppercase leading-[0.95] mb-4 text-white">
                Modules Pédagogiques<br />Sur Mesure
              </h3>
              <p className="text-[15px] leading-[1.7] text-white/70 mb-6 text-justify">
                Des interventions adaptables en durée et en contenu, conçues pour s'intégrer dans vos programmes éducatifs, culturels ou de sensibilisation.
              </p>
              <Link
                to="/contact"
                className="btn-brutal bg-transparent text-white border-white/50 hover:bg-[hsl(var(--cream))] hover:text-[hsl(var(--black))] text-xs px-7 py-3 inline-flex"
              >
                Demander un devis →
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={150}>
            <div className="flex flex-col gap-3 mt-10 md:mt-0">
              {modules.map((mod, idx) => {
                const Icon = mod.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3.5 p-4 border border-white/10 hover:bg-white/5 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-[hsl(73_44%_67%)] flex-shrink-0" />
                    <span className="font-display text-[13px] uppercase tracking-[1px] text-white">
                      {mod.label}
                    </span>
                    <span className="text-xs text-white/50 font-mono-brand ml-auto">
                      {mod.duration}
                    </span>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* CTA bar */}
      <div className="bg-[hsl(var(--olive))] py-9 px-6 md:px-16 lg:px-[120px] flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-display text-xl md:text-[22px] uppercase text-[hsl(var(--black))]">
            Vous organisez un événement ou une journée pédagogique ?
          </h3>
          <p className="text-sm text-[hsl(var(--black))]/60 mt-1">
            Conférences, interventions scolaires, balades botaniques — discutons de votre projet.
          </p>
        </div>
        <Link
          to="/contact"
          className="btn-brutal bg-[hsl(var(--orange))] text-[hsl(var(--cream))] border-[hsl(var(--orange))] hover:bg-[hsl(var(--cream))] hover:text-[hsl(var(--black))] hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_hsl(var(--orange))] text-sm px-9 py-4 flex-shrink-0"
        >
          Nous écrire →
        </Link>
      </div>
    </section>
  );
};

export default ConferencesSavoirs;
