import { Link } from "react-router-dom";
import { Leaf, Calendar, Users } from "lucide-react";

const BlogCTA = () => {
  return (
    <section className="bg-gradient-to-br from-sage/20 to-sand rounded-2xl p-8 md:p-12 text-center animate-fade-in mt-12">
      <div className="flex justify-center gap-4 mb-6">
        <Leaf className="w-8 h-8 text-sage" />
        <Users className="w-8 h-8 text-sage/70" />
        <Calendar className="w-8 h-8 text-sage/50" />
      </div>
      
      <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
        Envie d'explorer ces thématiques en atelier ?
      </h2>
      
      <p className="text-lg text-charcoal/80 leading-relaxed mb-8 max-w-2xl mx-auto">
        Je propose des ateliers botaniques pour <strong>particuliers</strong> (agenda public) et <strong>professionnels</strong> (entreprises, écoles, associations). 
        Découvrez les plantes de manière ludique et interactive !
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link 
          to="/workshops"
          className="inline-flex items-center justify-center px-8 py-4 bg-sage hover:bg-sage-dark text-off-white font-semibold uppercase tracking-wider transition-all rounded-full"
        >
          Ateliers Particuliers
        </Link>
        <Link 
          to="/pro"
          className="inline-flex items-center justify-center px-8 py-4 border-2 border-sage text-sage hover:bg-sage hover:text-off-white font-semibold uppercase tracking-wider transition-all rounded-full"
        >
          Ateliers Professionnels
        </Link>
      </div>
    </section>
  );
};

export default BlogCTA;
