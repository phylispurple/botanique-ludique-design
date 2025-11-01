import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { Leaf, Sprout, Sparkles } from "lucide-react";

const Philosophy = () => {
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="page-title text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl mb-20 text-center">
              Philosophie
            </h1>

            <div className="prose prose-lg max-w-none">
              <div className="mb-16 animate-fade-in">
                <Leaf size={36} className="mx-auto mb-4" style={{ color: '#A7B795' }} />
                <h2 className="text-3xl md:text-4xl mb-6 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Connexion
                </h2>
                <p className="text-lg text-charcoal/80 leading-relaxed text-center mb-8">
                  Nous croyons que se reconnecter aux plantes, c'est aussi se reconnecter à soi.
                  Dans nos ateliers, vous apprendrez à <em>ralentir</em>, à <em>observer</em> et à <em>écouter le vivant</em> de manière sensible et consciente.
                </p>
                <div className="h-px bg-earth/30 max-w-xs mx-auto"></div>
              </div>

              <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Sprout size={36} className="mx-auto mb-4" style={{ color: '#A7B795' }} />
                <h2 className="text-3xl md:text-4xl mb-6 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Croissance
                </h2>
                <p className="text-lg text-charcoal/80 leading-relaxed text-center mb-8">
                  À l'image des plantes, nous grandissons par cycles de patience, de soin et de transformation.
                  Nos ateliers honorent ces rythmes naturels et offrent un espace propice à l'expérimentation, à l'apprentissage et à la découverte créative.
                </p>
                <div className="h-px bg-earth/30 max-w-xs mx-auto"></div>
              </div>

              <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Sparkles size={36} className="mx-auto mb-4" style={{ color: '#A7B795' }} />
                <h2 className="text-3xl md:text-4xl mb-6 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Rituel
                </h2>
                <p className="text-lg text-charcoal/80 leading-relaxed text-center mb-8">
                  Il y a une forme de magie dans la répétition, dans la préparation minutieuse des matières, dans le geste de créer avec ses mains.
                  Nous voyons le rituel comme une méditation — une manière d'insuffler intention et présence dans le processus créatif.
                </p>
                <div className="h-px bg-earth/30 max-w-xs mx-auto"></div>
              </div>

              <div className="bg-sand rounded-lg p-8 md:p-12">
                <blockquote className="text-center">
                  <p className="text-2xl md:text-3xl italic text-charcoal mb-6">
                    "Dans chaque graine réside la possibilité d'une forêt. Dans chaque atelier, la possibilité d'une transformation."
                  </p>
                  <footer className="text-sm text-charcoal/70 uppercase tracking-wider font-semibold">
                    — Vanessa Charlery
                  </footer>
                </blockquote>
              </div>

              <div className="mt-16 text-center animate-fade-in">
                <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Notre approche
                </h2>
                <div className="space-y-6 max-w-2xl mx-auto">
                  <p className="text-lg text-charcoal/80 leading-relaxed">
                    Nous allions savoirs ethnobotaniques et pratiques artistiques contemporaines pour imaginer des ateliers à la fois pédagogiques et profondément créatifs.
                  </p>
                  <p className="text-lg text-charcoal/80 leading-relaxed">
                    Chaque expérience est pensée pour être accessible à tous les niveaux, tout en conservant une réelle profondeur et authenticité. Nous travaillons avec des matériaux durables et locaux, dans le respect du vivant et des cycles naturels.
                  </p>
                  <p className="text-lg text-charcoal/80 leading-relaxed">
                    Que vous soyez curieux débutant ou passionné du monde végétal, nos ateliers offrent un espace d'exploration, d'apprentissage et de lien.
                  </p>
                </div>
              </div>

              <div className="mt-16 p-8 rounded-lg text-center" style={{ backgroundColor: '#F7F7EB' }}>
                <p className="text-xl italic leading-relaxed" style={{ color: '#5D653A' }}>
                  Nos ateliers sont une invitation à <em>ralentir</em>, <em>ressentir</em> et créer avec la nature.
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

export default Philosophy;