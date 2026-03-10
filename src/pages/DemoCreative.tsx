import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Sparkles, TreePine } from "lucide-react";

/* ─── Marquee Band ─── */
const MarqueeBand = ({ text, reverse = false }: { text: string; reverse?: boolean }) => (
  <div className="overflow-hidden py-4 bg-[hsl(var(--sage-dark))] text-[hsl(var(--sand))]">
    <motion.div
      className="flex whitespace-nowrap gap-12"
      animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <span key={i} className="text-lg md:text-xl tracking-[0.3em] uppercase font-sans flex items-center gap-8">
          {text} <Leaf className="w-4 h-4 opacity-50" />
        </span>
      ))}
    </motion.div>
  </div>
);

/* ─── Section wrapper with scroll animation ─── */
const ScrollSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
};

/* ─── Hero ─── */
const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.9]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-[hsl(var(--charcoal))]">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Floating botanical elements */}
      <motion.div
        className="absolute top-20 left-[10%] text-[hsl(var(--sage))] opacity-20"
        animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <TreePine className="w-32 h-32" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-[15%] text-[hsl(var(--sage-light))] opacity-15"
        animate={{ y: [15, -15, 15], rotate: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <Leaf className="w-24 h-24" />
      </motion.div>

      <motion.div style={{ y: yText, opacity, scale }} className="relative z-10 text-center px-6 max-w-7xl">
        <motion.p
          className="text-[hsl(var(--sage-light))] text-sm md:text-base tracking-[0.5em] uppercase mb-8 font-sans"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Botanique Ludique présente
        </motion.p>

        <motion.h1
          className="text-[clamp(3rem,12vw,12rem)] leading-[0.85] text-[hsl(var(--sand))] tracking-[-0.04em] mb-6"
          style={{ fontFamily: "'Fraunces', serif", fontWeight: 300 }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          L'Art du<br />
          <span className="italic text-[hsl(var(--sage))]">Végétal</span>
        </motion.h1>

        <motion.p
          className="text-[hsl(var(--sand))] opacity-60 text-lg md:text-xl max-w-md mx-auto font-sans mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Créer, apprendre et se reconnecter à la nature
        </motion.p>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            className="w-8 h-14 rounded-full border-2 border-[hsl(var(--sage))] mx-auto flex justify-center pt-2 opacity-40"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-3 bg-[hsl(var(--sage))] rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

/* ─── Stats Band ─── */
const StatsBand = () => {
  const stats = [
    { number: "500+", label: "Ateliers animés" },
    { number: "3000+", label: "Participants" },
    { number: "12", label: "Ateliers différents" },
    { number: "100%", label: "Nature" },
  ];

  return (
    <ScrollSection className="py-24 md:py-32 bg-[hsl(var(--sand))]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <p
              className="text-[clamp(2.5rem,6vw,5rem)] leading-none text-[hsl(var(--sage-dark))] tracking-[-0.03em]"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 300 }}
            >
              {stat.number}
            </p>
            <p className="text-[hsl(var(--charcoal))] opacity-60 text-sm tracking-[0.15em] uppercase mt-3 font-sans">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </ScrollSection>
  );
};

/* ─── Large Image + Text Section ─── */
const ImageTextSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section ref={ref} className="py-24 md:py-40 bg-[hsl(var(--off-white))]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <ScrollSection>
          <div className="overflow-hidden rounded-2xl aspect-[3/4] bg-[hsl(var(--sage))] relative">
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{ y: imageY }}
            >
              <div className="text-center text-[hsl(var(--sand))]">
                <Leaf className="w-24 h-24 mx-auto mb-4 opacity-40" />
                <p className="text-sm tracking-[0.3em] uppercase opacity-60">Photo atelier</p>
              </div>
            </motion.div>
          </div>
        </ScrollSection>

        <ScrollSection className="flex flex-col justify-center">
          <p className="text-[hsl(var(--sage))] text-sm tracking-[0.4em] uppercase mb-6 font-sans">
            Notre Approche
          </p>
          <h2
            className="text-[clamp(2rem,5vw,4rem)] leading-[1.1] text-[hsl(var(--charcoal))] tracking-[-0.02em] mb-8"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 400 }}
          >
            La nature comme <span className="italic text-[hsl(var(--sage-dark))]">terrain de jeu</span>
          </h2>
          <p className="text-[hsl(var(--charcoal))] opacity-60 text-lg leading-relaxed font-sans mb-10">
            Chaque atelier est une invitation à explorer le monde végétal avec curiosité et émerveillement.
            De la teinture naturelle au terrarium, nous créons des expériences immersives qui reconnectent
            petits et grands à la beauté du vivant.
          </p>
          <motion.div
            whileHover={{ x: 8 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-flex items-center gap-3 text-[hsl(var(--sage-dark))] font-sans text-sm tracking-[0.2em] uppercase cursor-pointer group"
          >
            Découvrir nos ateliers
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.div>
        </ScrollSection>
      </div>
    </section>
  );
};

