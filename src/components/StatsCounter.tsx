import { Users, Calendar, Building2, Award } from "lucide-react";

interface StatItem {
  value: string;
  label: string;
  icon: "users" | "calendar" | "building" | "award";
}

const stats: StatItem[] = [
  {
    value: "50+",
    label: "Ateliers réalisés",
    icon: "calendar"
  },
  {
    value: "400+",
    label: "Participants accompagnés",
    icon: "users"
  },
  {
    value: "6",
    label: "Partenaires de confiance",
    icon: "building"
  },
  {
    value: "2023",
    label: "Année de création",
    icon: "award"
  }
];

const iconMap = {
  users: Users,
  calendar: Calendar,
  building: Building2,
  award: Award
};

const StatsCounter = () => {
  return (
    <section className="py-12 px-4 bg-sage/5">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon];
            return (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-sage/10 text-sage group-hover:bg-sage group-hover:text-off-white transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>
                <div 
                  className="text-3xl md:text-4xl font-bold text-charcoal mb-1"
                  style={{ fontFamily: 'Fraunces, serif' }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
