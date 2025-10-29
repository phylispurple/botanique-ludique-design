import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 className="font-serif text-2xl mb-4 text-foreground">Botanique Ludique</h3>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              Workshops connecting humans and plants through creativity, ritual, and play.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-sm uppercase tracking-wider mb-4 text-foreground">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:contact@botaniqueludique.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-sm uppercase tracking-wider mb-4 text-foreground">Location</h4>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              Paris & surrounding regions
              <br />
              Available for private workshops
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="font-sans text-xs text-muted-foreground">
            © {new Date().getFullYear()} Botanique Ludique. Founded by Vanessa Charlery.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
