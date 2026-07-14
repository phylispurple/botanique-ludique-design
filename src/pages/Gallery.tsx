import { useState, useEffect, useCallback } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import BackToTop from "@/components/BackToTop";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import terrariumImage from "@/assets/gallery-terrarium.webp";
import seedBombsImage from "@/assets/gallery-seed-bombs.webp";
import workshopTableImage from "@/assets/gallery-workshop-table.webp";
import forestWalkImage from "@/assets/gallery-forest-walk.webp";
import succulentsImage from "@/assets/gallery-succulents.webp";
import autumnLeavesImage from "@/assets/gallery-autumn-leaves.webp";
import basketryImage from "@/assets/gallery-basketry.webp";
import atelierAdulteImage from "@/assets/gallery-atelier-adulte.webp";
import sachetSenteurImage from "@/assets/gallery-sachet-senteur.webp";
import flowerCrownImage from "@/assets/gallery-flower-crown.webp";
import collegeEee1Image from "@/assets/gallery-college-eee-1.webp";
import collegeEee2Image from "@/assets/gallery-college-eee-2.webp";
import collegeEee3Image from "@/assets/gallery-college-eee-3.webp";
import collegeEee4Image from "@/assets/gallery-college-eee-4.webp";
import fresqueVegetaleImage from "@/assets/gallery-fresque-vegetale.webp";
import tatakiZomeImage from "@/assets/workshop-tataki-zome.webp";
import kosovoConstruction1 from "@/assets/gallery-kosovo-construction-1.webp";
import kosovoConstruction2 from "@/assets/gallery-kosovo-construction-2.webp";
import kosovoConstruction3 from "@/assets/gallery-kosovo-construction-3.webp";
import kosovoConstruction4 from "@/assets/gallery-kosovo-construction-4.webp";
import kosovoConstruction5 from "@/assets/gallery-kosovo-construction-5.webp";
import kosovoConstruction6 from "@/assets/gallery-kosovo-construction-6.webp";
import kosovoConstruction7 from "@/assets/gallery-kosovo-construction-7.webp";
import kokedamaGardenImage from "@/assets/gallery-kokedama-garden.webp";
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
import teintureEnfants1 from "@/assets/gallery-teinture-enfants-1.jpg.asset.json";
import teintureEnfants2 from "@/assets/gallery-teinture-enfants-2.jpg.asset.json";
import teintureEnfants3 from "@/assets/gallery-teinture-enfants-3.jpg.asset.json";
import terrariumAdultesGroupe from "@/assets/gallery-terrarium-adultes-groupe.jpg.asset.json";



