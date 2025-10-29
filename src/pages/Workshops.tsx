import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import kokedamaImage from "@/assets/workshop-kokedama.jpg";
import dyeingImage from "@/assets/workshop-dyeing.jpg";
import terrariumImage from "@/assets/workshop-terrarium.jpg";
import muralImage from "@/assets/workshop-mural.jpg";
import seedBombsImage from "@/assets/workshop-seed-bombs.jpg";
import flowerCrownImage from "@/assets/workshop-flower-crown.jpg";
import basketryImage from "@/assets/workshop-basketry.jpg";
import photoVegetalImage from "@/assets/workshop-photo-vegetal.jpg";
import herbariumImage from "@/assets/workshop-herbarium.jpg";
import sharedGardenImage from "@/assets/workshop-shared-garden.jpg";
import sachetsImage from "@/assets/workshop-sachets.jpg";
import essentialOilsImage from "@/assets/workshop-essential-oils.jpg";
import formationImage from "@/assets/formation-education.jpg";

const workshops = [
  {
    title: "Kokedama",
    description: "Découvrez l'art japonais du jardinage en boules de mousse. Créez vos propres sculptures végétales suspendues en alliant techniques traditionnelles et design contemporain.",
    duration: "2h30",
    image: kokedamaImage,
  },
  {
    title: "Teinture Végétale",
    description: "Explorez l'alchimie de la teinture naturelle. Extrayez des pigments végétaux pour créer des textiles durables aux tons terreux et authentiques.",
    duration: "3h",
    image: dyeingImage,
  },
  {
    title: "Terrariums",
    description: "Composez des écosystèmes miniatures sous verre. Créez des paysages en couches avec mousses, pierres et plantes délicates — des mondes minuscules qui prospèrent avec peu d'entretien.",
    duration: "2h",
    image: terrariumImage,
  },
  {
    title: "Fresques Végétales",
    description: "Créez des murales botaniques avec fleurs pressées, feuilles et matériaux naturels. Un processus méditatif qui transforme les plantes en œuvres d'art vivantes.",
    duration: "4h",
    image: muralImage,
  },
  {
    title: "Bombes de Graines",
    description: "Fabriquez des bombes de graines artisanales avec argile, compost et graines sauvages. Une action de guérilla verte pour reverdir nos espaces urbains.",
    duration: "1h30",
    image: seedBombsImage,
  },
  {
    title: "Couronnes de Fleurs",
    description: "Tressez des couronnes végétales avec fleurs sauvages et feuillages de saison. Un savoir-faire ancestral pour célébrer la beauté éphémère de la nature.",
    duration: "2h",
    image: flowerCrownImage,
  },
  {
    title: "Vannerie",
    description: "Apprenez l'art du tressage avec osier et fibres naturelles. Créez des paniers fonctionnels et esthétiques en reconnectant avec un artisanat millénaire.",
    duration: "3h30",
    image: basketryImage,
  },
  {
    title: "Photographie Végétale",
    description: "Explorez le cyanotype et les techniques photographiques ancestrales. Imprimez l'empreinte des plantes sur papier dans des nuances de bleu intemporel.",
    duration: "2h30",
    image: photoVegetalImage,
  },
  {
    title: "Herbier",
    description: "Constituez votre collection botanique personnelle. Apprenez à sécher, presser et conserver les plantes tout en développant votre regard naturaliste.",
    duration: "2h",
    image: herbariumImage,
  },
  {
    title: "Jardin Partagé",
    description: "Participez à la création d'un espace collectif. Du design à la plantation, cultivez ensemble la biodiversité et le lien social à travers le jardinage.",
    duration: "½ journée",
    image: sharedGardenImage,
  },
  {
    title: "Sachets Senteur & Pots-Pourris",
    description: "Composez vos propres mélanges aromatiques avec fleurs séchées, herbes et épices. Créez des objets parfumés pour la maison ancrés dans la tradition.",
    duration: "1h30",
    image: sachetsImage,
  },
  {
    title: "Huiles Essentielles",
    description: "Initiez-vous à l'extraction et l'usage des essences végétales. Découvrez les propriétés thérapeutiques des plantes et créez vos propres synergies aromatiques.",
    duration: "3h",
    image: essentialOilsImage,
  },
];

