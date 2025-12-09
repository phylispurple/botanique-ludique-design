import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar as CalendarIcon, MapPin, Clock, Users, Gift, Mail, Send, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const workshops = [
  {
    name: "Atelier Kokedama",
    location: "Paris et Yvelines (78)",
    duration: "2h30",
    price: "À partir de 45€",
    audience: "Adultes et enfants dès 10 ans",
    dates: "Dates à venir",
    spots: "10 places max"
  },
  {
    name: "Atelier Teinture Végétale",
    location: "Paris, Chatou, Le Pecq",
    duration: "3h",
    price: "À partir de 55€",
    audience: "Tout public",
    dates: "Dates à venir",
    spots: "10 places max"
  },
  {
    name: "Atelier Terrarium",
    location: "Paris et Yvelines",
    duration: "2h",
    price: "À partir de 50€",
    audience: "Tout public dès 8 ans",
    dates: "Dates à venir",
    spots: "10 places max"
  },
  {
    name: "Atelier Vannerie",
    location: "Yvelines (Chatou, Le Vésinet)",
    duration: "3h30",
    price: "À partir de 60€",
    audience: "Adultes et adolescents",
    dates: "Dates à venir",
    spots: "10 places max"
  },
  {
    name: "Atelier Bombes de Graines",
    location: "Toute l'Île-de-France",
    duration: "1h30",
    price: "À partir de 25€",
    audience: "Tout public dès 6 ans",
    dates: "Dates à venir",
    spots: "12 places max"
  },
  {
    name: "Atelier Couronne de Fleurs",
    location: "Paris et Yvelines",
    duration: "2h",
    price: "À partir de 40€",
    audience: "Tout public dès 10 ans",
    dates: "Dates à venir",
    spots: "10 places max"
  },
  {
    name: "Cycle Matières Végétales",
    location: "Paris et Yvelines",
    duration: "4 séances × 2h30",
    price: "À partir de 200€",
    audience: "Adultes",
    dates: "Dates à venir",
    spots: "10 places max",
    description: "Cuir de kombucha, tableau végétal d'automne, carnet papier recyclé"
  }
];

const giftCardOptions = [
  { value: "50", label: "50€ - Un atelier découverte" },
  { value: "80", label: "80€ - Un atelier complet" },
  { value: "100", label: "100€ - Atelier premium ou duo" },
  { value: "200", label: "200€ - Cycle Matières Végétales" },
  { value: "libre", label: "Montant libre" }
];

