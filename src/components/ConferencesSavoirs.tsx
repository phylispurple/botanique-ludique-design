import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { GraduationCap, Sprout, Microscope, Landmark, Users, BookOpen, Compass, TreePine, ArrowUpRight } from "lucide-react";

const conferences = [
  {
    num: "ANGLE SIGNATURE",
    title: "Plantes Voyageuses, Histoires Oubliées",
    desc: "Le café que vous buvez, le palmier de votre quartier, la fougère dans votre salon : chaque plante porte une histoire de circulation, de pouvoir et de savoirs effacés. Une lecture décoloniale et anthropologique du végétal qui croise Hélène Blais, Anna Tsing et Samir Boumediene. Conçue pour les institutions qui veulent proposer un récit complémentaire, exigeant et accessible.",
    tags: ["Musées", "Jardins botaniques", "Médiathèques", "Universités"],
  },
  {
    num: "HISTOIRE & GENRE",
    title: "Femmes, Fougères & Pouvoir",
    desc: "Comment la Pteridomanie victorienne a ouvert aux femmes leur seul accès à la science, avant d'être pathologisée par les hommes en « manie ». Une plongée dans l'histoire genrée de la botanique, des chasseuses de plantes oubliées à Jeanne Barret, première femme circumnavigatrice. Une conférence qui éclaire comment les savoirs scientifiques ont été genrés et invisibilisés.",
    tags: ["Musées", "Festivals d'idées", "Universités", "Médiathèques"],
  },
  {
    num: "ANTHROPOLOGIE",
    title: "Penser Avec les Plantes",
    desc: "Et si on pensait les plantes autrement ? À partir des travaux de Philippe Descola sur le naturalisme et l'animisme, une réflexion sur les manières non occidentales de concevoir le vivant. Comment les savoirs autochtones, des Kanaks de Nouvelle-Calédonie aux peuples amazoniens, nous invitent à reconsidérer notre rapport aux plantes à l'heure de l'effondrement de la biodiversité.",
    tags: ["Institutions culturelles", "Universités", "Festivals scientifiques"],
  },
  {
    num: "JARDINS BOTANIQUES",
    title: "Lire un Jardin Comme une Archive",
    desc: "Visites guidées et balades ethnobotaniques dans les jardins botaniques, parcs historiques et serres patrimoniales d'Île-de-France. Chaque collection devient une entrée dans l'histoire coloniale, sociale et culturelle des plantes. Une médiation conçue en complément du discours botanique habituel, jamais en concurrence avec lui.",
    tags: ["Jardins remarquables", "Musées", "Parcs patrimoniaux", "Collectivités"],
  },
];

const balades = [
  {
    icon: TreePine,
    title: "Jardins Botaniques & Serres Patrimoniales",
    desc: "Une lecture historique et politique des grandes collections franciliennes : Serres d'Auteuil, Jardin des Plantes, École Du Breuil, Jardin d'agronomie tropicale de Vincennes. Chaque plante devient une archive vivante.",
    season: "Toute l'année · 1h à 2h · Sur réservation",
  },
  {
    icon: Compass,
    title: "Botanique Coloniale Urbaine",
    desc: "Une déambulation dans Paris pour décrypter ce que les palmiers, platanes, ginkgos et autres espèces plantées sous Haussmann racontent de l'histoire impériale française. Le végétal urbain comme document historique.",
    season: "Printemps · Été · Automne · 2h",
  },
  {
    icon: BookOpen,
    title: "Ethnobotanique & Savoirs Effacés",
    desc: "Une balade pensée comme une conférence en mouvement. Croiser anthropologie, histoire des sciences et études postcoloniales pour redonner voix aux savoirs autochtones et aux figures invisibilisées de la botanique mondiale.",
    season: "Sur demande · Adapté au groupe et au lieu",
  },
];

