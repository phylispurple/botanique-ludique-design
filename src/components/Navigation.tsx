import { Link, useLocation } from "react-router-dom";
import { Menu, X, Leaf, ChevronDown } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [workshopsOpen, setWorkshopsOpen] = useState(false);
  const [trainingOpen, setTrainingOpen] = useState(false);

  const workshopCategories = [
    {
      category: "Créations Textiles & Teintures",
      workshops: [
        { name: "Teinture Végétale", id: "teinture-vegetale" },
        { name: "Tataki Zome", id: "tataki-zome" },
        { name: "Cuir Végétal", id: "cuir-vegetal" },
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
        { name: "Tableau Végétal", id: "tableau-vegetal" },
        { name: "Herbier", id: "herbier" },
      ]
    },
    {
      category: "Artisanat & Techniques Ancestrales",
      workshops: [
        { name: "Vannerie", id: "vannerie" },
        { name: "Photographie Végétale", id: "photographie-vegetale" },
        { name: "Totems en Forêt", id: "eco-construction-totems-en-foret" },
        { name: "Papier Recyclé", id: "papier-recycle-&-carnets" },
        { name: "Craies Végétales", id: "craies-vegetales" },
      ]
    },
    {
      category: "Bien-être & Aromathérapie",
      workshops: [
        { name: "Sachets Senteur", id: "sachets-senteur-&-pots-pourris" },
        { name: "Eaux Florales", id: "creation-d-eaux-florales" },
      ]
    },
  ];

  const trainingCategories = [
    { name: "Collèges & Lycées", id: "colleges-lycees" },
    { name: "BTS & Formations Pro", id: "formations-pro" },
    { name: "Entreprises", id: "entreprises" },
  ];

  const links = [
    { name: "Accueil", path: "/" },
    { name: "À propos", path: "/about" },
    { name: "Éthique", path: "/philosophy" },
    { name: "Ateliers", path: "/workshops" },
    { name: "Calendrier", path: "/calendar" },
    { name: "Formations", path: "/training" },
    { name: "Professionnels", path: "/b2b" },
    { name: "Galerie", path: "/gallery" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 md:px-6 py-5 md:py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <Leaf 
              className="w-10 h-10 md:w-12 md:h-12 transition-all duration-300 group-hover:animate-leaf-sway" 
              style={{ color: '#A7B795', strokeWidth: 1.5 }}
            />
            <div className="flex flex-col leading-none animate-fade-in">
              <span className="font-serif text-2xl md:text-[28px] font-light tracking-wider" style={{ color: '#5D653A' }}>
                Botanique
              </span>
              <span className="font-serif text-2xl md:text-[28px] font-light tracking-wider" style={{ color: '#5D653A' }}>
                Ludique
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8" style={{ marginLeft: '55px' }}>
            {links.map((link) => (
              link.name === "Ateliers" ? (
                <div
                  key={link.path}
                  className="relative group"
                  onMouseEnter={() => setWorkshopsOpen(true)}
                  onMouseLeave={() => setWorkshopsOpen(false)}
                >
                  <Link
                    to={link.path}
                    onClick={() => {
                      setWorkshopsOpen(false);
                      // Force scroll to top immediately
                      setTimeout(() => {
                        window.scrollTo({
                          top: 0,
                          behavior: 'smooth'
                        });
                      }, 50);
                    }}
                    className={`menu-link font-sans text-[15px] tracking-wider uppercase flex items-center gap-1 ${
                      location.pathname === link.path ? "font-medium" : ""
                    }`}
                    style={{ 
                      color: location.pathname === link.path ? '#5D653A' : '#8B8B7A'
                    }}
                  >
                    {link.name}
                    <ChevronDown size={16} className="transition-transform duration-200 group-hover:rotate-180" />
                  </Link>
                  
                  {/* Dropdown Menu */}
                  <div
                    className={`absolute top-full left-0 mt-2 w-72 bg-[#F7F7EB] backdrop-blur-md border border-sage/20 rounded-lg shadow-xl overflow-hidden transition-all duration-200 max-h-[80vh] overflow-y-auto ${
                      workshopsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}
                    style={{ zIndex: 100 }}
                  >
                    <div className="py-2">
                      {workshopCategories.map((category, index) => (
                        <div key={category.category}>
                          {index > 0 && <div className="border-t border-sage/20 my-2" />}
                          <div className="px-4 py-1 text-xs font-semibold uppercase tracking-wider" style={{ color: '#5D653A' }}>
                            {category.category}
                          </div>
                          {category.workshops.map((workshop) => (
                            <Link
                              key={workshop.id}
                              to={`/workshops#${workshop.id}`}
                              className="block px-6 py-2 text-sm hover:bg-sage/10 transition-colors"
                              style={{ color: '#3D3D2E' }}
                              onClick={() => {
                                setWorkshopsOpen(false);
                                setTimeout(() => {
                                  const element = document.getElementById(workshop.id);
                                  if (element) {
                                    const offset = 100;
                                    const elementPosition = element.getBoundingClientRect().top;
                                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                                    window.scrollTo({
                                      top: offsetPosition,
                                      behavior: 'smooth'
                                    });
                                  }
                                }, 100);
                              }}
                            >
                              {workshop.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : link.name === "Formations" ? (
                <div
                  key={link.path}
                  className="relative group"
                  onMouseEnter={() => setTrainingOpen(true)}
                  onMouseLeave={() => setTrainingOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`menu-link font-sans text-[15px] tracking-wider uppercase flex items-center gap-1 ${
                      location.pathname === link.path ? "font-medium" : ""
                    }`}
                    style={{ 
                      color: location.pathname === link.path ? '#5D653A' : '#8B8B7A'
                    }}
                  >
                    {link.name}
                    <ChevronDown size={16} className="transition-transform duration-200 group-hover:rotate-180" />
                  </Link>
                  
                  {/* Dropdown Menu */}
                  <div
                    className={`absolute top-full left-0 mt-2 w-64 bg-[#F7F7EB] backdrop-blur-md border border-sage/20 rounded-lg shadow-xl overflow-hidden transition-all duration-200 ${
                      trainingOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}
                    style={{ zIndex: 100 }}
                  >
                    <div className="py-2">
                      {trainingCategories.map((category) => (
                        <Link
                          key={category.id}
                          to={`/training#${category.id}`}
                          className="block px-4 py-2 text-sm hover:bg-sage/10 transition-colors"
                          style={{ color: '#3D3D2E' }}
                          onClick={() => {
                            setTrainingOpen(false);
                            setTimeout(() => {
                              const element = document.getElementById(category.id);
                              if (element) {
                                const offset = 100;
                                const elementPosition = element.getBoundingClientRect().top;
                                const offsetPosition = elementPosition + window.pageYOffset - offset;
                                window.scrollTo({
                                  top: offsetPosition,
                                  behavior: 'smooth'
                                });
                              }
                            }, 100);
                          }}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`menu-link font-sans text-[15px] tracking-wider uppercase ${
                    location.pathname === link.path ? "font-medium" : ""
                  }`}
                  style={{ 
                    color: location.pathname === link.path ? '#5D653A' : '#8B8B7A'
                  }}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-6 pb-4 space-y-4 animate-fade-up">
            {links.map((link) => (
              link.name === "Ateliers" ? (
                <div key={link.path}>
                  <button
                    onClick={() => setWorkshopsOpen(!workshopsOpen)}
                    className="flex items-center gap-1 font-sans text-sm tracking-wider uppercase transition-colors text-muted-foreground hover:text-foreground w-full"
                  >
                    {link.name}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${workshopsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {workshopsOpen && (
                    <div className="ml-4 mt-2 space-y-3">
                      <Link
                        to="/workshops"
                        className="block text-sm font-medium hover:text-primary mb-3"
                        style={{ color: '#5D653A' }}
                        onClick={() => {
                          setIsOpen(false);
                          setWorkshopsOpen(false);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                      >
                        → Tous les ateliers
                      </Link>
                      {workshopCategories.map((category) => (
                        <div key={category.category}>
                          <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#5D653A' }}>
                            {category.category}
                          </div>
                          {category.workshops.map((workshop) => (
                            <Link
                              key={workshop.id}
                              to={`/workshops#${workshop.id}`}
                              className="block ml-2 text-xs text-muted-foreground hover:text-foreground py-1"
                              onClick={() => {
                                setIsOpen(false);
                                setWorkshopsOpen(false);
                                setTimeout(() => {
                                  const element = document.getElementById(workshop.id);
                                  if (element) {
                                    const offset = 100;
                                    const elementPosition = element.getBoundingClientRect().top;
                                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                                    window.scrollTo({
                                      top: offsetPosition,
                                      behavior: 'smooth'
                                    });
                                  }
                                }, 100);
                              }}
                            >
                              {workshop.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : link.name === "Formations" ? (
                <div key={link.path}>
                  <button
                    onClick={() => setTrainingOpen(!trainingOpen)}
                    className="flex items-center gap-1 font-sans text-sm tracking-wider uppercase transition-colors text-muted-foreground hover:text-foreground w-full"
                  >
                    {link.name}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${trainingOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {trainingOpen && (
                    <div className="ml-4 mt-2 space-y-2">
                      {trainingCategories.map((category) => (
                        <Link
                          key={category.id}
                          to={`/training#${category.id}`}
                          className="block text-xs text-muted-foreground hover:text-foreground"
                          onClick={() => {
                            setIsOpen(false);
                            setTrainingOpen(false);
                            setTimeout(() => {
                              const element = document.getElementById(category.id);
                              if (element) {
                                const offset = 100;
                                const elementPosition = element.getBoundingClientRect().top;
                                const offsetPosition = elementPosition + window.pageYOffset - offset;
                                window.scrollTo({
                                  top: offsetPosition,
                                  behavior: 'smooth'
                                });
                              }
                            }, 100);
                          }}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block font-sans text-sm tracking-wider uppercase transition-colors ${
                    location.pathname === link.path
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
