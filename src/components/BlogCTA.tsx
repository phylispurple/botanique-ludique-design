import { Link } from "react-router-dom";
import { Leaf, Calendar, Users } from "lucide-react";

interface BlogCTAProps {
  variant?: "ethnobotanique" | "teinture";
}

const BlogCTA = ({ variant = "ethnobotanique" }: BlogCTAProps) => {
  const content = {
    ethnobotanique: {
      title: "Envie d'explorer ces thématiques en atelier ?",
      description: "Je propose des ateliers botaniques pour particuliers (agenda public) et professionnels (entreprises, écoles, associations). Découvrez les plantes de manière ludique et interactive !",
      primaryLink: "/workshops",
      primaryText: "Ateliers Particuliers",
      secondaryLink: "/pro",
      secondaryText: "Ateliers Professionnels"
    },
    teinture: {
      title: "Envie de pratiquer la teinture végétale ?",
      description: "Participez à un atelier de teinture végétale pour découvrir ces techniques en direct ! Ouvert aux particuliers (agenda public) et aux professionnels (entreprises, écoles, associations).",
      primaryLink: "/workshops",
      primaryText: "Ateliers Particuliers",
      secondaryLink: "/pro",
      secondaryText: "Ateliers Professionnels"
    }
  };

  const { title, description, primaryLink, primaryText, secondaryLink, secondaryText } = content[variant];

  return (
    <section className="bg-gradient-to-br from-sage/20 to-sand rounded-2xl p-8 md:p-12 text-center animate-fade-in mt-12">
      <div className="flex justify-center gap-4 mb-6">
        <Leaf className="w-8 h-8 text-sage" />
        <Users className="w-8 h-8 text-sage/70" />
        <Calendar className="w-8 h-8 text-sage/50" />
      </div>
      
      <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
        {title}
      </h2>
      
      <p className="text-lg text-charcoal/80 leading-relaxed mb-8 max-w-2xl mx-auto">
        {description}
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link 
          to={primaryLink}
          className="inline-flex items-center justify-center px-8 py-4 bg-sage hover:bg-sage-dark text-off-white font-semibold uppercase tracking-wider transition-all rounded-full"
        >
          {primaryText}
        </Link>
        <Link 
          to={secondaryLink}
          className="inline-flex items-center justify-center px-8 py-4 border-2 border-sage text-sage hover:bg-sage hover:text-off-white font-semibold uppercase tracking-wider transition-all rounded-full"
        >
          {secondaryText}
        </Link>
      </div>
    </section>
  );
};

export default BlogCTA;
