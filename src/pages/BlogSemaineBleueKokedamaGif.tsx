import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import BackToTop from "@/components/BackToTop";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import photoKokedamas from "@/assets/gallery-kokedama-collection.jpg";
import photoKokedamaAtelier from "@/assets/gallery-kokedama-tradescantia.jpg";

const SLUG = "semaine-bleue-atelier-intergenerationnel-kokedama-ehpad";

const linkClass =
  "underline decoration-[3px] underline-offset-2 decoration-[hsl(var(--olive))] hover:text-[hsl(var(--olive))] transition-colors";
const h2Class =
  "font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4";
const figureClass = "my-8 border-[3px] border-[hsl(var(--black))] shadow-brutal bg-white";
const captionClass = "font-mono-brand text-[10px] uppercase tracking-[1.5px] text-[hsl(var(--black))]/60 p-3 border-t-[3px] border-[hsl(var(--black))]";

const faq = [
  {
    question: "Qu'est-ce que la Semaine Bleue ?",
    answer:
      "La Semaine Bleue est la semaine nationale des retraités et des personnes âgées, coordonnée par l'Uniopss. Elle a lieu chaque année début octobre et vise à valoriser la place des aînés dans la vie locale. En 2026, sa 75e édition s'est tenue du 5 au 11 octobre autour du thème « Relions tous les âges dans des territoires engagés ! ».",
  },
  {
    question: "Pourquoi choisir un atelier kokedama pour un public intergénérationnel ?",
    answer:
      "Le kokedama se fabrique avec les mains, sans outil dangereux, assis autour d'une table. Il demande de la patience et un peu de dextérité, deux qualités qui se répartissent naturellement entre enfants et aînés. Chacun repart avec une plante vivante, qui prolonge le souvenir de la rencontre bien après l'atelier.",
  },
  {
    question: "Combien de participants pour un atelier kokedama en EHPAD ?",
    answer:
      "Nous recommandons une quinzaine de participants au maximum, par exemple huit enfants et huit résidents réunis en binômes. Au-delà, l'accompagnement individuel devient difficile, en particulier pour les résidents qui ont besoin d'aide pour les gestes fins.",
  },
  {
    question: "Comment financer un atelier nature pendant la Semaine Bleue ?",
    answer:
      "Les ateliers de la Semaine Bleue sont souvent portés par le CCAS ou le service d'action sociale de la commune, parfois avec l'appui de la Conférence des financeurs de la prévention de la perte d'autonomie. Nous détaillons les pistes dans notre guide sur le financement des animations nature en CCAS.",
  },
];

