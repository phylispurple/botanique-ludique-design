import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import WaveDivider from "@/components/WaveDivider";
import { AREA_SERVED_IDF } from "@/data/areaServed";
import { Users, Clock, MapPin, Check, ArrowRight, Phone } from "lucide-react";
import heroImg from "@/assets/gallery-workshop-group.webp";
import imgCollection from "@/assets/gallery-kokedama-collection.jpg";
import imgTradescantia from "@/assets/gallery-kokedama-tradescantia.jpg";

const SLUG = "/atelier-kokedama-team-building";
const CONTACT = `/contact?subject=${encodeURIComponent("Devis atelier kokedama team building")}`;

const INFOS = [
  { icon: Users, label: "Jusqu'à 15 par session", desc: "Au-delà, ateliers en rotation" },
  { icon: Clock, label: "1h30 à 2h", desc: "Selon le format choisi" },
  { icon: MapPin, label: "Dans vos locaux", desc: "Partout en Île-de-France" },
];

const ETAPES = [
  { step: "01", title: "Accueil", desc: "Présentation des plantes, de la mousse et des gestes du jour." },
  { step: "02", title: "L'histoire du kokedama", desc: "La place de la mousse dans les jardins japonais, et ce qu'elle nous dit de notre rapport au temps." },
  { step: "03", title: "Création", desc: "Façonner la boule de substrat, l'habiller de mousse et la nouer au fil, accompagné pas à pas." },
  { step: "04", title: "Clôture", desc: "Conseils d'entretien, photo de groupe, et chacun repart avec son kokedama." },
];

const INCLUS = [
  "Tout le matériel : plantes, substrat, mousse, fil de coton et soucoupes",
  "L'animation par Vanessa Charlery, ethnobotaniste formée à l'EHESS",
  "Un temps de récit sur l'histoire et la culture du kokedama",
  "Un accompagnement individuel pendant la création",
  "Un kokedama par participant, à emporter",
  "Une fiche de conseils d'entretien",
];

const POURQUOI = [
  {
    title: "Un geste lent, qui apaise",
    desc: "Façonner la terre, presser la mousse, nouer le fil : un atelier manuel et calme, loin des écrans et de l'agenda.",
  },
  {
    title: "Des conversations qui viennent seules",
    desc: "Les mains occupées, on se parle autrement. On s'aide pour tenir la boule pendant que l'autre noue le fil.",
  },
  {
    title: "Une histoire à raconter",
    desc: "Derrière la boule de mousse, une culture japonaise du jardin et de la patience. Vos équipes repartent avec un objet et une histoire.",
  },
  {
    title: "Un souvenir vivant",
    desc: "Le kokedama se pose sur une soucoupe ou se suspend, et vit des années avec un simple arrosage par trempage.",
  },
];

const FAQ = [
  {
    q: "Combien de participants pour un atelier kokedama ?",
    a: "Jusqu'à 15 personnes par session pour que chacun soit bien accompagné. Pour un groupe plus important, nous organisons plusieurs sessions en rotation, sur devis.",
  },
  {
    q: "Combien de temps dure l'atelier ?",
    a: "Entre 1h30 et 2h selon le format : une version centrée sur la création, ou une version avec un vrai temps de récit sur l'histoire du kokedama.",
  },
  {
    q: "Comment entretenir son kokedama ?",
    a: "Il suffit de le tremper dans l'eau quelques minutes quand la boule devient légère, puis de le laisser s'égoutter. Chaque participant repart avec une fiche d'entretien.",
  },
  {
    q: "Comment est calculé le tarif ?",
    a: "Le tarif dépend du nombre de participants, de la durée et du lieu. Chaque devis est personnalisé et gratuit.",
  },
];

