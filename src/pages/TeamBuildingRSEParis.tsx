import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Users, CheckCircle, Leaf, Building2, Heart, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const TeamBuildingRSEParis = () => {
  const rseActivities = [
    {
      title: "Kokedama d'Équipe",
      duration: "2h30",
      participants: "10-30 personnes",
      description: "Créez ensemble des jardins suspendus japonais. Activité collaborative qui renforce la cohésion tout en sensibilisant à la nature urbaine.",
      benefits: ["Créativité collective", "Démarche RSE visible", "Œuvre végétale à conserver"]
    },
    {
      title: "Teinture Végétale Collaborative",
      duration: "3h",
      participants: "8-25 personnes",
      description: "Atelier éco-responsable de teinture naturelle sur textile. Vos équipes repartent avec des créations uniques et durables.",
      benefits: ["Sensibilisation éco-textile", "Process collaboratif", "Résultat tangible"]
    },
    {
      title: "Bombes de Graines Urbaines",
      duration: "1h30",
      participants: "15-50 personnes",
      description: "Fabriquez des bombes de graines pour végétaliser la ville. Parfait pour les entreprises engagées dans la biodiversité urbaine.",
      benefits: ["Action environnementale", "Rapide et ludique", "Impact mesurable"]
    },
    {
      title: "Terrarium de Bureau",
      duration: "2h",
      participants: "10-30 personnes",
      description: "Chaque collaborateur crée son écosystème miniature à ramener au bureau. Bien-être au travail garanti !",
      benefits: ["Végétalise l'espace de travail", "Zen et apaisant", "Entretien minimal"]
    }
  ];

  const companyBenefits = [
    {
      icon: Users,
      title: "Cohésion d'Équipe",
      description: "Activités manuelles créatives qui favorisent la collaboration et renforcent les liens entre collègues"
    },
    {
      icon: Leaf,
      title: "Démarche RSE Concrète",
      description: "Ateliers éco-responsables alignés avec vos objectifs de développement durable et RSE"
    },
    {
      icon: Heart,
      title: "Bien-être au Travail",
      description: "Reconnexion avec la nature pour réduire le stress et améliorer la qualité de vie au travail"
    },
    {
      icon: TrendingUp,
      title: "Image Employeur",
      description: "Renforcez votre marque employeur avec des événements originaux et mémorables"
    }
  ];

  const clients = [
    { name: "Publicis", type: "Groupe de communication" },
    { name: "Région Île-de-France", type: "Collectivité" },
    { name: "MJC Chatou & Le Vésinet", type: "Centres sociaux" },
    { name: "Jappy Senior", type: "Association" }
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: 'hsl(36 33% 93%)' }}>
      <SEO 
        title="Team Building RSE Paris, Yvelines, Hauts-de-Seine, Val-d'Oise - Ateliers Botaniques"
        description="Organisez un team building nature et RSE à Paris, Yvelines (78), Hauts-de-Seine (92), Val-d'Oise (95) avec des ateliers botaniques créatifs. Kokedama, teinture végétale, terrarium."
        keywords="team building Paris, team building RSE, team building Yvelines, team building Hauts-de-Seine, team building Val-d'Oise, atelier entreprise Paris, cohésion équipe, RSE IDF"
        canonical="/team-building-rse-paris"
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
                Team Building RSE à Paris
              </h1>
              <p className="subtitle-italic text-lg mb-6">
                Renforcez vos équipes avec des ateliers botaniques engagés
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Botanique Ludique accompagne les entreprises à Paris, dans les Yvelines (78), les Hauts-de-Seine (92) et le Val-d'Oise (95) dans leur démarche RSE avec des ateliers 
                team building créatifs et éco-responsables. Cohésion d'équipe, bien-être au travail et engagement
                environnemental au cœur de nos activités.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {companyBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-brutal-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <CardContent className="p-6 space-y-4">
                      <div className="bg-sage/10 w-16 h-16 flex items-center justify-center mx-auto border-brutal shadow-brutal">
                        <Icon className="w-8 h-8 text-sage" />
                      </div>
                      <h3 className="text-xl font-semibold text-charcoal">{benefit.title}</h3>
                      <p className="text-sm text-charcoal/70">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Activities Section */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Nos Ateliers Team Building RSE
              </h2>
              <div className="space-y-8">
                {rseActivities.map((activity, index) => (
                  <Card key={index} className="hover:shadow-brutal-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <CardContent className="p-8">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 space-y-4">
                          <div>
                            <h3 className="text-2xl font-semibold text-charcoal mb-2" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                              {activity.title}
                            </h3>
                            <div className="flex gap-4 text-sm text-sage-dark">
                              <span>⏱️ {activity.duration}</span>
                              <span>👥 {activity.participants}</span>
                            </div>
                          </div>
                          <p className="text-charcoal/70 leading-relaxed">
                            {activity.description}
                          </p>
                        </div>
                        <div className="bg-sage/5 p-4 ">
                          <h4 className="font-semibold text-charcoal mb-3">Bénéfices :</h4>
                          <ul className="space-y-2">
                            {activity.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                                <span className="text-charcoal/80">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Process Section */}
            <div className="bg-sand p-8 md:p-12 mb-16 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Comment Organiser Votre Team Building ?
              </h2>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div className="space-y-3">
                  <div className="bg-sage text-white w-12 h-12 flex items-center justify-center mx-auto text-xl font-bold">1</div>
                  <h3 className="font-semibold text-charcoal">Contactez-nous</h3>
                  <p className="text-sm text-charcoal/70">Parlez-nous de votre projet et vos objectifs</p>
                </div>
                <div className="space-y-3">
                  <div className="bg-sage text-white w-12 h-12 flex items-center justify-center mx-auto text-xl font-bold">2</div>
                  <h3 className="font-semibold text-charcoal">Personnalisation</h3>
                  <p className="text-sm text-charcoal/70">Nous adaptons l'atelier à vos besoins</p>
                </div>
                <div className="space-y-3">
                  <div className="bg-sage text-white w-12 h-12 flex items-center justify-center mx-auto text-xl font-bold">3</div>
                  <h3 className="font-semibold text-charcoal">Organisation</h3>
                  <p className="text-sm text-charcoal/70">Date, lieu et logistique</p>
                </div>
                <div className="space-y-3">
                  <div className="bg-sage text-white w-12 h-12 flex items-center justify-center mx-auto text-xl font-bold">4</div>
                  <h3 className="font-semibold text-charcoal">Jour J</h3>
                  <p className="text-sm text-charcoal/70">Animation clé en main par nos experts</p>
                </div>
              </div>
            </div>

            {/* Clients Section */}
            <div className="bg-white p-8 md:p-12 mb-16 animate-fade-in border-brutal shadow-brutal">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Archivo Black, sans-serif', color: 'hsl(0 0% 10%)', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Ils Nous Font Confiance
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                {clients.map((client, index) => (
                  <div key={index} className="text-center p-4 bg-sage/5 ">
                    <p className="font-semibold text-charcoal mb-1">{client.name}</p>
                    <p className="text-sm text-charcoal/60">{client.type}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-sage/10 border-l-4 border-sage p-8 mb-16 animate-fade-in border-brutal shadow-brutal">
              <p className="text-lg text-charcoal/80 italic mb-4">
                "L'atelier kokedama organisé par Botanique Ludique pour notre séminaire d'équipe a été un vrai succès. 
                Nos collaborateurs ont adoré cette parenthèse nature créative, et cela s'inscrit parfaitement dans notre 
                démarche RSE. À refaire !"
              </p>
              <p className="text-sage-dark font-semibold">Responsable RH, Entreprise Tech Paris 16e</p>
            </div>

            {/* CTA */}
            <div className="bg-sage text-[hsl(var(--cream))] p-8 md:p-12 text-center animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                Prêt à Organiser Votre Team Building Nature ?
              </h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
                Demandez un devis personnalisé pour votre événement d'entreprise
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

      <LandingPhotoStrip />

      <Footer />
    </div>
  );
};

export default TeamBuildingRSEParis;
