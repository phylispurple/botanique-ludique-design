import { Users, Calendar, Building2, Award, Quote } from "lucide-react";

const PARTNER_LOGOS = [
  { src: "/logos/region-idf.webp", alt: "Région Île-de-France" },
  { src: "/logos/bezons.svg", alt: "Ville de Bezons" },
  { src: "/logos/maurepas.png", alt: "Ville de Maurepas" },
  { src: "/logos/mjc-vesinet.jpg", alt: "MJC du Vésinet" },
  { src: "/logos/mjc-chatou.jpeg", alt: "MJC Chatou" },
  { src: "/logos/jappy-senior.svg", alt: "Happy Senior" },
  { src: "/logos/f93.jpg", alt: "F93" },
  { src: "/logos/la-roche.png", alt: "La Roche" },
];

const STATS = [
  { value: "+50", label: "ateliers réalisés", Icon: Calendar },
  { value: "+400", label: "participants accompagnés", Icon: Users },
  { value: "+15", label: "partenaires de confiance", Icon: Building2 },
  { value: "100%", label: "satisfaction collaborateurs", Icon: Award },
];

interface Props {
  /** Optional one-line testimonial to surface for credibility. */
  quote?: { text: string; author: string };
  /** Optional intro headline above the proof bar. */
  headline?: string;
}

const SocialProofBar = ({
  quote,
  headline = "Ils nous font confiance",
}: Props) => {
  return (
    <section className="py-14 bg-sage/5 border-y border-sage/10">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {STATS.map(({ value, label, Icon }) => (
            <div key={label} className="text-center">
              <div className="flex justify-center mb-2">
                <Icon className="w-6 h-6 text-sage" aria-hidden="true" />
              </div>
              <div
                className="text-3xl md:text-4xl text-charcoal"
                style={{ fontFamily: "Fraunces, serif", fontWeight: 500 }}
              >
                {value}
              </div>
              <div className="text-xs md:text-sm text-charcoal/70 mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Logo wall */}
        <p className="text-center text-xs uppercase tracking-widest text-charcoal/60 mb-6">
          {headline}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-8">
          {PARTNER_LOGOS.map((logo) => (
            <div
              key={logo.src}
              className="flex items-center justify-center h-12 w-24 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="max-h-12 max-w-full w-auto h-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Optional one-line testimonial */}
        {quote && (
          <figure className="max-w-3xl mx-auto text-center mt-6">
            <Quote className="w-5 h-5 text-sage mx-auto mb-2" aria-hidden="true" />
            <blockquote
              className="text-base md:text-lg text-charcoal/85 italic leading-relaxed"
              style={{ fontFamily: "Fraunces, serif" }}
            >
              « {quote.text} »
            </blockquote>
            <figcaption className="text-xs text-charcoal/60 mt-2 uppercase tracking-widest">
              {quote.author}
            </figcaption>
          </figure>
        )}
      </div>
    </section>
  );
};

export default SocialProofBar;
