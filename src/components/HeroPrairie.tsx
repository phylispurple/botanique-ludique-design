import { useEffect, useRef } from "react";

/**
 * Fond du haut de l'accueil : prairie de marguerites (image fixe) avec
 * - le haut du ciel qui glisse très lentement (nuages qui dérivent),
 * - une abeille qui passe de fleur en fleur,
 * Animations en CSS (voir index.css, « Prairie de l'accueil »), coupées si
 * l'appareil demande de réduire les animations.
 */
const IMAGE = "/images/hero-marguerites.webp";

const Abeille = () => (
  <svg viewBox="0 0 44 32" className="w-full h-full" aria-hidden="true">
    {/* ailes */}
    <g className="prairie-ailes-abeille">
      <ellipse cx="17" cy="9" rx="7" ry="9" fill="hsl(36 40% 96% / 0.75)" stroke="#2b2724" strokeWidth="1.3" transform="rotate(-25 17 9)" />
      <ellipse cx="25" cy="8" rx="6" ry="8" fill="hsl(36 40% 96% / 0.65)" stroke="#2b2724" strokeWidth="1.3" transform="rotate(20 25 8)" />
    </g>
    {/* corps */}
    <ellipse cx="20" cy="20" rx="11" ry="7.5" fill="#f2b440" stroke="#2b2724" strokeWidth="1.5" />
    <path d="M15 13.5 C13 17 13 23 15 26.5 M21 12.6 C19 17 19 23 21 27.4" stroke="#2b2724" strokeWidth="3" fill="none" />
    <path d="M9 20 L5.5 21" stroke="#2b2724" strokeWidth="1.5" strokeLinecap="round" />
    {/* tête */}
    <circle cx="32.5" cy="18.5" r="5" fill="#2b2724" />
    <path d="M34 14 C35 10 37 9 39 9 M32 13.8 C32 10 33 8 34.5 7" stroke="#2b2724" strokeWidth="1.2" fill="none" strokeLinecap="round" />
  </svg>
);

