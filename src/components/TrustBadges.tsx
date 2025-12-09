import { Award, MapPin, Users, Shield, Clock, Star } from "lucide-react";

interface TrustBadgesProps {
  variant?: "horizontal" | "vertical" | "compact";
  showAll?: boolean;
}

const TrustBadges = ({ variant = "horizontal", showAll = true }: TrustBadgesProps) => {
  const badges = [
    {
      icon: Award,
      title: "Ethnobotaniste EHESS",
      description: "Formation académique",
    },
    {
      icon: MapPin,
      title: "Paris, 78, 92",
      description: "Île-de-France",
    },
    {
      icon: Users,
      title: "400+ participants",
      description: "Accompagnés",
    },
    {
      icon: Clock,
      title: "Réponse 24h",
      description: "Devis rapide",
    },
    {
      icon: Star,
      title: "5/5 étoiles",
      description: "Satisfaction client",
    },
    {
      icon: Shield,
      title: "Assurance RC Pro",
      description: "Intervenant assuré",
    },
  ];

  const displayBadges = showAll ? badges : badges.slice(0, 4);

  if (variant === "compact") {
    return (
      <div className="flex flex-wrap justify-center gap-4 py-4">
        {displayBadges.map((badge, index) => {
          const IconComponent = badge.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-1.5 bg-sage/10 rounded-full text-sm"
            >
              <IconComponent className="w-4 h-4 text-sage" />
              <span className="text-charcoal font-medium">{badge.title}</span>
            </div>
          );
        })}
      </div>
    );
  }

  if (variant === "vertical") {
    return (
      <div className="space-y-3">
        {displayBadges.map((badge, index) => {
          const IconComponent = badge.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 p-3 bg-white/60 rounded-lg"
            >
              <div className="p-2 bg-sage/20 rounded-full">
                <IconComponent className="w-5 h-5 text-sage" />
              </div>
              <div>
                <p className="font-medium text-charcoal text-sm">{badge.title}</p>
                <p className="text-xs text-muted-foreground">{badge.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 py-6">
      {displayBadges.map((badge, index) => {
        const IconComponent = badge.icon;
        return (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-colors"
          >
            <div className="p-3 bg-sage/20 rounded-full mb-2">
              <IconComponent className="w-6 h-6 text-sage" />
            </div>
            <p className="font-semibold text-charcoal text-sm">{badge.title}</p>
            <p className="text-xs text-muted-foreground">{badge.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TrustBadges;