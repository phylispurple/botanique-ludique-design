import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar as CalendarIcon, MapPin, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const workshops = [
  {
    name: "Atelier Kokedama",
    location: "Paris et Yvelines (78)",
    duration: "2h30",
    schedule: "Ateliers mensuels - Dates sur demande",
    description: "Créez vos propres jardins suspendus japonais",
    audience: "Adultes et enfants dès 10 ans"
  },
  {
    name: "Atelier Teinture Végétale",
    location: "Paris, Chatou, Le Pecq",
    duration: "3h",
    schedule: "Week-ends disponibles",
    description: "Explorez l'art ancestral de la teinture naturelle",
    audience: "Tout public"
  },
  {
    name: "Atelier Terrarium",
    location: "Paris et Yvelines",
    duration: "2h",
    schedule: "Mercredis après-midi et week-ends",
    description: "Composez un écosystème miniature sous verre",
    audience: "Tout public dès 8 ans"
  },
  {
    name: "Atelier Vannerie",
    location: "Yvelines (Chatou, Le Vésinet)",
    duration: "3h30",
    schedule: "Stages week-end sur demande",
    description: "Apprenez le tressage avec osier et fibres naturelles",
    audience: "Adultes et adolescents"
  },
  {
    name: "Atelier Bombes de Graines",
    location: "Toute l'Île-de-France",
    duration: "1h30",
    schedule: "Disponible toute l'année",
    description: "Fabriquez des bombes de graines pour la guérilla verte",
    audience: "Tout public dès 6 ans"
  },
  {
    name: "Atelier Couronne de Fleurs",
    location: "Paris et Yvelines",
    duration: "2h",
    schedule: "Printemps et été - Dates flexibles",
    description: "Tressez des couronnes végétales avec fleurs sauvages",
    audience: "Tout public dès 10 ans"
  }
];

const Calendar = () => {
  // Generate Schema.org Event data for each workshop
  const eventsSchema = workshops.map(workshop => ({
    "@type": "Event",
    "name": workshop.name,
    "description": workshop.description,
    "location": {
      "@type": "Place",
      "name": "Botanique Ludique",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Île-de-France",
        "addressLocality": workshop.location
      }
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "url": "https://botaniqueludique.com/contact"
    },
    "eventSchedule": {
      "@type": "Schedule",
      "repeatFrequency": "Monthly",
      "byDay": ["Saturday", "Sunday"]
    },
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "organizer": {
      "@type": "Person",
      "name": "Vanessa Charlery",
      "url": "https://botaniqueludique.com/about"
    }
  }));

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <SEO 
        title="Calendrier des Ateliers Botaniques - Paris et Yvelines"
        description="Consultez le calendrier de nos ateliers botaniques disponibles toute l'année à Paris et dans les Yvelines. Réservation sur demande pour kokedama, teinture végétale, vannerie et plus."
        keywords="calendrier atelier botanique, dates ateliers Paris, réservation atelier Yvelines, planning ateliers nature"
        canonical="/calendar"
      />
      <SchemaOrg type="Course" data={eventsSchema} />
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="flex justify-center mb-6">
                <CalendarIcon className="w-16 h-16 text-sage" />
              </div>
              <h1 className="page-title text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Calendrier des Ateliers
              </h1>
              <p className="subtitle-italic text-lg mb-6">
                Nos ateliers ont lieu toute l'année sur réservation
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Disponibilité : week-ends et mercredis après-midi à Paris et dans les Yvelines (78). 
                Planning complet sur demande pour les particuliers et les groupes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {workshops.map((workshop, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-2xl font-semibold text-charcoal" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>
                      {workshop.name}
                    </h3>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                        <span className="text-charcoal/80">{workshop.location}</span>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <Clock className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                        <span className="text-charcoal/80">Durée : {workshop.duration}</span>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <Users className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                        <span className="text-charcoal/80">{workshop.audience}</span>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <CalendarIcon className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                        <span className="text-sage-dark font-semibold">{workshop.schedule}</span>
                      </div>
                    </div>

                    <p className="text-charcoal/70 leading-relaxed pt-2">
                      {workshop.description}
                    </p>

                    <Link 
                      to={`/contact?subject=${encodeURIComponent(`Réservation : ${workshop.name}`)}`}
                      className="inline-flex items-center px-5 py-2.5 bg-sage hover:bg-sage-dark text-off-white text-sm uppercase tracking-wider font-semibold transition-all duration-300 rounded-full"
                    >
                      Réserver cet atelier
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-sand rounded-lg p-8 md:p-12 text-center animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Vous souhaitez organiser un atelier pour votre groupe ?
              </h2>
              <p className="text-lg text-charcoal/80 leading-relaxed mb-6 max-w-2xl mx-auto">
                Nous organisons également des ateliers sur-mesure pour les entreprises, collectivités, écoles et EHPAD partout en Île-de-France.
              </p>
              <Link 
                to="/b2b"
                className="inline-flex items-center px-6 py-3 bg-sage hover:bg-sage-dark text-off-white font-semibold uppercase tracking-wider transition-all rounded-full"
              >
                Découvrir nos offres professionnelles
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Calendar;
