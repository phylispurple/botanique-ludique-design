import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Philosophy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl md:text-6xl font-light mb-16 text-center text-foreground">
              Philosophie
            </h1>

            <div className="prose prose-lg max-w-none">
              <div className="mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-light mb-6 text-foreground text-center">
                  Connexion
                </h2>
                <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed text-center mb-8">
                  Nous croyons que se reconnecter aux plantes, c'est aussi se reconnecter à soi.
                  Dans nos ateliers, vous apprendrez à ralentir, à observer et à entrer en relation avec le monde végétal de manière sensible et consciente.
                </p>
                <div className="h-px bg-border max-w-xs mx-auto"></div>
              </div>

              <div className="mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-light mb-6 text-foreground text-center">
                  Croissance
                </h2>
                <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed text-center mb-8">
                  À l'image des plantes, nous grandissons par cycles de patience, de soin et de transformation.
                  Nos ateliers honorent ces rythmes naturels et offrent un espace propice à l'expérimentation, à l'apprentissage et à la découverte créative.
                </p>
                <div className="h-px bg-border max-w-xs mx-auto"></div>
              </div>

              <div className="mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-light mb-6 text-foreground text-center">
                  Rituel
                </h2>
                <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed text-center mb-8">
                  Il y a une forme de magie dans la répétition, dans la préparation minutieuse des matières, dans le geste de créer avec ses mains.
                  Nous voyons le rituel comme une méditation — une manière d'insuffler intention et présence dans le processus créatif.
                </p>
                <div className="h-px bg-border max-w-xs mx-auto"></div>
              </div>

              <div className="bg-card rounded-lg p-8 md:p-12 shadow-lg">
                <blockquote className="text-center">
                  <p className="font-serif text-2xl md:text-3xl font-light italic text-foreground mb-6">
                    "Dans chaque graine réside la possibilité d’une forêt. Dans chaque atelier, la possibilité d’une transformation."
                  </p>
                  <footer className="font-sans text-sm text-muted-foreground uppercase tracking-wider">
                    — Vanessa Charlery
                  </footer>
                </blockquote>
              </div>

              <div className="mt-16 text-center">
                <h2 className="font-serif text-3xl md:text-4xl font-light mb-6 text-foreground">
                  Notre approche
                </h2>
                <div className="space-y-6 max-w-2xl mx-auto">
                  <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
                    Nous allions savoirs ethnobotaniques et pratiques artistiques contemporaines pour imaginer des ateliers à la fois pédagogiques et profondément créatifs.
                  </p>
                  <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
                    Chaque expérience est pensée pour être accessible à tous les niveaux, tout en conservant une réelle profondeur et authenticité. Nous travaillons avec des matériaux durables et locaux, dans le respect du vivant et des cycles naturels.
                  </p>
                  <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
                    Que vous soyez curieux débutant ou passionné du monde végétal, nos ateliers offrent un espace d'exploration, d'apprentissage et de lien.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Philosophy;
