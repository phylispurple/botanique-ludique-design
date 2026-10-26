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
import { ArrowRight, Download, Phone, Repeat, Timer, Clock, Users, Check } from "lucide-react";
import heroEvent from "@/assets/event-terrarium-table.webp";
import imgTerrarium from "@/assets/event-terrarium-mains.webp";
import imgSachets from "@/assets/event-sachets-senteur.webp";
import imgTeinture from "@/assets/event-teinture-petales.webp";
import imgKokedama from "@/assets/event-kokedama-mains.webp";
import imgSoies from "@/assets/event-soies-suspendues.webp";

const SLUG = "/animation-vegetale-agence-evenementielle";
const DOSSIER = "/docs/dossier-evenementiel-botanique-ludique.pdf";
const CONTACT = `/contact?subject=${encodeURIComponent("Proposition animation végétale pour un événement (agence)")}`;

const PRINCIPE = [
  { icon: Repeat, label: "Flux continu", desc: "Sans session fixe, jamais plus de quelques invités à la fois" },
  { icon: Timer, label: "10 à 30 min", desc: "Par invité, selon l'animation" },
  { icon: Clock, label: "9h à 16h", desc: "Ou sur le créneau de votre événement" },
  { icon: Users, label: "Vanessa + une aide", desc: "Installation dès 7h30, rangement inclus" },
];

const ANIMATIONS = [
  {
    tag: "L'incontournable",
    title: "Terrarium",
    image: imgTerrarium,
    alt: "Mise en situation : une invitée remplit de terreau un bocal de terrarium à couvercle de liège, sur une table d'événement",
    desc: "Chaque invité compose son petit jardin sous verre : gravier, sable, terreau, une fittonia et un coussin de mousse. Et une histoire : celle des caisses de Ward, qui ont fait voyager les plantes à travers les océans.",
    duree: "10 à 15 min",
    besoins: "Deux à trois tables, espace couvert. Sans eau ni électricité.",
    repart: "Un terrarium de 1 L, bouchon liège, étiquette et carte d'entretien",
    ideal: "Presse, lancements, séminaires",
  },
  {
    tag: "La plus rapide",
    title: "Sachet senteur",
    image: imgSachets,
    alt: "Mise en situation : bar à sachets senteur avec bols d'épices, de lavande et de pétales, sachets en organza et sacs kraft",
    desc: "Chaque invité compose son mélange d'épices, de plantes séchées et de pétales, puis le glisse dans un sachet d'organza, pendant une courte médiation sur la route des épices. Propre, rapide, il se glisse dans un sac à main.",
    duree: "10 min",
    besoins: "Une à deux tables, espace couvert. Sans eau ni électricité.",
    repart: "Un sachet senteur sur mesure et sa carte",
    ideal: "Noël, presse, grands flux. Palette accordée à votre collection",
  },
  {
    tag: "La plus spectaculaire",
    title: "Teinture végétale",
    image: imgTeinture,
    alt: "Mise en situation : une invitée dispose des pétales séchés sur un carré de tissu blanc pour une impression végétale",
    desc: "Impression végétale sur carré de soie, selon la technique du bundle dye. Chaque invité choisit sa palette de plantes tinctoriales, compose son motif, puis son paquet cuit à la vapeur. Il repart avec sa création sèche, le jour même.",
    duree: "20 à 30 min",
    besoins: "Trois tables, un point d'eau à proximité, deux ou trois prises, espace couvert.",
    repart: "Un carré de soie imprimé, du jaune à l'orange, du rose au violet",
    ideal: "Lancements de collection, presse. Palette adaptable à vos couleurs",
  },
  {
    tag: "La plus apaisante",
    title: "Kokedama",
    image: imgKokedama,
    alt: "Mise en situation : mains qui tiennent une boule de mousse et de terre en train d'être nouée au fil, technique du kokedama",
    desc: "Chaque invité façonne sa boule de substrat, l'habille de mousse et la noue au fil de coton selon la technique japonaise. Un geste lent, les mains dans la terre, pour un objet vivant qui dure des années.",
    duree: "20 à 30 min",
    besoins: "Deux à trois tables, espace couvert, un point d'eau à proximité.",
    repart: "Un kokedama à poser sur une soucoupe ou à suspendre",
    ideal: "Séminaires, journées d'équipe, formats d'une demi-journée",
  },
];

