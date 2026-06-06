import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import { TreePine, Sprout, Quote, Clock, Users, MapPin } from "lucide-react";

const sites = [
  "Jardins remarquables d'Île-de-France",
  "Serres patrimoniales et jardins d'hiver",
  "Parcs historiques de villes et de châteaux",
  "Écoles d'horticulture et de paysage",
  "Jardins associatifs et conservatoires végétaux",
];

const themes = [
  {
    title: "Plantes voyageuses",
    desc: "Les chemins empruntés par les espèces, les jardins d'acclimatation, les expéditions naturalistes et ce que les collections racontent de l'histoire impériale.",
  },
  {
    title: "Femmes et botanique",
    desc: "Des chasseuses de plantes oubliées à la pteridomanie victorienne, comment les jardins ont été l'un des seuls espaces scientifiques accessibles aux femmes.",
  },
  {
    title: "Lire un jardin comme une archive",
    desc: "Décrypter les choix d'aménagement, les noms latins, les étiquettes et les manques. Apprendre à voir un jardin comme un document historique vivant.",
  },
  {
    title: "Anthropologie de la nature",
    desc: "À partir des travaux de Philippe Descola, comment d'autres cultures conçoivent les plantes et nous invitent à reconsidérer notre rapport au vivant.",
  },
];

const faqs = [
  { q: "Pour quels lieux est pensée cette balade ?", a: "Jardins remarquables, serres patrimoniales, parcs historiques, écoles d'horticulture, conservatoires végétaux. Tout lieu où les plantes constituent une collection lisible." },
  { q: "Avez-vous une expérience dans ce type de lieu ?", a: "Oui. Une balade ethnobotanique a notamment été menée pour l'École Du Breuil, école d'horticulture et de paysage de la Ville de Paris, autour de la lecture historique et anthropologique des collections." },
  { q: "Quelle durée et quel public ?", a: "Format type 1h30 à 2h, pour des groupes de 10 à 25 personnes. Adapté aux publics adultes, étudiant·e·s, professionnel·le·s du paysage ou amateur·ice·s éclairé·e·s." },
  { q: "Pouvez-vous animer une formation pour les équipes ?", a: "Oui. Au-delà de la balade publique, nous proposons des temps de formation pour les équipes de médiation, jardinier·e·s ou guides du lieu, autour de la lecture ethnobotanique des collections." },
];

