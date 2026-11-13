import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";
import WaveDivider from "@/components/WaveDivider";
import TraitDessine from "@/components/TraitDessine";
import PhotoCarousel from "@/components/PhotoCarousel";
import EnvieAtelier from "@/components/EnvieAtelier";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { galet, galetPhoto, PASTILLE } from "@/lib/organic";
import { MapPin, Users, Clock, Calendar, ArrowRight, Phone, Heart, Building2, GraduationCap, BookOpen } from "lucide-react";
import imgPetales from "@/assets/event-teinture-petales.webp";
import imgSoies from "@/assets/event-soies-suspendues.webp";
import imgPotFil from "@/assets/gallery-teinture-2.webp";
import imgFanions from "@/assets/gallery-teinture-1.webp";
import imgChouRouge from "@/assets/teinture-chou-rouge-filtre.webp";
import imgFanionMain from "@/assets/teinture-fanion-main.webp";
import imgBain from "@/assets/gallery-teinture-chou-rouge-bain.webp";
import imgFil from "@/assets/gallery-teinture-3.webp";
import imgTshirts from "@/assets/gallery-teinture-tshirts-table.webp";
import teintureEnfants2 from "@/assets/gallery-teinture-enfants-2.jpg";
import teintureEnfantsTshirtRose from "@/assets/gallery-teinture-enfants-tshirt-rose.jpg";
import teintureEnfants5 from "@/assets/gallery-teinture-enfants-5.jpg";

const BTN_A = { borderRadius: "28px 14px 26px 12px / 14px 26px 12px 28px" };
const BTN_B = { borderRadius: "14px 30px 12px 26px / 26px 12px 30px 14px" };

const INFOS = [
  { icon: Clock, label: "Durée", value: "3h" },
  { icon: Users, label: "Groupe", value: "10 personnes max" },
  { icon: Calendar, label: "Âge", value: "Dès 6 ans" },
  { icon: MapPin, label: "Lieu", value: "Chez vous ou au lieu de votre choix" },
];

const COULEURS = [
  { nom: "Bleus & violets", plantes: "Chou rouge, indigo", teinte: "#3B4A6B", forme: "55% 45% 52% 48% / 46% 54% 46% 54%" },
  { nom: "Ors & jaunes", plantes: "Pelures d'oignon, curcuma", teinte: "#C4944A", forme: "48% 52% 44% 56% / 55% 45% 55% 45%" },
  { nom: "Roses & mauves", plantes: "Noyau d'avocat, betterave", teinte: "#D49A9A", forme: "58% 42% 52% 48% / 46% 56% 44% 54%" },
  { nom: "Verts & kakis", plantes: "Feuilles de noyer, épinards", teinte: "#6B8E5A", forme: "44% 56% 50% 50% / 52% 44% 56% 48%" },
];

const PROGRAMME = [
  { titre: "Une histoire des couleurs", desc: "Garance, pastel, indigo : comment les plantes ont coloré le monde, à travers les civilisations." },
  { titre: "Les plantes tinctoriales", desc: "On découvre les plantes du jour, leurs pigments et ce qui fait changer leur couleur." },
  { titre: "Préparer les fibres", desc: "Le mordançage, ou comment aider le tissu à garder la couleur." },
  { titre: "Les bains de couleur", desc: "Extraction des pigments et premiers essais de teinture." },
  { titre: "Créer ses motifs", desc: "Pliage, ligature ou impression de pétales : chacun repart avec sa création." },
];

const PUBLICS = [
  {
    icon: Heart,
    titre: "Particuliers",
    points: ["Découverte de la teinture naturelle", "Atelier créatif entre amis", "Mode et textile durable"],
    lien: { to: "/agenda", label: "Voir les prochaines dates" },
  },
  {
    icon: Building2,
    titre: "Entreprises",
    points: ["Team building RSE", "Animation QVCT créative", "Événement CSE original"],
    lien: { to: "/atelier-teinture-vegetale-team-building", label: "La version entreprise" },
  },
  {
    icon: GraduationCap,
    titre: "Éducation & culture",
    points: ["Ateliers scolaires (sciences)", "Centres de loisirs", "Médiathèques et MJC"],
    lien: { to: "/etablissements-scolaires", label: "Pour les écoles" },
  },
];

