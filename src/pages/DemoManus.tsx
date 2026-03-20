import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Star, Package, Shield, Users, MapPin, Leaf, Send, Heart, Calendar, Lock, UserPlus } from "lucide-react";

import heroImg from "@/assets/hero-background-new.webp";
import galleryImg1 from "@/assets/gallery-kokedama-garden.webp";
import galleryImg2 from "@/assets/gallery-teinture-1.webp";
import galleryImg3 from "@/assets/gallery-terrarium.webp";
import galleryImg4 from "@/assets/gallery-flower-crown.webp";
import galleryImg5 from "@/assets/gallery-sachet-senteur.webp";

import workshopTeinture from "@/assets/workshop-dyeing.jpg";
import workshopKokedama from "@/assets/workshop-kokedama.jpg";
import workshopTerrarium from "@/assets/workshop-terrarium.jpg";
import workshopBombes from "@/assets/workshop-seed-bombs.jpg";
import workshopHerbier from "@/assets/workshop-herbarium.jpg";
import workshopVannerie from "@/assets/workshop-basketry.jpg";
import workshopSachets from "@/assets/workshop-sachets.jpg";
import workshopCouronnes from "@/assets/workshop-flower-crown.jpg";

/* ─── palette ─── */
const C = {
  cream: "#F5F0E8",
  creamDark: "#EDE7DA",
  black: "#1a1a1a",
  green: "#2D6A4F",
  greenBright: "#40916C",
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
};

/* ─── Botanical SVG nav icons ─── */
const LeafNav = () => (
  <svg viewBox="0 0 62 62" className="w-14 h-14">
    <path fill="currentColor" d="M31 6 C14 14, 8 28, 12 44 C16 54, 26 58, 31 56 C36 58, 46 54, 50 44 C54 28, 48 14, 31 6Z"/>
    <path fill="none" stroke={C.black} strokeWidth="1.5" d="M31 12 L31 50"/>
    <path fill="none" stroke={C.black} strokeWidth="1" d="M31 22 L22 28 M31 22 L40 28 M31 32 L20 37 M31 32 L42 37"/>
  </svg>
);
const MonsteraNav = () => (
  <svg viewBox="0 0 62 62" className="w-14 h-14">
    <path fill="currentColor" d="M31 5 C18 8, 7 18, 8 32 C9 42, 14 50, 24 55 C28 57, 34 57, 38 55 C48 50, 53 42, 54 32 C55 18, 44 8, 31 5Z"/>
    <ellipse cx="22" cy="28" rx="5" ry="6" fill={C.cream} stroke={C.black} strokeWidth="1"/>
    <ellipse cx="40" cy="28" rx="5" ry="6" fill={C.cream} stroke={C.black} strokeWidth="1"/>
    <ellipse cx="31" cy="42" rx="4" ry="5" fill={C.cream} stroke={C.black} strokeWidth="1"/>
    <path fill="none" stroke={C.black} strokeWidth="1.2" d="M31 10 L31 52"/>
  </svg>
);
const FlowerNav = () => (
  <svg viewBox="0 0 62 62" className="w-14 h-14">
    {[0, 72, 144, 216, 288].map(r => (
      <ellipse key={r} fill="currentColor" cx="31" cy="16" rx="9" ry="12" transform={`rotate(${r} 31 31)`}/>
    ))}
    <circle cx="31" cy="31" r="7" fill={C.cream} stroke={C.black} strokeWidth="1.8"/>
  </svg>
);
const GinkgoNav = () => (
  <svg viewBox="0 0 62 62" className="w-14 h-14">
    <path fill="currentColor" d="M31 54 L31 30 C31 30, 10 6, 8 14 C6 22, 16 30, 31 30 C46 30, 56 22, 54 14 C52 6, 31 30, 31 30Z"/>
    <path fill="none" stroke={C.black} strokeWidth="0.8" d="M31 30 L20 14 M31 30 L14 18 M31 30 L42 14 M31 30 L48 18"/>
    <path fill={C.cream} stroke={C.black} strokeWidth="1" d="M29 10 Q31 22, 33 10"/>
  </svg>
);
const SprigNav = () => (
  <svg viewBox="0 0 62 62" className="w-14 h-14">
    <path fill="none" stroke={C.black} strokeWidth="1.5" d="M31 56 C31 56, 30 40, 31 28 C32 16, 31 8, 31 8"/>
    {[
      "M31 18 C26 14, 14 12, 14 18 C14 24, 26 22, 31 18Z",
      "M31 18 C36 14, 48 12, 48 18 C48 24, 36 22, 31 18Z",
      "M31 30 C26 26, 16 24, 16 30 C16 36, 26 34, 31 30Z",
      "M31 30 C36 26, 46 24, 46 30 C46 36, 36 34, 31 30Z",
      "M31 42 C27 38, 18 37, 18 42 C18 47, 27 46, 31 42Z",
      "M31 42 C35 38, 44 37, 44 42 C44 47, 35 46, 31 42Z",
    ].map((d, i) => <path key={i} fill="currentColor" stroke={C.black} strokeWidth="1" d={d}/>)}
  </svg>
);

