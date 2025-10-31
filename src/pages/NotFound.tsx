import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("Erreur 404 : tentative d'accès à une route inexistante :", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-sage-dark">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-10 -left-10 h-60 w-60 rounded-full bg-earth/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 h-24 w-24 -translate-x-1/2 rounded-[40%] bg-sand/20 blur-xl" />
      </div>
      <div className="relative z-10 max-w-xl rounded-3xl bg-off-white/10 px-10 py-16 text-center text-off-white shadow-2xl backdrop-blur-xl">
        <p className="font-sans text-xs uppercase tracking-[0.4em] text-sand/80">Erreur 404</p>
        <h1 className="mt-4 font-serif text-5xl font-light leading-tight">
          La page que vous recherchez s'est égarée dans la forêt.
        </h1>
        <p className="mt-6 font-sans text-base leading-relaxed text-sand/90">
          Le chemin que vous avez emprunté ne mène à aucun atelier. Retournez à l'accueil pour poursuivre votre exploration végétale.
        </p>
        <div className="mt-10 flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-3 rounded-full bg-earth px-8 py-4 font-sans text-sm uppercase tracking-widest text-off-white transition-all hover:scale-105 hover:bg-earth/90"
          >
            Retour à l'accueil
            <span className="text-xl">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
