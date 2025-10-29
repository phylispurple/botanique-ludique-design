import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import kokedamaImage from "@/assets/workshop-kokedama.jpg";
import dyeingImage from "@/assets/workshop-dyeing.jpg";
import terrariumImage from "@/assets/workshop-terrarium.jpg";
import muralImage from "@/assets/workshop-mural.jpg";

const workshops = [
  {
    title: "Kokedama",
    description: "Learn the Japanese art of moss ball gardening. Create your own suspended plant sculptures using traditional techniques combined with contemporary design.",
    duration: "2.5 hours",
    image: kokedamaImage,
  },
  {
    title: "Teinture Végétale",
    description: "Discover the alchemy of plant dyeing. Extract natural pigments from botanical materials to create beautiful, sustainable textiles in earthy tones.",
    duration: "3 hours",
    image: dyeingImage,
  },
  {
    title: "Terrariums",
    description: "Build miniature ecosystems in glass. Compose layered landscapes with moss, stones, and delicate plants — tiny worlds that thrive with minimal care.",
    duration: "2 hours",
    image: terrariumImage,
  },
  {
    title: "Fresques Végétales",
    description: "Create botanical murals using pressed flowers, leaves, and natural materials. A meditative process that transforms plants into living art pieces.",
    duration: "4 hours",
    image: muralImage,
  },
];

const Workshops = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl font-light mb-6 text-foreground">
              Workshops
            </h1>
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
              Immersive botanical experiences for individuals and groups. Each workshop is designed to
              reconnect you with nature through hands-on creativity and mindful practice.
            </p>
          </div>

          <div className="space-y-20">
            {workshops.map((workshop, index) => (
              <div
                key={workshop.title}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-500"
                  />
                </div>

                <div className={`space-y-4 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="inline-block px-4 py-1 bg-primary/10 text-primary font-sans text-xs uppercase tracking-wider rounded-full">
                    {workshop.duration}
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground">
                    {workshop.title}
                  </h2>
                  <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
                    {workshop.description}
                  </p>
                  <button className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-sans text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors rounded-full">
                    Book This Workshop
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-card rounded-lg p-8 md:p-12 shadow-lg text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-light mb-4 text-foreground">
              Private & Corporate Workshops
            </h3>
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
              Looking for a unique team-building experience or private event? We offer customized workshops
              for groups, companies, and special occasions.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-sans text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors rounded-full"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Workshops;
