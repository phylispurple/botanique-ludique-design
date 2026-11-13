import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Calendar, MapPin, Landmark, Compass, BookOpen, GraduationCap, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";
import WaveDivider from "@/components/WaveDivider";
import TraitDessine from "@/components/TraitDessine";
import { SEO } from "@/components/SEO";
import { galet, galetPhoto, PASTILLE } from "@/lib/organic";
import imgEpices from "@/assets/atelier-epices-choiseul.webp";
import imgEpicesTable from "@/assets/gallery-atelier-epices-table.webp";
import imgTerrarium from "@/assets/gallery-terrarium.webp";
import imgTeinture from "@/assets/gallery-teinture-1.webp";
import imgKiosque from "@/assets/croix-du-bois-kiosque.jpg";
import imgVoisins from "@/assets/au-fil-jardins-voisins-affiche.jpeg";
import imgFemmes from "@/assets/affiche-femmes-botanique-breuil.webp";
import imgEee from "@/assets/gallery-college-eee-1.webp";
import imgEeeHerbier from "@/assets/gallery-college-eee-2.webp";
import imgEeeTerrain from "@/assets/gallery-forest-walk.webp";
import imgPissenlit from "@/assets/planche-pissenlit-kohler.webp";

/**
 * Page Médiation : quatre formats (ateliers hybrides, balades, conférences,
 * milieu scolaire), chacun illustré par des interventions réelles.
 */

const BTN_A = { borderRadius: "28px 14px 26px 12px / 14px 26px 12px 28px" };
const BTN_B = { borderRadius: "14px 30px 12px 26px / 26px 12px 30px 14px" };
const BLEU = "hsl(210,41%,24%)";
const CREME = "hsl(36,33%,93%)";
const SABLE = "hsl(36,25%,88%)";

interface Exemple {
  titre: string;
  lieu: string;
  date: string;
  aVenir?: boolean;
  /** Article du blog qui raconte l'intervention. */
  lien?: string;
  /** Texte du lien (par défaut « Lire le récit »). */
  lienLabel?: string;
  /** Une phrase qui raconte ce qu'on y a fait. */
  resume?: string;
}

const FORMATS = [
  { id: "ateliers-hybrides", label: "Ateliers hybrides", icon: BookOpen },
  { id: "balades", label: "Balades botaniques", icon: Compass },
  { id: "conferences", label: "Conférences", icon: Landmark },
  { id: "ecoles", label: "En milieu scolaire", icon: GraduationCap },
];

const HYBRIDES: Exemple[] = [
  {
    titre: "Sur la route des épices : odeurs et saveurs",
    lieu: "Fête de la Science, bibliothèque Choiseul, Versailles",
    date: "Octobre 2026",
    resume: "Poivre, girofle, cannelle : les épices qui ont redessiné les routes du monde, puis chacun compose son sachet senteur.",
    lien: "/blog/atelier-route-des-epices-fete-de-la-science-versailles",
  },
  {
    titre: "Wardian case : histoire du terrarium + fabrication",
    lieu: "La Rochefoucauld, Paris 14e",
    date: "Avril et juin 2026",
    resume: "Le bocal qui a fait voyager les plantes et permis le vol des graines d'hévéa, puis on fabrique son propre terrarium.",
    lien: "/blog/terrarium-biopiraterie-histoire-coloniale",
    lienLabel: "Lire l'histoire",
  },
  {
    titre: "Histoire culturelle et politique des teintures végétales",
    lieu: "La Rochefoucauld, Paris 14e",
    date: "Mai 2026",
    resume: "Indigo, garance, chou rouge : la guerre des couleurs racontée, puis chacun teint son étoffe aux plantes.",
    lien: "/blog/teinture-vegetale-chou-rouge-indigo-naturel",
    lienLabel: "Lire l'article",
  },
  {
    titre: "Mauvaises herbes : jardins punk et bombes à graines",
    lieu: "La Rochefoucauld, Paris 14e",
    date: "Mai 2026",
    resume: "Éloge des plantes qu'on arrache et des friches qui résistent, puis fabrication de bombes à graines à semer en ville.",
  },
  {
    titre: "Kokedama intergénérationnel pour la Semaine bleue",
    lieu: "EHPAD de Gif-sur-Yvette (91)",
    date: "Octobre 2026",
    resume: "Huit enfants du centre de loisirs et huit résidents fabriquent ensemble des kokedamas, en se racontant leurs plantes.",
    lien: "/blog/semaine-bleue-atelier-intergenerationnel-kokedama-ehpad",
  },
];

