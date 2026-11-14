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
import HeroPrairie from "@/components/HeroPrairie";
import NoelEntrepriseBanner from "@/components/NoelEntrepriseBanner";
import { AREA_SERVED_IDF } from "@/data/areaServed";
import { EVENT_PHOTO } from "@/data/eventPhotos";
import { MapPin, Phone, Check } from "lucide-react";
import imgGroupe from "@/assets/gallery-workshop-group.webp";
import imgTerrarium from "@/assets/gallery-terrarium-bocal-fittonia.jpg";
import imgKokedama from "@/assets/gallery-kokedama-collection.jpg";
import imgTeinture from "@/assets/gallery-teinture-1.webp";
import imgSachets from "@/assets/gallery-sachet-senteur.webp";
import imgCta from "@/assets/cta-workshop-group.jpg";

const SLUG = "/ateliers-botanique-entreprise-idf";
const DEVIS = "/team-building-nature-entreprise#devis";

/* Formes organiques en « galet », comme sur la page d'accueil */
const GALETS = [
  "56% 44% 47% 53% / 50% 56% 44% 50%",
  "44% 56% 52% 48% / 56% 46% 54% 44%",
  "58% 42% 52% 48% / 46% 56% 44% 54%",
  "48% 52% 44% 56% / 52% 44% 56% 48%",
];

const PRINCIPE = [
  { label: "Dans vos locaux", desc: "Ou dans le lieu de votre choix, partout en Île-de-France, déplacement compris." },
  { label: "12 à 40 participants", desc: "Par session. Au-delà, nous organisons plusieurs sessions en rotation dans la journée." },
  { label: "Clés en main", desc: "Matériel, végétaux, installation et rangement : vos équipes n'ont plus qu'à venir." },
  { label: "Une histoire de plante", desc: "Chaque atelier s'accompagne d'une médiation ethnobotanique : on crée, et on comprend ce qu'on tient entre les mains." },
];

const OCCASIONS = [
  { title: "Team building", desc: "Une activité qui rassemble, où chacun crée de ses mains et repart avec sa création.", href: "/team-building-nature-entreprise", tone: "bg-accent -rotate-2" },
  { title: "Séminaire", desc: "Une pause créative qui ouvre, rythme ou clôt votre séminaire.", href: "/animation-seminaire-entreprise-paris", tone: "bg-[hsl(var(--olive-light))] rotate-1" },
  { title: "Semaine QVCT", desc: "Un temps de respiration pour prendre soin de vos équipes, sur la pause déjeuner ou en fin de journée.", href: "/animation-semaine-qvct", tone: "bg-[hsl(var(--cream))] -rotate-1" },
  { title: "CSE", desc: "Des ateliers pour les salariés et leurs familles, à l'occasion d'un temps fort ou d'une fête.", href: "/animation-cse-entreprise", tone: "bg-[hsl(var(--green))] text-[hsl(var(--cream))] rotate-2" },
  { title: "Onboarding", desc: "Un moment convivial pour accueillir les nouveaux arrivants et créer du lien dès les premiers jours.", href: "/atelier-onboarding-collaborateurs", tone: "bg-[hsl(var(--olive-light))] -rotate-2" },
  { title: "Événement de marque", desc: "Lancement, soirée presse, salon : une animation en flux continu pour vos invités.", href: "/animation-vegetale-agence-evenementielle", tone: "bg-accent rotate-1" },
];

