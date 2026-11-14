import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import WaveDivider from "@/components/WaveDivider";
import TraitDessine from "@/components/TraitDessine";
import HeroPrairie from "@/components/HeroPrairie";
import { galet, galetPhoto, PASTILLE } from "@/lib/organic";
import { Heart, Sparkles, ArrowRight, ChevronDown, Smile, Gift, LucideIcon } from "lucide-react";

export interface OccasionTemplateData {
  slug: string;
  icon?: LucideIcon;
  eyebrow: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  pitch: string;
  why: { title: string; desc: string }[];
  formula: { line: string; detail: string }[];
  testimonialMood?: string;
  practical: { label: string; value: string }[];
  related: { to: string; label: string }[];
  faqs: { q: string; a: string }[];
  /** Jusqu'à 3 photos pour le collage du haut de page (facultatif). */
  photos?: { src: string; alt: string }[];
  /** Illustration d'en-tête : active l'en-tête « prairie » de l'accueil avec cette image. */
  heroImage?: string;
}

const BTN_A = { borderRadius: "28px 14px 26px 12px / 14px 26px 12px 28px" };
const BTN_B = { borderRadius: "14px 30px 12px 26px / 26px 12px 30px 14px" };
const TONS = ["bg-accent", "bg-[hsl(var(--olive-light))]", "bg-[hsl(var(--green))] text-[hsl(var(--cream))]", "bg-[hsl(210_41%_24%)] text-[hsl(var(--cream))]"];
const TILTS = ["-rotate-1", "rotate-1", "-rotate-[0.6deg]", "rotate-[0.6deg]"];
const ICONES_POURQUOI = [Sparkles, Heart, Smile, Gift];

