import { MapPin, Users, Shield, Clock, Star, Leaf, Package } from "lucide-react";

interface TrustBadgesProps {
  variant?: "horizontal" | "vertical" | "compact" | "premium";
  showAll?: boolean;
}

const TrustBadges = ({ variant = "horizontal", showAll = true }: TrustBadgesProps) => {
  const badges = [
    {
      icon: Package,
      title: "Clé en main",
      description: "Matériel fourni sur place",
    },
    {
      icon: Leaf,
      title: "Éco-responsable",
      description: "Matériaux naturels",
    },
    {
      icon: Users,
      title: "400+ participants",
      description: "Accompagnés",
    },
    {
      icon: Shield,
      title: "Assurance RC Pro",
      description: "Intervenant assuré",
    },
    {
      icon: MapPin,
      title: "Paris, 78, 92",
      description: "Île-de-France",
    },
    {
      icon: Star,
      title: "5/5 étoiles",
      description: "Satisfaction client",
    },
  ];

  const displayBadges = showAll ? badges : badges.slice(0, 4);

  if (variant === "premium") {
    return (
      <div className="py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {displayBadges.map((badge, index) => {
            const IconComponent = badge.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col items-center text-center p-5 rounded-2xl transition-all duration-500 cursor-default bg-white/70 border border-sage/20 hover:border-sage/40 hover:shadow-xl hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sage/0 to-sage/0 group-hover:from-sage/5 group-hover:to-transparent transition-all duration-500" />
                
                {/* Icon container with uniform styling */}
                <div className="relative p-3 rounded-xl mb-3 transition-all duration-300 group-hover:scale-110 bg-sage/15 text-sage group-hover:bg-sage group-hover:text-white">
                  <IconComponent className="w-6 h-6" />
                </div>
                
                {/* Text content */}
                <p className="font-semibold text-charcoal text-sm leading-tight mb-1 relative z-10">
                  {badge.title}
                </p>
                <p className="text-xs text-muted-foreground relative z-10">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className="flex flex-wrap justify-center gap-3 py-4">
        {displayBadges.map((badge, index) => {
          const IconComponent = badge.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-300 hover:scale-105 hover:shadow-md bg-sage/10 hover:bg-sage/15"
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
              className="flex items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:-translate-x-1 hover:shadow-md bg-white/60 hover:bg-white/80"
            >
              <div className="p-2.5 rounded-lg bg-sage/20">
                <IconComponent className="w-5 h-5 text-sage" />
              </div>
              <div>
                <p className="font-semibold text-charcoal text-sm">{badge.title}</p>
                <p className="text-xs text-muted-foreground">{badge.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // Default horizontal variant
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 py-6">
      {displayBadges.map((badge, index) => {
        const IconComponent = badge.icon;
        return (
          <div
            key={index}
            className="group flex flex-col items-center text-center p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-white/60 hover:bg-white/80"
          >
            <div className="p-3 rounded-full mb-2 transition-all duration-300 group-hover:scale-110 bg-sage/20 group-hover:bg-sage/30">
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