import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import aboutImage from "@/assets/about-vanessa.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="font-serif text-4xl md:text-6xl font-light mb-16 text-center text-foreground">
              About Vanessa
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
              <div className="relative">
                <img
                  src={aboutImage}
                  alt="Vanessa Charlery"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              <div className="space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground">
                  From Ethnobotany to Creative Ritual
                </h2>
                <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
                  Vanessa Charlery is an ethnobotanist and photographer who bridges the worlds of
                  science and art. Her journey began with academic research in plant-human relationships,
                  exploring how cultures around the world interact with and understand the botanical realm.
                </p>
                <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
                  Through her lens as a photographer, she discovered the poetry hidden in leaves, roots,
                  and flowers — the tactile beauty that academic study alone couldn't capture.
                </p>
                <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
                  This led to the creation of Botanique Ludique: a space where knowledge meets creativity,
                  where ritual meets play, and where anyone can rediscover their connection to the plant world.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 md:p-12 shadow-lg">
              <h3 className="font-serif text-2xl md:text-3xl font-light mb-6 text-foreground text-center">
                The Philosophy
              </h3>
              <div className="max-w-3xl mx-auto space-y-4 text-center">
                <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
                  Plants have always been our teachers, healers, and companions. In our fast-paced modern world,
                  we've lost touch with this ancient relationship.
                </p>
                <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
                  Through hands-on workshops that combine traditional techniques with contemporary creativity,
                  we create moments of slowness, observation, and connection.
                </p>
                <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed italic">
                  "Every workshop is an invitation to pause, to create, and to remember that we are part of nature,
                  not separate from it."
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
