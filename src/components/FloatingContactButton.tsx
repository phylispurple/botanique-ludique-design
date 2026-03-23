import { useState, useEffect } from "react";
import { X, Mail, Phone, Calendar, ArrowRight } from "lucide-react";
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
    <path 
      d="M28 58C28 58 26 48 28 38C30 28 32 24 32 24" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round"
    />
    <path 
      d="M32 6C32 6 48 18 48 32C48 46 40 52 32 52C24 52 16 46 16 32C16 18 32 6 32 6Z" 
      fill="currentColor"
    />
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
  const [showSlidePanel, setShowSlidePanel] = useState(false);
  const [panelDismissed, setPanelDismissed] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen && !hasBeenOpened) {
      setHasBeenOpened(true);
    }
  }, [isOpen, hasBeenOpened]);

  // Show slide-in panel after 8 seconds, only once
  useEffect(() => {
    if (panelDismissed) return;
    const timer = setTimeout(() => {
      if (!panelDismissed && !isOpen) {
        setShowSlidePanel(true);
      }
    }, 8000);
    return () => clearTimeout(timer);
  }, [panelDismissed, isOpen]);

  const dismissPanel = () => {
    setIsClosing(true);
    // After shrink animation completes, hide panel
    setTimeout(() => {
      setShowSlidePanel(false);
      setPanelDismissed(true);
      setIsClosing(false);
    }, 600);
  };

  return (
    <>
      {/* ===== SLIDE-IN PANEL FROM RIGHT ===== */}
      <div
        className={`fixed top-0 right-0 h-full z-[1000] transition-all origin-bottom-right ${
          isClosing 
            ? "scale-0 opacity-0 rounded-full duration-[600ms] ease-[cubic-bezier(0.55,0.085,0.68,0.53)]"
            : showSlidePanel 
              ? "translate-x-0 scale-100 opacity-100 duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" 
              : "translate-x-full scale-100 opacity-100 duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        }`}
        style={{ 
          width: 'min(420px, 85vw)',
          transformOrigin: isClosing ? 'calc(100% - 38px) calc(100% - 38px)' : 'center center',
        }}
      >
        <div className="h-full bg-[hsl(var(--black))] text-[hsl(var(--cream))] flex flex-col relative overflow-hidden">
          {/* Close button */}
          <button
            onClick={dismissPanel}
            className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center text-[hsl(var(--cream))]/60 hover:text-[hsl(var(--cream))] transition-colors"
            aria-label="Fermer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Decorative top accent */}
          <div className="h-1.5 bg-[hsl(var(--olive))]" />

          <div className="flex-1 flex flex-col justify-center px-10 md:px-12 py-16">
            <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive-light))] mb-6 block">
              Botanique Ludique
            </span>

            <h2 className="font-display text-[clamp(1.8rem,5vw,2.8rem)] uppercase leading-[0.95] tracking-[-1px] mb-6">
              Besoin d'une<br />
              <span className="text-[hsl(var(--olive-light))]">médiatrice ?</span>
            </h2>

            <p className="text-base leading-[1.7] text-[hsl(var(--cream))]/70 mb-4">
              Ateliers botaniques, conférences, balades nature, animations pour vos événements…
            </p>
            <p className="text-base leading-[1.7] text-[hsl(var(--cream))]/70 mb-10">
              N'hésitez pas à nous contacter pour organiser votre projet sur mesure.
            </p>

            {/* Actions */}
            <div className="space-y-3 mb-10">
              <Link
                to="/contact"
                onClick={dismissPanel}
                className="btn-brutal bg-[hsl(var(--olive))] text-[hsl(var(--cream))] border-[hsl(var(--olive))] hover:bg-[hsl(var(--cream))] hover:text-[hsl(var(--black))] text-xs px-7 py-3.5 inline-flex items-center gap-2 w-full justify-center"
              >
                Nous contacter <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/workshops"
                onClick={dismissPanel}
                className="btn-brutal bg-transparent text-[hsl(var(--cream))] border-[hsl(var(--cream))]/30 hover:bg-[hsl(var(--cream))] hover:text-[hsl(var(--black))] text-xs px-7 py-3.5 inline-flex items-center gap-2 w-full justify-center"
              >
                Découvrir les ateliers
              </Link>
            </div>

            {/* Quick contact */}
            <div className="border-t border-[hsl(var(--cream))]/10 pt-6 space-y-3">
              <a href="mailto:contact@botaniqueludique.com" className="flex items-center gap-3 text-sm text-[hsl(var(--cream))]/60 hover:text-[hsl(var(--cream))] transition-colors">
                <Mail className="w-4 h-4 text-[hsl(var(--olive-light))]" />
                contact@botaniqueludique.com
              </a>
              <a href="tel:+33609831606" className="flex items-center gap-3 text-sm text-[hsl(var(--cream))]/60 hover:text-[hsl(var(--cream))] transition-colors">
                <Phone className="w-4 h-4 text-[hsl(var(--olive-light))]" />
                06 09 83 16 06
              </a>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="px-10 md:px-12 pb-8">
            <p className="font-mono-brand text-[9px] uppercase tracking-[2px] text-[hsl(var(--cream))]/30">
              Paris · Yvelines 78 · Hauts-de-Seine 92 · Val-d'Oise 95
            </p>
          </div>
        </div>
      </div>

      {/* Overlay when panel is open */}
      {showSlidePanel && (
        <div
          className="fixed inset-0 bg-[hsl(var(--black))]/40 z-[999] transition-opacity duration-300"
          onClick={dismissPanel}
        />
      )}

      {/* ===== FLOATING CONTACT BUTTON ===== */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Menu ouvert */}
        {isOpen && (
          <div className="absolute bottom-20 right-0 bg-[hsl(var(--cream))] border-brutal shadow-brutal-lg p-4 mb-4 animate-scale-in min-w-[220px]">
            <div className="space-y-3">
              <p className="text-sm font-semibold text-[hsl(var(--black))] font-mono-brand uppercase tracking-[1.5px] text-[10px] border-b border-[hsl(var(--black))] pb-2 mb-3">
                Contactez-nous
              </p>
              
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
            </div>
          </div>
        )}
        
        {/* Bouton principal */}
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
        
        {/* Badge notification */}
        {!isOpen && !hasBeenOpened && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-[hsl(var(--orange))] rounded-full flex items-center justify-center animate-pulse shadow-lg">
            <span className="text-[11px] text-white font-bold">1</span>
          </span>
        )}
      </div>
    </>
  );
};

export default FloatingContactButton;
