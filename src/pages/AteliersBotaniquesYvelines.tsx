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
import { AREA_SERVED_IDF } from "@/data/areaServed";
import { MapPin, Phone } from "lucide-react";
import imgGroupe from "@/assets/gallery-terrarium-adultes-groupe.jpg";
import imgTerrarium from "@/assets/gallery-terrarium-bocal-fittonia.jpg";
import imgKokedama from "@/assets/gallery-kokedama-collection.jpg";
import imgTeinture from "@/assets/gallery-teinture-1.webp";
import imgEpices from "@/assets/atelier-epices-choiseul.webp";
import imgAnniversaire from "@/assets/gallery-terrarium-enfants-fabrication.jpg";
import imgCta from "@/assets/cta-workshop-group.jpg";

const SLUG = "/ateliers-botaniques-yvelines";
const CONTACT = `/contact?subject=${encodeURIComponent("Atelier botanique dans les Yvelines")}`;

/* Formes organiques en « galet », comme sur la page d'accueil */
const GALETS = [
  "56% 44% 47% 53% / 50% 56% 44% 50%",
  "44% 56% 52% 48% / 56% 46% 54% 44%",
  "58% 42% 52% 48% / 46% 56% 44% 54%",
  "48% 52% 44% 56% / 52% 44% 56% 48%",
];

const PRINCIPE = [
  { label: "Nous venons chez vous", desc: "Dans votre structure, votre salle ou votre entreprise, partout dans le 78." },
  { label: "Dès 8 participants", desc: "Enfants, familles, adultes, seniors, équipes : chaque atelier s'adapte au public." },
  { label: "Tout est fourni", desc: "Matériel, végétaux, installation et rangement : vous n'avez rien à prévoir." },
  { label: "Une histoire de plante", desc: "Chaque atelier s'accompagne d'une médiation ethnobotanique." },
];

