import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";
import WaveDivider from "@/components/WaveDivider";
import { SEO } from "@/components/SEO";
import { Loader2, Mail, MapPin, Phone, Send, Clock, Calendar as CalendarIcon, Sparkles, ArrowRight, CheckCircle2, Download } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { trackFormSubmit } from "@/lib/analytics";
// Photo provisoire, à remplacer par l'image d'en-tête dédiée
import heroContact from "@/assets/gallery-herbier-toiles.webp";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(100, "Le nom doit faire moins de 100 caractères"),
  email: z.string().trim().email("Email invalide").max(255, "L'email doit faire moins de 255 caractères"),
  phone: z.string().trim().max(20, "Le téléphone doit faire moins de 20 caractères").optional().or(z.literal("")),
  organization: z.string().trim().max(150, "Le nom de l'organisme doit faire moins de 150 caractères").optional().or(z.literal("")),
  date: z.string().trim().max(100, "La date doit faire moins de 100 caractères").optional().or(z.literal("")),
  participants: z.string().trim().max(50, "Le nombre de participants doit faire moins de 50 caractères").optional().or(z.literal("")),
  location: z.string().trim().max(150, "Le lieu doit faire moins de 150 caractères").optional().or(z.literal("")),
  subject: z.string().trim().max(200, "Le sujet doit faire moins de 200 caractères"),
  message: z.string().trim().min(1, "Le message est requis").max(2000, "Le message doit faire moins de 2000 caractères"),
});

const prestationTypes = [
  "Atelier créatif",
  "Team building",
  "Animation événementielle / stand",
  "Conférence",
  "Médiation scientifique",
  "Balade botanique",
  "Animation EHPAD / Seniors",
  "Intervention scolaire",
  "Autre",
];

const profileTypes = [
  "Particulier",
  "Entreprise / CSE",
  "Agence événementielle",
  "Mairie / Collectivité",
  "École / Collège / Lycée",
  "Association / MJC",
  "EHPAD / Résidence seniors",
  "Médiathèque / Musée",
  "Autre institution",
];

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  prestation: "",
  profile: "",
  date: "",
  participants: "",
  location: "",
  subject: "",
  message: "",
};

const ETAPES = [
  { step: "01", title: "Réponse", desc: "Je vous réponds sous 24h ouvrées." },
  { step: "02", title: "Échange", desc: "On précise ensemble votre public, vos objectifs et le format." },
  { step: "03", title: "Proposition", desc: "Vous recevez un devis sur mesure, gratuit et sans engagement." },
];

const RACCOURCIS = [
  { to: "/team-building-nature-entreprise", label: "Entreprises & team building" },
  { to: "/animation-collectivites-mairies", label: "Collectivités & mairies" },
  { to: "/etablissements-scolaires", label: "Écoles & périscolaire" },
  { to: "/animation-seniors-ehpad", label: "EHPAD & seniors" },
  { to: "/animation-vegetale-agence-evenementielle", label: "Agences événementielles" },
];

