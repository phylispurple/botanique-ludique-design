import { useState, useEffect } from "react";
import { X, Mail, Phone, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

// Custom Monstera Leaf SVG Component
const MonsteraLeaf = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 64 64" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Stem */}
    <path 
      d="M32 58C32 58 33 48 34 42" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round"
      opacity="0.8"
    />
    {/* Main leaf shape with fenestrations */}
    <path 
      d="M32 8C22 8 14 16 12 26C10 36 14 44 20 48C22 49.5 25 50 28 50C30 50 31.5 49 32 48C32.5 49 34 50 36 50C39 50 42 49.5 44 48C50 44 54 36 52 26C50 16 42 8 32 8Z" 
      fill="currentColor"
      opacity="0.9"
    />
    {/* Fenestration holes - characteristic monstera holes */}
    <ellipse cx="22" cy="28" rx="3" ry="5" fill="white" opacity="0.3"/>
    <ellipse cx="42" cy="28" rx="3" ry="5" fill="white" opacity="0.3"/>
    <ellipse cx="26" cy="40" rx="2.5" ry="4" fill="white" opacity="0.3"/>
    <ellipse cx="38" cy="40" rx="2.5" ry="4" fill="white" opacity="0.3"/>
    {/* Center vein */}
    <path 
      d="M32 14V44" 
      stroke="white" 
      strokeWidth="1.5" 
      strokeLinecap="round"
      opacity="0.4"
    />
    {/* Side veins */}
    <path 
      d="M32 20L24 26M32 28L22 36M32 36L26 44" 
      stroke="white" 
      strokeWidth="1" 
      strokeLinecap="round"
      opacity="0.3"
    />
    <path 
      d="M32 20L40 26M32 28L42 36M32 36L38 44" 
      stroke="white" 
      strokeWidth="1" 
      strokeLinecap="round"
      opacity="0.3"
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
        <div className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl p-4 mb-4 animate-scale-in min-w-[220px]">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-charcoal border-b pb-2 mb-3">
              Contactez-nous
            </p>
            
            {/* Email */}
            <a
              href="mailto:botaniqueludique@gmail.com"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-sage/10 transition-colors group"
            >
              <div className="p-2 bg-sage/20 rounded-full group-hover:bg-sage/30 transition-colors">
                <Mail className="w-4 h-4 text-sage" />
              </div>
              <div>
                <p className="text-sm font-medium text-charcoal">Email</p>
                <p className="text-xs text-muted-foreground">Réponse sous 24h</p>
              </div>
            </a>
            
            {/* Téléphone */}
            <a
              href="tel:+33609831606"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-sage/10 transition-colors group"
            >
              <div className="p-2 bg-sage/20 rounded-full group-hover:bg-sage/30 transition-colors">
                <Phone className="w-4 h-4 text-sage" />
              </div>
              <div>
                <p className="text-sm font-medium text-charcoal">06 09 83 16 06</p>
                <p className="text-xs text-muted-foreground">Du lundi au vendredi</p>
              </div>
            </a>
            
            {/* Réserver */}
            <Link
              to="/agenda"
              className="flex items-center gap-3 p-3 rounded-xl bg-sage/10 hover:bg-sage/20 transition-colors group"
              onClick={() => setIsOpen(false)}
            >
              <div className="p-2 bg-sage rounded-full">
                <Calendar className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-charcoal">Réserver</p>
                <p className="text-xs text-muted-foreground">Voir les ateliers</p>
              </div>
            </Link>
            
            {/* Devis Pro */}
            <Link
              to="/pro"
              className="flex items-center gap-3 p-3 rounded-xl border-2 border-sage hover:bg-sage/10 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <div className="text-center w-full">
                <p className="text-sm font-semibold text-sage">Devis Entreprise</p>
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
          w-16 h-16 rounded-full shadow-xl flex items-center justify-center
          transition-all duration-300 hover:scale-110 hover:shadow-2xl
          ${isOpen 
            ? 'bg-charcoal text-white rotate-0' 
            : 'bg-gradient-to-br from-sage via-sage to-sage-dark text-white hover:rotate-12'
          }
        `}
        aria-label={isOpen ? "Fermer le menu contact" : "Ouvrir le menu contact"}
      >
        {isOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <MonsteraLeaf className="w-9 h-9" />
        )}
      </button>
      
      {/* Badge notification - hidden once menu has been opened */}
      {!isOpen && !hasBeenOpened && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
          <span className="text-[11px] text-white font-bold">?</span>
        </span>
      )}
    </div>
  );
};

export default FloatingContactButton;