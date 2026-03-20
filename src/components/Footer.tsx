import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const Footer = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    checkAdminStatus();
  }, []);

  const checkAdminStatus = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const { data: roles } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id)
      .eq('role', 'admin')
      .maybeSingle();
    setIsAdmin(!!roles);
  };

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "À propos", path: "/about" },
    { name: "Association", path: "/association" },
    { name: "Ateliers", path: "/workshops" },
    { name: "Pro & Entreprises", path: "/pro" },
    { name: "Galerie", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="border-t-2 border-olive" style={{ background: 'hsl(0 0% 10%)' }}>
      <div className="px-6 md:px-[60px] py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 no-underline">
              <svg width="28" height="36" viewBox="0 0 28 36" fill="none">
                <path d="M14 0C14 0 0 12 0 22C0 29.732 6.268 36 14 36C21.732 36 28 29.732 28 22C28 12 14 0 14 0Z" fill="hsl(73 44% 67%)"/>
                <path d="M14 8V30M14 14L8 20M14 18L20 24" stroke="hsl(0 0% 10%)" strokeWidth="1.5"/>
              </svg>
              <div className="font-display text-[12px] uppercase tracking-[2.5px] leading-tight" style={{ color: 'hsl(36 33% 93%)' }}>
                Botanique<br/><span style={{ color: 'hsl(73 44% 67%)' }}>Ludique</span>
              </div>
            </Link>
            <p className="text-sm font-body leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Association loi 1901 de médiation culturelle et scientifique autour du végétal.
            </p>
            <p className="text-xs font-body leading-relaxed mt-2" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Prestations indépendantes par Vanessa Charlery, ethnobotaniste.
            </p>
          </div>

          {/* Association */}
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] uppercase tracking-[2px]" style={{ color: 'hsl(73 44% 67%)' }}>🌿 Association</h4>
            <div className="flex flex-col space-y-2">
              {[
                { name: "L'association", path: "/association" },
                { name: "Ateliers", path: "/workshops" },
                { name: "Galerie", path: "/gallery" },
                { name: "Blog", path: "/blog" },
                { name: "FAQ", path: "/faq" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-sm font-body transition-colors hover:text-white/90" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Prestations */}
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] uppercase tracking-[2px]" style={{ color: 'hsl(13 76% 61%)' }}>💼 Prestations</h4>
            <div className="flex flex-col space-y-2">
              {[
                { name: "Pro & Entreprises", path: "/pro" },
                { name: "À propos", path: "/about" },
                { name: "Contact & Devis", path: "/contact" },
                { name: "Agenda", path: "/agenda" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-sm font-body transition-colors hover:text-white/90" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] uppercase tracking-[2px]" style={{ color: 'hsl(73 44% 67%)' }}>Contact</h4>
            <div className="flex flex-col space-y-3">
              <a href="mailto:contact@botaniqueludique.com" className="flex items-center gap-2 text-sm font-body transition-colors hover:text-white/90" style={{ color: 'rgba(255,255,255,0.5)' }}>
                <Mail size={16} />
                contact@botaniqueludique.com
              </a>
              <a href="tel:+33609831606" className="flex items-center gap-2 text-sm font-body transition-colors hover:text-white/90" style={{ color: 'rgba(255,255,255,0.5)' }}>
                <Phone size={16} />
                06 09 83 16 06
              </a>
              <div className="flex items-start gap-2 text-sm font-body" style={{ color: 'rgba(255,255,255,0.5)' }}>
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Le Pecq (78) · Paris · Île-de-France</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] uppercase tracking-[2px]" style={{ color: 'hsl(73 44% 67%)' }}>Suivez-nous</h4>
            <div className="flex flex-col space-y-3">
              <a
                href="https://www.instagram.com/botanique.ludique/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-body transition-colors hover:text-white/90"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                <Instagram size={16} />
                @botanique.ludique
              </a>
              <a
                href="https://www.linkedin.com/in/vanessa-charlery-a988a8319/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-body transition-colors hover:text-white/90"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                <Linkedin size={16} />
                Botanique Ludique
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-olive/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono uppercase tracking-[1.5px]" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © Botanique Ludique 2026
          </p>
          <div className="flex items-center gap-6 text-xs font-body" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <Link to="/mentions-legales" className="hover:text-white/70 transition-colors">Mentions légales</Link>
            <Link to="/conditions-de-vente" className="hover:text-white/70 transition-colors">CGV</Link>
            {isAdmin && (
              <Link to="/admin/testimonials" className="hover:text-white/70 transition-colors font-medium">Admin</Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
