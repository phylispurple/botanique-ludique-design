import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar as CalendarIcon, MapPin, Clock, Users, Gift, Mail, Info, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const upcomingEvents = [
  {
    id: "wardian-case-22-avril",
    name: "Wardian Case : histoire culturelle et politique du terrarium + fabrication",
    date: "Mardi 22 avril 2025",
    time: "17h00 – 18h30",
    location: "La Rochefoucauld, 14e arrondissement (Denfert-Rochereau), Paris",
    price: "7€ (+1,50€ si bocal fourni sur place)",
    audience: "Tout public",
    spots: "12 participant·es max",
    description: "Découvrez l'histoire fascinante de la Wardian Case et fabriquez votre propre terrarium. Plantes, substrat et matériel fournis. Gratuité pour les bénéficiaires d'Aurore (+3 places supplémentaires).",
    linkType: "form" as const,
  },
  {
    id: "stage-botanique-chatou",
    name: "Stage Botanique – Vacances de Printemps",
    date: "Du lundi 20 avril au vendredi 24 avril 2025",
    time: "10h30 – 12h00",
    location: "MJC de Chatou",
    price: "80€ la semaine",
    audience: "8–15 ans",
    spots: "Places limitées",
    description: "Une semaine de découverte botanique pendant les vacances de printemps ! Activités créatives et scientifiques autour des plantes.",
    linkType: "external" as const,
    externalUrl: "https://chatou.goasso.org/activites?q%5Bid_eq%5D=18219&with-scroll-to=true",
  },
  {
    id: "balade-ecole-du-breuil",
    name: "Balade Botanique : Histoire politique et culturelle des jardins",
    date: "Samedi 31 mai 2025",
    time: "Horaires à confirmer",
    location: "École Du Breuil, Paris – Fête de l'École",
    price: "Gratuit",
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
  const { toast } = useToast();
  
  const [giftCardForm, setGiftCardForm] = useState({
    name: "",
    email: "",
    recipientName: "",
    amount: "50",
    customAmount: "",
    message: ""
  });
  
  const [isSubmittingGiftCard, setIsSubmittingGiftCard] = useState(false);

  // Wardian Case registration form state
  const [wardianForm, setWardianForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    nombrePersonnes: "1",
    beneficiaireAurore: "non",
    bocal: "ramene",
    message: "",
  });
  const [isSubmittingWardian, setIsSubmittingWardian] = useState(false);

  const wardianPrice = () => {
    if (wardianForm.beneficiaireAurore === "oui") return "Gratuit (bénéficiaire Aurore)";
    if (wardianForm.bocal === "surplace") return "8,50€ (7€ + 1,50€ bocal)";
    return "7€";
  };

  const handleWardianSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingWardian(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: `${wardianForm.prenom} ${wardianForm.nom}`,
          email: wardianForm.email,
          subject: `Inscription Wardian Case – 22 avril`,
          message: `Inscription à l'atelier Wardian Case du 22 avril 2025\n\nNom : ${wardianForm.nom}\nPrénom : ${wardianForm.prenom}\nEmail : ${wardianForm.email}\nTéléphone : ${wardianForm.telephone}\nNombre de personnes : ${wardianForm.nombrePersonnes}\nBénéficiaire Aurore : ${wardianForm.beneficiaireAurore === "oui" ? "Oui" : "Non"}\nBocal : ${wardianForm.bocal === "ramene" ? "Ramène son bocal (750ml–1L ou plus)" : "Bocal fourni sur place (+1,50€)"}\nTarif estimé : ${wardianPrice()}\nMessage : ${wardianForm.message || "Aucun"}`
        }
      });

      if (error) throw error;

      toast({
        title: "Inscription envoyée ! 🌿",
        description: "Nous confirmerons votre place par email très prochainement.",
      });

      setWardianForm({ nom: "", prenom: "", email: "", telephone: "", nombrePersonnes: "1", beneficiaireAurore: "non", bocal: "ramene", message: "" });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmittingWardian(false);
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
        title="Agenda & Réservation Ateliers | Paris, 78, 92 ✦ Cartes Cadeaux"
        description="📅 Réservez votre atelier botanique à Paris & IDF. Kokedama, teinture, terrarium dès 25€. Cartes cadeaux disponibles. Places limitées, réservez maintenant !"
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
            </div>

            {/* ===== UPCOMING EVENTS ===== */}
            <div className="mb-20 animate-fade-in">
              <h2 className="text-2xl md:text-3xl mb-10 text-center" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                🗓️ Prochains événements
              </h2>

              <div className="space-y-6">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden border-sage/20 hover:shadow-lg transition-shadow" id={event.id}>
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        {/* Date badge */}
                        <div className="bg-sage/10 p-6 md:p-8 flex flex-col items-center justify-center md:min-w-[180px] border-b md:border-b-0 md:border-r border-sage/20">
                          <CalendarIcon className="w-6 h-6 text-sage mb-2" />
                          <span className="text-sm font-semibold text-charcoal text-center">{event.date}</span>
                          <span className="text-xs text-charcoal/60 mt-1">{event.time}</span>
                        </div>
                        {/* Content */}
                        <div className="p-6 flex-1 space-y-3">
                          <h3 className="text-lg md:text-xl font-semibold text-charcoal" style={{ fontFamily: 'Fraunces, serif', fontWeight: 500 }}>
                            {event.name}
                          </h3>
                          <p className="text-sm text-charcoal/70">{event.description}</p>
                          <div className="flex flex-wrap gap-3 text-sm">
                            <span className="flex items-center gap-1.5 text-charcoal/70">
                              <MapPin className="w-4 h-4 text-sage" /> {event.location}
                            </span>
                            {event.spots && (
                              <span className="flex items-center gap-1.5 text-charcoal/70">
                                <Users className="w-4 h-4 text-sage" /> {event.spots}
                              </span>
                            )}
                          </div>
                          <div className="flex flex-wrap items-center gap-3 pt-2">
                            <Badge className="bg-sage/15 text-sage-dark border-sage/30 hover:bg-sage/20">
                              {event.price}
                            </Badge>
                            <Badge variant="outline" className="text-charcoal/60 border-charcoal/20">
                              {event.audience}
                            </Badge>
                            {event.linkType === "external" && event.externalUrl && (
                              <a
                                href={event.externalUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-5 py-2 bg-sage hover:bg-sage-dark text-off-white text-xs uppercase tracking-wider font-semibold transition-all rounded-full ml-auto"
                              >
                                S'inscrire <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            )}
                            {event.linkType === "form" && (
                              <a
                                href="#inscription-wardian"
                                className="inline-flex items-center gap-1.5 px-5 py-2 bg-sage hover:bg-sage-dark text-off-white text-xs uppercase tracking-wider font-semibold transition-all rounded-full ml-auto"
                              >
                                S'inscrire <ArrowRight className="w-3.5 h-3.5" />
                              </a>
                            )}
                            {event.linkType === "coming" && (
                              <span className="inline-flex items-center gap-1.5 px-5 py-2 bg-sand/60 text-charcoal/50 text-xs uppercase tracking-wider font-semibold rounded-full ml-auto cursor-default">
                                Inscription à venir
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* ===== WARDIAN CASE REGISTRATION FORM ===== */}
            <div className="mb-20 animate-fade-in" id="inscription-wardian">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl mb-3" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  🌿 Inscription – Atelier Wardian Case
                </h2>
                <p className="text-charcoal/70 max-w-2xl mx-auto text-sm">
                  Mardi 22 avril 2025 · 17h–18h30 · La Rochefoucauld, Paris 14e
                </p>
              </div>

              <Card className="max-w-2xl mx-auto border-sage/30">
                <CardContent className="p-8">
                  {/* Info box */}
                  <div className="bg-sage/10 border border-sage/20 rounded-lg p-4 mb-6 text-sm text-charcoal/80 space-y-1">
                    <p><strong>Format :</strong> 1h30 · 12 participant·es max</p>
                    <p><strong>Tarif :</strong> 7€ (+1,50€ si bocal fourni sur place)</p>
                    <p><strong>Matériel :</strong> Plantes, substrat et matériel fournis</p>
                    <p><strong>Gratuité :</strong> Pour les bénéficiaires d'Aurore (+3 places supplémentaires)</p>
                    <p className="text-xs text-charcoal/60 mt-2">💡 Si vous ramenez votre propre bocal (750ml, 1L ou plus), le tarif est de 7€. Sinon, un bocal peut être fourni sur place pour 1,50€ supplémentaire.</p>
                  </div>

                  <form onSubmit={handleWardianSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">Nom *</label>
                        <input
                          type="text"
                          required
                          maxLength={100}
                          value={wardianForm.nom}
                          onChange={(e) => setWardianForm(prev => ({ ...prev, nom: e.target.value }))}
                          className="w-full px-4 py-3 rounded-lg border border-sage/30 bg-background focus:outline-none focus:ring-2 focus:ring-sage/50"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">Prénom *</label>
                        <input
                          type="text"
                          required
                          maxLength={100}
                          value={wardianForm.prenom}
                          onChange={(e) => setWardianForm(prev => ({ ...prev, prenom: e.target.value }))}
                          className="w-full px-4 py-3 rounded-lg border border-sage/30 bg-background focus:outline-none focus:ring-2 focus:ring-sage/50"
                          placeholder="Votre prénom"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">Email *</label>
                        <input
                          type="email"
                          required
                          maxLength={255}
                          value={wardianForm.email}
                          onChange={(e) => setWardianForm(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full px-4 py-3 rounded-lg border border-sage/30 bg-background focus:outline-none focus:ring-2 focus:ring-sage/50"
                          placeholder="votre@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">Téléphone</label>
                        <input
                          type="tel"
                          maxLength={20}
                          value={wardianForm.telephone}
                          onChange={(e) => setWardianForm(prev => ({ ...prev, telephone: e.target.value }))}
                          className="w-full px-4 py-3 rounded-lg border border-sage/30 bg-background focus:outline-none focus:ring-2 focus:ring-sage/50"
                          placeholder="06 12 34 56 78"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">Nombre de personnes *</label>
                      <select
                        required
                        value={wardianForm.nombrePersonnes}
                        onChange={(e) => setWardianForm(prev => ({ ...prev, nombrePersonnes: e.target.value }))}
                        className="w-full px-4 py-3 rounded-lg border border-sage/30 bg-background focus:outline-none focus:ring-2 focus:ring-sage/50"
                      >
                        {[1,2,3,4].map(n => (
                          <option key={n} value={String(n)}>{n} personne{n > 1 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">Êtes-vous bénéficiaire d'Aurore ? *</label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="aurore"
                            value="non"
                            checked={wardianForm.beneficiaireAurore === "non"}
                            onChange={() => setWardianForm(prev => ({ ...prev, beneficiaireAurore: "non" }))}
                            className="accent-sage"
                          />
                          <span className="text-sm text-charcoal">Non</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="aurore"
                            value="oui"
                            checked={wardianForm.beneficiaireAurore === "oui"}
                            onChange={() => setWardianForm(prev => ({ ...prev, beneficiaireAurore: "oui" }))}
                            className="accent-sage"
                          />
                          <span className="text-sm text-charcoal">Oui (gratuité)</span>
                        </label>
                      </div>
                    </div>

                    {wardianForm.beneficiaireAurore === "non" && (
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">Bocal pour le terrarium *</label>
                        <div className="space-y-2">
                          <label className="flex items-start gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="bocal"
                              value="ramene"
                              checked={wardianForm.bocal === "ramene"}
                              onChange={() => setWardianForm(prev => ({ ...prev, bocal: "ramene" }))}
                              className="accent-sage mt-1"
                            />
                            <span className="text-sm text-charcoal">
                              Je ramène mon propre bocal (750ml, 1L ou plus) — <strong>7€</strong>
                            </span>
                          </label>
                          <label className="flex items-start gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="bocal"
                              value="surplace"
                              checked={wardianForm.bocal === "surplace"}
                              onChange={() => setWardianForm(prev => ({ ...prev, bocal: "surplace" }))}
                              className="accent-sage mt-1"
                            />
                            <span className="text-sm text-charcoal">
                              Bocal fourni sur place — <strong>8,50€</strong> (7€ + 1,50€)
                            </span>
                          </label>
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">Message (optionnel)</label>
                      <textarea
                        maxLength={500}
                        value={wardianForm.message}
                        onChange={(e) => setWardianForm(prev => ({ ...prev, message: e.target.value }))}
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-sage/30 bg-background focus:outline-none focus:ring-2 focus:ring-sage/50 resize-none"
                        placeholder="Question, allergie, besoin spécifique..."
                      />
                    </div>

                    {/* Price recap */}
                    <div className="bg-sand/50 rounded-lg p-4 text-center">
                      <p className="text-sm text-charcoal/70">Tarif estimé</p>
                      <p className="text-xl font-semibold text-sage-dark">{wardianPrice()}</p>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmittingWardian}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-sage hover:bg-sage-dark disabled:opacity-50 text-off-white font-semibold uppercase tracking-wider transition-all duration-300 rounded-full"
                    >
                      {isSubmittingWardian ? "Envoi en cours..." : "Valider mon inscription"}
                    </button>

                    <p className="text-xs text-charcoal/50 text-center">
                      Votre inscription sera confirmée par email. Le paiement se fait sur place le jour de l'atelier.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Info Banner */}
            <div className="bg-sage/10 border border-sage/30 rounded-lg p-6 mb-12 flex items-start gap-4 animate-fade-in">
              <Info className="w-6 h-6 text-sage flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-charcoal font-medium mb-1">Ateliers réguliers</p>
                <p className="text-charcoal/70 text-sm">
                  En plus des événements ci-dessus, nous proposons régulièrement des ateliers tout au long de l'année. 
                  Consultez le tableau ci-dessous ou contactez-nous pour organiser un atelier privé.
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
                      <TableRow key={index} className="hover:bg-sage/5 transition-colors">
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
                          <Link 
                            to={`/contact?atelier=${encodeURIComponent(workshop.name)}&date=${encodeURIComponent(workshop.dates)}&lieu=${encodeURIComponent(workshop.location)}`}
                            className="inline-flex items-center px-4 py-2 bg-sage hover:bg-sage-dark text-off-white text-xs uppercase tracking-wider font-semibold transition-all duration-300 rounded-full"
                          >
                            Réserver
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-4">
                {workshops.map((workshop, index) => (
                  <Card key={index}>
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
                      <Link 
                        to={`/contact?atelier=${encodeURIComponent(workshop.name)}&date=${encodeURIComponent(workshop.dates)}&lieu=${encodeURIComponent(workshop.location)}`}
                        className="mt-2 w-full inline-flex items-center justify-center px-4 py-2.5 bg-sage hover:bg-sage-dark text-off-white text-sm uppercase tracking-wider font-semibold transition-all duration-300 rounded-full"
                      >
                        Réserver cet atelier
                      </Link>
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
                  <Link 
                    to="/contact?atelier=Atelier%20sur%20mesure%20/%20Groupe%20privé"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-sage hover:bg-sage-dark text-off-white text-sm uppercase tracking-wider font-semibold transition-all duration-300 rounded-full"
                  >
                    <Mail className="w-4 h-4" />
                    Contactez-nous pour un atelier sur mesure
                  </Link>
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
                to="/pro"
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
