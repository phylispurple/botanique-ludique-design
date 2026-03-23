import { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import Testimonials from "@/components/Testimonials";
import NewsletterSignup from "@/components/NewsletterSignup";
import Marquee from "@/components/Marquee";

import AnimatedSection from "@/components/AnimatedSection";
import { StaggerContainer, StaggerItem } from "@/components/StaggerAnimation";
import AnimatedCounter from "@/components/AnimatedCounter";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
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
    { value: "400+", label: "Participants", icon: Users },
    { value: "15+", label: "Partenaires", icon: Building2 },
    { value: "2023", label: "Création", icon: Award },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Botanique Ludique — Ateliers de botanique, conférences & balades guidées · Le Pecq (78)"
        description="Association de médiation culturelle autour du vivant. Ateliers pour scolaires, entreprises et grand public. Conférences avec chercheurs et artistes. Île-de-France."
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
            className="w-full h-full object-cover opacity-60"
            src="/videos/hero-bg.mp4"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-transparent to-foreground/60" />

        <div className="relative z-10 text-center px-6 max-w-[900px]">
          {/* Staggered hero text reveal */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
            }}
          >
            <motion.h1
              className="font-display text-[clamp(3.5rem,11vw,9rem)] uppercase leading-[0.85] tracking-[-4px] text-primary-foreground mb-8"
              variants={{
                hidden: { opacity: 0, y: 80, clipPath: 'inset(100% 0% 0% 0%)' },
                visible: { opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)', transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] } },
              }}
            >
              Botanique<br />
              <span className="text-olive-light">Ludique</span>
            </motion.h1>

            <motion.p
              className="font-editorial text-xl md:text-2xl italic text-primary-foreground/90 max-w-[620px] mx-auto mb-4 leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
              }}
            >
              Quand l'atelier créatif rencontre l'anthropologie de la nature
            </motion.p>

            <motion.p
              className="font-mono-brand text-[12px] uppercase tracking-[3px] text-olive-light/80 mb-12"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 1, delay: 0.2 } },
              }}
            >
              Paris · Yvelines (78) · Hauts-de-Seine (92) · Val-d'Oise (95)
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
            >
              <button
                onClick={() => navigate('/workshops')}
                className="btn-brutal bg-accent text-accent-foreground border-accent hover:bg-primary-foreground hover:text-foreground hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_hsl(var(--accent))] text-sm px-9 py-4"
              >
                Découvrir les ateliers →
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            className="w-[1px] h-12 bg-primary-foreground/30"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: 'top' }}
          />
        </motion.div>
      </section>

      {/* ===== MARQUEE ===== */}
      <Marquee
        items={["Kokedama", "Teinture végétale", "Terrarium", "Vannerie", "Couronne de fleurs", "Sachet de senteurs"]}
        color="green"
        speed={25}
      />

      {/* ===== PRÉSENTATION — Asymétrique ===== */}
      <section className="py-32 md:py-40 px-6 md:px-16 lg:px-[120px]">
        <div className="max-w-7xl mx-auto">
          {/* Top: Large text + small stats strip */}
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-16 lg:gap-24 items-end">
            <AnimatedSection variant="reveal">
              <div>
                <span className="section-label block mb-4">Ethnobotanique · Création · Transmission</span>
                <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] uppercase leading-[0.9] tracking-[-2px] mb-6">
                  Vanessa<br />Charlery
                </h2>
                <p className="font-display text-[14px] uppercase tracking-[2px] text-primary mb-8">
                  Animatrice ethnobotaniste · Formée à l'EHESS
                </p>
                <p className="text-[17px] leading-[1.85] text-foreground/65 max-w-[540px]">
                  Créée par <strong className="text-foreground">Vanessa Charlery</strong>, l'association
                  Botanique Ludique propose des ateliers qui allient créativité artistique
                  et transmission des savoirs ethnobotaniques — à Paris, Yvelines, Hauts-de-Seine et Val-d'Oise.
                </p>
              </div>
            </AnimatedSection>

            {/* Stats — stacked vertically, right-aligned */}
            <StaggerContainer className="flex flex-col gap-0" staggerDelay={0.08}>
              {stats.map((stat) => {
                const IconComponent = stat.icon;
                return (
                  <StaggerItem key={stat.label}>
                    <div className="flex items-center justify-between p-5 border-brutal -mt-[3px] hover:bg-green-pale transition-colors duration-300">
                      <div className="flex items-center gap-3">
                        <IconComponent className="w-4 h-4 text-primary" />
                        <span className="font-mono-brand text-[10px] uppercase tracking-[2px] text-foreground/50">
                          {stat.label}
                        </span>
                      </div>
                      <AnimatedCounter
                        value={stat.value}
                        className="font-display text-2xl text-foreground"
                      />
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          {/* Bottom: Tags + audience */}
          <AnimatedSection delay={300} className="mt-16">
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
              <div className="flex flex-wrap gap-2">
                {["Kokedama", "Teinture végétale", "Vannerie", "Terrarium", "Ethnobotanique"].map((tag) => (
                  <span
                    key={tag}
                    className="font-mono-brand text-[10px] uppercase tracking-[1.5px] px-3.5 py-1.5 border-brutal-thin rounded-full hover:bg-foreground hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="font-mono-brand text-[11px] uppercase tracking-[2px] text-foreground/40">
                Enfants · Adultes · Seniors · Écoles · EHPAD · Entreprises
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== GALERIE — Full-width immersive ===== */}
      <section className="py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-[120px]">
          <AnimatedSection variant="reveal" className="mb-14">
            <span className="section-label block mb-3">Portfolio</span>
            <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] uppercase leading-[0.9] tracking-[-2px]">
              Les plus belles<br />créations
            </h2>
          </AnimatedSection>
        </div>

        <div className="overflow-hidden mb-10">
          <div className="flex gap-4 animate-marquee" style={{ width: 'max-content' }}>
            {[
              { src: galleryTerrarium, alt: "Atelier terrarium botanique — Botanique Ludique, Le Pecq" },
              { src: galleryTeinture, alt: "Atelier teinture végétale naturelle — Botanique Ludique, Île-de-France" },
              { src: galleryFlowerCrown, alt: "Atelier couronne de fleurs — Botanique Ludique, Paris" },
              { src: galleryKokedamaGarden, alt: "Kokedama dans un jardin botanique — Botanique Ludique, Yvelines" },
              { src: galleryWorkshopGroup, alt: "Participants en atelier kokedama — Botanique Ludique" },
              { src: gallerySachetSenteur, alt: "Atelier sachets de senteurs naturels — Botanique Ludique" },
            ].map((image, index) => (
              <div key={`a-${index}`} className="flex-shrink-0 w-[280px] md:w-[400px] aspect-[3/4] overflow-hidden border-brutal">
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
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
                <div key={`b-${index}`} className="flex-shrink-0 w-[280px] md:w-[400px] aspect-[3/4] overflow-hidden border-brutal" aria-hidden="true">
                  <img src={image.src} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))
            )}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-[120px]">
          <AnimatedSection delay={200}>
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

      {/* ===== VIDEO SECTION ===== */}
      <VideoSection />

      {/* ===== PARTENAIRES — Compact strip ===== */}
      <section className="py-16 border-y-2 border-foreground/10">
        <AnimatedSection variant="fade" className="text-center mb-10">
          <span className="section-label">Ils nous font confiance</span>
        </AnimatedSection>
        <div className="overflow-hidden">
          <div className="flex gap-10 items-center animate-marquee" style={{ width: 'max-content', animationDuration: '22s' }}>
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
              <div key={`a-${index}`} className="flex-shrink-0 flex items-center justify-center" style={{ width: 120 }}>
                <img src={logo.src} alt={logo.alt} className="max-h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100" loading="lazy" />
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
                <div key={`b-${index}`} className="flex-shrink-0 flex items-center justify-center" style={{ width: 120 }} aria-hidden="true">
                  <img src={logo.src} alt="" className="max-h-10 w-auto object-contain grayscale opacity-60" loading="lazy" />
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ===== CTA + NEWSLETTER ===== */}
      <section className="py-28 px-6 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-foreground">
          <img
            src={ctaWorkshopGroup}
            alt=""
            className="w-full h-full object-cover opacity-30"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-16 items-center">
          <AnimatedSection direction="left" variant="slide">
            <div className="space-y-6">
              <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.9] tracking-[-1px]">
                Prêt·e à explorer<br />le monde végétal ?
              </h2>
              <p className="text-base text-primary-foreground/70 leading-relaxed max-w-[420px]">
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
                  className="btn-brutal bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground hover:text-foreground text-xs px-7 py-3"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200} direction="right" variant="scale">
            <div className="border-brutal bg-primary-foreground text-foreground p-8 shadow-brutal-lg">
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
