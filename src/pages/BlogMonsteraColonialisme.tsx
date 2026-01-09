import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { ArrowLeft, Calendar, User, BookOpen, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

// Images
import imgColonialisme from "@/assets/blog-monstera-colonialisme.jpg";
import imgSalonBourgeois from "@/assets/blog-monstera-salon-bourgeois.jpg";
import imgZooHumain from "@/assets/blog-monstera-zoo-humain.jpg";
import imgAcclimatation from "@/assets/blog-monstera-acclimatation.jpg";
import imgDecoModerne from "@/assets/blog-monstera-deco-moderne.jpg";
import imgDecoInterieur from "@/assets/blog-monstera-deco-interieur.jpg";
import imgTendance from "@/assets/blog-monstera-tendance.jpg";
import imgExpoColoniale from "@/assets/blog-monstera-expo-coloniale.webp";

const BlogMonsteraColonialisme = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "La Monstera : Une Plante Déplacée. Histoire Coloniale et Distinction Sociale",
    "description": "Analyse ethnobotanique de la Monstera deliciosa : comment cette plante tropicale est passée des forêts du Mexique aux salons bourgeois européens à travers l'histoire coloniale du XIXe siècle.",
    "image": imgTendance,
    "author": {
      "@type": "Person",
      "name": "Vanessa Charlery",
      "jobTitle": "Botaniste et animatrice ethnobotanique"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Botanique Ludique",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.botanique-ludique.fr/favicon.png"
      }
    },
    "datePublished": "2026-01-09",
    "dateModified": "2026-01-09",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.botanique-ludique.fr/blog/monstera-plante-coloniale-distinction-sociale"
    },
    "keywords": "monstera, histoire coloniale, ethnobotanique, distinction sociale, plantes tropicales, colonialisme vert, Bourdieu, jardin d'acclimatation"
  };

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <SEO 
        title="La Monstera : Une Plante Déplacée. Histoire Coloniale et Distinction Sociale | Ethnobotanique"
        description="Analyse ethnobotanique : comment la Monstera est passée des forêts mexicaines aux salons bourgeois via l'histoire coloniale. Références : Guillaume Blanc, Bourdieu, jardins d'acclimatation."
        keywords="monstera histoire coloniale, ethnobotanique, distinction sociale Bourdieu, colonialisme vert Guillaume Blanc, jardin acclimatation, plantes tropicales colonisation, monstera deliciosa origine, plante décoloniale"
        canonical="/blog/monstera-plante-coloniale-distinction-sociale"
        ogImage={imgTendance}
      />
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <article className="container mx-auto px-4 md:px-6 max-w-4xl">
          
          {/* Breadcrumb et retour */}
          <div className="mb-8 animate-fade-in">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-sage-dark hover:text-sage transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Retour aux articles
            </Link>
          </div>

          {/* En-tête de l'article */}
          <header className="mb-12 animate-fade-in">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-sage text-white px-3 py-1 rounded-full text-xs font-semibold">
                Ethnobotanique
              </span>
              <span className="bg-terracotta/80 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Histoire Coloniale
              </span>
              <span className="bg-charcoal/70 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Sociologie
              </span>
            </div>
            
            <h1 className="page-title text-[2rem] sm:text-4xl md:text-5xl mb-6 leading-tight">
              La Monstera : Une Plante Déplacée
            </h1>
            <p className="subtitle-italic text-xl md:text-2xl mb-6 text-charcoal/80">
              Histoire coloniale, jardins d'acclimatation et distinction sociale. Une analyse ethnobotanique
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-charcoal/60 border-b border-charcoal/10 pb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Vanessa Charlery, Botaniste</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime="2026-01-09">9 janvier 2026</time>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>Temps de lecture : 12 min</span>
              </div>
            </div>
          </header>

          {/* Image principale */}
          <figure className="mb-12 animate-fade-in">
            <img 
              src={imgTendance}
              alt="Monstera deliciosa dans un intérieur contemporain, plante tropicale devenue icône décorative"
              className="w-full rounded-lg shadow-lg"
              loading="eager"
            />
            <figcaption className="text-sm text-charcoal/60 mt-3 italic text-center">
              La Monstera deliciosa : d'une forêt tropicale mexicaine à nos intérieurs contemporains, une trajectoire façonnée par l'histoire coloniale.
            </figcaption>
          </figure>

          {/* Contenu de l'article */}
          <div className="prose prose-lg max-w-none">
            
            {/* Résumé / Abstract */}
            <div className="bg-sand rounded-lg p-6 mb-10 border-l-4 border-sage">
              <h2 className="text-lg font-semibold text-charcoal mb-3" style={{ fontFamily: 'Fraunces, serif' }}>
                Résumé
              </h2>
              <p className="text-charcoal/80 leading-relaxed text-base mb-0">
                La <em>Monstera deliciosa</em>, omniprésente dans nos intérieurs contemporains, incarne bien plus qu'une simple tendance décorative. 
                Cet article propose une analyse ethnobotanique de son parcours : depuis les forêts tropicales du Mexique jusqu'aux salons bourgeois 
                européens du XIXe siècle, en passant par les jardins d'essai coloniaux. En mobilisant les travaux de Guillaume Blanc sur le 
                « colonialisme vert », la théorie de la distinction sociale de Pierre Bourdieu, et les études postcoloniales sur les zoos humains, 
                nous interrogeons les mécanismes par lesquels une plante devient un marqueur de statut social et un vecteur de domination symbolique.
              </p>
            </div>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Introduction : « Est-ce que tu savais ? »
              </h2>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Est-ce que tu savais que la Monstera de ton salon n'est pas arrivée là par hasard, mais à travers l'histoire coloniale du XIXe siècle ? 
                Cette question, apparemment anodine, ouvre un champ de réflexion bien plus vaste sur nos rapports à la nature, à l'exotisme, et aux 
                héritages coloniaux qui structurent encore nos espaces domestiques.
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                La <em>Monstera deliciosa</em>, avec ses feuilles graphiques et ses fenestrations caractéristiques, est devenue une véritable icône 
                de la décoration d'intérieur contemporaine. On la retrouve partout : dans les appartements, les bureaux, les cafés branchés, 
                et même sur les motifs textiles et les papiers peints. Mais cette omniprésence masque une histoire complexe, celle d'un végétal 
                arraché à son écosystème d'origine pour être transformé en objet de consommation et en symbole de distinction sociale.
              </p>
              
              <figure className="my-8">
                <img 
                  src={imgDecoModerne}
                  alt="Intérieur contemporain saturé de plantes tropicales, la jungle domestiquée"
                  className="w-full rounded-lg shadow-md"
                  loading="lazy"
                />
                <figcaption className="text-sm text-charcoal/60 mt-3 italic text-center">
                  Un intérieur contemporain saturé de plantes tropicales : la « jungle » comme esthétique domestique maîtrisée.
                </figcaption>
              </figure>
            </section>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                1. L'extraction coloniale : nommer, classer, posséder
              </h2>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Au XIXe siècle, en pleine période coloniale, les puissances européennes organisent le rapatriement massif de plantes dites « exotiques ». 
                Ces expéditions botaniques, souvent présentées comme de pures entreprises scientifiques, s'inscrivent en réalité dans une logique 
                d'appropriation et de contrôle des ressources naturelles des territoires colonisés (Brockway, 1979).
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                C'est dans ce contexte que le botaniste danois <strong>Frederik Michael Liebmann</strong> décrit officiellement la <em>Monstera deliciosa</em> en 1849. 
                Le nom même qu'il lui attribue, <em>Monstera</em>, du latin <em>monstrum</em>, révèle le regard européen de l'époque : ce qui est 
                différent, imposant, hors norme selon les critères occidentaux, est qualifié de « monstrueux » (Madison, 1977).
              </p>
              
              <figure className="my-8">
                <img 
                  src={imgColonialisme}
                  alt="Représentation de Christophe Colomb prenant possession des Amériques, gravure historique"
                  className="w-full rounded-lg shadow-md"
                  loading="lazy"
                />
                <figcaption className="text-sm text-charcoal/60 mt-3 italic text-center">
                  Christophe Colomb prenant possession des Amériques (gravure, XIXe siècle). Les plantes, comme les terres, furent « découvertes » puis appropriées.
                </figcaption>
              </figure>

              <blockquote className="border-l-4 border-terracotta pl-6 my-8 italic text-charcoal/70">
                « L'acte de nommer n'est jamais neutre : il inscrit l'objet nommé dans un système de classification qui est aussi un système de pouvoir. 
                Nommer une plante, c'est déjà l'arracher à son contexte d'origine pour l'intégrer dans l'ordre du savoir occidental. »
                <footer className="text-sm mt-2 not-italic">Lucile Brockway, <cite>Science and Colonial Expansion</cite> (1979)</footer>
              </blockquote>

              <p className="text-charcoal/80 leading-relaxed mb-4">
                Guillaume Blanc, dans son ouvrage <strong><cite>L'invention du colonialisme vert</cite></strong> (2020), montre comment cette 
                « mise en ordre » de la nature par les Européens a servi de justification idéologique à l'entreprise coloniale. 
                La nature des colonies était présentée comme « sauvage », « primitive », nécessitant l'intervention « civilisatrice » de l'Occident.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                2. Les jardins d'acclimatation : laboratoires du contrôle du vivant
              </h2>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Avant d'entrer dans nos salons, les plantes tropicales passent par des <strong>jardins d'essai</strong> et des <strong>jardins d'acclimatation</strong>. 
                Ces lieux, véritables laboratoires coloniaux, ont une fonction précise : tester le vivant. On y observe ce qui survit au transport, 
                ce qui résiste hors de son milieu d'origine, ce qui peut être maintenu et finalement <em>contrôlé</em>.
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Le <strong>Jardin d'Acclimatation de Paris</strong>, fondé en 1860, en est un exemple emblématique. Comme le rappelle 
                Christophe Bonneuil dans ses travaux sur l'histoire des sciences coloniales (2000), ces espaces servaient à « domestiquer » 
                la nature tropicale pour la rendre exploitable et commercialisable.
              </p>
              
              <figure className="my-8">
                <img 
                  src={imgAcclimatation}
                  alt="Affiche du Jardin Zoologique d'Acclimatation, Somalis, Paris XIXe siècle"
                  className="w-full max-w-md mx-auto rounded-lg shadow-md"
                  loading="lazy"
                />
                <figcaption className="text-sm text-charcoal/60 mt-3 italic text-center">
                  Affiche du Jardin Zoologique d'Acclimatation de Paris : plantes, animaux et populations colonisées y étaient exposés côte à côte.
                </figcaption>
              </figure>

              <p className="text-charcoal/80 leading-relaxed mb-4">
                La Monstera, comme d'autres Aracées tropicales, fait partie des espèces qui « résistent » à ce processus d'acclimatation. 
                Mais attention : elle ne s'adapte pas véritablement, elle <em>supporte</em>. Cette nuance est importante :
                la plante survit dans des conditions qui ne sont pas les siennes, souvent au prix d'un développement incomplet 
                (absence de floraison, feuilles plus petites, etc.).
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                3. Du jardin d'essai au salon bourgeois : la distinction sociale par le végétal
              </h2>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Une fois acclimatée et nommée, la Monstera quitte les jardins d'essai pour entrer dans les <strong>serres privées</strong> et les 
                <strong> salons bourgeois</strong>. Elle y est placée comme objet décoratif et devient un <em>marqueur de distinction sociale</em>.
              </p>
              
              <figure className="my-8">
                <img 
                  src={imgSalonBourgeois}
                  alt="Salon bourgeois du XIXe siècle avec plantes tropicales, peinture d'époque"
                  className="w-full rounded-lg shadow-md"
                  loading="lazy"
                />
                <figcaption className="text-sm text-charcoal/60 mt-3 italic text-center">
                  Un salon bourgeois du XIXe siècle : les plantes tropicales comme signe extérieur de richesse et de cosmopolitisme.
                </figcaption>
              </figure>

              <p className="text-charcoal/80 leading-relaxed mb-4">
                Pierre Bourdieu, dans <strong><cite>La Distinction : Critique sociale du jugement</cite></strong> (1979), a montré comment 
                les pratiques de consommation — y compris les choix décoratifs — fonctionnent comme des marqueurs de position sociale. 
                Posséder une plante tropicale dans son salon, au XIXe siècle, c'est afficher un message double :
              </p>
              
              <div className="bg-sage/10 rounded-lg p-6 my-6">
                <ul className="space-y-3 text-charcoal/80">
                  <li className="flex items-start gap-3">
                    <span className="text-sage font-bold text-xl">1.</span>
                    <span><strong>« Je connais l'ailleurs »</strong> : Je suis cultivé, je voyage (au moins par procuration), j'ai accès à des réseaux d'approvisionnement exclusifs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sage font-bold text-xl">2.</span>
                    <span><strong>« Je le maîtrise »</strong> : J'ai les moyens (financiers, techniques, domestiques) de maintenir en vie un fragment de jungle tropicale chez moi.</span>
                  </li>
                </ul>
              </div>

              <p className="text-charcoal/80 leading-relaxed mb-4">
                Cette logique de distinction n'a pas disparu. Comme le souligne Rebecca Solnit dans ses essais sur l'écologie politique (2014), 
                nos rapports contemporains aux plantes d'intérieur perpétuent souvent ces schémas hérités, même si nous n'en avons pas conscience.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                4. Zoos humains et expositions coloniales : la mise en scène de l'altérité
              </h2>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                À la même période, les jardins d'acclimatation et les expositions universelles deviennent le théâtre d'une autre forme de 
                spectacle : les <strong>zoos humains</strong>. Des populations colonisées y sont exhibées aux côtés de plantes tropicales et 
                d'animaux « exotiques », dans des reconstitutions de « villages indigènes ».
              </p>
              
              <figure className="my-8">
                <img 
                  src={imgZooHumain}
                  alt="Zoo humain, populations colonisées exhibées lors d'une exposition coloniale"
                  className="w-full rounded-lg shadow-md"
                  loading="lazy"
                />
                <figcaption className="text-sm text-charcoal/60 mt-3 italic text-center">
                  Photographie d'un « zoo humain » lors d'une exposition coloniale : des êtres humains exhibés comme curiosités ethnographiques.
                </figcaption>
              </figure>

              <p className="text-charcoal/80 leading-relaxed mb-4">
                Pascal Blanchard, historien spécialiste de l'histoire coloniale et des représentations, a documenté de manière exhaustive 
                ce phénomène dans <strong><cite>Zoos humains : Au temps des exhibitions humaines</cite></strong> (2011). 
                L'Exposition coloniale de Paris en 1931, qui attira des millions de visiteurs, en constitue l'apogée.
              </p>
              
              <figure className="my-8">
                <img 
                  src={imgExpoColoniale}
                  alt="Affiche de l'Exposition Coloniale Internationale de Paris 1931"
                  className="w-full max-w-md mx-auto rounded-lg shadow-md"
                  loading="lazy"
                />
                <figcaption className="text-sm text-charcoal/60 mt-3 italic text-center">
                  Affiche officielle de l'Exposition Coloniale Internationale de Paris, 1931.
                </figcaption>
              </figure>

              <blockquote className="border-l-4 border-terracotta pl-6 my-8 italic text-charcoal/70">
                « L'objectif n'est pas de reproduire le réel, mais de le recomposer selon un regard occidental et suprémaciste. 
                Finalement, un ailleurs rendu visible, cohérent et consommable par des millions de visiteurs. 
                La nature, comme les corps, deviennent objet et spectacle. »
              </blockquote>

              <p className="text-charcoal/80 leading-relaxed mb-4">
                Cette mise en scène simultanée des plantes, des animaux et des êtres humains « exotiques » n'est pas anodine. 
                Elle participe d'une même logique de <strong>réification</strong> et de <strong>hiérarchisation</strong> du vivant, 
                où ce qui vient « d'ailleurs » est systématiquement placé en position d'objet du regard occidental.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                5. La Monstera aujourd'hui : une jungle sans danger
              </h2>
              
              <figure className="my-8">
                <img 
                  src={imgDecoInterieur}
                  alt="Monstera dans la décoration intérieure contemporaine, motif omniprésent"
                  className="w-full rounded-lg shadow-md"
                  loading="lazy"
                />
                <figcaption className="text-sm text-charcoal/60 mt-3 italic text-center">
                  La Monstera comme motif décoratif omniprésent : papiers peints, textiles, accessoires... une esthétique « jungle » domestiquée.
                </figcaption>
              </figure>

              <p className="text-charcoal/80 leading-relaxed mb-4">
                Et si notre chère Monstera est devenue une icône de la décoration et de la pop culture, c'est précisément parce qu'elle incarne 
                une nature <strong>exotique</strong>, <strong>graphique</strong>, mais surtout <strong>maîtrisée</strong>. 
                Elle offre une « jungle » domestiquée, une altérité végétale rassurante, débarrassée de tout ce qui pourrait inquiéter ou 
                déstabiliser : une <em>jungle sans danger</em>.
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Comme le remarque Anna Tsing dans <strong><cite>Le Champignon de la fin du monde</cite></strong> (2017), notre rapport aux 
                plantes révèle souvent notre difficulté à penser des formes de vie qui échappent à notre contrôle. 
                La Monstera d'intérieur, avec ses besoins standardisés et son apparence prévisible, correspond parfaitement à cette 
                attente de « nature sur mesure ».
              </p>
              
              <div className="bg-terracotta/10 rounded-lg p-6 my-8 border-l-4 border-terracotta">
                <h3 className="text-lg font-semibold text-charcoal mb-3" style={{ fontFamily: 'Fraunces, serif' }}>
                  Réflexion
                </h3>
                <p className="text-charcoal/80 leading-relaxed text-base mb-0">
                  Interroger l'histoire de nos plantes d'intérieur n'est pas un exercice de culpabilisation, mais une invitation à 
                  développer une <strong>conscience critique</strong> de nos pratiques. Comprendre d'où vient la Monstera, c'est aussi 
                  se demander : quel rapport au vivant voulons-nous construire pour l'avenir ?
                </p>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Conclusion : vers une ethnobotanique décoloniale
              </h2>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                L'ethnobotanique, en croisant les apports de la botanique, de l'anthropologie et de l'histoire, nous offre des outils 
                précieux pour déconstruire ces héritages. Elle nous rappelle que chaque plante a une histoire, sociale, politique, 
                culturelle, et que cette histoire mérite d'être racontée.
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                La Monstera deliciosa, loin d'être une simple tendance déco, est un <strong>témoin végétal</strong> de l'histoire coloniale 
                et des mécanismes de distinction sociale qui structurent encore nos sociétés. En prendre conscience, c'est déjà commencer 
                à transformer notre regard, et peut-être nos pratiques.
              </p>
            </section>

            {/* Références bibliographiques */}
            <section className="mb-12 pt-8 border-t border-charcoal/10">
              <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Références bibliographiques
              </h2>
              <div className="bg-sand/50 rounded-lg p-6 space-y-4">
                <div className="text-sm text-charcoal/80 leading-relaxed">
                  <p className="mb-3">
                    <strong>BLANC, Guillaume</strong> (2020). <cite>L'invention du colonialisme vert : Pour en finir avec le mythe de l'Éden africain</cite>. 
                    Paris : Flammarion. ISBN 978-2081428980.
                  </p>
                  <p className="mb-3">
                    <strong>BLANCHARD, Pascal</strong> (dir.) (2011). <cite>Zoos humains : Au temps des exhibitions humaines</cite>. 
                    Paris : La Découverte. ISBN 978-2707169976.
                  </p>
                  <p className="mb-3">
                    <strong>BONNEUIL, Christophe</strong> (2000). « Development as Experiment: Science and State Building in Late Colonial and Postcolonial Africa, 1930-1970 ». 
                    <cite>Osiris</cite>, vol. 15, p. 258-281.
                  </p>
                  <p className="mb-3">
                    <strong>BOURDIEU, Pierre</strong> (1979). <cite>La Distinction : Critique sociale du jugement</cite>. 
                    Paris : Éditions de Minuit. ISBN 978-2707302755.
                  </p>
                  <p className="mb-3">
                    <strong>BROCKWAY, Lucile H.</strong> (1979). <cite>Science and Colonial Expansion: The Role of the British Royal Botanic Gardens</cite>. 
                    New York : Academic Press. ISBN 978-0121347505.
                  </p>
                  <p className="mb-3">
                    <strong>MADISON, Michael</strong> (1977). « A Revision of Monstera (Araceae) ». 
                    <cite>Contributions from the Gray Herbarium of Harvard University</cite>, no. 207, p. 3-100.
                  </p>
                  <p className="mb-3">
                    <strong>SOLNIT, Rebecca</strong> (2014). <cite>Wanderlust: A History of Walking</cite>. 
                    London : Granta Books. ISBN 978-1783780396.
                  </p>
                  <p className="mb-0">
                    <strong>TSING, Anna Lowenhaupt</strong> (2017). <cite>Le Champignon de la fin du monde : Sur la possibilité de vivre dans les ruines du capitalisme</cite>. 
                    Paris : La Découverte. ISBN 978-2359251364.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Instagram */}
            <section className="mb-12 bg-gradient-to-r from-sage/20 to-terracotta/20 rounded-xl p-8 text-center">
              <h2 className="text-xl md:text-2xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                📱 Retrouvez la version vidéo sur Instagram
              </h2>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                J'ai également créé une courte vidéo sur ce sujet pour TikTok et Instagram. 
                L'article ci-dessus développe en détail les points abordés dans la vidéo. 
                N'hésitez pas à me suivre pour plus de contenus sur l'ethnobotanique !
              </p>
              <a 
                href="https://www.instagram.com/botanique.ludique/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Voir la vidéo sur Instagram
                <ExternalLink className="w-4 h-4" />
              </a>
            </section>

            {/* À propos de l'auteure */}
            <section className="bg-sand rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-charcoal mb-3" style={{ fontFamily: 'Fraunces, serif' }}>
                À propos de l'auteure
              </h3>
              <p className="text-charcoal/80 leading-relaxed text-base mb-4">
                <strong>Vanessa Charlery</strong> est botaniste et animatrice ethnobotanique en Île-de-France. 
                Elle propose des ateliers de découverte des plantes et de leur histoire auprès de publics variés : 
                entreprises, établissements scolaires, maisons de retraite, associations...
              </p>
              <div className="flex flex-wrap gap-3">
                <Link 
                  to="/about"
                  className="inline-flex items-center gap-2 text-sage-dark hover:text-sage font-semibold text-sm transition-colors"
                >
                  En savoir plus sur mon parcours
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
                <Link 
                  to="/workshops"
                  className="inline-flex items-center gap-2 text-sage-dark hover:text-sage font-semibold text-sm transition-colors"
                >
                  Découvrir mes ateliers
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>
            </section>

          </div>

          {/* Navigation articles */}
          <nav className="flex justify-between items-center pt-8 border-t border-charcoal/10">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-sage-dark hover:text-sage transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Tous les articles
            </Link>
            <Link 
              to="/blog/teinture-vegetale-chou-rouge-indigo-naturel" 
              className="inline-flex items-center gap-2 text-sage-dark hover:text-sage transition-colors group"
            >
              Article suivant
              <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
            </Link>
          </nav>

        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogMonsteraColonialisme;
