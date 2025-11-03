import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { Leaf, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

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

  useEffect(() => {
    const subjectFromUrl = searchParams.get('subject');
    if (subjectFromUrl) {
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

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-20">
              <Leaf className="w-16 h-16 mx-auto mb-4" style={{ color: '#A7B795', strokeWidth: 1.5 }} />
              <h1 className="page-title text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Contact
              </h1>
              <p className="subtitle-italic text-lg leading-relaxed">
                Nous serions ravis de semer un projet avec vous.
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed mt-4">
                Que vous souhaitiez réserver un atelier, organiser un événement privé,
                ou simplement en savoir plus sur nos offres botaniques.
              </p>
            </div>

            <div className="rounded-lg p-8 md:p-12 relative" style={{ backgroundColor: '#F7F7EB' }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-wider mb-2 text-charcoal font-semibold">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{ backgroundColor: '#F7F7EB', border: '1px solid #C9D2B5' }}
                    className="w-full px-4 py-3 rounded-lg text-charcoal focus:outline-none focus:ring-2 transition-all"
                    onFocus={(e) => e.currentTarget.style.borderColor = '#A7B795'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#C9D2B5'}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-wider mb-2 text-charcoal font-semibold">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{ backgroundColor: '#F7F7EB', border: '1px solid #C9D2B5' }}
                    className="w-full px-4 py-3 rounded-lg text-charcoal focus:outline-none focus:ring-2 transition-all"
                    onFocus={(e) => e.currentTarget.style.borderColor = '#A7B795'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#C9D2B5'}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm uppercase tracking-wider mb-2 text-charcoal font-semibold">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    style={{ backgroundColor: '#F7F7EB', border: '1px solid #C9D2B5' }}
                    className="w-full px-4 py-3 rounded-lg text-charcoal focus:outline-none focus:ring-2 transition-all"
                    onFocus={(e) => e.currentTarget.style.borderColor = '#A7B795'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#C9D2B5'}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-wider mb-2 text-charcoal font-semibold">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    style={{ backgroundColor: '#F7F7EB', border: '1px solid #C9D2B5' }}
                    className="w-full px-4 py-3 rounded-lg text-charcoal focus:outline-none focus:ring-2 transition-all resize-none"
                    onFocus={(e) => e.currentTarget.style.borderColor = '#A7B795'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#C9D2B5'}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 text-off-white font-semibold text-sm uppercase tracking-wider transition-colors rounded-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: isSubmitting ? '#5D653A' : '#A7B795' }}
                  onMouseEnter={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#5D653A')}
                  onMouseLeave={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#A7B795')}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    'Envoyer le message'
                  )}
                </button>
              </form>
              
              {/* Decorative plant illustration */}
              <div className="absolute bottom-4 right-4 opacity-20">
                <Leaf size={64} style={{ color: '#A7B795', transform: 'rotate(-15deg)' }} />
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
              <div className="text-center md:text-left">
                <h3 className="text-sm uppercase tracking-wider mb-2 font-semibold" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>Email</h3>
                <a
                  href="mailto:botaniqueludique@gmail.com"
                  className="text-sage hover:text-sage-dark transition-colors"
                >
                  botaniqueludique@gmail.com
                </a>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-sm uppercase tracking-wider mb-2 font-semibold" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>Localisation</h3>
                <p className="text-charcoal/80">
                  Paris et régions environnantes
                </p>
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
