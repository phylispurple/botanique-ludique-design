import { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
import BackToTop from "@/components/BackToTop";

import assuranceMaladieLogo from "@/assets/logo-assurance-maladie.png";
import galleryTerrarium from "@/assets/gallery-terrarium.webp";
import ctaWorkshopGroup from "@/assets/cta-workshop-group.jpg";
import galleryTeinture from "@/assets/gallery-teinture-1.webp";
import galleryFlowerCrown from "@/assets/gallery-flower-crown.webp";
import galleryKokedamaGarden from "@/assets/gallery-kokedama-collection.jpg";
import galleryWorkshopGroup from "@/assets/gallery-workshop-group.webp";
import gallerySachetSenteur from "@/assets/gallery-sachet-senteur.webp";
import galleryMiniTerrarium from "@/assets/gallery-mini-terrarium.jpeg";
import PhotoCarousel from "@/components/PhotoCarousel";
import WaveDivider from "@/components/WaveDivider";
import NoelEntrepriseBanner from "@/components/NoelEntrepriseBanner";
import { EVENT_PHOTO } from "@/data/eventPhotos";


const PARTNER_LOGOS = [
  { src: assuranceMaladieLogo, alt: "l'Assurance Maladie" },
  { src: "/logos/thales.svg", alt: "Thales" },
  { src: "/logos/region-idf.webp", alt: "Région Île-de-France" },
  { src: "/logos/jappy-senior.svg", alt: "Happy Senior" },
  { src: "/logos/bezons.svg", alt: "Ville de Bezons" },
  { src: "/logos/maurepas.png", alt: "Ville de Maurepas" },
  { src: "/logos/cachan.svg", alt: "Ville de Cachan" },
  { src: "/logos/104.svg", alt: "Le CENTQUATRE-Paris" },
  { src: "/logos/sqy.svg", alt: "Saint-Quentin-en-Yvelines" },
  { src: "/logos/versailles.svg", alt: "Ville de Versailles" },
  { src: "/logos/la-celle-saint-cloud.svg", alt: "Ville de La Celle-Saint-Cloud" },
  { src: "/logos/taverny.svg", alt: "Ville de Taverny" },
  { src: "/logos/maisons-alfort.svg", alt: "Maison de l'environnement de Maisons-Alfort" },
  { src: "/logos/chateau-ephemere.svg", alt: "Château Éphémère" },
  { src: "/logos/ecole-du-breuil.jpg", alt: "École Du Breuil" },
];

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

  // Chaque chiffre est un « galet » : forme, couleur, inclinaison et place autour de la photo (ordinateur).
  const stats = [
    { value: "50+", label: "Ateliers réalisés", radius: "62% 38% 55% 45% / 48% 60% 40% 52%",
      tone: "bg-[hsl(var(--cream))] -rotate-6", className: "md:absolute md:-left-12 md:-top-4" },
    { value: "400+", label: "Participants accompagnés", radius: "45% 55% 40% 60% / 55% 45% 58% 42%",
      tone: "bg-accent rotate-3", className: "md:absolute md:-right-10 md:top-2" },
    { value: "15+", label: "Partenaires de confiance", radius: "55% 45% 62% 38% / 42% 52% 48% 58%",
      tone: "bg-[hsl(var(--olive-light))] rotate-2", className: "md:absolute md:-left-6 md:-bottom-8" },
    { value: "2023", label: "Année de création", radius: "40% 60% 48% 52% / 60% 40% 55% 45%",
      tone: "bg-[hsl(var(--green))] text-[hsl(var(--cream))] -rotate-3", className: "md:absolute md:right-10 md:-bottom-12" },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-clip">
      <SEO
        title="Botanique Ludique — Ateliers botaniques & balades guidées en Île-de-France"
        description="Médiation culturelle autour du vivant, partout en Île-de-France. Ateliers pour scolaires, entreprises et grand public, conférences avec chercheurs et artistes."
        keywords="ateliers botaniques Île-de-France, ateliers botaniques Paris, ateliers nature Yvelines, ateliers Hauts-de-Seine, ateliers Val-d'Oise, ateliers Essonne, ateliers Val-de-Marne, ateliers Seine-Saint-Denis, ateliers Seine-et-Marne, kokedama Paris, teinture végétale Yvelines, médiation scientifique, conférence botanique Île-de-France"
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
            poster="/videos/hero-poster.jpg"
            controls={false}
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
            <p className="font-editorial italic text-2xl md:text-[34px] leading-tight text-primary-foreground max-w-[700px] mx-auto mb-4">
              Les plantes ont des histoires à raconter
            </p>
            <p className="font-body text-[15px] md:text-[17px] text-primary-foreground/80 max-w-[560px] mx-auto mb-10 leading-relaxed">
              Ateliers créatifs, balades et conférences autour du végétal, pour tous les publics, partout en Île-de-France.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="flex flex-wrap gap-6 justify-center">
              <button
                onClick={() => navigate('/workshops')}
                className="btn-brutal bg-accent text-foreground border-accent -rotate-2 hover:rotate-0 hover:bg-primary-foreground hover:text-foreground hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_hsl(var(--accent))] px-7 py-3"
                style={{ borderRadius: "28px 14px 26px 12px / 14px 26px 12px 28px" }}
              >
                Découvrir les ateliers →
              </button>
              <button
                onClick={() => navigate('/mediation')}
                className="btn-brutal bg-[hsl(210_41%_24%)] text-[hsl(var(--cream))] border-[hsl(210_41%_24%)] rotate-1 hover:rotate-0 hover:bg-[hsl(var(--cream))] hover:text-foreground hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_hsl(210_41%_24%)] px-7 py-3"
                style={{ borderRadius: "14px 30px 12px 26px / 26px 12px 30px 14px" }}
              >
                Médiation & Savoirs →
              </button>
              <button
                onClick={() => navigate('/team-building-nature-entreprise')}
                className="btn-brutal bg-[hsl(var(--green))] text-[hsl(var(--cream))] border-[hsl(var(--olive-light))] -rotate-1 hover:rotate-0 hover:bg-[hsl(var(--cream))] hover:text-foreground hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_hsl(var(--green))] px-7 py-3"
                style={{ borderRadius: "26px 12px 30px 16px / 12px 30px 16px 26px" }}
              >
                Entreprises & CSE →
              </button>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-gentle z-10">
          <span className="font-mono-brand text-[9px] uppercase tracking-[3px] text-primary-foreground/50">
            Explorer
          </span>
          <svg width="20" height="28" viewBox="0 0 20 28" fill="none" className="text-primary-foreground/40">
            <path d="M10 0v22M2 16l8 8 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Organic wave transition — the hero background (dandelion video) continues behind */}
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-16 md:h-24"
          aria-hidden="true"
        >
          <path
            d="M0,120 C240,40 480,20 720,50 C960,80 1200,30 1440,120 L1440,120 L0,120 Z"
            fill="hsl(var(--cream))"
          />
        </svg>
      </section>

      {/* ===== BOTANIQUE LUDIQUE — photo de groupe en galet, chiffres en galets flottants ===== */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[6fr_5fr] gap-14 md:gap-20 items-center">
          {/* Photo de groupe + galets */}
          <AnimatedSection direction="left" className="order-2 md:order-none">
            <div className="relative max-w-[520px] mx-auto md:py-14">
              {/* tache olive derrière la photo */}
              <div
                className="absolute -inset-4 md:-inset-8 bg-[hsl(var(--olive-light))]/35"
                style={{ borderRadius: "42% 58% 63% 37% / 41% 44% 56% 59%" }}
                aria-hidden="true"
              />
              <img
                src={galleryWorkshopGroup}
                alt="Participants façonnant leurs kokedamas autour d'une grande table d'atelier"
                className="relative w-full aspect-[5/4] object-cover border-brutal shadow-brutal-lg"
                style={{ borderRadius: "56% 44% 47% 53% / 50% 56% 44% 50%" }}
                loading="lazy"
              />

              {/* Chiffres : rangée sur mobile, galets flottants autour de la photo sur ordinateur */}
              <div className="flex flex-wrap justify-center gap-4 mt-10 md:mt-0">
                {stats.map((stat, i) => (
                  <div key={stat.label} className={`pebble-float ${stat.className}`} style={{ animationDelay: `${i * -1.4}s` }}>
                    <div
                      className={`flex flex-col items-center justify-center text-center w-[132px] h-[132px] md:w-36 md:h-36 border-brutal shadow-brutal p-3 transition-transform duration-300 hover:rotate-0 hover:scale-110 ${stat.tone}`}
                      style={{ borderRadius: stat.radius }}
                    >
                      <AnimatedCounter value={stat.value} className="font-display text-3xl md:text-[34px] leading-none mb-1" />
                      <div className="font-mono-brand text-[9px] uppercase tracking-[1.5px] leading-snug opacity-80 max-w-[110px]">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Texte */}
          <AnimatedSection direction="right" delay={150} className="order-1 md:order-none">
            <span className="section-label block mb-4">Ethnobotanique · Création · Transmission</span>
            <h2 className="font-display text-[clamp(2rem,4.2vw,3.2rem)] uppercase leading-[0.92] tracking-[-2px] mb-4">
              Créer avec<br />les plantes,<br /><span className="md:ml-14 text-primary">comprendre</span><br /><span className="md:ml-14 whitespace-nowrap">leurs histoires</span>
            </h2>
            <p className="font-editorial italic text-xl md:text-2xl text-foreground/60 mb-8 md:ml-14">
              ateliers · balades · conférences
            </p>
            <p className="text-base md:text-lg leading-[1.8] text-foreground/75 mb-5 max-w-[500px]">
              Botanique Ludique propose des ateliers qui allient <strong className="text-foreground">création artistique</strong> et
              <strong className="text-foreground"> savoirs ethnobotaniques</strong> : on fabrique de ses mains, et l'on découvre ce que
              les plantes racontent de nos cultures, partout en Île-de-France.
            </p>
            <p className="text-base md:text-lg leading-[1.8] text-foreground/75 max-w-[500px] md:ml-14 md:border-l-[3px] md:border-primary md:pl-6">
              Pour <strong className="text-foreground">tous les publics</strong> : enfants dès 4 ans, adultes, seniors et EHPAD, écoles,
              MJC, associations, entreprises et collectivités.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== PARTENAIRES — logos grisés, en couleur au survol ===== */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h3 className="font-display text-2xl md:text-3xl uppercase text-center mb-12 tracking-[-1px]">
              Ils nous font confiance
            </h3>
          </AnimatedSection>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
            {PARTNER_LOGOS.map((logo) => (
              <div
                key={logo.alt}
                className="flex items-center justify-center h-14 w-28 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <img src={logo.src} alt={logo.alt} className="max-h-14 max-w-full w-auto h-auto object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider from="hsl(36,33%,93%)" to="hsl(153,40%,30%)" />
      {/* ===== ENTREPRISES & CSE — bande organique entre deux vagues ===== */}
      <section className="bg-[hsl(var(--green))] text-[hsl(var(--cream))] px-6 py-12 md:py-16" aria-labelledby="bloc-entreprises">
        <AnimatedSection className="max-w-5xl mx-auto grid md:grid-cols-[2fr_3fr] gap-10 md:gap-14 items-center">
          <img
            src={EVENT_PHOTO.terrariumTable}
            alt="Terrariums en bocal et sacs kraft prêts pour une animation en entreprise"
            className="w-full max-w-sm mx-auto aspect-square object-cover border-4 border-[hsl(var(--cream))]"
            style={{ borderRadius: "58% 42% 52% 48% / 46% 56% 44% 54%" }}
            loading="lazy"
          />
          <div>
            <p className="section-label mb-2" style={{ color: "hsl(73 44% 67%)" }}>Entreprises · CSE · Agences</p>
            <h2 id="bloc-entreprises" className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] uppercase leading-[0.95] tracking-[-1px] mb-4">
              Un team building végétal, <span className="text-[hsl(var(--olive-light))]">clés en main</span>
            </h2>
            <p className="font-body text-base text-[hsl(var(--cream))]/85 leading-relaxed mb-6">
              Terrarium, kokedama, teinture végétale ou sachets de senteurs, dans vos locaux partout en Île-de-France.
              J'apporte tout le matériel et chacun repart avec sa création.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <Link
                to="/team-building-nature-entreprise#devis"
                className="btn-brutal rounded-full bg-accent text-foreground border-accent text-xs px-6 py-3 text-center whitespace-nowrap"
              >
                Demander un devis →
              </Link>
              <Link
                to="/team-building-nature-entreprise"
                className="btn-brutal rounded-full bg-transparent text-[hsl(var(--cream))] border-[hsl(var(--cream))] text-xs px-6 py-3 text-center whitespace-nowrap"
              >
                Voir les formules
              </Link>
            </div>
            <NoelEntrepriseBanner className="!bg-[hsl(var(--cream))] rounded-r-2xl" />
          </div>
        </AnimatedSection>
      </section>
      <WaveDivider from="hsl(153,40%,30%)" to="hsl(36,25%,88%)" flip />

      {/* ===== GALERIE — photos en galets inclinés, étiquettes ===== */}
      <section className="py-16 md:py-24 bg-secondary overflow-x-clip">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="mb-10 md:mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="section-label block mb-3">En atelier</span>
              <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.92] tracking-[-1.5px]">
                Ce qu'on fabrique<br /><span className="md:ml-16 text-primary">ensemble</span>
              </h2>
            </div>
            <span className="self-start md:self-end -rotate-3 font-mono-brand text-[10px] uppercase tracking-[2px] bg-accent border-brutal-thin rounded-full px-4 py-2 shadow-[3px_3px_0_hsl(var(--black))]">
              ← Faites glisser →
            </span>
          </AnimatedSection>
        </div>

        <PhotoCarousel
          organic
          images={[
            { src: galleryTerrarium, alt: "Terrarium réalisé en atelier botanique", label: "Terrarium" },
            { src: galleryTeinture, alt: "Tissus teints aux plantes en atelier teinture végétale", label: "Teinture végétale" },
            { src: galleryFlowerCrown, alt: "Couronne de fleurs réalisée en atelier", label: "Couronne de fleurs" },
            { src: galleryKokedamaGarden, alt: "Kokedamas ficelés réalisés en atelier", label: "Kokedama" },
            { src: EVENT_PHOTO.soiesSuspendues, alt: "Carrés de soie teints aux plantes, suspendus à la fenêtre", label: "Soie teinte" },
            { src: gallerySachetSenteur, alt: "Sachets de senteurs aux plantes et épices", label: "Sachets de senteurs" },
            { src: galleryMiniTerrarium, alt: "Mini terrarium en bocal", label: "Mini terrarium" },
          ]}
        />

        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection delay={300} className="text-center mt-2">
            <Link
              to="/gallery"
              className="btn-brutal rounded-full bg-foreground text-primary-foreground border-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-8 py-3 inline-block"
            >
              Voir toute la galerie →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <WaveDivider from="hsl(36,25%,88%)" to="hsl(36,33%,93%)" flip />

      {/* ===== TESTIMONIALS ===== */}
      <Testimonials />

      <WaveDivider from="hsl(36,33%,93%)" to="hsl(0,0%,10%)" flip />

      {/* ===== CTA + NEWSLETTER ===== */}
      <section className="py-20 md:py-24 px-6 text-primary-foreground relative overflow-hidden">
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
                Nous venons jusqu'à vous, partout en Île-de-France.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/workshops"
                  className="btn-brutal rounded-full bg-primary text-primary-foreground border-primary hover:bg-primary-foreground hover:text-foreground text-xs px-7 py-3"
                >
                  Voir les ateliers →
                </Link>
                <Link
                  to="/contact"
                  className="btn-brutal rounded-full bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-7 py-3"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200} direction="right">
            <div className="border-brutal rounded-[2rem] bg-primary-foreground text-foreground p-8 shadow-brutal-lg relative overflow-hidden">
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
