import { useState, useEffect } from "react";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", "all");
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem("cookieConsent", "none");
    setIsVisible(false);
  };

  const handleCustomize = () => {
    // For now, just accept essential cookies
    localStorage.setItem("cookieConsent", "essential");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-fade-up">
      <div className="max-w-2xl mx-auto md:mx-6 bg-white rounded-2xl shadow-2xl p-6 md:p-8 relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-charcoal/50 hover:text-charcoal transition-colors"
          aria-label="Fermer"
        >
          <X size={20} />
        </button>
        
        <h3 className="text-xl font-bold text-charcoal mb-3">
          Nous respectons votre vie privée.
        </h3>
        
        <p className="text-charcoal/70 text-sm mb-6 pr-6">
          Nous utilisons des cookies pour améliorer votre expérience de navigation et analyser notre trafic. 
          En cliquant sur « Tout accepter », vous consentez à notre utilisation des cookies.
        </p>
        
        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleCustomize}
            className="px-6 py-3 rounded-lg font-medium text-sage border-2 border-sage hover:bg-sage/10 transition-all"
          >
            Personnaliser
          </button>
          
          <button
            onClick={handleRejectAll}
            className="px-6 py-3 rounded-lg font-medium text-red-600 border-2 border-red-600 hover:bg-red-50 transition-all"
          >
            Tout rejeter
          </button>
          
          <button
            onClick={handleAcceptAll}
            className="px-6 py-3 rounded-lg font-medium text-white bg-sage hover:bg-sage-dark transition-all"
          >
            Accepter tout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
