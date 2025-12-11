import { useState, useEffect } from "react";
import { X, Mail, Phone, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import monsteraLeafIcon from "@/assets/monstera-leaf-icon.png";

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
              href="mailto:contact@botaniqueludique.com"
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
          <img src={monsteraLeafIcon} alt="Contact" className="w-9 h-9 object-contain" />
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