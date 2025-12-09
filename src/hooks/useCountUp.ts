import { useEffect, useState } from 'react';

interface UseCountUpOptions {
  start?: number;
  end: number;
  duration?: number;
  startOnView?: boolean;
  isInView?: boolean;
}

export const useCountUp = ({
  start = 0,
  end,
  duration = 2000,
  startOnView = true,
  isInView = false
}: UseCountUpOptions) => {
  const [count, setCount] = useState(startOnView ? start : end);

  useEffect(() => {
    if (startOnView && !isInView) {
      setCount(start);
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(start + (end - start) * easeOutQuart);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [start, end, duration, startOnView, isInView]);

  return count;
};
