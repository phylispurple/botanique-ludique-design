import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import BackToTop from "@/components/BackToTop";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import photoTable from "@/assets/gallery-atelier-epices-table.webp";
import photoSachets from "@/assets/gallery-sachet-senteur.webp";
import photoSachetsEpices from "@/assets/gallery-atelier-epices-sachets-2.webp";

const SLUG = "animation-noel-entreprise-atelier-sachet-senteur";

const linkClass =
  "underline decoration-[3px] underline-offset-2 decoration-[hsl(var(--olive))] hover:text-[hsl(var(--olive))] transition-colors";
const h2Class =
  "font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4";
const h3Class =
  "font-display text-lg uppercase tracking-[-0.5px] text-[hsl(var(--black))] mt-6 mb-2";
const figureClass = "my-8 border-[3px] border-[hsl(var(--black))] shadow-brutal bg-white";
const captionClass = "font-mono-brand text-[10px] uppercase tracking-[1.5px] text-[hsl(var(--black))]/60 p-3 border-t-[3px] border-[hsl(var(--black))]";

const faq = [
  {
    question: "Qu'est-ce qu'une animation en flux continu ?",
    answer:
      "C'est un stand ouvert pendant toute la durée de votre événement. Les invités passent quand ils le souhaitent, sans inscription, composent leur sachet senteur en une dizaine de minutes avec l'animatrice, et repartent avec. C'est le format idéal pour un marché de Noël interne, un arbre de Noël CSE, une soirée de fin d'année ou un accueil clients, quand on ne sait pas exactement combien de personnes vont venir ni à quel moment.",
  },
  {
    question: "Combien de personnes peuvent participer ?",
    answer:
      "Le stand est dimensionné selon votre événement : indiquez-nous le nombre d'invités attendus et la durée d'ouverture, nous prévoyons la quantité de sachets, de plantes et d'épices en conséquence. Pour un grand événement, une seconde table peut être ajoutée.",
  },
  {
    question: "Et pour les personnes allergiques ou les enfants ?",
    answer:
      "La liste des ingrédients est affichée sur le stand et chaque mélange est composé à la main : il est facile d'éviter une plante. Pour les enfants d'un arbre de Noël, nous proposons des mélanges doux (lavande, camomille, écorces d'orange, cannelle) et un accompagnement adapté à leur âge.",
  },
  {
    question: "Dans quelles villes intervenez-vous ?",
    answer:
      "Botanique Ludique intervient à Paris et dans toute l'Île-de-France : Yvelines, Hauts-de-Seine, Val-d'Oise, Essonne, Seine-Saint-Denis, Val-de-Marne, Seine-et-Marne. Nous apportons tout le matériel ; il suffit d'une table et d'un peu d'espace autour.",
  },
  {
    question: "Quand faut-il réserver une animation de Noël ?",
    answer:
      "Le plus tôt possible : les dates de fin novembre et de décembre partent vite, en particulier les jeudis et vendredis. Idéalement, réservez dès octobre ou début novembre.",
  },
];

