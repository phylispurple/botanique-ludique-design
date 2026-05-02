import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
import {
  Users,
  Leaf,
  TreePine,
  Award,
  Clock,
  MapPin,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Download,
  Image as ImageIcon,
  Heart,
  Lightbulb,
  Sprout,
  HandHeart,
} from "lucide-react";

const PDF_URL = "/documents/plaquette-botanique-ludique-entreprise-2026-2027.pdf";

const LandingTeamBuilding = () => {
  const benefits = [
    { icon: Users, title: "Cohésion d'équipe", description: "Renforce les liens dans une ambiance détendue et créative." },
    { icon: Leaf, title: "Engagement RSE", description: "Activité écoresponsable, alignée avec vos valeurs." },
    { icon: Sparkles, title: "Bien-être au travail", description: "Une parenthèse nature qui apaise et reconnecte." },
    { icon: Award, title: "Création tangible", description: "Chaque participant·e repart avec son objet végétal." },
  ];

  const program = [
    { time: "0 — 15 min", title: "Accueil et mise en lien", desc: "Présentation de l'atelier, du vivant que nous allons rencontrer, et tour de table convivial." },
    { time: "15 — 45 min", title: "Découverte botanique", desc: "Une courte approche ethnobotanique : histoires, usages et imaginaires des plantes utilisées." },
    { time: "45 min — 1h45", title: "Création guidée", desc: "Atelier pratique pas à pas : kokedama, terrarium, teinture ou bombes à graines selon votre choix." },
    { time: "1h45 — 2h", title: "Conseils d'entretien", desc: "Comment prendre soin de sa création au bureau ou à la maison, et prolonger l'expérience." },
  ];

  const workshops = [
    { title: "Atelier Terrarium", duration: "2h", participants: "6 à 12 pers.", highlight: "Le plus demandé", desc: "Créez votre écosystème dans un bocal en verre et repartez avec votre terrarium unique." },
    { title: "Atelier Kokedama", duration: "2h", participants: "6 à 12 pers.", highlight: "Art végétal japonais", desc: "Réalisez votre boule de plantes suspendue ou posée, entre tradition japonaise et créativité." },
    { title: "Teinture végétale collaborative", duration: "2h30", participants: "10 à 40 pers.", highlight: "Création collective", desc: "Explorez les plantes tinctoriales et créez ensemble une œuvre textile naturelle." },
    { title: "Bombes à graines RSE", duration: "1h30", participants: "10 à 60 pers.", highlight: "Action RSE", desc: "Fabriquez des bombes à graines mellifères pour contribuer à la biodiversité urbaine." },
  ];

  const reasons = [
    { icon: Sparkles, title: "Une approche unique", desc: "Mélange de botanique, créativité et bien-être pour une expérience mémorable." },
    { icon: Users, title: "Cohésion et bien-être", desc: "Favorise les échanges, renforce les liens et crée un moment de détente collectif." },
    { icon: Sprout, title: "Sensibilisation au vivant", desc: "Un temps pour reconnecter vos équipes à la nature et à l'essentiel." },
    { icon: Lightbulb, title: "Créativité et apprentissage", desc: "On apprend, on découvre, on expérimente et on repart fier·e de sa création." },
    { icon: Leaf, title: "Des matériaux de qualité", desc: "Plantes sélectionnées avec soin, matériaux naturels et durables." },
    { icon: HandHeart, title: "Accompagnement sur-mesure", desc: "Ateliers adaptés à vos besoins, à vos valeurs et à vos espaces." },
  ];

  const options = [
    "Format sur site, dans vos locaux ou en extérieur (selon la météo)",
    "Format en plein air dans un parc d'Île-de-France",
    "Groupes de 6 à 12 personnes pour un format intimiste, formats plus larges sur demande",
    "Animation bilingue français/anglais possible",
    "Pause gourmande végétale à ajouter (tisanes, infusions de saison)",
    "Kit de communication interne pour annoncer l'atelier à vos équipes",
    "Documentation pour votre rapport RSE/QVCT",
  ];

  const faqs = [
    {
      q: "Combien de personnes peuvent participer ?",
      a: "Nos formats standards accueillent 6 à 12 personnes pour un moment convivial et qualitatif. Pour des groupes plus importants (jusqu'à 60 personnes), nous proposons des formats adaptés comme la teinture collaborative ou les bombes à graines.",
    },
    {
      q: "Où se déroulent les ateliers ?",
      a: "Nous nous déplaçons dans vos locaux à Paris, dans les Yvelines (78), les Hauts-de-Seine (92) et le Val-d'Oise (95). L'atelier peut aussi se tenir en extérieur (parc, jardin) selon la météo.",
    },
    {
      q: "Que repartent les participant·e·s avec ?",
      a: "Chaque personne repart avec sa création (terrarium, kokedama, étoffe teinte ou bombes à graines), ainsi qu'une fiche d'entretien pour prolonger l'expérience au bureau ou à la maison.",
    },
    {
      q: "Combien de temps à l'avance faut-il réserver ?",
      a: "Nous recommandons 3 à 4 semaines de délai pour préparer l'atelier dans les meilleures conditions. Pour des demandes urgentes, n'hésitez pas à nous contacter, nous étudions chaque demande.",
    },
    {
      q: "Quel est le tarif ?",
      a: "Chaque atelier fait l'objet d'un devis personnalisé selon le nombre de participant·e·s, le format choisi, le lieu et les options. Demandez-nous votre devis, nous vous répondons rapidement.",
    },
    {
      q: "L'atelier s'inscrit-il dans une démarche RSE/QVCT ?",
      a: "Oui, nos ateliers s'alignent avec les enjeux de Qualité de Vie et Conditions de Travail et la RSE : santé mentale, écoresponsabilité, cohésion, sensibilisation au vivant. Nous fournissons une documentation pour votre reporting.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
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
          description:
            "Ateliers botaniques pour entreprises en Île-de-France : team building, cohésion, RSE et bien-être au travail.",
        }}
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-sage/20 to-background">
        <div className="container mx-auto max-w-6xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-sage/20 text-sage-dark px-4 py-2 rounded-full text-sm font-medium">
            <TreePine className="w-4 h-4" />
            Team Building, Cohésion, Bien-être
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-charcoal">
            Team Building <span className="text-sage">Nature</span> en Entreprise
          </h1>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Des expériences végétales originales et accessibles pour renforcer les liens, stimuler la créativité et prendre soin du vivant. Une approche ethnobotanique qui mêle botanique, créativité et bien-être.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Button asChild size="lg" className="bg-sage hover:bg-sage-dark text-white">
              <Link to="/contact">
                Demander un devis
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-sage text-sage-dark hover:bg-sage/10">
              <a href={PDF_URL} download>
                <Download className="mr-2 w-4 h-4" />
                Télécharger la plaquette
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-charcoal hover:bg-sage/10">
              <Link to="/gallery">
                <ImageIcon className="mr-2 w-4 h-4" />
                Voir la galerie photos
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-display text-charcoal mb-8 text-center">
            Pourquoi un team building nature ?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <Card key={i} className="border-sage/20 h-full">
                <CardContent className="p-6 text-center h-full flex flex-col">
                  <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <b.icon className="w-6 h-6 text-sage" />
                  </div>
                  <h3 className="font-display text-lg text-charcoal mb-2">{b.title}</h3>
                  <p className="text-sm text-charcoal/70">{b.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programme */}
      <section className="py-16 px-4 bg-cream/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-display text-charcoal mb-3 text-center">
            Le déroulé d'un atelier
          </h2>
          <p className="text-center text-charcoal/70 mb-10 max-w-2xl mx-auto">
            Un format de 2h pensé pour alterner découverte, échanges et pratique.
          </p>
          <div className="space-y-4">
            {program.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-sage/20 flex flex-col md:flex-row gap-4 md:items-start"
              >
                <div className="md:w-40 shrink-0">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-sage-dark bg-sage/10 px-3 py-1 rounded-full">
                    <Clock className="w-3.5 h-3.5" />
                    {p.time}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-lg text-charcoal mb-1">{p.title}</h3>
                  <p className="text-sm text-charcoal/70">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ateliers */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-display text-charcoal mb-8 text-center">
            Nos ateliers team building
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {workshops.map((w, i) => (
              <Card key={i} className="border-sage/20 h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-3 gap-3">
                    <h3 className="font-display text-xl text-charcoal">{w.title}</h3>
                    <span className="text-xs font-medium bg-sage text-white px-2 py-1 rounded shrink-0">
                      {w.highlight}
                    </span>
                  </div>
                  <p className="text-sm text-charcoal/70 mb-4 flex-1">{w.desc}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-charcoal/60">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {w.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {w.participants}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-sage text-sage-dark hover:bg-sage/10">
              <Link to="/gallery">
                <ImageIcon className="mr-2 w-4 h-4" />
                Découvrir nos ateliers en images
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-16 px-4 bg-sage/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-display text-charcoal mb-10 text-center">
            Pourquoi nous choisir ?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-sage/20 h-full">
                <div className="w-10 h-10 bg-sage/10 rounded-lg flex items-center justify-center mb-3">
                  <r.icon className="w-5 h-5 text-sage" />
                </div>
                <h3 className="font-display text-lg text-charcoal mb-2">{r.title}</h3>
                <p className="text-sm text-charcoal/70">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Options et formats */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-display text-charcoal mb-3 text-center">
            Options et formats sur mesure
          </h2>
          <p className="text-center text-charcoal/70 mb-10 max-w-2xl mx-auto">
            Chaque atelier est adapté à votre équipe, à vos espaces et à vos objectifs.
          </p>
          <ul className="grid md:grid-cols-2 gap-3">
            {options.map((o, i) => (
              <li key={i} className="flex gap-3 items-start bg-cream/40 rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-sage shrink-0 mt-0.5" />
                <span className="text-charcoal/80 text-sm">{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Occasions */}
      <section className="py-16 px-4 bg-cream/30">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-display text-charcoal mb-6">Pour quelles occasions ?</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Séminaire",
              "Journée de cohésion",
              "Journée RSE",
              "Onboarding",
              "Summer party",
              "Fête de fin d'année",
              "Anniversaire entreprise",
              "Offsite",
              "Semaine QVCT",
            ].map((o, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-charcoal shadow-sm"
              >
                <CheckCircle className="w-4 h-4 text-sage" />
                {o}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Plaquette */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-sage/15 to-cream/40 border border-sage/20 rounded-2xl p-8 md:p-12 text-center">
            <Heart className="w-10 h-10 text-sage mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-display text-charcoal mb-3">
              Notre plaquette de présentation
            </h2>
            <p className="text-charcoal/70 mb-6 max-w-xl mx-auto">
              Toutes les infos pratiques de nos ateliers entreprise 2026-2027 dans un document à partager avec vos équipes.
            </p>
            <Button asChild size="lg" className="bg-sage hover:bg-sage-dark text-white">
              <a href={PDF_URL} download>
                <Download className="mr-2 w-4 h-4" />
                Télécharger la plaquette (PDF)
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-16 px-4 bg-sage/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-display text-charcoal mb-6">Zone d'intervention</h2>
          <p className="text-charcoal/70 mb-6 max-w-2xl mx-auto">
            Nous intervenons dans tout Paris, les Yvelines (78), les Hauts-de-Seine (92) et le Val-d'Oise (95).
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Paris",
              "La Défense",
              "Hauts-de-Seine (92)",
              "Yvelines (78)",
              "Val-d'Oise (95)",
              "Nanterre",
              "Boulogne",
              "Versailles",
              "Cergy",
              "Saint-Germain-en-Laye",
            ].map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-1 bg-white px-4 py-2 rounded-full text-sm text-charcoal shadow-sm"
              >
                <MapPin className="w-3 h-3 text-sage" />
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-display text-charcoal mb-8 text-center">
            Questions fréquentes
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-display text-lg text-charcoal">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 px-4 bg-charcoal text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-6">
            Prêt·e à organiser votre team building nature ?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Parlons de votre projet : nombre de participant·e·s, lieu, envies. Nous vous proposons un format sur mesure.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-sage hover:bg-sage-dark">
              <Link to="/contact">Demander un devis</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <a href={PDF_URL} download>
                <Download className="mr-2 w-4 h-4" />
                Télécharger la plaquette
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingTeamBuilding;
