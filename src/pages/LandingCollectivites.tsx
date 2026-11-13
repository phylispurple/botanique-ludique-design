import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import WaveDivider from "@/components/WaveDivider";
import TraitDessine from "@/components/TraitDessine";
import SocialProofBar from "@/components/SocialProofBar";
import { AREA_SERVED_IDF } from "@/data/areaServed";
import { galet, galetPhoto, PASTILLE } from "@/lib/organic";
import { Clock, ArrowRight, Check, Phone, Landmark, HeartHandshake, Leaf, Palette, Download, ChevronDown, FileText } from "lucide-react";

const PDF_URL = "/docs/plaquette-botanique-ludique-ecoles-2027.pdf";
import heroImg from "@/assets/gallery-papier-recycle-sechage.webp";
import imgBombes from "@/assets/gallery-bombes-graines-sechage.webp";
import imgEpices from "@/assets/gallery-atelier-epices-table.webp";
import imgPapier from "@/assets/gallery-papier-recycle-feuilles.webp";
import imgKokedama from "@/assets/gallery-kokedama-collection.jpg";
import imgTerrarium from "@/assets/gallery-terrarium-bocal-fittonia.jpg";
import imgHerbier from "@/assets/gallery-herbier-toiles.webp";

const SLUG = "/animation-collectivites-mairies";
const CONTACT = `/contact?subject=${encodeURIComponent("Animation pour une collectivité")}`;
const BTN_A = { borderRadius: "28px 14px 26px 12px / 14px 26px 12px 28px" };
const BTN_B = { borderRadius: "14px 30px 12px 26px / 26px 12px 30px 14px" };
const TONS = ["bg-accent", "bg-[hsl(var(--olive-light))]", "bg-[hsl(var(--green))] text-[hsl(var(--cream))]", "bg-[hsl(210_41%_24%)] text-[hsl(var(--cream))]"];
const TILTS = ["-rotate-1", "rotate-1", "-rotate-[0.6deg]", "rotate-[0.6deg]"];

const BENEFICES = [
  { icon: Landmark, title: "Clé en main", desc: "Tout le matériel est apporté, installation et rangement compris. Nous nous adaptons à vos salles et à vos contraintes." },
  { icon: HeartHandshake, title: "Lien social", desc: "Des ateliers ouverts à tous, familles, enfants, aînés, et souvent intergénérationnels." },
  { icon: Leaf, title: "Sensibilisation", desc: "Biodiversité, nature en ville, sobriété : on en parle en faisant, sans discours moralisateur." },
  { icon: Palette, title: "Culture", desc: "Chaque atelier raconte l'histoire humaine des plantes : une vraie médiation culturelle, pas seulement un loisir créatif." },
];

const ATELIERS = [
  { title: "Bombes à graines", image: imgBombes, alt: "Bombes à graines fabriquées en atelier", duration: "1h30 à 2h", highlight: "Familles", desc: "Graines voyageuses et jardins spontanés, puis chacun fabrique ses bombes à semer." },
  { title: "Sachets senteur, la route des épices", image: imgEpices, alt: "Table d'atelier couverte de bols d'épices lors d'un atelier en bibliothèque", duration: "1h30", highlight: "Médiathèques", desc: "L'histoire des épices racontée par le nez, puis chacun compose son sachet senteur." },
  { title: "Papier recyclé & carnets", image: imgPapier, alt: "Feuilles de papier recyclé colorées aux pétales en train de sécher", duration: "2 séances de 2h", highlight: "Réduction des déchets", desc: "Fabriquer son papier à partir de papier usagé et de pétales, puis relier son carnet." },
  { title: "Kokedama", image: imgKokedama, alt: "Kokedamas ficelés réalisés en atelier", duration: "2h", highlight: "Intergénérationnel", desc: "Une boule de mousse et de terre autour d'une plante : un geste lent qui réunit les âges." },
  { title: "Terrarium parent-enfant", image: imgTerrarium, alt: "Terrarium en bocal avec fittonia réalisé en atelier", duration: "1h30", highlight: "Parentalité", desc: "Composer ensemble un écosystème miniature en bocal, et l'histoire de la Wardian case." },
  { title: "Herbier créatif & cyanotype", image: imgHerbier, alt: "Toiles d'herbier avec fougère et plantes pressées", duration: "2h", highlight: "Art & nature", desc: "Presser, composer, imprimer : les plantes de la commune deviennent des œuvres." },
];

