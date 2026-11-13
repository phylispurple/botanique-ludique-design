import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import WaveDivider from "@/components/WaveDivider";
import { AREA_SERVED_IDF } from "@/data/areaServed";
import TraitDessine from "@/components/TraitDessine";
import PhotoCarousel from "@/components/PhotoCarousel";
import QuoteForm from "@/components/QuoteForm";
import { galet, galetPhoto, PASTILLE } from "@/lib/organic";
import { Users, Clock, MapPin, Check, ArrowRight, Phone, ChevronDown, Coffee, BookOpen, Leaf } from "lucide-react";
import terrariumTable from "@/assets/event-terrarium-table.webp";
import terrariumMains from "@/assets/event-terrarium-mains.webp";
import terrariumSourire from "@/assets/event-terrarium-sourire.webp";
import terrariumSucculentes from "@/assets/gallery-terrarium.webp";
import wardPortrait from "@/assets/blog-terrarium-nathaniel-ward.png";
import wardianCase from "@/assets/blog-terrarium-wardian-case.jpg";
import heroTerrarium from "@/assets/gallery-terrarium-adultes-groupe.jpg";
import terrariumBocal from "@/assets/gallery-terrarium-bocal-fittonia.jpg";
import terrariumPrep from "@/assets/gallery-terrarium-fittonia-prep.jpg";
import fittoniaPots from "@/assets/gallery-fittonia-pots.jpg";
import miniTerrarium from "@/assets/gallery-mini-terrarium.jpeg";

const SLUG = "/atelier-terrarium-team-building";

const INFOS = [
  { icon: Users, label: "12 à 40 participants", desc: "Par session · plus en rotation" },
  { icon: Clock, label: "1h30 à 2h30", desc: "Selon le format choisi" },
  { icon: MapPin, label: "Dans vos locaux", desc: "Partout en Île-de-France" },
];

const PHOTOS = [
  { src: terrariumMains, alt: "Une participante dépose le substrat dans son bocal pendant l'atelier", label: "Composer" },
  { src: heroTerrarium, alt: "Un groupe d'adultes réalise des terrariums autour d'une table", label: "En équipe" },
  { src: terrariumSucculentes, alt: "Grand terrarium de succulentes, fougères et mousse", label: "Le résultat" },
  { src: terrariumBocal, alt: "Terrarium en bocal de verre avec fittonia et tradescantia, réalisé en atelier", label: "Fittonia" },
  { src: terrariumPrep, alt: "Préparation d'un terrarium : mousse, fittonia et graviers posés sur la table d'atelier", label: "Mousse & fittonia" },
  { src: fittoniaPots, alt: "Plantules de fittonia en godets, prêtes à être installées dans les terrariums", label: "Les plantes du jour" },
  { src: miniTerrarium, alt: "Mini terrarium en bocal réalisé lors d'un atelier", label: "Petit format" },
];

const ETAPES = [
  { step: "01", title: "Accueil", desc: "Présentation des plantes, des matériaux et du principe d'un écosystème clos." },
  { step: "02", title: "L'histoire du terrarium", desc: "Comment un simple bocal a fait voyager des plantes à travers le monde au XIXe siècle." },
  { step: "03", title: "Création", desc: "Drainage, substrat, plantes, mousse et décor : chacun compose son terrarium, accompagné pas à pas." },
  { step: "04", title: "Clôture", desc: "Conseils d'entretien, photo de groupe, et chacun repart avec sa création." },
];

const INCLUS = [
  "Tout le matériel : bocaux en verre, substrat, graviers, mousse, plantes et décor",
  "L'animation par Vanessa Charlery, ethnobotaniste formée à l'EHESS",
  "Un temps de récit sur l'histoire culturelle du terrarium",
  "Un accompagnement individuel pendant la création",
  "Un terrarium par participant, à emporter",
  "Une fiche de conseils d'entretien",
];

const POURQUOI_ICONES = [Users, Coffee, BookOpen, Leaf];

const GARANTIES = ["Devis gratuit, réponse sous 48 h", "Tout le matériel fourni", "Un terrarium par participant", "Partout en Île-de-France"];

