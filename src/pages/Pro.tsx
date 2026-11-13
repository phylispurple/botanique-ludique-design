import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import WaveDivider from "@/components/WaveDivider";
import TraitDessine from "@/components/TraitDessine";
import { Users, Building2, Heart, Calendar, Mail, Phone, Loader2, Clock, GraduationCap, ArrowRight, ChevronDown, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { trackFormSubmit } from "@/lib/analytics";
import { galet, galetPhoto, PASTILLE } from "@/lib/organic";
import imgEntreprises from "@/assets/gallery-terrarium-adultes-groupe.jpg";
import imgEcoles from "@/assets/gallery-teinture-enfants-2.jpg";
import imgCollectivites from "@/assets/gallery-atelier-epices-table.webp";
import imgSeniors from "@/assets/gallery-kokedama-collection.jpg";
import imgEvenements from "@/assets/gallery-tataki-zome-atelier-table.webp";
import imgGroupe from "@/assets/cta-workshop-group.webp";
import imgTerrarium from "@/assets/event-terrarium-table.webp";
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

const BTN_A = { borderRadius: "28px 14px 26px 12px / 14px 26px 12px 28px" };
const BTN_B = { borderRadius: "14px 30px 12px 26px / 26px 12px 30px 14px" };
const CHAMP =
  "w-full bg-transparent border-0 border-b-2 border-foreground/20 py-2.5 text-sm focus:border-[hsl(var(--olive))] focus:outline-none transition-colors placeholder:text-foreground/30 font-body";
const LABEL = "block font-mono-brand text-[9px] uppercase tracking-[2px] text-[hsl(var(--olive))] mb-1";
const GARANTIES = ["Devis gratuit, réponse sous 24 h", "Tout le matériel fourni", "Partout en Île-de-France", "Animatrice formée à l'EHESS"];

const Pro = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
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
      const { error } = await supabase.functions.invoke("send-b2b-quote-email", { body: formData });
      if (error) throw error;
      trackFormSubmit("b2b_quote", { event_type: formData.eventType });
      toast({ title: "Demande envoyée !", description: "Nous vous contacterons dans les plus brefs délais (sous 24h)." });
      setFormData({ name: "", organization: "", email: "", phone: "", city: "", participants: "", eventType: "", date: "", message: "" });
    } catch (error: unknown) {
      console.error("Error sending B2B quote request:", error);
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
      description:
        "Cohésion d'équipe, séminaires, démarche RSE et bien-être au travail : des ateliers où l'on fabrique ensemble, dans vos locaux ou en extérieur.",
      formats: ["Terrarium en équipe, 2h", "Kokedama d'équipe, 2h", "Teinture végétale collaborative, 2h30"],
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
      title: "Événements & agences",
      subtitle: "Presse, lancements, salons",
      description: "Une table d'atelier en flux continu au cœur de votre événement : chaque invité crée et repart avec un objet vivant.",
      formats: ["Terrarium, sachet senteur, teinture, kokedama", "Lancements, presse, séminaires", "Noël et fêtes de fin d'année"],
      image: imgEvenements,
      imageAlt: "Participants imprimant des feuilles et des fleurs sur tissu par martelage, technique du tataki zomé",
      to: "/animation-vegetale-agence-evenementielle",
      id: "evenementiel",
    },
  ];

  const sectorPages = [
    { to: "/hortitherapie-hopital-clinique", label: "Hôpital, clinique, hortithérapie" },
    { to: "/animation-nature-universite-bde", label: "Université, grande école, BDE" },
    { to: "/animation-nature-bailleurs-sociaux", label: "Bailleur social, ESH, ANRU" },
    { to: "/mediation-vegetale-architectes-paysagistes", label: "Architecte, paysagiste, MOE" },
    { to: "/atelier-vegetal-parentalite-naissance", label: "Maternité, PMI, parentalité" },
    { to: "/atelier-botanique-evenement", label: "Événements privés : mariage, EVJF, anniversaire" },
    { to: "/animation-vegetale-hotel-evenementiel", label: "Hôtel, lieu événementiel premium" },
    { to: "/balade-ethnobotanique-office-tourisme", label: "Office de tourisme, patrimoine" },
    { to: "/atelier-vegetal-cabinet-rh-coach", label: "Cabinet RH, coach, consultant·e" },
    { to: "/marches-publics", label: "Marchés publics : SIRET, RC Pro, Chorus Pro" },
  ];

  const etapes = [
    { step: "01", title: "Accueil", duration: "10 min", desc: "Présentation du thème, des plantes et des matériaux." },
    { step: "02", title: "Récit et démonstration", duration: "15 à 20 min", desc: "L'histoire des plantes du jour, puis les gestes pas à pas." },
    { step: "03", title: "Création", duration: "1h à 2h30", desc: "Réalisation guidée, avec un accompagnement individuel." },
    { step: "04", title: "Clôture", duration: "10 min", desc: "Échanges, photos de groupe, chacun repart avec sa création." },
  ];

  const faqs = [
    { q: "Que fournissez-vous ?", a: "Tout est inclus et clé en main : matériel, outils, matières premières, protections et supports pédagogiques. Chaque participant repart avec sa création." },
    { q: "Où intervenez-vous ?", a: "Partout en Île-de-France : Paris (75), Seine-et-Marne (77), Yvelines (78), Essonne (91), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94) et Val-d'Oise (95). Nous nous déplaçons dans vos locaux." },
    { q: "Comment sont calculés les tarifs ?", a: "Les tarifs dépendent du type d'atelier, durée, nombre de participants et lieu. Chaque devis est personnalisé et gratuit." },
    { q: "Quel délai de réservation ?", a: "Idéalement 3 à 4 semaines. Pour les périodes chargées (Noël, printemps), prévoyez 6 à 8 semaines." },
    { q: "Combien de participants ?", a: "De 12 à 40 participants par session. Pour un groupe plus grand, nous organisons plusieurs sessions en rotation dans la journée ou mobilisons une seconde animatrice." },
    { q: "Politique d'annulation ?", a: "Annulation gratuite jusqu'à 14 jours avant. Entre 14 et 7 jours : 50% conservé. Moins de 7 jours : acompte non remboursable." },
  ];

  return (
    <div className="min-h-screen bg-[hsl(var(--cream))] overflow-x-clip">
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
      <SchemaOrg type="FAQPage" data={{ questions: faqs.map((f) => ({ question: f.q, answer: f.a })) }} />
      <SchemaOrg
        type="BreadcrumbList"
        data={{
          items: [
            { name: "Accueil", url: "https://botaniqueludique.com/" },
            { name: "Pro", url: "https://botaniqueludique.com/pro" },
          ],
        }}
      />
      <Navigation />

      {/* ===== HERO ===== */}
      <section className="relative px-6 pt-28 pb-16 md:pt-36 md:pb-20">
        <div
          className="absolute -left-32 top-20 w-[460px] h-[460px] bg-[hsl(var(--olive-light))]/30 pointer-events-none"
          style={{ borderRadius: "58% 42% 38% 62% / 45% 55% 45% 55%" }}
          aria-hidden="true"
        />
        <div
          className="absolute -right-24 bottom-0 w-[380px] h-[380px] bg-accent/15 pointer-events-none"
          style={{ borderRadius: "40% 60% 55% 45% / 60% 40% 60% 40%" }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-10 items-center">
          <AnimatedSection>
            <span className="inline-flex font-mono-brand text-[10px] md:text-[11px] uppercase tracking-[2px] bg-[hsl(var(--green))] text-[hsl(var(--cream))] border-brutal-thin rounded-full px-4 py-2 mb-7 -rotate-2 shadow-[3px_3px_0_hsl(var(--black))]">
              Professionnels · Institutions · Collectivités
            </span>
            <h1 className="font-display text-[clamp(2.6rem,6vw,5rem)] uppercase leading-[0.9] tracking-[-2px] mb-4">
              Botanique
              <br />
              <span className="text-primary md:ml-16">sur mesure</span>
            </h1>
            <TraitDessine className="mb-7 md:ml-16" />
            <p className="font-editorial italic text-xl md:text-2xl text-foreground/80 max-w-[560px] leading-snug mb-8">
              Ateliers et médiations autour du vivant pour les entreprises, les écoles, les collectivités et les EHPAD, partout en Île-de-France.
            </p>
            <div className="flex flex-wrap gap-4 mb-9">
              <a
                href="#devis"
                className="btn-brutal inline-flex items-center gap-2 bg-accent text-foreground border-foreground -rotate-1 hover:rotate-0 text-xs px-8 py-3.5"
                style={BTN_A}
              >
                Demander un devis gratuit <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+33609831606"
                className="btn-brutal inline-flex items-center gap-2 bg-[hsl(var(--cream))] text-foreground border-foreground rotate-1 hover:rotate-0 text-xs px-7 py-3.5"
                style={BTN_B}
              >
                <Phone className="w-4 h-4" /> 06 09 83 16 06
              </a>
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 max-w-[560px]">
              {GARANTIES.map((g) => (
                <li key={g} className="flex items-start gap-2 text-sm text-foreground/80">
                  <span className="mt-0.5 w-5 h-5 flex-shrink-0 flex items-center justify-center bg-[hsl(var(--olive-light))] border-brutal-thin" style={PASTILLE}>
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </span>
                  {g}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={150} className="relative h-[400px] sm:h-[470px] max-w-[520px] w-full mx-auto">
            <img
              src={imgGroupe}
              alt="Un groupe de participants autour d'une table d'atelier botanique"
              className="absolute right-0 top-0 w-[62%] h-[74%] object-cover border-brutal shadow-brutal rotate-2"
              style={galetPhoto(1)}
            />
            <img
              src={imgTerrarium}
              alt="Terrariums en bocal prêts pour une animation en entreprise"
              className="absolute left-0 bottom-0 w-[60%] h-[52%] object-cover border-brutal shadow-brutal -rotate-2"
              style={galetPhoto(0)}
              loading="lazy"
            />
            <img
              src={imgCollectivites}
              alt="Table d'atelier couverte de bols d'épices"
              className="absolute left-[4%] top-[4%] w-[34%] aspect-square object-cover border-brutal -rotate-3"
              style={{ borderRadius: "58% 42% 52% 48% / 46% 56% 44% 54%" }}
              loading="lazy"
            />
            <div
              className="absolute right-[-2%] bottom-[8%] w-[104px] h-[104px] flex flex-col items-center justify-center text-center bg-[hsl(var(--green))] text-[hsl(var(--cream))] border-brutal shadow-[3px_3px_0_hsl(var(--black))] pebble-float"
              style={PASTILLE}
            >
              <span className="font-display text-xl leading-none">Sous 24h</span>
              <span className="font-mono-brand text-[8px] uppercase tracking-[1px] mt-1 px-2 leading-tight">réponse à votre demande</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <SocialProofBar />

      {/* ===== PUBLICS ===== */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(36,25%,88%)" />
      <section className="bg-secondary px-6 pt-8 pb-20 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-14">
            <span className="section-label block mb-3">Nos solutions</span>
            <h2 className="font-display text-[clamp(2rem,5vw,3.4rem)] uppercase leading-[0.92] tracking-[-1.5px]">
              Pour chaque
              <br />
              <span className="md:ml-16 text-primary">structure</span>
            </h2>
            <TraitDessine className="mt-3 md:ml-16" variant={1} />
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {clientTypes.map((client, i) => (
              <AnimatedSection key={client.id} delay={(i % 3) * 90} className={i % 3 === 1 ? "lg:mt-10" : ""}>
                <Link
                  id={client.id}
                  to={client.to}
                  className={`group scroll-mt-28 h-full flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:rotate-0 ${i % 2 ? "rotate-[0.5deg]" : "-rotate-[0.5deg]"}`}
                >
                  <div className="relative mb-5">
                    <img
                      src={client.image}
                      alt={client.imageAlt}
                      loading="lazy"
                      className="w-full aspect-[16/11] object-cover border-brutal shadow-brutal transition-transform duration-500 group-hover:scale-[1.02]"
                      style={galetPhoto(i)}
                    />
                    <span
                      className={`absolute -top-3 left-5 inline-flex items-center gap-1.5 font-mono-brand text-[9px] uppercase tracking-[2px] px-3 py-1.5 border-brutal-thin rounded-full bg-[hsl(var(--cream))] shadow-[2px_2px_0_hsl(var(--black))] ${i % 2 ? "rotate-2" : "-rotate-2"}`}
                    >
                      <client.icon className="w-3 h-3" /> {client.subtitle}
                    </span>
                  </div>
                  <div className="px-2 flex flex-col flex-1">
                    <h3 className="font-display text-xl uppercase leading-[1.05] tracking-[-0.5px] mb-3 group-hover:text-primary transition-colors">
                      {client.title}
                    </h3>
                    <p className="text-sm text-foreground/75 leading-relaxed mb-4">{client.description}</p>
                    <ul className="space-y-2 mb-5">
                      {client.formats.map((format) => (
                        <li key={format} className="flex items-start gap-2.5 text-sm text-foreground/80">
                          <span className="mt-1.5 w-2 h-2 flex-shrink-0 bg-[hsl(var(--olive))]" style={PASTILLE} />
                          {format}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-auto inline-flex items-center gap-2 font-mono-brand text-[10px] uppercase tracking-[2px] text-primary underline underline-offset-4 decoration-2">
                      Voir la page dédiée <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DÉROULEMENT (bande verte) ===== */}
      <WaveDivider from="hsl(36,25%,88%)" to="hsl(153,40%,30%)" />
      <section className="bg-[hsl(var(--green))] text-[hsl(var(--cream))] px-6 pt-8 pb-20 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="section-label block mb-3" style={{ color: "hsl(73 44% 67%)" }}>
              Comment ça marche
            </span>
            <h2 className="font-display text-[clamp(1.9rem,4.5vw,3rem)] uppercase leading-[0.95] tracking-[-1px]">
              Déroulement <span className="text-[hsl(var(--olive-light))]">d'un atelier</span>
            </h2>
            <TraitDessine className="mx-auto mt-3" color="hsl(var(--olive-light))" variant={2} />
          </AnimatedSection>
          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <svg
              className="hidden lg:block absolute left-[12%] right-[12%] top-[34px] w-[76%] h-6 pointer-events-none"
              viewBox="0 0 600 24"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M0 12 C 100 0, 200 24, 300 12 S 500 0, 600 12" fill="none" stroke="hsl(var(--olive-light))" strokeWidth="2.5" strokeDasharray="7 8" strokeLinecap="round" />
            </svg>
            {etapes.map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 110}>
                <div className="relative text-center h-full flex flex-col">
                  <div
                    className="relative z-10 w-[68px] h-[68px] mx-auto mb-5 flex items-center justify-center bg-[hsl(var(--cream))] text-foreground border-brutal shadow-[3px_3px_0_hsl(var(--black))]"
                    style={PASTILLE}
                  >
                    <span className="font-display text-xl">{item.step}</span>
                  </div>
                  <div className="flex-1 bg-[hsl(var(--cream))] text-foreground border-brutal p-6" style={galet(i)}>
                    <span className="inline-block font-mono-brand text-[9px] uppercase tracking-[2px] bg-[hsl(var(--olive-light))] border-brutal-thin rounded-full px-3 py-1 mb-3">
                      {item.duration}
                    </span>
                    <h3 className="font-display text-lg uppercase tracking-[-0.5px] mb-2">{item.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <WaveDivider from="hsl(153,40%,30%)" to="hsl(36,33%,93%)" flip />

      {/* ===== TÉMOIGNAGES ===== */}
      <Testimonials />

      {/* ===== SECTEURS ===== */}
      <section className="px-6 pb-20">
        <AnimatedSection>
          <div
            className="max-w-5xl mx-auto bg-[hsl(var(--cream))] border-[3px] border-dashed border-foreground px-7 py-9 md:px-12 md:py-10 -rotate-[0.3deg]"
            style={{ borderRadius: "46px 70px 40px 64px / 64px 40px 70px 46px" }}
          >
            <span className="section-label block mb-2">Votre secteur</span>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] uppercase leading-[0.95] tracking-[-0.5px] mb-6">
              Des pages dédiées <span className="text-primary">à votre métier</span>
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
        </AnimatedSection>
      </section>

      {/* ===== FAQ ===== */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <span className="section-label block mb-3">FAQ</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] uppercase leading-[0.95] tracking-[-1px]">
              Questions <span className="text-primary">fréquentes</span>
            </h2>
            <TraitDessine className="mx-auto mt-3" variant={0} />
          </AnimatedSection>
          <div className="space-y-5">
            {faqs.map((faq, i) => (
              <details
                key={faq.q}
                className={`group border-brutal bg-[hsl(var(--cream))] px-6 md:px-8 py-5 open:shadow-brutal transition-shadow ${i % 2 ? "rotate-[0.3deg]" : "-rotate-[0.3deg]"}`}
                style={galet(i)}
                open={i === 0}
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display text-base md:text-lg uppercase tracking-[-0.5px]">{faq.q}</h3>
                  <span className="w-9 h-9 flex-shrink-0 flex items-center justify-center bg-[hsl(var(--olive-light))] border-brutal-thin transition-transform group-open:rotate-180" style={PASTILLE}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </summary>
                <p className="mt-3 text-sm md:text-base text-foreground/70 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DEVIS (bande verte) ===== */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(153,40%,30%)" />
      <section id="devis" className="bg-[hsl(var(--green))] text-[hsl(var(--cream))] px-6 pt-8 pb-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
          <AnimatedSection className="lg:pt-6">
            <span className="section-label block mb-3" style={{ color: "hsl(73 44% 67%)" }}>
              Nous écrire
            </span>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] uppercase leading-[0.92] tracking-[-1px]">
              Parlons de
              <br />
              <span className="text-[hsl(var(--olive-light))]">votre projet</span>
            </h2>
            <TraitDessine className="mt-3 mb-7" color="hsl(var(--olive-light))" variant={2} />
            <p className="text-base md:text-lg text-[hsl(var(--cream))]/85 leading-relaxed mb-8 max-w-xl">
              Décrivez-nous votre besoin et nous vous répondons avec une proposition personnalisée.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <span className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[hsl(var(--olive-light))] text-foreground border-brutal-thin" style={PASTILLE}>
                  <Clock className="w-4 h-4" />
                </span>
                <span>
                  <span className="block font-display text-sm uppercase">Réponse sous 24h</span>
                  <span className="block text-xs text-[hsl(var(--cream))]/60">Jours ouvrés</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-accent text-foreground border-brutal-thin" style={PASTILLE}>
                  <Mail className="w-4 h-4" />
                </span>
                <a href="mailto:contact@botaniqueludique.com" className="text-sm underline underline-offset-4 decoration-2 hover:text-[hsl(var(--olive-light))] transition-colors">
                  contact@botaniqueludique.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[hsl(var(--cream))] text-foreground border-brutal-thin" style={PASTILLE}>
                  <Phone className="w-4 h-4" />
                </span>
                <a href="tel:+33609831606" className="text-sm underline underline-offset-4 decoration-2 hover:text-[hsl(var(--olive-light))] transition-colors">
                  06 09 83 16 06
                </a>
              </li>
            </ul>
            <p className="font-mono-brand text-[9px] uppercase tracking-[2px] text-[hsl(var(--cream))]/50 leading-relaxed">
              Paris 75 · Seine-et-Marne 77 · Yvelines 78 · Essonne 91 · Hauts-de-Seine 92 · Seine-Saint-Denis 93 · Val-de-Marne 94 · Val-d'Oise 95
            </p>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div
              className="bg-[hsl(var(--cream))] text-[hsl(var(--black))] border-brutal shadow-[6px_6px_0_hsl(var(--black))] p-7 md:p-9 lg:rotate-[0.6deg]"
              style={galet(1)}
            >
              <h3 className="font-display text-xl uppercase leading-none mb-5">Demander un devis</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={LABEL}>Votre nom *</label>
                    <input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Jean Dupont" className={CHAMP} />
                  </div>
                  <div>
                    <label className={LABEL}>Organisation *</label>
                    <input
                      required
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="Nom de votre structure"
                      className={CHAMP}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={LABEL}>Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="contact@structure.com"
                      className={CHAMP}
                    />
                  </div>
                  <div>
                    <label className={LABEL}>Téléphone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="06 12 34 56 78"
                      className={CHAMP}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={LABEL}>Type d'intervention *</label>
                    <select
                      required
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className={`${CHAMP} appearance-none`}
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
                    <label className={LABEL}>Date souhaitée</label>
                    <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className={CHAMP} />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={LABEL}>Ville d'intervention</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="Vélizy, Saint-Quentin-en-Yvelines…"
                      className={CHAMP}
                    />
                  </div>
                  <div>
                    <label className={LABEL}>Nombre de participants</label>
                    <select
                      value={formData.participants}
                      onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
                      className={`${CHAMP} appearance-none`}
                    >
                      <option value="">À estimer...</option>
                      <option value="Moins de 12">Moins de 12</option>
                      <option value="12 à 20">12 à 20</option>
                      <option value="20 à 40">20 à 40</option>
                      <option value="40 à 60">40 à 60</option>
                      <option value="Plus de 60">Plus de 60</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={LABEL}>Votre projet</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Objectifs, contraintes, lieu…"
                    rows={3}
                    className={`${CHAMP} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-brutal bg-accent text-foreground border-foreground text-xs px-6 py-3.5 w-full justify-center inline-flex items-center gap-2 disabled:opacity-60"
                  style={BTN_A}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Envoi en cours…
                    </>
                  ) : (
                    <>
                      Envoyer ma demande <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="text-[11px] text-foreground/60 text-center leading-tight">Devis gratuit, réponse sous 24 heures ouvrées.</p>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <WaveDivider from="hsl(153,40%,30%)" to="hsl(0,0%,10%)" flip />

      <BackToTop />
      <Footer />
    </div>
  );
};

export default Pro;
