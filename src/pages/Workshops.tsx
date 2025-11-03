import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { Leaf, Droplets, Flower2, Palette, Sprout, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
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
import essentialOilsImage from "@/assets/workshop-essential-oils.jpg";
import formationImage from "@/assets/formation-education.jpg";

const workshops = [
  {
    title: "Kokedama",
    description: "Découvrez l'art japonais du jardinage en boules de mousse. Créez vos propres sculptures végétales suspendues en alliant techniques traditionnelles et design contemporain.",
    duration: "2h30",
    image: "/videos/workshop-kokedama.mp4",
    icon: Sprout,
    type: "video",
  },
  {
    title: "Teinture Végétale",
    description: "Explorez l'alchimie de la teinture naturelle. Extrayez des pigments végétaux pour créer des textiles durables aux tons terreux et authentiques.",
    duration: "3h",
    image: dyeingImage,
    video: "/videos/workshop-dyeing.mp4",
    icon: Palette,
  },
  {
    title: "Terrariums",
    description: "Composez des écosystèmes miniatures sous verre. Créez des paysages en couches avec mousses, pierres et plantes délicates — des mondes minuscules qui prospèrent avec peu d'entretien.",
    duration: "2h",
    image: terrariumImage,
    icon: Sparkles,
  },
  {
    title: "Tableau Végétal",
    description: "Créez un tableau botanique vivant avec mousses, plantes stabilisées et matériaux naturels. Une œuvre d'art végétale qui apporte la nature dans votre intérieur sans entretien.",
    duration: "4h",
    image: muralImage,
    icon: Leaf,
  },
  {
    title: "Bombes de Graines",
    description: "Fabriquez des bombes de graines artisanales avec argile, compost et graines sauvages. Une action de guérilla verte pour reverdir nos espaces urbains.",
    duration: "1h30",
    image: "/videos/workshop-seed-bombs.mp4",
    icon: Sprout,
    type: "video",
  },
  {
    title: "Couronnes de Fleurs",
    description: "Tressez des couronnes végétales avec fleurs sauvages et feuillages de saison. Un savoir-faire ancestral pour célébrer la beauté éphémère de la nature.",
    duration: "2h",
    image: flowerCrownImage,
    icon: Flower2,
  },
  {
    title: "Vannerie",
    description: "Apprenez l'art du tressage avec osier et fibres naturelles. Créez des paniers fonctionnels et esthétiques en reconnectant avec un artisanat millénaire.",
    duration: "3h30",
    image: basketryImage,
    icon: Leaf,
  },
  {
    title: "Photographie Végétale",
    description: "Explorez le cyanotype et les techniques photographiques ancestrales. Imprimez l'empreinte des plantes sur papier dans des nuances de bleu intemporel.",
    duration: "2h30",
    image: photoVegetalImage,
    icon: Sparkles,
  },
  {
    title: "Herbier",
    description: "Constituez votre collection botanique personnelle. Apprenez à sécher, presser et conserver les plantes tout en développant votre regard naturaliste.",
    duration: "2h",
    image: "/videos/workshop-fresque-herbier.mp4",
    icon: Leaf,
    type: "video",
  },
  {
    title: "Jardin Partagé",
    description: "Participez à la création d'un espace collectif. Du design à la plantation, cultivez ensemble la biodiversité et le lien social à travers le jardinage.",
    duration: "½ journée",
    image: sharedGardenImage,
    icon: Sprout,
  },
  {
    title: "Sachets Senteur & Pots-Pourris",
    description: "Composez vos propres mélanges aromatiques avec fleurs séchées, herbes et épices. Créez des objets parfumés pour la maison ancrés dans la tradition.",
    duration: "1h30",
    image: sachetSenteurImage,
    icon: Flower2,
  },
  {
    title: "Huiles Essentielles",
    description: "Initiez-vous à l'extraction et l'usage des essences végétales. Découvrez les propriétés thérapeutiques des plantes et créez vos propres synergies aromatiques.",
    duration: "3h",
    image: essentialOilsImage,
    icon: Droplets,
  },
  {
    title: "Tataki Zome",
    description: "Explorez l'art ancestral japonais de l'impression végétale par martelage. Transférez les pigments naturels des fleurs et feuilles directement sur textile en créant des empreintes botaniques uniques et éphémères.",
    duration: "2h",
    image: photoVegetalImage,
    icon: Palette,
  },
];

const Workshops = () => {
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20" style={{ backgroundColor: '#F7F7EB' }}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in">
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

          <div className="space-y-20">
            {workshops.map((workshop, index) => (
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
                  <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                    {workshop.title}
                  </h2>
                  <p className="text-lg text-charcoal/80 leading-relaxed">
                    {workshop.description}
                  </p>
                  <Link 
                    to={`/contact?subject=${encodeURIComponent(`Réservation atelier : ${workshop.title}`)}`}
                    className="inline-flex items-center px-6 py-3 bg-sage hover:bg-sage-dark text-off-white text-sm uppercase tracking-wider font-semibold transition-all duration-300 rounded-full"
                  >
                    Réserver cet atelier
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Formation Section */}
          <div id="formations-educatives" className="mt-32 animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={formationImage} 
                alt="Formation éducative sur la relation homme-plantes"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/60 to-transparent"></div>
              <div className="absolute inset-0 flex items-end">
                <div className="p-8 md:p-12 w-full">
                  <h2 className="text-3xl md:text-5xl text-white" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>
                    Formations Éducatives
                  </h2>
                  <p className="text-lg text-white/90 leading-relaxed max-w-3xl">
                    Interventions auprès des lycées, collèges et entreprises
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-2xl md:text-3xl" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Pour les établissements scolaires
                </h3>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  Des parcours de sensibilisation spécialement conçus pour les collèges et lycées, alliant dimension éducative et pratique botanique. Ces interventions engagent les élèves dans une réflexion active sur les enjeux environnementaux contemporains tout en développant leur lien avec le vivant.
                </p>
                <ul className="space-y-3 text-charcoal/80">
                  <li className="flex items-start">
                    <span className="text-sage mr-3 mt-1 font-bold">•</span>
                    <span>Espèces exotiques envahissantes : identification, impacts écologiques et actions de préservation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-3 mt-1 font-bold">•</span>
                    <span>Biodiversité urbaine et sauvage : reconnaissance des espèces locales et leur rôle dans l'écosystème</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-3 mt-1 font-bold">•</span>
                    <span>Changement climatique et adaptation des plantes : observer et comprendre la résilience végétale</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-3 mt-1 font-bold">•</span>
                    <span>Ethnobotanique : relations entre plantes et cultures humaines à travers l'histoire</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-3 mt-1 font-bold">•</span>
                    <span>Cycles naturels et saisonnalité : comprendre les rythmes du vivant</span>
                  </li>
                </ul>
              </div>

              <div id="formations-professionnelles" className="space-y-6 animate-fade-in">
                <h3 className="text-2xl md:text-3xl" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Pour les formations professionnelles
                </h3>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  Modules complémentaires destinés aux BTS, lycées professionnels agricoles et formations en aménagement paysager. Une approche anthropologique qui dépasse la simple technique pour questionner le <strong>statut ontologique des plantes</strong> et repenser notre relation au vivant.
                </p>
                <p className="text-base text-charcoal/70 leading-relaxed italic mb-4">
                  Inspirés de mes recherches en anthropologie sur les relations humain-plante en milieu urbain (EHESS), ces modules enrichissent les cursus techniques d'une dimension réflexive essentielle.
                </p>
                <ul className="space-y-3 text-charcoal/80">
                  <li className="flex items-start">
                    <span className="text-sage mr-3 mt-1 font-bold">•</span>
                    <span><strong>Au-delà de la dichotomie nature/culture</strong> : Les plantes comme entités vivantes dotées de leur propre réalité, et non comme simples objets esthétiques ou fonctionnels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-3 mt-1 font-bold">•</span>
                    <span><strong>Anthropologie de la nature</strong> : Comprendre les perceptions et relations entre citadins et plantes dans l'espace urbain</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-3 mt-1 font-bold">•</span>
                    <span><strong>Ethnobotanique appliquée</strong> : Le rôle des plantes dans la culture et la société, au-delà de leur fonction écologique</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-3 mt-1 font-bold">•</span>
                    <span><strong>Vision holistique du paysagisme</strong> : Intégrer les perspectives anthropologiques, écologiques et politiques dans la gestion des espaces verts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-3 mt-1 font-bold">•</span>
                    <span><strong>Méthodologie de terrain</strong> : Observation participante, entretiens semi-structurés, analyse des interactions humain-végétal</span>
                  </li>
                </ul>
                <p className="text-sm text-charcoal/60 leading-relaxed mt-4">
                  Ces modules s'appuient sur les travaux de Philippe Descola, Bruno Latour et Tim Ingold pour enrichir les pratiques professionnelles d'une compréhension profonde des enjeux contemporains entre urbanisation et environnement.
                </p>
              </div>

              <div className="space-y-6 animate-fade-in">
                <h3 className="text-2xl md:text-3xl" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Pour les entreprises
                </h3>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  Des formations qui questionnent notre regard sur le végétal en milieu professionnel. Comment réintégrer la nature dans nos espaces de travail ? Quelle place accorder aux plantes dans notre quotidien ? Des sessions qui allient réflexion philosophique et mise en pratique concrète.
                </p>
                <ul className="space-y-3 text-charcoal/80">
                  <li className="flex items-start">
                    <span className="text-sage mr-3 mt-1 font-bold">•</span>
                    <span>Végétalisation des espaces de travail</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-3 mt-1 font-bold">•</span>
                    <span>Team-building autour du jardinage collectif</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-3 mt-1 font-bold">•</span>
                    <span>Conférences sur l'écologie et le vivant</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-sand rounded-lg p-8 md:p-12 text-center animate-fade-in">
              <h4 className="text-xl md:text-2xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Repenser notre lien au végétal
              </h4>
              <p className="text-lg text-charcoal/80 leading-relaxed mb-6 max-w-3xl mx-auto">
                Dans une société où la nature est souvent reléguée à l'arrière-plan, ces formations invitent à questionner la place des plantes dans notre vie moderne. Comment les espaces verts façonnent-ils notre santé mentale, notre créativité et notre rapport au temps ? Ensemble, explorons les dimensions symboliques, écologiques et sociales du végétal.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-sage hover:bg-sage-dark text-off-white text-sm uppercase tracking-wider font-semibold transition-all duration-300 rounded-full"
              >
                Demander une formation
              </a>
            </div>
          </div>

          {/* Private & Corporate Section */}
          <div id="entreprises" className="mt-20 rounded-lg p-8 md:p-12 text-center animate-fade-in" style={{ backgroundColor: '#F7F7EB' }}>
            <Leaf size={40} className="mx-auto mb-6" style={{ color: '#A7B795' }} />
            <h3 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
              Ateliers de groupe / entreprises
            </h3>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6 max-w-2xl mx-auto">
              Vous recherchez une expérience unique de team-building ou un événement privé ? Nous proposons des ateliers sur mesure pour groupes, entreprises et occasions spéciales.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 hover:bg-sage-dark text-off-white text-sm uppercase tracking-wider font-semibold transition-all duration-300 rounded-full"
              style={{ backgroundColor: '#A7B795' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5D653A'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#A7B795'}
            >
              Nous contacter
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Workshops;
