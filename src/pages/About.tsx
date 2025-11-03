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
                  Sa recherche se concentre sur les interactions entre les citadins et les plantes dans les espaces verts urbains du Grand Paris, explorant les liens entre nature et culture. Vanessa a également suivi des cours sur la "Nature en ville" dispensés par Michel Auduy de l'ENSP.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  Artiste photographe depuis 2014, elle documente à travers son objectif la beauté et la complexité des relations entre l'humain et le végétal, créant des ponts entre science, art et éducation.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  Elle a voyagé pour découvrir diverses pratiques botaniques. Au Japon, elle a appris des techniques de jardinage et d'aquaponie. Au Kosovo, elle a participé à des projets d'autonomie, de permaculture et d'écoconstruction, obtenant une certification Youthpath en permaculture et écoconstruction.
                </p>
                
                <div className="mt-8 text-center">
                  <a
                    href="/CV_Vanessa_Charlery_Botaniste.pdf"
                    download
                    className="inline-flex items-center px-6 py-3 bg-sage hover:bg-sage-dark text-off-white font-semibold uppercase tracking-wider transition-all rounded-full"
                  >
                    <svg 
                      className="w-5 h-5 mr-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                      />
                    </svg>
                    Télécharger mon CV
                  </a>
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