const Agenda = () => {
  const [searchParams] = useSearchParams();
  const selectedAtelier = searchParams.get('atelier');
  const { toast } = useToast();
  
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    workshop: selectedAtelier || "",
    message: ""
  });
  
  const [giftCardForm, setGiftCardForm] = useState({
    name: "",
    email: "",
    recipientName: "",
    amount: "50",
    customAmount: "",
    message: ""
  });
  
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [isSubmittingGiftCard, setIsSubmittingGiftCard] = useState(false);

  useEffect(() => {
    if (selectedAtelier) {
      setContactForm(prev => ({ ...prev, workshop: selectedAtelier }));
      // Scroll to the contact form section
      setTimeout(() => {
        const element = document.getElementById('demande-info');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  }, [selectedAtelier]);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingContact(true);
    
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: contactForm.name,
          email: contactForm.email,
          subject: `Demande de réservation : ${contactForm.workshop}`,
          message: contactForm.message
        }
      });
      
      if (error) throw error;
      
      toast({
        title: "Demande envoyée !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      
      setContactForm({ name: "", email: "", workshop: "", message: "" });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmittingContact(false);
    }
  };

  const handleGiftCardSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingGiftCard(true);
    
    const amount = giftCardForm.amount === "libre" ? giftCardForm.customAmount : giftCardForm.amount;
    
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: giftCardForm.name,
          email: giftCardForm.email,
          subject: `Demande de carte cadeau - ${amount}€`,
          message: `Demande de carte cadeau\n\nMontant: ${amount}€\nNom du bénéficiaire: ${giftCardForm.recipientName}\nMessage personnel: ${giftCardForm.message || "Aucun"}`
        }
      });
      
      if (error) throw error;
      
      toast({
        title: "Demande de carte cadeau envoyée !",
        description: "Nous vous contacterons rapidement avec les modalités de paiement.",
      });
      
      setGiftCardForm({ name: "", email: "", recipientName: "", amount: "50", customAmount: "", message: "" });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmittingGiftCard(false);
    }
  };

  // Generate Schema.org Event data for each workshop
  const eventsSchema = workshops.map(workshop => ({
    "@type": "Event",
    "name": workshop.name,
    "description": `Atelier botanique : ${workshop.name}`,
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
      "price": workshop.price.replace(/[^0-9]/g, ''),
      "priceCurrency": "EUR",
      "url": "https://botaniqueludique.com/agenda"
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
        title="Agenda des Ateliers Botaniques - Paris et Yvelines | Réservation"
        description="Consultez l'agenda et réservez nos ateliers botaniques à Paris et dans les Yvelines. Kokedama, teinture végétale, vannerie, terrarium. Cartes cadeaux disponibles."
        keywords="agenda atelier botanique, réservation atelier Paris, dates ateliers Yvelines, carte cadeau atelier nature, planning ateliers botaniques"
        canonical="/agenda"
      />
      <SchemaOrg type="Course" data={eventsSchema} />
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16 animate-fade-in">
              <div className="flex justify-center mb-6">
                <CalendarIcon className="w-16 h-16 text-sage" />
              </div>
              <h1 className="page-title text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Agenda des Ateliers
              </h1>
              <p className="subtitle-italic text-lg mb-6">
                Réservez votre prochaine expérience botanique
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Nos ateliers ont lieu toute l'année sur réservation à Paris et dans les Yvelines (78). 
                Les prochaines dates seront annoncées très prochainement !
              </p>
            </div>

            {/* Info Banner */}
            <div className="bg-sage/10 border border-sage/30 rounded-lg p-6 mb-12 flex items-start gap-4 animate-fade-in">
              <Info className="w-6 h-6 text-sage flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-charcoal font-medium mb-1">Dates à venir</p>
                <p className="text-charcoal/70 text-sm">
                  Le calendrier des prochains ateliers sera mis à jour prochainement. 
                  En attendant, vous pouvez faire une demande de réservation ci-dessous et nous vous recontacterons dès qu'une date sera disponible.
                </p>
              </div>
            </div>

            {/* Workshops Table */}
            <div className="mb-16 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-8 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Nos ateliers disponibles
              </h2>
              
              {/* Desktop Table */}
              <div className="hidden md:block overflow-hidden rounded-lg border border-sage/30 bg-background">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-sage/10 hover:bg-sage/10">
                      <TableHead className="font-semibold text-charcoal">Atelier</TableHead>
                      <TableHead className="font-semibold text-charcoal">Lieu</TableHead>
                      <TableHead className="font-semibold text-charcoal">Durée</TableHead>
                      <TableHead className="font-semibold text-charcoal">Tarif</TableHead>
                      <TableHead className="font-semibold text-charcoal">Places</TableHead>
                      <TableHead className="font-semibold text-charcoal">Dates</TableHead>
                      <TableHead className="font-semibold text-charcoal text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {workshops.map((workshop, index) => (
                      <TableRow 
                        key={index} 
                        className={`hover:bg-sage/5 transition-colors ${selectedAtelier === workshop.name ? 'bg-sage/10' : ''}`}
                      >
                        <TableCell className="font-medium text-charcoal">{workshop.name}</TableCell>
                        <TableCell className="text-charcoal/70">{workshop.location}</TableCell>
                        <TableCell className="text-charcoal/70">{workshop.duration}</TableCell>
                        <TableCell className="text-sage-dark font-medium">{workshop.price}</TableCell>
                        <TableCell className="text-charcoal/70">{workshop.spots}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-sand/50 text-charcoal/70 border-sage/30">
                            {workshop.dates}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <a 
                            href="#demande-info"
                            onClick={() => setContactForm(prev => ({ ...prev, workshop: workshop.name }))}
                            className="inline-flex items-center px-4 py-2 bg-sage hover:bg-sage-dark text-off-white text-xs uppercase tracking-wider font-semibold transition-all duration-300 rounded-full"
                          >
                            Réserver
                          </a>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-4">
                {workshops.map((workshop, index) => (
                  <Card key={index} className={`${selectedAtelier === workshop.name ? 'ring-2 ring-sage' : ''}`}>
                    <CardContent className="p-5 space-y-3">
                      <h3 className="text-xl font-semibold text-charcoal" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}>
                        {workshop.name}
                      </h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-sage" />
                          <span className="text-charcoal/70">{workshop.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-sage" />
                          <span className="text-charcoal/70">{workshop.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-sage" />
                          <span className="text-charcoal/70">{workshop.spots}</span>
                        </div>
                        <div className="text-sage-dark font-semibold">{workshop.price}</div>
                      </div>
                      <Badge variant="outline" className="bg-sand/50 text-charcoal/70 border-sage/30">
                        {workshop.dates}
                      </Badge>
                      <a 
                        href="#demande-info"
                        onClick={() => setContactForm(prev => ({ ...prev, workshop: workshop.name }))}
                        className="mt-2 w-full inline-flex items-center justify-center px-4 py-2.5 bg-sage hover:bg-sage-dark text-off-white text-sm uppercase tracking-wider font-semibold transition-all duration-300 rounded-full"
                      >
                        Réserver cet atelier
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Custom Workshop Section */}
            <div className="mb-16 animate-fade-in">
              <Card className="max-w-3xl mx-auto bg-gradient-to-br from-sage/10 to-sand/30 border-sage/30">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <Users className="w-12 h-12 text-sage" />
                  </div>
                  <h3 className="text-xl md:text-2xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                    Votre atelier n'apparaît pas dans la liste ?
                  </h3>
                  <p className="text-charcoal/80 mb-6 max-w-xl mx-auto">
                    Vous souhaitez organiser un atelier en petit groupe avec vos amis, votre famille ou entre collègues ? 
                    Nous proposons des ateliers sur mesure adaptés à vos envies et votre planning !
                  </p>
                  <a 
                    href="#demande-info"
                    onClick={() => setContactForm(prev => ({ ...prev, workshop: "Atelier sur mesure / Groupe privé" }))}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-sage hover:bg-sage-dark text-off-white text-sm uppercase tracking-wider font-semibold transition-all duration-300 rounded-full"
                  >
                    <Mail className="w-4 h-4" />
                    Contactez-nous pour un atelier sur mesure
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form Section */}
            <div id="demande-info" className="scroll-mt-32 mb-20 animate-fade-in">
              <Card className="max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Mail className="w-8 h-8 text-sage" />
                    <div>
                      <h2 className="text-2xl" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                        Demande d'information et réservation
                      </h2>
                      <p className="text-sm text-charcoal/60">Nous vous répondrons sous 48h</p>
                    </div>
                  </div>
                  
                  <form onSubmit={handleContactSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">Nom *</label>
                        <input
                          type="text"
                          required
                          value={contactForm.name}
                          onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full px-4 py-3 rounded-lg border border-sage/30 bg-background focus:outline-none focus:ring-2 focus:ring-sage/50"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">Email *</label>
                        <input
                          type="email"
                          required
                          value={contactForm.email}
                          onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full px-4 py-3 rounded-lg border border-sage/30 bg-background focus:outline-none focus:ring-2 focus:ring-sage/50"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">Atelier souhaité *</label>
                      <select
                        required
                        value={contactForm.workshop}
                        onChange={(e) => setContactForm(prev => ({ ...prev, workshop: e.target.value }))}
                        className="w-full px-4 py-3 rounded-lg border border-sage/30 bg-background focus:outline-none focus:ring-2 focus:ring-sage/50"
                      >
                        <option value="">Sélectionnez un atelier</option>
                        {workshops.map((w, i) => (
                          <option key={i} value={w.name}>{w.name}</option>
                        ))}
                        <option value="Atelier sur mesure / Groupe privé">Atelier sur mesure / Groupe privé</option>
                        <option value="Autre">Autre atelier</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">Message (optionnel)</label>
                      <textarea
                        value={contactForm.message}
                        onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-sage/30 bg-background focus:outline-none focus:ring-2 focus:ring-sage/50 resize-none"
                        placeholder="Précisez vos disponibilités, le nombre de participants, vos questions..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmittingContact}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-sage hover:bg-sage-dark disabled:opacity-50 text-off-white font-semibold uppercase tracking-wider transition-all duration-300 rounded-full"
                    >
                      <Send className="w-4 h-4" />
                      {isSubmittingContact ? "Envoi en cours..." : "Envoyer ma demande"}
                    </button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Gift Cards Section */}
            <div className="mb-16 animate-fade-in">
              <div className="text-center mb-10">
                <div className="flex justify-center mb-4">
                  <Gift className="w-12 h-12 text-sage" />
                </div>
                <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Cartes Cadeaux
                </h2>
                <p className="text-charcoal/70 max-w-2xl mx-auto">
                  Offrez une expérience botanique unique ! Nos cartes cadeaux sont valables 1 an et utilisables sur tous nos ateliers.
                </p>
              </div>
              
              <Card className="max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <form onSubmit={handleGiftCardSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">Votre nom *</label>
                        <input
                          type="text"
                          required
                          value={giftCardForm.name}
                          onChange={(e) => setGiftCardForm(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full px-4 py-3 rounded-lg border border-sage/30 bg-background focus:outline-none focus:ring-2 focus:ring-sage/50"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">Votre email *</label>
                        <input
                          type="email"
                          required
                          value={giftCardForm.email}
                          onChange={(e) => setGiftCardForm(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full px-4 py-3 rounded-lg border border-sage/30 bg-background focus:outline-none focus:ring-2 focus:ring-sage/50"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">Nom du bénéficiaire *</label>
                      <input
                        type="text"
                        required
                        value={giftCardForm.recipientName}
                        onChange={(e) => setGiftCardForm(prev => ({ ...prev, recipientName: e.target.value }))}
                        className="w-full px-4 py-3 rounded-lg border border-sage/30 bg-background focus:outline-none focus:ring-2 focus:ring-sage/50"
                        placeholder="Prénom de la personne qui recevra le cadeau"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">Montant de la carte *</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {giftCardOptions.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => setGiftCardForm(prev => ({ ...prev, amount: option.value }))}
                            className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                              giftCardForm.amount === option.value
                                ? 'bg-sage text-off-white border-sage'
                                : 'bg-background text-charcoal border-sage/30 hover:border-sage'
                            }`}
                          >
                            {option.value === "libre" ? "Libre" : `${option.value}€`}
                          </button>
                        ))}
                      </div>
                      {giftCardForm.amount === "libre" && (
                        <input
                          type="number"
                          min="20"
                          required
                          value={giftCardForm.customAmount}
                          onChange={(e) => setGiftCardForm(prev => ({ ...prev, customAmount: e.target.value }))}
                          className="mt-3 w-full px-4 py-3 rounded-lg border border-sage/30 bg-background focus:outline-none focus:ring-2 focus:ring-sage/50"
                          placeholder="Montant en euros (minimum 20€)"
                        />
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">Message personnel (optionnel)</label>
                      <textarea
                        value={giftCardForm.message}
                        onChange={(e) => setGiftCardForm(prev => ({ ...prev, message: e.target.value }))}
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-sage/30 bg-background focus:outline-none focus:ring-2 focus:ring-sage/50 resize-none"
                        placeholder="Un petit mot à ajouter sur la carte cadeau..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmittingGiftCard}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-sage hover:bg-sage-dark disabled:opacity-50 text-off-white font-semibold uppercase tracking-wider transition-all duration-300 rounded-full"
                    >
                      <Gift className="w-4 h-4" />
                      {isSubmittingGiftCard ? "Envoi en cours..." : "Commander une carte cadeau"}
                    </button>
                    
                    <p className="text-xs text-charcoal/60 text-center">
                      Après validation de votre demande, nous vous enverrons les modalités de paiement par email. 
                      La carte cadeau sera envoyée sous format PDF personnalisé.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* CTA B2B */}
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

export default Agenda;
