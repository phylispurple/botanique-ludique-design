import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import BackToTop from "@/components/BackToTop";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import photoAtelier1 from "@/assets/gallery-atelier-epices-sachets-1.webp";
import photoAtelier2 from "@/assets/gallery-atelier-epices-sachets-2.webp";
import colomb from "@/assets/blog-epices-colomb.webp";
import vascoDeGama from "@/assets/blog-epices-vasco-de-gama.webp";
import calicut from "@/assets/blog-epices-calicut-1498.webp";
import albius from "@/assets/blog-epices-edmond-albius.webp";

const SLUG = "atelier-route-des-epices-fete-de-la-science-versailles";

const linkClass =
  "underline decoration-[3px] underline-offset-2 decoration-[hsl(var(--olive))] hover:text-[hsl(var(--olive))] transition-colors";
const h2Class =
  "font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4";
const figureClass = "my-8 border-[3px] border-[hsl(var(--black))] shadow-brutal bg-white";
const captionClass = "font-mono-brand text-[10px] uppercase tracking-[1.5px] text-[hsl(var(--black))]/60 p-3 border-t-[3px] border-[hsl(var(--black))]";

const faq = [
  {
    question: "Qu'est-ce qu'une épice, au sens botanique ?",
    answer:
      "Une épice est une partie séchée d'une plante, très odorante, utilisée en petite quantité : une écorce (cannelle), un bouton de fleur (clou de girofle), un fruit (vanille, anis étoilé, cardamome). Quand il s'agit de la feuille, on parle d'herbe aromatique, comme le thym ou le romarin. Le mot vient du latin species, qui a aussi donné « espèces » : les épices ont longtemps servi de monnaie.",
  },
  {
    question: "Pourquoi une odeur réveille-t-elle un souvenir ?",
    answer:
      "L'odorat est le seul sens relié directement aux zones du cerveau de la mémoire et des émotions. Le cerveau explique pourquoi une odeur fait remonter un souvenir, la culture explique lequel : on a tous le même nez, mais pas les mêmes souvenirs.",
  },
  {
    question: "Vasco de Gama a-t-il découvert la route des épices ?",
    answer:
      "Non. Le poivre voyageait depuis l'Inde jusqu'en Égypte depuis des siècles, et l'océan Indien était déjà plein de marchands arabes, perses, indiens, chinois et africains. En 1498, Vasco de Gama a surtout trouvé un chemin maritime qui évite tous les intermédiaires, guidé à travers l'océan par un pilote local.",
  },
  {
    question: "Peut-on faire venir cet atelier dans une médiathèque, une école ou une entreprise ?",
    answer:
      "Oui. « Sur la route des épices » fait partie des interventions proposées par Botanique Ludique en Île-de-France, pour les médiathèques, établissements scolaires, collectivités, musées, associations et entreprises. Le contenu et la durée sont adaptés au public. Il suffit de nous écrire via la page contact.",
  },
];

