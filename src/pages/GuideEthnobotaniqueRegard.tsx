import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import BackToTop from "@/components/BackToTop";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, BookOpen, MapPin, GraduationCap } from "lucide-react";

const GuideEthnobotaniqueRegard = () => {
  const faqs = [
    {
      q: "Qu'est-ce qu'un·e anthropologue de la nature ?",
      a: "L'anthropologie de la nature, théorisée notamment par Philippe Descola, étudie les manières dont les sociétés humaines conçoivent et organisent leurs relations au vivant. Plutôt que d'opposer nature et culture, elle observe comment plantes, animaux, paysages et humains forment des collectifs partagés. Appliquée à la botanique, cette approche éclaire l'histoire des jardins, des plantations coloniales et des savoirs paysans.",
    },
    {
      q: "En quoi votre démarche diffère d'une balade botanique classique ?",
      a: "Une balade botanique classique identifie les plantes. Nos balades ethnobotaniques racontent ce que les plantes disent de nous : circulations coloniales, distinctions sociales, savoirs effacés, politiques urbaines. Chaque arrêt croise un nom latin et une histoire culturelle, économique ou politique.",
    },
    {
      q: "Quelle est votre formation ?",
      a: "Vanessa Charlery est animatrice ethnobotaniste formée à l'EHESS (École des hautes études en sciences sociales). Sa pratique s'appuie sur l'anthropologie de la nature, l'histoire des sciences et les études postcoloniales, articulées à un travail de terrain en Île-de-France auprès de tous les publics.",
    },
    {
      q: "Sur quels territoires intervenez-vous ?",
      a: "Nos balades et ateliers ethnobotaniques se déroulent à Paris (75), dans les Yvelines (78), les Hauts-de-Seine (92) et le Val-d'Oise (95). Nous intervenons également en Seine-Saint-Denis (93), Val-de-Marne (94), Essonne (91) et Seine-et-Marne (77) sur demande.",
    },
    {
      q: "Quel public est concerné ?",
      a: "Adultes, familles, scolaires (du primaire au lycée), seniors en résidence ou EHPAD, MJC, médiathèques, entreprises, collectivités et associations. Le propos est adapté à chaque public sans rien céder à l'exigence scientifique.",
    },
  ];

  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SEO
        title="Anthropologue de la nature : notre regard ethnobotanique en Île-de-France"
        description="Découvrez notre approche d'anthropologue de la nature : références, formation EHESS, balades ethnobotaniques à Paris, Yvelines, Hauts-de-Seine et Val-d'Oise."
        keywords="anthropologue de la nature, ethnobotanique Île-de-France, balade ethnobotanique Paris, Yvelines, Hauts-de-Seine, Val-d'Oise, Philippe Descola, EHESS, médiation scientifique botanique"
        canonical="/guide-ethnobotanique"
      />
      <SchemaOrg
        type="Article"
        data={{
          headline: "Anthropologue de la nature : notre regard ethnobotanique",
          description: "Présentation de la démarche, des références théoriques, de la formation et des balades ethnobotaniques proposées en Île-de-France.",
          datePublished: "2026-06-12",
          slug: "guide-ethnobotanique",
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        data={{ items: [
          { name: "Accueil", url: "https://botaniqueludique.com/" },
          { name: "Guides", url: "https://botaniqueludique.com/blog" },
          { name: "Anthropologue de la nature", url: "https://botaniqueludique.com/guide-ethnobotanique" }
        ]}}
      />
      <SchemaOrg
        type="FAQPage"
        data={{ questions: faqs.map(f => ({ question: f.q, answer: f.a })) }}
      />

      <Navigation />

      <article className="pt-32 pb-20 px-6 md:px-16 lg:px-[120px]">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-5">
              Notre regard · Ethnobotanique
            </span>
            <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.95] tracking-[-2px] text-[hsl(var(--black))] mb-6">
              Anthropologue de la nature : notre regard ethnobotanique
            </h1>
            <p className="font-body text-xl italic text-[hsl(var(--black))]/70 leading-relaxed mb-10">
              Une manière d'observer les plantes qui prend au sérieux ce qu'elles disent des sociétés humaines, de leur histoire et de leurs imaginaires.
            </p>
          </AnimatedSection>

          {/* Définition / Repères pour AI Overviews */}
          <AnimatedSection delay={100}>
            <div className="border-brutal bg-[hsl(var(--green-pale))] p-6 md:p-8 mb-12">
              <p className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] mb-3">
                Définition
              </p>
              <p className="text-[hsl(var(--black))] leading-relaxed">
                Un·e <strong>anthropologue de la nature</strong> étudie les manières dont les sociétés humaines tissent leurs relations au vivant. Appliquée à la botanique, cette approche éclaire ce que les plantes racontent de nous, de notre histoire coloniale, de nos hiérarchies sociales et de nos politiques urbaines.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="prose prose-lg max-w-none text-[hsl(var(--black))]/80 space-y-6">
              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-4 mb-4 flex items-center gap-3">
                <Leaf className="w-5 h-5 text-[hsl(var(--olive))]" /> Notre propos
              </h2>
              <p>
                Quand nous parcourons un jardin, une rue, un parc, nous ne cherchons pas seulement à identifier les espèces. Nous regardons comment les plantes y ont été plantées, par qui, pour qui, à quelle époque et avec quels savoirs. Un palmier sur un boulevard haussmannien, un monstera dans un salon parisien, une roseraie de banlieue, un écoquartier contemporain : chacun de ces végétaux porte une histoire sociale et politique.
              </p>
              <p>
                Cette démarche s'inscrit dans l'<strong>anthropologie de la nature</strong>, courant qui refuse la séparation occidentale stricte entre nature et culture. Elle s'appuie aussi sur l'histoire des sciences, les études postcoloniales et la sociologie des techniques. L'objectif n'est pas de surplomber, mais de rendre visible ce qui se joue, discrètement, dans nos paysages quotidiens.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-12 mb-4 flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-[hsl(var(--olive))]" /> Formation et parcours
              </h2>
              <p>
                Vanessa Charlery, fondatrice de Botanique Ludique, est <strong>animatrice ethnobotaniste formée à l'EHESS</strong> (École des hautes études en sciences sociales). Sa formation articule anthropologie de la nature, histoire des plantes et médiation culturelle. Elle pratique une transmission qui ne sacrifie ni la rigueur scientifique, ni l'accessibilité.
              </p>
              <p>
                Cette double exigence guide chacune de nos interventions : un propos référencé, mais raconté simplement ; un regard critique, mais bienveillant ; une science partagée, jamais surplombante.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-12 mb-4 flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-[hsl(var(--olive))]" /> Références théoriques
              </h2>
              <p>
                Nos balades et ateliers s'appuient sur un corpus accessible et exigeant. Parmi les autrices et auteurs qui nourrissent notre regard :
              </p>
              <ul className="space-y-2 pl-6 list-disc marker:text-[hsl(var(--olive))]">
                <li><strong>Philippe Descola</strong>, <em>Par-delà nature et culture</em> (Gallimard, 2005), pour penser les ontologies du vivant.</li>
                <li><strong>Anna Lowenhaupt Tsing</strong>, <em>Le Champignon de la fin du monde</em> (La Découverte, 2017), pour les écologies des ruines.</li>
                <li><strong>Samir Boumediene</strong>, <em>La Colonisation du savoir</em> (Les Mondes à faire, 2016), sur l'histoire coloniale des plantes médicinales.</li>
                <li><strong>Hélène Blais</strong>, <em>Empire et après ?</em>, sur les jardins botaniques coloniaux.</li>
                <li><strong>Richard Evans Schultes</strong>, pour l'ethnobotanique amazonienne.</li>
                <li><strong>Catherine et Raphaël Larrère</strong>, pour la philosophie environnementale française.</li>
              </ul>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-12 mb-4 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[hsl(var(--olive))]" /> Types de balades proposées
              </h2>
              <p>
                Nos <strong>balades ethnobotaniques</strong> durent entre 1h30 et 2h30 et s'adaptent au lieu, au public et à la saison. Quatre grandes familles structurent notre offre :
              </p>
              <ul className="space-y-3 pl-6 list-disc marker:text-[hsl(var(--olive))]">
                <li><strong>Balades coloniales</strong> : circulations végétales depuis les empires (palmiers haussmanniens, plantes de salon, café et cacao). <Link to="/balade-botanique-coloniale-paris" className="underline decoration-[3px] underline-offset-2 decoration-[hsl(var(--olive))]">En savoir plus</Link>.</li>
                <li><strong>Jardins patrimoniaux</strong> : parcs municipaux, roseraies, jardins d'écoquartiers lus à travers leur histoire sociale. <Link to="/balade-botanique-jardin-patrimonial" className="underline decoration-[3px] underline-offset-2 decoration-[hsl(var(--olive))]">Voir le format</Link>.</li>
                <li><strong>Balades urbaines</strong> : végétation spontanée, friches, plantations municipales et politiques de la ville.</li>
                <li><strong>Balades en musée ou médiathèque</strong> : interventions liées à une exposition, un fonds documentaire ou une programmation culturelle.</li>
              </ul>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-12 mb-4">
                Territoires d'intervention
              </h2>
              <p>
                Nous intervenons sur l'ensemble de l'Île-de-France, avec une présence renforcée sur quatre départements :
              </p>
              <ul className="space-y-2 pl-6 list-disc marker:text-[hsl(var(--olive))]">
                <li><strong>Paris (75)</strong> : Jardin des plantes, parc Monceau, Buttes-Chaumont, boulevards haussmanniens, Belleville, Père-Lachaise.</li>
                <li><strong>Yvelines (78)</strong> : Versailles, Saint-Germain-en-Laye, Le Pecq, Le Vésinet, Chatou, Voisins-le-Bretonneux, Saint-Quentin-en-Yvelines, Rambouillet, Maurepas, Conflans-Sainte-Honorine.</li>
                <li><strong>Hauts-de-Seine (92)</strong> : Boulogne-Billancourt, Nanterre, Rueil-Malmaison, Sceaux, Meudon.</li>
                <li><strong>Val-d'Oise (95)</strong> : Cergy, Pontoise, Bezons, Argenteuil, Auvers-sur-Oise.</li>
                <li>Sur demande : Seine-Saint-Denis (93), Val-de-Marne (94), Essonne (91), Seine-et-Marne (77).</li>
              </ul>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-12 mb-4">
                Questions fréquentes
              </h2>
              <div className="space-y-6 not-prose">
                {faqs.map((f, i) => (
                  <div key={i} className="border-l-[3px] border-[hsl(var(--olive))] pl-4">
                    <p className="font-display text-base uppercase tracking-[-0.5px] text-[hsl(var(--black))] mb-2">{f.q}</p>
                    <p className="text-[hsl(var(--black))]/75 leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* CTA Médiation */}
          <AnimatedSection delay={200}>
            <div className="mt-16 border-brutal bg-[hsl(210_41%_24%)] text-[hsl(var(--cream))] p-8 md:p-12">
              <p className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--cream))]/70 mb-3">
                Aller plus loin
              </p>
              <h2 className="font-display text-2xl md:text-3xl uppercase leading-[0.95] tracking-[-1px] mb-4">
                Médiation ethnobotanique & savoirs partagés
              </h2>
              <p className="text-[hsl(var(--cream))]/85 leading-relaxed mb-6">
                Conférences avec chercheurs et artistes, balades commentées, ateliers en lien avec une exposition ou un programme : découvrez l'ensemble de notre offre de médiation pour collectivités, médiathèques, musées et entreprises.
              </p>
              <Link
                to="/#mediation"
                className="btn-brutal bg-[hsl(var(--cream))] text-[hsl(210_41%_24%)] border-[hsl(var(--cream))] hover:bg-transparent hover:text-[hsl(var(--cream))] text-xs px-6 py-2.5 inline-flex items-center gap-2"
              >
                Voir la médiation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          {/* Articles liés */}
          <AnimatedSection delay={250}>
            <div className="mt-16">
              <p className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] mb-5">
                Lectures associées
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { to: "/blog/balade-botanique-voisins-le-bretonneux", label: "Balade botanique à Voisins-le-Bretonneux" },
                  { to: "/blog/balade-botanique-ecole-du-breuil", label: "Balade à l'École Du Breuil" },
                  { to: "/blog/monstera-plante-coloniale-distinction-sociale", label: "Monstera et distinction sociale" },
                  { to: "/blog/palmiers-architecture-haussmannienne-colonialisme", label: "Palmiers d'Haussmann" },
                  { to: "/blog/terrarium-biopiraterie-histoire-coloniale", label: "Terrarium et biopiraterie" },
                  { to: "/balades-botaniques", label: "Toutes nos balades" },
                ].map((a, i) => (
                  <Link
                    key={i}
                    to={a.to}
                    className="border-brutal bg-[hsl(var(--cream))] p-4 hover:bg-[hsl(var(--green-pale))] transition-colors flex items-center justify-between gap-3"
                  >
                    <span className="font-display text-sm uppercase tracking-[-0.5px]">{a.label}</span>
                    <ArrowRight className="w-4 h-4 text-[hsl(var(--olive))] flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </article>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default GuideEthnobotaniqueRegard;