const BlogSemaineBleueKokedamaGif = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SEO
        title="Semaine Bleue : atelier kokedama intergénérationnel en EHPAD"
        description="Atelier kokedama intergénérationnel pour la Semaine Bleue à l'EHPAD des Chênes Verts de Gif-sur-Yvette : enfants et résidents réunis autour du vivant."
        keywords="Semaine Bleue, atelier intergénérationnel, atelier intergénérationnel EHPAD, animation Semaine Bleue, atelier kokedama EHPAD, activité enfants seniors, animation CCAS Semaine Bleue, Gif-sur-Yvette, EHPAD Essonne, animation nature seniors, kokedama macramé"
        canonical={`/blog/${SLUG}`}
        ogImage="https://botaniqueludique.com/og-image.jpg"
        type="article"
        city="Gif-sur-Yvette"
      />
      <SchemaOrg
        type="Article"
        data={{
          headline: "Semaine Bleue : un atelier kokedama intergénérationnel à l'EHPAD des Chênes Verts de Gif-sur-Yvette",
          description:
            "Retour sur l'atelier kokedama intergénérationnel animé le 7 octobre 2026 à l'EHPAD des Chênes Verts de Gif-sur-Yvette pour la Semaine Bleue : huit enfants et huit résidents réunis autour du vivant.",
          datePublished: "2026-10-25",
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
              name: "Semaine Bleue : atelier kokedama intergénérationnel",
              url: `https://botaniqueludique.com/blog/${SLUG}`,
            },
          ],
        }}
      />
      <Navigation />

      <article className="pt-32 pb-20 px-6 md:px-16 lg:px-[120px]">
        <div className="max-w-3xl mx-auto">
          <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-5">
            Retour d'expérience · Semaine Bleue · Intergénérationnel
          </span>
          <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.95] tracking-[-2px] text-[hsl(var(--black))] mb-6">
            Semaine Bleue : un atelier kokedama intergénérationnel à l'EHPAD de Gif-sur-Yvette
          </h1>
          <p className="font-mono-brand text-xs uppercase tracking-[2px] text-[hsl(var(--black))]/60 mb-10">
            Mercredi 7 octobre 2026 · 14h · EHPAD des Chênes Verts, Gif-sur-Yvette (91)
          </p>

          <figure className={figureClass}>
            <img
              src={photoKokedamas}
              alt="Plusieurs kokedamas ficelés, boules de mousse entourées de cordelette, posés sur des assiettes en carton à la fin d'un atelier"
              className="w-full h-auto"
              loading="eager"
            />
            <figcaption className={captionClass}>
              Des kokedamas terminés en fin d'atelier : une plante, une boule de terre, de la mousse et de la ficelle
            </figcaption>
          </figure>

          <div className="prose prose-lg max-w-none text-[hsl(var(--black))]/80 space-y-6">
            <p>
              Le mercredi 7 octobre 2026, en pleine <strong>Semaine Bleue</strong>, la Ville de Gif-sur-Yvette et son service d'action sociale
              m'ont invitée à animer un <strong>atelier kokedama intergénérationnel</strong> à l'<strong>EHPAD des Chênes Verts</strong>. Autour
              des tables : huit enfants du centre de loisirs, à partir de 8 ans, et huit résidents de l'établissement. Deux heures pour fabriquer
              ensemble une petite sculpture végétale, puis un goûter partagé pour prolonger la rencontre.
            </p>
            <p>
              Cet article revient sur la façon dont l'atelier est construit, pour les CCAS, les EHPAD, les résidences seniors et les centres de
              loisirs qui cherchent une <strong>animation pour la Semaine Bleue</strong> ou, plus largement, une activité qui réunit vraiment les
              générations.
            </p>

            <h2 className={h2Class}>La Semaine Bleue 2026 : relier tous les âges</h2>
            <p>
              La Semaine Bleue est la semaine nationale des retraités et des personnes âgées. Pour sa 75e édition, du 5 au 11 octobre 2026, le
              thème national était <em>« Relions tous les âges dans des territoires engagés ! »</em>. Difficile de trouver une consigne plus claire :
              il ne s'agit pas d'organiser une animation <em>pour</em> les aînés, mais un moment <em>avec</em> eux, où chacun apporte quelque chose.
            </p>
            <p>
              C'est exactement ce que cherchait la Ville : faire venir les enfants du centre de loisirs à l'EHPAD, non pas pour un spectacle, mais
              pour faire ensemble.
            </p>

            <h2 className={h2Class}>Pourquoi le kokedama fonctionne avec un public intergénérationnel</h2>
            <p>
              Le mot japonais <em>kokedama</em> associe <em>koke</em>, la mousse, et <em>dama</em>, la boule. On le rattache souvent au bonsaï et à
              une manière japonaise de cultiver les plantes en montrant leurs racines plutôt qu'en les cachant dans un pot. Concrètement, on
              entoure la motte d'une plante d'un mélange de terre, on recouvre le tout de mousse, puis on maintient l'ensemble avec de la ficelle.
            </p>
            <p>Pour un atelier qui réunit des enfants et des résidents d'EHPAD, ce geste a plusieurs qualités :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Il se fait avec les mains</strong>, assis, sans outil coupant ni produit chimique. La terre humide et la mousse
                réveillent le toucher et l'odorat, deux sens que l'on sollicite peu dans le quotidien d'un établissement.
              </li>
              <li>
                <strong>Il se partage naturellement à deux</strong> : l'un tient la boule, l'autre enroule la ficelle. Les enfants apportent leur
                énergie, les aînés leur patience et souvent leur savoir-faire de jardinier.
              </li>
              <li>
                <strong>Il raconte une histoire</strong>. Derrière chaque plante, il y a un voyage, une culture, un usage. C'est l'angle
                ethnobotanique que je défends dans tous mes ateliers : on ne fabrique pas seulement un objet, on parle de nos liens avec le vivant.
              </li>
              <li>
                <strong>On repart avec une plante vivante</strong>, qu'il faudra arroser. Pour un résident, c'est une présence dans la chambre. Pour
                un enfant, c'est un souvenir de la rencontre qui dure bien après l'après-midi.
              </li>
            </ul>

            <figure className={figureClass}>
              <img
                src={photoKokedamaAtelier}
                alt="Un kokedama de Tradescantia zebrina aux feuilles violettes et vertes posé sur une nappe d'atelier, entouré de mousse et de terre"
                className="w-full h-auto"
                loading="lazy"
              />
              <figcaption className={captionClass}>
                Un kokedama de Tradescantia en cours de fabrication, lors d'un autre atelier Botanique Ludique
              </figcaption>
            </figure>

            <h2 className={h2Class}>Le déroulé de l'atelier</h2>
            <p>
              L'atelier a duré deux heures, de 14h à 16h, avant le goûter. Il suit le même fil que nos{" "}
              <Link to="/activite-intergenerationnelle-nature" className={linkClass}>activités intergénérationnelles nature</Link> :
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Former les binômes.</strong> Chaque enfant fait équipe avec un résident. Le binôme est la clé de l'atelier : il oblige à
                se parler, à se demander de l'aide, à s'organiser.
              </li>
              <li>
                <strong>Découvrir les plantes.</strong> Un temps d'échange autour des plantes choisies, de leur origine et de ce qu'elles racontent.
                Les résidents ont souvent des souvenirs de jardin, de potager ou de campagne à partager, et les enfants des questions à poser.
              </li>
              <li>
                <strong>Façonner la boule.</strong> On prépare le mélange de terre, on enveloppe la motte, on habille de mousse et on ficelle. C'est
                le moment le plus tactile, et souvent le plus joyeux.
              </li>
              <li>
                <strong>Réaliser la suspension en macramé.</strong> Pour cet atelier, chaque kokedama a reçu une suspension nouée en cordelette
                de coton coloré. Le macramé est un art du nœud très ancien, et un excellent terrain d'entraide entre petites et grandes mains.
              </li>
              <li>
                <strong>Partager le goûter.</strong> La rencontre ne s'arrête pas avec le dernier nœud : le goûter laisse le temps aux échanges
                de continuer, kokedamas sur la table.
              </li>
            </ol>

            <h2 className={h2Class}>Adapter l'atelier aux résidents d'EHPAD</h2>
            <p>
              Un atelier en EHPAD se prépare avec l'équipe d'animation. Quelques principes guident toujours la mise en place : des tables à la
              bonne hauteur pour les fauteuils, des matériaux préparés à l'avance pour limiter les gestes difficiles, une mousse et une terre déjà
              humidifiées, et des plantes robustes, faciles à entretenir dans une chambre. Le nombre de participants reste volontairement limité,
              ici seize personnes, pour que chaque binôme puisse être accompagné.
            </p>
            <p>
              Ces adaptations valent pour toutes nos{" "}
              <Link to="/animation-seniors-ehpad" className={linkClass}>animations en EHPAD et en résidence seniors</Link>, qu'elles soient
              intergénérationnelles ou non.
            </p>

            <h2 className={h2Class}>Organiser un atelier intergénérationnel pour la Semaine Bleue</h2>
            <p>
              Si vous coordonnez la Semaine Bleue dans votre commune, voici ce qui facilite l'organisation d'un tel atelier :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Associer deux structures</strong> qui ne se croisent pas d'habitude : un EHPAD et un centre de loisirs, une résidence
                autonomie et une école, un club seniors et une médiathèque.
              </li>
              <li>
                <strong>Réserver la date tôt</strong> : la Semaine Bleue a lieu début octobre, juste après la rentrée, et les plannings se
                remplissent vite. Une prise de contact avant l'été est idéale.
              </li>
              <li>
                <strong>Prévoir un temps convivial</strong> après l'atelier, comme le goûter de Gif-sur-Yvette : c'est souvent là que les liens
                se nouent vraiment.
              </li>
              <li>
                <strong>Penser au financement</strong> : les CCAS disposent de plusieurs leviers, que nous détaillons dans notre guide{" "}
                <Link to="/blog/financer-animation-nature-ccas" className={linkClass}>comment financer une animation nature en CCAS</Link>.
              </li>
            </ul>
            <p>
              Le kokedama n'est qu'un format parmi d'autres. Bombes à graines, sachets senteur aux épices, teinture végétale ou herbier se
              prêtent aussi très bien aux rencontres entre générations. Vous trouverez tous les formats sur la page{" "}
              <Link to="/workshops" className={linkClass}>de nos ateliers</Link> et, pour le kokedama, notre{" "}
              <Link to="/guide/comment-faire-un-kokedama" className={linkClass}>guide pour faire un kokedama</Link>.
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
                Préparer votre Semaine Bleue avec Botanique Ludique
              </h3>
              <p className="font-body text-sm text-[hsl(var(--black))]/85 mb-4">
                CCAS, EHPAD, résidence seniors ou centre de loisirs en Île-de-France : nous concevons avec vous un atelier intergénérationnel
                adapté à vos publics, pour la Semaine Bleue ou à tout moment de l'année. Devis sur mesure.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to={`/contact?subject=${encodeURIComponent("Atelier intergénérationnel pour la Semaine Bleue")}`}
                  className="inline-flex items-center gap-2 bg-[hsl(var(--black))] text-[hsl(var(--cream))] px-6 py-3 font-mono-brand text-xs uppercase tracking-[2px] border-[3px] border-[hsl(var(--black))] hover:bg-[hsl(var(--olive))] hover:text-[hsl(var(--black))] transition-colors"
                >
                  Demander un devis <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/animation-seniors-ehpad"
                  className="inline-flex items-center gap-2 bg-[hsl(var(--cream))] text-[hsl(var(--black))] px-6 py-3 font-mono-brand text-xs uppercase tracking-[2px] border-[3px] border-[hsl(var(--black))] hover:bg-[hsl(var(--olive))] transition-colors"
                >
                  Animations seniors et EHPAD <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="my-8 p-6 border-[3px] border-[hsl(var(--black))] shadow-brutal bg-white">
              <h3 className="font-display text-xl uppercase tracking-[-1px] text-[hsl(var(--black))] mb-4">
                À lire aussi
              </h3>
              <ul className="space-y-2 font-body text-sm text-[hsl(var(--black))]/85">
                <li>
                  <Link to="/blog/financer-animation-nature-ccas" className={linkClass}>
                    Comment financer une animation nature en CCAS, guide 2026
                  </Link>
                </li>
                <li>
                  <Link to="/activite-intergenerationnelle-nature" className={linkClass}>
                    Activités intergénérationnelles nature : enfants et seniors
                  </Link>
                </li>
                <li>
                  <Link to="/blog/atelier-route-des-epices-fete-de-la-science-versailles" className={linkClass}>
                    Sur la route des épices : retour sur l'atelier de la Fête de la Science à Versailles
                  </Link>
                </li>
                <li>
                  <Link to="/blog/semaine-developpement-durable-mairie" className={linkClass}>
                    Semaine du Développement Durable, 5 ateliers nature en mairie
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

export default BlogSemaineBleueKokedamaGif;
