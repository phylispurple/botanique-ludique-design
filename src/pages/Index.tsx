import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
      
      {/* Hero Section - Centered Minimal Design */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#5D653A', paddingTop: '8%', paddingBottom: '10%' }}>
        {/* Decorative bubbles - minimal and elegant */}
        <div className="absolute top-20 right-[15%] w-24 h-24 rounded-full bg-[#F7F7EB] opacity-10 animate-fade-in" style={{ animationDelay: '0.3s' }} />
        <div className="absolute bottom-32 left-[10%] w-32 h-32 rounded-full bg-[#F7F7EB] opacity-8 animate-fade-in" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/3 right-[25%] w-16 h-16 rounded-full bg-[#F7F7EB] opacity-12 animate-fade-in" style={{ animationDelay: '0.7s' }} />
        <div className="absolute bottom-1/4 right-[35%] w-20 h-20 rounded-full bg-[#F7F7EB] opacity-10 animate-fade-in" style={{ animationDelay: '0.9s' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-6 animate-fade-in">
            {/* Main Title - Strong and Centered */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight" style={{ color: '#F7F7EB' }}>
                LES ATELIERS
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight" style={{ color: '#F7F7EB', opacity: 0.95 }}>
                qui font vivre
              </h2>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight" style={{ color: '#F7F7EB', opacity: 0.95 }}>
                la nature.
              </h2>
            </div>
            
            {/* Description - Centered with max-width */}
            <p className="text-lg sm:text-xl max-w-[700px] leading-relaxed mx-auto" style={{ color: '#F7F7EB', opacity: 0.9 }}>
              Reconnectez-vous à la nature à travers des ateliers créatifs et sensoriels. 
              De la création de kokedama aux teintures végétales, explorez le monde végétal 
              autrement.
            </p>
            
            {/* Modern Button */}
            <button 
              onClick={() => navigate('/workshops')}
              className="group mt-4 px-10 py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ 
                backgroundColor: '#8B9556',
                color: '#2D3319'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#9DAB61'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8B9556'}
            >
              Ateliers ?... Go !
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </button>
            
            {/* Workshop Tags - Centered and responsive */}
            <div className="flex flex-wrap gap-3 justify-center pt-8 max-w-3xl">
              {workshops.map((workshop, index) => (
                <Link
                  key={workshop.name}
                  to="/workshops"
                  className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md animate-fade-in"
                  style={{ 
                    backgroundColor: 'rgba(247, 247, 235, 0.15)',
                    color: '#F7F7EB',
                    border: '1px solid rgba(247, 247, 235, 0.25)',
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {workshop.name}
                </Link>
              ))}
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
                to="/philosophy" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-sage hover:bg-sage-dark text-off-white rounded-full font-semibold transition-all hover:scale-105 hover:shadow-xl"
              >
                Découvrir la philosophie
                <span className="text-xl">→</span>
              </Link>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square bg-sage/20 rounded-3xl" />
                  <div className="aspect-[4/5] bg-earth/20 rounded-3xl" />
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-[4/5] bg-accent/20 rounded-3xl" />
                  <div className="aspect-square bg-sage-dark/20 rounded-3xl" />
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
              to="/workshops" 
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
