import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ConferencesSavoirs from "@/components/ConferencesSavoirs";
import { SEO } from "@/components/SEO";

/** Page dédiée à la médiation (conférences, balades, formats institutions),
 *  auparavant affichée en section de l'accueil (/#mediation). */
const Mediation = () => (
  <div className="min-h-screen bg-[hsl(210_41%_24%)]">
    <SEO
      title="Médiation ethnobotanique : conférences et balades"
      description="Conférences, balades botaniques et cycles thématiques pour musées, médiathèques, jardins et universités, partout en Île-de-France."
      canonical="/mediation"
    />
    <Navigation />
    <main>
      <ConferencesSavoirs asPage />
    </main>
    <Footer />
    <BackToTop />
  </div>
);

export default Mediation;
