import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import TraitDessine from "@/components/TraitDessine";
import { galet, galetPhoto } from "@/lib/organic";
import heroKokedama from "@/assets/event-kokedama-mains.webp";
import heroTeinture from "@/assets/event-teinture-petales.webp";
import WorkshopFilters, { WorkshopCategory } from "@/components/WorkshopFilters";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Leaf, Droplets, Flower2, Palette, Sprout, Sparkles, Hammer, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link, useLocation } from "react-router-dom";
import dyeingAsset from "@/assets/gallery-teinture-vegetale-workshop.jpg";
import kokedamaAsset from "@/assets/gallery-kokedama-collection.jpg";
import terrariumImage from "@/assets/gallery-terrarium.webp";
import muralImage from "@/assets/workshop-mural.jpg";
import seedBombsImage from "@/assets/gallery-bombes-graines-sechage.webp";
import teintureChouRougeBocal from "@/assets/gallery-teinture-chou-rouge-bocal.webp";
import teintureChouRougeBain from "@/assets/gallery-teinture-chou-rouge-bain.webp";
import chouRougePassoire from "@/assets/gallery-chou-rouge-passoire.webp";
import flowerCrownImage from "@/assets/gallery-flower-crown.webp";
import basketryImage from "@/assets/gallery-basketry.webp";
import photoVegetalImage from "@/assets/workshop-photo-vegetal.jpg";
import herbariumImage from "@/assets/workshop-herbarium.jpg";
import sharedGardenImage from "@/assets/workshop-shared-garden.jpg";
import sachetSenteurImage from "@/assets/gallery-sachet-senteur.jpg";
import bougieFleursSecheesImage from "@/assets/gallery-bougie-fleurs-sechees.jpg";
import epicesSachets2 from "@/assets/gallery-atelier-epices-sachets-2.webp";
import epicesTable from "@/assets/gallery-atelier-epices-table.webp";
import tatakiZomeImage from "@/assets/workshop-tataki-zome.jpg";
import tatakiZomeTable from "@/assets/gallery-tataki-zome-atelier-table.webp";
import kosovoConstruction4 from "@/assets/gallery-kosovo-construction-4.jpg";
import floralWatersImage from "@/assets/workshop-floral-waters.jpg";
import recycledPaperImage from "@/assets/workshop-recycled-paper.jpg";
import papierRecycleFeuilles from "@/assets/gallery-papier-recycle-feuilles.webp";
import papierRecycleSechage from "@/assets/gallery-papier-recycle-sechage.webp";
import herbierToiles from "@/assets/gallery-herbier-toiles.webp";
import cuirKombucha from "@/assets/workshop-cuir-kombucha.webp";
import tableauFeuillesAutomne from "@/assets/gallery-tableau-feuilles-automne.webp";
import teintureTshirtsTable from "@/assets/gallery-teinture-tshirts-table.webp";
import plantChalkImage from "@/assets/workshop-plant-chalk.jpg";
import teintureIndigoImage from "@/assets/gallery-teinture-1.webp";
import teintureBocalIndigo from "@/assets/blog-carousel-bocal-indigo.jpg";
import teintureFilIndigo from "@/assets/blog-carousel-fil-indigo.jpg";
import kokedamaTradescantia from "@/assets/gallery-kokedama-tradescantia.jpg";
import terrariumBocalFittonia from "@/assets/gallery-terrarium-bocal-fittonia.jpg";
import terrariumFittoniaPrep from "@/assets/gallery-terrarium-fittonia-prep.jpg";
import terrariumEnfantsFabrication from "@/assets/gallery-terrarium-enfants-fabrication.jpg";

const dyeingImage = dyeingAsset;
const kokedamaWorkshopImage = kokedamaAsset;

