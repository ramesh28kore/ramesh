'use client';

import { useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  amount?: number;
}

function getVariants(direction: Direction) {
  const d = 40;
  const offset: Record<Direction, { x: number; y: number }> = {
    up:    { x: 0,  y: d  },
    down:  { x: 0,  y: -d },
    left:  { x: d,  y: 0  },
    right: { x: -d, y: 0  },
    none:  { x: 0,  y: 0  },
  };
  const { x, y } = offset[direction];
  return {
    hidden:  { opacity: 0, x, y },
    visible: { opacity: 1, x: 0, y: 0 },
  };
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = 'up',
  amount = 0.15,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={getVariants(direction)}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
