import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { Calendar as CalendarIcon, MapPin, Clock, Users, ArrowLeft, Leaf, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const InscriptionWardianCase = () => {
  const { toast } = useToast();

  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    nombrePersonnes: "1",
    beneficiaireAurore: "non",
    bocal: "ramene",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const price = () => {
    if (form.beneficiaireAurore === "oui") return "Gratuit (bénéficiaire Aurore)";

    const peopleCount = Number(form.nombrePersonnes) || 1;
    const basePrice = 7 * peopleCount;
    const jarSupplement = form.bocal === "surplace" ? 1.5 * peopleCount : 0;
    const total = basePrice + jarSupplement;

    return `${total.toLocaleString("fr-FR", {
      minimumFractionDigits: jarSupplement > 0 ? 2 : 0,
      maximumFractionDigits: 2,
    })}€ pour ${peopleCount} personne${peopleCount > 1 ? "s" : ""}${
      jarSupplement > 0 ? ` (${basePrice.toLocaleString("fr-FR")}€ + ${jarSupplement.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}€ de bocaux)` : ""
    }`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: `${form.prenom} ${form.nom}`,
          email: form.email,
          subject: `Inscription Wardian Case – 22 avril`,
          message: `Inscription à l'atelier Wardian Case du 22 avril 2026\n\nNom : ${form.nom}\nPrénom : ${form.prenom}\nEmail : ${form.email}\nTéléphone : ${form.telephone || "Non renseigné"}\nNombre de personnes : ${form.nombrePersonnes}\nBénéficiaire Aurore : ${form.beneficiaireAurore === "oui" ? "Oui" : "Non"}\nBocal : ${form.beneficiaireAurore === "oui" ? "Sans objet" : form.bocal === "ramene" ? "Ramène son bocal (750ml–1L ou plus)" : "Bocal fourni sur place (+1,50€ par personne)"}\nTarif estimé : ${price()}\nMessage : ${form.message || "Aucun"}`,
          sendConfirmation: true,
        }
      });

      if (error) throw error;

      toast({
        title: "Inscription envoyée ! 🌿",
        description: "Un email de confirmation vous a été envoyé. Nous reviendrons vers vous très vite.",
      });

      setForm({ nom: "", prenom: "", email: "", telephone: "", nombrePersonnes: "1", beneficiaireAurore: "non", bocal: "ramene", message: "" });
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
        title="Inscription Atelier Wardian Case – 22 avril 2026 | Botanique Ludique"
        description="Inscrivez-vous à l'atelier Wardian Case : histoire culturelle et politique du terrarium + fabrication. 22 avril, Paris 14e. 7€."
        canonical="/inscription/wardian-case"
      />
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">

            {/* Back link */}
            <Link to="/agenda" className="inline-flex items-center gap-2 text-sm uppercase tracking-wider font-semibold text-foreground/60 hover:text-foreground transition-colors mb-10">
              <ArrowLeft className="w-4 h-4" />
              Retour à l'agenda
            </Link>

            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="w-8 h-8 text-primary" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Inscription</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: 'hsl(var(--foreground))' }}>
                Wardian Case
              </h1>
              <p className="text-lg text-foreground/70 italic" style={{ fontFamily: 'Fraunces, serif' }}>
                Plongez dans l'histoire fascinante du terrarium, de la Wardian Case victorienne aux enjeux coloniaux, puis fabriquez votre propre mini terrarium à emporter.
              </p>
              <p className="text-sm text-foreground/60 mt-4 leading-relaxed">
                Atelier pensé pour les adultes, mais les parents sont les bienvenus avec leurs enfants. L'accent sera mis autant sur le récit historique, culturel et politique du terrarium que sur sa fabrication.
              </p>
            </div>

            {/* Event details */}
            <div className="border-t border-b border-border py-6 mb-10 grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CalendarIcon className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-foreground/50 mb-1">Date</p>
                  <p className="text-sm font-medium text-foreground">Mardi 22 avril 2026</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-foreground/50 mb-1">Horaires</p>
                  <p className="text-sm font-medium text-foreground">16h00 – 17h30</p>
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
                  <p className="text-xs uppercase tracking-wider text-foreground/50 mb-1">Places</p>
                  <p className="text-sm font-medium text-foreground">12 participant·es max</p>
                </div>
              </div>
            </div>

            {/* Tarif info */}
            <div className="border border-border bg-secondary/30 p-6 mb-10">
              <h2 className="text-sm uppercase tracking-wider font-semibold text-foreground mb-4">Tarifs & Matériel</h2>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>• <strong>7€</strong> si vous ramenez votre bocal (750ml, 1L ou plus)</li>
                <li>• <strong>8,50€</strong> si bocal fourni sur place (7€ + 1,50€)</li>
                <li>• <strong>Gratuit</strong> pour les bénéficiaires d'Aurore (+3 places supplémentaires)</li>
                <li>• Plantes, substrat et tout le matériel sont fournis</li>
              </ul>
              <p className="text-xs text-foreground/50 mt-4">Le paiement se fait sur place le jour de l'atelier.</p>
            </div>

            {/* Form */}
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
                  <label className="block text-xs uppercase tracking-wider font-semibold text-foreground/70 mb-3">Êtes-vous bénéficiaire d'Aurore ? *</label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="radio"
                        name="aurore"
                        value="non"
                        checked={form.beneficiaireAurore === "non"}
                        onChange={() => setForm(prev => ({ ...prev, beneficiaireAurore: "non" }))}
                        className="accent-primary"
                      />
                      <span className="text-sm text-foreground group-hover:text-primary transition-colors">Non</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="radio"
                        name="aurore"
                        value="oui"
                        checked={form.beneficiaireAurore === "oui"}
                        onChange={() => setForm(prev => ({ ...prev, beneficiaireAurore: "oui" }))}
                        className="accent-primary"
                      />
                      <span className="text-sm text-foreground group-hover:text-primary transition-colors">Oui (gratuité)</span>
                    </label>
                  </div>
                </div>

                {form.beneficiaireAurore === "non" && (
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-foreground/70 mb-3">Bocal pour le terrarium *</label>
                    <div className="space-y-3">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="bocal"
                          value="ramene"
                          checked={form.bocal === "ramene"}
                          onChange={() => setForm(prev => ({ ...prev, bocal: "ramene" }))}
                          className="accent-primary mt-1"
                        />
                        <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                          Je ramène mon propre bocal (750ml, 1L ou plus) — <strong>7€</strong>
                        </span>
                      </label>
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="bocal"
                          value="surplace"
                          checked={form.bocal === "surplace"}
                          onChange={() => setForm(prev => ({ ...prev, bocal: "surplace" }))}
                          className="accent-primary mt-1"
                        />
                        <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                          Bocal fourni sur place — <strong>8,50€</strong> (7€ + 1,50€)
                        </span>
                      </label>
                    </div>
                  </div>
                )}

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

                {/* Price recap */}
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

export default InscriptionWardianCase;