const BALADES: Exemple[] = [
  { titre: "Plantes voyageuses, histoires oubliées", lieu: "École Du Breuil, bois de Vincennes, Paris 12e", date: "31 mai 2026", lien: "/blog/balade-botanique-ecole-du-breuil", resume: "Dans les collections de l'École Du Breuil, lire les plantes comme des archives : voyages, empires et savoirs effacés." },
  { titre: "Au fil des jardins de Voisins", lieu: "Domaine de la Croix du Bois, Voisins-le-Bretonneux", date: "7 juin 2026", lien: "/blog/balade-botanique-voisins-le-bretonneux", resume: "Du kiosque à la roseraie, une lecture des jardins de notables et de ce que leurs plantes disent du pouvoir." },
];

const CONFERENCES_THEMES: { titre: string; desc: string; lien?: string; lienLabel?: string }[] = [
  { titre: "Plantes voyageuses, histoires oubliées", desc: "Ce que le café, le palmier ou la fougère racontent des circulations, du pouvoir et des savoirs effacés.", lien: "/blog/monstera-plante-coloniale-distinction-sociale", lienLabel: "Exemple : le monstera" },
  { titre: "Femmes, fougères & pouvoir", desc: "Des chasseuses de plantes oubliées à Jeanne Barret : l'histoire genrée de la botanique." },
  { titre: "Penser avec les plantes", desc: "Ce que les savoirs autochtones nous apprennent sur notre rapport au vivant." },
  { titre: "Lire un jardin comme une archive", desc: "Visites de jardins et de serres où chaque collection devient une entrée dans l'histoire.", lien: "/blog/palmiers-architecture-haussmannienne-colonialisme", lienLabel: "Exemple : les palmiers d'Haussmann" },
];

const ECOLES: (Exemple & { desc: string })[] = [
  {
    titre: "Les espèces exotiques envahissantes",
    lieu: "Collège de Bobigny (93), cycle de 6 séances",
    date: "Avril et mai 2025",
    lien: "/blog/botanique-projet-pedagogique-college",
    lienLabel: "Intégrer la botanique au collège",
    desc: "Espèce locale, exotique ou envahissante ? Jeux de classement, fabrication de bombes à graines, chasse au trésor naturaliste au parc de la Bergère, herbier, puis interview filmée d'un agent du parc par les élèves, et un panneau pour présenter le projet au collège.",
  },
  {
    titre: "Le procès des mauvaises herbes",
    lieu: "Écoles de Malakoff, classes de CE2 et CM1",
    date: "Avril 2027",
    aVenir: true,
    desc: "Dans le cadre du parcours d'éducation artistique et culturelle « Graffiti botanique » de la Ville de Malakoff, aux côtés de deux illustrateurs : les élèves instruisent le procès des plantes qu'on arrache, et apprennent à les regarder autrement.",
  },
];

const PUBLICS = ["Musées", "Médiathèques", "Jardins & parcs", "Collectivités", "Écoles & collèges", "Universités", "Festivals"];

const LECTURES = [
  { to: "/blog/terrarium-biopiraterie-histoire-coloniale", eyebrow: "Histoire des sciences", titre: "Du terrarium à la biopiraterie : la caisse de Ward" },
  { to: "/blog/balade-botanique-voisins-le-bretonneux", eyebrow: "Balade · Yvelines", titre: "Voisins-le-Bretonneux : jardins, pouvoir et histoire" },
  { to: "/blog/palmiers-architecture-haussmannienne-colonialisme", eyebrow: "Histoire urbaine", titre: "Palmiers, platanes, ginkgos : la botanique d'Haussmann" },
];