const SlideArrows = ({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) => (
  <>
    <button
      type="button"
      onClick={onPrev}
      aria-label="Photo précédente"
      className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center border-brutal-thin bg-[hsl(var(--cream))] hover:bg-[hsl(var(--olive))] hover:text-primary-foreground transition-colors"
    >
      <ChevronLeft className="w-5 h-5" />
    </button>
    <button
      type="button"
      onClick={onNext}
      aria-label="Photo suivante"
      className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center border-brutal-thin bg-[hsl(var(--cream))] hover:bg-[hsl(var(--olive))] hover:text-primary-foreground transition-colors"
    >
      <ChevronRight className="w-5 h-5" />
    </button>
  </>
);

const AutoSlideshow = ({ images, alt }: { images: string[]; alt: string }) => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setTimeout(() => setI((v) => (v + 1) % images.length), 3500);
    return () => clearTimeout(id);
  }, [i, images.length]);
  const prev = () => setI((v) => (v - 1 + images.length) % images.length);
  const next = () => setI((v) => (v + 1) % images.length);
  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden border-brutal shadow-brutal bg-foreground" style={galetPhoto(1)}>
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={alt}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <SlideArrows onPrev={prev} onNext={next} />
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`h-1.5 rounded-full transition-all ${idx === i ? "w-6 bg-foreground" : "w-1.5 bg-foreground/40"}`}
          />
        ))}
      </div>
    </div>
  );
};

type MediaItem = { type: "image"; src: string } | { type: "video"; src: string };

const MediaSlideshow = ({ items, alt }: { items: MediaItem[]; alt: string }) => {
  const [i, setI] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const current = items[i];
    if (current.type === "image") {
      const id = setTimeout(() => setI((v) => (v + 1) % items.length), 3500);
      return () => clearTimeout(id);
    }
    const v = videoRef.current;
    if (v) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
  }, [i, items]);

  const next = () => setI((v) => (v + 1) % items.length);
  const prev = () => setI((v) => (v - 1 + items.length) % items.length);

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden border-brutal shadow-brutal bg-foreground" style={galetPhoto(1)}>
      {items.map((item, idx) =>
        item.type === "image" ? (
          <img
            key={idx}
            src={item.src}
            alt={alt}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          />
        ) : (
          <video
            key={idx}
            ref={idx === i ? videoRef : undefined}
            src={item.src}
            muted
            playsInline
            preload="metadata"
            onEnded={next}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          />
        )
      )}
      <SlideArrows onPrev={prev} onNext={next} />
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {items.map((_, idx) => (
          <span
            key={idx}
            className={`h-1.5 rounded-full transition-all ${idx === i ? "w-6 bg-foreground" : "w-1.5 bg-foreground/40"}`}
          />
        ))}
      </div>
    </div>
  );
};

interface Workshop {
  title: string;
  description: string;
  duration: string;
  public: string;
  image: string;
  images?: string[];
  media?: MediaItem[];
  video?: string;
  icon: any;
  type?: string;
  category: WorkshopCategory;
  tag?: "populaire" | "nouveau";
}