const OccasionTemplate = ({ data }: { data: OccasionTemplateData }) => {
  const Icon = data.icon || Heart;
  const contact = `/contact?subject=${encodeURIComponent(`Demande : ${data.eyebrow}`)}`;
  const photos = data.photos ?? [];

  return (
    <div className="min-h-screen bg-[hsl(var(--cream))] text-[hsl(var(--black))] overflow-x-clip">
      <SEO title={data.metaTitle} description={data.metaDesc} canonical={`/${data.slug}`} />
      <SchemaOrg type="FAQPage" data={{ questions: data.faqs.map((f) => ({ question: f.q, answer: f.a })) }} />
      <Navigation />

      <main>
        {/* ===== HERO ===== */}
        {data.heroImage ? (
          <>
            {/* En-tête : illustration dans le style de la prairie de l'accueil */}
            <section className="min-h-[82vh] flex items-center justify-center relative overflow-hidden pt-24 pb-28">
              <div className="absolute inset-0 bg-foreground">
                <div className="absolute inset-0 opacity-80">
                  <HeroPrairie image={data.heroImage} />
                </div>
                <div
                  className="absolute inset-0"
                  style={{ background: "radial-gradient(ellipse 55% 45% at 50% 55%, rgba(20,22,20,0.6), transparent 75%)" }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 to-foreground/55" />
              <div className="relative z-10 text-center px-6 max-w-[900px]">
                <AnimatedSection>
                  <p className="font-mono-brand text-[11px] md:text-[13px] uppercase tracking-[3px] text-olive-light mb-5">{data.eyebrow}</p>
                  <h1 className="font-display text-[clamp(2.2rem,6vw,4.6rem)] uppercase leading-[0.9] tracking-[-2px] text-primary-foreground mb-6">
                    {data.title}
                  </h1>
                </AnimatedSection>
                <AnimatedSection delay={150}>
                  <p className="font-editorial italic text-xl md:text-[26px] leading-snug text-primary-foreground max-w-[720px] mx-auto mb-10">{data.pitch}</p>
                </AnimatedSection>
                <AnimatedSection delay={300}>
                  <div className="flex flex-wrap gap-6 justify-center">
                    <Link
                      to={contact}
                      className="btn-brutal inline-flex items-center gap-2 bg-accent text-foreground border-accent -rotate-2 hover:rotate-0 hover:bg-primary-foreground hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_hsl(var(--accent))] px-7 py-3"
                      style={BTN_A}
                    >
                      Réserver ou demander un devis <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      to="/workshops"
                      className="btn-brutal inline-flex items-center gap-2 bg-[hsl(var(--green))] text-[hsl(var(--cream))] border-[hsl(var(--olive-light))] rotate-1 hover:rotate-0 hover:bg-[hsl(var(--cream))] hover:text-foreground hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_hsl(var(--green))] px-7 py-3"
                      style={BTN_B}
                    >
                      Voir les ateliers
                    </Link>
                  </div>
                </AnimatedSection>
              </div>
              <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute -bottom-1 left-0 w-full h-[68px] md:h-[100px]" aria-hidden="true">
                <path d="M0,120 C240,40 480,20 720,50 C960,80 1200,30 1440,120 L1440,120 L0,120 Z" fill="hsl(var(--cream))" />
              </svg>
            </section>

            {/* En pratique : collage de photos + infos */}
            <section className="px-6 py-20 md:py-24">
              <div className={`max-w-6xl mx-auto grid gap-14 lg:gap-16 items-center ${photos.length ? "lg:grid-cols-[1fr_1.1fr]" : ""}`}>
                {photos.length > 0 && (
                  <AnimatedSection delay={150} className="relative h-[400px] sm:h-[470px] max-w-[520px] w-full mx-auto">
                    {photos[0] && (
                      <img src={photos[0].src} alt={photos[0].alt} className="absolute right-0 top-0 w-[60%] h-[76%] object-cover border-brutal shadow-brutal rotate-2" style={galetPhoto(1)} />
                    )}
                    {photos[1] && (
                      <img
                        src={photos[1].src}
                        alt={photos[1].alt}
                        className="absolute left-0 bottom-0 w-[60%] h-[52%] object-cover border-brutal shadow-brutal -rotate-2"
                        style={galetPhoto(0)}
                        loading="lazy"
                      />
                    )}
                    {photos[2] && (
                      <img
                        src={photos[2].src}
                        alt={photos[2].alt}
                        className="absolute left-[4%] top-[4%] w-[36%] aspect-square object-cover border-brutal -rotate-3"
                        style={{ borderRadius: "58% 42% 52% 48% / 46% 56% 44% 54%" }}
                        loading="lazy"
                      />
                    )}
                  </AnimatedSection>
                )}
                <AnimatedSection direction="right" delay={150}>
                  <span className="section-label block mb-4">En pratique</span>
                  <h2 className="font-display text-[clamp(2rem,4.2vw,3.2rem)] uppercase leading-[0.92] tracking-[-2px] mb-4">
                    Nous venons<br /><span className="md:ml-14 text-primary">chez vous</span>
                  </h2>
                  <TraitDessine className="-mt-1 mb-8 md:ml-14" />
                  <ul className="space-y-5 max-w-[520px]">
                    {data.practical.map((p) => (
                      <li key={p.label} className="md:border-l-[3px] md:border-primary md:pl-6">
                        <p className="font-mono-brand text-[10px] uppercase tracking-[2px] text-foreground/55 mb-1">{p.label}</p>
                        <p className="font-display uppercase text-lg tracking-[-0.5px]">{p.value}</p>
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>
              </div>
            </section>
          </>
        ) : (
          <>
        <section className="relative px-6 pt-28 pb-16 md:pt-36 md:pb-20">
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
          <div className={`relative max-w-6xl mx-auto grid gap-14 lg:gap-10 items-center ${photos.length ? "lg:grid-cols-[1.1fr_1fr]" : ""}`}>
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-7">
                <div className="w-14 h-14 flex items-center justify-center bg-[hsl(var(--olive-light))] border-brutal shadow-[3px_3px_0_hsl(var(--black))] -rotate-3" style={PASTILLE}>
                  <Icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <span className="inline-flex font-mono-brand text-[10px] md:text-[11px] uppercase tracking-[2px] bg-[hsl(var(--green))] text-[hsl(var(--cream))] border-brutal-thin rounded-full px-4 py-2 -rotate-1 shadow-[3px_3px_0_hsl(var(--black))]">
                  {data.eyebrow}
                </span>
              </div>
              <h1 className="font-display text-[clamp(2.3rem,5.4vw,4.4rem)] uppercase leading-[0.92] tracking-[-1.5px] mb-4 max-w-[900px]">{data.title}</h1>
              <TraitDessine className="mb-7" />
              <p className="font-editorial italic text-xl md:text-2xl text-foreground/80 max-w-[600px] leading-snug mb-8">{data.pitch}</p>
              <div className="flex flex-wrap gap-4 mb-9">
                <Link to={contact} className="btn-brutal inline-flex items-center gap-2 bg-accent text-foreground border-foreground -rotate-1 hover:rotate-0 text-xs px-8 py-3.5" style={BTN_A}>
                  Réserver ou demander un devis <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/workshops" className="btn-brutal inline-flex items-center gap-2 bg-[hsl(var(--cream))] text-foreground border-foreground rotate-1 hover:rotate-0 text-xs px-7 py-3.5" style={BTN_B}>
                  Voir les ateliers
                </Link>
              </div>
              <ul className="flex flex-wrap gap-2.5">
                {data.practical.map((p, i) => (
                  <li
                    key={p.label}
                    className={`inline-flex items-baseline gap-2 bg-[hsl(var(--cream))] border-brutal-thin rounded-full px-4 py-2 shadow-[2px_2px_0_hsl(var(--black))] ${i % 2 ? "rotate-1" : "-rotate-1"}`}
                  >
                    <span className="font-mono-brand text-[9px] uppercase tracking-[1.5px] text-foreground/55">{p.label}</span>
                    <span className="font-display text-sm uppercase">{p.value}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            {photos.length > 0 && (
              <AnimatedSection delay={150} className="relative h-[400px] sm:h-[470px] max-w-[520px] w-full mx-auto">
                {photos[0] && (
                  <img src={photos[0].src} alt={photos[0].alt} className="absolute right-0 top-0 w-[60%] h-[76%] object-cover border-brutal shadow-brutal rotate-2" style={galetPhoto(1)} />
                )}
                {photos[1] && (
                  <img
                    src={photos[1].src}
                    alt={photos[1].alt}
                    className="absolute left-0 bottom-0 w-[60%] h-[52%] object-cover border-brutal shadow-brutal -rotate-2"
                    style={galetPhoto(0)}
                    loading="lazy"
                  />
                )}
                {photos[2] && (
                  <img
                    src={photos[2].src}
                    alt={photos[2].alt}
                    className="absolute left-[4%] top-[4%] w-[36%] aspect-square object-cover border-brutal -rotate-3"
                    style={{ borderRadius: "58% 42% 52% 48% / 46% 56% 44% 54%" }}
                    loading="lazy"
                  />
                )}
              </AnimatedSection>
            )}
          </div>
        </section>
          </>
        )}

        {/* ===== POURQUOI ===== */}
        <WaveDivider from="hsl(36,33%,93%)" to="hsl(36,25%,88%)" />
        <section className="bg-secondary px-6 pt-8 pb-20 md:pb-24">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-14">
              <span className="section-label block mb-3">Pourquoi ce format</span>
              <h2 className="font-display text-[clamp(1.9rem,4.5vw,3rem)] uppercase leading-[0.95] tracking-[-1px]">
                Un moment <span className="text-primary">qui a du sens</span>
              </h2>
              <TraitDessine className="mx-auto mt-3" variant={1} />
            </AnimatedSection>
            <div className={`grid gap-8 ${data.why.length >= 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"}`}>
              {data.why.map((w, i) => {
                const I = ICONES_POURQUOI[i % ICONES_POURQUOI.length];
                return (
                  <AnimatedSection key={w.title} delay={i * 100} className={i % 2 === 1 ? "md:mt-8" : ""}>
                    <div className={`relative h-full bg-[hsl(var(--cream))] border-brutal shadow-brutal p-7 pt-12 ${TILTS[i % 4]} hover:rotate-0 transition-transform duration-300`} style={galet(i + 1)}>
                      <div className={`absolute -top-7 left-7 w-14 h-14 flex items-center justify-center border-brutal shadow-[3px_3px_0_hsl(var(--black))] ${TONS[i % 4]}`} style={PASTILLE}>
                        <I className="w-6 h-6" />
                      </div>
                      <h3 className="font-display text-lg uppercase leading-tight mb-2">{w.title}</h3>
                      <p className="text-sm md:text-base text-foreground/75 leading-relaxed">{w.desc}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== DÉROULÉ (bande verte) ===== */}
        <WaveDivider from="hsl(36,25%,88%)" to="hsl(153,40%,30%)" />
        <section className="bg-[hsl(var(--green))] text-[hsl(var(--cream))] px-6 pt-8 pb-20 md:pb-24">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <span className="section-label block mb-3" style={{ color: "hsl(73 44% 67%)" }}>
                Comment ça se passe
              </span>
              <h2 className="font-display text-[clamp(1.9rem,4.5vw,3rem)] uppercase leading-[0.95] tracking-[-1px]">
                Déroulé <span className="text-[hsl(var(--olive-light))]">type</span>
              </h2>
              <TraitDessine className="mx-auto mt-3" color="hsl(var(--olive-light))" variant={2} />
            </AnimatedSection>
            <div className={`relative grid sm:grid-cols-2 gap-6 ${data.formula.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
              <svg className="hidden lg:block absolute left-[12%] right-[12%] top-[34px] w-[76%] h-6 pointer-events-none" viewBox="0 0 600 24" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0 12 C 100 0, 200 24, 300 12 S 500 0, 600 12" fill="none" stroke="hsl(var(--olive-light))" strokeWidth="2.5" strokeDasharray="7 8" strokeLinecap="round" />
              </svg>
              {data.formula.map((f, i) => (
                <AnimatedSection key={f.line} delay={i * 110}>
                  <div className="relative text-center h-full flex flex-col">
                    <div
                      className="relative z-10 w-[68px] h-[68px] mx-auto mb-5 flex items-center justify-center bg-[hsl(var(--cream))] text-foreground border-brutal shadow-[3px_3px_0_hsl(var(--black))]"
                      style={PASTILLE}
                    >
                      <span className="font-display text-xl">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="flex-1 bg-[hsl(var(--cream))] text-foreground border-brutal p-6" style={galet(i)}>
                      <h3 className="font-display text-lg uppercase tracking-[-0.5px] mb-2">{f.line}</h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">{f.detail}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            {data.testimonialMood && (
              <p className="font-editorial italic text-xl md:text-2xl text-center text-[hsl(var(--cream))]/90 mt-14 max-w-2xl mx-auto leading-snug">{data.testimonialMood}</p>
            )}
          </div>
        </section>
        <WaveDivider from="hsl(153,40%,30%)" to="hsl(36,33%,93%)" flip />

        {/* ===== FAQ ===== */}
        <section className="px-6 pt-8 pb-16">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-10">
              <span className="section-label block mb-3">FAQ</span>
              <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] uppercase leading-[0.95] tracking-[-1px]">
                Questions <span className="text-primary">fréquentes</span>
              </h2>
              <TraitDessine className="mx-auto mt-3" variant={0} />
            </AnimatedSection>
            <div className="space-y-5">
              {data.faqs.map((f, i) => (
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

        {/* ===== RÉSERVER ===== */}
        <section className="px-6 pb-20">
          <AnimatedSection>
            <div
              className="max-w-5xl mx-auto bg-[hsl(var(--cream))] border-[3px] border-dashed border-foreground px-7 py-9 md:px-12 md:py-10 grid md:grid-cols-[1fr_auto] gap-8 items-center -rotate-[0.3deg]"
              style={{ borderRadius: "46px 70px 40px 64px / 64px 40px 70px 46px" }}
            >
              <div className="text-center md:text-left">
                <span className="section-label block mb-2">On s'organise ?</span>
                <h2 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] uppercase leading-[0.95] tracking-[-0.5px] mb-3">
                  Réserver ou <span className="text-primary">poser une question</span>
                </h2>
                <p className="text-sm md:text-base text-foreground/75 leading-relaxed">Dites-nous la date, le lieu et le nombre de personnes : nous vous répondons sous 48 heures.</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 mt-4 font-mono-brand text-[10px] uppercase tracking-[2px]">
                  <span className="text-foreground/55">Voir aussi :</span>
                  {data.related.map((r) => (
                    <Link key={r.to} to={r.to} className="underline underline-offset-4 decoration-2 hover:text-primary">
                      {r.label}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to={contact} className="btn-brutal inline-flex items-center gap-2 bg-accent text-foreground border-foreground rotate-1 hover:rotate-0 text-xs px-8 py-3.5 whitespace-nowrap justify-self-center" style={BTN_B}>
                Nous écrire <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </section>
        <WaveDivider from="hsl(36,33%,93%)" to="hsl(0,0%,10%)" flip />
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default OccasionTemplate;
