import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import BackToTop from "@/components/BackToTop";
import { Leaf, Clock, Users, MapPin, ArrowRight, CheckCircle, Sprout } from "lucide-react";

const deroulement = [
  { step: "1", title: "Présentation du kokedama", desc: "15 min sur l'origine japonaise du kokedama, son lien avec l'art bonsaï et sa philosophie wabi-sabi. Pose le cadre culturel de l'atelier." },
  { step: "2", title: "Préparation du substrat", desc: "30 min de manipulation à plusieurs mains : mélange de terreau argileux, façonnage en sphère. Geste artisanal et tactile partagé." },
  { step: "3", title: "Enveloppement plante et mousse", desc: "45 min de création. Chaque participant·e choisit sa plante d'intérieur, l'enracine dans la sphère et l'habille de mousse vivante." },
  { step: "4", title: "Tissage et finition", desc: "30 min pour ficeler le kokedama avec une cordelette naturelle. Présentation des créations, conseils d'entretien et photo d'équipe." }
];

const benefits = [
  { title: "Geste artisanal partagé", desc: "Le modelage de la sphère demande de l'attention et de la patience. Idéal pour faire baisser la pression mentale après une journée de réunions." },
  { title: "Symbolique d'ancrage", desc: "Le kokedama, racines visibles enveloppées de mousse, devient une métaphore parlante de l'ancrage d'équipe et de la croissance partagée." },
  { title: "Format zen et discret", desc: "Activité calme, sans bruit, sans compétition. Convient aux équipes introverties, aux profils tech, aux séminaires intellectuellement chargés." },
  { title: "Objet bureau durable", desc: "Le kokedama vit plusieurs mois sur un bureau. Présence végétale quotidienne qui prolonge l'expérience d'équipe au-delà de l'atelier." }
];

const faqs = [
  { q: "Qu'est-ce qu'un atelier kokedama en entreprise ?", a: "Le kokedama est un art végétal japonais où une plante est enracinée dans une sphère de substrat enveloppée de mousse vivante. En entreprise, l'atelier kokedama dure 2h30, accueille 10 à 25 collaborateur·ices et se déroule sur le lieu de travail. Il combine geste artisanal lent, esthétique wabi-sabi et symbolique d'ancrage d'équipe." },
  { q: "Le kokedama convient-il à toutes les équipes en entreprise ?", a: "Oui, particulièrement aux équipes cherchant un format calme et créatif. Très apprécié dans les sièges tech de Vélizy, les centres R&D de Guyancourt et les sièges PME de Saint-Germain-en-Laye." },
  { q: "Combien de personnes par session ?", a: "Idéalement 10 à 25 personnes. Au-delà, nous mobilisons une seconde animatrice ou organisons deux sessions en parallèle. Format apprécié des équipes de 10 à 60 dans le 78." },
  { q: "Quelle durée prévoir ?", a: "Le format standard fait 2h30, ce qui permet à chacun·e de finir son kokedama sereinement. Une version courte de 2h reste possible pour insertion en séminaire." },
  { q: "Plantes utilisées et entretien ?", a: "Plantes d'intérieur résistantes : Asplenium, lierre, Ficus pumila. Arrosage par immersion toutes les 2 semaines. Fiche d'entretien remise à chaque participant·e." },
  { q: "Tarif pour un atelier kokedama d'entreprise dans les Yvelines ?", a: "Entre 45 et 65 euros par personne selon le format, le nombre de participant·es et le lieu. Devis personnalisé après échange sur votre projet." },
  { q: "Dans quelles villes du 78 vous déplacez-vous ?", a: "Depuis notre base au Pecq, nous intervenons dans toutes les Yvelines : Vélizy-Villacoublay (15 min), Saint-Quentin-en-Yvelines (25 min), Guyancourt (25 min), Versailles (15 min), Poissy (15 min), Saint-Germain-en-Laye (5 min), Montigny-le-Bretonneux, Maisons-Laffitte. Déplacement inclus dans le devis." },
  { q: "Pourquoi un prestataire local plutôt que parisien ?", a: "Proximité directe avec votre site (10 à 30 minutes), pas de surcoût Paris, connaissance du tissu RH du 78, disponibilité plus large pour les créneaux courts (after-work, pause midi). C'est une logique RSE de prestataire local privilégié." }
];

const reperesData = [
  { label: "Durée", value: "2h (court) à 2h30 (standard)" },
  { label: "Effectif", value: "10 à 25 personnes, jusqu'à 60 en double animation" },
  { label: "Tarif", value: "45 à 65 € par personne, déplacement 78 inclus" },
  { label: "Lieu", value: "Dans vos locaux, partout dans les Yvelines (78)" },
  { label: "Matériel", value: "Tout fourni : substrats, plantes, mousse, cordelettes" },
  { label: "Origine", value: "Art végétal japonais, philosophie wabi-sabi" }
];

