import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import { Users, Clock, MapPin, Check } from "lucide-react";
import heroTerrarium from "@/assets/gallery-terrarium.webp";

const INFOS = [
  { icon: Users, label: "10 à 100 participants", desc: "Groupes flexibles" },
  { icon: Clock, label: "1h à 2h30", desc: "Selon le format" },
  { icon: MapPin, label: "Déplacement sur site", desc: "Partout en Île-de-France" },
];

const INCLUS = [
  "Matériel et fournitures (pots, substrat, plantes, mousse, sable, pierres)",
  "Animation par un·e médiateur·ice en botanique et créativité",
  "Apprentissage du concept écologique du terrarium",
  "Création personnalisée de chaque participant",
  "Chacun repart avec le terrarium créé",
  "Photos de groupe et moments partagés",
  "Conseils d'entretien individuels",
  "Déplacement inclus dans les zones de couverture",
];

const POURQUOI = [
  {
    title: "Créativité collective",
    desc: "Chaque participant crée son propre terrarium, ce qui encourage l'expression personnelle tout en renforçant le sentiment d'appartenance.",
  },
  {
    title: "Bien-être et nature",
    desc: "Le contact avec les plantes réduit le stress, apaise l'esprit et favorise un environnement professionnel plus sain.",
  },
  {
    title: "Durabilité et RSE",
    desc: "Une activité écologique et responsable, alignée avec les valeurs de bien-être au travail et de conscience environnementale.",
  },
  {
    title: "Souvenir concret",
    desc: "Contrairement à d'autres team buildings, les participants repartent avec un objet qu'ils ont créé, un vrai souvenir de l'événement.",
  },
];

