import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import WaveDivider from "@/components/WaveDivider";
import SocialProofBar from "@/components/SocialProofBar";
import { AREA_SERVED_IDF } from "@/data/areaServed";
import { Clock, ArrowRight, CheckCircle, Phone, Landmark, HeartHandshake, Leaf, Palette } from "lucide-react";
import heroImg from "@/assets/gallery-papier-recycle-sechage.webp";
import imgBombes from "@/assets/gallery-bombes-graines-sechage.webp";
import imgEpices from "@/assets/gallery-atelier-epices-table.webp";
import imgPapier from "@/assets/gallery-papier-recycle-feuilles.webp";
import imgKokedama from "@/assets/gallery-kokedama-collection.jpg";
import imgTerrarium from "@/assets/gallery-terrarium-bocal-fittonia.jpg";
import imgHerbier from "@/assets/gallery-herbier-toiles.webp";

const SLUG = "/animation-collectivites-mairies";
const CONTACT = `/contact?subject=${encodeURIComponent("Animation pour une collectivité")}`;

const BENEFICES = [
  { icon: Landmark, title: "Clé en main", desc: "Tout le matériel est apporté, installation et rangement compris. Nous nous adaptons à vos salles et à vos contraintes." },
  { icon: HeartHandshake, title: "Lien social", desc: "Des ateliers ouverts à tous, familles, enfants, aînés, et souvent intergénérationnels." },
  { icon: Leaf, title: "Sensibilisation", desc: "Biodiversité, nature en ville, sobriété : on en parle en faisant, sans discours moralisateur." },
  { icon: Palette, title: "Culture", desc: "Chaque atelier raconte l'histoire humaine des plantes : une vraie médiation culturelle, pas seulement un loisir créatif." },
];

const ATELIERS = [
  { title: "Bombes à graines", image: imgBombes, alt: "Bombes à graines fabriquées en atelier", duration: "1h30 à 2h", highlight: "Familles", desc: "Graines voyageuses et jardins spontanés, puis chacun fabrique ses bombes à semer." },
  { title: "Sachets senteur, la route des épices", image: imgEpices, alt: "Table d'atelier couverte de bols d'épices lors d'un atelier en bibliothèque", duration: "1h30", highlight: "Médiathèques", desc: "L'histoire des épices racontée par le nez, puis chacun compose son sachet senteur." },
  { title: "Papier recyclé & carnets", image: imgPapier, alt: "Feuilles de papier recyclé colorées aux pétales en train de sécher", duration: "2 séances de 2h", highlight: "Réduction des déchets", desc: "Fabriquer son papier à partir de papier usagé et de pétales, puis relier son carnet." },
  { title: "Kokedama", image: imgKokedama, alt: "Kokedamas ficelés réalisés en atelier", duration: "2h", highlight: "Intergénérationnel", desc: "Une boule de mousse et de terre autour d'une plante : un geste lent qui réunit les âges." },
  { title: "Terrarium parent-enfant", image: imgTerrarium, alt: "Terrarium en bocal avec fittonia réalisé en atelier", duration: "1h30", highlight: "Parentalité", desc: "Composer ensemble un écosystème miniature en bocal, et l'histoire de la Wardian case." },
  { title: "Herbier créatif & cyanotype", image: imgHerbier, alt: "Toiles d'herbier avec fougère et plantes pressées", duration: "2h", highlight: "Art & nature", desc: "Presser, composer, imprimer : les plantes de la commune deviennent des œuvres." },
];

const OCCASIONS = [
  "Fête de la Nature", "Semaine du développement durable", "Fête de la Science", "Journées du patrimoine",
  "Semaine Bleue", "Semaine de la réduction des déchets", "Fête de quartier", "Programmation de médiathèque", "Vacances scolaires", "Marché de Noël",
];

const EXEMPLES = [
  { label: "Semaine Bleue : un atelier kokedama intergénérationnel à Gif-sur-Yvette", to: "/blog/semaine-bleue-atelier-intergenerationnel-kokedama-ehpad" },
  { label: "Fête de la Science : la route des épices à la bibliothèque de Versailles", to: "/blog/atelier-route-des-epices-fete-de-la-science-versailles" },
  { label: "Au fil des jardins de Voisins-le-Bretonneux : une balade ethnobotanique", to: "/blog/balade-botanique-voisins-le-bretonneux" },
];

const ENGAGEMENTS = [
  "Matériel naturel et réutilisable autant que possible",
  "Contenu adapté à tous les âges",
  "Bon de commande et facturation via Chorus Pro",
  "Attestation d'intervention sur demande",
  "SIRET et assurance responsabilité civile professionnelle",
  "Réponse sous 24h ouvrées",
];

