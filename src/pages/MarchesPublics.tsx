import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import AnimatedSection from "@/components/AnimatedSection";
import BackToTop from "@/components/BackToTop";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Shield, Receipt, Building2, CheckCircle2, Mail } from "lucide-react";

const MarchesPublics = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SEO
        title="Marchés publics & administratif, animations pour collectivités"
        description="Documents administratifs pour vos marchés publics : SIRET, attestations, RC Pro, conditions de facturation. Botanique Ludique, prestataire animation nature pour collectivités IDF."
        keywords="marché public animation nature, prestataire collectivité, SIRET botanique ludique, attestation URSSAF, RC pro association, facturation publique mandat administratif"
        canonical="/marches-publics"
      />
      <SchemaOrg
        type="BreadcrumbList"
        data={{ items: [
          { name: "Accueil", url: "https://botaniqueludique.com/" },
          { name: "Pro", url: "https://botaniqueludique.com/pro" },
          { name: "Marchés publics", url: "https://botaniqueludique.com/marches-publics" }
        ]}}
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-16 lg:px-[120px] border-b-[3px] border-[hsl(var(--black))]">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] block mb-5">
              Marchés publics
            </span>
            <h1 className="font-display text-[clamp(2.2rem,6vw,4.5rem)] uppercase leading-[0.9] tracking-[-2px] text-[hsl(var(--black))] mb-8">
              Documents administratifs<br />pour vos marchés publics
            </h1>
            <p className="font-body text-lg md:text-xl text-[hsl(var(--black))]/75 max-w-3xl leading-relaxed">
              Botanique Ludique est une association loi 1901 habituée à travailler avec les collectivités locales,
              CCAS, médiathèques, EHPAD publics et services culturels d'Île-de-France.
              Cette page rassemble les pièces administratives et garanties que vos services achats vérifient en amont d'une commande publique.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Statut juridique */}
      <section className="py-20 px-6 md:px-16 lg:px-[120px] bg-white border-b-[3px] border-[hsl(var(--black))]">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-[-1px] text-[hsl(var(--black))] mb-10">
              Statut juridique et identifiants
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { label: "Forme juridique", value: "Association loi 1901 à but non lucratif" },
              { label: "Dénomination", value: "Botanique Ludique" },
              { label: "Siège social", value: "Île-de-France (adresse précise sur demande)" },
              { label: "SIRET", value: "À transmettre sur demande" },
              { label: "Code APE / NAF", value: "À transmettre sur demande" },
              { label: "Numéro RNA", value: "Association déclarée, numéro fourni sur devis" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <div className="border-[3px] border-[hsl(var(--black))] bg-[hsl(var(--cream))] p-6">
                  <p className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--olive))] mb-2">
                    {item.label}
                  </p>
                  <p className="font-body text-base text-[hsl(var(--black))]">{item.value}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={300}>
            <div className="mt-8 p-6 border-[3px] border-[hsl(var(--black))] bg-[hsl(var(--sage))]/20">
              <p className="font-body text-[hsl(var(--black))]">
                Les pièces nominatives complètes (SIRET, numéro RNA, RIB, attestations à jour) sont transmises avec chaque devis,
                ou sur simple demande à <a href="mailto:contact@botaniqueludique.com" className="underline font-bold">contact@botaniqueludique.com</a>.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Documents disponibles */}
      <section className="py-20 px-6 md:px-16 lg:px-[120px] border-b-[3px] border-[hsl(var(--black))]">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-[-1px] text-[hsl(var(--black))] mb-4">
              Documents transmis sur demande
            </h2>
            <p className="font-body text-lg text-[hsl(var(--black))]/75 mb-12 max-w-3xl">
              Toutes les pièces requises pour une mise en concurrence, un achat hors marché formalisé ou une commande directe.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: FileText, title: "K-bis ou récépissé de déclaration en préfecture", desc: "Attestation officielle d'existence juridique de l'association." },
              { icon: Receipt, title: "Attestation de régularité fiscale", desc: "Document à jour confirmant l'absence de dette fiscale." },
              { icon: Shield, title: "Attestation URSSAF de vigilance", desc: "Renouvelée tous les six mois, conforme à l'article L.243-15 du Code de la sécurité sociale." },
              { icon: Shield, title: "Attestation d'assurance Responsabilité Civile Professionnelle", desc: "Couverture spécifique pour les activités de médiation et d'animation nature, en intérieur comme en extérieur." },
              { icon: Receipt, title: "RIB et IBAN", desc: "Pour mandat administratif, virement SEPA ou prélèvement par votre trésorerie." },
              { icon: FileText, title: "Statuts de l'association", desc: "Statuts déposés, conformes à la loi du 1er juillet 1901." },
            ].map((doc, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <div className="border-[3px] border-[hsl(var(--black))] bg-white p-6 h-full">
                  <doc.icon className="w-8 h-8 text-[hsl(var(--olive))] mb-4" strokeWidth={1.5} />
                  <h3 className="font-display text-lg uppercase tracking-[-0.5px] text-[hsl(var(--black))] mb-2">
                    {doc.title}
                  </h3>
                  <p className="font-body text-sm text-[hsl(var(--black))]/70 leading-relaxed">{doc.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Modalités de facturation */}
      <section className="py-20 px-6 md:px-16 lg:px-[120px] bg-white border-b-[3px] border-[hsl(var(--black))]">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-[-1px] text-[hsl(var(--black))] mb-10">
              Modalités de facturation publique
            </h2>
          </AnimatedSection>
          <div className="space-y-6">
            {[
              {
                title: "Devis détaillé sous mandat administratif",
                desc: "Chaque devis détaille la prestation, le matériel fourni, les frais de déplacement et la durée d'intervention. Validité du devis trois mois minimum, compatible avec vos cycles budgétaires."
              },
              {
                title: "Facturation après service fait",
                desc: "Émission de la facture après la prestation, conformément aux règles de la commande publique. Délai de paiement standard de trente jours par mandat administratif via Chorus Pro."
              },
              {
                title: "Chorus Pro",
                desc: "Botanique Ludique dépose ses factures sur la plateforme Chorus Pro pour toutes les entités publiques soumises à la dématérialisation. Numéro SIRET et engagement administratif requis."
              },
              {
                title: "Régime de TVA",
                desc: "Association non assujettie à la TVA au titre de la franchise en base. Les montants annoncés sont nets, sans TVA à ajouter."
              },
              {
                title: "Conditions de paiement",
                desc: "Virement administratif à trente jours fin de mois. Pas d'acompte exigé pour les collectivités sur présentation d'un bon de commande ou d'un engagement administratif."
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <div className="border-l-[3px] border-[hsl(var(--black))] pl-6 py-2">
                  <h3 className="font-display text-xl uppercase tracking-[-0.5px] text-[hsl(var(--black))] mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-base text-[hsl(var(--black))]/75 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lignes budgétaires */}
      <section className="py-20 px-6 md:px-16 lg:px-[120px] border-b-[3px] border-[hsl(var(--black))]">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-[-1px] text-[hsl(var(--black))] mb-4">
              Lignes budgétaires éligibles
            </h2>
            <p className="font-body text-lg text-[hsl(var(--black))]/75 mb-10 max-w-3xl">
              Nos prestations s'inscrivent dans les enveloppes habituelles des collectivités, qu'il s'agisse d'action sociale, culturelle, éducative ou environnementale.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Budget CCAS et action sociale",
              "Politique de la Ville",
              "Contrat de Ville",
              "Crédits DRAC Île-de-France",
              "Budget Vie associative",
              "Action culturelle municipale",
              "Éducation à l'environnement et au développement durable",
              "Crédits ANCT, contrats d'objectifs",
              "Mécénat et conventions partenariales",
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 30}>
                <div className="flex items-start gap-3 p-4 border-[3px] border-[hsl(var(--black))] bg-[hsl(var(--cream))]">
                  <CheckCircle2 className="w-5 h-5 text-[hsl(var(--olive))] mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <p className="font-body text-sm text-[hsl(var(--black))]">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Garanties */}
      <section className="py-20 px-6 md:px-16 lg:px-[120px] bg-white border-b-[3px] border-[hsl(var(--black))]">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-[-1px] text-[hsl(var(--black))] mb-10">
              Nos garanties contractuelles
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Assurance Responsabilité Civile Professionnelle couvrant tous les publics, y compris jeunes et seniors",
              "Matériel végétal issu de filières françaises ou européennes, certifié bio quand disponible",
              "Aucun produit chimique, aucune matière plastique à usage unique",
              "Médiatrice formée à l'EHESS, garantie de qualité scientifique",
              "Attestation d'intervention fournie systématiquement après la prestation",
              "Photos libres de droits transmises à votre service communication",
              "Gestion complète de la logistique : matériel, installation, animation, rangement",
              "Adaptation aux contraintes d'accessibilité PMR et aux publics fragiles",
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 40}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[hsl(var(--olive))] mt-1 flex-shrink-0" strokeWidth={2} />
                  <p className="font-body text-base text-[hsl(var(--black))]/85 leading-relaxed">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-16 lg:px-[120px] bg-[hsl(var(--black))]">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-5xl uppercase tracking-[-1px] text-[hsl(var(--cream))] mb-6">
              Demande de pièces administratives
            </h2>
            <p className="font-body text-lg text-[hsl(var(--cream))]/80 mb-10 max-w-2xl mx-auto">
              Vous montez un dossier d'achat public ou une consultation. Nous vous transmettons l'intégralité des pièces sous deux jours ouvrés.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[hsl(var(--cream))] text-[hsl(var(--black))] px-8 py-4 font-mono-brand text-sm uppercase tracking-[2px] border-[3px] border-[hsl(var(--cream))] hover:bg-transparent hover:text-[hsl(var(--cream))] transition-colors"
              >
                Nous écrire <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:contact@botaniqueludique.com?subject=Demande%20de%20pi%C3%A8ces%20administratives%20-%20Collectivit%C3%A9"
                className="inline-flex items-center gap-2 bg-transparent text-[hsl(var(--cream))] px-8 py-4 font-mono-brand text-sm uppercase tracking-[2px] border-[3px] border-[hsl(var(--cream))] hover:bg-[hsl(var(--cream))] hover:text-[hsl(var(--black))] transition-colors"
              >
                <Mail className="w-4 h-4" /> Email direct
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default MarchesPublics;
