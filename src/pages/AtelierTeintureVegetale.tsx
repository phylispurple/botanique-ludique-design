import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { MapPin, Calendar, Users, Leaf, Clock, CheckCircle, Star, Phone, Mail, Sparkles, Palette } from "lucide-react";
import dyeingImage from "@/assets/gallery-teinture-1.webp";

const AtelierTeintureVegetale = () => {
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <SEO 
        title="Atelier Teinture Végétale Paris | Pigments Naturels ✦ 75 IDF"
        description="🌿 Atelier teinture végétale à Paris et Île-de-France. Apprenez à teindre textiles et papiers avec des pigments 100% naturels. Particuliers et pros. Dès 55€."
        keywords="atelier teinture végétale Paris, teinture naturelle cours, pigments naturels atelier, teinture plantes Paris, teinture indigo Paris, atelier eco-print, teinture textile naturel"
        canonical="/atelier-teinture-vegetale"
      />
      <SchemaOrg 
        type="LocalBusiness"
        data={{
          "name": "Botanique Ludique - Atelier Teinture Végétale",
          "description": "Ateliers de teinture végétale et pigments naturels à Paris et en Île-de-France",
          "areaServed": { "@type": "State", "name": "Île-de-France" },
          "priceRange": "55€ - 200€"
        }}
      />
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            
            <div className="text-center mb-16 animate-fade-in">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Palette className="w-5 h-5 text-sage" />
                <span className="text-sage font-medium">Paris & Île-de-France</span>
              </div>
              <h1 className="page-title text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl mb-6">
                Atelier Teinture Végétale
              </h1>
              <p className="subtitle-italic text-lg mb-6">
                Les couleurs cachées des plantes révélées
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                La teinture végétale est un art millénaire qui permet d'extraire des couleurs 
                à partir de plantes, racines, écorces et fruits. Dans nos ateliers à Paris et en Île-de-France, 
                découvrez comment le chou rouge devient indigo, comment l'oignon donne des ors profonds 
                et comment les plantes de votre quotidien recèlent une palette de couleurs insoupçonnée.
              </p>
            </div>

            <section className="mb-20 animate-fade-in">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                    Qu'est-ce que la teinture végétale ?
                  </h2>
                  <p className="text-lg text-charcoal/80 leading-relaxed mb-4">
                    La teinture végétale consiste à extraire les <strong>pigments naturels</strong> contenus 
                    dans les plantes pour colorer des textiles, du papier ou d'autres supports. C'est un savoir-faire 
                    ancestral pratiqué dans toutes les civilisations humaines, de l'indigo africain aux pourpres méditerranéens.
                  </p>
                  <p className="text-lg text-charcoal/80 leading-relaxed mb-4">
                    Nos ateliers explorent cette histoire fascinante tout en vous enseignant les <strong>techniques 
                    de mordançage, d'extraction et de fixation</strong> des couleurs. Vous découvrirez que des plantes 
                    ordinaires — chou rouge, pelures d'oignon, avocats — produisent des teintes extraordinaires.
                  </p>
                  <p className="text-lg text-charcoal/80 leading-relaxed">
                    C'est aussi une démarche <strong>écologique et responsable</strong> : la teinture végétale 
                    utilise des ressources renouvelables et biodégradables, en opposition aux teintures 
                    chimiques de l'industrie textile.
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img src={dyeingImage} alt="Atelier teinture végétale à Paris - extraction de pigments naturels" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Déroulement de l'atelier teinture végétale
              </h2>
              <div className="bg-sand rounded-lg p-8 md:p-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>Le programme</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" /><span className="text-charcoal/80">Histoire de la teinture végétale à travers les civilisations</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" /><span className="text-charcoal/80">Découverte des plantes tinctoriales et leurs pigments</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" /><span className="text-charcoal/80">Techniques de mordançage et préparation des fibres</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" /><span className="text-charcoal/80">Extraction des couleurs et bains de teinture</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" /><span className="text-charcoal/80">Création de motifs par pliage, ligature ou impression</span></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>Infos pratiques</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-sage" /><span className="text-charcoal/80"><strong>Durée :</strong> 3h</span></div>
                      <div className="flex items-center gap-3"><Users className="w-5 h-5 text-sage" /><span className="text-charcoal/80"><strong>Participants :</strong> 10 max</span></div>
                      <div className="flex items-center gap-3"><Leaf className="w-5 h-5 text-sage" /><span className="text-charcoal/80"><strong>Prix :</strong> 55€ par personne</span></div>
                      <div className="flex items-center gap-3"><Calendar className="w-5 h-5 text-sage" /><span className="text-charcoal/80"><strong>Âge :</strong> Dès 6 ans</span></div>
                      <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-sage" /><span className="text-charcoal/80"><strong>Lieu :</strong> Chez vous ou dans un lieu de votre choix</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Les couleurs que vous découvrirez
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center bg-white rounded-lg p-6 shadow-sm">
                  <div className="w-16 h-16 rounded-full mx-auto mb-3" style={{ backgroundColor: '#2E4057' }} />
                  <h3 className="font-semibold text-charcoal mb-1">Indigo</h3>
                  <p className="text-xs text-charcoal/60">Chou rouge, indigotier</p>
                </div>
                <div className="text-center bg-white rounded-lg p-6 shadow-sm">
                  <div className="w-16 h-16 rounded-full mx-auto mb-3" style={{ backgroundColor: '#C4944A' }} />
                  <h3 className="font-semibold text-charcoal mb-1">Or & Jaune</h3>
                  <p className="text-xs text-charcoal/60">Pelures d'oignon, curcuma</p>
                </div>
                <div className="text-center bg-white rounded-lg p-6 shadow-sm">
                  <div className="w-16 h-16 rounded-full mx-auto mb-3" style={{ backgroundColor: '#D4A5A5' }} />
                  <h3 className="font-semibold text-charcoal mb-1">Rose & Mauve</h3>
                  <p className="text-xs text-charcoal/60">Noyau d'avocat, betterave</p>
                </div>
                <div className="text-center bg-white rounded-lg p-6 shadow-sm">
                  <div className="w-16 h-16 rounded-full mx-auto mb-3" style={{ backgroundColor: '#6B8E5A' }} />
                  <h3 className="font-semibold text-charcoal mb-1">Vert & Kaki</h3>
                  <p className="text-xs text-charcoal/60">Feuilles de noyer, épinards</p>
                </div>
              </div>
            </section>

            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Pour qui est cet atelier ?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-sage/10 rounded-lg p-6">
                  <h3 className="font-semibold text-charcoal mb-3" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>Particuliers</h3>
                  <ul className="text-sm text-charcoal/70 space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Découverte de la teinture naturelle</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Atelier créatif entre amis</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Démarche éco-responsable</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Mode et textile durable</li>
                  </ul>
                </div>
                <div className="bg-sage/10 rounded-lg p-6">
                  <h3 className="font-semibold text-charcoal mb-3" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>Entreprises</h3>
                  <ul className="text-sm text-charcoal/70 space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Team building RSE</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Sensibilisation environnementale</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Animation QVCT créative</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Événement CSE original</li>
                  </ul>
                </div>
                <div className="bg-sage/10 rounded-lg p-6">
                  <h3 className="font-semibold text-charcoal mb-3" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>Éducation</h3>
                  <ul className="text-sm text-charcoal/70 space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Ateliers scolaires (sciences)</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Centres de loisirs</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> BTS et formations pro</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Médiathèques et MJC</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-20 animate-fade-in">
              <div className="bg-sand rounded-lg p-8 md:p-10">
                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <blockquote className="text-center">
                  <p className="text-xl md:text-2xl italic text-charcoal mb-6 leading-relaxed">
                    "Incroyable de voir qu'un chou rouge peut donner un bleu aussi profond ! 
                    L'atelier de Vanessa est à la fois scientifique, historique et créatif. 
                    Je teins maintenant mes serviettes de table avec des pelures d'oignon."
                  </p>
                  <footer className="text-sm text-charcoal/70">
                    <strong>Isabelle M.</strong>, Participante, Versailles
                  </footer>
                </blockquote>
              </div>
            </section>

            <section className="animate-fade-in">
              <div className="bg-gradient-to-br from-sage/20 to-sand rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Envie de découvrir les couleurs de la nature ?
                </h2>
                <p className="text-charcoal/80 mb-8 max-w-2xl mx-auto">
                  Réservez votre atelier teinture végétale à Paris ou en Île-de-France. Nous vous répondons sous 24h.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sage hover:bg-sage-dark text-off-white text-sm uppercase tracking-wider font-semibold transition-all duration-300 rounded-full">
                    <Mail className="w-4 h-4" /> Réserver un atelier
                  </Link>
                  <a href="tel:+33609831606" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-sage text-sage hover:bg-sage hover:text-off-white text-sm uppercase tracking-wider font-semibold transition-all duration-300 rounded-full">
                    <Phone className="w-4 h-4" /> 06 09 83 16 06
                  </a>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AtelierTeintureVegetale;
