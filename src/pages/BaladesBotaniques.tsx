import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import { TreePine, Compass, Building2, ArrowRight, BookOpen, Landmark } from "lucide-react";

const formats = [
  {
    to: "/balade-botanique-musee",
    icon: Landmark,
    eyebrow: "Format institutionnel",
    title: "Balade botanique pour musées et institutions culturelles",
    desc: "Une lecture ethnobotanique pensée en complément d'une exposition, d'un parcours ou d'une saison culturelle. Format conçu avec et pour les équipes de médiation.",
    refs: "Musée de la ville, médiathèques, centres d'art",
  },
  {
    to: "/balade-botanique-jardin-patrimonial",
    icon: TreePine,
    eyebrow: "Format jardin patrimonial",
    title: "Balade dans les jardins botaniques et serres patrimoniales",
    desc: "Une visite guidée qui transforme chaque collection en archive vivante. Pensée pour les jardins remarquables, parcs historiques et écoles d'horticulture comme l'École Du Breuil.",
    refs: "Jardins remarquables, parcs historiques, écoles",
  },
  {
    to: "/balade-botanique-urbaine-paris",
    icon: Compass,
    eyebrow: "Format urbain",
    title: "Déambulation botanique urbaine à Paris et en Île-de-France",
    desc: "Une lecture politique et historique du végétal urbain. Pensée pour les villes, mairies d'arrondissement et collectivités. Déjà menée pour la Mairie du 14e arrondissement de Paris.",
    refs: "Mairies, collectivités, services culturels",
  },
];

