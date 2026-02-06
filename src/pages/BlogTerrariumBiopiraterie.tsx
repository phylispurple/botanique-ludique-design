import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIllustrations from "@/components/FloatingIllustrations";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Calendar, User, ArrowLeft, ArrowRight, BookOpen, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import BlogTableOfContents from "@/components/BlogTableOfContents";
import BlogCTA from "@/components/BlogCTA";
import BlogRelatedArticles from "@/components/BlogRelatedArticles";
import BlogShareButtons from "@/components/BlogShareButtons";

// Images de l'article
import terrariumModerne from "@/assets/blog-terrarium-moderne.jpg";
import wardianCase from "@/assets/blog-terrarium-wardian-case.jpg";
import nathanielWard from "@/assets/blog-terrarium-nathaniel-ward.png";
import papillonSphinx from "@/assets/blog-terrarium-papillon-sphinx.jpg";
import fernFever from "@/assets/blog-terrarium-fern-fever.webp";
import fougereArchive from "@/assets/blog-terrarium-fougere-archive.jpg";
import kewGardens from "@/assets/blog-terrarium-kew-gardens.jpg";
import heveaPlanche from "@/assets/blog-terrarium-hevea-planche.jpg";
import henryWickham from "@/assets/blog-terrarium-henry-wickham.jpg";
import plantationHevea from "@/assets/blog-terrarium-plantation-hevea.jpg";
import seringueiros from "@/assets/blog-terrarium-seringueiros.jpg";
import fordT from "@/assets/blog-terrarium-ford-t.jpg";
import malaisiePlantation from "@/assets/blog-terrarium-malaisie-plantation.jpg";


// Images pour articles liés
import blogMonsteraTendance from "@/assets/blog-monstera-tendance.jpg";
import blogPalmiersAvenue from "@/assets/blog-palmiers-avenue-coloniale.jpg";
import blogCarouselBocal from "@/assets/blog-carousel-bocal-indigo.jpg";