/** Petite carte « ce qu'on a fait ». */
const CarteExemple = ({ ex, i, sombre = false }: { ex: Exemple; i: number; sombre?: boolean }) => {
  const cls = `relative block border-brutal p-5 md:p-6 ${sombre ? "bg-[hsl(var(--cream))] text-foreground" : "bg-[hsl(var(--cream))]"} shadow-[4px_4px_0_hsl(var(--black))] ${i % 2 ? "rotate-[0.5deg]" : "-rotate-[0.5deg]"}`;
  const contenu = (
    <>
    {ex.aVenir && (
      <span className="absolute -top-3 right-5 font-mono-brand text-[9px] uppercase tracking-[2px] bg-accent border-brutal-thin rounded-full px-3 py-1 rotate-2">
        À venir
      </span>
    )}
    <h4 className="font-display text-base md:text-lg uppercase leading-tight mb-2">{ex.titre}</h4>
    <p className="flex items-start gap-2 text-sm text-foreground/70 mb-1">
      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
      {ex.lieu}
    </p>
    <p className="flex items-center gap-2 font-mono-brand text-[10px] uppercase tracking-[1.5px] text-foreground/60">
      <Calendar className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
      {ex.date}
    </p>
    {ex.resume && <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{ex.resume}</p>}
    {ex.lien && (
      <span className="mt-3 inline-flex items-center gap-1.5 font-mono-brand text-[10px] uppercase tracking-[2px] text-primary underline underline-offset-4 decoration-2">
        {ex.lienLabel ?? "Lire le récit"} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </span>
    )}
    </>
  );
  return ex.lien ? (
    <Link to={ex.lien} className={`group ${cls} hover:rotate-0 transition-transform`} style={galet(i)}>
      {contenu}
    </Link>
  ) : (
    <div className={cls} style={galet(i)}>
      {contenu}
    </div>
  );
};

/** En-tête de section (label, titre sur deux lignes, trait). */
const Titre = ({ label, l1, l2, couleur, clair = false }: { label: string; l1: string; l2: string; couleur?: string; clair?: boolean }) => (
  <>
    <span className="section-label block mb-3" style={clair ? { color: "hsl(73 44% 67%)" } : undefined}>
      {label}
    </span>
    <h2 className="font-display text-[clamp(2rem,5vw,3.4rem)] uppercase leading-[0.92] tracking-[-1.5px]">
      {l1}
      <br />
      <span className={clair ? "text-[hsl(var(--olive-light))]" : "text-primary"}>{l2}</span>
    </h2>
    <TraitDessine className="mt-3 mb-7" color={couleur} variant={1} />
  </>
);

