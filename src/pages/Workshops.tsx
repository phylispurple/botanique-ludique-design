import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import WorkshopFilters, { WorkshopCategory } from "@/components/WorkshopFilters";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Leaf, Droplets, Flower2, Palette, Sprout, Sparkles, Hammer } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link, useLocation } from "react-router-dom";
import dyeingAsset from "@/assets/gallery-teinture-vegetale-workshop.jpg";
import kokedamaAsset from "@/assets/gallery-kokedama-collection.jpg";
import terrariumImage from "@/assets/gallery-terrarium.webp";
import muralImage from "@/assets/workshop-mural.jpg";
import seedBombsImage from "@/assets/gallery-seed-bombs.webp";
import flowerCrownImage from "@/assets/gallery-flower-crown.webp";
import basketryImage from "@/assets/gallery-basketry.webp";
import photoVegetalImage from "@/assets/workshop-photo-vegetal.jpg";
import herbariumImage from "@/assets/workshop-herbarium.jpg";
import sharedGardenImage from "@/assets/workshop-shared-garden.jpg";
import sachetSenteurImage from "@/assets/gallery-sachet-senteur.jpg";
import bougieFleursSecheesImage from "@/assets/gallery-bougie-fleurs-sechees.jpg";
import tatakiZomeImage from "@/assets/workshop-tataki-zome.jpg";
import veganLeatherImage from "@/assets/workshop-vegan-leather.jpg";
import kosovoConstruction4 from "@/assets/gallery-kosovo-construction-4.jpg";
import floralWatersImage from "@/assets/workshop-floral-waters.jpg";
import recycledPaperImage from "@/assets/workshop-recycled-paper.jpg";
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

