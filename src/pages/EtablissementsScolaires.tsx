import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import BackToTop from "@/components/BackToTop";
import { GraduationCap, BookOpen, MapPin, ArrowRight, CheckCircle, Clock, Users, Leaf } from "lucide-react";

const faqsScolaires = [
  {
    q: "Comment organiser une intervention dans notre établissement ?",
    a: "Contactez-nous par email ou téléphone. Nous échangerons sur vos objectifs pédagogiques, le nombre d'élèves et les créneaux possibles. Nous vous envoyons un devis personnalisé sous 48 h. Nous intervenons dans les Yvelines (78), les Hauts-de-Seine (92), le Val-d'Oise (95) et à Paris."
  },
  {
    q: "Les ateliers sont-ils conformes aux programmes scolaires ?",
    a: "Oui, chaque atelier est conçu en lien avec les programmes officiels de SVT (biodiversité, écosystèmes, espèces invasives), d'EMC (développement durable, responsabilité environnementale) et de géographie (aménagement du territoire, enjeux environnementaux). Nous fournissons une fiche pédagogique détaillée en amont."
  },
  {
    q: "Quel est le coût d'une intervention et existe-t-il des financements ?",
    a: "Les tarifs dépendent du format (demi-journée, journée, cycle), du nombre d'élèves et du lieu. Plusieurs dispositifs de financement existent : budget du Fonds citoyen, conventions avec la Région Île-de-France, subventions communales pour les projets éducatifs, ou budget propre de l'établissement. Nous vous aidons à identifier les financements adaptés."
  },
  {
    q: "Faut-il un espace particulier pour accueillir l'atelier ?",
    a: "Non, nous nous adaptons à vos locaux : salle de classe, salle polyvalente, cour de récréation ou espace vert à proximité. Tout le matériel est fourni. Pour les sorties terrain, nous organisons des balades botaniques dans les parcs et forêts à proximité de votre établissement."
  },
  {
    q: "Combien d'élèves peuvent participer en même temps ?",
    a: "L'idéal est un groupe de 15 à 25 élèves (une demi-classe ou une classe entière selon l'atelier). Pour les classes de 30+, nous organisons des rotations en demi-groupes. Des animateurs supplémentaires peuvent être mobilisés pour les grands effectifs."
  }
];