const JardinPatrimonial = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--cream))] text-[hsl(var(--black))]">
      <SEO
        title="Balade botanique en jardin patrimonial et serre"
        description="Balade ethnobotanique pour jardins remarquables, serres patrimoniales et écoles d'horticulture en Île-de-France. Lecture historique et anthropologique des collections."
        canonical="/balade-botanique-jardin-patrimonial"
      />
      <SchemaOrg type="FAQPage" data={{ questions: faqs.map(f => ({ question: f.q, answer: f.a })) }} />
      <Navigation />
      <LandingPhotoStrip />

      <main className="pt-24">
        {/* Hero */}
        <section className="bg-[hsl(var(--olive))] border-b-[3px] border-[hsl(var(--black))] py-20 px-6 md:px-16 lg:px-[120px]">
          <AnimatedSection>
            <TreePine className="w-10 h-10 mb-6" strokeWidth={1.5} />
            <span className="font-mono-brand text-[11px] tracking-[3px] uppercase block mb-6">
              Jardins remarquables · Serres patrimoniales
            </span>
            <h1 className="font-display text-[clamp(2.3rem,6.5vw,5rem)] uppercase leading-[0.95] tracking-[-1.5px] mb-8 max-w-[1000px]">
              Balade<br />en jardin patrimonial
            </h1>
            <p className="text-lg leading-[1.7] max-w-[720px] mb-4">
              Chaque collection est une archive vivante. Une balade pour relire les jardins remarquables et les serres historiques d'Île-de-France à travers l'histoire sociale, coloniale et culturelle de leurs plantes.
            </p>
          </AnimatedSection>
        </section>

        {/* Référence École Du Breuil */}
        <section className="py-12 px-6 md:px-16 lg:px-[120px] border-b border-[hsl(var(--black))]/15">
          <div className="grid md:grid-cols-[auto_1fr] gap-6 items-start max-w-[1000px]">
            <Quote className="w-8 h-8" strokeWidth={1.5} />
            <div>
              <p className="font-mono-brand text-[10px] tracking-[2.5px] uppercase mb-2 text-[hsl(var(--black))]/60">
                Référence
              </p>
              <p className="text-base leading-[1.7]">
                Balade ethnobotanique conçue pour l'<strong>École Du Breuil</strong>, école d'horticulture et de paysage de la Ville de Paris, autour de la lecture historique et anthropologique de leurs collections vivantes.
              </p>
            </div>
          </div>
        </section>

        {/* Lieux */}
        <section className="py-16 px-6 md:px-16 lg:px-[120px]">
          <AnimatedSection>
            <h2 className="font-display text-2xl md:text-3xl uppercase leading-[1] mb-8">
              Lieux concernés
            </h2>
            <ul className="grid md:grid-cols-2 gap-x-10 gap-y-4 max-w-[900px]">
              {sites.map(s => (
                <li key={s} className="flex items-start gap-3 text-base leading-[1.6] border-b border-[hsl(var(--black))]/10 pb-3">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" strokeWidth={1.5} />
                  {s}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </section>

        {/* Thèmes - liste alternée différente du musée */}
        <section className="bg-[hsl(var(--black))] text-[hsl(var(--cream))] py-20 px-6 md:px-16 lg:px-[120px]">
          <span className="font-mono-brand text-[11px] tracking-[3px] uppercase opacity-60 block mb-4">
            Quatre angles disponibles
          </span>
          <h2 className="font-display text-3xl md:text-5xl uppercase leading-[0.95] mb-14 max-w-[700px]">
            Thématiques<br />de balade
          </h2>
          <div className="space-y-0">
            {themes.map((t, idx) => (
              <AnimatedSection key={t.title} delay={idx * 80}>
                <div className="grid md:grid-cols-[120px_1fr] gap-6 py-8 border-t border-[hsl(var(--cream))]/15 last:border-b">
                  <span className="font-display text-3xl opacity-40">0{idx + 1}</span>
                  <div>
                    <h3 className="font-display text-xl uppercase mb-3">{t.title}</h3>
                    <p className="text-sm leading-[1.7] opacity-75 max-w-[640px]">{t.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Pratique */}
        <section className="py-16 px-6 md:px-16 lg:px-[120px] border-b border-[hsl(var(--black))]/15">
          <h2 className="font-display text-2xl md:text-3xl uppercase mb-8">Format pratique</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-[1000px]">
            {[
              { icon: Clock, label: "Durée", value: "1h30 à 2h" },
              { icon: Users, label: "Groupe", value: "10 à 25 personnes" },
              { icon: Sprout, label: "Saison", value: "Printemps · été · automne" },
            ].map(item => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="border-[3px] border-[hsl(var(--black))] p-6">
                  <Icon className="w-6 h-6 mb-3" strokeWidth={1.5} />
                  <p className="font-mono-brand text-[10px] tracking-[2px] uppercase opacity-60 mb-1">{item.label}</p>
                  <p className="font-display text-lg uppercase">{item.value}</p>
                </div>
              );
            })}
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
        <section className="bg-[hsl(var(--olive))] py-14 px-6 md:px-16 lg:px-[120px] border-t-[3px] border-[hsl(var(--black))]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <h3 className="font-display text-2xl md:text-3xl uppercase leading-[1.05] max-w-[640px]">
              Faire entrer l'ethnobotanique dans votre jardin
            </h3>
            <Link to="/contact" className="btn-brutal bg-[hsl(var(--black))] text-[hsl(var(--cream))] border-[hsl(var(--black))] text-sm px-8 py-4 flex-shrink-0">
              Nous écrire →
            </Link>
          </div>
          <p className="text-sm mt-6">
            Voir aussi : <Link to="/balades-botaniques" className="underline">tous les formats</Link> · <Link to="/balade-botanique-musee" className="underline">balade pour musées</Link> · <Link to="/balade-botanique-urbaine-paris" className="underline">balade urbaine</Link>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default JardinPatrimonial;
