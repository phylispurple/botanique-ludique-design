import { Link } from "react-router-dom";
import { ArrowRight, Gift } from "lucide-react";

/**
 * Bandeau saisonnier « Noël en entreprise ».
 * S'affiche tout seul du 1er novembre au 20 décembre, chaque année,
 * puis disparaît sans qu'il faille retoucher le site.
 */
const isNoelSeason = (d: Date = new Date()) =>
  d.getMonth() === 10 || (d.getMonth() === 11 && d.getDate() <= 20);

interface Props {
  /** Où mène le bouton principal (formulaire de devis). */
  ctaTo?: string;
}

const NoelEntrepriseBanner = ({ ctaTo = "/team-building-nature-entreprise#devis" }: Props) => {
  if (!isNoelSeason()) return null;

  const isAnchor = ctaTo.startsWith("#");
  const ctaClass =
    "btn-brutal bg-accent text-foreground border-accent hover:bg-primary-foreground hover:text-foreground text-xs px-6 py-2.5 inline-flex items-center gap-2 whitespace-nowrap";

  return (
    <aside aria-label="Animations de Noël en entreprise" className="px-6">
      <div className="max-w-5xl mx-auto border-[3px] border-foreground shadow-brutal bg-foreground text-primary-foreground p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
        <Gift className="w-10 h-10 text-olive-light flex-shrink-0 hidden md:block" aria-hidden="true" />
        <div className="flex-1">
          <p className="font-mono-brand text-[11px] uppercase tracking-[3px] text-olive-light mb-2">
            Noël en entreprise
          </p>
          <p className="font-display text-xl md:text-2xl uppercase leading-tight mb-2">
            Un atelier végétal pour fêter la fin d'année
          </p>
          <p className="text-sm md:text-[15px] text-primary-foreground/75 leading-relaxed">
            Sachets de senteurs sur la route des épices, terrariums, kokedamas{" "}: une animation clés en main pour
            vos équipes ou votre CSE. Les dates de décembre partent vite.{" "}
            <Link
              to="/blog/animation-noel-entreprise-atelier-sachet-senteur"
              className="underline underline-offset-2 hover:text-olive-light"
            >
              Voir le stand sachets de senteurs
            </Link>
          </p>
        </div>
        {isAnchor ? (
          <a href={ctaTo} className={ctaClass}>
            Demander une date <ArrowRight className="w-4 h-4" />
          </a>
        ) : (
          <Link to={ctaTo} className={ctaClass}>
            Demander une date <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </aside>
  );
};

export default NoelEntrepriseBanner;
