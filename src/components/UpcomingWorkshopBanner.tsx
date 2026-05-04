import { Link } from "react-router-dom";
import { Calendar, MapPin, Sparkles } from "lucide-react";

interface UpcomingWorkshop {
  title: string;
  date: string;
  location: string;
  spotsLeft?: number;
}

// Configuration des prochains ateliers - À mettre à jour manuellement
const upcomingWorkshop: UpcomingWorkshop | null = {
  title: "Atelier Terrarium",
  date: "20 mai 2026",
  location: "Relais Marianne",
};

const UpcomingWorkshopBanner = () => {
  if (upcomingWorkshop) {
    return (
      <div className="bg-gradient-to-r from-sage to-sage-dark text-off-white py-3 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span className="font-semibold">Prochain atelier :</span>
            <span>{upcomingWorkshop.title}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {upcomingWorkshop.location}
            </span>
            <span>{upcomingWorkshop.date}</span>
            {upcomingWorkshop.spotsLeft && (
              <span className="bg-off-white/20 px-2 py-0.5 rounded-full text-xs">
                {upcomingWorkshop.spotsLeft} places restantes
              </span>
            )}
          </div>
          <Link 
            to="/agenda" 
            className="bg-off-white text-sage-dark px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-sand transition-colors"
          >
            Réserver
          </Link>
        </div>
      </div>
    );
  }

  // Affichage quand pas de date confirmée
  return (
    <div className="bg-gradient-to-r from-sage/90 to-earth/80 text-off-white py-3 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          <span className="font-medium">Nouvelles dates d'ateliers bientôt disponibles !</span>
        </div>
        <Link 
          to="/agenda" 
          className="bg-off-white/90 text-sage-dark px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-off-white transition-colors"
        >
          S'inscrire à la newsletter pour être informé·e
        </Link>
      </div>
    </div>
  );
};

export default UpcomingWorkshopBanner;
