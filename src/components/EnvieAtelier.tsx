import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Building2, Cake, Landmark, School } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import TraitDessine from "@/components/TraitDessine";
import { galet, PASTILLE } from "@/lib/organic";

/**
 * Encadré de fin de guide ou d'article : passer de la lecture à l'atelier,
 * en public (agenda), en entreprise ou pour un anniversaire.
 */
interface Props {
  /** Nom de l'atelier dans le titre, ex. « un kokedama ». Sans valeur : formulation générale. */
  sujet?: string;
  /** Page entreprise la plus proche de l'atelier (par défaut : team building). */
  entreprise?: string;
  className?: string;
  /** « institutions » : communes, médiation, écoles au lieu de public / entreprise / anniversaire. */
  pour?: "particuliers" | "institutions";
}

const TONS = ["bg-accent", "bg-[hsl(var(--olive-light))]", "bg-[hsl(210_41%_24%)] text-[hsl(var(--cream))]"];
const TILTS = ["-rotate-1", "rotate-[0.8deg]", "-rotate-[0.6deg]"];

const CHOIX_INSTITUTIONS = [
  {
    icon: Building2,
    titre: "Pour votre commune",
    texte: "Fête de la nature, semaine du développement durable, journées du patrimoine : des animations clés en main.",
    lien: "/animation-collectivites-mairies",
    bouton: "Voir les animations",
  },
  {
    icon: Landmark,
    titre: "Conférences & balades",
    texte: "Des formats de médiation pour médiathèques, musées, jardins et festivals, construits avec vous.",
    lien: "/mediation",
    bouton: "Découvrir la médiation",
  },
  {
    icon: School,
    titre: "Pour les écoles",
    texte: "Des interventions en classe, des sorties nature et des projets d'éducation artistique et culturelle.",
    lien: "/etablissements-scolaires",
    bouton: "Voir les interventions",
  },
];

const EnvieAtelier = ({ sujet, entreprise = "/team-building-nature-entreprise", className = "", pour = "particuliers" }: Props) => {
  const choixParticuliers = [
    {
      icon: CalendarDays,
      titre: "En atelier public",
      texte: "Rejoignez une prochaine séance près de chez vous, en médiathèque, en parc ou en tiers-lieu.",
      lien: "/agenda",
      bouton: "Voir l'agenda",
    },
    {
      icon: Building2,
      titre: "Pour votre entreprise",
      texte: "Un team building végétal clé en main, dans vos locaux, de 12 à 40 personnes par session.",
      lien: entreprise,
      bouton: "Demander un devis",
    },
    {
      icon: Cake,
      titre: "Pour un anniversaire",
      texte: "Un atelier à la maison pour fêter un anniversaire, entre adultes ou pour les enfants.",
      lien: "/atelier-anniversaire-adulte-nature-paris",
      bouton: "Fêter avec les plantes",
      second: { lien: "/atelier-anniversaire-enfant-nature-paris", label: "Version enfants" },
    },
  ];
  const choix: { icon: typeof CalendarDays; titre: string; texte: string; lien: string; bouton: string; second?: { lien: string; label: string } }[] =
    pour === "institutions" ? CHOIX_INSTITUTIONS : choixParticuliers;

  return (
    <section className={`px-6 py-16 md:py-20 ${className}`} aria-labelledby="envie-atelier">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <span className="section-label block mb-3">Passer à la pratique</span>
          <h2 id="envie-atelier" className="font-display text-[clamp(1.9rem,4.5vw,3rem)] uppercase leading-[0.95] tracking-[-1px]">
            {pour === "institutions" ? (
              <>
                Un projet pour <span className="text-primary">votre structure&nbsp;?</span>
              </>
            ) : sujet ? (
              <>
                Envie de faire {sujet} <span className="text-primary">avec nous&nbsp;?</span>
              </>
            ) : (
              <>
                Envie de passer <span className="text-primary">à l'atelier&nbsp;?</span>
              </>
            )}
          </h2>
          <TraitDessine className="mx-auto mt-3" variant={1} />
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          {choix.map((c, i) => (
            <AnimatedSection key={c.titre} delay={i * 110} className={i === 1 ? "md:mt-8" : ""}>
              <div
                className={`relative h-full flex flex-col bg-[hsl(var(--cream))] border-brutal shadow-brutal p-7 pt-12 ${TILTS[i]} hover:rotate-0 transition-transform duration-300`}
                style={galet(i + 1)}
              >
                <div
                  className={`absolute -top-7 left-7 w-14 h-14 flex items-center justify-center border-brutal shadow-[3px_3px_0_hsl(var(--black))] ${TONS[i]}`}
                  style={PASTILLE}
                >
                  <c.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg uppercase leading-tight mb-2">{c.titre}</h3>
                <p className="text-sm text-foreground/75 leading-relaxed mb-6 flex-1">{c.texte}</p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <Link
                    to={c.lien}
                    className={`btn-brutal inline-flex items-center gap-2 bg-accent text-foreground border-foreground text-xs px-5 py-3 hover:rotate-0 ${i % 2 ? "rotate-1" : "-rotate-1"}`}
                    style={{ borderRadius: i % 2 ? "14px 30px 12px 26px / 26px 12px 30px 14px" : "28px 14px 26px 12px / 14px 26px 12px 28px" }}
                  >
                    {c.bouton} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  {c.second && (
                    <Link to={c.second.lien} className="font-mono-brand text-[10px] uppercase tracking-[2px] underline underline-offset-4 decoration-2 hover:text-primary">
                      {c.second.label}
                    </Link>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnvieAtelier;
