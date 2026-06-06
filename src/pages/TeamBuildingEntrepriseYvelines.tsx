import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import BackToTop from "@/components/BackToTop";
import { Building2, MapPin, Clock, Users, ArrowRight, Leaf, Briefcase, Sparkles } from "lucide-react";

const cities = [
  {
    name: "Saint-Quentin-en-Yvelines",
    proximity: "À 25 minutes de notre atelier du Pecq, nous nous déplaçons directement dans vos locaux de Montigny, Guyancourt ou Voisins-le-Bretonneux.",
    context: "Pôle tertiaire majeur du 78 (Bouygues, Renault, Thalès, Technicolor), Saint-Quentin-en-Yvelines concentre des sièges sociaux et des centres R&D. Nos formats courts s'insèrent dans vos journées de séminaire ou vos semaines QVCT.",
    formats: "Ateliers en salle de réunion, after-work botanique, journées RSE pour les grandes équipes."
  },
  {
    name: "Vélizy-Villacoublay",
    proximity: "À 20 minutes du Pecq, je viens animer chez vous avec tout le matériel végétal et l'outillage. Pas de logistique à gérer de votre côté.",
    context: "Vélizy regroupe les sièges de Thales, Safran, Eiffage, Dassault Systèmes. Un tissu d'entreprises tech et industrielles où les ateliers nature offrent une vraie respiration entre deux sprints ou comités de pilotage.",
    formats: "Module 2h sur la pause déjeuner, demi-journée team building, animation séminaire au Vélizy Espace ou en interne."
  },
  {
    name: "Guyancourt",
    proximity: "À 25 minutes du Pecq, nous arrivons directement sur votre site, Technocentre Renault inclus, avec une installation rapide en 20 minutes.",
    context: "Le Technocentre Renault et les pépinières d'entreprises de Guyancourt accueillent régulièrement nos ateliers kokedama et terrarium pour les comités d'entreprise et les équipes projet. Format apprécié des ingénieurs et designers.",
    formats: "Atelier d'équipe en salle de créativité, animation CSE, événement de fin d'année."
  },
  {
    name: "Poissy",
    proximity: "À 15 minutes du Pecq, Poissy est notre voisin direct. Nous y intervenons fréquemment, parfois sur demande dans la semaine.",
    context: "Centre PSA Poissy, sièges de PME et collectivités, le territoire associe industrie historique et nouvelles dynamiques tertiaires le long de la Seine. Nos balades ethnobotaniques en bord de Seine complètent bien les ateliers en intérieur.",
    formats: "Atelier intérieur, balade botanique guidée, formats hybrides intérieur plus extérieur."
  },
  {
    name: "Saint-Germain-en-Laye",
    proximity: "À 5 minutes du Pecq, nous sommes installé·es juste à côté. Saint-Germain est notre territoire quotidien.",
    context: "Sièges de PME, cabinets de conseil, professions libérales et institutions culturelles autour du château et de la forêt domaniale. Possibilité de prolonger l'atelier par une balade ethnobotanique en forêt de Saint-Germain.",
    formats: "Atelier dans vos locaux, séminaire au cœur de la ville, balade en forêt pour les groupes restreints."
  }
];

const formats = [
  { icon: Briefcase, title: "Module séminaire 2h", desc: "Inséré dans votre journée pour casser le rythme PowerPoint." },
  { icon: Users, title: "Team building demi-journée", desc: "Atelier complet plus échanges, idéal de 10 à 30 personnes." },
  { icon: Leaf, title: "Semaine QVCT", desc: "Plusieurs créneaux dans la semaine pour faire tourner les équipes." },
  { icon: Sparkles, title: "Événement RSE", desc: "Atelier éco-responsable aligné avec vos engagements RSE." }
];

const faqs = [
  {
    q: "Vous intervenez vraiment dans toutes ces villes des Yvelines ?",
    a: "Oui, notre atelier est basé au Pecq (78230), à proximité immédiate de Saint-Germain-en-Laye et Poissy, et à 20 à 25 minutes de Vélizy-Villacoublay, Guyancourt et Saint-Quentin-en-Yvelines. Nous nous déplaçons avec tout le matériel végétal et l'outillage, vous n'avez rien à prévoir hormis les tables."
  },
  {
    q: "Quel format pour un team building à Vélizy ou Saint-Quentin-en-Yvelines ?",
    a: "Le module de 2h est le plus demandé sur ces zones tertiaires, car il s'insère dans une journée de travail sans la perturber. Pour les séminaires complets, nous proposons des demi-journées avec atelier puis échanges, jusqu'à 60 personnes en simultané avec une double animatrice."
  },
  {
    q: "Quels ateliers sont adaptés à un cadre entreprise ?",
    a: "Kokedama (sphère végétale), terrarium en bocal, teinture végétale et balade ethnobotanique sont nos formats les plus demandés en entreprise. Chaque participant·e repart avec sa création, souvent placée ensuite sur son bureau. Tous les formats sont adaptables à votre charte."
  },
  {
    q: "Quel délai pour réserver une animation dans le 78 ?",
    a: "Nous recommandons 4 à 8 semaines à l'avance, davantage en juin, septembre et décembre. Pour Saint-Germain-en-Laye et Poissy, nous pouvons parfois répondre dans la semaine selon notre planning."
  },
  {
    q: "Quel tarif pour un atelier entreprise dans les Yvelines ?",
    a: "Les tarifs sont sur devis et dépendent du format, du nombre de participant·es et du lieu. Comptez entre 35 et 60 euros par personne pour un atelier de 2h en groupe de 10 à 30. Devis personnalisé sous quelques jours après échange."
  }
];

