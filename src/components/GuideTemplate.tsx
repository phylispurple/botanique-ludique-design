import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import WaveDivider from "@/components/WaveDivider";
import TraitDessine from "@/components/TraitDessine";
import EnvieAtelier from "@/components/EnvieAtelier";
import { galet, galetPhoto, PASTILLE } from "@/lib/organic";
import { ArrowRight, BookOpen, Check, LucideIcon } from "lucide-react";

export interface GuideTemplateData {
  slug: string;
  icon?: LucideIcon;
  eyebrow: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  intro: string;
  toc: string[];
  sections: { id: string; title: string; paragraphs: string[]; list?: string[] }[];
  conclusion: string;
  related: { to: string; label: string }[];
  /** Photo d'illustration du haut de page (facultative). */
  image?: { src: string; alt: string };
  /** Encadré « passer à l'atelier » : sujet (« un kokedama ») et page entreprise associée. */
  atelier?: { sujet?: string; entreprise?: string };
}

const TONS = ["bg-accent", "bg-[hsl(var(--olive-light))]", "bg-[hsl(var(--green))] text-[hsl(var(--cream))]", "bg-[hsl(var(--cream))]"];

const GuideTemplate = ({ data }: { data: GuideTemplateData }) => {
  const Icon = data.icon || BookOpen;
  return (
    <div className="min-h-screen bg-[hsl(var(--cream))] text-[hsl(var(--black))] overflow-x-clip">
      <SEO title={data.metaTitle} description={data.metaDesc} canonical={`/${data.slug}`} />
      <SchemaOrg
        type="Article"
        data={{
          headline: data.title,
          description: data.metaDesc,
          url: `https://botaniqueludique.com/${data.slug}`,
        }}
      />
      <Navigation />

      <main>
        {/* ===== HERO ===== */}
        <section className="relative px-6 pt-28 pb-14 md:pt-36 md:pb-16">
          <div
            className="absolute -left-32 top-20 w-[460px] h-[460px] bg-[hsl(var(--olive-light))]/30 pointer-events-none"
            style={{ borderRadius: "58% 42% 38% 62% / 45% 55% 45% 55%" }}
            aria-hidden="true"
          />
          <div className={`relative max-w-6xl mx-auto grid gap-12 items-center ${data.image ? "lg:grid-cols-[1.2fr_1fr]" : ""}`}>
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-7">
                <div className="w-14 h-14 flex items-center justify-center bg-[hsl(var(--olive-light))] border-brutal shadow-[3px_3px_0_hsl(var(--black))] -rotate-3" style={PASTILLE}>
                  <Icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <span className="inline-flex font-mono-brand text-[10px] md:text-[11px] uppercase tracking-[2px] bg-[hsl(var(--green))] text-[hsl(var(--cream))] border-brutal-thin rounded-full px-4 py-2 -rotate-1 shadow-[3px_3px_0_hsl(var(--black))]">
                  Guide · {data.eyebrow}
                </span>
              </div>
              <h1 className="font-display text-[clamp(2.2rem,5.5vw,4.4rem)] uppercase leading-[0.92] tracking-[-1.5px] mb-4 max-w-[900px]">{data.title}</h1>
              <TraitDessine className="mb-7" />
              <p className="font-editorial italic text-xl md:text-2xl text-foreground/80 max-w-[640px] leading-snug">{data.intro}</p>
            </AnimatedSection>
            {data.image && (
              <AnimatedSection delay={150} className="max-w-[420px] w-full mx-auto">
                <img src={data.image.src} alt={data.image.alt} className="w-full aspect-[4/5] object-cover border-brutal shadow-brutal rotate-2" style={galetPhoto(1)} />
              </AnimatedSection>
            )}
          </div>
        </section>

        {/* ===== SOMMAIRE ===== */}
        <section className="px-6 pb-14">
          <div className="max-w-4xl mx-auto bg-[hsl(var(--cream))] border-brutal shadow-brutal p-7 md:p-9 -rotate-[0.4deg]" style={galet(2)}>
            <p className="section-label mb-5">Au sommaire</p>
            <ol className="flex flex-wrap gap-3">
              {data.toc.map((t, i) => (
                <li key={i}>
                  <a
                    href={`#section-${i + 1}`}
                    className={`inline-flex items-center gap-2 text-sm border-brutal-thin rounded-full pl-1.5 pr-4 py-1.5 bg-[hsl(var(--cream))] hover:bg-[hsl(var(--olive-light))] transition-colors ${i % 2 ? "rotate-1" : "-rotate-1"}`}
                  >
                    <span className="w-6 h-6 flex items-center justify-center font-display text-[11px] bg-foreground text-primary-foreground" style={PASTILLE}>
                      {i + 1}
                    </span>
                    {t}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ===== CHAPITRES ===== */}
        <WaveDivider from="hsl(36,33%,93%)" to="hsl(36,25%,88%)" />
        <article className="bg-secondary px-6 pt-8 pb-20">
          <div className="max-w-3xl mx-auto space-y-16">
            {data.sections.map((s, i) => (
              <AnimatedSection key={s.id} delay={40}>
                <section id={`section-${i + 1}`} className="scroll-mt-28">
                  <div className="flex items-center gap-4 mb-5">
                    <span
                      className={`w-14 h-14 flex-shrink-0 flex items-center justify-center font-display text-lg border-brutal shadow-[3px_3px_0_hsl(var(--black))] ${TONS[i % TONS.length]} ${i % 2 ? "rotate-3" : "-rotate-3"}`}
                      style={PASTILLE}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-display text-2xl md:text-3xl uppercase leading-[1.05]">{s.title}</h2>
                  </div>
                  <div className="space-y-4 md:pl-[72px]">
                    {s.paragraphs.map((p, j) => (
                      <p key={j} className="text-base md:text-lg leading-[1.8] text-foreground/85">
                        {p}
                      </p>
                    ))}
                    {s.list && (
                      <ul className="mt-2 grid sm:grid-cols-2 gap-3">
                        {s.list.map((l, k) => (
                          <li key={k} className="flex items-start gap-3 bg-[hsl(var(--cream))] border-brutal-thin p-3.5 text-sm md:text-base leading-snug" style={galet(k)}>
                            <span className="mt-0.5 w-6 h-6 flex-shrink-0 flex items-center justify-center bg-[hsl(var(--olive-light))] border-brutal-thin" style={PASTILLE}>
                              <Check className="w-3.5 h-3.5" strokeWidth={3} />
                            </span>
                            {l}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </section>
              </AnimatedSection>
            ))}

            <AnimatedSection>
              <div className="relative bg-[hsl(var(--cream))] border-brutal shadow-[6px_6px_0_hsl(var(--black))] p-7 md:p-9 rotate-[0.4deg]" style={galet(3)}>
                <span className="absolute -top-4 left-7 font-mono-brand text-[10px] uppercase tracking-[2px] bg-accent border-brutal-thin rounded-full px-4 py-1.5 -rotate-2">
                  En conclusion
                </span>
                <p className="text-base md:text-lg leading-[1.8] text-foreground/85 mt-2">{data.conclusion}</p>
              </div>
            </AnimatedSection>
          </div>
        </article>
        <WaveDivider from="hsl(36,25%,88%)" to="hsl(36,33%,93%)" flip />

        {/* ===== PASSER À L'ATELIER ===== */}
        <EnvieAtelier sujet={data.atelier?.sujet} entreprise={data.atelier?.entreprise} className="pt-6" />

        {/* ===== POUR ALLER PLUS LOIN ===== */}
        <section className="px-6 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="section-label mb-5">Pour aller plus loin</p>
            <div className="flex flex-wrap justify-center gap-3">
              {data.related.map((r, i) => (
                <Link
                  key={r.to}
                  to={r.to}
                  className={`inline-flex items-center gap-1.5 font-mono-brand text-[11px] uppercase tracking-[1.5px] bg-[hsl(var(--cream))] border-brutal-thin rounded-full px-4 py-2 shadow-[2px_2px_0_hsl(var(--black))] hover:bg-[hsl(var(--olive-light))] transition-colors ${i % 2 ? "rotate-1" : "-rotate-1"}`}
                >
                  {r.label} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </section>
        <WaveDivider from="hsl(36,33%,93%)" to="hsl(0,0%,10%)" flip />
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default GuideTemplate;