const BlogNoelEntrepriseSachetSenteur = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SEO
        title="Animation Noël entreprise : stand sachets senteur"
        description="Arbre de Noël CSE, marché de Noël, soirée de fin d'année : stand sachets senteur aux épices en flux continu et ateliers végétaux en Île-de-France."
        keywords="animation Noël entreprise, animation arbre de Noël CSE, animation marché de Noël entreprise, animation flux continu, stand animation soirée entreprise, atelier Noël entreprise Paris, atelier sachet senteur, atelier épices Noël, animation fin d'année entreprise, idée animation séminaire décembre, cadeau collaborateurs fait main, atelier DIY Noël entreprise, animation Noël Yvelines, animation Noël Hauts-de-Seine, team building Noël"
        canonical={`/blog/${SLUG}`}
        ogImage="https://botaniqueludique.com/og-image.jpg"
        type="article"
      />
      <SchemaOrg
        type="Article"
        data={{
          headline: "Animation de Noël en entreprise : des sachets senteur en flux continu et des ateliers végétaux pour les fêtes",
          description:
            "Idées d'animations de Noël pour les entreprises et les CSE en Île-de-France : stand de sachets senteur aux épices en flux continu, ateliers en groupe, couronnes végétales, tataki zomé, et calendrier des fêtes de l'année.",
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
            { name: "Animation de Noël en entreprise", url: `https://botaniqueludique.com/blog/${SLUG}` },
          ],
        }}
      />
      <Navigation />

      <article className="pt-32 pb-20 px-6 md:px-16 lg:px-[120px]">
        <div className="max-w-3xl mx-auto">
          <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-5">
            Entreprises & CSE · Fêtes de fin d'année · Île-de-France
          </span>
          <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.95] tracking-[-2px] text-[hsl(var(--black))] mb-6">
            Animation de Noël en entreprise : des sachets senteur en flux continu et des ateliers végétaux pour les fêtes
          </h1>
          <p className="font-mono-brand text-xs uppercase tracking-[2px] text-[hsl(var(--black))]/60 mb-10">
            Par Vanessa Charlery · Animatrice ethnobotaniste
          </p>

          <figure className={figureClass}>
            <img
              src={photoTable}
              alt="Table d'atelier vue de dessus : bols de cannelle, clous de girofle, anis étoilé, cardamome, curcuma, muscade et pétales de rose, participants remplissant leur sachet senteur"
              className="w-full h-auto"
              width={1600}
              height={1200}
            />
            <figcaption className={captionClass}>
              Cannelle, girofle, anis étoilé, cardamome : la table aux épices, prête à accueillir les invités
            </figcaption>
          </figure>

          <div className="prose prose-lg max-w-none text-[hsl(var(--black))]/80 space-y-6">
            <p>
              En décembre, les agendas des entreprises se remplissent : <strong>arbre de Noël du CSE</strong>, marché de Noël interne, soirée de fin
              d'année, séminaire de clôture, déjeuner d'équipe, accueil des clients. Et la même question revient chaque année : quelle animation
              proposer qui sorte des habituels photobooths et sapins gonflables, qui plaise aux adultes comme aux enfants, et qui laisse un vrai
              souvenir ?
            </p>
            <p>
              Ma réponse tient dans un bol de cannelle. Je propose aux entreprises et aux CSE d'Île-de-France des
              <strong> ateliers de sachets senteur aux épices</strong>, en séance ou <strong>en flux continu</strong>, et d'autres ateliers végétaux
              pensés pour les fêtes. Voici les formats, pour quels événements, et comment les organiser.
            </p>

            <h2 className={h2Class}>Le flux continu : l'animation qui s'adapte à votre événement</h2>
            <p>
              Dans un atelier classique, on réunit un groupe à une heure fixe. Dans un événement de fin d'année, c'est rarement possible : les invités
              arrivent par vagues, discutent, mangent, repartent. Le <strong>flux continu</strong> renverse la logique. J'installe un stand, une grande
              table couverte de bols d'épices, de fleurs séchées et de petits sachets en toile, et chacun vient quand il veut.
            </p>
            <p>
              Chaque passage dure <strong>une dizaine de minutes</strong>. On sent, on choisit une base douce, une ou deux épices, une note forte. Je
              raconte au passage l'histoire de la cannelle ou du clou de girofle, et l'invité repart avec son sachet noué d'un double nœud. Pas
              d'inscription, pas de groupe à constituer, pas de temps mort : le stand vit au rythme de votre soirée.
            </p>
            <ul>
              <li><strong>Sans inscription</strong> : idéal quand on ne connaît pas à l'avance le nombre de participants.</li>
              <li><strong>Pour tous les âges</strong> : les enfants de l'arbre de Noël comme les collègues du comité de direction.</li>
              <li><strong>Un cadeau fait main</strong> : chacun repart avec un objet qu'il a composé, sans plastique.</li>
              <li><strong>Un point de rencontre</strong> : autour des bols, les gens se parlent, comparent leurs mélanges, se font sentir leurs sachets.</li>
            </ul>

            <figure className={figureClass}>
              <img
                src={photoSachets}
                alt="Sachets senteur en voile garnis de lavande, camomille, bleuet et bâtons de cannelle"
                className="w-full h-auto"
                loading="lazy"
                width={864}
                height={1184}
              />
              <figcaption className={captionClass}>
                Lavande, camomille, cannelle : chaque sachet est unique, composé par la personne qui l'emporte
              </figcaption>
            </figure>

            <h2 className={h2Class}>Pourquoi les épices sentent Noël</h2>
            <p>
              Cannelle, clou de girofle, orange, anis étoilé, muscade, cardamome : ces odeurs sont celles des pains d'épices, du vin chaud, des
              bredele alsaciens. Ce n'est pas un hasard. Pendant des siècles, les épices ont été en Europe des produits de luxe, venus de très loin, que
              l'on réservait aux grandes occasions. Les tables de fête étaient le moment où l'on sortait ce qu'on avait de plus précieux. L'orange piquée
              de clous de girofle, que l'on suspend encore dans certaines maisons à Noël, descend des pommes de senteur que l'on portait autrefois sur soi.
            </p>
            <p>
              Et puis il y a la mémoire. L'odorat est le sens le plus directement relié aux émotions et aux souvenirs : une odeur de cannelle peut
              ramener d'un coup une cuisine d'enfance. C'est ce qui rend l'atelier si chaleureux. Les invités ne fabriquent pas seulement un objet, ils
              échangent des souvenirs. J'ai raconté cette histoire plus en détail dans le récit de l'atelier{" "}
              <Link to="/blog/atelier-route-des-epices-fete-de-la-science-versailles" className={linkClass}>Sur la route des épices</Link>.
            </p>

            <h2 className={h2Class}>Six formats pour les fêtes de fin d'année</h2>

            <h3 className={h3Class}>1. Le stand sachets senteur en flux continu</h3>
            <p>
              Pour un <strong>marché de Noël interne</strong>, un <strong>arbre de Noël CSE</strong>, une <strong>soirée de fin d'année</strong>, un
              afterwork ou une journée portes ouvertes. Mélanges de Noël (cannelle, orange séchée, girofle, anis étoilé) et mélanges doux (lavande,
              camomille, rose). Durée d'ouverture du stand à définir ensemble, de deux heures à une journée entière.
            </p>

            <h3 className={h3Class}>2. L'atelier sachets senteur en groupe</h3>
            <p>
              Pour un <strong>team building de décembre</strong> ou un déjeuner d'équipe : une séance d'environ 1h30 autour d'une table, avec une
              causerie sur l'histoire des épices et la science de l'odorat, puis la composition guidée de deux ou trois sachets par personne. Un moment
              calme et convivial, très apprécié en fin d'année quand les équipes sont fatiguées.
            </p>

            <h3 className={h3Class}>3. La causerie « Sur la route des épices »</h3>
            <p>
              Pour un <Link to="/animation-seminaire-entreprise-paris" className={linkClass}>séminaire</Link> ou une convention : une intervention
              vivante sur l'histoire des épices, de Vasco de Gama aux plantations de vanille de La Réunion, avec des épices qui circulent dans la salle.
              Elle peut être suivie d'un atelier de sachets.
            </p>

            <h3 className={h3Class}>4. La couronne de Noël végétale</h3>
            <p>
              Sapin, eucalyptus, baies, mousses : chacun compose sa couronne en matières naturelles, pendant environ deux heures. Un format à découvrir
              sur la page <Link to="/atelier-noel-couronne-vegetale-paris" className={linkClass}>atelier couronne de Noël végétale</Link>.
            </p>

            <h3 className={h3Class}>5. Le tote bag imprimé aux plantes</h3>
            <p>
              Avec le <Link to="/blog/tataki-zome-impression-vegetale-atelier" className={linkClass}>tataki zomé</Link>, on imprime des feuilles et des
              fleurs sur un sac en toile en les frappant au galet. Chaque collaborateur repart avec un cadeau de fin d'année unique, qu'il a fait
              lui-même.
            </p>

            <h3 className={h3Class}>6. L'accueil des clients en boutique, hôtel ou showroom</h3>
            <p>
              Pendant la période des fêtes, un stand de sachets senteur crée une expérience à offrir aux clients et donne une bonne raison de pousser la
              porte. Voir aussi nos <Link to="/animation-vegetale-hotel-evenementiel" className={linkClass}>animations pour l'hôtellerie et
              l'événementiel</Link>.
            </p>

            <figure className={figureClass}>
              <img
                src={photoSachetsEpices}
                alt="Sachets senteur terminés et bols d'épices (cannelle, girofle, anis étoilé, cardamome) sur la table d'atelier"
                className="w-full h-auto"
                loading="lazy"
                width={1050}
                height={1400}
              />
              <figcaption className={captionClass}>
                Les sachets prennent forme : chacun repart avec le sien
              </figcaption>
            </figure>

            <h2 className={h2Class}>Et après Noël : des animations pour toute l'année</h2>
            <p>
              Le stand de sachets senteur et les ateliers végétaux se déclinent au fil du calendrier, avec des plantes et des histoires adaptées à
              chaque saison :
            </p>
            <ul>
              <li><strong>Janvier</strong> : vœux et galette des rois, un stand aux agrumes et aux épices pour bien commencer l'année.</li>
              <li><strong>Nouvel An lunaire</strong> (fin janvier ou février) : thé, anis étoilé, gingembre, et l'histoire des plantes d'Asie.</li>
              <li><strong>Saint-Valentin</strong> : sachets à la rose, à la lavande et à la vanille.</li>
              <li><strong>8 mars</strong> : les femmes et les plantes, des herboristes aux botanistes oubliées.</li>
              <li><strong>Fête des mères et des pères</strong> : un cadeau fait main à offrir.</li>
              <li><strong>Semaine de la qualité de vie au travail</strong> (juin) : un <Link to="/atelier-bien-etre-nature-entreprise" className={linkClass}>atelier bien-être</Link> autour des plantes aromatiques.</li>
              <li><strong>Semaine européenne du développement durable</strong> et <strong>Semaine du goût</strong> (septembre-octobre) : épices, cueillette, plantes comestibles.</li>
            </ul>

            <h2 className={h2Class}>Organiser l'animation en pratique</h2>
            <ul>
              <li><strong>Espace</strong> : une ou deux tables et un peu de place autour. Pas besoin d'eau ni d'électricité.</li>
              <li><strong>Installation</strong> : j'arrive avant l'ouverture pour installer, et je repars en laissant la place propre.</li>
              <li><strong>Matériel</strong> : épices, fleurs séchées, sachets, cuillères, mortiers et fiches recettes sont fournis.</li>
              <li><strong>Allergies</strong> : la liste des ingrédients est affichée, chaque mélange est composé à la carte.</li>
              <li><strong>Budget</strong> : devis sur mesure selon la durée et le nombre d'invités. Pour un CSE, l'animation peut entrer dans le budget des activités sociales et culturelles.</li>
            </ul>
            <p>
              Pour les comités d'entreprise, voir aussi notre page{" "}
              <Link to="/animation-cse-entreprise" className={linkClass}>animations CSE</Link> et nos{" "}
              <Link to="/animation-soiree-entreprise-vegetale" className={linkClass}>animations de soirée d'entreprise</Link>.
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
                Réserver votre animation de Noël
              </h3>
              <p className="font-body text-sm text-[hsl(var(--black))]/85 mb-4">
                Entreprise, CSE, agence, boutique ou hôtel à Paris et en Île-de-France : dites-nous la date, le lieu et le nombre d'invités. Nous vous
                envoyons une proposition sur mesure, en flux continu ou en atelier.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/devis-entreprise"
                  className="inline-flex items-center gap-2 bg-[hsl(var(--black))] text-[hsl(var(--cream))] px-6 py-3 font-mono-brand text-xs uppercase tracking-[2px] border-[3px] border-[hsl(var(--black))] hover:bg-[hsl(var(--olive))] hover:text-[hsl(var(--black))] transition-colors"
                >
                  Demander un devis entreprise <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[hsl(var(--cream))] text-[hsl(var(--black))] px-6 py-3 font-mono-brand text-xs uppercase tracking-[2px] border-[3px] border-[hsl(var(--black))] hover:bg-[hsl(var(--olive))] transition-colors"
                >
                  Nous écrire <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="my-8 p-6 border-[3px] border-[hsl(var(--black))] shadow-brutal bg-white">
              <h3 className="font-display text-xl uppercase tracking-[-1px] text-[hsl(var(--black))] mb-4">
                À lire aussi
              </h3>
              <ul className="space-y-2 font-body text-sm text-[hsl(var(--black))]/85">
                <li>
                  <Link to="/blog/atelier-route-des-epices-fete-de-la-science-versailles" className={linkClass}>
                    Sur la route des épices : retour sur l'atelier de la Fête de la Science à Versailles
                  </Link>
                </li>
                <li>
                  <Link to="/blog/tataki-zome-impression-vegetale-atelier" className={linkClass}>
                    Tataki zomé : frapper une feuille pour en garder l'empreinte
                  </Link>
                </li>
                <li>
                  <Link to="/cadeau-original-nature-paris" className={linkClass}>
                    Idées de cadeaux originaux autour de la nature
                  </Link>
                </li>
                <li>
                  <Link to="/team-building-nature-entreprise" className={linkClass}>
                    Team building nature en entreprise
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

export default BlogNoelEntrepriseSachetSenteur;
