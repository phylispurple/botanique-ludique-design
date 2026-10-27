import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import WaveDivider from "@/components/WaveDivider";
import BackToTop from "@/components/BackToTop";
import { GraduationCap, BookOpen, ArrowRight, CheckCircle, Clock, Users, Leaf, MapPin, Phone, Download } from "lucide-react";

const PDF_URL = "/docs/plaquette-botanique-ludique-ecoles-2027.pdf";
import heroImg from "@/assets/gallery-forest-walk.webp";
import imgClasse from "@/assets/gallery-teinture-enfants-2.jpg";
import imgTerrain from "@/assets/gallery-college-eee-2.webp";
import imgCycle from "@/assets/gallery-terrarium-enfants-fabrication.jpg";

const SLUG = "/etablissements-scolaires";
const CONTACT = `/contact?subject=${encodeURIComponent("Intervention en établissement scolaire")}`;

const faqsScolaires = [
  {
    q: "Comment organiser une intervention dans notre établissement ?",
    a: "Contactez-nous par email ou téléphone. Nous échangeons sur vos objectifs pédagogiques, le nombre d'élèves et les créneaux possibles, puis nous vous envoyons un devis personnalisé sous 48 h. Nous intervenons partout en Île-de-France.",
  },
  {
    q: "Les ateliers sont-ils en lien avec les programmes scolaires ?",
    a: "Oui, chaque atelier est construit en lien avec les programmes de SVT (biodiversité, écosystèmes, espèces exotiques envahissantes), d'EMC (développement durable, responsabilité environnementale) et de géographie (aménagement, enjeux environnementaux locaux). Nous en discutons avec l'équipe enseignante en amont.",
  },
  {
    q: "Comment financer une intervention ?",
    a: "Les tarifs dépendent du format (demi-journée, journée, cycle), du nombre d'élèves et du lieu. Selon les établissements, l'intervention peut être prise en charge par le budget de l'établissement, la coopérative scolaire ou l'association de parents d'élèves, ou par la commune dans le cadre de ses projets éducatifs.",
  },
  {
    q: "Faut-il un espace particulier pour accueillir l'atelier ?",
    a: "Non, nous nous adaptons à vos locaux : salle de classe, salle polyvalente, cour ou espace vert à proximité. Tout le matériel est fourni. Pour les sorties terrain, nous choisissons ensemble un parc ou un bois proche de l'établissement.",
  },
  {
    q: "Combien d'élèves peuvent participer en même temps ?",
    a: "Idéalement 15 à 25 élèves, soit une demi-classe ou une classe selon l'atelier. Pour les classes plus nombreuses, nous organisons des rotations en demi-groupes.",
  },
];

const INFOS = [
  { icon: GraduationCap, value: "CM1 au lycée", label: "Et post-bac sur demande" },
  { icon: Users, value: "15 à 25 élèves", label: "Par groupe" },
  { icon: Clock, value: "1h30 à 6h", label: "Durée modulable" },
  { icon: MapPin, value: "8 départements", label: "Partout en Île-de-France" },
];

const FORMATS = [
  {
    title: "Atelier en classe",
    duration: "1h30 à 3h",
    image: imgClasse,
    alt: "Élève peignant un tee-shirt avec un pigment végétal lors d'un atelier de teinture",
    desc: "Une intervention en salle avec un atelier pratique : kokedama, teinture végétale, terrarium ou herbier. Matériel fourni, chaque élève repart avec sa création.",
    items: ["Présentation illustrée", "Atelier pratique guidé", "Création individuelle à emporter"],
  },
  {
    title: "Sortie terrain",
    duration: "Demi-journée ou journée",
    image: imgTerrain,
    alt: "Plantes pressées réalisées par des collégiens lors d'un atelier sur les espèces exotiques envahissantes",
    desc: "Une sortie nature dans un parc ou un bois proche : identification de plantes sauvages, collecte pour l'herbier et lecture ethnobotanique du paysage.",
    items: ["Balade guidée d'identification", "Collecte et observation", "Carnet de terrain"],
  },
  {
    title: "Cycle pluridisciplinaire",
    duration: "3 à 6 séances",
    image: imgCycle,
    alt: "Enfants fabriquant un terrarium en bocal lors d'un atelier",
    desc: "Un projet sur plusieurs semaines qui croise SVT, arts plastiques et géographie, avec une restitution en fin de cycle.",
    items: ["Programme construit avec l'équipe", "Progression séance par séance", "Restitution finale"],
  },
];

