import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import aboutImage from "@/assets/about-vanessa.jpg";

const About = () => {
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="page-title text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-center">
              À propos de Vanessa
            </h1>
            <p className="subtitle-italic text-lg text-center mb-16">
              Entre science et poésie, une rencontre avec le vivant.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
              <div className="relative">
                <div className="absolute inset-0 rounded-lg" style={{ border: '3px solid #C9D2B5', transform: 'translate(8px, 8px)' }}></div>
                <img
                  src={aboutImage}
                  alt="Vanessa Charlery"
                  className="w-full rounded-lg shadow-lg relative z-10"
                />
              </div>

              <div className="space-y-6 animate-fade-in">
                <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, color: '#3D3D2E' }}>
                  De l'ethnobotanique au rituel créatif
                </h2>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  Vanessa Charlery est ethnobotaniste et photographe, créant des ponts entre science et art. 
                  Son parcours a débuté par la recherche académique sur les relations plantes-humains, 
                  explorant comment les cultures du monde entier interagissent avec le règne végétal.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  À travers son objectif de photographe, elle a découvert la poésie cachée dans les feuilles, 
                  les racines et les fleurs — une beauté tactile que l'étude académique seule ne pouvait capturer.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  Cela a mené à la création de Botanique Ludique : un espace où le savoir rencontre la créativité, 
                  où le rituel rencontre le jeu, et où chacun peut redécouvrir son lien avec le monde végétal.
                </p>
              </div>
            </div>

            <div className="bg-sand rounded-lg p-8 md:p-12 animate-fade-in">
              <h3 className="text-2xl md:text-3xl mb-6 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, color: '#3D3D2E' }}>
                La philosophie
              </h3>
              <div className="max-w-3xl mx-auto space-y-4 text-center">
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  Les plantes ont toujours été nos enseignantes, nos guérisseuses et nos compagnes. 
                  Dans notre monde moderne rapide, nous avons perdu le contact avec cette relation ancestrale.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  À travers des ateliers pratiques qui combinent techniques traditionnelles et créativité contemporaine, 
                  nous créons des moments de lenteur, d'observation et de connexion.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed italic">
                  "Chaque atelier est une invitation à faire une pause, à créer, et à se rappeler que nous faisons partie de la nature, 
                  non séparés d'elle."
                </p>
                <div className="mt-8 text-right">
                  <p className="font-script text-3xl" style={{ color: '#5D653A' }}>
                    Vanessa Charlery
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
