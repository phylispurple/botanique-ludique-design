import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import BackToTop from "@/components/BackToTop";
import WaveDivider from "@/components/WaveDivider";
import TraitDessine from "@/components/TraitDessine";
import PhotoCarousel from "@/components/PhotoCarousel";
import EnvieAtelier from "@/components/EnvieAtelier";
import { Link } from "react-router-dom";
import { Heart, Globe, Users, Sprout, ArrowRight, GraduationCap, Camera, Leaf } from "lucide-react";
import { galet, PASTILLE } from "@/lib/organic";
import { EVENT_PHOTOS } from "@/data/eventPhotos";
import aboutImage from "@/assets/portrait-vanessa.webp";

const VALEURS = [
  {
    icon: Heart,
    title: "Transmission",
    text: "Chaque atelier porte en lui une histoire. Je ne transmets pas une technique vide de sens : je partage le contexte culturel, l'origine, le pourquoi derrière chaque geste.",
  },
  {
    icon: Users,
    title: "Accessibilité",
    text: "Du senior en EHPAD à l'enfant de 4 ans, de l'entreprise au centre social. La botanique n'a pas de public cible, elle est pour tout le monde.",
  },
  {
    icon: Sprout,
    title: "Reconnexion au vivant",
    text: "Nous avons perdu les gestes et les mots qui nous reliaient aux plantes. Mes ateliers invitent à réactiver cette sensibilité : toucher la mousse, sentir la garance, observer une feuille.",
  },
  {
    icon: Globe,
    title: "Éthique & sens",
    text: "Ce n'est pas du folklore. Comprendre que la teinture végétale était un acte sacré, que le tressage accompagnait les rites de passage : c'est ça qui donne sa profondeur à l'expérience.",
  },
];

const PARCOURS = [
  {
    icon: GraduationCap,
    titre: "Anthropologie de la nature",
    texte: "Formée à l'EHESS avec une spécialisation en ethnobotanique, sous la direction de Florence Brunois-Pasina.",
  },
  {
    icon: Leaf,
    titre: "Recherche de terrain",
    texte: "Les liens entre citadins et plantes dans les espaces verts du Grand Paris : comment on les perçoit, les nomme, les côtoie.",
  },
  {
    icon: Camera,
    titre: "Photographe depuis 2014",
    texte: "Un regard d'artiste sur le végétal, qu'on retrouve dans les images du site et dans la façon de mettre en scène les ateliers.",
  },
];

const CHIFFRES = [
  { value: "+50", label: "ateliers réalisés" },
  { value: "+400", label: "participants" },
  { value: "+15", label: "partenaires" },
  { value: "8", label: "départements d'IDF" },
];

const TONS = ["bg-accent", "bg-[hsl(var(--olive-light))]", "bg-[hsl(var(--green))] text-[hsl(var(--cream))]", "bg-[hsl(210_41%_24%)] text-[hsl(var(--cream))]"];
const TILTS = ["-rotate-1", "rotate-1", "rotate-[0.6deg]", "-rotate-[0.6deg]"];

