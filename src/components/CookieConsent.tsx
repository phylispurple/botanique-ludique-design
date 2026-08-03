import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";

const COOKIE_KEY = "cookieConsent";

type ConsentState = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
};

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsent] = useState<ConsentState>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_KEY);
    if (!saved) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveAndClose = (state: ConsentState) => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(state));
    setIsVisible(false);
  };

  const handleAcceptAll = () => saveAndClose({ essential: true, analytics: true, marketing: true });
  const handleRejectAll = () => saveAndClose({ essential: true, analytics: false, marketing: false });
  const handleSavePreferences = () => saveAndClose(consent);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-start p-4 md:p-6 pointer-events-none">
      <div className="pointer-events-auto w-full max-w-[480px] border-brutal bg-[hsl(var(--cream))] shadow-brutal animate-fade-up">
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-0">
          <div className="flex items-center gap-3">
            <Cookie className="w-5 h-5 text-[hsl(var(--olive))]" />
            <span className="font-mono-brand text-[10px] uppercase tracking-[2.5px] text-[hsl(var(--olive))]">
              Cookies
            </span>
          </div>
          <button
            onClick={handleRejectAll}
            className="text-[hsl(var(--black))]/40 hover:text-[hsl(var(--black))] transition-colors"
            aria-label="Fermer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 pt-4">
          <p className="text-sm leading-relaxed text-[hsl(var(--black))]/70 font-body mb-1">
            Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic.
            Vous pouvez personnaliser vos préférences à tout moment.
          </p>
          <a
            href="/politique-confidentialite"
            className="text-xs text-[hsl(var(--olive))] underline underline-offset-2 hover:text-[hsl(var(--olive-dark))] transition-colors"
          >
            Politique de confidentialité
          </a>

          {/* Details toggle */}
          {showDetails && (
            <div className="mt-5 space-y-3">
              {/* Essential */}
              <label className="flex items-center justify-between gap-3 py-2 border-b border-[hsl(var(--black))]/10">
                <div>
                  <p className="text-sm font-medium text-[hsl(var(--black))]">Essentiels</p>
                  <p className="text-[11px] text-[hsl(var(--black))]/50">Nécessaires au fonctionnement du site</p>
                </div>
                <div className="w-10 h-5 bg-[hsl(var(--olive))] rounded-full relative cursor-not-allowed opacity-60">
                  <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-[hsl(var(--cream))] rounded-full" />
                </div>
              </label>

              {/* Analytics */}
              <label className="flex items-center justify-between gap-3 py-2 border-b border-[hsl(var(--black))]/10 cursor-pointer group">
                <div>
                  <p className="text-sm font-medium text-[hsl(var(--black))]">Analytiques</p>
                  <p className="text-[11px] text-[hsl(var(--black))]/50">Mesure d'audience et statistiques</p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={consent.analytics}
                  onClick={() => setConsent(c => ({ ...c, analytics: !c.analytics }))}
                  className={`w-10 h-5 rounded-full relative transition-colors ${consent.analytics ? "bg-[hsl(var(--olive))]" : "bg-[hsl(var(--black))]/20"}`}
                >
                  <div className={`absolute top-0.5 w-4 h-4 bg-[hsl(var(--cream))] rounded-full transition-all ${consent.analytics ? "right-0.5" : "left-0.5"}`} />
                </button>
              </label>

              {/* Marketing */}
              <label className="flex items-center justify-between gap-3 py-2 cursor-pointer group">
                <div>
                  <p className="text-sm font-medium text-[hsl(var(--black))]">Marketing</p>
                  <p className="text-[11px] text-[hsl(var(--black))]/50">Publicité ciblée et réseaux sociaux</p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={consent.marketing}
                  onClick={() => setConsent(c => ({ ...c, marketing: !c.marketing }))}
                  className={`w-10 h-5 rounded-full relative transition-colors ${consent.marketing ? "bg-[hsl(var(--olive))]" : "bg-[hsl(var(--black))]/20"}`}
                >
                  <div className={`absolute top-0.5 w-4 h-4 bg-[hsl(var(--cream))] rounded-full transition-all ${consent.marketing ? "right-0.5" : "left-0.5"}`} />
                </button>
              </label>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="p-6 pt-0 flex flex-wrap gap-2">
          {showDetails ? (
            <button
              onClick={handleSavePreferences}
              className="btn-brutal bg-[hsl(var(--olive))] text-[hsl(var(--black))] border-[hsl(var(--olive))] hover:bg-[hsl(var(--cream))] hover:text-[hsl(var(--black))] hover:border-[hsl(var(--black))] text-[11px] px-5 py-2.5"
            >
              Enregistrer mes choix
            </button>
          ) : (
            <>
              <button
                onClick={handleAcceptAll}
                className="btn-brutal bg-[hsl(var(--olive))] text-[hsl(var(--black))] border-[hsl(var(--olive))] hover:bg-[hsl(var(--cream))] hover:text-[hsl(var(--black))] hover:border-[hsl(var(--black))] text-[11px] px-5 py-2.5"
              >
                Tout accepter
              </button>
              <button
                onClick={handleRejectAll}
                className="btn-brutal bg-transparent text-[hsl(var(--black))] border-[hsl(var(--black))] hover:bg-[hsl(var(--black))] hover:text-[hsl(var(--cream))] text-[11px] px-5 py-2.5"
              >
                Tout refuser
              </button>
              <button
                onClick={() => setShowDetails(true)}
                className="text-[11px] font-mono-brand uppercase tracking-[1.5px] text-[hsl(var(--black))]/50 hover:text-[hsl(var(--black))] transition-colors px-2 py-2.5 underline underline-offset-2"
              >
                Personnaliser
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