const OCCASIONS = [
  "Fête de la Nature",
  "Semaine du développement durable",
  "Fête de la Science",
  "Journées du patrimoine",
  "Semaine Bleue",
  "Semaine de la réduction des déchets",
  "Fête de quartier",
  "Programmation de médiathèque",
  "Vacances scolaires",
  "Marché de Noël",
];

const EXEMPLES = [
  { label: "Semaine Bleue : un atelier kokedama intergénérationnel à Gif-sur-Yvette", to: "/blog/semaine-bleue-atelier-intergenerationnel-kokedama-ehpad" },
  { label: "Fête de la Science : la route des épices à la bibliothèque de Versailles", to: "/blog/atelier-route-des-epices-fete-de-la-science-versailles" },
  { label: "Au fil des jardins de Voisins-le-Bretonneux : une balade ethnobotanique", to: "/blog/balade-botanique-voisins-le-bretonneux" },
];

const ENGAGEMENTS = [
  "Matériel naturel et réutilisable autant que possible",
  "Contenu adapté à tous les âges",
  "Bon de commande et facturation via Chorus Pro",
  "Attestation d'intervention sur demande",
  "SIRET et assurance responsabilité civile professionnelle",
  "Réponse sous 24h ouvrées",
];

const FAQ = [
  {
    q: "Combien de participants par atelier ?",
    a: "En général 12 à 15 participants par séance, pour que chacun soit bien accompagné. Sur un événement en plein air ou un marché, l'atelier peut fonctionner en flux continu : les habitants passent quand ils le souhaitent.",
  },
  {
    q: "Comment se passent la commande et la facturation ?",
    a: "Nous vous envoyons un devis, puis vous émettez un bon de commande. La facture est déposée sur Chorus Pro. Nous disposons d'un SIRET et d'une assurance responsabilité civile professionnelle.",
  },
  {
    q: "Quel délai prévoir ?",
    a: "Idéalement un à deux mois avant l'événement, et plus tôt pour les temps forts nationaux comme la Fête de la Nature, la Semaine Bleue ou la Fête de la Science.",
  },
];

