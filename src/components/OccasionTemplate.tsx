import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import { Heart, Sparkles, ArrowRight, LucideIcon } from "lucide-react";

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
}

const OccasionTemplate = ({ data }: { data: OccasionTemplateData }) => {
  const Icon = data.icon || Heart;
  return (
    <div className="min-h-screen bg-[hsl(var(--cream))] text-[hsl(var(--black))]">
      <SEO title={data.metaTitle} description={data.metaDesc} canonical={`/${data.slug}`} />
      <SchemaOrg type="FAQPage" data={{ questions: data.faqs.map(f => ({ question: f.q, answer: f.a })) }} />
      <Navigation />

      <main className="pt-24">
        {/* Hero centré sobre */}
        <section className="bg-[hsl(var(--olive))] border-b-[3px] border-[hsl(var(--black))] py-20 px-6 md:px-16 lg:px-[120px] text-center">
          <Icon className="w-12 h-12 mx-auto mb-6" strokeWidth={1.5} />
          <span className="font-mono-brand text-[11px] tracking-[3px] uppercase block mb-4">
            {data.eyebrow}
          </span>
          <h1 className="font-display text-[clamp(2.2rem,6vw,5rem)] uppercase leading-[0.95] tracking-[-1.5px] mb-8 max-w-[1000px] mx-auto">
            {data.title}
          </h1>
          <p className="text-lg leading-[1.7] max-w-[720px] mx-auto">{data.pitch}</p>
        </section>

        {/* Pourquoi - 3 ou 4 cartes */}
        <section className="py-16 px-6 md:px-16 lg:px-[120px]">
          <h2 className="font-display text-2xl md:text-4xl uppercase mb-10 leading-[1] text-center">
            Pourquoi ce format ?
          </h2>
          <div className="grid md:grid-cols-3 gap-0 max-w-[1100px] mx-auto">
            {data.why.map((w, idx) => (
              <AnimatedSection key={w.title} delay={idx * 80} className="h-full">
                <div className="h-full p-7 border-[3px] border-[hsl(var(--black))] -mt-[3px] -ml-[3px] flex flex-col">
                  <Sparkles className="w-5 h-5 mb-4" strokeWidth={1.5} />
                  <h3 className="font-display text-lg uppercase mb-3 leading-[1.15]">{w.title}</h3>
                  <p className="text-sm leading-[1.7] text-[hsl(var(--black))]/75">{w.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Déroulé en formule */}
        <section className="bg-[hsl(var(--black))] text-[hsl(var(--cream))] py-16 px-6 md:px-16 lg:px-[120px]">
          <h2 className="font-display text-2xl md:text-4xl uppercase mb-12 leading-[1] max-w-[700px]">
            Déroulé type
          </h2>
          <div className="space-y-0 max-w-[900px]">
            {data.formula.map((f, i) => (
              <AnimatedSection key={i} delay={i * 70}>
                <div className="grid md:grid-cols-[140px_1fr] gap-4 py-5 border-t border-[hsl(var(--cream))]/15 last:border-b">
                  <p className="font-display text-lg uppercase">{f.line}</p>
                  <p className="text-sm leading-[1.7] opacity-80">{f.detail}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Pratique */}
        <section className="py-16 px-6 md:px-16 lg:px-[120px]">
          <h2 className="font-display text-2xl md:text-3xl uppercase mb-8 text-center">En pratique</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 max-w-[1100px] mx-auto">
            {data.practical.map(p => (
              <div key={p.label} className="border-[3px] border-[hsl(var(--black))] p-6 -mt-[3px] -ml-[3px]">
                <p className="font-mono-brand text-[10px] tracking-[2px] uppercase opacity-60 mb-2">{p.label}</p>
                <p className="font-display text-base uppercase leading-[1.2]">{p.value}</p>
              </div>
            ))}
          </div>
          {data.testimonialMood && (
            <p className="font-display text-xl md:text-2xl uppercase italic text-center mt-12 max-w-[800px] mx-auto leading-[1.2]">
              « {data.testimonialMood} »
            </p>
          )}
        </section>

        {/* FAQ */}
        <section className="bg-[hsl(var(--olive))] py-16 px-6 md:px-16 lg:px-[120px] border-y-[3px] border-[hsl(var(--black))]">
          <h2 className="font-display text-2xl md:text-3xl uppercase mb-10">Questions fréquentes</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-[1100px]">
            {data.faqs.map((f, i) => (
              <div key={i}>
                <h3 className="font-display text-base uppercase mb-2 leading-[1.25]">{f.q}</h3>
                <p className="text-sm leading-[1.7]">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 px-6 md:px-16 lg:px-[120px]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <h3 className="font-display text-2xl md:text-3xl uppercase leading-[1.05] max-w-[640px]">
              Réserver ou poser une question
            </h3>
            <Link to="/contact" className="btn-brutal bg-[hsl(var(--black))] text-[hsl(var(--cream))] border-[hsl(var(--black))] text-sm px-8 py-4 flex-shrink-0">
              Nous écrire →
            </Link>
          </div>
          <p className="text-sm mt-6 text-[hsl(var(--black))]/60 flex flex-wrap gap-x-5 gap-y-2">
            <span>Voir aussi :</span>
            {data.related.map(r => (
              <Link key={r.to} to={r.to} className="underline inline-flex items-center gap-1">
                {r.label} <ArrowRight className="w-3 h-3" />
              </Link>
            ))}
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OccasionTemplate;
