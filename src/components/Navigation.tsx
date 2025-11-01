import { Link, useLocation } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Accueil", path: "/" },
    { name: "À propos", path: "/about" },
    { name: "Ateliers", path: "/workshops" },
    { name: "Philosophie", path: "/philosophy" },
    { name: "Galerie", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 md:px-6 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Leaf 
              className="w-6 h-6 md:w-7 md:h-7 transition-all duration-300 group-hover:rotate-12" 
              style={{ color: '#8B9C6B', strokeWidth: 1.5 }}
            />
            <div className="flex flex-col leading-none animate-fade-in">
              <span className="font-serif text-base md:text-lg font-light tracking-wider" style={{ color: '#5D653A' }}>
                Botanique
              </span>
              <span className="font-serif text-base md:text-lg font-light tracking-wider" style={{ color: '#5D653A' }}>
                Ludique
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-sans text-sm tracking-wider uppercase transition-colors ${
                  location.pathname === link.path
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
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
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
