import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Compass, Leaf, ArrowRight } from "lucide-react";

export interface BaladeGeoData {
  slug: string;
  dept: string;
  deptCode: string;
  region?: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  keywords?: string;
  intro: string;
  context: string;
  spots: { name: string; desc: string }[];
  audiences: string[];
  references?: string;
  related: { to: string; label: string }[];
}

const BaladeGeoTemplate = ({ data }: { data: BaladeGeoData }) => {
  const faqs = [
    { q: `Où se déroulent les balades botaniques en ${data.dept} ?`, a: `Nous intervenons dans les jardins, parcs, espaces patrimoniaux et rues de l'ensemble du département (${data.deptCode}). Le parcours est dessiné avec votre structure, en fonction du lieu, du public et de l'intention.` },
    { q: `Pour qui sont pensées ces balades en ${data.dept} ?`, a: `Pour les institutions culturelles, mairies, médiathèques, musées, jardins remarquables, écoles, associations et collectivités du ${data.deptCode}. Public adulte, scolaire, famille ou professionnel·le selon votre besoin.` },
    { q: `Quelle est la durée d'une balade ?`, a: `Format type 1h30 à 2h, avec possibilité de cycle ou de format court selon votre programmation. Groupes de 10 à 25 personnes.` },
    { q: `Comment réserver une intervention dans le ${data.deptCode} ?`, a: `Un premier échange par mail à contact@botaniqueludique.com ou par téléphone au 06 09 83 16 06 pour comprendre votre projet, puis devis et calage du parcours.` },
  ];

  return (
    <div className="min-h-screen bg-[hsl(var(--cream))] text-[hsl(var(--black))]">
      <SEO
        title={data.metaTitle}
        description={data.metaDesc}
        keywords={data.keywords}
        canonical={`/${data.slug}`}
        region={data.region}
        city={data.dept}
      />
      <SchemaOrg type="Service" data={{
        serviceType: "Balade botanique guidée",
        name: `Balade botanique en ${data.dept}`,
        description: data.intro,
        areaServed: [data.dept],
      }} />
      <SchemaOrg type="FAQPage" data={{ questions: faqs.map(f => ({ question: f.q, answer: f.a })) }} />
      <Navigation />

      <main className="pt-24">
        {/* Hero - format géo : barre département */}
        <section className="border-b-[3px] border-[hsl(var(--black))] py-16 px-6 md:px-16 lg:px-[120px]">
          <div className="flex items-center gap-3 mb-8 font-mono-brand text-[11px] tracking-[3px] uppercase">
            <MapPin className="w-4 h-4" strokeWidth={1.5} />
            <span>{data.dept} · {data.deptCode}</span>
          </div>
          <AnimatedSection>
            <h1 className="font-display text-[clamp(2.2rem,6vw,4.8rem)] uppercase leading-[0.95] tracking-[-1.5px] mb-8 max-w-[1000px]">
              {data.title}
            </h1>
            <p className="text-lg leading-[1.7] max-w-[720px] text-[hsl(var(--black))]/80 mb-5">
              {data.intro}
            </p>
            <p className="text-base leading-[1.7] max-w-[720px] text-[hsl(var(--black))]/65">
              {data.context}
            </p>
          </AnimatedSection>
        </section>

        {/* Lieux concernés */}
        <section className="py-16 px-6 md:px-16 lg:px-[120px]">
          <span className="font-mono-brand text-[11px] tracking-[3px] uppercase text-[hsl(var(--black))]/60 block mb-4">
            Sur le terrain
          </span>
          <h2 className="font-display text-2xl md:text-4xl uppercase leading-[1] mb-12 max-w-[700px]">
            Lieux explorés en {data.dept}
          </h2>
          <div className="grid md:grid-cols-2 gap-0">
            {data.spots.map((s, idx) => (
              <AnimatedSection key={s.name} delay={idx * 80} className="h-full">
                <div className="h-full p-7 md:p-9 border-[3px] border-[hsl(var(--black))] -mt-[3px] -ml-[3px]">
                  <Compass className="w-6 h-6 mb-4" strokeWidth={1.5} />
                  <h3 className="font-display text-lg uppercase leading-[1.15] mb-3">{s.name}</h3>
                  <p className="text-sm leading-[1.7] text-[hsl(var(--black))]/75">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Référence éventuelle */}
        {data.references && (
          <section className="bg-[hsl(var(--olive))] py-10 px-6 md:px-16 lg:px-[120px] border-y-[3px] border-[hsl(var(--black))]">
            <p className="font-mono-brand text-[10px] tracking-[2.5px] uppercase mb-2">Référence locale</p>
            <p className="text-base md:text-lg leading-[1.6] max-w-[900px]">{data.references}</p>
          </section>
        )}

        {/* Publics */}
        <section className="py-16 px-6 md:px-16 lg:px-[120px]">
          <h2 className="font-display text-2xl md:text-3xl uppercase mb-8">Pour quels publics</h2>
          <ul className="grid md:grid-cols-2 gap-x-10 gap-y-3 max-w-[900px]">
            {data.audiences.map(p => (
              <li key={p} className="flex items-start gap-3 border-b border-[hsl(var(--black))]/15 pb-3 text-base">
                <Leaf className="w-4 h-4 mt-1 flex-shrink-0" strokeWidth={1.5} />
                {p}
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ sombre */}
        <section className="bg-[hsl(var(--black))] text-[hsl(var(--cream))] py-16 px-6 md:px-16 lg:px-[120px]">
          <h2 className="font-display text-2xl md:text-4xl uppercase mb-10">Questions fréquentes</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-[1100px]">
            {faqs.map((f, i) => (
              <div key={i}>
                <h3 className="font-display text-base uppercase mb-3 leading-[1.25]">{f.q}</h3>
                <p className="text-sm leading-[1.7] opacity-75">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 px-6 md:px-16 lg:px-[120px] border-t-[3px] border-[hsl(var(--black))]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <h3 className="font-display text-2xl md:text-3xl uppercase leading-[1.05] max-w-[640px]">
              Faire venir une balade botanique dans le {data.deptCode}
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

export default BaladeGeoTemplate;