const PHOTOS = [
  { src: imgChouRouge, alt: "Chou rouge égoutté au-dessus d'un bain de teinture violet", label: "Chou rouge" },
  { src: imgBain, alt: "Bain de teinture violet foncé au chou rouge", label: "Le bain" },
  { src: imgPetales, alt: "Impression de pétales sur soie", label: "Pétales sur soie" },
  { src: imgFil, alt: "Fil teint en bleu posé sur un carré de tissu", label: "Fil teint au bleu" },
  { src: teintureEnfants2, alt: "Enfant peignant un t-shirt à la betterave", label: "En famille" },
  { src: imgTshirts, alt: "T-shirts teints aux pigments végétaux sur la table d'atelier", label: "Sur textile" },
  { src: teintureEnfantsTshirtRose, alt: "T-shirt rose et jaune motif soleil", label: "Motif soleil" },
  { src: imgFanions, alt: "Fanions teints en bleu et en rose", label: "Le résultat" },
  { src: teintureEnfants5, alt: "T-shirts en cours de teinture", label: "En cours" },
];

const LECTURES = [
  { to: "/blog/teinture-vegetale-chou-rouge-indigo-naturel", eyebrow: "Tutoriel", titre: "Teindre au chou rouge : les secrets des anthocyanes" },
  { to: "/guide/plantes-tinctoriales-ile-de-france", eyebrow: "Guide", titre: "Les plantes tinctoriales d'Île-de-France" },
  { to: "/blog/tataki-zome-impression-vegetale-atelier", eyebrow: "Technique", titre: "Tataki zomé : frapper une feuille pour en garder l'empreinte" },
];

