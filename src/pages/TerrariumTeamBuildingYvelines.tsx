import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import BackToTop from "@/components/BackToTop";
import { Sprout, Clock, Users, MapPin, ArrowRight, Leaf, CheckCircle } from "lucide-react";

const deroulement = [
  { step: "1", title: "Accueil et introduction botanique", desc: "10 min pour présenter le terrarium comme micro-écosystème, son histoire (caisse de Ward au XIXᵉ siècle) et sa logique scientifique." },
  { step: "2", title: "Préparation du bocal", desc: "30 min de mise en place des couches : drainage, charbon actif, substrat. Geste précis, partagé entre les équipes." },
  { step: "3", title: "Composition végétale", desc: "45 min de création libre. Chaque participant·e choisit ses plantes tropicales et compose son paysage miniature." },
  { step: "4", title: "Échange et clôture", desc: "15 min pour partager les créations, expliquer l'entretien et repartir avec son terrarium prêt pour le bureau." }
];

const benefits = [
  { title: "Cohésion concrète", desc: "Le geste manuel partagé crée du lien plus rapidement qu'une activité abstraite. Vos équipes échangent autrement." },
  { title: "Démarche RSE crédible", desc: "Atelier zéro déchet, matériel végétal local, ancrage scientifique. Aligné avec vos engagements environnementaux." },
  { title: "Souvenir durable", desc: "Chacun·e repart avec son terrarium qui rejoindra son bureau. Un rappel visuel quotidien de l'expérience d'équipe." },
  { title: "QVCT mesurable", desc: "Atelier sensoriel et créatif, baisse mesurable du stress sur les 2 heures. Format apprécié en pause séminaire." }
];

const faqs = [
  { q: "Qu'est-ce qu'un team building terrarium ?", a: "Le team building terrarium est un atelier de cohésion d'équipe où chaque collaborateur·ice compose un écosystème végétal miniature scellé sous verre. Durée 2h, format 10 à 30 personnes, animé par une botaniste sur le lieu de l'entreprise. Hérité des caisses de Ward du XIXᵉ siècle." },
  { q: "Quel format pour un terrarium team building dans les Yvelines ?", a: "Le format standard fait 2h, idéal en pause séminaire ou en after-work. Pour les groupes plus créatifs, le format demi-journée (3h) permet d'aller plus loin dans la composition." },
  { q: "Combien de personnes maximum ?", a: "Jusqu'à 30 personnes en simultané avec une animatrice. Au-delà, nous fonctionnons en double animatrice ou en rotations. Idéal pour les équipes projet de Vélizy, Guyancourt ou Saint-Quentin-en-Yvelines." },
  { q: "Vous fournissez tout le matériel ?", a: "Oui, bocaux, substrats, plantes tropicales (Fittonia, Pilea, mousses), outils de plantation, tabliers et protections. Vous n'avez à prévoir que les tables et l'accès eau." },
  { q: "Quel tarif indicatif pour un terrarium d'entreprise ?", a: "Entre 40 et 60 euros par personne selon le nombre de participant·es, le format et le lieu d'intervention dans le 78. Devis personnalisé après échange." },
  { q: "Dans quelles villes des Yvelines intervenez-vous ?", a: "Nous intervenons dans tout le 78 depuis notre base au Pecq : Vélizy-Villacoublay (15 min), Saint-Quentin-en-Yvelines (25 min), Guyancourt (25 min), Versailles (15 min), Poissy (15 min), Saint-Germain-en-Laye (5 min), Montigny-le-Bretonneux, Houilles, Sartrouville, Maisons-Laffitte." },
  { q: "Combien de temps pour venir dans nos locaux depuis Le Pecq ?", a: "10 à 30 minutes selon votre ville dans le 78. Le déplacement est inclus dans le devis pour toutes les villes des Yvelines, sans surcoût parisien. C'est notre différence avec un prestataire basé à Paris." }
];

const reperesData = [
  { label: "Durée", value: "2h (court) à 3h (demi-journée)" },
  { label: "Effectif", value: "10 à 30 personnes, jusqu'à 60 en double animation" },
  { label: "Tarif", value: "40 à 60 € par personne, déplacement 78 inclus" },
  { label: "Lieu", value: "Dans vos locaux, partout dans les Yvelines (78)" },
  { label: "Matériel", value: "Tout fourni : bocaux, substrats, plantes, outils" },
  { label: "Animation", value: "Botaniste formée, approche ethnobotanique EHESS" }
];

