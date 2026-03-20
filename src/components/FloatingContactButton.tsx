import { useState, useEffect } from "react";
import { X, Mail, Phone, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

// Feuille simple style logo Botanique Ludique
const SimpleLeaf = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 64 64" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ transform: 'rotate(-15deg)' }}
  >
    {/* Tige courbée */}
    <path 
      d="M28 58C28 58 26 48 28 38C30 28 32 24 32 24" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round"
    />
    {/* Feuille simple en forme de goutte */}
    <path 
      d="M32 6C32 6 48 18 48 32C48 46 40 52 32 52C24 52 16 46 16 32C16 18 32 6 32 6Z" 
      fill="currentColor"
    />
    {/* Nervure centrale */}
    <path 
      d="M32 14C32 14 32 44 32 48" 
      stroke="hsl(var(--cream))" 
      strokeWidth="1.5" 
      strokeLinecap="round"
      opacity="0.5"
    />
  </svg>
);

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenOpened, setHasBeenOpened] = useState(false);

  useEffect(() => {
    if (isOpen && !hasBeenOpened) {
      setHasBeenOpened(true);
    }
  }, [isOpen, hasBeenOpened]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Menu ouvert */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 bg-[hsl(var(--cream))] border-brutal shadow-brutal-lg p-4 mb-4 animate-scale-in min-w-[220px]">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-[hsl(var(--black))] font-mono-brand uppercase tracking-[1.5px] text-[10px] border-b border-[hsl(var(--black))] pb-2 mb-3">
              Contactez-nous
            </p>
            
            {/* Email */}
            <a
              href="mailto:contact@botaniqueludique.com"
              className="flex items-center gap-3 p-3 hover:bg-[hsl(var(--green-pale))] transition-colors group"
            >
              <div className="p-2 bg-[hsl(var(--olive))]/20 rounded-full group-hover:bg-[hsl(var(--olive))]/30 transition-colors">
                <Mail className="w-4 h-4 text-[hsl(var(--olive))]" />
              </div>
              <div>
                <p className="text-sm font-medium text-[hsl(var(--black))]">Email</p>
              </div>
            </a>
            
            {/* Téléphone */}
            <a
              href="tel:+33609831606"
              className="flex items-center gap-3 p-3 hover:bg-[hsl(var(--green-pale))] transition-colors group"
            >
              <div className="p-2 bg-[hsl(var(--olive))]/20 rounded-full group-hover:bg-[hsl(var(--olive))]/30 transition-colors">
                <Phone className="w-4 h-4 text-[hsl(var(--olive))]" />
              </div>
              <div>
                <p className="text-sm font-medium text-[hsl(var(--black))]">06 09 83 16 06</p>
                <p className="text-xs text-muted-foreground">Du lundi au vendredi</p>
              </div>
            </a>
            
            {/* Réserver */}
            <Link
              to="/agenda"
              className="flex items-center gap-3 p-3 bg-[hsl(var(--olive))]/10 hover:bg-[hsl(var(--olive))]/20 transition-colors group"
              onClick={() => setIsOpen(false)}
            >
              <div className="p-2 bg-[hsl(var(--olive))] rounded-full">
                <Calendar className="w-4 h-4 text-[hsl(var(--cream))]" />
              </div>
              <div>
                <p className="text-sm font-medium text-[hsl(var(--black))]">Réserver</p>
                <p className="text-xs text-muted-foreground">Voir les ateliers</p>
              </div>
            </Link>
            
            {/* Devis Pro */}
            <Link
              to="/pro"
              className="flex items-center gap-3 p-3 border-brutal hover:bg-[hsl(var(--olive))]/10 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <div className="text-center w-full">
                <p className="text-sm font-semibold text-[hsl(var(--olive))]">Devis Entreprise</p>
                <p className="text-xs text-muted-foreground">Réponse sous 24h</p>
              </div>
            </Link>
          </div>
        </div>
      )}
      
      {/* Bouton principal - Monstera Leaf */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-16 h-16 rounded-full shadow-brutal flex items-center justify-center
          transition-all duration-300 hover:scale-110 hover:shadow-brutal-lg border-brutal
          ${isOpen 
            ? 'bg-[hsl(var(--black))] text-[hsl(var(--cream))] rotate-0' 
            : 'bg-[hsl(var(--olive))] text-[hsl(var(--cream))] hover:rotate-12'
          }
        `}
        aria-label={isOpen ? "Fermer le menu contact" : "Ouvrir le menu contact"}
      >
        {isOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <SimpleLeaf className="w-10 h-10" />
        )}
      </button>
      
      {/* Badge notification - hidden once menu has been opened */}
      {!isOpen && !hasBeenOpened && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-[hsl(var(--orange))] rounded-full flex items-center justify-center animate-pulse shadow-lg">
          <span className="text-[11px] text-white font-bold">1</span>
        </span>
      )}
    </div>
  );
};

export default FloatingContactButton;