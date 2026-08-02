import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPhotoStrip from "@/components/LandingPhotoStrip";
import PhotoCarousel from "@/components/PhotoCarousel";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import { TreePine, Compass, Building2, ArrowRight, BookOpen, Landmark, GraduationCap, Sun, MapPin, Users } from "lucide-react";
import galleryForestWalk from "@/assets/gallery-forest-walk.webp";
import galleryAutumnLeaves from "@/assets/gallery-autumn-leaves.webp";
import workshopSharedGarden from "@/assets/workshop-shared-garden.jpg";
import blogTerrariumKewGardens from "@/assets/blog-terrarium-kew-gardens.jpg";
import galleryCollegeEee1 from "@/assets/gallery-college-eee-1.webp";

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

const reasons = [
  {
    icon: GraduationCap,
    title: "Rigueur académique",
    desc: "Formée en anthropologie de la nature à l'EHESS, une approche qui croise recherche universitaire et médiation accessible à tous les publics.",
  },
  {
    icon: BookOpen,
    title: "Récit vivant",
    desc: "Chaque plante devient une porte d'entrée vers une histoire sociale, politique et culturelle, jamais un simple nom latin à retenir.",
  },
  {
    icon: MapPin,
    title: "Adaptée à votre lieu",
    desc: "Jardin patrimonial, musée, rue ou parc de quartier : chaque balade est construite sur mesure pour votre terrain et vos collections.",
  },
  {
    icon: Users,
    title: "Déjà éprouvée",
    desc: "Des parcours déjà menés pour le Musée de la Ville de Saint-Quentin-en-Yvelines, l'École Du Breuil et la Mairie du 14e arrondissement de Paris.",
  },
];