const TerrariumTeamBuildingYvelines = () => (
  <div className="min-h-screen bg-[hsl(var(--cream))]">
    <SEO
      title="Team Building Terrarium Yvelines (78), entreprise 78"
      description="Atelier terrarium team building pour entreprises dans les Yvelines. Vélizy, Saint-Quentin-en-Yvelines, Guyancourt, Poissy. Matériel fourni, déplacement sur site."
      keywords="team building terrarium yvelines, atelier terrarium entreprise 78, terrarium vélizy, terrarium saint-quentin-en-yvelines, terrarium guyancourt, terrarium team building 78"
      canonical="/terrarium-team-building-yvelines"
      region="FR-IDF"
      city="Le Pecq"
    />
    <SchemaOrg type="Service" data={{ serviceType: "Team building terrarium en entreprise", name: "Atelier Terrarium Team Building Yvelines (78)", description: "Atelier terrarium pour entreprises du 78. Création d'un micro-écosystème végétal en équipe." }} />
    <SchemaOrg type="LocalBusiness" data={{ areaServed: [{ "@type": "AdministrativeArea", "name": "Yvelines" }, { "@type": "City", "name": "Vélizy-Villacoublay" }, { "@type": "City", "name": "Saint-Quentin-en-Yvelines" }, { "@type": "City", "name": "Guyancourt" }, { "@type": "City", "name": "Poissy" }, { "@type": "City", "name": "Saint-Germain-en-Laye" }] }} />
    <SchemaOrg type="FAQPage" data={{ questions: faqs.map(f => ({ question: f.q, answer: f.a })) }} />
    <SchemaOrg type="BreadcrumbList" data={{ items: [{ name: "Accueil", url: "https://botaniqueludique.com/" }, { name: "Pro", url: "https://botaniqueludique.com/pro" }, { name: "Terrarium Team Building Yvelines", url: "https://botaniqueludique.com/terrarium-team-building-yvelines" }] }} />
    <Navigation />

    <section className="pt-36 pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-6">Team building · Yvelines (78)</span>
        <h1 className="font-display text-[clamp(2rem,5vw,4rem)] uppercase leading-[0.9] tracking-[-2px] text-[hsl(var(--black))] mb-6 max-w-4xl">
          Team building terrarium en entreprise, Yvelines
        </h1>
        <p className="text-lg leading-relaxed text-[hsl(var(--black))]/70 mb-4 max-w-3xl">
          Un atelier botanique de 2h pour vos équipes du 78. Chaque participant·e construit son terrarium, un micro-écosystème scellé hérité des caisses de Ward du XIXᵉ siècle. Format apprécié en séminaire, semaine QVCT ou after-work.
        </p>
        <p className="text-base leading-relaxed text-[hsl(var(--black))]/60 mb-8 max-w-3xl">
          Notre atelier est basé au Pecq. Nous intervenons directement dans vos locaux à Vélizy-Villacoublay, Saint-Quentin-en-Yvelines, Guyancourt, Poissy et Saint-Germain-en-Laye.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/pro#devis" className="btn-brutal bg-[hsl(var(--olive))] text-[hsl(var(--cream))] border-[hsl(var(--black))] inline-flex items-center gap-2 justify-center">
            Demander un devis <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="mailto:contact@botaniqueludique.com" className="btn-brutal bg-[hsl(var(--cream))] text-[hsl(var(--black))] border-[hsl(var(--black))] inline-flex items-center gap-2 justify-center">
            Nous écrire
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-0">
          {[{ icon: Clock, value: "2h", label: "Durée" }, { icon: Users, value: "10–30", label: "Participants" }, { icon: Sprout, value: "Tropical", label: "Plantes" }, { icon: MapPin, value: "Sur site", label: "Lieu" }].map((s, i) => (
            <div key={i} className="p-6 border-brutal text-center -mt-[3px] -ml-[3px] bg-[hsl(var(--cream))]">
              <s.icon className="w-5 h-5 text-[hsl(var(--olive))] mx-auto mb-2" />
              <div className="font-display text-2xl text-[hsl(var(--black))] mb-1">{s.value}</div>
              <div className="font-mono-brand text-[9px] uppercase tracking-[2px] text-[hsl(var(--black))]/50">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 px-4 md:px-8 bg-[hsl(var(--cream))] border-t-[3px] border-b-[3px] border-[hsl(var(--black))]">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.2fr] gap-12">
        <div>
          <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-4">Définition</span>
          <h2 className="font-display text-2xl md:text-3xl uppercase leading-[1] tracking-[-1px] text-[hsl(var(--black))] mb-4">Team building terrarium</h2>
          <p className="text-base leading-relaxed text-[hsl(var(--black))]/75">
            Atelier de cohésion d'équipe en entreprise où chaque participant·e compose un écosystème végétal miniature scellé sous verre. Format de 2h, 10 à 30 personnes, animé sur le lieu de travail par une botaniste. Hérité des caisses de Ward, dispositifs scientifiques du XIXᵉ siècle conçus pour transporter des plantes tropicales par bateau.
          </p>
        </div>
        <div>
          <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-4">Repères chiffrés</span>
          <table className="w-full border-brutal bg-[hsl(var(--cream))]">
            <tbody>
              {reperesData.map((r, i) => (
                <tr key={i} className="border-b-[3px] border-[hsl(var(--black))] last:border-b-0">
                  <th scope="row" className="text-left p-3 font-mono-brand text-[10px] uppercase tracking-[2px] text-[hsl(var(--black))]/60 align-top w-32 border-r-[3px] border-[hsl(var(--black))]">{r.label}</th>
                  <td className="p-3 text-sm text-[hsl(var(--black))] leading-relaxed">{r.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section className="py-20 px-4 md:px-8 bg-[hsl(var(--black))] text-[hsl(var(--cream))]">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive-light))] block mb-4">Bénéfices RSE et QVCT</span>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] uppercase leading-[0.9] tracking-[-1px] mb-16">
            Pourquoi le terrarium<br /><span className="text-[hsl(var(--olive-light))]">en entreprise</span>
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-0">
          {benefits.map((b, i) => (
            <div key={i} className="border-brutal border-[hsl(var(--cream))] -ml-[3px] -mt-[3px] p-8">
              <CheckCircle className="w-5 h-5 text-[hsl(var(--olive-light))] mb-4" />
              <h3 className="font-display text-xl uppercase mb-3">{b.title}</h3>
              <p className="text-sm leading-relaxed opacity-80">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-4">Déroulé de l'atelier</span>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] uppercase leading-[0.9] tracking-[-1px] text-[hsl(var(--black))] mb-12">
            2 heures, 4 temps
          </h2>
        </AnimatedSection>
        <div className="space-y-0">
          {deroulement.map((d, i) => (
            <div key={i} className="border-brutal -mt-[3px] p-8 bg-[hsl(var(--cream))] grid md:grid-cols-[100px_1fr] gap-6">
              <div className="font-display text-5xl text-[hsl(var(--olive))]">{d.step}</div>
              <div>
                <h3 className="font-display text-lg uppercase mb-2 text-[hsl(var(--black))]">{d.title}</h3>
                <p className="text-sm leading-relaxed text-[hsl(var(--black))]/70">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 px-4 md:px-8 bg-[hsl(var(--green-pale))]">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-4">Questions fréquentes</span>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] uppercase leading-[0.9] tracking-[-1px] text-[hsl(var(--black))] mb-12">Tout savoir</h2>
        </AnimatedSection>
        <div className="space-y-0">
          {faqs.map((f, i) => (
            <details key={i} className="border-brutal -mt-[3px] bg-[hsl(var(--cream))] group">
              <summary className="p-6 cursor-pointer font-display text-base md:text-lg uppercase tracking-tight text-[hsl(var(--black))] flex justify-between items-center gap-4">
                <span>{f.q}</span>
                <span className="font-mono-brand text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-[hsl(var(--black))]/70 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 px-4 md:px-8 bg-[hsl(var(--olive))] text-[hsl(var(--cream))]">
      <div className="max-w-4xl mx-auto text-center">
        <Leaf className="w-10 h-10 mx-auto mb-6 text-[hsl(var(--cream))]/80" />
        <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] uppercase leading-[0.9] tracking-[-1px] mb-6">Un atelier terrarium pour vos équipes ?</h2>
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">Parlons de votre groupe, votre date et votre lieu. Devis personnalisé après notre échange.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/pro#devis" className="btn-brutal bg-[hsl(var(--cream))] text-[hsl(var(--black))] border-[hsl(var(--cream))] inline-flex items-center gap-2 justify-center">Demander un devis <ArrowRight className="w-4 h-4" /></Link>
          <Link to="/team-building-entreprise-yvelines" className="btn-brutal bg-transparent text-[hsl(var(--cream))] border-[hsl(var(--cream))] inline-flex items-center gap-2 justify-center">Voir tous nos formats 78</Link>
        </div>
      </div>
    </section>

    <Footer />
    <BackToTop />
  </div>
);

export default TerrariumTeamBuildingYvelines;