const About = () => (
  <div className="min-h-screen bg-[hsl(var(--cream))] overflow-x-clip">
    <SEO
      title="À propos de Botanique Ludique et Vanessa Charlery"
      description="Découvrez Botanique Ludique et le parcours de Vanessa Charlery, ethnobotaniste formée à l'EHESS, entre médiation culturelle, anthropologie de la nature et ateliers botaniques en Île-de-France."
      keywords="Vanessa Charlery, animatrice ethnobotaniste, EHESS, photographe botanique, éducation environnement, ethnobotanique, philosophie nature, reconnexion vivant"
      canonical="/about"
    />
    <Navigation />

    {/* ===== HERO ===== */}
    <section className="relative px-6 pt-28 pb-16 md:pt-36 md:pb-20">
      <div
        className="absolute -left-32 top-20 w-[460px] h-[460px] bg-[hsl(var(--olive-light))]/30 pointer-events-none"
        style={{ borderRadius: "58% 42% 38% 62% / 45% 55% 45% 55%" }}
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 bottom-0 w-[380px] h-[380px] bg-accent/15 pointer-events-none"
        style={{ borderRadius: "40% 60% 55% 45% / 60% 40% 60% 40%" }}
        aria-hidden="true"
      />
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.15fr] gap-14 items-center">
        <AnimatedSection className="relative max-w-[420px] w-full mx-auto order-2 lg:order-1">
          <img
            src={aboutImage}
            alt="Vanessa Charlery, animatrice ethnobotaniste et fondatrice de Botanique Ludique"
            className="w-full aspect-[4/5] object-cover border-brutal shadow-brutal-lg -rotate-2"
            style={{ borderRadius: "58% 42% 50% 50% / 46% 50% 50% 54%" }}
          />
          <div
            className="absolute -right-2 top-[12%] w-[104px] h-[104px] flex flex-col items-center justify-center text-center bg-[hsl(var(--green))] text-[hsl(var(--cream))] border-brutal shadow-[3px_3px_0_hsl(var(--black))] pebble-float"
            style={PASTILLE}
          >
            <span className="font-display text-xl leading-none">EHESS</span>
            <span className="font-mono-brand text-[8px] uppercase tracking-[1px] mt-1 leading-tight">anthropologie<br />de la nature</span>
          </div>
          <div
            className="absolute -left-3 bottom-[10%] w-[96px] h-[96px] flex flex-col items-center justify-center text-center bg-accent border-brutal shadow-[3px_3px_0_hsl(var(--black))] pebble-float [animation-delay:-2s]"
            style={{ borderRadius: "48% 52% 44% 56% / 55% 45% 55% 45%" }}
          >
            <span className="font-display text-xl leading-none">2014</span>
            <span className="font-mono-brand text-[8px] uppercase tracking-[1px] mt-1 leading-tight">photographe</span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={120} className="order-1 lg:order-2">
          <span className="inline-flex font-mono-brand text-[10px] md:text-[11px] uppercase tracking-[2px] bg-[hsl(var(--green))] text-[hsl(var(--cream))] border-brutal-thin rounded-full px-4 py-2 mb-7 -rotate-2 shadow-[3px_3px_0_hsl(var(--black))]">
            Animatrice ethnobotaniste et fondatrice de Botanique Ludique
          </span>
          <h1 className="font-display text-[clamp(2.8rem,6.5vw,5.2rem)] uppercase leading-[0.9] tracking-[-2px] mb-4">
            Vanessa
            <br />
            <span className="text-primary md:ml-16">Charlery</span>
          </h1>
          <TraitDessine className="mb-7 md:ml-16" />
          <p className="font-editorial italic text-xl md:text-2xl text-foreground/80 max-w-xl leading-snug mb-6">
            J'ai créé Botanique Ludique pour transmettre autrement les savoirs qui lient l'humain au végétal.
          </p>
          <p className="text-base md:text-lg leading-[1.8] text-foreground/75 max-w-xl mb-8">
            Formée en anthropologie à l'EHESS avec une spécialisation en ethnobotanique, artiste photographe depuis 2014, j'explore la façon dont nous
            percevons, nommons et côtoyons les plantes, et j'en fais des ateliers, des balades et des conférences.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/workshops"
              className="btn-brutal inline-flex items-center gap-2 bg-accent text-foreground border-foreground -rotate-1 hover:rotate-0 text-xs px-7 py-3.5"
              style={{ borderRadius: "28px 14px 26px 12px / 14px 26px 12px 28px" }}
            >
              Voir les ateliers <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/mediation"
              className="btn-brutal inline-flex items-center gap-2 bg-[hsl(var(--cream))] text-foreground border-foreground rotate-1 hover:rotate-0 text-xs px-7 py-3.5"
              style={{ borderRadius: "14px 30px 12px 26px / 26px 12px 30px 14px" }}
            >
              Conférences & balades
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* ===== PARCOURS ===== */}
    <WaveDivider from="hsl(36,33%,93%)" to="hsl(36,25%,88%)" />
    <section className="bg-secondary px-6 pt-8 pb-20 md:pb-24">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-14">
          <span className="section-label block mb-3">Parcours</span>
          <h2 className="font-display text-[clamp(2rem,5vw,3.4rem)] uppercase leading-[0.92] tracking-[-1.5px]">
            Entre science
            <br />
            <span className="text-primary md:ml-16">et sensible</span>
          </h2>
          <TraitDessine className="mt-3 md:ml-16" variant={1} />
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          {PARCOURS.map((p, i) => (
            <AnimatedSection key={p.titre} delay={i * 110} className={i === 1 ? "md:mt-10" : ""}>
              <div className={`relative h-full bg-[hsl(var(--cream))] border-brutal shadow-brutal p-7 pt-12 ${TILTS[i]} hover:rotate-0 transition-transform duration-300`} style={galet(i + 1)}>
                <div className={`absolute -top-7 left-7 w-14 h-14 flex items-center justify-center border-brutal shadow-[3px_3px_0_hsl(var(--black))] ${TONS[i]}`} style={PASTILLE}>
                  <p.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg uppercase leading-tight mb-2">{p.titre}</h3>
                <p className="text-sm md:text-base text-foreground/75 leading-relaxed">{p.texte}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* chiffres */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-10">
          {CHIFFRES.map((c, i) => (
            <AnimatedSection key={c.label} delay={i * 90}>
              <div
                className={`w-[120px] h-[120px] md:w-[136px] md:h-[136px] flex flex-col items-center justify-center text-center border-brutal shadow-[4px_4px_0_hsl(var(--black))] pebble-float ${TONS[i]} ${i % 2 ? "rotate-3" : "-rotate-3"}`}
                style={{ ...PASTILLE, animationDelay: `-${i * 1.3}s` }}
              >
                <span className="font-display text-3xl leading-none">{c.value}</span>
                <span className="font-mono-brand text-[9px] uppercase tracking-[1px] mt-1.5 px-2 leading-tight">{c.label}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ===== VALEURS ===== */}
    <WaveDivider from="hsl(36,25%,88%)" to="hsl(36,33%,93%)" flip />
    <section className="px-6 pt-8 pb-20 md:pb-24">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <span className="section-label block mb-3">Nos valeurs</span>
          <h2 className="font-display text-[clamp(1.9rem,4.5vw,3rem)] uppercase leading-[0.95] tracking-[-1px]">
            Ce en quoi <span className="text-primary">nous croyons</span>
          </h2>
          <TraitDessine className="mx-auto mt-3" variant={0} />
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
          {VALEURS.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 100} className={i % 2 === 1 ? "md:mt-10" : ""}>
              <div className={`relative h-full bg-[hsl(var(--cream))] border-brutal shadow-brutal p-7 pt-11 ${TILTS[i]} hover:rotate-0 transition-transform duration-300`} style={galet(i)}>
                <div className={`absolute -top-7 left-7 w-14 h-14 flex items-center justify-center border-brutal shadow-[3px_3px_0_hsl(var(--black))] ${TONS[i]}`} style={PASTILLE}>
                  <v.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg uppercase leading-tight mb-3">{v.title}</h3>
                <p className="text-sm md:text-base text-foreground/75 leading-relaxed">{v.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ===== DÉMARCHE (bande verte) ===== */}
    <WaveDivider from="hsl(36,33%,93%)" to="hsl(153,40%,30%)" />
    <section className="bg-[hsl(var(--green))] text-[hsl(var(--cream))] px-6 pt-8 pb-20 md:pb-24">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <span className="section-label block mb-3" style={{ color: "hsl(73 44% 67%)" }}>Philosophie</span>
          <h2 className="font-display text-[clamp(1.9rem,4.5vw,3rem)] uppercase leading-[0.95] tracking-[-1px]">
            Notre <span className="text-[hsl(var(--olive-light))]">démarche</span>
          </h2>
          <TraitDessine className="mx-auto mt-3" color="hsl(var(--olive-light))" variant={2} />
        </AnimatedSection>
        <AnimatedSection>
          <blockquote className="relative bg-[hsl(var(--cream))] text-foreground border-brutal shadow-[6px_6px_0_hsl(var(--black))] p-8 md:p-11 mb-12 -rotate-[0.6deg]" style={galet(2)}>
            <span className="absolute -top-8 left-8 w-14 h-14 flex items-center justify-center font-editorial text-4xl bg-accent border-brutal" style={PASTILLE} aria-hidden="true">
              “
            </span>
            <p className="font-editorial italic text-xl md:text-2xl leading-snug">
              On ne fait plus « juste » un atelier : on s'inscrit dans une lignée de pratiques millénaires.
            </p>
          </blockquote>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8 text-[hsl(var(--cream))]/85 leading-relaxed">
          <AnimatedSection>
            <p>
              Ce que nous proposons n'est pas une activité où l'on fabrique un objet joli pour l'oublier le lendemain.{" "}
              <strong className="text-[hsl(var(--cream))]">C'est une invitation à comprendre d'où viennent ces pratiques</strong>, et à développer notre propre sensibilité au vivant.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p>
              Quand on sait que la teinture végétale était un acte sacré dans certaines sociétés, que le tressage de l'osier accompagnait les rites de passage, ou
              que le jardin japonais incarne une philosophie de l'impermanence, le geste créatif prend une tout autre dimension.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p>
              Ce qui compte, c'est ce qui se passe <em>pendant</em> l'atelier : les mains dans la mousse, l'odeur de la garance qui chauffe, les nervures d'une
              feuille observées avec un regard neuf. C'est là que quelque chose se transforme.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
    <WaveDivider from="hsl(153,40%,30%)" to="hsl(36,25%,88%)" flip />

    {/* ===== EN IMAGES ===== */}
    <section className="bg-secondary pt-4 pb-10">
      <AnimatedSection className="px-6 max-w-6xl mx-auto mb-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <span className="section-label block mb-3">En atelier</span>
          <h2 className="font-display text-[clamp(1.9rem,4.5vw,3rem)] uppercase leading-[0.95] tracking-[-1px]">
            Les mains <span className="text-primary">à l'œuvre</span>
          </h2>
        </div>
        <Link to="/gallery" className="self-start md:self-end font-mono-brand text-[10px] uppercase tracking-[2px] underline underline-offset-4 decoration-2 hover:text-primary">
          Toute la galerie →
        </Link>
      </AnimatedSection>
      <PhotoCarousel organic images={EVENT_PHOTOS} />
    </section>
    <WaveDivider from="hsl(36,25%,88%)" to="hsl(36,33%,93%)" flip />

    <EnvieAtelier />
    <WaveDivider from="hsl(36,33%,93%)" to="hsl(0,0%,10%)" flip />

    <BackToTop />
    <Footer />
  </div>
);

export default About;