const explore = [
  {
    label: "Par département",
    icon: MapPin,
    links: [
      { to: "/balade-botanique-paris", name: "Paris (75)" },
      { to: "/balade-botanique-yvelines", name: "Yvelines (78)" },
      { to: "/balade-botanique-hauts-de-seine", name: "Hauts-de-Seine (92)" },
      { to: "/balade-botanique-val-d-oise", name: "Val-d'Oise (95)" },
    ],
  },
  {
    label: "Par public",
    icon: Users,
    links: [
      { to: "/balade-botanique-musee", name: "Musées et institutions" },
      { to: "/balade-botanique-jardin-patrimonial", name: "Jardins patrimoniaux" },
      { to: "/balade-botanique-entreprise-cse", name: "Entreprises et CSE" },
      { to: "/balade-botanique-scolaire", name: "Écoles et collèges" },
    ],
  },
  {
    label: "Par thématique",
    icon: Compass,
    links: [
      { to: "/balade-botanique-urbaine-paris", name: "Botanique urbaine" },
      { to: "/balade-plantes-sauvages-comestibles-paris", name: "Plantes sauvages comestibles" },
      { to: "/balade-botanique-coloniale-paris", name: "Botanique coloniale" },
    ],
  },
  {
    label: "Par saison",
    icon: Sun,
    links: [
      { to: "/balade-botanique-printemps-ete", name: "Printemps et été" },
      { to: "/agenda", name: "Agenda complet" },
    ],
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

        {/* Carrousel photos */}
        <section className="py-12 bg-[hsl(var(--black))] border-y-[3px] border-[hsl(var(--black))] overflow-hidden">
          <div className="mb-8 px-6 md:px-16 lg:px-[120px] flex items-end justify-between gap-4 flex-wrap">
            <div>
              <span className="font-mono-brand text-[10px] tracking-[3px] uppercase text-[hsl(73_44%_67%)]">Sur le terrain</span>
              <h2 className="font-display text-2xl md:text-4xl uppercase leading-[0.95] tracking-[-1px] text-[hsl(var(--cream))] mt-2">
                Nos balades en <span className="text-[hsl(73_44%_67%)]">images</span>
              </h2>
            </div>
            <Link to="/gallery" className="font-mono-brand text-[11px] uppercase tracking-[1.5px] text-[hsl(var(--cream))] border-b-2 border-[hsl(73_44%_67%)] hover:text-[hsl(73_44%_67%)] transition-colors pb-1">
              Voir toute la galerie →
            </Link>
          </div>
          <PhotoCarousel
            images={[
              { src: galleryForestWalk, alt: "Balade botanique en forêt — Botanique Ludique" },
              { src: blogTerrariumKewGardens, alt: "Jardins botaniques patrimoniaux — Botanique Ludique" },
              { src: workshopSharedGarden, alt: "Balade dans un jardin partagé — Botanique Ludique" },
              { src: galleryAutumnLeaves, alt: "Balade botanique d'automne — Botanique Ludique" },
              { src: galleryCollegeEee1, alt: "Balade botanique scolaire — Botanique Ludique" },
            ]}
          />
        </section>

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

        {/* Pourquoi nous */}
        <section className="px-6 md:px-16 lg:px-[120px] py-20 bg-[hsl(var(--cream))] border-t border-[hsl(var(--black))]/15">
          <AnimatedSection>
            <span className="font-mono-brand text-[11px] tracking-[3px] uppercase text-[hsl(var(--black))]/60 block mb-4">
              Pourquoi nous
            </span>
            <h2 className="font-display text-2xl md:text-4xl uppercase leading-[1] mb-12 max-w-[700px]">
              Une approche <span className="italic font-editorial normal-case">différente</span> du végétal
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
            {reasons.map((r, idx) => (
              <AnimatedSection key={r.title} delay={idx * 100} className="h-full">
                <div className="h-full p-8 border-[3px] border-[hsl(var(--black))] -mt-[3px] -ml-[3px] hover:bg-[hsl(var(--black))] hover:text-[hsl(var(--cream))] transition-colors duration-200">
                  <r.icon className="w-7 h-7 mb-4" strokeWidth={1.5} />
                  <h3 className="font-display text-lg uppercase mb-2.5 leading-tight">{r.title}</h3>
                  <p className="text-sm leading-[1.7] opacity-75">{r.desc}</p>
                </div>
              </AnimatedSection>
            ))}
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
        <section className="px-6 md:px-16 lg:px-[120px] py-20 border-t border-[hsl(var(--black))]/15 bg-[hsl(var(--cream))]">
          <span className="font-mono-brand text-[11px] tracking-[3px] uppercase text-[hsl(var(--black))]/60 block mb-4">
            Explorer
          </span>
          <h2 className="font-display text-2xl md:text-4xl uppercase leading-[1] mb-12 max-w-[700px]">
            Toutes les balades<br />par angle
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
            {explore.map((cat) => (
              <div key={cat.label} className="border-[3px] border-[hsl(var(--black))] -mt-[3px] -ml-[3px] p-7 flex flex-col hover:bg-[hsl(var(--black))] hover:text-[hsl(var(--cream))] transition-colors duration-200 group">
                <cat.icon className="w-6 h-6 mb-4" strokeWidth={1.5} />
                <p className="font-mono-brand text-[10px] tracking-[2.5px] uppercase mb-4 opacity-60">{cat.label}</p>
                <ul className="space-y-2.5 text-sm flex-1">
                  {cat.links.map((l) => (
                    <li key={l.to}>
                      <Link to={l.to} className="inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
                        {l.name} <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link to="/#mediation" className="inline-flex items-center gap-2 font-mono-brand text-[11px] uppercase tracking-[2px] border-b-2 border-[hsl(var(--black))] hover:opacity-60 transition-opacity pb-1">
              Conférences et savoirs →
            </Link>
            <Link to="/workshops" className="inline-flex items-center gap-2 font-mono-brand text-[11px] uppercase tracking-[2px] border-b-2 border-[hsl(var(--black))] hover:opacity-60 transition-opacity pb-1">
              Ateliers tous publics →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BaladesBotaniques;
