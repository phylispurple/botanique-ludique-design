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
              Philosophy
            </h1>

            <div className="prose prose-lg max-w-none">
              <div className="mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-light mb-6 text-foreground text-center">
                  Connection
                </h2>
                <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed text-center mb-8">
                  We believe that reconnecting with plants is a way to reconnect with ourselves.
                  In our workshops, you'll learn to slow down, observe, and engage with the natural world
                  in a meaningful way.
                </p>
                <div className="h-px bg-border max-w-xs mx-auto"></div>
              </div>

              <div className="mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-light mb-6 text-foreground text-center">
                  Growth
                </h2>
                <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed text-center mb-8">
                  Like plants, we grow through cycles of patience, care, and transformation.
                  Our workshops honor this process, creating space for experimentation, learning,
                  and creative discovery.
                </p>
                <div className="h-px bg-border max-w-xs mx-auto"></div>
              </div>

              <div className="mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-light mb-6 text-foreground text-center">
                  Ritual
                </h2>
                <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed text-center mb-8">
                  There is magic in repetition, in the careful preparation of materials, in the act of making
                  with your hands. We embrace ritual as a form of meditation — a way to bring intention and
                  presence to the creative process.
                </p>
                <div className="h-px bg-border max-w-xs mx-auto"></div>
              </div>

              <div className="bg-card rounded-lg p-8 md:p-12 shadow-lg">
                <blockquote className="text-center">
                  <p className="font-serif text-2xl md:text-3xl font-light italic text-foreground mb-6">
                    "In every seed is the possibility of a forest. In every workshop is the possibility
                    of transformation."
                  </p>
                  <footer className="font-sans text-sm text-muted-foreground uppercase tracking-wider">
                    — Vanessa Charlery
                  </footer>
                </blockquote>
              </div>

              <div className="mt-16 text-center">
                <h2 className="font-serif text-3xl md:text-4xl font-light mb-6 text-foreground">
                  Our Approach
                </h2>
                <div className="space-y-6 max-w-2xl mx-auto">
                  <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
                    We combine ethnobotanical knowledge with contemporary artistic practice,
                    creating workshops that are both educational and deeply creative.
                  </p>
                  <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
                    Each experience is designed to be accessible to all skill levels while maintaining
                    depth and authenticity. We work with sustainable, locally-sourced materials whenever possible.
                  </p>
                  <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
                    Whether you're a curious beginner or an experienced plant enthusiast, our workshops
                    offer space for exploration, learning, and connection.
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
