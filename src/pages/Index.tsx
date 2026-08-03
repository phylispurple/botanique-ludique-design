import { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import Testimonials from "@/components/Testimonials";
import NewsletterSignup from "@/components/NewsletterSignup";
import Marquee from "@/components/Marquee";

import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import TrustBadges from "@/components/TrustBadges";
import ConferencesSavoirs from "@/components/ConferencesSavoirs";
import VideoSection from "@/components/VideoSection";
import BackToTop from "@/components/BackToTop";

import { Calendar, Users, Building2, Award } from "lucide-react";
import assuranceMaladieLogo from "@/assets/logo-assurance-maladie.png";
import galleryTerrarium from "@/assets/gallery-terrarium.webp";
import ctaWorkshopGroup from "@/assets/cta-workshop-group.jpg";
import galleryTeinture from "@/assets/gallery-teinture-1.webp";
import galleryFlowerCrown from "@/assets/gallery-flower-crown.webp";
import galleryKokedamaGarden from "@/assets/gallery-kokedama-garden.webp";
import galleryWorkshopGroup from "@/assets/gallery-workshop-group.webp";
import gallerySachetSenteur from "@/assets/gallery-sachet-senteur.webp";
import galleryMiniTerrarium from "@/assets/gallery-mini-terrarium.jpeg";
import PhotoCarousel from "@/components/PhotoCarousel";

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const tryScroll = (retries = 0) => {
        const el = document.getElementById(id);
        if (el) {
          const pos = el.getBoundingClientRect().top + window.pageYOffset - 64;
          window.scrollTo({ top: pos, behavior: 'smooth' });
        } else if (retries < 15) {
          setTimeout(() => tryScroll(retries + 1), 150);
        }
      };
      setTimeout(() => tryScroll(), 200);
    }
  }, [location.hash]);

  const stats = [
    { value: "50+", label: "Ateliers réalisés", icon: Calendar },
    { value: "400+", label: "Participants accompagnés", icon: Users },
    { value: "15+", label: "Partenaires de confiance", icon: Building2 },
    { value: "2023", label: "Année de création", icon: Award },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Botanique Ludique — Ateliers de botanique, conférences & balades guidées · Le Pecq (78)"
        description="Médiation culturelle autour du vivant. Ateliers pour scolaires, entreprises et grand public. Conférences avec chercheurs et artistes. Île-de-France."
        keywords="ateliers botaniques Paris, ateliers nature Yvelines 78, ateliers Hauts-de-Seine 92, ateliers Val-d'Oise 95, kokedama Paris, teinture végétale Yvelines, médiation scientifique, conférence botanique Île-de-France"
        canonical="/"
      />
      <SchemaOrg type="EducationalOrganization" data={{}} />
      <SchemaOrg type="LocalBusiness" data={{}} />

      <Navigation />

      {/* ===== HERO ===== */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-foreground">
          <video
            autoPlay loop muted playsInline
            preload="auto"
            className="w-full h-full object-cover opacity-60"
            src="/videos/hero-bg.mp4"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 to-foreground/55" />

        <div className="relative z-10 text-center px-6 max-w-[900px]">
          <AnimatedSection>
            <h1 className="font-display text-[clamp(3rem,10vw,8rem)] uppercase leading-[0.9] tracking-[-3px] text-primary-foreground mb-6">
              Botanique<br />
              <span className="text-olive-light">Ludique</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <p className="font-body text-xl md:text-[22px] italic text-primary-foreground/90 max-w-[650px] mx-auto mb-3 leading-relaxed">
              Quand l'atelier créatif rencontre l'anthropologie de la nature
            </p>
            <p className="font-body text-[15px] md:text-base text-primary-foreground/70 max-w-[580px] mx-auto mb-4 leading-relaxed">
              Des ateliers accessibles qui tissent des ponts entre création artistique, savoirs botaniques et histoire des relations humains-plantes.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={250}>
            <p className="font-mono-brand text-[11px] md:text-[13px] uppercase tracking-[2px] text-olive-light/80 mb-2">
              Enfants · Adultes · Seniors · Écoles · EHPAD · Entreprises
            </p>
            <p className="font-mono-brand text-[13px] uppercase tracking-[3px] text-olive-light mb-10">
              Paris · Yvelines (78) · Hauts-de-Seine (92) · Val-d'Oise (95)
            </p>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="flex flex-wrap gap-6 justify-center">
              <button
                onClick={() => navigate('/workshops')}
                className="btn-brutal bg-accent text-accent-foreground border-accent hover:bg-primary-foreground hover:text-foreground hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_hsl(var(--accent))] text-xs px-6 py-2.5"
              >
                Découvrir les ateliers →
              </button>
              <button
                onClick={() => navigate('/#mediation')}
                className="btn-brutal bg-[hsl(210_41%_24%)] text-[hsl(var(--cream))] border-[hsl(210_41%_24%)] hover:bg-[hsl(var(--cream))] hover:text-[hsl(210_41%_24%)] hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_hsl(210_41%_24%)] text-xs px-6 py-2.5"
              >
                Médiation & Savoirs →
              </button>
              <button
                onClick={() => navigate('/agenda')}
                className="btn-brutal bg-primary text-primary-foreground border-primary hover:bg-primary/80 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_hsl(var(--olive))] text-xs px-6 py-2.5"
              >
                Agenda & Inscriptions →
              </button>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-gentle">
          <span className="font-mono-brand text-[9px] uppercase tracking-[3px] text-primary-foreground/50">
            Explorer
          </span>
          <svg width="20" height="28" viewBox="0 0 20 28" fill="none" className="text-primary-foreground/40">
            <path d="M10 0v22M2 16l8 8 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* ===== ORGANIC DIVIDER ===== */}
      <div className="relative h-16 md:h-24 bg-background -mt-1">
        <svg
          viewBox="0 0 1440 96"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
          aria-hidden="true"
        >
          <path
            d="M0,0 C240,80 480,96 720,64 C960,32 1200,80 1440,0 L1440,0 L0,0 Z"
            fill="hsl(var(--black))"
            fillOpacity="0.85"
          />
        </svg>
      </div>

      {/* ===== MARQUEE ===== */}
      <Marquee
        items={["Kokedama", "Teinture végétale", "Terrarium", "Vannerie", "Couronne de fleurs", "Sachet de senteurs", "Ethnographie", "Médiation", "Balade botanique"]}
        color="green"
        speed={25}
      />

      {/* ===== PRÉSENTATION + STATS ===== */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          {/* Text */}
          <AnimatedSection direction="left">
            <div>
              <span className="section-label block mb-3">Ethnobotanique · Création · Transmission</span>
              <h2 className="font-display text-[clamp(2rem,5vw,3rem)] uppercase leading-[0.95] tracking-[-1px] mb-3">
                Vanessa<br />Charlery
              </h2>
              <p className="font-display text-[15px] uppercase tracking-[2px] text-primary mb-6">
                Animatrice ethnobotaniste · Formée à l'EHESS
              </p>
              <p className="text-base leading-[1.8] text-foreground/70 mb-4 text-justify">
                Créée par <strong className="text-foreground">Vanessa Charlery</strong>, animatrice ethnobotaniste formée à l'EHESS,
                Botanique Ludique propose des ateliers à Paris, Yvelines (78), Hauts-de-Seine (92) et Val-d'Oise (95)
                qui allient créativité artistique et transmission des savoirs ethnobotaniques.
              </p>
              <p className="text-base leading-[1.8] text-foreground/70 mb-6 text-justify">
                Nos ateliers s'adressent à <strong className="text-foreground">tous les publics</strong> :
                enfants dès 4 ans, adultes, seniors en résidence ou EHPAD, écoles et centres de loisirs, MJC, centres sociaux,
                associations, entreprises et collectivités. Chaque pratique explore les relations culturelles entre humains et plantes,
                de l'Asie à l'Europe.
              </p>
              <p className="text-base leading-[1.8] text-foreground/70 mb-6 text-justify">
                Pour les entreprises et CSE, nous concevons des animations végétales clés en main :{" "}
                <Link to="/atelier-terrarium-team-building" className="underline underline-offset-4 text-foreground hover:text-primary transition-colors">
                  découvrir notre atelier team building
                </Link>.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Kokedama", "Teinture végétale", "Vannerie", "Terrarium", "Ethnobotanique"].map((tag) => (
                  <span
                    key={tag}
                    className="font-mono-brand text-[10px] uppercase tracking-[1.5px] px-3.5 py-1.5 border-brutal-thin rounded-full hover:bg-foreground hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
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
                    className="p-6 md:p-8 border-brutal text-center -mt-[3px] -ml-[3px] hover:bg-green-pale transition-colors duration-300 relative overflow-hidden group"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    <div className="flex justify-center mb-3">
                      <IconComponent className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <AnimatedCounter
                      value={stat.value}
                      className="font-display text-3xl md:text-4xl text-foreground mb-1"
                    />
                    <div className="font-mono-brand text-[10px] uppercase tracking-[2px] text-foreground/50">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== GALERIE — Défilement continu ===== */}
      <section className="py-28 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <span className="section-label block mb-3">Portfolio</span>
            <h2 className="font-display text-[clamp(2rem,5vw,3rem)] uppercase leading-[0.95] tracking-[-1px]">
              Les plus belles créations
            </h2>
          </AnimatedSection>
        </div>

        <PhotoCarousel
          images={[
            { src: galleryTerrarium, alt: "Atelier terrarium botanique — Botanique Ludique, Le Pecq" },
            { src: galleryTeinture, alt: "Atelier teinture végétale naturelle — Botanique Ludique, Île-de-France" },
            { src: galleryFlowerCrown, alt: "Atelier couronne de fleurs — Botanique Ludique, Paris" },
            { src: galleryKokedamaGarden, alt: "Kokedama dans un jardin botanique — Botanique Ludique, Yvelines" },
            { src: galleryWorkshopGroup, alt: "Participants en atelier kokedama — Botanique Ludique" },
            { src: gallerySachetSenteur, alt: "Atelier sachets de senteurs naturels — Botanique Ludique" },
            { src: galleryMiniTerrarium, alt: "Mini terrarium en bocal — Botanique Ludique" },
          ]}
        />

        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection delay={300} className="text-center mt-8">
            <Link
              to="/gallery"
              className="btn-brutal bg-foreground text-primary-foreground border-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-8 py-3 inline-block"
            >
              Voir toute la galerie →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CONFÉRENCES & SAVOIRS ===== */}
      <ConferencesSavoirs />

      {/* ===== TESTIMONIALS ===== */}
      <Testimonials />

      {/* ===== MARQUEE 2 ===== */}
      <Marquee
        items={["Enfants", "Adultes", "Seniors", "Écoles", "Entreprises", "EHPAD", "Associations", "Collectivités"]}
        color="olive"
        speed={20}
        separator="●"
      />

      {/* ===== VIDEO SECTION ===== */}
      <VideoSection />

      {/* ===== PARTENAIRES — Défilement continu ===== */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h3 className="font-display text-2xl md:text-3xl uppercase text-center mb-12 tracking-[-1px]">
              Ils nous font confiance
            </h3>
          </AnimatedSection>
        </div>
        <div className="overflow-hidden">
          <div className="flex gap-8 items-center animate-marquee" style={{ width: 'max-content', animationDuration: '20s' }}>
            {[
              { src: assuranceMaladieLogo, alt: "l'Assurance Maladie" },
              { src: "/logos/region-idf.webp", alt: "Région Île-de-France" },
              { src: "/logos/mjc-vesinet.jpg", alt: "MJC du Vésinet" },
              { src: "/logos/jappy-senior.svg", alt: "Happy Senior" },
              { src: "/logos/mjc-chatou.jpeg", alt: "MJC Chatou" },
              { src: "/logos/f93.jpg", alt: "F93" },
              { src: "/logos/bezons.svg", alt: "Ville de Bezons" },
              { src: "/logos/maurepas.png", alt: "Ville de Maurepas" },
              { src: "/logos/la-roche.png", alt: "La Roche" },
              { src: "/logos/ecole-du-breuil.jpg", alt: "École Du Breuil" },
            ].map((logo, index) => (
              <div key={`a-${index}`} className="flex-shrink-0 aspect-square flex items-center justify-center p-5 border-brutal bg-[hsl(var(--cream))] hover:-translate-y-2 hover:shadow-brutal-lg transition-all duration-300 group" style={{ width: 140, height: 140 }}>
                <img src={logo.src} alt={logo.alt} className="max-h-16 max-w-[100px] w-auto h-auto object-contain grayscale-[30%] group-hover:grayscale-0 transition-all duration-300" loading="lazy" />
              </div>
            )).concat(
              [
                { src: assuranceMaladieLogo, alt: "" },
                { src: "/logos/region-idf.webp", alt: "" },
                { src: "/logos/mjc-vesinet.jpg", alt: "" },
                { src: "/logos/jappy-senior.svg", alt: "" },
                { src: "/logos/mjc-chatou.jpeg", alt: "" },
                { src: "/logos/f93.jpg", alt: "" },
                { src: "/logos/bezons.svg", alt: "" },
                { src: "/logos/maurepas.png", alt: "" },
                { src: "/logos/la-roche.png", alt: "" },
                { src: "/logos/ecole-du-breuil.jpg", alt: "" },
              ].map((logo, index) => (
                <div key={`b-${index}`} className="flex-shrink-0 aspect-square flex items-center justify-center p-5 border-brutal bg-[hsl(var(--cream))]" style={{ width: 140, height: 140 }} aria-hidden="true">
                  <img src={logo.src} alt="" className="max-h-16 max-w-[100px] w-auto h-auto object-contain grayscale-[30%]" loading="lazy" />
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ===== CTA + NEWSLETTER ===== */}
      <section className="py-24 px-6 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-foreground">
          <img
            src={ctaWorkshopGroup}
            alt=""
            className="w-full h-full object-cover opacity-35"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <div className="space-y-5">
              <h2 className="font-display text-3xl md:text-4xl uppercase leading-[0.95]">
                Prêt·e à explorer le monde végétal ?
              </h2>
              <p className="text-base text-primary-foreground/80 leading-relaxed">
                Rejoignez-nous pour un atelier à Paris, Yvelines, Hauts-de-Seine ou Val-d'Oise.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/workshops"
                  className="btn-brutal bg-primary text-primary-foreground border-primary hover:bg-primary-foreground hover:text-foreground text-xs px-7 py-3"
                >
                  Voir les ateliers →
                </Link>
                <Link
                  to="/contact"
                  className="btn-brutal bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-7 py-3"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200} direction="right">
            <div className="border-brutal bg-primary-foreground text-foreground p-8 shadow-brutal-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />
              <h3 className="font-display text-lg uppercase mb-2">Restez informé·e</h3>
              <p className="text-sm text-foreground/60 mb-5">
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
    </div>
  );
};

export default Index;
