import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import { Landmark, BookOpen, Users, Quote } from "lucide-react";

const axes = [
  {
    num: "01",
    title: "Lire les collections autrement",
    desc: "Une médiation conçue en complément du discours scientifique habituel. Les plantes deviennent des entrées dans l'histoire sociale, coloniale et culturelle, jamais en concurrence avec le propos botanique de l'institution.",
  },
  {
    num: "02",
    title: "Croiser les sources",
    desc: "Hélène Blais, Anna Tsing, Samir Boumediene, Philippe Descola : les balades mobilisent les travaux contemporains en histoire des sciences et anthropologie de la nature, accessibles à tous les publics.",
  },
  {
    num: "03",
    title: "Construire avec les équipes",
    desc: "Co-conception du parcours avec les médiateur·ice·s, conservateur·ice·s et services des publics. Cohérence assurée avec la programmation, la saison ou l'exposition en cours.",
  },
];

const faqs = [
  { q: "Quel est le format type d'une balade en musée ?", a: "Une à deux heures, en intérieur ou en jardin attenant, pour des groupes de 8 à 25 personnes. Format adaptable selon votre lieu et votre public, scolaire, adulte, famille ou professionnel·le·s du secteur." },
  { q: "Pour quel type d'institution ?", a: "Musées d'histoire, musées de société, musées de la ville, médiathèques, centres d'art, espaces muséographiques liés à un territoire ou à une collection vivante." },
  { q: "Avez-vous déjà conçu des balades pour des musées ?", a: "Oui. Une balade botanique a notamment été conçue et menée pour le Musée de la Ville de Saint-Quentin-en-Yvelines, en lien avec leur programmation et leur public." },
  { q: "Comment se passe la conception ?", a: "Un premier échange pour comprendre votre lieu, votre saison et votre public. Puis un repérage sur site, l'écriture du parcours, et un point de calage avec votre équipe avant la première date." },
];

const BaladeBotaniqueMusee = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--cream))] text-[hsl(var(--black))]">
      <SEO
        title="Balade botanique pour musées en Île-de-France"
        description="Balade botanique conçue pour les musées et institutions culturelles. Médiation ethnobotanique en complément de vos collections et programmations."
        canonical="/balade-botanique-musee"
      />
      <SchemaOrg type="FAQPage" data={{ questions: faqs.map(f => ({ question: f.q, answer: f.a })) }} />
      <Navigation />

      <main className="pt-24">
        <section className="border-b-[3px] border-[hsl(var(--black))] py-20 px-6 md:px-16 lg:px-[120px]">
          <AnimatedSection>
            <Landmark className="w-10 h-10 mb-6" strokeWidth={1.5} />
            <span className="font-mono-brand text-[11px] tracking-[3px] uppercase text-[hsl(var(--black))]/60 block mb-6">
              Médiation pour institutions culturelles
            </span>
            <h1 className="font-display text-[clamp(2.3rem,6.5vw,5rem)] uppercase leading-[0.95] tracking-[-1.5px] mb-8 max-w-[1000px]">
              Balade botanique pour musées
            </h1>
            <p className="text-lg leading-[1.7] max-w-[720px] text-[hsl(var(--black))]/80 mb-6">
              Une lecture ethnobotanique pensée en dialogue avec vos collections, votre territoire et votre programmation. Le végétal devient un fil narratif complémentaire pour parler d'histoire sociale, de circulations et de savoirs effacés.
            </p>
            <p className="text-base leading-[1.7] max-w-[720px] text-[hsl(var(--black))]/65">
              Une approche déjà mise en œuvre pour le Musée de la Ville de Saint-Quentin-en-Yvelines, sur un format de balade construite avec leur équipe.
            </p>
          </AnimatedSection>
        </section>

        {/* Bandeau référence */}
        <section className="bg-[hsl(var(--olive))] py-10 px-6 md:px-16 lg:px-[120px] border-b-[3px] border-[hsl(var(--black))]">
          <div className="flex items-start gap-5 max-w-[900px]">
            <Quote className="w-8 h-8 flex-shrink-0 mt-1" strokeWidth={1.5} />
            <div>
              <p className="font-display text-lg md:text-xl uppercase leading-[1.2] mb-2">
                Référence
              </p>
              <p className="text-base leading-[1.6]">
                Balade botanique conçue pour le <strong>Musée de la Ville de Saint-Quentin-en-Yvelines</strong>, autour de la lecture ethnobotanique du paysage et des collections vivantes du territoire.
              </p>
            </div>
          </div>
        </section>

        {/* 3 axes */}
        <section className="px-6 md:px-16 lg:px-[120px] py-20">
          <AnimatedSection>
            <span className="font-mono-brand text-[11px] tracking-[3px] uppercase text-[hsl(var(--black))]/60 block mb-4">
              Notre approche
            </span>
            <h2 className="font-display text-3xl md:text-5xl uppercase leading-[0.95] mb-12 max-w-[800px]">
              Trois principes<br />de médiation
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-0">
            {axes.map((a, idx) => (
              <AnimatedSection key={a.num} delay={idx * 100} className="h-full">
                <div className="h-full p-8 md:p-10 border-[3px] border-[hsl(var(--black))] -mt-[3px] -ml-[3px] flex flex-col">
                  <span className="font-display text-5xl mb-6">{a.num}</span>
                  <h3 className="font-display text-lg uppercase leading-[1.15] mb-3">{a.title}</h3>
                  <p className="text-sm leading-[1.7] text-[hsl(var(--black))]/75">{a.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[hsl(var(--black))] text-[hsl(var(--cream))] py-20 px-6 md:px-16 lg:px-[120px]">
          <span className="font-mono-brand text-[11px] tracking-[3px] uppercase opacity-60 block mb-4">
            Questions fréquentes
          </span>
          <h2 className="font-display text-3xl md:text-4xl uppercase leading-[0.95] mb-12">FAQ</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-[1100px]">
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
              Construire une balade pour votre saison culturelle
            </h3>
            <Link to="/contact" className="btn-brutal bg-[hsl(var(--black))] text-[hsl(var(--cream))] border-[hsl(var(--black))] text-sm px-8 py-4 flex-shrink-0">
              Nous écrire →
            </Link>
          </div>
          <p className="text-sm mt-6 text-[hsl(var(--black))]/60">
            Voir aussi : <Link to="/balades-botaniques" className="underline">tous les formats de balade</Link> · <Link to="/balade-botanique-jardin-patrimonial" className="underline">jardins patrimoniaux</Link> · <Link to="/balade-botanique-urbaine-paris" className="underline">déambulation urbaine</Link>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BaladeBotaniqueMusee;
