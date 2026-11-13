import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import WaveDivider from "@/components/WaveDivider";
import TraitDessine from "@/components/TraitDessine";
import Testimonials from "@/components/Testimonials";
import QuoteForm from "@/components/QuoteForm";
import NoelEntrepriseBanner from "@/components/NoelEntrepriseBanner";
import { AREA_SERVED_IDF } from "@/data/areaServed";
import { galet, galetPhoto, PASTILLE } from "@/lib/organic";
import { Users, Leaf, Clock, MapPin, ArrowRight, Download, Phone, Sparkles, Award, Check, PenLine, PackageCheck, ChevronDown } from "lucide-react";
import assuranceMaladieLogo from "@/assets/logo-assurance-maladie.png";
import imgGroupe from "@/assets/gallery-workshop-group.webp";
import imgSachets from "@/assets/event-sachets-senteur.webp";
import imgCouronne from "@/assets/gallery-flower-crown.webp";
import imgHerbier from "@/assets/gallery-herbier-toiles.webp";
import heroImg from "@/assets/event-terrarium-table.webp";
import imgTerrarium from "@/assets/event-terrarium-mains.webp";
import imgKokedama from "@/assets/event-kokedama-mains.webp";
import imgTeinture from "@/assets/event-teinture-petales.webp";
import imgBombes from "@/assets/gallery-bombes-graines-sechage.webp";

const SLUG = "/team-building-nature-entreprise";
const PDF_URL = "/documents/plaquette-botanique-ludique-entreprise-2026-2027.pdf";
// Le formulaire de devis est intégré en bas de page (section #devis)
const DEVIS_ANCHOR = "#devis";

const INFOS = [
  { icon: Users, label: "12 à 40 participants", desc: "Par session · plus en rotation" },
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
    alt: "Composition d'un terrarium en bocal pendant un atelier en entreprise",
    desc: "Chacun compose son écosystème miniature en bocal, et découvre l'histoire étonnante de la Wardian case.",
    duree: "2h",
    groupe: "12 à 40 par session",
    to: "/atelier-terrarium-team-building",
  },
  {
    title: "Kokedama",
    tag: "Art végétal japonais",
    image: imgKokedama,
    alt: "Façonnage d'un kokedama lors d'un atelier en entreprise",
    desc: "Façonner une boule de terre et de mousse autour d'une plante, puis la nouer : un geste lent et apaisant.",
    duree: "2h",
    groupe: "12 à 40 par session",
    to: "/atelier-kokedama-team-building",
  },
  {
    title: "Teinture végétale",
    tag: "Création collective",
    image: imgTeinture,
    alt: "Impression végétale de pétales sur un carré de soie",
    desc: "Extraire la couleur des plantes et teindre ensemble, en découvrant l'histoire des couleurs végétales.",
    duree: "2h30",
    groupe: "12 à 40 par session",
    to: null,
  },
  {
    title: "Bombes à graines",
    tag: "Action biodiversité",
    image: imgBombes,
    alt: "Bombes à graines fabriquées en atelier",
    desc: "Fabriquer des bombes à graines mellifères à semer dans les friches, et parler de la nature en ville.",
    duree: "1h30",
    groupe: "12 à 40 par session",
    to: null,
  },
];

const DEROULE = [
  { step: "01", time: "15 min", title: "Accueil", desc: "Présentation, tour de table et découverte des plantes du jour." },
  { step: "02", time: "30 min", title: "Récit ethnobotanique", desc: "Histoires, usages et imaginaires des plantes utilisées." },
  { step: "03", time: "1h", title: "Création guidée", desc: "Atelier pratique pas à pas, avec un accompagnement individuel." },
  { step: "04", time: "15 min", title: "Clôture", desc: "Conseils d'entretien, photo de groupe, chacun repart avec sa création." },
];

const LOGOS = [
  { src: "/logos/thales.svg", alt: "Thales" },
  { src: assuranceMaladieLogo, alt: "l'Assurance Maladie" },
  { src: "/logos/region-idf.webp", alt: "Région Île-de-France" },
  { src: "/logos/104.svg", alt: "Le CENTQUATRE-Paris" },
  { src: "/logos/chateau-ephemere.svg", alt: "Château Éphémère" },
  { src: "/logos/sqy.svg", alt: "Saint-Quentin-en-Yvelines" },
  { src: "/logos/versailles.svg", alt: "Ville de Versailles" },
  { src: "/logos/jappy-senior.svg", alt: "Happy Senior" },
];

