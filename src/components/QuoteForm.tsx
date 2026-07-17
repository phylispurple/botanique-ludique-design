import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { trackFormSubmit } from "@/lib/analytics";

const quoteSchema = z.object({
  firstName: z.string().trim().min(1, "Prénom requis").max(80),
  lastName: z.string().trim().min(1, "Nom requis").max(80),
  company: z.string().trim().max(120).optional(),
  email: z.string().trim().email("Email invalide").max(255),
  phone: z.string().trim().max(40).optional(),
  participants: z.string().trim().max(20).optional(),
  date: z.string().trim().max(40).optional(),
  city: z.string().trim().max(120).optional(),
  eventType: z.string().trim().max(120).optional(),
  message: z.string().trim().max(1500).optional(),
});

interface QuoteFormProps {
  atelierTitle: string;
}

const inputCls =
  "w-full px-0 py-2 bg-transparent text-[hsl(var(--black))] border-0 border-b-2 border-[hsl(var(--black))]/20 focus:border-[hsl(var(--olive))] focus:outline-none transition-colors placeholder:text-[hsl(var(--black))]/30 font-body text-sm";
const labelCls =
  "block font-mono-brand text-[9px] uppercase tracking-[2px] text-[hsl(var(--olive))] mb-0.5";

const QuoteForm = ({ atelierTitle }: QuoteFormProps) => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    participants: "",
    date: "",
    city: "",
    eventType: "",
    message: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      quoteSchema.parse(form);
    } catch (err) {
      if (err instanceof z.ZodError) {
        toast({ title: "Erreur de validation", description: err.errors[0].message, variant: "destructive" });
      }
      return;
    }
    setSubmitting(true);
    try {
      const fullName = `${form.firstName} ${form.lastName}`.trim();
      const body = {
        name: fullName,
        email: form.email,
        subject: `[Devis] ${atelierTitle}`,
        message:
          `Demande de devis — ${atelierTitle}\n\n` +
          `Nom : ${fullName}\n` +
          `Entreprise : ${form.company || "—"}\n` +
          `Email : ${form.email}\n` +
          `Téléphone : ${form.phone || "—"}\n` +
          `Participants : ${form.participants || "—"}\n` +
          `Date souhaitée : ${form.date || "—"}\n` +
          `Ville : ${form.city || "—"}\n` +
          `Type d'événement : ${form.eventType || "—"}\n\n` +
          `Message :\n${form.message || "—"}`,
      };
      const { error } = await supabase.functions.invoke("send-contact-email", { body });
      if (error) throw error;
      trackFormSubmit("quote", { atelier: atelierTitle });
      toast({ title: "Demande envoyée 🍀", description: "Réponse sous 24 à 48 heures." });
      setForm({ firstName: "", lastName: "", company: "", email: "", phone: "", participants: "", date: "", city: "", eventType: "", message: "" });
    } catch (err) {
      console.error(err);
      toast({ title: "Erreur", description: "Merci de réessayer plus tard.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <h3 className="font-display text-xl uppercase leading-none mb-1">Demander un devis</h3>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelCls}>Prénom *</label>
          <input required name="firstName" value={form.firstName} onChange={onChange} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Nom *</label>
          <input required name="lastName" value={form.lastName} onChange={onChange} className={inputCls} />
        </div>
      </div>
      <div>
        <label className={labelCls}>Entreprise (facultatif)</label>
        <input name="company" value={form.company} onChange={onChange} className={inputCls} />
      </div>
      <div>
        <label className={labelCls}>Email *</label>
        <input required type="email" name="email" value={form.email} onChange={onChange} className={inputCls} />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelCls}>Téléphone</label>
          <input name="phone" value={form.phone} onChange={onChange} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Participants</label>
          <input name="participants" value={form.participants} onChange={onChange} className={inputCls} placeholder="10-20" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelCls}>Date souhaitée</label>
          <input name="date" value={form.date} onChange={onChange} className={inputCls} placeholder="JJ/MM/AAAA" />
        </div>
        <div>
          <label className={labelCls}>Ville</label>
          <input name="city" value={form.city} onChange={onChange} className={inputCls} />
        </div>
      </div>
      <div>
        <label className={labelCls}>Type d'événement</label>
        <input name="eventType" value={form.eventType} onChange={onChange} className={inputCls} placeholder="Séminaire, anniversaire, QVCT…" />
      </div>
      <div>
        <label className={labelCls}>Message</label>
        <textarea name="message" value={form.message} onChange={onChange} rows={3} className={inputCls + " resize-none"} />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="btn-brutal bg-[hsl(var(--black))] text-[hsl(var(--cream))] border-[hsl(var(--black))] text-xs px-6 py-3 w-full justify-center inline-flex disabled:opacity-60"
      >
        {submitting ? "Envoi…" : "Recevoir mon devis →"}
      </button>
      <p className="text-[11px] text-[hsl(var(--black))]/60 text-center leading-tight">
        Réponse sous 24 à 48 heures.
      </p>
    </form>
  );
};

export default QuoteForm;
