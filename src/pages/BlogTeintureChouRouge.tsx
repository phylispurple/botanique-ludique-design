import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Calendar, Clock, User, ArrowLeft, Leaf, Droplets, Palette } from "lucide-react";
import { Link } from "react-router-dom";

// Images de processus
import chouRougeImage from "@/assets/blog-teinture-chou-rouge-1.jpg";
import jusExtractImage from "@/assets/blog-teinture-chou-rouge-2.jpg";
import materielImage from "@/assets/blog-teinture-chou-rouge-3.jpg";

// Images de résultats (de la galerie existante)
import resultat1 from "@/assets/gallery-teinture-1.jpg";
import resultat2 from "@/assets/gallery-teinture-2.jpg";
import resultat3 from "@/assets/gallery-teinture-3.jpg";

const BlogTeintureChouRouge = () => {
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <SEO 
        title="Teinture Végétale au Chou Rouge : Guide Complet pour Obtenir un Indigo Naturel"
        description="Découvrez comment créer une teinture indigo naturelle à partir de chou rouge fermenté. Tutoriel étape par étape : fermentation, modification du pH, mordançage à l'alun et techniques de fixation sur lin et coton."
        keywords="teinture végétale chou rouge, indigo naturel, anthocyanes, teinture naturelle maison, mordançage alun, fermentation chou rouge, teinture lin coton, pigments naturels, teinture éco-responsable, atelier teinture végétale Paris"
        canonical="/blog/teinture-vegetale-chou-rouge-indigo-naturel"
        type="article"
      />
      <SchemaOrg 
        type="Article"
        data={{
          headline: "Teinture Végétale au Chou Rouge : Guide Complet pour Obtenir un Indigo Naturel",
          description: "Découvrez comment créer une teinture indigo naturelle à partir de chou rouge fermenté. Tutoriel complet avec toutes les étapes.",
          author: { name: "Vanessa Charlery" },
          datePublished: "2025-01-20",
          dateModified: "2025-01-20"
        }}
      />
      <FloatingIllustrations />
      <Navigation />

      <main className="pt-32 pb-20">
        <article className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Breadcrumb */}
            <nav className="mb-8 animate-fade-in">
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-sage hover:text-sage-dark transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Retour au blog
              </Link>
            </nav>

            {/* Article Header */}
            <header className="mb-12 animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-violet-100 text-violet-700 px-4 py-1 rounded-full text-sm font-semibold">
                  Tutoriel
                </span>
                <span className="bg-sage/20 text-sage-dark px-4 py-1 rounded-full text-sm font-semibold">
                  Teinture Végétale
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Teinture Végétale au Chou Rouge : Guide Complet pour Obtenir un Indigo Naturel
              </h1>
              
              <p className="text-xl text-charcoal/80 leading-relaxed mb-8">
                Transformez un simple chou rouge de votre cuisine en une teinture indigo profonde et durable. 
                Découvrez les secrets des <strong>anthocyanes</strong>, ces pigments magiques qui changent de couleur selon le pH.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-charcoal/60 border-t border-b border-charcoal/10 py-4">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Par <strong>Vanessa Charlery</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime="2025-01-20">20 janvier 2025</time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>12 min de lecture</span>
                </div>
              </div>
            </header>

            {/* Hero Image */}
            <figure className="mb-12 animate-fade-in">
              <img 
                src={resultat2} 
                alt="Résultat final de teinture végétale au chou rouge sur lin - nuances de bleu indigo et violet"
                className="w-full h-auto rounded-2xl shadow-lg"
                loading="eager"
              />
              <figcaption className="text-center text-sm text-charcoal/60 mt-4 italic">
                Le résultat final : des nuances allant du violet au bleu indigo, obtenues uniquement avec du chou rouge
              </figcaption>
            </figure>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <section className="mb-12 animate-fade-in">
                <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Pourquoi le Chou Rouge est-il Magique ?
                </h2>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Le chou rouge (<em>Brassica oleracea var. capitata f. rubra</em>) contient des <strong>anthocyanes</strong>, 
                  des pigments naturels appartenant à la famille des flavonoïdes. Ces molécules sont responsables des couleurs 
                  rouge, violet et bleu dans de nombreux végétaux : myrtilles, mûres, aubergines, raisins noirs...
                </p>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Ce qui rend les anthocyanes fascinantes, c'est leur capacité à <strong>changer de couleur selon le pH</strong> 
                  de leur environnement :
                </p>
                <ul className="list-none space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-4 h-4 rounded-full bg-red-400 mt-1 flex-shrink-0"></span>
                    <span><strong>pH acide (1-4)</strong> : Rouge vif à rose</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-4 h-4 rounded-full bg-purple-500 mt-1 flex-shrink-0"></span>
                    <span><strong>pH neutre (5-7)</strong> : Violet à mauve</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-4 h-4 rounded-full bg-blue-600 mt-1 flex-shrink-0"></span>
                    <span><strong>pH basique (8-10)</strong> : Bleu à indigo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-4 h-4 rounded-full bg-green-500 mt-1 flex-shrink-0"></span>
                    <span><strong>pH très basique (11+)</strong> : Vert à jaune</span>
                  </li>
                </ul>
                <p className="text-charcoal/80 leading-relaxed">
                  C'est cette propriété extraordinaire que nous allons exploiter pour créer notre <strong>indigo naturel maison</strong>.
                </p>
              </section>

              {/* Materials */}
              <section className="mb-12 animate-fade-in bg-sand/50 rounded-2xl p-8">
                <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  <Leaf className="inline-block w-8 h-8 mr-3 text-sage" />
                  Matériel Nécessaire
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-charcoal mb-4">Pour la teinture :</h3>
                    <ul className="space-y-2 text-charcoal/80">
                      <li>• 1 chou rouge entier (environ 1 kg)</li>
                      <li>• 2-3 litres d'eau</li>
                      <li>• 50g de sel (pour la fermentation)</li>
                      <li>• Bicarbonate de soude ou cendres de bois</li>
                      <li>• Alun (sulfate d'aluminium) pour le mordançage</li>
                      <li>• Un grand bocal ou récipient en verre</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-4">Pour les textiles :</h3>
                    <ul className="space-y-2 text-charcoal/80">
                      <li>• Tissu en <strong>lin</strong> (idéal)</li>
                      <li>• Ou tissu en <strong>coton</strong> (très bon)</li>
                      <li>• Éviter les fibres synthétiques</li>
                      <li>• Ficelle de jute (optionnel, pour shibori)</li>
                    </ul>
                  </div>
                </div>
                <figure className="mt-8">
                  <img 
                    src={materielImage} 
                    alt="Matériel pour teinture végétale : tissu en lin, ficelle de jute et bocal de jus de chou rouge fermenté"
                    className="w-full h-auto rounded-xl"
                    loading="lazy"
                  />
                  <figcaption className="text-center text-sm text-charcoal/60 mt-3 italic">
                    Le matériel de base : tissu en lin, ficelle de jute et le précieux jus de chou fermenté
                  </figcaption>
                </figure>
              </section>

              {/* Step 1 */}
              <section className="mb-12 animate-fade-in">
                <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Étape 1 : La Fermentation (3 mois)
                </h2>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  La fermentation est le secret d'une teinture riche et durable. Contrairement à une simple décoction, 
                  la fermentation permet d'<strong>intensifier les pigments</strong> et de créer une couleur plus profonde.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <figure>
                    <img 
                      src={chouRougeImage} 
                      alt="Chou rouge coupé en morceaux dans une passoire, prêt pour la fermentation"
                      className="w-full h-auto rounded-xl"
                      loading="lazy"
                    />
                    <figcaption className="text-center text-sm text-charcoal/60 mt-3 italic">
                      Chou rouge coupé finement pour maximiser l'extraction des pigments
                    </figcaption>
                  </figure>
                  <figure>
                    <img 
                      src={jusExtractImage} 
                      alt="Jus de chou rouge extrait après fermentation - couleur violet profond"
                      className="w-full h-auto rounded-xl"
                      loading="lazy"
                    />
                    <figcaption className="text-center text-sm text-charcoal/60 mt-3 italic">
                      Le jus obtenu après 3 mois de fermentation : un violet intense
                    </figcaption>
                  </figure>
                </div>

                <h3 className="text-xl font-semibold text-charcoal mb-4">Instructions :</h3>
                <ol className="list-decimal list-inside space-y-3 text-charcoal/80 mb-6">
                  <li>Coupez le chou rouge en fines lanières ou petits morceaux</li>
                  <li>Placez-les dans un grand bocal en verre</li>
                  <li>Ajoutez l'eau et le sel, mélangez bien</li>
                  <li>Fermez le bocal (pas hermétiquement pour laisser les gaz s'échapper)</li>
                  <li>Laissez fermenter <strong>3 mois minimum</strong> dans un endroit frais et sombre</li>
                  <li>Remuez occasionnellement (une fois par semaine)</li>
                </ol>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-xl">
                  <p className="text-charcoal/80">
                    <strong>💡 Astuce :</strong> Une odeur légèrement fermentée est normale. 
                    Si vous voyez de la moisissure en surface, retirez-la délicatement - la fermentation en dessous reste bonne.
                  </p>
                </div>
              </section>

              {/* Step 2 */}
              <section className="mb-12 animate-fade-in">
                <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  <Droplets className="inline-block w-8 h-8 mr-3 text-blue-500" />
                  Étape 2 : Modifier le pH pour Obtenir l'Indigo
                </h2>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Votre jus de chou fermenté est naturellement <strong>violet</strong> (pH neutre). 
                  Pour obtenir un <strong>bleu indigo</strong>, nous devons le rendre basique.
                </p>

                <h3 className="text-xl font-semibold text-charcoal mb-4">Comment augmenter le pH :</h3>
                <ul className="space-y-4 text-charcoal/80 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm font-mono">Option 1</span>
                    <span><strong>Bicarbonate de soude</strong> : Ajoutez progressivement 1 cuillère à café à la fois jusqu'à obtenir le bleu désiré</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm font-mono">Option 2</span>
                    <span><strong>Cendres de bois</strong> : Méthode ancestrale ! Faites infuser des cendres dans l'eau, filtrez et utilisez cette lessive de cendres</span>
                  </li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl">
                  <p className="text-charcoal/80">
                    <strong>🔬 Science :</strong> En milieu basique (pH 8-10), les anthocyanes perdent des protons (H+) 
                    et leur structure moléculaire change, passant de la forme "flavylium" (rouge) à la forme "quinonoidale" (bleue).
                  </p>
                </div>
              </section>

              {/* Step 3 */}
              <section className="mb-12 animate-fade-in">
                <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  <Palette className="inline-block w-8 h-8 mr-3 text-violet-500" />
                  Étape 3 : Le Mordançage à l'Alun
                </h2>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Le <strong>mordançage</strong> est l'étape cruciale pour <strong>fixer durablement les couleurs</strong> sur le textile. 
                  Sans mordant, les couleurs s'estomperaient rapidement au lavage.
                </p>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  L'<strong>alun</strong> (sulfate double d'aluminium et de potassium) est le mordant le plus utilisé 
                  car il est non-toxique, facile à trouver et ne modifie pas les couleurs.
                </p>

                <h3 className="text-xl font-semibold text-charcoal mb-4">Instructions de mordançage :</h3>
                <ol className="list-decimal list-inside space-y-3 text-charcoal/80 mb-6">
                  <li>Préparez un bain d'eau tiède (assez pour immerger le tissu)</li>
                  <li>Ajoutez l'alun : environ <strong>15-20% du poids du tissu sec</strong></li>
                  <li>Faites chauffer doucement (ne pas faire bouillir)</li>
                  <li>Immergez le tissu propre et humide</li>
                  <li>Laissez mijoter <strong>1 heure</strong> en remuant régulièrement</li>
                  <li>Laissez refroidir dans le bain, idéalement une nuit entière</li>
                  <li>Rincez légèrement (ne pas essorer)</li>
                </ol>

                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-xl">
                  <p className="text-charcoal/80">
                    <strong>🌿 Alternative naturelle :</strong> Les feuilles de rhubarbe ou de sumac 
                    contiennent naturellement de l'acide oxalique et du tanin qui peuvent servir de mordant.
                  </p>
                </div>
              </section>

              {/* Step 4 */}
              <section className="mb-12 animate-fade-in">
                <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Étape 4 : La Teinture
                </h2>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Votre tissu mordancé est maintenant prêt à recevoir la teinture !
                </p>

                <ol className="list-decimal list-inside space-y-3 text-charcoal/80 mb-8">
                  <li>Filtrez votre jus de chou fermenté pour retirer les résidus</li>
                  <li>Ajustez le pH avec du bicarbonate pour obtenir votre nuance de bleu</li>
                  <li>Immergez le tissu mordancé encore humide</li>
                  <li>Laissez tremper <strong>plusieurs heures à une nuit</strong></li>
                  <li>Plus vous laissez longtemps, plus la couleur sera intense</li>
                  <li>Sortez le tissu et laissez-le s'oxyder à l'air libre</li>
                </ol>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <figure>
                    <img 
                      src={resultat1} 
                      alt="Teinture végétale bleue sur fil de lin"
                      className="w-full h-64 object-cover rounded-xl"
                      loading="lazy"
                    />
                  </figure>
                  <figure>
                    <img 
                      src={resultat2} 
                      alt="Nuances de bleu indigo obtenues avec le chou rouge"
                      className="w-full h-64 object-cover rounded-xl"
                      loading="lazy"
                    />
                  </figure>
                  <figure>
                    <img 
                      src={resultat3} 
                      alt="Tissu teint en dégradé de bleu avec la technique shibori"
                      className="w-full h-64 object-cover rounded-xl"
                      loading="lazy"
                    />
                  </figure>
                </div>
                <p className="text-center text-sm text-charcoal/60 italic">
                  Différentes nuances obtenues selon le temps de trempage et le pH du bain
                </p>
              </section>

              {/* Fiber choice */}
              <section className="mb-12 animate-fade-in bg-sage/10 rounded-2xl p-8">
                <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Pourquoi Choisir des Fibres Naturelles ?
                </h2>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Le choix du textile est déterminant pour la réussite de votre teinture. Les <strong>fibres naturelles</strong> 
                  absorbent et retiennent les pigments bien mieux que les fibres synthétiques.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl p-6">
                    <h3 className="font-semibold text-charcoal mb-4 flex items-center gap-2">
                      <span className="text-2xl">🥇</span> Le Lin (Idéal)
                    </h3>
                    <ul className="space-y-2 text-charcoal/80 text-sm">
                      <li>• Excellente absorption des pigments</li>
                      <li>• Couleurs intenses et durables</li>
                      <li>• Fibre écologique (peu d'eau, pas de pesticides)</li>
                      <li>• Cultivé en France (Normandie, Picardie)</li>
                      <li>• Résistant aux lavages répétés</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <h3 className="font-semibold text-charcoal mb-4 flex items-center gap-2">
                      <span className="text-2xl">🥈</span> Le Coton (Très bon)
                    </h3>
                    <ul className="space-y-2 text-charcoal/80 text-sm">
                      <li>• Très bonne absorption</li>
                      <li>• Plus accessible et économique</li>
                      <li>• Légèrement moins durable que le lin</li>
                      <li>• Préférez le coton bio non blanchi</li>
                      <li>• Parfait pour débuter</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-red-50 border-l-4 border-red-300 p-4 rounded-r-xl">
                  <p className="text-charcoal/80 text-sm">
                    <strong>❌ À éviter :</strong> Les fibres synthétiques (polyester, nylon, acrylique) 
                    ne retiennent pas les pigments naturels car leur structure moléculaire est trop lisse et non-poreuse.
                  </p>
                </div>
              </section>

              {/* Tips & Variations */}
              <section className="mb-12 animate-fade-in">
                <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Astuces et Variations de Couleurs
                </h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-pink-400 pl-6">
                    <h3 className="font-semibold text-charcoal mb-2">Pour du Rose/Rouge :</h3>
                    <p className="text-charcoal/80">
                      Ajoutez du vinaigre blanc ou du jus de citron pour acidifier le bain (pH 3-4).
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-400 pl-6">
                    <h3 className="font-semibold text-charcoal mb-2">Pour du Violet :</h3>
                    <p className="text-charcoal/80">
                      Utilisez le jus fermenté tel quel, sans modifier le pH.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-6">
                    <h3 className="font-semibold text-charcoal mb-2">Pour du Bleu Indigo :</h3>
                    <p className="text-charcoal/80">
                      Ajoutez du bicarbonate de soude ou de la lessive de cendres (pH 8-10).
                    </p>
                  </div>
                  <div className="border-l-4 border-teal-400 pl-6">
                    <h3 className="font-semibold text-charcoal mb-2">Pour du Vert :</h3>
                    <p className="text-charcoal/80">
                      Combinez le bain bleu (chou basique) avec un bain jaune (curcuma ou pelures d'oignon).
                    </p>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-12 animate-fade-in">
                <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Une Teinture Accessible et Éco-Responsable
                </h2>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Ce qui rend cette technique si précieuse, c'est sa <strong>simplicité et son accessibilité</strong>. 
                  Pas besoin d'ingrédients exotiques ou de matériel coûteux : un chou rouge du marché, du sel de cuisine, 
                  du bicarbonate de soude... tout se trouve déjà dans nos cuisines.
                </p>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  C'est aussi une démarche profondément <strong>éco-responsable</strong> : 
                  zéro déchet chimique, pigments biodégradables, valorisation d'un légume parfois délaissé, 
                  et reconnexion avec des savoirs ancestraux presque oubliés.
                </p>
                <p className="text-charcoal/80 leading-relaxed">
                  Je vous invite à expérimenter, à jouer avec les nuances, à observer comment la nature 
                  nous offre une palette infinie de couleurs. Et si vous souhaitez aller plus loin, 
                  je propose régulièrement des <Link to="/workshops#teinture-vegetale" className="text-sage hover:text-sage-dark underline font-semibold">ateliers de teinture végétale</Link> en 
                  Île-de-France pour découvrir ensemble ces techniques millénaires.
                </p>
              </section>

              {/* CTA */}
              <section className="bg-gradient-to-br from-sage/20 to-sage/10 rounded-2xl p-8 md:p-12 text-center animate-fade-in">
                <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Envie de Pratiquer avec Moi ?
                </h2>
                <p className="text-lg text-charcoal/80 leading-relaxed mb-8 max-w-2xl mx-auto">
                  Participez à un atelier de teinture végétale pour découvrir ces techniques en direct, 
                  poser vos questions et repartir avec vos propres créations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/workshops#teinture-vegetale"
                    className="inline-flex items-center justify-center px-8 py-4 bg-sage hover:bg-sage-dark text-off-white font-semibold uppercase tracking-wider transition-all rounded-full"
                  >
                    Découvrir l'Atelier Teinture Végétale
                  </Link>
                  <Link 
                    to="/agenda"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-sage text-sage hover:bg-sage hover:text-off-white font-semibold uppercase tracking-wider transition-all rounded-full"
                  >
                    Voir les Prochaines Dates
                  </Link>
                </div>
              </section>

            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogTeintureChouRouge;
