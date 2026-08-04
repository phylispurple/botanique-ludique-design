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

const categories = [
  { id: "all" as WorkshopCategory, label: "Tous", icon: null },
  { id: "textiles" as WorkshopCategory, label: "Textiles", icon: Palette },
  { id: "jardinage" as WorkshopCategory, label: "Jardinage", icon: Sprout },
  { id: "floral" as WorkshopCategory, label: "Art Floral", icon: Flower2 },
  { id: "artisanat" as WorkshopCategory, label: "Artisanat", icon: Hammer },
  { id: "bien-etre" as WorkshopCategory, label: "Bien-être", icon: Droplets },
];

const WorkshopFilters = ({ activeCategory, onCategoryChange, workshopCounts }: WorkshopFiltersProps) => {
  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-0 justify-center">
        {categories.map((category) => {
          const Icon = category.icon;
          const count = workshopCounts[category.id];
          const isActive = activeCategory === category.id;

          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`
                font-mono-brand text-[10px] uppercase tracking-[2px] px-5 py-3
                border-brutal -ml-[3px] first:ml-0
                transition-colors duration-200
                flex items-center gap-2
                ${isActive
                  ? "bg-foreground text-primary-foreground"
                  : "bg-[hsl(var(--cream))] text-foreground hover:bg-[hsl(var(--green-pale))]"
                }
              `}
            >
              {Icon && <Icon size={14} />}
              <span>{category.label}</span>
              {count > 0 && (
                <span className={`text-[9px] ${isActive ? "text-primary-foreground/60" : "text-foreground/40"}`}>
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default WorkshopFilters;
