import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, MapPin, Calendar, Users, CheckCircle, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const AteliersBotaniqueEntrepriseIDF = () => {
  const interventionTypes = [
    {
      title: "Séminaires d'Entreprise",
      icon: Briefcase,
      description: "Intégrez un atelier botanique créatif dans votre séminaire pour une pause nature ressourçante",
      examples: ["Ouverture de séminaire créative", "Pause team building", "Clôture mémorable"]
    },
    {
      title: "Événements de Bureau",
      icon: Building2,
      description: "Animations régulières dans vos locaux pour améliorer le bien-être de vos équipes",
      examples: ["After-work botanique", "Pause déjeuner créative", "Journée QVT"]
    },
    {
      title: "Journées RSE",
      icon: CheckCircle,
      description: "Ateliers éco-responsables pour sensibiliser vos collaborateurs à l'environnement",
      examples: ["Biodiversité urbaine", "Économie circulaire", "Végétalisation des espaces"]
    },
    {
      title: "Incentives & Récompenses",
      icon: Users,
      description: "Récompensez vos équipes avec des expériences botaniques uniques et mémorables",
      examples: ["Atelier VIP", "Sortie nature", "Création sur-mesure"]
    }
  ];

  const locations = [
    { dept: "Paris (75)", cities: "Tous arrondissements" },
    { dept: "Hauts-de-Seine (92)", cities: "Boulogne, Neuilly, Courbevoie, La Défense..." },
    { dept: "Yvelines (78)", cities: "Chatou, Le Pecq, Saint-Germain, Versailles..." },
    { dept: "Val-de-Marne (94)", cities: "Créteil, Saint-Maur, Vincennes..." },
    { dept: "Seine-Saint-Denis (93)", cities: "Montreuil, Saint-Denis, Pantin..." },
    { dept: "Essonne (91)", cities: "Évry, Massy, Palaiseau..." },
    { dept: "Val-d'Oise (95)", cities: "Cergy, Argenteuil, Pontoise..." },
    { dept: "Seine-et-Marne (77)", cities: "Marne-la-Vallée, Melun, Fontainebleau..." }
  ];

  const formats = [
    {
      title: "Atelier Express",
      duration: "1h - 1h30",
      participants: "15-50 personnes",
      description: "Format court idéal pour une pause dans la journée",
      examples: ["Bombes de graines", "Mini-terrarium", "Sachets senteur"]
    },
    {
      title: "Atelier Standard",
      duration: "2h - 2h30",
      participants: "10-30 personnes",
      description: "Format équilibré pour une expérience complète",
      examples: ["Kokedama", "Couronne de fleurs", "Teinture végétale"]
    },
    {
      title: "Atelier Immersif",
      duration: "Demi-journée",
      participants: "8-20 personnes",
      description: "Expérience approfondie avec partie théorique",
      examples: ["Vannerie", "Éco-construction", "Jardin partagé"]
    }
  ];

  const advantages = [
    "Intervention dans vos locaux ou lieu de votre choix",
    "Tout le matériel fourni et installé",
    "Animation par animatrice ethnobotaniste formée à l'EHESS",
    "Ateliers adaptés à tous les niveaux",
    "Devis sur-mesure sous 48h",
    "Facturation entreprise simplifiée",
    "Assurance RC professionnelle",
    "Respect des normes de sécurité"
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: 'hsl(36 33% 93%)' }}>
      <SEO 
        title="Ateliers Botaniques pour Entreprises en Île-de-France"
        description="Interventions botaniques dans toute l'Île-de-France pour vos séminaires, team building et événements d'entreprise. Paris, 92, 78, 94, 93, 91, 95, 77. Devis sur-mesure."
        keywords="atelier entreprise Île-de-France, animation entreprise Paris, team building IDF, séminaire nature, intervention entreprise botanique, atelier bureau Paris"
        canonical="/ateliers-botanique-entreprise-idf"
      />
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16 animate-fade-in">
              <div className="flex justify-center mb-6">
                <Building2 className="w-16 h-16 text-sage" />
              </div>
              <h1 className="page-title text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Ateliers Botaniques pour Entreprises
              </h1>
              <p className="subtitle-italic text-lg mb-6">
                Interventions dans toute l'Île-de-France
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Botanique Ludique intervient dans toute l'Île-de-France pour animer vos séminaires, team building, 
                événements d'entreprise et journées QVT. De Paris à la Grande Couronne, nous nous déplaçons dans vos 
                locaux ou le lieu de votre choix.
              </p>
            </div>
      <LandingPhotoStrip />

            {/* Zone d'intervention */}
            <div className="bg-[hsl(var(--yellow))]/15 p-8 md:p-12 mb-16 animate-fade-in border-brutal shadow-brutal">
              <div className="flex items-center justify-center gap-3 mb-8">
                <MapPin className="w-8 h-8 text-sage" />
                <h2 className="text-2xl md:text-3xl text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                  Nos Zones d'Intervention en Île-de-France
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {locations.map((location, index) => (
                  <div key={index} className="bg-sage/5 p-4 ">
                    <p className="font-semibold text-sage-dark mb-1">{location.dept}</p>
                    <p className="text-sm text-charcoal/70">{location.cities}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-charcoal/60 mt-6 text-sm">
                💡 Déplacements possibles dans toute la région pour les groupes à partir de 15 personnes
              </p>
            </div>

            {/* Types d'intervention */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Types d'Interventions
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {interventionTypes.map((type, index) => {
                  const Icon = type.icon;
                  return (
                    <Card key={index} className="hover:shadow-brutal-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="bg-sage/10 p-3 border-brutal shadow-brutal">
                            <Icon className="w-6 h-6 text-sage" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-charcoal mb-2">{type.title}</h3>
                            <p className="text-charcoal/70 mb-4">{type.description}</p>
                            <div className="space-y-2">
                              <p className="text-sm font-semibold text-sage-dark">Exemples :</p>
                              <ul className="space-y-1">
                                {type.examples.map((example, idx) => (
                                  <li key={idx} className="text-sm text-charcoal/70 flex items-center gap-2">
                                    <span className="text-sage">•</span>
                                    {example}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Formats */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Formats Disponibles
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {formats.map((format, index) => (
                  <Card key={index} className="hover:shadow-brutal-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <CardContent className="p-6 space-y-4">
                      <div className="text-center">
                        <Calendar className="w-12 h-12 text-sage mx-auto mb-3" />
                        <h3 className="text-xl font-semibold text-charcoal mb-1">{format.title}</h3>
                        <p className="text-sage-dark font-semibold text-sm mb-2">{format.duration}</p>
                        <p className="text-sm text-charcoal/60 mb-3">👥 {format.participants}</p>
                      </div>
                      <p className="text-sm text-charcoal/70 text-center">{format.description}</p>
                      <div className="pt-3 border-t border-sage/20">
                        <p className="text-xs font-semibold text-sage-dark mb-2">Ateliers suggérés :</p>
                        <ul className="space-y-1">
                          {format.examples.map((example, idx) => (
                            <li key={idx} className="text-xs text-charcoal/70">• {example}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Advantages */}
            <div className="bg-sand p-8 md:p-12 mb-16 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Pourquoi Choisir Botanique Ludique ?
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/80">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-[hsl(var(--yellow))]/15 p-8 md:p-12 mb-16 animate-fade-in border-brutal shadow-brutal">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Tarification Transparente
              </h2>
              <div className="max-w-2xl mx-auto space-y-4 text-charcoal/80">
                <p className="flex items-start gap-3">
                  <span className="text-sage font-bold">→</span>
                  <span><strong>Tarifs sur-mesure</strong> selon le format, nombre de participants et lieu d'intervention</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-sage font-bold">→</span>
                  <span><strong>Devis gratuit sous 48h</strong> après étude de votre demande</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-sage font-bold">→</span>
                  <span><strong>Tarifs dégressifs</strong> pour plusieurs ateliers ou événements récurrents</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-sage font-bold">→</span>
                  <span><strong>Frais de déplacement</strong> inclus en petite couronne (75, 92, 78, 94, 93)</span>
                </p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-sage/10 border-l-4 border-sage p-8 mb-16 animate-fade-in border-brutal shadow-brutal">
              <p className="text-lg text-charcoal/80 italic mb-4">
                "Nous avons fait appel à Botanique Ludique pour notre séminaire annuel en Essonne. L'équipe s'est 
                déplacée avec tout le matériel, l'animation était top et nos 35 collaborateurs ont adoré l'atelier 
                kokedama. Je recommande vivement !"
              </p>
              <p className="text-sage-dark font-semibold">DRH, Groupe Tech Évry (91)</p>
            </div>

            {/* CTA */}
            <div className="bg-sage text-[hsl(var(--cream))] p-8 md:p-12 text-center animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Prêt à Organiser Votre Atelier en Entreprise ?
              </h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
                Demandez votre devis personnalisé gratuit en 2 minutes
              </p>
              <Link 
                to="/b2b"
                className="inline-flex items-center px-8 py-4 bg-[hsl(var(--cream))] hover:bg-sand text-sage font-semibold uppercase tracking-wider transition-all text-lg"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AteliersBotaniqueEntrepriseIDF;
