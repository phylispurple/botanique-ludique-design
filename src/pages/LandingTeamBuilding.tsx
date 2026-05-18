import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import PhotoCarousel from "@/components/PhotoCarousel";
import galleryTerrarium from "@/assets/gallery-terrarium.webp";
import galleryTeinture from "@/assets/gallery-teinture-1.webp";
import galleryFlowerCrown from "@/assets/gallery-flower-crown.webp";
import galleryKokedamaGarden from "@/assets/gallery-kokedama-garden.webp";
import galleryWorkshopGroup from "@/assets/gallery-workshop-group.webp";
import gallerySachetSenteur from "@/assets/gallery-sachet-senteur.webp";
import galleryMiniTerrarium from "@/assets/gallery-mini-terrarium.jpeg";
import {
  Users,
  Leaf,
  Clock,
  MapPin,
  ArrowRight,
  Download,
  Image as ImageIcon,
  Sparkles,
  Sprout,
  Lightbulb,
  HandHeart,
  Award,
} from "lucide-react";

const PDF_URL = "/documents/plaquette-botanique-ludique-entreprise-2026-2027.pdf";

const LandingTeamBuilding = () => {
  const benefits = [
    { icon: Users, title: "Cohésion", desc: "Renforce les liens dans une ambiance détendue.", bg: "bg-green-pale" },
    { icon: Leaf, title: "RSE", desc: "Activité écoresponsable, alignée avec vos valeurs.", bg: "bg-orange-light" },
    { icon: Sparkles, title: "Bien-être", desc: "Une parenthèse nature qui apaise et reconnecte.", bg: "bg-yellow" },
    { icon: Award, title: "Création", desc: "Chaque participant·e repart avec son objet végétal.", bg: "bg-blue-light" },
  ];

  const program = [
    { time: "00 / 15", title: "Accueil et mise en lien", desc: "Présentation, tour de table convivial et rencontre du vivant que nous allons explorer." },
    { time: "15 / 45", title: "Découverte botanique", desc: "Une courte approche ethnobotanique. Histoires, usages et imaginaires des plantes utilisées." },
    { time: "45 / 105", title: "Création guidée", desc: "Atelier pratique pas à pas. Kokedama, terrarium, teinture ou bombes à graines selon votre choix." },
    { time: "105 / 120", title: "Conseils d'entretien", desc: "Comment prendre soin de sa création au bureau ou à la maison, et prolonger l'expérience." },
  ];

  const workshops = [
    { title: "Atelier Terrarium", duration: "2h", participants: "6 à 12 pers.", highlight: "Le plus demandé", desc: "Créez votre écosystème dans un bocal en verre et repartez avec votre terrarium unique.", bg: "bg-green-pale", num: "01" },
    { title: "Atelier Kokedama", duration: "2h", participants: "6 à 12 pers.", highlight: "Art végétal japonais", desc: "Réalisez votre boule de plantes suspendue ou posée, entre tradition japonaise et créativité.", bg: "bg-orange-light", num: "02" },
    { title: "Teinture végétale", duration: "2h30", participants: "10 à 40 pers.", highlight: "Création collective", desc: "Explorez les plantes tinctoriales et créez ensemble une œuvre textile naturelle.", bg: "bg-yellow", num: "03" },
    { title: "Bombes à graines", duration: "1h30", participants: "10 à 60 pers.", highlight: "Action RSE", desc: "Fabriquez des bombes à graines mellifères pour contribuer à la biodiversité urbaine.", bg: "bg-blue-light", num: "04" },
  ];

  const reasons = [
    { icon: Sparkles, title: "Approche unique", desc: "Botanique, créativité et bien-être pour une expérience mémorable." },
    { icon: Users, title: "Cohésion et bien-être", desc: "Favorise les échanges et crée un moment de détente collectif." },
    { icon: Sprout, title: "Sensibilisation au vivant", desc: "Un temps pour reconnecter vos équipes à la nature." },
    { icon: Lightbulb, title: "Créativité et apprentissage", desc: "On apprend, on expérimente et on repart fier·e de sa création." },
    { icon: Leaf, title: "Matériaux de qualité", desc: "Plantes sélectionnées avec soin, matériaux naturels et durables." },
    { icon: HandHeart, title: "Sur-mesure", desc: "Ateliers adaptés à vos besoins, vos valeurs et vos espaces." },
  ];

  const options = [
    "Format sur site dans vos locaux ou en extérieur",
    "Format en plein air dans un parc d'Île-de-France",
    "Groupes de 6 à 12 personnes, formats plus larges sur demande",
    "Animation bilingue français anglais possible",
    "Pause gourmande végétale à ajouter",
    "Kit de communication interne pour annoncer l'atelier",
    "Documentation pour votre rapport RSE et QVCT",
    "Adaptation à votre charte graphique d'entreprise",
  ];

  const faqs = [
    { q: "Combien de personnes peuvent participer ?", a: "Nos formats standards accueillent 6 à 12 personnes pour un moment convivial et qualitatif. Pour des groupes plus importants, jusqu'à 60 personnes, nous proposons des formats adaptés comme la teinture collaborative ou les bombes à graines." },
    { q: "Où se déroulent les ateliers ?", a: "Nous nous déplaçons dans vos locaux à Paris, dans les Yvelines (78), les Hauts-de-Seine (92) et le Val-d'Oise (95). L'atelier peut aussi se tenir en extérieur, parc ou jardin, selon la météo." },
    { q: "Que repartent les participant·e·s avec ?", a: "Chaque personne repart avec sa création. Terrarium, kokedama, étoffe teinte ou bombes à graines, ainsi qu'une fiche d'entretien pour prolonger l'expérience au bureau ou à la maison." },
    { q: "Combien de temps à l'avance faut-il réserver ?", a: "Nous recommandons 3 à 4 semaines de délai pour préparer l'atelier dans les meilleures conditions. Pour des demandes urgentes, n'hésitez pas à nous contacter, nous étudions chaque demande." },
    { q: "Quel est le tarif ?", a: "Chaque atelier fait l'objet d'un devis personnalisé selon le nombre de participant·e·s, le format choisi, le lieu et les options. Demandez-nous votre devis, nous vous répondons rapidement." },
    { q: "L'atelier s'inscrit-il dans une démarche RSE ou QVCT ?", a: "Oui, nos ateliers s'alignent avec les enjeux de Qualité de Vie et Conditions de Travail et la RSE. Santé mentale, écoresponsabilité, cohésion, sensibilisation au vivant. Nous fournissons une documentation pour votre reporting." },
  ];

  const occasions = ["Séminaire", "Cohésion", "Journée RSE", "Onboarding", "Summer party", "Fin d'année", "Anniversaire", "Offsite", "Semaine QVCT"];
  const cities = ["Paris", "La Défense", "Hauts-de-Seine", "Yvelines", "Val-d'Oise", "Nanterre", "Boulogne", "Versailles", "Cergy", "Saint-Germain"];

  return (
    <div className="min-h-screen bg-cream">
      <SEO
        title="Team Building Nature Entreprise Paris & Île-de-France"
        description="Team building botanique en entreprise à Paris et en Île-de-France. Ateliers terrarium, kokedama, teinture végétale. Cohésion, RSE, bien-être. Devis sur mesure."
        keywords="team building nature paris, team building botanique entreprise, atelier terrarium entreprise, atelier kokedama entreprise, team building rse, cohésion équipe nature île-de-france"
        canonical="/team-building-nature-entreprise"
      />
      <SchemaOrg
        type="LocalBusiness"
        data={{
          name: "Team Building Nature en Entreprise – Botanique Ludique",
          description: "Ateliers botaniques pour entreprises en Île-de-France : team building, cohésion, RSE et bien-être au travail.",
        }}
      />
      <Navigation />

      {/* HERO */}
      <section className="pt-32 pb-20 px-4 bg-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }} aria-hidden />
        <div className="container mx-auto max-w-6xl relative">
          <div className="inline-block border-brutal bg-yellow px-4 py-2 mb-8 shadow-brutal">
            <span className="font-mono text-[11px] uppercase tracking-[2px] font-bold">Team Building / Cohésion / Bien-être</span>
          </div>
          <h1 className="font-display text-[clamp(2.5rem,8vw,6rem)] uppercase leading-[0.9] tracking-[-2px] text-primary-foreground mb-6">
            Des ateliers<br />
            <span className="bg-yellow text-foreground px-3 inline-block -rotate-1 border-brutal shadow-brutal">qui font pousser</span><br />
            les liens.
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/90 max-w-2xl mb-10 leading-relaxed">
            Des expériences végétales originales et accessibles pour renforcer les liens, stimuler la créativité et prendre soin du vivant. Une approche ethnobotanique qui mêle botanique, créativité et bien-être.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-yellow text-foreground border-brutal shadow-brutal px-6 py-4 font-display uppercase text-sm tracking-wide hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-hover transition-all">
              Demander un devis <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={PDF_URL} download className="inline-flex items-center gap-2 bg-cream text-foreground border-brutal shadow-brutal px-6 py-4 font-display uppercase text-sm tracking-wide hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-hover transition-all">
              <Download className="w-4 h-4" /> La plaquette
            </a>
            <Link to="/gallery" className="inline-flex items-center gap-2 bg-orange text-foreground border-brutal shadow-brutal px-6 py-4 font-display uppercase text-sm tracking-wide hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-hover transition-all">
              <ImageIcon className="w-4 h-4" /> Galerie photos
            </Link>
          </div>
        </div>
      </section>

      {/* CARROUSEL PHOTOS */}
      <section className="py-12 bg-foreground border-y-[3px] border-foreground overflow-hidden">
        <div className="mb-8 px-4 container mx-auto max-w-6xl flex items-end justify-between gap-4 flex-wrap">
          <div>
            <span className="font-mono text-xs uppercase tracking-[2px] text-yellow">Aperçu</span>
            <h2 className="font-display text-2xl md:text-4xl uppercase leading-[0.95] tracking-[-1px] text-primary-foreground mt-2">
              Nos ateliers en <span className="text-yellow">images</span>
            </h2>
          </div>
          <Link to="/gallery" className="font-mono text-[11px] uppercase tracking-[1.5px] text-primary-foreground border-b-2 border-yellow hover:text-yellow transition-colors pb-1">
            Voir toute la galerie →
          </Link>
        </div>
        <PhotoCarousel
          images={[
            { src: galleryTerrarium, alt: "Atelier terrarium en entreprise — Botanique Ludique" },
            { src: galleryWorkshopGroup, alt: "Team building botanique en groupe — Botanique Ludique" },
            { src: galleryKokedamaGarden, alt: "Atelier kokedama d'entreprise — Botanique Ludique" },
            { src: galleryTeinture, alt: "Atelier teinture végétale collaborative — Botanique Ludique" },
            { src: galleryFlowerCrown, alt: "Atelier création florale en entreprise — Botanique Ludique" },
            { src: gallerySachetSenteur, alt: "Atelier sachets de senteurs naturels — Botanique Ludique" },
            { src: galleryMiniTerrarium, alt: "Mini terrarium d'équipe — Botanique Ludique" },
          ]}
        />
      </section>

      {/* BÉNÉFICES */}
      <section className="py-20 px-4 bg-cream">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[2px] text-primary">/ 01</span>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.95] tracking-[-1px] mt-2">
              Pourquoi un team<br />building <span className="text-primary">nature</span> ?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
            {benefits.map((b, i) => (
              <div key={i} className={`${b.bg} border-brutal p-8 -ml-[3px] -mt-[3px] hover:-translate-y-1 hover:shadow-brutal transition-all`}>
                <b.icon className="w-8 h-8 mb-4" strokeWidth={2.5} />
                <h3 className="font-display text-2xl uppercase mb-2 leading-tight">{b.title}</h3>
                <p className="font-body text-sm text-foreground/80">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMME */}
      <section className="py-20 px-4 bg-foreground text-primary-foreground">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[2px] text-yellow">/ 02</span>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.95] tracking-[-1px] mt-2">
              Le déroulé<br />d'un <span className="text-yellow">atelier</span>
            </h2>
            <p className="font-body text-primary-foreground/70 mt-4 max-w-xl">Un format de 2h pensé pour alterner découverte, échanges et pratique.</p>
          </div>
          <div className="space-y-0">
            {program.map((p, i) => (
              <div key={i} className="border-brutal border-primary-foreground bg-foreground -mt-[3px] p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center hover:bg-green-bright hover:text-foreground transition-colors group">
                <div className="md:w-48 shrink-0">
                  <span className="font-mono text-xs uppercase tracking-[2px] text-yellow group-hover:text-foreground">Min {p.time}</span>
                  <div className="font-display text-4xl md:text-5xl uppercase leading-none mt-1">0{i + 1}</div>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl md:text-2xl uppercase mb-2 leading-tight">{p.title}</h3>
                  <p className="font-body text-sm text-primary-foreground/80 group-hover:text-foreground/80">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATELIERS */}
      <section className="py-20 px-4 bg-cream">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[2px] text-primary">/ 03</span>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.95] tracking-[-1px] mt-2">
              Nos <span className="text-primary">ateliers</span><br />team building
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-0">
            {workshops.map((w, i) => (
              <div key={i} className={`${w.bg} border-brutal p-8 -ml-[3px] -mt-[3px] flex flex-col hover:-translate-y-1 hover:shadow-brutal transition-all`}>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-display text-5xl md:text-6xl leading-none text-foreground/60">{w.num}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[1.5px] bg-foreground text-primary-foreground px-2 py-1">{w.highlight}</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl uppercase mb-3 leading-tight">{w.title}</h3>
                <p className="font-body text-sm text-foreground/80 mb-6 flex-1">{w.desc}</p>
                <div className="flex flex-wrap gap-3 pt-4 border-t-[3px] border-foreground">
                  <span className="font-mono text-[11px] uppercase tracking-[1.5px] flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{w.duration}</span>
                  <span className="font-mono text-[11px] uppercase tracking-[1.5px] flex items-center gap-1.5"><Users className="w-3.5 h-3.5" />{w.participants}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/gallery" className="inline-flex items-center gap-2 bg-foreground text-primary-foreground border-brutal shadow-brutal px-6 py-4 font-display uppercase text-sm tracking-wide hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-hover transition-all">
              <ImageIcon className="w-4 h-4" /> Découvrir nos ateliers en images
            </Link>
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS */}
      <section className="py-20 px-4 bg-orange-light">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[2px] text-foreground">/ 04</span>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.95] tracking-[-1px] mt-2">
              Pourquoi nous<br /><span className="bg-foreground text-primary-foreground px-2 inline-block">choisir</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
            {reasons.map((r, i) => (
              <div key={i} className="bg-cream border-brutal p-6 -ml-[3px] -mt-[3px] hover:bg-yellow transition-colors">
                <r.icon className="w-7 h-7 mb-3" strokeWidth={2.5} />
                <h3 className="font-display text-lg uppercase mb-2 leading-tight">{r.title}</h3>
                <p className="font-body text-sm text-foreground/80">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPTIONS */}
      <section className="py-20 px-4 bg-cream">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[2px] text-primary">/ 05</span>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.95] tracking-[-1px] mt-2">
              Options &<br /><span className="text-primary">formats</span> sur mesure
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-0">
            {options.map((o, i) => (
              <div key={i} className="bg-blue-light border-brutal p-5 -ml-[3px] -mt-[3px] flex gap-4 items-start hover:bg-green-pale transition-colors">
                <span className="font-display text-2xl text-primary shrink-0">+</span>
                <span className="font-body text-sm text-foreground/90">{o}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OCCASIONS */}
      <section className="py-20 px-4 bg-yellow">
        <div className="container mx-auto max-w-6xl text-center">
          <span className="font-mono text-xs uppercase tracking-[2px]">/ 06</span>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.95] tracking-[-1px] mt-2 mb-10">
            Pour quelles <span className="italic font-editorial normal-case">occasions</span> ?
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {occasions.map((o, i) => (
              <span key={i} className="font-mono text-[11px] uppercase tracking-[1.5px] px-4 py-2 border-brutal-thin bg-cream hover:bg-foreground hover:text-primary-foreground transition-colors cursor-default">
                {o}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PLAQUETTE */}
      <section className="py-20 px-4 bg-cream">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-primary text-primary-foreground border-brutal shadow-brutal-lg p-10 md:p-14 grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <span className="font-mono text-xs uppercase tracking-[2px] text-yellow">Plaquette 2026 / 2027</span>
              <h2 className="font-display text-3xl md:text-4xl uppercase leading-[0.95] tracking-[-1px] mt-2 mb-4">
                Toutes les infos<br />dans un seul document.
              </h2>
              <p className="font-body text-primary-foreground/85 max-w-md">
                À partager avec vos équipes, votre direction RSE ou votre CSE.
              </p>
            </div>
            <a href={PDF_URL} download className="inline-flex items-center gap-2 bg-yellow text-foreground border-brutal shadow-brutal px-6 py-4 font-display uppercase text-sm tracking-wide hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-hover transition-all justify-center">
              <Download className="w-4 h-4" /> Télécharger
            </a>
          </div>
        </div>
      </section>

      {/* ZONE */}
      <section className="py-20 px-4 bg-green-pale">
        <div className="container mx-auto max-w-6xl text-center">
          <span className="font-mono text-xs uppercase tracking-[2px] text-primary">/ 07</span>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.95] tracking-[-1px] mt-2 mb-4">
            Zone d'<span className="text-primary">intervention</span>
          </h2>
          <p className="font-body text-foreground/70 mb-10 max-w-2xl mx-auto">
            Nous intervenons à Paris, dans les Yvelines (78), les Hauts-de-Seine (92) et le Val-d'Oise (95).
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((c) => (
              <span key={c} className="inline-flex items-center gap-1.5 bg-cream px-4 py-2 border-brutal-thin font-mono text-[11px] uppercase tracking-[1.5px]">
                <MapPin className="w-3 h-3 text-primary" />{c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-cream">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <span className="font-mono text-xs uppercase tracking-[2px] text-primary">/ 08</span>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.95] tracking-[-1px] mt-2">
              Questions<br /><span className="text-primary">fréquentes</span>
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-0">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-brutal -mt-[3px] bg-cream data-[state=open]:bg-yellow transition-colors px-5">
                <AccordionTrigger className="text-left font-display text-base md:text-lg uppercase leading-tight tracking-tight hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-foreground/80 pb-5">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-4 bg-foreground text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, hsl(var(--primary-foreground)) 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }} aria-hidden />
        <div className="container mx-auto max-w-4xl text-center relative">
          <h2 className="font-display text-[clamp(2rem,6vw,4rem)] uppercase leading-[0.9] tracking-[-1px] mb-6">
            Parlons de votre<br /><span className="bg-yellow text-foreground px-3 inline-block -rotate-1 border-brutal">projet</span>
          </h2>
          <p className="font-body text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            Nombre de participant·e·s, lieu, envies. Nous vous proposons un format sur mesure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-yellow text-foreground border-brutal shadow-brutal px-6 py-4 font-display uppercase text-sm tracking-wide hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-hover transition-all">
              Demander un devis <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={PDF_URL} download className="inline-flex items-center gap-2 bg-cream text-foreground border-brutal shadow-brutal px-6 py-4 font-display uppercase text-sm tracking-wide hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-hover transition-all">
              <Download className="w-4 h-4" /> Télécharger la plaquette
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingTeamBuilding;
