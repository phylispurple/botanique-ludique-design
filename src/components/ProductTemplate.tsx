import { Link } from "react-router-dom";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import QuoteForm from "@/components/QuoteForm";
import {
  Clock,
  Users,
  MapPin,
  Target,
  ArrowRight,
  LucideIcon,
  Sparkles,
  Leaf,
  GraduationCap,
  HeartHandshake,
  Package,
  Home,
  Truck,
  ShieldCheck,
  Award,
  Smile,
  Gift,
  X,
} from "lucide-react";

export interface ProductTemplateData {
  slug: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  lead: string;
  story: string[];
  steps: { title: string; desc: string }[];
  formats: { label: string; value: string }[];
  bookingTo?: string;
  bookingLabel?: string;
  related: { to: string; label: string }[];
  faqs: { q: string; a: string }[];
  videoSrc?: string;
  videoCaption?: string;
  photos?: { src: string; alt: string; caption?: string }[];
  /** Optional hero image displayed at the top of the page. */
  heroImage?: string;
  /** Quick facts for the hero and sticky card. */
  duration?: string;
  participants?: string;
  audience?: string;
  location?: string;
  /** Optional override of the "Ce qui est inclus" list. */
  included?: string[];
}

const DEFAULT_INCLUDED = [
  "Tout le matériel et les outils",
  "Les plantes vivantes sélectionnées",
  "Les contenants et les substrats",
  "Une fiche d'entretien personnalisée",
  "L'installation et le nettoyage",
  "L'animation par une médiatrice diplômée",
];

const WHY_US = [
  { icon: GraduationCap, title: "Diplômée en ethnobotanique", desc: "Formation EHESS et anthropologie de la nature." },
  { icon: Leaf, title: "Approche scientifique et ludique", desc: "Contenu rigoureux, transmis avec pédagogie et douceur." },
  { icon: Smile, title: "Accessible aux débutant·e·s", desc: "Aucune connaissance préalable requise, geste accompagné." },
  { icon: HeartHandshake, title: "Sur mesure", desc: "Format adapté aux entreprises, collectivités et particuliers." },
  { icon: Award, title: "Matériel premium fourni", desc: "Plantes, contenants et matières sélectionnés avec soin." },
  { icon: Gift, title: "Création à emporter", desc: "Chacun repart avec son œuvre et sa fiche d'entretien." },
  { icon: ShieldCheck, title: "Sensibilisation au vivant", desc: "Chaque atelier ouvre une porte vers la biodiversité." },
  { icon: MapPin, title: "Île-de-France et ailleurs", desc: "Intervention partout en IDF, ailleurs sur devis." },
];