const TeamBuildingEntrepriseYvelines = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SEO
        title="Team Building Entreprise Yvelines (78), Vélizy, SQY, Guyancourt"
        description="Team building et ateliers nature pour entreprises du 78. Animatrice basée au Pecq, déplacements à Vélizy, Saint-Quentin-en-Yvelines, Guyancourt, Poissy, Saint-Germain-en-Laye."
        keywords="team building yvelines, atelier entreprise vélizy, animation nature saint-quentin-en-yvelines, team building guyancourt, atelier entreprise poissy, séminaire saint-germain-en-laye, animation rse 78"
        canonical="/team-building-entreprise-yvelines"
        region="FR-IDF"
        city="Le Pecq"
      />
      <SchemaOrg
        type="Service"
        data={{
          serviceType: "Team building et ateliers nature en entreprise",
          name: "Team Building Entreprise Yvelines (78)",
          description: "Ateliers botaniques pour entreprises du 78 : kokedama, terrarium, teinture végétale, balade ethnobotanique. Déplacement direct dans vos locaux à Vélizy, Saint-Quentin-en-Yvelines, Guyancourt, Poissy, Saint-Germain-en-Laye.",
          areaServed: cities.map(c => c.name)
        }}
      />
      <SchemaOrg
        type="LocalBusiness"
        data={{
          areaServed: [
            { "@type": "AdministrativeArea", "name": "Yvelines" },
            ...cities.map(c => ({ "@type": "City", "name": c.name }))
          ]
        }}
      />
      <SchemaOrg type="FAQPage" data={{ questions: faqs.map(f => ({ question: f.q, answer: f.a })) }} />
      <SchemaOrg
        type="BreadcrumbList"
        data={{ items: [
          { name: "Accueil", url: "https://botaniqueludique.com/" },
          { name: "Pro", url: "https://botaniqueludique.com/pro" },
          { name: "Team Building Entreprise Yvelines", url: "https://botaniqueludique.com/team-building-entreprise-yvelines" }
        ]}}
      />
      <Navigation />

      {/* HERO */}
      <section className="pt-36 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-6">
                Entreprises · Yvelines (78)
              </span>
              <h1 className="font-display text-[clamp(2rem,5vw,4rem)] uppercase leading-[0.9] tracking-[-2px] text-[hsl(var(--black))] mb-6">
                Team building et ateliers nature en entreprise, Yvelines (78)
              </h1>
              <p className="text-lg leading-relaxed text-[hsl(var(--black))]/70 mb-4">
                Notre atelier est basé au Pecq, dans les Yvelines. Nous intervenons quotidiennement à Vélizy-Villacoublay, Saint-Quentin-en-Yvelines, Guyancourt, Poissy et Saint-Germain-en-Laye, directement dans vos locaux.
              </p>
              <p className="text-base leading-relaxed text-[hsl(var(--black))]/60 mb-8">
                Pas de prestataire qui descend de Paris avec deux heures de logistique. Une animatrice ethnobotaniste du 78, qui connaît votre territoire et vient avec tout le matériel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="btn-brutal bg-[hsl(var(--olive))] text-[hsl(var(--cream))] border-[hsl(var(--black))] inline-flex items-center gap-2 justify-center"
                >
                  Demander un devis <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="mailto:contact@botaniqueludique.com"
                  className="btn-brutal bg-[hsl(var(--cream))] text-[hsl(var(--black))] border-[hsl(var(--black))] inline-flex items-center gap-2 justify-center"
                >
                  contact@botaniqueludique.com
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="grid grid-cols-2 gap-0">
                {[
                  { value: "5 villes", label: "Pôles 78 couverts", icon: MapPin },
                  { value: "10–60", label: "Personnes par session", icon: Users },
                  { value: "2h–1j", label: "Formats modulables", icon: Clock },
                  { value: "Le Pecq", label: "Atelier base 78", icon: Building2 },
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

      {/* VILLES */}
      <section className="py-20 px-4 md:px-8 bg-[hsl(var(--black))] text-[hsl(var(--cream))]">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive-light))] block mb-4">Notre zone d'intervention 78</span>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] uppercase leading-[0.9] tracking-[-1px] mb-4">
              5 pôles tertiaires<br /><span className="text-[hsl(var(--olive-light))]">à portée directe</span>
            </h2>
            <p className="text-[hsl(var(--cream))]/70 max-w-2xl mb-16 leading-relaxed">
              Basée au Pecq, je couvre les principaux bassins d'emploi des Yvelines sans logistique parisienne. Voici comment nous intervenons dans chaque ville.
            </p>
          </AnimatedSection>

          <div className="space-y-0">
            {cities.map((city, i) => (
              <AnimatedSection key={i}>
                <article className="border-brutal border-[hsl(var(--cream))] -mt-[3px] p-8 md:p-10 hover:bg-[hsl(var(--cream))] hover:text-[hsl(var(--black))] transition-colors group">
                  <div className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-10">
                    <div>
                      <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive-light))] group-hover:text-[hsl(var(--olive))] block mb-3">
                        <MapPin className="w-3 h-3 inline mr-1" /> Yvelines · 78
                      </span>
                      <h3 className="font-display text-2xl md:text-3xl uppercase leading-tight tracking-[-1px]">
                        {city.name}
                      </h3>
                    </div>
                    <div className="space-y-4">
                      <p className="font-mono-brand text-xs uppercase tracking-[2px] leading-relaxed text-[hsl(var(--olive-light))] group-hover:text-[hsl(var(--olive))]">
                        {city.proximity}
                      </p>
                      <p className="text-base leading-relaxed opacity-80">
                        {city.context}
                      </p>
                      <p className="text-sm leading-relaxed opacity-60 italic">
                        Formats adaptés : {city.formats}
                      </p>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-4">Nos formats entreprise</span>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] uppercase leading-[0.9] tracking-[-1px] text-[hsl(var(--black))] mb-16">
              Des formats pensés<br />pour vos contraintes
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
            {formats.map((f, i) => (
              <div key={i} className="border-brutal -ml-[3px] -mt-[3px] p-8 bg-[hsl(var(--cream))] hover:bg-[hsl(var(--green-pale))] transition-colors">
                <f.icon className="w-6 h-6 text-[hsl(var(--olive))] mb-4" />
                <h3 className="font-display text-lg uppercase mb-3 text-[hsl(var(--black))]">{f.title}</h3>
                <p className="text-sm leading-relaxed text-[hsl(var(--black))]/70">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 md:px-8 bg-[hsl(var(--green-pale))]">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-4">Questions fréquentes</span>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] uppercase leading-[0.9] tracking-[-1px] text-[hsl(var(--black))] mb-12">
              Tout ce que vous voulez savoir
            </h2>
          </AnimatedSection>
          <div className="space-y-0">
            {faqs.map((f, i) => (
              <details key={i} className="border-brutal -mt-[3px] bg-[hsl(var(--cream))] group">
                <summary className="p-6 cursor-pointer font-display text-base md:text-lg uppercase tracking-tight text-[hsl(var(--black))] flex justify-between items-center gap-4">
                  <span>{f.q}</span>
                  <span className="font-mono-brand text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-[hsl(var(--black))]/70 leading-relaxed">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* MAILLAGE */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-4">Pour aller plus loin</span>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] uppercase leading-[0.9] tracking-[-1px] text-[hsl(var(--black))] mb-12">
              Autres pages utiles
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-0">
            {[
              { to: "/pro", title: "Hub Pro", desc: "Toutes nos offres entreprises et institutions." },
              { to: "/seminaire-entreprise-yvelines", title: "Séminaire 78", desc: "Format séminaire complet dans le département." },
              { to: "/intervenant-scientifique-yvelines", title: "Intervenant scientifique", desc: "Approche ethnobotanique et culturelle." }
            ].map((l, i) => (
              <Link key={i} to={l.to} className="border-brutal -ml-[3px] -mt-[3px] p-8 bg-[hsl(var(--cream))] hover:bg-[hsl(var(--olive))] hover:text-[hsl(var(--cream))] transition-colors group">
                <h3 className="font-display text-lg uppercase mb-2">{l.title}</h3>
                <p className="text-sm leading-relaxed opacity-70 mb-4">{l.desc}</p>
                <span className="font-mono-brand text-[10px] uppercase tracking-[2px] inline-flex items-center gap-1">
                  Voir <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 bg-[hsl(var(--olive))] text-[hsl(var(--cream))]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] uppercase leading-[0.9] tracking-[-1px] mb-6">
            Un projet d'atelier dans le 78 ?
          </h2>
          <p className="text-lg leading-relaxed opacity-90 mb-8 max-w-2xl mx-auto">
            Parlons de votre équipe, de vos contraintes de calendrier et de votre lieu. Nous revenons vers vous rapidement avec un devis adapté.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-brutal bg-[hsl(var(--cream))] text-[hsl(var(--black))] border-[hsl(var(--cream))] inline-flex items-center gap-2 justify-center">
              Nous écrire <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+33609831606" className="btn-brutal bg-transparent text-[hsl(var(--cream))] border-[hsl(var(--cream))] inline-flex items-center gap-2 justify-center">
              06 09 83 16 06
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default TeamBuildingEntrepriseYvelines;
