import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from "@/components/ScrollToTop";
import FloatingContactButton from "@/components/FloatingContactButton";
import Index from "./pages/Index";
import About from "./pages/About";
import Workshops from "./pages/Workshops";
import Pro from "./pages/Pro";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import LegalNotice from "./pages/LegalNotice";
import SalesTerms from "./pages/SalesTerms";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import AdminTestimonials from "./pages/AdminTestimonials";
import Agenda from "./pages/Agenda";
import AteliersBotaniquesYvelines from "./pages/AteliersBotaniquesYvelines";
import TeamBuildingRSEParis from "./pages/TeamBuildingRSEParis";
import AteliersBotaniqueEntrepriseIDF from "./pages/AteliersBotaniqueEntrepriseIDF";
import AteliersIDF from "./pages/AteliersIDF";
import Blog from "./pages/Blog";
import BlogTeintureChouRouge from "./pages/BlogTeintureChouRouge";
import BlogMonsteraColonialisme from "./pages/BlogMonsteraColonialisme";
import BlogPalmiersHaussmann from "./pages/BlogPalmiersHaussmann";
import BlogTerrariumBiopiraterie from "./pages/BlogTerrariumBiopiraterie";
import LandingSeniorsEHPAD from "./pages/LandingSeniorsEHPAD";
import LandingCSE from "./pages/LandingCSE";
import LandingEcoles from "./pages/LandingEcoles";
import LandingMJC from "./pages/LandingMJC";
import LandingTeamBuilding from "./pages/LandingTeamBuilding";
import AtelierBotaniqueSaintGermain from "./pages/AtelierBotaniqueSaintGermain";
import AtelierBotaniqueLePecq from "./pages/AtelierBotaniqueLePecq";
import AtelierBotaniqueLeVesinet from "./pages/AtelierBotaniqueLeVesinet";
import AtelierBotaniqueChatou from "./pages/AtelierBotaniqueChatou";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <FloatingContactButton />
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/pro" element={<Pro />} />
          {/* Redirects from old pages to new /pro page */}
          <Route path="/b2b" element={<Navigate to="/pro" replace />} />
          <Route path="/training" element={<Navigate to="/pro" replace />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/calendar" element={<Agenda />} />
          <Route path="/calendrier" element={<Agenda />} />
          <Route path="/ateliers-botaniques-yvelines" element={<AteliersBotaniquesYvelines />} />
          <Route path="/team-building-rse-paris" element={<TeamBuildingRSEParis />} />
          <Route path="/ateliers-botanique-entreprise-idf" element={<AteliersBotaniqueEntrepriseIDF />} />
          <Route path="/ateliers-idf" element={<AteliersIDF />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/teinture-vegetale-chou-rouge-indigo-naturel" element={<BlogTeintureChouRouge />} />
          <Route path="/blog/monstera-plante-coloniale-distinction-sociale" element={<BlogMonsteraColonialisme />} />
          <Route path="/blog/palmiers-architecture-haussmannienne-colonialisme" element={<BlogPalmiersHaussmann />} />
          <Route path="/blog/terrarium-biopiraterie-histoire-coloniale" element={<BlogTerrariumBiopiraterie />} />
          <Route path="/actualites" element={<Blog />} />
          <Route path="/animation-seniors-ehpad" element={<LandingSeniorsEHPAD />} />
          <Route path="/animation-cse-entreprise" element={<LandingCSE />} />
          <Route path="/animation-scolaire-nature" element={<LandingEcoles />} />
          <Route path="/ateliers-mjc-association" element={<LandingMJC />} />
          <Route path="/team-building-nature-entreprise" element={<LandingTeamBuilding />} />
          <Route path="/atelier-botanique-saint-germain-en-laye" element={<AtelierBotaniqueSaintGermain />} />
          <Route path="/atelier-botanique-le-pecq" element={<AtelierBotaniqueLePecq />} />
          <Route path="/atelier-botanique-le-vesinet" element={<AtelierBotaniqueLeVesinet />} />
          <Route path="/atelier-botanique-chatou" element={<AtelierBotaniqueChatou />} />
          <Route path="/mentions-legales" element={<LegalNotice />} />
          <Route path="/conditions-de-vente" element={<SalesTerms />} />
          <Route path="/admin/testimonials" element={<AdminTestimonials />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
