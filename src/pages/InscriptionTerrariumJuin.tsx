import { useState } from "react";
import { SEO } from "@/components/SEO";
import { Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import InscriptionLayout from "@/components/InscriptionLayout";
import { trackFormSubmit } from "@/lib/analytics";
import fittoniaPotsImage from "@/assets/gallery-fittonia-pots.jpg";
import terrariumEnfantsFabricationImage from "@/assets/gallery-terrarium-enfants-fabrication.jpg";
import tradescantiaImage from "@/assets/gallery-tradescantia-bouture.jpg";

const inputCls =
  "w-full bg-cream border-[3px] border-foreground focus:bg-yellow outline-none px-3 py-2.5 font-body text-sm text-foreground placeholder:text-foreground/70 transition-colors";
const labelCls =
  "block font-mono text-[10px] uppercase tracking-[2px] font-bold text-foreground mb-2";

// Stock disponible (à décrémenter manuellement au fil des inscriptions)
const STOCK_3L = 4;
const STOCK_5L = 2;

const PRICE_3L = 12;
const PRICE_5L = 20;

type JarSize = "3L" | "5L";

const InscriptionTerrariumJuin = () => {
  const { toast } = useToast();

  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    jarSize: "3L" as JarSize,
    nombrePersonnes: "1",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const unitPrice = form.jarSize === "5L" ? PRICE_5L : PRICE_3L;
  const stockForSize = form.jarSize === "5L" ? STOCK_5L : STOCK_3L;
  const maxPeople = Math.min(4, stockForSize);

  const price = () => {
    const peopleCount = Number(form.nombrePersonnes) || 1;
    const total = unitPrice * peopleCount;
    return `${total}€ pour ${peopleCount} personne${peopleCount > 1 ? "s" : ""}`;
  };

  const jarLabel = form.jarSize === "5L" ? "Bocal de 5 litres" : "Bocal de 3 litres";
  const jarLabelLong = `${jarLabel} (boutures et terre incluses)`;

  const handleJarChange = (size: JarSize) => {
    const newMax = Math.min(4, size === "5L" ? STOCK_5L : STOCK_3L);
    setForm((p) => ({
      ...p,
      jarSize: size,
      nombrePersonnes: Number(p.nombrePersonnes) > newMax ? String(newMax) : p.nombrePersonnes,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const registrationId = crypto.randomUUID();
      const fullName = `${form.prenom} ${form.nom}`;

      const { error: confirmError } = await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "wardian-case-juin-registration",
          recipientEmail: form.email,
          idempotencyKey: `wardian-juin-confirm-${registrationId}`,
          templateData: {
            firstName: form.prenom,
            name: fullName,
            userMessage: form.message || undefined,
            jarSize: form.jarSize === "5L" ? "5 litres" : "3 litres",
            participantCount: form.nombrePersonnes,
            totalPrice: price(),
          },
        },
      });

      if (confirmError) throw confirmError;

      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "wardian-case-admin-notification",
          recipientEmail: "botaniqueludique@gmail.com",
          idempotencyKey: `wardian-juin-admin-${registrationId}`,
          templateData: {
            fullName,
            email: form.email,
            phone: form.telephone || "Non renseigné",
            participants: form.nombrePersonnes,
            aurore: "Non",
            bocal: `${jarLabelLong} — ${unitPrice}€/personne`,
            price: price(),
            message: form.message || undefined,
            eventDate: "Samedi 6 juin 2026, 16h00",
            eventLocation: "La Rochefoucauld, Paris 14e",
          },
        },
      });

      toast({
        title: "Inscription envoyée",
        description: "Un email de confirmation vous a été envoyé. Nous reviendrons vers vous très vite.",
      });

      trackFormSubmit("inscription_terrarium_juin", {
        participants: Number(form.nombrePersonnes) || 1,
      });

      setForm({ nom: "", prenom: "", email: "", telephone: "", jarSize: "3L", nombrePersonnes: "1", message: "" });
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
        title="Inscription Atelier Terrarium, 6 juin 2026 à Paris 14e"
        description="Inscrivez-vous à l'atelier Wardian Case du 6 juin 2026 : histoire culturelle du terrarium et fabrication. Bocal 3L (12€) ou 5L verre recyclé bouchon liège (20€), boutures et terre fournis."
        canonical="/inscription/terrarium-6-juin"
      />
      <InscriptionLayout
        eyebrow="Inscription / Atelier"
        title="Wardian Case, 6 juin"
        intro="Plongez dans l'histoire fascinante du terrarium, de la Wardian Case victorienne aux enjeux coloniaux, puis fabriquez votre propre terrarium dans un bocal de 3 ou 5 litres."
        description="Atelier maintenu à partir de 6 inscriptions. Bocal (3L ou 5L), boutures, terre et matériel entièrement fournis. Vous repartez avec votre création."
        date="Sam. 6 juin 2026"
        time="16h00"
        location="La Rochefoucauld, Paris 14e"
        audience="12 participant·es max"
        pricing={
          <ul className="space-y-1.5 font-body text-sm text-foreground/80">
            <li>· <strong>12€</strong> par personne pour un bocal de 3 litres</li>
            <li>· <strong>20€</strong> par personne pour un bocal de 5 litres en verre recyclé, bouchon liège</li>
            <li>· Boutures, terre et matériel fournis</li>
            <li>· Stock limité : {STOCK_3L} bocaux 3L et {STOCK_5L} bocaux 5L restants</li>
            <li>· Atelier maintenu à partir de 6 inscriptions</li>
            <li>· Paiement sur place le jour de l'atelier, en espèces</li>
          </ul>
        }
      >
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <figure className="border-brutal shadow-brutal overflow-hidden bg-cream">
            <img
              src={fittoniaPotsImage}
              alt="Fittonia et plantes prêtes à être plantées en terrarium"
              loading="lazy"
              className="w-full h-56 object-cover"
            />
            <figcaption className="font-mono text-[10px] uppercase tracking-[2px] text-foreground/70 px-3 py-2 border-t-[3px] border-foreground">
              Les boutures fournies (Fittonia, mousses…)
            </figcaption>
          </figure>
          <figure className="border-brutal shadow-brutal overflow-hidden bg-cream">
            <img
              src={terrariumEnfantsFabricationImage}
              alt="Participant·es en train de fabriquer leur terrarium en atelier"
              loading="lazy"
              className="w-full h-56 object-cover"
            />
            <figcaption className="font-mono text-[10px] uppercase tracking-[2px] text-foreground/70 px-3 py-2 border-t-[3px] border-foreground">
              L'atelier de fabrication en bocal
            </figcaption>
          </figure>
          <figure className="border-brutal shadow-brutal overflow-hidden bg-cream">
            <img
              src={tradescantiaImage}
              alt="Bouture de Tradescantia zebrina aux feuilles argentées et violettes"
              loading="lazy"
              className="w-full h-56 object-cover"
            />
            <figcaption className="font-mono text-[10px] uppercase tracking-[2px] text-foreground/70 px-3 py-2 border-t-[3px] border-foreground">
              Tradescantia, autre bouture proposée
            </figcaption>
          </figure>
        </div>

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
            <label className={labelCls}>Taille du bocal *</label>
            <div className="grid sm:grid-cols-2 gap-3">
              {([
                { size: "3L" as const, label: "Bocal 3 litres", price: PRICE_3L, stock: STOCK_3L },
                { size: "5L" as const, label: "Bocal 5 litres", price: PRICE_5L, stock: STOCK_5L },
              ]).map((opt) => {
                const disabled = opt.stock <= 0;
                const selected = form.jarSize === opt.size;
                return (
                  <button
                    type="button"
                    key={opt.size}
                    disabled={disabled}
                    onClick={() => handleJarChange(opt.size)}
                    className={`text-left border-[3px] border-foreground p-4 transition-colors ${
                      selected ? "bg-yellow" : "bg-cream hover:bg-yellow/40"
                    } ${disabled ? "opacity-40 cursor-not-allowed" : ""}`}
                  >
                    <div className="font-display uppercase text-base tracking-tight">{opt.label}</div>
                    <div className="font-mono text-[11px] uppercase tracking-[1.5px] mt-1">
                      {opt.price}€ / personne
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-[1.5px] text-foreground/60 mt-1">
                      {disabled ? "Épuisé" : `${opt.stock} restant${opt.stock > 1 ? "s" : ""}`}
                    </div>
                  </button>
                );
              })}
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[1.5px] text-foreground/60 mt-2">
              Stock limité, premiers inscrits premiers servis.
            </p>
          </div>

          <div>
            <label className={labelCls}>Nombre de personnes *</label>
            <select required value={form.nombrePersonnes} onChange={(e) => setForm((p) => ({ ...p, nombrePersonnes: e.target.value }))} className={inputCls}>
              {Array.from({ length: Math.max(1, maxPeople) }, (_, i) => i + 1).map((n) => (
                <option key={n} value={String(n)}>{n} personne{n > 1 ? "s" : ""}</option>
              ))}
            </select>
            <p className="font-mono text-[10px] uppercase tracking-[1.5px] text-foreground/60 mt-2">
              Limité au stock disponible pour la taille choisie.
            </p>
          </div>

          <div>
            <label className={labelCls}>Message (optionnel)</label>
            <textarea maxLength={500} value={form.message} onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))} rows={3} className={`${inputCls} resize-none`} placeholder="Question, allergie, besoin spécifique..." />
          </div>

          <div className="border-brutal bg-yellow p-4 text-center">
            <span className="font-mono text-[10px] uppercase tracking-[2px] text-foreground/60 block mb-1">Tarif estimé</span>
            <span className="font-display text-2xl uppercase tracking-tight">{price()}</span>
            <span className="font-mono text-[10px] uppercase tracking-[1.5px] text-foreground/60 block mt-1">{jarLabel}</span>
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
            Email de confirmation envoyé. Paiement sur place le jour de l'atelier, en espèces.
          </p>
        </form>
      </InscriptionLayout>
    </>
  );
};

export default InscriptionTerrariumJuin;
