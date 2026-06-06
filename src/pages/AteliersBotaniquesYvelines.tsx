import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import kokedamaImage from "@/assets/gallery-kokedama-garden.webp";
import dyeingImage from "@/assets/gallery-teinture-1.webp";
import basketryImage from "@/assets/gallery-basketry.webp";

const AteliersBotaniquesYvelines = () => {
  const cities = ["Chatou", "Le Pecq", "Le Vésinet", "Saint-Germain-en-Laye", "Croissy-sur-Seine", "Montesson"];
  
  const workshops = [
    {
      title: "Kokedama",
      description: "L'art japonais du jardin suspendu s'invite dans les Yvelines ! Créez vos boules de mousse végétales lors de nos ateliers à Chatou et Le Pecq.",
      image: kokedamaImage,
      duration: "2h30",
      public: "Adultes et enfants dès 10 ans"
    },
    {
      title: "Teinture Végétale",
      description: "Explorez les techniques ancestrales de teinture naturelle avec des plantes locales des Yvelines. Ateliers réguliers à Chatou.",
      image: dyeingImage,
      duration: "3h",
      public: "Tout public"
    },
    {
      title: "Vannerie Sauvage",
      description: "Apprenez le tressage traditionnel avec osier et fibres naturelles récoltées dans les Yvelines. Stages week-end au Vésinet.",
      image: basketryImage,
      duration: "3h30",
      public: "Adultes et adolescents"
    }
  ];

  const benefits = [
    "Ateliers en petits groupes (8-12 personnes)",
    "Matériel fourni et produits naturels",
    "Encadrement par une animatrice ethnobotaniste formée à l'EHESS",
    "Accessible en transports (RER A, Transilien L)",
    "Parking disponible sur place",
    "Ateliers adaptés à tous les niveaux"
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: 'hsl(36 33% 93%)' }}>
      <SEO 
        title="Ateliers Botaniques dans les Yvelines (78) - Chatou, Le Pecq, Le Vésinet"
        description="Découvrez nos ateliers botaniques créatifs dans les Yvelines : kokedama, teinture végétale, vannerie à Chatou, Le Pecq, Le Vésinet, Saint-Germain-en-Laye. Ateliers nature pour tous."
        keywords="atelier botanique Yvelines, atelier Chatou, atelier Le Pecq, kokedama Yvelines, teinture végétale 78, vannerie Yvelines, atelier nature Yvelines"
        canonical="/ateliers-botaniques-yvelines"
      />
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16 animate-fade-in">
              <div className="flex justify-center gap-2 mb-6 flex-wrap">
                <MapPin className="w-12 h-12 text-sage" />
              </div>
              <h1 className="page-title text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Ateliers Botaniques dans les Yvelines (78)
              </h1>
              <p className="subtitle-italic text-lg mb-6">
                Quand l'atelier créatif accessible rencontre l'anthropologie de la nature
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Botanique Ludique propose des ateliers qui tissent des ponts entre création artistique, savoirs botaniques 
                et histoire des relations humains-plantes dans tout le département des Yvelines. Animés par une ethnobotaniste 
                formée à l'EHESS, nos ateliers de kokedama, teinture végétale et vannerie vont bien au-delà du simple loisir créatif.
              </p>
            </div>
      <LandingPhotoStrip />

            {/* Villes couvertes avec liens SEO */}
            <div className="bg-sage/10 p-8 mb-16 animate-fade-in border-brutal shadow-brutal">
              <h2 className="text-2xl md:text-3xl mb-6 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Nos Ateliers par Ville dans les Yvelines
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <Link 
                  to="/atelier-botanique-saint-germain-en-laye"
                  className="bg-[hsl(var(--yellow))]/15 px-4 py-3 text-center hover:bg-sage hover:text-[hsl(var(--cream))] transition-all shadow-brutal group border-brutal shadow-brutal"
                >
                  <span className="block text-sage-dark font-semibold group-hover:text-[hsl(var(--cream))]">📍 Saint-Germain-en-Laye</span>
                  <span className="text-xs text-charcoal/60 group-hover:text-[hsl(var(--cream))]/80">Forêt domaniale & patrimoine</span>
                </Link>
                <Link 
                  to="/atelier-botanique-chatou"
                  className="bg-[hsl(var(--yellow))]/15 px-4 py-3 text-center hover:bg-sage hover:text-[hsl(var(--cream))] transition-all shadow-brutal group border-brutal shadow-brutal"
                >
                  <span className="block text-sage-dark font-semibold group-hover:text-[hsl(var(--cream))]">📍 Chatou</span>
                  <span className="text-xs text-charcoal/60 group-hover:text-[hsl(var(--cream))]/80">Île des Impressionnistes</span>
                </Link>
                <Link 
                  to="/atelier-botanique-le-vesinet"
                  className="bg-[hsl(var(--yellow))]/15 px-4 py-3 text-center hover:bg-sage hover:text-[hsl(var(--cream))] transition-all shadow-brutal group border-brutal shadow-brutal"
                >
                  <span className="block text-sage-dark font-semibold group-hover:text-[hsl(var(--cream))]">📍 Le Vésinet</span>
                  <span className="text-xs text-charcoal/60 group-hover:text-[hsl(var(--cream))]/80">Ville-parc classée</span>
                </Link>
                <Link 
                  to="/atelier-botanique-le-pecq"
                  className="bg-[hsl(var(--yellow))]/15 px-4 py-3 text-center hover:bg-sage hover:text-[hsl(var(--cream))] transition-all shadow-brutal group border-brutal shadow-brutal"
                >
                  <span className="block text-sage-dark font-semibold group-hover:text-[hsl(var(--cream))]">📍 Le Pecq</span>
                  <span className="text-xs text-charcoal/60 group-hover:text-[hsl(var(--cream))]/80">Bords de Seine</span>
                </Link>
              </div>
              <p className="text-center text-charcoal/70">
                Nous intervenons également à Croissy-sur-Seine, Montesson et dans toute l'Île-de-France
              </p>
            </div>

            {/* Workshops Grid */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Nos Ateliers Phares dans les Yvelines
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {workshops.map((workshop, index) => (
                  <Card key={index} className="hover:shadow-brutal-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <CardContent className="p-0">
                      <img 
                        src={workshop.image} 
                        alt={`Atelier ${workshop.title} Yvelines`}
                        className="w-full h-48 object-cover "
                        loading="lazy"
                      />
                      <div className="p-6 space-y-3">
                        <h3 className="text-2xl font-semibold text-charcoal" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                          {workshop.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-sage-dark">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {workshop.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {workshop.public}
                          </div>
                        </div>
                        <p className="text-charcoal/70 leading-relaxed">
                          {workshop.description}
                        </p>
                        <Link 
                          to={`/contact?subject=${encodeURIComponent(`Atelier ${workshop.title} - Yvelines`)}`}
                          className="inline-flex items-center px-4 py-2 bg-sage hover:bg-sage-dark text-[hsl(var(--cream))] text-sm uppercase tracking-wider font-semibold transition-all duration-300 "
                        >
                          Réserver
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-sand p-8">
                <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                  Pourquoi Choisir Nos Ateliers ?
                </h2>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-sand p-8">
                <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                  Accès et Pratique
                </h2>
                <div className="space-y-4 text-charcoal/80">
                  <p>
                    <strong className="text-sage-dark">🚇 En transports :</strong><br />
                    RER A : Chatou-Croissy, Le Vésinet-Le Pecq<br />
                    Transilien L : Saint-Germain-en-Laye
                  </p>
                  <p>
                    <strong className="text-sage-dark">🚗 En voiture :</strong><br />
                    Parking gratuit disponible sur place<br />
                    À 15 min de Paris par l'A14
                  </p>
                  <p>
                    <strong className="text-sage-dark">📅 Horaires :</strong><br />
                    Week-ends et mercredis après-midi<br />
                    Réservation obligatoire
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonials Section */}
            <div className="bg-[hsl(var(--yellow))]/15 p-8 md:p-12 mb-16 animate-fade-in border-brutal shadow-brutal">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Témoignages de Participants des Yvelines
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-sage/5 p-6 ">
                  <p className="text-charcoal/80 italic mb-4">
                    "Atelier kokedama au top à Chatou ! Vanessa est très pédagogue et l'ambiance est super conviviale. Je recommande !"
                  </p>
                  <p className="text-sage-dark font-semibold">Marie, Chatou</p>
                </div>
                <div className="bg-sage/5 p-6 ">
                  <p className="text-charcoal/80 italic mb-4">
                    "J'ai adoré l'atelier de teinture végétale au Pecq. On apprend vraiment les techniques anciennes avec des matériaux naturels."
                  </p>
                  <p className="text-sage-dark font-semibold">Sophie, Le Vésinet</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-sage text-[hsl(var(--cream))] p-8 md:p-12 text-center animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Prêt·e à découvrir nos ateliers dans les Yvelines ?
              </h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
                Consultez notre calendrier complet ou contactez-nous pour organiser votre atelier
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/calendar"
                  className="inline-flex items-center px-6 py-3 bg-[hsl(var(--cream))] hover:bg-sand text-sage font-semibold uppercase tracking-wider transition-all "
                >
                  Voir le calendrier
                </Link>
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border-[3px] border-[hsl(var(--cream))] hover:bg-[hsl(var(--cream))] hover:text-sage text-[hsl(var(--cream))] font-semibold uppercase tracking-wider transition-all "
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AteliersBotaniquesYvelines;
