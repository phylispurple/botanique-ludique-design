import { Link } from "react-router-dom";

/**
 * Encart saisonnier « Noël en entreprise », avec un petit sapin dessiné au trait rouge.
 * S'affiche tout seul du 1er novembre au 20 décembre, chaque année,
 * puis disparaît sans qu'il faille retoucher le site.
 */
const isNoelSeason = (d: Date = new Date()) =>
  d.getMonth() === 10 || (d.getMonth() === 11 && d.getDate() <= 20);

const NOEL_RED = "hsl(4 62% 44%)";

/** Sapin dessiné à la main : trait rouge, léger tremblé (filtre SVG). */
const SapinDessine = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 130 140" className={className} aria-hidden="true" fill="none">
    <defs>
      <filter id="trait-main" x="-5%" y="-5%" width="110%" height="110%">
        <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="4" />
        <feDisplacementMap in="SourceGraphic" scale="2.2" />
      </filter>
    </defs>
    <g
      stroke={NOEL_RED}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      filter="url(#trait-main)"
    >
      {/* étoile */}
      <path d="M58 6 L61 14 L69 14.5 L63 19.5 L65 27.5 L58 23 L51 27.5 L53 19.5 L47 14.5 L55 14 Z" />
      {/* silhouette en trois étages */}
      <path d="M58 28 C53 37 46 44 39 50 L50 49.5 C43 61 35 69 27 76 L42 75 C34 88 25 97 16 105 L100 105 C91 97 82 88 74 75 L89 76 C81 69 73 61 66 49.5 L77 50 C70 44 63 37 58 28 Z" />
      {/* guirlandes */}
      <path d="M43 60 C52 65 63 64 72 58" />
      <path d="M32 89 C47 97 69 96 84 87" />
      {/* boules */}
      <circle cx="49" cy="70" r="2.6" />
      <circle cx="68" cy="73" r="2.6" />
      <circle cx="40" cy="96" r="2.6" />
      <circle cx="78" cy="99" r="2.6" />
      <circle cx="58" cy="45" r="2.2" />
      {/* tronc */}
      <path d="M52 105 L52 119 L64 119 L64 105" />
      {/* cadeau */}
      <path d="M86 110 L110 110 L110 128 L86 128 Z" />
      <path d="M98 110 L98 128 M86 118 L110 118" />
      <path d="M98 110 C93 102 87 104 91 108 C93 110 96 110 98 110 C100 105 106 102 106 107 C106 109 101 110 98 110" />
      {/* petites étoiles / flocons */}
      <path d="M16 30 L16 38 M12 34 L20 34" />
      <path d="M108 40 L108 46 M105 43 L111 43" />
      <path d="M118 78 L118 84 M115 81 L121 81" />
      <circle cx="24" cy="55" r="1.2" />
      <circle cx="98" cy="22" r="1.2" />
      <circle cx="12" cy="88" r="1.2" />
    </g>
  </svg>
);

interface Props {
  /** Où mène le lien (formulaire de devis). */
  ctaTo?: string;
  className?: string;
}

const NoelEntrepriseBanner = ({ ctaTo = "/team-building-nature-entreprise#devis", className = "" }: Props) => {
  if (!isNoelSeason()) return null;

  const linkClass =
    "inline-block font-mono-brand text-[11px] uppercase tracking-[2px] underline underline-offset-4 decoration-2 transition-opacity hover:opacity-70";

  return (
    <div
      className={`relative flex items-center gap-4 md:gap-5 bg-[hsl(var(--cream))] text-foreground border-2 border-dashed px-4 py-4 md:px-5 ${className}`}
      style={{ borderColor: NOEL_RED, borderRadius: "22px 34px 20px 30px / 30px 20px 34px 22px" }}
    >
      <SapinDessine className="w-20 h-[86px] md:w-24 md:h-[104px] flex-shrink-0 -rotate-3" />
      <div className="min-w-0">
        <p className="font-editorial italic text-xl md:text-2xl leading-tight mb-1" style={{ color: NOEL_RED }}>
          Les fêtes en entreprise
        </p>
        <p className="text-sm text-foreground/75 leading-relaxed mb-2">
          Sachets de senteurs, terrariums, kokedamas… Les dates de décembre partent vite.
        </p>
        {ctaTo.startsWith("#") ? (
          <a href={ctaTo} className={linkClass} style={{ color: NOEL_RED }}>Demander une date →</a>
        ) : (
          <Link to={ctaTo} className={linkClass} style={{ color: NOEL_RED }}>Demander une date →</Link>
        )}
      </div>
    </div>
  );
};

export default NoelEntrepriseBanner;
