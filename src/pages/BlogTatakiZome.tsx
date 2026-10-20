import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import BackToTop from "@/components/BackToTop";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import photoTable from "@/assets/gallery-tataki-zome-atelier-table.webp";
import photoFleurs from "@/assets/workshop-tataki-zome.webp";

const SLUG = "tataki-zome-impression-vegetale-atelier";

const linkClass =
  "underline decoration-[3px] underline-offset-2 decoration-[hsl(var(--olive))] hover:text-[hsl(var(--olive))] transition-colors";
const h2Class =
  "font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4";
const figureClass = "my-8 border-[3px] border-[hsl(var(--black))] shadow-brutal bg-white";
const captionClass = "font-mono-brand text-[10px] uppercase tracking-[1.5px] text-[hsl(var(--black))]/60 p-3 border-t-[3px] border-[hsl(var(--black))]";

const faq = [
  {
    question: "Que veut dire tataki zomé ?",
    answer:
      "Le mot est japonais : « tataki » veut dire frapper, taper, et « zome » vient de « someru », teindre. Le tataki zomé, c'est donc la teinture par martelage : on pose une feuille ou une fleur sur un tissu et on la frappe pour que ses pigments passent dans la fibre. On croise aussi le nom « hapa zome », teinture à la feuille.",
  },
  {
    question: "Quelles plantes marchent le mieux en tataki zomé ?",
    answer:
      "Les feuilles fines et juteuses et les pétales colorés : fougère, feuilles d'érable, cosmos, géranium, pensée, coréopsis, pétales de rose. Les feuilles épaisses et cireuses (laurier, houx) donnent peu. Le mieux est d'essayer : chaque plante réserve sa surprise, et c'est tout l'intérêt de l'atelier.",
  },
  {
    question: "Les couleurs tiennent-elles au lavage ?",
    answer:
      "Elles évoluent, et c'est normal : les pigments végétaux sont sensibles à la lumière et au lavage. Un tissu prétraité à l'alun, laissé reposer plusieurs jours, puis lavé à la main à froid, garde ses empreintes plus longtemps. Le vert de la chlorophylle tend vers l'olive, les roses deviennent plus doux. C'est une empreinte vivante, pas une impression industrielle.",
  },
  {
    question: "À partir de quel âge et pour quels groupes ?",
    answer:
      "Dès 10 ans, et pour tous les adultes. L'atelier dure environ 2 heures. Il convient aux écoles, centres de loisirs, médiathèques, associations, CSE et entreprises (team building, tote bags personnalisés). Botanique Ludique intervient à Paris et dans toute l'Île-de-France.",
  },
];

