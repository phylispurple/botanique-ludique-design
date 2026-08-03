import { useRef, useEffect, useState, useCallback } from "react";

interface PhotoCarouselImage {
  src: string;
  alt: string;
}

interface PhotoCarouselProps {
  images: PhotoCarouselImage[];
  speed?: number;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const PhotoCarousel = ({ images, speed = 0.8 }: PhotoCarouselProps) => {
  const [shuffled] = useState(() => shuffle(images));
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef(0);
  const velocityRef = useRef(speed);
  const isDraggingRef = useRef(false);
  const isPausedRef = useRef(false);
  const lastXRef = useRef(0);
  const dragVelocityRef = useRef(0);
  const rafRef = useRef<number>(0);
  const singleSetWidth = useRef(0);

  // We render 3 copies for seamless looping
  const tripled = [...shuffled, ...shuffled, ...shuffled];

  const measure = useCallback(() => {
    if (!containerRef.current) return;
    const children = containerRef.current.children;
    const count = shuffled.length;
    if (children.length === 0) return;
    // measure the width of one set
    let w = 0;
    for (let i = 0; i < count && i < children.length; i++) {
      w += (children[i] as HTMLElement).offsetWidth + 16; // gap-4 = 16px
    }
    singleSetWidth.current = w;
  }, [shuffled.length]);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  // Animation loop
  useEffect(() => {
    let lastTime = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(now - lastTime, 50);
      lastTime = now;

      if (!isDraggingRef.current) {
        if (!isPausedRef.current) {
          // Ease velocity back to default speed
          velocityRef.current += (speed - velocityRef.current) * 0.02;
        } else {
          // Ease to stop
          velocityRef.current *= 0.95;
        }
      } else {
        velocityRef.current = dragVelocityRef.current;
      }

      scrollRef.current += velocityRef.current * (dt / 16);

      // Wrap around
      const sw = singleSetWidth.current;
      if (sw > 0) {
        if (scrollRef.current >= sw * 2) {
          scrollRef.current -= sw;
        } else if (scrollRef.current < 0) {
          scrollRef.current += sw;
        }
      }

      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(${-scrollRef.current}px)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speed]);

  // Mouse drag
  const onMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    lastXRef.current = e.clientX;
    dragVelocityRef.current = 0;
    e.preventDefault();
  };

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!isDraggingRef.current) return;
    const dx = lastXRef.current - e.clientX;
    lastXRef.current = e.clientX;
    dragVelocityRef.current = dx;
    scrollRef.current += dx;
  }, []);

  const onMouseUp = useCallback(() => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    velocityRef.current = dragVelocityRef.current * 0.5;
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [onMouseMove, onMouseUp]);

  // Touch drag
  const onTouchStart = (e: React.TouchEvent) => {
    isDraggingRef.current = true;
    lastXRef.current = e.touches[0].clientX;
    dragVelocityRef.current = 0;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current) return;
    const dx = lastXRef.current - e.touches[0].clientX;
    lastXRef.current = e.touches[0].clientX;
    dragVelocityRef.current = dx;
    scrollRef.current += dx;
  };

  const onTouchEnd = () => {
    isDraggingRef.current = false;
    velocityRef.current = dragVelocityRef.current * 0.5;
  };

  // Wheel
  const onWheel = (e: React.WheelEvent) => {
    scrollRef.current += e.deltaX || e.deltaY;
    e.preventDefault();
  };

  return (
    <div
      className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
      onMouseEnter={() => { isPausedRef.current = true; }}
      onMouseLeave={() => { isPausedRef.current = false; }}
      onWheel={onWheel}
    >
      <div
        ref={containerRef}
        className="flex gap-4 will-change-transform"
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ width: "max-content" }}
      >
        {tripled.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[300px] md:w-[380px] aspect-square overflow-hidden border-brutal group/photo relative"
          >
            <img
              src={img.src}
              alt={i < shuffled.length ? img.alt : ""}
              className="w-full h-full object-cover pointer-events-none transition-transform duration-500 group-hover/photo:scale-105"
              loading="lazy"
              draggable={false}
              aria-hidden={i >= shuffled.length ? true : undefined}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--black))]/40 via-transparent to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;
