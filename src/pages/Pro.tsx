import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import TrustBadges from "@/components/TrustBadges";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Building2, Heart, Leaf, Calendar, Mail, Phone, CheckCircle, Loader2, Clock, GraduationCap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import collegeEee1Image from "@/assets/gallery-college-eee-1.jpg";

const quoteSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(100, "Le nom doit faire moins de 100 caractères"),
  organization: z.string().trim().min(1, "Le nom de l'organisation est requis").max(200, "Le nom de l'organisation doit faire moins de 200 caractères"),
  email: z.string().trim().email("Email invalide").max(255, "L'email doit faire moins de 255 caractères"),
  phone: z.string().trim().max(20, "Le téléphone doit faire moins de 20 caractères").optional(),
  eventType: z.string().trim().min(1, "Le type d'événement est requis").max(200, "Le type d'événement doit faire moins de 200 caractères"),
  date: z.string().optional(),
  message: z.string().trim().max(2000, "Le message doit faire moins de 2000 caractères").optional(),
});

const Pro = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      quoteSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Erreur de validation",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-b2b-quote-email', {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Demande envoyée !",
        description: "Nous vous contacterons dans les plus brefs délais (sous 24h).",
      });

      setFormData({
        name: "",
        organization: "",
        email: "",
        phone: "",
        eventType: "",
        date: "",
        message: "",
      });
    } catch (error: any) {
      console.error('Error sending B2B quote request:', error);
      toast({
        title: "Erreur lors de l'envoi",
        description: "Une erreur est survenue. Veuillez réessayer plus tard.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const clientTypes = [
    {
      icon: Building2,
      title: "Entreprises",
      description: "Team building créatif, événements d'entreprise, séminaires nature",
      benefits: ["Cohésion d'équipe", "Démarche RSE", "Bien-être au travail"],
      id: "entreprises"
    },
    {
      icon: GraduationCap,
      title: "Établissements Scolaires",
      description: "Collèges, lycées, BTS - Parcours de sensibilisation environnementale",
      benefits: ["Éducation environnementale", "Pédagogie active", "Ethnobotanique"],
      id: "scolaires"
    },
    {
      icon: Users,
      title: "Collectivités",
      description: "MJC, centres sociaux, mairies - Animations pour tous publics",
      benefits: ["Activités intergénérationnelles", "Lien social", "Animation culturelle"],
      id: "collectivites"
    },
    {
      icon: Heart,
      title: "EHPAD & Santé",
      description: "Ateliers thérapeutiques, stimulation sensorielle par les plantes",
      benefits: ["Stimulation cognitive", "Apaisement", "Lien avec la nature"],
      id: "ehpad"
    },
    {
      icon: Calendar,
      title: "Événementiel",
      description: "Festivals, salons, marchés - Animations botaniques sur mesure",
      benefits: ["Animation unique", "Expérience mémorable", "Création de souvenirs"],
      id: "evenementiel"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F7F7EB' }}>
      <SEO 
        title="Team Building Nature & RSE Paris | Devis 24h ✦ +400 Participants"
        description="🏢 Team building botanique, animations EHPAD, interventions scolaires à Paris & IDF. +400 participants. Devis gratuit sous 24h. Réservez votre événement !"
        keywords="team building RSE Paris, formation botanique entreprise, intervention collège botanique, animation EHPAD, animation MJC, team building nature, atelier entreprise Yvelines"
        canonical="/pro"
      />
      <SchemaOrg 
        type="Service"
        data={{
          serviceType: "Team Building et Animations Botaniques",
          name: "Ateliers Botaniques pour Professionnels",
          description: "Team building RSE, formations scolaires, animations EHPAD et collectivités à Paris et Île-de-France",
          offers: [
            { "@type": "Offer", "name": "Team Building Kokedama", "description": "Création collaborative de jardins suspendus" },
            { "@type": "Offer", "name": "Animation QVT", "description": "Bien-être au travail par la nature" },
            { "@type": "Offer", "name": "Intervention Scolaire", "description": "Sensibilisation environnementale pour collèges et lycées" }
          ]
        }}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-background to-sage/5">
        <div className="container mx-auto max-w-6xl text-center space-y-6">
          <div className="flex justify-center mb-6">
            <Leaf className="w-16 h-16 text-sage" />
          </div>
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl text-charcoal"
            style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}
          >
            Pro & Entreprises
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Team building, formations scolaires, animations pour collectivités et EHPAD. 
            Des interventions botaniques sur mesure à Paris, dans les Yvelines (78), les Hauts-de-Seine (92) et le Val-d'Oise (95)
          </p>
          
          <TrustBadges variant="compact" showAll={false} />
          
          {/* Quick Navigation */}
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {clientTypes.map((client) => (
              <button
                key={client.id}
                onClick={() => scrollToSection(client.id)}
                className="px-4 py-2 rounded-full text-sm border border-sage/30 text-charcoal hover:bg-sage/10 transition-colors"
              >
                {client.title}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a 
              href="#devis" 
              className="px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-r from-sage to-sage-dark text-white"
            >
              Demander un devis gratuit →
            </a>
            <a 
              href="mailto:contact@botaniqueludique.com"
              className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-sage text-sage hover:bg-sage/10 transition-colors font-medium"
            >
              <Mail className="w-5 h-5" />
              Contact direct
            </a>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 pb-16">
        <div className="container mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src={collegeEee1Image} 
              alt="Interventions botaniques professionnelles"
              className="w-full h-[350px] md:h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent"></div>
            <div className="absolute inset-0 flex items-end">
              <div className="p-8 md:p-12 w-full">
                <h2 className="text-2xl md:text-4xl text-white mb-3" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>
                  Interventions sur mesure
                </h2>
                <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl">
                  Entreprises, écoles, collectivités, EHPAD — Une approche anthropologique unique pour reconnecter au végétal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Types Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 
            className="text-3xl md:text-4xl text-center mb-12 text-charcoal"
            style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}
          >
            Nos Solutions pour Professionnels
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientTypes.map((client, index) => {
              const Icon = client.icon;
              return (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => scrollToSection(client.id)}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-sage/10 p-3 rounded-full">
                        <Icon className="w-6 h-6 text-sage" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-charcoal mb-2">
                          {client.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          {client.description}
                        </p>
                        <ul className="space-y-2">
                          {client.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-sage flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section Entreprises */}
      <section id="entreprises" className="py-16 px-4 bg-sage/5">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-8">
            <Building2 className="text-sage" size={32} />
            <h2 
              className="text-3xl md:text-4xl text-charcoal"
              style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}
            >
              Entreprises & Team Building
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardContent className="p-6 space-y-4">
                <div className="bg-sage/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-sage" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal">Démarche RSE Concrète</h3>
                <p className="text-muted-foreground">
                  Engagez votre entreprise dans une démarche RSE mesurable avec des ateliers éco-responsables
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6 space-y-4">
                <div className="bg-sage/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-sage" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal">Team Building Créatif</h3>
                <p className="text-muted-foreground">
                  Activités nature originales pour renforcer la cohésion et la créativité de vos équipes
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6 space-y-4">
                <div className="bg-sage/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Leaf className="w-8 h-8 text-sage" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal">Toute l'Île-de-France</h3>
                <p className="text-muted-foreground">
                  Interventions à Paris, Yvelines (78), Hauts-de-Seine (92) pour vos événements d'entreprise
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-lg p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl mb-6 text-charcoal text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>
              Nos Ateliers Team Building les Plus Demandés
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-charcoal mb-1">🌱 Kokedama d'Équipe - 2h30</h4>
                  <p className="text-muted-foreground">Créez ensemble des jardins suspendus japonais pour renforcer la cohésion</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-charcoal mb-1">🎨 Teinture Végétale Collaborative - 3h</h4>
                  <p className="text-muted-foreground">Atelier créatif de teinture naturelle pour des textiles éco-responsables</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-charcoal mb-1">🌿 Création de Terrarium - 2h</h4>
                  <p className="text-muted-foreground">Fabrication d'écosystèmes miniatures pour sensibiliser à la biodiversité</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-charcoal mb-1">🪵 Vannerie & Artisanat - 3h30</h4>
                  <p className="text-muted-foreground">Ateliers de tressage et techniques ancestrales pour un moment ressourçant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Établissements Scolaires */}
      <section id="scolaires" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <GraduationCap className="text-sage" size={32} />
            <h2 
              className="text-3xl md:text-4xl text-charcoal"
              style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}
            >
              Établissements Scolaires
            </h2>
          </div>
          
          <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
            Des parcours de sensibilisation spécialement conçus pour les collèges, lycées et formations professionnelles (BTS). 
            Ces interventions engagent les élèves dans une réflexion active sur les enjeux environnementaux tout en développant leur lien avec le vivant.
          </p>
          
          <div className="bg-white rounded-lg p-8 space-y-4 mb-8">
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
                  <strong className="text-charcoal">Ethnobotanique</strong>
                  <p className="text-charcoal/70 text-sm mt-1">Relations entre plantes et cultures humaines à travers l'histoire</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-sage mt-1 flex-shrink-0" size={20} />
                <div>
                  <strong className="text-charcoal">Changement climatique et adaptation des plantes</strong>
                  <p className="text-charcoal/70 text-sm mt-1">Observer et comprendre la résilience végétale</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-sage/10 rounded-lg p-6 border-l-4 border-sage">
            <h4 className="text-lg font-semibold text-charcoal mb-2">Formations BTS & Professionnelles</h4>
            <p className="text-charcoal/70 mb-2">
              Modules anthropologiques pour BTS, lycées agricoles et formations en aménagement paysager. 
              Une approche qui dépasse la technique pour questionner le statut ontologique des plantes.
            </p>
            <p className="text-sm text-charcoal/60 italic">
              Inspirés de mes recherches en anthropologie sur les relations humain-plante en milieu urbain (EHESS).
            </p>
          </div>
        </div>
      </section>

      {/* Section Collectivités */}
      <section id="collectivites" className="py-16 px-4 bg-sand/30">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <Users className="text-sage" size={32} />
            <h2 
              className="text-3xl md:text-4xl text-charcoal"
              style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}
            >
              Collectivités & Associations
            </h2>
          </div>
          
          <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
            Animations botaniques pour MJC, centres sociaux, mairies, médiathèques et associations culturelles. 
            Des ateliers intergénérationnels qui créent du lien social autour du végétal.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold text-charcoal mb-3">Ateliers tout public</h4>
              <ul className="space-y-2 text-sm text-charcoal/70">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sage" />
                  Ateliers parent-enfant
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sage" />
                  Animations de quartier
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sage" />
                  Festivals et marchés
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold text-charcoal mb-3">Cycles d'ateliers</h4>
              <ul className="space-y-2 text-sm text-charcoal/70">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sage" />
                  Programme sur l'année scolaire
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sage" />
                  Ateliers vacances scolaires
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sage" />
                  Événements ponctuels
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section EHPAD */}
      <section id="ehpad" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <Heart className="text-sage" size={32} />
            <h2 
              className="text-3xl md:text-4xl text-charcoal"
              style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}
            >
              EHPAD & Établissements de Santé
            </h2>
          </div>
          
          <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
            Ateliers thérapeutiques adaptés aux résidents d'EHPAD et de maisons de retraite. 
            Stimulation sensorielle, travail de la mémoire et reconnexion à la nature par le végétal.
          </p>
          
          <div className="bg-white rounded-lg p-8 space-y-4">
            <h3 className="text-xl font-semibold text-charcoal mb-4">Bénéfices pour les résidents</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-sage mt-1 flex-shrink-0" size={20} />
                <div>
                  <strong className="text-charcoal">Stimulation cognitive</strong>
                  <p className="text-charcoal/70 text-sm mt-1">Travail de la mémoire à travers les souvenirs liés aux plantes</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-sage mt-1 flex-shrink-0" size={20} />
                <div>
                  <strong className="text-charcoal">Apaisement et bien-être</strong>
                  <p className="text-charcoal/70 text-sm mt-1">Activités relaxantes au contact des matières naturelles</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-sage mt-1 flex-shrink-0" size={20} />
                <div>
                  <strong className="text-charcoal">Lien social</strong>
                  <p className="text-charcoal/70 text-sm mt-1">Moments de partage et d'échange autour d'une activité créative</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-sage mt-1 flex-shrink-0" size={20} />
                <div>
                  <strong className="text-charcoal">Motricité fine</strong>
                  <p className="text-charcoal/70 text-sm mt-1">Exercices adaptés pour maintenir les capacités motrices</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section Événementiel */}
      <section id="evenementiel" className="py-16 px-4 bg-sage/5">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <Calendar className="text-sage" size={32} />
            <h2 
              className="text-3xl md:text-4xl text-charcoal"
              style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}
            >
              Événementiel
            </h2>
          </div>
          
          <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
            Animations botaniques sur mesure pour vos événements : festivals, salons, marchés, inaugurations. 
            Créez une expérience mémorable avec des ateliers créatifs qui marquent les esprits.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🎪</div>
              <h4 className="font-semibold text-charcoal mb-2">Festivals</h4>
              <p className="text-sm text-charcoal/70">Stands interactifs et animations botaniques</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🏛️</div>
              <h4 className="font-semibold text-charcoal mb-2">Inaugurations</h4>
              <p className="text-sm text-charcoal/70">Ateliers créatifs pour vos événements officiels</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🎄</div>
              <h4 className="font-semibold text-charcoal mb-2">Noël & Fêtes</h4>
              <p className="text-sm text-charcoal/70">Ateliers saisonniers et couronnes de l'Avent</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 
            className="text-3xl md:text-4xl text-center mb-4 text-charcoal"
            style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}
          >
            Questions Fréquentes
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Tout ce que vous devez savoir pour organiser votre événement botanique
          </p>
          
          <div className="space-y-4">
            {/* Logistique */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-sage/10">
              <h3 className="text-lg font-semibold text-charcoal mb-3 flex items-center gap-2">
                <span className="text-sage">📦</span> Que fournissez-vous pour les ateliers ?
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                <strong>Tout est inclus et clé en main :</strong> matériel, outils, matières premières (plantes, argile, pigments naturels, textiles...), 
                protections de table, et supports pédagogiques. Vous avez juste à prévoir un espace adapté avec tables et chaises. 
                Chaque participant repart avec sa création.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-sage/10">
              <h3 className="text-lg font-semibold text-charcoal mb-3 flex items-center gap-2">
                <span className="text-sage">📍</span> Où intervenez-vous ?
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                Nous intervenons dans toute l'Île-de-France : <strong>Paris, Yvelines (78) et Hauts-de-Seine (92)</strong>. 
                Nous nous déplaçons dans vos locaux, ou nous pouvons vous recommander des lieux partenaires si vous cherchez un espace extérieur.
              </p>
            </div>

            {/* Tarifs */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-sage/10">
              <h3 className="text-lg font-semibold text-charcoal mb-3 flex items-center gap-2">
                <span className="text-sage">💰</span> Comment sont calculés les tarifs ?
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                Les tarifs dépendent de plusieurs critères : <strong>type d'atelier, durée, nombre de participants et lieu</strong>. 
                Nous proposons des forfaits adaptés aux entreprises (team building), aux collectivités et aux établissements scolaires. 
                Chaque devis est personnalisé et gratuit.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-sage/10">
              <h3 className="text-lg font-semibold text-charcoal mb-3 flex items-center gap-2">
                <span className="text-sage">🧾</span> Proposez-vous des facilités de paiement ?
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                Oui, nous acceptons le <strong>paiement en plusieurs fois</strong> pour les structures publiques et les projets de grande envergure. 
                Un acompte de 30% est demandé à la réservation, le solde étant réglé après l'événement. 
                Nous émettons des factures conformes pour les comptabilités d'entreprise.
              </p>
            </div>

            {/* Délais */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-sage/10">
              <h3 className="text-lg font-semibold text-charcoal mb-3 flex items-center gap-2">
                <span className="text-sage">⏰</span> Quel est le délai de réservation ?
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                Idéalement, réservez <strong>3 à 4 semaines à l'avance</strong> pour garantir la disponibilité. 
                Pour les périodes chargées (Noël, printemps, rentrée), prévoyez <strong>6 à 8 semaines</strong>. 
                En cas d'urgence, nous faisons notre maximum pour répondre aux demandes de dernière minute sous 48h.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-sage/10">
              <h3 className="text-lg font-semibold text-charcoal mb-3 flex items-center gap-2">
                <span className="text-sage">📧</span> Sous quel délai recevrai-je mon devis ?
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                <strong>Réponse garantie sous 24h ouvrées.</strong> Vous recevrez un devis détaillé avec le programme de l'atelier, 
                les objectifs pédagogiques, le matériel inclus et les options possibles. Nous restons disponibles par téléphone 
                pour affiner votre projet.
              </p>
            </div>

            {/* Déroulement */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-sage/10">
              <h3 className="text-lg font-semibold text-charcoal mb-3 flex items-center gap-2">
                <span className="text-sage">🎯</span> Comment se déroule un atelier type ?
              </h3>
              <div className="text-charcoal/80 leading-relaxed space-y-2">
                <p>Chaque atelier suit un déroulé structuré :</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li><strong>Accueil (10 min)</strong> : Présentation du thème et des matériaux</li>
                  <li><strong>Démonstration (15-20 min)</strong> : Explication des techniques pas à pas</li>
                  <li><strong>Création (1h-2h30)</strong> : Réalisation guidée avec accompagnement individuel</li>
                  <li><strong>Clôture (10 min)</strong> : Photos de groupe, emballage des créations, échanges</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-sage/10">
              <h3 className="text-lg font-semibold text-charcoal mb-3 flex items-center gap-2">
                <span className="text-sage">👥</span> Combien de participants maximum ?
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                Pour garantir un accompagnement de qualité, nous accueillons <strong>10 à 15 participants par animateur</strong>. 
                Pour les grands groupes (20-50 personnes), nous pouvons organiser des ateliers en rotation 
                ou mobiliser des animateurs supplémentaires. Nous nous adaptons à vos contraintes.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-sage/10">
              <h3 className="text-lg font-semibold text-charcoal mb-3 flex items-center gap-2">
                <span className="text-sage">🌱</span> Les ateliers sont-ils accessibles aux débutants ?
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                <strong>Absolument !</strong> Nos ateliers sont conçus pour être accessibles à tous, sans prérequis. 
                Chaque participant est accompagné individuellement. Le plaisir de créer et la découverte 
                sont au cœur de notre pédagogie, pas la performance technique.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-sage/10">
              <h3 className="text-lg font-semibold text-charcoal mb-3 flex items-center gap-2">
                <span className="text-sage">❌</span> Quelle est votre politique d'annulation ?
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                Annulation gratuite <strong>jusqu'à 14 jours</strong> avant l'événement. 
                Entre 14 et 7 jours : 50% de l'acompte conservé. Moins de 7 jours : acompte non remboursable. 
                En cas de report, nous faisons preuve de flexibilité pour trouver une nouvelle date qui vous convient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Ateliers créatifs */}
      <section className="py-12 px-4 bg-sage/5">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-lg p-6 border-l-4 border-sage text-center shadow-sm">
            <h4 className="text-lg font-semibold text-charcoal mb-2">Vous cherchez des ateliers créatifs pour particuliers ?</h4>
            <p className="text-charcoal/70 mb-4">
              Découvrez nos ateliers botaniques ludiques : kokedama, terrariums, teinture végétale, couronnes de fleurs et bien plus encore.
            </p>
            <Link
              to="/workshops"
              className="inline-flex items-center text-sage hover:text-sage-dark font-semibold transition-all"
            >
              Voir tous nos ateliers créatifs →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="devis" className="py-16 px-4 bg-sand/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Clock className="w-4 h-4" />
              Réponse garantie sous 24h
            </div>
            <h2 
              className="text-3xl md:text-4xl mb-4 text-charcoal"
              style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}
            >
              Demande de Devis Gratuit
            </h2>
            <p className="text-muted-foreground">
              Parlez-nous de votre projet, nous vous répondrons rapidement avec une proposition personnalisée
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Votre nom *</label>
                    <Input 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Jean Dupont"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Organisation *</label>
                    <Input 
                      required
                      value={formData.organization}
                      onChange={(e) => setFormData({...formData, organization: e.target.value})}
                      placeholder="Nom de votre structure"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email *
                    </label>
                    <Input 
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="contact@structure.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Téléphone
                    </label>
                    <Input 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Type d'intervention *</label>
                    <Input 
                      required
                      value={formData.eventType}
                      onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                      placeholder="Team building, animation scolaire..."
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Date souhaitée</label>
                    <Input 
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Votre projet</label>
                  <Textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Décrivez-nous votre projet : nombre de participants, objectifs, contraintes..."
                    rows={5}
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-sage hover:bg-sage-dark text-white"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    "Envoyer ma demande"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pro;
