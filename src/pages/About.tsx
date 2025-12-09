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
                  Ma Démarche
                </h2>
                <p className="subtitle-italic text-lg text-center mb-12">
                  Une approche anthropologique du végétal
                </p>
              </div>

              <div className="bg-sand rounded-lg p-8 md:p-12 mb-16 animate-fade-in">
                <p className="text-lg text-charcoal/80 leading-relaxed mb-4">
                  Ce que je propose n'est pas du folklore. Ce n'est pas une activité vide de sens où l'on fabrique un objet joli pour l'oublier le lendemain. <strong>C'est une invitation à comprendre d'où viennent ces pratiques</strong>, à saisir leur profondeur historique et culturelle, et à travers cette compréhension, à développer notre propre sensibilité au vivant.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  Ma formation en anthropologie à l'EHESS, sous la direction de Florence Brunois-Pasina, m'a appris que chaque geste technique porte en lui une vision du monde. Créer un kokedama, teindre un tissu avec des plantes, tresser de l'osier — ces pratiques ancestrales racontent des histoires de cohabitation entre humains et végétaux.
                </p>
              </div>

              <div className="mb-16 animate-fade-in">
                <Leaf size={36} className="mx-auto mb-4" style={{ color: '#A7B795' }} />
                <h3 className="text-2xl md:text-3xl mb-6 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Une dimension anthropologique
                </h3>
                <p className="text-lg text-charcoal/80 leading-relaxed text-center mb-6">
                  Dans mes recherches sur les interactions entre citadins et végétaux dans le Grand Paris, j'ai exploré comment les urbains perçoivent, nomment et interagissent avec les plantes qui les entourent. Ce qui m'a frappée, c'est à quel point nous avons perdu le vocabulaire, les gestes et les savoirs qui reliaient autrefois l'humain au monde végétal.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed text-center mb-8">
                  Mes ateliers sont une tentative de <em>réactiver ces savoirs</em>. Non pas pour reproduire le passé de manière nostalgique, mais pour comprendre ce que ces pratiques révèlent de notre rapport au monde — et ce qu'elles peuvent nous apprendre aujourd'hui.
                </p>
                <div className="h-px bg-earth/30 max-w-xs mx-auto"></div>
              </div>

              <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Sprout size={36} className="mx-auto mb-4" style={{ color: '#A7B795' }} />
                <h3 className="text-2xl md:text-3xl mb-6 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Comprendre pour ressentir
                </h3>
                <p className="text-lg text-charcoal/80 leading-relaxed text-center mb-6">
                  L'ethnobotanique nous enseigne que les plantes ne sont jamais de simples ressources. Dans de nombreuses cultures, elles sont des partenaires, des enseignantes, des êtres avec lesquels on dialogue. Cette vision, que Philippe Descola appelle le "naturalisme" occidental, n'est qu'une cosmologie parmi d'autres.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed text-center mb-8">
                  Quand on comprend que la teinture végétale était un acte sacré dans certaines sociétés, que le tressage de l'osier accompagnait les rites de passage, ou que le jardin japonais incarne une philosophie du vide et de l'impermanence — alors le geste créatif prend une tout autre dimension. <strong>On ne fait plus "juste" un atelier : on s'inscrit dans une lignée de pratiques millénaires.</strong>
                </p>
                <div className="h-px bg-earth/30 max-w-xs mx-auto"></div>
              </div>

              <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Sparkles size={36} className="mx-auto mb-4" style={{ color: '#A7B795' }} />
                <h3 className="text-2xl md:text-3xl mb-6 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Développer sa sensibilité
                </h3>
                <p className="text-lg text-charcoal/80 leading-relaxed text-center mb-8">
                  Ce qui m'intéresse, c'est ce qui se passe <em>pendant</em> l'atelier : le moment où les mains touchent la mousse, où l'on sent l'odeur de la garance qui chauffe, où l'on observe les nervures d'une feuille avec un regard neuf. Ces moments de présence et d'attention au vivant sont précieux car ils nous sortent de notre rapport utilitariste au monde. C'est là que quelque chose se transforme.
                </p>
                <div className="h-px bg-earth/30 max-w-xs mx-auto"></div>
              </div>

              <div className="bg-sand rounded-lg p-8 md:p-12 mb-16">
                <blockquote className="text-center">
                  <p className="text-2xl md:text-3xl italic text-charcoal mb-6">
                    "Je ne cherche pas à divertir, mais à éveiller — à créer des espaces où l'on peut réapprendre à regarder, à toucher, à s'émerveiller."
                  </p>
                  <footer className="text-sm text-charcoal/70 uppercase tracking-wider font-semibold">
                    — Vanessa Charlery
                  </footer>
                </blockquote>
              </div>

              <div className="text-center animate-fade-in">
                <h3 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Mes travaux de recherche
                </h3>
                <div className="space-y-6 max-w-2xl mx-auto">
                  <p className="text-lg text-charcoal/80 leading-relaxed">
                    Mon mémoire de recherche, dirigé par Florence Brunois-Pasina à l'EHESS, porte sur les relations entre les citadins et les plantes dans les espaces verts urbains du Grand Paris. J'y explore comment les urbains développent — ou perdent — leur sensibilité au végétal, comment ils nomment les plantes qu'ils croisent, et quels liens affectifs se tissent dans ces rencontres quotidiennes.
                  </p>
                  <p className="text-lg text-charcoal/80 leading-relaxed">
                    Cette recherche nourrit directement ma pratique d'ateliers : elle m'a convaincue que pour reconnecter au vivant, il ne suffit pas de "faire" — il faut aussi <em>comprendre</em>, <em>nommer</em>, <em>situer</em> ces pratiques dans leur contexte culturel et historique.
                  </p>
                  <p className="text-lg text-charcoal/80 leading-relaxed">
                    C'est cette approche — à la fois sensorielle, créative et réflexive — qui fait la singularité de Botanique Ludique.
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
