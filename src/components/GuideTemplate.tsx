import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight, BookOpen, LucideIcon } from "lucide-react";

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
}

const GuideTemplate = ({ data }: { data: GuideTemplateData }) => {
  const Icon = data.icon || BookOpen;
  return (
    <div className="min-h-screen bg-[hsl(var(--cream))] text-[hsl(var(--black))]">
      <SEO title={data.metaTitle} description={data.metaDesc} canonical={`/${data.slug}`} />
      <SchemaOrg type="Article" data={{
        headline: data.title,
        description: data.metaDesc,
        url: `https://botaniqueludique.com/${data.slug}`,
      }} />
      <Navigation />

      <main className="pt-24">
        {/* Hero éditorial sobre */}
        <section className="py-16 px-6 md:px-16 lg:px-[120px] border-b border-[hsl(var(--black))]/15">
          <Icon className="w-10 h-10 mb-6" strokeWidth={1.5} />
          <span className="font-mono-brand text-[11px] tracking-[3px] uppercase text-[hsl(var(--black))]/60 block mb-5">
            Guide · {data.eyebrow}
          </span>
          <h1 className="font-display text-[clamp(2.2rem,6vw,5rem)] uppercase leading-[0.95] tracking-[-1.5px] mb-8 max-w-[1000px]">
            {data.title}
          </h1>
          <p className="text-lg leading-[1.7] max-w-[720px] text-[hsl(var(--black))]/80">{data.intro}</p>
        </section>

        {/* Sommaire */}
        <section className="py-12 px-6 md:px-16 lg:px-[120px] bg-[hsl(var(--olive))] border-b-[3px] border-[hsl(var(--black))]">
          <p className="font-mono-brand text-[11px] tracking-[3px] uppercase mb-4">Sommaire</p>
          <ol className="space-y-2 list-decimal pl-5 max-w-[700px]">
            {data.toc.map((t, i) => (
              <li key={i}>
                <a href={`#section-${i + 1}`} className="text-base underline hover:no-underline">{t}</a>
              </li>
            ))}
          </ol>
        </section>

        {/* Sections longues */}
        <article className="py-16 px-6 md:px-16 lg:px-[120px] max-w-[820px]">
          {data.sections.map((s, i) => (
            <AnimatedSection key={s.id} delay={i * 50}>
              <section id={`section-${i + 1}`} className="mb-14 scroll-mt-24">
                <span className="font-mono-brand text-[10px] tracking-[2px] uppercase text-[hsl(var(--black))]/50">
                  Chapitre {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-2xl md:text-3xl uppercase leading-[1.1] mt-2 mb-6">
                  {s.title}
                </h2>
                <div className="space-y-4">
                  {s.paragraphs.map((p, j) => (
                    <p key={j} className="text-base leading-[1.8] text-[hsl(var(--black))]/85 text-justify">{p}</p>
                  ))}
                </div>
                {s.list && (
                  <ul className="mt-5 space-y-2 border-l-[3px] border-[hsl(var(--black))] pl-5">
                    {s.list.map((l, k) => (
                      <li key={k} className="text-base leading-[1.6]">{l}</li>
                    ))}
                  </ul>
                )}
              </section>
            </AnimatedSection>
          ))}

          <div className="border-t-[3px] border-[hsl(var(--black))] pt-8 mt-10">
            <p className="font-display text-lg md:text-xl uppercase leading-[1.2] mb-4">En conclusion</p>
            <p className="text-base leading-[1.8] text-[hsl(var(--black))]/85">{data.conclusion}</p>
          </div>
        </article>

        {/* Liens */}
        <section className="bg-[hsl(var(--black))] text-[hsl(var(--cream))] py-12 px-6 md:px-16 lg:px-[120px]">
          <p className="font-mono-brand text-[11px] tracking-[3px] uppercase opacity-60 mb-4">Pour aller plus loin</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {data.related.map(r => (
              <Link key={r.to} to={r.to} className="underline hover:no-underline inline-flex items-center gap-1">
                {r.label} <ArrowRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GuideTemplate;
