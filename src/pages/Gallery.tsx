import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-botanical.jpg";
import kokedamaImage from "@/assets/workshop-kokedama.jpg";
import dyeingImage from "@/assets/workshop-dyeing.jpg";
import terrariumImage from "@/assets/workshop-terrarium.jpg";
import muralImage from "@/assets/workshop-mural.jpg";
import aboutImage from "@/assets/about-vanessa.jpg";

const Gallery = () => {
  const images = [
    { src: heroImage, alt: "Composition botanique lumineuse" },
    { src: kokedamaImage, alt: "Création de kokedama" },
    { src: dyeingImage, alt: "Atelier de teinture végétale" },
    { src: terrariumImage, alt: "Terrarium en verre" },
    { src: muralImage, alt: "Fresque végétale en cours" },
    { src: aboutImage, alt: "Portrait de Vanessa dans la nature" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24">
        <section className="relative overflow-hidden bg-sage-dark py-24 text-off-white">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute -top-8 left-12 h-48 w-48 rounded-full bg-earth/40 blur-3xl" />
            <div className="absolute bottom-0 right-16 h-60 w-60 rounded-full bg-accent/30 blur-3xl" />
          </div>
          <div className="container relative mx-auto flex max-w-4xl flex-col items-center gap-8 px-4 text-center md:px-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-off-white/10 px-6 py-2 font-sans text-xs uppercase tracking-[0.4em] text-sand/80">
              Galerie vivante
            </span>
            <h1 className="font-serif text-4xl font-light md:text-6xl">Moments cueillis au cœur des ateliers</h1>
            <p className="font-sans text-lg leading-relaxed text-off-white/80">
              Une immersion visuelle dans l'univers Botanique Ludique : textures végétales, gestes artisanaux, sourires partagés. Toutes les photographies sont réalisées par Vanessa Charlery.
            </p>
          </div>
        </section>

        <section className="bg-off-white py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {images.map((image, index) => (
                <div
                  key={`${image.alt}-${index}`}
                  className="group relative aspect-[3/4] overflow-hidden rounded-3xl border border-sage/20 bg-white shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-sage/10 to-charcoal/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-off-white/90 px-4 py-2 font-sans text-xs uppercase tracking-[0.3em] text-charcoal/70 shadow-lg">
                    {image.alt}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-20 text-center">
              <p className="font-sans text-sm uppercase tracking-[0.3em] text-charcoal/60">
                Plus d'inspirations botaniques
              </p>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-3 rounded-full border border-sage/40 px-8 py-4 font-sans text-sm uppercase tracking-[0.3em] text-sage transition-all hover:scale-105 hover:bg-sage/10"
              >
                @botaniqueludique
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