const NAV_ITEMS = [
  { id: "accueil", label: "Accueil", Icon: LeafNav, color: C.green, hoverColor: C.greenBright },
  { id: "apropos", label: "À propos", Icon: MonsteraNav, color: C.purple, hoverColor: "#8B52A0" },
  { id: "ateliers", label: "Ateliers", Icon: FlowerNav, color: C.orange, hoverColor: C.orangeLight },
  { id: "temoignages", label: "Avis", Icon: GinkgoNav, color: C.pink, hoverColor: "#F0B8D0" },
  { id: "contact", label: "Contact", Icon: SprigNav, color: C.olive, hoverColor: C.oliveLight },
];

const WORKSHOPS = [
  { num: "01", title: "Teinture Végétale", cat: "Créations textiles", catColor: C.purple, desc: "Découverte des pigments naturels et création de tissus teints à partir de plantes tinctoriales.", img: workshopTeinture },
  { num: "02", title: "Kokedama", cat: "Jardinage", catColor: C.green, desc: "Art japonais de la boule de mousse. Créez votre propre composition végétale suspendue.", img: workshopKokedama },
  { num: "03", title: "Terrariums", cat: "Jardinage", catColor: C.green, desc: "Créez un écosystème miniature dans un bocal en verre. Un jardin autonome à emporter.", img: workshopTerrarium },
  { num: "04", title: "Couronnes de Fleurs", cat: "Art floral", catColor: C.orange, desc: "Compositions florales fraîches ou séchées. Apprenez l'art de tresser la nature.", img: workshopCouronnes },
  { num: "05", title: "Bombes de Graines", cat: "Jardinage", catColor: C.green, desc: "Fabriquez des bombes de graines pour reverdir la ville. Idéal en atelier scolaire.", img: workshopBombes },
  { num: "06", title: "Herbier", cat: "Art floral", catColor: C.orange, desc: "Collecte, pressage et mise en valeur de spécimens botaniques. Entre science et art.", img: workshopHerbier },
  { num: "07", title: "Vannerie", cat: "Artisanat", catColor: C.blue, desc: "Techniques ancestrales de tressage végétal. Créez paniers et objets en fibres naturelles.", img: workshopVannerie },
  { num: "08", title: "Sachets Senteur & Eaux Florales", cat: "Bien-être", catColor: C.pink, desc: "Création de sachets parfumés et d'eaux florales à partir de plantes aromatiques.", img: workshopSachets },
];

const TESTIMONIALS = [
  { name: "Sophie M.", role: "Professeure des écoles — Bombes de graines", text: "Les ateliers de Vanessa ont transformé notre approche pédagogique. Mes élèves ont découvert l'ethnobotanique de manière ludique et créative. Un vrai succès !" },
  { name: "Camille D.", role: "Animatrice MJC — Teinture végétale", text: "Une approche professionnelle et passionnante. Vanessa sait transmettre son savoir avec pédagogie. Les participants repartent enrichis culturellement et créativement." },
  { name: "Jean-Marc L.", role: "Responsable RSE — Kokedama", text: "Nous avons organisé plusieurs ateliers pour nos équipes. L'alliance entre art et botanique a créé une dynamique formidable. Une expérience mémorable !" },
];

