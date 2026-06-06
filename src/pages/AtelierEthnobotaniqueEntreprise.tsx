import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import { Leaf, Compass, BookOpen, ArrowRight } from "lucide-react";

const AtelierEthnobotaniqueEntreprise = () => {
  const faqs = [
    {
      q: "Qu'est-ce qu'un atelier ethnobotanique en entreprise",
      a: "C'est une intervention qui croise la botanique et les sciences sociales. Plutôt que de manipuler des plantes hors contexte, vos équipes explorent les usages, récits, circulations et imaginaires que nos sociétés tissent avec le végétal. Pensé pour 8 à 25 personnes, le format dure 1h30 à 2h30.",
    },
    {
      q: "Pourquoi choisir l'angle ethnobotanique pour un team building",
      a: "Parce qu'il sort des activités végétales standardisées. L'ethnobotanique apporte une profondeur narrative qui marque les esprits, ouvre la conversation entre collaborateur·ices, et porte une réflexion sur le vivant cohérente avec vos engagements RSE et QVCT.",
    },
    {
      q: "Quels formats proposez-vous",
      a: "Trois formats principaux : balade ethnobotanique guidée autour de votre siège, atelier en salle avec manipulation de plantes (kokedama, teinture végétale, terrarium) accompagnée du récit ethnobotanique associé, ou cycle annuel mêlant les deux pour une démarche QVCT au long cours.",
    },
    {
      q: "Quelle est l'expertise de l'intervenante",
      a: "Vanessa Charlery est anthropologue de formation (EHESS) et médiatrice ethnobotanique. Elle aborde les plantes comme des archives vivantes des rapports humain-végétal, avec une exigence scientifique et un soin pédagogique adapté à un public professionnel adulte.",
    },
    {
      q: "Intervenez-vous partout en Île-de-France",
      a: "Oui, à Paris (75), dans les Yvelines (78), les Hauts-de-Seine (92), le Val-d'Oise (95) et plus largement en Île-de-France. Nous nous déplaçons sur votre site ou organisons l'atelier dans un parc ou jardin proche.",
    },
  ];

  return (
    <div className="min-h-screen bg-[hsl(var(--cream))] text-[hsl(var(--black))]">
      <SEO
        title="Atelier ethnobotanique entreprise, team building végétal IDF"
        description="Atelier ethnobotanique pour entreprise en Île-de-France. Approche anthropologique du vivant, format team building, QVCT ou semaine RSE. Intervention sur site."
        keywords="atelier ethnobotanique entreprise, team building végétal, ethnobotanique team building, qvct nature entreprise, rse plantes vivant, médiation ethnobotanique entreprise"
        canonical="/atelier-ethnobotanique-entreprise"
      />
      <SchemaOrg
        type="Service"
        data={{
          serviceType: "Atelier ethnobotanique pour entreprise",
          name: "Atelier ethnobotanique entreprise",
          description:
            "Atelier en entreprise mêlant botanique, anthropologie et manipulation végétale, animé par une médiatrice ethnobotanique.",
          areaServed: ["Île-de-France", "Paris", "Yvelines", "Hauts-de-Seine", "Val-d'Oise"],
        }}
      />
      <SchemaOrg type="FAQPage" data={{ questions: faqs.map((f) => ({ question: f.q, answer: f.a })) }} />
      <Navigation />

      <main className="pt-24">
        <section className="border-b-[3px] border-[hsl(var(--black))] py-16 px-6 md:px-16 lg:px-[120px]">
          <div className="flex items-center gap-3 mb-8 font-mono-brand text-[11px] tracking-[3px] uppercase">
            <Leaf className="w-4 h-4" strokeWidth={1.5} />
            <span>Format entreprise · Île-de-France</span>
          </div>
          <AnimatedSection>
            <h1 className="font-display text-[clamp(2.2rem,6vw,4.8rem)] uppercase leading-[0.95] tracking-[-1.5px] mb-8 max-w-[1000px]">
              Atelier ethnobotanique pour entreprise
            </h1>
            <p className="text-lg leading-[1.7] max-w-[720px] text-[hsl(var(--black))]/80 mb-5">
              Une approche du végétal qui sort des team buildings standardisés. Vos équipes manipulent, observent
              et écoutent le récit que nos sociétés tissent avec les plantes.
            </p>
            <p className="text-base leading-[1.7] max-w-[720px] text-[hsl(var(--black))]/65">
              Pensé pour les directions QVCT, RSE et CSE qui cherchent une activité dense, intelligente et porteuse
              de sens, l'atelier ethnobotanique combine la pratique manuelle et la profondeur narrative d'une
              médiatrice formée en anthropologie.
            </p>
          </AnimatedSection>
        </section>

        <section className="py-16 px-6 md:px-16 lg:px-[120px]">
          <span className="font-mono-brand text-[11px] tracking-[3px] uppercase text-[hsl(var(--black))]/60 block mb-4">
            Trois formats
          </span>
          <h2 className="font-display text-2xl md:text-4xl uppercase leading-[1] mb-12 max-w-[700px]">
            Comment ça se passe
          </h2>
          <div className="grid md:grid-cols-3 gap-0">
            {[
              {
                title: "Balade ethnobotanique guidée",
                desc: "Sortie d'1h30 à 2h autour de votre siège. Vos équipes redécouvrent rues, parcs et arbres familiers à travers les usages, migrations et récits qui les accompagnent.",
              },
              {
                title: "Atelier en salle avec récit",
                desc: "Manipulation végétale (kokedama, teinture, terrarium) tissée au récit ethnobotanique correspondant. La plante n'est plus un objet décoratif mais une archive vivante.",
              },
              {
                title: "Cycle QVCT annuel",
                desc: "Plusieurs interventions étalées sur l'année, chaque saison ouvrant une nouvelle lecture du végétal. Idéal pour ancrer une démarche bien-être au travail dans la durée.",
              },
            ].map((s, idx) => (
              <AnimatedSection key={s.title} delay={idx * 80} className="h-full">
                <div className="h-full p-7 md:p-9 border-[3px] border-[hsl(var(--black))] -mt-[3px] -ml-[3px]">
                  <Compass className="w-6 h-6 mb-4" strokeWidth={1.5} />
                  <h3 className="font-display text-lg uppercase leading-[1.15] mb-3">{s.title}</h3>
                  <p className="text-sm leading-[1.7] text-[hsl(var(--black))]/75">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        <section className="bg-[hsl(var(--olive))] py-12 px-6 md:px-16 lg:px-[120px] border-y-[3px] border-[hsl(var(--black))]">
          <div className="flex items-start gap-5 max-w-[900px]">
            <BookOpen className="w-7 h-7 mt-1 flex-shrink-0" strokeWidth={1.5} />
            <div>
              <p className="font-mono-brand text-[10px] tracking-[2.5px] uppercase mb-2">Notre angle</p>
              <p className="text-base md:text-lg leading-[1.6]">
                L'ethnobotanique étudie les relations entre humains et plantes. Animée par une médiatrice formée
                à l'EHESS, l'intervention apporte rigueur scientifique et finesse narrative, sans jargon, dans un
                cadre adapté au monde de l'entreprise.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 md:px-16 lg:px-[120px]">
          <h2 className="font-display text-2xl md:text-3xl uppercase mb-8">Pour quelles équipes</h2>
          <ul className="grid md:grid-cols-2 gap-x-10 gap-y-3 max-w-[900px]">
            {[
              "Directions RSE et développement durable",
              "Responsables QVCT et bien-être au travail",
              "Comités sociaux et économiques (CSE)",
              "Équipes RH pour séminaires et journées d'intégration",
              "Comités de direction en journée stratégique",
              "Associations professionnelles et clubs métier",
            ].map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 border-b border-[hsl(var(--black))]/15 pb-3 text-base"
              >
                <Leaf className="w-4 h-4 mt-1 flex-shrink-0" strokeWidth={1.5} />
                {p}
              </li>
            ))}
          </ul>
        </section>

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

        <section className="py-14 px-6 md:px-16 lg:px-[120px] border-t-[3px] border-[hsl(var(--black))]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <h3 className="font-display text-2xl md:text-3xl uppercase leading-[1.05] max-w-[640px]">
              Construire un atelier ethnobotanique pour vos équipes
            </h3>
            <Link
              to="/contact"
              className="btn-brutal bg-[hsl(var(--black))] text-[hsl(var(--cream))] border-[hsl(var(--black))] text-sm px-8 py-4 flex-shrink-0"
            >
              Nous écrire →
            </Link>
          </div>
          <p className="text-sm mt-6 text-[hsl(var(--black))]/60 flex flex-wrap gap-x-5 gap-y-2">
            <span>Voir aussi :</span>
            <Link to="/team-building-nature-entreprise" className="underline inline-flex items-center gap-1">
              Team building nature <ArrowRight className="w-3 h-3" />
            </Link>
            <Link to="/balade-botanique-entreprise-cse" className="underline inline-flex items-center gap-1">
              Balade entreprise CSE <ArrowRight className="w-3 h-3" />
            </Link>
            <Link to="/pro" className="underline inline-flex items-center gap-1">
              Pro <ArrowRight className="w-3 h-3" />
            </Link>
          </p>
        </section>
      </main>

      <LandingPhotoStrip />

      <Footer />
    </div>
  );
};

export default AtelierEthnobotaniqueEntreprise;