const AtelierKokedamaTeamBuilding = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SEO
        title="Atelier Kokedama Team Building | Art Japonais & Cohésion d'Équipe"
        description="Atelier kokedama pour team building en entreprise à Paris et en Île-de-France : chacun façonne sa boule de mousse et découvre l'histoire de cet art végétal japonais."
        keywords="kokedama team building, atelier kokedama entreprise, team building créatif, kokedama Paris, art japonais atelier, team building nature Île-de-France"
        canonical={SLUG}
      />
      <SchemaOrg
        type="Service"
        data={{
          serviceType: "Atelier kokedama team building",
          name: "Atelier Kokedama Team Building",
          description:
            "Atelier kokedama pour les équipes en entreprise : création d'une boule de mousse autour d'une plante et récit sur l'histoire de cet art végétal japonais, dans vos locaux en Île-de-France.",
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
            { name: "Atelier kokedama team building", url: `https://botaniqueludique.com${SLUG}` },
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
              Entreprises · CSE · Séminaires
            </p>
            <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] uppercase leading-[0.9] tracking-[-2px] text-primary-foreground mb-6">
              Atelier kokedama<br />
              <span className="text-olive-light">team building</span>
            </h1>
            <p className="font-body text-xl md:text-[22px] italic text-primary-foreground/90 max-w-[680px] mx-auto leading-relaxed mb-10">
              Chacun façonne sa boule de mousse autour d'une plante, et toute l'équipe découvre un art végétal venu du Japon.
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
        </div>
      </section>

      <WaveDivider from="hsl(0,0%,10%)" to="hsl(36,33%,93%)" />

      {/* ===== INFOS CLÉS ===== */}
      <section className="px-6 pt-6 pb-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 pl-[3px] pt-[3px]">
          {INFOS.map((item) => (
            <div key={item.label} className="px-6 py-8 text-center border-brutal bg-[hsl(var(--cream))] -ml-[3px] -mt-[3px]">
              <item.icon className="w-7 h-7 mx-auto mb-3 text-primary" strokeWidth={2.2} />
              <p className="font-display uppercase text-base tracking-[-0.5px] mb-1">{item.label}</p>
              <p className="font-mono-brand text-[10px] uppercase tracking-[2px] text-foreground/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PHOTOS + VIDÉO ===== */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <figure className="m-0 border-brutal overflow-hidden bg-secondary aspect-[3/4]">
            <img src={imgCollection} alt="Plusieurs kokedamas ficelés posés sur des assiettes à la fin d'un atelier" loading="lazy" className="w-full h-full object-cover" />
          </figure>
          <figure className="m-0 border-brutal overflow-hidden bg-secondary aspect-[3/4]">
            <img src={imgTradescantia} alt="Kokedama de Tradescantia zebrina en cours de fabrication sur la table d'atelier" loading="lazy" className="w-full h-full object-cover" />
          </figure>
          <figure className="m-0 border-brutal overflow-hidden bg-foreground aspect-[3/4] col-span-2 lg:col-span-1">
            <video
              src="/videos/workshop-kokedama-atelier.mp4"
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              autoPlay
              preload="metadata"
              aria-label="Vidéo : fabrication d'un kokedama en atelier"
            />
          </figure>
        </div>
      </section>

      {/* ===== HISTOIRE ===== */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="section-label block mb-3">Notre signature</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] uppercase leading-[0.95] tracking-[-1px] mb-6">
              Plus qu'une boule : <span className="text-primary">une culture</span>
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground/80">
              <p>
                En japonais, <em>koke</em> désigne la mousse et <em>dama</em> la boule. On rattache souvent le kokedama à l'univers du bonsaï :
                au lieu de cacher les racines dans un pot, on les enveloppe de terre et de mousse, et la plante devient une petite sculpture.
              </p>
              <p>
                Au Japon, la mousse est cultivée et admirée pour elle-même, jusque dans les jardins de temples comme le Saihō-ji de Kyoto,
                surnommé le temple des mousses. C'est cette histoire, et ce qu'elle dit de notre rapport au temps et à la lenteur, que nous
                partageons avec vos équipes pendant l'atelier.
              </p>
            </div>
            <Link
              to="/guide/comment-faire-un-kokedama"
              className="mt-6 inline-flex items-center gap-2 font-mono-brand text-[11px] uppercase tracking-[2px] text-primary hover:gap-3 transition-all"
            >
              Lire notre guide du kokedama <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== DÉROULÉ + INCLUS ===== */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(36,25%,88%)" />
      <section className="pt-10 pb-20 px-6 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="section-label block mb-3">Comment ça marche</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] uppercase leading-[0.95] tracking-[-1px]">
              Déroulement <span className="text-primary">de l'atelier</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 mb-16 pl-[3px] pt-[3px]">
            {ETAPES.map((item) => (
              <div key={item.step} className="p-6 border-brutal bg-[hsl(var(--cream))] -ml-[3px] -mt-[3px]">
                <span className="font-display text-5xl text-primary/30 block mb-3">{item.step}</span>
                <h3 className="font-display text-lg uppercase tracking-[-0.5px] mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="border-brutal bg-[hsl(var(--cream))] p-8 md:p-10">
            <h2 className="font-display text-xl md:text-2xl uppercase tracking-[-0.5px] mb-6">Ce qui est inclus</h2>
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-4">
              {INCLUS.map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={3} />
                  <p className="text-sm md:text-base text-foreground/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <WaveDivider from="hsl(36,25%,88%)" to="hsl(36,33%,93%)" flip />

      {/* ===== POURQUOI ===== */}
      <section className="pt-10 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="section-label block mb-3">Pourquoi ce format</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] uppercase leading-[0.95] tracking-[-1px]">
              Le kokedama pour <span className="text-primary">votre équipe</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            {POURQUOI.map((item, i) => (
              <div key={item.title} className="border-brutal bg-[hsl(var(--cream))] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-brutal-lg">
                <span className="font-display text-3xl text-primary/30 block mb-3">0{i + 1}</span>
                <h3 className="font-display text-base uppercase mb-3 leading-tight">{item.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
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
            {FAQ.map((item) => (
              <div key={item.q} className="border-brutal bg-[hsl(var(--cream))] p-6 md:p-7">
                <h3 className="font-display text-base md:text-lg uppercase tracking-[-0.5px] mb-2">{item.q}</h3>
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-foreground/70">
            Vous cherchez un autre format ?{" "}
            <Link to="/atelier-terrarium-team-building" className="underline decoration-2 underline-offset-2 hover:text-primary">
              Atelier terrarium team building
            </Link>
            {" · "}
            <Link to="/team-building-nature-entreprise" className="underline decoration-2 underline-offset-2 hover:text-primary">
              Tous nos ateliers team building
            </Link>
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(0,0%,10%)" flip />
      <section className="bg-foreground text-primary-foreground px-6 pt-10 pb-24">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="font-mono-brand text-[11px] uppercase tracking-[3px] text-olive-light mb-4">Organisons votre atelier</p>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] uppercase leading-[0.95] tracking-[-1px] mb-6">
            Créez ensemble <span className="text-olive-light">vos kokedamas</span>
          </h2>
          <p className="text-base text-primary-foreground/75 leading-relaxed mb-10 max-w-xl mx-auto">
            Dites-nous votre effectif, votre lieu et le temps dont vous disposez : nous vous envoyons une proposition sur mesure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={CONTACT}
              className="btn-brutal bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-8 py-3 inline-block"
              style={{ borderColor: "hsl(var(--cream))" }}
            >
              Demander un devis →
            </Link>
            <Link
              to="/workshops"
              className="btn-brutal bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-8 py-3 inline-block"
              style={{ borderColor: "hsl(var(--cream))" }}
            >
              Voir tous les ateliers →
            </Link>
          </div>
        </AnimatedSection>
      </section>

      <BackToTop />
      <Footer />
    </div>
  );
};

export default AtelierKokedamaTeamBuilding;
