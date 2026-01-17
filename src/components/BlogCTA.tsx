import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

interface BlogCTAProps {
  variant?: "ethnobotanique" | "teinture";
}

const BlogCTA = ({ variant = "ethnobotanique" }: BlogCTAProps) => {
  const content = {
    ethnobotanique: {
      title: "Envie d'explorer ces thématiques en atelier ?",
      description: "Je propose des ateliers botaniques pour particuliers et professionnels. Découvrez les plantes de manière ludique et interactive !",
    },
    teinture: {
      title: "Envie de pratiquer la teinture végétale ?",
      description: "Participez à un atelier pour découvrir ces techniques en direct et repartir avec vos propres créations !",
    }
  };

  const { title, description } = content[variant];

  return (
    <section className="bg-gradient-to-br from-sage/20 to-sand rounded-2xl p-8 md:p-12 text-center animate-fade-in mt-12">
      <Leaf className="w-10 h-10 text-sage mx-auto mb-6" />
      
      <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
        {title}
      </h2>
      
      <p className="text-lg text-charcoal/80 leading-relaxed mb-8 max-w-2xl mx-auto">
        {description}
      </p>
      
      <Link 
        to="/workshops"
        className="inline-flex items-center justify-center px-8 py-4 bg-sage hover:bg-sage-dark text-off-white font-semibold uppercase tracking-wider transition-all rounded-full"
      >
        Découvrir les ateliers
      </Link>
    </section>
  );
};

export default BlogCTA;
