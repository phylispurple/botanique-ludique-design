import { useEffect, useRef, useState } from "react";

/**
 * Trait irrégulier, comme tracé au feutre, qui se dessine sous un titre
 * quand il arrive à l'écran (une seule fois).
 */
const TRACES = [
  "M3 9 C 40 4, 80 12, 120 7 S 200 4, 237 8",
  "M3 7 C 50 12, 95 3, 140 8 S 210 11, 237 6",
  "M3 8 C 35 3, 90 11, 130 6 C 170 2, 205 10, 237 7",
];

interface Props {
  className?: string;
  /** Couleur du trait (par défaut : vert olive). */
  color?: string;
  /** Variante de tracé (0, 1 ou 2) pour ne pas avoir partout le même. */
  variant?: number;
}

const TraitDessine = ({ className = "", color = "hsl(var(--olive))", variant = 0 }: Props) => {
  const ref = useRef<SVGSVGElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDrawn(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 240 16"
      preserveAspectRatio="none"
      className={`block h-3 md:h-4 w-40 md:w-56 overflow-visible ${className}`}
      aria-hidden="true"
    >
      <path
        d={TRACES[variant % TRACES.length]}
        pathLength={1}
        fill="none"
        stroke={color}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeDasharray="1"
        style={{
          strokeDashoffset: drawn ? 0 : 1,
          transition: "stroke-dashoffset 1.1s cubic-bezier(.6,.1,.3,1) .15s",
        }}
      />
    </svg>
  );
};

export default TraitDessine;
