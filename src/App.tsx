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
import InscriptionTerrariumJuin from "./pages/InscriptionTerrariumJuin";
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
import BlogFinancerAnimationCCAS from "./pages/BlogFinancerAnimationCCAS";
import BlogFeteNatureMairie from "./pages/BlogFeteNatureMairie";
import BlogJourneesPatrimoineVegetal from "./pages/BlogJourneesPatrimoineVegetal";
import BlogSemaineDDMairie from "./pages/BlogSemaineDDMairie";
import MarchesPublics from "./pages/MarchesPublics";
import ReferencesCollectivites from "./pages/ReferencesCollectivites";
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
import AtelierEthnobotaniqueEntreprise from "./pages/AtelierEthnobotaniqueEntreprise";
import AtelierBotaniqueRambouillet from "./pages/AtelierBotaniqueRambouillet";
import TeamBuildingVegetalRambouillet from "./pages/TeamBuildingVegetalRambouillet";
import HortitherapieHopitalClinique from "./pages/HortitherapieHopitalClinique";
import AnimationNatureUniversiteBDE from "./pages/AnimationNatureUniversiteBDE";
import MediationVegetaleArchitectesPaysagistes from "./pages/MediationVegetaleArchitectesPaysagistes";
import AnimationNatureBailleursSociaux from "./pages/AnimationNatureBailleursSociaux";
import AtelierVegetalParentaliteNaissance from "./pages/AtelierVegetalParentaliteNaissance";
import AnimationVegetaleHotelEvenementiel from "./pages/AnimationVegetaleHotelEvenementiel";
import BaladeEthnobotaniqueOfficeTourisme from "./pages/BaladeEthnobotaniqueOfficeTourisme";
import AtelierVegetalCabinetRHCoach from "./pages/AtelierVegetalCabinetRHCoach";
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
import AtelierFloralParis from "./pages/AtelierFloralParis";
import ProLandingPage from "./pages/ProLandingPage";
import ProBlogArticle from "./pages/ProBlogArticle";
import { PRO_LANDINGS } from "@/data/proLandings";
import { PRO_ARTICLES } from "@/data/proBlogArticles";
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
import AtelierTeintureVegetaleParis from "./pages/AtelierTeintureVegetaleParis";
import AtelierKombuchaCuirVegetal from "./pages/AtelierKombuchaCuirVegetal";
import AtelierEvjfBotaniqueParis from "./pages/AtelierEvjfBotaniqueParis";
import AtelierAnniversaireEnfantParis from "./pages/AtelierAnniversaireEnfantParis";
import AtelierAnniversaireAdulteParis from "./pages/AtelierAnniversaireAdulteParis";
import AtelierBabyShowerVegetal from "./pages/AtelierBabyShowerVegetal";
import AtelierNoelCouronneVegetale from "./pages/AtelierNoelCouronneVegetale";
import AtelierCoupleNatureParis from "./pages/AtelierCoupleNatureParis";
import CadeauOriginalNatureParis from "./pages/CadeauOriginalNatureParis";
import IdeeCadeauAmoureuxPlantes from "./pages/IdeeCadeauAmoureuxPlantes";
import GuideTerrarium from "./pages/GuideTerrarium";
import GuideKokedama from "./pages/GuideKokedama";
import GuideEthnobotanique from "./pages/GuideEthnobotanique";
import GuidePlantesTinctoriales from "./pages/GuidePlantesTinctoriales";
import AnimationSeminaireParis from "./pages/AnimationSeminaireParis";
import AtelierOnboarding from "./pages/AtelierOnboarding";
import AnimationSoireeEntreprise from "./pages/AnimationSoireeEntreprise";
import InterventionMediatheque from "./pages/InterventionMediatheque";
import InterventionFestivalCulturel from "./pages/InterventionFestivalCulturel";
import AnimationFoyerJeunes from "./pages/AnimationFoyerJeunes";
import AtelierTherapeutiqueJardin from "./pages/AtelierTherapeutiqueJardin";
import AtelierResidenceSeniors from "./pages/AtelierResidenceSeniors";
import BaladeBotaniqueSeineSaintDenis from "./pages/BaladeBotaniqueSeineSaintDenis";
import BaladeBotaniqueValDeMarne from "./pages/BaladeBotaniqueValDeMarne";
import BaladeBotaniqueEssonne from "./pages/BaladeBotaniqueEssonne";
import BaladeBotaniqueSeineEtMarne from "./pages/BaladeBotaniqueSeineEtMarne";
import TerrariumYvelines from "./pages/TerrariumYvelines";
import TerrariumHautsDeSeine from "./pages/TerrariumHautsDeSeine";
import KokedamaYvelines from "./pages/KokedamaYvelines";
import KokedamaHautsDeSeine from "./pages/KokedamaHautsDeSeine";
import TeintureVegetaleYvelines from "./pages/TeintureVegetaleYvelines";
import TeintureVegetaleHautsDeSeine from "./pages/TeintureVegetaleHautsDeSeine";
import EvjfYvelines from "./pages/EvjfYvelines";
import EvjfHautsDeSeine from "./pages/EvjfHautsDeSeine";
import AnniversaireAdulteYvelines from "./pages/AnniversaireAdulteYvelines";
import AnniversaireAdulteHautsDeSeine from "./pages/AnniversaireAdulteHautsDeSeine";
import BabyShowerVegetalYvelines from "./pages/BabyShowerVegetalYvelines";
import BabyShowerVegetalHautsDeSeine from "./pages/BabyShowerVegetalHautsDeSeine";
import NoelCouronneVegetaleYvelines from "./pages/NoelCouronneVegetaleYvelines";
import NoelCouronneVegetaleHautsDeSeine from "./pages/NoelCouronneVegetaleHautsDeSeine";
import CoupleNatureYvelines from "./pages/CoupleNatureYvelines";
import CoupleNatureHautsDeSeine from "./pages/CoupleNatureHautsDeSeine";
import SeminaireEntrepriseParis from "./pages/SeminaireEntrepriseParis";
import SeminaireEntrepriseYvelines from "./pages/SeminaireEntrepriseYvelines";
import SeminaireEntrepriseHautsDeSeine from "./pages/SeminaireEntrepriseHautsDeSeine";
import SeminaireEntrepriseValDOise from "./pages/SeminaireEntrepriseValDOise";
import MediathequeParis from "./pages/MediathequeParis";
import MediathequeYvelines from "./pages/MediathequeYvelines";
import MediathequeHautsDeSeine from "./pages/MediathequeHautsDeSeine";
import MediathequeValDOise from "./pages/MediathequeValDOise";
import HortitherapieParis from "./pages/HortitherapieParis";
import HortitherapieYvelines from "./pages/HortitherapieYvelines";
import HortitherapieHautsDeSeine from "./pages/HortitherapieHautsDeSeine";
import HortitherapieValDOise from "./pages/HortitherapieValDOise";
import OnboardingParis from "./pages/OnboardingParis";
import OnboardingYvelines from "./pages/OnboardingYvelines";
import OnboardingHautsDeSeine from "./pages/OnboardingHautsDeSeine";
import OnboardingValDOise from "./pages/OnboardingValDOise";
import SoireeEntrepriseParis from "./pages/SoireeEntrepriseParis";
import SoireeEntrepriseYvelines from "./pages/SoireeEntrepriseYvelines";
import SoireeEntrepriseHautsDeSeine from "./pages/SoireeEntrepriseHautsDeSeine";
import SoireeEntrepriseValDOise from "./pages/SoireeEntrepriseValDOise";
import FestivalCulturelParis from "./pages/FestivalCulturelParis";
import FestivalCulturelYvelines from "./pages/FestivalCulturelYvelines";
import FestivalCulturelHautsDeSeine from "./pages/FestivalCulturelHautsDeSeine";
import FestivalCulturelValDOise from "./pages/FestivalCulturelValDOise";
import FoyerJeunesParis from "./pages/FoyerJeunesParis";
import FoyerJeunesYvelines from "./pages/FoyerJeunesYvelines";
import FoyerJeunesHautsDeSeine from "./pages/FoyerJeunesHautsDeSeine";
import FoyerJeunesValDOise from "./pages/FoyerJeunesValDOise";
import CadeauOriginalNatureYvelines from "./pages/CadeauOriginalNatureYvelines";
import CadeauOriginalNatureHautsDeSeine from "./pages/CadeauOriginalNatureHautsDeSeine";
import CadeauOriginalNatureValDOise from "./pages/CadeauOriginalNatureValDOise";

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
          <Route path="/inscription/terrarium-6-juin" element={<InscriptionTerrariumJuin />} />
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
          <Route path="/blog/financer-animation-nature-ccas" element={<BlogFinancerAnimationCCAS />} />
          <Route path="/blog/organiser-fete-nature-mairie" element={<BlogFeteNatureMairie />} />
          <Route path="/blog/journees-patrimoine-animations-vegetales" element={<BlogJourneesPatrimoineVegetal />} />
          <Route path="/blog/semaine-developpement-durable-mairie" element={<BlogSemaineDDMairie />} />
          <Route path="/marches-publics" element={<MarchesPublics />} />
          <Route path="/references-collectivites" element={<ReferencesCollectivites />} />
          <Route path="/actualites" element={<Blog />} />
          <Route path="/animation-seniors-ehpad" element={<LandingSeniorsEHPAD />} />
          <Route path="/animation-cse-entreprise" element={<LandingCSE />} />
          <Route path="/animation-scolaire-nature" element={<LandingEcoles />} />
          <Route path="/ateliers-mjc-association" element={<LandingMJC />} />
         <Route path="/team-building-nature-entreprise" element={<LandingTeamBuilding />} />
         <Route path="/atelier-ethnobotanique-entreprise" element={<AtelierEthnobotaniqueEntreprise />} />
         <Route path="/atelier-botanique-rambouillet" element={<AtelierBotaniqueRambouillet />} />
         <Route path="/team-building-vegetal-rambouillet" element={<TeamBuildingVegetalRambouillet />} />
         <Route path="/hortitherapie-hopital-clinique" element={<HortitherapieHopitalClinique />} />
         <Route path="/animation-nature-universite-bde" element={<AnimationNatureUniversiteBDE />} />
         <Route path="/mediation-vegetale-architectes-paysagistes" element={<MediationVegetaleArchitectesPaysagistes />} />
         <Route path="/animation-nature-bailleurs-sociaux" element={<AnimationNatureBailleursSociaux />} />
         <Route path="/atelier-vegetal-parentalite-naissance" element={<AtelierVegetalParentaliteNaissance />} />
         <Route path="/animation-vegetale-hotel-evenementiel" element={<AnimationVegetaleHotelEvenementiel />} />
         <Route path="/balade-ethnobotanique-office-tourisme" element={<BaladeEthnobotaniqueOfficeTourisme />} />
         <Route path="/atelier-vegetal-cabinet-rh-coach" element={<AtelierVegetalCabinetRHCoach />} />
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
               <Route path="/atelier-floral-paris" element={<AtelierFloralParis />} />
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
                 <Route path="/balade-botanique-paris" element={<BaladeBotaniqueParis />} />
                 <Route path="/balade-botanique-yvelines" element={<BaladeBotaniqueYvelines />} />
                 <Route path="/balade-botanique-hauts-de-seine" element={<BaladeBotaniqueHautsDeSeine />} />
                 <Route path="/balade-botanique-val-d-oise" element={<BaladeBotaniqueValDOise />} />
                 <Route path="/balade-botanique-entreprise-cse" element={<BaladeBotaniqueEntreprise />} />
                 <Route path="/balade-botanique-scolaire" element={<BaladeBotaniqueScolaire />} />
                 <Route path="/balade-plantes-sauvages-comestibles-paris" element={<BaladePlantesSauvagesParis />} />
                 <Route path="/balade-botanique-coloniale-paris" element={<BaladeBotaniqueColoniale />} />
                 <Route path="/balade-botanique-printemps-ete" element={<BaladeBotaniquePrintempsEte />} />
                 {/* Vague SEO 6 - Produits, occasions, guides, B2B, social, départements */}
                 <Route path="/atelier-teinture-vegetale-paris" element={<AtelierTeintureVegetaleParis />} />
                 <Route path="/atelier-kombucha-cuir-vegetal" element={<AtelierKombuchaCuirVegetal />} />
                 <Route path="/atelier-evjf-botanique-paris" element={<AtelierEvjfBotaniqueParis />} />
                 <Route path="/atelier-anniversaire-enfant-nature-paris" element={<AtelierAnniversaireEnfantParis />} />
                 <Route path="/atelier-anniversaire-adulte-nature-paris" element={<AtelierAnniversaireAdulteParis />} />
                 <Route path="/atelier-baby-shower-vegetal-paris" element={<AtelierBabyShowerVegetal />} />
                 <Route path="/atelier-noel-couronne-vegetale-paris" element={<AtelierNoelCouronneVegetale />} />
                 <Route path="/atelier-couple-nature-paris" element={<AtelierCoupleNatureParis />} />
                 <Route path="/cadeau-original-nature-paris" element={<CadeauOriginalNatureParis />} />
                 <Route path="/idee-cadeau-amoureux-des-plantes" element={<IdeeCadeauAmoureuxPlantes />} />
                 <Route path="/guide/comment-faire-un-terrarium" element={<GuideTerrarium />} />
                 <Route path="/guide/comment-faire-un-kokedama" element={<GuideKokedama />} />
                 <Route path="/guide/ethnobotanique-definition" element={<GuideEthnobotanique />} />
                 <Route path="/guide/plantes-tinctoriales-ile-de-france" element={<GuidePlantesTinctoriales />} />
                 <Route path="/animation-seminaire-entreprise-paris" element={<AnimationSeminaireParis />} />
                 <Route path="/atelier-onboarding-collaborateurs" element={<AtelierOnboarding />} />
                 <Route path="/animation-soiree-entreprise-vegetale" element={<AnimationSoireeEntreprise />} />
                 <Route path="/intervention-mediatheque-botanique" element={<InterventionMediatheque />} />
                 <Route path="/intervention-festival-culturel-botanique" element={<InterventionFestivalCulturel />} />
                 <Route path="/animation-foyer-jeunes-travailleurs" element={<AnimationFoyerJeunes />} />
                 <Route path="/atelier-therapeutique-jardin" element={<AtelierTherapeutiqueJardin />} />
                 <Route path="/atelier-residence-seniors-paris" element={<AtelierResidenceSeniors />} />
                 <Route path="/balade-botanique-seine-saint-denis" element={<BaladeBotaniqueSeineSaintDenis />} />
                 <Route path="/balade-botanique-val-de-marne" element={<BaladeBotaniqueValDeMarne />} />
                 <Route path="/balade-botanique-essonne" element={<BaladeBotaniqueEssonne />} />
                 <Route path="/balade-botanique-seine-et-marne" element={<BaladeBotaniqueSeineEtMarne />} />
                <Route path="/atelier-terrarium-yvelines" element={<TerrariumYvelines />} />
                <Route path="/atelier-terrarium-hauts-de-seine" element={<TerrariumHautsDeSeine />} />
                <Route path="/atelier-kokedama-yvelines" element={<KokedamaYvelines />} />
                <Route path="/atelier-kokedama-hauts-de-seine" element={<KokedamaHautsDeSeine />} />
                <Route path="/atelier-teinture-vegetale-yvelines" element={<TeintureVegetaleYvelines />} />
                <Route path="/atelier-teinture-vegetale-hauts-de-seine" element={<TeintureVegetaleHautsDeSeine />} />
                <Route path="/atelier-evjf-botanique-yvelines" element={<EvjfYvelines />} />
                <Route path="/atelier-evjf-botanique-hauts-de-seine" element={<EvjfHautsDeSeine />} />
                <Route path="/atelier-anniversaire-adulte-yvelines" element={<AnniversaireAdulteYvelines />} />
                <Route path="/atelier-anniversaire-adulte-hauts-de-seine" element={<AnniversaireAdulteHautsDeSeine />} />
                <Route path="/baby-shower-vegetal-yvelines" element={<BabyShowerVegetalYvelines />} />
                <Route path="/baby-shower-vegetal-hauts-de-seine" element={<BabyShowerVegetalHautsDeSeine />} />
                <Route path="/noel-couronne-vegetale-yvelines" element={<NoelCouronneVegetaleYvelines />} />
                <Route path="/noel-couronne-vegetale-hauts-de-seine" element={<NoelCouronneVegetaleHautsDeSeine />} />
                <Route path="/couple-nature-yvelines" element={<CoupleNatureYvelines />} />
                <Route path="/couple-nature-hauts-de-seine" element={<CoupleNatureHautsDeSeine />} />
                <Route path="/seminaire-entreprise-paris" element={<SeminaireEntrepriseParis />} />
                <Route path="/seminaire-entreprise-yvelines" element={<SeminaireEntrepriseYvelines />} />
                <Route path="/seminaire-entreprise-hauts-de-seine" element={<SeminaireEntrepriseHautsDeSeine />} />
                <Route path="/seminaire-entreprise-val-d-oise" element={<SeminaireEntrepriseValDOise />} />
                <Route path="/mediatheque-paris" element={<MediathequeParis />} />
                <Route path="/mediatheque-yvelines" element={<MediathequeYvelines />} />
                <Route path="/mediatheque-hauts-de-seine" element={<MediathequeHautsDeSeine />} />
                <Route path="/mediatheque-val-d-oise" element={<MediathequeValDOise />} />
                <Route path="/hortitherapie-paris" element={<HortitherapieParis />} />
                <Route path="/hortitherapie-yvelines" element={<HortitherapieYvelines />} />
                <Route path="/hortitherapie-hauts-de-seine" element={<HortitherapieHautsDeSeine />} />
                <Route path="/hortitherapie-val-d-oise" element={<HortitherapieValDOise />} />
                <Route path="/onboarding-paris" element={<OnboardingParis />} />
                <Route path="/onboarding-yvelines" element={<OnboardingYvelines />} />
                <Route path="/onboarding-hauts-de-seine" element={<OnboardingHautsDeSeine />} />
                <Route path="/onboarding-val-d-oise" element={<OnboardingValDOise />} />
                <Route path="/soiree-entreprise-paris" element={<SoireeEntrepriseParis />} />
                <Route path="/soiree-entreprise-yvelines" element={<SoireeEntrepriseYvelines />} />
                <Route path="/soiree-entreprise-hauts-de-seine" element={<SoireeEntrepriseHautsDeSeine />} />
                <Route path="/soiree-entreprise-val-d-oise" element={<SoireeEntrepriseValDOise />} />
                <Route path="/festival-culturel-paris" element={<FestivalCulturelParis />} />
                <Route path="/festival-culturel-yvelines" element={<FestivalCulturelYvelines />} />
                <Route path="/festival-culturel-hauts-de-seine" element={<FestivalCulturelHautsDeSeine />} />
                <Route path="/festival-culturel-val-d-oise" element={<FestivalCulturelValDOise />} />
                <Route path="/foyer-jeunes-paris" element={<FoyerJeunesParis />} />
                <Route path="/foyer-jeunes-yvelines" element={<FoyerJeunesYvelines />} />
                <Route path="/foyer-jeunes-hauts-de-seine" element={<FoyerJeunesHautsDeSeine />} />
                <Route path="/foyer-jeunes-val-d-oise" element={<FoyerJeunesValDOise />} />
                <Route path="/cadeau-original-nature-yvelines" element={<CadeauOriginalNatureYvelines />} />
                <Route path="/cadeau-original-nature-hauts-de-seine" element={<CadeauOriginalNatureHautsDeSeine />} />
                <Route path="/cadeau-original-nature-val-d-oise" element={<CadeauOriginalNatureValDOise />} />
                {/* Redirects for existing pages with alternate URLs */}
             <Route path="/atelier-botanique-ehpad" element={<Navigate to="/animation-seniors-ehpad" replace />} />
             <Route path="/atelier-botanique-ecole" element={<Navigate to="/animation-scolaire-nature" replace />} />
           <Route path="/mentions-legales" element={<LegalNotice />} />
          <Route path="/conditions-de-vente" element={<SalesTerms />} />
          <Route path="/admin/testimonials" element={<AdminTestimonials />} />
          <Route path="/unsubscribe" element={<Unsubscribe />} />
          {/* B2B / QVCT / RSE landing pages (config-driven) */}
          {PRO_LANDINGS.map((p) => (
            <Route key={p.slug} path={`/${p.slug}`} element={<ProLandingPage />} />
          ))}
          {/* Top-of-funnel HR/QVCT blog articles */}
          {PRO_ARTICLES.map((a) => (
            <Route key={a.slug} path={`/blog/${a.slug}`} element={<ProBlogArticle />} />
          ))}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
