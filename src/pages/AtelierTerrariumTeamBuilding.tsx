import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import WaveDivider from "@/components/WaveDivider";
import { AREA_SERVED_IDF } from "@/data/areaServed";
import { Users, Clock, MapPin, Check, ArrowRight, Phone } from "lucide-react";
import heroTerrarium from "@/assets/gallery-terrarium-adultes-groupe.jpg";
import terrariumBocal from "@/assets/gallery-terrarium-bocal-fittonia.jpg";
import terrariumPrep from "@/assets/gallery-terrarium-fittonia-prep.jpg";
import fittoniaPots from "@/assets/gallery-fittonia-pots.jpg";
import miniTerrarium from "@/assets/gallery-mini-terrarium.jpeg";

const SLUG = "/atelier-terrarium-team-building";

const INFOS = [
  { icon: Users, label: "Jusqu'à 15 par session", desc: "Au-delà, ateliers en rotation" },
  { icon: Clock, label: "1h30 à 2h30", desc: "Selon le format choisi" },
  { icon: MapPin, label: "Dans vos locaux", desc: "Partout en Île-de-France" },
];

const PHOTOS = [
  { src: terrariumBocal, alt: "Terrarium en bocal de verre avec fittonia et tradescantia, réalisé en atelier" },
  { src: terrariumPrep, alt: "Préparation d'un terrarium : mousse, fittonia et graviers posés sur la table d'atelier" },
  { src: fittoniaPots, alt: "Plantules de fittonia en godets, prêtes à être installées dans les terrariums" },
  { src: miniTerrarium, alt: "Mini terrarium en bocal réalisé lors d'un atelier" },
];

const ETAPES = [
  { step: "01", title: "Accueil", desc: "Présentation des plantes, des matériaux et du principe d'un écosystème clos." },
  { step: "02", title: "L'histoire du terrarium", desc: "Comment un simple bocal a fait voyager des plantes à travers le monde au XIXe siècle." },
  { step: "03", title: "Création", desc: "Drainage, substrat, plantes, mousse et décor : chacun compose son terrarium, accompagné pas à pas." },
  { step: "04", title: "Clôture", desc: "Conseils d'entretien, photo de groupe, et chacun repart avec sa création." },
];

const INCLUS = [
  "Tout le matériel : bocaux en verre, substrat, graviers, mousse, plantes et décor",
  "L'animation par Vanessa Charlery, ethnobotaniste formée à l'EHESS",
  "Un temps de récit sur l'histoire culturelle du terrarium",
  "Un accompagnement individuel pendant la création",
  "Un terrarium par participant, à emporter",
  "Une fiche de conseils d'entretien",
];

const POURQUOI = [
  {
    title: "Faire ensemble, repartir avec le sien",
    desc: "Chacun compose son propre terrarium, mais les matériaux, les idées et les coups de main circulent autour de la table.",
  },
  {
    title: "Une pause concrète",
    desc: "Les mains dans la terre et la mousse, loin des écrans : un moment calme et manuel qui change du quotidien de bureau.",
  },
  {
    title: "Une histoire à raconter",
    desc: "Le terrarium a une histoire étonnante, liée aux voyages des plantes et à l'histoire coloniale. Vos équipes ne regarderont plus un bocal de la même façon.",
  },
  {
    title: "Une démarche RSE tangible",
    desc: "Une activité sobre en matériel, qui parle de biodiversité et laisse un objet vivant sur chaque bureau plutôt qu'un goodie jetable.",
  },
];

const FAQ = [
  {
    q: "Combien de participants pour un atelier terrarium ?",
    a: "Jusqu'à 15 personnes par session pour que chacun soit bien accompagné. Pour un groupe plus important, nous organisons plusieurs sessions en rotation, sur devis.",
  },
  {
    q: "Combien de temps dure l'atelier ?",
    a: "Entre 1h30 et 2h30 selon le format : une version courte centrée sur la création, ou une version longue avec un vrai temps de récit sur l'histoire du terrarium.",
  },
  {
    q: "Où se déroule l'atelier ?",
    a: "Dans vos locaux, une salle de séminaire ou tout lieu équipé de tables, partout en Île-de-France. Nous apportons tout le matériel.",
  },
  {
    q: "Comment est calculé le tarif ?",
    a: "Le tarif dépend du nombre de participants, de la durée et du lieu. Chaque devis est personnalisé et gratuit.",
  },
];

