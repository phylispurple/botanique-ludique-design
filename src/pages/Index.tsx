import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import Testimonials from "@/components/Testimonials";
import NewsletterSignup from "@/components/NewsletterSignup";

import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import TrustBadges from "@/components/TrustBadges";
import { Leaf, Users, Calendar, Building2, Award, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-test.jpg";
import galleryAtelierAdulte from "@/assets/gallery-atelier-adulte.webp";
import galleryFlowerCrown from "@/assets/gallery-flower-crown.webp";
import gallerySeedBombs from "@/assets/gallery-seed-bombs.webp";
import galleryBasketry from "@/assets/gallery-basketry.webp";
import galleryKokedamaGarden from "@/assets/gallery-kokedama-garden.webp";
import tatakiZomeImage from "@/assets/workshop-tataki-zome.webp";

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

  const stats = [
    { value: "50+", label: "Ateliers réalisés", icon: Calendar },
    { value: "400+", label: "Participants accompagnés", icon: Users },
    { value: "15+", label: "Partenaires de confiance", icon: Building2 },
    { value: "2023", label: "Année de création", icon: Award }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Ateliers Botaniques Paris & IDF | Kokedama, Teinture ✦ Réservez"
        description="🌿 Ateliers créatifs nature à Paris, Yvelines (78), Hauts-de-Seine (92) & Val-d'Oise (95). Kokedama, teinture végétale, terrarium. +400 participants. Réservez votre atelier !"
        keywords="ateliers botaniques Paris, ateliers nature Yvelines 78, ateliers Hauts-de-Seine 92, ateliers Val-d'Oise 95, kokedama Paris, teinture végétale Yvelines, vannerie Hauts-de-Seine, team building nature Paris, atelier botanique Chatou, atelier végétal Saint-Germain-en-Laye"
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
        
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-6 animate-fade-up">
            {/* Main Title - Elegant and Centered */}
            <div className="space-y-4" style={{ fontFamily: 'Fraunces, serif' }}>
              <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-wide" style={{
                color: '#F4D03F',
                lineHeight: '1.3',
                fontWeight: 400,
                textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.6)'
              }}>
                Quand l'atelier créatif rencontre l'anthropologie de la nature
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl leading-relaxed" style={{
                color: '#FDE8A3',
                lineHeight: '1.5',
                fontWeight: 300,
                opacity: 0.95,
                textShadow: '1px 1px 3px rgba(0,0,0,0.7), -1px -1px 2px rgba(0,0,0,0.5)'
              }}>
                Association d'ethnobotanique. Des ateliers qui tissent des ponts entre création artistique, savoirs botaniques et histoire des relations humains-plantes
              </h2>
            </div>
            
            {/* Description - Centered with max-width */}
            <p className="text-base sm:text-lg max-w-[650px] mx-auto pt-2 font-semibold" style={{
              color: '#FDE8A3',
              opacity: 0.95,
              lineHeight: '1.6'
            }}>
              Pour tous les publics : enfants, adultes, seniors, écoles, associations, EHPAD, entreprises et collectivités.
            </p>
            <p className="text-sm sm:text-base max-w-[550px] mx-auto" style={{
              color: '#FDE8A3',
              opacity: 0.8,
              lineHeight: '1.5'
            }}>
              À Paris, Yvelines (78), Hauts-de-Seine (92) et Val-d'Oise (95).
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

      {/* Présentation Compacte - Philosophy + Stats Combined */}
      <section className="py-20 px-4 bg-sand relative overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-sage/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-earth/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Logo et Titre */}
          <AnimatedSection className="flex flex-col items-center justify-center mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Leaf 
                className="w-12 h-12 md:w-14 md:h-14" 
                style={{ color: '#A7B795', strokeWidth: 1.5 }}
              />
              <div className="flex flex-col leading-none">
                <span className="font-serif text-3xl md:text-4xl font-light tracking-wider" style={{ color: '#5D653A' }}>
                  Botanique
                </span>
                <span className="font-serif text-3xl md:text-4xl font-light tracking-wider" style={{ color: '#5D653A' }}>
                  Ludique
                </span>
              </div>
            </div>
            <div className="w-16 h-1 bg-sage" />
          </AnimatedSection>

          {/* Contenu en deux colonnes sur desktop */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Texte de présentation */}
            <AnimatedSection delay={100} direction="left">
              <div className="space-y-5">
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  Créée par <strong>Vanessa Charlery</strong>, ethnobotaniste et anthropologue, 
                  l'association Botanique Ludique propose des ateliers à Paris, Yvelines (78), Hauts-de-Seine (92) et Val-d'Oise (95) qui allient créativité artistique et transmission 
                  des savoirs ethnobotaniques.
                </p>
                <p className="text-base text-charcoal/70 leading-relaxed">
                  Nos ateliers s'adressent à <strong>tous les publics</strong> : enfants dès 4 ans, adultes, seniors en résidence ou EHPAD, écoles et centres de loisirs, MJC, centres sociaux, associations, entreprises et collectivités. Chaque pratique explore les relations culturelles entre humains 
                  et plantes, de l'Asie à l'Europe.
                </p>
                <button 
                  onClick={handleDownloadBrochure} 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-sage hover:bg-sage-dark text-off-white rounded-full font-semibold transition-all hover:scale-105 hover:shadow-lg text-sm"
                >
                  Télécharger la plaquette
                  <span>→</span>
                </button>
              </div>
            </AnimatedSection>

            {/* Stats intégrées avec animation de comptage */}
            <AnimatedSection delay={200} direction="right">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div 
                      key={index}
                      className="text-center p-5 bg-white/60 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex justify-center mb-2">
                        <div className="p-2 rounded-full bg-sage/10 text-sage">
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>
                      <AnimatedCounter 
                        value={stat.value}
                        className="text-2xl md:text-3xl font-bold text-charcoal mb-1"
                        style={{ fontFamily: 'Fraunces, serif' }}
                      />
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Gallery Preview Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-sand/30">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-10">
            <h2 
              className="text-2xl md:text-3xl mb-3 text-charcoal"
              style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}
            >
              Inspirez-vous : Les plus belles créations
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Découvrez l'ambiance de nos ateliers et les magnifiques résultats
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {[
              { src: galleryAtelierAdulte, alt: "Participants pendant un atelier" },
              { src: galleryFlowerCrown, alt: "Atelier couronne de fleurs" },
              { src: galleryKokedamaGarden, alt: "Kokedama dans un jardin" },
              { src: tatakiZomeImage, alt: "Atelier Tataki Zome" },
              { src: gallerySeedBombs, alt: "Fabrication de bombes à graines" },
              { src: galleryBasketry, alt: "Atelier vannerie" }
            ].map((image, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 shadow-md">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection delay={600} className="text-center">
            <Link 
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sage hover:bg-sage-dark text-white rounded-full font-semibold transition-all hover:scale-105 hover:shadow-lg text-sm"
            >
              Voir toute la galerie
              <span>→</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Trust Badges Section */}
      <section className="py-8 px-4 bg-sage/5">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <TrustBadges variant="premium" showAll={true} />
          </AnimatedSection>
        </div>
      </section>
      
      {/* Partners Section - Ils nous font confiance */}
      <section className="py-16 px-4" style={{ backgroundColor: '#F7F7EB' }}>
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <h3 className="text-2xl md:text-3xl text-charcoal text-center mb-8" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>
              Ils nous font confiance
            </h3>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 items-center">
              {[
                { src: "/logos/region-idf.webp", alt: "Région Île-de-France" },
                { src: "/logos/mjc-vesinet.jpg", alt: "MJC du Vésinet" },
                { src: "/logos/jappy-senior.svg", alt: "Happy Senior" },
                { src: "/logos/mjc-chatou.jpeg", alt: "MJC Chatou" },
                { src: "/logos/publicis.jpg", alt: "Publicis" },
                { src: "/logos/f93.jpg", alt: "F93" }
              ].map((logo, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <img src={logo.src} alt={logo.alt} className="max-h-12 w-auto object-contain" loading="lazy" />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* CTA Final + Newsletter Combined */}
      <section className="py-16 px-4 relative overflow-hidden" style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* CTA */}
            <AnimatedSection direction="left">
              <div className="text-center md:text-left space-y-4">
                <h2 className="text-3xl md:text-4xl" style={{
                  fontFamily: 'Fraunces, serif',
                  fontWeight: 400,
                  color: '#F7F7EB'
                }}>
                  Prêt·e à explorer le monde végétal ?
                </h2>
                <p className="text-base" style={{
                  color: '#F7F7EB',
                  opacity: 0.9
                }}>
                  Rejoignez-nous pour un atelier à Paris, Yvelines, Hauts-de-Seine ou Val-d'Oise.
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
                  <Link to="/workshops" className="px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105 hover:shadow-lg" style={{
                    backgroundColor: '#C9D2B5',
                    color: '#2B2B2B'
                  }}>
                    Voir les ateliers
                  </Link>
                  <Link to="/contact" className="px-6 py-3 bg-transparent border-2 border-off-white rounded-full font-semibold text-sm transition-all hover:scale-105" style={{
                    color: '#F7F7EB'
                  }}>
                    Nous contacter
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Newsletter Compact */}
            <AnimatedSection delay={200} direction="right">
              <div className="bg-white/95 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-2 mb-3">
                  <Mail className="w-5 h-5 text-sage" />
                  <h3 className="text-lg font-semibold text-charcoal" style={{ fontFamily: 'Fraunces, serif' }}>
                    Restez informé·e
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Recevez nos actualités et les dates des prochains ateliers.
                </p>
                <NewsletterSignup compact />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