const BaladesBotaniques = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--cream))] text-[hsl(var(--black))]">
      <SEO
        title="Balades botaniques en Île-de-France pour institutions"
        description="Balades botaniques guidées pour musées, jardins patrimoniaux et collectivités. Médiation ethnobotanique en Île-de-France, formée à l'EHESS."
        canonical="/balades-botaniques"
      />
      <SchemaOrg type="Service" data={{
        serviceType: "Balades botaniques pour institutions",
        name: "Balades botaniques en Île-de-France",
        description: "Visites guidées ethnobotaniques pour musées, jardins patrimoniaux et collectivités.",
        areaServed: ["Paris", "Yvelines", "Hauts-de-Seine", "Val-d'Oise", "Île-de-France"],
      }} />
      <Navigation />

      <main className="pt-24">
        {/* Hero brutalist sobre */}
        <section className="border-b-[3px] border-[hsl(var(--black))] py-20 px-6 md:px-16 lg:px-[120px]">
          <AnimatedSection>
            <span className="font-mono-brand text-[11px] tracking-[3px] uppercase text-[hsl(var(--black))]/60 block mb-6">
              Médiation ethnobotanique en mouvement
            </span>
            <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] uppercase leading-[0.95] tracking-[-2px] mb-8 max-w-[1100px]">
              Balades<br />botaniques
            </h1>
            <p className="text-lg leading-[1.7] max-w-[720px] text-[hsl(var(--black))]/80 mb-6">
              Une lecture vivante des plantes, pensée pour les institutions culturelles, les jardins patrimoniaux et les collectivités d'Île-de-France. Chaque balade croise botanique, anthropologie de la nature et histoire sociale du végétal.
            </p>
            <p className="text-base leading-[1.7] max-w-[720px] text-[hsl(var(--black))]/65">
              Vanessa Charlery, formée en anthropologie de la nature à l'EHESS sous la direction de Florence Brunois-Pasina, a déjà conçu des balades pour le Musée de la Ville de Saint-Quentin-en-Yvelines, l'École Du Breuil et la Mairie du 14e arrondissement de Paris.
            </p>
          </AnimatedSection>
        </section>
      <LandingPhotoStrip />

        {/* Trois formats */}
        <section className="px-6 md:px-16 lg:px-[120px] py-20">
          <AnimatedSection>
            <span className="font-mono-brand text-[11px] tracking-[3px] uppercase text-[hsl(var(--black))]/60 block mb-4">
              Trois formats, trois lectures du vivant
            </span>
            <h2 className="font-display text-3xl md:text-5xl uppercase leading-[0.95] mb-14 max-w-[800px]">
              Choisissez<br />votre angle
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-0">
            {formats.map((f, idx) => {
              const Icon = f.icon;
              return (
                <AnimatedSection key={f.to} delay={idx * 100} className="h-full">
                  <Link
                    to={f.to}
                    className="group h-full p-8 md:p-10 border-[3px] border-[hsl(var(--black))] -mt-[3px] -ml-[3px] flex flex-col bg-[hsl(var(--cream))] hover:bg-[hsl(var(--black))] hover:text-[hsl(var(--cream))] transition-colors duration-200"
                  >
                    <Icon className="w-8 h-8 mb-6" strokeWidth={1.5} />
                    <span className="font-mono-brand text-[10px] tracking-[2.5px] uppercase opacity-70 mb-3">
                      {f.eyebrow}
                    </span>
                    <h3 className="font-display text-xl md:text-[22px] uppercase leading-[1.1] mb-4">
                      {f.title}
                    </h3>
                    <p className="text-sm leading-[1.7] opacity-75 mb-6 flex-1">
                      {f.desc}
                    </p>
                    <span className="font-mono-brand text-[10px] tracking-[2px] uppercase opacity-60 mb-4 block">
                      {f.refs}
                    </span>
                    <span className="inline-flex items-center gap-2 font-mono-brand text-[11px] uppercase tracking-[2px] mt-auto">
                      Découvrir <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </section>

        {/* CTA bar sobre */}
        <section className="bg-[hsl(var(--black))] text-[hsl(var(--cream))] py-14 px-6 md:px-16 lg:px-[120px]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-[640px]">
              <h3 className="font-display text-2xl md:text-3xl uppercase leading-[1.05] mb-3">
                Concevoir une balade pour votre institution
              </h3>
              <p className="text-sm leading-[1.7] opacity-75">
                Chaque parcours est construit avec votre équipe, autour de vos collections, de votre territoire ou de votre programmation. Nous écrire pour échanger sans engagement.
              </p>
            </div>
            <Link
              to="/contact"
              className="btn-brutal bg-[hsl(var(--cream))] text-[hsl(var(--black))] border-[hsl(var(--cream))] text-sm px-8 py-4 flex-shrink-0"
            >
              Nous écrire →
            </Link>
          </div>
        </section>

        {/* Explorer par territoire et thématique */}
        <section className="px-6 md:px-16 lg:px-[120px] py-20 border-t border-[hsl(var(--black))]/15">
          <span className="font-mono-brand text-[11px] tracking-[3px] uppercase text-[hsl(var(--black))]/60 block mb-4">
            Explorer
          </span>
          <h2 className="font-display text-2xl md:text-4xl uppercase leading-[1] mb-12 max-w-[700px]">
            Toutes les balades<br />par angle
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <p className="font-mono-brand text-[10px] tracking-[2.5px] uppercase mb-4 text-[hsl(var(--black))]/60">Par département</p>
              <ul className="space-y-2 text-sm">
                <li><Link to="/balade-botanique-paris" className="underline hover:no-underline">Paris (75)</Link></li>
                <li><Link to="/balade-botanique-yvelines" className="underline hover:no-underline">Yvelines (78)</Link></li>
                <li><Link to="/balade-botanique-hauts-de-seine" className="underline hover:no-underline">Hauts-de-Seine (92)</Link></li>
                <li><Link to="/balade-botanique-val-d-oise" className="underline hover:no-underline">Val-d'Oise (95)</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-mono-brand text-[10px] tracking-[2.5px] uppercase mb-4 text-[hsl(var(--black))]/60">Par public</p>
              <ul className="space-y-2 text-sm">
                <li><Link to="/balade-botanique-musee" className="underline hover:no-underline">Musées et institutions</Link></li>
                <li><Link to="/balade-botanique-jardin-patrimonial" className="underline hover:no-underline">Jardins patrimoniaux</Link></li>
                <li><Link to="/balade-botanique-entreprise-cse" className="underline hover:no-underline">Entreprises et CSE</Link></li>
                <li><Link to="/balade-botanique-scolaire" className="underline hover:no-underline">Écoles et collèges</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-mono-brand text-[10px] tracking-[2.5px] uppercase mb-4 text-[hsl(var(--black))]/60">Par thématique</p>
              <ul className="space-y-2 text-sm">
                <li><Link to="/balade-botanique-urbaine-paris" className="underline hover:no-underline">Botanique urbaine</Link></li>
                <li><Link to="/balade-plantes-sauvages-comestibles-paris" className="underline hover:no-underline">Plantes sauvages comestibles</Link></li>
                <li><Link to="/balade-botanique-coloniale-paris" className="underline hover:no-underline">Botanique coloniale</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-mono-brand text-[10px] tracking-[2.5px] uppercase mb-4 text-[hsl(var(--black))]/60">Par saison</p>
              <ul className="space-y-2 text-sm">
                <li><Link to="/balade-botanique-printemps-ete" className="underline hover:no-underline">Printemps et été</Link></li>
                <li><Link to="/agenda" className="underline hover:no-underline">Agenda complet</Link></li>
              </ul>
              <p className="font-mono-brand text-[10px] tracking-[2.5px] uppercase mb-4 mt-8 text-[hsl(var(--black))]/60">Voir aussi</p>
              <ul className="space-y-2 text-sm">
                <li><Link to="/#mediation" className="underline hover:no-underline">Conférences et savoirs</Link></li>
                <li><Link to="/workshops" className="underline hover:no-underline">Ateliers tous publics</Link></li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BaladesBotaniques;
