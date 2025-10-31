import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-botanical.jpg";
import { 
  LeafBranch, 
  Butterfly, 
  Flower, 
  Bee, 
  Mushroom, 
  Snail, 
  Bird, 
  Seed,
  Strawberry
} from "@/components/BotanicalIllustrations";

const Index = () => {
  const navigate = useNavigate();

  const workshops = [
    { name: "Kokedama", color: "text-sage" },
    { name: "Teinture Végétale", color: "text-earth" },
    { name: "Terrariums", color: "text-sage-dark" },
    { name: "Fresques Végétales", color: "text-accent" },
    { name: "Bombes de Graines", color: "text-sage-light" },
    { name: "Couronnes de Fleurs", color: "text-earth" },
    { name: "Vannerie", color: "text-sage" },
    { name: "Herbier", color: "text-accent" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background">
      <Navigation />

      {/* Hero Collage Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
        
        {/* Floating Illustrations - Top Left */}
        <LeafBranch 
          className="absolute top-20 left-[5%] w-12 h-16 text-sage animate-float cursor-pointer hover:text-sage-dark transition-colors"
          onClick={() => navigate('/workshops')}
        />
        <Snail 
          className="absolute top-32 left-[12%] w-14 h-12 text-earth/60 animate-float [animation-delay:1s] cursor-pointer hover:text-earth transition-colors"
          onClick={() => navigate('/workshops')}
        />
        <Flower 
          className="absolute top-40 left-[8%] w-10 h-14 text-sage-light animate-float [animation-delay:2s] cursor-pointer hover:text-sage transition-colors"
          onClick={() => navigate('/workshops')}
        />

        {/* Top Right */}
        <Butterfly 
          className="absolute top-24 right-[8%] w-16 h-12 text-accent/50 animate-float [animation-delay:0.5s] cursor-pointer hover:text-accent transition-colors"
          onClick={() => navigate('/workshops')}
        />
        <Bird 
          className="absolute top-16 right-[15%] w-16 h-10 text-earth/50 animate-float [animation-delay:1.5s] cursor-pointer hover:text-earth transition-colors"
          onClick={() => navigate('/workshops')}
        />
        <Bee 
          className="absolute top-36 right-[5%] w-14 h-10 text-sage animate-float [animation-delay:2.5s] cursor-pointer hover:text-sage-dark transition-colors"
          onClick={() => navigate('/workshops')}
        />

        {/* Bottom Left */}
        <Mushroom 
          className="absolute bottom-32 left-[10%] w-12 h-14 text-earth/60 animate-float [animation-delay:1s] cursor-pointer hover:text-earth transition-colors"
          onClick={() => navigate('/workshops')}
        />
        <Seed 
          className="absolute bottom-24 left-[18%] w-10 h-10 text-sage-light animate-float [animation-delay:3s] cursor-pointer hover:text-sage transition-colors"
          onClick={() => navigate('/workshops')}
        />

        {/* Bottom Right */}
        <Strawberry 
          className="absolute bottom-40 right-[12%] w-10 h-12 text-accent/50 animate-float [animation-delay:2s] cursor-pointer hover:text-accent transition-colors"
          onClick={() => navigate('/workshops')}
        />
        <Flower 
          className="absolute bottom-28 right-[6%] w-12 h-16 text-sage animate-float [animation-delay:0.5s] cursor-pointer hover:text-sage-dark transition-colors"
          onClick={() => navigate('/workshops')}
        />

        {/* Mobile hidden illustrations for larger screens */}
        <LeafBranch 
          className="hidden md:block absolute top-[45%] left-[3%] w-10 h-14 text-sage-light/50 animate-float [animation-delay:1.5s] cursor-pointer hover:text-sage transition-colors"
          onClick={() => navigate('/workshops')}
        />
        <Butterfly 
          className="hidden md:block absolute bottom-[45%] right-[3%] w-14 h-10 text-earth/40 animate-float [animation-delay:2.5s] cursor-pointer hover:text-earth transition-colors"
          onClick={() => navigate('/workshops')}
        />
        <Bee 
          className="hidden lg:block absolute top-[30%] left-[20%] w-12 h-8 text-accent/40 animate-float [animation-delay:3.5s] cursor-pointer hover:text-accent transition-colors"
          onClick={() => navigate('/workshops')}
        />
        <Bird 
          className="hidden lg:block absolute bottom-[35%] right-[18%] w-14 h-9 text-sage/40 animate-float [animation-delay:4s] cursor-pointer hover:text-sage-dark transition-colors"
          onClick={() => navigate('/workshops')}
        />

        {/* Central Content with Image */}
        <div className="relative z-10 max-w-5xl mx-auto">
          
          {/* Title Above Image */}
          <div className="text-center mb-8 animate-fade-up">
            <p className="font-sans text-sm uppercase tracking-widest text-muted-foreground mb-2">
              Vintage & Moderne
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-2">
              Botanique
            </h1>
            <p className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-sage italic">
              Ludique
            </p>
          </div>

          {/* Central Image with Watercolor Effect */}
          <div className="relative mb-8 animate-fade-up [animation-delay:200ms]">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)]">
              <img 
                src={heroImage} 
                alt="Botanique Ludique - Ateliers créatifs" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
              
              {/* Overlay text on image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4">
                  <h2 className="font-serif text-4xl md:text-6xl text-white drop-shadow-lg mb-2">
                    Ateliers Créatifs
                  </h2>
                  <p className="font-sans text-lg md:text-xl text-white/90 drop-shadow">
                    Créativité • Rituel • Jeu
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20">
              <LeafBranch className="w-full h-full text-sage-light opacity-60" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20">
              <Flower className="w-full h-full text-earth opacity-60" />
            </div>
          </div>

          {/* Subtitle and Description */}
          <div className="text-center animate-fade-up [animation-delay:400ms] mb-8">
            <p className="font-serif text-xl md:text-2xl text-muted-foreground italic mb-4">
              par Vanessa Charlery
            </p>
            <p className="font-sans text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              illustrations, ateliers, photographie & plus encore
            </p>
          </div>

          {/* Workshop Tags Cloud */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-12 animate-fade-up [animation-delay:600ms]">
            {workshops.map((workshop, index) => (
              <Link
                key={workshop.name}
                to="/workshops"
                className={`group px-4 py-2 rounded-full border-2 border-current ${workshop.color} 
                  hover:bg-current hover:text-primary-foreground transition-all duration-300
                  animate-fade-up cursor-pointer`}
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <span className="font-sans text-sm">
                  {workshop.name}
                </span>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12 animate-fade-up [animation-delay:1200ms]">
            <Link
              to="/workshops"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground 
                font-sans text-sm uppercase tracking-wider hover:bg-primary/90 transition-all duration-300
                rounded-full shadow-lg hover:shadow-xl hover:scale-105"
            >
              Découvrir les Ateliers
              <span className="text-lg">→</span>
            </Link>
          </div>

          {/* Stat Badge */}
          <div className="absolute top-0 right-0 md:right-8 w-20 h-20 md:w-24 md:h-24 bg-accent/20 
            rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-accent/30
            animate-fade-up [animation-delay:400ms]">
            <div className="text-center">
              <p className="font-serif text-2xl md:text-3xl font-bold text-accent">12+</p>
              <p className="font-sans text-xs text-accent/80">ateliers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center relative">
            
            {/* Decorative elements */}
            <Butterfly className="absolute -top-8 left-0 w-12 h-10 text-sage/30 animate-float" />
            <Flower className="absolute -top-4 right-4 w-10 h-14 text-earth/30 animate-float [animation-delay:1s]" />
            
            <h2 className="font-serif text-3xl md:text-5xl font-light mb-8 text-foreground animate-fade-up">
              Où la Science Rencontre la Poésie
            </h2>
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed mb-6 animate-fade-up [animation-delay:200ms]">
              Fondée par l'ethnobotaniste et photographe Vanessa Charlery, Botanique Ludique vous invite à
              vous reconnecter avec le monde végétal à travers des expériences créatives et sensorielles.
            </p>
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-up [animation-delay:400ms]">
              Chaque atelier mêle savoir botanique traditionnel et créativité contemporaine,
              créant des espaces de croissance, de rituel et de jeu.
            </p>

            <Mushroom className="absolute -bottom-4 left-8 w-10 h-12 text-sage-light/30 animate-float [animation-delay:2s]" />
            <Bee className="absolute bottom-0 right-0 w-12 h-8 text-accent/30 animate-float [animation-delay:1.5s]" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