const APPORTE = [
  "Tout le matériel et les végétaux",
  "L'installation et le rangement",
  "Les emballages individuels et les cartes d'entretien",
  "Une aide sur place",
];

const A_PREVOIR = [
  "Des tables et un espace couvert",
  "Un point d'eau pour la teinture et le kokedama",
  "Un accès au lieu dès 7h30",
];

const FAQ = [
  {
    q: "Combien d'invités pouvez-vous accueillir ?",
    a: "L'animation fonctionne en flux continu : les invités passent quand ils le souhaitent, quelques-uns à la fois, pendant toute la durée de l'événement. Pour les plus grands flux, le sachet senteur est le format le plus rapide, avec une dizaine de minutes par invité.",
  },
  {
    q: "Pouvez-vous personnaliser l'animation aux couleurs de la marque ?",
    a: "Oui : étiquettes et cartes aux couleurs de la marque, cartels racontant l'origine des plantes, et palette de couleurs accordée à la collection pour la teinture végétale et les sachets senteur.",
  },
  {
    q: "Comment les invités repartent-ils avec leur création ?",
    a: "Chaque création est emballée individuellement, en boîte ou en sac kraft avec calage, étiquette et carte d'entretien, pour arriver intacte au bureau ou à la maison.",
  },
  {
    q: "Quels délais pour réserver ?",
    a: "Idéalement trois à quatre semaines avant l'événement, et six à huit semaines pour les périodes chargées comme Noël et le printemps.",
  },
  {
    q: "Comment se passe la facturation ?",
    a: "Chaque proposition est faite sur devis, selon l'animation, la durée, le nombre d'invités et le lieu. Botanique Ludique dispose d'un SIRET et d'une assurance responsabilité civile professionnelle.",
  },
];

