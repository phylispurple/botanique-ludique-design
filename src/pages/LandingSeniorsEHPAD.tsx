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
import { Hand, Heart, Users, Sparkles, Clock, ArrowRight, Phone, CheckCircle } from "lucide-react";
import heroImg from "@/assets/gallery-autumn-leaves.webp";
import imgSachets from "@/assets/gallery-sachet-senteur.webp";
import imgKokedama from "@/assets/gallery-kokedama-tradescantia.jpg";
import imgHerbier from "@/assets/gallery-herbier-toiles.webp";
import imgCouronne from "@/assets/gallery-flower-crown.webp";
import imgInterGen from "@/assets/gallery-kokedama-collection.jpg";

const SLUG = "/animation-seniors-ehpad";
const CONTACT = `/contact?subject=${encodeURIComponent("Animation en EHPAD ou résidence seniors")}`;

const BIENFAITS = [
  { icon: Hand, title: "Les sens en éveil", desc: "Toucher la mousse, sentir la lavande et les épices, manipuler les feuilles : des ateliers d'abord sensoriels." },
  { icon: Heart, title: "Des souvenirs qui reviennent", desc: "Le jardin d'enfance, le potager, les tisanes de grand-mère : les plantes font remonter des histoires." },
  { icon: Users, title: "Du lien", desc: "Un moment partagé entre résidents, avec l'équipe, ou avec des enfants lors de rencontres intergénérationnelles." },
  { icon: Sparkles, title: "La fierté de créer", desc: "Chacun repart avec un objet qu'il a fait lui-même, à garder dans sa chambre ou à offrir." },
];

const ATELIERS = [
  { title: "Sachets senteur", image: imgSachets, alt: "Sachets en voile remplis de lavande, camomille et plantes aromatiques séchées", desc: "Un atelier sensoriel autour des plantes aromatiques et des épices, et des souvenirs qu'elles réveillent.", duree: "1h" },
  { title: "Mini-kokedama", image: imgKokedama, alt: "Kokedama de Tradescantia zebrina réalisé en atelier", desc: "Une petite sphère de mousse autour d'une plante, avec des gestes adaptés et du matériel préparé à l'avance.", duree: "1h30" },
  { title: "Herbier mémoire", image: imgHerbier, alt: "Toiles d'herbier avec fougère et plantes pressées", desc: "Reconnaître des plantes familières, raconter ce qu'elles évoquent, et composer une planche à garder.", duree: "1h" },
  { title: "Couronnes de saison", image: imgCouronne, alt: "Couronne de fleurs et de pommes de pin réalisée en atelier", desc: "Feuilles d'automne, pommes de pin, fleurs séchées : une création de saison pour décorer l'établissement.", duree: "1h à 1h30" },
  { title: "Rencontre intergénérationnelle", image: imgInterGen, alt: "Kokedamas ficelés réalisés en atelier", desc: "Résidents et enfants du centre de loisirs réunis en binômes autour d'un atelier, par exemple pour la Semaine Bleue.", duree: "2h" },
];

const ADAPTATIONS = [
  "Des tables à la bonne hauteur pour les fauteuils",
  "Du matériel préparé à l'avance pour limiter les gestes difficiles",
  "Des groupes de 6 à 12 résidents, pour un accompagnement de chacun",
  "Des plantes robustes et faciles à entretenir en chambre",
  "Un déroulé construit avec l'équipe d'animation",
];

const FAQ = [
  {
    q: "Combien de résidents par atelier ?",
    a: "Entre 6 et 12 résidents selon l'atelier et leur autonomie, pour que chacun puisse être accompagné. Une personne de l'équipe d'animation à nos côtés est toujours précieuse.",
  },
  {
    q: "Les ateliers sont-ils adaptés aux personnes à mobilité réduite ?",
    a: "Oui : tout se fait assis, autour d'une table, avec du matériel préparé pour limiter les gestes difficiles. Nous adaptons le contenu au groupe.",
  },
  {
    q: "Proposez-vous des cycles réguliers ?",
    a: "Oui, l'atelier peut être ponctuel ou s'inscrire dans un cycle au fil des saisons. Nous construisons le programme avec l'équipe d'animation.",
  },
  {
    q: "Quel est le tarif ?",
    a: "Le tarif dépend de l'atelier, du nombre de résidents, de la fréquence et du lieu. Chaque devis est personnalisé et gratuit.",
  },
];