const PROGRAMMES = [
  { matiere: "SVT", items: ["Biodiversité et écosystèmes", "Espèces exotiques envahissantes", "Reproduction et cycle de vie des plantes", "Développement durable et impact humain"] },
  { matiere: "EMC", items: ["Responsabilité environnementale", "Engagement citoyen et écologie", "Transition écologique", "Notre rapport au vivant"] },
  { matiere: "Géographie", items: ["Aménagement du territoire et espaces verts", "Enjeux environnementaux locaux", "Agriculture et alimentation durable", "Urbanisation et biodiversité"] },
  { matiere: "Arts & lettres", items: ["Land art et création végétale", "Herbier artistique et scientifique", "Teinture végétale et histoire des pigments", "Écriture et observation naturaliste"] },
];

const NIVEAUX = [
  { level: "Cycle 3", classes: "CM1, CM2, 6e", examples: "Herbier, bombes à graines, découverte sensorielle" },
  { level: "Cycle 4", classes: "5e à 3e", examples: "Teinture végétale, espèces exotiques envahissantes, ethnobotanique" },
  { level: "Lycée", classes: "2de à Terminale", examples: "Biodiversité, sortie terrain, projet pluridisciplinaire" },
  { level: "Post-bac", classes: "BTS, université", examples: "Médiation scientifique, conférence, module spécialisé" },
];

