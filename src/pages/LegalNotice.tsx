import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const LegalNotice = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F7F7EB' }}>
      <Navigation />
      
      <main className="container mx-auto px-4 md:px-6 py-32">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-serif text-5xl md:text-6xl font-light text-center mb-12" style={{ color: '#5D653A' }}>
            Mentions légales
          </h1>
          
          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-medium" style={{ color: '#4E4E3F' }}>
              Éditeur du site
            </h2>
            <p className="text-base leading-relaxed" style={{ color: '#4E4E3F' }}>
              <strong>Botanique Ludique</strong><br />
              Vanessa Charlery<br />
              Le Pecq, Yvelines (78), France<br />
              Email : <a href="mailto:botaniqueludique@gmail.com" className="underline hover:opacity-70 transition-opacity">botaniqueludique@gmail.com</a>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-medium" style={{ color: '#4E4E3F' }}>
              Hébergement
            </h2>
            <p className="text-base leading-relaxed" style={{ color: '#4E4E3F' }}>
              Ce site est hébergé par <strong>Lovable</strong>, une plateforme de développement web.<br />
              Pour plus d'informations : <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70 transition-opacity">lovable.dev</a>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-medium" style={{ color: '#4E4E3F' }}>
              Propriété intellectuelle
            </h2>
            <p className="text-base leading-relaxed" style={{ color: '#4E4E3F' }}>
              Tous les contenus présents sur ce site (textes, images, photographies, design, illustrations, logos) 
              sont la propriété exclusive de <strong>Botanique Ludique – Vanessa Charlery</strong>.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#4E4E3F' }}>
              Toute reproduction, distribution, modification, adaptation, retransmission ou publication, 
              même partielle, de ces différents éléments est strictement interdite sans l'accord écrit 
              préalable de Vanessa Charlery.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#4E4E3F' }}>
              Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient 
              sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux 
              dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-medium" style={{ color: '#4E4E3F' }}>
              Crédits
            </h2>
            <p className="text-base leading-relaxed" style={{ color: '#4E4E3F' }}>
              Site conçu et réalisé par <strong>Vanessa Charlery</strong> sur la plateforme <strong>Lovable</strong>.<br />
              Toutes les photographies et illustrations sont l'œuvre de Vanessa Charlery, 
              sauf mention contraire explicite.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-medium" style={{ color: '#4E4E3F' }}>
              Données personnelles
            </h2>
            <p className="text-base leading-relaxed" style={{ color: '#4E4E3F' }}>
              Les informations recueillies via le formulaire de contact sont destinées uniquement 
              à Botanique Ludique pour répondre à vos demandes. Conformément au RGPD, vous disposez 
              d'un droit d'accès, de rectification et de suppression de vos données personnelles. 
              Pour exercer ce droit, contactez-nous à l'adresse : 
              <a href="mailto:botaniqueludique@gmail.com" className="underline hover:opacity-70 transition-opacity ml-1">
                botaniqueludique@gmail.com
              </a>
            </p>
          </section>

          <div className="pt-12 text-center">
            <p className="text-sm italic" style={{ color: '#A7B795' }}>
              Dernière mise à jour : Janvier 2025
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LegalNotice;
