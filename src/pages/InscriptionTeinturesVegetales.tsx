import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { Calendar as CalendarIcon, MapPin, Clock, Users, ArrowLeft, Leaf, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const InscriptionTeinturesVegetales = () => {
  const { toast } = useToast();

  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    nombrePersonnes: "1",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const price = () => {
    const peopleCount = Number(form.nombrePersonnes) || 1;
    const total = 8 * peopleCount;
    return `${total}€ pour ${peopleCount} personne${peopleCount > 1 ? "s" : ""}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const registrationId = crypto.randomUUID();
      const fullName = `${form.prenom} ${form.nom}`;

      const { error: confirmError } = await supabase.functions.invoke('send-transactional-email', {
        body: {
          templateName: 'teintures-vegetales-registration',
          recipientEmail: form.email,
          idempotencyKey: `teintures-confirm-${registrationId}`,
          templateData: {
            firstName: form.prenom,
            name: fullName,
            subject: 'Teintures végétales, 27 mai',
            userMessage: form.message || undefined,
          },
        }
      });

      if (confirmError) throw confirmError;

      await supabase.functions.invoke('send-transactional-email', {
        body: {
          templateName: 'teintures-vegetales-admin-notification',
          recipientEmail: 'botaniqueludique@gmail.com',
          idempotencyKey: `teintures-admin-${registrationId}`,
          templateData: {
            fullName,
            email: form.email,
            phone: form.telephone || "Non renseigné",
            participants: form.nombrePersonnes,
            price: price(),
            message: form.message || undefined,
          },
        }
      });

      toast({
        title: "Inscription envoyée ! 🌿",
        description: "Un email de confirmation vous a été envoyé. Nous reviendrons vers vous très vite.",
      });

      setForm({ nom: "", prenom: "", email: "", telephone: "", nombrePersonnes: "1", message: "" });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative bg-background">
      <SEO
        title="Inscription Atelier Teintures végétales, 27 mai 2026 | Botanique Ludique"
        description="Inscrivez-vous à l'atelier Histoire culturelle et politique des teintures végétales. 27 mai, Paris 14e. 8€ matériel fourni."
        canonical="/inscription/teintures-vegetales"
      />
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">

            <Link to="/agenda" className="inline-flex items-center gap-2 text-sm uppercase tracking-wider font-semibold text-foreground/60 hover:text-foreground transition-colors mb-10">
              <ArrowLeft className="w-4 h-4" />
              Retour à l'agenda
            </Link>

            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="w-8 h-8 text-primary" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Inscription</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: 'hsl(var(--foreground))' }}>
                Histoire culturelle et politique des teintures végétales
              </h1>
              <p className="text-lg text-foreground/70 italic" style={{ fontFamily: 'Fraunces, serif' }}>
                De l'indigo des esclaves aux Antilles au curcuma de votre cuisine, Botanique Ludique retrace l'histoire politique des couleurs végétales.
              </p>
              <p className="text-sm text-foreground/60 mt-4 leading-relaxed">
                Atelier tout public mêlant récit historique, anthropologique et pratique de teinture végétale. Vous repartez avec votre échantillon teinté.
              </p>
            </div>

            <div className="border-t border-b border-border py-6 mb-10 grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CalendarIcon className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-foreground/50 mb-1">Date</p>
                  <p className="text-sm font-medium text-foreground">Mercredi 27 mai 2026</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-foreground/50 mb-1">Horaires</p>
                  <p className="text-sm font-medium text-foreground">17h00</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-foreground/50 mb-1">Lieu</p>
                  <p className="text-sm font-medium text-foreground">La Rochefoucauld, Paris 14e (Denfert-Rochereau)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-foreground/50 mb-1">Public</p>
                  <p className="text-sm font-medium text-foreground">Tout public</p>
                </div>
              </div>
            </div>

            <div className="border border-border bg-secondary/30 p-6 mb-10">
              <h2 className="text-sm uppercase tracking-wider font-semibold text-foreground mb-4">Tarif & Matériel</h2>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>• <strong>8€ par personne</strong>, matériel fourni</li>
                <li>• Plantes tinctoriales, mordants et tissus fournis</li>
                <li>• Sur inscription préalable</li>
              </ul>
              <p className="text-xs text-foreground/50 mt-4">Le paiement se fait sur place le jour de l'atelier.</p>
            </div>

            <div className="border border-border p-6 md:p-10">
              <h2 className="text-xl mb-8" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: 'hsl(var(--foreground))' }}>
                Formulaire d'inscription
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-foreground/70 mb-2">Nom *</label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      value={form.nom}
                      onChange={(e) => setForm(prev => ({ ...prev, nom: e.target.value }))}
                      className="w-full bg-transparent border-b-2 border-border focus:border-primary outline-none py-2 text-foreground placeholder:text-foreground/30 transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-foreground/70 mb-2">Prénom *</label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      value={form.prenom}
                      onChange={(e) => setForm(prev => ({ ...prev, prenom: e.target.value }))}
                      className="w-full bg-transparent border-b-2 border-border focus:border-primary outline-none py-2 text-foreground placeholder:text-foreground/30 transition-colors"
                      placeholder="Votre prénom"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-foreground/70 mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      maxLength={255}
                      value={form.email}
                      onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-transparent border-b-2 border-border focus:border-primary outline-none py-2 text-foreground placeholder:text-foreground/30 transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-foreground/70 mb-2">Téléphone</label>
                    <input
                      type="tel"
                      maxLength={20}
                      value={form.telephone}
                      onChange={(e) => setForm(prev => ({ ...prev, telephone: e.target.value }))}
                      className="w-full bg-transparent border-b-2 border-border focus:border-primary outline-none py-2 text-foreground placeholder:text-foreground/30 transition-colors"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-foreground/70 mb-2">Nombre de personnes *</label>
                  <select
                    required
                    value={form.nombrePersonnes}
                    onChange={(e) => setForm(prev => ({ ...prev, nombrePersonnes: e.target.value }))}
                    className="w-full bg-transparent border-b-2 border-border focus:border-primary outline-none py-2 text-foreground transition-colors"
                  >
                    {[1, 2, 3, 4].map(n => (
                      <option key={n} value={String(n)}>{n} personne{n > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-foreground/70 mb-2">Message (optionnel)</label>
                  <textarea
                    maxLength={500}
                    value={form.message}
                    onChange={(e) => setForm(prev => ({ ...prev, message: e.target.value }))}
                    rows={3}
                    className="w-full bg-transparent border-b-2 border-border focus:border-primary outline-none py-2 text-foreground placeholder:text-foreground/30 transition-colors resize-none"
                    placeholder="Question, allergie, besoin spécifique..."
                  />
                </div>

                <div className="border border-primary/30 bg-primary/5 p-4 text-center">
                  <p className="text-xs uppercase tracking-wider text-foreground/50 mb-1">Tarif estimé</p>
                  <p className="text-xl font-semibold text-primary">{price()}</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground disabled:opacity-50 text-xs uppercase tracking-[0.15em] font-bold transition-all duration-300"
                  style={{ boxShadow: 'var(--shadow-brutal)' }}
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Envoi en cours..." : "Valider mon inscription"}
                </button>

                <p className="text-xs text-foreground/40 text-center">
                  Un email de confirmation vous sera envoyé. Le paiement se fait sur place le jour de l'atelier.
                </p>
              </form>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InscriptionTeinturesVegetales;