const BTN_GALET_A = { borderRadius: "28px 14px 26px 12px / 14px 26px 12px 28px" };
const BTN_GALET_B = { borderRadius: "14px 30px 12px 26px / 26px 12px 30px 14px" };

const POURQUOI = [
  {
    title: "Faire ensemble, repartir avec le sien",
    desc: "Chacun compose son propre terrarium, mais les matériaux, les idées et les coups de main circulent autour de la table.",
  },
  {
    title: "Une pause concrète",
    desc: "Les mains dans la terre et la mousse, loin des écrans : un moment calme et manuel qui change du quotidien de bureau.",
  },
  {
    title: "Une histoire à raconter",
    desc: "Le terrarium a une histoire étonnante, liée aux voyages des plantes et à l'histoire coloniale. Vos équipes ne regarderont plus un bocal de la même façon.",
  },
  {
    title: "Une démarche RSE tangible",
    desc: "Une activité sobre en matériel, qui parle de biodiversité et laisse un objet vivant sur chaque bureau plutôt qu'un goodie jetable.",
  },
];

const FAQ = [
  {
    q: "Combien de participants pour un atelier terrarium ?",
    a: "De 12 à 40 participants par session. Pour un groupe plus grand, nous organisons plusieurs sessions en rotation dans la journée, sur devis.",
  },
  {
    q: "Combien de temps dure l'atelier ?",
    a: "Entre 1h30 et 2h30 selon le format : une version courte centrée sur la création, ou une version longue avec un vrai temps de récit sur l'histoire du terrarium.",
  },
  {
    q: "Où se déroule l'atelier ?",
    a: "Dans vos locaux, une salle de séminaire ou tout lieu équipé de tables, partout en Île-de-France. Nous apportons tout le matériel.",
  },
  {
    q: "Comment est calculé le tarif ?",
    a: "Le tarif dépend du nombre de participants, de la durée et du lieu. Chaque devis est personnalisé et gratuit.",
  },
];

