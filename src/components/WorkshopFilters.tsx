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
  bg: string; 
  bgActive: string;
  text: string; 
  border: string;
  hoverBg: string;
}> = {
  all: { 
    bg: "bg-sage/10", 
    bgActive: "bg-sage",
    text: "text-sage-dark", 
    border: "border-sage/30",
    hoverBg: "hover:bg-sage/20"
  },
  textiles: { 
    bg: "bg-purple-50", 
    bgActive: "bg-purple-600",
    text: "text-purple-700", 
    border: "border-purple-300",
    hoverBg: "hover:bg-purple-100"
  },
  jardinage: { 
    bg: "bg-emerald-50", 
    bgActive: "bg-emerald-600",
    text: "text-emerald-700", 
    border: "border-emerald-300",
    hoverBg: "hover:bg-emerald-100"
  },
  floral: { 
    bg: "bg-pink-50", 
    bgActive: "bg-pink-600",
    text: "text-pink-700", 
    border: "border-pink-300",
    hoverBg: "hover:bg-pink-100"
  },
  artisanat: { 
    bg: "bg-amber-50", 
    bgActive: "bg-amber-600",
    text: "text-amber-700", 
    border: "border-amber-300",
    hoverBg: "hover:bg-amber-100"
  },
  "bien-etre": { 
    bg: "bg-teal-50", 
    bgActive: "bg-teal-600",
    text: "text-teal-700", 
    border: "border-teal-300",
    hoverBg: "hover:bg-teal-100"
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
                  ? `${colors.bgActive} text-white shadow-md scale-105 border-transparent` 
                  : `${colors.bg} ${colors.text} ${colors.border} ${colors.hoverBg}`
                }
              `}
            >
              {Icon && <Icon size={16} className="mr-2" />}
              <span className="font-semibold text-xs uppercase tracking-wide">
                {category.label}
              </span>
              {count > 0 && (
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  isActive ? "bg-white/20" : "bg-black/10"
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
