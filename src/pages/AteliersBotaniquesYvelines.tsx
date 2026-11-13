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
import { ArrowRight, Phone, MapPin, Package, Sprout, Users, Cake } from "lucide-react";
import heroImage from "@/assets/gallery-terrarium-adultes-groupe.jpg";
import imgTerrarium from "@/assets/gallery-terrarium-bocal-fittonia.jpg";
import imgKokedama from "@/assets/gallery-kokedama-collection.jpg";
import imgTeinture from "@/assets/gallery-teinture-1.webp";
import imgEpices from "@/assets/atelier-epices-choiseul.webp";
import imgAnniversaire from "@/assets/gallery-terrarium-enfants-fabrication.jpg";

const SLUG = "/ateliers-botaniques-yvelines";
const CONTACT = `/contact?subject=${encodeURIComponent("Atelier botanique dans les Yvelines")}`;

const PRINCIPE = [
  { icon: MapPin, label: "Je viens chez vous", desc: "Dans votre structure, votre salle ou votre entreprise, partout dans le 78" },
  { icon: Package, label: "Tout est fourni", desc: "Matériel, végétaux, installation et rangement" },
  { icon: Sprout, label: "Une histoire de plante", desc: "Chaque atelier s'accompagne d'une médiation ethnobotanique" },
  { icon: Users, label: "Dès 8 participants", desc: "Enfants, familles, adultes, seniors, équipes" },
];

const POPULAIRES = [
  {
    tag: "Le plus demandé",
    title: "Terrarium",
    image: imgTerrarium,
    alt: "Terrarium en bocal de verre avec une fittonia et de la mousse, réalisé en atelier",
    desc: "Chacun compose son petit jardin sous verre, couche après couche, et repart avec un objet vivant qui se débrouille presque seul. En prime, l'histoire des caisses de Ward, qui ont fait voyager les plantes à travers les océans.",
    href: "/atelier-terrarium-paris",
  },
  {
    tag: "Le plus apaisant",
    title: "Kokedama",
    image: imgKokedama,
    alt: "Collection de kokedamas, boules de mousse nouées au fil, réalisés en atelier",
    desc: "La technique japonaise du jardin en boule de mousse : on façonne, on habille, on noue. Un geste lent, les mains dans la terre, pour une plante à poser ou à suspendre.",
    href: "/atelier-kokedama-paris",
  },
  {
    tag: "Le plus surprenant",
    title: "Teinture végétale",
    image: imgTeinture,
    alt: "Tissus teints avec des plantes lors d'un atelier de teinture végétale",
    desc: "Des plantes, des fleurs, parfois un simple chou rouge, et le tissu change de couleur sous vos yeux. On découvre les plantes tinctoriales et les savoir-faire qui ont coloré le monde avant la chimie.",
    href: "/atelier-teinture-vegetale",
  },
  {
    tag: "Vécu à Versailles",
    title: "Sachet senteur aux épices",
    image: imgEpices,
    alt: "Participants composant leur sachet senteur aux épices à la Bibliothèque Choiseul de Versailles, Fête de la Science 2026",
    desc: "On sent, on mélange, on compose son sachet d'épices et de plantes séchées en remontant la route des épices. Un atelier proposé à la Bibliothèque Choiseul de Versailles pour la Fête de la Science 2026.",
    href: CONTACT,
  },
];

const AUTRES = [
  "Couronne végétale",
  "Bombes à graines",
  "Tableau de feuilles d'automne",
  "Tataki-zome (impression de fleurs)",
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
    a: "Oui, à partir de 8 participants. J'interviens dans tout le département, de Versailles à Saint-Germain-en-Laye, de Saint-Quentin-en-Yvelines à la boucle de Seine, et plus largement dans toute l'Île-de-France. J'apporte tout le matériel.",
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
    a: "Chaque atelier fait l'objet d'un devis selon l'atelier choisi, le nombre de participants, la durée et le lieu. Décrivez-moi votre projet et je vous fais une proposition.",
  },
  {
    q: "Combien de temps à l'avance faut-il réserver ?",
    a: "Idéalement trois à quatre semaines avant la date souhaitée, et un peu plus pour les périodes chargées comme Noël et le printemps.",
  },
];