const modules = [
  { icon: Landmark, label: "Conférence pour institutions", duration: "1h à 1h30" },
  { icon: Compass, label: "Balade ethnobotanique guidée", duration: "1h à 2h" },
  { icon: BookOpen, label: "Cycle thématique", duration: "Plusieurs séances" },
  { icon: GraduationCap, label: "Intervention universitaire", duration: "Sur mesure" },
  { icon: Users, label: "Atelier de médiation pour équipes", duration: "Musées, médiathèques" },
];

const ConferencesSavoirs = () => {
  return (
    <section id="mediation" className="bg-[hsl(210_41%_24%)] text-[hsl(var(--cream))]">
      {/* Main content */}
      <div className="py-20 px-6 md:px-16 lg:px-[120px]">
        <AnimatedSection>
          <span className="section-label block mb-5" style={{ color: 'hsl(73 44% 67%)' }}>
            Médiation ethnobotanique pour institutions
          </span>
          <h2 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] uppercase leading-[0.95] tracking-[-2px] text-white mb-5">
            Conférences<br />& Savoirs
          </h2>
          <p className="text-lg leading-[1.7] text-white/80 max-w-[680px] mb-6 text-justify">
            Formée en anthropologie de la nature à l'EHESS sous la direction de Florence Brunois-Pasina, Vanessa Charlery propose aux institutions une médiation ethnobotanique qui prend les plantes au sérieux comme témoins de l'histoire. Une approche qui croise rigueur académique et pédagogie accessible, et qui mobilise les travaux contemporains en anthropologie de la nature, en histoire des sciences coloniales et en études de genre.
          </p>
          <p className="text-lg leading-[1.7] text-white/80 max-w-[680px] mb-6 text-justify">
            Il n'existe pas de meilleur témoin historique qu'une plante. Une plante porte en elle son origine géographique, les routes qu'elle a empruntées, les mains qui l'ont cultivée, les noms qu'on lui a donnés et ceux qu'on lui a effacés. Botanique Ludique propose aux musées, jardins botaniques, médiathèques et universités de raconter les plantes autrement : par leur histoire sociale, politique et culturelle, en complément du regard botanique classique.
          </p>
          <p className="text-sm leading-[1.7] text-white/60 max-w-[680px] mb-14 text-justify">
            Découvrez nos <Link to="/workshops" className="underline text-[hsl(73_44%_67%)] hover:text-white transition-colors">ateliers botaniques pour tous publics</Link> ou nos <Link to="/etablissements-scolaires" className="underline text-[hsl(73_44%_67%)] hover:text-white transition-colors">interventions pédagogiques pour établissements scolaires</Link>.
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
            <h3 className="font-display text-3xl md:text-4xl uppercase leading-[0.95] mb-4 text-white">
              Balades<br />Ethnobotaniques
            </h3>
            <p className="text-base text-white/70 max-w-[560px] leading-[1.7] mb-12">
              Des visites guidées qui transforment chaque jardin, chaque serre, chaque parc en une archive vivante. Une approche unique en Île-de-France qui croise botanique, anthropologie et histoire sociale du végétal, à destination des institutions culturelles et patrimoniales.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-0">
            {balades.map((balade, idx) => (
              <AnimatedSection key={idx} delay={idx * 120} className="h-full">
                <div className="h-full p-9 border border-white/10 -mt-px -ml-px transition-colors duration-300 hover:bg-white/[0.06] flex flex-col">
                  <balade.icon className="w-7 h-7 text-[hsl(73_44%_67%)] mb-4" strokeWidth={1.5} />
                  <h3 className="font-display text-lg uppercase mb-2.5 text-white leading-[1.15]">
                    {balade.title}
                  </h3>
                  <p className="text-[13px] leading-[1.6] text-white/60 text-justify flex-1">
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
                Formats<br />d'Intervention
              </h3>
              <p className="text-[15px] leading-[1.7] text-white/70 mb-6 text-justify">
                Conférences, balades guidées, cycles thématiques, ateliers de médiation pour vos équipes : des formats modulables conçus pour s'intégrer dans votre programmation culturelle, scientifique ou patrimoniale. Chaque intervention est adaptée à votre lieu, à votre public et à vos collections.
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
                    <span className="text-xs text-white/75 font-mono-brand ml-auto">
                      {mod.duration}
                    </span>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Lectures associées — articles du blog */}
      <div className="border-t border-white/[0.12] px-6 md:px-16 lg:px-[120px] py-16">
        <AnimatedSection>
          <span className="section-label block mb-4" style={{ color: 'hsl(73 44% 67%)' }}>
            Pour aller plus loin
          </span>
          <h3 className="font-display text-3xl md:text-4xl uppercase leading-[0.95] mb-4 text-white">
            Lectures<br />Associées
          </h3>
          <p className="text-base text-white/70 max-w-[640px] leading-[1.7] mb-12">
            Une sélection d'articles qui prolongent nos conférences et balades : histoire coloniale du végétal, anthropologie des plantes et médiation scientifique.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
          {[
            {
              to: "/blog/balade-botanique-voisins-le-bretonneux",
              eyebrow: "Balade · Yvelines",
              title: "Voisins-le-Bretonneux : jardins, pouvoir et histoire coloniale",
              desc: "Lire un parc comme une archive vivante : roses, pouvoir et circulations végétales.",
            },
            {
              to: "/blog/monstera-colonialisme",
              eyebrow: "Anthropologie",
              title: "Monstera deliciosa : une plante d'intérieur née du colonialisme",
              desc: "Comment une liane d'Amérique centrale est devenue l'icône déco mondiale.",
            },
            {
              to: "/blog/palmiers-haussmann",
              eyebrow: "Histoire urbaine",
              title: "Palmiers, platanes, ginkgos : la botanique impériale d'Haussmann",
              desc: "Le végétal parisien comme document de l'histoire coloniale française.",
            },
            {
              to: "/blog/terrarium-biopiraterie",
              eyebrow: "Histoire des sciences",
              title: "Du terrarium à la biopiraterie : la caisse de Ward",
              desc: "Quand un bocal de verre a changé la géographie économique du monde.",
            },
            {
              to: "/blog/mediation-scientifique-definition-exemples",
              eyebrow: "Ressources",
              title: "Qu'est-ce que la médiation scientifique ? Définition et exemples",
              desc: "Vulgarisation, conférences, ateliers : panorama d'une pratique en plein essor.",
            },
            {
              to: "/blog",
              eyebrow: "Tous les articles",
              title: "Explorer le blog",
              desc: "Ethnobotanique, histoire des plantes, pédagogie : nos publications.",
            },
          ].map((art, idx) => (
            <AnimatedSection key={idx} delay={idx * 80} className="h-full">
              <Link
                to={art.to}
                className="h-full p-8 md:p-9 border border-white/[0.12] -mt-px -ml-px transition-colors duration-300 hover:bg-white/[0.06] flex flex-col group"
              >
                <div className="flex items-start justify-between mb-4 gap-3">
                  <span className="font-mono-brand text-[10px] tracking-[3px] uppercase text-[hsl(73_44%_67%)]">
                    {art.eyebrow}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[hsl(73_44%_67%)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
                <h4 className="font-display text-lg md:text-[19px] uppercase leading-[1.15] mb-3 text-white">
                  {art.title}
                </h4>
                <p className="text-[13px] leading-[1.65] text-white/60 text-justify flex-1">
                  {art.desc}
                </p>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <div className="bg-[hsl(var(--olive))] py-9 px-6 md:px-16 lg:px-[120px] flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-display text-xl md:text-[22px] uppercase text-[hsl(var(--black))]">
            Une institution, un projet, une programmation à construire ?
          </h3>
          <p className="text-sm text-[hsl(var(--black))]/60 mt-1">
            Conférences, balades ethnobotaniques, cycles thématiques — parlons de votre projet ensemble.
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
