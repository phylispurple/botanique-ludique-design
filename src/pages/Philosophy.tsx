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
            <h1 className="page-title text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl mb-8 text-center">
              Éthique
            </h1>
            <p className="subtitle-italic text-lg text-center mb-20">
              Repenser notre lien au vivant à l'heure de l'urgence écologique
            </p>

            <div className="prose prose-lg max-w-none">
              <div className="bg-sand rounded-lg p-8 md:p-12 mb-16 animate-fade-in">
                <p className="text-lg text-charcoal/80 leading-relaxed mb-4">
                  Dans un monde confronté à une crise climatique sans précédent, où la biodiversité s'amenuise et où nos vies urbaines nous ont progressivement éloignés du vivant, reconnecter avec les plantes n'est plus un luxe, mais une nécessité vitale.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  L'urbanisation effrénée, les infrastructures de béton et le rythme effréné de nos sociétés modernes ont créé une séparation profonde entre l'humain et la nature. Nous avons oublié que nous ne sommes pas séparés de la nature, mais que nous en faisons partie intégrante.
                </p>
              </div>

              <div className="mb-16 animate-fade-in">
                <Leaf size={36} className="mx-auto mb-4" style={{ color: '#A7B795' }} />
                <h2 className="text-3xl md:text-4xl mb-6 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Dépasser la séparation Homme-Nature
                </h2>
                <p className="text-lg text-charcoal/80 leading-relaxed text-center mb-6">
                  Notre approche s'inspire des travaux de Philippe Descola et Bruno Latour, qui remettent en question la dichotomie traditionnelle entre l'humain et la nature. Nous croyons que les plantes ne sont pas de simples objets esthétiques ou fonctionnels, mais des entités vivantes dotées de leur propre existence.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed text-center mb-8">
                  Dans nos ateliers, nous vous invitons à <em>ralentir</em>, à <em>observer</em> et à <em>écouter le vivant</em> de manière sensible et consciente. C'est dans cette reconnexion que nous trouvons un sens profond et un équilibre essentiel.
                </p>
                <div className="h-px bg-earth/30 max-w-xs mx-auto"></div>
              </div>

              <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Sprout size={36} className="mx-auto mb-4" style={{ color: '#A7B795' }} />
                <h2 className="text-3xl md:text-4xl mb-6 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  L'urgence de la sensibilisation écologique
                </h2>
                <p className="text-lg text-charcoal/80 leading-relaxed text-center mb-6">
                  Face aux enjeux environnementaux actuels — changement climatique, perte de biodiversité, pollution — il est urgent de repenser notre place dans l'écosystème. Les plantes, en tant qu'acteurs essentiels de nos environnements, jouent un rôle capital dans notre survie et notre bien-être.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed text-center mb-8">
                  À travers nos ateliers, nous souhaitons contribuer à une prise de conscience collective de la valeur intrinsèque du monde végétal. Chaque geste créatif devient une méditation sur notre interdépendance avec le vivant.
                </p>
                <div className="h-px bg-earth/30 max-w-xs mx-auto"></div>
              </div>

              <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Sparkles size={36} className="mx-auto mb-4" style={{ color: '#A7B795' }} />
                <h2 className="text-3xl md:text-4xl mb-6 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Le rituel comme reconnexion
                </h2>
                <p className="text-lg text-charcoal/80 leading-relaxed text-center mb-8">
                  Il y a une forme de magie dans la répétition, dans la préparation minutieuse des matières naturelles, dans le geste de créer avec ses mains. Nous voyons le rituel comme une méditation — une manière d'insuffler intention et présence dans notre relation au vivant. C'est dans ces moments que nous retrouvons ce qui a été perdu dans le tumulte de la vie moderne.
                </p>
                <div className="h-px bg-earth/30 max-w-xs mx-auto"></div>
              </div>

              <div className="bg-sand rounded-lg p-8 md:p-12 mb-16">
                <blockquote className="text-center">
                  <p className="text-2xl md:text-3xl italic text-charcoal mb-6">
                    "Dans chaque graine réside la possibilité d'une forêt. Dans chaque atelier, la possibilité d'une transformation."
                  </p>
                  <footer className="text-sm text-charcoal/70 uppercase tracking-wider font-semibold">
                    — Vanessa Charlery
                  </footer>
                </blockquote>
              </div>

              <div className="text-center animate-fade-in">
                <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Notre approche
                </h2>
                <div className="space-y-6 max-w-2xl mx-auto">
                  <p className="text-lg text-charcoal/80 leading-relaxed">
                    Nous allions savoirs ethnobotaniques et pratiques artistiques contemporaines pour imaginer des ateliers à la fois pédagogiques et profondément créatifs. Notre démarche s'inscrit dans une vision holistique qui reconnaît l'importance du bien-être des plantes autant que celui des humains.
                  </p>
                  <p className="text-lg text-charcoal/80 leading-relaxed">
                    Chaque expérience est pensée pour être accessible à tous, tout en conservant une réelle profondeur et authenticité. Nous travaillons avec des matériaux durables et locaux, dans le respect du vivant et des cycles naturels.
                  </p>
                  <p className="text-lg text-charcoal/80 leading-relaxed">
                    Nos ateliers sont une invitation à redécouvrir cette connexion ancestrale que la société moderne nous a fait oublier. C'est un appel à <em>ralentir</em>, <em>ressentir</em> et créer avec la nature, pour construire ensemble un avenir plus durable et conscient.
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