const HeroPrairie = () => (
  <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
    {/* image fixe */}
    <img src={IMAGE} alt="" className="absolute inset-0 w-full h-full object-cover object-bottom" />
    {/* même image, haut du ciel seulement, qui glisse lentement */}
    <div
      className="prairie-ciel absolute inset-0"
      style={{
        backgroundImage: `url(${IMAGE})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        WebkitMaskImage: "linear-gradient(to bottom, #000 0%, #000 18%, transparent 34%)",
        maskImage: "linear-gradient(to bottom, #000 0%, #000 18%, transparent 34%)",
      }}
    />
  </div>
);

/** Abeille, à poser au-dessus du voile sombre (restent bien visibles). */
export const PrairieAnimaux = () => (
  <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none" aria-hidden="true">
    {/* abeille */}
    <div className="prairie-abeille absolute w-12 h-9 md:w-16 md:h-12">
      <div className="prairie-abeille-bob w-full h-full">
        <Abeille />
      </div>
    </div>
  </div>
);

/** Coccinelle vue de dessus, tournée vers la droite (ailes visibles seulement en vol). */
const Coccinelle = () => (
  <svg viewBox="-4 -6 42 38" className="w-full h-full overflow-visible" aria-hidden="true">
    <g className="cocc-ailes" style={{ opacity: 0 }}>
      <ellipse cx="12" cy="1" rx="10" ry="5" fill="hsl(36 40% 96% / 0.7)" stroke="#1f1b1a" strokeWidth="1" transform="rotate(-18 12 1)" />
      <ellipse cx="12" cy="25" rx="10" ry="5" fill="hsl(36 40% 96% / 0.7)" stroke="#1f1b1a" strokeWidth="1" transform="rotate(18 12 25)" />
    </g>
    <g stroke="#1f1b1a" strokeWidth="1.4" strokeLinecap="round" className="insecte-pattes-a">
      <path d="M11 6 L8 2 M17 5 L17 1 M23 6 L26 2" />
    </g>
    <g stroke="#1f1b1a" strokeWidth="1.4" strokeLinecap="round" className="insecte-pattes-b">
      <path d="M11 20 L8 24 M17 21 L17 25 M23 20 L26 24" />
    </g>
    <circle cx="27.5" cy="13" r="4.2" fill="#1f1b1a" />
    <circle cx="29" cy="11.2" r="1" fill="#f4ede0" />
    <circle cx="29" cy="14.8" r="1" fill="#f4ede0" />
    <ellipse cx="16" cy="13" rx="10.5" ry="9" fill="#d8402f" stroke="#1f1b1a" strokeWidth="1.4" />
    <path d="M5.5 13 L26.5 13" stroke="#1f1b1a" strokeWidth="1.3" />
    <circle cx="12" cy="8.5" r="1.9" fill="#1f1b1a" />
    <circle cx="19.5" cy="8" r="1.6" fill="#1f1b1a" />
    <circle cx="12" cy="17.5" r="1.9" fill="#1f1b1a" />
    <circle cx="19.5" cy="18" r="1.6" fill="#1f1b1a" />
    <circle cx="8" cy="13" r="1.3" fill="#1f1b1a" />
  </svg>
);

type Pt = { x: number; y: number };

/** Rectangle (relatif au titre) du caractère n° `index` du n-ième nœud texte. */
function charRect(root: HTMLElement, nodeIndex: number, index: number) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) => (n.textContent?.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT),
  });
  let node: Node | null = walker.nextNode();
  for (let i = 0; i < nodeIndex && node; i++) node = walker.nextNode();
  if (!node) return null;
  const text = node.textContent ?? "";
  const start = text.length - text.trimStart().length + index;
  const range = document.createRange();
  range.setStart(node, start);
  range.setEnd(node, start + 1);
  const r = range.getBoundingClientRect();
  const o = root.getBoundingClientRect();
  return { x: r.left - o.left, y: r.top - o.top, w: r.width, h: r.height };
}

/**
 * Coccinelle du titre : fait le tour du « O » de Botanique, puis s'envole
 * vers le « Q », le « L » puis le « I » de Ludique, en s'orientant toujours
 * dans le sens de sa marche (jamais de demi-tour sur place), et repart.
 * Positions calculées sur les vraies lettres (s'adapte à toutes les tailles d'écran).
 */
export const CoccinelleTitre = () => {
  const bugRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const bug = bugRef.current;
    const h1 = bug?.parentElement;
    if (!bug || !h1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      bug.style.display = "none";
      return;
    }
    let anims: Animation[] = [];

    const build = () => {
      anims.forEach((a) => a.cancel());
      const fs = parseFloat(getComputedStyle(h1).fontSize);
      const O = charRect(h1, 0, 1); // B-O
      const Q = charRect(h1, 0, 6); // B-O-T-A-N-I-Q
      const L = charRect(h1, 1, 0); // L
      const I = charRect(h1, 1, 3); // L-U-D-I
      if (!O || !Q || !L || !I) return;
      // Contour réel des lettres : on mesure l'encre de chaque glyphe avec la police du titre.
      const cs = getComputedStyle(h1);
      const ctx = document.createElement("canvas").getContext("2d");
      if (!ctx) return;
      ctx.font = `${cs.fontWeight} ${fs}px ${cs.fontFamily}`;
      const ink = (ch: string, r: { x: number; y: number }) => {
        const m = ctx.measureText(ch);
        const baseline = r.y + m.fontBoundingBoxAscent;
        return {
          left: r.x - m.actualBoundingBoxLeft,
          right: r.x + m.actualBoundingBoxRight,
          top: baseline - m.actualBoundingBoxAscent,
          bottom: baseline + m.actualBoundingBoxDescent,
        };
      };
      const top = (ch: string, r: { x: number; y: number }): Pt => {
        const g = ink(ch, r);
        return { x: (g.left + g.right) / 2, y: g.top + 0.01 * fs };
      };

      // tour du O : ellipse sur le trait de la lettre, sens horaire depuis le haut
      const go = ink("O", O);
      const oc = { x: (go.left + go.right) / 2, y: (go.top + go.bottom) / 2 };
      const rx = (go.right - go.left) / 2 - 0.05 * fs;
      const ry = (go.bottom - go.top) / 2 - 0.05 * fs;
      type K = { p: Pt; t: number; fly?: boolean };
      const keys: K[] = [];
      const steps = 24;
      for (let i = 0; i <= steps; i++) {
        const a = -Math.PI / 2 + (i / steps) * Math.PI * 2;
        keys.push({ p: { x: oc.x + rx * Math.cos(a), y: oc.y + ry * Math.sin(a) }, t: 9000 / steps });
      }
      keys[0].t = 0;
      const pause = (ms: number) => keys.push({ p: keys[keys.length - 1].p, t: ms });
      const fly = (p: Pt, ms: number) => keys.push({ p, t: ms, fly: true });
      pause(1200);
      fly(top("Q", Q), 1600); pause(2600);
      fly(top("L", L), 1700); pause(2600);
      fly(top("I", I), 1200); pause(2600);
      // s'envole hors de l'écran (en haut à droite), revient par le haut à gauche
      const hr = h1.getBoundingClientRect();
      const away = { x: window.innerWidth - hr.left + 80, y: -hr.top - 80 };
      const enter = { x: -hr.left - 80, y: -hr.top - 80 };
      fly(away, 2600);
      keys.push({ p: enter, t: 1, fly: true });
      fly(keys[0].p, 2600);
      const offscreen = new Set([keys.length - 3, keys.length - 2]);

      const total = keys.reduce((s, k) => s + k.t, 0);
      // cap (angle) dans le sens du déplacement, sans saut
      let angle = 0;
      let elapsed = 0;
      const frames: Keyframe[] = [];
      const wings: Keyframe[] = [];
      keys.forEach((k, i) => {
        elapsed += k.t;
        const next = keys[i + 1];
        const prev = keys[i - 1];
        // au point de réapparition (invisible), on s'oriente déjà vers la suite
        const isEnter = i === keys.length - 2;
        const from = isEnter ? k.p : prev ? prev.p : k.p;
        const to = isEnter && next ? next.p : k.p;
        const dx = to.x - from.x;
        const dy = to.y - from.y;
        if (Math.hypot(dx, dy) > 0.5) {
          let target = (Math.atan2(dy, dx) * 180) / Math.PI;
          while (target - angle > 180) target -= 360;
          while (target - angle < -180) target += 360;
          angle = target;
        }
        const hidden = offscreen.has(i);
        const offset = elapsed / total;
        frames.push({
          offset,
          transform: `translate(${k.p.x}px, ${k.p.y}px) translate(-50%, -50%) rotate(${angle}deg)`,
          opacity: hidden ? 0 : 1,
        });
        // ailes ouvertes pendant tout le vol, repliées dès l'atterrissage
        wings.push({ offset, opacity: next?.fly ? 1 : 0, easing: "steps(1, end)" });
      });
      // se poser en douceur : cap remis droit au premier pas du tour
      frames[0].transform = `translate(${keys[0].p.x}px, ${keys[0].p.y}px) translate(-50%, -50%) rotate(0deg)`;
      frames[frames.length - 1].transform = frames[0].transform;
      const opts: KeyframeAnimationOptions = { duration: total, iterations: Infinity, easing: "linear" };
      const w = bug.querySelector(".cocc-ailes");
      anims = [bug.animate(frames, opts)];
      if (w) anims.push((w as SVGGElement).animate(wings, opts));
    };

    document.fonts?.ready.then(build);
    build();
    const ro = new ResizeObserver(build);
    ro.observe(h1);
    return () => {
      ro.disconnect();
      anims.forEach((a) => a.cancel());
    };
  }, []);

  return (
    <span
      ref={bugRef}
      className="absolute left-0 top-0 block w-6 h-5 md:w-9 md:h-7 pointer-events-none"
      aria-hidden="true"
    >
      <Coccinelle />
    </span>
  );
};

export default HeroPrairie;