const POPULAIRES = [
  {
    tag: "Le plus demandé",
    title: "Terrarium",
    image: imgTerrarium,
    alt: "Terrarium en bocal de verre avec une fittonia et de la mousse, réalisé en atelier",
    desc: "Chacun compose son jardin sous verre, couche après couche, et l'emporte au bureau ou à la maison. En prime, l'histoire des caisses de Ward, qui ont fait voyager les plantes à travers les océans.",
    href: "/atelier-terrarium-team-building",
    tone: "bg-accent -rotate-3",
  },
  {
    tag: "Le plus apaisant",
    title: "Kokedama",
    image: imgKokedama,
    alt: "Collection de kokedamas, boules de mousse nouées au fil, réalisés en atelier",
    desc: "La technique japonaise du jardin en boule de mousse : on façonne, on habille, on noue. Un geste lent, les mains dans la terre, idéal pour décrocher le temps d'un atelier.",
    href: "/atelier-kokedama-team-building",
    tone: "bg-[hsl(var(--olive-light))] rotate-2",
  },
  {
    tag: "Le plus surprenant",
    title: "Teinture végétale",
    image: imgTeinture,
    alt: "Tissus teints avec des plantes lors d'un atelier de teinture végétale",
    desc: "Des plantes, des fleurs, et le tissu change de couleur sous vos yeux. On découvre les plantes tinctoriales et les savoir-faire qui ont coloré le monde avant la chimie.",
    href: "/atelier-teinture-vegetale-team-building",
    tone: "bg-[hsl(var(--cream))] -rotate-2",
  },
  {
    tag: "Le plus rapide",
    title: "Sachet senteur aux épices",
    image: imgSachets,
    alt: "Sachets senteur en organza remplis de lavande, de camomille, de bleuet et de bâtons de cannelle",
    desc: "On sent, on mélange, on compose son sachet d'épices et de plantes séchées en remontant la route des épices. Un format court, parfait pour les grands groupes.",
    href: DEVIS,
    tone: "bg-[hsl(var(--green))] text-[hsl(var(--cream))] rotate-3",
  },
];

const AUTRES = [
  "Couronne végétale",
  "Bombes à graines",
  "Tableau de feuilles d'automne",
  "Tataki-zome",
  "Bougie aux fleurs séchées",
  "Fresque végétale",
  "Boutures et plantes d'intérieur",
];

const APPORTE = [
  "Tout le matériel et les végétaux",
  "L'installation et le rangement",
  "Les emballages et les cartes d'entretien",
  "Le déplacement, partout en Île-de-France",
];

const DEPARTEMENTS = [
  { dept: "Paris (75)", villes: "Tous les arrondissements" },
  { dept: "Hauts-de-Seine (92)", villes: "La Défense, Boulogne, Issy, Nanterre…" },
  { dept: "Yvelines (78)", villes: "Versailles, Saint-Germain, Saint-Quentin…" },
  { dept: "Val-de-Marne (94)", villes: "Créteil, Vincennes, Ivry…" },
  { dept: "Seine-Saint-Denis (93)", villes: "Saint-Denis, Montreuil, Pantin…" },
  { dept: "Essonne (91)", villes: "Massy, Évry, Palaiseau…" },
  { dept: "Val-d'Oise (95)", villes: "Cergy, Argenteuil, Pontoise…" },
  { dept: "Seine-et-Marne (77)", villes: "Marne-la-Vallée, Melun…" },
];

const FAQ = [
  {
    q: "Combien de participants pouvez-vous accueillir ?",
    a: "De 12 à 40 participants par session. Pour un groupe plus grand, nous organisons plusieurs sessions en rotation dans la journée, pour que chacun soit bien accompagné.",
  },
  {
    q: "Où intervenez-vous ?",
    a: "Dans vos locaux ou dans le lieu de votre choix, partout en Île-de-France : Paris, petite et grande couronne. Le déplacement est compris.",
  },
  {
    q: "De quoi avez-vous besoin sur place ?",
    a: "De tables, de chaises et d'un espace couvert. Pour la teinture végétale et le kokedama, un point d'eau à proximité. Nous apportons tout le reste.",
  },
  {
    q: "Combien coûte un atelier ?",
    a: "Chaque atelier fait l'objet d'un devis personnalisé selon l'atelier, le nombre de participants, la durée et le lieu. Le devis est gratuit et nous répondons sous 48 heures.",
  },
  {
    q: "Combien de temps à l'avance faut-il réserver ?",
    a: "Idéalement trois à quatre semaines avant la date, et six à huit semaines pour les périodes chargées comme Noël et le printemps.",
  },
];

