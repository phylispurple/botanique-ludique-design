import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import WorkshopFilters, { WorkshopCategory } from "@/components/WorkshopFilters";
import { Leaf, Droplets, Flower2, Palette, Sprout, Sparkles, Hammer } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import dyeingImage from "@/assets/workshop-dyeing.jpg";
import terrariumImage from "@/assets/workshop-terrarium.jpg";
import muralImage from "@/assets/workshop-mural.jpg";
import seedBombsImage from "@/assets/workshop-seed-bombs.jpg";
import flowerCrownImage from "@/assets/workshop-flower-crown.jpg";
import basketryImage from "@/assets/workshop-basketry.jpg";
import photoVegetalImage from "@/assets/workshop-photo-vegetal.jpg";
import herbariumImage from "@/assets/workshop-herbarium.jpg";
import sharedGardenImage from "@/assets/workshop-shared-garden.jpg";
import sachetSenteurImage from "@/assets/gallery-sachet-senteur.jpg";
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
    title: "Cuir Végétal",
    description: "Créez du cuir végétal à partir de champignons ou de fruits selon des techniques innovantes inspirées des savoir-faire traditionnels. Découvrez cette alternative écologique au cuir animal, durable et biodégradable, en façonnant vos propres matériaux textiles du futur.",
    duration: "3h30",
    public: "Adultes, adolescents",
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
  },
  {
    title: "Terrariums",
    description: "Composez des écosystèmes miniatures sous verre en s'inspirant des caisses de Ward victoriennes. Créez des paysages en couches avec mousses, pierres et plantes délicates — des mondes minuscules qui prospèrent avec peu d'entretien.",
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
    title: "Tableau Végétal",
    description: "Créez un tableau botanique vivant avec mousses, plantes stabilisées et matériaux naturels. Explorez l'art du jardin vertical inspiré des traditions japonaises et de l'esthétique végétale contemporaine.",
    duration: "4h",
    public: "Adultes",
    image: muralImage,
    icon: Leaf,
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

const Workshops = () => {
  const [activeCategory, setActiveCategory] = useState<WorkshopCategory>("all");

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
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20" style={{ backgroundColor: '#F7F7EB' }}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="page-title text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              Ateliers
            </h1>
            <p className="subtitle-italic text-lg mb-6">
              Des expériences botaniques pour éveiller vos sens.
            </p>
            <p className="text-base text-charcoal/80 leading-relaxed">
              Expériences botaniques immersives pour particuliers et groupes. Chaque atelier est conçu pour vous reconnecter avec la nature à travers la créativité manuelle et la pratique consciente.
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
                      className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in ${
                        index % 2 === 1 ? "md:flex-row-reverse" : ""
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className={`${index % 2 === 1 ? "md:order-2" : ""} group`}>
                        {workshop.video && workshop.type !== "video" ? (
                          <Carousel className="w-full">
                            <CarouselContent>
                              <CarouselItem>
                                <img
                                  src={workshop.image}
                                  alt={`Atelier ${workshop.title}`}
                                  className="w-full rounded-lg shadow-lg hover:shadow-xl transition-all duration-500"
                                />
                              </CarouselItem>
                              <CarouselItem>
                                <video
                                  src={workshop.video}
                                  className="w-full rounded-lg shadow-lg hover:shadow-xl transition-all duration-500"
                                  muted
                                  loop
                                  playsInline
                                  autoPlay
                                  preload="metadata"
                                />
                              </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious className="left-4" />
                            <CarouselNext className="right-4" />
                          </Carousel>
                        ) : workshop.type === "video" ? (
                          <video
                            src={workshop.image}
                            className="w-full rounded-lg shadow-lg hover:shadow-xl transition-all duration-500"
                            muted
                            loop
                            playsInline
                            autoPlay
                            preload="metadata"
                          />
                        ) : (
                          <img
                            src={workshop.image}
                            alt={`Atelier ${workshop.title}`}
                            className="w-full rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-105"
                          />
                        )}
                      </div>

                      <div className={`space-y-4 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                        <div className="flex items-center gap-3 mb-2">
                          <workshop.icon size={24} style={{ color: '#A7B795' }} />
                          <div className="inline-block px-4 py-1 bg-sage/20 text-sage-dark text-xs uppercase tracking-wider rounded-full font-semibold">
                            {workshop.duration}
                          </div>
                        </div>
                        <h3 className="text-3xl md:text-4xl" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                          {workshop.title}
                        </h3>
                        <p className="text-sm text-sage-dark font-semibold mb-2">
                          Public : {workshop.public}
                        </p>
                        <p className="text-lg text-charcoal/80 leading-relaxed">
                          {workshop.description}
                        </p>
                        <Link 
                          to={`/contact?subject=${encodeURIComponent(`Réservation atelier : ${workshop.title}`)}`}
                          className="inline-flex items-center px-6 py-3 bg-sage hover:bg-sage-dark text-off-white text-sm uppercase tracking-wider font-semibold transition-all duration-300 rounded-full"
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
          <div className="mt-20 bg-sand rounded-lg p-8 md:p-12 text-center animate-fade-in">
            <h3 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
              Vous êtes un établissement scolaire ou une entreprise ?
            </h3>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6 max-w-2xl mx-auto">
              Découvrez nos formations professionnelles et interventions éducatives sur mesure pour collèges, lycées, BTS et entreprises.
            </p>
            <Link
              to="/training"
              className="inline-flex items-center px-8 py-4 bg-sage hover:bg-sage-dark text-off-white text-sm uppercase tracking-wider font-semibold transition-all duration-300 rounded-full"
            >
              Voir les formations professionnelles
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Workshops;