const TRUST_ITEMS = [
  { icon: Package, label: "Clé en main", sub: "Matériel fourni" },
  { icon: Leaf, label: "Éco-responsable", sub: "Matériaux naturels" },
  { icon: Users, label: "400+ participants", sub: "Accompagnés" },
  { icon: Shield, label: "Assurance RC Pro", sub: "Intervenant assuré" },
  { icon: MapPin, label: "Paris, 78, 92, 95", sub: "Île-de-France" },
  { icon: Star, label: "5/5 étoiles", sub: "Satisfaction client" },
];

/* ─── Marquee Band ─── */
const Marquee = ({ bg, items, speed = 25 }: { bg: string; items: string[]; speed?: number }) => {
  const track = items.join(" ✼ ") + " ✼ ";
  return (
    <div className="overflow-hidden py-5 border-y border-[#1a1a1a]/20" style={{ background: bg }}>
      <div className="flex whitespace-nowrap" style={{ animation: `marquee ${speed}s linear infinite` }}>
        {Array(4).fill(track).map((t, i) => (
          <span key={i} className="text-[#F5F0E8] px-8 text-[28px] tracking-[3px] uppercase" style={{ fontFamily: "Archivo Black, sans-serif" }}>{t}</span>
        ))}
      </div>
    </div>
  );
};

