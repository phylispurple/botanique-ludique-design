import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const SalesTerms = () => {
  useEffect(() => {
    document.title = "Conditions de Vente - Botanique Ludique";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <main className="flex-1 container mx-auto px-4 md:px-6 py-12 md:py-20 max-w-4xl">
          <h1 className="font-serif text-4xl md:text-5xl mb-8" style={{ color: '#5D653A' }}>
            Conditions de Vente
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-8" style={{ color: '#5D653A' }}>
            
            {/* Champs d'application */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl" style={{ color: '#5D653A' }}>
                Champs d'application
              </h2>
              <p className="leading-relaxed">
                Les présentes Conditions Générales s'appliquent, sans restriction ni réserve à tout achat par les clients de services proposés par Botanique Ludique. Les clients précités peuvent être :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Des structures avec des groupes déjà constitués : entreprises, intermédiaires événementiels (lieu de réception ou agence), structures éducatives, structures publiques, associations.</li>
                <li>Des particuliers</li>
              </ul>
              <p className="leading-relaxed">
                Les caractéristiques principales des services sont présentées sur le site internet <a href="https://botaniqueludique.com" className="underline">https://botaniqueludique.com</a>
              </p>
              <p className="leading-relaxed">
                Le Client est tenu d'en prendre connaissance avant toute passation de commande.
              </p>
              <p className="leading-relaxed">
                Le choix et l'achat d'un service est de la seule responsabilité du client.
              </p>
              <p className="leading-relaxed">
                Les coordonnées du Prestataire sont les suivantes :
              </p>
              <ul className="list-none pl-6 space-y-1">
                <li>Dénomination sociale : Botanique Ludique</li>
                <li>Contact : botaniqueludique@gmail.com</li>
                <li>Localisation : Île-de-France</li>
              </ul>
            </section>

            {/* Tarifs */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl" style={{ color: '#5D653A' }}>
                Tarifs
              </h2>
              <p className="leading-relaxed">
                <strong>Pour les structures :</strong> Les prix de chaque prestation sont indiqués dans le document de présentation fourni au client. Tous les tarifs mentionnés sont TTC.
              </p>
              <p className="leading-relaxed">
                <strong>Pour les particuliers :</strong> Les prix des ateliers sont affichés sur la page dédiée et sur les supports de communication. Tous les tarifs mentionnés sont TTC.
              </p>
              <p className="leading-relaxed">
                Les prix tiennent compte de réductions éventuelles qui seraient consenties par le Prestataire sur le site internet.
              </p>
              <p className="leading-relaxed">
                Le Prestataire se réserve le droit de modifier ses prix à tout moment, étant toutefois entendu que le prix figurant sur le devis au jour de la commande sera le seul applicable au Client.
              </p>
            </section>

            {/* Commandes */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl" style={{ color: '#5D653A' }}>
                Commandes
              </h2>
              <p className="leading-relaxed">
                <strong>Pour les structures :</strong> Les prestations sont effectuées sur devis. Le Client passe sa commande en signant et retournant le devis par email. Celui-ci comporte les coordonnées du client, la désignation du ou des services commandés, la date et le lieu de la prestation.
              </p>
              <p className="leading-relaxed">
                <strong>Pour les particuliers :</strong> Les inscriptions se font via le formulaire de contact du site ou par email. Une confirmation d'inscription est envoyée par email avec les détails de l'atelier (date, lieu, horaire, matériel à prévoir le cas échéant).
              </p>
              <p className="leading-relaxed">
                Toute commande vaut acceptation des prix et descriptions des services disponibles. L'ensemble des données fournies et la confirmation enregistrée vaudront preuve de la transaction.
              </p>
            </section>

            {/* Modalités de paiement */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl" style={{ color: '#5D653A' }}>
                Modalités de paiement
              </h2>
              <p className="leading-relaxed">
                <strong>Pour les structures :</strong> Le règlement s'effectue par virement bancaire ou par chèque à l'ordre de Botanique Ludique. Un acompte de 30% peut être demandé à la signature du devis, le solde étant réglé avant ou après la prestation selon les modalités convenues.
              </p>
              <p className="leading-relaxed">
                <strong>Pour les particuliers :</strong> Le règlement s'effectue en espèces, par chèque ou par virement bancaire. Le paiement complet est demandé au plus tard le jour de l'atelier.
              </p>
              <p className="leading-relaxed">
                Le Prestataire ne sera pas tenu de procéder à la livraison de la prestation si le Client ne lui en paye pas le prix en totalité selon les modalités prévues.
              </p>
            </section>

            {/* Rétractation */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl" style={{ color: '#5D653A' }}>
                Rétractation
              </h2>
              <p className="leading-relaxed">
                Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les prestations de services pleinement exécutées avant la fin du délai de rétractation et dont l'exécution a commencé après accord préalable exprès du consommateur et renoncement exprès à son droit de rétractation.
              </p>
              <p className="leading-relaxed">
                Toutefois, en cas d'annulation :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Plus de 15 jours avant la prestation :</strong> remboursement intégral ou report possible</li>
                <li><strong>Entre 8 et 15 jours avant :</strong> retenue de 30% ou report possible</li>
                <li><strong>Moins de 8 jours avant :</strong> retenue de 50% ou report selon disponibilités</li>
                <li><strong>Moins de 48h avant :</strong> aucun remboursement, report non garanti</li>
              </ul>
            </section>

            {/* Livraison */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl" style={{ color: '#5D653A' }}>
                Livraison / Réalisation de la prestation
              </h2>
              <p className="leading-relaxed">
                Les prestations sont réalisées aux dates et lieux convenus dans le devis ou la confirmation d'inscription.
              </p>
              <p className="leading-relaxed">
                Le Prestataire s'engage à faire ses meilleurs efforts pour réaliser les prestations commandées dans les délais ci-dessus précisés. Si lesdites prestations n'ont pas été effectuées dans le délai fixé, le Client pourra demander la résolution de la vente. Les sommes versées seront alors restituées par le Prestataire dans les meilleurs délais et au plus tard dans les 14 jours suivant la demande.
              </p>
              <p className="leading-relaxed">
                En cas d'impossibilité de réaliser la prestation pour des raisons indépendantes de la volonté du Prestataire (force majeure, maladie, conditions météorologiques défavorables pour les ateliers en extérieur), une nouvelle date sera proposée au Client ou un remboursement intégral sera effectué.
              </p>
            </section>

            {/* Responsabilité */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl" style={{ color: '#5D653A' }}>
                Responsabilité
              </h2>
              <p className="leading-relaxed">
                Les prestations du Prestataire sont fournies dans le cadre d'une obligation de moyens.
              </p>
              <p className="leading-relaxed">
                Le Prestataire ne pourra être tenu pour responsable de tout dommage direct ou indirect causé aux participants, sauf en cas de faute lourde ou de négligence caractérisée.
              </p>
              <p className="leading-relaxed">
                Les participants sont tenus de respecter les consignes de sécurité données par l'animateur. Le Prestataire décline toute responsabilité en cas de non-respect de ces consignes.
              </p>
              <p className="leading-relaxed">
                Une assurance responsabilité civile professionnelle a été souscrite auprès d'une compagnie d'assurance.
              </p>
            </section>

            {/* Propriété intellectuelle */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl" style={{ color: '#5D653A' }}>
                Propriété intellectuelle
              </h2>
              <p className="leading-relaxed">
                Le contenu du site internet et des supports pédagogiques (textes, images, graphismes, logo, etc.) est la propriété du Prestataire et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
              </p>
              <p className="leading-relaxed">
                Toute reproduction totale ou partielle de ce contenu est strictement interdite et est susceptible de constituer un délit de contrefaçon.
              </p>
              <p className="leading-relaxed">
                Les participants s'engagent à ne pas diffuser les contenus pédagogiques à des fins commerciales sans autorisation préalable écrite du Prestataire.
              </p>
            </section>

            {/* Données personnelles */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl" style={{ color: '#5D653A' }}>
                Données personnelles
              </h2>
              <p className="leading-relaxed">
                Le Prestataire s'engage à respecter la vie privée de ses clients conformément au Règlement Général sur la Protection des Données (RGPD).
              </p>
              <p className="leading-relaxed">
                Les données collectées (nom, prénom, email, téléphone) sont utilisées uniquement pour la gestion des commandes et la relation client.
              </p>
              <p className="leading-relaxed">
                Le Client dispose d'un droit d'accès, de rectification et de suppression de ses données personnelles en contactant : botaniqueludique@gmail.com
              </p>
            </section>

            {/* Litiges */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl" style={{ color: '#5D653A' }}>
                Litiges
              </h2>
              <p className="leading-relaxed">
                Les présentes Conditions Générales de Vente sont soumises au droit français.
              </p>
              <p className="leading-relaxed">
                En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. À défaut de résolution amiable, le litige sera porté devant les tribunaux compétents.
              </p>
              <p className="leading-relaxed">
                Conformément aux dispositions du Code de la consommation concernant le règlement amiable des litiges, le Prestataire adhère au Service du Médiateur de la consommation dont il dépend.
              </p>
            </section>

            {/* Date de mise à jour */}
            <div className="mt-12 pt-8 border-t" style={{ borderColor: '#E2E7D1' }}>
              <p className="text-sm opacity-60">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </main>
        
        <Footer />
    </div>
  );
};

export default SalesTerms;