const ProductTemplate = ({ data }: { data: ProductTemplateData }) => {
  const Icon = data.icon;
  const included = data.included && data.included.length > 0 ? data.included : DEFAULT_INCLUDED;
  const [lightbox, setLightbox] = useState<number | null>(null);

  const heroMeta = [
    data.duration && { icon: Clock, label: "Durée", value: data.duration },
    data.participants && { icon: Users, label: "Participants", value: data.participants },
    data.audience && { icon: Target, label: "Public", value: data.audience },
    data.location && { icon: MapPin, label: "Lieu", value: data.location },
  ].filter(Boolean) as { icon: LucideIcon; label: string; value: string }[];

  // Fallback: derive from formats if quick-fact props missing
  const stickyFacts =
    heroMeta.length > 0
      ? heroMeta.map((m) => ({ label: m.label, value: m.value }))
      : data.formats;

  return (
    <div className="min-h-screen bg-[hsl(var(--cream))] text-[hsl(var(--black))]">
      <SEO title={data.metaTitle} description={data.metaDesc} canonical={`/${data.slug}`} />
      <SchemaOrg
        type="Service"
        data={{
          name: data.title,
          serviceType: data.eyebrow,
          description: data.metaDesc,
          areaServed: [
            { "@type": "AdministrativeArea", "name": "Île-de-France" },
            { "@type": "City", "name": "Paris" },
          ],
          provider: {
            "@type": "Organization",
            "name": "Botanique Ludique",
            "url": "https://botaniqueludique.com",
          },
          url: `https://botaniqueludique.com/${data.slug}`,
        }}
      />
      <SchemaOrg type="FAQPage" data={{ questions: data.faqs.map((f) => ({ question: f.q, answer: f.a })) }} />
      <Navigation />

      <main className="pt-24">
        {/* HERO */}
        <section className="border-b-[3px] border-[hsl(var(--black))]">
          {data.heroImage && (
            <div className="relative w-full h-[42vh] md:h-[56vh] overflow-hidden border-b-[3px] border-[hsl(var(--black))]">
              <img
                src={data.heroImage}
                alt={data.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--black))]/60 via-[hsl(var(--black))]/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-16 lg:px-[120px]">
                <Icon className="w-10 h-10 mb-4 text-[hsl(var(--cream))] drop-shadow" strokeWidth={1.5} />
                <span className="font-mono-brand text-[11px] tracking-[3px] uppercase text-[hsl(var(--cream))]/90 block mb-3">
                  {data.eyebrow}
                </span>
                <h1 className="font-display text-[clamp(2rem,6vw,4.6rem)] uppercase leading-[0.95] tracking-[-1.5px] text-[hsl(var(--cream))] drop-shadow-lg max-w-4xl">
                  {data.title}
                </h1>
              </div>
            </div>
          )}
          <div className="px-6 md:px-16 lg:px-[120px] py-10 md:py-14 grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-16 items-start">
            <AnimatedSection>
              {!data.heroImage && (
                <>
                  <Icon className="w-10 h-10 mb-6" strokeWidth={1.5} />
                  <span className="font-mono-brand text-[11px] tracking-[3px] uppercase text-[hsl(var(--black))]/60 block mb-5">
                    {data.eyebrow}
                  </span>
                  <h1 className="font-display text-[clamp(2.2rem,6vw,4.8rem)] uppercase leading-[0.95] tracking-[-1.5px] mb-6">
                    {data.title}
                  </h1>
                </>
              )}
              <p className="text-lg leading-[1.7] text-[hsl(var(--black))]/80 mb-8">{data.lead}</p>
              {heroMeta.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {heroMeta.map((m) => (
                    <div key={m.label} className="border-[3px] border-[hsl(var(--black))] p-4 bg-[hsl(var(--cream))]">
                      <m.icon className="w-5 h-5 mb-2" strokeWidth={1.75} />
                      <p className="font-mono-brand text-[9px] tracking-[2px] uppercase opacity-60">{m.label}</p>
                      <p className="font-display text-sm uppercase mt-1 leading-tight">{m.value}</p>
                    </div>
                  ))}
                </div>
              )}
            </AnimatedSection>

            {/* Sticky right column */}
            <aside className="lg:sticky lg:top-24">
              <div className="border-[3px] border-[hsl(var(--black))] shadow-brutal bg-[hsl(var(--olive))] p-6">
                <p className="font-mono-brand text-[10px] tracking-[2.5px] uppercase mb-3 opacity-70">Atelier</p>
                <p className="font-display text-lg uppercase leading-tight mb-4">{data.title}</p>
                <div className="space-y-2 mb-5 border-t border-[hsl(var(--black))]/25 pt-4">
                  {stickyFacts.slice(0, 4).map((f) => (
                    <div key={f.label} className="flex justify-between gap-3 text-sm">
                      <span className="font-mono-brand text-[10px] tracking-[1.5px] uppercase opacity-70">{f.label}</span>
                      <span className="font-display uppercase text-xs text-right">{f.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-[3px] border-t-0 border-[hsl(var(--black))] shadow-brutal bg-[hsl(var(--cream))] p-6">
                <QuoteForm atelierTitle={data.title} />
              </div>
            </aside>
          </div>
        </section>

        {/* PRÉSENTATION */}
        <section className="py-16 px-6 md:px-16 lg:px-[120px] max-w-[900px]">
          <span className="font-mono-brand text-[11px] tracking-[3px] uppercase opacity-60 block mb-3">Présentation</span>
          <h2 className="font-display text-2xl md:text-4xl uppercase mb-8 leading-[1]">
            L'atelier en détail
          </h2>
          <div className="space-y-5">
            {data.story.map((p, i) => (
              <p key={i} className="text-base leading-[1.8] text-[hsl(var(--black))]/80 text-justify">
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* VIDÉO */}
        {data.videoSrc && (
          <section className="border-t-[3px] border-[hsl(var(--black))] bg-[hsl(var(--cream))] py-16 px-6 md:px-16 lg:px-[120px]">
            <span className="font-mono-brand text-[11px] tracking-[3px] uppercase opacity-60 block mb-4">En vidéo</span>
            <h2 className="font-display text-2xl md:text-4xl uppercase mb-8 leading-[1]">L'atelier en mouvement</h2>
            <div className="border-[3px] border-[hsl(var(--black))] shadow-brutal overflow-hidden max-w-[1100px]">
              <video src={data.videoSrc} className="w-full h-auto block" controls muted loop playsInline preload="metadata" />
            </div>
            {data.videoCaption && (
              <p className="font-mono-brand text-xs uppercase tracking-[2px] mt-4 opacity-70">{data.videoCaption}</p>
            )}
          </section>
        )}

        {/* DÉROULEMENT */}
        <section className="bg-[hsl(var(--black))] text-[hsl(var(--cream))] py-20 px-6 md:px-16 lg:px-[120px]">
          <span className="font-mono-brand text-[11px] tracking-[3px] uppercase opacity-60 block mb-4">Déroulement</span>
          <h2 className="font-display text-2xl md:text-4xl uppercase mb-12 leading-[1]">Ce que vous allez vivre</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-[1100px]">
            {data.steps.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 80}>
                <div className="flex gap-5">
                  <span className="font-display text-4xl opacity-50 flex-shrink-0">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-lg uppercase mb-2">{s.title}</h3>
                    <p className="text-sm leading-[1.7] opacity-75">{s.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* CE QUI EST INCLUS */}
        <section className="py-16 px-6 md:px-16 lg:px-[120px]">
          <span className="font-mono-brand text-[11px] tracking-[3px] uppercase opacity-60 block mb-3">Formule tout compris</span>
          <h2 className="font-display text-2xl md:text-4xl uppercase mb-10 leading-[1]">Ce qui est inclus</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1100px]">
            {included.map((item, i) => {
              const icons = [Package, Leaf, Home, Truck, Sparkles, ShieldCheck];
              const IconEl = icons[i % icons.length];
              return (
                <div key={i} className="border-[3px] border-[hsl(var(--black))] p-5 bg-[hsl(var(--cream))] flex gap-3 items-start">
                  <IconEl className="w-5 h-5 flex-shrink-0 mt-0.5" strokeWidth={1.75} />
                  <p className="text-sm leading-[1.5]">{item}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* POURQUOI NOUS */}
        <section className="border-t-[3px] border-[hsl(var(--black))] bg-[hsl(var(--olive))] py-20 px-6 md:px-16 lg:px-[120px]">
          <span className="font-mono-brand text-[11px] tracking-[3px] uppercase opacity-70 block mb-3">Notre différence</span>
          <h2 className="font-display text-2xl md:text-4xl uppercase mb-12 leading-[1]">Pourquoi choisir Botanique Ludique&nbsp;?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1200px]">
            {WHY_US.map((w) => (
              <div key={w.title} className="border-[3px] border-[hsl(var(--black))] bg-[hsl(var(--cream))] p-5 h-full">
                <w.icon className="w-6 h-6 mb-3" strokeWidth={1.75} />
                <h3 className="font-display text-sm uppercase mb-2 leading-tight">{w.title}</h3>
                <p className="text-xs leading-[1.6] text-[hsl(var(--black))]/75">{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GALERIE */}
        {data.photos && data.photos.length > 0 && (
          <section className="border-t-[3px] border-[hsl(var(--black))] bg-[hsl(var(--cream))] py-16 px-6 md:px-16 lg:px-[120px]">
            <span className="font-mono-brand text-[11px] tracking-[3px] uppercase opacity-60 block mb-4">En images</span>
            <h2 className="font-display text-2xl md:text-4xl uppercase mb-8 leading-[1]">L'atelier en photos</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-[1200px]">
              {data.photos.map((p, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setLightbox(i)}
                  className="border-[3px] border-[hsl(var(--black))] shadow-brutal overflow-hidden bg-[hsl(var(--cream))] group text-left"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={p.src}
                      alt={p.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {p.caption && (
                    <span className="block font-mono-brand text-[10px] uppercase tracking-[1.5px] p-3 border-t-[3px] border-[hsl(var(--black))]">
                      {p.caption}
                    </span>
                  )}
                </button>
              ))}
            </div>
            {lightbox !== null && data.photos[lightbox] && (
              <div
                role="dialog"
                aria-modal="true"
                onClick={() => setLightbox(null)}
                className="fixed inset-0 z-[100] bg-[hsl(var(--black))]/90 flex items-center justify-center p-4 cursor-zoom-out"
              >
                <button
                  aria-label="Fermer"
                  onClick={() => setLightbox(null)}
                  className="absolute top-4 right-4 text-[hsl(var(--cream))] p-2"
                >
                  <X className="w-8 h-8" />
                </button>
                <img
                  src={data.photos[lightbox].src}
                  alt={data.photos[lightbox].alt}
                  className="max-w-full max-h-full object-contain border-[3px] border-[hsl(var(--cream))]"
                />
              </div>
            )}
          </section>
        )}

        {/* FAQ */}
        <section className="py-16 px-6 md:px-16 lg:px-[120px]">
          <span className="font-mono-brand text-[11px] tracking-[3px] uppercase opacity-60 block mb-3">Questions fréquentes</span>
          <h2 className="font-display text-2xl md:text-3xl uppercase mb-10">On répond à vos questions</h2>
          <div className="space-y-3 max-w-[900px]">
            {data.faqs.map((f, i) => (
              <details
                key={i}
                className="border-[3px] border-[hsl(var(--black))] bg-[hsl(var(--cream))] p-5 group"
              >
                <summary className="font-display text-base uppercase cursor-pointer list-none flex justify-between items-center gap-4">
                  <span>{f.q}</span>
                  <span className="font-display text-2xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-sm leading-[1.7] text-[hsl(var(--black))]/75 mt-4">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA PLEIN */}
        <section className="border-t-[3px] border-[hsl(var(--black))] bg-[hsl(var(--black))] text-[hsl(var(--cream))] py-20 px-6 md:px-16 lg:px-[120px] text-center">
          <h2 className="font-display text-3xl md:text-5xl uppercase leading-[1] mb-5 max-w-3xl mx-auto">
            Prêt·e à offrir un moment végétal à votre équipe&nbsp;?
          </h2>
          <p className="text-base md:text-lg opacity-80 max-w-2xl mx-auto mb-8 leading-[1.7]">
            Nous concevons des ateliers sur mesure pour les entreprises, collectivités, écoles et particuliers.
          </p>
          <Link
            to="/contact"
            className="btn-brutal bg-[hsl(var(--cream))] text-[hsl(var(--black))] border-[hsl(var(--cream))] text-sm px-10 py-4 inline-flex"
          >
            Demander un devis →
          </Link>
          {data.related.length > 0 && (
            <p className="text-xs mt-10 opacity-60 flex flex-wrap gap-x-5 gap-y-2 justify-center">
              <span>Voir aussi :</span>
              {data.related.map((r) => (
                <Link key={r.to} to={r.to} className="underline inline-flex items-center gap-1">
                  {r.label} <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
            </p>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductTemplate;