const AtelierTeintureVegetale = () => (
  <div className="min-h-screen bg-[hsl(var(--cream))] overflow-x-clip">
    <SEO
      title="Atelier Teinture Végétale Paris | Pigments Naturels ✦ 75 IDF"
      description="🌿 Atelier teinture végétale à Paris et Île-de-France. Apprenez à teindre textiles et papiers avec des pigments 100% naturels. Particuliers et pros."
      keywords="atelier teinture végétale Paris, teinture naturelle cours, pigments naturels atelier, teinture plantes Paris, teinture indigo Paris, atelier eco-print, teinture textile naturel"
      canonical="/atelier-teinture-vegetale"
    />
    <SchemaOrg
      type="LocalBusiness"
      data={{
        name: "Botanique Ludique - Atelier Teinture Végétale",
        description: "Ateliers de teinture végétale et pigments naturels à Paris et en Île-de-France",
        areaServed: { "@type": "State", name: "Île-de-France" },
      }}
    />
    <Navigation />

    {/* ===== HERO ===== */}
    <section className="relative px-6 pt-28 pb-16 md:pt-36 md:pb-20">
      <div
        className="absolute -left-32 top-20 w-[460px] h-[460px] bg-[hsl(var(--olive-light))]/30 pointer-events-none"
        style={{ borderRadius: "58% 42% 38% 62% / 45% 55% 45% 55%" }}
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 bottom-0 w-[380px] h-[380px] bg-[hsl(300_30%_60%)]/15 pointer-events-none"
        style={{ borderRadius: "40% 60% 55% 45% / 60% 40% 60% 40%" }}
        aria-hidden="true"
      />
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-10 items-center">
        <AnimatedSection>
          <span className="inline-flex font-mono-brand text-[10px] md:text-[11px] uppercase tracking-[2px] bg-[hsl(var(--green))] text-[hsl(var(--cream))] border-brutal-thin rounded-full px-4 py-2 mb-7 -rotate-2 shadow-[3px_3px_0_hsl(var(--black))]">
            Paris & Île-de-France
          </span>
          <h1 className="font-display text-[clamp(2.4rem,5.6vw,4.6rem)] uppercase leading-[0.9] tracking-[-2px] mb-4">
            Atelier
            <br />
            <span className="text-primary">teinture végétale</span>
          </h1>
          <TraitDessine className="mb-7" />
          <p className="font-editorial italic text-xl md:text-2xl text-foreground/80 max-w-[560px] leading-snug mb-5">
            Les couleurs cachées des plantes, révélées.
          </p>
          <p className="text-base md:text-lg text-foreground/75 max-w-[560px] leading-relaxed mb-8">
            Un art millénaire qui extrait la couleur des plantes, des racines, des écorces et des fruits. Le chou rouge vire au bleu, les pelures
            d'oignon donnent des ors profonds : les plantes du quotidien cachent une palette insoupçonnée.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to={`/contact?subject=${encodeURIComponent("Atelier teinture végétale")}`}
              className="btn-brutal inline-flex items-center gap-2 bg-accent text-foreground border-foreground -rotate-1 hover:rotate-0 text-xs px-8 py-3.5"
              style={BTN_A}
            >
              Réserver un atelier <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+33609831606"
              className="btn-brutal inline-flex items-center gap-2 bg-[hsl(var(--cream))] text-foreground border-foreground rotate-1 hover:rotate-0 text-xs px-7 py-3.5"
              style={BTN_B}
            >
              <Phone className="w-4 h-4" /> 06 09 83 16 06
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={150} className="relative h-[420px] sm:h-[500px] max-w-[520px] w-full mx-auto">
          <img
            src={imgPetales}
            alt="Une participante dispose des pétales sur un carré de soie"
            className="absolute right-0 top-0 w-[60%] h-[76%] object-cover border-brutal shadow-brutal rotate-2"
            style={galetPhoto(1)}
          />
          <img
            src={imgSoies}
            alt="Carrés de soie imprimés aux fleurs, suspendus devant une fenêtre"
            className="absolute left-0 bottom-0 w-[60%] h-[52%] object-cover border-brutal shadow-brutal -rotate-2"
            style={galetPhoto(0)}
            loading="lazy"
          />
          <img
            src={imgPotFil}
            alt="Pot de teinture bleue et fil coloré sur une assiette"
            className="absolute left-[4%] top-[4%] w-[36%] aspect-square object-cover border-brutal -rotate-3"
            style={{ borderRadius: "58% 42% 52% 48% / 46% 56% 44% 54%" }}
            loading="lazy"
          />
          <div
            className="absolute right-[-2%] bottom-[8%] w-[104px] h-[104px] flex flex-col items-center justify-center text-center bg-[hsl(var(--green))] text-[hsl(var(--cream))] border-brutal shadow-[3px_3px_0_hsl(var(--black))] pebble-float"
            style={PASTILLE}
          >
            <span className="font-display text-xl leading-none">100%</span>
            <span className="font-mono-brand text-[8px] uppercase tracking-[1px] mt-1">végétal</span>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* ===== C'EST QUOI ===== */}
    <WaveDivider from="hsl(36,33%,93%)" to="hsl(36,25%,88%)" />
    <section className="bg-secondary px-6 pt-8 pb-20 md:pb-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.15fr_1fr] gap-12 md:gap-16 items-center">
        <AnimatedSection>
          <span className="section-label block mb-3">Un savoir-faire ancestral</span>
          <h2 className="font-display text-[clamp(1.9rem,4.5vw,3rem)] uppercase leading-[0.95] tracking-[-1px]">
            Qu'est-ce que <span className="text-primary">la teinture végétale ?</span>
          </h2>
          <TraitDessine className="mt-3 mb-7" color="hsl(var(--orange))" variant={2} />
          <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground/80">
            <p>
              La teinture végétale consiste à extraire les <strong>pigments naturels</strong> des plantes pour colorer des textiles, du papier ou d'autres
              supports. Un savoir-faire pratiqué dans toutes les civilisations, de l'indigo d'Afrique de l'Ouest aux pourpres de Méditerranée.
            </p>
            <p>
              Nos ateliers racontent cette histoire tout en enseignant les <strong>techniques de mordançage, d'extraction et de fixation</strong>. Chou
              rouge, pelures d'oignon, noyaux d'avocat : des plantes ordinaires donnent des teintes extraordinaires.
            </p>
            <p>
              C'est aussi une démarche <strong>écologique</strong> : des ressources renouvelables et biodégradables, à l'opposé des teintures chimiques de
              l'industrie textile.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={150} className="relative max-w-[400px] w-full mx-auto">
          <img
            src={imgFanionMain}
            alt="Une main tient un fanion de coton teint en rose au chou rouge"
            className="w-[86%] aspect-[4/5] object-cover border-brutal shadow-brutal rotate-2"
            style={galetPhoto(2)}
            loading="lazy"
          />
          <div className="absolute right-0 bottom-[-6%] w-[46%] aspect-square overflow-hidden border-brutal shadow-[4px_4px_0_hsl(var(--black))] -rotate-3" style={PASTILLE}>
            <img src={imgChouRouge} alt="Chou rouge égoutté au-dessus d'un bain violet" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* ===== PALETTE ===== */}
    <WaveDivider from="hsl(36,25%,88%)" to="hsl(36,33%,93%)" flip />
    <section className="px-6 pt-8 pb-20">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <span className="section-label block mb-3">La palette du jour</span>
          <h2 className="font-display text-[clamp(1.9rem,4.5vw,3rem)] uppercase leading-[0.95] tracking-[-1px]">
            Les couleurs <span className="text-primary">que vous découvrirez</span>
          </h2>
          <TraitDessine className="mx-auto mt-3" variant={1} />
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {COULEURS.map((c, i) => (
            <AnimatedSection key={c.nom} delay={i * 100} className={`text-center ${i % 2 ? "md:mt-10" : ""}`}>
              <div
                className={`w-28 h-28 md:w-32 md:h-32 mx-auto mb-5 border-brutal shadow-[4px_4px_0_hsl(var(--black))] pebble-float ${i % 2 ? "rotate-6" : "-rotate-6"}`}
                style={{ backgroundColor: c.teinte, borderRadius: c.forme, animationDelay: `-${i * 1.2}s` }}
                aria-hidden="true"
              />
              <h3 className="font-display text-base md:text-lg uppercase leading-tight mb-1">{c.nom}</h3>
              <p className="font-mono-brand text-[10px] uppercase tracking-[1.5px] text-foreground/60">{c.plantes}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ===== PROGRAMME (bande verte) ===== */}
    <WaveDivider from="hsl(36,33%,93%)" to="hsl(153,40%,30%)" />
    <section className="bg-[hsl(var(--green))] text-[hsl(var(--cream))] px-6 pt-8 pb-20 md:pb-24">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <span className="section-label block mb-3" style={{ color: "hsl(73 44% 67%)" }}>
            Comment ça se passe
          </span>
          <h2 className="font-display text-[clamp(1.9rem,4.5vw,3rem)] uppercase leading-[0.95] tracking-[-1px]">
            Déroulement <span className="text-[hsl(var(--olive-light))]">de l'atelier</span>
          </h2>
          <TraitDessine className="mx-auto mt-3" color="hsl(var(--olive-light))" variant={2} />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {PROGRAMME.map((p, i) => (
            <AnimatedSection key={p.titre} delay={i * 100} className={i % 2 === 1 ? "lg:mt-8" : ""}>
              <div className="relative h-full bg-[hsl(var(--cream))] text-foreground border-brutal p-6 pt-10" style={galet(i)}>
                <span
                  className="absolute -top-6 left-5 w-12 h-12 flex items-center justify-center font-display text-base bg-[hsl(var(--olive-light))] border-brutal shadow-[3px_3px_0_hsl(var(--black))]"
                  style={PASTILLE}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-base uppercase leading-tight mb-2">{p.titre}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{p.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {INFOS.map((info, i) => (
            <span
              key={info.label}
              className={`inline-flex items-center gap-2 bg-[hsl(var(--cream))] text-foreground border-brutal-thin rounded-full px-4 py-2 shadow-[2px_2px_0_hsl(var(--black))] ${i % 2 ? "rotate-1" : "-rotate-1"}`}
            >
              <info.icon className="w-4 h-4 text-primary" />
              <span className="font-mono-brand text-[9px] uppercase tracking-[1.5px] text-foreground/55">{info.label}</span>
              <span className="font-display text-sm uppercase">{info.value}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
    <WaveDivider from="hsl(153,40%,30%)" to="hsl(36,25%,88%)" flip />

    {/* ===== PHOTOS ===== */}
    <section className="bg-secondary pt-4 pb-10">
      <AnimatedSection className="px-6 max-w-6xl mx-auto mb-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <span className="section-label block mb-3">En atelier</span>
          <h2 className="font-display text-[clamp(1.9rem,4.5vw,3rem)] uppercase leading-[0.95] tracking-[-1px]">
            Les mains <span className="text-primary">pleines de couleurs</span>
          </h2>
        </div>
        <span className="self-start md:self-end font-mono-brand text-[10px] uppercase tracking-[2px] border-brutal-thin rounded-full px-4 py-2 bg-[hsl(var(--cream))] rotate-2">
          ← Faites glisser →
        </span>
      </AnimatedSection>
      <PhotoCarousel organic images={PHOTOS} />
    </section>
    <WaveDivider from="hsl(36,25%,88%)" to="hsl(36,33%,93%)" flip />

    {/* ===== POUR QUI ===== */}
    <section className="px-6 pt-8 pb-16">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <span className="section-label block mb-3">Pour qui ?</span>
          <h2 className="font-display text-[clamp(1.9rem,4.5vw,3rem)] uppercase leading-[0.95] tracking-[-1px]">
            Un atelier <span className="text-primary">pour tous</span>
          </h2>
          <TraitDessine className="mx-auto mt-3" variant={0} />
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          {PUBLICS.map((p, i) => (
            <AnimatedSection key={p.titre} delay={i * 110} className={i === 1 ? "md:mt-10" : ""}>
              <div className={`relative h-full flex flex-col bg-[hsl(var(--cream))] border-brutal shadow-brutal p-7 pt-12 ${["-rotate-1", "rotate-1", "-rotate-[0.6deg]"][i]} hover:rotate-0 transition-transform duration-300`} style={galet(i + 1)}>
                <div
                  className={`absolute -top-7 left-7 w-14 h-14 flex items-center justify-center border-brutal shadow-[3px_3px_0_hsl(var(--black))] ${["bg-accent", "bg-[hsl(var(--olive-light))]", "bg-[hsl(210_41%_24%)] text-[hsl(var(--cream))]"][i]}`}
                  style={PASTILLE}
                >
                  <p.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg uppercase leading-tight mb-4">{p.titre}</h3>
                <ul className="space-y-2 mb-6 flex-1">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm md:text-base text-foreground/75">
                      <span className="mt-2 w-2 h-2 flex-shrink-0 bg-[hsl(var(--olive))]" style={PASTILLE} />
                      {pt}
                    </li>
                  ))}
                </ul>
                <Link to={p.lien.to} className="inline-flex items-center gap-1.5 font-mono-brand text-[10px] uppercase tracking-[2px] underline underline-offset-4 decoration-2 hover:text-primary">
                  {p.lien.label} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* lectures */}
        <div className="mt-20">
          <p className="section-label mb-5 text-center">Pour aller plus loin</p>
          <div className="grid md:grid-cols-3 gap-5">
            {LECTURES.map((l, i) => (
              <Link key={l.to} to={l.to} className="group border-brutal bg-[hsl(var(--cream))] p-6 hover:shadow-brutal transition-shadow" style={galet(i)}>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="font-mono-brand text-[10px] uppercase tracking-[2px] text-primary">{l.eyebrow}</span>
                  <BookOpen className="w-4 h-4 text-foreground/40 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-display text-base uppercase leading-tight">{l.titre}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>

    <EnvieAtelier sujet="une teinture végétale" entreprise="/atelier-teinture-vegetale-team-building" className="pt-4" />
    <WaveDivider from="hsl(36,33%,93%)" to="hsl(0,0%,10%)" flip />

    <BackToTop />
    <Footer />
  </div>
);

export default AtelierTeintureVegetale;