const FAQ = [
  {
    q: "Combien de participants par atelier ?",
    a: "En général 12 à 15 participants par séance, pour que chacun soit bien accompagné. Sur un événement en plein air ou un marché, l'atelier peut fonctionner en flux continu : les habitants passent quand ils le souhaitent.",
  },
  {
    q: "Comment se passent la commande et la facturation ?",
    a: "Nous vous envoyons un devis, puis vous émettez un bon de commande. La facture est déposée sur Chorus Pro. Nous disposons d'un SIRET et d'une assurance responsabilité civile professionnelle.",
  },
  {
    q: "Quel délai prévoir ?",
    a: "Idéalement un à deux mois avant l'événement, et plus tôt pour les temps forts nationaux comme la Fête de la Nature, la Semaine Bleue ou la Fête de la Science.",
  },
];

const LandingCollectivites = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SEO
        title="Animation Collectivités & Mairies - Ateliers Botaniques | Botanique Ludique"
        description="Animations botaniques pour collectivités et mairies en Île-de-France. Ateliers nature clé en main pour fêtes de quartier, journées du patrimoine, événements municipaux. Devis gratuit sous 24h."
        keywords="animation collectivité, atelier mairie, animation fête de quartier, atelier nature commune, animation municipale, atelier botanique collectivité, animation développement durable mairie, atelier nature île-de-france"
        canonical={SLUG}
      />
      <SchemaOrg
        type="Service"
        data={{
          serviceType: "Animation nature pour collectivités",
          name: "Animations botaniques pour collectivités et mairies",
          description: "Ateliers et médiations botaniques clé en main pour les communes, médiathèques et services municipaux d'Île-de-France.",
          url: `https://botaniqueludique.com${SLUG}`,
          areaServed: AREA_SERVED_IDF,
        }}
      />
      <SchemaOrg type="FAQPage" data={{ questions: FAQ.map((f) => ({ question: f.q, answer: f.a })) }} />
      <SchemaOrg
        type="BreadcrumbList"
        data={{
          items: [
            { name: "Accueil", url: "https://botaniqueludique.com/" },
            { name: "Pro", url: "https://botaniqueludique.com/pro" },
            { name: "Collectivités & mairies", url: `https://botaniqueludique.com${SLUG}` },
          ],
        }}
      />
      <Navigation />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden px-6 pt-24 pb-24 md:pt-32 md:pb-28">
        <div className="absolute inset-0 bg-foreground">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-35" />
        </div>
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-mono-brand text-[11px] md:text-[13px] uppercase tracking-[3px] text-olive-light mb-5">
              Mairies · Médiathèques · Centres sociaux · MJC
            </p>
            <h1 className="font-display text-[clamp(2.2rem,6vw,4.8rem)] uppercase leading-[0.9] tracking-[-2px] text-primary-foreground mb-6">
              Animations botaniques<br />
              <span className="text-olive-light">pour votre commune</span>
            </h1>
            <p className="font-body text-xl md:text-[22px] italic text-primary-foreground/90 max-w-[700px] mx-auto leading-relaxed mb-10">
              Des ateliers clé en main qui créent du lien autour du vivant, avec une médiation ethnobotanique : chaque plante raconte une histoire humaine.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to={CONTACT}
                className="btn-brutal bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-8 py-3 inline-flex items-center gap-2"
                style={{ borderColor: "hsl(var(--cream))" }}
              >
                Demander un devis gratuit <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/marches-publics"
                className="btn-brutal bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-8 py-3 inline-flex items-center gap-2"
                style={{ borderColor: "hsl(var(--cream))" }}
              >
                Marchés publics
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <WaveDivider from="hsl(0,0%,10%)" to="hsl(36,33%,93%)" />

      <SocialProofBar />

      {/* ===== ATELIERS ===== */}
      <section className="px-6 pt-20 pb-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="section-label block mb-3">Nos ateliers pour les collectivités</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] uppercase leading-[0.95] tracking-[-1px] mb-4">
              Des formats <span className="text-primary">qui ont fait leurs preuves</span>
            </h2>
            <p className="text-base text-foreground/70 max-w-2xl mx-auto">
              En intérieur comme en extérieur, adaptés au public et à l'espace. En général 12 à 15 participants par séance, ou en flux continu sur un événement.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ATELIERS.map((w) => (
              <article key={w.title} className="flex flex-col border-brutal bg-[hsl(var(--cream))]">
                <div className="relative aspect-[4/3] overflow-hidden border-b-[3px] border-foreground bg-secondary">
                  <img src={w.image} alt={w.alt} loading="lazy" className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 font-mono-brand text-[9px] uppercase tracking-[2px] px-3 py-1.5 border-brutal-thin bg-[hsl(var(--cream))]">
                    {w.highlight}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-lg uppercase tracking-[-0.5px] mb-2">{w.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-4 flex-1">{w.desc}</p>
                  <p className="font-mono-brand text-[11px] uppercase tracking-[1.5px] flex items-center gap-1.5 pt-3 border-t-[3px] border-foreground">
                    <Clock className="w-3.5 h-3.5 text-primary" /> {w.duration}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== POURQUOI + OCCASIONS ===== */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(36,25%,88%)" />
      <section className="pt-10 pb-20 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="section-label block mb-3">Pourquoi nous choisir</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] uppercase leading-[0.95] tracking-[-1px]">
              Plus qu'un <span className="text-primary">atelier créatif</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {BENEFICES.map((b) => (
              <div key={b.title} className="border-brutal bg-[hsl(var(--cream))] p-6">
                <b.icon className="w-7 h-7 mb-3 text-primary" strokeWidth={2.2} />
                <h3 className="font-display text-lg uppercase mb-2">{b.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] uppercase leading-[0.95] tracking-[-1px] mb-6">
              Pour quels <span className="text-primary">temps forts</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {OCCASIONS.map((o) => (
                <span key={o} className="font-mono-brand text-[11px] uppercase tracking-[1.5px] px-4 py-2 border-brutal-thin bg-[hsl(var(--cream))]">
                  {o}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <WaveDivider from="hsl(36,25%,88%)" to="hsl(36,33%,93%)" flip />

      {/* ===== EXEMPLES + ENGAGEMENTS ===== */}
      <section className="pt-10 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
          <div className="border-brutal bg-[hsl(var(--cream))] p-8 shadow-brutal">
            <span className="section-label block mb-3">Ils l'ont fait</span>
            <h2 className="font-display text-xl md:text-2xl uppercase tracking-[-0.5px] mb-6">Retours d'expérience</h2>
            <ul className="space-y-4">
              {EXEMPLES.map((e) => (
                <li key={e.to}>
                  <Link to={e.to} className="group flex items-start gap-3 text-sm leading-snug hover:text-primary transition-colors">
                    <ArrowRight className="w-4 h-4 mt-0.5 text-primary flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    {e.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-brutal bg-[hsl(var(--cream))] p-8 shadow-brutal">
            <span className="section-label block mb-3">Côté administratif</span>
            <h2 className="font-display text-xl md:text-2xl uppercase tracking-[-0.5px] mb-6">Nos engagements</h2>
            <ul className="space-y-3">
              {ENGAGEMENTS.map((e) => (
                <li key={e} className="flex items-start gap-3 text-sm text-foreground/80">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <span className="section-label block mb-3">FAQ</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] uppercase leading-[0.95] tracking-[-1px]">
              Questions <span className="text-primary">fréquentes</span>
            </h2>
          </AnimatedSection>
          <div className="space-y-4">
            {FAQ.map((f) => (
              <div key={f.q} className="border-brutal bg-[hsl(var(--cream))] p-6 md:p-7">
                <h3 className="font-display text-base md:text-lg uppercase tracking-[-0.5px] mb-2">{f.q}</h3>
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-foreground/70">
            À lire aussi :{" "}
            <Link to="/blog/financer-animation-nature-ccas" className="underline decoration-2 underline-offset-2 hover:text-primary">financer une animation nature en CCAS</Link>
            {" · "}
            <Link to="/blog/organiser-fete-nature-mairie" className="underline decoration-2 underline-offset-2 hover:text-primary">organiser la Fête de la Nature</Link>
            {" · "}
            <Link to="/intervention-mediatheque-botanique" className="underline decoration-2 underline-offset-2 hover:text-primary">interventions en médiathèque</Link>
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(0,0%,10%)" flip />
      <section className="bg-foreground text-primary-foreground px-6 pt-10 pb-24">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="font-mono-brand text-[11px] uppercase tracking-[3px] text-olive-light mb-4">Votre prochain événement</p>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] uppercase leading-[0.95] tracking-[-1px] mb-6">
            Une animation nature <span className="text-olive-light">dans votre commune&nbsp;?</span>
          </h2>
          <p className="text-base text-primary-foreground/75 leading-relaxed mb-10 max-w-xl mx-auto">
            Décrivez-nous votre événement, votre public et votre date : réponse sous 24h ouvrées, devis gratuit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={CONTACT}
              className="btn-brutal bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-8 py-3 inline-flex items-center gap-2"
              style={{ borderColor: "hsl(var(--cream))" }}
            >
              Demander un devis <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+33609831606"
              className="btn-brutal bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-8 py-3 inline-flex items-center gap-2"
              style={{ borderColor: "hsl(var(--cream))" }}
            >
              <Phone className="w-4 h-4" /> 06 09 83 16 06
            </a>
          </div>
        </AnimatedSection>
      </section>

      <BackToTop />
      <Footer />
    </div>
  );
};

export default LandingCollectivites;