const LandingCollectivites = () => (
  <div className="min-h-screen bg-[hsl(var(--cream))] overflow-x-clip">
    <SEO
      title="Animation Collectivités & Mairies - Ateliers Botaniques | Botanique Ludique"
      description="Animations botaniques pour collectivités et mairies en Île-de-France. Ateliers nature clé en main pour fêtes de quartier, journées du patrimoine, événements municipaux. Devis gratuit sous 24h."
      keywords="animation collectivité, atelier mairie, animation fête de quartier, atelier nature commune, animation municipale, atelier botanique collectivité, animation développement durable mairie, atelier nature île-de-france"
      canonical={SLUG}
    />
    <SchemaOrg
      type="Service"
      data={{
        serviceType: "Animation nature pour collectivités",
        name: "Animations botaniques pour collectivités et mairies",
        description: "Ateliers et médiations botaniques clé en main pour les communes, médiathèques et services municipaux d'Île-de-France.",
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
          { name: "Collectivités & mairies", url: `https://botaniqueludique.com${SLUG}` },
        ],
      }}
    />
    <Navigation />

    {/* ===== HERO ===== */}
    <section className="relative px-6 pt-28 pb-16 md:pt-36 md:pb-20">
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
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.15fr_1fr] gap-14 lg:gap-10 items-center">
        <AnimatedSection>
          <span className="inline-flex font-mono-brand text-[10px] md:text-[11px] uppercase tracking-[2px] bg-[hsl(210_41%_24%)] text-[hsl(var(--cream))] border-brutal-thin rounded-full px-4 py-2 mb-7 -rotate-2 shadow-[3px_3px_0_hsl(var(--black))]">
            Mairies · Médiathèques · Centres sociaux · MJC
          </span>
          <h1 className="font-display text-[clamp(2.2rem,5vw,4.2rem)] uppercase leading-[0.92] tracking-[-1.5px] mb-4">
            Animations botaniques
            <br />
            <span className="text-primary">pour votre commune</span>
          </h1>
          <TraitDessine className="mb-7" />
          <p className="font-editorial italic text-xl md:text-2xl text-foreground/80 max-w-[600px] leading-snug mb-8">
            Des ateliers clé en main qui créent du lien autour du vivant, avec une médiation ethnobotanique : chaque plante raconte une histoire humaine.
          </p>
          <div className="flex flex-wrap gap-4 mb-9">
            <Link to={CONTACT} className="btn-brutal inline-flex items-center gap-2 bg-accent text-foreground border-foreground -rotate-1 hover:rotate-0 text-xs px-8 py-3.5" style={BTN_A}>
              Demander un devis gratuit <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brutal inline-flex items-center gap-2 bg-[hsl(var(--cream))] text-foreground border-foreground rotate-1 hover:rotate-0 text-xs px-7 py-3.5"
              style={BTN_B}
            >
              <Download className="w-4 h-4" /> La plaquette (PDF)
            </a>
            <Link
              to="/marches-publics"
              className="inline-flex items-center gap-2 font-mono-brand text-[10px] uppercase tracking-[2px] underline underline-offset-4 decoration-2 hover:text-primary self-center"
            >
              <FileText className="w-4 h-4" /> Marchés publics
            </Link>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 max-w-[600px]">
            {["Devis gratuit, réponse sous 24 h", "Facturation via Chorus Pro", "Tout le matériel fourni", "Partout en Île-de-France"].map((g) => (
              <li key={g} className="flex items-start gap-2 text-sm text-foreground/80">
                <span className="mt-0.5 w-5 h-5 flex-shrink-0 flex items-center justify-center bg-[hsl(var(--olive-light))] border-brutal-thin" style={PASTILLE}>
                  <Check className="w-3 h-3" strokeWidth={3} />
                </span>
                {g}
              </li>
            ))}
          </ul>
        </AnimatedSection>

        <AnimatedSection delay={150} className="relative h-[400px] sm:h-[470px] max-w-[500px] w-full mx-auto">
          <img
            src={heroImg}
            alt="Feuilles de papier recyclé colorées en train de sécher sur la table d'atelier"
            className="absolute right-0 top-0 w-[62%] h-[72%] object-cover border-brutal shadow-brutal rotate-2"
            style={galetPhoto(1)}
          />
          <img
            src={imgEpices}
            alt="Table d'atelier couverte de bols d'épices en médiathèque"
            className="absolute left-0 bottom-0 w-[60%] h-[52%] object-cover border-brutal shadow-brutal -rotate-2"
            style={galetPhoto(0)}
            loading="lazy"
          />
          <img
            src={imgHerbier}
            alt="Toiles d'herbier réalisées en atelier"
            className="absolute left-[4%] top-[4%] w-[34%] aspect-square object-cover border-brutal -rotate-3"
            style={{ borderRadius: "58% 42% 52% 48% / 46% 56% 44% 54%" }}
            loading="lazy"
          />
        </AnimatedSection>
      </div>
    </section>

    <SocialProofBar />

    {/* ===== ATELIERS ===== */}
    <WaveDivider from="hsl(36,33%,93%)" to="hsl(36,25%,88%)" />
    <section className="bg-secondary px-6 pt-8 pb-20 md:pb-24">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-14">
          <span className="section-label block mb-3">Nos ateliers pour les collectivités</span>
          <h2 className="font-display text-[clamp(1.9rem,4.5vw,3.2rem)] uppercase leading-[0.92] tracking-[-1.5px]">
            Des formats
            <br />
            <span className="md:ml-16 text-primary">qui ont fait leurs preuves</span>
          </h2>
          <TraitDessine className="mt-3 md:ml-16" variant={1} />
          <p className="text-base md:text-lg text-foreground/75 max-w-2xl mt-6">
            En intérieur comme en extérieur, adaptés au public et à l'espace. En général 12 à 15 participants par séance, ou en flux continu sur un
            événement.
          </p>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {ATELIERS.map((w, i) => (
            <AnimatedSection key={w.title} delay={(i % 3) * 90} className={i % 3 === 1 ? "lg:mt-10" : ""}>
              <article className={`h-full flex flex-col ${i % 2 ? "rotate-[0.5deg]" : "-rotate-[0.5deg]"}`}>
                <div className="relative mb-5">
                  <img src={w.image} alt={w.alt} loading="lazy" className="w-full aspect-[4/3] object-cover border-brutal shadow-brutal" style={galetPhoto(i)} />
                  <span
                    className={`absolute -top-3 left-5 font-mono-brand text-[9px] uppercase tracking-[2px] px-3 py-1.5 border-brutal-thin rounded-full bg-[hsl(var(--cream))] shadow-[2px_2px_0_hsl(var(--black))] ${i % 2 ? "rotate-2" : "-rotate-2"}`}
                  >
                    {w.highlight}
                  </span>
                </div>
                <div className="px-2 flex flex-col flex-1">
                  <h3 className="font-display text-lg uppercase tracking-[-0.5px] mb-2">{w.title}</h3>
                  <p className="text-sm text-foreground/75 leading-relaxed mb-4 flex-1">{w.desc}</p>
                  <span className="inline-flex items-center gap-1.5 self-start font-mono-brand text-[10px] uppercase tracking-[1.5px] border-brutal-thin rounded-full px-3 py-1.5 bg-[hsl(var(--cream))]">
                    <Clock className="w-3.5 h-3.5 text-primary" /> {w.duration}
                  </span>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ===== POURQUOI (bande verte) ===== */}
    <WaveDivider from="hsl(36,25%,88%)" to="hsl(153,40%,30%)" />
    <section className="bg-[hsl(var(--green))] text-[hsl(var(--cream))] px-6 pt-8 pb-20 md:pb-24">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <span className="section-label block mb-3" style={{ color: "hsl(73 44% 67%)" }}>
            Pourquoi nous choisir
          </span>
          <h2 className="font-display text-[clamp(1.9rem,4.5vw,3rem)] uppercase leading-[0.95] tracking-[-1px]">
            Plus qu'un <span className="text-[hsl(var(--olive-light))]">atelier créatif</span>
          </h2>
          <TraitDessine className="mx-auto mt-3" color="hsl(var(--olive-light))" variant={2} />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {BENEFICES.map((b, i) => (
            <AnimatedSection key={b.title} delay={i * 100} className={i % 2 === 1 ? "lg:mt-8" : ""}>
              <div className={`relative h-full bg-[hsl(var(--cream))] text-foreground border-brutal p-6 pt-11 ${TILTS[i % 4]}`} style={galet(i + 1)}>
                <div className={`absolute -top-7 left-6 w-14 h-14 flex items-center justify-center border-brutal shadow-[3px_3px_0_hsl(var(--black))] ${TONS[i % 4]}`} style={PASTILLE}>
                  <b.icon className="w-6 h-6" strokeWidth={2.2} />
                </div>
                <h3 className="font-display text-lg uppercase mb-2">{b.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{b.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center">
          <h2 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] uppercase leading-[0.95] tracking-[-1px] mb-7">
            Pour quels <span className="text-[hsl(var(--olive-light))]">temps forts</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {OCCASIONS.map((o, i) => (
              <span
                key={o}
                className={`font-mono-brand text-[11px] uppercase tracking-[1.5px] px-4 py-2 border-brutal-thin rounded-full bg-[hsl(var(--cream))] text-foreground shadow-[2px_2px_0_hsl(var(--black))] ${i % 2 ? "rotate-1" : "-rotate-1"}`}
              >
                {o}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
    <WaveDivider from="hsl(153,40%,30%)" to="hsl(36,33%,93%)" flip />

    {/* ===== EXEMPLES + ENGAGEMENTS ===== */}
    <section className="px-6 pt-8 pb-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
        <AnimatedSection>
          <div className="h-full bg-[hsl(var(--cream))] border-brutal shadow-brutal p-8 -rotate-[0.5deg]" style={galet(0)}>
            <span className="section-label block mb-2">Ils l'ont fait</span>
            <h2 className="font-display text-xl md:text-2xl uppercase tracking-[-0.5px] mb-5">Retours d'expérience</h2>
            <ul className="space-y-4">
              {EXEMPLES.map((e) => (
                <li key={e.to}>
                  <Link to={e.to} className="group flex items-start gap-3 text-sm md:text-base leading-snug hover:text-primary transition-colors">
                    <span className="mt-0.5 w-6 h-6 flex-shrink-0 flex items-center justify-center bg-[hsl(var(--olive-light))] border-brutal-thin" style={PASTILLE}>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                    {e.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={120}>
          <div className="h-full bg-[hsl(var(--cream))] border-brutal shadow-brutal p-8 rotate-[0.5deg]" style={galet(2)}>
            <span className="section-label block mb-2">Côté administratif</span>
            <h2 className="font-display text-xl md:text-2xl uppercase tracking-[-0.5px] mb-5">Nos engagements</h2>
            <ul className="space-y-3">
              {ENGAGEMENTS.map((e) => (
                <li key={e} className="flex items-start gap-3 text-sm md:text-base text-foreground/80">
                  <span className="mt-0.5 w-6 h-6 flex-shrink-0 flex items-center justify-center bg-[hsl(var(--olive-light))] border-brutal-thin" style={PASTILLE}>
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* ===== FAQ ===== */}
    <section className="px-6 pb-16">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-10">
          <span className="section-label block mb-3">FAQ</span>
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] uppercase leading-[0.95] tracking-[-1px]">
            Questions <span className="text-primary">fréquentes</span>
          </h2>
          <TraitDessine className="mx-auto mt-3" variant={0} />
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
        <p className="mt-8 text-center text-sm text-foreground/70">
          À lire aussi :{" "}
          <Link to="/blog/financer-animation-nature-ccas" className="underline decoration-2 underline-offset-4 hover:text-primary">
            financer une animation nature en CCAS
          </Link>
          {" · "}
          <Link to="/blog/organiser-fete-nature-mairie" className="underline decoration-2 underline-offset-4 hover:text-primary">
            organiser la Fête de la Nature
          </Link>
          {" · "}
          <Link to="/intervention-mediatheque-botanique" className="underline decoration-2 underline-offset-4 hover:text-primary">
            interventions en médiathèque
          </Link>
        </p>
      </div>
    </section>

    {/* ===== CTA ===== */}
    <WaveDivider from="hsl(36,33%,93%)" to="hsl(153,40%,30%)" />
    <section className="bg-[hsl(var(--green))] text-[hsl(var(--cream))] px-6 pt-8 pb-20">
      <AnimatedSection className="max-w-4xl mx-auto text-center">
        <span className="section-label block mb-3" style={{ color: "hsl(73 44% 67%)" }}>
          Votre prochain événement
        </span>
        <h2 className="font-display text-[clamp(1.9rem,4.5vw,3rem)] uppercase leading-[0.95] tracking-[-1px]">
          Une animation nature <span className="text-[hsl(var(--olive-light))]">dans votre commune&nbsp;?</span>
        </h2>
        <TraitDessine className="mx-auto mt-3 mb-6" color="hsl(var(--olive-light))" variant={1} />
        <p className="text-base md:text-lg text-[hsl(var(--cream))]/85 leading-relaxed mb-9 max-w-xl mx-auto">
          Décrivez-nous votre événement, votre public et votre date : réponse sous 24h ouvrées, devis gratuit.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to={CONTACT} className="btn-brutal inline-flex items-center gap-2 bg-accent text-foreground border-foreground -rotate-1 hover:rotate-0 text-xs px-8 py-3.5" style={BTN_A}>
            Demander un devis <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:+33609831606"
            className="btn-brutal inline-flex items-center gap-2 bg-[hsl(var(--cream))] text-foreground border-foreground rotate-1 hover:rotate-0 text-xs px-7 py-3.5"
            style={BTN_B}
          >
            <Phone className="w-4 h-4" /> 06 09 83 16 06
          </a>
        </div>
        <a
          href={PDF_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-9 font-mono-brand text-[11px] uppercase tracking-[2px] text-[hsl(var(--cream))]/75 hover:text-[hsl(var(--olive-light))] underline underline-offset-4 decoration-2 transition-colors"
        >
          <Download size={14} /> Télécharger la plaquette 2027 (PDF)
        </a>
      </AnimatedSection>
    </section>
    <WaveDivider from="hsl(153,40%,30%)" to="hsl(0,0%,10%)" flip />

    <BackToTop />
    <Footer />
  </div>
);

export default LandingCollectivites;
