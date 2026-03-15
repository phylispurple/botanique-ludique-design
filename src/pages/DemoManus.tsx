import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Star, Package, Leaf, Shield, MapPin, Users, Heart, Calendar, Lock, UserPlus, Send, Instagram, Facebook } from "lucide-react";

import heroImg from "@/assets/hero-background-new.webp";
import galleryImg1 from "@/assets/gallery-terrarium.webp";
import galleryImg2 from "@/assets/gallery-teinture-1.webp";
import galleryImg3 from "@/assets/gallery-flower-crown.webp";
import galleryImg4 from "@/assets/gallery-kokedama-garden.webp";
import galleryImg5 from "@/assets/gallery-sachet-senteur.webp";

import workshopTeinture from "@/assets/gallery-teinture-1.webp";
import workshopKokedama from "@/assets/gallery-kokedama-garden.webp";
import workshopTerrarium from "@/assets/gallery-terrarium.webp";
import workshopCouronnes from "@/assets/gallery-flower-crown.webp";
import workshopSachets from "@/assets/gallery-sachet-senteur.webp";

/* ── Maquette-exact color palette ── */
const C = {
  cream: "#F5F0E8",
  creamDark: "#EDE7DA",
  black: "#1a1a1a",
  green: "#2D6A4F",
  greenBright: "#40916C",
  greenLight: "#95D5B2",
  greenPale: "#D8F3DC",
  olive: "#8B9A46",
  oliveLight: "#C5D086",
  orange: "#E76F51",
  orangeLight: "#F4A261",
  pink: "#E8A0BF",
  yellow: "#E9C46A",
  yellowBright: "#F2CC0F",
  blue: "#264653",
  purple: "#6C3D7A",
  purpleBg: "#D4B8E0",
};

const NAV_ITEMS = [
  { label: "Accueil", href: "#accueil" },
  { label: "Ateliers", href: "#ateliers" },
  { label: "Avis", href: "#temoignages" },
  { label: "Asso", href: "#association", isAsso: true },
  { label: "Contact", href: "#contact" },
];

const WORKSHOPS = [
  { num: "01", title: "Teinture Végétale", cat: "Créations textiles", catClass: "purple", desc: "Découverte des pigments naturels et création de tissus teints à partir de plantes tinctoriales.", img: workshopTeinture },
  { num: "02", title: "Kokedama", cat: "Jardinage", catClass: "green", desc: "Art japonais de la boule de mousse. Créez votre propre composition végétale suspendue.", img: workshopKokedama },
  { num: "03", title: "Terrariums", cat: "Jardinage", catClass: "green", desc: "Créez un écosystème miniature dans un bocal en verre. Un jardin autonome à emporter.", img: workshopTerrarium },
  { num: "04", title: "Couronnes de Fleurs", cat: "Art floral", catClass: "orange", desc: "Compositions florales fraîches ou séchées. Apprenez l'art de tresser la nature.", img: workshopCouronnes },
  { num: "05", title: "Bombes de Graines", cat: "Jardinage", catClass: "green", desc: "Fabriquez des bombes de graines pour reverdir la ville. Idéal en atelier scolaire.", img: null },
  { num: "06", title: "Herbier", cat: "Art floral", catClass: "orange", desc: "Collecte, pressage et mise en valeur de spécimens botaniques. Entre science et art.", img: null },
  { num: "07", title: "Vannerie", cat: "Artisanat", catClass: "blue", desc: "Techniques ancestrales de tressage végétal. Créez paniers et objets en fibres naturelles.", img: null },
  { num: "08", title: "Sachets Senteur & Eaux Florales", cat: "Bien-être", catClass: "pink", desc: "Création de sachets parfumés et d'eaux florales à partir de plantes aromatiques.", img: workshopSachets },
];

const CAT_COLORS: Record<string, string> = {
  purple: C.purple,
  green: C.green,
  orange: C.orange,
  blue: C.blue,
  pink: C.pink,
};

