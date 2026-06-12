import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from "@/components/ScrollToTop";
import FloatingContactButton from "@/components/FloatingContactButton";

// Core
import Index from "./pages/Index";
import About from "./pages/About";
import Association from "./pages/Association";
import EtablissementsScolaires from "./pages/EtablissementsScolaires";
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
import Unsubscribe from "./pages/Unsubscribe";
import MarchesPublics from "./pages/MarchesPublics";
import ReferencesCollectivites from "./pages/ReferencesCollectivites";

// Inscriptions
import InscriptionWardianCase from "./pages/InscriptionWardianCase";
import InscriptionTerrariumJuin from "./pages/InscriptionTerrariumJuin";
import InscriptionMauvaisesHerbes from "./pages/InscriptionMauvaisesHerbes";
import InscriptionTeinturesVegetales from "./pages/InscriptionTeinturesVegetales";

// Blog
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
import BlogBaladeBotaniqueDuBreuil from "./pages/BlogBaladeBotaniqueDuBreuil";
import BlogBaladeBotaniqueVoisins from "./pages/BlogBaladeBotaniqueVoisins";

// Guides
import GuideTerrarium from "./pages/GuideTerrarium";
import GuideKokedama from "./pages/GuideKokedama";
import GuideEthnobotanique from "./pages/GuideEthnobotanique";
import GuideEthnobotaniqueRegard from "./pages/GuideEthnobotaniqueRegard";
import GuidePlantesTinctoriales from "./pages/GuidePlantesTinctoriales";

// Hubs ateliers
import AteliersBotaniquesYvelines from "./pages/AteliersBotaniquesYvelines";
import TeamBuildingRSEParis from "./pages/TeamBuildingRSEParis";
import AteliersBotaniqueEntrepriseIDF from "./pages/AteliersBotaniqueEntrepriseIDF";
import AteliersIDF from "./pages/AteliersIDF";
import AteliersBotaniquesComplets from "./pages/AteliersBotaniquesComplets";

// Landings (conservés mais hors sitemap)
import LandingSeniorsEHPAD from "./pages/LandingSeniorsEHPAD";
import LandingCSE from "./pages/LandingCSE";
import LandingEcoles from "./pages/LandingEcoles";
import LandingMJC from "./pages/LandingMJC";
import LandingTeamBuilding from "./pages/LandingTeamBuilding";
import LandingCollectivites from "./pages/LandingCollectivites";

// Pro dynamiques
import ProLandingPage from "./pages/ProLandingPage";
import ProBlogArticle from "./pages/ProBlogArticle";
import { PRO_LANDINGS } from "@/data/proLandings";
import { PRO_ARTICLES } from "@/data/proBlogArticles";

// Pages thématiques uniques (non géo)
import AtelierTerrariumTeamBuilding from "./pages/AtelierTerrariumTeamBuilding";
import AtelierEthnobotaniqueEntreprise from "./pages/AtelierEthnobotaniqueEntreprise";
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
import AtelierBotaniqueEvenement from "./pages/AtelierBotaniqueEvenement";
import AtelierKokedamaParis from "./pages/AtelierKokedamaParis";
import AtelierTerrariumParis from "./pages/AtelierTerrariumParis";
import AtelierTeintureVegetale from "./pages/AtelierTeintureVegetale";
import AnimationCentreSocial from "./pages/AnimationCentreSocial";
import AtelierFloralParis from "./pages/AtelierFloralParis";
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
import AnimationSeminaireParis from "./pages/AnimationSeminaireParis";
import AtelierOnboarding from "./pages/AtelierOnboarding";
import AnimationSoireeEntreprise from "./pages/AnimationSoireeEntreprise";
import InterventionMediatheque from "./pages/InterventionMediatheque";
import InterventionFestivalCulturel from "./pages/InterventionFestivalCulturel";
import AnimationFoyerJeunes from "./pages/AnimationFoyerJeunes";
import AtelierTherapeutiqueJardin from "./pages/AtelierTherapeutiqueJardin";
import AtelierResidenceSeniors from "./pages/AtelierResidenceSeniors";

// Médiation botanique (conservées : Paris indexée + IDF maillée)
import MediationBotaniqueIDF from "./pages/MediationBotaniqueIDF";
import MediationBotaniqueParis from "./pages/MediationBotaniqueParis";

