import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import BackToTop from "@/components/BackToTop";
import { Link } from "react-router-dom";
import affiche from "@/assets/fete-science-epices-versailles-affiche.jpg";
import {
  ArrowLeft,
  ArrowRight,
  Calendar as CalendarIcon,
  Clock,
  ExternalLink,
  MapPin,
  Phone,
  Ticket,
  Users,
} from "lucide-react";

const EVENT_URL = "https://botaniqueludique.com/evenement/fete-de-la-science-versailles-route-des-epices";
const OFFICIAL_URL =
  "https://www.versailles.fr/762-11162/culture/reseau-des-bibliotheques/agenda/fiche/fete-de-la-science-sur-la-route-des-epices.htm";

const faq = [
  {
    question: "Quand a lieu l'atelier « Sur la route des épices » à Versailles ?",
    answer:
      "Le samedi 3 octobre 2026, de 15h30 à 17h30, à la bibliothèque Choiseul, 5 rue de l'Indépendance américaine, 78000 Versailles, dans le cadre de la Fête de la Science.",
  },
  {
    question: "Comment s'inscrire à cet atelier de la Fête de la Science ?",
    answer:
      "L'inscription est obligatoire et ouvre le 3 septembre 2026. Elle se fait par téléphone auprès de la bibliothèque Choiseul au 01 30 97 28 90, ou directement sur la fiche événement du réseau des bibliothèques de Versailles.",
  },
  {
    question: "L'atelier est-il payant ?",
    answer:
      "Non, l'atelier est entièrement gratuit. Seule l'inscription préalable auprès de la bibliothèque Choiseul est obligatoire, les places étant limitées. Le matériel du sachet senteur est fourni.",
  },
  {
    question: "À partir de quel âge peut-on participer ?",
    answer:
      "L'atelier est ouvert à tous à partir de 11 ans. Il est conçu pour être suivi aussi bien par des adolescents que par des adultes : le récit historique et la partie scientifique sont accessibles sans aucun prérequis.",
  },
  {
    question: "Qui anime l'atelier ?",
    answer:
      "Vanessa Charlery, animatrice ethnobotaniste et fondatrice de Botanique Ludique, formée en anthropologie de la nature à l'EHESS. Elle conçoit et anime des ateliers, conférences et balades ethnobotaniques à Paris et en Île-de-France.",
  },
  {
    question: "Repart-on avec quelque chose ?",
    answer:
      "Oui. Après la partie découverte, chaque participant compose et emporte son propre sachet senteur, réalisé à partir d'épices entières choisies pendant l'atelier.",
  },
  {
    question: "Peut-on faire venir cet atelier dans sa médiathèque ou sa structure ?",
    answer:
      "Oui. « Sur la route des épices » fait partie du catalogue d'interventions de Botanique Ludique et peut être programmé en médiathèque, en école, en entreprise ou en collectivité, en Île-de-France. Le format et la durée sont adaptés au public accueilli.",
  },
];

const infos = [
  { icon: CalendarIcon, label: "Date", value: "Samedi 3 octobre 2026" },
  { icon: Clock, label: "Horaires", value: "15h30 – 17h30" },
  { icon: MapPin, label: "Lieu", value: "Bibliothèque Choiseul, Versailles (78)" },
  { icon: Users, label: "Public", value: "Tout public dès 11 ans" },
  { icon: Ticket, label: "Tarif", value: "Gratuit, sur inscription" },
];