const AtelierTerrariumTeamBuilding = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SEO
        title="Atelier Terrarium Team Building Paris | Créatif & Naturel"
        description="Ateliers terrarium pour team building en entreprise à Paris et Île-de-France. Activité créative, écologique et cohésive pour 10-100 participants. Déplacement sur site."
        keywords="terrarium team building Paris, atelier terrarium entreprise, team building nature Paris, animation cohésion équipe, atelier créatif entreprise, terrarium atelier"
        canonical="/atelier-terrarium-team-building"
      />
      <SchemaOrg
        type="LocalBusiness"
        data={{
          name: "Atelier Terrarium Team Building",
          description: "Ateliers terrarium créatifs pour team building en entreprise",
          url: "https://botaniqueludique.com/atelier-terrarium-team-building",
          telephone: "+33661847482",
        }}
      />

      <Navigation />

      {/* Hero */}
      <section className="relative border-b-[3px] border-[hsl(var(--black))]">
        <div className="grid lg:grid-cols-2">
          <div className="px-6 md:px-16 py-16 md:py-24 flex flex-col justify-center bg-[hsl(var(--cream))]">
            <AnimatedSection>
              <span className="font-mono-brand text-[10px] tracking-[3px] uppercase text-[hsl(var(--terracotta))] block mb-5">
                ★ Entreprises · Île-de-France
              </span>
              <h1 className="font-display text-[clamp(2.2rem,5.5vw,4.2rem)] uppercase leading-[0.95] tracking-[-1.5px] mb-6">
                Atelier Terrarium<br />Team Building
              </h1>
              <p className="font-body text-base md:text-lg text-[hsl(var(--black))]/75 max-w-xl mb-8">
                Créez ensemble un mini-écosystème végétal. Une activité créative, écologique
                et fédératrice pour renforcer la cohésion de vos équipes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="btn-brutal bg-[hsl(var(--olive))] text-[hsl(var(--cream))] inline-flex"
                >
                  Nous écrire
                </Link>
                <Link
                  to="/workshops"
                  className="btn-brutal bg-[hsl(var(--cream))] text-[hsl(var(--black))] inline-flex"
                >
                  Voir tous les ateliers
                </Link>
              </div>
            </AnimatedSection>
          </div>
          <div className="relative min-h-[320px] lg:min-h-[520px] border-t-[3px] lg:border-t-0 lg:border-l-[3px] border-[hsl(var(--black))]">
            <img
              src={heroTerrarium}
              alt="Terrarium végétal créé lors d'un atelier team building en entreprise"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Infos clés */}
      <section className="bg-[hsl(var(--yellow))]/30 border-b-[3px] border-[hsl(var(--black))]">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3">
          {INFOS.map((item, i) => (
            <div
              key={i}
              className={`px-6 py-10 text-center ${i > 0 ? "md:border-l-[3px] border-[hsl(var(--black))]" : ""}`}
            >
              <item.icon className="w-7 h-7 mx-auto mb-4 text-[hsl(var(--olive))]" strokeWidth={2.2} />
              <p className="font-display uppercase text-sm tracking-[-0.5px] mb-1">{item.label}</p>
              <p className="font-mono-brand text-[10px] uppercase tracking-[2px] opacity-60">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <LandingPhotoStrip />

      {/* Ce qui est inclus */}
      <section className="py-20 md:py-28 px-6 md:px-16 border-b-[3px] border-[hsl(var(--black))]">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection>
            <span className="font-mono-brand text-[11px] tracking-[3px] uppercase opacity-60 block mb-3">
              Formule tout compris
            </span>
            <h2 className="font-display text-2xl md:text-4xl uppercase mb-10 leading-[1]">
              Ce qui est inclus
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={100} className="grid md:grid-cols-2 gap-x-10 gap-y-4">
            {INCLUS.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border-b-2 border-[hsl(var(--black))]/10 pb-4">
                <Check className="w-5 h-5 text-[hsl(var(--olive))] flex-shrink-0 mt-1" strokeWidth={3} />
                <p className="font-body text-[hsl(var(--black))]/80">{item}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Pourquoi */}
      <section className="py-20 md:py-28 px-6 md:px-16 bg-[hsl(var(--yellow))]/20 border-b-[3px] border-[hsl(var(--black))]">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection>
            <span className="font-mono-brand text-[11px] tracking-[3px] uppercase opacity-60 block mb-3">
              Notre différence
            </span>
            <h2 className="font-display text-2xl md:text-4xl uppercase mb-12 leading-[1]">
              Pourquoi le terrarium pour votre team building&nbsp;?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={100} className="grid md:grid-cols-2 gap-6">
            {POURQUOI.map((item, i) => (
              <div
                key={i}
                className="card-brutal h-full flex flex-col bg-[hsl(var(--cream))] p-7"
              >
                <span className="font-display text-3xl opacity-30 mb-3">0{i + 1}</span>
                <h3 className="font-display text-base uppercase mb-3 leading-tight">{item.title}</h3>
                <p className="font-body text-sm text-[hsl(var(--black))]/70 flex-1">{item.desc}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 md:py-28 px-6 md:px-16 bg-[hsl(var(--blue))] text-[hsl(var(--cream))]">
        <div className="max-w-[900px] mx-auto text-center">
          <AnimatedSection>
            <span className="font-mono-brand text-[11px] tracking-[3px] uppercase opacity-70 block mb-4">
              Organisons votre atelier
            </span>
            <h2 className="font-display text-3xl md:text-5xl uppercase leading-[1] mb-6">
              Prêt à créer ensemble&nbsp;?
            </h2>
            <p className="font-body text-base md:text-lg opacity-85 mb-9 max-w-2xl mx-auto">
              Chaque atelier est construit sur mesure selon votre effectif, votre lieu et votre
              temps disponible. Parlons de votre projet.
            </p>
            <Link
              to="/contact"
              className="btn-brutal bg-[hsl(var(--cream))] text-[hsl(var(--black))] border-[hsl(var(--cream))] text-sm px-10 py-4 inline-flex"
            >
              Nous écrire
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AtelierTerrariumTeamBuilding;
