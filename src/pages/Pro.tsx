import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import TrustBadges from "@/components/TrustBadges";
import { Users, Building2, Heart, Leaf, Calendar, Mail, Phone, CheckCircle, Loader2, Clock, GraduationCap, ArrowRight, ArrowUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import collegeEee1Image from "@/assets/gallery-college-eee-1.jpg";
import AnimatedSection from "@/components/AnimatedSection";

const quoteSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(100),
  organization: z.string().trim().min(1, "Le nom de l'organisation est requis").max(200),
  email: z.string().trim().email("Email invalide").max(255),
  phone: z.string().trim().max(20).optional(),
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
    eventType: "",
    date: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      toast({ title: "Demande envoyée !", description: "Nous vous contacterons dans les plus brefs délais (sous 24h)." });
      setFormData({ name: "", organization: "", email: "", phone: "", eventType: "", date: "", message: "" });
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
      title: "Entreprises",
      subtitle: "Team building & RSE",
      description: "Cohésion d'équipe, séminaires nature, démarche RSE concrète et bien-être au travail.",
      benefits: ["Kokedama d'équipe — 2h30", "Teinture végétale collaborative — 3h", "Terrarium en équipe — 2h", "Vannerie & artisanat — 3h30"],
      id: "entreprises",
      accent: "olive"
    },
    {
      icon: GraduationCap,
      title: "Scolaires",
      subtitle: "Collèges, lycées, BTS",
      description: "Parcours de sensibilisation environnementale, ethnobotanique et biodiversité.",
      benefits: ["Espèces exotiques envahissantes", "Biodiversité urbaine et sauvage", "Ethnobotanique", "Changement climatique"],
      id: "scolaires",
      accent: "green"
    },
    {
      icon: Users,
      title: "Collectivités",
      subtitle: "MJC, centres sociaux, mairies",
      description: "Animations intergénérationnelles qui créent du lien social autour du végétal.",
      benefits: ["Ateliers parent-enfant", "Animations de quartier", "Cycles sur l'année", "Événements ponctuels"],
      id: "collectivites",
      accent: "blue"
    },
    {
      icon: Heart,
      title: "EHPAD & Santé",
      subtitle: "Ateliers thérapeutiques",
      description: "Stimulation sensorielle, travail de la mémoire et reconnexion à la nature.",
      benefits: ["Stimulation cognitive", "Apaisement & bien-être", "Lien social", "Motricité fine"],
      id: "ehpad",
      accent: "orange"
    },
    {
      icon: Calendar,
      title: "Événementiel",
      subtitle: "Festivals, salons, marchés",
      description: "Animations botaniques sur mesure pour des expériences mémorables.",
      benefits: ["Stands interactifs", "Inaugurations", "Noël & fêtes", "Sur mesure"],
      id: "evenementiel",
      accent: "purple"
    }
  ];

  const faqs = [
    { q: "Que fournissez-vous ?", a: "Tout est inclus et clé en main : matériel, outils, matières premières, protections et supports pédagogiques. Chaque participant repart avec sa création." },
    { q: "Où intervenez-vous ?", a: "Paris, Yvelines (78), Hauts-de-Seine (92) et Val-d'Oise (95). Nous nous déplaçons dans vos locaux." },
    { q: "Comment sont calculés les tarifs ?", a: "Les tarifs dépendent du type d'atelier, durée, nombre de participants et lieu. Chaque devis est personnalisé et gratuit." },
    { q: "Quel délai de réservation ?", a: "Idéalement 3 à 4 semaines. Pour les périodes chargées (Noël, printemps), prévoyez 6 à 8 semaines." },
    { q: "Combien de participants ?", a: "10 à 15 par animateur. Pour les grands groupes (20-50), nous organisons des rotations ou mobilisons des animateurs supplémentaires." },
    { q: "Politique d'annulation ?", a: "Annulation gratuite jusqu'à 14 jours avant. Entre 14 et 7 jours : 50% conservé. Moins de 7 jours : acompte non remboursable." },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SEO 
        title="Team Building Nature & RSE Paris | Devis 24h ✦ +400 Participants"
        description="🏢 Team building botanique, animations EHPAD, interventions scolaires à Paris & IDF. +400 participants. Devis gratuit sous 24h."
        keywords="team building RSE Paris, formation botanique entreprise, intervention collège botanique, animation EHPAD, animation MJC"
        canonical="/pro"
      />
      <SchemaOrg 
        type="Service"
        data={{
          serviceType: "Team Building et Animations Botaniques",
          name: "Ateliers Botaniques pour Professionnels",
          description: "Team building RSE, formations scolaires, animations EHPAD et collectivités à Paris et Île-de-France",
        }}
      />
      <Navigation />
      
      {/* ═══════════════════════════════════════════ */}
      {/* HERO */}
      {/* ═══════════════════════════════════════════ */}
      <section className="pt-36 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <span className="section-label block mb-6">Professionnels & Institutions</span>
              <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] uppercase leading-[0.9] tracking-[-2px] text-[hsl(var(--black))] mb-6">
                Botanique<br />
                <span className="text-[hsl(var(--olive))]">sur mesure</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-[hsl(var(--black))]/70 mb-8 max-w-lg">
                Team building, formations scolaires, animations pour collectivités et EHPAD. 
                Des interventions botaniques à Paris et en Île-de-France.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a 
                  href="#devis"
                  className="btn-brutal bg-[hsl(var(--olive))] text-[hsl(var(--cream))] border-[hsl(var(--black))] inline-flex items-center gap-2 justify-center"
                >
                  Nous écrire <ArrowRight className="w-4 h-4" />
                </a>
                <a 
                  href="mailto:contact@botaniqueludique.com"
                  className="btn-brutal bg-[hsl(var(--cream))] text-[hsl(var(--black))] border-[hsl(var(--black))] inline-flex items-center gap-2 justify-center"
                >
                  <Mail className="w-4 h-4" /> Contact direct
                </a>
              </div>

              <TrustBadges variant="compact" showAll={false} />
            </div>

            {/* Right — Hero image */}
            <div className="relative">
              <div className="border-brutal shadow-brutal-lg overflow-hidden">
                <img 
                  src={collegeEee1Image} 
                  alt="Interventions botaniques professionnelles"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Quick nav pills */}
          <div className="mt-16 flex flex-wrap gap-3 justify-center">
            {clientTypes.map((client) => (
              <button
                key={client.id}
                onClick={() => scrollToSection(client.id)}
                className="btn-brutal bg-[hsl(var(--cream))] text-[hsl(var(--black))] border-[hsl(var(--black))] !text-[10px] !px-5 !py-2.5 inline-flex items-center gap-2"
              >
                <client.icon className="w-3.5 h-3.5" />
                {client.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* CLIENT TYPES GRID */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-20 px-4 md:px-8 bg-[hsl(var(--black))] text-[hsl(var(--cream))]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive-light))] block mb-4">Nos solutions</span>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] uppercase leading-[0.9] tracking-[-1px] mb-16">
              Pour chaque<br />
              <span className="text-[hsl(var(--olive-light))]">structure</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientTypes.map((client, index) => {
              const Icon = client.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div 
                    id={client.id}
                    className="border border-[hsl(var(--cream))]/20 p-8 hover:border-[hsl(var(--olive-light))] transition-colors group h-full flex flex-col cursor-pointer"
                    onClick={() => scrollToSection('devis')}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 border border-[hsl(var(--olive-light))] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[hsl(var(--olive-light))]" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl uppercase tracking-[-0.5px]">{client.title}</h3>
                        <p className="font-mono-brand text-[9px] uppercase tracking-[2px] text-[hsl(var(--cream))]/50">{client.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-[hsl(var(--cream))]/70 leading-relaxed mb-6 text-sm flex-1">
                      {client.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {client.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-[hsl(var(--cream))]/60">
                          <span className="w-1.5 h-1.5 bg-[hsl(var(--olive-light))] rounded-full flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-2 text-[hsl(var(--olive-light))] font-mono-brand text-[10px] uppercase tracking-[2px] group-hover:gap-3 transition-all mt-auto">
                      En savoir plus <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* DÉROULEMENT */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <span className="section-label block mb-4">Comment ça marche</span>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] uppercase leading-[0.9] tracking-[-1px] text-[hsl(var(--black))] mb-16">
              Déroulement<br />
              <span className="text-[hsl(var(--olive))]">d'un atelier</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-0">
            {[
              { step: "01", title: "Accueil", duration: "10 min", desc: "Présentation du thème et des matériaux" },
              { step: "02", title: "Démonstration", duration: "15-20 min", desc: "Explication des techniques pas à pas" },
              { step: "03", title: "Création", duration: "1h — 2h30", desc: "Réalisation guidée avec accompagnement individuel" },
              { step: "04", title: "Clôture", duration: "10 min", desc: "Photos de groupe, emballage, échanges" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className={`p-6 border-brutal bg-[hsl(var(--cream))] ${i > 0 ? 'md:-ml-[3px]' : ''} relative`}>
                  <span className="font-display text-5xl text-[hsl(var(--olive))]/20 block mb-3">{item.step}</span>
                  <h3 className="font-display text-lg uppercase tracking-[-0.5px] text-[hsl(var(--black))] mb-1">{item.title}</h3>
                  <p className="font-mono-brand text-[9px] uppercase tracking-[2px] text-[hsl(var(--olive))] mb-3">{item.duration}</p>
                  <p className="text-sm text-[hsl(var(--black))]/60 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* CTA ATELIERS PARTICULIERS */}
      {/* ═══════════════════════════════════════════ */}
      <section className="px-4 md:px-8 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="border-brutal bg-[hsl(var(--green-pale))] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-mono-brand text-[10px] uppercase tracking-[2px] text-[hsl(var(--olive))] mb-2">Particuliers</p>
              <h3 className="font-display text-xl md:text-2xl uppercase tracking-[-0.5px] text-[hsl(var(--black))]">
                Vous cherchez des ateliers créatifs ?
              </h3>
            </div>
            <Link
              to="/workshops"
              className="btn-brutal bg-[hsl(var(--olive))] text-[hsl(var(--cream))] border-[hsl(var(--black))] inline-flex items-center gap-2 whitespace-nowrap"
            >
              Voir les ateliers <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* FAQ */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-20 px-4 md:px-8 bg-[hsl(var(--cream-dark))]">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="section-label block mb-4">FAQ</span>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] uppercase leading-[0.9] tracking-[-1px] text-[hsl(var(--black))] mb-16">
              Questions<br />
              <span className="text-[hsl(var(--olive))]">fréquentes</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="border-brutal bg-[hsl(var(--cream))] p-6 md:p-8">
                  <h3 className="font-display text-base md:text-lg uppercase tracking-[-0.5px] text-[hsl(var(--black))] mb-3 flex items-start gap-3">
                    <span className="font-mono-brand text-[10px] text-[hsl(var(--olive))] mt-1 shrink-0">0{i + 1}</span>
                    {faq.q}
                  </h3>
                  <p className="text-sm md:text-base text-[hsl(var(--black))]/70 leading-relaxed pl-8">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

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
                  Paris · Yvelines 78 · Hauts-de-Seine 92 · Val-d'Oise 95
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

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 left-6 z-50 w-12 h-12 border-brutal bg-[hsl(var(--cream))] text-[hsl(var(--black))] shadow-brutal flex items-center justify-center transition-all duration-300 hover:shadow-brutal-lg hover:-translate-y-1 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Remonter en haut"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <Footer />
    </div>
  );
};

export default Pro;
