import { useEffect, useRef, useCallback } from 'react';

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const dotPos = useRef({ x: -100, y: -100 });
  const isHovering = useRef(false);

  const updateCursorStyle = useCallback((hovering: boolean) => {
    isHovering.current = hovering;
    if (dotRef.current) {
      dotRef.current.style.width = hovering ? '4px' : '8px';
      dotRef.current.style.height = hovering ? '4px' : '8px';
      dotRef.current.style.background = hovering ? 'hsl(287, 33%, 36%)' : 'hsl(0, 0%, 10%)';
    }
    if (ringRef.current) {
      ringRef.current.style.width = hovering ? '60px' : '40px';
      ringRef.current.style.height = hovering ? '60px' : '40px';
      ringRef.current.style.borderColor = hovering ? 'hsl(287, 33%, 36%)' : 'hsl(0, 0%, 10%)';
      ringRef.current.style.background = hovering ? 'hsla(287, 33%, 36%, 0.1)' : 'transparent';
    }
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1301px) and (pointer: fine)');
    if (!mq.matches) return;

    const style = document.createElement('style');
    style.id = 'custom-cursor-style';
    style.textContent = `
      @media (min-width: 1301px) and (pointer: fine) {
        * { cursor: none !important; }
        a, button, [role="button"], label, select { cursor: none !important; }
        input[type="text"], input[type="email"], textarea { cursor: none !important; }
      }
    `;
    document.head.appendChild(style);

    if (dotRef.current) dotRef.current.style.opacity = '1';
    if (ringRef.current) ringRef.current.style.opacity = '1';

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      // Ring follows mouse instantly
      if (ringRef.current) {
        ringRef.current.style.left = `${e.clientX}px`;
        ringRef.current.style.top = `${e.clientY}px`;
      }
    };

    // Dot lags behind inside the ring
    let rafId: number;
    const animateDot = () => {
      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.15;
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.15;
      if (dotRef.current) {
        dotRef.current.style.left = `${dotPos.current.x}px`;
        dotRef.current.style.top = `${dotPos.current.y}px`;
      }
      rafId = requestAnimationFrame(animateDot);
    };
    rafId = requestAnimationFrame(animateDot);

    document.addEventListener('mousemove', onMouseMove);

    const onOver = () => updateCursorStyle(true);
    const onOut = () => updateCursorStyle(false);

    const selector = 'a, button, [role="button"], input, select, textarea, .card-brutal, .btn-brutal';

    const addHoverListeners = () => {
      document.querySelectorAll(selector).forEach(el => {
        el.addEventListener('mouseenter', onOver);
        el.addEventListener('mouseleave', onOut);
      });
    };

    addHoverListeners();
    const observer = new MutationObserver(() => addHoverListeners());
    observer.observe(document.body, { childList: true, subtree: true });

    const onLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };
    const onEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '1';
    };
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      cancelAnimationFrame(rafId);
      observer.disconnect();
      const el = document.getElementById('custom-cursor-style');
      if (el) el.remove();
    };
  }, [updateCursorStyle]);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[99999] rounded-full"
        style={{
          width: 8,
          height: 8,
          background: 'hsl(0, 0%, 10%)',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.15s, height 0.15s, background 0.15s, opacity 0.2s',
          opacity: 0,
          left: -100,
          top: -100,
        }}
      />
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[99998] rounded-full"
        style={{
          width: 40,
          height: 40,
          border: '2px solid hsl(0, 0%, 10%)',
          background: 'transparent',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.25s ease-out, height 0.25s ease-out, border-color 0.25s, background 0.2s, opacity 0.2s',
          opacity: 0,
          left: -100,
          top: -100,
        }}
      />
    </>
  );
};

export default CustomCursor;