const AteliersBotaniquesYvelines = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SEO
        title="Ateliers botaniques dans les Yvelines (78)"
        description="Ateliers botaniques dans les Yvelines : terrarium, kokedama, teinture végétale, sachet senteur aux épices et bien d'autres. Je me déplace à Versailles, Saint-Germain-en-Laye, Chatou, Saint-Quentin-en-Yvelines."
        keywords="atelier botanique Yvelines, atelier terrarium Yvelines, atelier kokedama Yvelines, teinture végétale 78, atelier nature Versailles, atelier botanique Saint-Germain-en-Laye, atelier Chatou, atelier Le Pecq"
        canonical={SLUG}
      />
      <SchemaOrg
        type="Service"
        data={{
          serviceType: "Ateliers botaniques",
          name: "Ateliers botaniques dans les Yvelines",
          description:
            "Ateliers botaniques créatifs à domicile pour les structures et les groupes des Yvelines : terrarium, kokedama, teinture végétale, sachet senteur aux épices, avec médiation ethnobotanique.",
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

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden px-6 pt-24 pb-24 md:pt-32 md:pb-28">
        <div className="absolute inset-0 bg-foreground">
          <img src={heroImage} alt="" className="w-full h-full object-cover opacity-35" />
        </div>
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-mono-brand text-[11px] md:text-[13px] uppercase tracking-[3px] text-olive-light mb-5">
              Versailles · Saint-Germain · Chatou · Saint-Quentin
            </p>
            <h1 className="font-display text-[clamp(2.3rem,6.5vw,5rem)] uppercase leading-[0.9] tracking-[-2px] text-primary-foreground mb-6">
              Ateliers botaniques<br />
              <span className="text-olive-light">dans les Yvelines</span>
            </h1>
            <p className="font-body text-xl md:text-[22px] italic text-primary-foreground/90 max-w-[680px] mx-auto leading-relaxed mb-10">
              Terrarium, kokedama, teinture végétale… Des ateliers où l'on crée avec ses mains, où l'on découvre l'histoire humaine des
              plantes, et d'où l'on repart avec un objet vivant.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to={CONTACT}
                className="btn-brutal bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-8 py-3 inline-flex items-center gap-2"
                style={{ borderColor: "hsl(var(--cream))" }}
              >
                Demander un atelier <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/ateliers-botaniques-tous"
                className="btn-brutal bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-8 py-3 inline-flex items-center gap-2"
                style={{ borderColor: "hsl(var(--cream))" }}
              >
                Voir tous les ateliers
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <WaveDivider from="hsl(0,0%,10%)" to="hsl(36,33%,93%)" />

      {/* ===== LE PRINCIPE ===== */}
      <section className="px-6 pt-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <span className="section-label block mb-3">Le principe</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] uppercase leading-[0.95] tracking-[-1px]">
              Comment ça <span className="text-primary">se passe</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 pl-[3px] pt-[3px]">
            {PRINCIPE.map((item) => (
              <div key={item.label} className="px-6 py-8 text-center border-brutal bg-[hsl(var(--cream))] -ml-[3px] -mt-[3px]">
                <item.icon className="w-7 h-7 mx-auto mb-3 text-primary" strokeWidth={2.2} />
                <p className="font-display uppercase text-base tracking-[-0.5px] mb-1">{item.label}</p>
                <p className="text-sm text-foreground/65 leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-base text-foreground/75 max-w-2xl mx-auto">
            Ateliers animés par <strong>Vanessa Charlery</strong>, animatrice ethnobotaniste formée à l'EHESS.
          </p>
        </div>
      </section>

      {/* ===== ATELIERS POPULAIRES ===== */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(36,25%,88%)" />
      <section className="pt-10 pb-20 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="section-label block mb-3">Les plus demandés</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] uppercase leading-[0.95] tracking-[-1px]">
              Les ateliers <span className="text-primary">populaires</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {POPULAIRES.map((a) => (
              <article key={a.title} className="flex flex-col border-brutal bg-[hsl(var(--cream))]">
                <div className="relative aspect-[4/3] overflow-hidden border-b-[3px] border-foreground bg-secondary">
                  <img src={a.image} alt={a.alt} loading="lazy" className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 font-mono-brand text-[9px] uppercase tracking-[2px] px-3 py-1.5 border-brutal-thin bg-[hsl(var(--cream))]">
                    {a.tag}
                  </span>
                </div>
                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <h3 className="font-display text-2xl uppercase tracking-[-0.5px] mb-3">{a.title}</h3>
                  <p className="text-sm text-foreground/75 leading-relaxed mb-6">{a.desc}</p>
                  <Link
                    to={a.href}
                    className="mt-auto self-start btn-brutal bg-primary text-primary-foreground hover:bg-foreground text-xs px-6 py-2.5 inline-flex items-center gap-2"
                  >
                    {a.href === CONTACT ? "Demander cet atelier" : "En savoir plus"} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <WaveDivider from="hsl(36,25%,88%)" to="hsl(36,33%,93%)" flip />

      {/* ===== ET BIEN D'AUTRES ===== */}
      <section className="pt-10 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection className="mb-8">
            <span className="section-label block mb-3">Et ce n'est pas tout</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] uppercase leading-[0.95] tracking-[-1px]">
              Bien d'autres <span className="text-primary">ateliers</span>
            </h2>
          </AnimatedSection>
          <p className="text-base text-foreground/75 leading-relaxed mb-8 max-w-2xl mx-auto">
            Selon la saison, votre public ou le thème de votre événement, je vous propose d'autres ateliers, et je peux en imaginer un
            sur mesure.
          </p>
          <ul className="flex flex-wrap justify-center gap-3 mb-6">
            {AUTRES.map((item) => (
              <li key={item} className="font-mono-brand text-[11px] uppercase tracking-[1.5px] px-4 py-2 border-brutal-thin bg-[hsl(var(--cream))]">
                {item}
              </li>
            ))}
            <li>
              <Link
                to="/balade-botanique-yvelines"
                className="block font-mono-brand text-[11px] uppercase tracking-[1.5px] px-4 py-2 border-brutal-thin bg-[hsl(var(--cream))] underline decoration-2 underline-offset-2 hover:text-primary"
              >
                Balade botanique
              </Link>
            </li>
          </ul>
          <Link
            to="/ateliers-botaniques-tous"
            className="btn-brutal bg-foreground text-primary-foreground hover:bg-primary text-xs px-8 py-3 inline-flex items-center gap-2 mt-4"
          >
            Voir tous les ateliers <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ===== ANNIVERSAIRES ===== */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <figure className="m-0 border-brutal shadow-brutal bg-secondary">
            <img
              src={imgAnniversaire}
              alt="Enfants qui fabriquent leur terrarium pendant un atelier botanique"
              loading="lazy"
              className="w-full h-auto block"
            />
          </figure>
          <div>
            <span className="section-label block mb-3">Particuliers</span>
            <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] uppercase leading-[0.95] tracking-[-1px] mb-5">
              Un anniversaire <span className="text-primary">qui pousse</span>
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed mb-4">
              Pour un anniversaire d'enfant ou d'adulte, une fête entre amis ou un EVJF, je viens chez vous ou dans la salle de votre
              choix, dès 8 participants. Chaque invité fabrique sa création et repart avec : un cadeau d'invité tout trouvé.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed mb-6">
              Vous vous occupez du gâteau, je m'occupe des plantes.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/atelier-anniversaire-enfant-nature-paris"
                className="btn-brutal bg-primary text-primary-foreground hover:bg-foreground text-xs px-6 py-2.5 inline-flex items-center gap-2"
              >
                <Cake className="w-4 h-4" /> Anniversaire enfant
              </Link>
              <Link
                to="/atelier-anniversaire-adulte-nature-paris"
                className="btn-brutal bg-[hsl(var(--cream))] text-foreground hover:bg-foreground hover:text-primary-foreground text-xs px-6 py-2.5 inline-flex items-center gap-2"
              >
                <Cake className="w-4 h-4" /> Anniversaire adulte
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PARTOUT DANS LE 78 ===== */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto border-brutal shadow-brutal bg-[hsl(var(--cream))] p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="section-label block mb-3">Partout dans le 78</span>
              <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] uppercase leading-[0.95] tracking-[-1px] mb-5">
                Je me déplace <span className="text-primary">chez vous</span>
              </h2>
              <p className="text-base text-foreground/80 leading-relaxed mb-4">
                Médiathèque, mairie, centre social, école, résidence seniors, entreprise ou salle de fête : j'arrive avec tout le
                matériel, j'installe, j'anime et je range.
              </p>
              <p className="text-base text-foreground/80 leading-relaxed mb-5">
                Dans les Yvelines, j'ai notamment travaillé avec :
              </p>
              <ul className="space-y-2">
                {REFERENCES_78.map((ref) => (
                  <li key={ref} className="flex gap-2 items-start text-sm text-foreground/85">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-primary flex-shrink-0" />
                    {ref}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-foreground/60 mt-4">
                Et ailleurs en Île-de-France : Région Île-de-France, Thales, l'Assurance Maladie, le CENTQUATRE-Paris, l'École Du
                Breuil…
              </p>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {VILLES.map((ville) => (
                <li key={ville} className="flex items-center gap-2 text-sm text-foreground/80">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  {ville}
                </li>
              ))}
              <li className="col-span-full text-sm text-foreground/60 mt-2">… et dans toute l'Île-de-France.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== RÉFÉRENCES ===== */}
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
            {FAQ.map((item) => (
              <div key={item.q} className="border-brutal bg-[hsl(var(--cream))] p-6 md:p-7">
                <h3 className="font-display text-base md:text-lg uppercase tracking-[-0.5px] mb-2">{item.q}</h3>
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(0,0%,10%)" flip />
      <section className="bg-foreground text-primary-foreground px-6 pt-10 pb-24">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="font-mono-brand text-[11px] uppercase tracking-[3px] text-olive-light mb-4">Votre atelier dans les Yvelines</p>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] uppercase leading-[0.95] tracking-[-1px] mb-6">
            Parlons de <span className="text-olive-light">votre projet</span>
          </h2>
          <p className="text-base text-primary-foreground/75 leading-relaxed mb-10 max-w-xl mx-auto">
            Date, lieu, nombre de participants (8 minimum), public : envoyez-moi l'essentiel et je reviens vers vous avec une proposition.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={CONTACT}
              className="btn-brutal bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-8 py-3 inline-flex items-center gap-2"
              style={{ borderColor: "hsl(var(--cream))" }}
            >
              Demander un atelier <ArrowRight className="w-4 h-4" />
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

      <Footer />
      <BackToTop />
    </div>
  );
};

export default AteliersBotaniquesYvelines;