const POPULAIRES = [
  {
    tag: "Le plus demandé",
    title: "Terrarium",
    image: imgTerrarium,
    alt: "Terrarium en bocal de verre avec une fittonia et de la mousse, réalisé en atelier",
    desc: "Chacun compose son petit jardin sous verre, couche après couche, et repart avec un objet vivant qui se débrouille presque seul. En prime, l'histoire des caisses de Ward, qui ont fait voyager les plantes à travers les océans.",
    href: "/atelier-terrarium-paris",
    tone: "bg-accent -rotate-3",
  },
  {
    tag: "Le plus apaisant",
    title: "Kokedama",
    image: imgKokedama,
    alt: "Collection de kokedamas, boules de mousse nouées au fil, réalisés en atelier",
    desc: "La technique japonaise du jardin en boule de mousse : on façonne, on habille, on noue. Un geste lent, les mains dans la terre, pour une plante à poser ou à suspendre.",
    href: "/atelier-kokedama-paris",
    tone: "bg-[hsl(var(--olive-light))] rotate-2",
  },
  {
    tag: "Le plus surprenant",
    title: "Teinture végétale",
    image: imgTeinture,
    alt: "Tissus teints avec des plantes lors d'un atelier de teinture végétale",
    desc: "Des plantes, des fleurs, parfois un simple chou rouge, et le tissu change de couleur sous vos yeux. On découvre les plantes tinctoriales et les savoir-faire qui ont coloré le monde avant la chimie.",
    href: "/atelier-teinture-vegetale",
    tone: "bg-[hsl(var(--cream))] -rotate-2",
  },
  {
    tag: "Vécu à Versailles",
    title: "Sachet senteur aux épices",
    image: imgEpices,
    alt: "Participants composant leur sachet senteur aux épices à la Bibliothèque Choiseul de Versailles, Fête de la Science 2026",
    desc: "On sent, on mélange, on compose son sachet d'épices et de plantes séchées en remontant la route des épices. Un atelier que nous avons proposé à la Bibliothèque Choiseul de Versailles pour la Fête de la Science 2026.",
    href: CONTACT,
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

const VILLES = [
  "Versailles",
  "Saint-Germain-en-Laye",
  "Saint-Quentin-en-Yvelines",
  "Chatou",
  "Le Vésinet",
  "Le Pecq",
  "Croissy-sur-Seine",
  "Montesson",
  "La Celle-Saint-Cloud",
  "Maurepas",
  "Poissy",
  "Rambouillet",
];

const REFERENCES_78 = [
  "Ville de Versailles (Bibliothèque Choiseul)",
  "Musée de la Ville de Saint-Quentin-en-Yvelines",
  "Ville de Maurepas",
  "Ville de La Celle-Saint-Cloud",
];

const FAQ = [
  {
    q: "Vous déplacez-vous partout dans les Yvelines ?",
    a: "Oui, à partir de 8 participants. Nous intervenons dans tout le département, de Versailles à Saint-Germain-en-Laye, de Saint-Quentin-en-Yvelines à la boucle de Seine, et plus largement dans toute l'Île-de-France. Nous apportons tout le matériel.",
  },
  {
    q: "Pour quelles structures proposez-vous ces ateliers ?",
    a: "Médiathèques et bibliothèques, mairies et CCAS, centres sociaux, écoles et accueils de loisirs, résidences seniors, entreprises et CSE, mais aussi les particuliers : anniversaire d'enfant ou d'adulte, fête entre amis, enterrement de vie de jeune fille.",
  },
  {
    q: "Peut-on choisir un autre atelier que ceux présentés ici ?",
    a: "Bien sûr. Les ateliers mis en avant sont les plus demandés, mais il en existe beaucoup d'autres, et chaque atelier peut être adapté à votre public, à la saison ou au thème de votre événement.",
  },
  {
    q: "Combien coûte un atelier ?",
    a: "Chaque atelier fait l'objet d'un devis selon l'atelier choisi, le nombre de participants, la durée et le lieu. Décrivez-nous votre projet et nous vous faisons une proposition.",
  },
  {
    q: "Combien de temps à l'avance faut-il réserver ?",
    a: "Idéalement trois à quatre semaines avant la date souhaitée, et un peu plus pour les périodes chargées comme Noël et le printemps.",
  },
];

const AteliersBotaniquesYvelines = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-clip">
      <SEO
        title="Ateliers botaniques dans les Yvelines (78)"
        description="Ateliers botaniques dans les Yvelines : terrarium, kokedama, teinture végétale, sachet senteur aux épices et bien d'autres. Nous nous déplaçons à Versailles, Saint-Germain-en-Laye, Chatou, Saint-Quentin-en-Yvelines."
        keywords="atelier botanique Yvelines, atelier terrarium Yvelines, atelier kokedama Yvelines, teinture végétale 78, atelier nature Versailles, atelier botanique Saint-Germain-en-Laye, atelier Chatou, atelier Le Pecq"
        canonical={SLUG}
      />
      <SchemaOrg
        type="Service"
        data={{
          serviceType: "Ateliers botaniques",
          name: "Ateliers botaniques dans les Yvelines",
          description:
            "Ateliers botaniques créatifs sur place pour les structures et les groupes des Yvelines, dès 8 participants : terrarium, kokedama, teinture végétale, sachet senteur aux épices, avec médiation ethnobotanique.",
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
            { name: "Ateliers", url: "https://botaniqueludique.com/ateliers-botaniques-tous" },
            { name: "Yvelines", url: `https://botaniqueludique.com${SLUG}` },
          ],
        }}
      />

      <Navigation />

      {/* ===== HERO — la prairie illustrée de l'accueil ===== */}
      <section className="min-h-[82vh] flex items-center justify-center relative overflow-hidden pt-24 pb-28">
        <div className="absolute inset-0 bg-foreground">
          <div className="absolute inset-0 opacity-80">
            <HeroPrairie />
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
              Yvelines · 78
            </p>
            <h1 className="font-display text-[clamp(2.2rem,6vw,4.6rem)] uppercase leading-[0.9] tracking-[-2px] text-primary-foreground mb-6">
              Ateliers botaniques<br />
              <span className="text-olive-light">dans les Yvelines</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <p className="font-editorial italic text-2xl md:text-[32px] leading-tight text-primary-foreground max-w-[700px] mx-auto mb-4">
              On crée avec ses mains, on repart avec une histoire
            </p>
            <p className="font-body text-[15px] md:text-[17px] text-primary-foreground/80 max-w-[560px] mx-auto mb-10 leading-relaxed">
              Terrarium, kokedama, teinture végétale… Nous venons animer nos ateliers chez vous, de Versailles à Saint-Germain-en-Laye.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link
                to={CONTACT}
                className="btn-brutal bg-accent text-foreground border-accent -rotate-2 hover:rotate-0 hover:bg-primary-foreground hover:text-foreground hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_hsl(var(--accent))] px-7 py-3"
                style={{ borderRadius: "28px 14px 26px 12px / 14px 26px 12px 28px" }}
              >
                Demander un atelier →
              </Link>
              <Link
                to="/ateliers-botaniques-tous"
                className="btn-brutal bg-[hsl(var(--green))] text-[hsl(var(--cream))] border-[hsl(var(--olive-light))] rotate-1 hover:rotate-0 hover:bg-[hsl(var(--cream))] hover:text-foreground hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_hsl(var(--green))] px-7 py-3"
                style={{ borderRadius: "14px 30px 12px 26px / 26px 12px 30px 14px" }}
              >
                Tous nos ateliers →
              </Link>
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
                alt="Participantes qui composent leur terrarium autour d'une table d'atelier"
                className="relative w-full aspect-[4/5] object-cover border-brutal shadow-brutal-lg"
                style={{ borderRadius: GALETS[0] }}
                loading="lazy"
              />
              <span className="absolute -bottom-4 right-2 md:-right-6 -rotate-6 font-mono-brand text-[10px] uppercase tracking-[2px] bg-accent border-brutal-thin rounded-full px-4 py-2 shadow-[3px_3px_0_hsl(var(--black))]">
                Dès 8 participants
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={150} className="order-1 md:order-none">
            <span className="section-label block mb-4">Le principe</span>
            <h2 className="font-display text-[clamp(2rem,4.2vw,3.2rem)] uppercase leading-[0.92] tracking-[-2px] mb-4">
              Nous venons<br /><span className="md:ml-14 text-primary">chez vous</span>
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

      {/* ===== ATELIERS POPULAIRES ===== */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(36,25%,88%)" />
      <section className="py-16 md:py-24 bg-secondary px-6">
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
                    {a.href === CONTACT ? "Demander cet atelier →" : "Découvrir l'atelier →"}
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
                  to="/balade-botanique-yvelines"
                  className="block font-mono-brand text-[11px] uppercase tracking-[1.5px] px-4 py-2 border-brutal-thin rounded-full bg-[hsl(var(--olive-light))] rotate-1 hover:rotate-0 transition-transform"
                >
                  Balade botanique →
                </Link>
              </li>
            </ul>
            <p className="text-base text-foreground/70 max-w-xl mx-auto mb-8">
              Selon la saison, votre public ou le thème de votre événement, nous vous proposons l'atelier qui convient, ou nous en
              imaginons un sur mesure.
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

      {/* ===== ANNIVERSAIRES — bande verte comme le bloc entreprises de l'accueil ===== */}
      <section className="bg-[hsl(var(--green))] text-[hsl(var(--cream))] px-6 py-12 md:py-16" aria-labelledby="bloc-anniversaires">
        <AnimatedSection className="max-w-5xl mx-auto grid md:grid-cols-[2fr_3fr] gap-10 md:gap-14 items-center">
          <img
            src={imgAnniversaire}
            alt="Enfants qui fabriquent leur terrarium pendant un atelier botanique"
            className="w-full max-w-sm mx-auto aspect-square object-cover border-4 border-[hsl(var(--cream))]"
            style={{ borderRadius: GALETS[2] }}
            loading="lazy"
          />
          <div>
            <p className="section-label mb-2" style={{ color: "hsl(73 44% 67%)" }}>
              Particuliers · Anniversaires · Fêtes
            </p>
            <h2 id="bloc-anniversaires" className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] uppercase leading-[0.95] tracking-[-1px] mb-4">
              Un anniversaire <span className="text-[hsl(var(--olive-light))]">qui pousse</span>
            </h2>
            <TraitDessine className="-mt-1 mb-5" color="hsl(var(--olive-light))" variant={1} />
            <p className="font-body text-base text-[hsl(var(--cream))]/85 leading-relaxed mb-3">
              Pour un anniversaire d'enfant ou d'adulte, une fête entre amis ou un EVJF, nous venons chez vous ou dans la salle de votre
              choix, dès 8 participants. Chaque invité fabrique sa création et repart avec : le cadeau d'invité est tout trouvé.
            </p>
            <p className="font-editorial italic text-xl text-[hsl(var(--cream))] mb-6">
              Vous vous occupez du gâteau, nous nous occupons des plantes.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/atelier-anniversaire-enfant-nature-paris"
                className="btn-brutal rounded-full bg-accent text-foreground border-accent text-xs px-6 py-3 text-center whitespace-nowrap"
              >
                Anniversaire enfant →
              </Link>
              <Link
                to="/atelier-anniversaire-adulte-nature-paris"
                className="btn-brutal rounded-full bg-transparent text-[hsl(var(--cream))] border-[hsl(var(--cream))] text-xs px-6 py-3 text-center whitespace-nowrap"
              >
                Anniversaire adulte →
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
      <WaveDivider from="hsl(153,40%,30%)" to="hsl(36,33%,93%)" flip />

      {/* ===== PARTOUT DANS LE 78 ===== */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          <AnimatedSection direction="left">
            <span className="section-label block mb-4">Partout dans le 78</span>
            <h2 className="font-display text-[clamp(1.8rem,3.8vw,2.8rem)] uppercase leading-[0.92] tracking-[-1.5px] mb-4">
              Ils nous ont<br /><span className="md:ml-12 text-primary">accueillis</span>
            </h2>
            <TraitDessine className="-mt-1 mb-6 md:ml-12" variant={3} />
            <p className="text-base md:text-lg leading-[1.8] text-foreground/75 mb-5">
              Médiathèque, mairie, centre social, école, résidence seniors, entreprise ou salle des fêtes : nous arrivons avec tout le
              matériel, nous installons, nous animons et nous rangeons. Dans les Yvelines, nous avons notamment travaillé avec :
            </p>
            <ul className="space-y-2 md:border-l-[3px] md:border-primary md:pl-6 mb-5">
              {REFERENCES_78.map((ref) => (
                <li key={ref} className="text-base text-foreground font-semibold">
                  {ref}
                </li>
              ))}
            </ul>
            <p className="text-sm text-foreground/60">
              Et ailleurs en Île-de-France : Région Île-de-France, Thales, l'Assurance Maladie, le CENTQUATRE-Paris, l'École Du Breuil…
            </p>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={150}>
            <div className="border-brutal rounded-[2rem] bg-[hsl(var(--cream))] p-8 md:p-10 shadow-brutal-lg rotate-1">
              <h3 className="font-display text-lg uppercase mb-6">Nous intervenons à…</h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                {VILLES.map((ville) => (
                  <li key={ville} className="flex items-center gap-2 text-sm text-foreground/80">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    {ville}
                  </li>
                ))}
              </ul>
              <p className="font-editorial italic text-lg text-foreground/60 mt-6">… et dans toute l'Île-de-France.</p>
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
            Un atelier dans <span className="text-olive-light">les Yvelines</span> ?
          </h2>
          <p className="text-base md:text-lg text-primary-foreground/80 leading-relaxed mb-10 max-w-xl mx-auto">
            Date, lieu, nombre de participants (8 minimum), public : envoyez-nous l'essentiel et nous revenons vers vous avec une
            proposition.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={CONTACT}
              className="btn-brutal rounded-full bg-accent text-foreground border-accent hover:bg-primary-foreground text-xs px-8 py-3"
            >
              Demander un atelier →
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

export default AteliersBotaniquesYvelines;