// Balades (hub + thématiques + 4 geo maillées)
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

// Géo conservées (indexées Google)
import BabyShowerVegetalHautsDeSeine from "./pages/BabyShowerVegetalHautsDeSeine";

const queryClient = new QueryClient();

// Tableau des redirections vers la page thématique la plus proche.
// Remplace les ~100 anciennes pages géo orphelines retirées le 2026-06-12.
const REDIRECTS: Array<[string, string]> = [
  // Animation botanique
  ["/animation-botanique-ile-de-france", "/mediation-botanique-ile-de-france"],
  ["/animation-botanique-paris", "/mediation-botanique-paris"],
  ["/animation-botanique-yvelines", "/mediation-botanique-ile-de-france"],
  ["/animation-botanique-hauts-de-seine", "/mediation-botanique-ile-de-france"],
  ["/animation-botanique-val-d-oise", "/mediation-botanique-ile-de-france"],
  // Animatrice nature / botanique
  ["/animatrice-nature-ile-de-france", "/about"],
  ["/animatrice-nature-paris", "/about"],
  ["/animatrice-nature-hauts-de-seine", "/about"],
  ["/animatrice-botanique-yvelines", "/about"],
  ["/animatrice-botanique-val-d-oise", "/about"],
  // Intervenant scientifique
  ["/intervenant-scientifique-ile-de-france", "/about"],
  ["/intervenant-scientifique-paris", "/about"],
  ["/intervenant-scientifique-yvelines", "/about"],
  ["/intervenant-scientifique-hauts-de-seine", "/about"],
  ["/intervenant-scientifique-val-d-oise", "/about"],
  // Médiation scientifique
  ["/mediation-scientifique-ile-de-france", "/mediation-botanique-ile-de-france"],
  ["/mediation-scientifique-paris", "/mediation-botanique-paris"],
  ["/mediation-scientifique-yvelines", "/mediation-botanique-ile-de-france"],
  ["/mediation-scientifique-hauts-de-seine", "/mediation-botanique-ile-de-france"],
  ["/mediation-scientifique-val-d-oise", "/mediation-botanique-ile-de-france"],
  // Médiation culturelle nature
  ["/mediation-culturelle-nature-ile-de-france", "/mediation-botanique-ile-de-france"],
  ["/mediation-culturelle-nature-paris", "/mediation-botanique-paris"],
  ["/mediation-culturelle-nature-yvelines", "/mediation-botanique-ile-de-france"],
  ["/mediation-culturelle-nature-hauts-de-seine", "/mediation-botanique-ile-de-france"],
  ["/mediation-culturelle-nature-val-d-oise", "/mediation-botanique-ile-de-france"],
  // Médiation botanique géo (sauf paris et IDF)
  ["/mediation-botanique-yvelines", "/mediation-botanique-ile-de-france"],
  ["/mediation-botanique-hauts-de-seine", "/mediation-botanique-ile-de-france"],
  ["/mediation-botanique-val-d-oise", "/mediation-botanique-ile-de-france"],
  // Atelier botanique enfant
  ["/atelier-botanique-enfant-ile-de-france", "/workshops"],
  ["/atelier-botanique-enfant-paris", "/workshops"],
  ["/atelier-botanique-enfant-yvelines", "/workshops"],
  ["/atelier-botanique-enfant-hauts-de-seine", "/workshops"],
  ["/atelier-botanique-enfant-val-d-oise", "/workshops"],
  // Atelier botanique adulte
  ["/atelier-botanique-adulte-ile-de-france", "/workshops"],
  ["/atelier-botanique-adulte-paris", "/workshops"],
  ["/atelier-botanique-adulte-yvelines", "/workshops"],
  ["/atelier-botanique-adulte-hauts-de-seine", "/workshops"],
  ["/atelier-botanique-adulte-val-d-oise", "/workshops"],
  // Atelier botanique par ville
  ["/atelier-botanique-saint-germain-en-laye", "/workshops"],
  ["/atelier-botanique-le-pecq", "/workshops"],
  ["/atelier-botanique-le-vesinet", "/workshops"],
  ["/atelier-botanique-chatou", "/workshops"],
  ["/atelier-botanique-versailles", "/workshops"],
  ["/atelier-botanique-nanterre", "/workshops"],
  ["/atelier-botanique-boulogne-billancourt", "/workshops"],
  ["/atelier-botanique-cergy", "/workshops"],
  ["/atelier-botanique-rueil-malmaison", "/workshops"],
  ["/atelier-botanique-conflans-sainte-honorine", "/workshops"],
  ["/atelier-botanique-rambouillet", "/workshops"],
  // Hortithérapie géo
  ["/hortitherapie-paris", "/hortitherapie-hopital-clinique"],
  ["/hortitherapie-yvelines", "/hortitherapie-hopital-clinique"],
  ["/hortitherapie-hauts-de-seine", "/hortitherapie-hopital-clinique"],
  ["/hortitherapie-val-d-oise", "/hortitherapie-hopital-clinique"],
  // Onboarding
  ["/onboarding-paris", "/atelier-onboarding-collaborateurs"],
  ["/onboarding-yvelines", "/atelier-onboarding-collaborateurs"],
  ["/onboarding-hauts-de-seine", "/atelier-onboarding-collaborateurs"],
  ["/onboarding-val-d-oise", "/atelier-onboarding-collaborateurs"],
  // Séminaire entreprise
  ["/seminaire-entreprise-paris", "/animation-seminaire-entreprise-paris"],
  ["/seminaire-entreprise-yvelines", "/animation-seminaire-entreprise-paris"],
  ["/seminaire-entreprise-hauts-de-seine", "/animation-seminaire-entreprise-paris"],
  ["/seminaire-entreprise-val-d-oise", "/animation-seminaire-entreprise-paris"],
  // Soirée entreprise
  ["/soiree-entreprise-paris", "/animation-soiree-entreprise-vegetale"],
  ["/soiree-entreprise-yvelines", "/animation-soiree-entreprise-vegetale"],
  ["/soiree-entreprise-hauts-de-seine", "/animation-soiree-entreprise-vegetale"],
  ["/soiree-entreprise-val-d-oise", "/animation-soiree-entreprise-vegetale"],
  // Festival culturel
  ["/festival-culturel-paris", "/intervention-festival-culturel-botanique"],
  ["/festival-culturel-yvelines", "/intervention-festival-culturel-botanique"],
  ["/festival-culturel-hauts-de-seine", "/intervention-festival-culturel-botanique"],
  ["/festival-culturel-val-d-oise", "/intervention-festival-culturel-botanique"],
  // Foyer jeunes
  ["/foyer-jeunes-paris", "/animation-foyer-jeunes-travailleurs"],
  ["/foyer-jeunes-yvelines", "/animation-foyer-jeunes-travailleurs"],
  ["/foyer-jeunes-hauts-de-seine", "/animation-foyer-jeunes-travailleurs"],
  ["/foyer-jeunes-val-d-oise", "/animation-foyer-jeunes-travailleurs"],
  // Médiathèque
  ["/mediatheque-paris", "/intervention-mediatheque-botanique"],
  ["/mediatheque-yvelines", "/intervention-mediatheque-botanique"],
  ["/mediatheque-hauts-de-seine", "/intervention-mediatheque-botanique"],
  ["/mediatheque-val-d-oise", "/intervention-mediatheque-botanique"],
  // Cadeau original nature (non Paris)
  ["/cadeau-original-nature-yvelines", "/cadeau-original-nature-paris"],
  ["/cadeau-original-nature-hauts-de-seine", "/cadeau-original-nature-paris"],
  ["/cadeau-original-nature-val-d-oise", "/cadeau-original-nature-paris"],
  // Occasions Yvelines / HdS (Paris conservées)
  ["/baby-shower-vegetal-yvelines", "/atelier-baby-shower-vegetal-paris"],
  ["/atelier-evjf-botanique-yvelines", "/atelier-evjf-botanique-paris"],
  ["/atelier-evjf-botanique-hauts-de-seine", "/atelier-evjf-botanique-paris"],
  ["/couple-nature-yvelines", "/atelier-couple-nature-paris"],
  ["/couple-nature-hauts-de-seine", "/atelier-couple-nature-paris"],
  ["/noel-couronne-vegetale-yvelines", "/atelier-noel-couronne-vegetale-paris"],
  ["/noel-couronne-vegetale-hauts-de-seine", "/atelier-noel-couronne-vegetale-paris"],
  ["/atelier-anniversaire-adulte-yvelines", "/atelier-anniversaire-adulte-nature-paris"],
  ["/atelier-anniversaire-adulte-hauts-de-seine", "/atelier-anniversaire-adulte-nature-paris"],
  ["/atelier-kokedama-yvelines", "/atelier-kokedama-paris"],
  ["/atelier-kokedama-hauts-de-seine", "/atelier-kokedama-paris"],
  ["/atelier-terrarium-yvelines", "/atelier-terrarium-paris"],
  ["/atelier-terrarium-hauts-de-seine", "/atelier-terrarium-paris"],
  ["/atelier-teinture-vegetale-yvelines", "/atelier-teinture-vegetale"],
  ["/atelier-teinture-vegetale-hauts-de-seine", "/atelier-teinture-vegetale"],
  // Team building géo
  ["/team-building-entreprise-yvelines", "/team-building-rse-paris"],
  ["/team-building-vegetal-rambouillet", "/team-building-rse-paris"],
  ["/terrarium-team-building-yvelines", "/atelier-terrarium-team-building"],
  ["/kokedama-cohesion-equipe-yvelines", "/atelier-kokedama-team-building"],
  // Balades géo orphelines
  ["/balade-botanique-essonne", "/balades-botaniques"],
  ["/balade-botanique-seine-et-marne", "/balades-botaniques"],
  ["/balade-botanique-seine-saint-denis", "/balades-botaniques"],
  ["/balade-botanique-val-de-marne", "/balades-botaniques"],
  ["/balade-ethnobotanique-rse-yvelines", "/balade-botanique-entreprise-cse"],
  // Démos internes
  ["/demo-creative", "/"],
  ["/demo-manus", "/"],
];

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
            {/* Core */}
            <Route path="/" element={<Index />} />
            <Route path="/index.html" element={<Navigate to="/" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/association" element={<Association />} />
            <Route path="/etablissements-scolaires" element={<EtablissementsScolaires />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/pro" element={<Pro />} />
            <Route path="/b2b" element={<Navigate to="/pro" replace />} />
            <Route path="/training" element={<Navigate to="/pro" replace />} />
            <Route path="/devis-entreprise" element={<Navigate to="/pro#devis" replace />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/calendar" element={<Agenda />} />
            <Route path="/calendrier" element={<Agenda />} />
            <Route path="/mentions-legales" element={<LegalNotice />} />
            <Route path="/conditions-de-vente" element={<SalesTerms />} />
            <Route path="/admin/testimonials" element={<AdminTestimonials />} />
            <Route path="/unsubscribe" element={<Unsubscribe />} />
            <Route path="/marches-publics" element={<MarchesPublics />} />
            <Route path="/references-collectivites" element={<ReferencesCollectivites />} />

            {/* Inscriptions */}
            <Route path="/inscription/wardian-case" element={<InscriptionWardianCase />} />
            <Route path="/inscription/terrarium-6-juin" element={<InscriptionTerrariumJuin />} />
            <Route path="/inscription/mauvaises-herbes" element={<InscriptionMauvaisesHerbes />} />
            <Route path="/inscription/teintures-vegetales" element={<InscriptionTeinturesVegetales />} />

            {/* Blog */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/actualites" element={<Blog />} />
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
            <Route path="/blog/balade-botanique-ecole-du-breuil" element={<BlogBaladeBotaniqueDuBreuil />} />
            <Route path="/blog/balade-botanique-voisins-le-bretonneux" element={<BlogBaladeBotaniqueVoisins />} />

            {/* Guides */}
            <Route path="/guide/comment-faire-un-terrarium" element={<GuideTerrarium />} />
            <Route path="/guide/comment-faire-un-kokedama" element={<GuideKokedama />} />
            <Route path="/guide/ethnobotanique-definition" element={<GuideEthnobotanique />} />
            <Route path="/guide-ethnobotanique" element={<GuideEthnobotaniqueRegard />} />
            <Route path="/guide/plantes-tinctoriales-ile-de-france" element={<GuidePlantesTinctoriales />} />

            {/* Hubs ateliers */}
            <Route path="/ateliers-botaniques-tous" element={<AteliersBotaniquesComplets />} />
            <Route path="/ateliers-idf" element={<AteliersIDF />} />
            <Route path="/ateliers-botanique-entreprise-idf" element={<AteliersBotaniqueEntrepriseIDF />} />
            <Route path="/ateliers-botaniques-yvelines" element={<AteliersBotaniquesYvelines />} />
            <Route path="/team-building-rse-paris" element={<TeamBuildingRSEParis />} />

            {/* Landings (gardées hors sitemap) */}
            <Route path="/animation-seniors-ehpad" element={<LandingSeniorsEHPAD />} />
            <Route path="/animation-cse-entreprise" element={<LandingCSE />} />
            <Route path="/animation-scolaire-nature" element={<LandingEcoles />} />
            <Route path="/ateliers-mjc-association" element={<LandingMJC />} />
            <Route path="/team-building-nature-entreprise" element={<LandingTeamBuilding />} />
            <Route path="/animation-collectivites-mairies" element={<LandingCollectivites />} />
            <Route path="/atelier-botanique-ehpad" element={<Navigate to="/animation-seniors-ehpad" replace />} />
            <Route path="/atelier-botanique-ecole" element={<Navigate to="/animation-scolaire-nature" replace />} />

            {/* Pages thématiques uniques */}
            <Route path="/atelier-botanique-evenement" element={<AtelierBotaniqueEvenement />} />
            <Route path="/atelier-terrarium-team-building" element={<AtelierTerrariumTeamBuilding />} />
            <Route path="/atelier-kokedama-team-building" element={<AtelierKokedamaTeamBuilding />} />
            <Route path="/atelier-bien-etre-nature-entreprise" element={<AtelierBienEtreNatureEntreprise />} />
            <Route path="/atelier-ethnobotanique-entreprise" element={<AtelierEthnobotaniqueEntreprise />} />
            <Route path="/atelier-kombucha-cuir-vegetal" element={<AtelierKombuchaCuirVegetal />} />
            <Route path="/atelier-teinture-vegetale" element={<AtelierTeintureVegetale />} />
            <Route path="/atelier-teinture-vegetale-ecole" element={<AtelierTeintureScolaire />} />
            <Route path="/atelier-therapeutique-jardin" element={<AtelierTherapeutiqueJardin />} />
            <Route path="/atelier-onboarding-collaborateurs" element={<AtelierOnboarding />} />
            <Route path="/atelier-residence-seniors-paris" element={<AtelierResidenceSeniors />} />
            <Route path="/atelier-vegetal-parentalite-naissance" element={<AtelierVegetalParentaliteNaissance />} />
            <Route path="/atelier-vegetal-cabinet-rh-coach" element={<AtelierVegetalCabinetRHCoach />} />
            <Route path="/animation-semaine-qvct" element={<AnimationSemaineQVCT />} />
            <Route path="/animation-centre-social" element={<AnimationCentreSocial />} />
            <Route path="/animation-nature-ehpad" element={<AnimationNatureEHPAD />} />
            <Route path="/animation-nature-bailleurs-sociaux" element={<AnimationNatureBailleursSociaux />} />
            <Route path="/animation-nature-universite-bde" element={<AnimationNatureUniversiteBDE />} />
            <Route path="/animation-vegetale-hotel-evenementiel" element={<AnimationVegetaleHotelEvenementiel />} />
            <Route path="/animation-foyer-jeunes-travailleurs" element={<AnimationFoyerJeunes />} />
            <Route path="/animation-soiree-entreprise-vegetale" element={<AnimationSoireeEntreprise />} />
            <Route path="/animation-seminaire-entreprise-paris" element={<AnimationSeminaireParis />} />
            <Route path="/activite-intergenerationnelle-nature" element={<ActiviteIntergenerationnelle />} />
            <Route path="/hortitherapie-hopital-clinique" element={<HortitherapieHopitalClinique />} />
            <Route path="/mediation-vegetale-architectes-paysagistes" element={<MediationVegetaleArchitectesPaysagistes />} />
            <Route path="/intervention-mediatheque-botanique" element={<InterventionMediatheque />} />
            <Route path="/intervention-festival-culturel-botanique" element={<InterventionFestivalCulturel />} />
            <Route path="/balade-ethnobotanique-office-tourisme" element={<BaladeEthnobotaniqueOfficeTourisme />} />
            <Route path="/idee-cadeau-amoureux-des-plantes" element={<IdeeCadeauAmoureuxPlantes />} />

            {/* Pages "Paris" thématiques (offres canoniques) */}
            <Route path="/atelier-kokedama-paris" element={<AtelierKokedamaParis />} />
            <Route path="/atelier-terrarium-paris" element={<AtelierTerrariumParis />} />
            <Route path="/atelier-teinture-vegetale-paris" element={<AtelierTeintureVegetaleParis />} />
            <Route path="/atelier-floral-paris" element={<AtelierFloralParis />} />
            <Route path="/atelier-evjf-botanique-paris" element={<AtelierEvjfBotaniqueParis />} />
            <Route path="/atelier-anniversaire-enfant-nature-paris" element={<AtelierAnniversaireEnfantParis />} />
            <Route path="/atelier-anniversaire-adulte-nature-paris" element={<AtelierAnniversaireAdulteParis />} />
            <Route path="/atelier-baby-shower-vegetal-paris" element={<AtelierBabyShowerVegetal />} />
            <Route path="/atelier-noel-couronne-vegetale-paris" element={<AtelierNoelCouronneVegetale />} />
            <Route path="/atelier-couple-nature-paris" element={<AtelierCoupleNatureParis />} />
            <Route path="/cadeau-original-nature-paris" element={<CadeauOriginalNatureParis />} />

            {/* Médiation botanique conservées */}
            <Route path="/mediation-botanique-ile-de-france" element={<MediationBotaniqueIDF />} />
            <Route path="/mediation-botanique-paris" element={<MediationBotaniqueParis />} />

            {/* Balades : hub + thématiques + 4 géo maillées depuis le hub */}
            <Route path="/balades-botaniques" element={<BaladesBotaniques />} />
            <Route path="/balade-botanique-musee" element={<BaladeBotaniqueMusee />} />
            <Route path="/balade-botanique-jardin-patrimonial" element={<BaladeBotaniqueJardinPatrimonial />} />
            <Route path="/balade-botanique-urbaine-paris" element={<BaladeBotaniqueUrbaineParis />} />
            <Route path="/balade-botanique-entreprise-cse" element={<BaladeBotaniqueEntreprise />} />
            <Route path="/balade-botanique-scolaire" element={<BaladeBotaniqueScolaire />} />
            <Route path="/balade-plantes-sauvages-comestibles-paris" element={<BaladePlantesSauvagesParis />} />
            <Route path="/balade-botanique-coloniale-paris" element={<BaladeBotaniqueColoniale />} />
            <Route path="/balade-botanique-printemps-ete" element={<BaladeBotaniquePrintempsEte />} />
            <Route path="/balade-botanique-paris" element={<BaladeBotaniqueParis />} />
            <Route path="/balade-botanique-yvelines" element={<BaladeBotaniqueYvelines />} />
            <Route path="/balade-botanique-hauts-de-seine" element={<BaladeBotaniqueHautsDeSeine />} />
            <Route path="/balade-botanique-val-d-oise" element={<BaladeBotaniqueValDOise />} />

            {/* Géo conservée (indexée Google) */}
            <Route path="/baby-shower-vegetal-hauts-de-seine" element={<BabyShowerVegetalHautsDeSeine />} />

            {/* Redirections vers la page thématique la plus proche */}
            {REDIRECTS.map(([from, to]) => (
              <Route key={from} path={from} element={<Navigate to={to} replace />} />
            ))}

            {/* Pro landings dynamiques */}
            {PRO_LANDINGS.map((p) => (
              <Route key={p.slug} path={`/${p.slug}`} element={<ProLandingPage />} />
            ))}
            {PRO_ARTICLES.map((a) => (
              <Route key={a.slug} path={`/blog/${a.slug}`} element={<ProBlogArticle />} />
            ))}

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