const EtablissementsScolaires = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SEO
        title="Ateliers botanique collèges & lycées Île-de-France — Botanique Ludique"
        description="Interventions pédagogiques botaniques pour collèges et lycées. Animation SVT, sortie scolaire nature Yvelines, médiation scientifique. De la 6e à la Terminale."
        keywords="atelier botanique collège, intervention pédagogique botanique, sortie scolaire nature Yvelines, animation SVT plantes, médiation scientifique scolaire, sortie scolaire botanique 78"
        canonical={SLUG}
      />
      <SchemaOrg type="FAQPage" data={{ questions: faqsScolaires.map((f) => ({ question: f.q, answer: f.a })) }} />
      <SchemaOrg
        type="BreadcrumbList"
        data={{
          items: [
            { name: "Accueil", url: "https://botaniqueludique.com/" },
            { name: "Pro", url: "https://botaniqueludique.com/pro" },
            { name: "Établissements scolaires", url: `https://botaniqueludique.com${SLUG}` },
          ],
        }}
      />
      <SchemaOrg type="EducationalOrganization" data={{}} />
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
              Primaire · Collège · Lycée
            </p>
            <h1 className="font-display text-[clamp(2.2rem,6vw,4.6rem)] uppercase leading-[0.9] tracking-[-2px] text-primary-foreground mb-6">
              Ateliers de botanique<br />
              <span className="text-olive-light">pour les écoles, collèges et lycées</span>
            </h1>
            <p className="font-body text-xl md:text-[22px] italic text-primary-foreground/90 max-w-[700px] mx-auto leading-relaxed mb-10">
              Des interventions en lien avec les programmes de SVT, d'EMC et de géographie, en classe ou en sortie nature, partout en Île-de-France.
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
              <a
                href={PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brutal bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-8 py-3 inline-flex items-center gap-2"
                style={{ borderColor: "hsl(var(--cream))" }}
              >
                <Download className="w-4 h-4" /> La plaquette (PDF)
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <WaveDivider from="hsl(0,0%,10%)" to="hsl(36,33%,93%)" />

      {/* ===== INFOS CLÉS ===== */}
      <section className="px-6 pt-6 pb-16">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 pl-[3px] pt-[3px]">
          {INFOS.map((stat) => (
            <div key={stat.value} className="p-6 text-center border-brutal bg-[hsl(var(--cream))] -ml-[3px] -mt-[3px]">
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="font-display text-lg uppercase mb-1">{stat.value}</div>
              <div className="font-mono-brand text-[9px] uppercase tracking-[2px] text-foreground/55">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FORMATS ===== */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="section-label block mb-3">Formats d'intervention</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] uppercase leading-[0.95] tracking-[-1px]">
              Des formats adaptés <span className="text-primary">à votre projet</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {FORMATS.map((f) => (
              <article key={f.title} className="flex flex-col border-brutal bg-[hsl(var(--cream))]">
                <div className="aspect-[4/3] overflow-hidden border-b-[3px] border-foreground bg-secondary">
                  <img src={f.image} alt={f.alt} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl uppercase tracking-[-0.5px] mb-1">{f.title}</h3>
                  <p className="font-mono-brand text-[9px] uppercase tracking-[2px] text-primary mb-4">{f.duration}</p>
                  <p className="text-sm text-foreground/75 leading-relaxed mb-5 flex-1">{f.desc}</p>
                  <ul className="space-y-2">
                    {f.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground/75">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROGRAMMES + NIVEAUX ===== */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(36,25%,88%)" />
      <section className="pt-10 pb-20 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="section-label block mb-3">Programmes scolaires</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] uppercase leading-[0.95] tracking-[-1px] mb-4">
              En lien avec <span className="text-primary">les programmes</span>
            </h2>
            <p className="text-base text-foreground/70 leading-relaxed max-w-2xl mx-auto">
              Nos interventions croisent sciences du vivant, sciences humaines et création, avec l'ethnobotanique comme fil rouge : chaque plante raconte une histoire humaine.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {PROGRAMMES.map((prog) => (
              <div key={prog.matiere} className="border-brutal p-7 bg-[hsl(var(--cream))]">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-lg uppercase tracking-[-0.5px]">{prog.matiere}</h3>
                </div>
                <ul className="space-y-2">
                  {prog.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground/75">
                      <Leaf className="w-3 h-3 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <AnimatedSection className="text-center mb-10">
            <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] uppercase leading-[0.95] tracking-[-1px]">
              Du CM1 au lycée, <span className="text-primary">et au-delà</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 pl-[3px] pt-[3px]">
            {NIVEAUX.map((n) => (
              <div key={n.level} className="p-6 border-brutal bg-[hsl(var(--cream))] -mt-[3px] -ml-[3px]">
                <h3 className="font-display text-lg uppercase tracking-[-0.5px] mb-1">{n.level}</h3>
                <p className="font-mono-brand text-[9px] uppercase tracking-[2px] text-primary mb-3">{n.classes}</p>
                <p className="text-sm text-foreground/65 leading-relaxed">{n.examples}</p>
              </div>
            ))}
          </div>
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
            {faqsScolaires.map((faq) => (
              <div key={faq.q} className="border-brutal bg-[hsl(var(--cream))] p-6 md:p-7">
                <h3 className="font-display text-base md:text-lg uppercase tracking-[-0.5px] mb-2">{faq.q}</h3>
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-foreground/70">
            Pour aller plus loin :{" "}
            <Link to="/blog/botanique-projet-pedagogique-college" className="underline decoration-2 underline-offset-2 hover:text-primary">
              intégrer la botanique dans un projet de collège
            </Link>
            {" · "}
            <Link to="/blog/plantes-sauvages-sortie-scolaire-ile-de-france" className="underline decoration-2 underline-offset-2 hover:text-primary">
              5 plantes sauvages pour une sortie scolaire
            </Link>
            {" · "}
            <Link to="/pro" className="underline decoration-2 underline-offset-2 hover:text-primary">
              toutes nos offres pro
            </Link>
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(0,0%,10%)" flip />
      <section className="bg-foreground text-primary-foreground px-6 pt-10 pb-24">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="font-mono-brand text-[11px] uppercase tracking-[3px] text-olive-light mb-4">Votre projet pédagogique</p>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] uppercase leading-[0.95] tracking-[-1px] mb-6">
            Un atelier dans <span className="text-olive-light">votre établissement&nbsp;?</span>
          </h2>
          <p className="text-base text-primary-foreground/75 leading-relaxed mb-10 max-w-xl mx-auto">
            Décrivez-nous votre classe, vos objectifs et vos créneaux : devis gratuit et personnalisé sous 48 h.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={CONTACT}
              className="btn-brutal bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-8 py-3 inline-flex items-center gap-2"
              style={{ borderColor: "hsl(var(--cream))" }}
            >
              Demander un devis <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/workshops"
              className="btn-brutal bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-xs px-8 py-3 inline-flex items-center gap-2"
              style={{ borderColor: "hsl(var(--cream))" }}
            >
              Voir tous les ateliers <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <a
            href={PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-10 font-mono-brand text-[11px] uppercase tracking-[2px] text-primary-foreground/70 hover:text-olive-light transition-colors"
          >
            <Download size={14} /> Télécharger la plaquette écoles 2027 (PDF)
          </a>
        </AnimatedSection>
      </section>

      <BackToTop />
      <Footer />
    </div>
  );
};

export default EtablissementsScolaires;