const AnimationAgenceEvenementielle = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SEO
        title="Animation végétale pour agences événementielles | Paris"
        description="Animations végétales en flux continu pour vos événements presse, lancements et séminaires à Paris : terrarium, sachet senteur, teinture végétale, kokedama. Dossier à télécharger."
        keywords="animation agence événementielle, prestataire animation événementielle Paris, animation événement presse, animation lancement produit, atelier terrarium événement, bar à sachets senteur, animation végétale séminaire, animation flux continu salon"
        canonical={SLUG}
      />
      <SchemaOrg
        type="Service"
        data={{
          serviceType: "Animation végétale événementielle",
          name: "Animations végétales pour agences événementielles",
          description:
            "Animations végétales en flux continu pour événements presse, lancements et séminaires : terrarium, sachet senteur, teinture végétale et kokedama, avec médiation ethnobotanique.",
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
            { name: "Agences événementielles", url: `https://botaniqueludique.com${SLUG}` },
          ],
        }}
      />

      <Navigation />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden px-6 pt-24 pb-24 md:pt-32 md:pb-28">
        <div className="absolute inset-0 bg-foreground">
          <img src={heroEvent} alt="" className="w-full h-full object-cover opacity-35" />
        </div>
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-mono-brand text-[11px] md:text-[13px] uppercase tracking-[3px] text-olive-light mb-5">
              Agences · Presse · Lancements · Séminaires
            </p>
            <h1 className="font-display text-[clamp(2.3rem,6.5vw,5rem)] uppercase leading-[0.9] tracking-[-2px] text-primary-foreground mb-6">
              Animations végétales<br />
              <span className="text-olive-light">pour vos événements</span>
            </h1>
            <p className="font-body text-xl md:text-[22px] italic text-primary-foreground/90 max-w-[680px] mx-auto leading-relaxed mb-10">
              Une table dressée au cœur de l'événement : chaque invité crée, écoute une histoire de plantes et repart avec un objet vivant,
              soigneusement emballé.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to={CONTACT}
                className="btn-brutal bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-8 py-3 inline-flex items-center gap-2"
                style={{ borderColor: "hsl(var(--cream))" }}
              >
                Demander une proposition <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={DOSSIER}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brutal bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-8 py-3 inline-flex items-center gap-2"
                style={{ borderColor: "hsl(var(--cream))" }}
              >
                <Download className="w-4 h-4" /> Dossier événementiel (PDF)
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <WaveDivider from="hsl(0,0%,10%)" to="hsl(36,33%,93%)" />

      {/* ===== LE PRINCIPE ===== */}
      <section className="px-6 pt-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <span className="section-label block mb-3">Le principe</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] uppercase leading-[0.95] tracking-[-1px]">
              Comment ça <span className="text-primary">se passe</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 pl-[3px] pt-[3px]">
            {PRINCIPE.map((item) => (
              <div key={item.label} className="px-6 py-8 text-center border-brutal bg-[hsl(var(--cream))] -ml-[3px] -mt-[3px]">
                <item.icon className="w-7 h-7 mx-auto mb-3 text-primary" strokeWidth={2.2} />
                <p className="font-display uppercase text-base tracking-[-0.5px] mb-1">{item.label}</p>
                <p className="text-sm text-foreground/65 leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-base text-foreground/75 max-w-2xl mx-auto">
            <strong>Le plus :</strong> une médiation ethnobotanique. Chaque plante a une histoire humaine, et chaque invité repart en
            comprenant ce qu'il tient entre les mains.
          </p>
        </div>
      </section>

      {/* ===== TEASER ===== */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <figure className="m-0 border-brutal shadow-brutal bg-foreground">
            <video
              src="/videos/teaser-evenementiel.mp4"
              poster="/videos/teaser-evenementiel-poster.jpg"
              controls
              playsInline
              preload="none"
              muted
              className="block w-full aspect-video"
              aria-label="Teaser des animations végétales événementielles de Botanique Ludique"
            />
            <figcaption className="font-mono-brand text-[10px] uppercase tracking-[2px] text-primary-foreground/70 px-4 py-3 border-t-[3px] border-foreground bg-foreground">
              Teaser · Mise en situation
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ===== LES ANIMATIONS ===== */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(36,25%,88%)" />
      <section className="pt-10 pb-20 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="section-label block mb-3">Quatre animations</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] uppercase leading-[0.95] tracking-[-1px]">
              À choisir selon <span className="text-primary">votre événement</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {ANIMATIONS.map((a) => (
              <article key={a.title} className="flex flex-col border-brutal bg-[hsl(var(--cream))]">
                <div className="relative aspect-[4/3] overflow-hidden border-b-[3px] border-foreground bg-secondary">
                  <img src={a.image} alt={a.alt} loading="lazy" className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 font-mono-brand text-[9px] uppercase tracking-[2px] px-3 py-1.5 border-brutal-thin bg-[hsl(var(--cream))]">
                    {a.tag}
                  </span>
                  <span className="absolute bottom-3 right-3 font-mono-brand text-[8px] uppercase tracking-[1.5px] px-2 py-1 bg-foreground/70 text-primary-foreground">
                    Mise en situation
                  </span>
                </div>
                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <h3 className="font-display text-2xl uppercase tracking-[-0.5px] mb-3">{a.title}</h3>
                  <p className="text-sm text-foreground/75 leading-relaxed mb-5">{a.desc}</p>
                  <dl className="mt-auto grid gap-3 text-sm border-t-[3px] border-foreground pt-4">
                    <div>
                      <dt className="font-mono-brand text-[9px] uppercase tracking-[2px] text-primary">Durée par invité</dt>
                      <dd className="m-0">{a.duree}</dd>
                    </div>
                    <div>
                      <dt className="font-mono-brand text-[9px] uppercase tracking-[2px] text-primary">Besoins</dt>
                      <dd className="m-0">{a.besoins}</dd>
                    </div>
                    <div>
                      <dt className="font-mono-brand text-[9px] uppercase tracking-[2px] text-primary">Chacun repart avec</dt>
                      <dd className="m-0">{a.repart}</dd>
                    </div>
                    <div>
                      <dt className="font-mono-brand text-[9px] uppercase tracking-[2px] text-primary">Idéal pour</dt>
                      <dd className="m-0">{a.ideal}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <WaveDivider from="hsl(36,25%,88%)" to="hsl(36,33%,93%)" flip />

      {/* ===== LOGISTIQUE & SUR MESURE ===== */}
      <section className="pt-10 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <figure className="m-0 border-brutal shadow-brutal bg-secondary relative">
            <img
              src={imgSoies}
              alt="Mise en situation : carrés de soie imprimés de fleurs par les invités, suspendus à sécher devant une fenêtre"
              loading="lazy"
              className="w-full h-auto block"
            />
            <figcaption className="font-mono-brand text-[10px] uppercase tracking-[2px] text-foreground/60 px-4 py-3 border-t-[3px] border-foreground bg-[hsl(var(--cream))]">
              Carrés de soie imprimés et séchés le jour même · Mise en situation
            </figcaption>
          </figure>
          <div>
            <span className="section-label block mb-3">Emballage & logistique</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] uppercase leading-[0.95] tracking-[-1px] mb-6">
              Clé en main <span className="text-primary">pour votre équipe</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="border-brutal bg-[hsl(var(--cream))] p-5">
                <h3 className="font-display text-base uppercase mb-3">Nous apportons</h3>
                <ul className="space-y-2">
                  {APPORTE.map((item) => (
                    <li key={item} className="flex gap-2 items-start text-sm text-foreground/80">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-brutal bg-[hsl(var(--cream))] p-5">
                <h3 className="font-display text-base uppercase mb-3">À prévoir sur place</h3>
                <ul className="space-y-2">
                  {A_PREVOIR.map((item) => (
                    <li key={item} className="flex gap-2 items-start text-sm text-foreground/80">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-base text-foreground/80 leading-relaxed">
              <strong>Sur mesure :</strong> étiquettes et cartes aux couleurs de la marque, cartels racontant l'origine des plantes, palette
              accordée à la collection.
            </p>
          </div>
        </div>
      </section>

      {/* ===== RÉFÉRENCES ===== */}
      <SocialProofBar />

      {/* ===== FAQ ===== */}
      <section className="pt-20 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <span className="section-label block mb-3">FAQ agences</span>
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
            Vous organisez un séminaire ou une journée d'équipe ?{" "}
            <Link to="/animation-seminaire-entreprise-paris" className="underline decoration-2 underline-offset-2 hover:text-primary">
              Animations de séminaire
            </Link>{" "}
            ·{" "}
            <Link to="/animation-vegetale-hotel-evenementiel" className="underline decoration-2 underline-offset-2 hover:text-primary">
              Hôtels et lieux événementiels
            </Link>{" "}
            ·{" "}
            <Link to="/pro" className="underline decoration-2 underline-offset-2 hover:text-primary">
              Toutes nos offres pro
            </Link>
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(0,0%,10%)" flip />
      <section className="bg-foreground text-primary-foreground px-6 pt-10 pb-24">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="font-mono-brand text-[11px] uppercase tracking-[3px] text-olive-light mb-4">Votre prochain événement</p>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] uppercase leading-[0.95] tracking-[-1px] mb-6">
            Parlons de <span className="text-olive-light">votre brief</span>
          </h2>
          <p className="text-base text-primary-foreground/75 leading-relaxed mb-10 max-w-xl mx-auto">
            Date, lieu, nombre d'invités, univers de la marque : envoyez-nous l'essentiel et nous revenons vers vous avec une proposition.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={CONTACT}
              className="btn-brutal bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-8 py-3 inline-flex items-center gap-2"
              style={{ borderColor: "hsl(var(--cream))" }}
            >
              Demander une proposition <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+33609831606"
              className="btn-brutal bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-8 py-3 inline-flex items-center gap-2"
              style={{ borderColor: "hsl(var(--cream))" }}
            >
              <Phone className="w-4 h-4" /> 06 09 83 16 06
            </a>
          </div>
          <a
            href={DOSSIER}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-10 font-mono-brand text-[11px] uppercase tracking-[2px] text-primary-foreground/70 hover:text-olive-light transition-colors"
          >
            <Download size={14} /> Télécharger le dossier événementiel (PDF)
          </a>
        </AnimatedSection>
      </section>

      <BackToTop />
      <Footer />
    </div>
  );
};

export default AnimationAgenceEvenementielle;
