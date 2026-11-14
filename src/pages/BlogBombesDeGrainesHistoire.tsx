import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EnvieAtelier from "@/components/EnvieAtelier";
import WaveDivider from "@/components/WaveDivider";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import BackToTop from "@/components/BackToTop";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import photoMains from "@/assets/gallery-bombes-graines-mains.webp";
import photoSeau from "@/assets/gallery-bombes-graines-seau.webp";
import photoSechage from "@/assets/gallery-bombes-graines-sechage.webp";
import grenades1973 from "@/assets/blog-bombes-graines-green-guerillas-1973.webp";
import lizChristyEntree from "@/assets/blog-bombes-graines-liz-christy-entree.webp";
import lizChristy2025 from "@/assets/blog-bombes-graines-liz-christy-2025.webp";
import bleuetBourdon from "@/assets/blog-bombes-graines-bleuet-bourdon.webp";
import syrpheAchillee from "@/assets/blog-bombes-graines-syrphe-achillee.webp";
import abeilleCoquelicot from "@/assets/blog-bombes-graines-abeille-coquelicot.webp";
import bombeGermee from "@/assets/blog-bombes-graines-germee.webp";

const SLUG = "histoire-bombes-de-graines-atelier-la-celle-saint-cloud";

const linkClass =
  "underline decoration-[3px] underline-offset-2 decoration-[hsl(var(--olive))] hover:text-[hsl(var(--olive))] transition-colors";
const h2Class = "font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4";
const figureClass = "my-8 border-[3px] border-[hsl(var(--black))] shadow-brutal bg-white";
const captionClass =
  "font-mono-brand text-[10px] uppercase tracking-[1.5px] text-[hsl(var(--black))]/60 p-3 border-t-[3px] border-[hsl(var(--black))]";

const faq = [
  {
    question: "Qu'est-ce qu'une bombe de graines ?",
    answer:
      "Une petite boule d'argile, de terreau et de graines, de la taille d'une noix, que l'on pose ou que l'on lance sur le sol. L'argile protège les graines des oiseaux, des fourmis et du soleil jusqu'à ce que la pluie la ramollisse : les graines germent alors au bon moment. En japonais, on parle de nendo dango, « boulettes d'argile ».",
  },
  {
    question: "Qui a inventé les bombes de graines ?",
    answer:
      "Le geste d'enrober des semences d'argile est très ancien, mais il a été popularisé au XXe siècle par l'agriculteur japonais Masanobu Fukuoka, qui en a fait l'un des gestes de son agriculture naturelle. Le nom de « bombe » vient de New York : en 1973, l'artiste Liz Christy et les Green Guerillas lançaient des « grenades à graines » par-dessus les grillages des terrains vagues.",
  },
  {
    question: "Quelles graines mettre dans une bombe de graines ?",
    answer:
      "Des graines de fleurs sauvages et locales, mellifères de préférence, comme le bleuet, le coquelicot, l'achillée millefeuille, la carotte sauvage, la mauve sylvestre ou la vipérine. On évite les mélanges du commerce qui contiennent des espèces exotiques pouvant devenir envahissantes. Le label Végétal local garantit l'origine régionale des semences.",
  },
  {
    question: "Quand et où lancer ses bombes de graines ?",
    answer:
      "L'automne est idéal, car beaucoup de fleurs sauvages ont besoin de passer l'hiver au froid pour germer ; le début du printemps fonctionne aussi. On les pose sur le sol, sans les enterrer, dans son jardin, sur son balcon, au pied d'un arbre ou sur une friche, en demandant l'autorisation sur un terrain qui n'est pas à soi. Jamais dans un espace naturel protégé.",
  },
  {
    question: "Peut-on faire venir cet atelier dans une médiathèque, une école ou une entreprise ?",
    answer:
      "Oui. L'atelier bombes de graines, avec sa médiation sur l'histoire du geste et sur les pollinisateurs, est proposé par Botanique Ludique partout en Île-de-France : médiathèques, écoles, accueils de loisirs, mairies, résidences seniors, entreprises et CSE. Le contenu et la durée sont adaptés au public.",
  },
];

