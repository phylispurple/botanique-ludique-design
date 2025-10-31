import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  LeafBranch, 
  Butterfly, 
  Flower, 
  Bee, 
  Mushroom, 
  Snail, 
  Bird, 
  Seed,
  Strawberry
} from "@/components/BotanicalIllustrations";

const Index = () => {
  const navigate = useNavigate();

  const workshops = [
    { name: "Kokedama", color: "text-sage" },
    { name: "Teinture Végétale", color: "text-earth" },
    { name: "Terrariums", color: "text-sage-dark" },
    { name: "Fresques Végétales", color: "text-accent" },
    { name: "Bombes de Graines", color: "text-sage-light" },
    { name: "Couronnes de Fleurs", color: "text-earth" },
    { name: "Vannerie", color: "text-sage" },
    { name: "Herbier", color: "text-accent" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section - Split Screen Design */}
      <section className="min-h-screen bg-sage-dark flex items-center relative overflow-hidden">
        {/* Decorative geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-earth opacity-80" />
        <div className="absolute bottom-40 left-10 w-24 h-24 rounded-full bg-accent opacity-60" />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-sand/30" style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }} />
        
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-8 animate-fade-up z-10">
              <div className="space-y-4">
                <h1 className="text-7xl md:text-8xl font-bold text-off-white leading-none">
                  LES ATELIERS
                </h1>
                <div className="flex items-center gap-4">
                  <h2 className="text-5xl md:text-6xl font-light text-sand">
                    qui font vivre
                  </h2>
                  <div className="w-16 h-16 rounded-full bg-accent animate-pulse" />
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-earth" />
                  <h2 className="text-5xl md:text-6xl font-light text-sand">
                    la nature.
                  </h2>
                </div>
              </div>
              
              <p className="text-xl text-sand/90 max-w-xl leading-relaxed">
                Reconnectez-vous à la nature à travers des ateliers créatifs et sensoriels. 
                De la création de kokedama aux teintures végétales, explorez le monde végétal 
                autrement.
              </p>
              
              <button
                onClick={() => navigate('/ateliers')}
                className="group relative px-10 py-5 bg-earth hover:bg-earth/90 text-off-white rounded-full text-lg font-semibold transition-all hover:scale-105 hover:shadow-2xl flex items-center gap-3"
              >
                Ateliers ?... Go !
                <span className="text-2xl transition-transform group-hover:translate-x-1">→</span>
              </button>
              
              {/* Workshop Tags Cloud */}
              <div className="flex flex-wrap gap-3 pt-6">
                {workshops.map((workshop, index) => (
                  <Link
                    key={workshop.name}
                    to="/ateliers"
                    className="px-5 py-2 rounded-full text-sm font-medium bg-off-white/10 backdrop-blur-sm text-sand border border-sand/20 hover:bg-off-white/20 hover:border-sand/40 hover:-translate-y-1 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {workshop.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Right Side - Botanical Illustrations */}
            <div className="relative animate-fade-up h-[600px]" style={{ animationDelay: '0.2s' }}>
              {/* Large decorative circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-sage/20 to-earth/20 backdrop-blur-sm border border-off-white/10" />
              
              {/* Floating stat badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-sage/90 to-sage-dark/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse-slow border border-off-white/20 z-10">
                <div className="text-5xl font-bold text-off-white">12+</div>
                <div className="text-base text-sand font-medium">ateliers créatifs</div>
                {/* Rotating ring */}
                <div className="absolute inset-0 rounded-2xl border-2 border-accent/30 animate-spin" style={{ animationDuration: '8s' }} />
              </div>
              
              {/* Botanical illustrations arranged in circle */}
              <LeafBranch
                className="absolute top-10 left-1/2 -translate-x-1/2 w-28 h-28 text-earth/70 animate-float cursor-pointer hover:scale-125 transition-transform"
                onClick={() => navigate('/ateliers')}
              />
              <Flower
                className="absolute top-1/2 right-10 -translate-y-1/2 w-24 h-24 text-accent/80 animate-float cursor-pointer hover:scale-125 transition-transform"
                onClick={() => navigate('/ateliers')}
                style={{ animationDelay: '0.5s' }}
              />
              <Butterfly
                className="absolute bottom-10 left-1/2 -translate-x-1/2 w-20 h-20 text-sand/70 animate-float cursor-pointer hover:scale-125 transition-transform"
                onClick={() => navigate('/ateliers')}
                style={{ animationDelay: '1s' }}
              />
              <Bee
                className="absolute top-1/2 left-10 -translate-y-1/2 w-22 h-22 text-accent/70 animate-float cursor-pointer hover:scale-125 transition-transform"
                onClick={() => navigate('/ateliers')}
                style={{ animationDelay: '0.3s' }}
              />
              <Mushroom
                className="absolute top-20 right-20 w-20 h-20 text-sage/70 animate-float cursor-pointer hover:scale-125 transition-transform"
                onClick={() => navigate('/ateliers')}
                style={{ animationDelay: '0.7s' }}
              />
              <Snail
                className="absolute bottom-20 left-20 w-18 h-18 text-earth/60 animate-float cursor-pointer hover:scale-125 transition-transform"
                onClick={() => navigate('/ateliers')}
                style={{ animationDelay: '0.9s' }}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Philosophy Section - Full Width with Contrast */}
      <section className="bg-sand py-32 px-4 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-sage/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-earth/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold text-charcoal leading-tight">
                Botanique <span className="text-sage">Ludique</span>
              </h2>
              <div className="w-20 h-1 bg-sage" />
              <p className="text-lg text-charcoal/80 leading-relaxed">
                Créée par <strong>Vanessa Charlery</strong>, ethnobotaniste passionnée, 
                Botanique Ludique propose des ateliers créatifs qui reconnectent l'humain 
                au végétal à travers l'art, le rituel et le jeu.
              </p>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                Chaque atelier est une invitation à ralentir, observer et créer 
                avec les plantes. De la fabrication de kokedama aux fresques murales 
                végétales, découvrez une autre façon d'habiter le monde.
              </p>
              <Link
                to="/philosophie"
                className="inline-flex items-center gap-2 px-8 py-4 bg-sage hover:bg-sage-dark text-off-white rounded-full font-semibold transition-all hover:scale-105 hover:shadow-xl"
              >
                Découvrir la philosophie
                <span className="text-xl">→</span>
              </Link>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square bg-sage/20 rounded-3xl flex items-center justify-center">
                    <Flower className="w-20 h-20 text-sage animate-float" />
                  </div>
                  <div className="aspect-[4/5] bg-earth/20 rounded-3xl flex items-center justify-center">
                    <LeafBranch className="w-24 h-24 text-earth animate-float" style={{ animationDelay: '0.5s' }} />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-[4/5] bg-accent/20 rounded-3xl flex items-center justify-center">
                    <Bee className="w-20 h-20 text-accent animate-float" style={{ animationDelay: '0.3s' }} />
                  </div>
                  <div className="aspect-square bg-sage-dark/20 rounded-3xl flex items-center justify-center">
                    <Mushroom className="w-20 h-20 text-sage-dark animate-float" style={{ animationDelay: '0.7s' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="bg-earth py-24 px-4">
        <div className="container mx-auto text-center max-w-3xl space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-off-white">
            Prêt·e à explorer le monde végétal ?
          </h2>
          <p className="text-xl text-off-white/90">
            Rejoignez-nous pour un atelier et découvrez une nouvelle façon 
            de créer avec la nature.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link
                to="/ateliers"
              className="px-10 py-5 bg-off-white hover:bg-sand text-charcoal rounded-full font-semibold text-lg transition-all hover:scale-105 hover:shadow-2xl"
            >
              Voir tous les ateliers
            </Link>
            <Link 
              to="/contact" 
              className="px-10 py-5 bg-transparent border-2 border-off-white hover:bg-off-white/10 text-off-white rounded-full font-semibold text-lg transition-all hover:scale-105"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
