import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { GraduationCap, Users, Briefcase, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import formationImage from "@/assets/formation-education.jpg";
import collegeEee1Image from "@/assets/gallery-college-eee-1.jpg";

const Training = () => {
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
            <h1 className="page-title text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              Formations Professionnelles
            </h1>
            <p className="subtitle-italic text-lg mb-6">
              Interventions éducatives et sensibilisation à l'ethnobotanique
            </p>
            <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
              Des programmes sur mesure pour établissements scolaires, formations professionnelles et entreprises. 
              Une approche anthropologique unique qui questionne notre relation au végétal et transmet des savoirs ancestraux.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-20 animate-fade-in">
            <img 
              src={collegeEee1Image} 
              alt="Éducation et sensibilisation à la botanique"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/60 to-transparent"></div>
            <div className="absolute inset-0 flex items-end">
              <div className="p-8 md:p-12 w-full">
                <h2 className="text-3xl md:text-5xl text-white mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>
                  Éducation & Sensibilisation
                </h2>
                <p className="text-lg text-white/90 leading-relaxed max-w-3xl">
                  Interventions auprès des lycées, collèges et entreprises
                </p>
              </div>
            </div>
          </div>

          {/* Three Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Établissements Scolaires */}
            <div className="bg-sand rounded-lg p-8 space-y-4 animate-fade-in hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="text-sage" size={24} />
              </div>
              <h3 className="text-2xl" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Collèges & Lycées
              </h3>
              <p className="text-charcoal/70 text-sm">
                Parcours de sensibilisation aux enjeux environnementaux
              </p>
            </div>

            {/* Formations Professionnelles */}
            <div className="bg-sand rounded-lg p-8 space-y-4 animate-fade-in hover:shadow-lg transition-all" style={{ animationDelay: '100ms' }}>
              <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mb-4">
                <Users className="text-sage" size={24} />
              </div>
              <h3 className="text-2xl" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                BTS & Formations Pro
              </h3>
              <p className="text-charcoal/70 text-sm">
                Modules anthropologiques pour paysagistes et agriculteurs
              </p>
            </div>

            {/* Entreprises */}
            <div className="bg-sand rounded-lg p-8 space-y-4 animate-fade-in hover:shadow-lg transition-all" style={{ animationDelay: '200ms' }}>
              <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="text-sage" size={24} />
              </div>
              <h3 className="text-2xl" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Entreprises
              </h3>
              <p className="text-charcoal/70 text-sm">
                Team-building et conférences sur l'écologie
              </p>
            </div>
          </div>

          {/* Detailed Sections */}
          <div className="space-y-16">
            {/* Établissements Scolaires */}
            <div id="colleges-lycees" className="animate-fade-in">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <GraduationCap className="text-sage" size={32} />
                  <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                    Pour les établissements scolaires
                  </h2>
                </div>
                <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
                  Des parcours de sensibilisation spécialement conçus pour les collèges et lycées, alliant dimension éducative et pratique botanique. Ces interventions engagent les élèves dans une réflexion active sur les enjeux environnementaux contemporains tout en développant leur lien avec le vivant.
                </p>
                
                <div className="bg-white rounded-lg p-8 space-y-4">
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Thématiques abordées</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-sage mt-1 flex-shrink-0" size={20} />
                      <div>
                        <strong className="text-charcoal">Espèces exotiques envahissantes</strong>
                        <p className="text-charcoal/70 text-sm mt-1">Identification, impacts écologiques et actions de préservation</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-sage mt-1 flex-shrink-0" size={20} />
                      <div>
                        <strong className="text-charcoal">Biodiversité urbaine et sauvage</strong>
                        <p className="text-charcoal/70 text-sm mt-1">Reconnaissance des espèces locales et leur rôle dans l'écosystème</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-sage mt-1 flex-shrink-0" size={20} />
                      <div>
                        <strong className="text-charcoal">Changement climatique et adaptation des plantes</strong>
                        <p className="text-charcoal/70 text-sm mt-1">Observer et comprendre la résilience végétale</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-sage mt-1 flex-shrink-0" size={20} />
                      <div>
                        <strong className="text-charcoal">Ethnobotanique</strong>
                        <p className="text-charcoal/70 text-sm mt-1">Relations entre plantes et cultures humaines à travers l'histoire</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-sage mt-1 flex-shrink-0" size={20} />
                      <div>
                        <strong className="text-charcoal">Cycles naturels et saisonnalité</strong>
                        <p className="text-charcoal/70 text-sm mt-1">Comprendre les rythmes du vivant</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Formations Professionnelles */}
            <div id="formations-pro" className="animate-fade-in">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <Users className="text-sage" size={32} />
                  <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                    Pour les formations professionnelles
                  </h2>
                </div>
                <p className="text-lg text-charcoal/80 leading-relaxed mb-4">
                  Modules complémentaires destinés aux BTS, lycées professionnels agricoles et formations en aménagement paysager. Une approche anthropologique qui dépasse la simple technique pour questionner le <strong>statut ontologique des plantes</strong> et repenser notre relation au vivant.
                </p>
                <p className="text-base text-charcoal/70 leading-relaxed italic mb-8 bg-sage/10 p-4 rounded-lg">
                  Inspirés de mes recherches en anthropologie sur les relations humain-plante en milieu urbain (EHESS), ces modules enrichissent les cursus techniques d'une dimension réflexive essentielle.
                </p>
                
                <div className="bg-white rounded-lg p-8 space-y-4">
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Modules proposés</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-sage mt-1 flex-shrink-0" size={20} />
                      <div>
                        <strong className="text-charcoal">Au-delà de la dichotomie nature/culture</strong>
                        <p className="text-charcoal/70 text-sm mt-1">Les plantes comme entités vivantes dotées de leur propre réalité, et non comme simples objets esthétiques ou fonctionnels</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-sage mt-1 flex-shrink-0" size={20} />
                      <div>
                        <strong className="text-charcoal">Anthropologie de la nature</strong>
                        <p className="text-charcoal/70 text-sm mt-1">Comprendre les perceptions et relations entre citadins et plantes dans l'espace urbain</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-sage mt-1 flex-shrink-0" size={20} />
                      <div>
                        <strong className="text-charcoal">Ethnobotanique appliquée</strong>
                        <p className="text-charcoal/70 text-sm mt-1">Le rôle des plantes dans la culture et la société, au-delà de leur fonction écologique</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-sage mt-1 flex-shrink-0" size={20} />
                      <div>
                        <strong className="text-charcoal">Vision holistique du paysagisme</strong>
                        <p className="text-charcoal/70 text-sm mt-1">Intégrer les perspectives anthropologiques, écologiques et politiques dans la gestion des espaces verts</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-sage mt-1 flex-shrink-0" size={20} />
                      <div>
                        <strong className="text-charcoal">Méthodologie de terrain</strong>
                        <p className="text-charcoal/70 text-sm mt-1">Observation participante, entretiens semi-structurés, analyse des interactions humain-végétal</p>
                      </div>
                    </li>
                  </ul>
                  <p className="text-sm text-charcoal/60 leading-relaxed mt-6 pt-6 border-t border-charcoal/10">
                    Ces modules s'appuient sur les travaux de Philippe Descola, Bruno Latour et Tim Ingold pour enrichir les pratiques professionnelles d'une compréhension profonde des enjeux contemporains entre urbanisation et environnement.
                  </p>
                </div>
              </div>
            </div>

            {/* Entreprises */}
            <div id="entreprises" className="animate-fade-in">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <Briefcase className="text-sage" size={32} />
                  <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                    Pour les entreprises
                  </h2>
                </div>
                <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
                  Des formations qui questionnent notre regard sur le végétal en milieu professionnel. Comment réintégrer la nature dans nos espaces de travail ? Quelle place accorder aux plantes dans notre quotidien ? Des sessions qui allient réflexion philosophique et mise en pratique concrète.
                </p>
                
                <div className="bg-white rounded-lg p-8 space-y-4">
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Nos interventions</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-sage mt-1 flex-shrink-0" size={20} />
                      <div>
                        <strong className="text-charcoal">Végétalisation des espaces de travail</strong>
                        <p className="text-charcoal/70 text-sm mt-1">Créer des environnements professionnels plus sains et inspirants</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-sage mt-1 flex-shrink-0" size={20} />
                      <div>
                        <strong className="text-charcoal">Team-building autour du jardinage collectif</strong>
                        <p className="text-charcoal/70 text-sm mt-1">Renforcer la cohésion d'équipe par des activités botaniques</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-sage mt-1 flex-shrink-0" size={20} />
                      <div>
                        <strong className="text-charcoal">Conférences sur l'écologie et le vivant</strong>
                        <p className="text-charcoal/70 text-sm mt-1">Sensibiliser vos équipes aux enjeux environnementaux</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="mt-20 bg-sand rounded-lg p-8 md:p-12 text-center animate-fade-in">
            <h3 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
              Repenser notre lien au végétal
            </h3>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6 max-w-3xl mx-auto">
              Dans une société où la nature est souvent reléguée à l'arrière-plan, ces formations invitent à questionner la place des plantes dans notre vie moderne. Comment les espaces verts façonnent-ils notre santé mentale, notre créativité et notre rapport au temps ? Ensemble, explorons les dimensions symboliques, écologiques et sociales du végétal.
            </p>
            <Link
              to="/contact?subject=Demande de formation professionnelle"
              className="inline-flex items-center px-8 py-4 bg-sage hover:bg-sage-dark text-off-white text-sm uppercase tracking-wider font-semibold transition-all duration-300 rounded-full"
            >
              Demander un devis
            </Link>
          </div>

          {/* CTA - Ateliers créatifs */}
          <div className="mt-12 text-center">
            <p className="text-charcoal/60 mb-4">Vous cherchez des ateliers créatifs pour particuliers ?</p>
            <Link
              to="/workshops"
              className="inline-flex items-center text-sage hover:text-sage-dark font-semibold transition-all"
            >
              Découvrir nos ateliers →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Training;