const AtelierTerrariumTeamBuilding = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SEO
        title="Atelier Terrarium Team Building Paris | Créatif & Naturel"
        description="Atelier terrarium pour team building en entreprise à Paris et en Île-de-France : chacun crée son mini-écosystème et découvre l'histoire du terrarium. Dans vos locaux."
        keywords="terrarium team building Paris, atelier terrarium entreprise, team building nature Paris, animation cohésion équipe, atelier créatif entreprise, terrarium atelier, team building RSE Île-de-France"
        canonical={SLUG}
      />
      <SchemaOrg
        type="Service"
        data={{
          serviceType: "Atelier terrarium team building",
          name: "Atelier Terrarium Team Building",
          description:
            "Atelier terrarium pour les équipes en entreprise : création d'un mini-écosystème en bocal et récit sur l'histoire culturelle du terrarium, dans vos locaux en Île-de-France.",
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
            { name: "Atelier terrarium team building", url: `https://botaniqueludique.com${SLUG}` },
          ],
        }}
      />

      <Navigation />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden px-6 pt-24 pb-24 md:pt-32 md:pb-28">
        <div className="absolute inset-0 bg-foreground">
          <img src={heroTerrarium} alt="" className="w-full h-full object-cover opacity-35" />
        </div>
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-mono-brand text-[11px] md:text-[13px] uppercase tracking-[3px] text-olive-light mb-5">
              Entreprises · CSE · Séminaires
            </p>
            <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] uppercase leading-[0.9] tracking-[-2px] text-primary-foreground mb-6">
              Atelier terrarium<br />
              <span className="text-olive-light">team building</span>
            </h1>
            <p className="font-body text-xl md:text-[22px] italic text-primary-foreground/90 max-w-[680px] mx-auto leading-relaxed mb-10">
              Chacun crée son mini-écosystème en bocal, et toute l'équipe découvre l'étonnante histoire du terrarium.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to={`/contact?subject=${encodeURIComponent("Devis atelier terrarium team building")}`}
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
          </AnimatedSection>
        </div>
      </section>

      <WaveDivider from="hsl(0,0%,10%)" to="hsl(36,33%,93%)" />

      {/* ===== INFOS CLÉS ===== */}
      <section className="px-6 pt-6 pb-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 border-brutal bg-[hsl(var(--cream))]">
          {INFOS.map((item, i) => (
            <div key={item.label} className={`px-6 py-8 text-center ${i > 0 ? "border-t-[3px] md:border-t-0 md:border-l-[3px] border-foreground" : ""}`}>
              <item.icon className="w-7 h-7 mx-auto mb-3 text-primary" strokeWidth={2.2} />
              <p className="font-display uppercase text-base tracking-[-0.5px] mb-1">{item.label}</p>
              <p className="font-mono-brand text-[10px] uppercase tracking-[2px] text-foreground/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PHOTOS ===== */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {PHOTOS.map((photo) => (
            <figure key={photo.alt} className="m-0 border-brutal overflow-hidden bg-secondary aspect-[3/4]">
              <img src={photo.src} alt={photo.alt} loading="lazy" className="w-full h-full object-cover" />
            </figure>
          ))}
        </div>
      </section>

      {/* ===== HISTOIRE ===== */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="section-label block mb-3">Notre signature</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] uppercase leading-[0.95] tracking-[-1px] mb-6">
              Plus qu'un bocal : <span className="text-primary">une histoire</span>
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground/80">
              <p>
                Au XIXe siècle, le médecin londonien Nathaniel Ward remarque qu'une fougère pousse toute seule dans un bocal fermé. Sa
                « Wardian case », l'ancêtre du terrarium, va permettre de transporter des plantes vivantes par bateau sur des milliers
                de kilomètres. Elle servira aussi à déplacer des plantes stratégiques d'un continent à l'autre, au service des empires
                coloniaux.
              </p>
              <p>
                C'est ce récit que nous partageons avec vos équipes pendant l'atelier. Il transforme une activité créative en vrai moment de
                découverte, et c'est ce qui distingue nos ateliers d'un simple kit de terrarium.
              </p>
            </div>
            <Link
              to="/blog/terrarium-biopiraterie-histoire-coloniale"
              className="mt-6 inline-flex items-center gap-2 font-mono-brand text-[11px] uppercase tracking-[2px] text-primary hover:gap-3 transition-all"
            >
              Lire l'histoire complète sur le blog <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== DÉROULÉ + INCLUS ===== */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(36,25%,88%)" />
      <section className="pt-10 pb-20 px-6 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="section-label block mb-3">Comment ça marche</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] uppercase leading-[0.95] tracking-[-1px]">
              Déroulement <span className="text-primary">de l'atelier</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 mb-16">
            {ETAPES.map((item) => (
              <div key={item.step} className="p-6 border-brutal bg-[hsl(var(--cream))] -ml-[3px] -mt-[3px]">
                <span className="font-display text-5xl text-primary/30 block mb-3">{item.step}</span>
                <h3 className="font-display text-lg uppercase tracking-[-0.5px] mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="border-brutal bg-[hsl(var(--cream))] p-8 md:p-10">
            <h2 className="font-display text-xl md:text-2xl uppercase tracking-[-0.5px] mb-6">Ce qui est inclus</h2>
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-4">
              {INCLUS.map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={3} />
                  <p className="text-sm md:text-base text-foreground/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <WaveDivider from="hsl(36,25%,88%)" to="hsl(36,33%,93%)" flip />

      {/* ===== POURQUOI ===== */}
      <section className="pt-10 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="section-label block mb-3">Pourquoi ce format</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] uppercase leading-[0.95] tracking-[-1px]">
              Le terrarium pour <span className="text-primary">votre équipe</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            {POURQUOI.map((item, i) => (
              <div key={item.title} className="border-brutal bg-[hsl(var(--cream))] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-brutal-lg">
                <span className="font-display text-3xl text-primary/30 block mb-3">0{i + 1}</span>
                <h3 className="font-display text-base uppercase mb-3 leading-tight">{item.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <span className="section-label block mb-3">FAQ</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] uppercase leading-[0.95] tracking-[-1px]">
              Questions <span className="text-primary">fréquentes</span>
            </h2>
          </AnimatedSection>
          <div className="space-y-4">
            {FAQ.map((item) => (
              <div key={item.q} className="border-brutal bg-[hsl(var(--cream))] p-6 md:p-7">
                <h3 className="font-display text-base md:text-lg uppercase tracking-[-0.5px] mb-2">{item.q}</h3>
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-foreground/70">
            Vous cherchez un autre format ?{" "}
            <Link to="/team-building-nature-entreprise" className="underline decoration-2 underline-offset-2 hover:text-primary">
              Tous nos ateliers team building
            </Link>{" "}
            ·{" "}
            <Link to="/pro" className="underline decoration-2 underline-offset-2 hover:text-primary">
              Toutes nos offres pro
            </Link>
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(0,0%,10%)" flip />
      <section className="bg-foreground text-primary-foreground px-6 pt-10 pb-24">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="font-mono-brand text-[11px] uppercase tracking-[3px] text-olive-light mb-4">Organisons votre atelier</p>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] uppercase leading-[0.95] tracking-[-1px] mb-6">
            Prêt·e à créer <span className="text-olive-light">ensemble&nbsp;?</span>
          </h2>
          <p className="text-base text-primary-foreground/75 leading-relaxed mb-10 max-w-xl mx-auto">
            Dites-nous votre effectif, votre lieu et le temps dont vous disposez : nous vous envoyons une proposition sur mesure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={`/contact?subject=${encodeURIComponent("Devis atelier terrarium team building")}`}
              className="btn-brutal bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-8 py-3 inline-block"
              style={{ borderColor: "hsl(var(--cream))" }}
            >
              Demander un devis →
            </Link>
            <Link
              to="/workshops"
              className="btn-brutal bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-8 py-3 inline-block"
              style={{ borderColor: "hsl(var(--cream))" }}
            >
              Voir tous les ateliers →
            </Link>
          </div>
        </AnimatedSection>
      </section>

      <BackToTop />
      <Footer />
    </div>
  );
};

export default AtelierTerrariumTeamBuilding;
