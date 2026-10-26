import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import WaveDivider from "@/components/WaveDivider";
import { AREA_SERVED_IDF } from "@/data/areaServed";
import { Users, Clock, ArrowRight, Phone, Gift, Heart, PartyPopper, Baby, Leaf } from "lucide-react";
import heroImg from "@/assets/event-terrarium-table.webp";
import imgKokedama from "@/assets/gallery-kokedama-collection.jpg";
import imgTerrarium from "@/assets/gallery-terrarium-bocal-fittonia.jpg";
import imgTeinture from "@/assets/gallery-teinture-tshirts-table.webp";
import imgCouronne from "@/assets/gallery-flower-crown.webp";

const SLUG = "/atelier-botanique-evenement";
const CONTACT = `/contact?subject=${encodeURIComponent("Atelier botanique pour un événement privé")}`;

const OCCASIONS = [
  { icon: Heart, title: "Mariage", desc: "Une animation pendant le cocktail ou le vin d'honneur, et des cadeaux invités que chacun fabrique.", to: null },
  { icon: PartyPopper, title: "EVJF", desc: "Un atelier entre amies, en appartement, dans un lieu loué ou dans un parc.", to: "/atelier-evjf-botanique-paris" },
  { icon: Gift, title: "Anniversaire enfant", desc: "Une fête nature où chaque enfant repart avec sa création.", to: "/atelier-anniversaire-enfant-nature-paris" },
  { icon: Leaf, title: "Anniversaire adulte", desc: "Un moment créatif et original à partager avec ses invités.", to: "/atelier-anniversaire-adulte-nature-paris" },
  { icon: Baby, title: "Baby shower", desc: "Un atelier végétal doux, avec un souvenir vivant pour chaque invitée.", to: "/atelier-baby-shower-vegetal-paris" },
  { icon: Users, title: "Fête de famille", desc: "Un atelier intergénérationnel, des petits-enfants aux grands-parents.", to: null },
];

const ATELIERS = [
  { title: "Terrarium", image: imgTerrarium, alt: "Terrarium en bocal avec fittonia réalisé en atelier", desc: "Un jardin miniature sous verre, très apprécié en cadeau invité.", duree: "2h" },
  { title: "Kokedama", image: imgKokedama, alt: "Kokedamas ficelés réalisés en atelier", desc: "Une boule de mousse et de terre autour d'une plante, à poser ou à suspendre.", duree: "2h" },
  { title: "Teinture végétale", image: imgTeinture, alt: "Tee-shirts teints aux pigments végétaux sur une table d'atelier", desc: "Des pièces textiles teintes aux couleurs des plantes, un moment très convivial.", duree: "2h30" },
  { title: "Couronne de fleurs", image: imgCouronne, alt: "Couronne de fleurs et de pommes de pin réalisée en atelier", desc: "Tresser sa couronne végétale, idéale pour un EVJF ou une fête champêtre.", duree: "2h" },
];

const FAQ = [
  {
    q: "Combien d'invités peuvent participer ?",
    a: "Jusqu'à 15 invités par session pour un vrai moment d'atelier. Pour un mariage ou une grande fête, l'atelier peut fonctionner en flux continu : les invités passent quand ils le souhaitent pendant le cocktail.",
  },
  {
    q: "Où se déroule l'atelier ?",
    a: "Chez vous, dans un lieu de réception, un restaurant, un jardin ou un parc, partout en Île-de-France. Nous apportons tout le matériel et les plantes.",
  },
  {
    q: "Quel est le tarif ?",
    a: "Le tarif dépend de l'atelier, du nombre d'invités, de la durée et du lieu. Chaque devis est personnalisé et gratuit.",
  },
];

