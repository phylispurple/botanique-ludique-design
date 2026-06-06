import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import { Compass, Building2, Quote, ArrowRight } from "lucide-react";

const stops = [
  { num: "01", title: "Les arbres d'alignement", desc: "Platanes, marronniers, ginkgos. Que racontent les choix d'arbres haussmanniens, qui les a importés, et comment la ville s'est-elle pensée comme un jardin ?" },
  { num: "02", title: "Les plantes pionnières des trottoirs", desc: "Coquelicots, vergerettes, pariétaires. Une botanique de la résistance qui pousse entre les pavés et raconte la vie autonome du végétal en ville." },
  { num: "03", title: "Les jardins partagés et squares", desc: "Une lecture sociale et politique des espaces verts municipaux, des squares haussmanniens aux jardins associatifs récents." },
  { num: "04", title: "Le végétal des façades et balcons", desc: "Comment les plantes habitent verticalement la ville, et ce qu'elles disent des goûts, des classes sociales et des époques." },
];

const publics = [
  "Mairies et services culturels municipaux",
  "Conseils de quartier et associations d'habitant·e·s",
  "Bibliothèques et médiathèques de proximité",
  "Festivals urbains, fêtes de quartier",
  "Universités populaires et permanentes",
];

const faqs = [
  { q: "Où se déroulent ces déambulations ?", a: "Dans les rues, squares, jardins de quartier et espaces publics de Paris et de petite couronne. Le parcours est dessiné avec vous, en fonction de votre territoire et de votre intention." },
  { q: "Avez-vous déjà mené ce type de balade en ville ?", a: "Oui. Une balade botanique urbaine a été conçue et menée pour la Mairie du 14e arrondissement de Paris, dans le cadre de leur programmation culturelle de quartier." },
  { q: "Quel est l'intérêt pour une mairie ou une collectivité ?", a: "Faire (re)découvrir le quartier autrement, valoriser la nature en ville, créer du lien entre habitant·e·s, et inscrire la culture scientifique dans l'espace public." },
  { q: "Quels formats sont possibles ?", a: "Balade de 1h30 à 2h, cycle de plusieurs balades thématiques, ou parcours intégré à un événement plus large (semaine de la nature, journées du patrimoine, fête de quartier)." },
];

const BaladeUrbaine = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--cream))] text-[hsl(var(--black))]">
      <SEO
        title="Balade botanique urbaine à Paris pour collectivités"
        description="Déambulation botanique urbaine pour mairies, collectivités et services culturels à Paris et en Île-de-France. Lecture politique et historique du végétal en ville."
        canonical="/balade-botanique-urbaine-paris"
      />
      <SchemaOrg type="FAQPage" data={{ questions: faqs.map(f => ({ question: f.q, answer: f.a })) }} />
      <Navigation />
      <LandingPhotoStrip />

      <main className="pt-24">
        {/* Hero - layout grille typographique différent */}
        <section className="border-b-[3px] border-[hsl(var(--black))] py-20 px-6 md:px-16 lg:px-[120px]">
          <div className="grid md:grid-cols-[1fr_auto] gap-10 items-end mb-10">
            <AnimatedSection>
              <Compass className="w-10 h-10 mb-6" strokeWidth={1.5} />
              <span className="font-mono-brand text-[11px] tracking-[3px] uppercase text-[hsl(var(--black))]/60 block mb-6">
                Pour les mairies et collectivités
              </span>
              <h1 className="font-display text-[clamp(2.3rem,6.5vw,5rem)] uppercase leading-[0.95] tracking-[-1.5px]">
                Déambulation<br />botanique urbaine
              </h1>
            </AnimatedSection>
            <div className="font-mono-brand text-xs uppercase tracking-[2px] text-[hsl(var(--black))]/50 hidden md:block">
              Paris · IDF<br />2024 — en cours
            </div>
          </div>
          <p className="text-lg leading-[1.7] max-w-[720px] text-[hsl(var(--black))]/80 mb-4">
            Une lecture politique, sociale et historique du végétal urbain. Des arbres d'alignement aux herbes folles des trottoirs, la ville se relit comme un grand jardin involontaire et chargé d'histoire.
          </p>
          <p className="text-base leading-[1.7] max-w-[720px] text-[hsl(var(--black))]/65">
            Format pensé pour les mairies, services culturels municipaux et collectivités qui souhaitent inscrire la culture scientifique dans l'espace public.
          </p>
        </section>

        {/* Référence Mairie 14 - bandeau horizontal sobre */}
        <section className="bg-[hsl(var(--black))] text-[hsl(var(--cream))] py-10 px-6 md:px-16 lg:px-[120px]">
          <div className="flex items-start gap-5 max-w-[1000px]">
            <Quote className="w-8 h-8 flex-shrink-0" strokeWidth={1.5} />
            <div>
              <p className="font-mono-brand text-[10px] tracking-[2.5px] uppercase opacity-60 mb-2">Référence</p>
              <p className="text-base md:text-lg leading-[1.6]">
                Balade botanique urbaine conçue et menée pour la <strong>Mairie du 14e arrondissement de Paris</strong>, dans le cadre de leur programmation culturelle de quartier.
              </p>
            </div>
          </div>
        </section>

        {/* Étapes type - format chiffres verticaux */}
        <section className="py-20 px-6 md:px-16 lg:px-[120px]">
          <AnimatedSection>
            <span className="font-mono-brand text-[11px] tracking-[3px] uppercase text-[hsl(var(--black))]/60 block mb-4">
              Itinéraire type
            </span>
            <h2 className="font-display text-3xl md:text-5xl uppercase leading-[0.95] mb-14 max-w-[800px]">
              Quatre arrêts<br />pour relire la ville
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-12 max-w-[1100px]">
            {stops.map((s, idx) => (
              <AnimatedSection key={s.num} delay={idx * 80}>
                <div className="flex gap-6">
                  <div className="font-display text-5xl leading-none flex-shrink-0">{s.num}</div>
                  <div>
                    <h3 className="font-display text-lg uppercase mb-2 leading-[1.2]">{s.title}</h3>
                    <p className="text-sm leading-[1.7] text-[hsl(var(--black))]/75">{s.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Publics ciblés - liste compacte */}
        <section className="bg-[hsl(var(--olive))] py-16 px-6 md:px-16 lg:px-[120px] border-y-[3px] border-[hsl(var(--black))]">
          <Building2 className="w-8 h-8 mb-5" strokeWidth={1.5} />
          <h2 className="font-display text-2xl md:text-3xl uppercase mb-8 leading-[1]">
            Pour qui ?
          </h2>
          <ul className="grid md:grid-cols-2 gap-x-10 gap-y-3 max-w-[900px]">
            {publics.map(p => (
              <li key={p} className="text-base leading-[1.6] flex items-start gap-3 border-b border-[hsl(var(--black))]/20 pb-3">
                <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" strokeWidth={1.5} />
                {p}
              </li>
            ))}
          </ul>
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
              Inscrire une balade dans la programmation de votre quartier
            </h3>
            <Link to="/contact" className="btn-brutal bg-[hsl(var(--black))] text-[hsl(var(--cream))] border-[hsl(var(--black))] text-sm px-8 py-4 flex-shrink-0">
              Nous écrire →
            </Link>
          </div>
          <p className="text-sm mt-6 text-[hsl(var(--black))]/60">
            Voir aussi : <Link to="/balades-botaniques" className="underline">tous les formats</Link> · <Link to="/balade-botanique-musee" className="underline">balade pour musées</Link> · <Link to="/balade-botanique-jardin-patrimonial" className="underline">jardins patrimoniaux</Link>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BaladeUrbaine;
