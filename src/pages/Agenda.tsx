import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Calendar as CalendarIcon, MapPin, Clock, Users, ExternalLink, ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const upcomingEvents = [
  {
    id: "wardian-case-22-avril",
    name: "Wardian Case : histoire culturelle et politique du terrarium + fabrication",
    date: "Mardi 22 avril 2025",
    time: "17h00 – 18h30",
    location: "La Rochefoucauld, Paris 14e (Denfert-Rochereau)",
    price: "",
    audience: "Tout public",
    spots: "12 participant·es max",
    description: "Découvrez l'histoire fascinante de la Wardian Case et fabriquez votre propre terrarium. Plantes, substrat et matériel fournis. Gratuité pour les bénéficiaires d'Aurore.",
    linkType: "internal" as const,
    internalUrl: "/inscription/wardian-case",
  },
  {
    id: "stage-botanique-chatou",
    name: "Stage Botanique – Vacances de Printemps",
    date: "Du lundi 20 au vendredi 24 avril 2025",
    time: "10h30 – 12h00",
    location: "MJC de Chatou",
    price: "",
    audience: "8–15 ans",
    spots: "Places limitées",
    description: "Une semaine de découverte botanique pendant les vacances de printemps ! Activités créatives et scientifiques autour des plantes.",
    linkType: "external" as const,
    externalUrl: "https://chatou.goasso.org/activites?q%5Bid_eq%5D=18219&with-scroll-to=true",
  },
  {
    id: "stage-botanique-bezons",
    name: "Stage Botanique – Adolescents",
    date: "Du lundi 20 au vendredi 24 avril 2025",
    time: "",
    location: "Espace Elsa Triolet-Aragon, Bezons",
    price: "",
    audience: "13–17 ans",
    spots: "",
    description: "Un stage botanique dédié aux adolescents pour découvrir le monde des plantes à travers des activités scientifiques et créatives.",
    linkType: "external" as const,
    externalUrl: "https://www.ville-bezons.fr/annuaire/tiers-lieu-de-la-jeunesse/",
  },
  {
    id: "balade-ecole-du-breuil",
    name: "Balade Botanique : Histoire politique et culturelle des jardins",
    date: "Samedi 31 mai 2025",
    time: "Horaires à confirmer",
    location: "École Du Breuil, Paris – Fête de l'École",
    price: "",
    audience: "Tout public",
    spots: "",
    description: "Dans le cadre de la Fête de l'École Du Breuil, participez à une balade botanique passionnante sur l'histoire politique et culturelle des jardins.",
    linkType: "coming" as const,
  },
  {
    id: "kokedama-franconville",
    name: "Atelier Kokedama – Les Jardins Suspendus",
    date: "Samedi 5 juillet 2025",
    time: "10h30 – 12h30",
    location: "Buttes du Parisis, Franconville",
    price: "Gratuit",
    audience: "Tout public",
    spots: "",
    description: "Atelier en partenariat avec la Région Île-de-France Nature. Créez votre propre kokedama dans un cadre naturel exceptionnel.",
    linkType: "external" as const,
    externalUrl: "https://openagenda.com/fr/ile-de-france/events/atelier-creation-dun-kokedama",
  },
  {
    id: "balade-st-quentin",
    name: "Balade Botanique – Agglomération de Saint-Quentin-en-Yvelines",
    date: "Courant septembre 2025",
    time: "À confirmer",
    location: "Saint-Quentin-en-Yvelines (78)",
    price: "À confirmer",
    audience: "Tout public",
    spots: "",
    description: "Une balade botanique à la découverte de la flore locale. Plus d'informations à venir.",
    linkType: "coming" as const,
  },
];

