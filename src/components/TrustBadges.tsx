import { MapPin, Users, Shield, Clock, Star, Leaf, Package, CheckCircle2 } from "lucide-react";

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
      highlight: true,
    },
    {
      icon: Leaf,
      title: "Éco-responsable",
      description: "Matériaux naturels",
      highlight: true,
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
                className={`group relative flex flex-col items-center text-center p-5 rounded-2xl transition-all duration-500 cursor-default
                  ${badge.highlight 
                    ? 'bg-gradient-to-br from-sage/20 to-sage/5 border-2 border-sage/30 shadow-lg' 
                    : 'bg-white/70 border border-sage/10 hover:border-sage/30'
                  }
                  hover:shadow-xl hover:-translate-y-1
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sage/0 to-sage/0 group-hover:from-sage/5 group-hover:to-transparent transition-all duration-500" />
                
                {/* Icon container with premium styling */}
                <div className={`relative p-3 rounded-xl mb-3 transition-all duration-300 group-hover:scale-110
                  ${badge.highlight 
                    ? 'bg-sage text-white shadow-md' 
                    : 'bg-sage/15 text-sage group-hover:bg-sage group-hover:text-white'
                  }`}
                >
                  <IconComponent className="w-6 h-6" />
                  {badge.highlight && (
                    <div className="absolute -top-1 -right-1">
                      <CheckCircle2 className="w-4 h-4 text-sage-dark fill-white" />
                    </div>
                  )}
                </div>
                
                {/* Text content */}
                <p className="font-semibold text-charcoal text-sm leading-tight mb-1 relative z-10">
                  {badge.title}
                </p>
                <p className="text-xs text-muted-foreground relative z-10">
                  {badge.description}
                </p>
                
                {/* Highlight badge indicator */}
                {badge.highlight && (
                  <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-sage text-white text-[10px] font-bold uppercase rounded-full shadow-sm">
                    Pro
                  </div>
                )}
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
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-300 hover:scale-105 hover:shadow-md
                ${badge.highlight 
                  ? 'bg-sage/20 border border-sage/30' 
                  : 'bg-sage/10 hover:bg-sage/15'
                }`}
            >
              <IconComponent className={`w-4 h-4 ${badge.highlight ? 'text-sage-dark' : 'text-sage'}`} />
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
              className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:-translate-x-1 hover:shadow-md
                ${badge.highlight 
                  ? 'bg-gradient-to-r from-sage/20 to-transparent border-l-4 border-sage' 
                  : 'bg-white/60 hover:bg-white/80'
                }`}
            >
              <div className={`p-2.5 rounded-lg ${badge.highlight ? 'bg-sage text-white' : 'bg-sage/20'}`}>
                <IconComponent className={`w-5 h-5 ${badge.highlight ? 'text-white' : 'text-sage'}`} />
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

  // Default horizontal variant with premium styling
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 py-6">
      {displayBadges.map((badge, index) => {
        const IconComponent = badge.icon;
        return (
          <div
            key={index}
            className={`group flex flex-col items-center text-center p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
              ${badge.highlight 
                ? 'bg-gradient-to-br from-sage/15 to-sage/5 border border-sage/20' 
                : 'bg-white/60 hover:bg-white/80'
              }`}
          >
            <div className={`p-3 rounded-full mb-2 transition-all duration-300 group-hover:scale-110
              ${badge.highlight ? 'bg-sage text-white' : 'bg-sage/20 group-hover:bg-sage/30'}`}
            >
              <IconComponent className={`w-6 h-6 ${badge.highlight ? 'text-white' : 'text-sage'}`} />
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