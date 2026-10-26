import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import WaveDivider from "@/components/WaveDivider";
import { Users, Building2, Heart, Calendar, Mail, Phone, Loader2, Clock, GraduationCap, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { trackFormSubmit } from "@/lib/analytics";
import heroPro from "@/assets/cta-workshop-group.webp";
import imgEntreprises from "@/assets/gallery-terrarium-adultes-groupe.jpg";
import imgEcoles from "@/assets/gallery-teinture-enfants-2.jpg";
import imgCollectivites from "@/assets/gallery-atelier-epices-table.webp";
import imgSeniors from "@/assets/gallery-kokedama-collection.jpg";
import imgEvenements from "@/assets/gallery-tataki-zome-atelier-table.webp";
import AnimatedSection from "@/components/AnimatedSection";
import BackToTop from "@/components/BackToTop";
import Testimonials from "@/components/Testimonials";
import SocialProofBar from "@/components/SocialProofBar";

const quoteSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(100),
  organization: z.string().trim().min(1, "Le nom de l'organisation est requis").max(200),
  email: z.string().trim().email("Email invalide").max(255),
  phone: z.string().trim().max(20).optional(),
  city: z.string().trim().max(100).optional(),
  participants: z.string().trim().max(50).optional(),
  eventType: z.string().trim().min(1, "Le type d'événement est requis").max(200),
  date: z.string().optional(),
  message: z.string().trim().max(2000).optional(),
});

