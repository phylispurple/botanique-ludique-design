import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import aboutImage from "@/assets/about-vanessa.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24">
        <section className="relative overflow-hidden bg-sage-dark text-off-white">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute -top-10 right-10 h-64 w-64 rounded-full bg-earth/40 blur-3xl" />
            <div className="absolute bottom-0 left-16 h-56 w-56 rounded-[45%] bg-accent/30 blur-3xl" />
            <div className="absolute top-1/3 left-1/3 h-24 w-24 rounded-full bg-sand/30 blur-xl" />
          </div>
          <div className="container relative mx-auto flex flex-col gap-12 px-4 py-28 text-center md:px-6">
            <span className="mx-auto inline-flex items-center gap-2 rounded-full bg-off-white/10 px-6 py-2 font-sans text-xs uppercase tracking-[0.4em] text-sand/80">
              Vanessa Charlery
            </span>
            <h1 className="mx-auto max-w-4xl font-serif text-4xl font-light leading-tight md:text-6xl">
              Ethnobotaniste, photographe et conteuse du vivant
            </h1>
            <p className="mx-auto max-w-3xl font-sans text-lg leading-relaxed text-sand/90">
              Botanique Ludique est né du désir de tisser un lien sensible entre l'humain et le végétal. Vanessa accompagne les particuliers, les écoles et les entreprises à travers des expériences immersives où la créativité devient un rituel.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/ateliers"
                className="inline-flex items-center gap-3 rounded-full bg-earth px-8 py-4 font-sans text-sm uppercase tracking-widest text-off-white transition-all hover:scale-105 hover:bg-earth/90"
              >
                Explorer les ateliers
                <span className="text-xl">→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-off-white/60 px-8 py-4 font-sans text-sm uppercase tracking-widest text-off-white transition-all hover:scale-105 hover:bg-off-white/10"
              >
                Inviter Vanessa
              </Link>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-sand py-24">
          <div className="absolute -top-12 left-10 h-40 w-40 rounded-full bg-sage/30 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-56 w-56 rounded-[50%] bg-earth/20 blur-3xl" />
          <div className="container relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-[1.1fr_0.9fr] md:px-6">
            <div className="space-y-8">
              <span className="inline-block rounded-full bg-earth/10 px-5 py-2 font-sans text-xs uppercase tracking-[0.3em] text-earth">
                Une trajectoire hybride
              </span>
              <h2 className="font-serif text-3xl font-light text-charcoal md:text-5xl">
                Croiser la recherche, la photographie et l'artisanat
              </h2>
              <div className="space-y-5 font-sans text-base leading-relaxed text-charcoal/80">
                <p>
                  Formée à l'ethnobotanique, Vanessa étudie les relations entre les plantes et les cultures humaines. Ses recherches l'ont menée des forêts tropicales aux jardins urbains, toujours avec la même curiosité pour les savoir-faire qui relient l'humain au vivant.
                </p>
                <p>
                  Parallèlement, la photographie est devenue un outil de narration. À travers l'objectif, elle capture les textures, les gestes et les rituels végétaux qui racontent des histoires intimes.
                </p>
                <p>
                  Cette double approche nourrit des ateliers où la transmission scientifique se mêle à la poésie du geste. Chaque rencontre est un espace d'écoute, de création et de transformation.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-6 top-8 h-24 w-24 rounded-full bg-earth/30 blur-xl" />
              <div className="absolute -right-4 bottom-10 h-28 w-28 rounded-[45%] bg-sage-dark/30 blur-xl" />
              <div className="relative overflow-hidden rounded-3xl border border-off-white/40 shadow-2xl">
                <img
                  src={aboutImage}
                  alt="Vanessa Charlery"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-off-white py-24">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-3">
              {["Écoute", "Transmission", "Créativité"].map((value, index) => (
                <div
                  key={value}
                  className="group relative overflow-hidden rounded-3xl border border-sage/20 bg-white p-10 shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="absolute -top-20 right-0 h-48 w-48 rounded-full bg-sage/10 blur-3xl transition-all group-hover:scale-110" />
                  <span className="font-sans text-xs uppercase tracking-[0.3em] text-sage">Manifeste</span>
                  <h3 className="mt-6 font-serif text-3xl font-light text-charcoal">{value}</h3>
                  <p className="mt-6 font-sans text-base leading-relaxed text-charcoal/80">
                    {index === 0 &&
                      "Prendre le temps de comprendre les besoins de chaque participant·e et de chaque plante pour imaginer des expériences qui respectent les rythmes naturels."}
                    {index === 1 &&
                      "Partager des savoirs ethnobotaniques accessibles tout en honorant les traditions qui les ont fait naître. La connaissance est un lien vivant."}
                    {index === 2 &&
                      "Encourager l'expression personnelle à travers des matériaux végétaux. Laisser la nature inspirer des formes nouvelles et sensibles."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-earth py-24">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-12 left-12 h-36 w-36 rounded-full bg-sand/30 blur-3xl" />
            <div className="absolute bottom-0 right-10 h-60 w-60 rounded-full bg-sage/40 blur-3xl" />
          </div>
          <div className="container relative mx-auto flex max-w-4xl flex-col items-center gap-8 px-4 text-center text-off-white md:px-6">
            <h2 className="font-serif text-4xl font-light md:text-5xl">Une approche holistique du végétal</h2>
            <p className="font-sans text-lg leading-relaxed text-off-white/80">
              Chaque atelier est pensé comme un cheminement : explorer les textures, écouter les récits des plantes, imaginer des gestes contemporains à partir de savoirs ancestraux. L'objectif ? Faire naître des expériences mémorables et régénératrices.
            </p>
            <Link
              to="/philosophie"
              className="inline-flex items-center gap-3 rounded-full bg-off-white px-8 py-4 font-sans text-sm uppercase tracking-widest text-charcoal transition-all hover:scale-105 hover:bg-sand"
            >
              Découvrir la philosophie
              <span className="text-xl">→</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