const GalleryImage = ({ src, alt, className, style }: { src: string; alt: string; className?: string; style?: React.CSSProperties }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div className="relative w-full h-full">
      {/* Skeleton with blur placeholder */}
      <div 
        className={cn(
          "absolute inset-0 bg-sage/20 animate-pulse transition-opacity duration-500",
          isLoaded ? "opacity-0" : "opacity-100"
        )}
      >
        <div className="w-full h-full bg-gradient-to-br from-sage/10 via-sage/20 to-sage/10" />
      </div>
      <img
        src={src}
        alt={alt}
        className={cn(
          "transition-all duration-700",
          isLoaded ? "opacity-100 blur-0" : "opacity-0 blur-sm",
          className
        )}
        style={style}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

const Gallery = () => {
  const items = [
    { src: teintureEnfants1.url, alt: "Atelier teinture végétale enfants, t-shirt orange", caption: "Atelier teinture végétale enfants, T-shirt teint aux pigments naturels", type: "image" },
    { src: teintureEnfants2.url, alt: "Enfant peignant un t-shirt à la betterave", caption: "Atelier teinture végétale enfants, Application de pigment de betterave", type: "image" },
    { src: teintureEnfants3.url, alt: "Application de teinture végétale au pinceau", caption: "Atelier teinture végétale enfants, Teinture au pinceau", type: "image" },
    { src: terrariumAdultesGroupe.url, alt: "Atelier terrarium en groupe, adultes", caption: "Atelier terrarium, Création en groupe entre collègues", type: "image" },
    { src: portraitVanessaImage, alt: "Vanessa Charlery, ethnobotaniste", caption: "Portrait, Vanessa Charlery, fondatrice", type: "image" },


    { src: terrariumEnfantsMousseImage, alt: "Atelier terrarium enfants avec mousse", caption: "Atelier enfants, Préparation de la mousse pour terrariums", type: "image" },
    { src: fittoniaPotsImage, alt: "Plantules de Fittonia en pots", caption: "Fittonia, plantules prêtes pour les terrariums", type: "image" },
    { src: terrariumEnfantsFabricationImage, alt: "Enfants fabriquant un terrarium", caption: "Atelier enfants, Fabrication de terrariums en bocaux", type: "image" },
    { src: bougieFleursSecheesImage, alt: "Bougie aux fleurs séchées", caption: "Atelier bougie, Fleurs séchées en gel transparent", type: "image" },
    { src: kokedamaTradescantiaImage, alt: "Kokedama avec tradescantia", caption: "Kokedama, Tradescantia zebrina en cours de création", type: "image" },
    { src: kokedamaGardenImage, alt: "Kokedama dans un jardin", caption: "Kokedama dans un jardin naturel", type: "image" },
    { src: "/videos/workshop-demo.mp4", alt: "Immersion dans nos ateliers", caption: "Immersion dans nos ateliers", type: "video" },
    { src: terrariumImage, alt: "Terrarium avec mousse", caption: "Terrarium, Atelier Botanique Ludique", type: "image" },
    { src: flowerCrownImage, alt: "Couronne de fleurs", caption: "Atelier couronne de fleurs", type: "image" },
    { src: "/videos/workshop-epoxy-floral.mp4", alt: "Création époxy floral", caption: "Atelier Époxy Floral, Plateaux et tables en résine", type: "video" },
    { src: seedBombsImage, alt: "Atelier bombes de graines", caption: "Bombes de graines, Atelier Botanique Ludique", type: "image" },
    { src: workshopGroupImage, alt: "Atelier kokedama en groupe", caption: "Atelier kokedama, Participants en création", type: "image" },
    { src: workshopTableImage, alt: "Table d'atelier", caption: "Préparation d'atelier, MJC Le Vésinet", type: "image" },
    { src: teinture1Image, alt: "Atelier teinture végétale", caption: "Atelier teinture végétale, Préparation des tissus", type: "image" },
    { src: teinture2Image, alt: "Teinture végétale résultat", caption: "Atelier teinture végétale, Couleurs naturelles", type: "image" },
    { src: teinture3Image, alt: "Détail teinture végétale", caption: "Atelier teinture végétale, Fil teint au bleu", type: "image" },
    { src: "/videos/workshop-dyeing.mp4", alt: "Atelier teinture végétale", caption: "Atelier teinture végétale en vidéo", type: "video" },
    { src: forestWalkImage, alt: "Balade en forêt", caption: "Atelier sur les espèces exotiques envahissantes", type: "image" },
    { src: tatakiZomeImage, alt: "Atelier Tataki Zome", caption: "Atelier Tataki Zome, Impression végétale japonaise", type: "image" },
    { src: "/videos/workshop-demo-2.mp4", alt: "Atelier botanique", caption: "Atelier de création botanique", type: "video" },
    { src: basketryImage, alt: "Atelier vannerie", caption: "Atelier vannerie et tressage", type: "image" },
    { src: succulentsImage, alt: "Atelier succulentes", caption: "Succulentes, Atelier Botanique Ludique", type: "image" },
    { src: "/videos/workshop-demo-3.mp4", alt: "Création naturelle", caption: "Création avec éléments naturels", type: "video" },
    { src: sachetSenteurImage, alt: "Sachets de senteur", caption: "Sachets de senteur aux plantes aromatiques", type: "image" },
    { src: autumnLeavesImage, alt: "Création avec feuilles d'automne", caption: "Création végétale automnale", type: "image" },
    { src: "/videos/workshop-demo-4.mp4", alt: "Atelier en groupe", caption: "Atelier participatif", type: "video" },
    { src: atelierAdulteImage, alt: "Atelier herbier adulte", caption: "Atelier création d'herbier, Adultes", type: "image" },
    { src: fresqueVegetaleImage, alt: "Fresque végétale", caption: "Fresques Végétales", type: "image" },
    { src: collegeEee1Image, alt: "Atelier collège", caption: "Atelier collège, Espèces exotiques envahissantes", type: "image" },
    { src: collegeEee2Image, alt: "Atelier collège", caption: "Atelier collège, Espèces exotiques envahissantes", type: "image" },
    { src: collegeEee3Image, alt: "Atelier collège", caption: "Atelier collège, Espèces exotiques envahissantes", type: "image" },
    { src: collegeEee4Image, alt: "Atelier collège", caption: "Atelier collège, Espèces exotiques envahissantes", type: "image" },
    { src: kosovoConstruction1, alt: "Éco-construction au Kosovo", caption: "Construction d'une structure en bois, Kosovo", type: "image" },
    { src: kosovoConstruction2, alt: "Équipe éco-construction Kosovo", caption: "Travail d'équipe en éco-construction, Kosovo", type: "image" },
    { src: kosovoConstruction3, alt: "Préparation du torchis", caption: "Préparation du torchis en groupe, Kosovo", type: "image" },
    { src: kosovoConstruction4, alt: "Structure en torchis", caption: "Réalisation d'un bâtiment en torchis, Kosovo", type: "image" },
    { src: kosovoConstruction5, alt: "Atelier torchis", caption: "Les mains dans le torchis, Kosovo", type: "image" },
    { src: kosovoConstruction6, alt: "Application du torchis", caption: "Techniques ancestrales de construction, Kosovo", type: "image" },
    { src: kosovoConstruction7, alt: "Manipulation du torchis", caption: "Apprentissage éco-construction, Kosovo", type: "image" },
    { src: miniTerrariumImage, alt: "Mini terrarium en bocal", caption: "Mini terrarium en bocal", type: "image" },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedItem = selectedIndex !== null ? items[selectedIndex] ?? null : null;

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? items.length - 1 : selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === items.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <SEO 
        title="Galerie Photos & Vidéos | Nos Ateliers en Images ✦ Inspirations"
        description="📸 Découvrez nos créations en images : kokedama, teinture végétale, terrarium, vannerie. +50 ateliers réalisés. Trouvez l'inspiration pour votre prochain atelier !"
        keywords="galerie ateliers botaniques, photos kokedama, teinture végétale images, éco-construction photos, vannerie galerie"
        canonical="/gallery"
      />
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="page-title text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              Galerie
            </h1>
            <p className="text-lg text-charcoal/80 leading-relaxed animate-fade-in">
              Un voyage visuel à travers nos ateliers, rencontres botaniques et moments créatifs.
              Toutes les photographies par Vanessa Charlery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedIndex(index)}
                onMouseEnter={(e) => {
                  const vid = e.currentTarget.querySelector('video');
                  vid?.play().catch(err => console.log('Video play failed:', err));
                }}
                onMouseLeave={(e) => {
                  const vid = e.currentTarget.querySelector('video');
                  if (vid) { vid.pause(); vid.currentTime = 0; }
                }}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                      style={{ filter: 'sepia(0.1) saturate(0.9)' }}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      onMouseEnter={(e) => {
                        e.currentTarget.play().catch(err => console.log('Video play failed:', err));
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    />
                  ) : (
                    <GalleryImage
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-110"
                      style={{ filter: 'sepia(0.1) saturate(0.9)' }}
                    />
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 pointer-events-none">
                  <p className="text-white text-sm italic">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-charcoal/70 mb-6">
              Suivez-nous sur Instagram pour plus d'inspiration botanique
            </p>
            <a
              href="https://www.instagram.com/botanique.ludique/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-sage hover:bg-sage-dark text-off-white font-semibold uppercase tracking-wider transition-all rounded-full"
            >
              @botanique.ludique
            </a>
          </div>
        </div>
      </main>

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedIndex(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-[hsl(var(--black))]/95 border-none">
          {/* Bouton fermer */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-[hsl(var(--cream))]/10 hover:bg-[hsl(var(--cream))]/25 transition-colors border border-[hsl(var(--cream))]/20"
            aria-label="Fermer"
          >
            <X className="w-5 h-5 text-[hsl(var(--cream))]" />
          </button>

          {/* Flèche précédent */}
          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-50 p-2.5 rounded-full bg-[hsl(var(--cream))]/10 hover:bg-[hsl(var(--cream))]/25 transition-colors border border-[hsl(var(--cream))]/20"
            aria-label="Image précédente"
          >
            <ChevronLeft className="w-6 h-6 text-[hsl(var(--cream))]" />
          </button>

          {/* Flèche suivant */}
          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-50 p-2.5 rounded-full bg-[hsl(var(--cream))]/10 hover:bg-[hsl(var(--cream))]/25 transition-colors border border-[hsl(var(--cream))]/20"
            aria-label="Image suivante"
          >
            <ChevronRight className="w-6 h-6 text-[hsl(var(--cream))]" />
          </button>

          {selectedItem && (
            <div className="relative w-full h-full flex items-center justify-center px-14 py-16 md:p-16">
              {selectedItem.type === "video" ? (
                <video
                  key={selectedItem.src}
                  src={selectedItem.src}
                  className="max-w-full max-h-[75vh] md:max-h-[80vh] object-contain"
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
                  className="max-w-full max-h-[75vh] md:max-h-[80vh] object-contain"
                />
              )}
              <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex flex-col md:flex-row items-center gap-1 md:gap-3 max-w-[90vw]">
                <p className="text-[hsl(var(--cream))] text-xs md:text-sm italic bg-[hsl(var(--black))]/80 px-3 md:px-4 py-1.5 md:py-2 rounded-full font-mono-brand text-center line-clamp-2">
                  {selectedItem.caption}
                </p>
                <span className="text-[hsl(var(--cream))]/50 text-[10px] md:text-xs font-mono-brand whitespace-nowrap">
                  {(selectedIndex ?? 0) + 1}/{items.length}
                </span>
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