const FAQ = [
  {
    q: "Quel délai pour organiser un atelier ?",
    a: "Idéalement trois à quatre semaines à l'avance, et six à huit semaines pour les périodes chargées comme Noël et le printemps.",
  },
  {
    q: "Comment sont calculés les tarifs ?",
    a: "Selon l'atelier, la durée, le nombre de participants et le lieu. Chaque devis est personnalisé et gratuit.",
  },
  {
    q: "Que faut-il prévoir sur place ?",
    a: "Des tables et un espace couvert. J'apporte tout le matériel, les plantes et les supports, et chaque participant repart avec sa création.",
  },
];

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

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
          message:
            `Profil : ${formData.profile || "Non précisé"}\nPrestation : ${formData.prestation || "Non précisé"}\nOrganisme : ${formData.organization || "—"}\nTéléphone : ${formData.phone || "—"}\n` +
            `Date souhaitée : ${formData.date || "—"}\nParticipants : ${formData.participants || "—"}\nLieu : ${formData.location || "—"}\n\n${formData.message}`,
        },
      });

      if (error) throw error;

      trackFormSubmit("contact", { profile: formData.profile || "unspecified", prestation: formData.prestation || "general" });
      setFormData(emptyForm);
      setSent(true);
      window.scrollTo({ top: document.getElementById("formulaire")?.offsetTop ?? 0, behavior: "smooth" });
    } catch (error: any) {
      console.error('Error sending email:', error);
      toast({ title: "Erreur lors de l'envoi", description: "Veuillez réessayer plus tard, ou écrire directement à contact@botaniqueludique.com.", variant: "destructive" });
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

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden px-6 pt-24 pb-24 md:pt-32 md:pb-28">
        <div className="absolute inset-0 bg-foreground">
          <img src={heroContact} alt="" className="w-full h-full object-cover opacity-35" />
        </div>
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-mono-brand text-[11px] md:text-[13px] uppercase tracking-[3px] text-olive-light mb-5">
              Parlons de votre projet
            </p>
            <h1 className="font-display text-[clamp(2.8rem,8vw,6rem)] uppercase leading-[0.9] tracking-[-2px] text-primary-foreground mb-6">
              Nous<br />
              <span className="text-olive-light">écrire</span>
            </h1>
            <p className="font-body text-xl md:text-[22px] italic text-primary-foreground/90 max-w-[620px] mx-auto leading-relaxed mb-10">
              Atelier, team building, conférence, balade ou événement : décrivez votre projet, je vous réponds rapidement.
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 font-mono-brand text-[11px] uppercase tracking-[2px] text-primary-foreground/85">
              <a href="mailto:contact@botaniqueludique.com" className="inline-flex items-center gap-2 hover:text-olive-light transition-colors">
                <Mail className="w-4 h-4 text-olive-light" /> contact@botaniqueludique.com
              </a>
              <a href="tel:+33609831606" className="inline-flex items-center gap-2 hover:text-olive-light transition-colors">
                <Phone className="w-4 h-4 text-olive-light" /> 06 09 83 16 06
              </a>
              <span className="inline-flex items-center gap-2">
                <Clock className="w-4 h-4 text-olive-light" /> Réponse sous 24h ouvrées
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <WaveDivider from="hsl(0,0%,10%)" to="hsl(36,33%,93%)" />

      <main id="formulaire" className="px-6 md:px-16 lg:px-[120px] pt-10 pb-20 scroll-mt-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_380px] gap-16 items-start">
          {/* ===== FORMULAIRE ===== */}
          <div>
            {sent ? (
              <div className="border-brutal bg-[hsl(var(--cream))] shadow-brutal-lg p-8 md:p-12" role="status">
                <CheckCircle2 className="w-10 h-10 text-primary mb-5" />
                <h2 className="font-display text-2xl md:text-3xl uppercase leading-[1] tracking-[-1px] mb-4">
                  Merci, votre message <span className="text-primary">est bien parti</span>
                </h2>
                <p className="text-base text-foreground/75 leading-relaxed mb-8 max-w-xl">
                  Je vous réponds sous 24h ouvrées, à l'adresse que vous avez indiquée. En attendant, vous pouvez découvrir les ateliers
                  en images ou les prochaines dates ouvertes à tous.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/gallery"
                    className="btn-brutal bg-primary text-primary-foreground border-foreground hover:bg-foreground text-xs px-7 py-3 inline-flex items-center gap-2"
                  >
                    Voir la galerie <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/agenda"
                    className="btn-brutal bg-[hsl(var(--cream))] text-foreground border-foreground hover:bg-[hsl(var(--green-pale))] text-xs px-7 py-3 inline-flex items-center gap-2"
                  >
                    Voir l'agenda <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="font-mono-brand text-[11px] uppercase tracking-[2px] underline underline-offset-4 text-foreground/70 hover:text-foreground"
                  >
                    Écrire un autre message
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* Bandeau réservation d'atelier */}
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
                  {/* Coordonnées */}
                  <div>
                    <h2 className="font-display text-xl uppercase tracking-[-0.5px] mb-8 pb-3 border-b-2 border-[hsl(var(--black))]">
                      Vos coordonnées
                    </h2>
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                      <div>
                        <label htmlFor="name" className={labelClass}>Nom & Prénom *</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required autoComplete="name" placeholder="Votre nom" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="email" className={labelClass}>Email *</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required autoComplete="email" placeholder="votre@email.com" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="phone" className={labelClass}>Téléphone</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} autoComplete="tel" placeholder="06 00 00 00 00" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="organization" className={labelClass}>Organisme / Structure</label>
                        <input type="text" id="organization" name="organization" value={formData.organization} onChange={handleChange} autoComplete="organization" placeholder="Nom de votre structure (facultatif)" className={inputClass} />
                      </div>
                    </div>
                  </div>

                  {/* Projet */}
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

                    {formData.profile === "Particulier" && (
                      <div className="mb-8 p-5 border-brutal bg-[hsl(var(--green-pale))] flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
                        <p className="text-sm text-foreground/80 leading-relaxed">
                          Vous cherchez un atelier ouvert à tous ? Les prochaines dates sont dans l'agenda, avec le lien d'inscription.
                        </p>
                        <Link
                          to="/agenda"
                          className="shrink-0 inline-flex items-center gap-2 font-mono-brand text-[11px] uppercase tracking-[2px] text-primary hover:gap-3 transition-all"
                        >
                          Voir l'agenda <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    )}

                    <div className="grid md:grid-cols-3 gap-x-8 gap-y-6 mb-6">
                      <div>
                        <label htmlFor="date" className={labelClass}>Date souhaitée</label>
                        <input type="text" id="date" name="date" value={formData.date} onChange={handleChange} placeholder="Ex. 12 mars, ou printemps" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="participants" className={labelClass}>Participants</label>
                        <input type="text" id="participants" name="participants" value={formData.participants} onChange={handleChange} inputMode="numeric" placeholder="Ex. 15" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="location" className={labelClass}>Ville ou lieu</label>
                        <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} placeholder="Ex. Versailles" className={inputClass} />
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
                        placeholder="Décrivez votre projet : public, objectifs, atelier qui vous intéresse…"
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
              </>
            )}
          </div>

          {/* ===== COLONNE ===== */}
          <aside className="lg:sticky lg:top-28 space-y-6">
            <div className="border-brutal bg-[hsl(var(--black))] text-[hsl(var(--cream))] p-8 shadow-brutal">
              <span className="font-mono-brand text-[10px] uppercase tracking-[2.5px] text-[hsl(var(--olive-light))] block mb-5">
                Coordonnées
              </span>
              <div className="space-y-5">
                <a href="mailto:contact@botaniqueludique.com" className="flex items-start gap-3 group">
                  <Mail className="w-4 h-4 text-[hsl(var(--olive-light))] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-[hsl(var(--cream))] group-hover:text-[hsl(var(--olive-light))] transition-colors">contact@botaniqueludique.com</p>
                </a>
                <a href="tel:+33609831606" className="flex items-start gap-3 group">
                  <Phone className="w-4 h-4 text-[hsl(var(--olive-light))] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-[hsl(var(--cream))] group-hover:text-[hsl(var(--olive-light))] transition-colors">06 09 83 16 06</p>
                    <p className="text-xs text-[hsl(var(--cream))]/50 mt-0.5">Du lundi au vendredi</p>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[hsl(var(--olive-light))] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-[hsl(var(--cream))]">Basée au Pecq (78)</p>
                    <p className="text-xs text-[hsl(var(--cream))]/50 mt-0.5">Partout en Île-de-France, 8 départements</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-brutal bg-[hsl(var(--cream))] p-8 shadow-brutal">
              <span className="font-mono-brand text-[10px] uppercase tracking-[2.5px] text-[hsl(var(--olive))] block mb-5">
                Comment ça se passe
              </span>
              <ol className="space-y-4">
                {ETAPES.map((e) => (
                  <li key={e.step} className="flex gap-4">
                    <span className="font-display text-2xl text-primary/40 leading-none">{e.step}</span>
                    <div>
                      <p className="font-display text-sm uppercase">{e.title}</p>
                      <p className="text-sm text-foreground/70 leading-snug">{e.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border-brutal bg-[hsl(var(--cream))] p-8 shadow-brutal">
              <span className="font-mono-brand text-[10px] uppercase tracking-[2.5px] text-[hsl(var(--olive))] block mb-4">
                Vous êtes un professionnel
              </span>
              <ul className="space-y-2.5">
                {RACCOURCIS.map((r) => (
                  <li key={r.to}>
                    <Link to={r.to} className="group flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 text-primary group-hover:translate-x-1 transition-transform" />
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <a
                href="/docs/dossier-evenementiel-botanique-ludique.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 pt-4 border-t-2 border-foreground/10 flex items-center gap-2 font-mono-brand text-[10px] uppercase tracking-[2px] text-foreground/70 hover:text-primary transition-colors"
              >
                <Download className="w-3.5 h-3.5" /> Dossier événementiel (PDF)
              </a>
            </div>
          </aside>
        </div>
      </main>

      {/* ===== FAQ ===== */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(36,25%,88%)" />
      <section className="pt-10 pb-20 px-6 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <span className="section-label block mb-3">Avant d'écrire</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] uppercase leading-[0.95] tracking-[-1px]">
              Questions <span className="text-primary">fréquentes</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {FAQ.map((item) => (
              <div key={item.q} className="border-brutal bg-[hsl(var(--cream))] p-6">
                <h3 className="font-display text-base uppercase tracking-[-0.5px] mb-2">{item.q}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <WaveDivider from="hsl(36,25%,88%)" to="hsl(0,0%,10%)" flip />

      <BackToTop />
      <Footer />
    </div>
  );
};

export default Contact;
