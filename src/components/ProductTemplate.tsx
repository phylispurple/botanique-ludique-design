import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import { Clock, Users, Sprout, ArrowRight, LucideIcon } from "lucide-react";

export interface ProductTemplateData {
  slug: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  lead: string;
  story: string[];
  steps: { title: string; desc: string }[];
  formats: { label: string; value: string }[];
  bookingTo?: string;
  bookingLabel?: string;
  related: { to: string; label: string }[];
  faqs: { q: string; a: string }[];
  videoSrc?: string;
  videoCaption?: string;
  photos?: { src: string; alt: string; caption?: string }[];

}

const ProductTemplate = ({ data }: { data: ProductTemplateData }) => {
  const Icon = data.icon;
  return (
    <div className="min-h-screen bg-[hsl(var(--cream))] text-[hsl(var(--black))]">
      <SEO title={data.metaTitle} description={data.metaDesc} canonical={`/${data.slug}`} />
      <SchemaOrg type="FAQPage" data={{ questions: data.faqs.map(f => ({ question: f.q, answer: f.a })) }} />
      <Navigation />

      <main className="pt-24">
        {/* Hero produit : 2 colonnes typographie + bloc infos */}
        <section className="border-b-[3px] border-[hsl(var(--black))] py-16 px-6 md:px-16 lg:px-[120px] grid md:grid-cols-[1.4fr_1fr] gap-12">
          <AnimatedSection>
            <Icon className="w-10 h-10 mb-6" strokeWidth={1.5} />
            <span className="font-mono-brand text-[11px] tracking-[3px] uppercase text-[hsl(var(--black))]/60 block mb-5">
              {data.eyebrow}
            </span>
            <h1 className="font-display text-[clamp(2.2rem,6vw,4.8rem)] uppercase leading-[0.95] tracking-[-1.5px] mb-6">
              {data.title}
            </h1>
            <p className="text-lg leading-[1.7] text-[hsl(var(--black))]/80">{data.lead}</p>
          </AnimatedSection>
          <div className="border-[3px] border-[hsl(var(--black))] p-7 self-start bg-[hsl(var(--olive))]">
            <p className="font-mono-brand text-[10px] tracking-[2.5px] uppercase mb-5">En un coup d'œil</p>
            <div className="space-y-4">
              {data.formats.map(f => (
                <div key={f.label} className="border-b border-[hsl(var(--black))]/25 pb-3 last:border-0">
                  <p className="font-mono-brand text-[10px] tracking-[2px] uppercase opacity-70">{f.label}</p>
                  <p className="font-display text-base uppercase mt-1">{f.value}</p>
                </div>
              ))}
            </div>
            {data.bookingTo && (
              <Link to={data.bookingTo} className="btn-brutal bg-[hsl(var(--black))] text-[hsl(var(--cream))] border-[hsl(var(--black))] text-xs px-6 py-3 mt-6 inline-flex w-full justify-center">
                {data.bookingLabel || "Réserver"} →
              </Link>
            )}
          </div>
        </section>

        {/* Histoire / récit */}
        <section className="py-16 px-6 md:px-16 lg:px-[120px] max-w-[900px]">
          <h2 className="font-display text-2xl md:text-4xl uppercase mb-10 leading-[1]">
            L'histoire
          </h2>
          <div className="space-y-5">
            {data.story.map((p, i) => (
              <p key={i} className="text-base leading-[1.8] text-[hsl(var(--black))]/80 text-justify">{p}</p>
            ))}
          </div>
        </section>

        {data.videoSrc && (
          <section className="border-t-[3px] border-[hsl(var(--black))] bg-[hsl(var(--cream))] py-16 px-6 md:px-16 lg:px-[120px]">
            <span className="font-mono-brand text-[11px] tracking-[3px] uppercase opacity-60 block mb-4">
              En vidéo
            </span>
            <h2 className="font-display text-2xl md:text-4xl uppercase mb-8 leading-[1]">
              L'atelier en mouvement
            </h2>
            <div className="border-[3px] border-[hsl(var(--black))] shadow-brutal overflow-hidden max-w-[1100px]">
              <video
                src={data.videoSrc}
                className="w-full h-auto block"
                controls
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
            {data.videoCaption && (
              <p className="font-mono-brand text-xs uppercase tracking-[2px] mt-4 opacity-70">{data.videoCaption}</p>
            )}
          </section>
        )}

        {data.photos && data.photos.length > 0 && (
          <section className="border-t-[3px] border-[hsl(var(--black))] bg-[hsl(var(--cream))] py-16 px-6 md:px-16 lg:px-[120px]">
            <span className="font-mono-brand text-[11px] tracking-[3px] uppercase opacity-60 block mb-4">
              En images
            </span>
            <h2 className="font-display text-2xl md:text-4xl uppercase mb-8 leading-[1]">
              L'atelier en photos
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-[1200px]">
              {data.photos.map((p, i) => (
                <figure key={i} className="border-[3px] border-[hsl(var(--black))] shadow-brutal overflow-hidden bg-[hsl(var(--cream))]">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={p.src} alt={p.alt} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  {p.caption && (
                    <figcaption className="font-mono-brand text-[10px] uppercase tracking-[1.5px] p-3 border-t-[3px] border-[hsl(var(--black))]">
                      {p.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>
        )}



        <section className="bg-[hsl(var(--black))] text-[hsl(var(--cream))] py-20 px-6 md:px-16 lg:px-[120px]">
          <span className="font-mono-brand text-[11px] tracking-[3px] uppercase opacity-60 block mb-4">
            Pas à pas
          </span>
          <h2 className="font-display text-2xl md:text-4xl uppercase mb-12 leading-[1]">
            Ce que vous allez vivre
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-[1100px]">
            {data.steps.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 80}>
                <div className="flex gap-5">
                  <span className="font-display text-4xl opacity-50 flex-shrink-0">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-lg uppercase mb-2">{s.title}</h3>
                    <p className="text-sm leading-[1.7] opacity-75">{s.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6 md:px-16 lg:px-[120px]">
          <h2 className="font-display text-2xl md:text-3xl uppercase mb-10">Questions fréquentes</h2>
          <div className="space-y-6 max-w-[900px]">
            {data.faqs.map((f, i) => (
              <div key={i} className="border-b border-[hsl(var(--black))]/15 pb-5">
                <h3 className="font-display text-base uppercase mb-2">{f.q}</h3>
                <p className="text-sm leading-[1.7] text-[hsl(var(--black))]/75">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t-[3px] border-[hsl(var(--black))] py-14 px-6 md:px-16 lg:px-[120px]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <h3 className="font-display text-2xl md:text-3xl uppercase leading-[1.05] max-w-[640px]">
              Prêt·e à participer ou organiser ?
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

export default ProductTemplate;