const DemoManus = () => {
  const [formData, setFormData] = useState({ name: "", email: "", type: "", project: "" });
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  return (
    <>
      <Helmet>
        <title>Botanique Ludique — Démo Manus V2</title>
        <meta name="description" content="Maquette brutalist/éditorial du site Botanique Ludique — Version 2" />
      </Helmet>

      {/* Grain overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.04]">
        <svg width="100%" height="100%"><filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#grain)"/></svg>
      </div>

      {/* ═══ BOTANICAL FLOATING NAV ═══ */}
      <nav className="fixed left-5 top-1/2 -translate-y-1/2 z-[1000] hidden xl:flex flex-col gap-2.5 items-center">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="relative group transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1"
            style={{ filter: hoveredNav === item.id ? `drop-shadow(6px 6px 0 rgba(26,26,26,0.35))` : "none", color: hoveredNav === item.id ? item.hoverColor : item.color }}
            onMouseEnter={() => setHoveredNav(item.id)}
            onMouseLeave={() => setHoveredNav(null)}
          >
            <item.Icon />
            <span
              className="absolute left-1/2 -translate-x-1/2 -bottom-1 px-2.5 py-0.5 text-[9px] uppercase tracking-[1px] whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:-bottom-2.5 transition-all duration-300 pointer-events-none"
              style={{ fontFamily: "Archivo Black, sans-serif", background: C.black, color: C.cream }}
            >
              {item.label}
            </span>
          </a>
        ))}
      </nav>

      <div className="min-h-screen" style={{ fontFamily: "DM Sans, sans-serif", background: C.cream, color: C.black }}>

        {/* ═══ HERO ═══ */}
        <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[#1a1a1a]">
            <img src={heroImg} alt="Botanique Ludique" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(26,26,26,0.2) 0%, rgba(26,26,26,0.55) 100%)" }} />
          </div>
          <div className="relative z-10 text-center px-8 max-w-[900px]">
            <h1 className="leading-[0.9] tracking-[-3px] mb-6" style={{ fontFamily: "Archivo Black, sans-serif", fontSize: "clamp(60px, 10vw, 130px)", color: C.cream }}>
              <span style={{ color: C.oliveLight }}>BOTANIQUE</span><br />LUDIQUE
            </h1>
            <p className="text-[22px] italic opacity-90 max-w-[650px] mx-auto mb-4 leading-[1.4]" style={{ color: C.cream }}>
              Quand l'atelier créatif rencontre l'anthropologie de la nature
            </p>
            <p className="text-[13px] tracking-[3px] uppercase mb-10" style={{ fontFamily: "Space Mono, monospace", color: C.oliveLight }}>
              Paris • Yvelines (78) • Hauts-de-Seine (92) • Val-d'Oise (95)
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#ateliers" className="inline-flex items-center gap-2.5 px-9 py-4 text-[14px] uppercase tracking-[2px] no-underline border-[3px] transition-all duration-200"
                style={{ fontFamily: "Archivo Black, sans-serif", background: C.orange, color: C.cream, borderColor: C.orange }}
                onMouseEnter={e => { e.currentTarget.style.background = C.cream; e.currentTarget.style.color = C.black; e.currentTarget.style.transform = "translate(-3px,-3px)"; e.currentTarget.style.boxShadow = `6px 6px 0 ${C.orange}`; }}
                onMouseLeave={e => { e.currentTarget.style.background = C.orange; e.currentTarget.style.color = C.cream; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
                Découvrir les ateliers →
              </a>
              <a href="#contact" className="inline-flex items-center gap-2.5 px-9 py-4 text-[14px] uppercase tracking-[2px] no-underline border-[3px] bg-transparent transition-all duration-200"
                style={{ fontFamily: "Archivo Black, sans-serif", color: C.cream, borderColor: C.cream }}
                onMouseEnter={e => { e.currentTarget.style.background = C.cream; e.currentTarget.style.color = C.black; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.cream; }}>
                Organiser un Team Building
              </a>
            </div>
          </div>
        </section>

        {/* ═══ MARQUEE 1 — OLIVE ═══ */}
        <Marquee bg={C.olive} items={["Ethnobotanique", "Teinture végétale", "Kokedama", "Terrarium", "Bombes de graines", "Couronnes de fleurs", "Herbier", "Vannerie"]} />

        {/* ═══ ABOUT + STATS ═══ */}
        <section id="apropos" className="grid md:grid-cols-2 min-h-[500px]">
          <div className="p-10 md:p-20 flex flex-col justify-center">
            <h2 className="text-[48px] uppercase leading-[0.95] mb-6 tracking-[-1px]" style={{ fontFamily: "Archivo Black, sans-serif" }}>Vanessa Charlery</h2>
            <p className="text-[16px] leading-[1.8] text-[#555] mb-4">
              Créée par <strong className="text-[#1a1a1a]">Vanessa Charlery</strong>, animatrice ethnobotaniste, l'association Botanique Ludique propose des ateliers qui allient <strong className="text-[#1a1a1a]">créativité artistique</strong> et transmission des <strong className="text-[#1a1a1a]">savoirs ethnobotaniques</strong>.
            </p>
            <p className="text-[16px] leading-[1.8] text-[#555] mb-4">
              Nos ateliers s'adressent à <strong className="text-[#1a1a1a]">tous les publics</strong> : enfants dès 4 ans, adultes, seniors en résidence ou EHPAD, écoles et centres de loisirs, MJC, centres sociaux, associations, entreprises et collectivités.
            </p>
            <p className="text-[16px] leading-[1.8] text-[#555]">
              Chaque pratique explore les <strong className="text-[#1a1a1a]">relations culturelles entre humains et plantes</strong>, de l'Asie à l'Europe.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-0">
            {[
              { val: "50+", label: "Ateliers réalisés" },
              { val: "400+", label: "Participants" },
              { val: "15+", label: "Partenaires" },
              { val: "2023", label: "Année de création" },
            ].map((s, i) => (
              <div key={i} className="p-10 text-center transition-colors duration-300 hover:bg-[#D8F3DC]" style={{ border: `2px solid ${C.black}`, margin: "-1px" }}>
                <div className="text-[56px] leading-none mb-1.5" style={{ fontFamily: "Archivo Black, sans-serif", color: C.green }}>{s.val}</div>
                <div className="text-[11px] uppercase tracking-[2px] text-[#888]" style={{ fontFamily: "Space Mono, monospace" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ GALLERY STRIP ═══ */}
        <div className="h-[380px] overflow-hidden relative" style={{ borderTop: `2px solid ${C.black}`, borderBottom: `2px solid ${C.black}` }}>
          <div className="flex h-full gap-0" style={{ animation: "gallery-scroll 30s linear infinite" }}>
            {[galleryImg1, galleryImg2, galleryImg3, galleryImg4, galleryImg5, galleryImg1, galleryImg2, galleryImg3, galleryImg4, galleryImg5].map((img, i) => (
              <img key={i} src={img} alt={`Galerie ${i + 1}`} className="h-full object-cover object-center transition-[filter] duration-400 hover:brightness-105" style={{ width: 340, minWidth: 340, borderRight: `2px solid ${C.black}`, filter: "grayscale(15%)" }}
                onMouseEnter={e => { e.currentTarget.style.filter = "grayscale(0%) brightness(1.05)"; }}
                onMouseLeave={e => { e.currentTarget.style.filter = "grayscale(15%)"; }}
                loading="lazy" />
            ))}
          </div>
        </div>

        {/* ═══ ATELIERS ═══ */}
        <section id="ateliers" className="p-10 md:p-20 md:pl-[170px]" style={{ background: C.cream }}>
          <h2 className="uppercase leading-[0.95] mb-12 tracking-[-2px]" style={{ fontFamily: "Archivo Black, sans-serif", fontSize: "clamp(48px, 7vw, 90px)" }}>
            Nos<br/>Ateliers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {WORKSHOPS.map((w) => (
              <div key={w.num} className="relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:z-10 hover:shadow-[8px_8px_0_#1a1a1a] cursor-pointer" style={{ padding: "36px 28px", border: `2px solid ${C.black}`, margin: "-1px", background: C.cream }}>
                <div className="text-[56px] leading-none opacity-[0.08] absolute top-2.5 right-3.5" style={{ fontFamily: "Archivo Black, sans-serif" }}>{w.num}</div>
                {w.img && (
                  <img src={w.img} alt={w.title} className="w-full h-40 object-cover mb-4 transition-[filter] duration-300 grayscale-[30%] hover:grayscale-0" style={{ border: `2px solid ${C.black}` }} loading="lazy" />
                )}
                <span className="inline-block text-[10px] uppercase tracking-[2px] px-3 py-1 rounded-full mb-3" style={{ fontFamily: "Space Mono, monospace", color: w.catColor, border: `1.5px solid ${w.catColor}` }}>{w.cat}</span>
                <h3 className="text-[18px] uppercase mb-2 leading-[1.15]" style={{ fontFamily: "Archivo Black, sans-serif" }}>{w.title}</h3>
                <p className="text-[13px] leading-[1.5] text-[#666]">{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ MARQUEE 2 — BLACK ═══ */}
        <Marquee bg={C.black} items={["Enfants", "Adultes", "Seniors", "Écoles", "EHPAD", "Entreprises", "Team Building", "Collectivités", "MJC"]} />

        {/* ═══ TESTIMONIALS ═══ */}
        <section id="temoignages" className="p-10 md:p-20 bg-white">
          <h2 className="uppercase leading-[0.95] mb-12 tracking-[-2px]" style={{ fontFamily: "Archivo Black, sans-serif", fontSize: "clamp(48px, 7vw, 90px)" }}>
            Ce qu'ils<br/>en disent
          </h2>
          <div className="grid md:grid-cols-3 gap-0">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="relative p-10 transition-colors duration-300 hover:bg-[#D8F3DC]" style={{ border: `2px solid ${C.black}`, margin: "-1px" }}>
                <div className="text-[72px] leading-none opacity-30 mb-3" style={{ fontFamily: "Archivo Black, sans-serif", color: C.olive }}>"</div>
                <div className="text-[14px] mb-3" style={{ color: C.olive }}>★★★★★</div>
                <blockquote className="text-[15px] italic leading-[1.6] text-[#444] mb-5">{t.text}</blockquote>
                <div className="text-[14px] uppercase" style={{ fontFamily: "Archivo Black, sans-serif" }}>{t.name}</div>
                <div className="text-[12px] text-[#888] mt-0.5">{t.role}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ MARQUEE 3 — GREEN ═══ */}
        <Marquee bg={C.green} items={["Nature", "Créativité", "Ethnobotanique", "Savoir-faire", "Partage"]} />

        {/* ═══ TRUST BAR ═══ */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 p-12 md:px-20 text-center" style={{ background: C.creamDark }}>
          {TRUST_ITEMS.map((t, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <t.icon className="w-7 h-7" style={{ color: C.green }} />
              <strong className="text-[14px] uppercase" style={{ fontFamily: "Archivo Black, sans-serif" }}>{t.label}</strong>
              <span className="text-[12px] text-[#888]">{t.sub}</span>
            </div>
          ))}
        </div>

        {/* ═══ MARQUEE 4 — PURPLE ═══ */}
        <Marquee bg={C.purple} items={["Rejoignez l'association", "Adhérez", "Événements", "Balades botaniques", "Communauté", "Espace membres"]} />

        {/* ═══ ASSOCIATION ═══ */}
        <section id="association" className="relative overflow-hidden">
          <div className="p-10 md:p-20 relative" style={{ background: C.purple, color: "white" }}>
            <div className="absolute -top-20 -right-[60px] w-[400px] h-[400px] rounded-full bg-white/[0.06]" />
            <h2 className="uppercase leading-[0.95] mb-4 tracking-[-2px]" style={{ fontFamily: "Archivo Black, sans-serif", fontSize: "clamp(48px, 7vw, 90px)" }}>L'Asso­ciation</h2>
            <p className="text-[16px] max-w-[500px] opacity-80 leading-[1.6] mb-12" style={{ fontFamily: "Space Mono, monospace" }}>
              Un espace dédié à notre communauté de passionnés du monde végétal. Adhérer, participer, partager.
            </p>
            <div className="grid md:grid-cols-2 gap-0">
              {[
                { icon: "✍️", title: "Adhésion en ligne", desc: "Rejoignez l'asso en quelques clics. Adhésion à prix libre, accès aux événements et à l'espace membres.", cta: "Adhérer →" },
                { icon: "📅", title: "Agenda", desc: "Balades botaniques, sorties nature, ateliers ouverts, assemblée générale... Tous nos événements.", cta: "Voir l'agenda →" },
                { icon: "🔒", title: "Espace membres", desc: "Ressources réservées : comptes-rendus, photos des sorties, fiches botaniques, documents de l'asso.", cta: "Se connecter →" },
                { icon: "🤝", title: "L'équipe", desc: "Les membres du bureau, les bénévoles et intervenants qui font vivre Botanique Ludique.", cta: "Découvrir →" },
              ].map((item, i) => (
                <div key={i} className="p-12 transition-colors duration-300 hover:bg-white/[0.08] group" style={{ border: "2px solid rgba(255,255,255,0.12)", margin: "-1px" }}>
                  <span className="text-4xl block mb-5">{item.icon}</span>
                  <h3 className="text-[22px] uppercase mb-3" style={{ fontFamily: "Archivo Black, sans-serif" }}>{item.title}</h3>
                  <p className="text-[14px] leading-[1.6] text-white/60 mb-5">{item.desc}</p>
                  <span className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[2px] no-underline transition-[gap] duration-300 group-hover:gap-4" style={{ fontFamily: "Archivo Black, sans-serif", color: C.yellow }}>
                    {item.cta}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* CTA Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between p-8 md:px-20 gap-5" style={{ background: C.yellowBright }}>
            <h3 className="text-[26px] uppercase" style={{ fontFamily: "Archivo Black, sans-serif", color: C.black }}>Envie de nous rejoindre ?</h3>
            <a href="#" className="inline-flex items-center gap-2.5 px-9 py-4 text-[14px] uppercase tracking-[2px] no-underline border-[3px] transition-all duration-200"
              style={{ fontFamily: "Archivo Black, sans-serif", background: C.purple, color: "white", borderColor: C.black }}
              onMouseEnter={e => { e.currentTarget.style.background = C.black; e.currentTarget.style.transform = "translate(-3px,-3px)"; e.currentTarget.style.boxShadow = `6px 6px 0 ${C.purple}`; }}
              onMouseLeave={e => { e.currentTarget.style.background = C.purple; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
              Adhérer maintenant →
            </a>
          </div>
        </section>

        {/* ═══ CONTACT ═══ */}
        <section id="contact" className="grid md:grid-cols-2">
          {/* Left */}
          <div className="p-10 md:p-16 flex flex-col justify-center relative overflow-hidden" style={{ background: C.green, color: "white" }}>
            <div className="absolute -bottom-[60px] -right-[60px] w-[300px] h-[300px] rounded-full bg-white/[0.06]" />
            <h2 className="text-[52px] uppercase leading-[0.95] mb-6" style={{ fontFamily: "Archivo Black, sans-serif" }}>
              Prêt·e à explorer le monde végétal ?
            </h2>
            <p className="text-[16px] opacity-80 leading-[1.7] mb-8 max-w-[400px]">
              Rejoignez-nous pour un atelier à Paris, Yvelines, Hauts-de-Seine ou Val-d'Oise.
            </p>
            <div className="space-y-4 text-[15px]">
              {[
                { icon: "✉", text: "contact@botaniqueludique.com" },
                { icon: "☎", text: "06 09 83 16 06" },
                { icon: "📸", text: "@botanique.ludique" },
                { icon: "📍", text: "Île-de-France" },
              ].map((d, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full border-2 border-white/25 flex items-center justify-center text-sm">{d.icon}</span>
                  <span>{d.text}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Right - Form */}
          <div className="p-10 md:p-16 flex flex-col justify-center" style={{ background: C.creamDark }}>
            <h3 className="text-[28px] uppercase mb-8" style={{ fontFamily: "Archivo Black, sans-serif" }}>Demande de devis</h3>
            <form className="space-y-5" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-[2px] mb-2" style={{ fontFamily: "Space Mono, monospace" }}>Nom</label>
                  <input type="text" placeholder="Votre nom" className="w-full p-3.5 text-[15px] border-2 border-[#1a1a1a] bg-[#F5F0E8] outline-none transition-all focus:shadow-[4px_4px_0_#2D6A4F] focus:-translate-x-0.5 focus:-translate-y-0.5" style={{ fontFamily: "DM Sans, sans-serif" }}
                    value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-[2px] mb-2" style={{ fontFamily: "Space Mono, monospace" }}>Email</label>
                  <input type="email" placeholder="votre@email.fr" className="w-full p-3.5 text-[15px] border-2 border-[#1a1a1a] bg-[#F5F0E8] outline-none transition-all focus:shadow-[4px_4px_0_#2D6A4F] focus:-translate-x-0.5 focus:-translate-y-0.5" style={{ fontFamily: "DM Sans, sans-serif" }}
                    value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                </div>
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-[2px] mb-2" style={{ fontFamily: "Space Mono, monospace" }}>Vous êtes</label>
                <select className="w-full p-3.5 text-[15px] border-2 border-[#1a1a1a] bg-[#F5F0E8] outline-none appearance-none" style={{ fontFamily: "DM Sans, sans-serif" }}
                  value={formData.type} onChange={e => setFormData({ ...formData, type: e.target.value })}>
                  <option value="">Sélectionnez...</option>
                  <option>Particulier</option>
                  <option>Enseignant(e)</option>
                  <option>Entreprise / Team Building</option>
                  <option>Collectivité / Association</option>
                  <option>EHPAD / Santé</option>
                  <option>MJC / Centre de loisirs</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-[2px] mb-2" style={{ fontFamily: "Space Mono, monospace" }}>Votre projet</label>
                <textarea placeholder="Type d'atelier, nombre de participants, dates envisagées..." rows={4}
                  className="w-full p-3.5 text-[15px] border-2 border-[#1a1a1a] bg-[#F5F0E8] outline-none resize-y transition-all focus:shadow-[4px_4px_0_#2D6A4F] focus:-translate-x-0.5 focus:-translate-y-0.5" style={{ fontFamily: "DM Sans, sans-serif" }}
                  value={formData.project} onChange={e => setFormData({ ...formData, project: e.target.value })} />
              </div>
              <button type="submit" className="w-full p-4 text-[15px] uppercase tracking-[3px] border-[3px] transition-all duration-200"
                style={{ fontFamily: "Archivo Black, sans-serif", background: C.orange, color: C.cream, borderColor: C.black }}
                onMouseEnter={e => { e.currentTarget.style.background = C.black; e.currentTarget.style.transform = "translate(-3px,-3px)"; e.currentTarget.style.boxShadow = `6px 6px 0 ${C.orange}`; }}
                onMouseLeave={e => { e.currentTarget.style.background = C.orange; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
                Envoyer →
              </button>
            </form>
          </div>
        </section>

        {/* ═══ NEWSLETTER ═══ */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-12 md:px-20" style={{ background: C.black, color: C.cream }}>
          <h3 className="text-[28px] uppercase flex-shrink-0" style={{ fontFamily: "Archivo Black, sans-serif" }}>Restez informé·e</h3>
          <div className="flex gap-0 flex-1 max-w-[500px]">
            <input type="email" placeholder="Votre email" className="flex-1 p-3.5 text-[15px] bg-transparent outline-none" style={{ border: `2px solid ${C.cream}`, fontFamily: "DM Sans, sans-serif", color: C.cream }} />
            <button className="px-7 py-3.5 text-[13px] uppercase tracking-[2px] transition-colors duration-200 hover:bg-[#E76F51]" style={{ fontFamily: "Archivo Black, sans-serif", background: C.olive, color: C.cream, border: `2px solid ${C.cream}` }}>
              S'inscrire
            </button>
          </div>
        </div>

        {/* ═══ FOOTER ═══ */}
        <footer style={{ background: C.black, color: C.cream, padding: "60px 20px 30px" }}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
              <div>
                <h3 className="text-[24px] uppercase mb-3" style={{ fontFamily: "Archivo Black, sans-serif" }}>Botanique Ludique</h3>
                <p className="text-[13px] text-white/40 leading-[1.7]">Ateliers créatifs pour reconnecter l'humain au végétal. Créé avec amour et nature.</p>
              </div>
              <div>
                <h4 className="text-[12px] uppercase tracking-[2px] text-white/30 mb-4" style={{ fontFamily: "Archivo Black, sans-serif" }}>Ateliers</h4>
                <ul className="space-y-2.5 text-[14px]">
                  {["Teinture végétale", "Kokedama", "Terrariums", "Couronnes de fleurs", "Herbier", "Vannerie"].map(a => (
                    <li key={a}><a href="#" className="text-white/60 no-underline hover:text-[#C5D086] transition-colors">{a}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[12px] uppercase tracking-[2px] text-white/30 mb-4" style={{ fontFamily: "Archivo Black, sans-serif" }}>Pro</h4>
                <ul className="space-y-2.5 text-[14px]">
                  {["Team Building", "Établissements scolaires", "Collectivités", "EHPAD & Santé", "Événementiel"].map(a => (
                    <li key={a}><a href="#" className="text-white/60 no-underline hover:text-[#C5D086] transition-colors">{a}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[12px] uppercase tracking-[2px] text-white/30 mb-4" style={{ fontFamily: "Archivo Black, sans-serif" }}>Infos</h4>
                <ul className="space-y-2.5 text-[14px]">
                  {["Blog", "Galerie", "Agenda", "FAQ", "Mentions légales"].map(a => (
                    <li key={a}><a href="#" className="text-white/60 no-underline hover:text-[#C5D086] transition-colors">{a}</a></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-[11px] uppercase tracking-[1px] text-white/30" style={{ fontFamily: "Space Mono, monospace" }}>© 2026 Botanique Ludique • Créé avec amour et nature</p>
              <div className="flex gap-2.5">
                {["instagram", "facebook-f", "tiktok"].map(s => (
                  <a key={s} href="#" className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/50 no-underline hover:bg-[#2D6A4F] hover:border-[#2D6A4F] hover:text-white transition-all text-sm">
                    {s === "instagram" ? "📸" : s === "facebook-f" ? "f" : "♪"}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes gallery-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        html { scroll-behavior: smooth; }
      `}</style>
    </>
  );
};

export default DemoManus;