const BlogAtelierRouteDesEpicesVersailles = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SEO
        title="Atelier route des épices, Fête de la Science à Versailles"
        description="Retour sur l'atelier « Sur la route des épices », Fête de la Science 2026 à Versailles : histoire, anthropologie des sens et sachets senteur."
        keywords="atelier route des épices, Fête de la Science Versailles, bibliothèque Choiseul Versailles, atelier sachet senteur, histoire des épices, anthropologie des sens, atelier ethnobotanique médiathèque, médiation scientifique bibliothèque, Vasco de Gama, Christophe Colomb, Edmond Albius, atelier épices Yvelines"
        canonical={`/blog/${SLUG}`}
        ogImage="https://botaniqueludique.com/og-image.jpg"
        type="article"
        city="Versailles"
      />
      <SchemaOrg
        type="Article"
        data={{
          headline: "Sur la route des épices : retour sur l'atelier de la Fête de la Science à Versailles",
          description:
            "Retour sur l'atelier « Sur la route des épices » animé à la bibliothèque Choiseul de Versailles pour la Fête de la Science 2026 : histoire des épices, anthropologie des sens et fabrication de sachets senteur.",
          datePublished: "2026-10-04",
          slug: SLUG,
        }}
      />
      <SchemaOrg
        type="FAQPage"
        data={{ questions: faq.map((f) => ({ question: f.question, answer: f.answer })) }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        data={{
          items: [
            { name: "Accueil", url: "https://botaniqueludique.com/" },
            { name: "Blog", url: "https://botaniqueludique.com/blog" },
            {
              name: "Atelier Sur la route des épices",
              url: `https://botaniqueludique.com/blog/${SLUG}`,
            },
          ],
        }}
      />
      <Navigation />

      <article className="pt-32 pb-20 px-6 md:px-16 lg:px-[120px]">
        <div className="max-w-3xl mx-auto">
          <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-5">
            Retour d'expérience · Fête de la Science · Anthropologie des sens
          </span>
          <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.95] tracking-[-2px] text-[hsl(var(--black))] mb-6">
            Sur la route des épices : retour sur l'atelier de la Fête de la Science à Versailles
          </h1>
          <p className="font-mono-brand text-xs uppercase tracking-[2px] text-[hsl(var(--black))]/60 mb-10">
            Samedi 3 octobre 2026 · 15h30 · Bibliothèque Choiseul, Versailles
          </p>

          <figure className={figureClass}>
            <img
              src={photoAtelier1}
              alt="Participants à l'atelier Sur la route des épices à la bibliothèque Choiseul de Versailles, en train de composer leur sachet senteur avec des épices entières, des mortiers et le carnet de l'atelier"
              className="w-full h-auto"
              width={1050}
              height={1400}
            />
            <figcaption className={captionClass}>
              Fabrication des sachets senteur, bibliothèque Choiseul, Fête de la Science 2026
            </figcaption>
          </figure>

          <div className="prose prose-lg max-w-none text-[hsl(var(--black))]/80 space-y-6">
            <p>
              Le samedi 3 octobre 2026, dans le cadre de la <strong>Fête de la Science</strong>, j'ai animé à la{" "}
              <strong>bibliothèque Choiseul de Versailles</strong> l'atelier <em>« Sur la route des épices : odeurs et saveurs »</em>.
              Dix participants, adolescents et adultes, autour d'une longue table couverte de bols de cannelle, de clous de girofle,
              d'anis étoilé, de vanille et de cardamome. L'idée de départ : <strong>créer de la discussion et du débat</strong> à la croisée
              de trois regards, celui de l'histoire, celui de l'anthropologie et celui de la science des épices. D'où viennent-elles ?
              Pourquoi les aimons-nous ? Comment les sentons-nous ?
            </p>
            <p>
              Cet article revient sur le déroulé, pour celles et ceux qui y étaient, et pour les médiathèques, établissements scolaires et
              collectivités qui voudraient programmer un format similaire. C'est une intervention de médiation scientifique et culturelle
              que nous proposons à travers l'Île-de-France, avec la même méthode que nos{" "}
              <Link to="/balade-botanique-yvelines" className={linkClass}>balades ethnobotaniques dans les Yvelines</Link>.
            </p>

            <h2 className={h2Class}>Un atelier en deux temps : on parle, puis on fabrique</h2>
            <p>
              L'atelier s'ouvre par une <strong>causerie d'environ quarante minutes</strong>, très interactive, puis laisse place à un
              <strong> atelier de création de sachets senteur</strong>. Le programme tenait en une phrase : on sent, on discute, on voyage,
              puis chacun fabrique son sachet. La parole circule, les bols aussi. Personne n'a besoin de prérequis : le récit historique et la
              partie scientifique sont accessibles dès l'adolescence.
            </p>

            <h2 className={h2Class}>Première question : c'est quoi, une épice ?</h2>
            <p>
              Je commence toujours par poser la question au groupe. La réponse arrive en général d'un seul souffle : la cuisine. Mais une
              épice, au sens botanique, est <strong>une partie de plante séchée, très odorante, utilisée en petite quantité</strong>. Le plus
              souvent, ce n'est pas la feuille, sinon on parle d'herbe aromatique, comme le romarin ou le thym. Il n'existe pas de police des
              épices : c'est l'usage qui fait l'épice.
            </p>
            <p>
              Le mot lui-même raconte l'histoire. Il vient du latin <em>species</em>, qui désigne une sorte de marchandise, et qui a donné à la fois
              « épice » et « espèces ». Un sac de poivre valait un sac de pièces. D'où l'expression « cher comme poivre », et ces loyers et ces dots
              qui furent payés en poivre au Moyen Âge.
            </p>

            <h2 className={h2Class}>Sentir, avec la science : la rétro-olfaction</h2>
            <p>
              Les bols circulent, et chacun dit ce que l'odeur lui évoque. Puis vient l'expérience qui marque le plus : <strong>se pincer le nez
              et croquer un morceau de cannelle</strong>. Presque aucun goût. On relâche, et la cannelle arrive d'un coup. C'est la
              <strong> rétro-olfaction</strong> : les molécules odorantes remontent de la bouche vers le nez par l'arrière de la gorge. Ce que nous
              appelons le goût est surtout de l'arôme. La langue, elle, ne perçoit que cinq saveurs : sucré, salé, acide, amer et umami. Le piquant
              n'en fait pas partie, c'est une sensation de chaleur et de douleur.
            </p>
            <p>
              Pourquoi la plante sent-elle ? Parce qu'elle ne peut pas fuir. Elle se défend par la chimie, pour repousser les insectes et les
              champignons, ou elle attire des pollinisateurs. Nous avons fait une gourmandise de ce qui était une arme. Et si une odeur réveille
              un souvenir en une seconde, c'est que l'odorat est le seul sens relié directement aux zones du cerveau de la mémoire et des émotions.
              Le cerveau explique <em>pourquoi</em> le souvenir revient, la culture explique <em>lequel</em>.
            </p>

            <h2 className={h2Class}>Anthropologie des sens : sentir, ça s'apprend</h2>
            <p>
              C'est le moment où la discussion s'emballe. Quand chacun a dit ce que la cannelle lui rappelle, on constate qu'<strong>on a tous le
              même nez, mais pas les mêmes souvenirs</strong>. Chez nous, la cannelle évoque le dessert et la cuisine de grand-mère. Au Maroc, au Liban,
              en Inde, au Mexique ou en Grèce, elle parfume des plats de viande.
            </p>
            <p>
              L'anthropologie des sens, portée notamment par David Howes et Constance Classen, montre que nos sens sont éduqués par la culture. Chez
              les Jahai de Malaisie, des chasseurs-cueilleurs, une douzaine de mots désignent des familles d'odeurs, aussi spontanément que nous
              nommons les couleurs. Chez nous, on nomme la source, jamais l'odeur : « ça sent la cannelle », « ça sent le brûlé ». L'Occident a
              longtemps déclassé l'odorat, des philosophes grecs à Pasteur, avant que des travaux publiés en 2017 dans la revue <em>Science</em> ne
              montrent que le mauvais odorat humain est un mythe du XIXe siècle. Notre nez est bon : nous avons simplement cessé de l'entraîner et
              de le nommer.
            </p>

            <h2 className={h2Class}>Avant la cuisine : soigner, protéger, honorer</h2>
            <p>
              Avant de finir dans nos plats, les épices ont d'abord servi à trois choses : <strong>soigner</strong> (le clou de girofle contre le mal de
              dents), <strong>honorer le sacré et les morts</strong> (l'encens, l'embaumement) et <strong>se protéger</strong>. Du Moyen Âge au XVIIIe
              siècle, et jusqu'à Pasteur, on pense que les maladies viennent des mauvaises odeurs. On porte donc sur soi une « pomme de senteur » remplie
              d'épices, l'ancêtre direct des sachets que les participants ont fabriqués ensuite, et de l'orange piquée de clous de girofle de nos Noëls.
            </p>
            <p>
              C'est aussi l'occasion de rappeler qui savait soigner : les femmes, dans le foyer, les sages-femmes, les guérisseuses, et les moines
              dans leurs jardins des simples. Puis la médecine entre à l'université, fermée aux femmes. Le diplôme d'herboriste, créé en 1803, a été
              supprimé en 1941.
            </p>

            <h2 className={h2Class}>D'où viennent-elles ? Cinq épices, cinq voyages</h2>
            <p>
              Les cinq épices de l'atelier sont toutes entrées dans le carnet remis aux participants : la{" "}
              <strong>cannelle</strong> (l'écorce d'un arbre du Sri Lanka), le <strong>clou de girofle</strong> (un bouton de fleur des Moluques, en
              Indonésie), la <strong>vanille</strong> (le fruit d'une orchidée du Mexique), l'<strong>anis étoilé</strong> (le fruit d'un arbre de Chine
              et du Vietnam) et la <strong>cardamome</strong> (le fruit d'une grande herbe d'Inde du Sud). Cinq parties de plantes différentes, cinq
              continents de l'imaginaire.
            </p>

            <figure className={figureClass}>
              <img
                src={photoAtelier2}
                alt="Sachets senteur terminés, bols d'épices et feuilles de l'atelier sur la table à la bibliothèque Choiseul"
                className="w-full h-auto"
                loading="lazy"
                width={1050}
                height={1400}
              />
              <figcaption className={captionClass}>
                Les premiers sachets prennent forme sur la table de l'atelier
              </figcaption>
            </figure>

            <h2 className={h2Class}>Colomb, Vasco de Gama : un récit à remettre à l'endroit</h2>
            <p>
              Le poivre vient d'Inde, du Kerala. Avant 1498, il passe de main en main : marchands indiens, puis arabes, la mer Rouge, l'Égypte, Venise.
              Chaque intermédiaire prend sa marge. En 1453, les Ottomans prennent Constantinople et taxent lourdement les marchandises : il faut un
              autre chemin. En 1488, le Portugais Bartolomeu Dias passe la pointe sud de l'Afrique.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 not-prose my-8">
              <figure className="border-[3px] border-[hsl(var(--black))] shadow-brutal bg-white">
                <img
                  src={colomb}
                  alt="Portrait de Christophe Colomb attribué à Ridolfo del Ghirlandaio, vers 1520"
                  className="w-full h-auto"
                  loading="lazy"
                  width={915}
                  height={1077}
                />
                <figcaption className={captionClass}>
                  Christophe Colomb, portrait attribué à Ridolfo del Ghirlandaio (vers 1520). Domaine public, Wikimedia Commons
                </figcaption>
              </figure>
              <figure className="border-[3px] border-[hsl(var(--black))] shadow-brutal bg-white">
                <img
                  src={vascoDeGama}
                  alt="Portrait de Vasco de Gama par Gregório Lopes, vers 1524"
                  className="w-full h-auto"
                  loading="lazy"
                  width={800}
                  height={1002}
                />
                <figcaption className={captionClass}>
                  Vasco de Gama, par Gregório Lopes (vers 1524). Domaine public, Wikimedia Commons
                </figcaption>
              </figure>
            </div>

            <p>
              En 1492, <strong>Christophe Colomb</strong>, financé par la reine Isabelle de Castille après le refus du Portugal, calcule mal la taille de la
              Terre. Il arrive aux Bahamas en pensant être en Asie. Pas de poivre : il rapporte le piment, qu'il nomme d'après le poivre
              (<em>pimiento</em>). En 1498, <strong>Vasco de Gama</strong>, capitaine envoyé par le roi du Portugal, atteint Calicut, en Inde, en
              contournant l'Afrique.
            </p>

            <figure className={figureClass}>
              <img
                src={calicut}
                alt="L'arrivée de Vasco de Gama à Calicut en 1498, illustration d'Alfredo Roque Gameiro"
                className="w-full h-auto"
                loading="lazy"
                width={1000}
                height={658}
              />
              <figcaption className={captionClass}>
                L'arrivée de Vasco de Gama à Calicut en 1498, Alfredo Roque Gameiro. Domaine public, Wikimedia Commons
              </figcaption>
            </figure>

            <p>
              La phrase qui a le plus fait réagir la salle : <strong>Vasco de Gama n'a pas découvert le poivre ni l'Inde</strong>. Il a trouvé un chemin
              par la mer qui évite tous les intermédiaires. Et l'océan Indien était déjà plein de marchands arabes, perses, indiens, chinois et
              africains : c'est un pilote local, connaisseur de la mousson, qui l'a guidé. Le récit des « grandes découvertes » oublie ceux qui
              cultivaient, ceux qui naviguaient et ceux qui commerçaient avant lui. Même mécanisme que celui que nous décryptons dans nos articles sur
              le <Link to="/blog/terrarium-biopiraterie-histoire-coloniale" className={linkClass}>terrarium et la biopiraterie coloniale</Link> ou sur la{" "}
              <Link to="/blog/monstera-plante-coloniale-distinction-sociale" className={linkClass}>monstera, plante coloniale</Link>.
            </p>

            <h2 className={h2Class}>La face cachée des épices : monopoles et mains invisibles</h2>
            <p>
              Derrière chaque épice, il y a des mains : des petits paysans du Kerala, les Salagama du Sri Lanka chargés d'éplucher la cannelle, les
              habitants des Moluques qui cueillent les boutons de girofle un à un, les Totonaques du Mexique pour la vanille. Tout se fait à la main,
              hier comme aujourd'hui, ce qui explique le prix. Mais le producteur ne s'enrichit pas : la fortune se fait plus loin, à Venise, puis à
              Lisbonne et Amsterdam.
            </p>
            <p>
              Quand les Européens veulent le <strong>monopole</strong>, ils prennent le contrôle des terres, des arbres et des gens. La Compagnie
              hollandaise des Indes orientales (VOC) conquiert les îles Banda en 1621, seul endroit où poussait la muscade. Ses habitants étaient environ
              quinze mille avant la conquête, environ mille après. En 1667, au traité de Breda, les Hollandais gardent l'île de Run, couverte de
              muscadiers, et les Anglais gardent Manhattan, qu'ils viennent de rebaptiser New York. Face aux familles, cette histoire se raconte
              sobrement, en s'adaptant à l'âge du groupe.
            </p>
            <p>
              Elle s'achève sur un nom à retenir : <strong>Edmond Albius</strong>. En 1841, à La Réunion, cet enfant esclavisé de douze ans invente le
              geste de pollinisation manuelle de la vanille, encore utilisé aujourd'hui. Libéré en 1848, il n'en a tiré aucune fortune.
            </p>

            <figure className="border-[3px] border-[hsl(var(--black))] shadow-brutal bg-white max-w-sm mx-auto my-8">
              <img
                src={albius}
                alt="Portrait lithographié d'Edmond Albius tenant une liane de vanille, La Réunion"
                className="w-full h-auto"
                loading="lazy"
                width={700}
                height={1003}
              />
              <figcaption className={captionClass}>
                Edmond Albius (1829-1880), portrait ancien. Domaine public, Wikimedia Commons
              </figcaption>
            </figure>

            <h2 className={h2Class}>Place au sachet senteur</h2>
            <p>
              Après la causerie, la table se transforme en laboratoire de parfumeur. Chacun suit une règle d'or : <strong>trois ou quatre
              ingrédients</strong>, pas plus. Une base douce (lavande, camomille, écorces d'orange), une ou deux épices (cannelle, cardamome écrasée,
              vanille, romarin) et <strong>une seule note forte</strong> (clou de girofle, anis étoilé, eucalyptus). Mortiers, cuillères, petits sachets en
              toile : on compose, on sent, on ajuste, puis on ferme le cordon d'un double nœud.
            </p>
            <p>
              Chaque participant repart avec son sachet et un carnet de l'atelier qui rassemble ce qui a été senti, ce qui a été appris, le mode d'emploi
              et trois recettes pour commencer : Noël, sommeil, armoire fraîche. Un sachet bien conservé dure deux à trois mois. C'est un objet simple
              qui garde la mémoire de l'après-midi, et un très bon prétexte pour reparler de la route des épices à la maison.
            </p>

            <h2 className={h2Class}>Pourquoi ce format plaît aux médiathèques, aux écoles et aux collectivités</h2>
            <p>
              Ce que cet atelier montre, c'est qu'un contenu historique et scientifique exigeant peut rester accessible, vivant et participatif. Il
              réunit en une séance de l'histoire, de l'anthropologie, des sciences du vivant (odorat, goût, chimie des plantes) et un moment de
              création manuelle. Il se décline pour la <Link to="/intervention-mediatheque-botanique" className={linkClass}>médiathèque et la bibliothèque</Link>,
              pour les <Link to="/etablissements-scolaires" className={linkClass}>établissements scolaires</Link>, pour les{" "}
              <Link to="/animation-collectivites-mairies" className={linkClass}>collectivités et les mairies</Link>, pour un{" "}
              <Link to="/intervention-festival-culturel-botanique" className={linkClass}>festival culturel</Link> ou pour un événement national comme la Fête de la
              Science, les Journées européennes du patrimoine, la Semaine du goût, la Semaine du développement durable ou les fêtes de fin d'année, où
              les épices retrouvent leur place d'objets de fête. Nous en parlons plus largement dans notre article sur la{" "}
              <Link to="/blog/mediation-scientifique-definition-exemples" className={linkClass}>médiation scientifique</Link>.
            </p>

            <h2 className={h2Class}>Questions fréquentes</h2>
            <div className="space-y-6 not-prose">
              {faq.map((item) => (
                <div key={item.question} className="p-5 border-[3px] border-[hsl(var(--black))] bg-white">
                  <h3 className="font-display text-lg uppercase tracking-[-0.5px] text-[hsl(var(--black))] mb-2">
                    {item.question}
                  </h3>
                  <p className="font-body text-sm text-[hsl(var(--black))]/85 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>

            <div className="my-10 p-6 border-[3px] border-[hsl(var(--black))] shadow-brutal bg-white">
              <h3 className="font-display text-xl uppercase tracking-[-1px] text-[hsl(var(--black))] mb-3">
                Réserver un atelier avec Botanique Ludique
              </h3>
              <p className="font-body text-sm text-[hsl(var(--black))]/85 mb-4">
                Vous organisez une programmation culturelle, scientifique ou scolaire en Île-de-France ? « Sur la route des épices » et nos autres
                ateliers ethnobotaniques peuvent être programmés dans votre médiathèque, votre établissement, votre mairie ou votre entreprise, avec devis
                sur mesure.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[hsl(var(--black))] text-[hsl(var(--cream))] px-6 py-3 font-mono-brand text-xs uppercase tracking-[2px] border-[3px] border-[hsl(var(--black))] hover:bg-[hsl(var(--olive))] hover:text-[hsl(var(--black))] transition-colors"
                >
                  Réserver un atelier <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/workshops"
                  className="inline-flex items-center gap-2 bg-[hsl(var(--cream))] text-[hsl(var(--black))] px-6 py-3 font-mono-brand text-xs uppercase tracking-[2px] border-[3px] border-[hsl(var(--black))] hover:bg-[hsl(var(--olive))] transition-colors"
                >
                  Voir tous les ateliers <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="my-8 p-6 border-[3px] border-[hsl(var(--black))] shadow-brutal bg-white">
              <h3 className="font-display text-xl uppercase tracking-[-1px] text-[hsl(var(--black))] mb-4">
                À lire aussi
              </h3>
              <ul className="space-y-2 font-body text-sm text-[hsl(var(--black))]/85">
                <li>
                  <Link to="/evenement/fete-de-la-science-versailles-route-des-epices" className={linkClass}>
                    La page de l'événement : Fête de la Science 2026 à Versailles
                  </Link>
                </li>
                <li>
                  <Link to="/blog/terrarium-biopiraterie-histoire-coloniale" className={linkClass}>
                    Le terrarium, une arme de biopiraterie à l'ère coloniale
                  </Link>
                </li>
                <li>
                  <Link to="/blog/monstera-plante-coloniale-distinction-sociale" className={linkClass}>
                    La Monstera : une plante déplacée
                  </Link>
                </li>
                <li>
                  <Link to="/blog/balade-botanique-voisins-le-bretonneux" className={linkClass}>
                    Au fil des jardins de Voisins : une lecture anthropologique du paysage
                  </Link>
                </li>
                <li>
                  <Link to="/blog/organiser-fete-nature-mairie" className={linkClass}>
                    Organiser la Fête de la Nature dans votre commune
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>

      <BackToTop />
      <Footer />
    </div>
  );
};

export default BlogAtelierRouteDesEpicesVersailles;