const workshops: Workshop[] = [
  {
    title: "Teinture Végétale",
    description: "Au-delà de la technique, une plongée dans l'histoire des pigments et des circulations coloniales des plantes tinctoriales. Extrayez des pigments végétaux selon des techniques traditionnelles pour créer des textiles durables aux tons terreux et authentiques. Médiation adossée à la recherche EHESS.",
    duration: "3h",
    public: "Tout public",
    image: dyeingImage,
    images: [dyeingImage, teintureChouRougeBocal, teintureChouRougeBain, chouRougePassoire, teintureTshirtsTable, teintureIndigoImage, teintureBocalIndigo, teintureFilIndigo],
    icon: Palette,
    category: "textiles",
    tag: "populaire",
  },
  {
    title: "Tataki Zome",
    description: "Explorez le tataki zome, art ancestral japonais de l'impression végétale par martelage transmis depuis des siècles. Transférez les pigments naturels des fleurs et feuilles directement sur textile en créant des empreintes botaniques uniques et éphémères.",
    duration: "2h",
    public: "Tout public, enfants dès 10 ans",
    image: tatakiZomeImage,
    images: [tatakiZomeImage, tatakiZomeTable],
    icon: Palette,
    category: "textiles",
  },
  {
    title: "Cycle Matières Végétales",
    description: "Programme immersif de 4 séances pour explorer la création à partir de matières végétales. Créez du cuir de kombucha (SCOBY), fabriquez du papier recyclé agrémenté de feuilles et fleurs pressées, et composez des tableaux botaniques avec des feuilles d'automne séchées et stabilisées à la glycérine. Une exploration complète des possibilités créatives offertes par le monde végétal.",
    duration: "4 séances × 2h30",
    public: "Adultes",
    image: cuirKombucha,
    images: [cuirKombucha, papierRecycleFeuilles, papierRecycleSechage, tableauFeuillesAutomne],
    icon: Palette,
    category: "textiles",
  },
  {
    title: "Kokedama",
    description: "Art japonais revisité avec un éclairage ethnobotanique : chaque plante raconte une histoire de domestication et d'usage. Créez vos propres sculptures végétales suspendues en explorant cette pratique séculaire qui unit esthétique et philosophie du vivant.",
    duration: "2h30",
    public: "Adultes, enfants dès 10 ans",
    image: kokedamaWorkshopImage,
    media: [
      { type: "image", src: kokedamaWorkshopImage },
      { type: "video", src: "/videos/workshop-kokedama-atelier.mp4" },
      { type: "image", src: kokedamaTradescantia },
    ],
    icon: Sprout,
    category: "jardinage",
    tag: "populaire",
  },
  {
    title: "Terrariums",
    description: "Plus qu'un terrarium : un écosystème miniature expliqué par une animatrice formée en anthropologie de la nature. Inspiré des caisses de Ward victoriennes, créez des paysages en couches avec mousses, pierres et plantes délicates, des mondes minuscules qui prospèrent avec peu d'entretien.",
    duration: "2h",
    public: "Tout public, enfants dès 8 ans",
    image: terrariumImage,
    images: [terrariumImage, terrariumBocalFittonia, terrariumFittoniaPrep, terrariumEnfantsFabrication],
    icon: Sparkles,
    category: "jardinage",
  },
  {
    title: "Bombes de Graines",
    description: "Fabriquez des bombes de graines artisanales avec argile, compost et graines sauvages selon la méthode nendo dango de Masanobu Fukuoka. Une pratique de guérilla verte enracinée dans la permaculture japonaise.",
    duration: "1h30",
    public: "Tout public, enfants dès 6 ans",
    image: seedBombsImage,
    images: [seedBombsImage],
    video: "/videos/workshop-seed-bombs.mp4",
    icon: Sprout,
    category: "jardinage",
  },
  {
    title: "Jardin Partagé et Aquaponie",
    description: "Participez à la création d'un espace collectif alliant jardinage traditionnel et aquaponie. Du design à la plantation, explorez ces systèmes écologiques où plantes et poissons coexistent selon des principes permacoles. Cultivez ensemble la biodiversité et le lien social.",
    duration: "½ journée",
    public: "Tout public, groupes",
    image: sharedGardenImage,
    icon: Sprout,
    category: "jardinage",
  },
  {
    title: "Couronnes de Fleurs",
    description: "Tressez des couronnes végétales avec fleurs sauvages et feuillages de saison. Un savoir-faire ancestral qui traverse les cultures, des rituels celtes aux traditions méditerranéennes, pour célébrer la beauté éphémère de la nature.",
    duration: "2h",
    public: "Tout public, enfants dès 10 ans",
    image: flowerCrownImage,
    icon: Flower2,
    category: "floral",
  },
  {
    title: "Herbier",
    description: "Constituez votre collection botanique personnelle selon les méthodes des naturalistes. Apprenez à sécher, presser et conserver les plantes tout en développant votre regard d'observation et votre compréhension des espèces locales.",
    duration: "2h",
    public: "Tout public, enfants dès 8 ans",
    image: herbierToiles,
    images: [herbierToiles, tableauFeuillesAutomne],
    video: "/videos/workshop-fresque-herbier.mp4",
    icon: Leaf,
    category: "floral",
  },
  {
    title: "Époxy Floral",
    description: "Créez des plateaux et tables uniques en résine époxy intégrant des fleurs séchées. Apprenez les techniques de coulage, de disposition florale et de finition pour réaliser des pièces décoratives durables qui immortalisent la beauté des végétaux dans un écrin transparent.",
    duration: "3h",
    public: "Adultes",
    image: "/videos/workshop-epoxy-floral.mp4",
    icon: Flower2,
    type: "video",
    category: "floral",
    tag: "nouveau",
  },
  {
    title: "Vannerie",
    description: "Apprenez l'art du tressage avec osier et fibres naturelles, pratique artisanale millénaire commune à toutes les civilisations. Créez des paniers fonctionnels et esthétiques en reconnectant avec des gestes universels et intemporels.",
    duration: "3h30",
    public: "Adultes, adolescents",
    image: basketryImage,
    icon: Hammer,
    category: "artisanat",
  },
  {
    title: "Photographie Végétale",
    description: "Explorez le cyanotype et les techniques photographiques ancestrales du XIXe siècle. Imprimez l'empreinte des plantes sur papier comme Anna Atkins, pionnière de l'illustration botanique photographique, dans des nuances de bleu intemporel.",
    duration: "2h30",
    public: "Adultes, adolescents",
    image: photoVegetalImage,
    icon: Sparkles,
    category: "artisanat",
  },
  {
    title: "Éco-construction & Totems en Forêt",
    description: "Apprenez à travailler le torchis pour créer des totems animaliers ou sculptures en pleine forêt. Découvrez les techniques ancestrales de construction naturelle en mêlant argile, paille et créativité dans un cadre sauvage et inspirant.",
    duration: "½ journée",
    public: "Tout public, groupes",
    image: kosovoConstruction4,
    icon: Hammer,
    category: "artisanat",
  },
  {
    title: "Sachets Senteur & Pots-Pourris",
    description: "Composez vos propres mélanges aromatiques avec fleurs séchées, herbes et épices selon des recettes traditionnelles européennes et orientales. Créez des objets parfumés pour la maison ancrés dans l'histoire des usages domestiques des plantes.",
    duration: "1h30",
    public: "Tout public",
    image: sachetSenteurImage,
    images: [sachetSenteurImage, epicesTable, epicesSachets2],
    icon: Droplets,
    category: "bien-etre",
  },
  {
    title: "Tisanes, Sirops & Élixirs Botaniques",
    description: "Partez à la découverte des plantes aromatiques à travers leurs histoires et leurs voyages : quels savoirs elles portent, comment elles ont circulé entre les cultures et les continents, ce qu'elles nous disent de nos rapports au vivant. Au fil de l'atelier, vous composerez votre propre mélange de tisane ou bouquet aromatique à rapporter chez vous — un souvenir sensoriel et une nouvelle façon de regarder les plantes du quotidien.",
    duration: "2h30",
    public: "Tout public",
    image: floralWatersImage,
    icon: Droplets,
    category: "bien-etre",
    tag: "nouveau",
  },
  {
    title: "Bougies & Fleurs Séchées",
    description: "Atelier floral créatif et sensoriel : créez votre propre bougie artisanale décorée de fleurs séchées. Choix de la cire, des senteurs et des compositions florales, chaque bougie est unique. Une composition florale 100% personnalisée à rapporter chez vous, accessible à toutes et tous.",
    duration: "1h30",
    public: "Tout public",
    image: bougieFleursSecheesImage,
    icon: Flower2,
    category: "floral",
    tag: "nouveau",
  },
  {
    title: "Papier Recyclé & Carnets",
    description: "Fabriquez votre propre papier recyclé à partir de fibres végétales et reliez votre carnet artisanal selon des techniques ancestrales. De la pulpe à la reliure, explorez tout le processus de création d'un objet unique, écologique et personnalisé.",
    duration: "4h",
    public: "Adultes, adolescents",
    image: recycledPaperImage,
    images: [recycledPaperImage, papierRecycleFeuilles, papierRecycleSechage],
    icon: Hammer,
    category: "artisanat",
  },
  {
    title: "Craies Végétales",
    description: "Créez des craies colorées à partir de pigments végétaux et minéraux naturels pour dessiner de manière écologique. Apprenez à extraire et mélanger les couleurs de la nature pour fabriquer vos propres outils d'art durables et non toxiques.",
    duration: "2h",
    public: "Tout public, enfants dès 8 ans",
    image: plantChalkImage,
    icon: Hammer,
    category: "artisanat",
  },
];

