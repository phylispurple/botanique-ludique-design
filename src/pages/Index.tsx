import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import Testimonials from "@/components/Testimonials";
import NewsletterSignup from "@/components/NewsletterSignup";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Leaf } from "lucide-react";
import heroBackground from "@/assets/hero-background.png";
import galleryAtelierAdulte from "@/assets/gallery-atelier-adulte.jpg";
import galleryFlowerCrown from "@/assets/gallery-flower-crown.jpg";
import gallerySeedBombs from "@/assets/gallery-seed-bombs.jpg";
import galleryBasketry from "@/assets/gallery-basketry.jpg";

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
      <SEO 
        title="Botanique Ludique - Ateliers Botaniques à Paris"
        description="Ateliers botaniques créatifs à Paris et en Île-de-France. Kokedama, teinture végétale, vannerie, terrarium, éco-construction. Ethnobotanique par la création artistique."
        keywords="ateliers botaniques Paris, kokedama, teinture végétale, vannerie, terrarium, ethnobotanique, ateliers nature Paris"
        canonical="/"
      />
      <SchemaOrg 
        type="LocalBusiness"
        data={{
          "founder": {
            "@type": "Person",
            "name": "Vanessa Charlery",
            "jobTitle": "Ethnobotaniste et Artiste Photographe"
          },
          "makesOffer": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Ateliers Kokedama",
                "description": "Art japonais du jardinage en boule de mousse"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Teinture Végétale",
                "description": "Techniques de teinture naturelle avec des plantes"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Vannerie",
                "description": "Tressage d'osier et fibres naturelles"
              }
            }
          ]
        }}
      />
      <Navigation />
      
      {/* Hero Section - Centered Minimal Design */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: '15%',
        paddingBottom: '10%'
      }}>
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
            <div className="space-y-4" style={{ fontFamily: 'Fraunces, serif' }}>
              <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-wide" style={{
                color: '#F7F7EB',
                lineHeight: '1.3',
                fontWeight: 400
              }}>
                Botanique Ludique : L'Art de créer et de reconnecter à la Nature
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl leading-relaxed" style={{
                color: '#F7F7EB',
                lineHeight: '1.5',
                fontWeight: 300,
                opacity: 0.95
              }}>
                Découvrez des ateliers créatifs pour tous, de l'herbier au Kokédama
              </h2>
            </div>
            
            {/* Description - Centered with max-width */}
            <p className="text-base sm:text-lg max-w-[650px] mx-auto pt-2 font-semibold" style={{
              color: '#F7F7EB',
              opacity: 0.95,
              lineHeight: '1.6'
            }}>
              Ateliers disponibles pour les particuliers et les entreprises en Île-de-France.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <button
                onClick={() => navigate('/workshops')}
                className="px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #F4D03F 0%, #F39C12 100%)',
                  color: '#2A3A2E',
                  border: '3px solid #2A3A2E'
                }}
              >
                Découvrir les ateliers
              </button>
              
              <button
                onClick={() => navigate('/b2b')}
                className="px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  color: '#2A3A2E',
                  border: '2px solid #9EB384'
                }}
              >
                Organiser un Team Building
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Preview Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-sand/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl mb-4 text-charcoal"
              style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}
            >
              Inspirez-vous : Les plus belles créations de nos participants
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Découvrez l'ambiance de nos ateliers, les processus créatifs et les magnifiques résultats
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 shadow-md">
              <img 
                src={galleryAtelierAdulte}
                alt="Participants pendant un atelier"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 shadow-md">
              <img 
                src={galleryFlowerCrown}
                alt="Atelier couronne de fleurs"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 shadow-md">
              <img 
                src={gallerySeedBombs}
                alt="Fabrication de bombes à graines"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 shadow-md">
              <img 
                src={galleryBasketry}
                alt="Atelier vannerie"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              to="/gallery"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sage hover:bg-sage-dark text-white rounded-full font-semibold transition-all hover:scale-105 hover:shadow-xl"
            >
              Voir toute la galerie
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Philosophy Section - Présentation Botanique Ludique */}
      <section className="bg-sand py-32 px-4 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-sage/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-earth/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Leaf 
                  className="w-14 h-14 md:w-16 md:h-16" 
                  style={{ color: '#A7B795', strokeWidth: 1.5 }}
                />
                <div className="flex flex-col leading-none">
                  <span className="font-serif text-4xl md:text-5xl font-light tracking-wider" style={{ color: '#5D653A' }}>
                    Botanique
                  </span>
                  <span className="font-serif text-4xl md:text-5xl font-light tracking-wider" style={{ color: '#5D653A' }}>
                    Ludique
                  </span>
                </div>
              </div>
              <div className="w-20 h-1 bg-sage" />
            </div>
            
            <div className="space-y-6 mb-8">
              <p className="text-lg text-charcoal/80 leading-relaxed">
                Créée par <strong>Vanessa Charlery</strong>, ethnobotaniste et anthropologue, 
                Botanique Ludique propose des ateliers qui allient créativité artistique et transmission 
                des savoirs ethnobotaniques. Chaque pratique explore les relations culturelles entre humains 
                et plantes, de l'Asie à l'Europe.
              </p>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                Au-delà du simple geste créatif, ces ateliers offrent une compréhension profonde 
                des usages traditionnels, des symboliques végétales et des pratiques ancestrales. 
                Une approche pédagogique qui enrichit l'expérience artistique d'une dimension culturelle et scientifique.
              </p>
            </div>
            
            <button 
              onClick={handleDownloadBrochure} 
              className="inline-flex items-center gap-2 px-8 py-4 bg-sage hover:bg-sage-dark text-off-white rounded-full font-semibold transition-all hover:scale-105 hover:shadow-xl"
            >
              Télécharger la plaquette
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Partners Section - Ils nous font confiance */}
      <section className="py-24 px-4" style={{ backgroundColor: '#F7F7EB' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-8 animate-fade-in">
            <h3 className="text-3xl md:text-4xl text-charcoal text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>
              Ils nous font confiance
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center max-w-5xl mx-auto">
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
              <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <img src="/logos/publicis.jpg" alt="Publicis" className="max-h-16 w-auto object-contain" />
              </div>
              <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <img src="/logos/f93.jpg" alt="F93" className="max-h-16 w-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-24 px-4 relative overflow-hidden" style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container mx-auto text-center max-w-3xl space-y-8">
          <h2 className="text-4xl md:text-5xl" style={{
            fontFamily: 'Fraunces, serif',
            fontWeight: 400,
            color: '#F7F7EB'
          }}>
            Prêt·e à explorer le monde végétal ?
          </h2>
          <p className="text-xl" style={{
            color: '#F7F7EB',
            opacity: 0.9
          }}>
            Rejoignez-nous pour un atelier et découvrez une nouvelle façon 
            de créer avec la nature.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Link to="/workshops" className="px-10 py-5 rounded-full font-semibold text-lg transition-all hover:scale-105 hover:shadow-2xl" style={{
              backgroundColor: '#C9D2B5',
              color: '#2B2B2B'
            }}>
              Voir tous les ateliers
            </Link>
            <Link to="/contact" className="px-10 py-5 bg-transparent rounded-full font-semibold text-lg transition-all hover:scale-105" style={{
              border: '2px solid #F7F7EB',
              color: '#F7F7EB'
            }}>
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 px-4" style={{ backgroundColor: '#F7F7EB' }}>
        <div className="container mx-auto max-w-4xl">
          <NewsletterSignup />
        </div>
      </section>
      
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