const BlogTatakiZome = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SEO
        title="Tataki zomé, l'impression végétale japonaise"
        description="Tataki zomé : frapper feuilles et fleurs pour imprimer leurs pigments sur tissu. Technique, plantes qui marchent, fixation et atelier en Île-de-France."
        keywords="tataki zomé, tataki zome, hapa zome, impression végétale, martelage végétal, empreinte de feuille sur tissu, teinture végétale atelier, atelier tataki zome Paris, atelier impression végétale Île-de-France, tote bag végétal, atelier textile nature, team building teinture végétale"
        canonical={`/blog/${SLUG}`}
        ogImage="https://botaniqueludique.com/og-image.jpg"
        type="article"
      />
      <SchemaOrg
        type="Article"
        data={{
          headline: "Tataki zomé : frapper une feuille pour en garder l'empreinte",
          description:
            "Le tataki zomé, technique japonaise d'impression végétale par martelage : principe, chimie des pigments, plantes à choisir, fixation, et déroulé d'un atelier Botanique Ludique.",
          datePublished: "2026-10-20",
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
            { name: "Tataki zomé", url: `https://botaniqueludique.com/blog/${SLUG}` },
          ],
        }}
      />
      <Navigation />

      <article className="pt-32 pb-20 px-6 md:px-16 lg:px-[120px]">
        <div className="max-w-3xl mx-auto">
          <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-5">
            Atelier textile · Pigments végétaux · Japon
          </span>
          <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.95] tracking-[-2px] text-[hsl(var(--black))] mb-6">
            Tataki zomé : frapper une feuille pour en garder l'empreinte
          </h1>
          <p className="font-mono-brand text-xs uppercase tracking-[2px] text-[hsl(var(--black))]/60 mb-10">
            Par Vanessa Charlery · Animatrice ethnobotaniste
          </p>

          <figure className={figureClass}>
            <img
              src={photoTable}
              alt="Atelier tataki zomé : participants martelant avec un galet des feuilles d'érable, des fougères et des cosmos sur des tee-shirts et des sacs en coton"
              className="w-full h-auto"
              width={1200}
              height={1600}
            />
            <figcaption className={captionClass}>
              En plein atelier : galets, fougères, cosmos et feuilles d'érable sur tee-shirts et sacs en coton
            </figcaption>
          </figure>

          <div className="prose prose-lg max-w-none text-[hsl(var(--black))]/80 space-y-6">
            <p>
              Il suffit d'une feuille, d'un morceau de coton et d'un galet. On pose la feuille, on la recouvre, on tape. Quelques minutes plus tard,
              on soulève le papier et la feuille est là, sur le tissu, avec ses nervures, ses dentelures, parfois même la trace d'un trou de chenille.
              Le <strong>tataki zomé</strong> est sans doute la manière la plus directe de faire passer une plante dans un objet. Et c'est l'un des
              ateliers où j'entends le plus de « oh ! » autour de la table.
            </p>

            <h2 className={h2Class}>Un mot japonais, un geste universel</h2>
            <p>
              <em>Tataki</em> veut dire frapper, <em>zome</em> vient du verbe <em>someru</em>, teindre. Le tataki zomé, c'est la teinture par
              martelage. Le nom est japonais, mais le geste, écraser une plante sur une matière pour en garder la couleur, se retrouve un peu partout :
              c'est l'une des façons les plus simples de prendre la couleur au monde végétal. On croise aussi le nom <em>hapa zome</em>, la teinture à
              la feuille.
            </p>
            <p>
              Il faut se rappeler qu'avant 1856 et la mauvéine, premier colorant de synthèse, toutes les couleurs des vêtements venaient des plantes,
              des animaux ou des minéraux. Garance, gaude, pastel, indigo : chaque couleur avait sa plante, ses savoir-faire, ses routes commerciales.
              Le tataki zomé n'est pas une teinture au sens des grandes cuves de teinturier, mais il ouvre la même porte : <strong>regarder une plante
              comme une réserve de couleur</strong>. J'en parle plus longuement dans l'article sur la{" "}
              <Link to="/blog/teinture-vegetale-chou-rouge-indigo-naturel" className={linkClass}>teinture végétale au chou rouge</Link> et dans le guide
              des <Link to="/guide/plantes-tinctoriales-ile-de-france" className={linkClass}>plantes tinctoriales d'Île-de-France</Link>.
            </p>

            <h2 className={h2Class}>Ce qui se passe quand on tape</h2>
            <p>
              Frapper la feuille fait éclater ses cellules. Les pigments qu'elles contiennent sont libérés et pénètrent dans les fibres du tissu.
              Chaque famille de pigments laisse sa signature :
            </p>
            <ul>
              <li>
                <strong>La chlorophylle</strong> donne le vert des fougères et des feuilles. C'est le pigment le plus spectaculaire au départ et le moins
                stable : avec le temps et la lumière, il glisse vers l'olive.
              </li>
              <li>
                <strong>Les anthocyanes</strong> donnent les roses, les violets et les bleus des pétales (cosmos, géranium, pensée) et le rouge des
                feuilles d'automne. Elles changent de couleur selon l'acidité : un peu de vinaigre les fait virer au rose, une eau calcaire les pousse
                vers le bleu-vert. C'est le même principe que le chou rouge.
              </li>
              <li>
                <strong>Les flavonoïdes</strong> donnent les jaunes, ceux du coréopsis, du souci ou de certaines feuilles d'érable.
              </li>
            </ul>
            <p>
              Le tissu compte aussi. Les fibres animales (soie, laine) prennent mieux la couleur que les fibres végétales (coton, lin). Pour aider le
              coton, on le prépare souvent à l'<strong>alun</strong>, un mordant utilisé depuis l'Antiquité par les teinturiers, qui aide les pigments
              à s'accrocher à la fibre.
            </p>

            <figure className={figureClass}>
              <img
                src={photoFleurs}
                alt="Fleurs fraîches, roses, pétales et feuilles préparés pour un atelier d'impression végétale, avec les premières empreintes colorées sur tissu"
                className="w-full h-auto"
                loading="lazy"
                width={1024}
                height={1024}
              />
              <figcaption className={captionClass}>
                Avant de taper : on trie les fleurs et les feuilles, on teste les couleurs sur une chute de tissu
              </figcaption>
            </figure>

            <h2 className={h2Class}>Choisir ses plantes</h2>
            <p>
              Les meilleures candidates sont <strong>fines, juteuses et bien colorées</strong>. La fougère est la reine de l'atelier : sa silhouette
              découpée sort nette, presque comme une gravure. Les feuilles d'érable, surtout à l'automne, donnent des dégradés de vert, de jaune et de
              rouge. Les pétales de cosmos laissent un rose franc. Les feuilles épaisses et cireuses, comme le laurier ou le houx, donnent peu : leur
              cuticule protège trop bien leurs cellules.
            </p>
            <p>
              Je demande toujours de cueillir avec mesure, dans un jardin ou parmi les plantes communes, jamais d'espèces protégées. Une feuille
              suffit souvent pour une empreinte, et c'est aussi une occasion de parler de la cueillette raisonnée.
            </p>

            <h2 className={h2Class}>Le déroulé d'un atelier</h2>
            <p>
              Un atelier tataki zomé dure environ <strong>deux heures</strong>, dès 10 ans. On commence par une courte causerie sur l'histoire des
              couleurs végétales et la chimie des pigments, avec des plantes à sentir et à toucher. Puis chacun teste sur une chute de tissu, choisit ses
              plantes, compose son motif et se lance.
            </p>
            <ol>
              <li>On pose la plante face colorée contre le tissu, prétraité à l'alun.</li>
              <li>On la recouvre d'un papier ou d'un film pour ne pas la déchirer.</li>
              <li>On frappe régulièrement, au maillet ou au galet, en partant du centre vers les bords.</li>
              <li>On soulève et on retire délicatement les restes de la plante.</li>
            </ol>
            <p>
              Chacun repart avec sa pièce : tee-shirt, sac en toile, serviette ou carré de coton. Sur la photo en haut de l'article, on voit les deux
              gestes de l'atelier : le galet qui frappe une feuille d'érable sur un tee-shirt déjà couvert de cosmos et de fougères, et un sac que l'on
              tend pour découvrir l'empreinte en relief d'une grande feuille.
            </p>

            <h2 className={h2Class}>Entretenir son tissu imprimé</h2>
            <p>
              Le plus dur, c'est d'attendre. Laissez reposer le tissu <strong>plusieurs jours</strong> avant le premier lavage, puis lavez-le à la main,
              à l'eau froide, avec un savon doux, et faites-le sécher à l'ombre. Les couleurs vont évoluer : c'est une empreinte vivante, qui vieillit
              comme la plante aurait vieilli. Beaucoup de participants trouvent que c'est justement ce qui la rend précieuse.
            </p>

            <h2 className={h2Class}>Pour qui ?</h2>
            <p>
              Le tataki zomé fonctionne avec tous les publics, parce qu'il ne demande aucun talent de dessin : c'est la plante qui dessine. Je le propose
              aux <Link to="/etablissements-scolaires" className={linkClass}>établissements scolaires</Link> (sciences, arts plastiques, Japon), aux
              centres de loisirs, aux médiathèques, aux{" "}
              <Link to="/animation-collectivites-mairies" className={linkClass}>collectivités</Link> pour la Fête de la Nature ou les Journées du
              patrimoine, et aux <Link to="/ateliers-botanique-entreprise-idf" className={linkClass}>entreprises</Link> pour un team building
              créatif : chaque collaborateur repart avec un tote bag unique. Il se marie très bien avec l'
              <Link to="/atelier-teinture-vegetale" className={linkClass}>atelier de teinture végétale</Link>.
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
                Organiser un atelier tataki zomé
              </h3>
              <p className="font-body text-sm text-[hsl(var(--black))]/85 mb-4">
                École, médiathèque, mairie, CSE ou entreprise en Île-de-France : Botanique Ludique apporte les plantes, les tissus et le matériel.
                Dites-nous votre public et votre date, nous vous envoyons une proposition sur mesure.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[hsl(var(--black))] text-[hsl(var(--cream))] px-6 py-3 font-mono-brand text-xs uppercase tracking-[2px] border-[3px] border-[hsl(var(--black))] hover:bg-[hsl(var(--olive))] hover:text-[hsl(var(--black))] transition-colors"
                >
                  Demander un devis <ArrowRight className="w-4 h-4" />
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
                  <Link to="/blog/teinture-vegetale-chou-rouge-indigo-naturel" className={linkClass}>
                    Teinture végétale au chou rouge : obtenir un indigo naturel
                  </Link>
                </li>
                <li>
                  <Link to="/guide/plantes-tinctoriales-ile-de-france" className={linkClass}>
                    Les plantes tinctoriales d'Île-de-France
                  </Link>
                </li>
                <li>
                  <Link to="/blog/animation-noel-entreprise-atelier-sachet-senteur" className={linkClass}>
                    Animations de Noël en entreprise : sachets senteur en flux continu et ateliers végétaux
                  </Link>
                </li>
                <li>
                  <Link to="/blog/atelier-route-des-epices-fete-de-la-science-versailles" className={linkClass}>
                    Sur la route des épices : retour sur l'atelier de la Fête de la Science à Versailles
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

export default BlogTatakiZome;