const AutoSlideshow = ({ images, alt }: { images: string[]; alt: string }) => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % images.length), 3500);
    return () => clearInterval(id);
  }, [images.length]);
  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden border-brutal bg-[hsl(var(--cream))]">
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={alt}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`h-1.5 transition-all ${idx === i ? "w-6 bg-foreground" : "w-1.5 bg-foreground/40"}`}
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

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden border-brutal bg-[hsl(var(--cream))]">
      {items.map((item, idx) =>
        item.type === "image" ? (
          <img
            key={idx}
            src={item.src}
            alt={alt}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0 pointer-events-none"}`}
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
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          />
        )
      )}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {items.map((_, idx) => (
          <span
            key={idx}
            className={`h-1.5 transition-all ${idx === i ? "w-6 bg-foreground" : "w-1.5 bg-foreground/40"}`}
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
    images: [dyeingImage, teintureIndigoImage, teintureBocalIndigo, teintureFilIndigo],
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
    icon: Palette,
    category: "textiles",
  },
  {
    title: "Cycle Matières Végétales",
    description: "Programme immersif de 4 séances pour explorer la création à partir de matières végétales. Créez du cuir de kombucha (SCOBY), fabriquez du papier recyclé agrémenté de feuilles et fleurs pressées, et composez des tableaux botaniques avec des feuilles d'automne séchées et stabilisées à la glycérine. Une exploration complète des possibilités créatives offertes par le monde végétal.",
    duration: "4 séances × 2h30",
    public: "Adultes",
    image: veganLeatherImage,
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
    image: "/videos/workshop-seed-bombs.mp4",
    icon: Sprout,
    type: "video",
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
    image: "/videos/workshop-fresque-herbier.mp4",
    icon: Leaf,
    type: "video",
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
    icon: Droplets,
    category: "bien-etre",
  },
  {
    title: "Création d'Eaux Florales",
    description: "Distillez vos propres eaux florales et hydrolats selon les méthodes traditionnelles d'extraction douce. Découvrez les propriétés thérapeutiques et cosmétiques des plantes en créant des eaux aromatiques pures et naturelles pour le bien-être quotidien.",
    duration: "3h",
    public: "Adultes",
    image: floralWatersImage,
    icon: Droplets,
    category: "bien-etre",
  },
  {
    title: "Cueillette Sauvage & Cuisine de Plantes Comestibles",
    description: "Partez en exploration botanique pour identifier et cueillir des plantes sauvages comestibles selon les savoirs ethnobotaniques traditionnels. De la cueillette à l'assiette, apprenez à reconnaître, récolter et préparer des plantes locales : pestos d'ortie, beignets de fleurs de sureau, salades de plantes des chemins. Une immersion entre nature, culture et gastronomie.",
    duration: "3h",
    public: "Adultes, adolescents",
    image: sharedGardenImage,
    icon: Leaf,
    category: "bien-etre",
    tag: "nouveau",
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
  textiles: "Créations Textiles & Teintures",
  jardinage: "Jardinage & Plantations",
  floral: "Art Floral & Compositions",
  artisanat: "Artisanat & Techniques Ancestrales",
  "bien-etre": "Bien-être & Aromathérapie",
};

const categoryLabels: Record<WorkshopCategory, string> = {
  all: "Tous",
  textiles: "Textiles",
  jardinage: "Jardinage",
  floral: "Floral",
  artisanat: "Artisanat",
  "bien-etre": "Bien-être",
};

const Workshops = () => {
  const [activeCategory, setActiveCategory] = useState<WorkshopCategory>("all");
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setActiveCategory("all");
      setTimeout(() => {
        const elementId = location.hash.substring(1);
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
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
    <div className="min-h-screen bg-[hsl(var(--cream))]">
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
      <FloatingIllustrations />
      <Navigation />

      {/* ===== HERO ===== */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <span className="section-label block mb-3">Ateliers · Créations · Savoirs</span>
            <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.95] tracking-[-1px] mb-6">
              Ateliers Botaniques
            </h1>
            <p className="font-body text-xl italic text-foreground/70 max-w-[650px] mx-auto mb-4">
              Des expériences botaniques pour éveiller vos sens à Paris, Chatou, Le Pecq, Nanterre, Boulogne.
            </p>
            <p className="text-base text-foreground/60 leading-relaxed max-w-2xl mx-auto">
              Expériences botaniques immersives pour particuliers et groupes en Île-de-France. Ateliers disponibles à Paris, dans les Yvelines (78), les Hauts-de-Seine (92) et le Val-d'Oise (95). Chaque atelier est conçu pour vous reconnecter avec la nature à travers la créativité manuelle et la pratique consciente.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== FILTRES ===== */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto">
          <WorkshopFilters
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            workshopCounts={workshopCounts}
          />
        </div>
      </section>

      {/* ===== ATELIERS ===== */}
      <main className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-28">
            {Object.entries(groupedWorkshops).map(([category, categoryWorkshops]) => (
              <section key={category} className="scroll-mt-32">
                <AnimatedSection className="text-center mb-14">
                  <span className="section-label block mb-3">{categoryLabels[category as WorkshopCategory]}</span>
                  <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] uppercase leading-[0.95] tracking-[-1px]">
                    {categoryTitles[category as WorkshopCategory]}
                  </h2>
                </AnimatedSection>

                <div className="space-y-16">
                  {categoryWorkshops.map((workshop, index) => (
                    <AnimatedSection
                      key={workshop.title}
                      delay={index * 80}
                      direction={index % 2 === 0 ? "left" : "right"}
                    >
                      <div
                        id={workshop.title.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, "-")}
                        className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center border-brutal p-6 md:p-8 bg-[hsl(var(--cream))] hover:bg-[hsl(var(--green-pale))] transition-colors duration-300 group`}
                      >
                        <div className={`${index % 2 === 1 ? "md:order-2" : ""} relative`}>
                          {/* Badges */}
                          <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-2">
                            <span className="font-mono-brand text-[9px] uppercase tracking-[2px] px-3 py-1.5 border-brutal-thin bg-[hsl(var(--cream))]">
                              {categoryLabels[workshop.category]}
                            </span>
                            {workshop.tag && (
                              <span className={`font-mono-brand text-[9px] uppercase tracking-[2px] px-3 py-1.5 border-brutal-thin ${
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
                                <CarouselItem>
                                  <div className="overflow-hidden border-brutal">
                                    <img
                                      src={workshop.image}
                                      alt={`Atelier ${workshop.title}`}
                                      className="w-full transition-transform duration-700 group-hover:scale-105"
                                      loading="lazy"
                                    />
                                  </div>
                                </CarouselItem>
                                <CarouselItem>
                                  <div className="overflow-hidden border-brutal">
                                    <video
                                      src={workshop.video}
                                      className="w-full"
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
                            <div className="overflow-hidden border-brutal shadow-brutal">
                              <video
                                src={workshop.image}
                                className="w-full transition-transform duration-700 group-hover:scale-105"
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
                            <div className="overflow-hidden border-brutal shadow-brutal">
                              <img
                                src={workshop.image}
                                alt={`Atelier ${workshop.title}`}
                                className="w-full img-zoom"
                                loading="lazy"
                              />
                            </div>
                          )}
                        </div>

                        <div className={`space-y-4 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                          <div className="flex items-center gap-3">
                            <workshop.icon size={20} className="text-primary" />
                            <span className="font-mono-brand text-[10px] uppercase tracking-[2px] px-3 py-1 border-brutal-thin">
                              {workshop.duration}
                            </span>
                          </div>
                          <h3 className="font-display text-2xl md:text-3xl uppercase leading-[0.95] tracking-[-1px]">
                            {workshop.title}
                          </h3>
                          <p className="font-mono-brand text-[10px] uppercase tracking-[2px] text-primary">
                            Public : {workshop.public}
                          </p>
                          <p className="text-base text-foreground/70 leading-[1.8]">
                            {workshop.description}
                          </p>
                          <Link
                            to={`/agenda?atelier=${encodeURIComponent(workshop.title)}`}
                            className="btn-brutal bg-primary text-primary-foreground border-primary hover:bg-primary-foreground hover:text-foreground text-xs px-7 py-3 inline-block mt-2"
                          >
                            Demande d'information →
                          </Link>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* ===== CTA PRO ===== */}
          <AnimatedSection className="mt-20">
            <div className="border-brutal p-10 md:p-14 text-center bg-[hsl(var(--cream))] shadow-brutal-lg">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary" />
              <span className="section-label block mb-3">Professionnels</span>
              <h3 className="font-display text-2xl md:text-3xl uppercase leading-[0.95] tracking-[-1px] mb-4">
                Vous êtes un établissement scolaire ou une entreprise ?
              </h3>
              <p className="text-base text-foreground/70 leading-relaxed mb-8 max-w-2xl mx-auto">
                Découvrez nos formations professionnelles et interventions éducatives sur mesure pour collèges, lycées, BTS et entreprises.
              </p>
              <Link
                to="/pro"
                className="btn-brutal bg-foreground text-primary-foreground border-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-8 py-3 inline-block"
              >
                Voir les offres professionnelles →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </main>

      <BackToTop />
      <Footer />
    </div>
  );
};

export default Workshops;