const TESTIMONIALS = [
  { name: "Sophie M.", role: "Professeure des écoles — Bombes de graines", rating: 5, text: "Les ateliers de Vanessa ont transformé notre approche pédagogique. Mes élèves ont découvert l'ethnobotanique de manière ludique et créative. Un vrai succès !" },
  { name: "Camille D.", role: "Animatrice MJC — Teinture végétale", rating: 5, text: "Une approche professionnelle et passionnante. Vanessa sait transmettre son savoir avec pédagogie. Les participants repartent enrichis culturellement et créativement." },
  { name: "Jean-Marc L.", role: "Responsable RSE — Kokedama", rating: 5, text: "Nous avons organisé plusieurs ateliers pour nos équipes. L'alliance entre art et botanique a créé une dynamique formidable. Une expérience mémorable !" },
];

const TRUST_ITEMS = [
  { icon: Package, label: "Matériel fourni", sub: "Clé en main" },
  { icon: Leaf, label: "Matériaux naturels", sub: "Éco-responsable" },
  { icon: Users, label: "Accompagnés", sub: "400+ participants" },
  { icon: Shield, label: "Intervenant assuré", sub: "Assurance RC Pro" },
  { icon: MapPin, label: "Île-de-France", sub: "Paris, 78, 92, 95" },
  { icon: Star, label: "Satisfaction client", sub: "5/5 étoiles" },
];

const MARQUEE_1 = "Ethnobotanique ✼ Teinture végétale ✼ Kokedama ✼ Terrarium ✼ Bombes de graines ✼ Couronnes de fleurs ✼ Herbier ✼ Vannerie ✼ ";
const MARQUEE_2 = "Enfants ✼ Adultes ✼ Seniors ✼ Écoles ✼ EHPAD ✼ Entreprises ✼ Team Building ✼ Collectivités ✼ MJC ✼ ";
const MARQUEE_3 = "Rejoignez l'association ✼ Adhérez ✼ Événements ✼ Balades botaniques ✼ Communauté ✼ Espace membres ✼ ";

