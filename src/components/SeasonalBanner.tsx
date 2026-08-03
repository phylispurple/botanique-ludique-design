import { Link } from "react-router-dom";
import { Gift, Snowflake } from "lucide-react";

const SeasonalBanner = () => {
  const now = new Date();
  const month = now.getMonth();
  const currentSeason: "winter" | "spring" | "summer" | "autumn" =
    month >= 2 && month <= 4 ? "spring" :
    month >= 5 && month <= 7 ? "summer" :
    month >= 8 && month <= 10 ? "autumn" : "winter";
  
  const seasonalContent = {
    winter: {
      icon: Gift,
      title: "🎄 Idée cadeau originale",
      subtitle: "Offrez un atelier botanique pour les fêtes",
      cta: "Découvrir les cartes cadeaux",
      link: "/agenda",
      bgClass: "from-[#2A3A2E] to-[#4A5D4A]"
    },
    spring: {
      icon: Snowflake,
      title: "🌸 Ateliers de printemps",
      subtitle: "Kokedama, bombes à graines, couronnes de fleurs",
      cta: "Voir les ateliers",
      link: "/workshops",
      bgClass: "from-sage to-sage-dark"
    },
    summer: {
      icon: Snowflake,
      title: "☀️ Ateliers d'été",
      subtitle: "Teinture végétale, herbier, terrarium",
      cta: "Réserver",
      link: "/agenda",
      bgClass: "from-earth to-sage"
    },
    autumn: {
      icon: Snowflake,
      title: "🍂 Ateliers d'automne",
      subtitle: "Vannerie, tataki-zome, cycle matières végétales",
      cta: "Découvrir",
      link: "/workshops",
      bgClass: "from-earth to-[#8B7355]"
    }
  };

  const content = seasonalContent[currentSeason];
  const IconComponent = content.icon;

  return (
    <div className={`bg-gradient-to-r ${content.bgClass} py-4 px-4`}>
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
        <div className="flex items-center gap-3 text-off-white">
          <IconComponent className="w-5 h-5" />
          <span className="font-semibold text-lg">{content.title}</span>
          <span className="hidden sm:inline text-off-white/80">·</span>
          <span className="hidden sm:inline text-off-white/90">{content.subtitle}</span>
        </div>
        <span className="sm:hidden text-off-white/90 text-sm text-center">{content.subtitle}</span>
        <Link 
          to={content.link}
          className="bg-off-white text-charcoal px-5 py-2 rounded-full text-sm font-semibold hover:bg-sand transition-colors whitespace-nowrap"
        >
          {content.cta}
        </Link>
      </div>
    </div>
  );
};

export default SeasonalBanner;
