"use client";

import React from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from 'framer-motion';
import { cn } from '@/lib/utils';

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Maximum rotation in degrees on each axis. */
  intensity?: number;
  /** Z-distance the card lifts on hover. */
  lift?: number;
  /** Optional gloss highlight that follows the cursor. */
  gloss?: boolean;
  children: React.ReactNode;
}

/*
 * Mouse-tracked 3D tilt wrapper.
 * Uses Framer Motion springs so motion stays buttery even when the cursor
 * jitters. Disables tilt entirely under prefers-reduced-motion.
 */
export const TiltCard: React.FC<TiltCardProps> = ({
  intensity = 8,
  lift = 16,
  gloss = true,
  className,
  children,
  ...rest
}) => {
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), {
    stiffness: 220,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), {
    stiffness: 220,
    damping: 22,
  });
  const z = useSpring(0, { stiffness: 220, damping: 22 });

  // Cursor-following gloss position (in %)
  const glossX = useTransform(x, [-0.5, 0.5], [25, 75]);
  const glossY = useTransform(y, [-0.5, 0.5], [25, 75]);
  const glossBackground = useMotionTemplate`radial-gradient(circle at ${glossX}% ${glossY}%, rgba(255,255,255,0.32), transparent 55%)`;

  if (prefersReducedMotion) {
    return (
      <div className={cn(className)} {...rest}>
        {children}
      </div>
    );
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseEnter = () => z.set(lift);
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    z.set(0);
  };

  return (
    <motion.div
      className={cn('tilt-stage', className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...(rest as React.ComponentProps<typeof motion.div>)}
    >
      <motion.div
        className="relative h-full w-full will-change-transform"
        style={{
          rotateX,
          rotateY,
          z,
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
        {gloss && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 mix-blend-overlay"
            style={{ background: glossBackground }}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

export default TiltCard;
