import AnimatedSection from "@/components/AnimatedSection";

const videos = [
  { src: "/videos/workshop-demo.mp4", tag: "Immersion", title: "Nos Ateliers\nEn Action" },
  { src: "/videos/workshop-dyeing.mp4", tag: "Teinture", title: "Teinture Végétale" },
  { src: "/videos/workshop-epoxy-floral.mp4", tag: "Époxy", title: "Époxy Floral" },
];

const bottomVideos = [
  { src: "/videos/workshop-demo-2.mp4", tag: "Création", title: "Création Botanique" },
  { src: "/videos/workshop-demo-3.mp4", tag: "Nature", title: "Éléments Naturels" },
  { src: "/videos/workshop-demo-4.mp4", tag: "Participatif", title: "Atelier Participatif" },
];

const VideoCard = ({ src, tag, title, className = "" }: { src: string; tag: string; title: string; className?: string }) => (
  <div className={`relative overflow-hidden border-[3px] border-[hsl(var(--cream))] -m-[1.5px] group transition-all duration-300 hover:z-10 hover:shadow-[8px_8px_0_hsl(var(--olive))] hover:-translate-x-[3px] hover:-translate-y-[3px] ${className}`} style={{ height: '220px' }}>
    <video autoPlay muted loop playsInline className="w-full h-full object-cover block min-h-[220px]">
      <source src={src} type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(var(--black))]/70 flex flex-col justify-end p-6">
      <span className="inline-block self-start font-mono-brand text-[10px] uppercase tracking-[2px] px-3.5 py-1 border border-[hsl(var(--cream))] rounded-full text-[hsl(var(--cream))] mb-2.5">
        {tag}
      </span>
      <h3 className="font-display text-xl uppercase text-[hsl(var(--cream))] leading-[1.1] whitespace-pre-line">
        {title}
      </h3>
    </div>
    {/* Play button */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/20 border-2 border-[hsl(var(--cream))] flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[16px] border-l-[hsl(var(--cream))] ml-1" />
    </div>
  </div>
);

const VideoSection = () => {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-[120px] bg-[hsl(var(--black))]">
      <AnimatedSection>
        <h2 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] uppercase leading-[0.95] tracking-[-2px] text-[hsl(var(--cream))] mb-2">
          En<br />Images
        </h2>
        <p className="font-mono-brand text-sm uppercase tracking-[2px] text-white/45 mb-12">
          Découvrez l'univers Botanique Ludique en mouvement
        </p>
      </AnimatedSection>

      <AnimatedSection delay={150}>
        {/* Top grid: 1 large + 2 stacked */}
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-0">
          <VideoCard src={videos[0].src} tag={videos[0].tag} title={videos[0].title} className="min-h-[280px] md:min-h-[400px]" />
          <div className="flex flex-col">
            <VideoCard src={videos[1].src} tag={videos[1].tag} title={videos[1].title} className="flex-1" />
            <VideoCard src={videos[2].src} tag={videos[2].tag} title={videos[2].title} className="flex-1" />
          </div>
        </div>

        {/* Bottom row: 3 equal */}
        <div className="grid md:grid-cols-3 gap-0 -mt-[1.5px]">
          {bottomVideos.map((v, idx) => (
            <VideoCard key={idx} src={v.src} tag={v.tag} title={v.title} />
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default VideoSection;
