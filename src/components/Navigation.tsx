import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

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
      ]
    },
    {
      category: "Jardinage & Plantations",
      workshops: [
        { name: "Kokedama", id: "kokedama" },
        { name: "Terrariums", id: "terrariums" },
        { name: "Bombes de Graines", id: "bombes-de-graines" },
        { name: "Jardin Partagé", id: "jardin-partage-et-aquaponie" },
      ]
    },
    {
      category: "Art Floral & Compositions",
      workshops: [
        { name: "Couronnes de Fleurs", id: "couronnes-de-fleurs" },
        { name: "Herbier", id: "herbier" },
        { name: "Époxy Floral", id: "epoxy-floral" },
      ]
    },
    {
      category: "Artisanat & Techniques Ancestrales",
      workshops: [
        { name: "Vannerie", id: "vannerie" },
        { name: "Photographie Végétale", id: "photographie-vegetale" },
        { name: "Totems en Forêt", id: "eco-construction-&-totems-en-foret" },
        { name: "Papier Recyclé", id: "papier-recycle-&-carnets" },
        { name: "Craies Végétales", id: "craies-vegetales" },
      ]
    },
    {
      category: "Bien-être & Aromathérapie",
      workshops: [
        { name: "Sachets Senteur", id: "sachets-senteur-&-pots-pourris" },
        { name: "Eaux Florales", id: "creation-d'eaux-florales" },
      ]
    },
  ];

  const proCategories = [
    { name: "Entreprises & Team Building", id: "entreprises" },
    { name: "Établissements Scolaires", id: "scolaires" },
    { name: "Collectivités & Associations", id: "collectivites" },
    { name: "EHPAD & Santé", id: "ehpad" },
    { name: "Événementiel", id: "evenementiel" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const scrollToWorkshop = (workshopId: string) => {
    const tryScroll = (retries = 0) => {
      const element = document.getElementById(workshopId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      } else if (retries < 10) {
        setTimeout(() => tryScroll(retries + 1), 100);
      }
    };
    setTimeout(() => tryScroll(), 150);
  };

  const NavLink = ({ to, children, active }: { to: string; children: React.ReactNode; active?: boolean }) => (
    <Link
      to={to}
      className={`font-mono text-[10px] uppercase tracking-[2px] no-underline pb-[2px] transition-colors hover:text-white/90 ${
        active ? 'border-b border-olive-light' : ''
      }`}
      style={{ color: active ? 'hsl(73 44% 67%)' : 'rgba(255,255,255,0.55)' }}
    >
      {children}
    </Link>
  );

  return (
    <nav className="sticky top-0 z-[999] border-b-2 border-olive" style={{ background: 'hsl(0 0% 10%)' }}>
      <div className="px-6 md:px-[60px] h-16 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3 no-underline flex-shrink-0">
          <svg width="28" height="36" viewBox="0 0 28 36" fill="none" className="flex-shrink-0">
            <path d="M14 0C14 0 0 12 0 22C0 29.732 6.268 36 14 36C21.732 36 28 29.732 28 22C28 12 14 0 14 0Z" fill="hsl(73 44% 67%)"/>
            <path d="M14 8V30M14 14L8 20M14 18L20 24" stroke="hsl(0 0% 10%)" strokeWidth="1.5"/>
          </svg>
          <div className="font-display text-[12px] uppercase tracking-[2.5px] leading-tight" style={{ color: 'hsl(36 33% 93%)' }}>
            Botanique<br/><span style={{ color: 'hsl(73 44% 67%)' }}>Ludique</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-0 list-none m-0 p-0">
          {/* === ASSOCIATION === */}
          <li className="flex items-center gap-5 pr-5 mr-5 border-r border-white/15">
            <span className="font-mono text-[8px] uppercase tracking-[2px] text-white/25 hidden xl:block">Asso</span>
            <NavLink to="/association" active={isActive('/association')}>Association</NavLink>

            {/* Ateliers dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setWorkshopsOpen(true)}
              onMouseLeave={() => setWorkshopsOpen(false)}
            >
              <Link
                to="/workshops"
                onClick={() => { setWorkshopsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`font-mono text-[10px] uppercase tracking-[2px] no-underline pb-[2px] flex items-center gap-1 transition-colors ${
                  isActive('/workshops') ? 'border-b border-olive-light' : ''
                }`}
                style={{ color: isActive('/workshops') ? 'hsl(73 44% 67%)' : 'rgba(255,255,255,0.55)' }}
              >
                Ateliers
                <ChevronDown size={12} className="transition-transform duration-200 group-hover:rotate-180" />
              </Link>

              <div className={`absolute top-full left-0 mt-0 w-72 border-brutal-thin bg-cream shadow-brutal-lg overflow-hidden transition-all duration-200 max-h-[80vh] overflow-y-auto ${
                workshopsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`} style={{ zIndex: 100 }}>
                <div className="py-2">
                  {workshopCategories.map((cat, idx) => (
                    <div key={cat.category}>
                      {idx > 0 && <div className="border-t border-foreground/10 my-2" />}
                      <div className="px-4 py-1 font-mono text-[9px] uppercase tracking-[2px] font-bold" style={{ color: 'hsl(73 37% 44%)' }}>
                        {cat.category}
                      </div>
                      {cat.workshops.map((w) => (
                        <Link
                          key={w.id}
                          to={`/workshops?reset=true#${w.id}`}
                          className="block px-6 py-2 text-sm font-body hover:bg-olive/10 transition-colors"
                          style={{ color: 'hsl(0 0% 10%)' }}
                          onClick={() => { setWorkshopsOpen(false); scrollToWorkshop(w.id); }}
                        >
                          {w.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <NavLink to="/gallery" active={isActive('/gallery')}>Galerie</NavLink>
            <NavLink to="/blog" active={isActive('/blog')}>Blog</NavLink>
          </li>

          {/* === PRESTATIONS INDÉPENDANTES === */}
          <li className="flex items-center gap-5 pl-0">
            <span className="font-mono text-[8px] uppercase tracking-[2px] text-[hsl(13,76%,61%)]/50 hidden xl:block">Prestations</span>

            {/* Pro dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setProOpen(true)}
              onMouseLeave={() => setProOpen(false)}
            >
              <Link
                to="/pro"
                className={`font-mono text-[10px] uppercase tracking-[2px] no-underline pb-[2px] flex items-center gap-1 transition-colors ${
                  isActive('/pro') ? 'border-b border-orange-light' : ''
                }`}
                style={{ color: isActive('/pro') ? 'hsl(13 76% 61%)' : 'rgba(255,255,255,0.55)' }}
              >
                Pro & Entreprises
                <ChevronDown size={12} className="transition-transform duration-200 group-hover:rotate-180" />
              </Link>

              <div className={`absolute top-full left-0 mt-0 w-64 border-brutal-thin bg-cream shadow-brutal-lg overflow-hidden transition-all duration-200 ${
                proOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`} style={{ zIndex: 100 }}>
                <div className="py-2">
                  {proCategories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/pro#${cat.id}`}
                      className="block px-4 py-2 text-sm font-body hover:bg-olive/10 transition-colors"
                      style={{ color: 'hsl(0 0% 10%)' }}
                      onClick={() => {
                        setProOpen(false);
                        setTimeout(() => {
                          const el = document.getElementById(cat.id);
                          if (el) {
                            const pos = el.getBoundingClientRect().top + window.pageYOffset - 80;
                            window.scrollTo({ top: pos, behavior: 'smooth' });
                          }
                        }, 100);
                      }}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <NavLink to="/about" active={isActive('/about')}>À propos</NavLink>
            <NavLink to="/contact" active={isActive('/contact')}>Contact</NavLink>
          </li>

          {/* CTA */}
          <li className="ml-5">
            <Link
              to="/contact"
              className="font-mono text-[10px] uppercase tracking-[2px] no-underline px-[18px] py-[7px] transition-all border hover:bg-orange hover:text-white hover:border-orange"
              style={{ color: 'hsl(13 76% 61%)', borderColor: 'rgba(220,110,80,0.4)' }}
            >
              Devis gratuit
            </Link>
          </li>
        </ul>

        {/* Mobile burger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden"
          style={{ color: 'hsl(36 33% 93%)' }}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-olive/30 px-6 py-6 space-y-6" style={{ background: 'hsl(0 0% 10%)' }}>
          {/* ASSOCIATION BLOCK */}
          <div className="space-y-3">
            <div className="font-mono text-[8px] uppercase tracking-[3px] text-[hsl(73,44%,67%)]/60 border-b border-white/10 pb-2">
              🌿 Association Botanique Ludique
            </div>
            <Link to="/association" onClick={() => setIsOpen(false)}
              className="block font-mono text-[10px] uppercase tracking-[2px] transition-colors"
              style={{ color: isActive('/association') ? 'hsl(73 44% 67%)' : 'rgba(255,255,255,0.55)' }}>
              Association
            </Link>

            {/* Ateliers accordion */}
            <div>
              <button
                onClick={() => setWorkshopsOpen(!workshopsOpen)}
                className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-[2px] w-full transition-colors"
                style={{ color: isActive('/workshops') ? 'hsl(73 44% 67%)' : 'rgba(255,255,255,0.55)' }}
              >
                Ateliers
                <ChevronDown size={12} className={`transition-transform ${workshopsOpen ? 'rotate-180' : ''}`} />
              </button>
              {workshopsOpen && (
                <div className="ml-4 mt-3 space-y-3">
                  <Link to="/workshops" className="block text-sm font-body font-medium mb-3" style={{ color: 'hsl(73 44% 67%)' }}
                    onClick={() => { setIsOpen(false); setWorkshopsOpen(false); }}>
                    → Tous les ateliers
                  </Link>
                  {workshopCategories.map((cat) => (
                    <div key={cat.category}>
                      <div className="font-mono text-[9px] uppercase tracking-[2px] font-bold mb-1" style={{ color: 'hsl(73 37% 44%)' }}>
                        {cat.category}
                      </div>
                      {cat.workshops.map((w) => (
                        <Link key={w.id} to={`/workshops?reset=true#${w.id}`}
                          className="block ml-2 text-xs py-1 transition-colors" style={{ color: 'rgba(255,255,255,0.45)' }}
                          onClick={() => { setIsOpen(false); setWorkshopsOpen(false); scrollToWorkshop(w.id); }}>
                          {w.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link to="/gallery" onClick={() => setIsOpen(false)}
              className="block font-mono text-[10px] uppercase tracking-[2px] transition-colors"
              style={{ color: isActive('/gallery') ? 'hsl(73 44% 67%)' : 'rgba(255,255,255,0.55)' }}>
              Galerie
            </Link>
            <Link to="/blog" onClick={() => setIsOpen(false)}
              className="block font-mono text-[10px] uppercase tracking-[2px] transition-colors"
              style={{ color: isActive('/blog') ? 'hsl(73 44% 67%)' : 'rgba(255,255,255,0.55)' }}>
              Blog
            </Link>
          </div>

          {/* PRESTATIONS BLOCK */}
          <div className="space-y-3">
            <div className="font-mono text-[8px] uppercase tracking-[3px] text-[hsl(13,76%,61%)]/60 border-b border-white/10 pb-2">
              💼 Prestations Indépendantes
            </div>

            {/* Pro accordion */}
            <div>
              <button
                onClick={() => setProOpen(!proOpen)}
                className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-[2px] w-full transition-colors"
                style={{ color: isActive('/pro') ? 'hsl(13 76% 61%)' : 'rgba(255,255,255,0.55)' }}
              >
                Pro & Entreprises
                <ChevronDown size={12} className={`transition-transform ${proOpen ? 'rotate-180' : ''}`} />
              </button>
              {proOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link to="/pro" className="block text-sm font-body font-medium mb-2" style={{ color: 'hsl(13 76% 61%)' }}
                    onClick={() => { setIsOpen(false); setProOpen(false); }}>
                    → Toutes nos offres pro
                  </Link>
                  {proCategories.map((cat) => (
                    <Link key={cat.id} to={`/pro#${cat.id}`}
                      className="block text-xs transition-colors" style={{ color: 'rgba(255,255,255,0.45)' }}
                      onClick={() => { setIsOpen(false); setProOpen(false); }}>
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about" onClick={() => setIsOpen(false)}
              className="block font-mono text-[10px] uppercase tracking-[2px] transition-colors"
              style={{ color: isActive('/about') ? 'hsl(13 76% 61%)' : 'rgba(255,255,255,0.55)' }}>
              À propos
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}
              className="block font-mono text-[10px] uppercase tracking-[2px] transition-colors"
              style={{ color: isActive('/contact') ? 'hsl(13 76% 61%)' : 'rgba(255,255,255,0.55)' }}>
              Contact
            </Link>

            <Link to="/contact" onClick={() => setIsOpen(false)}
              className="inline-block font-mono text-[10px] uppercase tracking-[2px] px-[18px] py-[7px] mt-2 border transition-all"
              style={{ color: 'hsl(13 76% 61%)', borderColor: 'rgba(220,110,80,0.4)' }}>
              Devis gratuit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