const EtablissementsScolaires = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SEO
        title="Ateliers botanique collèges & lycées Île-de-France — Botanique Ludique"
        description="Interventions pédagogiques botaniques pour collèges et lycées. Animation SVT, sortie scolaire nature Yvelines, médiation scientifique. De la 6e à la Terminale."
        keywords="atelier botanique collège, intervention pédagogique botanique, sortie scolaire nature Yvelines, animation SVT plantes, médiation scientifique scolaire, sortie scolaire botanique 78"
        canonical="/etablissements-scolaires"
      />
      <SchemaOrg
        type="FAQPage"
        data={{ questions: faqsScolaires.map(f => ({ question: f.q, answer: f.a })) }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        data={{ items: [
          { name: "Accueil", url: "https://botaniqueludique.com/" },
          { name: "Pro", url: "https://botaniqueludique.com/pro" },
          { name: "Établissements scolaires", url: "https://botaniqueludique.com/etablissements-scolaires" }
        ]}}
      />
      <SchemaOrg
        type="EducationalOrganization"
        data={{}}
      />
      <Navigation />

      {/* HERO with CTA visible sans scroller */}
      <section className="pt-36 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-6">
                Interventions pédagogiques · Collèges & Lycées
              </span>
              <h1 className="font-display text-[clamp(2rem,5vw,4rem)] uppercase leading-[0.9] tracking-[-2px] text-[hsl(var(--black))] mb-6">
                Ateliers de botanique pour collèges et lycées en Île-de-France
              </h1>
              <p className="text-lg leading-relaxed text-[hsl(var(--black))]/70 mb-6">
                Botanique Ludique propose des interventions pédagogiques en botanique adaptées aux programmes de SVT, EMC et géographie, de la 6e à la Terminale. Sortie scolaire nature dans les Yvelines, animation SVT plantes en classe ou médiation scientifique scolaire : chaque format est conçu pour éveiller la curiosité des élèves.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="btn-brutal bg-[hsl(var(--olive))] text-[hsl(var(--cream))] border-[hsl(var(--black))] inline-flex items-center gap-2 justify-center"
                >
                  Demander un devis gratuit <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="mailto:contact@botaniqueludique.com"
                  className="btn-brutal bg-[hsl(var(--cream))] text-[hsl(var(--black))] border-[hsl(var(--black))] inline-flex items-center gap-2 justify-center"
                >
                  contact@botaniqueludique.com
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-0">
                {[
                  { value: "6e–Terminale", label: "Niveaux couverts", icon: GraduationCap },
                  { value: "15–25", label: "Élèves par groupe", icon: Users },
                  { value: "1h30–6h", label: "Durée modulable", icon: Clock },
                  { value: "4 depts", label: "Zone d'intervention", icon: MapPin },
                ].map((stat, i) => (
                  <div key={i} className="p-6 border-brutal text-center -mt-[3px] -ml-[3px] hover:bg-[hsl(var(--green-pale))] transition-colors">
                    <stat.icon className="w-5 h-5 text-[hsl(var(--olive))] mx-auto mb-2" />
                    <div className="font-display text-2xl text-[hsl(var(--black))] mb-1">{stat.value}</div>
                    <div className="font-mono-brand text-[9px] uppercase tracking-[2px] text-[hsl(var(--black))]/50">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMATS PROPOSÉS */}
      <section className="py-20 px-4 md:px-8 bg-[hsl(var(--black))] text-[hsl(var(--cream))]">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive-light))] block mb-4">Formats d'intervention</span>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] uppercase leading-[0.9] tracking-[-1px] mb-16">
              Des formats adaptés<br /><span className="text-[hsl(var(--olive-light))]">à vos besoins</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Demi-journée en classe",
                duration: "1h30 à 3h",
                desc: "Intervention en salle avec atelier pratique : atelier botanique collège avec création de kokedama, teinture végétale ou terrarium. Matériel fourni, chaque élève repart avec sa création.",
                items: ["Présentation théorique illustrée", "Atelier pratique guidé", "Création individuelle à emporter"]
              },
              {
                title: "Sortie terrain",
                duration: "Demi-journée ou journée",
                desc: "Sortie scolaire nature dans les Yvelines ou en forêt francilienne. Identification de plantes sauvages, collecte pour herbier, sortie scolaire botanique 78 avec approche ethnobotanique.",
                items: ["Balade guidée d'identification", "Collecte et observation", "Carnet de terrain fourni"]
              },
              {
                title: "Cycle pluridisciplinaire",
                duration: "3 à 6 séances",
                desc: "Programme sur plusieurs semaines croisant SVT, arts plastiques et géographie. Intervention pédagogique botanique approfondie avec restitution en fin de cycle.",
                items: ["Programme personnalisé", "Fiche pédagogique par séance", "Restitution finale"]
              }
            ].map((format, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="border border-[hsl(var(--cream))]/20 p-8 hover:border-[hsl(var(--olive-light))] transition-colors h-full flex flex-col">
                  <h3 className="font-display text-xl uppercase tracking-[-0.5px] mb-2">{format.title}</h3>
                  <p className="font-mono-brand text-[9px] uppercase tracking-[2px] text-[hsl(var(--olive-light))] mb-4">{format.duration}</p>
                  <p className="text-sm text-[hsl(var(--cream))]/70 leading-relaxed mb-6 flex-1">{format.desc}</p>
                  <ul className="space-y-2">
                    {format.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-[hsl(var(--cream))]/60">
                        <CheckCircle className="w-4 h-4 text-[hsl(var(--olive-light))] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* LIENS AVEC LES PROGRAMMES */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-4">Programmes scolaires</span>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] uppercase leading-[0.9] tracking-[-1px] text-[hsl(var(--black))] mb-6">
              En lien avec<br /><span className="text-[hsl(var(--olive))]">les programmes</span>
            </h2>
            <p className="text-base text-[hsl(var(--black))]/70 leading-relaxed mb-12 max-w-2xl">
              Chaque animation SVT plantes est conçue pour s'intégrer dans le programme officiel. Nos interventions croisent sciences du vivant, sciences humaines et création artistique pour une approche pluridisciplinaire.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { matiere: "SVT", items: ["Biodiversité et écosystèmes (cycle 4)", "Espèces exotiques envahissantes", "Reproduction et cycle de vie des plantes", "Développement durable et impact humain"] },
              { matiere: "EMC", items: ["Responsabilité environnementale", "Engagement citoyen et écologie", "Transition écologique", "Droits et devoirs envers le vivant"] },
              { matiere: "Géographie", items: ["Aménagement du territoire et espaces verts", "Enjeux environnementaux locaux", "Agriculture et alimentation durable", "Urbanisation et biodiversité"] },
              { matiere: "Arts & Lettres", items: ["Land art et création végétale", "Herbier artistique et scientifique", "Teinture végétale et histoire des pigments", "Écriture et observation naturaliste"] }
            ].map((prog, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="border-brutal p-8 bg-[hsl(var(--cream))] hover:bg-[hsl(var(--green-pale))] transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="w-5 h-5 text-[hsl(var(--olive))]" />
                    <h3 className="font-display text-lg uppercase tracking-[-0.5px] text-[hsl(var(--black))]">{prog.matiere}</h3>
                  </div>
                  <ul className="space-y-2">
                    {prog.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-[hsl(var(--black))]/70">
                        <Leaf className="w-3 h-3 text-[hsl(var(--olive))] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* NIVEAUX COUVERTS */}
      <section className="py-20 px-4 md:px-8 bg-[hsl(var(--cream-dark))]">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-4">Niveaux</span>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] uppercase leading-[0.9] tracking-[-1px] text-[hsl(var(--black))] mb-12">
              De la 6e à la Terminale<br /><span className="text-[hsl(var(--olive))]">et au-delà</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-0">
            {[
              { level: "Cycle 3", classes: "CM1-CM2 / 6e", examples: "Herbier, bombes à graines, découverte sensorielle" },
              { level: "Cycle 4", classes: "5e – 3e", examples: "Teinture végétale, espèces invasives, ethnobotanique" },
              { level: "Lycée", classes: "2de – Terminale", examples: "Biodiversité, sortie terrain, projet pluridisciplinaire" },
              { level: "BTS / Supérieur", classes: "Post-bac", examples: "Médiation scientifique, conférence, module spécialisé" },
            ].map((level, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="p-6 border-brutal bg-[hsl(var(--cream))] -mt-[3px] -ml-[3px] h-full">
                  <h3 className="font-display text-lg uppercase tracking-[-0.5px] text-[hsl(var(--black))] mb-1">{level.level}</h3>
                  <p className="font-mono-brand text-[9px] uppercase tracking-[2px] text-[hsl(var(--olive))] mb-3">{level.classes}</p>
                  <p className="text-sm text-[hsl(var(--black))]/60 leading-relaxed">{level.examples}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FINANCEMENT */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-4">Financement</span>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] uppercase leading-[0.9] tracking-[-1px] text-[hsl(var(--black))] mb-6">
              Modalités de<br /><span className="text-[hsl(var(--olive))]">financement</span>
            </h2>
            <p className="text-base text-[hsl(var(--black))]/70 leading-relaxed mb-12 max-w-2xl">
              Plusieurs dispositifs permettent de financer une intervention pédagogique botanique dans votre établissement scolaire en Île-de-France.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Fonds citoyen", desc: "Le Fonds citoyen finance des projets éducatifs de médiation scientifique scolaire, incluant les ateliers nature et les sorties terrain." },
              { title: "Conventions Région IDF", desc: "La Région Île-de-France propose des conventions pour les projets pédagogiques liés à l'environnement et à la biodiversité." },
              { title: "Budget communal", desc: "Les communes et intercommunalités financent régulièrement des interventions nature dans les établissements scolaires de leur territoire." },
              { title: "Budget propre / Coopérative", desc: "Le budget de l'établissement, la coopérative scolaire ou l'association de parents d'élèves peuvent prendre en charge tout ou partie de l'intervention." },
            ].map((fin, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="border-brutal p-8 bg-[hsl(var(--cream))] hover:bg-[hsl(var(--green-pale))] transition-colors">
                  <h3 className="font-display text-base uppercase tracking-[-0.5px] text-[hsl(var(--black))] mb-3">{fin.title}</h3>
                  <p className="text-sm text-[hsl(var(--black))]/60 leading-relaxed">{fin.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 md:px-8 bg-[hsl(var(--cream-dark))]">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-4">FAQ</span>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] uppercase leading-[0.9] tracking-[-1px] text-[hsl(var(--black))] mb-12">
              Questions<br /><span className="text-[hsl(var(--olive))]">fréquentes</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {faqsScolaires.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="border-brutal bg-[hsl(var(--cream))] p-6 md:p-8">
                  <h3 className="font-display text-base md:text-lg uppercase tracking-[-0.5px] text-[hsl(var(--black))] mb-3 flex items-start gap-3">
                    <span className="font-mono-brand text-[10px] text-[hsl(var(--olive))] mt-1 shrink-0">0{i + 1}</span>
                    {faq.q}
                  </h3>
                  <p className="text-sm md:text-base text-[hsl(var(--black))]/70 leading-relaxed pl-8">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ZONE D'INTERVENTION */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-display text-2xl uppercase tracking-[-0.5px] text-[hsl(var(--black))] mb-8">Zone d'intervention</h2>
            <p className="text-sm text-[hsl(var(--black))]/60 mb-6">Nous intervenons dans les établissements scolaires des départements suivants :</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Paris (75)", "Yvelines (78)", "Hauts-de-Seine (92)", "Val-d'Oise (95)", "Saint-Germain-en-Laye", "Le Pecq", "Chatou", "Versailles", "Nanterre", "Cergy", "Pontoise"].map((city) => (
                <span key={city} className="inline-flex items-center gap-1 border-brutal px-4 py-2 text-sm text-[hsl(var(--black))] hover:bg-[hsl(var(--green-pale))] transition-colors">
                  <MapPin className="w-3 h-3 text-[hsl(var(--olive))]" />{city}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* LIENS INTERNES */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="border-brutal bg-[hsl(var(--green-pale))] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-mono-brand text-[10px] uppercase tracking-[2px] text-[hsl(var(--olive))] mb-2">Aller plus loin</p>
              <h3 className="font-display text-xl md:text-2xl uppercase tracking-[-0.5px] text-[hsl(var(--black))]">
                Découvrez aussi nos <Link to="/workshops" className="underline text-[hsl(var(--olive))]">ateliers pour tous publics</Link>
              </h3>
              <p className="text-sm text-[hsl(var(--black))]/60 mt-2">
                Consultez également notre <Link to="/pro" className="underline text-[hsl(var(--olive))]">offre complète pour professionnels et institutions</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[hsl(var(--olive))] py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl md:text-3xl uppercase text-[hsl(var(--black))]">
              Envie d'un atelier botanique dans votre collège ou lycée ?
            </h2>
            <p className="text-sm text-[hsl(var(--black))]/60 mt-1">
              Devis gratuit et personnalisé sous 48 h.
            </p>
          </div>
          <Link
            to="/contact"
            className="btn-brutal bg-[hsl(var(--black))] text-[hsl(var(--cream))] border-[hsl(var(--black))] hover:bg-[hsl(var(--cream))] hover:text-[hsl(var(--black))] text-sm px-9 py-4 flex-shrink-0"
          >
            Nous contacter →
          </Link>
        </div>
      </section>

      <BackToTop />
      <Footer />
    </div>
  );
};

export default EtablissementsScolaires;