const Pro = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    city: "",
    participants: "",
    eventType: "",
    date: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      quoteSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({ title: "Erreur de validation", description: error.errors[0].message, variant: "destructive" });
      }
      return;
    }
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('send-b2b-quote-email', { body: formData });
      if (error) throw error;
      trackFormSubmit("b2b_quote", { event_type: formData.eventType });
      toast({ title: "Demande envoyée !", description: "Nous vous contacterons dans les plus brefs délais (sous 24h)." });
      setFormData({ name: "", organization: "", email: "", phone: "", city: "", participants: "", eventType: "", date: "", message: "" });
    } catch (error: any) {
      console.error('Error sending B2B quote request:', error);
      toast({ title: "Erreur lors de l'envoi", description: "Une erreur est survenue. Veuillez réessayer.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const clientTypes = [
    {
      icon: Building2,
      title: "Entreprises & CSE",
      subtitle: "Team building & RSE",
      description: "Cohésion d'équipe, séminaires, démarche RSE et bien-être au travail : des ateliers où l'on fabrique ensemble, dans vos locaux ou en extérieur.",
      formats: ["Kokedama d'équipe, 2h30", "Teinture végétale collaborative, 3h", "Terrarium en équipe, 2h"],
      image: imgEntreprises,
      imageAlt: "Collègues fabriquant des terrariums en bocal lors d'un atelier en entreprise",
      to: "/team-building-nature-entreprise",
      id: "entreprises",
    },
    {
      icon: GraduationCap,
      title: "Écoles & périscolaire",
      subtitle: "Primaire, collège, lycée",
      description: "Interventions adaptées aux programmes de SVT, d'EMC et de géographie, en classe, en sortie ou en temps périscolaire.",
      formats: ["Espèces exotiques envahissantes", "Biodiversité urbaine et plantes sauvages", "Ethnobotanique et histoire des plantes"],
      image: imgEcoles,
      imageAlt: "Enfant peignant un tee-shirt avec un pigment végétal de betterave",
      to: "/etablissements-scolaires",
      id: "scolaires",
    },
    {
      icon: Users,
      title: "Collectivités & médiathèques",
      subtitle: "Mairies, MJC, centres sociaux",
      description: "Des temps forts qui créent du lien autour du végétal, pour vos habitants, vos lecteurs et vos événements de saison.",
      formats: ["Ateliers parent-enfant et familles", "Fête de la Nature, Fête de la Science, Semaine Bleue", "Balades ethnobotaniques"],
      image: imgCollectivites,
      imageAlt: "Table d'atelier couverte de bols d'épices lors d'un atelier en bibliothèque",
      to: "/animation-collectivites-mairies",
      id: "collectivites",
    },
    {
      icon: Heart,
      title: "EHPAD & seniors",
      subtitle: "Ateliers sensoriels et bien-être",
      description: "Toucher, odeurs, souvenirs de jardin : des ateliers adaptés aux résidents, seuls ou en rencontre avec des enfants.",
      formats: ["Stimulation sensorielle", "Souvenirs et mémoire autour des plantes", "Rencontres intergénérationnelles"],
      image: imgSeniors,
      imageAlt: "Kokedamas ficelés réalisés en atelier, posés sur des assiettes",
      to: "/animation-seniors-ehpad",
      id: "ehpad",
    },
    {
      icon: Calendar,
      title: "Événements",
      subtitle: "Festivals, salons, fêtes",
      description: "Des animations botaniques sur mesure pour un festival, une inauguration ou les fêtes de fin d'année.",
      formats: ["Stands interactifs en flux continu", "Inaugurations et lancements", "Noël et fêtes de fin d'année"],
      image: imgEvenements,
      imageAlt: "Participants imprimant des feuilles et des fleurs sur tissu par martelage, technique du tataki zomé",
      to: "/atelier-botanique-evenement",
      id: "evenementiel",
    },
  ];

  const sectorPages = [
    { to: "/hortitherapie-hopital-clinique", label: "Hôpital, clinique, hortithérapie" },
    { to: "/animation-nature-universite-bde", label: "Université, grande école, BDE" },
    { to: "/animation-nature-bailleurs-sociaux", label: "Bailleur social, ESH, ANRU" },
    { to: "/mediation-vegetale-architectes-paysagistes", label: "Architecte, paysagiste, MOE" },
    { to: "/atelier-vegetal-parentalite-naissance", label: "Maternité, PMI, parentalité" },
    { to: "/animation-vegetale-agence-evenementielle", label: "Agence événementielle, presse, lancement" },
    { to: "/animation-vegetale-hotel-evenementiel", label: "Hôtel, lieu événementiel premium" },
    { to: "/balade-ethnobotanique-office-tourisme", label: "Office de tourisme, patrimoine" },
    { to: "/atelier-vegetal-cabinet-rh-coach", label: "Cabinet RH, coach, consultant·e" },
    { to: "/marches-publics", label: "Marchés publics : SIRET, RC Pro, Chorus Pro" },
  ];

  const faqs = [
    { q: "Que fournissez-vous ?", a: "Tout est inclus et clé en main : matériel, outils, matières premières, protections et supports pédagogiques. Chaque participant repart avec sa création." },
    { q: "Où intervenez-vous ?", a: "Partout en Île-de-France : Paris (75), Seine-et-Marne (77), Yvelines (78), Essonne (91), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94) et Val-d'Oise (95). Nous nous déplaçons dans vos locaux." },
    { q: "Comment sont calculés les tarifs ?", a: "Les tarifs dépendent du type d'atelier, durée, nombre de participants et lieu. Chaque devis est personnalisé et gratuit." },
    { q: "Quel délai de réservation ?", a: "Idéalement 3 à 4 semaines. Pour les périodes chargées (Noël, printemps), prévoyez 6 à 8 semaines." },
    { q: "Combien de participants ?", a: "10 à 15 par animateur. Pour les grands groupes (20-50), nous organisons des rotations ou mobilisons des animateurs supplémentaires." },
    { q: "Politique d'annulation ?", a: "Annulation gratuite jusqu'à 14 jours avant. Entre 14 et 7 jours : 50% conservé. Moins de 7 jours : acompte non remboursable." },
  ];

  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SEO 
        title="Interventions pédagogiques pour collèges, lycées & entreprises — Botanique Ludique"
        description="Ateliers de botanique sur mesure pour établissements scolaires, collectivités et entreprises. Team building nature, animations SVT. Île-de-France."
        keywords="team building botanique, team building RSE Paris, team building végétal, animation développement durable, intervention scolaire botanique 78, atelier nature entreprise, animation SVT plantes, sortie pédagogique plantes sauvages"
        canonical="/pro"
      />
      <SchemaOrg 
        type="Service"
        data={{
          serviceType: "Team Building et Animations Botaniques",
          name: "Ateliers Botaniques pour Professionnels",
          description: "Team building botanique, interventions scolaires, animations EHPAD et collectivités à Paris et Île-de-France",
        }}
      />
      <SchemaOrg
        type="FAQPage"
        data={{
          questions: faqs.map(f => ({ question: f.q, answer: f.a }))
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        data={{ items: [
          { name: "Accueil", url: "https://botaniqueludique.com/" },
          { name: "Pro", url: "https://botaniqueludique.com/pro" }
        ]}}
      />
      <Navigation />

      {/* ═══════════════════════════════════════════ */}
      {/* HERO */}
      {/* ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-6 pt-24 pb-24 md:pt-32 md:pb-28">
        <div className="absolute inset-0 bg-foreground">
          <img src={heroPro} alt="" className="w-full h-full object-cover opacity-35" />
        </div>
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-mono-brand text-[11px] md:text-[13px] uppercase tracking-[3px] text-olive-light mb-5">
              Professionnels · Institutions · Collectivités
            </p>
            <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] uppercase leading-[0.9] tracking-[-2px] text-primary-foreground mb-6">
              Botanique<br />
              <span className="text-olive-light">sur mesure</span>
            </h1>
            <p className="font-body text-xl md:text-[22px] italic text-primary-foreground/90 max-w-[680px] mx-auto leading-relaxed mb-10">
              Ateliers et médiations autour du vivant pour les entreprises, les écoles, les collectivités et les EHPAD, partout en Île-de-France.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#devis"
                className="btn-brutal bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-8 py-3 inline-flex items-center gap-2"
                style={{ borderColor: "hsl(var(--cream))" }}
              >
                Demander un devis <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+33609831606"
                className="btn-brutal bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-8 py-3 inline-flex items-center gap-2"
                style={{ borderColor: "hsl(var(--cream))" }}
              >
                <Phone className="w-4 h-4" /> 06 09 83 16 06
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <WaveDivider from="hsl(0,0%,10%)" to="hsl(36,33%,93%)" />

      {/* ═══════════════════════════════════════════ */}
      {/* PREUVE SOCIALE */}
      {/* ═══════════════════════════════════════════ */}
      <SocialProofBar />

      {/* ═══════════════════════════════════════════ */}
      {/* PUBLICS */}
      {/* ═══════════════════════════════════════════ */}
      <section className="pt-20 pb-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <span className="section-label block mb-3">Nos solutions</span>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] uppercase leading-[0.95] tracking-[-1px]">
              Pour chaque <span className="text-primary">structure</span>
            </h2>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-8">
            {clientTypes.map((client) => (
              <article
                key={client.id}
                id={client.id}
                className="scroll-mt-28 w-full sm:w-[calc(50%-1rem)] lg:w-[calc((100%-4rem)/3)] flex flex-col border-brutal bg-[hsl(var(--cream))] transition-all duration-300 hover:-translate-y-1 hover:shadow-brutal-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b-[3px] border-foreground bg-secondary">
                  <img src={client.image} alt={client.imageAlt} loading="lazy" className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 font-mono-brand text-[9px] uppercase tracking-[2px] px-3 py-1.5 border-brutal-thin bg-[hsl(var(--cream))] flex items-center gap-1.5">
                    <client.icon className="w-3 h-3" /> {client.subtitle}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl uppercase leading-[1.05] tracking-[-0.5px] mb-3">{client.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-5">{client.description}</p>
                  <ul className="space-y-2 mb-6">
                    {client.formats.map((format) => (
                      <li key={format} className="flex items-start gap-2 text-sm text-foreground/80">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-primary flex-shrink-0" />
                        {format}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={client.to}
                    className="mt-auto inline-flex items-center gap-2 font-mono-brand text-[11px] uppercase tracking-[2px] text-primary hover:gap-3 transition-all"
                  >
                    Voir la page dédiée <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* DÉROULEMENT */}
      {/* ═══════════════════════════════════════════ */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(36,25%,88%)" />
      <section className="pt-10 pb-20 px-4 md:px-8 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <span className="section-label block mb-3">Comment ça marche</span>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] uppercase leading-[0.95] tracking-[-1px]">
              Déroulement <span className="text-primary">d'un atelier</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Accueil", duration: "10 min", desc: "Présentation du thème, des plantes et des matériaux." },
              { step: "02", title: "Récit et démonstration", duration: "15 à 20 min", desc: "L'histoire des plantes du jour, puis les gestes pas à pas." },
              { step: "03", title: "Création", duration: "1h à 2h30", desc: "Réalisation guidée, avec un accompagnement individuel." },
              { step: "04", title: "Clôture", duration: "10 min", desc: "Échanges, photos de groupe, chacun repart avec sa création." },
            ].map((item) => (
              <div key={item.step} className="p-6 border-brutal bg-[hsl(var(--cream))] -ml-[3px] -mt-[3px]">
                <span className="font-display text-5xl text-primary/30 block mb-3">{item.step}</span>
                <h3 className="font-display text-lg uppercase tracking-[-0.5px] mb-1">{item.title}</h3>
                <p className="font-mono-brand text-[9px] uppercase tracking-[2px] text-primary mb-3">{item.duration}</p>
                <p className="text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <WaveDivider from="hsl(36,25%,88%)" to="hsl(36,33%,93%)" flip />

      {/* ═══════════════════════════════════════════ */}
      {/* TÉMOIGNAGES */}
      {/* ═══════════════════════════════════════════ */}
      <section className="pt-10 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Testimonials />
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* SECTEURS SPÉCIALISÉS */}
      {/* ═══════════════════════════════════════════ */}
      <section className="pb-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto border-brutal bg-[hsl(var(--cream))] p-8 md:p-10">
          <span className="section-label block mb-3">Votre secteur</span>
          <h2 className="font-display text-xl md:text-2xl uppercase leading-[1.05] tracking-[-0.5px] mb-6">
            Des pages dédiées à votre métier
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
            {sectorPages.map((s) => (
              <li key={s.to}>
                <Link to={s.to} className="group flex items-start gap-2 text-sm leading-snug hover:text-primary transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 mt-0.5 text-primary flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span>{s.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* FAQ */}
      {/* ═══════════════════════════════════════════ */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(36,25%,88%)" />
      <section className="pt-10 pb-20 px-4 md:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="section-label block mb-3">FAQ</span>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] uppercase leading-[0.95] tracking-[-1px]">
              Questions <span className="text-primary">fréquentes</span>
            </h2>
          </AnimatedSection>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="border-brutal bg-[hsl(var(--cream))] p-6 md:p-8">
                <h3 className="font-display text-base md:text-lg uppercase tracking-[-0.5px] mb-3 flex items-start gap-3">
                  <span className="font-mono-brand text-[10px] text-primary mt-1 shrink-0">0{i + 1}</span>
                  {faq.q}
                </h3>
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed pl-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <WaveDivider from="hsl(36,25%,88%)" to="hsl(36,33%,93%)" flip />

      {/* ═══════════════════════════════════════════ */}
      {/* DEVIS FORM */}
      {/* ═══════════════════════════════════════════ */}
      <section id="devis" className="py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left info */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <span className="section-label block mb-4">Nous écrire</span>
                <h2 className="font-display text-[clamp(2rem,4vw,3rem)] uppercase leading-[0.9] tracking-[-1px] text-[hsl(var(--black))] mb-6">
                  Parlons de<br />
                  <span className="text-[hsl(var(--olive))]">votre projet</span>
                </h2>
                <p className="text-[hsl(var(--black))]/70 leading-relaxed mb-8">
                  Décrivez-nous votre besoin et nous vous répondons avec une proposition personnalisée.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 border-brutal flex items-center justify-center bg-[hsl(var(--olive))]/10">
                      <Clock className="w-5 h-5 text-[hsl(var(--olive))]" />
                    </div>
                    <div>
                      <p className="font-display text-sm uppercase">Réponse sous 24h</p>
                      <p className="text-xs text-[hsl(var(--black))]/50">Jours ouvrés</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 border-brutal flex items-center justify-center bg-[hsl(var(--olive))]/10">
                      <Mail className="w-5 h-5 text-[hsl(var(--olive))]" />
                    </div>
                    <div>
                      <a href="mailto:contact@botaniqueludique.com" className="text-sm hover:text-[hsl(var(--olive))] transition-colors">
                        contact@botaniqueludique.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 border-brutal flex items-center justify-center bg-[hsl(var(--olive))]/10">
                      <Phone className="w-5 h-5 text-[hsl(var(--olive))]" />
                    </div>
                    <div>
                      <a href="tel:+33609831606" className="text-sm hover:text-[hsl(var(--olive))] transition-colors">
                        06 09 83 16 06
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-10 font-mono-brand text-[9px] uppercase tracking-[2px] text-[hsl(var(--black))]/40">
                  Paris 75 · Seine-et-Marne 77 · Yvelines 78 · Essonne 91 · Hauts-de-Seine 92 · Seine-Saint-Denis 93 · Val-de-Marne 94 · Val-d'Oise 95
                </div>
              </AnimatedSection>
            </div>

            {/* Right form */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={0.2}>
                <div className="border-brutal bg-[hsl(var(--cream))] shadow-brutal-lg p-8 md:p-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="font-mono-brand text-[10px] uppercase tracking-[2px] text-[hsl(var(--black))]/60 block mb-2">
                          Votre nom *
                        </label>
                        <input 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Jean Dupont"
                          className="w-full bg-transparent border-b-2 border-[hsl(var(--black))]/20 py-3 text-sm focus:border-[hsl(var(--olive))] outline-none transition-colors placeholder:text-[hsl(var(--black))]/30"
                        />
                      </div>
                      <div>
                        <label className="font-mono-brand text-[10px] uppercase tracking-[2px] text-[hsl(var(--black))]/60 block mb-2">
                          Organisation *
                        </label>
                        <input 
                          required
                          value={formData.organization}
                          onChange={(e) => setFormData({...formData, organization: e.target.value})}
                          placeholder="Nom de votre structure"
                          className="w-full bg-transparent border-b-2 border-[hsl(var(--black))]/20 py-3 text-sm focus:border-[hsl(var(--olive))] outline-none transition-colors placeholder:text-[hsl(var(--black))]/30"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="font-mono-brand text-[10px] uppercase tracking-[2px] text-[hsl(var(--black))]/60 block mb-2">
                          Email *
                        </label>
                        <input 
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="contact@structure.com"
                          className="w-full bg-transparent border-b-2 border-[hsl(var(--black))]/20 py-3 text-sm focus:border-[hsl(var(--olive))] outline-none transition-colors placeholder:text-[hsl(var(--black))]/30"
                        />
                      </div>
                      <div>
                        <label className="font-mono-brand text-[10px] uppercase tracking-[2px] text-[hsl(var(--black))]/60 block mb-2">
                          Téléphone
                        </label>
                        <input 
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="06 12 34 56 78"
                          className="w-full bg-transparent border-b-2 border-[hsl(var(--black))]/20 py-3 text-sm focus:border-[hsl(var(--olive))] outline-none transition-colors placeholder:text-[hsl(var(--black))]/30"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="font-mono-brand text-[10px] uppercase tracking-[2px] text-[hsl(var(--black))]/60 block mb-2">
                          Type d'intervention *
                        </label>
                        <select
                          required
                          value={formData.eventType}
                          onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                          className="w-full bg-transparent border-b-2 border-[hsl(var(--black))]/20 py-3 text-sm focus:border-[hsl(var(--olive))] outline-none transition-colors appearance-none"
                        >
                          <option value="">Sélectionner...</option>
                          <option value="Team building">Team building</option>
                          <option value="Séminaire RSE">Séminaire RSE</option>
                          <option value="Intervention scolaire">Intervention scolaire</option>
                          <option value="Animation collectivité">Animation collectivité</option>
                          <option value="Atelier EHPAD">Atelier EHPAD</option>
                          <option value="Événementiel">Événementiel</option>
                          <option value="Autre">Autre</option>
                        </select>
                      </div>
                      <div>
                        <label className="font-mono-brand text-[10px] uppercase tracking-[2px] text-[hsl(var(--black))]/60 block mb-2">
                          Date souhaitée
                        </label>
                        <input 
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({...formData, date: e.target.value})}
                          className="w-full bg-transparent border-b-2 border-[hsl(var(--black))]/20 py-3 text-sm focus:border-[hsl(var(--olive))] outline-none transition-colors"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="font-mono-brand text-[10px] uppercase tracking-[2px] text-[hsl(var(--black))]/60 block mb-2">
                          Ville d'intervention
                        </label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => setFormData({...formData, city: e.target.value})}
                          placeholder="Vélizy, Saint-Quentin-en-Yvelines..."
                          className="w-full bg-transparent border-b-2 border-[hsl(var(--black))]/20 py-3 text-sm focus:border-[hsl(var(--olive))] outline-none transition-colors placeholder:text-[hsl(var(--black))]/30"
                        />
                      </div>
                      <div>
                        <label className="font-mono-brand text-[10px] uppercase tracking-[2px] text-[hsl(var(--black))]/60 block mb-2">
                          Nombre de participants
                        </label>
                        <select
                          value={formData.participants}
                          onChange={(e) => setFormData({...formData, participants: e.target.value})}
                          className="w-full bg-transparent border-b-2 border-[hsl(var(--black))]/20 py-3 text-sm focus:border-[hsl(var(--olive))] outline-none transition-colors appearance-none"
                        >
                          <option value="">À estimer...</option>
                          <option value="Moins de 10">Moins de 10</option>
                          <option value="10 à 20">10 à 20</option>
                          <option value="20 à 40">20 à 40</option>
                          <option value="40 à 60">40 à 60</option>
                          <option value="Plus de 60">Plus de 60</option>
                        </select>
                      </div>
                    </div>
                    </div>

                    <div>
                      <label className="font-mono-brand text-[10px] uppercase tracking-[2px] text-[hsl(var(--black))]/60 block mb-2">
                        Votre projet
                      </label>
                      <textarea 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Nombre de participants, objectifs, contraintes..."
                        rows={4}
                        className="w-full bg-transparent border-b-2 border-[hsl(var(--black))]/20 py-3 text-sm focus:border-[hsl(var(--olive))] outline-none transition-colors resize-none placeholder:text-[hsl(var(--black))]/30"
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-brutal bg-[hsl(var(--olive))] text-[hsl(var(--cream))] border-[hsl(var(--black))] w-full flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          Envoyer ma demande <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <BackToTop />
      <Footer />
    </div>
  );
};

export default Pro;
