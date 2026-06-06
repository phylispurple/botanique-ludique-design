import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import BackToTop from "@/components/BackToTop";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import affiche from "@/assets/du-breuil-en-fete-2026-affiche.png.asset.json";

const BlogBaladeBotaniqueDuBreuil = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SEO
        title="Balade botanique École Du Breuil : plantes voyageuses"
        description="Retour sur la balade ethnobotanique du 31 mai 2026 à l'École Du Breuil. Plantes voyageuses, histoire des jardins et médiation pour écoles."
        keywords="balade botanique École Du Breuil, balade ethnobotanique Paris, animation botanique collectivité, balade botanique école, médiation jardin patrimonial, animation Bois de Vincennes"
        canonical="/blog/balade-botanique-ecole-du-breuil"
      />
      <SchemaOrg
        type="Article"
        data={{
          headline: "Plantes voyageuses, histoires oubliées : retour sur ma balade botanique à l'École Du Breuil",
          description: "Retour sur la balade ethnobotanique animée le 31 mai 2026 lors de Du Breuil en fête, au cœur du Bois de Vincennes.",
          datePublished: "2026-06-06",
          slug: "balade-botanique-ecole-du-breuil",
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        data={{ items: [
          { name: "Accueil", url: "https://botaniqueludique.com/" },
          { name: "Blog", url: "https://botaniqueludique.com/blog" },
          { name: "Balade botanique École Du Breuil", url: "https://botaniqueludique.com/blog/balade-botanique-ecole-du-breuil" }
        ]}}
      />
      <Navigation />

      <article className="pt-32 pb-20 px-6 md:px-16 lg:px-[120px]">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-5">
              Retour d'expérience
            </span>
            <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.95] tracking-[-2px] text-[hsl(var(--black))] mb-6">
              Plantes voyageuses, histoires oubliées : retour sur ma balade botanique à l'École Du Breuil
            </h1>
            <div className="flex items-center gap-4 mb-10">
              <img
                src="/logos/ecole-du-breuil.jpg"
                alt="Logo de l'École Du Breuil, école d'horticulture et de paysage de la Ville de Paris"
                className="w-16 h-16 object-contain border-[3px] border-[hsl(var(--black))] bg-white p-1"
                loading="lazy"
              />
              <p className="font-mono-brand text-xs uppercase tracking-[2px] text-[hsl(var(--black))]/60">
                Du Breuil en fête 2026<br />Bois de Vincennes, Paris 12e
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={80}>
            <figure className="mb-10 border-[3px] border-[hsl(var(--black))] shadow-brutal bg-white">
              <img
                src={affiche.url}
                alt="Affiche officielle Du Breuil en fête 2026, 30 et 31 mai, Bois de Vincennes, Paris 12e"
                className="w-full h-auto"
                loading="lazy"
              />
              <figcaption className="p-4 font-mono-brand text-[10px] uppercase tracking-[2px] text-[hsl(var(--black))]/70 border-t-[3px] border-[hsl(var(--black))]">
                Affiche officielle, Du Breuil en fête 2026, © Sarah Le Gigan et Adam Adedjoumon, Ville de Paris.
              </figcaption>
            </figure>
          </AnimatedSection>

          <AnimatedSection delay={120}>
            <div className="prose prose-lg max-w-none text-[hsl(var(--black))]/85 space-y-6">
              <p>
                Le 31 mai dernier, à l'occasion de la fête de l'École Du Breuil, j'ai eu le plaisir d'animer une balade botanique intitulée « Plantes voyageuses, histoires oubliées » au cœur du Bois de Vincennes.
              </p>
              <p>
                Cette promenade était une invitation à regarder les plantes autrement. Derrière chaque arbre, chaque fleur et chaque style de jardin se cachent en effet des histoires de voyages, de pouvoir, de colonisation, de savoirs botaniques et de représentations culturelles.
              </p>
              <p>
                À travers les jardins de l'École Du Breuil, nous avons exploré la manière dont les sociétés humaines ont façonné les paysages au fil des siècles et comment les plantes sont devenues les témoins silencieux de notre histoire.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                L'École Du Breuil, un lieu où se raconte l'histoire des jardins
              </h2>
              <p>
                Située dans le Bois de Vincennes, l'École Du Breuil est aujourd'hui l'une des grandes écoles d'horticulture et de paysage de la région parisienne. Mais le site possède une histoire bien plus ancienne.
              </p>
              <p>
                Avant d'accueillir une école, le territoire a connu plusieurs usages : forêt de chasse royale, ferme expérimentale puis espace de formation aux métiers du végétal. Cette évolution raconte déjà quelque chose de notre rapport au vivant. Les mêmes espaces peuvent successivement servir à produire du gibier, expérimenter l'agriculture, enseigner la botanique ou transmettre des savoir-faire paysagers.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                Le jardin de simples, quand les plantes servaient à soigner
              </h2>
              <p>
                Notre voyage a commencé avec les jardins médiévaux et les jardins de simples. Ces espaces étaient consacrés à la culture de plantes médicinales telles que la sauge, la mélisse, l'angélique ou la menthe. Bien avant les pharmacies modernes, les monastères entretenaient ces jardins afin de préparer remèdes et traitements.
              </p>
              <p>
                Les plantes n'étaient pas seulement observées pour leur beauté. Elles étaient avant tout regardées pour ce qu'elles permettaient de faire : soigner, nourrir ou protéger.
              </p>
              <p>
                Nous avons également évoqué la théorie des signatures, selon laquelle certaines plantes pouvaient être associées à des organes du corps en raison de leur forme. Une manière de penser le monde que l'anthropologue Philippe Descola qualifierait aujourd'hui d'analogiste.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                Du jardin italien au jardin à la française, la nature comme démonstration de pouvoir
              </h2>
              <p>
                La balade s'est poursuivie avec l'histoire des jardins de la Renaissance italienne. Nés au XVe siècle dans les grandes villas italiennes, ces jardins mettent en scène terrasses, fontaines, statues et perspectives. Ils témoignent de l'influence de l'Antiquité et de l'humanisme renaissant.
              </p>
              <p>
                Le jardin à la française hérite ensuite de ces principes tout en les poussant à leur paroxysme. Avec André Le Nôtre et les grands jardins du XVIIe siècle, notamment à Versailles, la nature devient géométrique, symétrique et entièrement organisée. Le jardin ne sert plus seulement à produire ou à soigner, il devient une démonstration de puissance.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                La rose, d'une plante médicinale à un symbole universel
              </h2>
              <p>
                Nous nous sommes ensuite arrêtés sur l'histoire fascinante de la rose. Longtemps cultivée pour ses propriétés médicinales et parfumées, elle occupe une place importante dans les jardins de simples du Moyen Âge.
              </p>
              <p>
                À partir du XIXe siècle, l'arrivée de nouvelles variétés asiatiques, notamment chinoises, transforme profondément son histoire. Grâce aux hybridations, la rose devient progressivement un objet horticole, puis un symbole romantique universel. Son histoire illustre parfaitement la manière dont une plante peut changer de statut au fil du temps, d'abord utilitaire, puis esthétique, culturelle et émotionnelle.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                Les plantes voyageuses et les jardins d'essai
              </h2>
              <p>
                L'un des thèmes centraux de la balade concernait la circulation mondiale des plantes. Au XIXe siècle, les progrès techniques et l'expansion coloniale accélèrent considérablement les échanges botaniques.
              </p>
              <p>
                Nous avons évoqué la Wardian Case, une petite serre portative inventée en Angleterre qui révolutionne le transport des végétaux à travers le monde. Grâce à elle, il devient possible d'acheminer fougères, orchidées, palmiers et nombreuses autres espèces sur de longues distances. Ces circulations alimentent alors les jardins botaniques, les jardins d'acclimatation et les jardins d'essai.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                Le palmier, une plante devenue symbole
              </h2>
              <p>
                Pourquoi trouve-t-on des palmiers dans de nombreuses villes d'Afrique du Nord ? Cette question nous a permis d'aborder l'histoire des jardins coloniaux, des expositions universelles et de l'Exposition coloniale de 1931.
              </p>
              <p>
                Contrairement aux idées reçues, de nombreux palmiers utilisés dans les aménagements urbains ne sont pas originaires d'Afrique du Nord. Certains proviennent des Canaries, d'autres d'Amérique du Nord ou du Moyen-Orient. Le palmier devient progressivement un symbole visuel de l'exotisme, du voyage et plus tard des vacances. Plus qu'une simple plante, il participe à la construction d'imaginaires collectifs.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                Le Jardin d'Essai du Hamma, fabriquer une jungle
              </h2>
              <p>
                Nous avons également évoqué le célèbre Jardin d'Essai du Hamma à Alger. Créé au XIXe siècle, il rassemble des espèces venues de différents continents dans un même espace. On y trouve palmiers, ficus, bambous, eucalyptus et nombreuses plantes tropicales qui ne se rencontreraient jamais naturellement dans un même écosystème.
              </p>
              <p>
                C'est d'ailleurs ce caractère spectaculaire qui conduit au tournage d'une partie du film Tarzan the Ape Man en 1932. Le jardin devient alors une véritable mise en scène de l'exotisme et de la fascination occidentale pour les paysages lointains.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                Jardin anglais, fougères et révolution industrielle
              </h2>
              <p>
                La balade nous a ensuite conduits vers les jardins anglais. Nés au XVIIIe siècle en réaction à la rigueur géométrique du jardin français, ils cherchent à reproduire une nature plus libre et plus pittoresque.
              </p>
              <p>
                Cette période coïncide également avec la célèbre Fern Fever anglaise, véritable passion pour les fougères au XIXe siècle. Les serres victoriennes, les Wardian Cases et les progrès de la révolution industrielle favorisent alors l'apparition d'immenses collections botaniques et transforment profondément notre rapport aux plantes.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                Le jardin japonais et le japonisme
              </h2>
              <p>
                Nous avons terminé notre parcours par les jardins japonais. Leur présence dans de nombreux jardins européens témoigne du japonisme, mouvement artistique et culturel qui se développe à partir de la seconde moitié du XIXe siècle.
              </p>
              <p>
                À travers les érables, les mousses, les pins ou les bassins, ces jardins proposent une autre manière de représenter le paysage. Ils racontent autant le Japon que le regard que l'Europe porte sur lui. Comme les jardins coloniaux ou les expositions universelles, ils participent à la circulation des imaginaires et des représentations culturelles.
              </p>

              <h2 className="font-display text-2xl uppercase tracking-[-1px] text-[hsl(var(--black))] mt-10 mb-4">
                Les jardins racontent notre histoire
              </h2>
              <p>
                Cette balade avait pour objectif de montrer que les jardins sont bien plus que de simples espaces verts. Ils sont des archives vivantes. Ils racontent les échanges entre les peuples, les transformations politiques, les progrès techniques, les rapports de pouvoir et les différentes manières dont les sociétés humaines se représentent la nature.
              </p>
              <p>
                Observer un palmier, une rose ou une fougère, c'est parfois remonter plusieurs siècles d'histoire. Et c'est précisément ce qui rend les plantes si passionnantes.
              </p>

              <div className="border-brutal bg-[hsl(var(--green-pale))] p-8 mt-12">
                <h3 className="font-display text-xl uppercase tracking-[-0.5px] text-[hsl(var(--black))] mb-3">
                  Organiser une balade botanique pour votre structure
                </h3>
                <p className="text-sm text-[hsl(var(--black))]/75 mb-5 leading-relaxed">
                  Botanique Ludique conçoit des <strong>balades ethnobotaniques sur mesure</strong> pour les écoles, collèges et lycées, les mairies, les médiathèques, les musées, les jardins remarquables et les entreprises en Île-de-France. Une lecture historique et anthropologique du végétal, adaptée à votre public et à votre lieu.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/balades-botaniques"
                    className="btn-brutal bg-[hsl(var(--olive))] text-[hsl(var(--cream))] border-[hsl(var(--black))] inline-flex items-center gap-2"
                  >
                    Découvrir les balades <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="btn-brutal bg-[hsl(var(--cream))] text-[hsl(var(--black))] border-[hsl(var(--black))] inline-flex items-center gap-2"
                  >
                    Nous écrire
                  </Link>
                </div>
              </div>

              <p className="text-sm text-[hsl(var(--black))]/60 italic mt-8">
                À propos de Botanique Ludique. Nous proposons des ateliers de botanique, des balades ethnobotaniques et des animations autour des plantes pour les particuliers, les écoles, les médiathèques, les collectivités et les entreprises.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </article>

      <BackToTop />
      <Footer />
    </div>
  );
};

export default BlogBaladeBotaniqueDuBreuil;
