import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PhotoCarousel from "@/components/PhotoCarousel";

// Photos de la galerie (sans visage de la fondatrice)
import terrariumEnfantsMousse from "@/assets/gallery-terrarium-enfants-mousse.jpg";
import fittoniaPots from "@/assets/gallery-fittonia-pots.jpg";
import terrariumEnfantsFabrication from "@/assets/gallery-terrarium-enfants-fabrication.jpg";
import bougieFleursSechees from "@/assets/gallery-bougie-fleurs-sechees.jpg";
import kokedamaTradescantia from "@/assets/gallery-kokedama-tradescantia.jpg";
import kokedamaGarden from "@/assets/gallery-kokedama-garden.webp";
import terrarium from "@/assets/gallery-terrarium.webp";
import flowerCrown from "@/assets/gallery-flower-crown.webp";
import seedBombs from "@/assets/gallery-seed-bombs.webp";
import workshopGroup from "@/assets/gallery-workshop-group.webp";
import teinture1 from "@/assets/gallery-teinture-1.webp";
import teinture2 from "@/assets/gallery-teinture-2.webp";
import tatakiZome from "@/assets/workshop-tataki-zome.webp";
import basketry from "@/assets/gallery-basketry.webp";

const LANDING_PHOTOS = [
  { src: terrariumEnfantsMousse, alt: "Atelier terrarium avec mousse pour enfants" },
  { src: fittoniaPots, alt: "Plantules de Fittonia pour terrariums" },
  { src: terrariumEnfantsFabrication, alt: "Enfants fabriquant un terrarium en bocal" },
  { src: bougieFleursSechees, alt: "Bougie aux fleurs séchées" },
  { src: kokedamaTradescantia, alt: "Kokedama avec Tradescantia zebrina" },
  { src: kokedamaGarden, alt: "Kokedama dans un jardin naturel" },
  { src: terrarium, alt: "Terrarium végétal en bocal" },
  { src: flowerCrown, alt: "Couronne de fleurs naturelles" },
  { src: seedBombs, alt: "Bombes de graines en atelier" },
  { src: workshopGroup, alt: "Atelier kokedama en groupe" },
  { src: teinture1, alt: "Atelier teinture végétale, préparation" },
  { src: teinture2, alt: "Teinture végétale, couleurs naturelles" },
  { src: tatakiZome, alt: "Atelier Tataki Zome, impression végétale" },
  { src: basketry, alt: "Atelier vannerie et tressage" },
];

interface LandingPhotoStripProps {
  title?: string;
  subtitle?: string;
}

const LandingPhotoStrip = ({
  title = "Nos ateliers en images",
  subtitle = "Aperçu de nos interventions, créations et publics",
}: LandingPhotoStripProps) => {
  return (
    <section className="py-12 md:py-16 border-b-[3px] border-[hsl(var(--black))] bg-[hsl(var(--yellow))]/40 relative overflow-hidden">
      {/* Accent stripe top */}
      <div className="absolute top-0 inset-x-0 h-[6px] bg-[hsl(var(--terracotta))]" />
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 mb-8 md:mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <span className="font-mono-brand text-[10px] uppercase tracking-[3px] text-[hsl(var(--terracotta))] block mb-3">
            ★ En images · Sur le terrain
          </span>
          <h2 className="font-display text-3xl md:text-4xl uppercase tracking-[-1px] text-[hsl(var(--black))] leading-none">
            {title}
          </h2>
          <p className="font-body text-sm md:text-base text-[hsl(var(--black))]/75 mt-2 max-w-xl">
            {subtitle}
          </p>
        </div>
        <Link
          to="/gallery"
          className="btn-brutal bg-[hsl(var(--black))] text-[hsl(var(--cream))] border-[hsl(var(--black))] hover:bg-[hsl(var(--cream))] hover:text-[hsl(var(--black))] inline-flex items-center gap-2 self-start md:self-auto flex-shrink-0"
        >
          Voir toute la galerie <ArrowRight size={14} />
        </Link>
      </div>
      <PhotoCarousel images={LANDING_PHOTOS} speed={0.6} />
    </section>
  );
};

export default LandingPhotoStrip;