const Workshops = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="font-serif text-4xl md:text-6xl font-light mb-6 text-foreground">
              Ateliers
            </h1>
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
              Expériences botaniques immersives pour particuliers et groupes. Chaque atelier est conçu pour vous reconnecter avec la nature à travers la créativité manuelle et la pratique consciente.
            </p>
          </div>

          <div className="space-y-20">
            {workshops.map((workshop, index) => (
              <div
                key={workshop.title}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`${index % 2 === 1 ? "md:order-2" : ""} group`}>
                  <img
                    src={workshop.image}
                    alt={`Atelier ${workshop.title}`}
                    className="w-full rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-105"
                  />
                </div>

                <div className={`space-y-4 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="inline-block px-4 py-1 bg-primary/10 text-primary font-sans text-xs uppercase tracking-wider rounded-full animate-fade-in">
                    {workshop.duration}
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground">
                    {workshop.title}
                  </h2>
                  <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
                    {workshop.description}
                  </p>
                  <button className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-sans text-sm uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 rounded-full hover:scale-105">
                    Réserver cet atelier
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Formation Section */}
          <div className="mt-32 animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={formationImage} 
                alt="Formation éducative sur la relation homme-plantes"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/60 to-transparent"></div>
              <div className="absolute inset-0 flex items-end">
                <div className="p-8 md:p-12 w-full">
                  <h2 className="font-serif text-3xl md:text-5xl font-light mb-4 text-white">
                    Formations Éducatives
                  </h2>
                  <p className="font-sans text-base md:text-lg text-white/90 leading-relaxed max-w-3xl">
                    Interventions auprès des lycées, collèges et entreprises
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="font-serif text-2xl md:text-3xl font-light text-foreground">
                  Pour les établissements scolaires
                </h3>
                <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
                  Des interventions pédagogiques qui explorent la relation entre l'humain et le végétal. À travers des ateliers pratiques et des discussions, nous abordons l'importance des espaces verts dans notre société moderne, leur symbolique et leur rôle dans notre bien-être collectif.
                </p>
                <ul className="space-y-3 font-sans text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span>Sensibilisation à la biodiversité urbaine</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span>L'ethnobotanique : plantes et cultures humaines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span>Reconnexion sensorielle avec la nature</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="font-serif text-2xl md:text-3xl font-light text-foreground">
                  Pour les entreprises
                </h3>
                <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
                  Des formations qui questionnent notre regard sur le végétal en milieu professionnel. Comment réintégrer la nature dans nos espaces de travail ? Quelle place accorder aux plantes dans notre quotidien ? Des sessions qui allient réflexion philosophique et mise en pratique concrète.
                </p>
                <ul className="space-y-3 font-sans text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span>Végétalisation des espaces de travail</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span>Team-building autour du jardinage collectif</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span>Conférences sur l'écologie et le vivant</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-card rounded-lg p-8 md:p-12 text-center shadow-lg">
              <h4 className="font-serif text-xl md:text-2xl font-light mb-4 text-foreground">
                Repenser notre lien au végétal
              </h4>
              <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed mb-6 max-w-3xl mx-auto">
                Dans une société où la nature est souvent reléguée à l'arrière-plan, ces formations invitent à questionner la place des plantes dans notre vie moderne. Comment les espaces verts façonnent-ils notre santé mentale, notre créativité et notre rapport au temps ? Ensemble, explorons les dimensions symboliques, écologiques et sociales du végétal.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-sans text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-full hover:scale-105"
              >
                Demander une formation
              </a>
            </div>
          </div>

          {/* Private & Corporate Section */}
          <div className="mt-20 bg-card rounded-lg p-8 md:p-12 shadow-lg text-center animate-fade-in">
            <h3 className="font-serif text-2xl md:text-3xl font-light mb-4 text-foreground">
              Ateliers Privés & Entreprises
            </h3>
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
              Vous recherchez une expérience unique de team-building ou un événement privé ? Nous proposons des ateliers sur mesure pour groupes, entreprises et occasions spéciales.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-sans text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-full hover:scale-105"
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
