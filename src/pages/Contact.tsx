import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { SEO } from "@/components/SEO";
import { Loader2, Mail, MapPin, Phone, Send, Calendar as CalendarIcon, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { trackFormSubmit } from "@/lib/analytics";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(100, "Le nom doit faire moins de 100 caractères"),
  email: z.string().trim().email("Email invalide").max(255, "L'email doit faire moins de 255 caractères"),
  phone: z.string().trim().max(20, "Le téléphone doit faire moins de 20 caractères").optional().or(z.literal("")),
  organization: z.string().trim().max(150, "Le nom de l'organisme doit faire moins de 150 caractères").optional().or(z.literal("")),
  subject: z.string().trim().max(200, "Le sujet doit faire moins de 200 caractères"),
  message: z.string().trim().min(1, "Le message est requis").max(2000, "Le message doit faire moins de 2000 caractères"),
});

const prestationTypes = [
  "Atelier créatif",
  "Conférence",
  "Médiation scientifique",
  "Balade botanique",
  "Team building",
  "Animation EHPAD / Seniors",
  "Intervention scolaire",
  "Autre",
];

const profileTypes = [
  "Particulier",
  "Entreprise / CSE",
  "Mairie / Collectivité",
  "École / Collège / Lycée",
  "Association / MJC",
  "EHPAD / Résidence seniors",
  "Médiathèque / Musée",
  "Autre institution",
];

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    prestation: "",
    profile: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const atelierFromUrl = searchParams.get('atelier');
    const dateFromUrl = searchParams.get('date');
    const lieuFromUrl = searchParams.get('lieu');
    const subjectFromUrl = searchParams.get('subject');

    if (atelierFromUrl) {
      const decodedAtelier = decodeURIComponent(atelierFromUrl);
      const decodedDate = dateFromUrl ? decodeURIComponent(dateFromUrl) : null;
      const decodedLieu = lieuFromUrl ? decodeURIComponent(lieuFromUrl) : null;

      let subject = `Réservation : ${decodedAtelier}`;
      if (decodedDate) subject += ` | ${decodedDate}`;
      if (decodedLieu) subject += ` | ${decodedLieu}`;

      let message = `Bonjour,\n\nJe souhaite réserver l'atelier "${decodedAtelier}"`;
      if (decodedDate && decodedDate !== "Dates à venir") message += ` prévu le ${decodedDate}`;
      if (decodedLieu) message += ` à ${decodedLieu}`;
      message += `.\n\nMerci de me recontacter pour finaliser ma réservation.\n\nCordialement,`;

      setFormData(prev => ({
        ...prev,
        subject,
        prestation: "Atelier créatif",
        message: prev.message || message,
      }));
    } else if (subjectFromUrl) {
      setFormData(prev => ({ ...prev, subject: decodeURIComponent(subjectFromUrl) }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      contactSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({ title: "Erreur de validation", description: error.errors[0].message, variant: "destructive" });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          subject: `[${formData.profile || "Non précisé"}] ${formData.prestation || "Général"} — ${formData.subject}`,
          message: `Profil : ${formData.profile || "Non précisé"}\nPrestation : ${formData.prestation || "Non précisé"}\nOrganisme : ${formData.organization || "—"}\nTéléphone : ${formData.phone || "—"}\n\n${formData.message}`,
        },
      });

      if (error) throw error;

      trackFormSubmit("contact", { profile: formData.profile || "unspecified", prestation: formData.prestation || "general" });
      toast({ title: "Merci beaucoup pour votre petit mot 🍀", description: "On vous répond au plus vite !" });
      setFormData({ name: "", email: "", phone: "", organization: "", prestation: "", profile: "", subject: "", message: "" });
    } catch (error: any) {
      console.error('Error sending email:', error);
      toast({ title: "Erreur lors de l'envoi", description: "Veuillez réessayer plus tard.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const atelierFromUrl = searchParams.get('atelier');
  const dateFromUrl = searchParams.get('date');
  const lieuFromUrl = searchParams.get('lieu');

  const inputClass = "w-full px-0 py-3 bg-transparent text-[hsl(var(--black))] border-0 border-b-2 border-[hsl(var(--black))]/20 focus:border-[hsl(var(--olive))] focus:outline-none transition-colors placeholder:text-[hsl(var(--black))]/30 font-body text-base";
  const selectClass = "w-full px-0 py-3 bg-transparent text-[hsl(var(--black))] border-0 border-b-2 border-[hsl(var(--black))]/20 focus:border-[hsl(var(--olive))] focus:outline-none transition-colors font-body text-base appearance-none cursor-pointer";
  const labelClass = "block font-mono-brand text-[10px] uppercase tracking-[2.5px] text-[hsl(var(--olive))] mb-1";

  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SEO
        title="Contact et réservation d'atelier botanique"
        description="Contactez Botanique Ludique pour réserver un atelier botanique, une balade ou une intervention sur mesure à Paris et en Île-de-France."
        keywords="contact atelier botanique, réserver kokedama, devis formation botanique, contact Botanique Ludique"
        canonical="/contact"
      />
      <Navigation />

      <main className="pt-28 pb-24">
        {/* Hero */}
        <div className="px-6 md:px-16 lg:px-[120px] mb-20">
          <AnimatedSection>
            <span className="section-label block mb-5">Parlons de votre projet</span>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] uppercase leading-[0.9] tracking-[-3px] mb-6">
              Nous<br />
              <span className="text-[hsl(var(--olive))]">Écrire</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="text-lg leading-[1.7] text-[hsl(var(--black))]/70 max-w-[550px]">
              Atelier, conférence, médiation, balade botanique… Décrivez votre projet, on vous répond au plus vite.
            </p>
          </AnimatedSection>
        </div>

        <div className="px-6 md:px-16 lg:px-[120px]">
          <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-start">
            {/* Form */}
            <AnimatedSection delay={150}>
              {/* Atelier Banner */}
              {atelierFromUrl && (
                <div className="mb-10 p-6 border-brutal bg-[hsl(var(--green-pale))]">
                  <div className="flex items-start gap-4">
                    <Sparkles className="w-6 h-6 text-[hsl(var(--olive))] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-mono-brand text-[10px] uppercase tracking-[2px] text-[hsl(var(--olive))] mb-1">Vous souhaitez réserver</p>
                      <p className="font-display text-lg uppercase text-[hsl(var(--black))]">{decodeURIComponent(atelierFromUrl)}</p>
                      <div className="flex flex-wrap gap-3 mt-2 text-sm text-[hsl(var(--black))]/60">
                        {dateFromUrl && (
                          <span className="inline-flex items-center gap-1.5">
                            <CalendarIcon className="w-3.5 h-3.5" /> {decodeURIComponent(dateFromUrl)}
                          </span>
                        )}
                        {lieuFromUrl && (
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5" /> {decodeURIComponent(lieuFromUrl)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Identity */}
                <div>
                  <h2 className="font-display text-xl uppercase tracking-[-0.5px] mb-8 pb-3 border-b-2 border-[hsl(var(--black))]">
                    Vos coordonnées
                  </h2>
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                    <div>
                      <label htmlFor="name" className={labelClass}>Nom & Prénom *</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Votre nom" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>Email *</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="votre@email.com" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>Téléphone</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="06 00 00 00 00" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="organization" className={labelClass}>Organisme / Structure</label>
                      <input type="text" id="organization" name="organization" value={formData.organization} onChange={handleChange} placeholder="Nom de votre structure (facultatif)" className={inputClass} />
                    </div>
                  </div>
                </div>

                {/* Project */}
                <div>
                  <h2 className="font-display text-xl uppercase tracking-[-0.5px] mb-8 pb-3 border-b-2 border-[hsl(var(--black))]">
                    Votre projet
                  </h2>
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 mb-6">
                    <div>
                      <label htmlFor="profile" className={labelClass}>Vous êtes</label>
                      <div className="relative">
                        <select id="profile" name="profile" value={formData.profile} onChange={handleChange} className={selectClass}>
                          <option value="">— Sélectionnez —</option>
                          {profileTypes.map(p => <option key={p} value={p}>{p}</option>)}
                        </select>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[hsl(var(--black))]/40">▾</div>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="prestation" className={labelClass}>Type de prestation</label>
                      <div className="relative">
                        <select id="prestation" name="prestation" value={formData.prestation} onChange={handleChange} className={selectClass}>
                          <option value="">— Sélectionnez —</option>
                          {prestationTypes.map(p => <option key={p} value={p}>{p}</option>)}
                        </select>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[hsl(var(--black))]/40">▾</div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject" className={labelClass}>Sujet</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="En quelques mots…" className={inputClass} />
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>Votre message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Décrivez votre projet : nombre de participants, date souhaitée, lieu, public visé…"
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-brutal bg-[hsl(var(--olive))] text-[hsl(var(--cream))] border-[hsl(var(--olive))] hover:bg-[hsl(var(--cream))] hover:text-[hsl(var(--black))] hover:border-[hsl(var(--black))] text-xs px-10 py-4 inline-flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Envoi en cours…
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection delay={300} direction="right">
              <div className="lg:sticky lg:top-28 space-y-6">
                {/* Contact info card */}
                <div className="border-brutal bg-[hsl(var(--black))] text-[hsl(var(--cream))] p-8 shadow-brutal">
                  <span className="font-mono-brand text-[10px] uppercase tracking-[2.5px] text-[hsl(var(--olive-light))] block mb-5">
                    Coordonnées
                  </span>
                  <div className="space-y-5">
                    <a href="mailto:contact@botaniqueludique.com" className="flex items-start gap-3 group">
                      <Mail className="w-4 h-4 text-[hsl(var(--olive-light))] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-[hsl(var(--cream))] group-hover:text-[hsl(var(--olive-light))] transition-colors">contact@botaniqueludique.com</p>
                      </div>
                    </a>
                    <a href="tel:+33609831606" className="flex items-start gap-3 group">
                      <Phone className="w-4 h-4 text-[hsl(var(--olive-light))] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-[hsl(var(--cream))] group-hover:text-[hsl(var(--olive-light))] transition-colors">06 09 83 16 06</p>
                        <p className="text-xs text-[hsl(var(--cream))]/40 mt-0.5">Du lundi au vendredi</p>
                      </div>
                    </a>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[hsl(var(--olive-light))] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-[hsl(var(--cream))]">Paris & Île-de-France</p>
                        <p className="text-xs text-[hsl(var(--cream))]/40 mt-0.5">75 · 78 · 92 · 95</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Guarantee */}
                <div className="border-brutal bg-[hsl(var(--olive))] text-[hsl(var(--cream))] p-8 shadow-brutal">
                  <span className="font-display text-3xl leading-none mb-3 block">🍀</span>
                  <p className="font-mono-brand text-[10px] uppercase tracking-[2px] mb-3">On vous répond au plus vite</p>
                  <p className="text-sm text-[hsl(var(--cream))]/70 leading-relaxed">
                    Nous étudions chaque demande avec attention et vous recontactons dans les meilleurs délais.
                  </p>
                </div>

                {/* What we offer */}
                <div className="border-brutal p-8 shadow-brutal">
                  <span className="font-mono-brand text-[10px] uppercase tracking-[2.5px] text-[hsl(var(--olive))] block mb-4">
                    Nos prestations
                  </span>
                  <ul className="space-y-2.5">
                    {["Ateliers créatifs botaniques", "Conférences ethnobotaniques", "Médiation scientifique", "Balades botaniques", "Team building nature", "Animations EHPAD & seniors", "Interventions scolaires"].map(item => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-[hsl(var(--black))]/70">
                        <span className="w-1.5 h-1.5 bg-[hsl(var(--olive))] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
