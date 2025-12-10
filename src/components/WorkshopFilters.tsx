import { Button } from "@/components/ui/button";
import { Palette, Sprout, Flower2, Hammer, Droplets } from "lucide-react";

export type WorkshopCategory = 
  | "all" 
  | "textiles" 
  | "jardinage" 
  | "floral" 
  | "artisanat" 
  | "bien-etre";

interface WorkshopFiltersProps {
  activeCategory: WorkshopCategory;
  onCategoryChange: (category: WorkshopCategory) => void;
  workshopCounts: Record<WorkshopCategory, number>;
}

// Colors matching the category badges on workshop cards
const categoryColors: Record<WorkshopCategory, { 
  hoverBg: string;
  hoverText: string;
  activeBg: string;
}> = {
  all: { 
    hoverBg: "hover:bg-sage/30",
    hoverText: "hover:text-sage-dark",
    activeBg: "bg-sage",
  },
  textiles: { 
    hoverBg: "hover:bg-purple-100",
    hoverText: "hover:text-purple-700",
    activeBg: "bg-purple-600",
  },
  jardinage: { 
    hoverBg: "hover:bg-emerald-100",
    hoverText: "hover:text-emerald-700",
    activeBg: "bg-emerald-600",
  },
  floral: { 
    hoverBg: "hover:bg-pink-100",
    hoverText: "hover:text-pink-700",
    activeBg: "bg-pink-600",
  },
  artisanat: { 
    hoverBg: "hover:bg-amber-100",
    hoverText: "hover:text-amber-700",
    activeBg: "bg-amber-600",
  },
  "bien-etre": { 
    hoverBg: "hover:bg-teal-100",
    hoverText: "hover:text-teal-700",
    activeBg: "bg-teal-600",
  },
};

const categories = [
  { id: "all" as WorkshopCategory, label: "Tous les ateliers", icon: null },
  { id: "textiles" as WorkshopCategory, label: "Textiles & Teintures", icon: Palette },
  { id: "jardinage" as WorkshopCategory, label: "Jardinage & Plantations", icon: Sprout },
  { id: "floral" as WorkshopCategory, label: "Art Floral", icon: Flower2 },
  { id: "artisanat" as WorkshopCategory, label: "Artisanat Ancestral", icon: Hammer },
  { id: "bien-etre" as WorkshopCategory, label: "Bien-être", icon: Droplets },
];

const WorkshopFilters = ({ activeCategory, onCategoryChange, workshopCounts }: WorkshopFiltersProps) => {
  return (
    <div className="mb-12 animate-fade-in">
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => {
          const Icon = category.icon;
          const count = workshopCounts[category.id];
          const isActive = activeCategory === category.id;
          const colors = categoryColors[category.id];
          
          return (
            <Button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              variant="outline"
              className={`
                px-4 py-2 rounded-full transition-all duration-300 border
                ${isActive 
                  ? `${colors.activeBg} text-white shadow-md scale-105 border-transparent` 
                  : `bg-off-white/80 text-charcoal border-sage/30 ${colors.hoverBg} ${colors.hoverText}`
                }
              `}
            >
              {Icon && <Icon size={16} className="mr-2" />}
              <span className="font-semibold text-xs uppercase tracking-wide">
                {category.label}
              </span>
              {count > 0 && (
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  isActive ? "bg-white/20" : "bg-sage/20"
                }`}>
                  {count}
                </span>
              )}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default WorkshopFilters;
