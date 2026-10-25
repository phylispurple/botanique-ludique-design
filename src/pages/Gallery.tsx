import { useState, useEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";
import WaveDivider from "@/components/WaveDivider";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight, Play, Sprout, Palette, Flower2, Hammer, Droplets, Footprints, Camera } from "lucide-react";
import terrariumImage from "@/assets/gallery-terrarium.webp";
import seedBombsImage from "@/assets/gallery-seed-bombs.webp";
import workshopTableImage from "@/assets/gallery-workshop-table.webp";
import forestWalkImage from "@/assets/gallery-forest-walk.webp";
import succulentsImage from "@/assets/gallery-succulents.webp";
import autumnLeavesImage from "@/assets/gallery-autumn-leaves.webp";
import basketryImage from "@/assets/gallery-basketry.webp";
import sachetSenteurImage from "@/assets/gallery-sachet-senteur.webp";
import epicesSachets1 from "@/assets/gallery-atelier-epices-sachets-1.webp";
import epicesSachets2 from "@/assets/gallery-atelier-epices-sachets-2.webp";
import epicesTable from "@/assets/gallery-atelier-epices-table.webp";
import flowerCrownImage from "@/assets/gallery-flower-crown.webp";
import collegeEee1Image from "@/assets/gallery-college-eee-1.webp";
import collegeEee2Image from "@/assets/gallery-college-eee-2.webp";
import collegeEee3Image from "@/assets/gallery-college-eee-3.webp";
import collegeEee4Image from "@/assets/gallery-college-eee-4.webp";
import tatakiZomeImage from "@/assets/workshop-tataki-zome.webp";
import tatakiZomeTable from "@/assets/gallery-tataki-zome-atelier-table.webp";
import kosovoConstruction1 from "@/assets/gallery-kosovo-construction-1.webp";
import kosovoConstruction2 from "@/assets/gallery-kosovo-construction-2.webp";
import kosovoConstruction3 from "@/assets/gallery-kosovo-construction-3.webp";
import kosovoConstruction4 from "@/assets/gallery-kosovo-construction-4.webp";
import kosovoConstruction5 from "@/assets/gallery-kosovo-construction-5.webp";
import kosovoConstruction6 from "@/assets/gallery-kosovo-construction-6.webp";
import kosovoConstruction7 from "@/assets/gallery-kosovo-construction-7.webp";
import portraitVanessaImage from "@/assets/portrait-vanessa.webp";
import teinture1Image from "@/assets/gallery-teinture-1.webp";
import teinture2Image from "@/assets/gallery-teinture-2.webp";
import teinture3Image from "@/assets/gallery-teinture-3.webp";
import workshopGroupImage from "@/assets/gallery-workshop-group.webp";
import miniTerrariumImage from "@/assets/gallery-mini-terrarium.jpeg";
import kokedamaTradescantiaImage from "@/assets/gallery-kokedama-tradescantia.jpg";
import bougieFleursSecheesImage from "@/assets/gallery-bougie-fleurs-sechees.jpg";
import fittoniaPotsImage from "@/assets/gallery-fittonia-pots.jpg";
import terrariumEnfantsFabricationImage from "@/assets/gallery-terrarium-enfants-fabrication.jpg";
import terrariumEnfantsMousseImage from "@/assets/gallery-terrarium-enfants-mousse.jpg";
import teintureEnfants2 from "@/assets/gallery-teinture-enfants-2.jpg";
import teintureEnfants4 from "@/assets/gallery-teinture-enfants-4.jpg";
import teintureEnfants5 from "@/assets/gallery-teinture-enfants-5.jpg";
import teintureEnfants6 from "@/assets/gallery-teinture-enfants-6.jpg";
import teintureEnfantsTshirt from "@/assets/gallery-teinture-enfants-tshirt.jpg";
import teintureEnfantsTshirtRose from "@/assets/gallery-teinture-enfants-tshirt-rose.jpg";
import terrariumAdultesGroupe from "@/assets/gallery-terrarium-adultes-groupe.jpg";
import terrariumFittoniaPrep from "@/assets/gallery-terrarium-fittonia-prep.jpg";
import terrariumBocalFittonia from "@/assets/gallery-terrarium-bocal-fittonia.jpg";
import kokedamaCollection from "@/assets/gallery-kokedama-collection.jpg";
import papierRecycleFeuilles from "@/assets/gallery-papier-recycle-feuilles.webp";
import papierRecycleSechage from "@/assets/gallery-papier-recycle-sechage.webp";
import herbierToiles from "@/assets/gallery-herbier-toiles.webp";
import tableauFeuillesAutomne from "@/assets/gallery-tableau-feuilles-automne.webp";
import cuirKombucha from "@/assets/workshop-cuir-kombucha.webp";
import teintureTshirtsTable from "@/assets/gallery-teinture-tshirts-table.webp";

