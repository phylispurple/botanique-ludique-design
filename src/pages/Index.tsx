import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import heroBackground from "@/assets/hero-background.png";

const Index = () => {
  const navigate = useNavigate();

  const handleDownloadBrochure = async () => {
    try {
      const response = await fetch('/Plaquette_Botanique_ludique_2025-26.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Plaquette_Botanique_ludique_2025-26.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Erreur lors du téléchargement:', error);
    }
  };

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
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundImage: `url(${heroBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '15%', paddingBottom: '10%' }}>
        {/* Decorative bubbles - soft green tones with drift animation and varied sizes */}
        <div className="absolute top-20 right-[15%] w-28 h-28 rounded-full bg-[#CAD2B0] opacity-22 animate-drift" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-32 left-[10%] w-36 h-36 rounded-full bg-[#9EB388] opacity-12 animate-drift-slow" style={{ animationDelay: '5s' }} />
        <div className="absolute top-1/3 right-[25%] w-20 h-20 rounded-full bg-[#E2E7D1] opacity-28 animate-drift" style={{ animationDelay: '10s' }} />
        <div className="absolute bottom-1/4 right-[35%] w-16 h-16 rounded-full bg-[#CAD2B0] opacity-15 animate-drift-slow" style={{ animationDelay: '15s' }} />
        <div className="absolute top-1/2 left-[20%] w-32 h-32 rounded-full bg-[#C9D2B5] opacity-10 animate-drift" style={{ animationDelay: '20s' }} />
        <div className="absolute top-[15%] left-[35%] w-24 h-24 rounded-full bg-[#E2E7D1] opacity-18 animate-drift-slow" style={{ animationDelay: '12s' }} />
        <div className="absolute bottom-[20%] right-[18%] w-20 h-20 rounded-full bg-[#9EB388] opacity-20 animate-drift" style={{ animationDelay: '8s' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-6 animate-fade-up">
            {/* Main Title - Elegant and Centered */}
            <div className="space-y-2" style={{ fontFamily: 'Fraunces, serif' }}>
              <h1 className="text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-wide" style={{ color: '#F7F7EB', lineHeight: '1.2', fontWeight: 400 }}>
                Les Ateliers
              </h1>
              <h2 className="text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-wide" style={{ color: '#F7F7EB', lineHeight: '1.2', fontWeight: 400 }}>
                qui font vivre
              </h2>
              <h2 className="text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-wide" style={{ color: '#F7F7EB', lineHeight: '1.2', fontWeight: 400 }}>
                la nature.
              </h2>
            </div>
            
            {/* Description - Centered with max-width */}
            <p className="text-lg sm:text-xl max-w-[700px] mx-auto pt-4" style={{ color: '#F7F7EB', opacity: 0.9, lineHeight: '1.7' }}>
              Reconnectez-vous à la nature à travers des ateliers créatifs et sensoriels. 
              De la création de kokedama aux teintures végétales, explorez le monde végétal 
              autrement.
            </p>
            
            {/* Manifesto - moved up slightly */}
            <p className="text-base sm:text-lg italic max-w-[600px] mx-auto -mt-1" style={{ color: '#E2E7D1', opacity: 0.85, lineHeight: '1.6', fontFamily: 'Fraunces, serif' }}>
              Réapprendre à vivre avec le végétal, par le geste, la beauté et la lenteur.
            </p>
            
            {/* Modern Button - improved contrast */}
            <button 
              onClick={() => navigate('/workshops')}
              className="group mt-6 px-10 py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ 
                backgroundColor: '#C9D2B5',
                color: '#2B2B2B'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A7B795'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#C9D2B5'}
            >
              Découvrir les ateliers
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
              <button 
                onClick={handleDownloadBrochure}
                className="inline-flex items-center gap-2 px-8 py-4 bg-sage hover:bg-sage-dark text-off-white rounded-full font-semibold transition-all hover:scale-105 hover:shadow-xl"
              >
                Télécharger la plaquette
                <span className="text-xl">→</span>
              </button>
            </div>
            
            {/* Ils nous font confiance Section */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-charcoal text-center lg:text-left">
                Ils nous font confiance
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
                <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <img src="/logos/region-idf.webp" alt="Région Île-de-France" className="max-h-16 w-auto object-contain" />
                </div>
                <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <img src="/logos/mjc-vesinet.jpg" alt="MJC du Vésinet" className="max-h-16 w-auto object-contain" />
                </div>
                <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <img src="/logos/jappy-senior.svg" alt="Happy Senior" className="max-h-16 w-auto object-contain" />
                </div>
                <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <img src="/logos/mjc-chatou.jpeg" alt="MJC Chatou" className="max-h-16 w-auto object-contain" />
                </div>
                <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
                  <img src="/logos/publicis.jpg" alt="Publicis" className="max-h-16 w-auto object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-24 px-4 relative overflow-hidden" style={{ backgroundImage: `url(${heroBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto text-center max-w-3xl space-y-8">
          <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#F7F7EB' }}>
            Prêt·e à explorer le monde végétal ?
          </h2>
          <p className="text-xl" style={{ color: '#F7F7EB', opacity: 0.9 }}>
            Rejoignez-nous pour un atelier et découvrez une nouvelle façon 
            de créer avec la nature.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Link 
              to="/workshops" 
              className="px-10 py-5 rounded-full font-semibold text-lg transition-all hover:scale-105 hover:shadow-2xl"
              style={{ backgroundColor: '#C9D2B5', color: '#2B2B2B' }}
            >
              Voir tous les ateliers
            </Link>
            <Link 
              to="/contact" 
              className="px-10 py-5 bg-transparent rounded-full font-semibold text-lg transition-all hover:scale-105"
              style={{ border: '2px solid #F7F7EB', color: '#F7F7EB' }}
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