const BlogTerrariumBiopiraterie = () => {
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F7F7EB' }}>
      <SEO 
        title="Terrarium & Biopiraterie : L'Histoire Coloniale Cachée du Wardian Case"
        description="Saviez-vous que votre terrarium était initialement une arme de biopiraterie ? De l'invention accidentelle du Wardian Case au vol de 70 000 graines d'hévéa, découvrez l'histoire coloniale derrière cet objet déco."
        keywords="terrarium histoire, wardian case, biopiraterie, Nathaniel Ward, hévéa Brésil, Henry Wickham, fern fever, caoutchouc colonialisme, histoire botanique, ethnobotanique terrarium"
        canonical="/blog/terrarium-biopiraterie-histoire-coloniale"
        type="article"
      />
      <SchemaOrg 
        type="Article"
        data={{
          headline: "Terrarium & Biopiraterie : L'Histoire Coloniale Cachée du Wardian Case",
          description: "De l'invention accidentelle du Wardian Case au vol de 70 000 graines d'hévéa : l'histoire coloniale cachée derrière votre terrarium.",
          author: { name: "Vanessa Charlery" },
          datePublished: "2026-02-06",
          dateModified: "2026-02-06"
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

            <header className="mb-12 animate-fade-in">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-sage text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Ethnobotanique
                </span>
                <span className="bg-terracotta/80 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Histoire Coloniale
                </span>
                <span className="bg-terracotta text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Biopiraterie
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                Est-ce que tu savais que ton terrarium était initialement une arme de biopiraterie ?
              </h1>
              
              <p className="text-xl text-charcoal/80 leading-relaxed mb-8">
                De l'invention accidentelle d'un médecin victorien au pillage des ressources botaniques tropicales : 
                comment un simple bocal en verre a redessiné les frontières économiques du monde.
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-charcoal/60 border-b border-charcoal/10 pb-6">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Vanessa Charlery, Botaniste</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <time dateTime="2026-02-06">6 février 2026</time>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span>Temps de lecture : 10 min</span>
                  </div>
                </div>
                <BlogShareButtons 
                  title="Est-ce que tu savais que ton terrarium était initialement une arme de biopiraterie ?"
                  url="/blog/terrarium-biopiraterie-histoire-coloniale"
                />
              </div>
            </header>

            {/* Hero Image */}
            <figure className="mb-12 animate-fade-in">
              <img 
                src={terrariumModerne} 
                alt="Collection de terrariums modernes en bocaux de verre avec fougères et mousses"
                className="w-full h-auto rounded-2xl shadow-lg"
                loading="eager"
              />
              <figcaption className="text-center text-sm text-charcoal/60 mt-4 italic">
                Le terrarium moderne : un objet déco tendance dont l'histoire mérite d'être racontée
              </figcaption>
            </figure>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              
              {/* Table des matières */}
              <BlogTableOfContents 
                items={[
                  { id: "invention-accidentelle", title: "Une Invention Accidentelle dans le Londres Industriel" },
                  { id: "fern-fever", title: "La Fern Fever : Quand l'Angleterre Victorienne Rêvait de Fougères" },
                  { id: "revolution-maritime", title: "Le Wardian Case : Une Révolution pour le Transport Maritime" },
                  { id: "biopiraterie-hevea", title: "Le Cas de l'Hévéa au Brésil : Quand la Biopiraterie Change le Monde" },
                  { id: "consequences-humaines", title: "Les Conséquences Humaines Désastreuses" },
                  { id: "heritage-terrarium", title: "L'Héritage du Terrarium : Cultiver Aussi la Mémoire" },
                ]}
              />

              {/* Section 1 - L'invention */}
              <section id="invention-accidentelle" className="mb-12 animate-fade-in scroll-mt-28">
                <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Une Invention Accidentelle dans le Londres Industriel
                </h2>
                
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  En <strong>1829</strong>, un médecin du nom de <strong>Nathaniel Bagshaw Ward</strong> surfe 
                  sur la <em>fern fever</em> ambiante et rêve lui aussi d'avoir de belles fougères chez lui.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <figure>
                    <img 
                      src={nathanielWard} 
                      alt="Portrait de Nathaniel Bagshaw Ward, médecin victorien inventeur du Wardian Case"
                      className="w-full h-auto rounded-xl"
                      loading="lazy"
                    />
                    <figcaption className="text-center text-sm text-charcoal/60 mt-3 italic">
                      Nathaniel Bagshaw Ward (1791-1868), médecin et botaniste amateur
                    </figcaption>
                  </figure>
                  <div>
                    <p className="text-charcoal/80 leading-relaxed mb-4">
                      Le petit souci, c'est que nous sommes en pleine <strong>révolution industrielle</strong> à Londres, 
                      et comment vous expliquer que c'est littéralement le Mordor version charbon dehors. Du coup, 
                      toutes ses tentatives de cultiver des fougères sont vaines.
                    </p>
                    <p className="text-charcoal/80 leading-relaxed">
                      Et c'est là qu'en bon Victorien qui se respecte, il décide d'enfermer une <strong>chrysalide 
                      de papillon sphinx</strong> dans une bouteille en verre avec un peu de terre pour observer 
                      sa métamorphose.
                    </p>
                  </div>
                </div>

                <figure className="mb-8">
                  <img 
                    src={papillonSphinx} 
                    alt="Papillon sphinx tête de mort - l'espèce que Nathaniel Ward voulait observer"
                    className="w-full max-w-lg mx-auto h-auto rounded-xl"
                    loading="lazy"
                  />
                  <figcaption className="text-center text-sm text-charcoal/60 mt-3 italic">
                    Le papillon sphinx : celui par qui tout a commencé (enfin, celui qui n'est jamais né)
                  </figcaption>
                </figure>

                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Et vous savez quoi ? Le papillon ne naîtra jamais.
                </p>

                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Mais <strong>plot twist</strong>, une semaine plus tard : une fougère et de l'herbe poussent 
                  dans la bouteille. Le gars voulait élever un papillon et il vient d'inventer accidentellement 
                  le <strong>Wardian Case</strong>, l'ancêtre du terrarium. RIP le papillon, bonjour la révolution botanique.
                </p>

                <figure className="mb-8">
                  <img 
                    src={wardianCase} 
                    alt="Gravure d'un Wardian Case - ancêtre du terrarium moderne inventé par Nathaniel Ward"
                    className="w-full max-w-md mx-auto h-auto rounded-xl bg-charcoal/5 p-4"
                    loading="lazy"
                  />
                  <figcaption className="text-center text-sm text-charcoal/60 mt-3 italic">
                    Le Wardian Case : une mini-serre portative qui allait changer le cours de l'histoire botanique
                  </figcaption>
                </figure>
              </section>

              {/* Section 2 - Fern Fever */}
              <section id="fern-fever" className="mb-12 animate-fade-in scroll-mt-28">
                <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  La <em>Fern Fever</em> : Quand l'Angleterre Victorienne Rêvait de Fougères
                </h2>

                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Pour comprendre le contexte de cette invention, il faut revenir sur un phénomène aussi fascinant 
                  qu'improbable : la <strong>ptéridomanie</strong>, ou <em>fern fever</em> (la « fièvre des fougères »). 
                  Au milieu du XIXe siècle, l'Angleterre victorienne développe une véritable obsession 
                  pour les fougères.
                </p>

                <figure className="mb-8">
                  <img 
                    src={fernFever} 
                    alt="Collecteurs de fougères victoriens - la fern fever du XIXe siècle"
                    className="w-full h-auto rounded-xl"
                    loading="lazy"
                  />
                  <figcaption className="text-center text-sm text-charcoal/60 mt-3 italic">
                    Collecteurs de fougères à l'époque victorienne, une véritable passion nationale
                  </figcaption>
                </figure>

                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Des familles entières partent en expédition dans la campagne anglaise pour collecter des spécimens. 
                  On publie des guides, on crée des sociétés savantes, on décore les salons avec des motifs de fougères. 
                  C'est dans ce contexte de passion botanique que Ward fait sa découverte, et que le Wardian Case 
                  devient immédiatement un objet convoité.
                </p>

                <figure className="mb-8">
                  <img 
                    src={fougereArchive} 
                    alt="Gravure d'une grande serre victorienne remplie de fougères arborescentes"
                    className="w-full h-auto rounded-xl"
                    loading="lazy"
                  />
                  <figcaption className="text-center text-sm text-charcoal/60 mt-3 italic">
                    Les grandes serres victoriennes, cathédrales de verre dédiées aux fougères tropicales
                  </figcaption>
                </figure>
              </section>

              {/* Section 3 - Révolution maritime */}
              <section id="revolution-maritime" className="mb-12 animate-fade-in scroll-mt-28">
                <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Le Wardian Case : Une Révolution pour le Transport Maritime
                </h2>

                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Quelques années plus tard, Ward décide de tester son invention sur <strong>8 mois de voyage 
                  maritime entre Londres et Sydney</strong>. Le résultat est spectaculaire : la grande majorité 
                  des plantes survivent, contre seulement <strong>5% avant</strong>. Le gars vient juste 
                  de redécouvrir le principe du cycle de l'eau, en fait.
                </p>

                <figure className="mb-8">
                  <img 
                    src={kewGardens} 
                    alt="Kew Gardens Palm House - les jardins botaniques royaux de Londres"
                    className="w-full h-auto rounded-xl"
                    loading="lazy"
                  />
                  <figcaption className="text-center text-sm text-charcoal/60 mt-3 italic">
                    Kew Gardens, les jardins botaniques royaux : plaque tournante du transfert de plantes entre colonies
                  </figcaption>
                </figure>

                <p className="text-charcoal/80 leading-relaxed mb-6">
                  C'est à ce moment-là que les <strong>empires coloniaux</strong> comprennent immédiatement 
                  l'opportunité. Cette technologie permet enfin de déplacer des plantes économiquement 
                  précieuses entre continents. Et par « déplacer », comprendre : <em>se servir librement 
                  dans le jardin des autres</em>.
                </p>

                <div className="bg-terracotta/10 border-l-4 border-terracotta p-6 rounded-r-xl mb-8">
                  <p className="text-charcoal/80 text-lg">
                    <strong>Et c'est là qu'on parle de biopiraterie.</strong>
                  </p>
                </div>
              </section>

              {/* Section 4 - Hévéa */}
              <section id="biopiraterie-hevea" className="mb-12 animate-fade-in scroll-mt-28">
                <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Le Cas de l'Hévéa au Brésil : Quand la Biopiraterie Change le Monde
                </h2>

                <p className="text-charcoal/80 leading-relaxed mb-6">
                  En <strong>1876</strong>, le Brésil contrôlait <strong>90% du marché mondial du caoutchouc</strong>, 
                  une matière première très convoitée pendant l'ère industrielle. Le gouvernement brésilien 
                  essaie coûte que coûte de garder le monopole.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <figure>
                    <img 
                      src={heveaPlanche} 
                      alt="Planche botanique historique de l'Hevea peruviana - arbre à caoutchouc"
                      className="w-full h-auto rounded-xl bg-charcoal/5 p-2"
                      loading="lazy"
                    />
                    <figcaption className="text-center text-sm text-charcoal/60 mt-3 italic">
                      <em>Hevea peruviana</em>, planche botanique d'archive
                    </figcaption>
                  </figure>
                  <figure>
                    <img 
                      src={henryWickham} 
                      alt="Portrait de Sir Henry Wickham - le 'biopirate' qui a volé les graines d'hévéa"
                      className="w-full h-auto rounded-xl"
                      loading="lazy"
                    />
                    <figcaption className="text-center text-sm text-charcoal/60 mt-3 italic">
                      Sir Henry Wickham : explorateur, aventurier... et biopirate
                    </figcaption>
                  </figure>
                </div>

                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Sauf qu'un certain <strong>Henry Wickham</strong>, explorateur britannique, collecte 
                  pas moins de <strong>70 000 graines d'hévéa</strong> en Amazonie et les déclare 
                  aux douanes comme étant des « spécimens botaniques pour Kew Gardens ».
                </p>

                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Bon, c'est vrai. Mais c'est surtout <em>incomplet</em>.
                </p>

                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Parce qu'il oublie surtout de mentionner son plan B : <strong>créer des plantations 
                  en Asie pour anéantir l'économie brésilienne</strong>.
                </p>

                <p className="text-charcoal/80 leading-relaxed mb-8 italic text-charcoal/60">
                  Un oubli. Ça arrive.
                </p>

                <figure className="mb-8">
                  <img 
                    src={plantationHevea} 
                    alt="Plantation d'hévéas avec récipients de collecte de latex - exploitation coloniale du caoutchouc"
                    className="w-full h-auto rounded-xl"
                    loading="lazy"
                  />
                  <figcaption className="text-center text-sm text-charcoal/60 mt-3 italic">
                    Plantation d'hévéas avec saignées pour la récolte du latex, le modèle exporté en Asie
                  </figcaption>
                </figure>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-xl mb-8">
                  <p className="text-charcoal/80">
                    <strong>📊 En chiffres :</strong> Sur les 70 000 graines envoyées à Kew Gardens, 
                    environ 2 700 germent avec succès. Elles sont ensuite expédiées à Ceylan (Sri Lanka) 
                    et en Malaisie, où elles deviendront la base de l'industrie asiatique du caoutchouc.
                  </p>
                </div>

                <figure className="mb-8">
                  <img 
                    src={fordT} 
                    alt="Publicité Ford Model T - la demande de caoutchouc pour les pneus explose avec l'automobile"
                    className="w-full max-w-lg mx-auto h-auto rounded-xl bg-charcoal/5 p-4"
                    loading="lazy"
                  />
                  <figcaption className="text-center text-sm text-charcoal/60 mt-3 italic">
                    La Ford T (1908) : l'automobile de masse qui fait exploser la demande mondiale en caoutchouc
                  </figcaption>
                </figure>
              </section>

              {/* Section 5 - Conséquences humaines */}
              <section id="consequences-humaines" className="mb-12 animate-fade-in scroll-mt-28">
                <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Les Conséquences Humaines Désastreuses
                </h2>

                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Et là, c'est le début de la fin pour le Brésil.
                </p>

                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Entre <strong>1890 et 1920</strong>, pas moins de <strong>500 000 migrants</strong> débarquent 
                  en Amazonie, portés par l'opportunité du travail dans le caoutchouc. Cependant, ils sont tenus 
                  par un <strong>système d'esclavage par la dette</strong>.
                </p>

                <figure className="mb-8">
                  <img 
                    src={seringueiros} 
                    alt="Seringueiros - travailleurs brésiliens du caoutchouc en Amazonie, vers 1900"
                    className="w-full h-auto rounded-xl"
                    loading="lazy"
                  />
                  <figcaption className="text-center text-sm text-charcoal/60 mt-3 italic">
                    <em>Seringueiros</em>, travailleurs du caoutchouc en Amazonie, piégés par le système de dette
                  </figcaption>
                </figure>

                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Résultat : des centaines de milliers de travailleurs brésiliens sont coincés à vie 
                  en forêt amazonienne, avec une ardoise qui ne fait qu'augmenter et zéro échappatoire.
                </p>

                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Et accrochez-vous, parce qu'au même moment, les Britanniques construisent leurs plantations 
                  en Asie avec des arbres alignés version Tetris, rendement optimal, tableau Excel impeccable.
                </p>

                <figure className="mb-8">
                  <img 
                    src={malaisiePlantation} 
                    alt="Atelier de transformation du caoutchouc en Malaisie coloniale britannique"
                    className="w-full h-auto rounded-xl"
                    loading="lazy"
                  />
                  <figcaption className="text-center text-sm text-charcoal/60 mt-3 italic">
                    Atelier de transformation du caoutchouc en Malaisie britannique, main-d'œuvre déportée
                  </figcaption>
                </figure>

                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Du coup, pour essayer de suivre cette demande mondiale qui ne fait que croître 
                  et ne pas se faire écraser par la concurrence, la violence explose au Brésil. 
                  Pour faire simple, ceux qui n'étaient pas assez rapides, qui ne remplissaient pas 
                  les quotas se faisaient torturer et tuer.
                </p>

                <div className="bg-charcoal/5 border-l-4 border-charcoal/30 p-6 rounded-r-xl mb-8">
                  <h3 className="font-semibold text-charcoal mb-4">Le bilan est lourd :</h3>
                  <ul className="space-y-3 text-charcoal/80">
                    <li className="flex items-start gap-3">
                      <span className="text-terracotta font-bold text-lg">•</span>
                      <span>Le Brésil passe de <strong>90% du marché mondial à moins de 5%</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-terracotta font-bold text-lg">•</span>
                      <span>Au moins <strong>100 000 autochtones amazoniens</strong> meurent</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-terracotta font-bold text-lg">•</span>
                      <span>En Malaisie, des <strong>centaines de milliers de travailleurs indiens</strong> sont 
                      déportés et traités de façon inhumaine</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 6 - Conclusion */}
              <section id="heritage-terrarium" className="mb-12 animate-fade-in scroll-mt-28">
                <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  L'Héritage du Terrarium : Cultiver Aussi la Mémoire
                </h2>

                <p className="text-charcoal/80 leading-relaxed mb-6">
                  L'objectif ici n'est pas de vous faire culpabiliser si vous avez un terrarium chez vous. 
                  Bien au contraire.
                </p>

                <p className="text-charcoal/80 leading-relaxed mb-6">
                  C'est plutôt comprendre que les objets et le vivant qui nous entourent ont 
                  une <strong>histoire qui mérite elle aussi d'être cultivée</strong>. Quand on regarde 
                  un terrarium, on ne voit souvent qu'un joli bocal avec de la mousse et des fougères. 
                  Mais derrière cet objet se cachent des siècles d'exploration, de fascination botanique, 
                  et aussi d'exploitation humaine et environnementale.
                </p>

                <p className="text-charcoal/80 leading-relaxed mb-6">
                  C'est cette lecture du monde végétal, anthropologique, historique, politique, que je propose 
                  dans mes <Link to="/workshops" className="text-sage hover:text-sage-dark underline font-semibold">ateliers botaniques</Link>. 
                  Parce que comprendre d'où viennent les plantes, c'est aussi comprendre d'où l'on vient.
                </p>
              </section>

              {/* CTA Instagram avec vidéo */}
              <div className="bg-gradient-to-r from-sage/20 to-sand p-8 rounded-lg text-center mt-12 animate-fade-in">
                <h3 className="text-xl md:text-2xl mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, color: '#3D3D2E' }}>
                  Voir la vidéo sur ce sujet
                </h3>
                <p className="text-charcoal/80 mb-6">
                  Retrouvez ma vidéo complète sur l'histoire du terrarium et la biopiraterie sur Instagram !
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://www.instagram.com/botanique.ludique/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-sage hover:bg-sage-dark text-white px-6 py-3 rounded-full font-semibold transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    Voir la vidéo
                  </a>
                  <a 
                    href="https://www.instagram.com/botanique.ludique/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/80 hover:bg-white text-sage-dark px-6 py-3 rounded-full font-semibold transition-colors border border-sage/30"
                  >
                    <Instagram className="w-5 h-5" />
                    @botanique.ludique
                  </a>
                </div>
              </div>

              {/* CTA Ateliers */}
              <BlogCTA variant="ethnobotanique" />

              {/* Articles liés */}
              <BlogRelatedArticles 
                currentSlug="terrarium-biopiraterie-histoire-coloniale"
                articles={[
                  {
                    slug: "monstera-plante-coloniale-distinction-sociale",
                    title: "La Monstera : Une Plante Déplacée. Histoire Coloniale et Distinction Sociale",
                    excerpt: "Comment la Monstera est passée des forêts mexicaines aux salons bourgeois via l'histoire coloniale.",
                    image: blogMonsteraTendance,
                    category: "Ethnobotanique"
                  },
                  {
                    slug: "palmiers-architecture-haussmannienne-colonialisme",
                    title: "Palmiers et Architecture Haussmannienne : Quand les Boulevards Racontent l'Empire Colonial",
                    excerpt: "Comment les grands boulevards haussmanniens ont été exportés dans les colonies.",
                    image: blogPalmiersAvenue,
                    category: "Ethnobotanique"
                  },
                  {
                    slug: "teinture-vegetale-chou-rouge-indigo-naturel",
                    title: "Teinture Végétale au Chou Rouge : Guide Complet pour Obtenir un Indigo Naturel",
                    excerpt: "Comment créer une teinture indigo naturelle à partir de chou rouge fermenté.",
                    image: blogCarouselBocal,
                    category: "Tutoriels"
                  }
                ]}
              />

              {/* Navigation articles */}
              <nav className="flex justify-between items-center pt-8 border-t border-charcoal/10 mt-12">
                <Link 
                  to="/blog/palmiers-architecture-haussmannienne-colonialisme"
                  className="inline-flex items-center gap-2 text-sage-dark hover:text-sage transition-colors group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <span className="hidden sm:inline">Article précédent</span>
                </Link>
                <Link 
                  to="/blog"
                  className="text-charcoal/60 hover:text-charcoal transition-colors"
                >
                  Tous les articles
                </Link>
              </nav>

            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogTerrariumBiopiraterie;
