import EnvieAtelier from "@/components/EnvieAtelier";

interface BlogCTAProps {
  variant?: "ethnobotanique" | "teinture";
}

/** Encadré de fin d'article : passer de la lecture à l'atelier. */
const BlogCTA = ({ variant = "ethnobotanique" }: BlogCTAProps) => (
  <div className="mt-12 -mx-6">
    <EnvieAtelier
      sujet={variant === "teinture" ? "une teinture végétale" : undefined}
      entreprise={variant === "teinture" ? "/atelier-teinture-vegetale-team-building" : undefined}
      className="!px-0"
    />
  </div>
);

export default BlogCTA;