const LandingSeniorsEHPAD = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SEO
        title="Animation EHPAD & Seniors - Ateliers Botaniques Adaptés"
        description="Animations nature pour EHPAD et résidences seniors partout en Île-de-France. Ateliers botaniques adaptés, nous venons dans votre établissement."
        keywords="animation ehpad, atelier seniors nature, activité maison retraite, animation résidence seniors, atelier intergénérationnel, animation ehpad val d'oise"
        canonical={SLUG}
      />
      <SchemaOrg
        type="Service"
        data={{
          serviceType: "Animation nature en EHPAD et résidence seniors",
          name: "Ateliers botaniques pour EHPAD et seniors",
          description: "Ateliers sensoriels et créatifs autour des plantes pour les résidents d'EHPAD et de résidences seniors, en Île-de-France.",
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
            { name: "EHPAD & seniors", url: `https://botaniqueludique.com${SLUG}` },
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
              EHPAD · Résidences seniors · Clubs
            </p>
            <h1 className="font-display text-[clamp(2.2rem,6vw,4.8rem)] uppercase leading-[0.9] tracking-[-2px] text-primary-foreground mb-6">
              Ateliers botaniques<br />
              <span className="text-olive-light">pour les seniors</span>
            </h1>
            <p className="font-body text-xl md:text-[22px] italic text-primary-foreground/90 max-w-[700px] mx-auto leading-relaxed mb-10">
              Des ateliers sensoriels et créatifs qui éveillent les souvenirs autour des plantes, adaptés aux résidents, dans votre établissement partout en Île-de-France.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to={CONTACT}
                className="btn-brutal bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-8 py-3 inline-flex items-center gap-2"
                style={{ borderColor: "hsl(var(--cream))" }}
              >
                Demander un devis gratuit <ArrowRight className="w-4 h-4" />
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

      {/* ===== BIENFAITS ===== */}
      <section className="px-6 pt-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="section-label block mb-3">Pourquoi des ateliers végétaux</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] uppercase leading-[0.95] tracking-[-1px]">
              Ce que les plantes <span className="text-primary">apportent</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BIENFAITS.map((b) => (
              <div key={b.title} className="border-brutal bg-[hsl(var(--cream))] p-6">
                <b.icon className="w-7 h-7 mb-3 text-primary" strokeWidth={2.2} />
                <h3 className="font-display text-lg uppercase mb-2">{b.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ATELIERS ===== */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(36,25%,88%)" />
      <section className="pt-10 pb-20 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="section-label block mb-3">Nos ateliers adaptés</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] uppercase leading-[0.95] tracking-[-1px]">
              Cinq ateliers <span className="text-primary">au fil des saisons</span>
            </h2>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-8">
            {ATELIERS.map((a) => (
              <article key={a.title} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc((100%-4rem)/3)] flex flex-col border-brutal bg-[hsl(var(--cream))]">
                <div className="aspect-[4/3] overflow-hidden border-b-[3px] border-foreground bg-secondary">
                  <img src={a.image} alt={a.alt} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-lg uppercase tracking-[-0.5px] mb-2">{a.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-4 flex-1">{a.desc}</p>
                  <p className="font-mono-brand text-[11px] uppercase tracking-[1.5px] flex items-center gap-1.5 pt-3 border-t-[3px] border-foreground">
                    <Clock className="w-3.5 h-3.5 text-primary" /> {a.duree}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <WaveDivider from="hsl(36,25%,88%)" to="hsl(36,33%,93%)" flip />

      {/* ===== ADAPTATIONS + EXEMPLE ===== */}
      <section className="pt-10 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
          <div className="border-brutal bg-[hsl(var(--cream))] p-8 shadow-brutal">
            <span className="section-label block mb-3">Pensé pour vos résidents</span>
            <h2 className="font-display text-xl md:text-2xl uppercase tracking-[-0.5px] mb-6">Comment nous adaptons l'atelier</h2>
            <ul className="space-y-3">
              {ADAPTATIONS.map((e) => (
                <li key={e} className="flex items-start gap-3 text-sm text-foreground/80">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <Link
            to="/blog/semaine-bleue-atelier-intergenerationnel-kokedama-ehpad"
            className="group border-brutal bg-foreground text-primary-foreground p-8 shadow-brutal flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-brutal-lg"
          >
            <div>
              <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-olive-light block mb-3">Retour d'expérience</span>
              <h2 className="font-display text-xl md:text-2xl uppercase tracking-[-0.5px] mb-4 group-hover:text-olive-light transition-colors">
                Semaine Bleue : un atelier kokedama intergénérationnel à Gif-sur-Yvette
              </h2>
              <p className="text-sm text-primary-foreground/75 leading-relaxed">
                Huit enfants du centre de loisirs et huit résidents de l'EHPAD des Chênes Verts, réunis en binômes pour fabriquer des kokedamas, puis un goûter partagé.
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 font-mono-brand text-[11px] uppercase tracking-[2px] text-olive-light">
              Lire l'article <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
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
          <p className="mt-8 text-center text-sm text-foreground/70">
            À lire aussi :{" "}
            <Link to="/activite-intergenerationnelle-nature" className="underline decoration-2 underline-offset-2 hover:text-primary">activités intergénérationnelles</Link>
            {" · "}
            <Link to="/blog/financer-animation-nature-ccas" className="underline decoration-2 underline-offset-2 hover:text-primary">financer une animation nature en CCAS</Link>
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(0,0%,10%)" flip />
      <section className="bg-foreground text-primary-foreground px-6 pt-10 pb-24">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="font-mono-brand text-[11px] uppercase tracking-[3px] text-olive-light mb-4">Pour vos résidents</p>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] uppercase leading-[0.95] tracking-[-1px] mb-6">
            Offrez un moment <span className="text-olive-light">de nature</span>
          </h2>
          <p className="text-base text-primary-foreground/75 leading-relaxed mb-10 max-w-xl mx-auto">
            Ponctuel ou au fil des saisons : décrivez-nous vos résidents et votre projet, devis gratuit et personnalisé.
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
        </AnimatedSection>
      </section>

      <BackToTop />
      <Footer />
    </div>
  );
};

export default LandingSeniorsEHPAD;