const Mediation = () => (
  <div className="min-h-screen bg-[hsl(var(--cream))] overflow-x-clip">
    <SEO
      title="Médiation ethnobotanique : conférences et balades"
      description="Conférences, balades botaniques et cycles thématiques pour musées, médiathèques, jardins et universités, partout en Île-de-France."
      canonical="/mediation"
    />
    <Navigation />

    <main>
      {/* ===== HERO ===== */}
      <section className="relative px-6 pt-28 pb-16 md:pt-36 md:pb-20">
        <div
          className="absolute -left-32 top-20 w-[460px] h-[460px] bg-[hsl(210_41%_24%)]/10 pointer-events-none"
          style={{ borderRadius: "58% 42% 38% 62% / 45% 55% 45% 55%" }}
          aria-hidden="true"
        />
        <div
          className="absolute -right-24 bottom-0 w-[380px] h-[380px] bg-[hsl(var(--olive-light))]/30 pointer-events-none"
          style={{ borderRadius: "40% 60% 55% 45% / 60% 40% 60% 40%" }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-10 items-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 font-mono-brand text-[10px] md:text-[11px] uppercase tracking-[2px] bg-[hsl(210_41%_24%)] text-[hsl(var(--cream))] border-brutal-thin rounded-full px-4 py-2 mb-7 -rotate-2 shadow-[3px_3px_0_hsl(var(--black))]">
              Médiation ethnobotanique
            </span>
            <h1 className="font-display text-[clamp(2.6rem,6vw,5rem)] uppercase leading-[0.9] tracking-[-2px] mb-4">
              Conférences
              <br />
              <span className="text-[hsl(210_41%_34%)]">& savoirs</span>
            </h1>
            <TraitDessine className="mb-7" color={BLEU} />
            <p className="font-editorial italic text-xl md:text-2xl text-foreground/80 max-w-[560px] leading-snug mb-5">
              Raconter les plantes par leur histoire : d'où elles viennent, qui les a cultivées, ce qu'on a oublié d'elles.
            </p>
            <p className="text-base text-foreground/70 max-w-[560px] leading-relaxed mb-8">
              Pour les musées, médiathèques, jardins, collectivités et écoles : des formats qui croisent botanique, anthropologie et histoire, portés par une animatrice ethnobotaniste formée à l'EHESS.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {FORMATS.map((f, i) => (
                <a
                  key={f.id}
                  href={`#${f.id}`}
                  className={`inline-flex items-center gap-2 font-mono-brand text-[10px] uppercase tracking-[1.5px] bg-[hsl(var(--cream))] border-brutal-thin rounded-full px-4 py-2 shadow-[2px_2px_0_hsl(var(--black))] hover:bg-[hsl(var(--olive-light))] transition-colors ${i % 2 ? "rotate-1" : "-rotate-1"}`}
                >
                  <f.icon className="w-3.5 h-3.5" /> {f.label}
                </a>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150} className="relative h-[420px] sm:h-[500px] max-w-[520px] w-full mx-auto">
            <img
              src={imgEpices}
              alt="Participants composant des sachets d'épices pendant l'atelier Sur la route des épices"
              className="absolute right-0 top-0 w-[58%] h-[76%] object-cover border-brutal shadow-brutal rotate-2"
              style={galetPhoto(1)}
            />
            <img
              src={imgKiosque}
              alt="Kiosque du domaine de la Croix du Bois à Voisins-le-Bretonneux"
              className="absolute left-0 bottom-0 w-[60%] h-[52%] object-cover border-brutal shadow-brutal -rotate-2"
              style={galetPhoto(0)}
              loading="lazy"
            />
            <img
              src={imgPissenlit}
              alt="Planche botanique ancienne du pissenlit"
              className="absolute left-[4%] top-[4%] w-[36%] aspect-square object-cover object-top border-brutal bg-white -rotate-3"
              style={{ borderRadius: "58% 42% 52% 48% / 46% 56% 44% 54%" }}
              loading="lazy"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* ===== ATELIERS HYBRIDES ===== */}
      <WaveDivider from={CREME} to={SABLE} />
      <section id="ateliers-hybrides" className="scroll-mt-24 bg-secondary px-6 pt-8 pb-20 md:pb-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-center">
          <AnimatedSection>
            <Titre label="Récit + création" l1="Ateliers" l2="hybrides" />
            <p className="text-base md:text-lg text-foreground/75 leading-relaxed mb-8 max-w-xl">
              D'abord une histoire, ensuite un objet. On raconte la route des épices, l'invention du terrarium ou la guerre des couleurs, puis chacun fabrique de ses mains ce dont on vient de parler.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={150} className="relative grid grid-cols-2 gap-4 max-w-[520px] w-full mx-auto">
            <img src={imgEpicesTable} alt="Table d'atelier couverte de bols d'épices" className="col-span-2 w-full aspect-[16/10] object-cover border-brutal shadow-brutal -rotate-1" style={galetPhoto(0)} loading="lazy" />
            <img src={imgTerrarium} alt="Terrarium réalisé pendant l'atelier Wardian case" className="w-full aspect-square object-cover border-brutal shadow-brutal rotate-2" style={galetPhoto(1)} loading="lazy" />
            <img src={imgTeinture} alt="Tissus teints aux plantes pendant l'atelier sur les teintures végétales" className="w-full aspect-square object-cover border-brutal shadow-brutal -rotate-2" style={galetPhoto(2)} loading="lazy" />
          </AnimatedSection>
        </div>
        <div className="max-w-6xl mx-auto mt-14">
          <p className="section-label mb-6">Ils ont eu lieu</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {HYBRIDES.map((ex, i) => (
              <AnimatedSection key={ex.titre} delay={(i % 3) * 90} className={i % 3 === 1 ? "lg:mt-8" : ""}>
                <CarteExemple ex={ex} i={i} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BALADES ===== */}
      <WaveDivider from={SABLE} to={CREME} flip />
      <section id="balades" className="scroll-mt-24 px-6 pt-8 pb-20 md:pb-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          <AnimatedSection delay={150} className="relative order-2 lg:order-1 h-[380px] sm:h-[440px] max-w-[500px] w-full mx-auto">
            <img src={imgVoisins} alt="Allée de rosiers du domaine de la Croix du Bois, balade Au fil des jardins de Voisins" className="absolute left-0 top-0 w-[64%] h-[82%] object-cover border-brutal shadow-brutal -rotate-2" style={galetPhoto(2)} loading="lazy" />
            <img src={imgKiosque} alt="Kiosque du domaine de la Croix du Bois" className="absolute right-0 bottom-0 w-[50%] h-[56%] object-cover border-brutal shadow-brutal rotate-2" style={galetPhoto(1)} loading="lazy" />
          </AnimatedSection>
          <AnimatedSection className="order-1 lg:order-2">
            <Titre label="Sorties nature" l1="Balades" l2="botaniques" />
            <p className="text-base md:text-lg text-foreground/75 leading-relaxed mb-8 max-w-xl">
              Un jardin, une serre, un parc ou une rue deviennent une archive vivante. On marche, on observe, on goûte parfois, et chaque plante raconte un morceau d'histoire sociale et coloniale.
            </p>
            <p className="section-label mb-4">Elles ont eu lieu</p>
            <div className="grid sm:grid-cols-2 gap-5">
              {BALADES.map((ex, i) => (
                <CarteExemple key={ex.titre} ex={ex} i={i + 1} />
              ))}
            </div>

          </AnimatedSection>
        </div>
      </section>

      {/* ===== CONFÉRENCES (bande bleue) ===== */}
      <WaveDivider from={CREME} to={BLEU} />
      <section id="conferences" className="scroll-mt-24 bg-[hsl(210_41%_24%)] text-[hsl(var(--cream))] px-6 pt-8 pb-20 md:pb-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-16 items-center">
          <AnimatedSection>
            <Titre label="Pour les institutions" l1="Conférences" l2="& récits" couleur="hsl(var(--olive-light))" clair />
            <p className="text-base md:text-lg text-[hsl(var(--cream))]/80 leading-relaxed mb-8 max-w-xl">
              Des conférences exigeantes et accessibles, qui mobilisent l'anthropologie de la nature, l'histoire des sciences et les études de genre. Quatre thèmes, adaptables à votre lieu et à vos collections.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {CONFERENCES_THEMES.map((c, i) => (
                <div key={c.titre} className="border-2 border-white/25 bg-white/[0.05] p-5" style={galet(i)}>
                  <h3 className="font-display text-sm md:text-base uppercase leading-tight mb-1.5 text-white">{c.titre}</h3>
                  <p className="text-[13px] leading-relaxed text-white/70">{c.desc}</p>
                  {c.lien && (
                    <Link to={c.lien} className="mt-3 inline-flex items-center gap-1.5 font-mono-brand text-[9px] uppercase tracking-[2px] text-[hsl(var(--olive-light))] underline underline-offset-4 decoration-2 hover:text-white">
                      {c.lienLabel} <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <p className="section-label mb-4" style={{ color: "hsl(73 44% 67%)" }}>
              Prochaine conférence
            </p>
            <div className="max-w-md">
              <CarteExemple ex={{ titre: "Les femmes et la botanique", lieu: "École Du Breuil, Paris 12e", date: "16 janvier 2027", aVenir: true }} i={2} sombre />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={150} className="relative max-w-[380px] w-full mx-auto">
            <img
              src={imgFemmes}
              alt="Affiche de la conférence Les femmes et la botanique à l'École Du Breuil"
              className="w-full object-cover border-brutal shadow-[6px_6px_0_hsl(var(--black))] rotate-2"
              style={galetPhoto(1)}
              loading="lazy"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* ===== EN MILIEU SCOLAIRE ===== */}
      <WaveDivider from={BLEU} to={CREME} flip />
      <section id="ecoles" className="scroll-mt-24 px-6 pt-8 pb-20 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="max-w-2xl mb-12">
            <Titre label="Écoles, collèges, lycées" l1="En milieu" l2="scolaire" />
            <p className="text-base md:text-lg text-foreground/75 leading-relaxed">
              Des interventions construites avec les enseignants et les villes, en lien avec les programmes de SVT ou les parcours d'éducation artistique et culturelle.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-10 md:gap-12">
            {ECOLES.map((ex, i) => (
              <AnimatedSection key={ex.titre} delay={i * 120} className={i === 1 ? "md:mt-14" : ""}>
                <div className="relative mb-8">
                  {i === 0 ? (
                    <div className="grid grid-cols-3 gap-3 items-start">
                      <img src={imgEee} alt="Zone humide observée pendant la sortie sur les espèces exotiques envahissantes" className="col-span-2 w-full aspect-[4/3] object-cover border-brutal shadow-brutal -rotate-1" style={galetPhoto(0)} loading="lazy" />
                      <div className="flex flex-col gap-3">
                        <img src={imgEeeHerbier} alt="Planche d'herbier réalisée par les élèves" className="w-full aspect-square object-cover border-brutal bg-white rotate-2" style={PASTILLE} loading="lazy" />
                        <img src={imgEeeTerrain} alt="Élèves en sortie de terrain pour repérer les plantes invasives" className="w-full aspect-[3/4] object-cover border-brutal -rotate-2" style={galetPhoto(1)} loading="lazy" />
                      </div>
                    </div>
                  ) : (
                    <div className="relative">
                      <img src={imgPissenlit} alt="Planche botanique du pissenlit, Köhler 1887" className="w-full aspect-[4/3] object-cover object-[50%_30%] border-brutal shadow-brutal bg-white rotate-1" style={galetPhoto(2)} loading="lazy" />
                      <span className="absolute -bottom-3 left-5 font-mono-brand text-[9px] uppercase tracking-[2px] bg-[hsl(var(--cream))] border-brutal-thin rounded-full px-3 py-1 -rotate-2">
                        Planche du pissenlit · Köhler, 1887
                      </span>
                    </div>
                  )}
                </div>
                <CarteExemple ex={ex} i={i + 2} />
                <p className="mt-5 text-sm md:text-base text-foreground/75 leading-relaxed px-1">{ex.desc}</p>
              </AnimatedSection>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/etablissements-scolaires" className="btn-brutal inline-flex items-center gap-2 bg-[hsl(var(--cream))] text-foreground border-foreground rotate-1 hover:rotate-0 text-xs px-7 py-3.5" style={BTN_B}>
              Nos interventions pour les écoles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== POUR QUI + LECTURES ===== */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-5">Pour qui ?</p>
            <div className="flex flex-wrap justify-center gap-3">
              {PUBLICS.map((p, i) => (
                <span key={p} className={`inline-flex items-center gap-1.5 font-mono-brand text-[11px] uppercase tracking-[1.5px] bg-[hsl(var(--cream))] border-brutal-thin rounded-full px-4 py-2 shadow-[2px_2px_0_hsl(var(--black))] ${i % 2 ? "rotate-1" : "-rotate-1"}`}>
                  <Users className="w-3.5 h-3.5 text-primary" /> {p}
                </span>
              ))}
            </div>
          </div>
          <p className="section-label mb-5 text-center">Pour aller plus loin</p>
          <div className="grid md:grid-cols-3 gap-5">
            {LECTURES.map((l, i) => (
              <Link key={l.to} to={l.to} className="group border-brutal bg-[hsl(var(--cream))] p-6 hover:shadow-brutal transition-shadow" style={galet(i + 1)}>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="font-mono-brand text-[10px] uppercase tracking-[2px] text-primary">{l.eyebrow}</span>
                  <ArrowUpRight className="w-4 h-4 text-foreground/40 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-display text-base uppercase leading-tight">{l.titre}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <WaveDivider from={CREME} to="hsl(153,40%,30%)" />
      <section className="bg-[hsl(var(--green))] text-[hsl(var(--cream))] px-6 pt-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-[clamp(1.9rem,4.5vw,3rem)] uppercase leading-[0.95] tracking-[-1px]">
            Une programmation <span className="text-[hsl(var(--olive-light))]">à construire ?</span>
          </h2>
          <TraitDessine className="mx-auto mt-3 mb-6" color="hsl(var(--olive-light))" variant={2} />
          <p className="text-base md:text-lg text-[hsl(var(--cream))]/85 leading-relaxed max-w-2xl mx-auto mb-9">
            Conférence, balade, atelier hybride ou projet scolaire : dites-moi votre lieu, votre public et votre calendrier, je vous propose un format sur mesure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-brutal inline-flex items-center gap-2 bg-accent text-foreground border-foreground -rotate-1 hover:rotate-0 text-xs px-8 py-3.5" style={BTN_A}>
              Parlons de votre projet <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/agenda" className="btn-brutal inline-flex items-center gap-2 bg-[hsl(var(--cream))] text-foreground border-foreground rotate-1 hover:rotate-0 text-xs px-7 py-3.5" style={BTN_B}>
              Voir l'agenda
            </Link>
          </div>
        </div>
      </section>
      <WaveDivider from="hsl(153,40%,30%)" to="hsl(0,0%,10%)" flip />
    </main>

    <Footer />
    <BackToTop />
  </div>
);

export default Mediation;
