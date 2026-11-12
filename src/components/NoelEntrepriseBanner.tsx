import { Link } from "react-router-dom";
import { Gift } from "lucide-react";

/**
 * Mention saisonnière « Noël en entreprise », volontairement discrète (une ligne).
 * S'affiche toute seule du 1er novembre au 20 décembre, chaque année,
 * puis disparaît sans qu'il faille retoucher le site.
 */
const isNoelSeason = (d: Date = new Date()) =>
  d.getMonth() === 10 || (d.getMonth() === 11 && d.getDate() <= 20);

interface Props {
  /** Où mène le lien (formulaire de devis). */
  ctaTo?: string;
  className?: string;
}

const NoelEntrepriseBanner = ({ ctaTo = "/team-building-nature-entreprise#devis", className = "" }: Props) => {
  if (!isNoelSeason()) return null;

  const linkClass =
    "font-mono-brand text-[11px] uppercase tracking-[2px] underline underline-offset-4 decoration-2 hover:text-primary whitespace-nowrap";

  return (
    <p
      className={`flex flex-wrap items-center gap-x-3 gap-y-1 border-l-4 border-accent bg-accent/10 px-4 py-3 text-sm text-foreground/80 ${className}`}
    >
      <Gift className="w-4 h-4 text-accent flex-shrink-0" aria-hidden="true" />
      <span>
        <strong className="text-foreground">Noël en entreprise</strong>{" "}: sachets de senteurs, terrariums,
        kokedamas. Les dates de décembre partent vite.
      </span>
      {ctaTo.startsWith("#") ? (
        <a href={ctaTo} className={linkClass}>Demander une date →</a>
      ) : (
        <Link to={ctaTo} className={linkClass}>Demander une date →</Link>
      )}
    </p>
  );
};

export default NoelEntrepriseBanner;