/** Les 3 étapes, de la demande au jour J. */
const ETAPES = [
  { icon: PenLine, titre: "Vous nous écrivez", quand: "2 minutes", desc: "Le formulaire ci-dessous ou un appel : nombre de personnes, lieu, date, envies. Rien de plus." },
  { icon: Sparkles, titre: "Proposition sur mesure", quand: "Sous 48 h", desc: "Un atelier adapté à votre groupe et à votre événement, un déroulé clair et un devis détaillé." },
  { icon: PackageCheck, titre: "Le jour J, on gère", quand: "Clé en main", desc: "Installation, matériel, animation et rangement : vous n'avez qu'à profiter avec vos équipes." },
];

const GARANTIES = ["Devis gratuit, réponse sous 48 h", "Tout le matériel fourni", "Dans vos locaux, partout en Île-de-France", "Animatrice ethnobotaniste formée à l'EHESS"];

const AUTRES_PHOTOS = [
  { src: imgSachets, alt: "Sachets de senteurs aux épices" },
  { src: imgCouronne, alt: "Couronne de fleurs réalisée en atelier" },
  { src: imgHerbier, alt: "Herbier sur toile réalisé en atelier" },
];

const BTN_GALET_A = { borderRadius: "28px 14px 26px 12px / 14px 26px 12px 28px" };
const BTN_GALET_B = { borderRadius: "14px 30px 12px 26px / 26px 12px 30px 14px" };

const OCCASIONS = ["Séminaire", "Journée cohésion", "Journée RSE", "Semaine QVCT", "Onboarding", "Summer party", "Fin d'année", "Offsite"];

