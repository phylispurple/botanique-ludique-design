import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { MapPin, Calendar, Users, Leaf, Clock, CheckCircle, Star, Phone, Mail, Sparkles } from "lucide-react";
import terrariumImage from "@/assets/workshop-terrarium.jpg";

const AtelierTerrariumParis = () => {
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <SEO 
        title="Atelier Terrarium Paris | Créez votre Jardin sous Verre ✦ 75 IDF"
        description="🌿 Atelier terrarium à Paris et Île-de-France. Créez votre jardin miniature sous verre. Particuliers, entreprises, EVJF, team building. Dès 50€. Réservez !"
        keywords="atelier terrarium Paris, terrarium cours Paris, faire un terrarium, jardin sous verre, atelier plante Paris, terrarium team building, terrarium EVJF"
        canonical="/atelier-terrarium-paris"
      />
      <SchemaOrg 
        type="LocalBusiness"
        data={{
          "name": "Botanique Ludique - Atelier Terrarium Paris",
          "description": "Ateliers de création de terrariums à Paris et en Île-de-France",
          "areaServed": { "@type": "City", "name": "Paris" },
          "priceRange": "50€ - 200€"
        }}
      />
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            
            <div className="text-center mb-16 animate-fade-in">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-sage" />
                <span className="text-sage font-medium">Paris & Île-de-France</span>
              </div>
              <h1 className="page-title text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl mb-6">
                Atelier Terrarium à Paris
              </h1>
              <p className="subtitle-italic text-lg mb-6">
                Un jardin miniature sous verre, un monde à explorer
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Le terrarium est un écosystème autonome fascinant : un jardin miniature sous verre 
                qui vit et respire. Dans nos ateliers à Paris et en Île-de-France, apprenez à composer 
                votre propre terrarium avec des mousses, fougères et plantes tropicales, tout en découvrant 
                l'histoire coloniale fascinante de cet objet botanique.
              </p>
            </div>

            <section className="mb-20 animate-fade-in">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img src={terrariumImage} alt="Atelier terrarium à Paris - création d'un jardin miniature sous verre" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                    Qu'est-ce qu'un terrarium ?
                  </h2>
                  <p className="text-lg text-charcoal/80 leading-relaxed mb-4">
                    Un terrarium est un <strong>jardin clos sous verre</strong> qui recrée un micro-écosystème autonome. 
                    Grâce au cycle naturel de l'eau, les plantes s'arrosent elles-mêmes par condensation. 
                    Un terrarium bien conçu peut vivre des années sans intervention.
                  </p>
                  <p className="text-lg text-charcoal/80 leading-relaxed mb-4">
                    Inventé au XIXe siècle par le Dr Nathaniel Ward, le terrarium — ou <strong>caisse de Ward</strong> — 
                    a joué un rôle majeur dans l'histoire coloniale : il permettait de transporter 
                    des plantes vivantes sur les navires. Nos ateliers explorent cette histoire captivante.
                  </p>
                  <p className="text-lg text-charcoal/80 leading-relaxed">
                    Aujourd'hui, le terrarium est devenu un <strong>objet décoratif tendance</strong> et un geste 
                    écologique. Créer le sien, c'est apprendre à observer la nature de près.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Déroulement de l'atelier terrarium
              </h2>
              <div className="bg-sand rounded-lg p-8 md:p-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>Le programme</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" /><span className="text-charcoal/80">Histoire du terrarium et de la caisse de Ward</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" /><span className="text-charcoal/80">Choix des plantes : mousses, fougères, fittonias</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" /><span className="text-charcoal/80">Création des couches : drainage, charbon, substrat</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" /><span className="text-charcoal/80">Composition et mise en scène de votre jardin</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" /><span className="text-charcoal/80">Conseils d'entretien et équilibre de l'écosystème</span></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>Infos pratiques</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-sage" /><span className="text-charcoal/80"><strong>Durée :</strong> 2h</span></div>
                      <div className="flex items-center gap-3"><Users className="w-5 h-5 text-sage" /><span className="text-charcoal/80"><strong>Participants :</strong> 10 max</span></div>
                      <div className="flex items-center gap-3"><Leaf className="w-5 h-5 text-sage" /><span className="text-charcoal/80"><strong>Prix :</strong> 50€ par personne</span></div>
                      <div className="flex items-center gap-3"><Calendar className="w-5 h-5 text-sage" /><span className="text-charcoal/80"><strong>Âge :</strong> Dès 6 ans</span></div>
                      <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-sage" /><span className="text-charcoal/80"><strong>Lieu :</strong> Chez vous ou dans un lieu de votre choix</span></div>
                    </div>
                  </div>
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
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Atelier détente entre amis</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> EVJF et anniversaires</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Activité parent-enfant</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Idée cadeau expérience</li>
                  </ul>
                </div>
                <div className="bg-sage/10 rounded-lg p-6">
                  <h3 className="font-semibold text-charcoal mb-3" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>Entreprises</h3>
                  <ul className="text-sm text-charcoal/70 space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Team building green</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Séminaire RSE original</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Animation bien-être QVCT</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Événement CSE nature</li>
                  </ul>
                </div>
                <div className="bg-sage/10 rounded-lg p-6">
                  <h3 className="font-semibold text-charcoal mb-3" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>Structures</h3>
                  <ul className="text-sm text-charcoal/70 space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> EHPAD et résidences seniors</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Écoles et centres de loisirs</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> MJC et médiathèques</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Mariages et événements</li>
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
                    "L'atelier terrarium avec Vanessa a été le moment fort de notre team building. 
                    Non seulement on a appris l'histoire fascinante du terrarium colonial, 
                    mais on est tous repartis avec un petit bout de forêt tropicale !"
                  </p>
                  <footer className="text-sm text-charcoal/70">
                    <strong>Antoine B.</strong>, Manager, La Défense
                  </footer>
                </blockquote>
              </div>
            </section>

            <section className="animate-fade-in">
              <div className="bg-gradient-to-br from-sage/20 to-sand rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Envie de créer votre terrarium ?
                </h2>
                <p className="text-charcoal/80 mb-8 max-w-2xl mx-auto">
                  Réservez votre atelier terrarium à Paris ou en Île-de-France. Nous vous répondons sous 24h.
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

export default AtelierTerrariumParis;
