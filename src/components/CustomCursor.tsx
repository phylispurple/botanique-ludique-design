import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Only on desktop
    if (window.innerWidth <= 1300) return;
    if ('ontouchstart' in window) return;

    setIsVisible(true);
    document.body.style.cursor = 'none';

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    let rafId: number;
    const animateRing = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }
      rafId = requestAnimationFrame(animateRing);
    };
    rafId = requestAnimationFrame(animateRing);

    document.addEventListener('mousemove', onMouseMove);

    const onOver = () => setIsHovering(true);
    const onOut = () => setIsHovering(false);

    const addHoverListeners = () => {
      const targets = document.querySelectorAll('a, button, [role="button"], input, select, textarea, .card-brutal');
      targets.forEach(el => {
        el.addEventListener('mouseenter', onOver);
        el.addEventListener('mouseleave', onOut);
      });
      return targets;
    };

    const targets = addHoverListeners();
    const observer = new MutationObserver(() => addHoverListeners());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
      observer.disconnect();
      targets.forEach(el => {
        el.removeEventListener('mouseenter', onOver);
        el.removeEventListener('mouseleave', onOut);
      });
      document.body.style.cursor = '';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: isHovering ? 4 : 8,
          height: isHovering ? 4 : 8,
          background: isHovering ? 'hsl(var(--purple))' : 'hsl(var(--black))',
          transition: 'width 0.15s, height 0.15s, background 0.15s',
        }}
      />
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[99998] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
          border: `2px solid ${isHovering ? 'hsl(var(--purple))' : 'hsl(var(--black))'}`,
          background: isHovering ? 'hsla(287, 33%, 36%, 0.1)' : 'transparent',
          transition: 'width 0.25s ease-out, height 0.25s ease-out, border-color 0.25s, background 0.2s',
        }}
      />
    </>
  );
};

export default CustomCursor;