const Agenda = () => {
  const eventsSchema = upcomingEvents.map(event => ({
    "@type": "Event",
    "name": event.name,
    "description": event.description,
    "startDate": event.date,
    "location": {
      "@type": "Place",
      "name": event.location,
    },
    "offers": {
      "@type": "Offer",
      "price": event.price.replace(/[^0-9]/g, '') || "0",
      "priceCurrency": "EUR",
      "url": "https://botaniqueludique.com/agenda"
    },
    "organizer": {
      "@type": "Person",
      "name": "Vanessa Charlery",
      "url": "https://botaniqueludique.com/about"
    }
  }));

  return (
    <div className="min-h-screen relative bg-background">
      <SEO
        title="Agenda des Ateliers Botaniques | Paris & IDF"
        description="📅 Retrouvez tous les prochains ateliers et balades botaniques de Botanique Ludique à Paris et en Île-de-France. Kokedama, terrarium, teinture végétale."
        keywords="agenda atelier botanique, réservation atelier Paris, dates ateliers Yvelines, planning ateliers botaniques"
        canonical="/agenda"
      />
      <SchemaOrg type="Course" data={eventsSchema} />
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">

            {/* Hero */}
            <div className="mb-16 animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <CalendarIcon className="w-8 h-8 text-primary" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Agenda</span>
              </div>
              <h1 className="text-[2.4rem] sm:text-5xl md:text-6xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: 'hsl(var(--foreground))' }}>
                Prochains événements
              </h1>
              <p className="text-lg text-foreground/60 max-w-2xl" style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic' }}>
                Ateliers, stages et balades botaniques à Paris et en Île-de-France
              </p>
            </div>

            {/* Events list */}
            <div className="space-y-0 border-t border-border animate-fade-in">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="border-b border-border py-8 md:py-10 group">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Date column */}
                    <div className="md:w-48 flex-shrink-0">
                      <p className="text-xs uppercase tracking-wider text-foreground/40 mb-1">Date</p>
                      <p className="text-sm font-semibold text-foreground">{event.date}</p>
                      <p className="text-xs text-foreground/50 mt-1">{event.time}</p>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <h2 className="text-xl md:text-2xl group-hover:text-primary transition-colors" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: 'hsl(var(--foreground))' }}>
                        {event.name}
                      </h2>
                      <p className="text-sm text-foreground/60 leading-relaxed">{event.description}</p>

                      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-foreground/50">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" /> {event.location}
                        </span>
                        {event.spots && (
                          <span className="flex items-center gap-1.5">
                            <Users className="w-3.5 h-3.5" /> {event.spots}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        {event.price && (
                          <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 text-xs font-semibold">
                            {event.price}
                          </Badge>
                        )}
                        <Badge variant="outline" className="text-foreground/50 border-border text-xs">
                          {event.audience}
                        </Badge>

                        {event.linkType === "external" && event.externalUrl && (
                          <a
                            href={event.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-auto inline-flex items-center gap-2 px-5 py-2 border-2 border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground text-xs uppercase tracking-wider font-bold transition-all duration-300"
                            style={{ boxShadow: 'var(--shadow-brutal)' }}
                          >
                            S'inscrire <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {event.linkType === "internal" && (event as any).internalUrl && (
                          <Link
                            to={(event as any).internalUrl}
                            className="ml-auto inline-flex items-center gap-2 px-5 py-2 border-2 border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground text-xs uppercase tracking-wider font-bold transition-all duration-300"
                            style={{ boxShadow: 'var(--shadow-brutal)' }}
                          >
                            S'inscrire <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        )}
                        {event.linkType === "coming" && (
                          <span className="ml-auto inline-flex items-center gap-2 px-5 py-2 border-2 border-border text-foreground/40 text-xs uppercase tracking-wider font-bold cursor-default">
                            Inscription à venir
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Atelier sur mesure */}
            <div className="mt-16 border-2 border-foreground p-8 md:p-12 text-center animate-fade-in" style={{ boxShadow: 'var(--shadow-brutal-lg)' }}>
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: 'hsl(var(--foreground))' }}>
                Vous souhaitez organiser un atelier ?
              </h2>
              <p className="text-foreground/60 mb-8 max-w-xl mx-auto">
                Nous organisons des ateliers sur-mesure pour les entreprises, collectivités, écoles et EHPAD partout en Île-de-France.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground text-xs uppercase tracking-[0.15em] font-bold transition-all duration-300"
                  style={{ boxShadow: 'var(--shadow-brutal)' }}
                >
                  <Mail className="w-4 h-4" />
                  Nous écrire
                </Link>
                <Link
                  to="/pro"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background text-xs uppercase tracking-[0.15em] font-bold transition-all duration-300"
                >
                  Offres professionnelles
                </Link>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Agenda;