const categoryTitles: Record<WorkshopCategory, string> = {
  all: "Tous les ateliers",
  jardinage: "Jardinage & Plantations",
  textiles: "Créations Textiles & Teintures",
  floral: "Art Floral & Compositions",
  artisanat: "Artisanat & Techniques Ancestrales",
  "bien-etre": "Bien-être & Aromathérapie",
};

const categoryLabels: Record<WorkshopCategory, string> = {
  all: "Tous",
  jardinage: "Jardinage",
  textiles: "Textiles",
  floral: "Floral",
  artisanat: "Artisanat",
  "bien-etre": "Bien-être",
};

/** Ateliers qui ont une page dédiée pour les entreprises (team building). */
const PAGE_ENTREPRISE: Record<string, string> = {
  "Teinture Végétale": "/atelier-teinture-vegetale-team-building",
  Kokedama: "/atelier-kokedama-team-building",
  Terrariums: "/atelier-terrarium-team-building",
  "Bombes de Graines": "/atelier-bombes-a-graines-team-building",
};

const bandColor = (i: number) => (i % 2 === 0 ? "hsl(36,33%,93%)" : "hsl(36,25%,88%)");

const Workshops = () => {
  const [activeCategory, setActiveCategory] = useState<WorkshopCategory>("all");
  const location = useLocation();

  // Défilement vers l'atelier choisi dans le menu. Les images en lazy-loading
  // et les animations décalent la mise en page après le premier scroll : on
  // recale la position pendant 3 s, sauf si la personne reprend la main.
  useEffect(() => {
    if (!location.hash) return;
    setActiveCategory("all");
    const elementId = decodeURIComponent(location.hash.substring(1));
    let stopped = false;
    const scrollToTarget = () => {
      const element = document.getElementById(elementId);
      if (!element || stopped) return;
      const top = element.getBoundingClientRect().top + window.scrollY - 120;
      if (Math.abs(window.scrollY - top) > 4) window.scrollTo({ top, behavior: "auto" });
    };
    const stop = () => { stopped = true; };
    window.addEventListener("wheel", stop, { passive: true });
    window.addEventListener("touchstart", stop, { passive: true });
    window.addEventListener("keydown", stop);
    const timers = [50, 200, 500, 900, 1400, 2000, 3000].map((ms) => setTimeout(scrollToTarget, ms));
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("wheel", stop);
      window.removeEventListener("touchstart", stop);
      window.removeEventListener("keydown", stop);
    };
  }, [location.hash]);

  const filteredWorkshops = activeCategory === "all"
    ? workshops
    : workshops.filter(w => w.category === activeCategory);

  const workshopCounts = workshops.reduce((acc, workshop) => {
    acc[workshop.category] = (acc[workshop.category] || 0) + 1;
    return acc;
  }, { all: workshops.length } as Record<WorkshopCategory, number>);

  const groupedWorkshops = activeCategory === "all"
    ? Object.keys(categoryTitles).filter(cat => cat !== "all").reduce((acc, category) => {
        const categoryWorkshops = workshops.filter(w => w.category === category);
        if (categoryWorkshops.length > 0) {
          acc[category as WorkshopCategory] = categoryWorkshops;
        }
        return acc;
      }, {} as Record<WorkshopCategory, Workshop[]>)
    : { [activeCategory]: filteredWorkshops };

  return (
    <div className="min-h-screen bg-[hsl(var(--cream))] overflow-x-clip">
      <SEO
        title="Ateliers botaniques à Paris et en Île-de-France"
        description="Découvrez nos ateliers botaniques à Paris et en Île-de-France, terrarium, kokedama, teinture végétale, herbier et créations florales pour adultes, enfants, écoles et entreprises."
        keywords="atelier botanique Paris, atelier botanique Yvelines, atelier botanique Hauts-de-Seine, atelier botanique Val-d'Oise, kokedama Paris, teinture végétale Paris, atelier scolaire botanique"
        canonical="/workshops"
      />
      <SchemaOrg
        type="BreadcrumbList"
        data={{ items: [
          { name: "Accueil", url: "https://botaniqueludique.com/" },
          { name: "Ateliers", url: "https://botaniqueludique.com/workshops" }
        ]}}
      />
      <Navigation />

      {/* ===== HERO : texte + collage en galets ===== */}
      <section className="relative px-6 pt-28 pb-12 md:pt-36 md:pb-16">
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
              Ateliers · Créations · Savoirs
            </span>
            <h1 className="font-display text-[clamp(2.6rem,6vw,5rem)] uppercase leading-[0.9] tracking-[-2px] mb-4">
              Ateliers<br />
              <span className="text-primary">Botaniques</span>
            </h1>
            <TraitDessine className="mb-7" />
            <p className="font-editorial italic text-xl md:text-2xl text-foreground/80 max-w-[560px] leading-snug mb-5">
              Des expériences botaniques pour éveiller vos sens, partout en Île-de-France.
            </p>
            <p className="font-body text-[15px] text-foreground/65 max-w-[560px] leading-relaxed">
              Expériences botaniques immersives pour particuliers et groupes en Île-de-France. Ateliers disponibles partout en Île-de-France : Paris (75), Seine-et-Marne (77), Yvelines (78), Essonne (91), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94) et Val-d'Oise (95). Chaque atelier est conçu pour vous reconnecter avec la nature à travers la créativité manuelle et la pratique consciente.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={150} className="relative h-[400px] sm:h-[480px] max-w-[520px] w-full mx-auto">
            <img
              src={heroKokedama}
              alt="Façonnage d'un kokedama pendant un atelier"
              className="absolute right-0 top-0 w-[60%] h-[74%] object-cover border-brutal shadow-brutal rotate-2"
              style={galetPhoto(1)}
            />
            <img
              src={heroTeinture}
              alt="Impression de pétales sur soie pendant un atelier de teinture végétale"
              className="absolute left-0 bottom-0 w-[60%] h-[52%] object-cover border-brutal shadow-brutal -rotate-2"
              style={galetPhoto(0)}
              loading="lazy"
            />
            <img
              src={terrariumImage}
              alt="Terrarium de succulentes réalisé en atelier"
              className="absolute left-[4%] top-[4%] w-[36%] aspect-square object-cover border-brutal -rotate-3"
              style={{ borderRadius: "58% 42% 52% 48% / 46% 56% 44% 54%" }}
              loading="lazy"
            />
            <div
              className="absolute right-[-2%] bottom-[6%] w-[104px] h-[104px] flex flex-col items-center justify-center text-center bg-[hsl(var(--green))] text-[hsl(var(--cream))] border-brutal shadow-[3px_3px_0_hsl(var(--black))] pebble-float"
              style={{ borderRadius: "55% 45% 52% 48% / 46% 54% 46% 54%" }}
            >
              <span className="font-display text-2xl leading-none">{workshops.length}</span>
              <span className="font-mono-brand text-[8px] uppercase tracking-[1px] mt-1">ateliers</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== FILTRES ===== */}
      <section className="px-6 pt-6">
        <div className="max-w-5xl mx-auto">
          <WorkshopFilters
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            workshopCounts={workshopCounts}
          />
        </div>
      </section>

      {/* ===== ATELIERS ===== */}
      <main>
          <div>
            {Object.entries(groupedWorkshops).map(([category, categoryWorkshops], catIndex) => (
              <div key={category} style={{ backgroundColor: bandColor(catIndex) }}>
              {catIndex > 0 && (
                <WaveDivider from={bandColor(catIndex - 1)} to={bandColor(catIndex)} flip={catIndex % 2 === 0} />
              )}
              <section className="scroll-mt-32 px-6 pt-16 pb-24">
              <div className="max-w-6xl mx-auto">
                <AnimatedSection className="text-center mb-14">
                  <span className="section-label block mb-3">{categoryLabels[category as WorkshopCategory]}</span>
                  <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] uppercase leading-[0.95] tracking-[-1px]">
                    {categoryTitles[category as WorkshopCategory]}
                  </h2>
                  <TraitDessine className="mx-auto mt-3" variant={catIndex} />
                </AnimatedSection>

                <div className="space-y-20 md:space-y-24">
                  {categoryWorkshops.map((workshop, index) => (
                    <AnimatedSection
                      key={workshop.title}
                      delay={index * 80}
                      direction={index % 2 === 0 ? "left" : "right"}
                    >
                      <div
                        id={workshop.title.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, "-")}
                        className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-8 md:gap-14 items-center group"
                      >
                        <div className={`${index % 2 === 1 ? "md:order-2 md:rotate-1" : "md:-rotate-1"} relative`}>
                          {/* Badges */}
                          <div className="absolute -top-4 left-6 z-20 flex flex-wrap gap-2">
                            <span className="font-mono-brand text-[9px] uppercase tracking-[2px] px-3 py-1.5 rounded-full border-brutal-thin bg-[hsl(var(--cream))] shadow-[2px_2px_0_hsl(var(--black))] -rotate-2">
                              {categoryLabels[workshop.category]}
                            </span>
                            {workshop.tag && (
                              <span className={`font-mono-brand text-[9px] uppercase tracking-[2px] px-3 py-1.5 rounded-full border-brutal-thin shadow-[2px_2px_0_hsl(var(--black))] rotate-2 ${
                                workshop.tag === "populaire"
                                  ? "bg-[hsl(var(--orange))] text-primary-foreground"
                                  : "bg-[hsl(var(--olive))] text-primary-foreground"
                              }`}>
                                {workshop.tag === "populaire" ? "Populaire" : "Nouveau"}
                              </span>
                            )}
                          </div>

                          {workshop.video && workshop.type !== "video" ? (
                            <Carousel className="w-full">
                              <CarouselContent>
                                {(workshop.images ?? [workshop.image]).map((src, i) => (
                                  <CarouselItem key={src}>
                                    <div className="overflow-hidden border-brutal shadow-brutal aspect-[4/3]" style={galetPhoto(index + 1)}>
                                      <img
                                        src={src}
                                        alt={`Atelier ${workshop.title}${i > 0 ? `, photo ${i + 1}` : ""}`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                      />
                                    </div>
                                  </CarouselItem>
                                ))}
                                <CarouselItem>
                                  <div className="overflow-hidden border-brutal shadow-brutal aspect-[4/3]" style={galetPhoto(index + 1)}>
                                    <video
                                      src={workshop.video}
                                      className="w-full h-full object-cover"
                                      muted
                                      loop
                                      playsInline
                                      autoPlay
                                      preload="metadata"
                                    />
                                  </div>
                                </CarouselItem>
                              </CarouselContent>
                              <CarouselPrevious className="left-4" />
                              <CarouselNext className="right-4" />
                            </Carousel>
                          ) : workshop.type === "video" ? (
                            <div className="overflow-hidden border-brutal shadow-brutal aspect-[4/3]" style={galetPhoto(index)}>
                              <video
                                src={workshop.image}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                muted
                                loop
                                playsInline
                                autoPlay
                                preload="metadata"
                              />
                            </div>
                          ) : workshop.media && workshop.media.length > 1 ? (
                            <MediaSlideshow items={workshop.media} alt={`Atelier ${workshop.title}`} />
                          ) : workshop.images && workshop.images.length > 1 ? (
                            <AutoSlideshow images={workshop.images} alt={`Atelier ${workshop.title}`} />
                          ) : (
                            <div className="overflow-hidden border-brutal shadow-brutal aspect-[4/3]" style={galetPhoto(index)}>
                              <img
                                src={workshop.image}
                                alt={`Atelier ${workshop.title}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                              />
                            </div>
                          )}
                        </div>

                        <div className={`space-y-4 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                          <div className="flex items-center gap-3">
                            <workshop.icon size={20} className="text-primary" />
                            <span className="font-mono-brand text-[10px] uppercase tracking-[2px] px-3 py-1 rounded-full border-brutal-thin">
                              {workshop.duration}
                            </span>
                          </div>
                          <h3 className="font-display text-2xl md:text-[2.4rem] uppercase leading-[0.95] tracking-[-1px]">
                            {workshop.title}
                          </h3>
                          <TraitDessine className="!w-24 md:!w-32 !h-2.5" variant={index} color={index % 2 ? "hsl(var(--orange))" : "hsl(var(--olive))"} />
                          <p className="font-mono-brand text-[10px] uppercase tracking-[2px] text-primary">
                            Public : {workshop.public}
                          </p>
                          <p className="text-base text-foreground/70 leading-[1.8]">
                            {workshop.description}
                          </p>
                          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
                            <Link
                              to={`/contact?subject=${encodeURIComponent(`Demande d'information : ${workshop.title}`)}`}
                              className={`btn-brutal inline-flex items-center bg-accent text-foreground border-foreground text-xs px-7 py-3 hover:rotate-0 ${index % 2 ? "rotate-1" : "-rotate-1"}`}
                              style={{ borderRadius: index % 2 ? "14px 30px 12px 26px / 26px 12px 30px 14px" : "28px 14px 26px 12px / 14px 26px 12px 28px" }}
                            >
                              Demande d'information →
                            </Link>
                            {PAGE_ENTREPRISE[workshop.title] && (
                              <Link
                                to={PAGE_ENTREPRISE[workshop.title]}
                                className="font-mono-brand text-[10px] uppercase tracking-[2px] underline underline-offset-4 decoration-2 hover:text-primary"
                              >
                                Version entreprise →
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
              </section>
              </div>
            ))}
          </div>

          {/* ===== CTA PRO ===== */}
          <WaveDivider from={bandColor(Object.keys(groupedWorkshops).length - 1)} to="hsl(0,0%,10%)" flip />
          <div className="bg-foreground px-6 pt-10 pb-24">
          <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="relative border-brutal p-10 md:p-14 text-center bg-[hsl(var(--cream))] shadow-brutal-lg" style={galet(2)}>
              <span className="section-label block mb-3">Professionnels</span>
              <h3 className="font-display text-2xl md:text-3xl uppercase leading-[0.95] tracking-[-1px] mb-4">
                Vous êtes un établissement scolaire ou une entreprise ?
              </h3>
              <p className="text-base text-foreground/70 leading-relaxed mb-8 max-w-2xl mx-auto">
                Découvrez nos formations professionnelles et interventions éducatives sur mesure pour collèges, lycées, BTS et entreprises.
              </p>
              <Link
                to="/pro"
                className="btn-brutal rounded-full bg-foreground text-primary-foreground border-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-8 py-3 inline-block"
              >
                Voir les offres professionnelles →
              </Link>
            </div>
          </AnimatedSection>
          </div>
          </div>
      </main>

      <BackToTop />
      <Footer />
    </div>
  );
};

export default Workshops;