const AteliersBotaniqueEntrepriseIDF = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-clip">
      <SEO
        title="Ateliers botaniques pour entreprises en Île-de-France"
        description="Ateliers botaniques pour vos équipes, dans vos locaux partout en Île-de-France : terrarium, kokedama, teinture végétale, sachet senteur. Team building, séminaire, QVCT, CSE. De 12 à 40 participants, devis gratuit."
        keywords="atelier entreprise Île-de-France, animation entreprise Paris, team building IDF, atelier botanique entreprise, séminaire nature, animation QVCT, atelier CSE, atelier terrarium entreprise"
        canonical={SLUG}
      />
      <SchemaOrg
        type="Service"
        data={{
          serviceType: "Ateliers botaniques en entreprise",
          name: "Ateliers botaniques pour entreprises en Île-de-France",
          description:
            "Ateliers botaniques clés en main dans les locaux des entreprises d'Île-de-France, de 12 à 40 participants par session : terrarium, kokedama, teinture végétale, sachet senteur, avec médiation ethnobotanique.",
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
            { name: "Entreprises en Île-de-France", url: `https://botaniqueludique.com${SLUG}` },
          ],
        }}
      />

      <Navigation />

      {/* ===== HERO — la prairie illustrée de l'accueil ===== */}
      <section className="min-h-[82vh] flex items-center justify-center relative overflow-hidden pt-24 pb-28">
        <div className="absolute inset-0 bg-foreground">
          <div className="absolute inset-0 opacity-80">
            <HeroPrairie image="/images/hero-entreprises.webp" />
          </div>
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 55% 45% at 50% 55%, rgba(20,22,20,0.6), transparent 75%)" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 to-foreground/55" />

        <div className="relative z-10 text-center px-6 max-w-[900px]">
          <AnimatedSection>
            <p className="font-mono-brand text-[11px] md:text-[13px] uppercase tracking-[3px] text-olive-light mb-5">
              Entreprises · CSE · Île-de-France
            </p>
            <h1 className="font-display text-[clamp(2.2rem,6vw,4.6rem)] uppercase leading-[0.9] tracking-[-2px] text-primary-foreground mb-6">
              Ateliers botaniques<br />
              <span className="text-olive-light">pour les entreprises</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <p className="font-editorial italic text-2xl md:text-[32px] leading-tight text-primary-foreground max-w-[700px] mx-auto mb-4">
              Vos équipes créent, écoutent et repartent avec du vivant
            </p>
            <p className="font-body text-[15px] md:text-[17px] text-primary-foreground/80 max-w-[580px] mx-auto mb-10 leading-relaxed">
              Terrarium, kokedama, teinture végétale… Nous venons animer nos ateliers dans vos locaux, partout en Île-de-France.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link
                to={DEVIS}
                className="btn-brutal bg-accent text-foreground border-accent -rotate-2 hover:rotate-0 hover:bg-primary-foreground hover:text-foreground hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_hsl(var(--accent))] px-7 py-3"
                style={{ borderRadius: "28px 14px 26px 12px / 14px 26px 12px 28px" }}
              >
                Demander un devis →
              </Link>
              <a
                href="#ateliers"
                className="btn-brutal bg-[hsl(var(--green))] text-[hsl(var(--cream))] border-[hsl(var(--olive-light))] rotate-1 hover:rotate-0 hover:bg-[hsl(var(--cream))] hover:text-foreground hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_hsl(var(--green))] px-7 py-3"
                style={{ borderRadius: "14px 30px 12px 26px / 26px 12px 30px 14px" }}
              >
                Voir nos ateliers →
              </a>
            </div>
          </AnimatedSection>
        </div>

        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="absolute -bottom-1 left-0 w-full h-[68px] md:h-[100px]"
          aria-hidden="true"
        >
          <path d="M0,120 C240,40 480,20 720,50 C960,80 1200,30 1440,120 L1440,120 L0,120 Z" fill="hsl(var(--cream))" />
        </svg>
      </section>

      {/* ===== LE PRINCIPE — photo en galet ===== */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[5fr_6fr] gap-14 md:gap-20 items-center">
          <AnimatedSection direction="left" className="order-2 md:order-none">
            <div className="relative max-w-[480px] mx-auto">
              <div
                className="absolute -inset-4 md:-inset-8 bg-[hsl(var(--olive-light))]/35"
                style={{ borderRadius: "42% 58% 63% 37% / 41% 44% 56% 59%" }}
                aria-hidden="true"
              />
              <img
                src={imgGroupe}
                alt="Participants qui façonnent leurs kokedamas autour d'une grande table d'atelier"
                className="relative w-full aspect-[4/5] object-cover border-brutal shadow-brutal-lg"
                style={{ borderRadius: GALETS[0] }}
                loading="lazy"
              />
              <span className="absolute -bottom-4 right-2 md:-right-6 -rotate-6 font-mono-brand text-[10px] uppercase tracking-[2px] bg-accent border-brutal-thin rounded-full px-4 py-2 shadow-[3px_3px_0_hsl(var(--black))]">
                Devis gratuit sous 48 h
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={150} className="order-1 md:order-none">
            <span className="section-label block mb-4">Le principe</span>
            <h2 className="font-display text-[clamp(2rem,4.2vw,3.2rem)] uppercase leading-[0.92] tracking-[-2px] mb-4">
              Nous venons<br /><span className="md:ml-14 text-primary">jusqu'à vous</span>
            </h2>
            <TraitDessine className="-mt-1 mb-5 md:ml-14" />
            <p className="font-editorial italic text-xl md:text-2xl text-foreground/60 mb-8 md:ml-14">
              créer · écouter · repartir avec sa création
            </p>
            <ul className="space-y-5 max-w-[520px]">
              {PRINCIPE.map((item) => (
                <li key={item.label} className="md:border-l-[3px] md:border-primary md:pl-6">
                  <p className="font-display uppercase text-base tracking-[-0.5px] mb-1">{item.label}</p>
                  <p className="text-base leading-relaxed text-foreground/75">{item.desc}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-foreground/60 max-w-[520px]">
              Ateliers animés par Vanessa Charlery, animatrice ethnobotaniste formée à l'EHESS.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== OCCASIONS ===== */}
      <section className="pb-20 md:pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-12">
            <span className="section-label block mb-3">Pour quelle occasion ?</span>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.92] tracking-[-1.5px]">
              Un atelier pour<br /><span className="md:ml-16 text-primary">chaque moment</span>
            </h2>
            <TraitDessine className="mt-3 md:ml-16" variant={1} />
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {OCCASIONS.map((o, i) => (
              <AnimatedSection key={o.title} delay={i * 80}>
                <Link
                  to={o.href}
                  className="group relative block h-full border-brutal rounded-[1.75rem] bg-[hsl(var(--cream))] p-6 pt-9 shadow-brutal transition-transform hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-brutal-lg"
                >
                  <span
                    className={`absolute -top-4 left-5 font-display uppercase text-sm tracking-[-0.3px] border-brutal-thin rounded-full px-4 py-1.5 shadow-[3px_3px_0_hsl(var(--black))] ${o.tone}`}
                  >
                    {o.title}
                  </span>
                  <p className="text-base text-foreground/75 leading-relaxed mb-4">{o.desc}</p>
                  <span className="font-mono-brand text-[10px] uppercase tracking-[2px] text-primary group-hover:underline">
                    En savoir plus →
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ATELIERS POPULAIRES ===== */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(36,25%,88%)" />
      <section id="ateliers" className="py-16 md:py-24 bg-secondary px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-14">
            <span className="section-label block mb-3">Les plus demandés</span>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.92] tracking-[-1.5px]">
              Nos ateliers<br /><span className="md:ml-16 text-primary">populaires</span>
            </h2>
            <TraitDessine className="mt-3 md:ml-16" variant={2} />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {POPULAIRES.map((a, i) => (
              <AnimatedSection key={a.title} delay={i * 100}>
                <article className="flex flex-col h-full">
                  <div className="relative max-w-[440px] w-full mx-auto mb-8">
                    <img
                      src={a.image}
                      alt={a.alt}
                      loading="lazy"
                      className="w-full aspect-[5/4] object-cover border-brutal shadow-brutal"
                      style={{ borderRadius: GALETS[i % GALETS.length] }}
                    />
                    <span
                      className={`absolute -top-3 left-4 font-mono-brand text-[10px] uppercase tracking-[2px] border-brutal-thin rounded-full px-4 py-2 shadow-[3px_3px_0_hsl(var(--black))] ${a.tone}`}
                    >
                      {a.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl md:text-[28px] uppercase tracking-[-0.5px] mb-3">{a.title}</h3>
                  <p className="text-base text-foreground/75 leading-relaxed mb-6">{a.desc}</p>
                  <Link
                    to={a.href}
                    className="mt-auto self-start btn-brutal rounded-full bg-foreground text-primary-foreground border-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-7 py-3"
                  >
                    {a.href === DEVIS ? "Demander un devis →" : "Découvrir l'atelier →"}
                  </Link>
                </article>
              </AnimatedSection>
            ))}
          </div>

          {/* Et bien d'autres */}
          <AnimatedSection className="mt-20 text-center">
            <p className="font-editorial italic text-2xl md:text-3xl text-foreground/70 mb-6">… et bien d'autres ateliers</p>
            <ul className="flex flex-wrap justify-center gap-3 mb-6 max-w-3xl mx-auto">
              {AUTRES.map((item, i) => (
                <li
                  key={item}
                  className={`font-mono-brand text-[11px] uppercase tracking-[1.5px] px-4 py-2 border-brutal-thin rounded-full bg-[hsl(var(--cream))] ${
                    i % 2 ? "rotate-1" : "-rotate-1"
                  }`}
                >
                  {item}
                </li>
              ))}
              <li>
                <Link
                  to="/balade-botanique-entreprise-cse"
                  className="block font-mono-brand text-[11px] uppercase tracking-[1.5px] px-4 py-2 border-brutal-thin rounded-full bg-[hsl(var(--olive-light))] rotate-1 hover:rotate-0 transition-transform"
                >
                  Balade botanique →
                </Link>
              </li>
            </ul>
            <p className="text-base text-foreground/70 max-w-xl mx-auto mb-8">
              Selon la saison, la taille de votre groupe ou le thème de votre événement, nous vous proposons l'atelier qui convient, ou
              nous en imaginons un sur mesure.
            </p>
            <Link
              to="/ateliers-botaniques-tous"
              className="btn-brutal rounded-full bg-primary text-primary-foreground border-primary hover:bg-primary-foreground hover:text-foreground text-xs px-8 py-3 inline-block"
            >
              Voir tous nos ateliers →
            </Link>
          </AnimatedSection>
        </div>
      </section>
      <WaveDivider from="hsl(36,25%,88%)" to="hsl(153,40%,30%)" />

      {/* ===== CLÉS EN MAIN — bande verte comme sur l'accueil ===== */}
      <section className="bg-[hsl(var(--green))] text-[hsl(var(--cream))] px-6 py-12 md:py-16" aria-labelledby="bloc-cles-en-main">
        <AnimatedSection className="max-w-5xl mx-auto grid md:grid-cols-[2fr_3fr] gap-10 md:gap-14 items-center">
          <img
            src={EVENT_PHOTO.terrariumTable}
            alt="Terrariums en bocal et sacs kraft prêts pour une animation en entreprise"
            className="w-full max-w-sm mx-auto aspect-square object-cover border-4 border-[hsl(var(--cream))] rotate-2"
            style={{ borderRadius: GALETS[2] }}
            loading="lazy"
          />
          <div>
            <p className="section-label mb-2" style={{ color: "hsl(73 44% 67%)" }}>
              Organisation
            </p>
            <h2 id="bloc-cles-en-main" className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] uppercase leading-[0.95] tracking-[-1px] mb-4">
              Clés en main, <span className="text-[hsl(var(--olive-light))]">sans prise de tête</span>
            </h2>
            <TraitDessine className="-mt-1 mb-5" color="hsl(var(--olive-light))" variant={1} />
            <ul className="space-y-2 mb-5">
              {APPORTE.map((item) => (
                <li key={item} className="flex gap-2 items-start text-base text-[hsl(var(--cream))]/90">
                  <Check className="w-5 h-5 text-[hsl(var(--olive-light))] flex-shrink-0 mt-0.5" strokeWidth={3} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-editorial italic text-xl text-[hsl(var(--cream))] mb-6">
              Vous prévoyez des tables et un espace couvert, nous nous occupons du reste.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <Link
                to={DEVIS}
                className="btn-brutal rounded-full bg-accent text-foreground border-accent text-xs px-6 py-3 text-center whitespace-nowrap"
              >
                Demander un devis →
              </Link>
              <Link
                to="/team-building-nature-entreprise"
                className="btn-brutal rounded-full bg-transparent text-[hsl(var(--cream))] border-[hsl(var(--cream))] text-xs px-6 py-3 text-center whitespace-nowrap"
              >
                Voir les formules
              </Link>
            </div>
            <NoelEntrepriseBanner />
          </div>
        </AnimatedSection>
      </section>
      <WaveDivider from="hsl(153,40%,30%)" to="hsl(36,33%,93%)" flip />

      {/* ===== PARTOUT EN IDF ===== */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          <AnimatedSection direction="left">
            <span className="section-label block mb-4">Partout en Île-de-France</span>
            <h2 className="font-display text-[clamp(1.8rem,3.8vw,2.8rem)] uppercase leading-[0.92] tracking-[-1.5px] mb-4">
              Ils nous ont<br /><span className="md:ml-12 text-primary">fait confiance</span>
            </h2>
            <TraitDessine className="-mt-1 mb-6 md:ml-12" variant={3} />
            <p className="text-base md:text-lg leading-[1.8] text-foreground/75 mb-5">
              Grandes entreprises, institutions, lieux culturels : nous avons notamment animé des ateliers pour
            </p>
            <ul className="space-y-2 md:border-l-[3px] md:border-primary md:pl-6 mb-5">
              {["Thales", "l'Assurance Maladie", "la Région Île-de-France", "le CENTQUATRE-Paris"].map((ref) => (
                <li key={ref} className="text-base text-foreground font-semibold">
                  {ref}
                </li>
              ))}
            </ul>
            <p className="text-sm text-foreground/60">Et de nombreuses villes, médiathèques et structures d'Île-de-France.</p>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={150}>
            <div className="border-brutal rounded-[2rem] bg-[hsl(var(--cream))] p-8 md:p-10 shadow-brutal-lg rotate-1">
              <h3 className="font-display text-lg uppercase mb-6">Nous intervenons dans…</h3>
              <ul className="space-y-3">
                {DEPARTEMENTS.map((d) => (
                  <li key={d.dept} className="flex items-start gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-foreground">{d.dept}</strong>
                      <span className="text-foreground/65"> · {d.villes}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-editorial italic text-lg text-foreground/60 mt-6">Déplacement compris, partout en Île-de-France.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== LOGOS ===== */}
      <SocialProofBar />

      {/* ===== FAQ ===== */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="mb-10">
            <span className="section-label block mb-3">FAQ</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] uppercase leading-[0.95] tracking-[-1px]">
              Vos <span className="text-primary">questions</span>
            </h2>
            <TraitDessine className="mt-3" variant={1} />
          </AnimatedSection>
          <div className="space-y-5">
            {FAQ.map((item) => (
              <div key={item.q} className="border-brutal rounded-[1.75rem] bg-[hsl(var(--cream))] p-6 md:p-7 shadow-brutal">
                <h3 className="font-display text-base md:text-lg uppercase tracking-[-0.5px] mb-2">{item.q}</h3>
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA : la photo remplit la vague, comme sur l'accueil ===== */}
      <section className="pt-32 md:pt-44 pb-20 md:pb-24 px-6 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 top-1 bg-foreground">
          <img src={imgCta} alt="" className="w-full h-full object-cover opacity-35" loading="lazy" />
        </div>
        <div className="absolute inset-x-0 bottom-0 top-1 bg-foreground/40" />
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="absolute -top-1 left-0 w-full h-[52px] md:h-[84px] z-[1] scale-x-[-1]"
          aria-hidden="true"
        >
          <path d="M0,0 L1440,0 L1440,120 C1200,30 960,80 720,50 C480,20 240,40 0,120 Z" fill="hsl(36,33%,93%)" />
        </svg>
        <AnimatedSection className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl uppercase leading-[0.95] mb-5">
            Un atelier pour <span className="text-olive-light">vos équipes</span> ?
          </h2>
          <p className="text-base md:text-lg text-primary-foreground/80 leading-relaxed mb-10 max-w-xl mx-auto">
            Nombre de participants, lieu, date, envies : envoyez-nous l'essentiel et nous revenons vers vous sous 48 heures avec une
            proposition et un devis gratuit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={DEVIS}
              className="btn-brutal rounded-full bg-accent text-foreground border-accent hover:bg-primary-foreground text-xs px-8 py-3"
            >
              Demander un devis →
            </Link>
            <a
              href="tel:+33609831606"
              className="btn-brutal rounded-full bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-8 py-3 inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" /> 06 09 83 16 06
            </a>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default AteliersBotaniqueEntrepriseIDF;