const DemoManus = () => {
  const [formData, setFormData] = useState({ name: "", email: "", type: "Particulier", project: "" });

  const MarqueeBand = ({ text, bg, repeat = 2 }: { text: string; bg: string; repeat?: number }) => (
    <div className="overflow-hidden py-[14px]" style={{ background: bg }}>
      <div className="flex animate-[marquee_25s_linear_infinite] whitespace-nowrap">
        {Array(repeat).fill(null).map((_, i) => (
          <span key={i} className="text-[18px] uppercase tracking-[2px] px-6" style={{ fontFamily: "Archivo Black, sans-serif", color: C.cream }}>
            {text}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Botanique Ludique — Démo Manus</title>
        <meta name="description" content="Maquette brutalist/éditorial du site Botanique Ludique" />
      </Helmet>

      {/* Grain overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.04]">
        <svg width="100%" height="100%"><filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#grain)"/></svg>
      </div>

      {/* Side nav */}
      <nav className="fixed left-7 top-1/2 -translate-y-1/2 z-[1000] hidden xl:flex flex-col gap-3">
        {NAV_ITEMS.map((item) => (
          <a key={item.label} href={item.href}
            className="flex items-center justify-center px-[18px] py-[10px] text-[11px] uppercase tracking-[1px] border-2 rounded-[50px] transition-all duration-[250ms]"
            style={{
              fontFamily: "Archivo Black, sans-serif",
              background: item.isAsso ? C.purple : C.cream,
              color: item.isAsso ? "white" : C.black,
              borderColor: item.isAsso ? C.purple : C.black,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = C.black;
              e.currentTarget.style.color = C.cream;
              e.currentTarget.style.borderColor = C.black;
              e.currentTarget.style.transform = "scale(1.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = item.isAsso ? C.purple : C.cream;
              e.currentTarget.style.color = item.isAsso ? "white" : C.black;
              e.currentTarget.style.borderColor = item.isAsso ? C.purple : C.black;
              e.currentTarget.style.transform = "scale(1)";
            }}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="min-h-screen" style={{ fontFamily: "DM Sans, sans-serif", background: C.cream, color: C.black }}>

        {/* ═══════ HERO ═══════ */}
        <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImg} alt="Botanique Ludique" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(26,26,26,0.3) 0%, rgba(26,26,26,0.65) 100%)" }} />
          </div>
          <div className="relative z-10 text-center px-[30px] md:px-[60px] max-w-[900px]">
            <h1 className="leading-[0.9] tracking-[-3px] mb-6"
              style={{ fontFamily: "Archivo Black, sans-serif", fontSize: "clamp(60px, 10vw, 130px)", textTransform: "uppercase", color: C.cream }}>
              <span style={{ color: C.oliveLight }}>Botanique</span><br />Ludique
            </h1>
            <p className="text-[22px] italic leading-[1.4] mb-4 max-w-[650px] mx-auto" style={{ color: C.cream, opacity: 0.9 }}>
              Quand l'atelier créatif rencontre l'anthropologie de la nature
            </p>
            <p className="text-[13px] tracking-[3px] uppercase mb-10" style={{ fontFamily: "Space Mono, monospace", color: C.oliveLight }}>
              Paris • Yvelines (78) • Hauts-de-Seine (92) • Val-d'Oise (95)
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/workshops"
                className="inline-flex items-center gap-[10px] px-9 py-4 text-[14px] uppercase tracking-[2px] no-underline transition-all duration-200"
                style={{ fontFamily: "Archivo Black, sans-serif", background: C.orange, color: C.cream, border: `3px solid ${C.orange}` }}
                onMouseEnter={(e) => { e.currentTarget.style.background = C.cream; e.currentTarget.style.color = C.black; e.currentTarget.style.transform = "translate(-3px,-3px)"; e.currentTarget.style.boxShadow = `6px 6px 0 ${C.orange}`; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = C.orange; e.currentTarget.style.color = C.cream; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
                Découvrir les ateliers →
              </Link>
              <Link to="/pro"
                className="inline-flex items-center gap-[10px] px-9 py-4 text-[14px] uppercase tracking-[2px] no-underline bg-transparent transition-all duration-200"
                style={{ fontFamily: "Archivo Black, sans-serif", color: C.cream, border: `3px solid ${C.cream}` }}
                onMouseEnter={(e) => { e.currentTarget.style.background = C.cream; e.currentTarget.style.color = C.black; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.cream; }}>
                Organiser un Team Building
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════ MARQUEE OLIVE ═══════ */}
        <MarqueeBand text={MARQUEE_1} bg={C.olive} repeat={4} />

        {/* ═══════ ABOUT + STATS ═══════ */}
        <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          <div className="px-[60px] py-[80px] flex flex-col justify-center max-lg:px-6 max-lg:py-10">
            <h2 className="text-[48px] uppercase leading-[0.95] tracking-[-1px] mb-6"
              style={{ fontFamily: "Archivo Black, sans-serif" }}>
              Vanessa Charlery
            </h2>
            <p className="text-[16px] leading-[1.8] mb-4" style={{ color: "#555" }}>
              Créée par <strong style={{ color: C.black }}>Vanessa Charlery</strong>, ethnobotaniste et anthropologue, l'association Botanique Ludique propose des ateliers qui allient <strong style={{ color: C.black }}>créativité artistique</strong> et transmission des <strong style={{ color: C.black }}>savoirs ethnobotaniques</strong>.
            </p>
            <p className="text-[16px] leading-[1.8] mb-4" style={{ color: "#555" }}>
              Nos ateliers s'adressent à <strong style={{ color: C.black }}>tous les publics</strong> : enfants dès 4 ans, adultes, seniors en résidence ou EHPAD, écoles et centres de loisirs, MJC, centres sociaux, associations, entreprises et collectivités.
            </p>
            <p className="text-[16px] leading-[1.8]" style={{ color: "#555" }}>
              Chaque pratique explore les <strong style={{ color: C.black }}>relations culturelles entre humains et plantes</strong>, de l'Asie à l'Europe.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-0">
            {[
              { val: "50+", label: "Ateliers réalisés" },
              { val: "400+", label: "Participants" },
              { val: "15+", label: "Partenaires" },
              { val: "2023", label: "Année de création" },
            ].map((s, i) => (
              <div key={i} className="p-10 text-center transition-colors duration-300 flex flex-col items-center justify-center hover:bg-[#D8F3DC]"
                style={{ border: `2px solid ${C.black}`, margin: "-1px" }}>
                <span className="text-[56px] leading-none mb-[6px]" style={{ fontFamily: "Archivo Black, sans-serif", color: C.green }}>{s.val}</span>
                <span className="text-[11px] uppercase tracking-[2px]" style={{ fontFamily: "Space Mono, monospace", color: "#888" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════ GALLERY STRIP ═══════ */}
        <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-0 h-[350px] max-md:h-[250px] overflow-hidden">
          {[galleryImg1, galleryImg2, galleryImg3, galleryImg4, galleryImg5].map((img, i) => (
            <img key={i} src={img} alt={`Galerie ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-[400ms] cursor-pointer hover:scale-105 hover:z-[2] max-md:last:hidden max-md:[&:nth-child(4)]:hidden max-xl:[&:nth-child(4)]:hidden max-xl:last:hidden"
              style={{ border: `2px solid ${C.black}`, margin: "-1px" }}
              loading="lazy" />
          ))}
        </section>

        {/* ═══════ WORKSHOPS ═══════ */}
        <section id="ateliers" className="py-[80px] px-[120px] max-xl:px-[60px] max-md:px-6 max-md:py-10" style={{ background: C.cream }}>
          <h2 className="leading-[0.95] tracking-[-2px] mb-[50px]"
            style={{ fontFamily: "Archivo Black, sans-serif", fontSize: "clamp(48px, 7vw, 90px)", textTransform: "uppercase" }}>
            Nos<br />Ateliers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0">
            {WORKSHOPS.map((w) => (
              <div key={w.num}
                className="relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:z-[2] hover:shadow-[8px_8px_0_#1a1a1a]"
                style={{ padding: "36px 28px", border: `2px solid ${C.black}`, margin: "-1px", background: C.cream }}>
                <div className="absolute top-[10px] right-[14px] text-[56px] leading-none opacity-[0.08]"
                  style={{ fontFamily: "Archivo Black, sans-serif" }}>{w.num}</div>
                {w.img && (
                  <img src={w.img} alt={w.title}
                    className="w-full h-[160px] object-cover mb-4 grayscale-[30%] hover:grayscale-0 transition-all duration-300"
                    style={{ border: `2px solid ${C.black}` }}
                    loading="lazy" />
                )}
                <span className="inline-block text-[10px] uppercase tracking-[2px] px-3 py-1 rounded-[50px] mb-3"
                  style={{ fontFamily: "Space Mono, monospace", color: CAT_COLORS[w.catClass], border: `1.5px solid ${CAT_COLORS[w.catClass]}` }}>
                  {w.cat}
                </span>
                <h3 className="text-[18px] uppercase leading-[1.15] mb-2" style={{ fontFamily: "Archivo Black, sans-serif" }}>{w.title}</h3>
                <p className="text-[13px] leading-[1.5]" style={{ color: "#666" }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════ MARQUEE BLACK ═══════ */}
        <MarqueeBand text={MARQUEE_2} bg={C.black} repeat={4} />

        {/* ═══════ TESTIMONIALS ═══════ */}
        <section id="temoignages" className="py-[80px] px-[120px] max-xl:px-[60px] max-md:px-6 max-md:py-10" style={{ background: "white" }}>
          <h2 className="leading-[0.95] tracking-[-2px] mb-[50px]"
            style={{ fontFamily: "Archivo Black, sans-serif", fontSize: "clamp(48px, 7vw, 90px)", textTransform: "uppercase" }}>
            Ce qu'ils<br />en disent
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-10 relative transition-colors duration-300 hover:bg-[#D8F3DC]"
                style={{ border: `2px solid ${C.black}`, margin: "-1px" }}>
                <div className="text-[72px] leading-none mb-3 opacity-30" style={{ fontFamily: "Archivo Black, sans-serif", color: C.olive }}>"</div>
                <div className="flex gap-1 mb-3 text-[14px]" style={{ color: C.olive }}>
                  {"★".repeat(t.rating)}
                </div>
                <blockquote className="text-[15px] italic leading-[1.6] mb-5" style={{ color: "#444" }}>{t.text}</blockquote>
                <p className="text-[14px] uppercase" style={{ fontFamily: "Archivo Black, sans-serif" }}>{t.name}</p>
                <p className="text-[12px] mt-[2px]" style={{ color: "#888" }}>{t.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════ TRUST BAR ═══════ */}
        <section className="py-[50px] px-[120px] max-xl:px-[60px] max-md:px-6 grid grid-cols-3 md:grid-cols-6 gap-6 text-center" style={{ background: C.creamDark }}>
          {TRUST_ITEMS.map((t, i) => (
            <div key={i} className="flex flex-col items-center">
              <t.icon className="w-7 h-7 mb-2" style={{ color: C.green }} />
              <span className="text-[14px] uppercase block mb-1" style={{ fontFamily: "Archivo Black, sans-serif" }}>{t.sub}</span>
              <span className="text-[12px]" style={{ color: "#888" }}>{t.label}</span>
            </div>
          ))}
        </section>

        {/* ═══════ PARTNERS ═══════ */}
        <section className="py-10 px-[120px] max-xl:px-[60px] max-md:px-6 text-center" style={{ background: C.cream }}>
          <h3 className="text-[12px] uppercase tracking-[3px] mb-[30px]" style={{ fontFamily: "Space Mono, monospace", color: "#aaa" }}>
            Ils nous font confiance
          </h3>
          <div className="flex items-center justify-center gap-10 flex-wrap opacity-50 grayscale hover:opacity-80 hover:grayscale-[50%] transition-all duration-300">
            {/* Placeholder logos */}
            {["Région IDF", "MJC Vésinet", "MJC Chatou", "Publicis", "F93"].map((name) => (
              <span key={name} className="text-[13px] uppercase tracking-[2px] px-4 py-2 border rounded"
                style={{ fontFamily: "Space Mono, monospace", borderColor: "#ccc", color: "#999" }}>
                {name}
              </span>
            ))}
          </div>
        </section>

        {/* ═══════ MARQUEE PURPLE ═══════ */}
        <MarqueeBand text={MARQUEE_3} bg={C.purple} repeat={4} />

        {/* ═══════ ASSOCIATION ═══════ */}
        <section id="association" className="relative overflow-hidden">
          <div className="relative py-[80px] px-[120px] max-xl:px-[60px] max-md:px-6 max-md:py-10" style={{ background: C.purple, color: "white" }}>
            {/* Decorative circle */}
            <div className="absolute -top-20 -right-[60px] w-[400px] h-[400px] rounded-full" style={{ background: "rgba(255,255,255,0.06)" }} />
            <h2 className="relative leading-[0.95] tracking-[-2px] mb-4"
              style={{ fontFamily: "Archivo Black, sans-serif", fontSize: "clamp(48px, 7vw, 90px)", textTransform: "uppercase" }}>
              L'Asso­ciation
            </h2>
            <p className="relative text-[16px] max-w-[500px] opacity-80 leading-[1.6] mb-[50px]" style={{ fontFamily: "Space Mono, monospace" }}>
              Un espace dédié à notre communauté de passionnés du monde végétal. Adhérer, participer, partager.
            </p>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0">
              {[
                { icon: "✍️", title: "Adhésion en ligne", desc: "Rejoignez l'asso en quelques clics. Adhésion à prix libre, accès aux événements et à l'espace membres.", cta: "Adhérer →" },
                { icon: "📅", title: "Agenda", desc: "Balades botaniques, sorties nature, ateliers ouverts, assemblée générale... Tous nos événements.", cta: "Voir l'agenda →" },
                { icon: "🔒", title: "Espace membres", desc: "Ressources réservées : comptes-rendus, photos des sorties, fiches botaniques, documents de l'asso.", cta: "Se connecter →" },
                { icon: "🤝", title: "L'équipe", desc: "Les membres du bureau, les bénévoles et intervenants qui font vivre Botanique Ludique.", cta: "Découvrir →" },
              ].map((item, i) => (
                <div key={i} className="p-[50px_40px] cursor-pointer transition-all duration-300 hover:bg-white/[0.08]"
                  style={{ border: "2px solid rgba(255,255,255,0.12)", margin: "-1px" }}>
                  <span className="text-[36px] block mb-5">{item.icon}</span>
                  <h3 className="text-[22px] uppercase mb-3" style={{ fontFamily: "Archivo Black, sans-serif" }}>{item.title}</h3>
                  <p className="text-[14px] leading-[1.6] mb-[18px]" style={{ color: "rgba(255,255,255,0.6)" }}>{item.desc}</p>
                  <span className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[2px] no-underline transition-all duration-300 hover:gap-4"
                    style={{ fontFamily: "Archivo Black, sans-serif", color: C.yellow }}>
                    {item.cta}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* CTA Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 px-[120px] py-[30px] max-xl:px-[60px] max-md:px-6 max-md:text-center"
            style={{ background: C.yellowBright }}>
            <h3 className="text-[26px] uppercase" style={{ fontFamily: "Archivo Black, sans-serif", color: C.black }}>
              Envie de nous rejoindre ?
            </h3>
            <Link to="/about"
              className="inline-flex items-center gap-[10px] px-9 py-4 text-[14px] uppercase tracking-[2px] no-underline transition-all duration-200 text-white"
              style={{ fontFamily: "Archivo Black, sans-serif", background: C.purple, border: `3px solid ${C.black}` }}
              onMouseEnter={(e) => { e.currentTarget.style.background = C.black; e.currentTarget.style.transform = "translate(-3px,-3px)"; e.currentTarget.style.boxShadow = `6px 6px 0 ${C.purple}`; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = C.purple; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
              Adhérer maintenant →
            </Link>
          </div>
        </section>

        {/* ═══════ CONTACT ═══════ */}
        <section id="contact" className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left */}
          <div className="relative overflow-hidden px-[60px] py-[80px] max-md:px-6 max-md:py-10 flex flex-col justify-center" style={{ background: C.green, color: "white" }}>
            <div className="absolute -bottom-[60px] -right-[60px] w-[300px] h-[300px] rounded-full" style={{ background: "rgba(255,255,255,0.06)" }} />
            <h2 className="relative text-[52px] uppercase leading-[0.95] mb-6 max-md:text-[36px]" style={{ fontFamily: "Archivo Black, sans-serif" }}>
              Prêt·e à explorer le monde végétal ?
            </h2>
            <p className="relative text-[16px] opacity-80 leading-[1.7] mb-[30px] max-w-[400px]">
              Rejoignez-nous pour un atelier à Paris, Yvelines, Hauts-de-Seine ou Val-d'Oise.
            </p>
            <div className="relative space-y-4">
              {[
                { icon: "✉", text: "contact@botaniqueludique.com" },
                { icon: "📞", text: "06 09 83 16 06" },
                { icon: "📸", text: "@botanique.ludique" },
                { icon: "📍", text: "Île-de-France" },
              ].map((d, i) => (
                <div key={i} className="flex items-center gap-4 text-[15px]">
                  <span className="w-10 h-10 rounded-full flex items-center justify-center text-[14px]" style={{ border: "2px solid rgba(255,255,255,0.25)" }}>{d.icon}</span>
                  <span>{d.text}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Right - Form */}
          <div className="px-[60px] py-[80px] max-md:px-6 max-md:py-10 flex flex-col justify-center" style={{ background: C.creamDark }}>
            <h3 className="text-[28px] uppercase mb-[30px]" style={{ fontFamily: "Archivo Black, sans-serif" }}>Demande de devis</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <div>
                  <label className="block text-[11px] uppercase tracking-[2px] mb-2" style={{ fontFamily: "Space Mono, monospace" }}>Nom</label>
                  <input type="text" placeholder="Votre nom"
                    className="w-full px-4 py-[14px] text-[15px] transition-all duration-200 outline-none focus:translate-x-[-2px] focus:translate-y-[-2px]"
                    style={{ background: C.cream, border: `2px solid ${C.black}`, fontFamily: "DM Sans, sans-serif" }}
                    onFocus={(e) => e.currentTarget.style.boxShadow = `4px 4px 0 ${C.green}`}
                    onBlur={(e) => { e.currentTarget.style.boxShadow = ""; e.currentTarget.style.transform = ""; }}
                    value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-[2px] mb-2" style={{ fontFamily: "Space Mono, monospace" }}>Email</label>
                  <input type="email" placeholder="votre@email.fr"
                    className="w-full px-4 py-[14px] text-[15px] transition-all duration-200 outline-none focus:translate-x-[-2px] focus:translate-y-[-2px]"
                    style={{ background: C.cream, border: `2px solid ${C.black}`, fontFamily: "DM Sans, sans-serif" }}
                    onFocus={(e) => e.currentTarget.style.boxShadow = `4px 4px 0 ${C.green}`}
                    onBlur={(e) => { e.currentTarget.style.boxShadow = ""; e.currentTarget.style.transform = ""; }}
                    value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
              </div>
              <div className="mb-5">
                <label className="block text-[11px] uppercase tracking-[2px] mb-2" style={{ fontFamily: "Space Mono, monospace" }}>Vous êtes</label>
                <select
                  className="w-full px-4 py-[14px] text-[15px] outline-none transition-all duration-200"
                  style={{ background: C.cream, border: `2px solid ${C.black}`, fontFamily: "DM Sans, sans-serif" }}
                  onFocus={(e) => e.currentTarget.style.boxShadow = `4px 4px 0 ${C.green}`}
                  onBlur={(e) => e.currentTarget.style.boxShadow = ""}
                  value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
                  <option>Particulier</option>
                  <option>Enseignant(e)</option>
                  <option>Entreprise / Team Building</option>
                  <option>Collectivité / Association</option>
                  <option>EHPAD / Santé</option>
                  <option>MJC / Centre de loisirs</option>
                </select>
              </div>
              <div className="mb-5">
                <label className="block text-[11px] uppercase tracking-[2px] mb-2" style={{ fontFamily: "Space Mono, monospace" }}>Votre projet</label>
                <textarea placeholder="Type d'atelier, nombre de participants, dates envisagées..."
                  className="w-full px-4 py-[14px] text-[15px] min-h-[100px] resize-y outline-none transition-all duration-200"
                  style={{ background: C.cream, border: `2px solid ${C.black}`, fontFamily: "DM Sans, sans-serif" }}
                  onFocus={(e) => e.currentTarget.style.boxShadow = `4px 4px 0 ${C.green}`}
                  onBlur={(e) => e.currentTarget.style.boxShadow = ""}
                  value={formData.project} onChange={(e) => setFormData({ ...formData, project: e.target.value })} />
              </div>
              <button type="submit"
                className="w-full py-4 text-[15px] uppercase tracking-[3px] cursor-pointer transition-all duration-200"
                style={{ fontFamily: "Archivo Black, sans-serif", background: C.orange, color: C.cream, border: `3px solid ${C.black}` }}
                onMouseEnter={(e) => { e.currentTarget.style.background = C.black; e.currentTarget.style.transform = "translate(-3px,-3px)"; e.currentTarget.style.boxShadow = `6px 6px 0 ${C.orange}`; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = C.orange; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
                Envoyer →
              </button>
            </form>
          </div>
        </section>

        {/* ═══════ NEWSLETTER ═══════ */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-[120px] py-[50px] max-xl:px-[60px] max-md:px-6 max-md:flex-col max-md:text-center"
          style={{ background: C.black, color: C.cream }}>
          <h3 className="text-[28px] uppercase shrink-0" style={{ fontFamily: "Archivo Black, sans-serif" }}>Restez informé·e</h3>
          <div className="flex gap-0 flex-1 max-w-[500px] w-full">
            <input type="email" placeholder="Votre email"
              className="flex-1 px-[18px] py-[14px] text-[15px] outline-none"
              style={{ background: "transparent", border: `2px solid ${C.cream}`, color: C.cream, fontFamily: "DM Sans, sans-serif" }} />
            <button className="px-7 py-[14px] text-[13px] uppercase tracking-[2px] cursor-pointer transition-colors duration-200 hover:bg-[#E76F51]"
              style={{ fontFamily: "Archivo Black, sans-serif", background: C.olive, color: C.cream, border: `2px solid ${C.cream}` }}>
              S'inscrire
            </button>
          </div>
        </div>

        {/* ═══════ FOOTER ═══════ */}
        <footer className="px-[120px] pt-[60px] pb-[30px] max-xl:px-[60px] max-md:px-6" style={{ background: C.black, color: C.cream }}>
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-10">
            <div>
              <h3 className="text-[24px] uppercase mb-3" style={{ fontFamily: "Archivo Black, sans-serif" }}>Botanique Ludique</h3>
              <p className="text-[13px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.4)" }}>
                Ateliers créatifs pour reconnecter l'humain au végétal. Créé avec amour et nature.
              </p>
            </div>
            <div>
              <h4 className="text-[12px] uppercase tracking-[2px] mb-4" style={{ fontFamily: "Archivo Black, sans-serif", color: "rgba(255,255,255,0.3)" }}>Ateliers</h4>
              <ul className="space-y-[10px]">
                {["Teinture végétale", "Kokedama", "Terrariums", "Couronnes de fleurs", "Herbier", "Vannerie"].map(a => (
                  <li key={a}><Link to="/workshops" className="text-[14px] no-underline transition-colors duration-200 hover:text-[#C5D086]" style={{ color: "rgba(255,255,255,0.6)" }}>{a}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[12px] uppercase tracking-[2px] mb-4" style={{ fontFamily: "Archivo Black, sans-serif", color: "rgba(255,255,255,0.3)" }}>Pro</h4>
              <ul className="space-y-[10px]">
                {[
                  { label: "Team Building", to: "/team-building-nature-entreprise" },
                  { label: "Établissements scolaires", to: "/animation-scolaire-nature" },
                  { label: "Collectivités", to: "/animation-collectivites-mairies" },
                  { label: "EHPAD & Santé", to: "/animation-seniors-ehpad" },
                  { label: "Événementiel", to: "/atelier-botanique-evenement" },
                ].map(a => (
                  <li key={a.label}><Link to={a.to} className="text-[14px] no-underline transition-colors duration-200 hover:text-[#C5D086]" style={{ color: "rgba(255,255,255,0.6)" }}>{a.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[12px] uppercase tracking-[2px] mb-4" style={{ fontFamily: "Archivo Black, sans-serif", color: "rgba(255,255,255,0.3)" }}>Infos</h4>
              <ul className="space-y-[10px]">
                {[
                  { label: "Blog", to: "/blog" },
                  { label: "Galerie", to: "/gallery" },
                  { label: "Agenda", to: "/agenda" },
                  { label: "FAQ", to: "/faq" },
                  { label: "Mentions légales", to: "/mentions-legales" },
                ].map(a => (
                  <li key={a.label}><Link to={a.to} className="text-[14px] no-underline transition-colors duration-200 hover:text-[#C5D086]" style={{ color: "rgba(255,255,255,0.6)" }}>{a.label}</Link></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-6 gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <p className="text-[11px] uppercase tracking-[1px]" style={{ fontFamily: "Space Mono, monospace", color: "rgba(255,255,255,0.3)" }}>
              © 2026 Botanique Ludique • Créé avec amour et nature
            </p>
            <div className="flex gap-[10px]">
              {[Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 flex items-center justify-center transition-all duration-200 hover:bg-[#2D6A4F] hover:border-[#2D6A4F] hover:text-white"
                  style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)" }}>
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
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
