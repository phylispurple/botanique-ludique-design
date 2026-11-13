import { Link, useLocation } from "react-router-dom";
import logoBL from "@/assets/logo-bl.webp";
import { Menu, X, ChevronDown, ArrowRight, Phone } from "lucide-react";
import { useState } from "react";

/**
 * Barre de navigation, style organique.
 * « Team building » n'a plus d'entrée propre : la page est accessible
 * depuis « Pro > Entreprises & CSE », qui pointe déjà dessus.
 */

const PASTILLE = { borderRadius: "55% 45% 52% 48% / 46% 54% 46% 54%" };
const BTN_GALET = { borderRadius: "26px 12px 24px 10px / 12px 24px 10px 26px" };
const GALET_MENU = { borderRadius: "24px 34px 20px 38px / 38px 22px 34px 24px" };
/** En dessous de cette largeur, on passe au menu burger. */
const LIEN_BASE = "font-mono text-[12.5px] font-bold uppercase tracking-[2px] no-underline transition-colors";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [workshopsOpen, setWorkshopsOpen] = useState(false);
  const [proOpen, setProOpen] = useState(false);

  const workshopCategories = [
    {
      category: "Créations Textiles & Teintures",
      workshops: [
        { name: "Teinture Végétale", id: "teinture-vegetale" },
        { name: "Tataki Zome", id: "tataki-zome" },
        { name: "Cycle Matières Végétales", id: "cycle-matieres-vegetales" },
      ],
    },
    {
      category: "Jardinage & Plantations",
      workshops: [
        { name: "Kokedama", id: "kokedama" },
        { name: "Terrariums", id: "terrariums" },
        { name: "Bombes de Graines", id: "bombes-de-graines" },
        { name: "Jardin Partagé", id: "jardin-partage-et-aquaponie" },
      ],
    },
    {
      category: "Art Floral & Compositions",
      workshops: [
        { name: "Couronnes de Fleurs", id: "couronnes-de-fleurs" },
        { name: "Herbier", id: "herbier" },
        { name: "Époxy Floral", id: "epoxy-floral" },
        { name: "Bougies & Fleurs Séchées", id: "bougies-&-fleurs-sechees" },
      ],
    },
    {
      category: "Artisanat & Techniques Ancestrales",
      workshops: [
        { name: "Vannerie", id: "vannerie" },
        { name: "Photographie Végétale", id: "photographie-vegetale" },
        { name: "Totems en Forêt", id: "eco-construction-&-totems-en-foret" },
        { name: "Papier Recyclé", id: "papier-recycle-&-carnets" },
        { name: "Craies Végétales", id: "craies-vegetales" },
      ],
    },
    {
      category: "Bien-être & Aromathérapie",
      workshops: [
        { name: "Sachets Senteur", id: "sachets-senteur-&-pots-pourris" },
        { name: "Tisanes, Sirops & Élixirs Botaniques", id: "tisanes,-sirops-&-elixirs-botaniques" },
      ],
    },
  ];

  // Mêmes publics et mêmes pages que les cartes de la page Pro.
  const proCategories = [
    { name: "Entreprises & CSE", sub: "Team building, séminaires, RSE", id: "entreprises", href: "/team-building-nature-entreprise" },
    { name: "Écoles & périscolaire", sub: "Primaire, collège, lycée", id: "scolaires", href: "/etablissements-scolaires" },
    { name: "Collectivités & médiathèques", sub: "Mairies, MJC, centres sociaux", id: "collectivites", href: "/animation-collectivites-mairies" },
    { name: "EHPAD & seniors", sub: "Ateliers sensoriels", id: "ehpad", href: "/animation-seniors-ehpad" },
    { name: "Événements & agences", sub: "Lancements, salons, presse", id: "evenementiel", href: "/animation-vegetale-agence-evenementielle" },
  ];

  /** Liens simples de la barre, dans l'ordre d'affichage. */
  const liensSimples = [
    { to: "/mediation", label: "Médiation & Balades" },
    { to: "/gallery", label: "Galerie" },
    { to: "/agenda", label: "Agenda" },
    { to: "/blog", label: "Blog" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const couleurLien = (actif: boolean) => ({ color: actif ? "hsl(73 44% 67%)" : "rgba(255,255,255,0.75)" });

  const scrollToWorkshop = (workshopId: string) => {
    const tryScroll = (retries = 0) => {
      const element = document.getElementById(workshopId);
      if (element) {
        const offset = 64;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      } else if (retries < 10) {
        setTimeout(() => tryScroll(retries + 1), 100);
      }
    };
    setTimeout(() => tryScroll(), 150);
  };

  const fermerTout = () => {
    setIsOpen(false);
    setWorkshopsOpen(false);
    setProOpen(false);
  };

  /** Pastille olive sous le lien de la page en cours. */
  const Pastille = () => (
    <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[hsl(73_44%_67%)]" style={PASTILLE} aria-hidden="true" />
  );

  return (
    <nav className="sticky top-0 z-[999] border-b-2 border-olive" style={{ background: "hsl(0 0% 10%)" }}>
      <div className="px-6 md:px-10 2xl:px-[60px] h-16 flex items-center justify-between gap-6">
        {/* Marque */}
        <Link
          to="/"
          className="flex items-center gap-3.5 no-underline flex-shrink-0"
          onClick={(e) => {
            fermerTout();
            if (location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <img src={logoBL} alt="" width={44} height={44} className="flex-shrink-0 w-11 h-11" />
          <div className="font-display text-[14px] uppercase tracking-[2.5px] leading-tight" style={{ color: "hsl(36 33% 93%)" }}>
            Botanique
            <br />
            <span style={{ color: "hsl(73 44% 67%)" }}>Ludique</span>
          </div>
        </Link>

        {/* ===== Menu ordinateur ===== */}
        <ul className="hidden min-[1180px]:flex items-center gap-5 2xl:gap-6 list-none m-0 p-0 whitespace-nowrap">
          <li className="relative">
            <Link to="/about" className={`${LIEN_BASE} hover:text-white`} style={couleurLien(isActive("/about"))}>
              À propos
            </Link>
            {isActive("/about") && <Pastille />}
          </li>

          {/* Ateliers */}
          <li className="relative group" onMouseEnter={() => setWorkshopsOpen(true)} onMouseLeave={() => setWorkshopsOpen(false)}>
            <Link
              to="/workshops"
              onClick={() => {
                setWorkshopsOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`${LIEN_BASE} flex items-center gap-1 hover:text-white`}
              style={couleurLien(isActive("/workshops"))}
            >
              Ateliers
              <ChevronDown size={12} className="transition-transform duration-200 group-hover:rotate-180" />
            </Link>
            {isActive("/workshops") && <Pastille />}

            <div
              className={`absolute top-full left-0 mt-3 w-72 border-brutal bg-cream shadow-[5px_5px_0_hsl(var(--black))] overflow-hidden transition-all duration-200 max-h-[80vh] overflow-y-auto ${
                workshopsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}
              style={{ ...GALET_MENU, zIndex: 100 }}
            >
              <div className="py-3">
                {workshopCategories.map((cat, idx) => (
                  <div key={cat.category}>
                    {idx > 0 && <div className="border-t border-foreground/10 my-2 mx-4" />}
                    <div className="px-5 py-1 font-mono text-[9px] uppercase tracking-[2px] font-bold" style={{ color: "hsl(73 37% 44%)" }}>
                      {cat.category}
                    </div>
                    {cat.workshops.map((w) => (
                      <Link
                        key={w.id}
                        to={`/workshops?reset=true#${w.id}`}
                        className="block px-6 py-1.5 text-sm font-body rounded-full hover:bg-[hsl(var(--olive-light))] transition-colors"
                        style={{ color: "hsl(0 0% 10%)" }}
                        onClick={() => {
                          setWorkshopsOpen(false);
                          scrollToWorkshop(w.id);
                        }}
                      >
                        {w.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </li>

          {/* Pro */}
          <li className="relative group" onMouseEnter={() => setProOpen(true)} onMouseLeave={() => setProOpen(false)}>
            <Link to="/pro" className={`${LIEN_BASE} flex items-center gap-1 hover:text-white`} style={couleurLien(isActive("/pro"))}>
              Pro
              <ChevronDown size={12} className="transition-transform duration-200 group-hover:rotate-180" />
            </Link>
            {isActive("/pro") && <Pastille />}

            <div
              className={`absolute top-full left-0 mt-3 w-[290px] border-brutal bg-cream shadow-[5px_5px_0_hsl(var(--black))] overflow-hidden transition-all duration-200 ${
                proOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}
              style={{ ...GALET_MENU, zIndex: 100 }}
            >
              <div className="py-3">
                <Link
                  to="/pro"
                  className="flex items-center gap-1.5 mx-4 mb-2 px-3 py-2 font-mono text-[10px] uppercase tracking-[1.5px] border-brutal-thin rounded-full bg-[hsl(var(--olive-light))] hover:bg-accent transition-colors"
                  style={{ color: "hsl(0 0% 10%)" }}
                  onClick={() => setProOpen(false)}
                >
                  Toutes nos offres pro <ArrowRight className="w-3 h-3" />
                </Link>
                {proCategories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={cat.href}
                    className="block px-5 py-2 hover:bg-[hsl(var(--olive-light))]/40 transition-colors"
                    style={{ color: "hsl(0 0% 10%)" }}
                    onClick={() => setProOpen(false)}
                  >
                    <span className="block text-sm font-body leading-tight">{cat.name}</span>
                    <span className="block font-mono text-[9px] uppercase tracking-[1px] text-foreground/50 mt-0.5">{cat.sub}</span>
                  </Link>
                ))}
              </div>
            </div>
          </li>

          {liensSimples.map((l) => (
            <li key={l.to} className="relative">
              <Link to={l.to} className={`${LIEN_BASE} hover:text-white`} style={couleurLien(isActive(l.to))}>
                {l.label}
              </Link>
              {isActive(l.to) && <Pastille />}
            </li>
          ))}

          {/* Bouton de contact */}
          <li className="ml-1">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-[1.5px] no-underline bg-accent text-foreground border-[2px] border-[hsl(36_33%_93%)] px-4 py-2 -rotate-1 hover:rotate-0 transition-transform"
              style={BTN_GALET}
            >
              Nous écrire <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </li>
        </ul>

        {/* Bouton burger */}
        <button onClick={() => setIsOpen(!isOpen)} className="min-[1180px]:hidden" style={{ color: "hsl(36 33% 93%)" }} aria-label="Menu" aria-expanded={isOpen}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ===== Menu téléphone ===== */}
      {isOpen && (
        <div className="min-[1180px]:hidden border-t border-olive/30 px-6 py-6" style={{ background: "hsl(0 0% 10%)" }}>
          <Link
            to="/about"
            onClick={fermerTout}
            className="block font-mono text-[13px] font-bold uppercase tracking-[2px] py-2.5 transition-colors"
            style={couleurLien(isActive("/about"))}
          >
            À propos
          </Link>

          {/* Ateliers */}
          <div className="border-t border-white/10 pt-2">
            <button
              onClick={() => setWorkshopsOpen(!workshopsOpen)}
              className="flex items-center justify-between gap-2 font-mono text-[13px] font-bold uppercase tracking-[2px] w-full py-2.5 transition-colors"
              style={couleurLien(isActive("/workshops"))}
              aria-expanded={workshopsOpen}
            >
              Ateliers
              <ChevronDown size={14} className={`transition-transform ${workshopsOpen ? "rotate-180" : ""}`} />
            </button>
            {workshopsOpen && (
              <div className="ml-3 mb-3 space-y-3">
                <Link
                  to="/workshops"
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[1.5px] border-[2px] border-[hsl(36_33%_93%)] rounded-full px-3 py-1.5"
                  style={{ color: "hsl(73 44% 67%)" }}
                  onClick={fermerTout}
                >
                  Tous les ateliers <ArrowRight className="w-3 h-3" />
                </Link>
                {workshopCategories.map((cat) => (
                  <div key={cat.category}>
                    <div className="font-mono text-[9px] uppercase tracking-[2px] font-bold mb-1" style={{ color: "hsl(73 37% 44%)" }}>
                      {cat.category}
                    </div>
                    {cat.workshops.map((w) => (
                      <Link
                        key={w.id}
                        to={`/workshops?reset=true#${w.id}`}
                        className="block ml-2 text-[13px] py-1 transition-colors"
                        style={{ color: "rgba(255,255,255,0.6)" }}
                        onClick={() => {
                          fermerTout();
                          scrollToWorkshop(w.id);
                        }}
                      >
                        {w.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Pro */}
          <div className="border-t border-white/10 pt-2">
            <button
              onClick={() => setProOpen(!proOpen)}
              className="flex items-center justify-between gap-2 font-mono text-[13px] font-bold uppercase tracking-[2px] w-full py-2.5 transition-colors"
              style={couleurLien(isActive("/pro"))}
              aria-expanded={proOpen}
            >
              Pro
              <ChevronDown size={14} className={`transition-transform ${proOpen ? "rotate-180" : ""}`} />
            </button>
            {proOpen && (
              <div className="ml-3 mb-3 space-y-2.5">
                <Link
                  to="/pro"
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[1.5px] border-[2px] border-[hsl(36_33%_93%)] rounded-full px-3 py-1.5"
                  style={{ color: "hsl(73 44% 67%)" }}
                  onClick={fermerTout}
                >
                  Toutes nos offres pro <ArrowRight className="w-3 h-3" />
                </Link>
                {proCategories.map((cat) => (
                  <Link key={cat.id} to={cat.href} className="block" onClick={fermerTout}>
                    <span className="block text-[13px] leading-tight" style={{ color: "rgba(255,255,255,0.75)" }}>
                      {cat.name}
                    </span>
                    <span className="block font-mono text-[9px] uppercase tracking-[1px] mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                      {cat.sub}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {liensSimples.map((l) => (
            <div key={l.to} className="border-t border-white/10">
              <Link
                to={l.to}
                onClick={fermerTout}
                className="block font-mono text-[13px] font-bold uppercase tracking-[2px] py-2.5 transition-colors"
                style={couleurLien(isActive(l.to))}
              >
                {l.label}
              </Link>
            </div>
          ))}

          {/* Boutons de contact */}
          <div className="border-t border-white/10 pt-5 mt-2 flex flex-wrap gap-3">
            <Link
              to="/contact"
              onClick={fermerTout}
              className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[1.5px] bg-accent text-foreground border-[2px] border-[hsl(36_33%_93%)] px-5 py-2.5 -rotate-1"
              style={BTN_GALET}
            >
              Nous écrire <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href="tel:+33609831606"
              className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[1.5px] border-[2px] border-[hsl(36_33%_93%)] px-5 py-2.5 rotate-1"
              style={{ ...BTN_GALET, color: "hsl(36 33% 93%)" }}
            >
              <Phone className="w-3.5 h-3.5" /> 06 09 83 16 06
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
