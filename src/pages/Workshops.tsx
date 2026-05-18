import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import WorkshopFilters, { WorkshopCategory } from "@/components/WorkshopFilters";
import BackToTop from "@/components/BackToTop";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Leaf, Droplets, Flower2, Palette, Sprout, Sparkles, Hammer } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link, useLocation } from "react-router-dom";
import dyeingImage from "@/assets/gallery-teinture-2.jpg";
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

interface Workshop {
  title: string;
  description: string;
  duration: string;
  public: string;
  image: string;
  video?: string;
  icon: any;
  type?: string;
  category: WorkshopCategory;
  tag?: "populaire" | "nouveau";
}

const workshops: Workshop[] = [
  // Créations Textiles & Teintures
  {
    title: "Teinture Végétale",
    description: "Explorez l'alchimie ancestrale de la teinture naturelle pratiquée depuis des millénaires. Extrayez des pigments végétaux selon des techniques traditionnelles pour créer des textiles durables aux tons terreux et authentiques.",
    duration: "3h",
    public: "Tout public",
    image: dyeingImage,
    video: "/videos/workshop-dyeing.mp4",
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

  // Jardinage & Plantations
  {
    title: "Kokedama",
    description: "Découvrez l'art japonais du jardinage en boules de mousse, héritage de la tradition bonsaï. Créez vos propres sculptures végétales suspendues en explorant cette pratique séculaire qui unit esthétique et philosophie du vivant.",
    duration: "2h30",
    public: "Adultes, enfants dès 10 ans",
    image: "/videos/workshop-kokedama.mp4",
    icon: Sprout,
    type: "video",
    category: "jardinage",
    tag: "populaire",
  },
  {
    title: "Terrariums",
    description: "Composez des écosystèmes miniatures sous verre en s'inspirant des caisses de Ward victoriennes. Créez des paysages en couches avec mousses, pierres et plantes délicates, des mondes minuscules qui prospèrent avec peu d'entretien.",
    duration: "2h",
    public: "Tout public, enfants dès 8 ans",
    image: terrariumImage,
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

  // Art Floral & Compositions
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

  // Artisanat & Techniques Ancestrales
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

  // Bien-être & Aromathérapie
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
  textiles: "🎨 Créations Textiles & Teintures",
  jardinage: "🌱 Jardinage & Plantations",
  floral: "🌸 Art Floral & Compositions",
  artisanat: "🪵 Artisanat & Techniques Ancestrales",
  "bien-etre": "🌿 Bien-être & Aromathérapie",
};

const categoryColors: Record<WorkshopCategory, { bg: string; text: string; border: string }> = {
  all: { bg: "bg-sage/90", text: "text-white", border: "border-sage" },
  textiles: { bg: "bg-purple-600/90", text: "text-white", border: "border-purple-400" },
  jardinage: { bg: "bg-emerald-600/90", text: "text-white", border: "border-emerald-400" },
  floral: { bg: "bg-pink-500/90", text: "text-white", border: "border-pink-400" },
  artisanat: { bg: "bg-amber-600/90", text: "text-white", border: "border-amber-400" },
  "bien-etre": { bg: "bg-teal-600/90", text: "text-white", border: "border-teal-400" },
};

const categoryLabels: Record<WorkshopCategory, string> = {
  all: "Tous",
  textiles: "Textiles & Teintures",
  jardinage: "Jardinage",
  floral: "Art Floral",
  artisanat: "Artisanat",
  "bien-etre": "Bien-être",
};

const Workshops = () => {
  const [activeCategory, setActiveCategory] = useState<WorkshopCategory>("all");
  const location = useLocation();

  // Reset filter and scroll to element when navigating with hash
  useEffect(() => {
    if (location.hash) {
      setActiveCategory("all");
      // Wait for DOM to update then scroll to element
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
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <SEO 
        title="Ateliers de botanique pour tous — Enfants, adultes, scolaires · Botanique Ludique"
        description="Ateliers ludiques et pédagogiques autour des plantes. Pour collèges, lycées, familles et entreprises en Île-de-France. Réservation en ligne."
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

      <main className="pt-32 pb-20" style={{ backgroundColor: '#F7F7EB' }}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="page-title text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              Ateliers Botaniques à Paris, Yvelines, Hauts-de-Seine & Val-d'Oise
            </h1>
            <p className="subtitle-italic text-lg mb-6">
              Des expériences botaniques pour éveiller vos sens à Paris, Chatou, Le Pecq, Nanterre, Boulogne.
            </p>
            <p className="text-base text-charcoal/80 leading-relaxed">
              Expériences botaniques immersives pour particuliers et groupes en Île-de-France. Ateliers disponibles à Paris, dans les Yvelines (78), les Hauts-de-Seine (92) et le Val-d'Oise (95) : Chatou, Le Pecq, Le Vésinet, Saint-Germain-en-Laye, Nanterre, Boulogne-Billancourt, Cergy, Pontoise, Argenteuil. Chaque atelier est conçu pour vous reconnecter avec la nature à travers la créativité manuelle et la pratique consciente.
            </p>
          </div>

          <WorkshopFilters 
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            workshopCounts={workshopCounts}
          />

          <div className="space-y-24">
            {Object.entries(groupedWorkshops).map(([category, categoryWorkshops]) => (
              <section key={category} className="scroll-mt-32">
                <h2 
                  className="text-3xl md:text-4xl text-center mb-12 animate-fade-in"
                  style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, color: '#3D3D2E' }}
                >
                  {categoryTitles[category as WorkshopCategory]}
                </h2>
                
                <div className="space-y-20">
                  {categoryWorkshops.map((workshop, index) => (
                    <div
                      key={workshop.title}
                      id={workshop.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")}
                      className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in card-premium bg-white/40 p-6 md:p-8 rounded-2xl ${
                        index % 2 === 1 ? "md:flex-row-reverse" : ""
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className={`${index % 2 === 1 ? "md:order-2" : ""} group relative rounded-xl overflow-visible`}>
                        {/* Badges container */}
                        <div className="absolute top-3 left-3 right-3 z-10 flex flex-wrap gap-2">
                          {/* Category Badge */}
                          <div className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide border shadow-md ${categoryColors[workshop.category].bg} ${categoryColors[workshop.category].text} ${categoryColors[workshop.category].border}`}>
                            {categoryLabels[workshop.category]}
                          </div>
                          
                          {/* Tag Badge (Populaire / Nouveau) */}
                          {workshop.tag && (
                            <div className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg ${
                              workshop.tag === "populaire" 
                                ? "bg-gradient-to-r from-orange-500 to-red-500 text-white" 
                                : "bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
                            }`}>
                              {workshop.tag === "populaire" ? "⭐ Populaire" : "✨ Nouveau"}
                            </div>
                          )}
                        </div>
                        {workshop.video && workshop.type !== "video" ? (
                          <Carousel className="w-full">
                            <CarouselContent>
                              <CarouselItem>
                                <div className="overflow-hidden rounded-xl">
                                  <img
                                    src={workshop.image}
                                    alt={`Atelier ${workshop.title}`}
                                    className="w-full rounded-xl shadow-lg transition-all duration-700 group-hover:scale-110 group-hover:brightness-105"
                                    loading="lazy"
                                  />
                                </div>
                              </CarouselItem>
                              <CarouselItem>
                                <div className="overflow-hidden rounded-xl">
                                  <video
                                    src={workshop.video}
                                    className="w-full rounded-xl shadow-lg transition-all duration-500"
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
                          <div className="overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                            <video
                              src={workshop.image}
                              className="w-full rounded-xl transition-all duration-700 group-hover:scale-105"
                              muted
                              loop
                              playsInline
                              autoPlay
                              preload="metadata"
                            />
                          </div>
                        ) : (
                          <div className="overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                            <img
                              src={workshop.image}
                              alt={`Atelier ${workshop.title}`}
                              className="w-full rounded-xl img-zoom"
                              loading="lazy"
                            />
                          </div>
                        )}
                      </div>

                      <div className={`space-y-4 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                        <div className="flex items-center gap-3 mb-2">
                          <workshop.icon size={24} className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" style={{ color: '#A7B795' }} />
                          <div className="inline-block px-4 py-1 bg-sage/20 text-sage-dark text-xs uppercase tracking-wider rounded-full font-semibold transition-all duration-300 group-hover:bg-sage/30 group-hover:scale-105">
                            {workshop.duration}
                          </div>
                        </div>
                        <h3 className="text-3xl md:text-4xl transition-colors duration-300 group-hover:text-sage-dark" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                          {workshop.title}
                        </h3>
                        <p className="text-sm text-sage-dark font-semibold mb-2">
                          Public : {workshop.public}
                        </p>
                        <p className="text-lg text-charcoal/80 leading-relaxed">
                          {workshop.description}
                        </p>
                        <Link 
                          to={`/agenda?atelier=${encodeURIComponent(workshop.title)}`}
                          className="inline-flex items-center px-6 py-3 bg-sage text-off-white text-sm uppercase tracking-wider font-semibold rounded-full btn-premium"
                        >
                          Demande d'information et réservation
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* CTA Section - Formations */}
          <div className="mt-12 bg-sand rounded-2xl p-8 md:p-12 text-center animate-fade-in card-premium">
            <h3 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
              Vous êtes un établissement scolaire ou une entreprise ?
            </h3>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6 max-w-2xl mx-auto">
              Découvrez nos formations professionnelles et interventions éducatives sur mesure pour collèges, lycées, BTS et entreprises.
            </p>
            <Link
              to="/pro"
              className="inline-flex items-center px-8 py-4 bg-sage text-off-white text-sm uppercase tracking-wider font-semibold rounded-full btn-premium"
            >
              Voir les offres professionnelles
            </Link>
          </div>
        </div>
      </main>

      <BackToTop />
      <Footer />
    </div>
  );
};

export default Workshops;
