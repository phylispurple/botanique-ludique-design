import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import BackToTop from "@/components/BackToTop";
import { TreePine, Clock, Users, MapPin, ArrowRight, CheckCircle, Leaf } from "lucide-react";

const parcours = [
  { step: "1", title: "Brief biodiversité", desc: "15 min d'introduction sur la flore locale autour de votre site. Pose les enjeux écologiques du territoire 78 et le cadre RSE de l'atelier." },
  { step: "2", title: "Parcours guidé", desc: "1h30 de marche en petits groupes dans un parc ou bois proche de vos locaux. Lecture ethnobotanique de 8 à 12 plantes rencontrées." },
  { step: "3", title: "Carnet de terrain", desc: "30 min d'observation et de prise de notes. Chacun·e repart avec un carnet d'identification illustré, support concret de l'expérience." },
  { step: "4", title: "Débrief RSE", desc: "30 min d'échange sur les leviers d'action écologique dans votre entreprise. Connexion entre balade et engagements RSE concrets." }
];

const benefits = [
  { title: "Démarche RSE incarnée", desc: "Pas de greenwashing : une expérience sensorielle vraie qui ancre vos engagements environnementaux dans le réel. Particulièrement adapté à la Semaine RSE ou au lancement d'un rapport extra-financier." },
  { title: "QVCT en plein air", desc: "Marche douce, exposition à la lumière naturelle, baisse mesurée du cortisol. La balade botanique cumule les bénéfices physiologiques et cognitifs." },
  { title: "Approche scientifique", desc: "Animation par une ethnobotaniste formée à l'EHESS. Contenu rigoureux, références anthropologiques, posture qui crédibilise votre démarche auprès des équipes exigeantes." },
  { title: "Empreinte minimale", desc: "Format zéro déchet, déplacement en bord de site, pas de matériel jetable. Aligné avec une vraie sobriété, contrairement aux team building gourmands en logistique." }
];

const lieux = [
  "Forêt domaniale de Saint-Germain-en-Laye",
  "Parc de la Boucle de Montesson",
  "Parc Meissonier à Poissy",
  "Bois de Vélizy",
  "Île de loisirs de Saint-Quentin-en-Yvelines",
  "Espaces verts proches de votre site"
];

const faqs = [
  { q: "Qu'est-ce qu'une balade ethnobotanique RSE en entreprise ?", a: "C'est une marche guidée de 2 à 3h dans un parc ou bois proche du site de l'entreprise, animée par une ethnobotaniste. Les collaborateur·ices apprennent à identifier 8 à 12 plantes locales, leurs usages culturels et leurs enjeux écologiques. Format apprécié en Semaine RSE, journée Développement Durable ou QVCT, pour 12 à 25 personnes." },
  { q: "La balade ethnobotanique convient-elle à un cadre RSE entreprise ?", a: "Oui, c'est même un format particulièrement crédible. Là où certains team building peuvent paraître artificiels, la balade ethnobotanique offre une vraie expérience écologique, scientifique et collective. Apprécié en Semaine RSE et journées DD." },
  { q: "Où la balade se déroule-t-elle dans les Yvelines ?", a: "Selon votre site : forêt de Saint-Germain, parc Meissonier à Poissy, bois de Vélizy, île de loisirs de Saint-Quentin-en-Yvelines, ou tout espace vert à proximité de vos locaux. Nous repérons le parcours en amont." },
  { q: "Quelle météo, et si il pleut ?", a: "Format adapté du printemps à l'automne. En cas de pluie forte le jour J, nous proposons une alternative en intérieur, atelier herbier ou conférence ethnobotanique, sans coût supplémentaire." },
  { q: "Combien de personnes maximum ?", a: "Idéalement 12 à 25 personnes par groupe, pour préserver la qualité d'écoute. Au-delà, nous fonctionnons à deux animatrices avec deux groupes parallèles." },
  { q: "Tarif indicatif pour une balade RSE entreprise dans le 78 ?", a: "Entre 35 et 50 euros par personne selon la durée, le lieu et le nombre de participant·es. Comprend repérage, animation, carnet remis aux participant·es. Devis personnalisé après échange." },
  { q: "Pourquoi choisir un prestataire local 78 plutôt que parisien ?", a: "Un prestataire local connaît les parcs et bois du 78 (forêt de Saint-Germain, île de loisirs de SQY, bois de Vélizy), repère les parcours rapidement, et arrive en 10 à 30 minutes sans surcoût. C'est aussi cohérent avec votre démarche RSE : favoriser les acteurs locaux et réduire les déplacements." },
  { q: "Quelles plantes typiques rencontre-t-on en balade dans les Yvelines ?", a: "Selon la saison et le site : sureau, ortie, plantain, achillée, lierre terrestre, aubépine, charme, chêne, fougère scolopendre, lichens. Chaque plante est replacée dans son contexte ethnobotanique, médicinal et culturel." }
];

const reperesData = [
  { label: "Durée", value: "2h à 3h selon parcours et débrief RSE" },
  { label: "Effectif", value: "12 à 25 personnes, jusqu'à 50 en deux groupes" },
  { label: "Tarif", value: "35 à 50 € par personne, carnet de terrain inclus" },
  { label: "Lieu", value: "Parc ou bois proche de votre site, partout dans le 78" },
  { label: "Plantes", value: "8 à 12 espèces locales identifiées et contextualisées" },
  { label: "Animation", value: "Ethnobotaniste formée à l'EHESS" }
];

