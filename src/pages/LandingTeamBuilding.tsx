import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import WaveDivider from "@/components/WaveDivider";
import SocialProofBar from "@/components/SocialProofBar";
import { AREA_SERVED_IDF } from "@/data/areaServed";
import { Users, Leaf, Clock, MapPin, ArrowRight, Download, Phone, Sparkles, Award } from "lucide-react";
import heroImg from "@/assets/gallery-terrarium-adultes-groupe.jpg";
import imgTerrarium from "@/assets/gallery-terrarium-bocal-fittonia.jpg";
import imgKokedama from "@/assets/gallery-kokedama-collection.jpg";
import imgTeinture from "@/assets/gallery-teinture-tshirts-table.webp";
import imgBombes from "@/assets/gallery-bombes-graines-sechage.webp";

const SLUG = "/team-building-nature-entreprise";
const PDF_URL = "/documents/plaquette-botanique-ludique-entreprise-2026-2027.pdf";
const CONTACT = `/contact?subject=${encodeURIComponent("Devis team building nature")}`;

const INFOS = [
  { icon: Users, label: "Jusqu'à 15 par session", desc: "Grands groupes en rotation" },
  { icon: Clock, label: "1h30 à 2h30", desc: "Selon l'atelier choisi" },
  { icon: MapPin, label: "Dans vos locaux", desc: "Ou en extérieur, partout en Île-de-France" },
];

const BENEFICES = [
  { icon: Users, title: "Cohésion", desc: "On fabrique côte à côte, on s'entraide, on discute autrement qu'en réunion." },
  { icon: Leaf, title: "RSE", desc: "Une activité sobre en matériel, qui parle de biodiversité et de nos liens au vivant." },
  { icon: Sparkles, title: "Bien-être", desc: "Une parenthèse manuelle et calme, les mains dans la terre, loin des écrans." },
  { icon: Award, title: "Un souvenir vivant", desc: "Chacun repart avec sa création, un objet qui reste sur le bureau." },
];

const ATELIERS = [
  {
    title: "Terrarium",
    tag: "Le plus demandé",
    image: imgTerrarium,
    alt: "Terrarium en bocal de verre avec fittonia et tradescantia, réalisé lors d'un atelier",
    desc: "Chacun compose son écosystème miniature en bocal, et découvre l'histoire étonnante de la Wardian case.",
    duree: "2h",
    groupe: "Jusqu'à 15 par session",
    to: "/atelier-terrarium-team-building",
  },
  {
    title: "Kokedama",
    tag: "Art végétal japonais",
    image: imgKokedama,
    alt: "Plusieurs kokedamas ficelés posés sur des assiettes après un atelier",
    desc: "Façonner une boule de terre et de mousse autour d'une plante, puis la nouer : un geste lent et apaisant.",
    duree: "2h",
    groupe: "Jusqu'à 15 par session",
    to: "/atelier-kokedama-team-building",
  },
  {
    title: "Teinture végétale",
    tag: "Création collective",
    image: imgTeinture,
    alt: "Table d'atelier de teinture végétale avec tee-shirts colorés aux pigments naturels et bols de plantes tinctoriales",
    desc: "Extraire la couleur des plantes et teindre ensemble, en découvrant l'histoire des couleurs végétales.",
    duree: "2h30",
    groupe: "Groupes plus larges possibles",
    to: null,
  },
  {
    title: "Bombes à graines",
    tag: "Action biodiversité",
    image: imgBombes,
    alt: "Bombes à graines fabriquées en atelier",
    desc: "Fabriquer des bombes à graines mellifères à semer dans les friches, et parler de la nature en ville.",
    duree: "1h30",
    groupe: "Grands groupes, sur devis",
    to: null,
  },
];

const DEROULE = [
  { step: "01", time: "15 min", title: "Accueil", desc: "Présentation, tour de table et découverte des plantes du jour." },
  { step: "02", time: "30 min", title: "Récit ethnobotanique", desc: "Histoires, usages et imaginaires des plantes utilisées." },
  { step: "03", time: "1h", title: "Création guidée", desc: "Atelier pratique pas à pas, avec un accompagnement individuel." },
  { step: "04", time: "15 min", title: "Clôture", desc: "Conseils d'entretien, photo de groupe, chacun repart avec sa création." },
];

const OCCASIONS = ["Séminaire", "Journée cohésion", "Journée RSE", "Semaine QVCT", "Onboarding", "Summer party", "Fin d'année", "Offsite"];

const FAQ = [
  {
    q: "Combien de personnes peuvent participer ?",
    a: "Jusqu'à 15 personnes par session pour que chacun soit bien accompagné. Pour un groupe plus important, nous organisons plusieurs sessions en rotation, ou un format collectif comme la teinture végétale ou les bombes à graines.",
  },
  {
    q: "Où se déroulent les ateliers ?",
    a: "Dans vos locaux, partout en Île-de-France, ou en extérieur dans un parc ou un jardin selon la saison. Nous apportons tout le matériel.",
  },
  {
    q: "Avec quoi les participants repartent-ils ?",
    a: "Chacun repart avec sa création : terrarium, kokedama, tissu teint ou bombes à graines, avec une fiche d'entretien.",
  },
  {
    q: "Combien de temps à l'avance faut-il réserver ?",
    a: "Idéalement trois à quatre semaines avant, et six à huit semaines pour les périodes chargées comme Noël et le printemps.",
  },
  {
    q: "Quel est le tarif ?",
    a: "Chaque atelier fait l'objet d'un devis personnalisé selon le nombre de participants, l'atelier, la durée et le lieu. Le devis est gratuit.",
  },
];

