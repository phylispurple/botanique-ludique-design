import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import aboutImage from "@/assets/about-vanessa.jpg";
import terrariumImage from "@/assets/gallery-terrarium.jpg";
import seedBombsImage from "@/assets/gallery-seed-bombs.jpg";
import workshopTableImage from "@/assets/gallery-workshop-table.jpg";
import forestWalkImage from "@/assets/gallery-forest-walk.jpg";
import succulentsImage from "@/assets/gallery-succulents.jpg";
import autumnLeavesImage from "@/assets/gallery-autumn-leaves.jpg";
import basketryImage from "@/assets/gallery-basketry.jpg";
import atelierAdulteImage from "@/assets/gallery-atelier-adulte.jpg";
import sachetSenteurImage from "@/assets/gallery-sachet-senteur.jpg";
import flowerCrownImage from "@/assets/gallery-flower-crown.jpg";
import collegeEee1Image from "@/assets/gallery-college-eee-1.jpg";
import collegeEee2Image from "@/assets/gallery-college-eee-2.jpg";
import collegeEee3Image from "@/assets/gallery-college-eee-3.jpg";
import collegeEee4Image from "@/assets/gallery-college-eee-4.jpg";
import fresqueVegetaleImage from "@/assets/gallery-fresque-vegetale.jpg";
import tatakiZomeImage from "@/assets/workshop-tataki-zome.jpg";

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<{ src: string; alt: string; caption: string; type: string } | null>(null);

  const items = [
    { src: aboutImage, alt: "Portrait in nature", caption: "Portrait — Vanessa Charlery", type: "image" },
    { src: terrariumImage, alt: "Terrarium avec mousse", caption: "Terrarium — Atelier Botanique Ludique", type: "image" },
    { src: seedBombsImage, alt: "Atelier bombes de graines", caption: "Bombes de graines — Atelier Botanique Ludique", type: "image" },
    { src: workshopTableImage, alt: "Table d'atelier", caption: "Préparation d'atelier — MJC Le Vésinet", type: "image" },
    { src: "/videos/workshop-demo.mp4", alt: "Immersion dans nos ateliers", caption: "Immersion dans nos ateliers", type: "video" },
    { src: "/videos/workshop-demo-2.mp4", alt: "Atelier botanique", caption: "Atelier de création botanique", type: "video" },
    { src: forestWalkImage, alt: "Balade en forêt", caption: "Atelier sur les espèces exotiques envahissantes", type: "image" },
    { src: "/videos/workshop-demo-3.mp4", alt: "Création naturelle", caption: "Création avec éléments naturels", type: "video" },
    { src: succulentsImage, alt: "Atelier succulentes", caption: "Succulentes — Atelier Botanique Ludique", type: "image" },
    { src: "/videos/workshop-demo-4.mp4", alt: "Atelier en groupe", caption: "Atelier participatif", type: "video" },
    { src: autumnLeavesImage, alt: "Création avec feuilles d'automne", caption: "Création végétale automnale", type: "image" },
    { src: basketryImage, alt: "Atelier vannerie", caption: "Atelier vannerie et tressage", type: "image" },
    { src: "/videos/workshop-dyeing.mp4", alt: "Atelier teinture végétale", caption: "Atelier teinture végétale", type: "video" },
    { src: atelierAdulteImage, alt: "Atelier herbier adulte", caption: "Atelier création d'herbier — Adultes", type: "image" },
    { src: sachetSenteurImage, alt: "Sachets de senteur", caption: "Sachets de senteur aux plantes aromatiques", type: "image" },
    { src: flowerCrownImage, alt: "Couronne de fleurs", caption: "Atelier couronne de fleurs", type: "image" },
    { src: collegeEee1Image, alt: "Atelier college - especes exotiques envahissantes", caption: "Atelier college - espèces exotiques envahissantes", type: "image" },
    { src: collegeEee2Image, alt: "Atelier college - especes exotiques envahissantes", caption: "Atelier college - espèces exotiques envahissantes", type: "image" },
    { src: collegeEee3Image, alt: "Atelier college - especes exotiques envahissantes", caption: "Atelier college - espèces exotiques envahissantes", type: "image" },
    { src: collegeEee4Image, alt: "Atelier college - especes exotiques envahissantes", caption: "Atelier college - espèces exotiques envahissantes", type: "image" },
    { src: fresqueVegetaleImage, alt: "Fresque végétale", caption: "Fresques Végétales", type: "image" },
    { src: tatakiZomeImage, alt: "Atelier Tataki Zome", caption: "Atelier Tataki Zome — Impression végétale japonaise", type: "image" },
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
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
                onClick={() => setSelectedItem(item)}
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
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
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

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-charcoal/95 border-none">
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-off-white/10 hover:bg-off-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-off-white" />
          </button>
          {selectedItem && (
            <div className="relative w-full h-full flex items-center justify-center p-8">
              {selectedItem.type === "video" ? (
                <video
                  src={selectedItem.src}
                  className="max-w-full max-h-[85vh] object-contain"
                  controls
                  autoPlay
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  className="max-w-full max-h-[85vh] object-contain"
                />
              )}
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-off-white text-sm italic bg-charcoal/80 px-4 py-2 rounded-full">
                {selectedItem.caption}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Gallery;
