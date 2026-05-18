import { useState } from "react";
import { SEO } from "@/components/SEO";
import { Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import InscriptionLayout from "@/components/InscriptionLayout";

const inputCls =
  "w-full bg-cream border-[3px] border-foreground focus:bg-yellow outline-none px-3 py-2.5 font-body text-sm text-foreground placeholder:text-foreground/70 transition-colors";
const labelCls =
  "block font-mono text-[10px] uppercase tracking-[2px] font-bold text-foreground mb-2";

const InscriptionMauvaisesHerbes = () => {
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
    const total = 7 * peopleCount;
    return `${total}€ pour ${peopleCount} personne${peopleCount > 1 ? "s" : ""}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const registrationId = crypto.randomUUID();
      const fullName = `${form.prenom} ${form.nom}`;

      const { error: confirmError } = await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "mauvaises-herbes-registration",
          recipientEmail: form.email,
          idempotencyKey: `mauvaises-confirm-${registrationId}`,
          templateData: {
            firstName: form.prenom,
            name: fullName,
            subject: "Bombes de graines, 6 mai",
            userMessage: form.message || undefined,
            participants: form.nombrePersonnes,
            price: price(),
          },
        },
      });

      if (confirmError) throw confirmError;

      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "mauvaises-herbes-admin-notification",
          recipientEmail: "botaniqueludique@gmail.com",
          idempotencyKey: `mauvaises-admin-${registrationId}`,
          templateData: {
            fullName,
            email: form.email,
            phone: form.telephone || "Non renseigné",
            participants: form.nombrePersonnes,
            price: price(),
            message: form.message || undefined,
          },
        },
      });

      toast({
        title: "Inscription envoyée",
        description: "Un email de confirmation vous a été envoyé. Nous reviendrons vers vous très vite.",
      });

      setForm({ nom: "", prenom: "", email: "", telephone: "", nombrePersonnes: "1", message: "" });
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
        title="Inscription Atelier Mauvaises herbes, 6 mai 2026"
        description="Inscrivez-vous à l'atelier Mauvaises herbes : histoire des jardins punk et fabrication de bombes à graines. 6 mai, Paris 14e. 7€."
        canonical="/inscription/mauvaises-herbes"
      />
      <InscriptionLayout
        eyebrow="Inscription / Atelier"
        title="Mauvaises herbes"
        intro="Histoire des jardins punk et de la politique des plantes sauvages en ville, suivie de la fabrication de bombes à graines à lancer dans les friches urbaines."
        description="Atelier tout public mêlant récit culturel et politique des « mauvaises herbes » et pratique végétale. Vous repartez avec vos bombes à graines à disséminer."
        date="Mer. 6 mai 2026"
        time="17h00"
        location="La Rochefoucauld, Paris 14e"
        audience="Tout public"
        pricing={
          <ul className="space-y-1.5 font-body text-sm text-foreground/80">
            <li>· <strong>7€ par personne</strong>, matériel compris</li>
            <li>· Graines, terre et argile fournies pour vos bombes à graines</li>
            <li>· Paiement sur place le jour de l'atelier</li>
          </ul>
        }
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className={labelCls}>Nom *</label>
              <input
                type="text"
                required
                maxLength={100}
                value={form.nom}
                onChange={(e) => setForm((p) => ({ ...p, nom: e.target.value }))}
                className={inputCls}
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className={labelCls}>Prénom *</label>
              <input
                type="text"
                required
                maxLength={100}
                value={form.prenom}
                onChange={(e) => setForm((p) => ({ ...p, prenom: e.target.value }))}
                className={inputCls}
                placeholder="Votre prénom"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className={labelCls}>Email *</label>
              <input
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                className={inputCls}
                placeholder="votre@email.com"
              />
            </div>
            <div>
              <label className={labelCls}>Téléphone</label>
              <input
                type="tel"
                maxLength={20}
                value={form.telephone}
                onChange={(e) => setForm((p) => ({ ...p, telephone: e.target.value }))}
                className={inputCls}
                placeholder="06 12 34 56 78"
              />
            </div>
          </div>

          <div>
            <label className={labelCls}>Nombre de personnes *</label>
            <select
              required
              value={form.nombrePersonnes}
              onChange={(e) => setForm((p) => ({ ...p, nombrePersonnes: e.target.value }))}
              className={inputCls}
            >
              {[1, 2, 3, 4].map((n) => (
                <option key={n} value={String(n)}>
                  {n} personne{n > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelCls}>Message (optionnel)</label>
            <textarea
              maxLength={500}
              value={form.message}
              onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
              rows={3}
              className={`${inputCls} resize-none`}
              placeholder="Question, allergie, besoin spécifique..."
            />
          </div>

          <div className="border-brutal bg-yellow p-4 text-center">
            <span className="font-mono text-[10px] uppercase tracking-[2px] text-foreground/60 block mb-1">
              Tarif estimé
            </span>
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

export default InscriptionMauvaisesHerbes;
