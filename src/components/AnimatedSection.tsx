import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  variant?: 'fade' | 'slide' | 'reveal' | 'scale';
  once?: boolean;
}

const getVariants = (direction: string, variant: string): Variants => {
  const distance = 60;
  const directionMap: Record<string, { x?: number; y?: number }> = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  if (variant === 'reveal') {
    return {
      hidden: { 
        opacity: 0, 
        clipPath: 'inset(100% 0% 0% 0%)',
      },
      visible: { 
        opacity: 1, 
        clipPath: 'inset(0% 0% 0% 0%)',
      },
    };
  }

  if (variant === 'scale') {
    return {
      hidden: { opacity: 0, scale: 0.92, filter: 'blur(8px)' },
      visible: { opacity: 1, scale: 1, filter: 'blur(0px)' },
    };
  }

  const offset = directionMap[direction] || directionMap.up;

  return {
    hidden: { 
      opacity: 0, 
      ...offset,
      filter: 'blur(4px)',
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      filter: 'blur(0px)',
    },
  };
};

const AnimatedSection = ({ 
  children, 
  className, 
  delay = 0,
  direction = 'up',
  variant = 'slide',
  once = false,
}: AnimatedSectionProps) => {
  const variants = getVariants(direction, variant);

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      variants={variants}
      transition={{
        duration: 0.9,
        delay: delay / 1000,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
