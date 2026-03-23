import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import Testimonials from "@/components/Testimonials";
import NewsletterSignup from "@/components/NewsletterSignup";
import Marquee from "@/components/Marquee";
import CustomCursor from "@/components/CustomCursor";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import TrustBadges from "@/components/TrustBadges";
import ConferencesSavoirs from "@/components/ConferencesSavoirs";
import VideoSection from "@/components/VideoSection";
import BackToTop from "@/components/BackToTop";

import { Calendar, Users, Building2, Award } from "lucide-react";
import galleryTerrarium from "@/assets/gallery-terrarium.webp";
import ctaWorkshopGroup from "@/assets/cta-workshop-group.jpg";
import galleryTeinture from "@/assets/gallery-teinture-1.webp";
import galleryFlowerCrown from "@/assets/gallery-flower-crown.webp";
import galleryKokedamaGarden from "@/assets/gallery-kokedama-garden.webp";
import galleryWorkshopGroup from "@/assets/gallery-workshop-group.webp";
import gallerySachetSenteur from "@/assets/gallery-sachet-senteur.webp";

const Index = () => {
  const navigate = useNavigate();

  const stats = [
  { value: "50+", label: "Ateliers réalisés", icon: Calendar },
  { value: "400+", label: "Participants accompagnés", icon: Users },
  { value: "15+", label: "Partenaires de confiance", icon: Building2 },
  { value: "2023", label: "Année de création", icon: Award }];


  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SEO
        title="Ateliers Botaniques Paris & IDF | Kokedama, Teinture ✦ Réservez"
        description="🌿 Ateliers créatifs nature à Paris, Yvelines (78), Hauts-de-Seine (92) & Val-d'Oise (95). Kokedama, teinture végétale, terrarium. +400 participants. Réservez votre atelier !"
        keywords="ateliers botaniques Paris, ateliers nature Yvelines 78, ateliers Hauts-de-Seine 92, ateliers Val-d'Oise 95, kokedama Paris, teinture végétale Yvelines, vannerie Hauts-de-Seine, team building nature Paris, atelier botanique Chatou, atelier végétal Saint-Germain-en-Laye"
        canonical="/" />
      
      <SchemaOrg
        type="LocalBusiness"
        data={{
          founder: { "@type": "Person", name: "Vanessa Charlery", jobTitle: "Animatrice ethnobotaniste et Artiste Photographe" },
          makesOffer: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ateliers Kokedama", description: "Art japonais du jardinage en boule de mousse" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Teinture Végétale", description: "Techniques de teinture naturelle avec des plantes" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vannerie", description: "Tressage d'osier et fibres naturelles" } }]

        }} />
      

      <CustomCursor />
      <Navigation />

      {/* ===== HERO ===== */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[hsl(var(--black))]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
            src="/videos/hero-bg.mp4" />
          
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--black))]/20 to-[hsl(var(--black))]/55" />

        <div className="relative z-10 text-center px-6 max-w-[900px]">
          <AnimatedSection>
            <h1
              className="font-display text-[clamp(3rem,10vw,8rem)] uppercase leading-[0.9] tracking-[-3px] text-[hsl(var(--cream))] mb-6">
              
              Botanique<br />
              <span className="text-[hsl(var(--olive-light))]">Ludique</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <p className="font-body text-xl md:text-[22px] italic text-[hsl(var(--cream))]/90 max-w-[650px] mx-auto mb-3 leading-relaxed">Quand l'atelier créatif rencontre l'anthropologie de la nature

            </p>
            <p className="font-body text-[15px] md:text-base text-[hsl(var(--cream))]/70 max-w-[580px] mx-auto mb-4 leading-relaxed">
              Des ateliers accessibles qui tissent des ponts entre création artistique, savoirs botaniques et histoire des relations humains-plantes.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={250}>
            <p className="font-mono-brand text-[11px] md:text-[13px] uppercase tracking-[2px] text-[hsl(var(--olive-light))]/80 mb-2">
              Enfants · Adultes · Seniors · Écoles · EHPAD · Entreprises
            </p>
            <p className="font-mono-brand text-[13px] uppercase tracking-[3px] text-[hsl(var(--olive-light))] mb-10">
              Paris · Yvelines (78) · Hauts-de-Seine (92) · Val-d'Oise (95)
            </p>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => navigate('/workshops')}
                className="btn-brutal bg-[hsl(var(--orange))] text-[hsl(var(--cream))] border-[hsl(var(--orange))] hover:bg-[hsl(var(--cream))] hover:text-[hsl(var(--black))] hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_hsl(var(--orange))] text-sm px-9 py-4">
                
                Découvrir les ateliers →
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== MARQUEE 1 ===== */}
      <Marquee
        items={["Kokedama", "Teinture végétale", "Terrarium", "Vannerie", "Couronne de fleurs", "Sachet de senteurs"]}
        color="green"
        speed={25} />
      


      {/* ===== PRÉSENTATION + STATS ===== */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <AnimatedSection direction="left">
            <div>
              <span className="section-label block mb-3">Ethnobotanique · Création · Transmission</span>
              <h2 className="font-display text-[clamp(2rem,5vw,3rem)] uppercase leading-[0.95] tracking-[-1px] mb-3">
                Vanessa<br />Charlery
              </h2>
              <p className="font-display text-[15px] uppercase tracking-[2px] text-[hsl(var(--olive))] mb-6">
                Animatrice ethnobotaniste · Formée à l'EHESS
              </p>
              <p className="text-base leading-[1.8] text-[hsl(var(--black))]/70 mb-4 text-justify">
                Créée par <strong className="text-[hsl(var(--black))]">Vanessa Charlery</strong>, animatrice ethnobotaniste formée à l'EHESS,
                l'association Botanique Ludique propose des ateliers à Paris, Yvelines (78), Hauts-de-Seine (92) et Val-d'Oise (95)
                qui allient créativité artistique et transmission des savoirs ethnobotaniques.
              </p>
              <p className="text-base leading-[1.8] text-[hsl(var(--black))]/70 mb-6 text-justify">
                Nos ateliers s'adressent à <strong className="text-[hsl(var(--black))]">tous les publics</strong> :
                enfants dès 4 ans, adultes, seniors en résidence ou EHPAD, écoles et centres de loisirs, MJC, centres sociaux,
                associations, entreprises et collectivités. Chaque pratique explore les relations culturelles entre humains et plantes,
                de l'Asie à l'Europe.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Kokedama", "Teinture végétale", "Vannerie", "Terrarium", "Ethnobotanique"].map((tag) =>
                <span
                  key={tag}
                  className="font-mono-brand text-[10px] uppercase tracking-[1.5px] px-3.5 py-1.5 border-brutal-thin rounded-full hover:bg-[hsl(var(--black))] hover:text-[hsl(var(--cream))] transition-colors cursor-default">
                  
                    {tag}
                  </span>
                )}
              </div>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection direction="right" delay={150}>
            <div className="grid grid-cols-2 gap-0">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="p-10 border-brutal text-center -mt-[3px] -ml-[3px] hover:bg-[hsl(var(--green-pale))] transition-colors duration-300">
                    
                    <div className="flex justify-center mb-3">
                      <IconComponent className="w-5 h-5 text-[hsl(var(--olive))]" />
                    </div>
                    <AnimatedCounter
                      value={stat.value}
                      className="font-display text-3xl md:text-4xl text-[hsl(var(--black))] mb-1" />
                    
                    <div className="font-mono-brand text-[10px] uppercase tracking-[2px] text-[hsl(var(--black))]/50">
                      {stat.label}
                    </div>
                  </div>);

              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== MARQUEE 2 ===== */}
      <Marquee
        items={["Paris", "Yvelines 78", "Hauts-de-Seine 92", "Val-d'Oise 95", "Île-de-France"]}
        color="purple"
        speed={35}
        separator="◆" />
      

      {/* ===== GALERIE — Défilement continu ===== */}
      <section className="py-24 bg-[hsl(var(--cream-dark))]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="section-label block mb-3">Portfolio</span>
            <h2 className="font-display text-[clamp(2rem,5vw,3rem)] uppercase leading-[0.95] tracking-[-1px]">
              Les plus belles créations
            </h2>
          </AnimatedSection>
        </div>

        <div className="overflow-hidden mb-8">
          <div className="flex gap-4 animate-marquee" style={{ width: 'max-content' }}>
            {[
              { src: galleryTerrarium, alt: "Atelier terrarium botanique" },
              { src: galleryTeinture, alt: "Atelier teinture végétale" },
              { src: galleryFlowerCrown, alt: "Atelier couronne de fleurs" },
              { src: galleryKokedamaGarden, alt: "Kokedama dans un jardin" },
              { src: galleryWorkshopGroup, alt: "Participants en atelier kokedama" },
              { src: gallerySachetSenteur, alt: "Atelier sachets de senteurs" },
            ].map((image, index) => (
              <div key={`a-${index}`} className="flex-shrink-0 w-[300px] md:w-[380px] aspect-square overflow-hidden border-brutal">
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            )).concat(
              [
                { src: galleryTerrarium, alt: "" },
                { src: galleryTeinture, alt: "" },
                { src: galleryFlowerCrown, alt: "" },
                { src: galleryKokedamaGarden, alt: "" },
                { src: galleryWorkshopGroup, alt: "" },
                { src: gallerySachetSenteur, alt: "" },
              ].map((image, index) => (
                <div key={`b-${index}`} className="flex-shrink-0 w-[300px] md:w-[380px] aspect-square overflow-hidden border-brutal" aria-hidden="true">
                  <img src={image.src} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))
            )}
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection delay={300} className="text-center mt-8">
            <Link
              to="/gallery"
              className="btn-brutal bg-[hsl(var(--black))] text-[hsl(var(--cream))] border-[hsl(var(--black))] hover:bg-[hsl(var(--cream))] hover:text-[hsl(var(--black))] text-xs px-8 py-3 inline-block">
              
              Voir toute la galerie →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== MARQUEE 3 ===== */}
      <Marquee
        items={["Enfants", "Adultes", "Seniors", "Écoles", "Entreprises", "EHPAD", "Associations", "Collectivités"]}
        color="orange"
        speed={20}
        separator="●" />
      

      {/* ===== CONFÉRENCES & SAVOIRS ===== */}
      <ConferencesSavoirs />

      {/* ===== MARQUEE — Savoirs ===== */}
      <Marquee
        items={["Anthropologie", "Biodiversité", "Médiation scientifique", "Savoirs botaniques", "Cultures du vivant"]}
        color="green"
        speed={28} />
      

      {/* ===== TESTIMONIALS ===== */}
      <Testimonials />

      {/* ===== VIDEO SECTION ===== */}
      <VideoSection />


      {/* ===== PARTENAIRES — Défilement continu ===== */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h3 className="font-display text-2xl md:text-3xl uppercase text-center mb-10 tracking-[-1px]">
              Ils nous font confiance
            </h3>
          </AnimatedSection>
        </div>
        <div className="overflow-hidden">
          <div className="flex gap-8 items-center animate-marquee" style={{ width: 'max-content', animationDuration: '20s' }}>
            {[
              { src: "/logos/region-idf.webp", alt: "Région Île-de-France" },
              { src: "/logos/mjc-vesinet.jpg", alt: "MJC du Vésinet" },
              { src: "/logos/jappy-senior.svg", alt: "Happy Senior" },
              { src: "/logos/mjc-chatou.jpeg", alt: "MJC Chatou" },
              { src: "/logos/publicis.jpg", alt: "Publicis" },
              { src: "/logos/f93.jpg", alt: "F93" },
              { src: "/logos/bezons.svg", alt: "Ville de Bezons" },
              { src: "/logos/maurepas.png", alt: "Ville de Maurepas" },
            ].map((logo, index) => (
              <div key={`a-${index}`} className="flex-shrink-0 flex items-center justify-center p-4 border-brutal hover:-translate-y-1 hover:shadow-brutal transition-all duration-200" style={{ width: 140 }}>
                <img src={logo.src} alt={logo.alt} className="max-h-12 w-auto object-contain" loading="lazy" />
              </div>
            )).concat(
              [
                { src: "/logos/region-idf.webp", alt: "" },
                { src: "/logos/mjc-vesinet.jpg", alt: "" },
                { src: "/logos/jappy-senior.svg", alt: "" },
                { src: "/logos/mjc-chatou.jpeg", alt: "" },
                { src: "/logos/publicis.jpg", alt: "" },
                { src: "/logos/f93.jpg", alt: "" },
                { src: "/logos/bezons.svg", alt: "" },
                { src: "/logos/maurepas.png", alt: "" },
              ].map((logo, index) => (
                <div key={`b-${index}`} className="flex-shrink-0 flex items-center justify-center p-4 border-brutal" style={{ width: 140 }} aria-hidden="true">
                  <img src={logo.src} alt="" className="max-h-12 w-auto object-contain" loading="lazy" />
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ===== MARQUEE 4 ===== */}
      <Marquee
        items={["Ateliers", "Conférences", "Balades botaniques", "Team building", "Médiation"]}
        color="olive"
        speed={28} />
      

      {/* ===== CTA + NEWSLETTER ===== */}
      <section className="py-20 px-6 text-[hsl(var(--cream))] relative overflow-hidden">
        <div className="absolute inset-0 bg-[hsl(var(--black))]">
          <img
            src={ctaWorkshopGroup}
            alt=""
            className="w-full h-full object-cover opacity-35"
            loading="lazy" />
          
        </div>
        <div className="absolute inset-0 bg-[hsl(var(--black))]/40" />
        <div className="relative z-10 max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <div className="space-y-5">
              <h2 className="font-display text-3xl md:text-4xl uppercase leading-[0.95]">
                Prêt·e à explorer le monde végétal ?
              </h2>
              <p className="text-base text-[hsl(var(--cream))]/80 leading-relaxed">
                Rejoignez-nous pour un atelier à Paris, Yvelines, Hauts-de-Seine ou Val-d'Oise.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/workshops"
                  className="btn-brutal bg-[hsl(var(--olive))] text-[hsl(var(--cream))] border-[hsl(var(--olive))] hover:bg-[hsl(var(--cream))] hover:text-[hsl(var(--black))] text-xs px-7 py-3">
                  
                  Voir les ateliers →
                </Link>
                <Link
                  to="/contact"
                  className="btn-brutal bg-transparent text-[hsl(var(--cream))] border-[hsl(var(--cream))] hover:bg-[hsl(var(--cream))] hover:text-[hsl(var(--black))] text-xs px-7 py-3">
                  
                  Nous contacter
                </Link>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200} direction="right">
            <div className="border-brutal bg-[hsl(var(--cream))] text-[hsl(var(--black))] p-8 shadow-brutal-lg">
              <h3 className="font-display text-lg uppercase mb-2">Restez informé·e</h3>
              <p className="text-sm text-[hsl(var(--black))]/60 mb-5">
                Recevez nos actualités et les dates des prochains ateliers.
              </p>
              <NewsletterSignup compact />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <CookieConsent />
      <BackToTop />
    </div>);

};

export default Index;