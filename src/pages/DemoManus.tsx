import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Star, Package, Shield, Users, MapPin, ThumbsUp, Heart, Calendar, Lock, UserPlus, Send } from "lucide-react";

import heroImg from "@/assets/hero-background-new.webp";
import aboutImg from "@/assets/about-vanessa.jpg";
import galleryImg1 from "@/assets/gallery-kokedama-garden.webp";
import galleryImg2 from "@/assets/gallery-teinture-1.webp";
import galleryImg3 from "@/assets/gallery-terrarium.webp";
import galleryImg4 from "@/assets/gallery-flower-crown.webp";
import galleryImg5 from "@/assets/gallery-basketry.webp";

import workshopTeinture from "@/assets/workshop-dyeing.jpg";
import workshopKokedama from "@/assets/workshop-kokedama.jpg";
import workshopTerrarium from "@/assets/workshop-terrarium.jpg";
import workshopBombes from "@/assets/workshop-seed-bombs.jpg";
import workshopHerbier from "@/assets/workshop-herbarium.jpg";
import workshopVannerie from "@/assets/workshop-basketry.jpg";
import workshopSachets from "@/assets/workshop-sachets.jpg";
import workshopCouronnes from "@/assets/workshop-flower-crown.jpg";

const NAV_ITEMS = ["Accueil", "À propos", "Ateliers", "Avis", "Asso", "Contact"];

const WORKSHOPS = [
  { num: "01", title: "TEINTURE VÉGÉTALE", cat: "CRÉATIONS TEXTILES", color: "#E8734A", desc: "Découverte des pigments naturels et création de tissus teints à partir de plantes tinctoriales.", img: workshopTeinture },
  { num: "02", title: "KOKEDAMA", cat: "JARDINAGE", color: "#6B8F5E", desc: "Art japonais de la boule de mousse. Créez votre propre composition végétale suspendue.", img: workshopKokedama },
  { num: "03", title: "TERRARIUMS", cat: "JARDINAGE", color: "#6B8F5E", desc: "Créez un écosystème miniature dans un bocal en verre. Un jardin autonome à emporter.", img: workshopTerrarium },
  { num: "04", title: "BOMBES DE GRAINES", cat: "ART FLORAL", color: "#9B6BA0", desc: "Fabriquez des bombes de graines pour reverdir la ville. Idéal en atelier scolaire.", img: workshopBombes },
  { num: "05", title: "HERBIER", cat: "JARDINAGE", color: "#6B8F5E", desc: "Collecte, pressage et mise en valeur de spécimens botaniques. Entre science et art.", img: workshopHerbier },
  { num: "06", title: "VANNERIE", cat: "JARDINAGE", color: "#6B8F5E", desc: "Techniques ancestrales de tressage végétal. Créez paniers et objets en fibres naturelles.", img: workshopVannerie },
  { num: "07", title: "SACHETS SENTEUR", cat: "BIEN-ÊTRE", color: "#E8734A", desc: "Création de sachets parfumés et d'eaux florales à partir de plantes aromatiques.", img: workshopSachets },
  { num: "08", title: "COURONNES DE FLEURS", cat: "ART FLORAL", color: "#9B6BA0", desc: "Confection de couronnes végétales avec des fleurs de saison. Un moment poétique.", img: workshopCouronnes },
];

const TESTIMONIALS = [
  { name: "JEAN-MARC L.", role: "Responsable RSE — Kokedama", rating: 4, text: "Les ateliers de Vanessa ont transformé notre approche pédagogique. Mes élèves ont découvert l'ethnobotanique de manière ludique et créative. Un vrai succès !" },
  { name: "SOPHIE M.", role: "Professeure des écoles — Bombes de graines", rating: 5, text: "Une approche professionnelle et passionnante. Vanessa sait transmettre son savoir avec pédagogie. Les participants repartent enrichis culturellement et créativement. Une expérience mémorable !" },
  { name: "CAMILLE D.", role: "Animatrice MJC — Teinture végétale", rating: 5, text: "Un moment hors du temps. L'atelier teinture végétale nous a permis de découvrir des techniques ancestrales dans une ambiance chaleureuse et bienveillante." },
];

