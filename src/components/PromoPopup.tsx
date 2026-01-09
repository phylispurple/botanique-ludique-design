import { useState, useEffect } from "react";
import { X, Gift, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const POPUP_STORAGE_KEY = "botanique_popup_shown";
const POPUP_DELAY = 15000; // 15 secondes après l'arrivée

const PromoPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Vérifier si la popup a déjà été affichée dans cette session
    const hasSeenPopup = sessionStorage.getItem(POPUP_STORAGE_KEY);
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem(POPUP_STORAGE_KEY, "true");
      }, POPUP_DELAY);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-[60] animate-fade-in"
        onClick={handleClose}
      />
      
      {/* Popup */}
      <div className="fixed inset-0 flex items-center justify-center z-[70] p-4 animate-scale-in">
        <div 
          className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
            aria-label="Fermer"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>

          {/* Header with gradient */}
          <div 
            className="pt-8 pb-6 px-6 text-center"
            style={{
              background: 'linear-gradient(135deg, #9EB384 0%, #7A9B5C 100%)'
            }}
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Fraunces, serif' }}>
              Première visite ?
            </h3>
            <p className="text-white/90 text-sm">
              Offre spéciale pour vous accueillir !
            </p>
          </div>

          {/* Content */}
          <div className="p-6 text-center">
            <div className="mb-6">
              <p className="text-3xl font-bold text-sage mb-2">-10%</p>
              <p className="text-charcoal font-medium">
                sur votre premier atelier
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Code : <span className="font-mono font-bold text-sage bg-sage/10 px-2 py-1 rounded">BIENVENUE10</span>
              </p>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              Kokedama, teinture végétale, vannerie... Découvrez nos ateliers à Paris et en Île-de-France.
            </p>

            <div className="space-y-3">
              <Link
                to="/workshops"
                onClick={handleClose}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-sage hover:bg-sage-dark text-white rounded-full font-semibold transition-all hover:scale-105 hover:shadow-lg"
              >
                Découvrir les ateliers
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <button
                onClick={handleClose}
                className="w-full px-6 py-3 text-muted-foreground hover:text-charcoal transition-colors text-sm"
              >
                Peut-être plus tard
              </button>
            </div>
          </div>

          {/* Footer note */}
          <div className="bg-sage/5 px-6 py-3 text-center">
            <p className="text-xs text-muted-foreground">
              📍 Ateliers à Paris, Yvelines (78) et Hauts-de-Seine (92)
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromoPopup;
