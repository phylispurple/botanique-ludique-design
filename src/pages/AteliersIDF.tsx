import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import { SEO } from "@/components/SEO";
import { MapPin, Leaf, Users, Building2 } from "lucide-react";
import workshopKokedama from "@/assets/gallery-kokedama-garden.webp";
import workshopDyeing from "@/assets/gallery-teinture-1.webp";
import workshopTerrarium from "@/assets/gallery-terrarium.webp";

const AteliersIDF = () => {
  const departments = [
    {
      name: "Paris",
      code: "75",
      description: "Au cœur de la capitale, nos ateliers botaniques vous accueillent dans des lieux inspirants pour reconnecter avec la nature. Accessibles en métro, nos sessions créatives s'adaptent à tous les publics : particuliers, familles, entreprises et collectivités.",
      cities: ["Paris 16e", "Paris Centre", "Paris Est", "Paris Ouest"],
      workshops: ["Kokedama", "Teinture végétale", "Terrarium", "Couronnes de fleurs", "Vannerie"],
      color: "from-sage to-sage-dark"
    },
    {
      name: "Yvelines",
      code: "78",
      description: "Les Yvelines offrent un cadre verdoyant idéal pour nos ateliers nature. De Chatou à Saint-Germain-en-Laye, en passant par Le Vésinet et Le Pecq, nous intervenons dans les MJC, entreprises locales, écoles et centres culturels de tout le département.",
      cities: ["Chatou", "Le Vésinet", "Le Pecq", "Saint-Germain-en-Laye", "Versailles"],
      workshops: ["Kokedama", "Teinture végétale", "Herbier créatif", "Bombes à graines", "Tataki Zomé"],
      color: "from-earth to-accent"
    },
    {
      name: "Hauts-de-Seine",
      code: "92",
      description: "Dans les Hauts-de-Seine, Botanique Ludique propose des ateliers créatifs nature à Nanterre, Boulogne-Billancourt et dans tout le département. Nos interventions s'adressent aux entreprises (team building RSE), aux EHPAD (animations intergénérationnelles) et aux collectivités.",
      cities: ["Nanterre", "Boulogne-Billancourt", "Neuilly-sur-Seine", "Rueil-Malmaison", "Levallois-Perret"],
      workshops: ["Team building végétal", "Kokedama d'équipe", "Vannerie collaborative", "Fresques végétales", "Terrarium"],
      color: "from-sage-light to-sage"
    },
    {
      name: "Val-d'Oise",
      code: "95",
      description: "Le Val-d'Oise accueille également nos ateliers botaniques créatifs. De Cergy à Pontoise, en passant par Argenteuil et Enghien-les-Bains, nous proposons des animations nature pour les entreprises, collectivités, écoles et particuliers du département.",
      cities: ["Cergy", "Pontoise", "Argenteuil", "Enghien-les-Bains", "Sannois"],
      workshops: ["Kokedama", "Teinture végétale", "Terrarium", "Team building nature", "Vannerie"],
      color: "from-accent to-earth"
    }
  ];

  const keyWorkshops = [
    {
      title: "Kokedama",
      description: "L'art japonais du jardinage suspendu. Créez une boule de mousse végétale unique lors d'ateliers à Paris, Yvelines (78) et Hauts-de-Seine (92).",
      image: workshopKokedama,
      areas: "Paris, Chatou, Nanterre, Saint-Germain-en-Laye"
    },
    {
      title: "Teinture Végétale",
      description: "Découvrez les techniques ancestrales de teinture naturelle avec des plantes locales. Ateliers disponibles dans toute l'Île-de-France pour particuliers et entreprises.",
      image: workshopDyeing,
      areas: "Paris 16e, Le Vésinet, Boulogne-Billancourt"
    },
    {
      title: "Terrarium",
      description: "Concevez un écosystème miniature dans un bocal en verre. Ateliers créatifs nature proposés à Paris, Yvelines et Hauts-de-Seine pour tous les âges.",
      image: workshopTerrarium,
      areas: "Paris, Le Pecq, Rueil-Malmaison, Chatou"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Ateliers Botaniques en Île-de-France - Paris, Yvelines (78), Hauts-de-Seine (92), Val-d'Oise (95)"
        description="Ateliers botaniques créatifs dans toute l'Île-de-France : Paris, Yvelines (Chatou, Saint-Germain, Le Vésinet), Hauts-de-Seine (Nanterre, Boulogne) et Val-d'Oise (Cergy, Pontoise). Kokedama, teinture végétale, terrarium pour particuliers et entreprises."
        keywords="atelier botanique Paris, atelier nature Yvelines 78, atelier végétal Hauts-de-Seine 92, atelier Val-d'Oise 95, kokedama Paris, teinture végétale Chatou, terrarium Nanterre, atelier botanique Saint-Germain-en-Laye, team building nature Île-de-France, atelier créatif Le Vésinet, vannerie Boulogne-Billancourt, atelier Cergy"
        canonical="/ateliers-idf"
      />
      <Navigation />
      <LandingPhotoStrip />

      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-sage/10 to-sand/30 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-sage/10 blur-3xl border-brutal shadow-brutal" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-earth/10 blur-3xl" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MapPin className="w-12 h-12 text-sage" />
              <Leaf className="w-10 h-10 text-earth" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-charcoal" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
              Ateliers Botaniques en Île-de-France
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Paris, Yvelines (78), Hauts-de-Seine (92) et Val-d'Oise (95) : Découvrez nos ateliers créatifs nature 
              partout en Île-de-France
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-[hsl(var(--yellow))]/15/80 backdrop-blur-sm p-6 shadow-brutal text-center hover:scale-105 transition-transform border-brutal shadow-brutal">
              <div className="text-4xl font-bold text-sage mb-2">75</div>
              <div className="text-lg font-semibold text-charcoal">Paris</div>
              <div className="text-sm text-muted-foreground mt-2">Centre et périphérie</div>
            </div>
            <div className="bg-[hsl(var(--yellow))]/15/80 backdrop-blur-sm p-6 shadow-brutal text-center hover:scale-105 transition-transform border-brutal shadow-brutal">
              <div className="text-4xl font-bold text-earth mb-2">78</div>
              <div className="text-lg font-semibold text-charcoal">Yvelines</div>
              <div className="text-sm text-muted-foreground mt-2">Chatou, Le Vésinet, St-Germain...</div>
            </div>
            <div className="bg-[hsl(var(--yellow))]/15/80 backdrop-blur-sm p-6 shadow-brutal text-center hover:scale-105 transition-transform border-brutal shadow-brutal">
              <div className="text-4xl font-bold text-sage-dark mb-2">92</div>
              <div className="text-lg font-semibold text-charcoal">Hauts-de-Seine</div>
              <div className="text-sm text-muted-foreground mt-2">Nanterre, Boulogne, Rueil...</div>
            </div>
            <div className="bg-[hsl(var(--yellow))]/15/80 backdrop-blur-sm p-6 shadow-brutal text-center hover:scale-105 transition-transform border-brutal shadow-brutal">
              <div className="text-4xl font-bold text-accent mb-2">95</div>
              <div className="text-lg font-semibold text-charcoal">Val-d'Oise</div>
              <div className="text-sm text-muted-foreground mt-2">Cergy, Pontoise, Argenteuil...</div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg mx-auto text-charcoal/80">
            <p className="text-lg leading-relaxed mb-6">
              <strong>Botanique Ludique</strong> intervient dans toute l'Île-de-France pour proposer des ateliers botaniques créatifs 
              et pédagogiques. Que vous soyez à Paris, dans les Yvelines (78) ou les Hauts-de-Seine (92), nos animations nature 
              s'adaptent à tous les publics : particuliers, familles, écoles, entreprises, MJC, EHPAD et collectivités.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Chaque atelier allie créativité artistique et transmission des savoirs ethnobotaniques. Du kokedama japonais 
              à la teinture végétale ancestrale, en passant par la vannerie et les terrariums, nous proposons plus de 15 activités 
              nature différentes adaptées à vos besoins et à votre lieu d'accueil.
            </p>
            <p className="text-lg leading-relaxed">
              Nos interventions se déroulent dans vos locaux (entreprises, MJC, écoles, EHPAD) ou dans des espaces partenaires. 
              Nous apportons tout le matériel nécessaire et adaptons le format selon le nombre de participants (de 5 à 50 personnes).
            </p>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 px-4 bg-sand/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl mb-12 text-center text-charcoal" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
            Nos Zones d'Intervention en Île-de-France
          </h2>

          <div className="space-y-12">
            {departments.map((dept, index) => (
              <div key={index} className="bg-[hsl(var(--yellow))]/15 shadow-brutal overflow-hidden hover:shadow-brutal-lg transition-shadow border-brutal shadow-brutal">
                <div className={`bg-gradient-to-r ${dept.color} p-6 text-white`}>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-[hsl(var(--yellow))]/15/20 backdrop-blur-sm w-16 h-16 flex items-center justify-center text-2xl font-bold border-brutal shadow-brutal">
                      {dept.code}
                    </div>
                    <h3 className="text-3xl font-semibold" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                      {dept.name}
                    </h3>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                    {dept.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-charcoal mb-3 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-sage" />
                        Villes principales
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {dept.cities.map((city, i) => (
                          <span key={i} className="px-3 py-1 bg-sage/10 text-sage-dark text-sm border-brutal shadow-brutal">
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-charcoal mb-3 flex items-center gap-2">
                        <Leaf className="w-5 h-5 text-earth" />
                        Ateliers proposés
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {dept.workshops.map((workshop, i) => (
                          <span key={i} className="px-3 py-1 bg-earth/10 text-earth text-sm">
                            {workshop}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Workshops Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl mb-4 text-center text-charcoal" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
            Nos Ateliers Phares en Île-de-France
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Découvrez nos ateliers les plus demandés, disponibles à Paris, Yvelines et Hauts-de-Seine
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {keyWorkshops.map((workshop, index) => (
              <div key={index} className="bg-[hsl(var(--yellow))]/15 shadow-brutal overflow-hidden hover:scale-105 transition-transform border-brutal shadow-brutal">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={workshop.image} 
                    alt={`Atelier ${workshop.title}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-charcoal mb-3" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                    {workshop.title}
                  </h3>
                  <p className="text-charcoal/70 mb-4 leading-relaxed">
                    {workshop.description}
                  </p>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-sage" />
                    <span>{workshop.areas}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audiences Section */}
      <section className="py-20 px-4 bg-sage/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl mb-12 text-center text-charcoal" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
            Pour Qui ?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[hsl(var(--yellow))]/15 p-6 shadow-brutal text-center hover:scale-105 transition-transform border-brutal shadow-brutal">
              <Users className="w-12 h-12 text-sage mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-charcoal mb-2">Particuliers</h3>
              <p className="text-sm text-muted-foreground">
                Ateliers ouverts à tous, adultes et familles, débutants bienvenus
              </p>
            </div>

            <div className="bg-[hsl(var(--yellow))]/15 p-6 shadow-brutal text-center hover:scale-105 transition-transform border-brutal shadow-brutal">
              <Building2 className="w-12 h-12 text-earth mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-charcoal mb-2">Entreprises</h3>
              <p className="text-sm text-muted-foreground">
                Team building RSE, séminaires, événements d'entreprise
              </p>
            </div>

            <div className="bg-[hsl(var(--yellow))]/15 p-6 shadow-brutal text-center hover:scale-105 transition-transform border-brutal shadow-brutal">
              <Leaf className="w-12 h-12 text-sage-dark mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-charcoal mb-2">Collectivités</h3>
              <p className="text-sm text-muted-foreground">
                MJC, centres sociaux, bibliothèques, maisons de quartier
              </p>
            </div>

            <div className="bg-[hsl(var(--yellow))]/15 p-6 shadow-brutal text-center hover:scale-105 transition-transform border-brutal shadow-brutal">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-charcoal mb-2">EHPAD & Écoles</h3>
              <p className="text-sm text-muted-foreground">
                Animations intergénérationnelles, projets pédagogiques nature
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-sage to-sage-dark text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
            Envie d'organiser un atelier botanique en Île-de-France ?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Que vous soyez à Paris, dans les Yvelines (78), les Hauts-de-Seine (92) ou le Val-d'Oise (95), 
            contactez-nous pour organiser votre atelier nature sur-mesure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/workshops" 
              className="px-8 py-4 bg-[hsl(var(--yellow))]/15 text-sage-dark font-semibold text-lg hover:scale-105 transition-transform shadow-brutal border-brutal shadow-brutal"
            >
              Voir tous les ateliers
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-transparent border-[3px] border-white font-semibold text-lg hover:scale-105 transition-transform"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Footer Text */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg mx-auto text-charcoal/70 text-sm">
            <h3 className="text-xl font-semibold text-charcoal mb-4">
              Ateliers botaniques créatifs dans toute l'Île-de-France
            </h3>
            <p className="leading-relaxed mb-4">
              Botanique Ludique propose des <strong>ateliers botaniques à Paris</strong>, dans les <strong>Yvelines (78)</strong>, les <strong>Hauts-de-Seine (92)</strong> et le <strong>Val-d'Oise (95)</strong>. 
              Nos interventions couvrent les villes de Chatou, Saint-Germain-en-Laye, Le Vésinet, Le Pecq, Nanterre, Boulogne-Billancourt, 
              Rueil-Malmaison, Cergy, Pontoise, Argenteuil et de nombreuses autres communes d'Île-de-France.
            </p>
            <p className="leading-relaxed">
              Spécialisés en <strong>kokedama</strong>, <strong>teinture végétale</strong>, <strong>vannerie</strong>, <strong>terrarium</strong> 
              et <strong>team building nature</strong>, nous proposons plus de 15 ateliers différents adaptés à tous les publics. 
              Nos animations ethnobotaniques allient créativité, pédagogie et reconnexion à la nature pour des expériences uniques et mémorables.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AteliersIDF;