const programme = [
  {
    num: "01",
    title: "D'où viennent vraiment les épices",
    text: "Cannelle, girofle, muscade, poivre, gingembre, badiane, curcuma, piment : on commence par regarder la plante derrière l'épice. Une écorce, un bouton floral pas encore ouvert, un rhizome, une graine, un fruit séché. Reconnaître la partie de la plante que l'on a dans la main change complètement la façon dont on cuisine.",
  },
  {
    num: "02",
    title: "Une histoire du monde tenue par des épices",
    text: "La route des épices n'est pas une jolie image de manuel scolaire. C'est une histoire de comptoirs, de monopoles, de compagnies des Indes et de territoires pris pour quelques arbres. Je raconte comment un bouton floral séché a pu valoir son poids en métal précieux, et ce que cela dit encore aujourd'hui de nos placards de cuisine.",
  },
  {
    num: "03",
    title: "Pourquoi une odeur nous attrape",
    text: "Deuxième temps, plus scientifique : comment fonctionnent l'odorat et le goût. Ce qui se joue au fond du nez, la rétro-olfaction, pourquoi le piment « brûle » sans être chaud, pourquoi une odeur d'épice fait remonter un souvenir d'enfance plus vite que n'importe quelle photo.",
  },
  {
    num: "04",
    title: "Reconnaissance à l'aveugle",
    text: "Un temps de manipulation : sentir, toucher, essayer de nommer. C'est le moment où l'on comprend à quel point on identifie mal ce que l'on mange tous les jours — et à quel point c'est amusant de réapprendre.",
  },
  {
    num: "05",
    title: "Fabrication de votre sachet senteur",
    text: "Chaque participant compose son mélange et repart avec son propre sachet senteur. Le matériel est fourni. C'est un objet simple, mais qui garde la mémoire de l'atelier pendant des mois.",
  },
];