type GalleryCategory = "jardinage" | "textiles" | "floral" | "artisanat" | "bien-etre" | "mediation" | "coulisses";
type GalleryFilter = "all" | "videos" | GalleryCategory;

type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  type: "image" | "video";
  category: GalleryCategory;
};

const categoryLabels: Record<GalleryCategory, string> = {
  jardinage: "Jardinage",
  textiles: "Textiles",
  floral: "Art floral",
  artisanat: "Artisanat",
  "bien-etre": "Bien-être",
  mediation: "Balades & médiation",
  coulisses: "Coulisses",
};

const filters: { id: GalleryFilter; label: string; icon: typeof Sprout | null }[] = [
  { id: "all", label: "Tout", icon: null },
  { id: "jardinage", label: "Jardinage", icon: Sprout },
  { id: "textiles", label: "Textiles", icon: Palette },
  { id: "floral", label: "Art floral", icon: Flower2 },
  { id: "artisanat", label: "Artisanat", icon: Hammer },
  { id: "bien-etre", label: "Bien-être", icon: Droplets },
  { id: "mediation", label: "Médiation", icon: Footprints },
  { id: "videos", label: "Vidéos", icon: Play },
];

// Les plus belles photos d'abord
const items: GalleryItem[] = [
  { src: tableauFeuillesAutomne, alt: "Tableau de feuilles d'automne et de fleurs pressées collées sur une toile : érable rouge, feuilles pourpres, pensées et marguerite", caption: "Tableau de feuilles d'automne pressées sur toile", type: "image", category: "floral" },
  { src: kokedamaCollection, alt: "Collection de kokedamas", caption: "Kokedamas, Collection de créations en atelier", type: "image", category: "jardinage" },
  { src: teintureTshirtsTable, alt: "Table d'atelier de teinture végétale : tee-shirts tie and dye violet, vert, rose et ocre, bols de pigments, pinceaux et passoire", caption: "Atelier teinture végétale, tee-shirts tie and dye aux pigments naturels", type: "image", category: "textiles" },
  { src: herbierToiles, alt: "Trois toiles d'herbier posées contre une fenêtre : fougère, achillée, graminées et feuilles de monnaie-du-pape pressées, avec leurs étiquettes manuscrites", caption: "Atelier herbier, planches de plantes pressées sur toile", type: "image", category: "floral" },
  { src: papierRecycleFeuilles, alt: "Feuilles de papier recyclé fait main en train de sécher : pulpe teintée rose, vert d'eau, bleu et crème, parsemée de pétales et de fragments de plantes", caption: "Atelier papier recyclé, feuilles colorées aux pétales en train de sécher", type: "image", category: "artisanat" },
  { src: cuirKombucha, alt: "Bandes de cuir végétal de kombucha séchées, brun ambré, posées à côté d'une paire de ciseaux", caption: "Cycle matières végétales, cuir de kombucha séché", type: "image", category: "artisanat" },
  { src: epicesTable, alt: "Vue de dessus de la table de l'atelier Sur la route des épices : bols de curcuma, cannelle, girofle, anis étoilé, cardamome et muscade, mortiers et participants composant leur sachet senteur", caption: "La table aux épices, atelier Sur la route des épices, Versailles", type: "image", category: "bien-etre" },
  { src: "/videos/workshop-kokedama-atelier.mp4", alt: "Atelier kokedama en vidéo", caption: "Atelier kokedama, gestes et matières", type: "video", category: "jardinage" },
  { src: tatakiZomeTable, alt: "Atelier tataki zomé en MJC : participants martelant feuilles d'érable, fougères et cosmos sur des tee-shirts et sacs en coton avec un galet", caption: "Atelier tataki zomé en MJC, empreintes de feuilles et de fleurs sur tee-shirts et sacs en tissu", type: "image", category: "textiles" },
  { src: papierRecycleSechage, alt: "Longue table d'atelier couverte de feuilles de papier recyclé fait main qui sèchent : rose, vert, bleu, beige et blanc parsemé de pétales", caption: "Atelier papier recyclé, les feuilles sèchent sur la table", type: "image", category: "artisanat" },
  { src: terrariumBocalFittonia, alt: "Terrarium en bocal avec fittonia", caption: "Terrarium, Bocal avec fittonia et tradescantia", type: "image", category: "jardinage" },
  { src: teintureEnfantsTshirtRose, alt: "T-shirt rose et jaune motif soleil", caption: "Atelier teinture végétale enfants, Motif soleil aux pigments naturels", type: "image", category: "textiles" },
  { src: forestWalkImage, alt: "Balade en forêt", caption: "Atelier sur les espèces exotiques envahissantes", type: "image", category: "mediation" },
  { src: epicesSachets2, alt: "Sachets senteur terminés et bols d'épices (cannelle, girofle, anis étoilé, cardamome) sur la table d'atelier", caption: "Sachets senteur aux épices, Fête de la Science 2026, Versailles", type: "image", category: "bien-etre" },
  { src: kokedamaTradescantiaImage, alt: "Kokedama avec tradescantia", caption: "Kokedama, Tradescantia zebrina en cours de création", type: "image", category: "jardinage" },
  { src: portraitVanessaImage, alt: "Vanessa Charlery, ethnobotaniste", caption: "Portrait, Vanessa Charlery, fondatrice", type: "image", category: "coulisses" },
  { src: epicesSachets1, alt: "Participants composant leur sachet senteur avec des épices entières lors de l'atelier Sur la route des épices", caption: "Atelier Sur la route des épices, Fête de la Science, bibliothèque Choiseul, Versailles", type: "image", category: "bien-etre" },
  { src: teintureEnfants2, alt: "Enfant peignant un t-shirt à la betterave", caption: "Atelier teinture végétale enfants, Application de pigment de betterave", type: "image", category: "textiles" },
  { src: teintureEnfantsTshirt, alt: "T-shirt teint aux pigments naturels", caption: "Atelier teinture végétale enfants, T-shirt tie and dye végétal", type: "image", category: "textiles" },
  { src: teintureEnfants4, alt: "Préparation des pigments végétaux", caption: "Atelier teinture végétale enfants, Préparation des pigments", type: "image", category: "textiles" },
  { src: teintureEnfants5, alt: "T-shirts en cours de teinture", caption: "Atelier teinture végétale enfants, Tie and dye végétal en cours", type: "image", category: "textiles" },
  { src: teintureEnfants6, alt: "T-shirt orange en cours de teinture", caption: "Atelier teinture végétale enfants, Pigment orange sur coton", type: "image", category: "textiles" },
  { src: terrariumAdultesGroupe, alt: "Atelier terrarium en groupe, adultes", caption: "Atelier terrarium, Création en groupe entre collègues", type: "image", category: "jardinage" },
  { src: terrariumFittoniaPrep, alt: "Préparation d'un terrarium fittonia", caption: "Terrarium, Composition mousse, fittonia et graviers", type: "image", category: "jardinage" },
  { src: terrariumEnfantsMousseImage, alt: "Atelier terrarium enfants avec mousse", caption: "Atelier enfants, Préparation de la mousse pour terrariums", type: "image", category: "jardinage" },
  { src: fittoniaPotsImage, alt: "Plantules de Fittonia en pots", caption: "Fittonia, plantules prêtes pour les terrariums", type: "image", category: "jardinage" },
  { src: terrariumEnfantsFabricationImage, alt: "Enfants fabriquant un terrarium", caption: "Atelier enfants, Fabrication de terrariums en bocaux", type: "image", category: "jardinage" },
  { src: bougieFleursSecheesImage, alt: "Bougie aux fleurs séchées", caption: "Atelier bougie, Fleurs séchées en gel transparent", type: "image", category: "floral" },
  { src: "/videos/workshop-demo.mp4", alt: "Immersion dans nos ateliers", caption: "Immersion dans nos ateliers", type: "video", category: "coulisses" },
  { src: terrariumImage, alt: "Terrarium avec mousse", caption: "Terrarium, Atelier Botanique Ludique", type: "image", category: "jardinage" },
  { src: flowerCrownImage, alt: "Couronne de fleurs", caption: "Atelier couronne de fleurs", type: "image", category: "floral" },
  { src: "/videos/workshop-epoxy-floral.mp4", alt: "Création époxy floral", caption: "Atelier Époxy Floral, Plateaux et tables en résine", type: "video", category: "floral" },
  { src: seedBombsImage, alt: "Atelier bombes de graines", caption: "Bombes de graines, Atelier Botanique Ludique", type: "image", category: "jardinage" },
  { src: workshopGroupImage, alt: "Atelier kokedama en groupe", caption: "Atelier kokedama, Participants en création", type: "image", category: "jardinage" },
  { src: workshopTableImage, alt: "Table d'atelier", caption: "Préparation d'atelier, MJC Le Vésinet", type: "image", category: "coulisses" },
  { src: teinture1Image, alt: "Atelier teinture végétale", caption: "Atelier teinture végétale, Préparation des tissus", type: "image", category: "textiles" },
  { src: teinture2Image, alt: "Teinture végétale résultat", caption: "Atelier teinture végétale, Couleurs naturelles", type: "image", category: "textiles" },
  { src: teinture3Image, alt: "Détail teinture végétale", caption: "Atelier teinture végétale, Fil teint au bleu", type: "image", category: "textiles" },
  { src: "/videos/workshop-dyeing.mp4", alt: "Atelier teinture végétale", caption: "Atelier teinture végétale en vidéo", type: "video", category: "textiles" },
  { src: tatakiZomeImage, alt: "Atelier Tataki Zome", caption: "Atelier Tataki Zome, Impression végétale japonaise", type: "image", category: "textiles" },
  { src: "/videos/workshop-demo-2.mp4", alt: "Atelier botanique", caption: "Atelier de création botanique", type: "video", category: "coulisses" },
  { src: basketryImage, alt: "Atelier vannerie", caption: "Atelier vannerie et tressage", type: "image", category: "artisanat" },
  { src: succulentsImage, alt: "Atelier succulentes", caption: "Succulentes, Atelier Botanique Ludique", type: "image", category: "jardinage" },
  { src: "/videos/workshop-demo-3.mp4", alt: "Création naturelle", caption: "Création avec éléments naturels", type: "video", category: "coulisses" },
  { src: sachetSenteurImage, alt: "Sachets de senteur", caption: "Sachets de senteur aux plantes aromatiques", type: "image", category: "bien-etre" },
  { src: autumnLeavesImage, alt: "Création avec feuilles d'automne", caption: "Création végétale automnale", type: "image", category: "floral" },
  { src: "/videos/workshop-demo-4.mp4", alt: "Atelier en groupe", caption: "Atelier participatif", type: "video", category: "coulisses" },
  { src: collegeEee1Image, alt: "Atelier collège", caption: "Atelier collège, Espèces exotiques envahissantes", type: "image", category: "mediation" },
  { src: collegeEee2Image, alt: "Atelier collège", caption: "Atelier collège, Espèces exotiques envahissantes", type: "image", category: "mediation" },
  { src: collegeEee3Image, alt: "Atelier collège", caption: "Atelier collège, Espèces exotiques envahissantes", type: "image", category: "mediation" },
  { src: collegeEee4Image, alt: "Atelier collège", caption: "Atelier collège, Espèces exotiques envahissantes", type: "image", category: "mediation" },
  { src: kosovoConstruction1, alt: "Éco-construction au Kosovo", caption: "Construction d'une structure en bois, Kosovo", type: "image", category: "artisanat" },
  { src: kosovoConstruction2, alt: "Équipe éco-construction Kosovo", caption: "Travail d'équipe en éco-construction, Kosovo", type: "image", category: "artisanat" },
  { src: kosovoConstruction3, alt: "Préparation du torchis", caption: "Préparation du torchis en groupe, Kosovo", type: "image", category: "artisanat" },
  { src: kosovoConstruction4, alt: "Structure en torchis", caption: "Réalisation d'un bâtiment en torchis, Kosovo", type: "image", category: "artisanat" },
  { src: kosovoConstruction5, alt: "Atelier torchis", caption: "Les mains dans le torchis, Kosovo", type: "image", category: "artisanat" },
  { src: kosovoConstruction6, alt: "Application du torchis", caption: "Techniques ancestrales de construction, Kosovo", type: "image", category: "artisanat" },
  { src: kosovoConstruction7, alt: "Manipulation du torchis", caption: "Apprentissage éco-construction, Kosovo", type: "image", category: "artisanat" },
  { src: miniTerrariumImage, alt: "Mini terrarium en bocal", caption: "Mini terrarium en bocal", type: "image", category: "jardinage" },
];

