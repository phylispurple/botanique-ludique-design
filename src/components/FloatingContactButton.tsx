import { useState, useEffect } from "react";
import { X, Mail, Phone, CalendarDays, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Bulle de contact flottante (bas à droite), style organique :
 * galet olive avec la feuille du logo, petite bulle « Une question ? »
 * qui apparaît quelques secondes après l'arrivée, et pastille orange
 * tant que le menu n'a pas été ouvert.
 */

const PASTILLE = { borderRadius: "55% 45% 52% 48% / 46% 54% 46% 54%" };
const VU_KEY = "bl-contact-vu";

// Feuille simple style logo Botanique Ludique
const SimpleLeaf = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ transform: "rotate(-15deg)" }}>
    <path d="M28 58C28 58 26 48 28 38C30 28 32 24 32 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M32 6C32 6 48 18 48 32C48 46 40 52 32 52C24 52 16 46 16 32C16 18 32 6 32 6Z" fill="currentColor" />
    <path d="M32 14C32 14 32 44 32 48" stroke="hsl(var(--olive))" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
  </svg>
);

const lireVu = () => {
  try {
    return sessionStorage.getItem(VU_KEY) === "1";
  } catch {
    return false;
  }
};

const CHOIX = [
  {
    href: `/contact?subject=${encodeURIComponent("Demande de devis")}`,
    interne: true,
    icon: MessageCircle,
    titre: "Demander un devis",
    sous: "Réponse sous 48 h",
    ton: "bg-accent",
  },
  {
    href: "tel:+33609831606",
    interne: false,
    icon: Phone,
    titre: "06 09 83 16 06",
    sous: "Du lundi au vendredi",
    ton: "bg-[hsl(var(--olive-light))]",
  },
  {
    href: "mailto:contact@botaniqueludique.com",
    interne: false,
    icon: Mail,
    titre: "Écrire un e-mail",
    sous: "contact@botaniqueludique.com",
    ton: "bg-[hsl(var(--cream))]",
  },
  {
    href: "/agenda",
    interne: true,
    icon: CalendarDays,
    titre: "Prochains ateliers",
    sous: "Voir l'agenda",
    ton: "bg-[hsl(var(--green))] text-[hsl(var(--cream))]",
  },
];

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [vu, setVu] = useState(lireVu);
  const [bulle, setBulle] = useState(false);

  // La petite bulle apparaît après quelques secondes, une fois par visite.
  useEffect(() => {
    if (vu) return;
    const montrer = setTimeout(() => setBulle(true), 6000);
    const cacher = setTimeout(() => setBulle(false), 16000);
    return () => {
      clearTimeout(montrer);
      clearTimeout(cacher);
    };
  }, [vu]);

  const marquerVu = () => {
    setVu(true);
    setBulle(false);
    try {
      sessionStorage.setItem(VU_KEY, "1");
    } catch {
      /* stockage indisponible : sans importance */
    }
  };

  const basculer = () => {
    setIsOpen((o) => !o);
    marquerVu();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Menu ouvert */}
      {isOpen && (
        <div
          className="absolute bottom-24 right-0 w-[264px] bg-[hsl(var(--cream))] border-brutal shadow-[6px_6px_0_hsl(var(--black))] p-5 animate-scale-in origin-bottom-right"
          style={{ borderRadius: "34px 46px 30px 50px / 46px 30px 50px 34px" }}
        >
          <p className="font-mono-brand text-[10px] uppercase tracking-[2px] text-[hsl(var(--olive))] mb-1">On en parle ?</p>
          <p className="font-display text-lg uppercase leading-tight mb-4">Contactez-nous</p>
          <div className="space-y-2.5">
            {CHOIX.map((c) => {
              const contenu = (
                <>
                  <span className={`w-10 h-10 flex-shrink-0 flex items-center justify-center border-brutal-thin ${c.ton}`} style={PASTILLE}>
                    <c.icon className="w-4 h-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium leading-tight">{c.titre}</span>
                    <span className="block text-[11px] text-foreground/60 truncate">{c.sous}</span>
                  </span>
                </>
              );
              const cls =
                "flex items-center gap-3 rounded-full border-2 border-transparent hover:border-foreground hover:bg-[hsl(var(--olive-light))]/30 pr-3 transition-colors";
              return c.interne ? (
                <Link key={c.titre} to={c.href} className={cls} onClick={() => setIsOpen(false)}>
                  {contenu}
                </Link>
              ) : (
                <a key={c.titre} href={c.href} className={cls}>
                  {contenu}
                </a>
              );
            })}
          </div>
        </div>
      )}

      {/* Petite bulle « Une question ? » */}
      {bulle && !isOpen && (
        <button
          type="button"
          onClick={basculer}
          className="absolute bottom-2 right-[78px] whitespace-nowrap bg-[hsl(var(--cream))] border-brutal shadow-[3px_3px_0_hsl(var(--black))] px-4 py-2.5 -rotate-2 animate-scale-in origin-right text-left"
          style={{ borderRadius: "22px 6px 26px 24px / 22px 6px 22px 24px" }}
        >
          <span className="block font-display text-sm uppercase leading-none">Une question ?</span>
          <span className="block font-mono-brand text-[9px] uppercase tracking-[1.5px] text-foreground/60 mt-1">Réponse sous 48 h</span>
        </button>
      )}

      {/* Bouton principal : galet olive avec la feuille */}
      <button
        onClick={basculer}
        className={`relative w-16 h-16 flex items-center justify-center border-brutal shadow-[4px_4px_0_hsl(var(--black))] transition-all duration-300 hover:-translate-y-0.5 ${
          isOpen ? "bg-foreground text-[hsl(var(--cream))]" : "bg-[hsl(var(--olive))] text-[hsl(var(--cream))] hover:rotate-6"
        }`}
        style={{ borderRadius: "56% 44% 50% 50% / 48% 56% 44% 52%" }}
        aria-label={isOpen ? "Fermer le menu contact" : "Ouvrir le menu contact"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-7 h-7" /> : <SimpleLeaf className="w-9 h-9" />}

        {/* Pastille orange tant que le menu n'a pas été ouvert */}
        {!vu && !isOpen && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full bg-accent opacity-70 animate-ping" style={PASTILLE} />
            <span className="relative inline-flex h-5 w-5 bg-accent border-2 border-foreground" style={PASTILLE} />
          </span>
        )}
      </button>
    </div>
  );
};

export default FloatingContactButton;
