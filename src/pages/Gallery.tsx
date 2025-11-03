import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import aboutImage from "@/assets/about-vanessa.jpg";
import terrariumImage from "@/assets/gallery-terrarium.jpg";
import seedBombsImage from "@/assets/gallery-seed-bombs.jpg";
import workshopTableImage from "@/assets/gallery-workshop-table.jpg";
import forestWalkImage from "@/assets/gallery-forest-walk.jpg";
import succulentsImage from "@/assets/gallery-succulents.jpg";
import autumnLeavesImage from "@/assets/gallery-autumn-leaves.jpg";
import basketryImage from "@/assets/gallery-basketry.jpg";

const Gallery = () => {
  const images = [
    { src: aboutImage, alt: "Portrait in nature", caption: "Portrait — Vanessa Charlery" },
    { src: terrariumImage, alt: "Terrarium avec mousse", caption: "Terrarium — Atelier Botanique Ludique" },
    { src: seedBombsImage, alt: "Atelier bombes de graines", caption: "Bombes de graines — Atelier Botanique Ludique" },
    { src: workshopTableImage, alt: "Table d'atelier", caption: "Préparation d'atelier — MJC Le Vésinet" },
    { src: forestWalkImage, alt: "Balade en forêt", caption: "Atelier sur les espèces exotiques envahissantes" },
    { src: succulentsImage, alt: "Atelier succulentes", caption: "Succulentes — Atelier Botanique Ludique" },
    { src: autumnLeavesImage, alt: "Création avec feuilles d'automne", caption: "Création végétale automnale" },
    { src: basketryImage, alt: "Atelier vannerie", caption: "Atelier vannerie et tressage" },
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
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ filter: 'sepia(0.1) saturate(0.9)' }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <p className="text-white text-sm italic">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Video Section */}
          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-serif text-charcoal mb-6 text-center">
              Immersion dans nos ateliers
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <video
                  controls
                  className="w-full"
                  poster="/videos/workshop-demo.mp4"
                >
                  <source src="/videos/workshop-demo.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              </div>
            </div>
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

      <Footer />
    </div>
  );
};

export default Gallery;
