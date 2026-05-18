import { useState } from "react";
import { SEO } from "@/components/SEO";
import { Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import InscriptionLayout from "@/components/InscriptionLayout";
import { trackFormSubmit } from "@/lib/analytics";

const inputCls =
  "w-full bg-cream border-[3px] border-foreground focus:bg-yellow outline-none px-3 py-2.5 font-body text-sm text-foreground placeholder:text-foreground/70 transition-colors";
const labelCls =
  "block font-mono text-[10px] uppercase tracking-[2px] font-bold text-foreground mb-2";

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
    })}€ pour ${peopleCount} personne${peopleCount > 1 ? "s" : ""}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const registrationId = crypto.randomUUID();
      const fullName = `${form.prenom} ${form.nom}`;
      const bocalLabel =
        form.beneficiaireAurore === "oui"
          ? "Sans objet"
          : form.bocal === "ramene"
          ? "Ramène son bocal (750ml–1L ou plus)"
          : "Bocal fourni sur place (+1,50€ par personne)";

      const { error: confirmError } = await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "wardian-case-registration",
          recipientEmail: form.email,
          idempotencyKey: `wardian-confirm-${registrationId}`,
          templateData: {
            firstName: form.prenom,
            name: fullName,
            subject: "Wardian Case, 22 avril",
            userMessage: form.message || undefined,
          },
        },
      });

      if (confirmError) throw confirmError;

      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "wardian-case-admin-notification",
          recipientEmail: "botaniqueludique@gmail.com",
          idempotencyKey: `wardian-admin-${registrationId}`,
          templateData: {
            fullName,
            email: form.email,
            phone: form.telephone || "Non renseigné",
            participants: form.nombrePersonnes,
            aurore: form.beneficiaireAurore === "oui" ? "Oui" : "Non",
            bocal: bocalLabel,
            price: price(),
            message: form.message || undefined,
          },
        },
      });

      toast({
        title: "Inscription envoyée",
        description: "Un email de confirmation vous a été envoyé. Nous reviendrons vers vous très vite.",
      });

      setForm({ nom: "", prenom: "", email: "", telephone: "", nombrePersonnes: "1", beneficiaireAurore: "non", bocal: "ramene", message: "" });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Inscription Atelier Wardian Case, 22 avril 2026"
        description="Inscrivez-vous à l'atelier Wardian Case : histoire culturelle et politique du terrarium et fabrication. 22 avril, Paris 14e. 7€."
        canonical="/inscription/wardian-case"
      />
      <InscriptionLayout
        eyebrow="Inscription / Atelier"
        title="Wardian Case"
        intro="Plongez dans l'histoire fascinante du terrarium, de la Wardian Case victorienne aux enjeux coloniaux, puis fabriquez votre propre mini terrarium à emporter."
        description="Atelier pensé pour les adultes, mais les parents sont les bienvenus avec leurs enfants. L'accent est mis autant sur le récit historique, culturel et politique du terrarium que sur sa fabrication."
        date="Mer. 22 avril 2026"
        time="16h00 / 17h30"
        location="La Rochefoucauld, Paris 14e"
        audience="12 participant·es max"
        pricing={
          <ul className="space-y-1.5 font-body text-sm text-foreground/80">
            <li>· <strong>7€</strong> si vous ramenez votre bocal (750ml, 1L ou plus)</li>
            <li>· <strong>8,50€</strong> si bocal fourni sur place</li>
            <li>· <strong>Gratuit</strong> pour les bénéficiaires d'Aurore</li>
            <li>· Plantes, substrat et matériel fournis. Paiement sur place</li>
          </ul>
        }
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className={labelCls}>Nom *</label>
              <input type="text" required maxLength={100} value={form.nom} onChange={(e) => setForm((p) => ({ ...p, nom: e.target.value }))} className={inputCls} placeholder="Votre nom" />
            </div>
            <div>
              <label className={labelCls}>Prénom *</label>
              <input type="text" required maxLength={100} value={form.prenom} onChange={(e) => setForm((p) => ({ ...p, prenom: e.target.value }))} className={inputCls} placeholder="Votre prénom" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className={labelCls}>Email *</label>
              <input type="email" required maxLength={255} value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} className={inputCls} placeholder="votre@email.com" />
            </div>
            <div>
              <label className={labelCls}>Téléphone</label>
              <input type="tel" maxLength={20} value={form.telephone} onChange={(e) => setForm((p) => ({ ...p, telephone: e.target.value }))} className={inputCls} placeholder="06 12 34 56 78" />
            </div>
          </div>

          <div>
            <label className={labelCls}>Nombre de personnes *</label>
            <select required value={form.nombrePersonnes} onChange={(e) => setForm((p) => ({ ...p, nombrePersonnes: e.target.value }))} className={inputCls}>
              {[1, 2, 3, 4].map((n) => (
                <option key={n} value={String(n)}>{n} personne{n > 1 ? "s" : ""}</option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelCls}>Êtes-vous bénéficiaire d'Aurore ? *</label>
            <div className="flex gap-3 flex-wrap">
              {[
                { v: "non", l: "Non" },
                { v: "oui", l: "Oui (gratuité)" },
              ].map((opt) => (
                <label
                  key={opt.v}
                  className={`flex items-center gap-2 cursor-pointer border-[3px] border-foreground px-4 py-2.5 font-mono text-[11px] uppercase tracking-[1.5px] transition-colors ${
                    form.beneficiaireAurore === opt.v ? "bg-foreground text-primary-foreground" : "bg-cream hover:bg-yellow"
                  }`}
                >
                  <input
                    type="radio"
                    name="aurore"
                    value={opt.v}
                    checked={form.beneficiaireAurore === opt.v}
                    onChange={() => setForm((p) => ({ ...p, beneficiaireAurore: opt.v }))}
                    className="sr-only"
                  />
                  {opt.l}
                </label>
              ))}
            </div>
          </div>

          {form.beneficiaireAurore === "non" && (
            <div>
              <label className={labelCls}>Bocal pour le terrarium *</label>
              <div className="space-y-3">
                {[
                  { v: "ramene", l: "Je ramène mon propre bocal (750ml, 1L ou plus)", price: "7€" },
                  { v: "surplace", l: "Bocal fourni sur place", price: "8,50€" },
                ].map((opt) => (
                  <label
                    key={opt.v}
                    className={`flex items-start justify-between gap-3 cursor-pointer border-[3px] border-foreground px-4 py-3 transition-colors ${
                      form.bocal === opt.v ? "bg-yellow" : "bg-cream hover:bg-green-pale"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input type="radio" name="bocal" value={opt.v} checked={form.bocal === opt.v} onChange={() => setForm((p) => ({ ...p, bocal: opt.v }))} className="mt-1 accent-foreground" />
                      <span className="font-body text-sm text-foreground">{opt.l}</span>
                    </div>
                    <span className="font-display text-sm uppercase tracking-tight shrink-0">{opt.price}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          <div>
            <label className={labelCls}>Message (optionnel)</label>
            <textarea maxLength={500} value={form.message} onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))} rows={3} className={`${inputCls} resize-none`} placeholder="Question, allergie, besoin spécifique..." />
          </div>

          <div className="border-brutal bg-yellow p-4 text-center">
            <span className="font-mono text-[10px] uppercase tracking-[2px] text-foreground/60 block mb-1">Tarif estimé</span>
            <span className="font-display text-2xl uppercase tracking-tight">{price()}</span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 bg-foreground text-primary-foreground border-brutal shadow-brutal px-6 py-4 font-display uppercase text-sm tracking-wide hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-hover transition-all disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
            {isSubmitting ? "Envoi en cours..." : "Valider mon inscription"}
          </button>

          <p className="font-mono text-[10px] uppercase tracking-[1.5px] text-foreground/50 text-center">
            Email de confirmation envoyé. Paiement sur place le jour de l'atelier.
          </p>
        </form>
      </InscriptionLayout>
    </>
  );
};

export default InscriptionWardianCase;