// Nombre de colonnes de la mosaïque selon la largeur d'écran
const useColumnCount = () => {
  const getCount = () =>
    typeof window === "undefined" ? 3 : window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
  const [count, setCount] = useState(getCount);
  useEffect(() => {
    const onResize = () => setCount(getCount());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return count;
};

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const visibleItems = useMemo(
    () =>
      activeFilter === "all"
        ? items
        : activeFilter === "videos"
          ? items.filter((item) => item.type === "video")
          : items.filter((item) => item.category === activeFilter),
    [activeFilter]
  );

  const counts = useMemo(() => {
    const acc: Record<string, number> = { all: items.length, videos: items.filter((i) => i.type === "video").length };
    items.forEach((item) => {
      acc[item.category] = (acc[item.category] || 0) + 1;
    });
    return acc;
  }, []);

  const columnCount = useColumnCount();
  // Répartition ligne par ligne : la 1re photo en haut à gauche, la 2e à côté, etc.
  const columns = useMemo(() => {
    const cols: { item: GalleryItem; index: number }[][] = Array.from({ length: columnCount }, () => []);
    visibleItems.forEach((item, index) => cols[index % columnCount].push({ item, index }));
    return cols;
  }, [visibleItems, columnCount]);

  const selectedItem = selectedIndex !== null ? visibleItems[selectedIndex] ?? null : null;

  const handlePrev = () => {
    if (selectedIndex !== null) setSelectedIndex((selectedIndex - 1 + visibleItems.length) % visibleItems.length);
  };
  const handleNext = () => {
    if (selectedIndex !== null) setSelectedIndex((selectedIndex + 1) % visibleItems.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) (dx > 0 ? handlePrev : handleNext)();
    touchStartX.current = null;
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SEO
        title="Galerie Photos & Vidéos | Nos Ateliers en Images ✦ Inspirations"
        description="📸 Découvrez nos créations en images : kokedama, teinture végétale, terrarium, vannerie. +50 ateliers réalisés. Trouvez l'inspiration pour votre prochain atelier !"
        keywords="galerie ateliers botaniques, photos kokedama, teinture végétale images, éco-construction photos, vannerie galerie"
        canonical="/gallery"
      />
      <Navigation />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden px-6 pt-24 pb-24 md:pt-32 md:pb-28">
        <div className="absolute inset-0 bg-foreground">
          <img src={teintureTshirtsTable} alt="" className="w-full h-full object-cover opacity-35" />
        </div>
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-mono-brand text-[11px] md:text-[13px] uppercase tracking-[3px] text-olive-light mb-5">
              Ateliers · Matières · Rencontres
            </p>
            <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] uppercase leading-[0.9] tracking-[-2px] text-primary-foreground mb-6">
              Galerie<br />
              <span className="text-olive-light">En images</span>
            </h1>
            <p className="font-body text-xl md:text-[22px] italic text-primary-foreground/90 max-w-[650px] mx-auto leading-relaxed">
              Un voyage visuel à travers nos ateliers, rencontres botaniques et moments créatifs.
            </p>
            <p className="font-mono-brand text-[10px] uppercase tracking-[2px] text-primary-foreground/60 mt-5">
              Photographies : Vanessa Charlery
            </p>
          </AnimatedSection>
        </div>
      </section>

      <WaveDivider from="hsl(0,0%,10%)" to="hsl(36,33%,93%)" />

      {/* ===== FILTRES ===== */}
      <section className="px-6 pt-6">
        <div className="max-w-6xl mx-auto mb-12 flex flex-wrap justify-center">
          {filters.map(({ id, label, icon: Icon }) => {
            const isActive = activeFilter === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setActiveFilter(id)}
                aria-pressed={isActive}
                className={`font-mono-brand text-[10px] uppercase tracking-[2px] px-4 py-3 border-brutal -ml-[3px] -mt-[3px] first:ml-0 transition-colors duration-200 flex items-center gap-2 ${
                  isActive
                    ? "bg-foreground text-primary-foreground"
                    : "bg-[hsl(var(--cream))] text-foreground hover:bg-[hsl(var(--green-pale))]"
                }`}
              >
                {Icon && <Icon size={14} />}
                <span>{label}</span>
                <span className={`text-[9px] ${isActive ? "text-primary-foreground/60" : "text-foreground/40"}`}>
                  {counts[id]}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ===== MOSAÏQUE ===== */}
      <main className="px-6 pb-24">
        <div className="max-w-6xl mx-auto flex gap-6 items-start">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="flex-1 min-w-0 flex flex-col gap-6">
          {column.map(({ item, index }) => (
            <figure key={item.src} className="m-0">
              <button
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`Agrandir : ${item.caption}`}
                className="group block w-full text-left border-brutal bg-[hsl(var(--cream))] transition-all duration-300 hover:-translate-y-1 hover:shadow-brutal-lg"
                onMouseEnter={(e) => {
                  e.currentTarget.querySelector("video")?.play().catch(() => {});
                }}
                onMouseLeave={(e) => {
                  const vid = e.currentTarget.querySelector("video");
                  if (vid) {
                    vid.pause();
                    vid.currentTime = 0;
                  }
                }}
              >
                <div className="relative overflow-hidden bg-secondary">
                  {item.type === "video" ? (
                    <video src={item.src} className="block w-full h-auto" muted loop playsInline preload="metadata" />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="block w-full h-auto transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  )}
                  {item.type === "video" && (
                    <span className="absolute top-3 left-3 flex items-center gap-1.5 font-mono-brand text-[9px] uppercase tracking-[2px] px-3 py-1.5 border-brutal-thin bg-[hsl(var(--cream))]">
                      <Play size={10} className="fill-current" /> Vidéo
                    </span>
                  )}
                </div>
                <figcaption className="border-t-[3px] border-foreground px-4 py-3">
                  <span className="block font-mono-brand text-[9px] uppercase tracking-[2px] text-primary mb-1">
                    {categoryLabels[item.category]}
                  </span>
                  <span className="block text-sm text-foreground/80 leading-snug">{item.caption}</span>
                </figcaption>
              </button>
            </figure>
          ))}
            </div>
          ))}
        </div>
      </main>

      {/* ===== CTA ===== */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(0,0%,10%)" flip />
      <section className="bg-foreground text-primary-foreground px-6 pt-10 pb-24">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="font-mono-brand text-[11px] uppercase tracking-[3px] text-olive-light mb-4">À vous de jouer</p>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] uppercase leading-[0.95] tracking-[-1px] mb-6">
            Envie de vivre <span className="text-olive-light">un atelier&nbsp;?</span>
          </h2>
          <p className="text-base text-primary-foreground/75 leading-relaxed mb-10 max-w-xl mx-auto">
            Kokedama, teinture végétale, herbier, papier recyclé… partout en Île-de-France, pour les particuliers, les écoles et les entreprises.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/workshops"
              className="btn-brutal bg-primary text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-8 py-3 inline-block"
            >
              Voir les ateliers →
            </Link>
            <Link
              to="/contact"
              className="btn-brutal bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-8 py-3 inline-block"
              style={{ borderColor: "hsl(var(--cream))" }}
            >
              Nous écrire →
            </Link>
          </div>
          <a
            href="https://www.instagram.com/botanique.ludique/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-10 font-mono-brand text-[11px] uppercase tracking-[2px] text-primary-foreground/70 hover:text-olive-light transition-colors"
          >
            <Camera size={14} /> Plus de photos sur Instagram @botanique.ludique
          </a>
        </AnimatedSection>
      </section>

      {/* ===== VUE PLEIN ÉCRAN ===== */}
      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedIndex(null)}>
        <DialogContent overlayClassName="z-[1000] bg-black/90" className="z-[1000] max-w-[95vw] w-[95vw] h-[92vh] p-0 bg-[hsl(var(--black))]/95 border-brutal border-[hsl(var(--cream))]/20 rounded-none [&>button:last-child]:hidden">
          <DialogTitle className="sr-only">{selectedItem?.caption ?? "Galerie"}</DialogTitle>
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 z-50 w-11 h-11 flex items-center justify-center border-2 border-[hsl(var(--cream))] text-[hsl(var(--cream))] hover:bg-[hsl(var(--cream))] hover:text-foreground transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 flex items-center justify-center border-2 border-[hsl(var(--cream))] text-[hsl(var(--cream))] hover:bg-[hsl(var(--cream))] hover:text-foreground transition-colors"
            aria-label="Photo précédente"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 flex items-center justify-center border-2 border-[hsl(var(--cream))] text-[hsl(var(--cream))] hover:bg-[hsl(var(--cream))] hover:text-foreground transition-colors"
            aria-label="Photo suivante"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {selectedItem && (
            <div
              className="w-full h-full flex flex-col items-center justify-center gap-4 px-16 py-16 md:px-24"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              {selectedItem.type === "video" ? (
                <video
                  key={selectedItem.src}
                  src={selectedItem.src}
                  className="max-w-full max-h-[72vh] object-contain"
                  controls
                  autoPlay
                  loop
                  playsInline
                />
              ) : (
                <img
                  key={selectedItem.src}
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  className="max-w-full max-h-[72vh] object-contain"
                />
              )}
              <div className="text-center max-w-2xl">
                <p className="font-mono-brand text-[10px] uppercase tracking-[2px] text-olive-light mb-1">
                  {categoryLabels[selectedItem.category]} · {(selectedIndex ?? 0) + 1} / {visibleItems.length}
                </p>
                <p className="text-sm md:text-base text-[hsl(var(--cream))]/85">{selectedItem.caption}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <BackToTop />
      <Footer />
    </div>
  );
};

export default Gallery;