const LandingTeamBuilding = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SEO
        title="Team Building Nature Entreprise Paris & Île-de-France"
        description="Team building botanique en entreprise à Paris et en Île-de-France. Ateliers terrarium, kokedama, teinture végétale. Cohésion, RSE, bien-être. Devis sur mesure."
        keywords="team building nature paris, team building RSE Paris, team building végétal, team building botanique entreprise, atelier terrarium Paris, atelier terrarium entreprise, atelier kokedama Paris, atelier kokedama entreprise, animation développement durable, team building rse, cohésion équipe nature île-de-france"
        canonical={SLUG}
      />
      <SchemaOrg
        type="Service"
        data={{
          serviceType: "Team building nature",
          name: "Team building nature en entreprise",
          description: "Ateliers botaniques pour les entreprises en Île-de-France : team building, cohésion, RSE et bien-être au travail.",
          url: `https://botaniqueludique.com${SLUG}`,
          areaServed: AREA_SERVED_IDF,
        }}
      />
      <SchemaOrg type="FAQPage" data={{ questions: FAQ.map((f) => ({ question: f.q, answer: f.a })) }} />
      <SchemaOrg
        type="BreadcrumbList"
        data={{
          items: [
            { name: "Accueil", url: "https://botaniqueludique.com/" },
            { name: "Pro", url: "https://botaniqueludique.com/pro" },
            { name: "Entreprises & CSE", url: `https://botaniqueludique.com${SLUG}` },
          ],
        }}
      />
      <Navigation />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden px-6 pt-24 pb-24 md:pt-32 md:pb-28">
        <div className="absolute inset-0 bg-foreground">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-35" />
        </div>
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-mono-brand text-[11px] md:text-[13px] uppercase tracking-[3px] text-olive-light mb-5">
              Entreprises · CSE · Team building
            </p>
            <h1 className="font-display text-[clamp(2.4rem,6.5vw,5rem)] uppercase leading-[0.9] tracking-[-2px] text-primary-foreground mb-6">
              Des ateliers qui font<br />
              <span className="text-olive-light">pousser les liens</span>
            </h1>
            <p className="font-body text-xl md:text-[22px] italic text-primary-foreground/90 max-w-[680px] mx-auto leading-relaxed mb-10">
              Des ateliers végétaux pour renforcer la cohésion, stimuler la créativité et parler du vivant, dans vos locaux partout en Île-de-France.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to={CONTACT}
                className="btn-brutal bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-8 py-3 inline-flex items-center gap-2"
                style={{ borderColor: "hsl(var(--cream))" }}
              >
                Demander un devis <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brutal bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-8 py-3 inline-flex items-center gap-2"
                style={{ borderColor: "hsl(var(--cream))" }}
              >
                <Download className="w-4 h-4" /> La plaquette (PDF)
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <WaveDivider from="hsl(0,0%,10%)" to="hsl(36,33%,93%)" />

      {/* ===== INFOS CLÉS ===== */}
      <section className="px-6 pt-6 pb-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 pl-[3px] pt-[3px]">
          {INFOS.map((item) => (
            <div key={item.label} className="px-6 py-8 text-center border-brutal bg-[hsl(var(--cream))] -ml-[3px] -mt-[3px]">
              <item.icon className="w-7 h-7 mx-auto mb-3 text-primary" strokeWidth={2.2} />
              <p className="font-display uppercase text-base tracking-[-0.5px] mb-1">{item.label}</p>
              <p className="font-mono-brand text-[10px] uppercase tracking-[2px] text-foreground/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ATELIERS ===== */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="section-label block mb-3">Nos ateliers team building</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] uppercase leading-[0.95] tracking-[-1px]">
              Quatre formats <span className="text-primary">au choix</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {ATELIERS.map((a) => {
              const inner = (
                <>
                  <div className="relative aspect-[16/10] overflow-hidden border-b-[3px] border-foreground bg-secondary">
                    <img src={a.image} alt={a.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute top-3 left-3 font-mono-brand text-[9px] uppercase tracking-[2px] px-3 py-1.5 border-brutal-thin bg-[hsl(var(--cream))]">
                      {a.tag}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display text-2xl uppercase tracking-[-0.5px] mb-3 group-hover:text-primary transition-colors">{a.title}</h3>
                    <p className="text-sm text-foreground/75 leading-relaxed mb-5">{a.desc}</p>
                    <div className="mt-auto flex flex-wrap items-center gap-4 pt-4 border-t-[3px] border-foreground font-mono-brand text-[11px] uppercase tracking-[1.5px]">
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-primary" />{a.duree}</span>
                      <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-primary" />{a.groupe}</span>
                      {a.to && (
                        <span className="ml-auto inline-flex items-center gap-1.5 text-primary">
                          Voir l'atelier <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>
                  </div>
                </>
              );
              const cardClass =
                "group flex flex-col border-brutal bg-[hsl(var(--cream))] text-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-brutal-lg";
              return a.to ? (
                <Link key={a.title} to={a.to} className={cardClass}>
                  {inner}
                </Link>
              ) : (
                <article key={a.title} className={cardClass}>
                  {inner}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== BÉNÉFICES + DÉROULÉ ===== */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(36,25%,88%)" />
      <section className="pt-10 pb-20 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="section-label block mb-3">Pourquoi un team building nature</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] uppercase leading-[0.95] tracking-[-1px]">
              Ce que vos équipes <span className="text-primary">y gagnent</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {BENEFICES.map((b) => (
              <div key={b.title} className="border-brutal bg-[hsl(var(--cream))] p-6">
                <b.icon className="w-7 h-7 mb-3 text-primary" strokeWidth={2.2} />
                <h3 className="font-display text-lg uppercase mb-2">{b.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          <AnimatedSection className="text-center mb-10">
            <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] uppercase leading-[0.95] tracking-[-1px]">
              Le déroulé <span className="text-primary">d'un atelier de 2h</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 pl-[3px] pt-[3px]">
            {DEROULE.map((d) => (
              <div key={d.step} className="p-6 border-brutal bg-[hsl(var(--cream))] -ml-[3px] -mt-[3px]">
                <span className="font-display text-5xl text-primary/30 block mb-3">{d.step}</span>
                <h3 className="font-display text-lg uppercase tracking-[-0.5px] mb-1">{d.title}</h3>
                <p className="font-mono-brand text-[9px] uppercase tracking-[2px] text-primary mb-3">{d.time}</p>
                <p className="text-sm text-foreground/70 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <WaveDivider from="hsl(36,25%,88%)" to="hsl(36,33%,93%)" flip />

      {/* ===== OCCASIONS ===== */}
      <section className="pt-10 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="section-label block mb-3">Pour quelles occasions</span>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {OCCASIONS.map((o) => (
              <span key={o} className="font-mono-brand text-[11px] uppercase tracking-[1.5px] px-4 py-2 border-brutal-thin bg-[hsl(var(--cream))]">
                {o}
              </span>
            ))}
          </div>
          <p className="mt-8 text-sm text-foreground/70">
            Un séminaire, une soirée ou un événement de marque ?{" "}
            <Link to="/animation-seminaire-entreprise-paris" className="underline decoration-2 underline-offset-2 hover:text-primary">Animations de séminaire</Link>
            {" · "}
            <Link to="/animation-cse-entreprise" className="underline decoration-2 underline-offset-2 hover:text-primary">Animations CSE</Link>
            {" · "}
            <Link to="/animation-vegetale-agence-evenementielle" className="underline decoration-2 underline-offset-2 hover:text-primary">Agences événementielles</Link>
          </p>
        </div>
      </section>

      <SocialProofBar />

      {/* ===== FAQ ===== */}
      <section className="pt-20 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <span className="section-label block mb-3">FAQ</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] uppercase leading-[0.95] tracking-[-1px]">
              Questions <span className="text-primary">fréquentes</span>
            </h2>
          </AnimatedSection>
          <div className="space-y-4">
            {FAQ.map((f) => (
              <div key={f.q} className="border-brutal bg-[hsl(var(--cream))] p-6 md:p-7">
                <h3 className="font-display text-base md:text-lg uppercase tracking-[-0.5px] mb-2">{f.q}</h3>
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(0,0%,10%)" flip />
      <section className="bg-foreground text-primary-foreground px-6 pt-10 pb-24">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="font-mono-brand text-[11px] uppercase tracking-[3px] text-olive-light mb-4">Organisons votre atelier</p>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] uppercase leading-[0.95] tracking-[-1px] mb-6">
            Parlons de <span className="text-olive-light">votre projet</span>
          </h2>
          <p className="text-base text-primary-foreground/75 leading-relaxed mb-10 max-w-xl mx-auto">
            Nombre de participants, lieu, envies : nous vous proposons un format sur mesure, avec un devis gratuit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={CONTACT}
              className="btn-brutal bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-8 py-3 inline-flex items-center gap-2"
              style={{ borderColor: "hsl(var(--cream))" }}
            >
              Demander un devis <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+33609831606"
              className="btn-brutal bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-8 py-3 inline-flex items-center gap-2"
              style={{ borderColor: "hsl(var(--cream))" }}
            >
              <Phone className="w-4 h-4" /> 06 09 83 16 06
            </a>
          </div>
          <a
            href={PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-10 font-mono-brand text-[11px] uppercase tracking-[2px] text-primary-foreground/70 hover:text-olive-light transition-colors"
          >
            <Download size={14} /> Télécharger la plaquette entreprises (PDF)
          </a>
        </AnimatedSection>
      </section>

      <BackToTop />
      <Footer />
    </div>
  );
};

export default LandingTeamBuilding;