const BaladeEthnobotaniqueRSEYvelines = () => (
  <div className="min-h-screen bg-[hsl(var(--cream))]">
    <SEO
      title="Balade Ethnobotanique RSE Entreprise Yvelines (78)"
      description="Balade ethnobotanique RSE pour entreprises du 78. Forêt de Saint-Germain, Vélizy, Saint-Quentin-en-Yvelines, Poissy. Semaine RSE, QVCT, journée DD."
      keywords="balade ethnobotanique rse yvelines, atelier rse entreprise 78, balade botanique entreprise vélizy, semaine rse saint-quentin-en-yvelines, journée dd yvelines, qvct nature 78"
      canonical="/balade-ethnobotanique-rse-yvelines"
      region="FR-IDF"
      city="Le Pecq"
    />
    <SchemaOrg type="Service" data={{ serviceType: "Balade ethnobotanique RSE en entreprise", name: "Balade Ethnobotanique RSE Yvelines (78)", description: "Balade ethnobotanique guidée pour entreprises engagées RSE dans le 78." }} />
    <SchemaOrg type="LocalBusiness" data={{ areaServed: [{ "@type": "AdministrativeArea", "name": "Yvelines" }, { "@type": "City", "name": "Vélizy-Villacoublay" }, { "@type": "City", "name": "Saint-Quentin-en-Yvelines" }, { "@type": "City", "name": "Guyancourt" }, { "@type": "City", "name": "Poissy" }, { "@type": "City", "name": "Saint-Germain-en-Laye" }] }} />
    <SchemaOrg type="FAQPage" data={{ questions: faqs.map(f => ({ question: f.q, answer: f.a })) }} />
    <SchemaOrg type="BreadcrumbList" data={{ items: [{ name: "Accueil", url: "https://botaniqueludique.com/" }, { name: "Pro", url: "https://botaniqueludique.com/pro" }, { name: "Balade Ethnobotanique RSE Yvelines", url: "https://botaniqueludique.com/balade-ethnobotanique-rse-yvelines" }] }} />
    <Navigation />

    <section className="pt-36 pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-6">Semaine RSE · Yvelines (78)</span>
        <h1 className="font-display text-[clamp(2rem,5vw,4rem)] uppercase leading-[0.9] tracking-[-2px] text-[hsl(var(--black))] mb-6 max-w-4xl">
          Balade ethnobotanique RSE en entreprise, Yvelines
        </h1>
        <p className="text-lg leading-relaxed text-[hsl(var(--black))]/70 mb-4 max-w-3xl">
          Sortir du bureau, reconnecter au vivant, ancrer concrètement votre démarche RSE. Une balade guidée par une ethnobotaniste de l'EHESS, dans un parc ou bois proche de vos locaux du 78.
        </p>
        <p className="text-base leading-relaxed text-[hsl(var(--black))]/60 mb-8 max-w-3xl">
          Atelier basé au Pecq. Repérage et animation directement autour de vos sites à Vélizy-Villacoublay, Saint-Quentin-en-Yvelines, Guyancourt, Poissy ou Saint-Germain-en-Laye.
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
          {[{ icon: Clock, value: "2h–3h", label: "Durée" }, { icon: Users, value: "12–25", label: "Participants" }, { icon: TreePine, value: "Plein air", label: "Format" }, { icon: MapPin, value: "Près de vous", label: "Lieu" }].map((s, i) => (
            <div key={i} className="p-6 border-brutal text-center -mt-[3px] -ml-[3px] bg-[hsl(var(--cream))]">
              <s.icon className="w-5 h-5 text-[hsl(var(--olive))] mx-auto mb-2" />
              <div className="font-display text-2xl text-[hsl(var(--black))] mb-1">{s.value}</div>
              <div className="font-mono-brand text-[9px] uppercase tracking-[2px] text-[hsl(var(--black))]/50">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
      <LandingPhotoStrip />

    <section className="py-16 px-4 md:px-8 bg-[hsl(var(--cream))] border-t-[3px] border-b-[3px] border-[hsl(var(--black))]">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.2fr] gap-12">
        <div>
          <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-4">Définition</span>
          <h2 className="font-display text-2xl md:text-3xl uppercase leading-[1] tracking-[-1px] text-[hsl(var(--black))] mb-4">Balade ethnobotanique RSE</h2>
          <p className="text-base leading-relaxed text-[hsl(var(--black))]/75">
            Marche guidée de 2 à 3h dans un parc ou bois proche du site de l'entreprise, animée par une ethnobotaniste. Les participant·es apprennent à identifier 8 à 12 plantes locales, leurs usages culturels et leurs enjeux écologiques. Format crédible pour Semaine RSE, journée Développement Durable, démarche QVCT, pour 12 à 25 personnes.
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
            Pourquoi la balade<br /><span className="text-[hsl(var(--olive-light))]">crédibilise votre RSE</span>
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
          <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-4">Déroulé du parcours</span>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] uppercase leading-[0.9] tracking-[-1px] text-[hsl(var(--black))] mb-12">
            2 à 3 heures, 4 temps
          </h2>
        </AnimatedSection>
        <div className="space-y-0">
          {parcours.map((d, i) => (
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
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-4">Lieux possibles dans le 78</span>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] uppercase leading-[0.9] tracking-[-1px] text-[hsl(var(--black))] mb-12">
            6 terrains de balade
          </h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 gap-0">
          {lieux.map((lieu, i) => (
            <div key={i} className="border-brutal -ml-[3px] -mt-[3px] p-6 bg-[hsl(var(--cream))] flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[hsl(var(--olive))] flex-shrink-0" />
              <span className="text-sm font-medium text-[hsl(var(--black))]">{lieu}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 px-4 md:px-8">
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
        <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] uppercase leading-[0.9] tracking-[-1px] mb-6">Une balade RSE pour vos équipes ?</h2>
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">Parlons de votre site, votre date et votre démarche. Devis personnalisé après échange.</p>
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

export default BaladeEthnobotaniqueRSEYvelines;
