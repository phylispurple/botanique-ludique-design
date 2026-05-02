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
import InscriptionWardianCase from "./pages/InscriptionWardianCase";
import InscriptionMauvaisesHerbes from "./pages/InscriptionMauvaisesHerbes";
import InscriptionTeinturesVegetales from "./pages/InscriptionTeinturesVegetales";
import AteliersBotaniquesYvelines from "./pages/AteliersBotaniquesYvelines";
import TeamBuildingRSEParis from "./pages/TeamBuildingRSEParis";
import AteliersBotaniqueEntrepriseIDF from "./pages/AteliersBotaniqueEntrepriseIDF";
import AteliersIDF from "./pages/AteliersIDF";
import Blog from "./pages/Blog";
import BlogTeintureChouRouge from "./pages/BlogTeintureChouRouge";
import BlogMonsteraColonialisme from "./pages/BlogMonsteraColonialisme";
import BlogPalmiersHaussmann from "./pages/BlogPalmiersHaussmann";
import BlogTerrariumBiopiraterie from "./pages/BlogTerrariumBiopiraterie";
import BlogFilmsNature from "./pages/BlogFilmsNature";
import BlogBotaniqueCollege from "./pages/BlogBotaniqueCollege";
import BlogPlantesSauvagesSortie from "./pages/BlogPlantesSauvagesSortie";
import BlogMediationScientifique from "./pages/BlogMediationScientifique";
import LandingSeniorsEHPAD from "./pages/LandingSeniorsEHPAD";
import LandingCSE from "./pages/LandingCSE";
import LandingEcoles from "./pages/LandingEcoles";
import LandingMJC from "./pages/LandingMJC";
import LandingTeamBuilding from "./pages/LandingTeamBuilding";
import AtelierBotaniqueSaintGermain from "./pages/AtelierBotaniqueSaintGermain";
import AtelierBotaniqueLePecq from "./pages/AtelierBotaniqueLePecq";
import AtelierBotaniqueLeVesinet from "./pages/AtelierBotaniqueLeVesinet";
import AtelierBotaniqueChatou from "./pages/AtelierBotaniqueChatou";
import AtelierBotaniqueVersailles from "./pages/AtelierBotaniqueVersailles";
import AtelierBotaniqueNanterre from "./pages/AtelierBotaniqueNanterre";
import AtelierBotaniqueBoulogne from "./pages/AtelierBotaniqueBoulogne";
import AtelierBotaniqueCergy from "./pages/AtelierBotaniqueCergy";
import AtelierTerrariumTeamBuilding from "./pages/AtelierTerrariumTeamBuilding";
import AtelierBienEtreNatureEntreprise from "./pages/AtelierBienEtreNatureEntreprise";
import AnimationSemaineQVCT from "./pages/AnimationSemaineQVCT";
import ActiviteIntergenerationnelle from "./pages/ActiviteIntergenerationnelle";
import AtelierKokedamaTeamBuilding from "./pages/AtelierKokedamaTeamBuilding";
import AtelierTeintureScolaire from "./pages/AtelierTeintureScolaire";
import AnimationNatureEHPAD from "./pages/AnimationNatureEHPAD";
import AteliersBotaniquesComplets from "./pages/AteliersBotaniquesComplets";
import LandingCollectivites from "./pages/LandingCollectivites";
import AtelierBotaniqueEvenement from "./pages/AtelierBotaniqueEvenement";
import AtelierBotaniqueRueilMalmaison from "./pages/AtelierBotaniqueRueilMalmaison";
import AtelierBotaniqueConflans from "./pages/AtelierBotaniqueConflans";
import AtelierKokedamaParis from "./pages/AtelierKokedamaParis";
import AtelierTerrariumParis from "./pages/AtelierTerrariumParis";
import AtelierTeintureVegetale from "./pages/AtelierTeintureVegetale";
import AnimationCentreSocial from "./pages/AnimationCentreSocial";
import AnimatriceNatureIDF from "./pages/AnimatriceNatureIDF";
import AnimatriceBotaniqueYvelines from "./pages/AnimatriceBotaniqueYvelines";
import AnimatriceNatureParis from "./pages/AnimatriceNatureParis";
import AnimatriceNatureHautsDeSeine from "./pages/AnimatriceNatureHautsDeSeine";
import AnimatriceBotaniqueValDOise from "./pages/AnimatriceBotaniqueValDOise";
import IntervenantScientifiqueIDF from "./pages/IntervenantScientifiqueIDF";
import IntervenantScientifiqueParis from "./pages/IntervenantScientifiqueParis";
import IntervenantScientifiqueYvelines from "./pages/IntervenantScientifiqueYvelines";
import IntervenantScientifiqueHautsDeSeine from "./pages/IntervenantScientifiqueHautsDeSeine";
import IntervenantScientifiqueValDOise from "./pages/IntervenantScientifiqueValDOise";
import AtelierBotaniqueEnfantIDF from "./pages/AtelierBotaniqueEnfantIDF";
import AtelierBotaniqueEnfantParis from "./pages/AtelierBotaniqueEnfantParis";
import AtelierBotaniqueEnfantYvelines from "./pages/AtelierBotaniqueEnfantYvelines";
import AtelierBotaniqueEnfantHautsDeSeine from "./pages/AtelierBotaniqueEnfantHautsDeSeine";
import AtelierBotaniqueEnfantValDOise from "./pages/AtelierBotaniqueEnfantValDOise";
import AtelierBotaniqueAdulteIDF from "./pages/AtelierBotaniqueAdulteIDF";
import AtelierBotaniqueAdulteParis from "./pages/AtelierBotaniqueAdulteParis";
import AtelierBotaniqueAdulteYvelines from "./pages/AtelierBotaniqueAdulteYvelines";
import AtelierBotaniqueAdulteHautsDeSeine from "./pages/AtelierBotaniqueAdulteHautsDeSeine";
import AtelierBotaniqueAdulteValDOise from "./pages/AtelierBotaniqueAdulteValDOise";
import DemoCreative from "./pages/DemoCreative";
import DemoManus from "./pages/DemoManus";
import Association from "./pages/Association";
import EtablissementsScolaires from "./pages/EtablissementsScolaires";
import Unsubscribe from "./pages/Unsubscribe";
import MediationScientifiqueIDF from "./pages/MediationScientifiqueIDF";
import MediationScientifiqueParis from "./pages/MediationScientifiqueParis";
import MediationScientifiqueYvelines from "./pages/MediationScientifiqueYvelines";
import MediationScientifiqueHautsDeSeine from "./pages/MediationScientifiqueHautsDeSeine";
import MediationScientifiqueValDOise from "./pages/MediationScientifiqueValDOise";
import MediationBotaniqueIDF from "./pages/MediationBotaniqueIDF";
import MediationBotaniqueParis from "./pages/MediationBotaniqueParis";
import MediationBotaniqueYvelines from "./pages/MediationBotaniqueYvelines";
import MediationBotaniqueHautsDeSeine from "./pages/MediationBotaniqueHautsDeSeine";
import MediationBotaniqueValDOise from "./pages/MediationBotaniqueValDOise";
import AnimationBotaniqueIDF from "./pages/AnimationBotaniqueIDF";
import AnimationBotaniqueParis from "./pages/AnimationBotaniqueParis";
import AnimationBotaniqueYvelines from "./pages/AnimationBotaniqueYvelines";
import AnimationBotaniqueHautsDeSeine from "./pages/AnimationBotaniqueHautsDeSeine";
import AnimationBotaniqueValDOise from "./pages/AnimationBotaniqueValDOise";
import MediationCulturelleNatureIDF from "./pages/MediationCulturelleNatureIDF";
import MediationCulturelleNatureParis from "./pages/MediationCulturelleNatureParis";
import MediationCulturelleNatureYvelines from "./pages/MediationCulturelleNatureYvelines";
import MediationCulturelleNatureHautsDeSeine from "./pages/MediationCulturelleNatureHautsDeSeine";
import MediationCulturelleNatureValDOise from "./pages/MediationCulturelleNatureValDOise";
import BaladesBotaniques from "./pages/BaladesBotaniques";
import BaladeBotaniqueMusee from "./pages/BaladeBotaniqueMusee";
import BaladeBotaniqueJardinPatrimonial from "./pages/BaladeBotaniqueJardinPatrimonial";
import BaladeBotaniqueUrbaineParis from "./pages/BaladeBotaniqueUrbaineParis";
import BaladeBotaniqueParis from "./pages/BaladeBotaniqueParis";
import BaladeBotaniqueYvelines from "./pages/BaladeBotaniqueYvelines";
import BaladeBotaniqueHautsDeSeine from "./pages/BaladeBotaniqueHautsDeSeine";
import BaladeBotaniqueValDOise from "./pages/BaladeBotaniqueValDOise";
import BaladeBotaniqueEntreprise from "./pages/BaladeBotaniqueEntreprise";
import BaladeBotaniqueScolaire from "./pages/BaladeBotaniqueScolaire";
import BaladePlantesSauvagesParis from "./pages/BaladePlantesSauvagesParis";
import BaladeBotaniqueColoniale from "./pages/BaladeBotaniqueColoniale";
import BaladeBotaniquePrintempsEte from "./pages/BaladeBotaniquePrintempsEte";

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
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/association" element={<Association />} />
          <Route path="/etablissements-scolaires" element={<EtablissementsScolaires />} />
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
          <Route path="/inscription/wardian-case" element={<InscriptionWardianCase />} />
          <Route path="/inscription/mauvaises-herbes" element={<InscriptionMauvaisesHerbes />} />
          <Route path="/inscription/teintures-vegetales" element={<InscriptionTeinturesVegetales />} />
          <Route path="/ateliers-botaniques-yvelines" element={<AteliersBotaniquesYvelines />} />
          <Route path="/team-building-rse-paris" element={<TeamBuildingRSEParis />} />
          <Route path="/ateliers-botanique-entreprise-idf" element={<AteliersBotaniqueEntrepriseIDF />} />
          <Route path="/ateliers-idf" element={<AteliersIDF />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/teinture-vegetale-chou-rouge-indigo-naturel" element={<BlogTeintureChouRouge />} />
          <Route path="/blog/monstera-plante-coloniale-distinction-sociale" element={<BlogMonsteraColonialisme />} />
          <Route path="/blog/palmiers-architecture-haussmannienne-colonialisme" element={<BlogPalmiersHaussmann />} />
          <Route path="/blog/terrarium-biopiraterie-histoire-coloniale" element={<BlogTerrariumBiopiraterie />} />
          <Route path="/blog/10-films-nature-idees-fausses" element={<BlogFilmsNature />} />
          <Route path="/blog/botanique-projet-pedagogique-college" element={<BlogBotaniqueCollege />} />
          <Route path="/blog/plantes-sauvages-sortie-scolaire-ile-de-france" element={<BlogPlantesSauvagesSortie />} />
          <Route path="/blog/mediation-scientifique-definition-exemples" element={<BlogMediationScientifique />} />
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
           <Route path="/atelier-botanique-versailles" element={<AtelierBotaniqueVersailles />} />
           <Route path="/atelier-botanique-nanterre" element={<AtelierBotaniqueNanterre />} />
           <Route path="/atelier-botanique-boulogne-billancourt" element={<AtelierBotaniqueBoulogne />} />
           <Route path="/atelier-botanique-cergy" element={<AtelierBotaniqueCergy />} />
           <Route path="/atelier-terrarium-team-building" element={<AtelierTerrariumTeamBuilding />} />
           <Route path="/atelier-bien-etre-nature-entreprise" element={<AtelierBienEtreNatureEntreprise />} />
           <Route path="/animation-semaine-qvct" element={<AnimationSemaineQVCT />} />
           <Route path="/activite-intergenerationnelle-nature" element={<ActiviteIntergenerationnelle />} />
           <Route path="/atelier-kokedama-team-building" element={<AtelierKokedamaTeamBuilding />} />
           <Route path="/atelier-teinture-vegetale-ecole" element={<AtelierTeintureScolaire />} />
           <Route path="/animation-nature-ehpad" element={<AnimationNatureEHPAD />} />
            <Route path="/ateliers-botaniques-tous" element={<AteliersBotaniquesComplets />} />
             <Route path="/animation-collectivites-mairies" element={<LandingCollectivites />} />
             <Route path="/atelier-botanique-evenement" element={<AtelierBotaniqueEvenement />} />
             <Route path="/atelier-botanique-rueil-malmaison" element={<AtelierBotaniqueRueilMalmaison />} />
             <Route path="/atelier-botanique-conflans-sainte-honorine" element={<AtelierBotaniqueConflans />} />
             <Route path="/atelier-kokedama-paris" element={<AtelierKokedamaParis />} />
             <Route path="/atelier-terrarium-paris" element={<AtelierTerrariumParis />} />
             <Route path="/atelier-teinture-vegetale" element={<AtelierTeintureVegetale />} />
              <Route path="/animation-centre-social" element={<AnimationCentreSocial />} />
              <Route path="/animatrice-nature-ile-de-france" element={<AnimatriceNatureIDF />} />
              <Route path="/animatrice-botanique-yvelines" element={<AnimatriceBotaniqueYvelines />} />
              <Route path="/animatrice-nature-paris" element={<AnimatriceNatureParis />} />
              <Route path="/animatrice-nature-hauts-de-seine" element={<AnimatriceNatureHautsDeSeine />} />
               <Route path="/animatrice-botanique-val-d-oise" element={<AnimatriceBotaniqueValDOise />} />
               <Route path="/intervenant-scientifique-ile-de-france" element={<IntervenantScientifiqueIDF />} />
               <Route path="/intervenant-scientifique-paris" element={<IntervenantScientifiqueParis />} />
               <Route path="/intervenant-scientifique-yvelines" element={<IntervenantScientifiqueYvelines />} />
               <Route path="/intervenant-scientifique-hauts-de-seine" element={<IntervenantScientifiqueHautsDeSeine />} />
               <Route path="/intervenant-scientifique-val-d-oise" element={<IntervenantScientifiqueValDOise />} />
               <Route path="/atelier-botanique-enfant-ile-de-france" element={<AtelierBotaniqueEnfantIDF />} />
               <Route path="/atelier-botanique-enfant-paris" element={<AtelierBotaniqueEnfantParis />} />
               <Route path="/atelier-botanique-enfant-yvelines" element={<AtelierBotaniqueEnfantYvelines />} />
               <Route path="/atelier-botanique-enfant-hauts-de-seine" element={<AtelierBotaniqueEnfantHautsDeSeine />} />
               <Route path="/atelier-botanique-enfant-val-d-oise" element={<AtelierBotaniqueEnfantValDOise />} />
               <Route path="/atelier-botanique-adulte-ile-de-france" element={<AtelierBotaniqueAdulteIDF />} />
               <Route path="/atelier-botanique-adulte-paris" element={<AtelierBotaniqueAdulteParis />} />
               <Route path="/atelier-botanique-adulte-yvelines" element={<AtelierBotaniqueAdulteYvelines />} />
               <Route path="/atelier-botanique-adulte-hauts-de-seine" element={<AtelierBotaniqueAdulteHautsDeSeine />} />
               <Route path="/atelier-botanique-adulte-val-d-oise" element={<AtelierBotaniqueAdulteValDOise />} />
                 <Route path="/demo-creative" element={<DemoCreative />} />
                 <Route path="/demo-manus" element={<DemoManus />} />
                 {/* Médiation scientifique */}
                 <Route path="/mediation-scientifique-ile-de-france" element={<MediationScientifiqueIDF />} />
                 <Route path="/mediation-scientifique-paris" element={<MediationScientifiqueParis />} />
                 <Route path="/mediation-scientifique-yvelines" element={<MediationScientifiqueYvelines />} />
                 <Route path="/mediation-scientifique-hauts-de-seine" element={<MediationScientifiqueHautsDeSeine />} />
                 <Route path="/mediation-scientifique-val-d-oise" element={<MediationScientifiqueValDOise />} />
                 {/* Médiation botanique */}
                 <Route path="/mediation-botanique-ile-de-france" element={<MediationBotaniqueIDF />} />
                 <Route path="/mediation-botanique-paris" element={<MediationBotaniqueParis />} />
                 <Route path="/mediation-botanique-yvelines" element={<MediationBotaniqueYvelines />} />
                 <Route path="/mediation-botanique-hauts-de-seine" element={<MediationBotaniqueHautsDeSeine />} />
                 <Route path="/mediation-botanique-val-d-oise" element={<MediationBotaniqueValDOise />} />
                 {/* Animation botanique */}
                 <Route path="/animation-botanique-ile-de-france" element={<AnimationBotaniqueIDF />} />
                 <Route path="/animation-botanique-paris" element={<AnimationBotaniqueParis />} />
                 <Route path="/animation-botanique-yvelines" element={<AnimationBotaniqueYvelines />} />
                 <Route path="/animation-botanique-hauts-de-seine" element={<AnimationBotaniqueHautsDeSeine />} />
                 <Route path="/animation-botanique-val-d-oise" element={<AnimationBotaniqueValDOise />} />
                 {/* Médiation culturelle nature */}
                 <Route path="/mediation-culturelle-nature-ile-de-france" element={<MediationCulturelleNatureIDF />} />
                 <Route path="/mediation-culturelle-nature-paris" element={<MediationCulturelleNatureParis />} />
                 <Route path="/mediation-culturelle-nature-yvelines" element={<MediationCulturelleNatureYvelines />} />
                 <Route path="/mediation-culturelle-nature-hauts-de-seine" element={<MediationCulturelleNatureHautsDeSeine />} />
                 <Route path="/mediation-culturelle-nature-val-d-oise" element={<MediationCulturelleNatureValDOise />} />
                 {/* Balades botaniques */}
                 <Route path="/balades-botaniques" element={<BaladesBotaniques />} />
                 <Route path="/balade-botanique-musee" element={<BaladeBotaniqueMusee />} />
                 <Route path="/balade-botanique-jardin-patrimonial" element={<BaladeBotaniqueJardinPatrimonial />} />
                 <Route path="/balade-botanique-urbaine-paris" element={<BaladeBotaniqueUrbaineParis />} />
                {/* Redirects for existing pages with alternate URLs */}
             <Route path="/atelier-botanique-ehpad" element={<Navigate to="/animation-seniors-ehpad" replace />} />
             <Route path="/atelier-botanique-ecole" element={<Navigate to="/animation-scolaire-nature" replace />} />
           <Route path="/mentions-legales" element={<LegalNotice />} />
          <Route path="/conditions-de-vente" element={<SalesTerms />} />
          <Route path="/admin/testimonials" element={<AdminTestimonials />} />
          <Route path="/unsubscribe" element={<Unsubscribe />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