const TRUST_ITEMS = [
  { icon: Package, label: "Matériel fourni", sub: "CLÉ EN MAIN" },
  { icon: Shield, label: "Matériaux naturels", sub: "ÉCO-ASSURANCE" },
  { icon: Users, label: "400+ PARTICIPANTS", sub: "Accompagnés" },
  { icon: Shield, label: "RC PRO", sub: "Intervenant" },
  { icon: MapPin, label: "PARIS, 78, 92, 95", sub: "Île-de-France" },
  { icon: ThumbsUp, label: "5/5 ÉTOILES", sub: "Satisfaction client" },
];

const DemoManus = () => {
  const [formData, setFormData] = useState({ name: "", email: "", type: "", project: "" });

  return (
    <>
      <Helmet>
        <title>Botanique Ludique — Démo Manus</title>
        <meta name="description" content="Maquette brutalist/éditorial du site Botanique Ludique" />
      </Helmet>

      {/* Grain overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03]">
        <svg width="100%" height="100%"><filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#grain)"/></svg>
      </div>

      {/* Side nav */}
      <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-2">
        {NAV_ITEMS.map((item) => (
          <a key={item} href={`#${item.toLowerCase().replace(/\s/g, "")}`}
            className="px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] border-2 border-[#2B2B2B] bg-[#F5F0E8] hover:bg-[#2B2B2B] hover:text-[#F5F0E8] transition-all duration-200 rounded-full"
            style={{ fontFamily: "Space Mono, monospace" }}>
            {item}
          </a>
        ))}
      </nav>

      <div className="min-h-screen" style={{ fontFamily: "DM Sans, sans-serif", background: "#F5F0E8", color: "#2B2B2B" }}>

        {/* ═══ HERO ═══ */}
        <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImg} alt="Botanique Ludique" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-[clamp(3rem,10vw,8rem)] leading-[0.9] tracking-[-0.02em] text-[#F5F0E8] mb-6"
              style={{ fontFamily: "Archivo Black, sans-serif" }}>
              BOTANIQUE<br />LUDIQUE
            </h1>
            <p className="text-sm md:text-base tracking-[0.3em] uppercase text-[#F5F0E8]/80 mb-2"
              style={{ fontFamily: "Space Mono, monospace" }}>
              Quand l'atelier créatif rencontre l'anthropologie de la nature
            </p>
            <p className="text-xs tracking-[0.5em] uppercase text-[#F5F0E8]/60 mb-10"
              style={{ fontFamily: "Space Mono, monospace" }}>
              PARIS • YVELINES (78) • HAUTS-DE-SEINE (92) • VAL-D'OISE (95)
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/workshops"
                className="px-8 py-4 border-3 border-[#F5F0E8] text-[#F5F0E8] text-xs tracking-[0.3em] uppercase hover:bg-[#F5F0E8] hover:text-[#2B2B2B] hover:shadow-[6px_6px_0_#6B8F5E] transition-all duration-200"
                style={{ fontFamily: "Space Mono, monospace", borderWidth: "3px" }}>
                DÉCOUVRIR LES ATELIERS →
              </Link>
              <Link to="/pro"
                className="px-8 py-4 bg-[#E8734A] text-[#F5F0E8] text-xs tracking-[0.3em] uppercase border-3 border-[#2B2B2B] hover:shadow-[6px_6px_0_#2B2B2B] transition-all duration-200"
                style={{ fontFamily: "Space Mono, monospace", borderWidth: "3px" }}>
                ORGANISER UN TEAM BUILDING
              </Link>
            </div>
          </div>
        </section>

        {/* ═══ MARQUEE 1 ═══ */}
        <div className="overflow-hidden border-y-[3px] border-[#2B2B2B] bg-[#6B8F5E] py-3">
          <div className="flex animate-[marquee_25s_linear_infinite] whitespace-nowrap">
            {Array(4).fill("BOTANIQUE ✼ TEINTURE VÉGÉTALE ✼ KOKEDAMA ✼ TERRARIUM ✼ HERBIER ✼ VANNERIE ✼ ").map((t, i) => (
              <span key={i} className="text-sm tracking-[0.3em] uppercase text-[#F5F0E8] mx-4" style={{ fontFamily: "Space Mono, monospace" }}>{t}</span>
            ))}
          </div>
        </div>

        {/* ═══ ABOUT ═══ */}
        <section id="àpropos" className="border-b-[3px] border-[#2B2B2B]">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-16 flex flex-col justify-center border-r-0 md:border-r-[3px] border-[#2B2B2B]">
              <h2 className="text-5xl md:text-6xl mb-8" style={{ fontFamily: "Archivo Black, sans-serif" }}>
                VANESSA CHARLERY
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-6 max-w-lg">
                Créée par Vanessa Charlery, ethnobotaniste et anthropologue, l'association Botanique Ludique propose des ateliers qui allient créativité artistique et transmission des savoirs ethnobotaniques.
              </p>
              <p className="text-base md:text-lg leading-relaxed max-w-lg">
                Nos ateliers s'adressent à tous les publics : enfants dès 4 ans, adultes, seniors en résidence ou EHPAD, écoles et centres de loisirs, MJC, centres sociaux, associations, entreprises et collectivités.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-0">
              {[
                { val: "50+", label: "ATELIERS RÉALISÉS" },
                { val: "400+", label: "PARTICIPANTS" },
                { val: "15+", label: "PARTENAIRES" },
                { val: "2023", label: "ANNÉE DE CRÉATION" },
              ].map((s, i) => (
                <div key={i} className="border-[3px] border-[#2B2B2B] p-8 flex flex-col items-center justify-center text-center bg-[#F5F0E8] hover:bg-[#6B8F5E] hover:text-[#F5F0E8] transition-colors duration-300 group">
                  <span className="text-4xl md:text-5xl mb-2" style={{ fontFamily: "Archivo Black, sans-serif" }}>{s.val}</span>
                  <span className="text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: "Space Mono, monospace" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ GALLERY STRIP ═══ */}
        <section className="border-b-[3px] border-[#2B2B2B] overflow-hidden">
          <div className="flex">
            {[galleryImg1, galleryImg2, galleryImg3, galleryImg4, galleryImg5].map((img, i) => (
              <div key={i} className="flex-1 min-w-0 border-r-[3px] border-[#2B2B2B] last:border-r-0 aspect-square overflow-hidden">
                <img src={img} alt={`Galerie ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
              </div>
            ))}
          </div>
        </section>

        {/* ═══ MARQUEE 2 ═══ */}
        <div className="overflow-hidden border-b-[3px] border-[#2B2B2B] bg-[#2B2B2B] py-3">
          <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap">
            {Array(4).fill("ADULTES ✼ SENIORS ✼ ÉCOLES ✼ EHPAD ✼ ENTREPRISES ✼ MJC ✼ COLLECTIVITÉS ✼ ").map((t, i) => (
              <span key={i} className="text-sm tracking-[0.3em] uppercase text-[#F5F0E8] mx-4" style={{ fontFamily: "Space Mono, monospace" }}>{t}</span>
            ))}
          </div>
        </div>

        {/* ═══ WORKSHOPS ═══ */}
        <section id="ateliers" className="border-b-[3px] border-[#2B2B2B]">
          <div className="p-8 md:p-16 text-center">
            <h2 className="text-5xl md:text-7xl mb-4" style={{ fontFamily: "Archivo Black, sans-serif" }}>NOS ATELIERS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {WORKSHOPS.map((w) => (
              <div key={w.num}
                className="border-[3px] border-[#2B2B2B] bg-[#F5F0E8] hover:scale-[1.02] hover:shadow-[8px_8px_0_#2B2B2B] hover:z-10 transition-all duration-200 relative group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden border-b-[3px] border-[#2B2B2B]">
                  <img src={w.img} alt={w.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-4xl opacity-20" style={{ fontFamily: "Archivo Black, sans-serif" }}>{w.num}</span>
                    <span className="text-[9px] tracking-[0.2em] uppercase px-2 py-1 rounded-full text-white"
                      style={{ fontFamily: "Space Mono, monospace", backgroundColor: w.color }}>
                      {w.cat}
                    </span>
                  </div>
                  <h3 className="text-lg mb-2" style={{ fontFamily: "Archivo Black, sans-serif" }}>{w.title}</h3>
                  <p className="text-sm leading-relaxed opacity-70">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ TESTIMONIALS ═══ */}
        <section id="avis" className="border-b-[3px] border-[#2B2B2B] p-8 md:p-16">
          <h2 className="text-5xl md:text-7xl mb-12 text-center" style={{ fontFamily: "Archivo Black, sans-serif" }}>
            CE QU'ILS EN DISENT
          </h2>
          <div className="grid md:grid-cols-3 gap-0">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="border-[3px] border-[#2B2B2B] p-8 bg-[#F5F0E8] hover:shadow-[6px_6px_0_#6B8F5E] transition-all duration-200">
                <span className="text-6xl opacity-10 leading-none" style={{ fontFamily: "Archivo Black, sans-serif" }}>"</span>
                <div className="flex gap-1 mb-4">
                  {Array(5).map((_, j) => (
                    <Star key={j} className="w-4 h-4" fill={j < t.rating ? "#E8734A" : "none"} stroke={j < t.rating ? "#E8734A" : "#2B2B2B"} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-6">{t.text}</p>
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] uppercase" style={{ fontFamily: "Space Mono, monospace" }}>{t.name}</p>
                  <p className="text-xs opacity-60">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ TRUST BAR ═══ */}
        <section className="border-b-[3px] border-[#2B2B2B] bg-[#E8E0D0]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0">
            {TRUST_ITEMS.map((t, i) => (
              <div key={i} className="border-[3px] border-[#2B2B2B] p-6 text-center flex flex-col items-center gap-2">
                <t.icon className="w-6 h-6" />
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold" style={{ fontFamily: "Space Mono, monospace" }}>{t.sub}</span>
                <span className="text-xs">{t.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ MARQUEE 3 ═══ */}
        <div className="overflow-hidden border-b-[3px] border-[#2B2B2B] bg-[#9B6BA0] py-3">
          <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
            {Array(4).fill("REJOIGNEZ L'ASSOCIATION ✼ ").map((t, i) => (
              <span key={i} className="text-sm tracking-[0.3em] uppercase text-[#F5F0E8] mx-4" style={{ fontFamily: "Space Mono, monospace" }}>{t}</span>
            ))}
          </div>
        </div>

        {/* ═══ ASSOCIATION ═══ */}
        <section id="asso" className="border-b-[3px] border-[#2B2B2B] bg-[#9B6BA0] text-[#F5F0E8]">
          <div className="p-8 md:p-16 text-center mb-8">
            <h2 className="text-5xl md:text-7xl mb-4" style={{ fontFamily: "Archivo Black, sans-serif" }}>L'ASSOCIATION</h2>
            <p className="text-base max-w-xl mx-auto opacity-80">
              Un espace dédié à notre communauté de passionnés du monde végétal. Adhérer, participer, partager.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              { icon: UserPlus, title: "ADHÉSION EN LIGNE", desc: "Rejoignez l'asso en quelques clics. Adhésion à prix libre.", cta: "ADHÉRER →" },
              { icon: Calendar, title: "ÉVÉNEMENTS", desc: "Sorties botaniques, ateliers spéciaux, rencontres.", cta: "VOIR L'AGENDA →" },
              { icon: Lock, title: "ESPACE MEMBRES", desc: "Ressources réservées : fiches botaniques, photos, documents.", cta: "SE CONNECTER →" },
              { icon: Heart, title: "L'ÉQUIPE", desc: "Les membres du bureau et bénévoles qui font vivre BL.", cta: "DÉCOUVRIR →" },
            ].map((item, i) => (
              <div key={i} className="border-[3px] border-[#F5F0E8]/30 p-8 hover:bg-[#F5F0E8]/10 transition-colors duration-300">
                <item.icon className="w-8 h-8 mb-4" />
                <h3 className="text-lg mb-2" style={{ fontFamily: "Archivo Black, sans-serif" }}>{item.title}</h3>
                <p className="text-sm opacity-70 mb-4">{item.desc}</p>
                <span className="text-xs tracking-[0.2em] uppercase border-b-2 border-[#F5F0E8] pb-1 cursor-pointer"
                  style={{ fontFamily: "Space Mono, monospace" }}>
                  {item.cta}
                </span>
              </div>
            ))}
          </div>
          {/* CTA Bar */}
          <div className="border-t-[3px] border-[#F5F0E8]/30 bg-[#E8CD5A] text-[#2B2B2B] p-6 text-center">
            <span className="text-sm tracking-[0.3em] uppercase mr-4" style={{ fontFamily: "Space Mono, monospace" }}>
              ENVIE DE NOUS REJOINDRE ?
            </span>
            <Link to="/about" className="inline-block px-6 py-3 bg-[#2B2B2B] text-[#F5F0E8] text-xs tracking-[0.3em] uppercase border-[3px] border-[#2B2B2B] hover:shadow-[4px_4px_0_#9B6BA0] transition-all duration-200"
              style={{ fontFamily: "Space Mono, monospace" }}>
              ADHÉRER MAINTENANT
            </Link>
          </div>
        </section>

        {/* ═══ CONTACT ═══ */}
        <section id="contact" className="border-b-[3px] border-[#2B2B2B]">
          <div className="grid md:grid-cols-2">
            {/* Left */}
            <div className="bg-[#6B8F5E] text-[#F5F0E8] p-8 md:p-16 flex flex-col justify-center border-r-0 md:border-r-[3px] border-[#2B2B2B]">
              <h2 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: "Archivo Black, sans-serif" }}>
                PRÊT·E À EXPLORER<br />LE MONDE VÉGÉTAL
              </h2>
              <p className="text-base opacity-80 mb-8 max-w-md">
                Rejoignez-nous pour un atelier à Paris, Yvelines, Hauts-de-Seine ou Val-d'Oise.
              </p>
              <div className="space-y-3 text-sm" style={{ fontFamily: "Space Mono, monospace" }}>
                <p>✉ contact@botaniqueludique.com</p>
                <p>☎ 06 09 83 16 06</p>
                <p>📍 Île-de-France</p>
                <p>📸 @botanique.ludique</p>
              </div>
            </div>
            {/* Right - Form */}
            <div className="p-8 md:p-16 bg-[#F5F0E8]">
              <h3 className="text-3xl mb-8" style={{ fontFamily: "Archivo Black, sans-serif" }}>DEMANDE DE DEVIS</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Votre nom"
                  className="w-full p-4 border-[3px] border-[#2B2B2B] bg-transparent text-sm focus:shadow-[4px_4px_0_#6B8F5E] outline-none transition-all"
                  style={{ fontFamily: "Space Mono, monospace" }}
                  value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                <input type="email" placeholder="Votre email"
                  className="w-full p-4 border-[3px] border-[#2B2B2B] bg-transparent text-sm focus:shadow-[4px_4px_0_#6B8F5E] outline-none transition-all"
                  style={{ fontFamily: "Space Mono, monospace" }}
                  value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                <select
                  className="w-full p-4 border-[3px] border-[#2B2B2B] bg-transparent text-sm appearance-none outline-none"
                  style={{ fontFamily: "Space Mono, monospace" }}
                  value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
                  <option value="">VOUS ÊTES...</option>
                  <option value="particulier">Particulier</option>
                  <option value="entreprise">Entreprise</option>
                  <option value="ecole">École</option>
                  <option value="association">Association</option>
                  <option value="collectivite">Collectivité</option>
                </select>
                <textarea placeholder="Votre projet : type d'atelier, nombre de participants, dates envisagées..."
                  rows={4}
                  className="w-full p-4 border-[3px] border-[#2B2B2B] bg-transparent text-sm resize-none focus:shadow-[4px_4px_0_#6B8F5E] outline-none transition-all"
                  style={{ fontFamily: "Space Mono, monospace" }}
                  value={formData.project} onChange={(e) => setFormData({ ...formData, project: e.target.value })} />
                <button type="submit"
                  className="w-full p-4 bg-[#2B2B2B] text-[#F5F0E8] text-xs tracking-[0.3em] uppercase border-[3px] border-[#2B2B2B] hover:shadow-[6px_6px_0_#E8734A] transition-all duration-200 flex items-center justify-center gap-2"
                  style={{ fontFamily: "Space Mono, monospace" }}>
                  <Send className="w-4 h-4" /> Envoyer →
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* ═══ NEWSLETTER ═══ */}
        <div className="border-b-[3px] border-[#2B2B2B] bg-[#2B2B2B] text-[#F5F0E8] p-6">
          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-4">
            <h3 className="text-lg whitespace-nowrap" style={{ fontFamily: "Archivo Black, sans-serif" }}>RESTEZ INFORMÉ·E</h3>
            <input type="email" placeholder="Votre email"
              className="flex-1 w-full sm:w-auto p-3 border-[3px] border-[#F5F0E8] bg-transparent text-sm outline-none"
              style={{ fontFamily: "Space Mono, monospace" }} />
            <button className="px-6 py-3 bg-[#E8734A] text-[#F5F0E8] text-xs tracking-[0.3em] uppercase border-[3px] border-[#E8734A] hover:shadow-[4px_4px_0_#F5F0E8] transition-all duration-200"
              style={{ fontFamily: "Space Mono, monospace" }}>
              S'INSCRIRE
            </button>
          </div>
        </div>

        {/* ═══ FOOTER ═══ */}
        <footer className="bg-[#2B2B2B] text-[#F5F0E8] border-t-[3px] border-[#F5F0E8]/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {/* Col 1 */}
            <div className="p-8 border-r-[3px] border-[#F5F0E8]/10">
              <h4 className="text-xl mb-4" style={{ fontFamily: "Archivo Black, sans-serif" }}>BOTANIQUE LUDIQUE</h4>
              <p className="text-xs opacity-60 leading-relaxed">Ateliers créatifs pour reconnecter l'humain au végétal. Créé avec amour et nature.</p>
            </div>
            {/* Col 2 */}
            <div className="p-8 border-r-0 md:border-r-[3px] border-[#F5F0E8]/10">
              <h5 className="text-xs tracking-[0.2em] uppercase mb-4 opacity-60" style={{ fontFamily: "Space Mono, monospace" }}>ATELIERS</h5>
              <ul className="space-y-2 text-xs opacity-80">
                <li><Link to="/atelier-teinture-vegetale" className="hover:opacity-100">Teinture végétale</Link></li>
                <li><Link to="/atelier-kokedama-paris" className="hover:opacity-100">Kokedama</Link></li>
                <li><Link to="/atelier-terrarium-paris" className="hover:opacity-100">Terrariums</Link></li>
                <li><Link to="/workshops" className="hover:opacity-100">Couronnes de fleurs</Link></li>
                <li><Link to="/workshops" className="hover:opacity-100">Herbier</Link></li>
                <li><Link to="/workshops" className="hover:opacity-100">Vannerie</Link></li>
              </ul>
            </div>
            {/* Col 3 */}
            <div className="p-8 border-r-[3px] border-[#F5F0E8]/10">
              <h5 className="text-xs tracking-[0.2em] uppercase mb-4 opacity-60" style={{ fontFamily: "Space Mono, monospace" }}>PRO</h5>
              <ul className="space-y-2 text-xs opacity-80">
                <li><Link to="/team-building-nature-entreprise" className="hover:opacity-100">Team Building</Link></li>
                <li><Link to="/animation-scolaire-nature" className="hover:opacity-100">Établissements scolaires</Link></li>
                <li><Link to="/animation-collectivites-mairies" className="hover:opacity-100">Collectivités</Link></li>
                <li><Link to="/animation-seniors-ehpad" className="hover:opacity-100">EHPAD & Santé</Link></li>
                <li><Link to="/atelier-botanique-evenement" className="hover:opacity-100">Événementiel</Link></li>
              </ul>
            </div>
            {/* Col 4 */}
            <div className="p-8">
              <h5 className="text-xs tracking-[0.2em] uppercase mb-4 opacity-60" style={{ fontFamily: "Space Mono, monospace" }}>INFOS</h5>
              <ul className="space-y-2 text-xs opacity-80">
                <li><Link to="/blog" className="hover:opacity-100">Blog</Link></li>
                <li><Link to="/faq" className="hover:opacity-100">FAQ</Link></li>
                <li><Link to="/contact" className="hover:opacity-100">Contact</Link></li>
                <li><Link to="/mentions-legales" className="hover:opacity-100">Mentions légales</Link></li>
                <li><Link to="/conditions-de-vente" className="hover:opacity-100">CGV</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t-[3px] border-[#F5F0E8]/10 p-6 text-center">
            <p className="text-[10px] tracking-[0.3em] uppercase opacity-40" style={{ fontFamily: "Space Mono, monospace" }}>
              © 2026 BOTANIQUE LUDIQUE • CRÉÉ AVEC AMOUR ET NATURE
            </p>
          </div>
        </footer>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </>
  );
};

export default DemoManus;
