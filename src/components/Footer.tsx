import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin } from "lucide-react";
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
  return (
    <footer className="border-t" style={{ borderColor: '#E2E7D1', backgroundColor: '#F7F7EB' }}>
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-light" style={{ color: '#5D653A' }}>Botanique Ludique</h3>
            <p className="text-sm leading-relaxed" style={{ color: '#5D653A', opacity: 0.7 }}>
              Ateliers botaniques créatifs pour reconnecter l'humain au végétal.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-sans text-sm uppercase tracking-wider" style={{ color: '#5D653A', opacity: 0.7 }}>Suivez-nous</h4>
            <div className="flex flex-col space-y-3">
              <a
                href="https://www.instagram.com/botanique.ludique/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors"
                style={{ color: '#5D653A', opacity: 0.7 }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
              >
                <Instagram size={18} />
                <span className="text-sm">@botanique.ludique</span>
              </a>
              <a
                href="mailto:botaniqueludique@gmail.com"
                className="flex items-center gap-2 transition-colors"
                style={{ color: '#5D653A', opacity: 0.7 }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
              >
                <Mail size={18} />
                <span className="text-sm">botaniqueludique@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-sans text-sm uppercase tracking-wider" style={{ color: '#5D653A', opacity: 0.7 }}>Localisation</h4>
            <div className="flex items-start gap-2" style={{ color: '#5D653A', opacity: 0.7 }}>
              <MapPin size={18} className="mt-1 flex-shrink-0" />
              <div className="text-sm">
                <p>Île-de-France</p>
                <p className="mt-2 text-xs">Ateliers disponibles pour particuliers, entreprises et institutions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 text-center" style={{ borderTop: '1px solid #E2E7D1' }}>
          <p className="text-sm" style={{ color: '#5D653A', opacity: 0.6 }}>
            © Botanique Ludique 2025 | Créé avec amour et nature | <Link to="/mentions-legales" className="hover:underline">Mentions légales</Link> | <Link to="/conditions-de-vente" className="hover:underline">Conditions de vente</Link>
            {isAdmin && (
              <> | <Link to="/admin/testimonials" className="hover:underline font-medium">Administration</Link></>
            )}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
