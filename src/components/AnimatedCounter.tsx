import React from 'react';
import { useInView } from '@/hooks/useInView';
import { useCountUp } from '@/hooks/useCountUp';

interface AnimatedCounterProps {
  value: string;
  className?: string;
  style?: React.CSSProperties;
}

const AnimatedCounter = ({ value, className, style }: AnimatedCounterProps) => {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  
  // Extract numeric part and suffix (e.g., "50+" -> 50, "+")
  const numericMatch = value.match(/^(\d+)(.*)$/);
  const numericValue = numericMatch ? parseInt(numericMatch[1], 10) : 0;
  const suffix = numericMatch ? numericMatch[2] : value;
  
  const count = useCountUp({
    end: numericValue,
    duration: 2000,
    startOnView: true,
    isInView
  });

  // If it's a year (4 digits), don't animate
  const isYear = numericValue >= 1900 && numericValue <= 2100;

  return (
    <div ref={ref} className={className} style={style}>
      {isYear ? value : `${count}${suffix}`}
    </div>
  );
};

export default AnimatedCounter;