/* ─── Workshop Showcase Grid ─── */
const WorkshopShowcase = () => {
  const workshops = [
    { title: "Kokedama", subtitle: "L'art japonais de la mousse", color: "var(--sage)" },
    { title: "Teinture Végétale", subtitle: "Couleurs de la nature", color: "var(--terracotta)" },
    { title: "Terrarium", subtitle: "Un monde sous verre", color: "var(--sage-dark)" },
    { title: "Tataki Zome", subtitle: "Impression végétale", color: "var(--earth)" },
  ];

  return (
    <section className="py-24 md:py-40 bg-[hsl(var(--charcoal))]">
      <ScrollSection className="max-w-7xl mx-auto px-6 mb-20">
        <p className="text-[hsl(var(--sage-light))] text-sm tracking-[0.4em] uppercase mb-6 font-sans">
          Nos Créations
        </p>
        <h2
          className="text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] text-[hsl(var(--sand))] tracking-[-0.03em]"
          style={{ fontFamily: "'Fraunces', serif", fontWeight: 300 }}
        >
          Ateliers<br />
          <span className="italic text-[hsl(var(--sage))]">Signatures</span>
        </h2>
      </ScrollSection>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">
        {workshops.map((ws, i) => (
          <motion.div
            key={ws.title}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group"
            style={{ backgroundColor: `hsl(${ws.color})` }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 z-20">
              <motion.p
                className="text-white/60 text-xs tracking-[0.3em] uppercase mb-2 font-sans"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                {ws.subtitle}
              </motion.p>
              <h3
                className="text-white text-3xl md:text-4xl tracking-[-0.02em]"
                style={{ fontFamily: "'Fraunces', serif", fontWeight: 400 }}
              >
                {ws.title}
              </h3>
            </div>

            {/* Arrow */}
            <div className="absolute top-6 right-6 z-20">
              <motion.div
                className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center"
                whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.8)" }}
              >
                <ArrowRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

/* ─── Big Quote ─── */
const BigQuote = () => (
  <ScrollSection className="py-32 md:py-48 bg-[hsl(var(--sand))] text-center px-6">
    <Sparkles className="w-8 h-8 mx-auto mb-10 text-[hsl(var(--sage))] opacity-50" />
    <blockquote
      className="text-[clamp(1.5rem,4vw,3.5rem)] leading-[1.2] text-[hsl(var(--charcoal))] max-w-5xl mx-auto tracking-[-0.02em]"
      style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontStyle: "italic" }}
    >
      « La nature ne se presse pas, et pourtant tout est accompli. »
    </blockquote>
    <p className="text-[hsl(var(--sage-dark))] text-sm tracking-[0.3em] uppercase mt-10 font-sans">
      Lao Tseu
    </p>
  </ScrollSection>
);

/* ─── CTA Section ─── */
const CTASection = () => (
  <section className="relative py-32 md:py-48 bg-[hsl(var(--sage-dark))] overflow-hidden">
    {/* Decorative circles */}
    <motion.div
      className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-[hsl(var(--sage-light))] opacity-10"
      animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
      transition={{ duration: 20, repeat: Infinity }}
    />
    <motion.div
      className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full border border-[hsl(var(--sage))] opacity-10"
      animate={{ scale: [1.1, 1, 1.1], rotate: [0, -90, 0] }}
      transition={{ duration: 25, repeat: Infinity }}
    />

    <ScrollSection className="relative z-10 text-center px-6">
      <p className="text-[hsl(var(--sage-light))] text-sm tracking-[0.4em] uppercase mb-8 font-sans">
        Prêt à créer ?
      </p>
      <h2
        className="text-[clamp(2rem,6vw,5rem)] leading-[1] text-[hsl(var(--sand))] tracking-[-0.03em] mb-10"
        style={{ fontFamily: "'Fraunces', serif", fontWeight: 300 }}
      >
        Réservez votre<br />
        <span className="italic">prochain atelier</span>
      </h2>
      <Link to="/workshops">
        <motion.button
          className="px-12 py-5 bg-[hsl(var(--sand))] text-[hsl(var(--sage-dark))] rounded-full text-sm tracking-[0.2em] uppercase font-sans font-medium"
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.3)" }}
          whileTap={{ scale: 0.98 }}
        >
          Voir les ateliers
        </motion.button>
      </Link>
    </ScrollSection>
  </section>
);

/* ─── Footer minimal ─── */
const MinimalFooter = () => (
  <footer className="py-12 bg-[hsl(var(--charcoal))] text-center">
    <Link to="/" className="inline-flex items-center gap-2 text-[hsl(var(--sand))] opacity-50 hover:opacity-100 transition-opacity font-sans text-sm tracking-[0.2em] uppercase">
      <ArrowRight className="w-4 h-4 rotate-180" />
      Retour au site principal
    </Link>
  </footer>
);

/* ─── Page ─── */
const DemoCreative = () => (
  <div className="overflow-x-hidden">
    <HeroSection />
    <MarqueeBand text="Kokedama — Terrarium — Teinture Végétale — Tataki Zome — Bombes de Graines" />
    <StatsBand />
    <ImageTextSection />
    <MarqueeBand text="Ateliers Botaniques — Île-de-France" reverse />
    <WorkshopShowcase />
    <BigQuote />
    <CTASection />
    <MinimalFooter />
  </div>
);

export default DemoCreative;