const AtelierBotaniqueEvenement = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SEO
        title="Atelier Botanique Événement | Mariage, Anniversaire, EVJF ✦ Paris & IDF"
        description="🌿 Ateliers botaniques pour événements privés : mariages, anniversaires, EVJF, baby showers. Animation originale et créative à Paris et en Île-de-France."
        keywords="atelier botanique mariage, animation végétale anniversaire, EVJF nature Paris, atelier terrarium mariage, animation botanique événement, baby shower nature"
        canonical={SLUG}
      />
      <SchemaOrg
        type="Service"
        data={{
          serviceType: "Atelier botanique pour événements privés",
          name: "Ateliers botaniques pour mariages, EVJF et anniversaires",
          description: "Ateliers botaniques créatifs pour événements privés à Paris et en Île-de-France : mariages, EVJF, anniversaires, baby showers.",
          url: `https://botaniqueludique.com${SLUG}`,
          areaServed: AREA_SERVED_IDF,
        }}
      />
      <SchemaOrg type="FAQPage" data={{ questions: FAQ.map((f) => ({ question: f.q, answer: f.a })) }} />
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
              Mariages · EVJF · Anniversaires · Baby showers
            </p>
            <h1 className="font-display text-[clamp(2.2rem,6vw,4.8rem)] uppercase leading-[0.9] tracking-[-2px] text-primary-foreground mb-6">
              Ateliers botaniques<br />
              <span className="text-olive-light">pour vos événements</span>
            </h1>
            <p className="font-body text-xl md:text-[22px] italic text-primary-foreground/90 max-w-[680px] mx-auto leading-relaxed mb-10">
              Offrez à vos invités un moment créatif : chacun repart avec sa création végétale, un souvenir vivant de votre fête.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to={CONTACT}
                className="btn-brutal bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-8 py-3 inline-flex items-center gap-2"
                style={{ borderColor: "hsl(var(--cream))" }}
              >
                Demander un devis gratuit <ArrowRight className="w-4 h-4" />
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
        </div>
      </section>

      <WaveDivider from="hsl(0,0%,10%)" to="hsl(36,33%,93%)" />

      {/* ===== OCCASIONS ===== */}
      <section className="px-6 pt-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="section-label block mb-3">Pour quel événement</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] uppercase leading-[0.95] tracking-[-1px]">
              Une fête, <span className="text-primary">un atelier</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {OCCASIONS.map((o) => {
              const inner = (
                <>
                  <o.icon className="w-7 h-7 mb-3 text-primary" strokeWidth={2.2} />
                  <h3 className="font-display text-lg uppercase mb-2 group-hover:text-primary transition-colors">{o.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed flex-1">{o.desc}</p>
                  {o.to && (
                    <span className="mt-4 inline-flex items-center gap-2 font-mono-brand text-[11px] uppercase tracking-[2px] text-primary group-hover:gap-3 transition-all">
                      En savoir plus <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  )}
                </>
              );
              const cls = "group flex flex-col border-brutal bg-[hsl(var(--cream))] p-6 text-foreground";
              return o.to ? (
                <Link key={o.title} to={o.to} className={`${cls} transition-all duration-300 hover:-translate-y-1 hover:shadow-brutal-lg`}>
                  {inner}
                </Link>
              ) : (
                <div key={o.title} className={cls}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== ATELIERS ===== */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(36,25%,88%)" />
      <section className="pt-10 pb-20 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="section-label block mb-3">Nos ateliers</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] uppercase leading-[0.95] tracking-[-1px]">
              Quatre ateliers <span className="text-primary">très demandés</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ATELIERS.map((a) => (
              <article key={a.title} className="flex flex-col border-brutal bg-[hsl(var(--cream))]">
                <div className="aspect-[4/3] overflow-hidden border-b-[3px] border-foreground bg-secondary">
                  <img src={a.image} alt={a.alt} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display text-lg uppercase tracking-[-0.5px] mb-2">{a.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-4 flex-1">{a.desc}</p>
                  <p className="font-mono-brand text-[11px] uppercase tracking-[1.5px] flex items-center gap-1.5 pt-3 border-t-[3px] border-foreground">
                    <Clock className="w-3.5 h-3.5 text-primary" /> {a.duree}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-foreground/70">
            <Link to="/workshops" className="underline decoration-2 underline-offset-2 hover:text-primary">Voir tous nos ateliers</Link>
            {" · "}
            Un événement d'entreprise ?{" "}
            <Link to="/animation-vegetale-agence-evenementielle" className="underline decoration-2 underline-offset-2 hover:text-primary">Animations pour événements pro</Link>
          </p>
        </div>
      </section>
      <WaveDivider from="hsl(36,25%,88%)" to="hsl(36,33%,93%)" flip />

      {/* ===== FAQ ===== */}
      <section className="pt-10 pb-20 px-6">
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
        </div>
      </section>

      {/* ===== CTA ===== */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(0,0%,10%)" flip />
      <section className="bg-foreground text-primary-foreground px-6 pt-10 pb-24">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="font-mono-brand text-[11px] uppercase tracking-[3px] text-olive-light mb-4">Votre événement</p>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] uppercase leading-[0.95] tracking-[-1px] mb-6">
            Envie d'un atelier <span className="text-olive-light">pour votre fête&nbsp;?</span>
          </h2>
          <p className="text-base text-primary-foreground/75 leading-relaxed mb-10 max-w-xl mx-auto">
            Date, lieu, nombre d'invités : nous vous répondons sous 24h ouvrées avec une proposition adaptée.
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

export default AtelierBotaniqueEvenement;
