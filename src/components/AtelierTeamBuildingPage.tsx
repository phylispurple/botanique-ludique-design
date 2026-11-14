import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import { Check, ArrowRight, Phone, ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import WaveDivider from "@/components/WaveDivider";
import TraitDessine from "@/components/TraitDessine";
import PhotoCarousel from "@/components/PhotoCarousel";
import QuoteForm from "@/components/QuoteForm";
import { AREA_SERVED_IDF } from "@/data/areaServed";
import { galet, galetPhoto, PASTILLE } from "@/lib/organic";
import HeroPrairie from "@/components/HeroPrairie";

/**
 * Gabarit commun des pages « atelier X team building » (terrarium, kokedama,
 * teinture végétale, bombes à graines) : même style organique, même parcours de devis.
 */

export interface Photo {
  src: string;
  alt: string;
  label?: string;
}

export interface AtelierTeamBuildingConfig {
  slug: string;
  /** En-tête « prairie illustrée » de la page d'accueil, puis le collage dans une section « Le principe ». */
  prairie?: boolean;
  seo: { title: string; description: string; keywords: string };
  schema: { serviceType: string; name: string; description: string };
  breadcrumbName: string;
  hero: {
    label: string;
    /** Première ligne du titre (ex. « Atelier terrarium ») ; la seconde est « team building ». */
    titre: string;
    sousTitre: string;
    grande: Photo;
    moyenne: Photo;
    /** Photo ronde du collage ; avec `video`, une vidéo muette en boucle (effet GIF). */
    ronde: Photo & { video?: string };
    /** Pastille verte (ex. « 1 bocal » / « par personne, à emporter »). */
    pastilleA: { haut: string; bas: ReactNode };
    /** Pastille orange (ex. « 2h » / « environ »). */
    pastilleB: { haut: string; bas: string };
  };
  garanties: string[];
  infos: { icon: LucideIcon; label: string; desc: string }[];
  galerie: { ligne1: string; ligne2: string; photos: Photo[]; /** Crédits des photos sous licence libre, sous le carrousel. */ credit?: string };
  histoire: {
    label: string;
    titre: [string, string];
    paragraphes: ReactNode[];
    lien?: { to: string; label: string };
    visuel: Photo & { grayscale?: boolean; /** Vidéo muette en boucle à la place de la photo. */ video?: string };
    rond?: Photo & { contain?: boolean; /** Crédit affiché sous l'image (photos sous licence libre). */ credit?: string };
    etiquette: string;
  };
  etapes: { step: string; title: string; desc: string }[];
  inclus: string[];
  pourquoi: { titre: [string, string]; items: { icon: LucideIcon; title: string; desc: string }[] };
  faq: { q: string; a: string }[];
  autres: { texte: string; liens: { to: string; label: string }[] };
  devis: { titre: [string, string]; texte: string; atelierTitle: string };
}

const BTN_GALET_A = { borderRadius: "28px 14px 26px 12px / 14px 26px 12px 28px" };
const BTN_GALET_B = { borderRadius: "14px 30px 12px 26px / 26px 12px 30px 14px" };
const TONS = ["bg-[hsl(var(--olive-light))]", "bg-accent", "bg-[hsl(var(--cream))]", "bg-[hsl(var(--green))] text-[hsl(var(--cream))]"];

const AtelierTeamBuildingPage = ({ c }: { c: AtelierTeamBuildingConfig }) => {
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

  /* Collage de photos en galets, avec la vidéo ronde et les deux pastilles */
  const collage = (
            <AnimatedSection delay={150} className="relative h-[420px] sm:h-[500px] max-w-[520px] w-full mx-auto">
              <img
                src={c.hero.grande.src}
                alt={c.hero.grande.alt}
                className="absolute right-0 top-0 w-[60%] h-[78%] object-cover border-brutal shadow-brutal rotate-2"
                style={galetPhoto(1)}
              />
              <img
                src={c.hero.moyenne.src}
                alt={c.hero.moyenne.alt}
                className="absolute left-0 bottom-0 w-[62%] h-[52%] object-cover border-brutal shadow-brutal -rotate-2"
                style={galetPhoto(0)}
                loading="lazy"
              />
              {c.hero.ronde.video ? (
                <video
                  src={c.hero.ronde.video}
                  poster={c.hero.ronde.src}
                  className="absolute left-[4%] top-[6%] w-[36%] aspect-square object-cover border-brutal -rotate-3"
                  style={{ borderRadius: "58% 42% 52% 48% / 46% 56% 44% 54%" }}
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="metadata"
                  aria-label={c.hero.ronde.alt}
                />
              ) : (
                <img
                  src={c.hero.ronde.src}
                  alt={c.hero.ronde.alt}
                  className="absolute left-[4%] top-[6%] w-[36%] aspect-square object-cover border-brutal -rotate-3"
                  style={{ borderRadius: "58% 42% 52% 48% / 46% 56% 44% 54%" }}
                  loading="lazy"
                />
              )}
              <div
                className="absolute right-[-2%] bottom-[8%] w-[108px] h-[108px] flex flex-col items-center justify-center text-center bg-[hsl(var(--green))] text-[hsl(var(--cream))] border-brutal shadow-[3px_3px_0_hsl(var(--black))] pebble-float"
                style={PASTILLE}
              >
                <span className={`font-display leading-none whitespace-nowrap ${c.hero.pastilleA.haut.length > 7 ? "text-base" : "text-xl"}`}>{c.hero.pastilleA.haut}</span>
                <span className="font-mono-brand text-[8px] uppercase tracking-[1px] mt-1 leading-tight px-2">{c.hero.pastilleA.bas}</span>
              </div>
              <div
                className="absolute left-[26%] top-[40%] w-[84px] h-[84px] flex flex-col items-center justify-center text-center bg-accent border-brutal shadow-[3px_3px_0_hsl(var(--black))] pebble-float [animation-delay:-2s]"
                style={{ borderRadius: "48% 52% 44% 56% / 55% 45% 55% 45%" }}
              >
                <span className={`font-display leading-none whitespace-nowrap ${c.hero.pastilleB.haut.length > 4 ? "text-lg" : "text-2xl"}`}>{c.hero.pastilleB.haut}</span>
                <span className="font-mono-brand text-[8px] uppercase tracking-[1px] mt-1">{c.hero.pastilleB.bas}</span>
              </div>
            </AnimatedSection>
  );

  const garantiesList = (
    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 max-w-[560px]">
      {c.garanties.map((g) => (
        <li key={g} className="flex items-start gap-2 text-sm text-foreground/80">
          <span className="mt-0.5 w-5 h-5 flex-shrink-0 flex items-center justify-center bg-[hsl(var(--olive-light))] border-brutal-thin" style={PASTILLE}>
            <Check className="w-3 h-3" strokeWidth={3} />
          </span>
          {g}
        </li>
      ))}
    </ul>
  );
  const url = `https://botaniqueludique.com${c.slug}`;

  return (
    <div className="min-h-screen bg-[hsl(var(--cream))] overflow-x-clip">
      <SEO title={c.seo.title} description={c.seo.description} keywords={c.seo.keywords} canonical={c.slug} />
      <SchemaOrg type="Service" data={{ ...c.schema, url, areaServed: AREA_SERVED_IDF }} />
      <SchemaOrg type="FAQPage" data={{ questions: c.faq.map((f) => ({ question: f.q, answer: f.a })) }} />
      <SchemaOrg
        type="BreadcrumbList"
        data={{
          items: [
            { name: "Accueil", url: "https://botaniqueludique.com/" },
            { name: "Pro", url: "https://botaniqueludique.com/pro" },
            { name: c.breadcrumbName, url },
          ],
        }}
      />

      <Navigation />

      {/* ===== HERO ===== */}
      {c.prairie ? (
        <>
          {/* En-tête : la prairie illustrée de l'accueil */}
          <section ref={heroRef} className="min-h-[82vh] flex items-center justify-center relative overflow-hidden pt-24 pb-28">
            <div className="absolute inset-0 bg-foreground">
              <div className="absolute inset-0 opacity-80">
                <HeroPrairie />
              </div>
              <div
                className="absolute inset-0"
                style={{ background: "radial-gradient(ellipse 55% 45% at 50% 55%, rgba(20,22,20,0.6), transparent 75%)" }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 to-foreground/55" />
            <div className="relative z-10 text-center px-6 max-w-[900px]">
              <AnimatedSection>
                <p className="font-mono-brand text-[11px] md:text-[13px] uppercase tracking-[3px] text-olive-light mb-5">{c.hero.label}</p>
                <h1 className="font-display text-[clamp(2.2rem,6vw,4.6rem)] uppercase leading-[0.9] tracking-[-2px] text-primary-foreground mb-6">
                  {c.hero.titre}
                  <br />
                  <span className="text-olive-light">team building</span>
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={150}>
                <p className="font-editorial italic text-xl md:text-[28px] leading-snug text-primary-foreground max-w-[720px] mx-auto mb-10">
                  {c.hero.sousTitre}
                </p>
              </AnimatedSection>
              <AnimatedSection delay={300}>
                <div className="flex flex-wrap gap-6 justify-center">
                  <a
                    href="#devis"
                    className="btn-brutal inline-flex items-center gap-2 bg-accent text-foreground border-accent -rotate-2 hover:rotate-0 hover:bg-primary-foreground hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_hsl(var(--accent))] px-7 py-3"
                    style={BTN_GALET_A}
                  >
                    Demander un devis gratuit <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="tel:+33609831606"
                    className="btn-brutal inline-flex items-center gap-2 bg-[hsl(var(--green))] text-[hsl(var(--cream))] border-[hsl(var(--olive-light))] rotate-1 hover:rotate-0 hover:bg-[hsl(var(--cream))] hover:text-foreground hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_hsl(var(--green))] px-7 py-3"
                    style={BTN_GALET_B}
                  >
                    <Phone className="w-4 h-4" /> 06 09 83 16 06
                  </a>
                </div>
              </AnimatedSection>
            </div>
            <svg
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
              className="absolute -bottom-1 left-0 w-full h-[68px] md:h-[100px]"
              aria-hidden="true"
            >
              <path d="M0,120 C240,40 480,20 720,50 C960,80 1200,30 1440,120 L1440,120 L0,120 Z" fill="hsl(var(--cream))" />
            </svg>
          </section>

          {/* Le principe : collage en galets + garanties */}
          <section className="px-6 py-20 md:py-24">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-16 items-center">
              {collage}
              <AnimatedSection direction="right" delay={150}>
                <span className="section-label block mb-4">Le principe</span>
                <h2 className="font-display text-[clamp(2rem,4.2vw,3.2rem)] uppercase leading-[0.92] tracking-[-2px] mb-4">
                  Nous venons<br /><span className="md:ml-14 text-primary">dans vos locaux</span>
                </h2>
                <TraitDessine className="-mt-1 mb-5 md:ml-14" />
                <p className="font-editorial italic text-xl md:text-2xl text-foreground/60 mb-8 md:ml-14">
                  créer · écouter · repartir avec sa création
                </p>
                <ul className="space-y-5 max-w-[520px] mb-8">
                  {c.infos.map((item) => (
                    <li key={item.label} className="md:border-l-[3px] md:border-primary md:pl-6">
                      <p className="font-display uppercase text-base tracking-[-0.5px] mb-1">{item.label}</p>
                      <p className="text-base leading-relaxed text-foreground/75">{item.desc}</p>
                    </li>
                  ))}
                </ul>
                {garantiesList}
              </AnimatedSection>
            </div>
          </section>
        </>
      ) : (
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
                {c.hero.label}
              </span>
              <h1 className="font-display text-[clamp(2.4rem,5.4vw,4.4rem)] uppercase leading-[0.9] tracking-[-2px] mb-4">
                {c.hero.titre}
                <br />
                <span className="text-primary">team building</span>
              </h1>
              <TraitDessine className="mb-7" />
              <p className="font-editorial italic text-xl md:text-2xl text-foreground/80 max-w-[560px] leading-snug mb-9">{c.hero.sousTitre}</p>
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
                {c.garanties.map((g) => (
                  <li key={g} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="mt-0.5 w-5 h-5 flex-shrink-0 flex items-center justify-center bg-[hsl(var(--olive-light))] border-brutal-thin" style={PASTILLE}>
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </span>
                    {g}
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            {collage}
          </div>
        </section>
      )}

      {/* ===== INFOS CLÉS ===== */}
      {!c.prairie && (
      <section className="px-6 pb-14">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {c.infos.map((item, i) => (
            <div
              key={item.label}
              className={`px-6 py-7 text-center border-brutal shadow-brutal bg-[hsl(var(--cream))] ${["-rotate-1", "rotate-[0.6deg]", "-rotate-[0.4deg]"][i % 3]}`}
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
      )}

      {/* ===== PHOTOS ===== */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(36,25%,88%)" />
      <section className="bg-secondary pt-6 pb-10">
        <AnimatedSection className="px-6 max-w-6xl mx-auto mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="section-label block mb-3">En atelier</span>
            <h2 className="font-display text-[clamp(2rem,5vw,3.4rem)] uppercase leading-[0.92] tracking-[-1.5px]">
              {c.galerie.ligne1}
              <br />
              <span className="md:ml-16 text-primary">{c.galerie.ligne2}</span>
            </h2>
            <TraitDessine className="mt-3 md:ml-16" variant={1} />
          </div>
          <span className="self-start md:self-end font-mono-brand text-[10px] uppercase tracking-[2px] border-brutal-thin rounded-full px-4 py-2 bg-[hsl(var(--cream))] rotate-2">
            ← Faites glisser →
          </span>
        </AnimatedSection>
        <PhotoCarousel organic images={c.galerie.photos} />
        {c.galerie.credit && (
          <p className="px-6 max-w-6xl mx-auto text-right font-mono-brand text-[9px] uppercase tracking-[1px] text-foreground/50">{c.galerie.credit}</p>
        )}
      </section>

      {/* ===== HISTOIRE ===== */}
      <WaveDivider from="hsl(36,25%,88%)" to="hsl(36,33%,93%)" flip />
      <section className="px-6 pt-10 pb-20 md:pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-14 items-center">
          <AnimatedSection>
            <span className="section-label block mb-3">{c.histoire.label}</span>
            <h2 className="font-display text-[clamp(1.9rem,4.5vw,3rem)] uppercase leading-[0.95] tracking-[-1px]">
              {c.histoire.titre[0]} <span className="text-primary">{c.histoire.titre[1]}</span>
            </h2>
            <TraitDessine className="mt-3 mb-7" color="hsl(var(--orange))" variant={2} />
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground/80">
              {c.histoire.paragraphes.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {c.histoire.lien && (
              <Link
                to={c.histoire.lien.to}
                className="mt-7 btn-brutal inline-flex items-center gap-2 bg-[hsl(var(--cream))] text-foreground border-foreground -rotate-1 hover:rotate-0 text-xs px-6 py-3"
                style={BTN_GALET_B}
              >
                {c.histoire.lien.label} <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </AnimatedSection>
          <AnimatedSection delay={150} className="relative max-w-[400px] w-full mx-auto">
            {c.histoire.visuel.video ? (
              <video
                src={c.histoire.visuel.video}
                poster={c.histoire.visuel.src}
                className="w-[82%] aspect-[4/5] object-cover border-brutal shadow-brutal bg-white rotate-2"
                style={galetPhoto(2)}
                muted
                loop
                playsInline
                autoPlay
                preload="metadata"
                aria-label={c.histoire.visuel.alt}
              />
            ) : (
              <img
                src={c.histoire.visuel.src}
                alt={c.histoire.visuel.alt}
                className={`w-[82%] aspect-[4/5] object-cover border-brutal shadow-brutal bg-white rotate-2 ${c.histoire.visuel.grayscale ? "grayscale" : ""}`}
                style={galetPhoto(2)}
                loading="lazy"
              />
            )}
            {c.histoire.rond && (
              <div
                className="absolute right-0 bottom-[-6%] w-[48%] aspect-square bg-white border-brutal shadow-[4px_4px_0_hsl(var(--black))] -rotate-3 overflow-hidden flex items-center justify-center"
                style={PASTILLE}
              >
                <img
                  src={c.histoire.rond.src}
                  alt={c.histoire.rond.alt}
                  className={c.histoire.rond.contain ? "w-[80%] h-auto" : "w-full h-full object-cover"}
                  loading="lazy"
                />
              </div>
            )}
            <span className="absolute left-2 -bottom-4 font-mono-brand text-[9px] uppercase tracking-[2px] bg-[hsl(var(--olive-light))] border-brutal-thin rounded-full px-3 py-1.5 -rotate-2 shadow-[2px_2px_0_hsl(var(--black))]">
              {c.histoire.etiquette}
            </span>
            {c.histoire.rond?.credit && (
              <span className="absolute right-0 -bottom-[17%] w-[48%] text-center font-mono-brand text-[8px] uppercase tracking-[1px] text-foreground/50 leading-snug">
                {c.histoire.rond.credit}
              </span>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* ===== DÉROULÉ + INCLUS (bande verte) ===== */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(153,40%,30%)" />
      <section className="bg-[hsl(var(--green))] text-[hsl(var(--cream))] px-6 pt-10 pb-20 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="section-label block mb-3" style={{ color: "hsl(73 44% 67%)" }}>
              Comment ça marche
            </span>
            <h2 className="font-display text-[clamp(1.9rem,4.5vw,3rem)] uppercase leading-[0.95] tracking-[-1px]">
              Déroulement <span className="text-[hsl(var(--olive-light))]">de l'atelier</span>
            </h2>
            <TraitDessine className="mx-auto mt-3" color="hsl(var(--olive-light))" variant={1} />
          </AnimatedSection>
          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <svg
              className="hidden lg:block absolute left-[12%] right-[12%] top-[34px] w-[76%] h-6 pointer-events-none"
              viewBox="0 0 600 24"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M0 12 C 100 0, 200 24, 300 12 S 500 0, 600 12" fill="none" stroke="hsl(var(--olive-light))" strokeWidth="2.5" strokeDasharray="7 8" strokeLinecap="round" />
            </svg>
            {c.etapes.map((d, i) => (
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
            <div
              className="relative max-w-5xl mx-auto bg-[hsl(var(--cream))] text-foreground border-brutal shadow-[6px_6px_0_hsl(var(--black))] p-8 md:p-11 -rotate-[0.4deg]"
              style={galet(3)}
            >
              <span className="absolute -top-5 left-8 font-mono-brand text-[10px] uppercase tracking-[2px] bg-accent border-brutal-thin rounded-full px-4 py-2 rotate-2 shadow-[2px_2px_0_hsl(var(--black))]">
                Tout est compris
              </span>
              <h2 className="font-display text-xl md:text-2xl uppercase tracking-[-0.5px] mb-6 mt-2">Ce qui est inclus</h2>
              <div className="grid md:grid-cols-2 gap-x-10 gap-y-4">
                {c.inclus.map((item) => (
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
              {c.pourquoi.titre[0]} <span className="text-primary">{c.pourquoi.titre[1]}</span>
            </h2>
            <TraitDessine className="mx-auto mt-3" variant={0} />
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
            {c.pourquoi.items.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100} className={i % 2 === 1 ? "md:mt-10" : ""}>
                <div
                  className={`relative h-full bg-[hsl(var(--cream))] border-brutal shadow-brutal p-7 pt-11 ${["-rotate-1", "rotate-1", "rotate-[0.6deg]", "-rotate-[0.6deg]"][i % 4]} hover:rotate-0 transition-transform duration-300`}
                  style={galet(i + 1)}
                >
                  <div
                    className={`absolute -top-7 left-7 w-14 h-14 flex items-center justify-center border-brutal shadow-[3px_3px_0_hsl(var(--black))] ${TONS[i % 4]}`}
                    style={PASTILLE}
                  >
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg uppercase mb-3 leading-tight">{item.title}</h3>
                  <p className="text-sm md:text-base text-foreground/70 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
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
            {c.faq.map((f, i) => (
              <details
                key={f.q}
                className={`group border-brutal bg-[hsl(var(--cream))] px-6 md:px-8 py-5 open:shadow-brutal transition-shadow ${i % 2 ? "rotate-[0.3deg]" : "-rotate-[0.3deg]"}`}
                style={galet(i)}
                open={i === 0}
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display text-base md:text-lg uppercase tracking-[-0.5px]">{f.q}</h3>
                  <span
                    className="w-9 h-9 flex-shrink-0 flex items-center justify-center bg-[hsl(var(--olive-light))] border-brutal-thin transition-transform group-open:rotate-180"
                    style={PASTILLE}
                  >
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
              <p className="text-sm md:text-base text-foreground/75 leading-relaxed">{c.autres.texte}</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Link
                to="/team-building-nature-entreprise"
                className="btn-brutal inline-flex items-center gap-2 bg-[hsl(var(--olive-light))] text-foreground border-foreground rotate-1 hover:rotate-0 text-xs px-7 py-3.5 whitespace-nowrap"
                style={BTN_GALET_B}
              >
                Tous nos ateliers team building <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 font-mono-brand text-[10px] uppercase tracking-[2px]">
                {c.autres.liens.map((l) => (
                  <Link key={l.to} to={l.to} className="underline underline-offset-4 decoration-2 hover:text-primary">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ===== DEVIS (bande verte) ===== */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(153,40%,30%)" />
      <section id="devis" ref={devisRef} className="relative bg-[hsl(var(--green))] text-[hsl(var(--cream))] px-6 pt-8 pb-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_460px] gap-12 lg:gap-16 items-start">
          <AnimatedSection className="lg:pt-6">
            <span className="section-label block mb-3" style={{ color: "hsl(73 44% 67%)" }}>
              Organisons votre atelier
            </span>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] uppercase leading-[0.92] tracking-[-1px]">
              {c.devis.titre[0]}
              <br />
              <span className="text-[hsl(var(--olive-light))]">{c.devis.titre[1]}</span>
            </h2>
            <TraitDessine className="mt-3 mb-7" color="hsl(var(--olive-light))" variant={2} />
            <p className="text-base md:text-lg text-[hsl(var(--cream))]/85 leading-relaxed mb-8 max-w-xl">{c.devis.texte}</p>
            <ul className="space-y-3 mb-9">
              {c.garanties.map((g) => (
                <li key={g} className="flex items-start gap-3 text-[hsl(var(--cream))]/90">
                  <span
                    className="mt-0.5 w-6 h-6 flex-shrink-0 flex items-center justify-center bg-[hsl(var(--olive-light))] text-foreground border-brutal-thin"
                    style={PASTILLE}
                  >
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
            <QuoteForm atelierTitle={c.devis.atelierTitle} organic />
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

export default AtelierTeamBuildingPage;
