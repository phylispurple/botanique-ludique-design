import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Building2, Heart, Leaf, Calendar, Mail, Phone, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const quoteSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(100, "Le nom doit faire moins de 100 caractères"),
  organization: z.string().trim().min(1, "Le nom de l'organisation est requis").max(200, "Le nom de l'organisation doit faire moins de 200 caractères"),
  email: z.string().trim().email("Email invalide").max(255, "L'email doit faire moins de 255 caractères"),
  phone: z.string().trim().max(20, "Le téléphone doit faire moins de 20 caractères").optional(),
  eventType: z.string().trim().min(1, "Le type d'événement est requis").max(200, "Le type d'événement doit faire moins de 200 caractères"),
  date: z.string().optional(),
  message: z.string().trim().max(2000, "Le message doit faire moins de 2000 caractères").optional(),
});

const B2B = () => {
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
    
    // Validate form data
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
        description: "Nous vous contacterons dans les plus brefs délais (sous 48h).",
      });

      // Reset form
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
      benefits: ["Cohésion d'équipe", "Démarche RSE", "Bien-être au travail"]
    },
    {
      icon: Users,
      title: "Collectivités",
      description: "MJC, centres sociaux, mairies - animations pour tous publics",
      benefits: ["Activités intergénérationnelles", "Lien social", "Éducation environnementale"]
    },
    {
      icon: Heart,
      title: "EHPAD & Santé",
      description: "Ateliers thérapeutiques, stimulation sensorielle par les plantes",
      benefits: ["Stimulation cognitive", "Apaisement", "Lien avec la nature"]
    },
    {
      icon: Calendar,
      title: "Événementiel",
      description: "Festivals, salons, marchés - animations botaniques sur mesure",
      benefits: ["Animation unique", "Expérience mémorable", "Création de souvenirs"]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Professionnels - Team Building et Événements Nature Paris, Yvelines, 92"
        description="Organisez des ateliers botaniques pour vos équipes, événements d'entreprise, collectivités et EHPAD à Paris, Yvelines (78) et Hauts-de-Seine (92). Team building créatif et cohésion d'équipe."
        keywords="team building Paris, événement entreprise, atelier entreprise Yvelines, atelier entreprise Hauts-de-Seine, RSE, collectivités, EHPAD, animation nature"
        canonical="/b2b"
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
            Ateliers Botaniques pour Professionnels
          </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Renforcez la cohésion de vos équipes et engagez votre démarche RSE 
              avec des ateliers créatifs et nature à Paris, dans les Yvelines (78) et les Hauts-de-Seine (92)
            </p>
        </div>
      </section>

      {/* Team Building RSE Section */}
      <section className="py-16 px-4 bg-sage/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl mb-6 text-charcoal"
              style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}
            >
              Team Building Botanique & RSE en Île-de-France
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Renforcez la cohésion de vos équipes avec nos ateliers team building botaniques à Paris, dans les Yvelines (78) et les Hauts-de-Seine (92)
            </p>
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
                  <h4 className="font-semibold text-charcoal mb-1">🌱 Kokedama d'Équipe - 2h30 - Paris, Yvelines, Hauts-de-Seine</h4>
                  <p className="text-muted-foreground">Créez ensemble des jardins suspendus japonais pour renforcer la cohésion</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-charcoal mb-1">🎨 Teinture Végétale Collaborative - 3h - Paris, Yvelines, Hauts-de-Seine</h4>
                  <p className="text-muted-foreground">Atelier créatif de teinture naturelle pour des textiles éco-responsables</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-charcoal mb-1">🌿 Création de Terrarium - 2h - Paris, Yvelines, Hauts-de-Seine</h4>
                  <p className="text-muted-foreground">Fabrication d'écosystèmes miniatures pour sensibiliser à la biodiversité</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-charcoal mb-1">🪵 Vannerie & Artisanat - 3h30 - Paris, Yvelines, Hauts-de-Seine</h4>
                  <p className="text-muted-foreground">Ateliers de tressage et techniques ancestrales pour un moment ressourçant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 
            className="text-3xl md:text-4xl text-center mb-12 text-charcoal"
            style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}
          >
            Nos Solutions pour Professionnels
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {clientTypes.map((client, index) => {
              const Icon = client.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-sage/10 p-3 rounded-full">
                        <Icon className="w-6 h-6 text-sage" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-charcoal mb-2">
                          {client.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
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

      {/* Contact Form */}
      <section className="py-16 px-4 bg-sand/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-10">
            <h2 
              className="text-3xl md:text-4xl mb-4 text-charcoal"
              style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}
            >
              Demande de Devis
            </h2>
            <p className="text-muted-foreground">
              Parlez-nous de votre projet, nous vous répondrons rapidement
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
                      placeholder="Nom de votre entreprise"
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
                      placeholder="contact@entreprise.com"
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
                    <label className="text-sm font-medium">Type d'événement *</label>
                    <Input 
                      required
                      value={formData.eventType}
                      onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                      placeholder="Team building, animation..."
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

export default B2B;