const BlogBombesDeGrainesHistoire = () => {
  return (
    <div className="min-h-screen article-organique overflow-x-clip">
      <SEO
        title="Bombes de graines : histoire et atelier à La Celle-Saint-Cloud"
        description="De Fukuoka aux Green Guerillas de New York, l'histoire des bombes de graines, et pourquoi semer des fleurs mellifères. Retour sur notre atelier à la bibliothèque de La Celle-Saint-Cloud (expo « Sur la route des saisons »)."
        keywords="bombes de graines, histoire des bombes de graines, nendo dango, Masanobu Fukuoka, Liz Christy, Green Guerillas, guérilla jardinière, graines mellifères, pollinisateurs, abeilles sauvages, atelier bombes de graines, atelier bibliothèque La Celle-Saint-Cloud, exposition Sur la route des saisons, atelier bombes de graines Yvelines, médiation scientifique médiathèque"
        canonical={`/blog/${SLUG}`}
        ogImage="https://botaniqueludique.com/og-image.jpg"
        type="article"
        city="La Celle-Saint-Cloud"
      />
      <SchemaOrg
        type="Article"
        data={{
          headline: "Les bombes de graines : de Fukuoka à New York, l'histoire d'un geste qui fait pousser la vie",
          description:
            "L'histoire des bombes de graines, du nendo dango de Masanobu Fukuoka aux grenades à graines des Green Guerillas de New York, le rôle des graines mellifères pour les pollinisateurs, et le récit de notre atelier à la bibliothèque de La Celle-Saint-Cloud, dans le cadre de l'exposition « Sur la route des saisons ».",
          datePublished: "2026-11-14",
          slug: SLUG,
        }}
      />
      <SchemaOrg type="FAQPage" data={{ questions: faq.map((f) => ({ question: f.question, answer: f.answer })) }} />
      <SchemaOrg
        type="BreadcrumbList"
        data={{
          items: [
            { name: "Accueil", url: "https://botaniqueludique.com/" },
            { name: "Blog", url: "https://botaniqueludique.com/blog" },
            { name: "L'histoire des bombes de graines", url: `https://botaniqueludique.com/blog/${SLUG}` },
          ],
        }}
      />
      <Navigation />

      <article className="pt-32 pb-20 px-6 md:px-16 lg:px-[120px]">
        <div className="max-w-3xl mx-auto">
          <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-5">
            Retour d'expérience · Histoire · Pollinisateurs
          </span>
          <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.95] tracking-[-2px] text-[hsl(var(--black))] mb-6">
            Les bombes de graines : de Fukuoka à New York, l'histoire d'un geste qui fait pousser la vie
          </h1>
          <p className="font-mono-brand text-xs uppercase tracking-[2px] text-[hsl(var(--black))]/60 mb-10">
            Samedi 14 novembre 2026 · Bibliothèque de La Celle-Saint-Cloud · Exposition « Sur la route des saisons »
          </p>

          <figure className={`${figureClass} max-w-md mx-auto`}>
            <video
              src="/videos/bombes-graines-mains.mp4"
              poster="/videos/bombes-graines-mains-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Des mains pleines de terre roulent une bombe de graines au-dessus d'un seau, pendant l'atelier"
              className="w-full h-auto block"
              width={720}
              height={960}
            />
            <figcaption className={captionClass}>
              On roule la boule entre ses mains : atelier bombes de graines, bibliothèque de La Celle-Saint-Cloud
            </figcaption>
          </figure>

          <div className="prose prose-lg max-w-none text-[hsl(var(--black))]/80 space-y-6">
            <p>
              Ce samedi 14 novembre 2026, nous avons animé un <strong>atelier bombes de graines</strong> à la{" "}
              <strong>bibliothèque de La Celle-Saint-Cloud</strong>, dans le cadre de l'exposition{" "}
              <strong><em>« Sur la route des saisons »</em></strong>. Des seaux d'argile et de terreau, des sachets de graines, des mains
              couvertes de terre jusqu'aux poignets, et des dizaines de petites boules alignées sur la table pour sécher. Avant de mettre les
              mains dans l'argile, nous avons pris le temps de raconter d'où vient ce geste, et pourquoi il compte aujourd'hui.
            </p>
            <p>
              Cet article reprend les grandes lignes de cette médiation, pour celles et ceux qui étaient là, et pour les médiathèques,
              écoles et structures qui voudraient programmer un atelier similaire.
            </p>

            <h2 className={h2Class}>Une plante ne marche pas, et pourtant elle voyage</h2>
            <p>
              Nous commençons toujours par une question : avez-vous déjà vu une plante pousser là où personne ne l'a plantée ? Dans une
              fissure de trottoir, sur un mur, dans une gouttière. Toutes ont un point commun : quelqu'un ou quelque chose a apporté leur
              graine jusque-là.
            </p>
            <p>
              Car une plante ne marche pas. Son secret, c'est la graine : une petite valise qui contient un bébé plante et son
              casse-croûte. Le <strong>pissenlit</strong> confie ses akènes au vent, comme des parachutes. La <strong>samare de
              l'érable</strong> tourne en hélice en tombant. La <strong>bardane</strong> s'accroche aux poils des animaux avec des crochets
              qui ont inspiré l'invention du velcro. Le <strong>geai</strong> enterre des glands pour l'hiver, en oublie une partie, et plante
              des chênes sans le savoir. Les oiseaux mangent les baies et déposent les graines plus loin, avec un peu d'engrais. Le{" "}
              <strong>coquelicot</strong>, lui, fonctionne comme une salière : quand le vent agite la tige, les graines tombent par les petits
              trous de sa capsule.
            </p>
            <p>
              Il manque pourtant un moyen de transport, le plus puissant de tous : <strong>nous</strong>. Les humains transportent des graines
              dans leurs poches, sous leurs semelles, dans leurs bagages, et depuis l'invention de l'agriculture, ils choisissent lesquelles
              semer. Les bombes de graines sont une façon d'utiliser ce pouvoir en conscience.
            </p>

            <h2 className={h2Class}>Au Japon, les boulettes d'argile de Masanobu Fukuoka</h2>
            <p>
              Masanobu Fukuoka était un microbiologiste devenu agriculteur au XXe siècle. Il voulait cultiver en dérangeant le moins possible
              la terre : pas de labour, pas d'engrais chimiques, pas de désherbage. Pour semer, il enrobait ses graines dans de petites
              boulettes d'argile, les <em>nendo dango</em>, qu'il dispersait à la main. L'argile protégeait les graines jusqu'à ce que la pluie
              les réveille.
            </p>
            <p>
              Il a raconté sa méthode dans <em>La Révolution d'un seul brin de paille</em>, un livre qui a inspiré des jardiniers et des
              mouvements d'agriculture naturelle dans le monde entier.
            </p>

            <figure className={`${figureClass} max-w-md mx-auto`}>
              <img
                src={bombeGermee}
                alt="Une bombe de graines posée sur le sol, d'où sortent de jeunes pousses vertes"
                className="w-full h-auto"
                loading="lazy"
                width={640}
                height={480}
              />
              <figcaption className={captionClass}>
                Une bombe de graines qui a germé. Photo Bagusnyamuk, CC BY 3.0, Wikimedia Commons
              </figcaption>
            </figure>

            <h2 className={h2Class}>À New York, les grenades à graines de Liz Christy</h2>
            <p>
              Début des années 1970 : New York traverse une grave crise financière. Dans les quartiers pauvres, comme le Lower East Side de
              Manhattan, des immeubles sont abandonnés, démolis ou incendiés. Il reste des terrains vagues remplis de gravats, où les enfants
              jouent au milieu du verre cassé.
            </p>
            <p>
              <strong>Liz Christy</strong> est une artiste peintre qui vit dans ce quartier. Pour elle, ces terrains ne sont pas des lieux morts,
              mais des toiles à repeindre en vert. En 1973, avec des voisins, elle fonde les <strong>Green Guerillas</strong>. La plupart des
              terrains sont clôturés ? Ils inventent les <em>seed green-aides</em>, des <strong>grenades à graines</strong> : un mélange de
              graines, d'engrais et d'eau glissé dans des boules de Noël en verre ou des ballons, qu'ils lancent par-dessus les grillages.
            </p>

            <figure className={figureClass}>
              <img
                src={grenades1973}
                alt="Schéma de 1973 des grenades à graines des Green Guerillas : une boule de verre contenant de l'eau, de la tourbe, de l'engrais et des graines, et un ballon rempli du même mélange"
                className="w-full h-auto"
                loading="lazy"
                width={1383}
                height={490}
              />
              <figcaption className={captionClass}>
                Le mode d'emploi des grenades à graines, fiche des Green Guerillas, 1973 : eau, tourbe, engrais et graines. Domaine public,
                Wikimedia Commons
              </figcaption>
            </figure>

            <p>
              Puis ils s'attaquent à un grand terrain couvert de déchets, au coin de Bowery et de Houston Street. Pendant un an, ils le
              nettoient, apportent de la terre, plantent des légumes et des fleurs. C'est illégal, mais la presse en parle, et en 1974 la ville
              finit par leur louer le terrain pour un dollar par mois. C'est le <strong>premier jardin partagé de New York</strong>. Il existe
              toujours, porte aujourd'hui le nom de Liz Christy, et des centaines de jardins communautaires ont suivi dans la ville.
            </p>

            <div className="grid sm:grid-cols-[2fr_3fr] gap-6 not-prose my-8 items-start">
              <figure className="border-[3px] border-[hsl(var(--black))] shadow-brutal bg-white">
                <img
                  src={lizChristyEntree}
                  alt="Entrée du Liz Christy Garden : grille noire, panneau vert au nom du jardin et fleurs roses en cascade"
                  className="w-full h-auto"
                  loading="lazy"
                  width={800}
                  height={1067}
                />
                <figcaption className={captionClass}>
                  L'entrée du jardin, au coin de Bowery et Houston Street. Photo Eden, Janine and Jim, CC BY 2.0, Wikimedia Commons
                </figcaption>
              </figure>
              <figure className="border-[3px] border-[hsl(var(--black))] shadow-brutal bg-white">
                <img
                  src={lizChristy2025}
                  alt="Le Liz Christy Garden au printemps : iris violets, arbustes, pins et une chaise en bois au milieu de la verdure, au pied des immeubles"
                  className="w-full h-auto"
                  loading="lazy"
                  width={1000}
                  height={750}
                />
                <figcaption className={captionClass}>
                  Le jardin au printemps 2025, cinquante ans après sa création. Photo Jim Henderson, CC BY-SA 4.0, Wikimedia Commons
                </figcaption>
              </figure>
            </div>

            <p>
              Pendant l'atelier, nous posons toujours la question : pourquoi parler de bombe ou de grenade pour un geste aussi doux ? C'est un
              retournement : on prend le vocabulaire de la guerre pour faire pousser la vie. Pour Liz Christy, la bombe de graines était une
              façon, pour des habitants délaissés, de reprendre la main sur leur quartier.
            </p>

            <h2 className={h2Class}>Les graines voyagent avec les humains</h2>
            <p>
              Partout dans le monde, quand des humains ont dû quitter leur terre, ils ont emporté des graines. Des récits transmis dans les
              familles d'Afrique de l'Ouest et des Amériques racontent que des femmes déportées pendant la traite ont caché des grains de riz
              dans leurs tresses, pour pouvoir replanter de l'autre côté de l'océan. L'historienne Judith Carney a montré combien les savoirs
              agricoles africains ont façonné les rizières des Amériques.
            </p>
            <p>
              Une graine, c'est donc aussi une mémoire : celle d'un paysage, d'une cuisine, d'un savoir-faire. Aujourd'hui encore, des réseaux de
              semences paysannes échangent et préservent des variétés pour qu'elles ne disparaissent pas. C'est le même regard que nous portons
              dans nos articles sur le{" "}
              <Link to="/blog/terrarium-biopiraterie-histoire-coloniale" className={linkClass}>terrarium et la biopiraterie</Link> ou sur la{" "}
              <Link to="/blog/atelier-route-des-epices-fete-de-la-science-versailles" className={linkClass}>route des épices</Link>.
            </p>

            <h2 className={h2Class}>Pourquoi nous avons choisi des graines mellifères</h2>
            <p>
              Pour cet atelier, nous avons choisi des <strong>graines de fleurs mellifères</strong> : des fleurs qui produisent beaucoup de
              nectar et de pollen, et qui nourrissent les abeilles et les autres pollinisateurs. Pas de tulipes ni de tomates : des fleurs
              sauvages.
            </p>
            <p>
              Pour comprendre pourquoi, il faut parler d'un travail invisible, la <strong>pollinisation</strong>. Pour faire une graine, le pollen
              d'une fleur doit arriver sur le pistil d'une autre fleur de la même espèce. Mais la plante ne bouge pas. Alors elle passe un marché
              avec les animaux : du nectar sucré et du pollen riche en protéines, contre le transport de son pollen de fleur en fleur. Les
              couleurs, les parfums et les formes des fleurs sont des publicités pour attirer ces partenaires.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 not-prose my-8">
              <figure className="border-[3px] border-[hsl(var(--black))] shadow-brutal bg-white">
                <img
                  src={bleuetBourdon}
                  alt="Un bourdon en train de butiner des bleuets bleus dans un champ"
                  className="w-full h-auto"
                  loading="lazy"
                  width={1200}
                  height={1229}
                />
                <figcaption className={captionClass}>
                  Un bourdon sur des bleuets. Photo David Wright, CC BY 2.0, Wikimedia Commons
                </figcaption>
              </figure>
              <figure className="border-[3px] border-[hsl(var(--black))] shadow-brutal bg-white">
                <img
                  src={syrpheAchillee}
                  alt="Un syrphe rayé jaune et noir posé sur des fleurs blanches d'achillée millefeuille"
                  className="w-full h-auto"
                  loading="lazy"
                  width={1200}
                  height={1045}
                />
                <figcaption className={captionClass}>
                  Un syrphe sur une achillée millefeuille. Photo Didier Descouens, CC BY-SA 4.0, Wikimedia Commons
                </figcaption>
              </figure>
            </div>

            <p>
              Qui sont les pollinisateurs ? On pense d'abord à l'abeille domestique, celle des ruches. Mais elle n'est qu'une espèce parmi près
              de <strong>1 000 espèces d'abeilles sauvages en France</strong>. La plupart vivent seules, nichent dans le sol, dans des tiges
              creuses ou dans les trous des vieux murs, et beaucoup ne s'éloignent que de quelques centaines de mètres de leur nid. Il y a aussi
              les <strong>bourdons</strong>, capables de voler quand il fait frais, les <strong>syrphes</strong>, des mouches déguisées en guêpes
              mais totalement inoffensives, les <strong>papillons</strong> et certains <strong>coléoptères</strong>.
            </p>
            <p>
              Ce travail nous concerne directement : selon l'IPBES, l'équivalent du GIEC pour la biodiversité, près de 90 % des plantes sauvages à
              fleurs et 75 % des grandes cultures alimentaires dépendent au moins en partie des pollinisateurs. Or ils vont mal. En Europe, près de
              10 % des espèces d'abeilles sauvages et un quart des espèces de bourdons sont menacées d'extinction, à cause des pesticides, du
              changement climatique et surtout du manque de fleurs et d'abris.
            </p>

            <figure className={figureClass}>
              <img
                src={abeilleCoquelicot}
                alt="Une abeille au cœur d'une fleur de coquelicot rouge, couverte de pollen"
                className="w-full h-auto"
                loading="lazy"
                width={1200}
                height={800}
              />
              <figcaption className={captionClass}>
                Une abeille dans un coquelicot. Photo Björn S..., CC BY-SA 2.0, Wikimedia Commons
              </figcaption>
            </figure>

            <p>
              C'est là que les bombes de graines entrent en jeu. Les fleurs sauvages locales ont évolué pendant des milliers d'années avec les
              insectes d'ici : leurs formes et leurs périodes de floraison leur correspondent. Beaucoup de fleurs de jardin ont été sélectionnées
              pour être jolies, parfois avec des pétales doublés qui cachent le nectar. Et comme les abeilles sauvages ne vont pas loin,{" "}
              <strong>chaque petit îlot de fleurs compte</strong> : un pied d'arbre fleuri, une friche, un balcon deviennent des stations-service
              sur leur trajet.
            </p>

            <h2 className={h2Class}>Trois ingrédients, trois rôles</h2>
            <p>Après l'histoire, place à la fabrication. Une bombe de graines, c'est trois ingrédients, et chacun a son rôle :</p>
            <ul>
              <li>
                <strong>L'argile, c'est l'armure.</strong> Elle protège les graines des oiseaux, des fourmis, du vent et du soleil. Quand il pleut
                assez, elle se ramollit et la graine germe au bon moment.
              </li>
              <li>
                <strong>Le terreau, c'est le garde-manger.</strong> Il apporte de la matière organique et garde l'humidité autour des premières
                racines.
              </li>
              <li>
                <strong>Les graines, c'est le trésor.</strong> On en met peu, sinon les jeunes pousses se font concurrence.
              </li>
            </ul>
            <p>
              On mélange à sec pour bien répartir les graines, puis on ajoute l'eau petit à petit : trop sec, ça s'effrite ; trop mouillé, ça
              colle. La bonne texture, c'est celle d'une pâte à modeler. On roule une boule de la taille d'une noix entre ses paumes, et on la
              laisse sécher 24 à 48 heures à l'air libre, à l'abri du soleil direct.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 not-prose my-8">
              <figure className="border-[3px] border-[hsl(var(--black))] shadow-brutal bg-white">
                <img
                  src={photoSeau}
                  alt="Mains pleines de terre au-dessus d'un seau de mélange d'argile et de terreau, bombes de graines alignées sur la table"
                  className="w-full h-auto"
                  loading="lazy"
                  width={1200}
                  height={1600}
                />
                <figcaption className={captionClass}>Le mélange argile, terreau et graines</figcaption>
              </figure>
              <figure className="border-[3px] border-[hsl(var(--black))] shadow-brutal bg-white">
                <img
                  src={photoMains}
                  alt="Mains d'enfant qui roulent une bombe de graines au-dessus d'un seau vert"
                  className="w-full h-auto"
                  loading="lazy"
                  width={1200}
                  height={1600}
                />
                <figcaption className={captionClass}>Rouler la boule, de la taille d'une noix</figcaption>
              </figure>
            </div>

            <h2 className={h2Class}>Vrai ou faux : les bons gestes</h2>
            <p>Pour finir, un petit quiz à main levée, pour que les bombes poussent au bon endroit :</p>
            <ul>
              <li>
                <strong>« On peut mettre n'importe quelles graines dans une bombe. »</strong> Faux. On choisit des graines locales et sauvages :
                bleuet, coquelicot, achillée millefeuille, carotte sauvage, mauve sylvestre, vipérine. Certains mélanges du commerce contiennent
                des espèces exotiques qui peuvent devenir envahissantes.
              </li>
              <li>
                <strong>« L'automne est un bon moment pour lancer ses bombes. »</strong> Vrai. Beaucoup de fleurs sauvages, comme le coquelicot,
                ont besoin de passer l'hiver au froid pour germer. Semer à l'automne, c'est imiter la nature.
              </li>
              <li>
                <strong>« Une bombe de graines doit être enterrée profondément. »</strong> Faux. On la pose sur le sol : les petites graines de
                fleurs sauvages ont souvent besoin de lumière pour germer.
              </li>
              <li>
                <strong>« On peut lancer ses bombes dans une réserve naturelle pour l'enrichir. »</strong> Faux. Les espaces protégés ont leurs
                propres équilibres. On préfère son jardin, son balcon, les pieds d'arbres ou les friches, avec l'autorisation du propriétaire.
              </li>
            </ul>

            <figure className={figureClass}>
              <img
                src={photoSechage}
                alt="Dizaines de bombes de graines qui sèchent sur des cartons après un atelier"
                className="w-full h-auto"
                loading="lazy"
              />
              <figcaption className={captionClass}>24 à 48 heures de séchage, puis direction le jardin</figcaption>
            </figure>

            <h2 className={h2Class}>Et nous, pourquoi le faire aujourd'hui ?</h2>
            <p>
              D'abord pour les pollinisateurs : chaque bombe, c'est un petit garde-manger de plus dans un paysage où les fleurs manquent. Ensuite
              pour la ville : la végétation rafraîchit l'air pendant les canicules et laisse l'eau de pluie s'infiltrer. Enfin, et c'est peut-être
              le plus important, pour nous. Lancer une bombe de graines, c'est poser un geste concret quand les nouvelles sur l'environnement
              donnent un sentiment d'impuissance. C'est regarder autrement le pied d'arbre devant chez soi, revenir quelques semaines plus tard
              voir ce qui a poussé, en parler à ses voisins.
            </p>
            <p>
              Pour résumer : une bombe de graines, c'est un savoir-faire paysan japonais, un geste militant new-yorkais, un coup de main aux
              pollinisateurs, et le prolongement d'une très vieille histoire, celle des humains qui transportent des graines et, avec elles, des
              paysages et des mémoires.
            </p>

            <h2 className={h2Class}>Un atelier pour les médiathèques, les écoles et les entreprises</h2>
            <p>
              Cet atelier réunit en une séance de l'histoire, de l'écologie, des sciences du vivant et un moment de création manuelle, et chacun
              repart avec ses bombes à semer. Il se décline pour la{" "}
              <Link to="/intervention-mediatheque-botanique" className={linkClass}>médiathèque et la bibliothèque</Link>, pour les{" "}
              <Link to="/etablissements-scolaires" className={linkClass}>établissements scolaires</Link>, pour les{" "}
              <Link to="/animation-collectivites-mairies" className={linkClass}>collectivités et les mairies</Link>, pour une{" "}
              <Link to="/blog/organiser-fete-nature-mairie" className={linkClass}>Fête de la Nature</Link>, et en entreprise sous la forme d'un{" "}
              <Link to="/atelier-bombes-a-graines-team-building" className={linkClass}>team building bombes à graines</Link>. Dans le
              département, découvrez aussi nos{" "}
              <Link to="/ateliers-botaniques-yvelines" className={linkClass}>ateliers botaniques dans les Yvelines</Link>.
            </p>

            <h2 className={h2Class}>Questions fréquentes</h2>
            <div className="space-y-6 not-prose">
              {faq.map((item) => (
                <div key={item.question} className="p-5 border-[3px] border-[hsl(var(--black))] bg-white">
                  <h3 className="font-display text-lg uppercase tracking-[-0.5px] text-[hsl(var(--black))] mb-2">{item.question}</h3>
                  <p className="font-body text-sm text-[hsl(var(--black))]/85 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>

            <div className="my-10 p-6 border-[3px] border-[hsl(var(--black))] shadow-brutal bg-white">
              <h3 className="font-display text-xl uppercase tracking-[-1px] text-[hsl(var(--black))] mb-3">
                Réserver un atelier bombes de graines
              </h3>
              <p className="font-body text-sm text-[hsl(var(--black))]/85 mb-4">
                Vous organisez une programmation culturelle, scientifique ou scolaire en Île-de-France ? Nous venons avec tout le matériel, dans
                votre médiathèque, votre établissement, votre mairie ou votre entreprise, avec un devis sur mesure.
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
              <h3 className="font-display text-xl uppercase tracking-[-1px] text-[hsl(var(--black))] mb-4">Sources</h3>
              <ul className="space-y-2 font-body text-sm text-[hsl(var(--black))]/85">
                <li>
                  <a href="https://en.wikipedia.org/wiki/Green_Guerillas" target="_blank" rel="noopener noreferrer" className={linkClass}>
                    Green Guerillas, Wikipédia
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nycgovparks.org/about/history/community-gardens/movement"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    History of the Community Garden Movement, NYC Parks
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.ofb.gouv.fr/sites/default/files/Fichiers/Plaquettes%20et%20rapports%20instit/revue-biodiversite1-pollinisateurs.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Les pollinisateurs, revue Biodiversité n°1, Office français de la biodiversité
                  </a>
                </li>
                <li>
                  <a href="https://agriculture.gouv.fr/telecharger/144805" target="_blank" rel="noopener noreferrer" className={linkClass}>
                    Abeilles sauvages et santé des agro-écosystèmes, ministère de l'Agriculture
                  </a>
                </li>
                <li>Masanobu Fukuoka, La Révolution d'un seul brin de paille</li>
              </ul>
            </div>

            <div className="my-8 p-6 border-[3px] border-[hsl(var(--black))] shadow-brutal bg-white">
              <h3 className="font-display text-xl uppercase tracking-[-1px] text-[hsl(var(--black))] mb-4">À lire aussi</h3>
              <ul className="space-y-2 font-body text-sm text-[hsl(var(--black))]/85">
                <li>
                  <Link to="/blog/atelier-route-des-epices-fete-de-la-science-versailles" className={linkClass}>
                    Sur la route des épices : retour sur l'atelier de la Fête de la Science à Versailles
                  </Link>
                </li>
                <li>
                  <Link to="/blog/terrarium-biopiraterie-histoire-coloniale" className={linkClass}>
                    Le terrarium, une arme de biopiraterie à l'ère coloniale
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
      <EnvieAtelier />
      <WaveDivider from="hsl(36,33%,93%)" to="hsl(0,0%,10%)" flip />
      <Footer />
    </div>
  );
};

export default BlogBombesDeGrainesHistoire;