const AtelierTerrariumTeamBuilding = () => {
  const heroRef = useRef<HTMLElement>(null);
  const devisRef = useRef<HTMLElement>(null);
  const [heroVisible, setHeroVisible] = useState(true);
  const [devisVisible, setDevisVisible] = useState(false);

  // Bouton « Devis » flottant sur mobile : visible une fois le haut de page passé, caché sur le formulaire
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.target === heroRef.current) setHeroVisible(e.isIntersecting);
        if (e.target === devisRef.current) setDevisVisible(e.isIntersecting);
      });
    });
    if (heroRef.current) io.observe(heroRef.current);
    if (devisRef.current) io.observe(devisRef.current);
    return () => io.disconnect();
  }, []);

  const showFloating = !heroVisible && !devisVisible;

  return (
    <div className="min-h-screen bg-[hsl(var(--cream))] overflow-x-clip">
      <SEO
        title="Atelier Terrarium Team Building Paris | Créatif & Naturel"
        description="Atelier terrarium pour team building en entreprise à Paris et en Île-de-France : chacun crée son mini-écosystème et découvre l'histoire du terrarium. Dans vos locaux."
        keywords="terrarium team building Paris, atelier terrarium entreprise, team building nature Paris, animation cohésion équipe, atelier créatif entreprise, terrarium atelier, team building RSE Île-de-France"
        canonical={SLUG}
      />
      <SchemaOrg
        type="Service"
        data={{
          serviceType: "Atelier terrarium team building",
          name: "Atelier Terrarium Team Building",
          description:
            "Atelier terrarium pour les équipes en entreprise : création d'un mini-écosystème en bocal et récit sur l'histoire culturelle du terrarium, dans vos locaux en Île-de-France.",
          url: `https://botaniqueludique.com${SLUG}`,
          areaServed: AREA_SERVED_IDF,
        }}
      />
      <SchemaOrg type="FAQPage" data={{ questions: FAQ.map((f) => ({ question: f.q, answer: f.a })) }} />
      <SchemaOrg
        type="BreadcrumbList"
        data={{
          items: [
            { name: "Accueil", url: "https://botaniqueludique.com/" },
            { name: "Pro", url: "https://botaniqueludique.com/pro" },
            { name: "Atelier terrarium team building", url: `https://botaniqueludique.com${SLUG}` },
          ],
        }}
      />

      <Navigation />

      {/* ===== HERO ===== */}
      <section ref={heroRef} className="relative px-6 pt-28 pb-16 md:pt-36 md:pb-24">
        <div
          className="absolute -left-32 top-20 w-[460px] h-[460px] bg-[hsl(var(--olive-light))]/30 pointer-events-none"
          style={{ borderRadius: "58% 42% 38% 62% / 45% 55% 45% 55%" }}
          aria-hidden="true"
        />
        <div
          className="absolute -right-24 bottom-0 w-[380px] h-[380px] bg-accent/15 pointer-events-none"
          style={{ borderRadius: "40% 60% 55% 45% / 60% 40% 60% 40%" }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-10 items-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 font-mono-brand text-[10px] md:text-[11px] uppercase tracking-[2px] bg-[hsl(var(--green))] text-[hsl(var(--cream))] border-brutal-thin rounded-full px-4 py-2 mb-7 -rotate-2 shadow-[3px_3px_0_hsl(var(--black))]">
              Entreprises · CSE · Séminaires
            </span>
            <h1 className="font-display text-[clamp(2.4rem,5.4vw,4.4rem)] uppercase leading-[0.9] tracking-[-2px] mb-4">
              Atelier terrarium<br />
              <span className="text-primary">team building</span>
            </h1>
            <TraitDessine className="mb-7" />
            <p className="font-editorial italic text-xl md:text-2xl text-foreground/80 max-w-[560px] leading-snug mb-9">
              Chacun crée son mini-écosystème en bocal, et toute l'équipe découvre l'étonnante histoire du terrarium.
            </p>
            <div className="flex flex-wrap gap-4 mb-9">
              <a
                href="#devis"
                className="btn-brutal inline-flex items-center gap-2 bg-accent text-foreground border-foreground -rotate-1 hover:rotate-0 text-xs px-8 py-3.5"
                style={BTN_GALET_A}
              >
                Demander un devis gratuit <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+33609831606"
                className="btn-brutal inline-flex items-center gap-2 bg-[hsl(var(--cream))] text-foreground border-foreground rotate-1 hover:rotate-0 text-xs px-7 py-3.5"
                style={BTN_GALET_B}
              >
                <Phone className="w-4 h-4" /> 06 09 83 16 06
              </a>
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 max-w-[560px]">
              {GARANTIES.map((g) => (
                <li key={g} className="flex items-start gap-2 text-sm text-foreground/80">
                  <span className="mt-0.5 w-5 h-5 flex-shrink-0 flex items-center justify-center bg-[hsl(var(--olive-light))] border-brutal-thin" style={PASTILLE}>
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </span>
                  {g}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* collage */}
          <AnimatedSection delay={150} className="relative h-[420px] sm:h-[500px] max-w-[520px] w-full mx-auto">
            <img
              src={terrariumSourire}
              alt="Une participante compose son terrarium en souriant pendant un atelier en entreprise"
              className="absolute right-0 top-0 w-[60%] h-[78%] object-cover border-brutal shadow-brutal rotate-2"
              style={galetPhoto(1)}
            />
            <img
              src={terrariumTable}
              alt="Terrariums en bocal alignés et sacs kraft prêts à être emportés"
              className="absolute left-0 bottom-0 w-[62%] h-[52%] object-cover border-brutal shadow-brutal -rotate-2"
              style={galetPhoto(0)}
              loading="lazy"
            />
            <img
              src={terrariumSucculentes}
              alt="Terrarium de succulentes et de mousse"
              className="absolute left-[4%] top-[6%] w-[36%] aspect-square object-cover border-brutal -rotate-3"
              style={{ borderRadius: "58% 42% 52% 48% / 46% 56% 44% 54%" }}
              loading="lazy"
            />
            <div
              className="absolute right-[-2%] bottom-[8%] w-[108px] h-[108px] flex flex-col items-center justify-center text-center bg-[hsl(var(--green))] text-[hsl(var(--cream))] border-brutal shadow-[3px_3px_0_hsl(var(--black))] pebble-float"
              style={PASTILLE}
            >
              <span className="font-display text-xl leading-none">1 bocal</span>
              <span className="font-mono-brand text-[8px] uppercase tracking-[1px] mt-1 leading-tight px-2">par personne,<br />à emporter</span>
            </div>
            <div
              className="absolute left-[26%] top-[40%] w-[84px] h-[84px] flex flex-col items-center justify-center text-center bg-accent border-brutal shadow-[3px_3px_0_hsl(var(--black))] pebble-float [animation-delay:-2s]"
              style={{ borderRadius: "48% 52% 44% 56% / 55% 45% 55% 45%" }}
            >
              <span className="font-display text-2xl leading-none">2h</span>
              <span className="font-mono-brand text-[8px] uppercase tracking-[1px] mt-1">environ</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== INFOS CLÉS ===== */}
      <section className="px-6 pb-14">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {INFOS.map((item, i) => (
            <div
              key={item.label}
              className={`px-6 py-7 text-center border-brutal shadow-brutal bg-[hsl(var(--cream))] ${["-rotate-1", "rotate-[0.6deg]", "-rotate-[0.4deg]"][i]}`}
              style={galet(i)}
            >
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-[hsl(var(--olive-light))] border-brutal-thin" style={PASTILLE}>
                <item.icon className="w-6 h-6" strokeWidth={2.2} />
              </div>
              <p className="font-display uppercase text-base tracking-[-0.5px] mb-1">{item.label}</p>
              <p className="font-mono-brand text-[10px] uppercase tracking-[2px] text-foreground/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PHOTOS ===== */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(36,25%,88%)" />
      <section className="bg-secondary pt-6 pb-10">
        <AnimatedSection className="px-6 max-w-6xl mx-auto mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="section-label block mb-3">En atelier</span>
            <h2 className="font-display text-[clamp(2rem,5vw,3.4rem)] uppercase leading-[0.92] tracking-[-1.5px]">
              Les mains<br /><span className="md:ml-16 text-primary">dans la mousse</span>
            </h2>
            <TraitDessine className="mt-3 md:ml-16" variant={1} />
          </div>
          <span className="self-start md:self-end font-mono-brand text-[10px] uppercase tracking-[2px] border-brutal-thin rounded-full px-4 py-2 bg-[hsl(var(--cream))] rotate-2">
            ← Faites glisser →
          </span>
        </AnimatedSection>
        <PhotoCarousel organic images={PHOTOS} />
      </section>

      {/* ===== HISTOIRE ===== */}
      <WaveDivider from="hsl(36,25%,88%)" to="hsl(36,33%,93%)" flip />
      <section className="px-6 pt-10 pb-20 md:pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-14 items-center">
          <AnimatedSection>
            <span className="section-label block mb-3">Notre signature</span>
            <h2 className="font-display text-[clamp(1.9rem,4.5vw,3rem)] uppercase leading-[0.95] tracking-[-1px]">
              Plus qu'un bocal : <span className="text-primary">une histoire</span>
            </h2>
            <TraitDessine className="mt-3 mb-7" color="hsl(var(--orange))" variant={2} />
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground/80">
              <p>
                Au XIXe siècle, le médecin londonien Nathaniel Ward remarque qu'une fougère pousse toute seule dans un bocal fermé. Sa
                « Wardian case », l'ancêtre du terrarium, va permettre de transporter des plantes vivantes par bateau sur des milliers
                de kilomètres. Elle servira aussi à déplacer des plantes stratégiques d'un continent à l'autre, au service des empires
                coloniaux.
              </p>
              <p>
                C'est ce récit que nous partageons avec vos équipes pendant l'atelier. Il transforme une activité créative en vrai moment de
                découverte, et c'est ce qui distingue nos ateliers d'un simple kit de terrarium.
              </p>
            </div>
            <Link
              to="/blog/terrarium-biopiraterie-histoire-coloniale"
              className="mt-7 btn-brutal inline-flex items-center gap-2 bg-[hsl(var(--cream))] text-foreground border-foreground -rotate-1 hover:rotate-0 text-xs px-6 py-3"
              style={BTN_GALET_B}
            >
              Lire l'histoire complète sur le blog <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={150} className="relative max-w-[400px] w-full mx-auto">
            <img
              src={wardPortrait}
              alt="Portrait gravé de Nathaniel Ward, inventeur de la Wardian case"
              className="w-[82%] aspect-[4/5] object-cover border-brutal shadow-brutal bg-white rotate-2 grayscale"
              style={galetPhoto(2)}
              loading="lazy"
            />
            <div
              className="absolute right-0 bottom-[-6%] w-[48%] aspect-square bg-white border-brutal shadow-[4px_4px_0_hsl(var(--black))] -rotate-3 overflow-hidden flex items-center justify-center"
              style={PASTILLE}
            >
              <img src={wardianCase} alt="Gravure d'une Wardian case, l'ancêtre du terrarium" className="w-[80%] h-auto" loading="lazy" />
            </div>
            <span className="absolute left-2 -bottom-4 font-mono-brand text-[9px] uppercase tracking-[2px] bg-[hsl(var(--olive-light))] border-brutal-thin rounded-full px-3 py-1.5 -rotate-2 shadow-[2px_2px_0_hsl(var(--black))]">
              Nathaniel Ward · 1829
            </span>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== DÉROULÉ + INCLUS (bande verte) ===== */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(153,40%,30%)" />
      <section className="bg-[hsl(var(--green))] text-[hsl(var(--cream))] px-6 pt-10 pb-20 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="section-label block mb-3" style={{ color: "hsl(73 44% 67%)" }}>Comment ça marche</span>
            <h2 className="font-display text-[clamp(1.9rem,4.5vw,3rem)] uppercase leading-[0.95] tracking-[-1px]">
              Déroulement <span className="text-[hsl(var(--olive-light))]">de l'atelier</span>
            </h2>
            <TraitDessine className="mx-auto mt-3" color="hsl(var(--olive-light))" variant={1} />
          </AnimatedSection>
          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <svg className="hidden lg:block absolute left-[12%] right-[12%] top-[34px] w-[76%] h-6 pointer-events-none" viewBox="0 0 600 24" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 12 C 100 0, 200 24, 300 12 S 500 0, 600 12" fill="none" stroke="hsl(var(--olive-light))" strokeWidth="2.5" strokeDasharray="7 8" strokeLinecap="round" />
            </svg>
            {ETAPES.map((d, i) => (
              <AnimatedSection key={d.step} delay={i * 120}>
                <div className="relative text-center h-full flex flex-col">
                  <div
                    className="relative z-10 w-[68px] h-[68px] mx-auto mb-5 flex items-center justify-center bg-[hsl(var(--cream))] text-foreground border-brutal shadow-[3px_3px_0_hsl(var(--black))]"
                    style={PASTILLE}
                  >
                    <span className="font-display text-xl">{d.step}</span>
                  </div>
                  <div className="flex-1 bg-[hsl(var(--cream))] text-foreground border-brutal p-6" style={galet(i)}>
                    <h3 className="font-display text-lg uppercase tracking-[-0.5px] mb-2">{d.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="relative max-w-5xl mx-auto bg-[hsl(var(--cream))] text-foreground border-brutal shadow-[6px_6px_0_hsl(var(--black))] p-8 md:p-11 -rotate-[0.4deg]" style={galet(3)}>
              <span className="absolute -top-5 left-8 font-mono-brand text-[10px] uppercase tracking-[2px] bg-accent border-brutal-thin rounded-full px-4 py-2 rotate-2 shadow-[2px_2px_0_hsl(var(--black))]">
                Tout est compris
              </span>
              <h2 className="font-display text-xl md:text-2xl uppercase tracking-[-0.5px] mb-6 mt-2">Ce qui est inclus</h2>
              <div className="grid md:grid-cols-2 gap-x-10 gap-y-4">
                {INCLUS.map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <span className="mt-0.5 w-6 h-6 flex-shrink-0 flex items-center justify-center bg-[hsl(var(--olive-light))] border-brutal-thin" style={PASTILLE}>
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </span>
                    <p className="text-sm md:text-base text-foreground/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <WaveDivider from="hsl(153,40%,30%)" to="hsl(36,33%,93%)" flip />

      {/* ===== POURQUOI ===== */}
      <section className="pt-10 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <span className="section-label block mb-3">Pourquoi ce format</span>
            <h2 className="font-display text-[clamp(1.9rem,4.5vw,3rem)] uppercase leading-[0.95] tracking-[-1px]">
              Le terrarium pour <span className="text-primary">votre équipe</span>
            </h2>
            <TraitDessine className="mx-auto mt-3" variant={0} />
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
            {POURQUOI.map((item, i) => {
              const Icone = POURQUOI_ICONES[i];
              return (
                <AnimatedSection key={item.title} delay={i * 100} className={i % 2 === 1 ? "md:mt-10" : ""}>
                  <div
                    className={`relative h-full bg-[hsl(var(--cream))] border-brutal shadow-brutal p-7 pt-11 ${["-rotate-1", "rotate-1", "rotate-[0.6deg]", "-rotate-[0.6deg]"][i]} hover:rotate-0 transition-transform duration-300`}
                    style={galet(i + 1)}
                  >
                    <div
                      className={`absolute -top-7 left-7 w-14 h-14 flex items-center justify-center border-brutal shadow-[3px_3px_0_hsl(var(--black))] ${["bg-[hsl(var(--olive-light))]", "bg-accent", "bg-[hsl(var(--cream))]", "bg-[hsl(var(--green))] text-[hsl(var(--cream))]"][i]}`}
                      style={PASTILLE}
                    >
                      <Icone className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-lg uppercase mb-3 leading-tight">{item.title}</h3>
                    <p className="text-sm md:text-base text-foreground/70 leading-relaxed">{item.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="pt-4 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <span className="section-label block mb-3">FAQ</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] uppercase leading-[0.95] tracking-[-1px]">
              Questions <span className="text-primary">fréquentes</span>
            </h2>
            <TraitDessine className="mx-auto mt-3" variant={1} />
          </AnimatedSection>
          <div className="space-y-5">
            {FAQ.map((f, i) => (
              <details
                key={f.q}
                className={`group border-brutal bg-[hsl(var(--cream))] px-6 md:px-8 py-5 open:shadow-brutal transition-shadow ${i % 2 ? "rotate-[0.3deg]" : "-rotate-[0.3deg]"}`}
                style={galet(i)}
                open={i === 0}
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display text-base md:text-lg uppercase tracking-[-0.5px]">{f.q}</h3>
                  <span className="w-9 h-9 flex-shrink-0 flex items-center justify-center bg-[hsl(var(--olive-light))] border-brutal-thin transition-transform group-open:rotate-180" style={PASTILLE}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </summary>
                <p className="mt-3 text-sm md:text-base text-foreground/70 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AUTRES FORMATS ===== */}
      <section className="px-6 pb-20">
        <AnimatedSection>
          <div
            className="max-w-5xl mx-auto bg-[hsl(var(--cream))] border-[3px] border-dashed border-foreground px-7 py-9 md:px-12 md:py-10 grid md:grid-cols-[1fr_auto] gap-8 items-center rotate-[0.3deg]"
            style={{ borderRadius: "46px 70px 40px 64px / 64px 40px 70px 46px" }}
          >
            <div className="text-center md:text-left">
              <span className="section-label block mb-2">Envie d'autre chose ?</span>
              <h3 className="font-display text-[clamp(1.4rem,3vw,2rem)] uppercase leading-[0.95] tracking-[-0.5px] mb-3">
                D'autres ateliers <span className="text-primary">pour vos équipes</span>
              </h3>
              <p className="text-sm md:text-base text-foreground/75 leading-relaxed">
                Kokedama, teinture végétale, bombes à graines, sachets de senteurs… Une vingtaine d'ateliers, tous adaptables à votre événement.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Link
                to="/team-building-nature-entreprise"
                className="btn-brutal inline-flex items-center gap-2 bg-[hsl(var(--olive-light))] text-foreground border-foreground rotate-1 hover:rotate-0 text-xs px-7 py-3.5 whitespace-nowrap"
                style={BTN_GALET_B}
              >
                Tous nos ateliers team building <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="flex gap-4 font-mono-brand text-[10px] uppercase tracking-[2px]">
                <Link to="/atelier-kokedama-team-building" className="underline underline-offset-4 decoration-2 hover:text-primary">Kokedama</Link>
                <Link to="/workshops" className="underline underline-offset-4 decoration-2 hover:text-primary">Tous les ateliers</Link>
                <Link to="/pro" className="underline underline-offset-4 decoration-2 hover:text-primary">Offres pro</Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ===== DEVIS (bande verte) ===== */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(153,40%,30%)" />
      <section
        id="devis"
        ref={devisRef}
        className="relative bg-[hsl(var(--green))] text-[hsl(var(--cream))] px-6 pt-8 pb-24 scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_460px] gap-12 lg:gap-16 items-start">
          <AnimatedSection className="lg:pt-6">
            <span className="section-label block mb-3" style={{ color: "hsl(73 44% 67%)" }}>Organisons votre atelier</span>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] uppercase leading-[0.92] tracking-[-1px]">
              Prêt·e à créer<br /><span className="text-[hsl(var(--olive-light))]">ensemble&nbsp;?</span>
            </h2>
            <TraitDessine className="mt-3 mb-7" color="hsl(var(--olive-light))" variant={2} />
            <p className="text-base md:text-lg text-[hsl(var(--cream))]/85 leading-relaxed mb-8 max-w-xl">
              Dites-nous votre effectif, votre lieu et le temps dont vous disposez : nous vous envoyons une proposition sur mesure.
            </p>
            <ul className="space-y-3 mb-9">
              {GARANTIES.map((g) => (
                <li key={g} className="flex items-start gap-3 text-[hsl(var(--cream))]/90">
                  <span className="mt-0.5 w-6 h-6 flex-shrink-0 flex items-center justify-center bg-[hsl(var(--olive-light))] text-foreground border-brutal-thin" style={PASTILLE}>
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  {g}
                </li>
              ))}
            </ul>
            <a
              href="tel:+33609831606"
              className="btn-brutal inline-flex items-center gap-2 bg-[hsl(var(--cream))] text-foreground border-foreground -rotate-1 hover:rotate-0 text-xs px-7 py-3.5"
              style={BTN_GALET_A}
            >
              <Phone className="w-4 h-4" /> 06 09 83 16 06
            </a>
          </AnimatedSection>
          <div
            className="bg-[hsl(var(--cream))] text-[hsl(var(--black))] border-brutal shadow-[6px_6px_0_hsl(var(--black))] p-7 md:p-9 text-left lg:rotate-[0.6deg]"
            style={galet(1)}
          >
            <QuoteForm atelierTitle="Atelier terrarium team building" organic />
          </div>
        </div>
      </section>
      <WaveDivider from="hsl(153,40%,30%)" to="hsl(0,0%,10%)" flip />

      {/* Bouton devis flottant (mobile) */}
      <a
        href="#devis"
        className={`md:hidden fixed left-4 bottom-4 z-40 btn-brutal inline-flex items-center gap-2 bg-accent text-foreground border-foreground text-xs px-6 py-3 shadow-brutal transition-all duration-300 ${showFloating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`}
        style={BTN_GALET_A}
        aria-hidden={!showFloating}
        tabIndex={showFloating ? 0 : -1}
      >
        Devis gratuit <ArrowRight className="w-4 h-4" />
      </a>

      <BackToTop />
      <Footer />
    </div>
  );
};

export default AtelierTerrariumTeamBuilding;
