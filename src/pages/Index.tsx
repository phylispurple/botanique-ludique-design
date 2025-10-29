import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-botanical.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center pt-24 pb-12">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light mb-6 text-foreground animate-fade-up text-balance">
            Botanique Ludique
          </h1>
          <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up [animation-delay:200ms] leading-relaxed">
            Des ateliers reliant l'humain et les plantes à travers la créativité, le rituel et le jeu
          </p>
          <Link
            to="/workshops"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-sans text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors rounded-full animate-fade-up [animation-delay:400ms]"
          >
            Découvrir les ateliers
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-5xl font-light mb-8 text-foreground">
              Là où la science rencontre la poésie
            </h2>
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Fondé par l’ethnobotaniste et photographe Vanessa Charlery, Botanique Ludique vous invite à vous reconnecter au monde végétal à travers des expériences créatives et pratiques.
            </p>
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
              Chaque atelier mêle savoirs botaniques traditionnels et créativité contemporaine, créant des espaces de croissance, de rituel et de jeu.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Workshops Preview */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-light mb-4 text-foreground">
              Nos ateliers
            </h2>
            <p className="font-sans text-muted-foreground">
              Des expériences immersives pour tous les niveaux
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Kokedama", "Teinture Végétale", "Terrariums", "Fresques Végétales"].map((workshop, index) => (
              <Link
                key={workshop}
                to="/workshops"
                className="group relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal/80"></div>
                <h3 className="absolute bottom-6 left-6 right-6 font-serif text-2xl text-white z-10 group-hover:translate-y-[-4px] transition-transform duration-500">
                  {workshop}
                </h3>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/workshops"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-sans text-sm uppercase tracking-wider transition-colors"
            >
              Voir tous les ateliers
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
