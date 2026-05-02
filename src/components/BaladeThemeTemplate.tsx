import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import { Quote, ArrowRight, LucideIcon } from "lucide-react";

export interface BaladeThemeData {
  slug: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  lead: string;
  paragraphs: string[];
  pillars: { title: string; desc: string }[];
  pullQuote?: string;
  pullSource?: string;
  practical: { label: string; value: string }[];
  related: { to: string; label: string }[];
}

const BaladeThemeTemplate = ({ data }: { data: BaladeThemeData }) => {
  const Icon = data.icon;
  const faqs = [
    { q: `À qui s'adresse cette balade sur ${data.eyebrow.toLowerCase()} ?`, a: `Toute structure souhaitant proposer un temps de médiation original : musées, médiathèques, mairies, associations, universités populaires, jardins. Adultes et grands adolescent·e·s en priorité.` },
    { q: `Faut-il des connaissances préalables pour participer ?`, a: `Aucune. La balade est conçue pour rendre accessibles des contenus académiques exigeants, sans jamais sacrifier la rigueur. Les références sont citées et fournies sur demande.` },
    { q: `Est-ce une balade botanique classique ?`, a: `Non. Il s'agit d'une médiation ethnobotanique qui croise sciences naturelles, anthropologie de la nature et histoire sociale, en complément du discours botanique habituel.` },
  ];

  return (
    <div className="min-h-screen bg-[hsl(var(--cream))] text-[hsl(var(--black))]">
      <SEO title={data.metaTitle} description={data.metaDesc} canonical={`/${data.slug}`} />
      <SchemaOrg type="FAQPage" data={{ questions: faqs.map(f => ({ question: f.q, answer: f.a })) }} />
      <Navigation />

      <main className="pt-24">
        {/* Hero éditorial : grande typographie sans bordure */}
        <section className="py-20 px-6 md:px-16 lg:px-[120px]">
          <Icon className="w-12 h-12 mb-8" strokeWidth={1.5} />
          <span className="font-mono-brand text-[11px] tracking-[3px] uppercase text-[hsl(var(--black))]/60 block mb-6">
            {data.eyebrow}
          </span>
          <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] uppercase leading-[0.95] tracking-[-2px] mb-10 max-w-[1100px]">
            {data.title}
          </h1>
          <p className="text-xl leading-[1.6] max-w-[720px] font-light mb-8">
            {data.lead}
          </p>
        </section>

        {/* Texte long - format éditorial 2 colonnes */}
        <section className="px-6 md:px-16 lg:px-[120px] pb-16 grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-[1400px]">
          {data.paragraphs.map((p, i) => (
            <AnimatedSection key={i} delay={i * 60}>
              <p className="text-base leading-[1.8] text-[hsl(var(--black))]/80 text-justify">{p}</p>
            </AnimatedSection>
          ))}
        </section>

        {/* Citation tirée */}
        {data.pullQuote && (
          <section className="bg-[hsl(var(--black))] text-[hsl(var(--cream))] py-16 px-6 md:px-16 lg:px-[120px]">
            <Quote className="w-10 h-10 mb-6 opacity-60" strokeWidth={1.5} />
            <p className="font-display text-2xl md:text-4xl uppercase leading-[1.1] tracking-[-1px] max-w-[1100px]">
              {data.pullQuote}
            </p>
            {data.pullSource && (
              <p className="font-mono-brand text-[11px] tracking-[2.5px] uppercase opacity-60 mt-6">
                {data.pullSource}
              </p>
            )}
          </section>
        )}

        {/* Piliers */}
        <section className="py-20 px-6 md:px-16 lg:px-[120px]">
          <h2 className="font-display text-2xl md:text-4xl uppercase mb-12 max-w-[700px]">
            Ce que vous y découvrirez
          </h2>
          <div className="space-y-0">
            {data.pillars.map((p, idx) => (
              <AnimatedSection key={p.title} delay={idx * 70}>
                <div className="grid md:grid-cols-[80px_1fr] gap-6 py-8 border-t border-[hsl(var(--black))]/15 last:border-b">
                  <span className="font-display text-3xl text-[hsl(var(--black))]/40">0{idx + 1}</span>
                  <div>
                    <h3 className="font-display text-lg md:text-xl uppercase mb-3">{p.title}</h3>
                    <p className="text-base leading-[1.7] text-[hsl(var(--black))]/75 max-w-[720px]">{p.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Pratique */}
        <section className="bg-[hsl(var(--olive))] py-14 px-6 md:px-16 lg:px-[120px] border-y-[3px] border-[hsl(var(--black))]">
          <h2 className="font-display text-2xl md:text-3xl uppercase mb-8">En pratique</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-0">
            {data.practical.map(item => (
              <div key={item.label} className="border-[3px] border-[hsl(var(--black))] p-6 -mt-[3px] -ml-[3px] bg-[hsl(var(--cream))]">
                <p className="font-mono-brand text-[10px] tracking-[2px] uppercase opacity-60 mb-2">{item.label}</p>
                <p className="font-display text-base uppercase leading-[1.2]">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6 md:px-16 lg:px-[120px]">
          <h2 className="font-display text-2xl md:text-3xl uppercase mb-10">Questions fréquentes</h2>
          <div className="space-y-8 max-w-[900px]">
            {faqs.map((f, i) => (
              <div key={i} className="border-b border-[hsl(var(--black))]/15 pb-6">
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
              Programmer cette balade chez vous
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

export default BaladeThemeTemplate;
