import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { Leaf, Sprout, Sparkles } from "lucide-react";
import aboutImage from "@/assets/about-vanessa.jpg";

const About = () => {
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <SEO 
        title="À Propos - Vanessa Charlery, Ethnobotaniste | Botanique Ludique"
        description="Découvrez Vanessa Charlery, ethnobotaniste et artiste photographe, fondatrice de Botanique Ludique. Formation EHESS en anthropologie, spécialisée en ethnobotanique. Notre démarche éthique pour reconnecter l'humain à la nature."
        keywords="Vanessa Charlery, ethnobotaniste, anthropologie botanique, EHESS, photographe botanique, éducation environnement, ethnobotanique, philosophie nature, reconnexion vivant"
        canonical="/about"
      />
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="page-title text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-center">
              À Propos de Botanique Ludique
            </h1>
            <p className="subtitle-italic text-lg text-center mb-16">
              Un projet né d'une passion commune pour la nature et l'éducation.
            </p>

            <div className="max-w-4xl mx-auto mb-20">
              <div className="bg-sand rounded-lg p-8 md:p-12 animate-fade-in mb-12">
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  Botanique Ludique est un projet né d'une passion commune pour la nature et l'éducation. Créé en 2022 par Vanessa Charlery et Benjamin Riou, notre mission est de rendre la botanique accessible, ludique et enrichissante pour tous.
                </p>
              </div>

              <div className="relative mb-12">
                <div className="absolute inset-0 rounded-lg" style={{ border: '3px solid #C9D2B5', transform: 'translate(8px, 8px)' }}></div>
                <img
                  src={aboutImage}
                  loading="lazy"
                  alt="Vanessa Charlery"
                  className="w-full rounded-lg shadow-lg relative z-10"
                />
              </div>

              <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Vanessa Charlery
                </h2>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  Vanessa Charlery a étudié à l'EHESS en anthropologie avec une spécialisation en ethnobotanique. Elle a également obtenu une licence en sociologie de l'Université Toulouse 2.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  Sa recherche, menée sous la direction de Florence Brunois-Pasina à l'EHESS, se concentre sur les interactions entre les citadins et les plantes dans les espaces verts urbains du Grand Paris, explorant les liens entre nature et culture. Vanessa a également suivi des cours sur la "Nature en ville" dispensés par Michel Auduy de l'ENSP.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  Artiste photographe depuis 2014, elle documente à travers son objectif la beauté et la complexité des relations entre l'humain et le végétal, créant des ponts entre science, art et éducation.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  Elle a voyagé pour découvrir diverses pratiques botaniques. Au Japon, elle a appris des techniques de jardinage et d'aquaponie. Au Kosovo, dans le cadre d'un Service Volontaire Européen avec l'association{' '}
                  <a 
                    href="https://www.gaiakosovo.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sage hover:text-sage-dark underline transition-colors"
                  >
                    Gaia Kosovo
                  </a>, elle a participé à des projets d'autonomie, de permaculture et d'écoconstruction, obtenant une certification Youthpath en permaculture et écoconstruction.
                </p>
              </div>
            </div>

            {/* Philosophy Section */}
            <div className="max-w-4xl mx-auto mb-20">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl mb-6 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Notre Démarche Éthique
                </h2>
                <p className="subtitle-italic text-lg text-center mb-12">
                  Repenser notre lien au vivant à l'heure de l'urgence écologique
                </p>
              </div>

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
                <h3 className="text-2xl md:text-3xl mb-6 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Dépasser la séparation Homme-Nature
                </h3>
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
                <h3 className="text-2xl md:text-3xl mb-6 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  L'urgence de la sensibilisation écologique
                </h3>
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
                <h3 className="text-2xl md:text-3xl mb-6 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Le rituel comme reconnexion
                </h3>
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
                <h3 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Notre approche
                </h3>
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

export default About;