const FAQ = [
  {
    q: "Combien de personnes peuvent participer ?",
    a: "De 12 à 40 participants par session. Pour un groupe plus grand, nous organisons plusieurs sessions en rotation dans la journée, pour que chacun soit bien accompagné.",
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
  const location = useLocation();
  const heroRef = useRef<HTMLElement>(null);
  const devisRef = useRef<HTMLElement>(null);
  const [heroVisible, setHeroVisible] = useState(true);
  const [devisVisible, setDevisVisible] = useState(false);

  // Arrivée depuis une autre page sur /team-building-nature-entreprise#devis : descendre au formulaire
  useEffect(() => {
    if (location.hash !== DEVIS_ANCHOR) return;
    let tries = 0;
    const go = () => {
      const el = document.getElementById("devis");
      if (el) el.scrollIntoView({ behavior: "smooth" });
      else if (tries++ < 15) setTimeout(go, 150);
    };
    setTimeout(go, 200);
  }, [location.hash]);

  // Bouton « Devis » flottant sur mobile : visible une fois le haut de page passé, caché sur le formulaire
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.target === heroRef.current) setHeroVisible(e.isIntersecting);
        if (e.target === devisRef.current) setDevisVisible(e.isIntersecting);
      });
    });
    if (heroRef.current) io.observe(heroRef.current);
    if (devisRef.current) io.observe(devisRef.current);
    return () => io.disconnect();
  }, []);

  const showFloating = !heroVisible && !devisVisible;

  return (
    <div className="min-h-screen bg-[hsl(var(--cream))] overflow-x-clip">
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

      {/* ===== HERO : texte + collage de photos en galets ===== */}
      <section ref={heroRef} className="relative px-6 pt-28 pb-16 md:pt-36 md:pb-24">
        <div
          className="absolute -left-32 top-20 w-[460px] h-[460px] bg-[hsl(var(--olive-light))]/30 pointer-events-none"
          style={{ borderRadius: "58% 42% 38% 62% / 45% 55% 45% 55%" }}
          aria-hidden="true"
        />
        <div
          className="absolute -right-24 bottom-0 w-[380px] h-[380px] bg-accent/15 pointer-events-none"
          style={{ borderRadius: "40% 60% 55% 45% / 60% 40% 60% 40%" }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-10 items-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 font-mono-brand text-[10px] md:text-[11px] uppercase tracking-[2px] bg-[hsl(var(--green))] text-[hsl(var(--cream))] border-brutal-thin rounded-full px-4 py-2 mb-7 -rotate-2 shadow-[3px_3px_0_hsl(var(--black))]">
              Entreprises · CSE · Team building
            </span>
            <h1 className="font-display text-[clamp(2.4rem,5.2vw,4.3rem)] uppercase leading-[0.9] tracking-[-2px] mb-4">
              Des ateliers qui font<br />
              <span className="text-primary">pousser les liens</span>
            </h1>
            <TraitDessine className="mb-7" />
            <p className="font-editorial italic text-xl md:text-2xl text-foreground/80 max-w-[560px] leading-snug mb-9">
              Des ateliers végétaux pour renforcer la cohésion, stimuler la créativité et parler du vivant, dans vos locaux partout en Île-de-France.
            </p>
            <div className="flex flex-wrap gap-4 mb-9">
              <a
                href={DEVIS_ANCHOR}
                className="btn-brutal inline-flex items-center gap-2 bg-accent text-foreground border-foreground -rotate-1 hover:rotate-0 text-xs px-8 py-3.5"
                style={BTN_GALET_A}
              >
                Demander un devis gratuit <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brutal inline-flex items-center gap-2 bg-[hsl(var(--cream))] text-foreground border-foreground rotate-1 hover:rotate-0 text-xs px-7 py-3.5"
                style={BTN_GALET_B}
              >
                <Download className="w-4 h-4" /> La plaquette (PDF)
              </a>
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 max-w-[560px]">
              {GARANTIES.map((g) => (
                <li key={g} className="flex items-start gap-2 text-sm text-foreground/80">
                  <span className="mt-0.5 w-5 h-5 flex-shrink-0 flex items-center justify-center bg-[hsl(var(--olive-light))] border-brutal-thin" style={PASTILLE}>
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </span>
                  {g}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* collage */}
          <AnimatedSection delay={150} className="relative h-[400px] sm:h-[480px] max-w-[520px] w-full mx-auto">
            <img
              src={heroImg}
              alt="Terrariums en bocal prêts pour un team building en entreprise"
              className="absolute left-0 top-0 w-[72%] h-[70%] object-cover border-brutal shadow-brutal -rotate-2"
              style={galetPhoto(0)}
            />
            <img
              src={imgGroupe}
              alt="Un groupe de participants pendant un atelier botanique"
              className="absolute right-0 bottom-0 w-[62%] h-[56%] object-cover border-brutal shadow-brutal rotate-2"
              style={galetPhoto(1)}
              loading="lazy"
            />
            <img
              src={imgSachets}
              alt="Sachets de senteurs aux épices réalisés lors d'un événement"
              className="absolute left-[6%] bottom-[2%] w-[34%] aspect-square object-cover border-brutal -rotate-3 hidden sm:block"
              style={{ borderRadius: "58% 42% 52% 48% / 46% 56% 44% 54%" }}
              loading="lazy"
            />
            <div
              className="absolute right-[4%] top-[6%] w-[104px] h-[104px] flex flex-col items-center justify-center text-center bg-[hsl(var(--green))] text-[hsl(var(--cream))] border-brutal shadow-[3px_3px_0_hsl(var(--black))] pebble-float"
              style={PASTILLE}
            >
              <span className="font-display text-2xl leading-none">+400</span>
              <span className="font-mono-brand text-[8px] uppercase tracking-[1px] mt-1 leading-tight">participants</span>
            </div>
            <div
              className="absolute left-[44%] top-[58%] w-[92px] h-[92px] flex flex-col items-center justify-center text-center bg-accent border-brutal shadow-[3px_3px_0_hsl(var(--black))] pebble-float [animation-delay:-2s]"
              style={{ borderRadius: "48% 52% 44% 56% / 55% 45% 55% 45%" }}
            >
              <span className="font-display text-2xl leading-none">+50</span>
              <span className="font-mono-brand text-[8px] uppercase tracking-[1px] mt-1 leading-tight">ateliers</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== LOGOS ===== */}
      <section className="px-6 pb-14" aria-label="Ils nous ont fait confiance">
        <div className="max-w-6xl mx-auto">
          <p className="section-label text-center mb-6">Ils nous ont fait confiance</p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
            {LOGOS.map((logo) => (
              <div key={logo.alt} className="flex items-center justify-center h-12 w-24 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <img src={logo.src} alt={logo.alt} className="max-h-12 max-w-full w-auto h-auto object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INFOS CLÉS ===== */}
      <section className="px-6 pb-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {INFOS.map((item, i) => (
            <div
              key={item.label}
              className={`px-6 py-7 text-center border-brutal shadow-brutal bg-[hsl(var(--cream))] ${["-rotate-1", "rotate-[0.6deg]", "-rotate-[0.4deg]"][i]}`}
              style={galet(i)}
            >
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-[hsl(var(--olive-light))] border-brutal-thin" style={PASTILLE}>
                <item.icon className="w-6 h-6" strokeWidth={2.2} />
              </div>
              <p className="font-display uppercase text-base tracking-[-0.5px] mb-1">{item.label}</p>
              <p className="font-mono-brand text-[10px] uppercase tracking-[2px] text-foreground/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="px-6 pb-14">
        <NoelEntrepriseBanner ctaTo={DEVIS_ANCHOR} className="max-w-5xl mx-auto" />
      </div>

      {/* ===== ATELIERS ===== */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(36,25%,88%)" />
      <section className="px-6 pt-8 pb-20 md:pb-28 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-12 md:mb-16">
            <span className="section-label block mb-3">Nos ateliers team building</span>
            <h2 className="font-display text-[clamp(2rem,5vw,3.4rem)] uppercase leading-[0.92] tracking-[-1.5px]">
              Quatre formats<br /><span className="md:ml-20 text-primary">au choix</span>
            </h2>
            <TraitDessine className="mt-3 md:ml-20" variant={2} />
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-12">
            {ATELIERS.map((a, i) => {
              const inner = (
                <>
                  <div className="relative mb-5">
                    <img
                      src={a.image}
                      alt={a.alt}
                      loading="lazy"
                      className="w-full aspect-[16/11] object-cover border-brutal transition-transform duration-500 group-hover:scale-[1.02]"
                      style={galetPhoto(i)}
                    />
                    <span className={`absolute -top-3 left-6 font-mono-brand text-[9px] uppercase tracking-[2px] px-3 py-1.5 border-brutal-thin rounded-full shadow-[2px_2px_0_hsl(var(--black))] ${i === 0 ? "bg-accent" : "bg-[hsl(var(--cream))]"} ${i % 2 ? "rotate-2" : "-rotate-2"}`}>
                      {a.tag}
                    </span>
                  </div>
                  <div className="px-2 flex flex-col flex-1">
                    <h3 className="font-display text-2xl uppercase tracking-[-0.5px] mb-2 group-hover:text-primary transition-colors">{a.title}</h3>
                    <p className="text-sm md:text-base text-foreground/75 leading-relaxed mb-4">{a.desc}</p>
                    <div className="mt-auto flex flex-wrap items-center gap-2 text-sm">
                      <span className="inline-flex items-center gap-1.5 rounded-full border-brutal-thin bg-[hsl(var(--cream))] px-3 py-1"><Clock className="w-4 h-4 text-primary" />{a.duree}</span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border-brutal-thin bg-[hsl(var(--cream))] px-3 py-1"><Users className="w-4 h-4 text-primary" />{a.groupe}</span>
                      {a.to && (
                        <span className="ml-auto inline-flex items-center gap-1.5 font-mono-brand text-[10px] uppercase tracking-[2px] text-primary">
                          Voir l'atelier
                          <span className="w-8 h-8 flex items-center justify-center bg-[hsl(var(--cream))] border-brutal-thin group-hover:bg-accent transition-colors" style={PASTILLE}>
                            <ArrowRight className="w-4 h-4 text-foreground" />
                          </span>
                        </span>
                      )}
                    </div>
                  </div>
                </>
              );
              const cardClass = `group flex flex-col text-foreground ${i % 2 === 1 ? "md:mt-14" : ""}`;
              return (
                <AnimatedSection key={a.title} delay={i * 100}>
                  {a.to ? (
                    <Link to={a.to} className={cardClass}>{inner}</Link>
                  ) : (
                    <article className={cardClass}>{inner}</article>
                  )}
                </AnimatedSection>
              );
            })}
          </div>
          {/* Et bien d'autres ateliers */}
          <AnimatedSection className="mt-20">
            <div
              className="relative max-w-5xl mx-auto bg-[hsl(var(--cream))] border-[3px] border-dashed border-foreground px-7 py-9 md:px-12 md:py-10 grid md:grid-cols-[auto_1fr_auto] gap-8 items-center -rotate-[0.4deg]"
              style={{ borderRadius: "46px 70px 40px 64px / 64px 40px 70px 46px" }}
            >
              <div className="flex -space-x-5 justify-center">
                {AUTRES_PHOTOS.map((ph, i) => (
                  <img
                    key={ph.alt}
                    src={ph.src}
                    alt={ph.alt}
                    loading="lazy"
                    className={`w-20 h-20 md:w-24 md:h-24 object-cover border-brutal ${["-rotate-6", "rotate-3 translate-y-3", "-rotate-2"][i]}`}
                    style={[PASTILLE, { borderRadius: "48% 52% 44% 56% / 55% 45% 55% 45%" }, { borderRadius: "58% 42% 52% 48% / 46% 56% 44% 54%" }][i]}
                  />
                ))}
              </div>
              <div className="text-center md:text-left">
                <span className="section-label block mb-2">Et ce n'est pas tout</span>
                <h3 className="font-display text-[clamp(1.4rem,3vw,2rem)] uppercase leading-[0.95] tracking-[-0.5px] mb-3">
                  Plein d'autres ateliers <span className="text-primary">à découvrir</span>
                </h3>
                <p className="text-sm md:text-base text-foreground/75 leading-relaxed">
                  Sachets de senteurs, tataki zome, bougies et fleurs séchées, herbier, vannerie, tisanes… Une vingtaine d'ateliers, tous adaptables à vos équipes.
                </p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Link
                  to="/workshops"
                  className="btn-brutal inline-flex items-center gap-2 bg-[hsl(var(--olive-light))] text-foreground border-foreground rotate-1 hover:rotate-0 text-xs px-7 py-3.5 whitespace-nowrap"
                  style={BTN_GALET_B}
                >
                  Voir tous les ateliers <ArrowRight className="w-4 h-4" />
                </Link>
                <a href={DEVIS_ANCHOR} className="font-mono-brand text-[10px] uppercase tracking-[2px] underline underline-offset-4 decoration-2 hover:text-primary">
                  Vous hésitez ? On vous conseille
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== BÉNÉFICES + DÉROULÉ (bande verte) ===== */}
      <WaveDivider from="hsl(36,25%,88%)" to="hsl(153,40%,30%)" />
      <section className="bg-[hsl(var(--green))] text-[hsl(var(--cream))] px-6 pt-10 pb-20 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <span className="section-label block mb-3" style={{ color: "hsl(73 44% 67%)" }}>Pourquoi un team building nature</span>
            <h2 className="font-display text-[clamp(1.9rem,4.5vw,3rem)] uppercase leading-[0.95] tracking-[-1px]">
              Ce que vos équipes <span className="text-[hsl(var(--olive-light))]">y gagnent</span>
            </h2>
            <TraitDessine className="mx-auto mt-3" color="hsl(var(--olive-light))" variant={1} />
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
            {BENEFICES.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 100} className={`text-center ${i % 2 === 1 ? "lg:mt-10" : ""}`}>
                <div
                  className={`w-20 h-20 mx-auto mb-5 flex items-center justify-center border-brutal text-foreground ${["bg-[hsl(var(--olive-light))]", "bg-accent", "bg-[hsl(var(--cream))]", "bg-[hsl(var(--olive-light))]"][i]} ${i % 2 ? "rotate-3" : "-rotate-3"}`}
                  style={PASTILLE}
                >
                  <b.icon className="w-8 h-8" strokeWidth={2.2} />
                </div>
                <h3 className="font-display text-lg uppercase mb-2">{b.title}</h3>
                <p className="text-sm text-[hsl(var(--cream))]/80 leading-relaxed max-w-[240px] mx-auto">{b.desc}</p>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] uppercase leading-[0.95] tracking-[-1px]">
              Le déroulé <span className="text-[hsl(var(--olive-light))]">d'un atelier de 2h</span>
            </h2>
          </AnimatedSection>
          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* fil pointillé qui relie les étapes */}
            <svg className="hidden lg:block absolute left-[12%] right-[12%] top-[34px] w-[76%] h-6 pointer-events-none" viewBox="0 0 600 24" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 12 C 100 0, 200 24, 300 12 S 500 0, 600 12" fill="none" stroke="hsl(var(--olive-light))" strokeWidth="2.5" strokeDasharray="7 8" strokeLinecap="round" />
            </svg>
            {DEROULE.map((d, i) => (
              <AnimatedSection key={d.step} delay={i * 120}>
                <div className="relative text-center">
                  <div
                    className="relative z-10 w-[68px] h-[68px] mx-auto mb-5 flex items-center justify-center bg-[hsl(var(--cream))] text-foreground border-brutal shadow-[3px_3px_0_hsl(var(--black))]"
                    style={PASTILLE}
                  >
                    <span className="font-display text-xl">{d.step}</span>
                  </div>
                  <div className="bg-[hsl(var(--cream))] text-foreground border-brutal p-6" style={galet(i)}>
                    <span className="inline-block font-mono-brand text-[9px] uppercase tracking-[2px] bg-[hsl(var(--olive-light))] border-brutal-thin rounded-full px-3 py-1 mb-3">{d.time}</span>
                    <h3 className="font-display text-lg uppercase tracking-[-0.5px] mb-2">{d.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <WaveDivider from="hsl(153,40%,30%)" to="hsl(36,33%,93%)" flip />

      {/* ===== DE LA DEMANDE AU JOUR J ===== */}
      <section className="px-6 pt-10 pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-12 md:mb-14 text-center">
            <span className="section-label block mb-3">Simple et rapide</span>
            <h2 className="font-display text-[clamp(1.9rem,4.5vw,3rem)] uppercase leading-[0.95] tracking-[-1px]">
              De votre demande <span className="text-primary">au jour J</span>
            </h2>
            <TraitDessine className="mx-auto mt-3" variant={0} />
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {ETAPES.map((e, i) => (
              <AnimatedSection key={e.titre} delay={i * 120} className={i === 1 ? "md:mt-10" : ""}>
                <div className={`relative h-full bg-[hsl(var(--cream))] border-brutal shadow-brutal p-7 pt-12 ${["-rotate-1", "rotate-1", "-rotate-[0.6deg]"][i]} hover:rotate-0 transition-transform duration-300`} style={galet(i + 1)}>
                  <div
                    className={`absolute -top-8 left-7 w-16 h-16 flex items-center justify-center border-brutal shadow-[3px_3px_0_hsl(var(--black))] ${["bg-accent", "bg-[hsl(var(--olive-light))]", "bg-[hsl(var(--green))] text-[hsl(var(--cream))]"][i]}`}
                    style={PASTILLE}
                  >
                    <e.icon className="w-7 h-7" />
                  </div>
                  <span className="absolute top-5 right-6 font-display text-5xl text-primary/15 leading-none">{i + 1}</span>
                  <span className="inline-block font-mono-brand text-[9px] uppercase tracking-[2px] border-brutal-thin rounded-full px-3 py-1 mb-3">{e.quand}</span>
                  <h3 className="font-display text-xl uppercase leading-tight mb-2">{e.titre}</h3>
                  <p className="text-sm text-foreground/75 leading-relaxed">{e.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* occasions */}
          <div className="mt-16 text-center">
            <p className="section-label mb-5">Pour toutes vos occasions</p>
            <div className="flex flex-wrap justify-center gap-3">
              {OCCASIONS.map((o, i) => (
                <span
                  key={o}
                  className={`font-mono-brand text-[11px] uppercase tracking-[1.5px] px-4 py-2 border-brutal-thin rounded-full bg-[hsl(var(--cream))] shadow-[2px_2px_0_hsl(var(--black))] ${i % 2 ? "rotate-1" : "-rotate-1"}`}
                >
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
        </div>
      </section>

      <Testimonials />

      {/* ===== FAQ ===== */}
      <section className="pt-6 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <span className="section-label block mb-3">FAQ</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] uppercase leading-[0.95] tracking-[-1px]">
              Questions <span className="text-primary">fréquentes</span>
            </h2>
            <TraitDessine className="mx-auto mt-3" variant={1} />
          </AnimatedSection>
          <div className="space-y-5">
            {FAQ.map((f, i) => (
              <details
                key={f.q}
                className={`group border-brutal bg-[hsl(var(--cream))] px-6 md:px-8 py-5 open:shadow-brutal transition-shadow ${i % 2 ? "rotate-[0.3deg]" : "-rotate-[0.3deg]"}`}
                style={galet(i)}
                open={i === 0}
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display text-base md:text-lg uppercase tracking-[-0.5px]">{f.q}</h3>
                  <span className="w-9 h-9 flex-shrink-0 flex items-center justify-center bg-[hsl(var(--olive-light))] border-brutal-thin transition-transform group-open:rotate-180" style={PASTILLE}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </summary>
                <p className="mt-3 text-sm md:text-base text-foreground/70 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DEVIS (bande verte) ===== */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(153,40%,30%)" />
      <section
        id="devis"
        ref={devisRef}
        className="relative bg-[hsl(var(--green))] text-[hsl(var(--cream))] px-6 pt-8 pb-24 scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_460px] gap-12 lg:gap-16 items-start">
          <AnimatedSection className="lg:pt-6">
            <span className="section-label block mb-3" style={{ color: "hsl(73 44% 67%)" }}>Organisons votre atelier</span>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] uppercase leading-[0.92] tracking-[-1px]">
              Parlons de<br /><span className="text-[hsl(var(--olive-light))]">votre projet</span>
            </h2>
            <TraitDessine className="mt-3 mb-7" color="hsl(var(--olive-light))" variant={2} />
            <p className="text-base md:text-lg text-[hsl(var(--cream))]/85 leading-relaxed mb-8 max-w-xl">
              Nombre de participants, lieu, envies : nous vous proposons un format sur mesure, avec un devis gratuit. Réponse sous 24 à 48 heures.
            </p>
            <ul className="space-y-3 mb-9">
              {GARANTIES.map((g) => (
                <li key={g} className="flex items-start gap-3 text-[hsl(var(--cream))]/90">
                  <span className="mt-0.5 w-6 h-6 flex-shrink-0 flex items-center justify-center bg-[hsl(var(--olive-light))] text-foreground border-brutal-thin" style={PASTILLE}>
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  {g}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-5">
              <a
                href="tel:+33609831606"
                className="btn-brutal inline-flex items-center gap-2 bg-[hsl(var(--cream))] text-foreground border-foreground -rotate-1 hover:rotate-0 text-xs px-7 py-3.5"
                style={BTN_GALET_A}
              >
                <Phone className="w-4 h-4" /> 06 09 83 16 06
              </a>
              <a
                href={PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono-brand text-[11px] uppercase tracking-[2px] text-[hsl(var(--cream))]/80 hover:text-[hsl(var(--olive-light))] underline underline-offset-4 decoration-2 transition-colors"
              >
                <Download size={14} /> La plaquette entreprises (PDF)
              </a>
            </div>
          </AnimatedSection>
          <div
            className="bg-[hsl(var(--cream))] text-[hsl(var(--black))] border-brutal shadow-[6px_6px_0_hsl(var(--black))] p-7 md:p-9 text-left lg:rotate-[0.6deg]"
            style={galet(1)}
          >
            <QuoteForm atelierTitle="Team building nature" organic />
          </div>
        </div>
      </section>
      <WaveDivider from="hsl(153,40%,30%)" to="hsl(0,0%,10%)" flip />

      {/* Bouton devis flottant (mobile) */}
      <a
        href={DEVIS_ANCHOR}
        className={`md:hidden fixed left-4 bottom-4 z-40 btn-brutal inline-flex items-center gap-2 bg-accent text-foreground border-foreground text-xs px-6 py-3 shadow-brutal transition-all duration-300 ${showFloating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`}
        style={BTN_GALET_A}
        aria-hidden={!showFloating}
        tabIndex={showFloating ? 0 : -1}
      >
        Devis gratuit <ArrowRight className="w-4 h-4" />
      </a>

      <BackToTop />
      <Footer />
    </div>
  );
};

export default LandingTeamBuilding;
