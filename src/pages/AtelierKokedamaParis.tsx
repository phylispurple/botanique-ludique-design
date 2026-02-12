import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { MapPin, Calendar, Users, Leaf, Clock, CheckCircle, Star, Phone, Mail, Sparkles } from "lucide-react";
import kokedamaImage from "@/assets/workshop-kokedama.jpg";

const AtelierKokedamaParis = () => {
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <SEO 
        title="Atelier Kokedama Paris | Créez votre Sphère Végétale ✦ 75 IDF"
        description="🌿 Atelier kokedama à Paris et Île-de-France. Apprenez à créer votre sphère végétale suspendue japonaise. Particuliers, entreprises, EVJF. Dès 45€. Réservez !"
        keywords="atelier kokedama Paris, kokedama cours Paris, faire un kokedama, sphère végétale suspendue, atelier plante Paris, kokedama team building, kokedama EVJF"
        canonical="/atelier-kokedama-paris"
      />
      <SchemaOrg 
        type="LocalBusiness"
        data={{
          "name": "Botanique Ludique - Atelier Kokedama Paris",
          "description": "Ateliers de création de kokedama à Paris et en Île-de-France",
          "areaServed": { "@type": "City", "name": "Paris" },
          "priceRange": "45€ - 200€"
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
                Atelier Kokedama à Paris
              </h1>
              <p className="subtitle-italic text-lg mb-6">
                L'art végétal japonais à portée de main
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Le kokedama, littéralement « boule de mousse » en japonais, est un art végétal ancestral 
                qui transforme une plante en sculpture vivante. Dans nos ateliers à Paris et en Île-de-France, 
                apprenez à façonner votre propre sphère végétale suspendue avec des matériaux naturels 
                et des plantes soigneusement sélectionnées.
              </p>
            </div>

            <section className="mb-20 animate-fade-in">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                    Qu'est-ce qu'un kokedama ?
                  </h2>
                  <p className="text-lg text-charcoal/80 leading-relaxed mb-4">
                    Le kokedama est une technique japonaise qui consiste à envelopper les racines d'une plante 
                    dans une sphère d'<strong>argile et de mousse</strong>, créant ainsi un objet végétal 
                    autoportant pouvant être suspendu ou posé.
                  </p>
                  <p className="text-lg text-charcoal/80 leading-relaxed mb-4">
                    Issu de la tradition du <strong>bonsaï</strong> et de l'<strong>ikebana</strong>, 
                    le kokedama incarne une philosophie de simplicité et d'harmonie avec la nature. 
                    C'est un art accessible à tous, dès 4 ans.
                  </p>
                  <p className="text-lg text-charcoal/80 leading-relaxed">
                    Nos ateliers vous transmettent non seulement la technique, mais aussi l'<strong>histoire 
                    culturelle</strong> de cette pratique, les soins à apporter à votre création 
                    et les choix de plantes adaptés à votre intérieur.
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img src={kokedamaImage} alt="Atelier kokedama à Paris - création d'une sphère végétale japonaise" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

            <section className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Déroulement de l'atelier kokedama
              </h2>
              <div className="bg-sand rounded-lg p-8 md:p-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>Le programme</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" /><span className="text-charcoal/80">Introduction à l'art du kokedama et son histoire japonaise</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" /><span className="text-charcoal/80">Choix de votre plante parmi une sélection variée</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" /><span className="text-charcoal/80">Préparation du substrat d'argile (akadama et keto)</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" /><span className="text-charcoal/80">Façonnage de la sphère et habillage de mousse</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" /><span className="text-charcoal/80">Conseils d'entretien personnalisés</span></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>Infos pratiques</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-sage" /><span className="text-charcoal/80"><strong>Durée :</strong> 2h30</span></div>
                      <div className="flex items-center gap-3"><Users className="w-5 h-5 text-sage" /><span className="text-charcoal/80"><strong>Participants :</strong> 10 max</span></div>
                      <div className="flex items-center gap-3"><Leaf className="w-5 h-5 text-sage" /><span className="text-charcoal/80"><strong>Prix :</strong> 45€ par personne</span></div>
                      <div className="flex items-center gap-3"><Calendar className="w-5 h-5 text-sage" /><span className="text-charcoal/80"><strong>Âge :</strong> Dès 4 ans (accompagné)</span></div>
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
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Atelier solo ou entre amis</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> EVJF et anniversaires</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Activité parent-enfant</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Cadeau expérience original</li>
                  </ul>
                </div>
                <div className="bg-sage/10 rounded-lg p-6">
                  <h3 className="font-semibold text-charcoal mb-3" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>Entreprises</h3>
                  <ul className="text-sm text-charcoal/70 space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Team building créatif</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Animation CSE / séminaire</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Journée QVCT bien-être</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Événement RSE nature</li>
                  </ul>
                </div>
                <div className="bg-sage/10 rounded-lg p-6">
                  <h3 className="font-semibold text-charcoal mb-3" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>Structures</h3>
                  <ul className="text-sm text-charcoal/70 space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> EHPAD et résidences seniors</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Écoles et centres de loisirs</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> MJC et médiathèques</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" /> Collectivités et mairies</li>
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
                    "J'ai offert un atelier kokedama à ma mère pour son anniversaire. 
                    Vanessa nous a guidées avec passion et bienveillance. Ma mère parle encore de 
                    son kokedama suspendu dans sa cuisine !"
                  </p>
                  <footer className="text-sm text-charcoal/70">
                    <strong>Léa T.</strong>, Participante, Paris 15e
                  </footer>
                </blockquote>
              </div>
            </section>

            <section className="animate-fade-in">
              <div className="bg-gradient-to-br from-sage/20 to-sand rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Envie de créer votre kokedama ?
                </h2>
                <p className="text-charcoal/80 mb-8 max-w-2xl mx-auto">
                  Réservez votre atelier kokedama à Paris ou en Île-de-France. Nous vous répondons sous 24h.
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

            {/* Related Workshops Section */}
            <section className="mt-20 pt-12 border-t border-sage/20">
              <h3 className="text-2xl font-semibold text-charcoal mb-8 text-center" style={{ fontFamily: 'Fraunces, serif' }}>
                Découvrez nos autres créations
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link 
                  to="/atelier-terrarium-paris"
                  className="group p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <h4 className="font-semibold text-charcoal mb-2 group-hover:text-sage">Atelier Terrarium</h4>
                  <p className="text-sm text-charcoal/70 mb-4">Un jardin miniature sous verre, un écosystème fascinant</p>
                  <span className="text-sage font-medium">Découvrir →</span>
                </Link>
                <Link 
                  to="/atelier-teinture-vegetale"
                  className="group p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <h4 className="font-semibold text-charcoal mb-2 group-hover:text-sage">Atelier Teinture Végétale</h4>
                  <p className="text-sm text-charcoal/70 mb-4">Créez des textiles aux couleurs naturelles</p>
                  <span className="text-sage font-medium">Découvrir →</span>
                </Link>
                <Link 
                  to="/atelier-botanique-evenement"
                  className="group p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <h4 className="font-semibold text-charcoal mb-2 group-hover:text-sage">Pour vos Événements</h4>
                  <p className="text-sm text-charcoal/70 mb-4">Mariages, EVJF, anniversaires en ateliers</p>
                  <span className="text-sage font-medium">Découvrir →</span>
                </Link>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AtelierKokedamaParis;