const KokedamaCohesionEquipeYvelines = () => (
  <div className="min-h-screen bg-[hsl(var(--cream))]">
    <SEO
      title="Atelier Kokedama Cohésion d'Équipe Yvelines (78)"
      description="Atelier kokedama cohésion d'équipe en entreprise dans le 78. Art végétal japonais pour vos équipes à Vélizy, SQY, Guyancourt, Poissy, Saint-Germain-en-Laye."
      keywords="atelier kokedama entreprise yvelines, kokedama cohésion équipe 78, kokedama team building vélizy, atelier zen entreprise saint-quentin-en-yvelines, kokedama guyancourt"
      canonical="/kokedama-cohesion-equipe-yvelines"
      region="FR-IDF"
      city="Le Pecq"
    />
    <SchemaOrg type="Service" data={{ serviceType: "Atelier kokedama cohésion d'équipe", name: "Atelier Kokedama Cohésion Équipe Yvelines (78)", description: "Atelier kokedama, art végétal japonais, pour la cohésion d'équipe en entreprise dans le 78." }} />
    <SchemaOrg type="LocalBusiness" data={{ areaServed: [{ "@type": "AdministrativeArea", "name": "Yvelines" }, { "@type": "City", "name": "Vélizy-Villacoublay" }, { "@type": "City", "name": "Saint-Quentin-en-Yvelines" }, { "@type": "City", "name": "Guyancourt" }, { "@type": "City", "name": "Poissy" }, { "@type": "City", "name": "Saint-Germain-en-Laye" }] }} />
    <SchemaOrg type="FAQPage" data={{ questions: faqs.map(f => ({ question: f.q, answer: f.a })) }} />
    <SchemaOrg type="BreadcrumbList" data={{ items: [{ name: "Accueil", url: "https://botaniqueludique.com/" }, { name: "Pro", url: "https://botaniqueludique.com/pro" }, { name: "Kokedama Cohésion Équipe Yvelines", url: "https://botaniqueludique.com/kokedama-cohesion-equipe-yvelines" }] }} />
    <Navigation />

    <section className="pt-36 pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-6">Cohésion d'équipe · Yvelines (78)</span>
        <h1 className="font-display text-[clamp(2rem,5vw,4rem)] uppercase leading-[0.9] tracking-[-2px] text-[hsl(var(--black))] mb-6 max-w-4xl">
          Atelier kokedama cohésion d'équipe, Yvelines
        </h1>
        <p className="text-lg leading-relaxed text-[hsl(var(--black))]/70 mb-4 max-w-3xl">
          Le kokedama, art végétal japonais, devient un outil de cohésion puissant. Vos équipes du 78 façonnent ensemble une sphère de mousse et de racines, geste lent qui invite à l'écoute et au partage.
        </p>
        <p className="text-base leading-relaxed text-[hsl(var(--black))]/60 mb-8 max-w-3xl">
          Atelier basé au Pecq. Déplacement direct dans vos locaux à Vélizy-Villacoublay, Saint-Quentin-en-Yvelines, Guyancourt, Poissy ou Saint-Germain-en-Laye.
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
          {[{ icon: Clock, value: "2h30", label: "Durée" }, { icon: Users, value: "10–25", label: "Participants" }, { icon: Leaf, value: "Japon", label: "Origine" }, { icon: MapPin, value: "Sur site", label: "Lieu" }].map((s, i) => (
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
          <h2 className="font-display text-2xl md:text-3xl uppercase leading-[1] tracking-[-1px] text-[hsl(var(--black))] mb-4">Atelier kokedama en entreprise</h2>
          <p className="text-base leading-relaxed text-[hsl(var(--black))]/75">
            Art végétal japonais où une plante est enracinée dans une sphère de substrat enveloppée de mousse vivante. En cohésion d'équipe, l'atelier dure 2h30, accueille 10 à 25 collaborateur·ices sur leur lieu de travail. Le geste lent du modelage et de la ligature porte une symbolique d'ancrage, d'écoute et de croissance partagée.
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
          <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive-light))] block mb-4">Bénéfices QVCT</span>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] uppercase leading-[0.9] tracking-[-1px] mb-16">
            Pourquoi le kokedama<br /><span className="text-[hsl(var(--olive-light))]">crée du lien</span>
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
            2h30, 4 temps
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
        <Sprout className="w-10 h-10 mx-auto mb-6 text-[hsl(var(--cream))]/80" />
        <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] uppercase leading-[0.9] tracking-[-1px] mb-6">Un kokedama pour souder votre équipe ?</h2>
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">Parlons de votre projet : équipe, date, lieu dans le 78. Devis personnalisé après échange.</p>
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

export default KokedamaCohesionEquipeYvelines;
