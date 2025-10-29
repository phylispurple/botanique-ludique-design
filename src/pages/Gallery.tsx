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
    { src: heroImage, alt: "Botanical close-up" },
    { src: kokedamaImage, alt: "Kokedama creation" },
    { src: dyeingImage, alt: "Natural dyeing process" },
    { src: terrariumImage, alt: "Glass terrarium" },
    { src: muralImage, alt: "Botanical mural in progress" },
    { src: aboutImage, alt: "Portrait in nature" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl font-light mb-6 text-foreground">
              Gallery
            </h1>
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
              A visual journey through our workshops, botanical encounters, and creative moments.
              All photographs by Vanessa Charlery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="font-sans text-sm text-muted-foreground mb-6">
              Follow us on Instagram for more botanical inspiration
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-sans text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors rounded-full"
            >
              @botaniqueludique
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
