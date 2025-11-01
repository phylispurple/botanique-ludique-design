import { Flower, LeafBranch, Seed } from "./BotanicalIllustrations";

const FloatingIllustrations = () => {
  return (
    <>
      {/* Kokedama suspendu - haut gauche */}
      <div 
        className="fixed top-[15%] left-[5%] w-16 h-16 opacity-40 animate-drift pointer-events-none z-0"
        style={{ color: '#A7B795', animationDelay: '0s' }}
      >
        <svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="45" r="18" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3"/>
          <path d="M30 27 L30 10" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M25 45 C25 45, 27 40, 30 35 C33 40, 35 45, 35 45" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        </svg>
      </div>

      {/* Feuille - milieu droite */}
      <div 
        className="fixed top-[40%] right-[8%] w-20 h-20 opacity-35 animate-drift-slow pointer-events-none z-0"
        style={{ color: '#C9D2B5', animationDelay: '8s' }}
      >
        <LeafBranch />
      </div>

      {/* Fleur simple - bas gauche */}
      <div 
        className="fixed bottom-[25%] left-[12%] w-14 h-14 opacity-30 animate-drift pointer-events-none z-0"
        style={{ color: '#A7B795', animationDelay: '15s' }}
      >
        <Flower />
      </div>

      {/* Pot avec plante - haut droite */}
      <div 
        className="fixed top-[20%] right-[15%] w-16 h-16 opacity-40 animate-drift-slow pointer-events-none z-0"
        style={{ color: '#C9D2B5', animationDelay: '5s' }}
      >
        <svg viewBox="0 0 50 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 45 L15 60 L35 60 L32 45 Z" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.2"/>
          <path d="M25 45 L25 30" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M20 35 C20 35, 22 32, 25 30" stroke="currentColor" strokeWidth="1.2" fill="none"/>
          <path d="M30 35 C30 35, 28 32, 25 30" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        </svg>
      </div>

      {/* Tige avec feuilles - milieu gauche */}
      <div 
        className="fixed top-[55%] left-[7%] w-12 h-24 opacity-35 animate-drift pointer-events-none z-0"
        style={{ color: '#A7B795', animationDelay: '12s' }}
      >
        <svg viewBox="0 0 40 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 10 L20 70" stroke="currentColor" strokeWidth="1.5"/>
          <ellipse cx="12" cy="25" rx="6" ry="10" fill="currentColor" opacity="0.15" transform="rotate(-30 12 25)"/>
          <ellipse cx="28" cy="40" rx="6" ry="10" fill="currentColor" opacity="0.15" transform="rotate(30 28 40)"/>
          <ellipse cx="15" cy="55" rx="5" ry="8" fill="currentColor" opacity="0.15" transform="rotate(-25 15 55)"/>
        </svg>
      </div>

      {/* Graine - bas droite */}
      <div 
        className="fixed bottom-[30%] right-[10%] w-10 h-10 opacity-30 animate-drift-slow pointer-events-none z-0"
        style={{ color: '#C9D2B5', animationDelay: '18s' }}
      >
        <Seed />
      </div>

      {/* Arrosoir - milieu haut */}
      <div 
        className="fixed top-[30%] left-[45%] w-16 h-16 opacity-25 animate-drift pointer-events-none z-0"
        style={{ color: '#A7B795', animationDelay: '22s' }}
      >
        <svg viewBox="0 0 70 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="35" r="12" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.2"/>
          <path d="M28 35 L15 35 L15 30 L20 30" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M52 35 L58 30 L60 28 M60 28 L62 30 M60 28 L58 26" stroke="currentColor" strokeWidth="1.2" fill="none"/>
          <rect x="38" y="22" width="4" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        </svg>
      </div>

      {/* Racine - bas milieu */}
      <div 
        className="fixed bottom-[15%] left-[40%] w-14 h-14 opacity-30 animate-drift-slow pointer-events-none z-0"
        style={{ color: '#C9D2B5', animationDelay: '25s' }}
      >
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 5 L30 25 C30 35, 20 40, 15 45" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M30 25 C30 35, 40 40, 45 45" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M30 15 C28 18, 24 20, 20 22" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        </svg>
      </div>
    </>
  );
};

export default FloatingIllustrations;
