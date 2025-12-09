import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { Leaf, Loader2, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { Card, CardContent } from "@/components/ui/card";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(100, "Le nom doit faire moins de 100 caractères"),
  email: z.string().trim().email("Email invalide").max(255, "L'email doit faire moins de 255 caractères"),
  subject: z.string().trim().max(200, "Le sujet doit faire moins de 200 caractères"),
  message: z.string().trim().min(1, "Le message est requis").max(1000, "Le message doit faire moins de 1000 caractères"),
});

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get atelier from URL params and set as subject
  useEffect(() => {
    const atelierFromUrl = searchParams.get('atelier');
    const subjectFromUrl = searchParams.get('subject');
    
    if (atelierFromUrl) {
      const decodedAtelier = decodeURIComponent(atelierFromUrl);
      setFormData(prev => ({
        ...prev,
        subject: `Réservation : ${decodedAtelier}`,
        message: prev.message || `Bonjour,\n\nJe souhaite réserver l'atelier "${decodedAtelier}".\n\nMerci de me recontacter pour finaliser ma réservation.\n\nCordialement,`
      }));
    } else if (subjectFromUrl) {
      setFormData(prev => ({
        ...prev,
        subject: decodeURIComponent(subjectFromUrl)
      }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    try {
      contactSchema.parse(formData);
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
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons bientôt à l'adresse email fournie.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error: any) {
      console.error('Error sending email:', error);
      toast({
        title: "Erreur lors de l'envoi",
        description: "Une erreur est survenue. Veuillez réessayer plus tard.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const atelierFromUrl = searchParams.get('atelier');

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <SEO 
        title="Contact - Réserver un Atelier Botanique"
        description="Contactez-nous pour réserver un atelier botanique à Paris et en Île-de-France. Devis personnalisé sous 48h pour particuliers, entreprises, écoles."
        keywords="contact atelier botanique, réserver kokedama, devis formation botanique, contact Botanique Ludique"
        canonical="/contact"
      />
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-sage/20 mb-6">
                <Leaf className="w-10 h-10 text-sage" strokeWidth={1.5} />
              </div>
              <h1 className="page-title text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Contact
              </h1>
              <p className="subtitle-italic text-lg leading-relaxed max-w-2xl mx-auto">
                Nous serions ravis de semer un projet avec vous.
              </p>
            </div>

            {/* Atelier Banner - Show when coming from Agenda */}
            {atelierFromUrl && (
              <div className="mb-10 animate-fade-in">
                <Card className="bg-gradient-to-r from-sage/20 to-sand/30 border-sage/30 overflow-hidden">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sage/30 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-sage-dark" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-wider text-sage-dark font-semibold mb-1">
                        Vous souhaitez réserver
                      </p>
                      <p className="text-xl font-medium text-charcoal" style={{ fontFamily: 'Fraunces, serif' }}>
                        {decodeURIComponent(atelierFromUrl)}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            <div className="grid lg:grid-cols-5 gap-10">
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <Card className="overflow-hidden border-sage/20 shadow-lg">
                  <div className="h-2 bg-gradient-to-r from-sage via-sage-dark to-sage" />
                  <CardContent className="p-8 md:p-10">
                    <h2 className="text-2xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                      Envoyez-nous un message
                    </h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                            Nom <span className="text-sage-dark">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Votre nom"
                            className="w-full px-4 py-3 rounded-xl border border-sage/30 bg-background text-charcoal focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-all placeholder:text-charcoal/40"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                            Email <span className="text-sage-dark">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="votre@email.com"
                            className="w-full px-4 py-3 rounded-xl border border-sage/30 bg-background text-charcoal focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-all placeholder:text-charcoal/40"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-2">
                          Sujet
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Objet de votre message"
                          className="w-full px-4 py-3 rounded-xl border border-sage/30 bg-background text-charcoal focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-all placeholder:text-charcoal/40"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                          Message <span className="text-sage-dark">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          placeholder="Décrivez votre projet ou posez vos questions..."
                          className="w-full px-4 py-3 rounded-xl border border-sage/30 bg-background text-charcoal focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-all resize-none placeholder:text-charcoal/40"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-6 py-4 bg-sage hover:bg-sage-dark text-off-white font-semibold text-sm uppercase tracking-wider transition-all duration-300 rounded-full flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Envoyer le message
                          </>
                        )}
                      </button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info Sidebar */}
              <div className="lg:col-span-2 space-y-6">
                {/* Quick Info Card */}
                <Card className="border-sage/20 overflow-hidden">
                  <div className="h-1.5 bg-gradient-to-r from-sand via-sage/50 to-sand" />
                  <CardContent className="p-6 space-y-6">
                    <h3 className="text-xl" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                      Coordonnées
                    </h3>
                    
                    <div className="space-y-4">
                      <a 
                        href="mailto:botaniqueludique@gmail.com"
                        className="flex items-start gap-4 p-4 rounded-xl bg-sage/5 hover:bg-sage/10 transition-colors group"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center group-hover:bg-sage/30 transition-colors">
                          <Mail className="w-5 h-5 text-sage-dark" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-charcoal/60 mb-1">Email</p>
                          <p className="text-charcoal font-medium">botaniqueludique@gmail.com</p>
                        </div>
                      </a>

                      <div className="flex items-start gap-4 p-4 rounded-xl bg-sage/5">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-sage-dark" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-charcoal/60 mb-1">Zone d'intervention</p>
                          <p className="text-charcoal font-medium">Paris, Yvelines (78), Hauts-de-Seine (92)</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 rounded-xl bg-sage/5">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center">
                          <Phone className="w-5 h-5 text-sage-dark" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-charcoal/60 mb-1">Réponse</p>
                          <p className="text-charcoal font-medium">Sous 48h maximum</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* FAQ Teaser */}
                <Card className="border-sage/20 bg-gradient-to-br from-sand/50 to-sage/10">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-4">
                      <Leaf className="w-6 h-6 text-sage-dark" />
                    </div>
                    <h3 className="text-lg mb-2" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                      Des questions ?
                    </h3>
                    <p className="text-sm text-charcoal/70 mb-4">
                      Consultez notre FAQ pour des réponses rapides à vos questions.
                    </p>
                    <a 
                      href="/faq"
                      className="inline-flex items-center text-sm font-semibold text-sage-dark hover:text-sage transition-colors"
                    >
                      Voir la FAQ →
                    </a>
                  </CardContent>
                </Card>

                {/* Social Proof */}
                <div className="text-center p-6 rounded-xl border border-sage/20 bg-background">
                  <p className="text-3xl font-light text-sage-dark mb-1" style={{ fontFamily: 'Fraunces, serif' }}>+100</p>
                  <p className="text-sm text-charcoal/70">ateliers animés depuis 2022</p>
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

export default Contact;