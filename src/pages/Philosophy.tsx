import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Philosophy = () => {
  const pillars = [
    {
      title: "Connexion",
      description:
        "Se relier au végétal, c'est se relier à soi. Chaque atelier invite à ralentir, observer et ressentir, afin de retrouver une présence attentive au vivant.",
      color: "bg-sage/10 text-sage",
    },
    {
      title: "Croissance",
      description:
        "À l'image des cycles des plantes, nous avançons par phases. Nous créons des espaces qui respectent les rythmes naturels et valorisent l'apprentissage progressif.",
      color: "bg-earth/10 text-earth",
    },
    {
      title: "Rituel",
      description:
        "Le geste répété devient rituel et concentre l'intention. Nous cultivons des moments sensibles où la création est une forme de méditation partagée.",
      color: "bg-accent/10 text-accent",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24">
        <section className="relative overflow-hidden bg-sand py-24">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute -top-10 left-10 h-40 w-40 rounded-full bg-earth/30 blur-3xl" />
            <div className="absolute bottom-0 right-10 h-60 w-60 rounded-full bg-sage/30 blur-3xl" />
          </div>
          <div className="container relative mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 text-center md:px-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-charcoal/5 px-6 py-2 font-sans text-xs uppercase tracking-[0.4em] text-charcoal/60">
              Notre manifeste
            </span>
            <h1 className="font-serif text-4xl font-light leading-tight text-charcoal md:text-6xl">
              Une pédagogie végétale, sensible et contemporaine
            </h1>
            <p className="max-w-3xl font-sans text-lg leading-relaxed text-charcoal/80">
              Les ateliers Botanique Ludique sont pensés comme des expériences immersives où la science dialogue avec le geste artisanal. Nous cultivons un équilibre entre connaissance, intuition et plaisir du faire.
            </p>
          </div>
        </section>

        <section className="bg-off-white py-24">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-3">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="relative overflow-hidden rounded-3xl border border-sage/20 bg-white p-10 shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className={`inline-flex rounded-full px-4 py-2 font-sans text-[0.65rem] uppercase tracking-[0.35em] ${pillar.color}`}>
                    {pillar.title}
                  </div>
                  <p className="mt-6 font-sans text-base leading-relaxed text-charcoal/80">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-sage-dark py-24 text-off-white">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute -top-12 right-10 h-48 w-48 rounded-full bg-accent/30 blur-3xl" />
            <div className="absolute bottom-10 left-12 h-64 w-64 rounded-full bg-earth/40 blur-3xl" />
          </div>
          <div className="container relative mx-auto flex max-w-4xl flex-col gap-10 px-4 md:px-6">
            <blockquote className="rounded-3xl border border-off-white/20 bg-off-white/10 p-10 text-center shadow-2xl backdrop-blur-md">
              <p className="font-serif text-3xl font-light leading-tight md:text-4xl">
                « Dans chaque graine réside la possibilité d’une forêt. Dans chaque atelier, la promesse d’une transformation. »
              </p>
              <footer className="mt-6 font-sans text-xs uppercase tracking-[0.4em] text-sand/80">Vanessa Charlery</footer>
            </blockquote>
            <div className="grid gap-10 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="font-serif text-3xl font-light">Une méthodologie organique</h2>
                <p className="font-sans text-base leading-relaxed text-off-white/80">
                  Nous travaillons avec des matériaux locaux et de saison, respectueux des écosystèmes. Chaque séance s’adapte au groupe, aux envies et aux sensibilités des participant·es.
                </p>
                <p className="font-sans text-base leading-relaxed text-off-white/80">
                  Les protocoles scientifiques deviennent des jeux, les gestes artisanaux se modernisent : l'expérience est toujours collaborative, inclusive et joyeuse.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="font-serif text-3xl font-light">Des espaces régénérateurs</h2>
                <p className="font-sans text-base leading-relaxed text-off-white/80">
                  Nous pensons les ateliers comme des bulles de respiration. L’attention portée aux ambiances, aux textures et aux sons soutient l’émergence d’émotions positives et durables.
                </p>
                <p className="font-sans text-base leading-relaxed text-off-white/80">
                  Entre théorie, pratique et contemplation, chaque participant·e repart avec un objet, un savoir-faire et une histoire à partager.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-earth py-24">
          <div className="container mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 text-center text-off-white md:px-6">
            <h2 className="font-serif text-4xl font-light md:text-5xl">Envie de vivre l’expérience ?</h2>
            <p className="max-w-3xl font-sans text-lg leading-relaxed text-off-white/80">
              Choisissez un atelier, une formation ou imaginons ensemble un format sur mesure pour votre équipe, votre école ou votre événement. Le végétal se déploie dans toutes les situations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/ateliers"
                className="inline-flex items-center gap-3 rounded-full bg-off-white px-8 py-4 font-sans text-sm uppercase tracking-widest text-charcoal transition-all hover:scale-105 hover:bg-sand"
              >
                Voir les ateliers
                <span className="text-xl">→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-off-white/70 px-8 py-4 font-sans text-sm uppercase tracking-widest text-off-white transition-all hover:scale-105 hover:bg-off-white/10"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Philosophy;
