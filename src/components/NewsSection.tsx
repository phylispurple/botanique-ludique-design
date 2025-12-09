import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Sparkles, Gift, Users } from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: "sparkles" | "gift" | "users" | "calendar";
  link?: string;
  linkText?: string;
}

// Configuration des actualités - À mettre à jour régulièrement
const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "Nouveau : Cycle Matières Végétales",
    description: "Programme de 4 séances pour explorer le cuir de kombucha, l'art botanique et le papier recyclé. Une immersion complète dans la création végétale.",
    date: "Janvier 2025",
    icon: "sparkles",
    link: "/agenda",
    linkText: "Découvrir le programme"
  },
  {
    id: "2",
    title: "Cartes cadeaux disponibles",
    description: "Offrez une expérience unique ! Cartes cadeaux de 50€ à 200€ pour un atelier botanique au choix.",
    date: "Janvier 2025",
    icon: "gift",
    link: "/agenda",
    linkText: "Commander une carte"
  },
  {
    id: "3",
    title: "Ateliers Team Building 2025",
    description: "Réservations ouvertes pour vos événements d'entreprise. Kokedama, teinture végétale, terrarium en groupe.",
    date: "Décembre 2024",
    icon: "users",
    link: "/b2b",
    linkText: "Demander un devis"
  }
];

const iconMap = {
  sparkles: Sparkles,
  gift: Gift,
  users: Users,
  calendar: Calendar
};

const NewsSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-sand/50 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-0.5 bg-sage" />
            <span className="text-sage font-medium uppercase tracking-wider text-sm">Actualités</span>
            <div className="w-8 h-0.5 bg-sage" />
          </div>
          <h2 
            className="text-3xl md:text-4xl text-charcoal mb-2"
            style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}
          >
            Les dernières nouvelles
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {newsItems.map((item) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div 
                key={item.id}
                className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border/50 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-sage/10 text-sage group-hover:bg-sage group-hover:text-off-white transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <Calendar className="w-3 h-3" />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="font-semibold text-charcoal mb-2 text-lg">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    {item.link && (
                      <Link 
                        to={item.link}
                        className="inline-flex items-center gap-1 text-sage hover:text-sage-dark font-medium text-sm transition-colors"
                      >
                        {item.linkText}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