const FeteScienceEpicesVersailles = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SEO
        title="Fête de la Science 2026 à Versailles : atelier Sur la route des épices"
        description="Samedi 3 octobre 2026, 15h30, bibliothèque Choiseul à Versailles : atelier ethnobotanique « Sur la route des épices, odeurs et saveurs » animé par Vanessa Charlery. Histoire des épices, odorat, goût et fabrication d'un sachet senteur. Gratuit, dès 11 ans, sur inscription."
        keywords="Fête de la Science Versailles 2026, atelier épices Versailles, bibliothèque Choiseul Versailles, route des épices atelier, atelier ethnobotanique Yvelines, odeurs et saveurs, Vanessa Charlery, Botanique Ludique, atelier science famille Versailles, sachet senteur épices"
        canonical="/evenement/fete-de-la-science-versailles-route-des-epices"
        ogImage="https://botaniqueludique.com/og-fete-science-epices-versailles.jpg"
        type="article"
        city="Versailles"
      />
      <SchemaOrg
        type="Event"
        data={{
          name: "Fête de la Science — Sur la route des épices : odeurs et saveurs",
          description:
            "Atelier ethnobotanique animé par Vanessa Charlery (Botanique Ludique) dans le cadre de la Fête de la Science : origines et histoire culturelle des épices, fonctionnement des systèmes olfactif et gustatif, puis fabrication d'un sachet senteur à emporter. Gratuit, tout public dès 11 ans, sur inscription.",
          startDate: "2026-10-03T15:30:00+02:00",
          endDate: "2026-10-03T17:30:00+02:00",
          url: EVENT_URL,
          image: "https://botaniqueludique.com/og-fete-science-epices-versailles.jpg",
          inLanguage: "fr",
          typicalAgeRange: "11-",
          location: {
            "@type": "Place",
            name: "Bibliothèque Choiseul",
            address: {
              "@type": "PostalAddress",
              streetAddress: "5 rue de l'Indépendance américaine",
              addressLocality: "Versailles",
              postalCode: "78000",
              addressRegion: "Île-de-France",
              addressCountry: "FR",
            },
            geo: { "@type": "GeoCoordinates", latitude: 48.802001, longitude: 2.121479 },
          },
          organizer: {
            "@type": "Organization",
            name: "Réseau des bibliothèques de Versailles",
            url: OFFICIAL_URL,
          },
          performer: {
            "@type": "Person",
            name: "Vanessa Charlery",
            jobTitle: "Animatrice ethnobotaniste",
            url: "https://botaniqueludique.com/about",
            affiliation: {
              "@type": "Organization",
              name: "Botanique Ludique",
              url: "https://botaniqueludique.com",
            },
          },
          superEvent: { "@type": "Event", name: "Fête de la Science 2026" },
          isAccessibleForFree: true,
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
            url: OFFICIAL_URL,
            validFrom: "2026-09-03T00:00:00+02:00",
          },
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
            { name: "Agenda", url: "https://botaniqueludique.com/agenda" },
            { name: "Fête de la Science 2026, Sur la route des épices", url: EVENT_URL },
          ],
        }}
      />
      <Navigation />

      {/* HERO */}
      <section className="pt-32 pb-14 px-6 md:px-16 lg:px-[120px] bg-[hsl(var(--cream))] border-b-[3px] border-[hsl(var(--black))]">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/agenda"
            className="flex w-fit items-center gap-2 font-mono-brand text-[11px] uppercase tracking-[2px] text-[hsl(var(--black))]/60 hover:text-[hsl(var(--black))] transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Retour à l'agenda
          </Link>

          <span className="font-mono-brand text-[10px] uppercase tracking-[3px] inline-block bg-yellow border-[3px] border-[hsl(var(--black))] px-3 py-1.5 mb-6">
            Fête de la Science 2026 · Versailles
          </span>

          <h1 className="font-display text-[clamp(2rem,6vw,4rem)] uppercase leading-[0.95] tracking-[-2px] text-[hsl(var(--black))] mb-6">
            Sur la route des épices : odeurs et saveurs
          </h1>

          <p className="font-body text-lg md:text-xl text-[hsl(var(--black))]/85 leading-relaxed mb-4">
            Un atelier de découverte ethnobotanique animé par <strong>Vanessa Charlery</strong>,
            animatrice ethnobotaniste et fondatrice de Botanique Ludique, le{" "}
            <strong>samedi 3 octobre 2026 à 15h30</strong> à la bibliothèque Choiseul de Versailles.
          </p>
          <p className="font-body text-base text-[hsl(var(--black))]/70 leading-relaxed">
            D'où viennent les épices que nous utilisons tous les jours ? Pourquoi leurs odeurs et
            leurs saveurs nous touchent-elles autant ? Deux heures gratuites pour croiser histoire
            culturelle, botanique et sciences des sens — et repartir avec son propre sachet senteur.
          </p>

          <figure className="mt-10 border-[3px] border-[hsl(var(--black))] shadow-brutal bg-white">
            <img
              src={affiche}
              alt="Affiche de l'atelier Sur la route des épices, odeurs et saveurs, samedi 3 octobre 2026 à 15h30, bibliothèque Choiseul de Versailles, Fête de la Science, Botanique Ludique"
              className="w-full h-auto"
              width={1080}
              height={1526}
              loading="lazy"
            />
            <figcaption className="p-4 font-mono-brand text-[10px] uppercase tracking-[2px] text-[hsl(var(--black))]/70 border-t-[3px] border-[hsl(var(--black))] leading-relaxed">
              Affiche de l'atelier · Fête de la Science 2026, réseau des bibliothèques de Versailles.
              L'âge minimum retenu par la bibliothèque est de 11 ans.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* INFOS PRATIQUES */}
      <section className="py-12 px-6 md:px-16 lg:px-[120px]">
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-0">
            {infos.map((info, i) => (
              <div
                key={i}
                className="border-[3px] border-[hsl(var(--black))] -ml-[3px] -mt-[3px] bg-[hsl(var(--cream))] p-5 flex items-start gap-3"
              >
                <info.icon className="w-4 h-4 text-[hsl(var(--olive))] mt-1 shrink-0" />
                <div>
                  <span className="font-mono-brand text-[10px] uppercase tracking-[2px] text-[hsl(var(--black))]/50 block mb-1">
                    {info.label}
                  </span>
                  <span className="font-display text-sm uppercase tracking-tight leading-tight">
                    {info.value}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* INSCRIPTION */}
          <div className="border-[3px] border-[hsl(var(--black))] bg-green-pale p-6 md:p-8 mt-8 shadow-brutal">
            <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--black))]/60 block mb-3">
              Inscription
            </span>
            <h2 className="font-display text-xl md:text-2xl uppercase tracking-[-1px] mb-4">
              Gratuit, sur inscription dès le 3 septembre
            </h2>
            <p className="font-body text-sm text-[hsl(var(--black))]/80 leading-relaxed mb-5">
              L'atelier est gratuit, mais les places sont limitées et l'inscription est
              obligatoire. Elle se fait auprès de la bibliothèque Choiseul à partir du 3 septembre
              2026. L'inscription ne passe pas par Botanique Ludique : c'est le réseau des
              bibliothèques de Versailles qui gère les réservations.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+33130972890"
                className="inline-flex items-center gap-2 bg-[hsl(var(--black))] text-[hsl(var(--cream))] border-[3px] border-[hsl(var(--black))] shadow-brutal px-5 py-3 font-display uppercase text-xs tracking-wide hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                01 30 97 28 90
              </a>
              <a
                href={OFFICIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-yellow text-[hsl(var(--black))] border-[3px] border-[hsl(var(--black))] shadow-brutal px-5 py-3 font-display uppercase text-xs tracking-wide hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                Fiche officielle Ville de Versailles
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <p className="font-mono-brand text-[10px] uppercase tracking-[1.5px] text-[hsl(var(--black))]/50 mt-5 leading-relaxed">
              Bibliothèque Choiseul · 5 rue de l'Indépendance américaine · 78000 Versailles
            </p>
          </div>
        </div>
      </section>

      {/* CE QUE JE PROPOSE */}
      <section className="py-14 px-6 md:px-16 lg:px-[120px] bg-[hsl(var(--cream))]">
        <div className="max-w-3xl mx-auto">
          <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-4">
            Le déroulé
          </span>
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] uppercase leading-[0.95] tracking-[-1.5px] mb-8">
            Ce que je propose pendant cet atelier
          </h2>

          <div className="prose prose-lg max-w-none text-[hsl(var(--black))]/85 space-y-5 mb-10">
            <p>
              Je m'appelle Vanessa Charlery, je suis animatrice ethnobotaniste et j'ai été formée en
              anthropologie de la nature à l'EHESS. Mon travail consiste à raconter les plantes
              autrement : non pas seulement comme des objets de botanique, mais comme des objets
              sociaux, politiques et culturels. Les épices sont un terrain idéal pour ça. Ce sont des
              plantes minuscules qui ont déplacé des flottes, redessiné des frontières et changé la
              façon dont des continents entiers mangent.
            </p>
            <p>
              Pour la Fête de la Science, j'ai construit un atelier en deux temps : un temps de récit
              et de sciences, un temps de manipulation. On sent, on touche, on se trompe, on
              comprend — et on repart avec quelque chose entre les mains.
            </p>
          </div>

          <div className="space-y-0">
            {programme.map((item) => (
              <div
                key={item.num}
                className="border-[3px] border-[hsl(var(--black))] -mt-[3px] bg-[hsl(var(--cream))] p-6 md:p-7 hover:bg-green-pale transition-colors"
              >
                <div className="flex items-start gap-5">
                  <span className="font-display text-2xl md:text-3xl uppercase tracking-tight text-[hsl(var(--olive))] shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="font-display text-lg md:text-xl uppercase leading-tight tracking-tight mb-3">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm md:text-base text-[hsl(var(--black))]/80 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none text-[hsl(var(--black))]/85 space-y-5 mt-10">
            <p>
              L'atelier est pensé pour être suivi sans aucune connaissance préalable. Il fonctionne
              aussi bien avec un public familial qu'avec des adultes seuls, et il s'inscrit dans la
              même démarche que mes{" "}
              <Link
                to="/balades-botaniques"
                className="underline decoration-[3px] underline-offset-2 decoration-[hsl(var(--olive))] hover:text-[hsl(var(--olive))] transition-colors"
              >
                balades ethnobotaniques
              </Link>{" "}
              et mes{" "}
              <Link
                to="/atelier-teinture-vegetale"
                className="underline decoration-[3px] underline-offset-2 decoration-[hsl(var(--olive))] hover:text-[hsl(var(--olive))] transition-colors"
              >
                ateliers de teinture végétale
              </Link>{" "}
              : partir d'un geste concret pour arriver à une histoire beaucoup plus large. C'est ce
              même fil que je déroule dans mes articles sur la{" "}
              <Link
                to="/blog/monstera-plante-coloniale-distinction-sociale"
                className="underline decoration-[3px] underline-offset-2 decoration-[hsl(var(--olive))] hover:text-[hsl(var(--olive))] transition-colors"
              >
                monstera comme plante coloniale
              </Link>{" "}
              ou sur le{" "}
              <Link
                to="/blog/terrarium-biopiraterie-histoire-coloniale"
                className="underline decoration-[3px] underline-offset-2 decoration-[hsl(var(--olive))] hover:text-[hsl(var(--olive))] transition-colors"
              >
                terrarium et la biopiraterie
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* QUI ANIME */}
      <section className="py-14 px-6 md:px-16 lg:px-[120px]">
        <div className="max-w-3xl mx-auto">
          <div className="border-[3px] border-[hsl(var(--black))] bg-yellow p-6 md:p-8 shadow-brutal">
            <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--black))]/60 block mb-3">
              L'intervenante
            </span>
            <h2 className="font-display text-xl md:text-2xl uppercase tracking-[-1px] mb-4">
              Vanessa Charlery, animatrice ethnobotaniste
            </h2>
            <p className="font-body text-sm md:text-base text-[hsl(var(--black))]/85 leading-relaxed mb-5">
              Fondatrice de Botanique Ludique, formée en anthropologie de la nature à l'EHESS.
              J'anime des ateliers, des conférences et des balades ethnobotaniques à Paris et en
              Île-de-France, pour des bibliothèques, des médiathèques, des collectivités, des écoles,
              des EHPAD et des entreprises. Mon approche croise botanique, histoire culturelle et
              sciences sociales.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-[hsl(var(--black))] text-[hsl(var(--cream))] border-[3px] border-[hsl(var(--black))] px-5 py-3 font-display uppercase text-xs tracking-wide hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              En savoir plus
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-6 md:px-16 lg:px-[120px] bg-[hsl(var(--cream))]">
        <div className="max-w-3xl mx-auto">
          <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-4">
            Questions fréquentes
          </span>
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] uppercase leading-[0.95] tracking-[-1.5px] mb-8">
            Tout savoir avant de venir
          </h2>
          <div className="space-y-0">
            {faq.map((item, i) => (
              <div
                key={i}
                className="border-[3px] border-[hsl(var(--black))] -mt-[3px] bg-[hsl(var(--cream))] p-6"
              >
                <h3 className="font-display text-base md:text-lg uppercase leading-tight tracking-tight mb-3">
                  {item.question}
                </h3>
                <p className="font-body text-sm text-[hsl(var(--black))]/80 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA PRO */}
      <section className="py-16 px-6 md:px-16 lg:px-[120px] bg-[hsl(var(--black))] text-[hsl(var(--cream))]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-yellow block mb-4">
            Pour les structures
          </span>
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] uppercase leading-[0.95] tracking-[-1.5px] mb-6">
            Programmer cet atelier chez vous
          </h2>
          <p className="font-body text-base md:text-lg text-[hsl(var(--cream))]/80 leading-relaxed mb-8">
            « Sur la route des épices » se joue aussi en médiathèque, en école, en centre social, en
            résidence seniors ou en entreprise, partout en Île-de-France. Durée, niveau et format
            sont adaptés à votre public.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-yellow text-[hsl(var(--black))] border-[3px] border-[hsl(var(--black))] shadow-brutal px-6 py-4 font-display uppercase text-sm tracking-wide hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              Demander un devis
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/intervention-mediatheque-botanique"
              className="inline-flex items-center gap-2 bg-[hsl(var(--cream))] text-[hsl(var(--black))] border-[3px] border-[hsl(var(--black))] shadow-brutal px-6 py-4 font-display uppercase text-sm tracking-wide hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              Interventions en médiathèque
            </Link>
          </div>
        </div>
      </section>

      <BackToTop />
      <Footer />
    </div>
  );
};

export default FeteScienceEpicesVersailles;
