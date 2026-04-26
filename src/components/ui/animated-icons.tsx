"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  OfferIcon as CleanOfferIcon,
  FunnelIcon as CleanFunnelIcon,
  AutomationIcon as CleanAutomationIcon,
  AdsIcon as CleanAdsIcon,
  AnalyticsIcon as CleanAnalyticsIcon,
} from './system-layer-icons';

/*
 * This file used to host inline Lottie data and a set of buggy SVG-attribute
 * animations. Both have been retired in favour of `system-layer-icons.tsx`,
 * which uses transform-only Framer Motion animations that work reliably
 * across browsers and the Next.js RSC boundary.
 *
 * What remains here:
 *   - AnimatedHeroIcons: the 5-icon row used in the home page Bricks section
 *   - RocketAnimation:   used in the home Bricks "What You Need" card
 *   - SuccessAnimation:  used in the home Bricks success accent
 */

interface AnimatedIconProps {
  className?: string;
  size?: number;
  loop?: boolean;
  autoplay?: boolean;
}

const INK = '#111110';
const ACCENT = '#cf5230';

// ─────────────────────────────────────────────────────────────────────
// Hero icons row — used in Index Bricks ≠ House section
// ─────────────────────────────────────────────────────────────────────
export const AnimatedHeroIcons: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn('flex justify-center items-center gap-6 md:gap-10 flex-wrap py-4', className)}>
    {[
      { Anim: CleanOfferIcon,      label: 'Offer' },
      { Anim: CleanFunnelIcon,     label: 'Funnel' },
      { Anim: CleanAutomationIcon, label: 'Automation' },
      { Anim: CleanAdsIcon,        label: 'Ads' },
      { Anim: CleanAnalyticsIcon,  label: 'Results' },
    ].map(({ Anim, label }) => (
      <motion.div
        key={label}
        whileHover={{ scale: 1.1, y: -6 }}
        whileTap={{ scale: 0.96 }}
        className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white border border-neutral-200 hover:border-[#cf5230]/40 transition-all cursor-pointer shadow-sm"
      >
        <Anim size={64} />
        <span className="text-xs font-black uppercase tracking-wider text-neutral-700">{label}</span>
      </motion.div>
    ))}
  </div>
);

// ─────────────────────────────────────────────────────────────────────
// Rocket animation — bobbing rocket with thrust flame
// ─────────────────────────────────────────────────────────────────────
export const RocketAnimation: React.FC<AnimatedIconProps> = ({ size = 80, className }) => (
  <motion.div
    className={cn('relative flex items-center justify-center', className)}
    style={{ width: size, height: size }}
  >
    <svg width="100%" height="100%" viewBox="0 0 100 100" overflow="visible">
      <motion.g
        animate={{ y: [-2, 2, -2], x: [-1, 1, -1] }}
        transition={{ repeat: Infinity, duration: 0.4, ease: 'linear' }}
      >
        <path
          d="M 50 15 C 70 30 70 60 50 75 C 30 60 30 30 50 15 Z"
          stroke={INK}
          strokeWidth="4"
          fill="none"
          strokeLinejoin="round"
        />
        <path
          d="M 35 60 L 20 75 L 35 75 Z"
          stroke={ACCENT}
          strokeWidth="4"
          fill="none"
          strokeLinejoin="round"
        />
        <path
          d="M 65 60 L 80 75 L 65 75 Z"
          stroke={ACCENT}
          strokeWidth="4"
          fill="none"
          strokeLinejoin="round"
        />
        <circle cx="50" cy="40" r="7" stroke={INK} strokeWidth="4" fill={INK} opacity={0.1} />
        <motion.path
          d="M 40 75 L 50 95 L 60 75 Z"
          fill={ACCENT}
          animate={{ scaleY: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
          style={{ transformOrigin: '50px 75px' }}
          transition={{ repeat: Infinity, duration: 0.3, ease: 'easeInOut' }}
        />
      </motion.g>
    </svg>
  </motion.div>
);

// ─────────────────────────────────────────────────────────────────────
// Success animation — circle draws, checkmark snaps in
// ─────────────────────────────────────────────────────────────────────
export const SuccessAnimation: React.FC<AnimatedIconProps> = ({ size = 80, className }) => (
  <motion.div
    className={cn('relative flex items-center justify-center', className)}
    style={{ width: size, height: size }}
  >
    <svg width="100%" height="100%" viewBox="0 0 100 100" overflow="visible">
      <motion.circle
        cx="50"
        cy="50"
        r="40"
        stroke={ACCENT}
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1, 1], opacity: [1, 1, 1, 0] }}
        transition={{ repeat: Infinity, duration: 3, times: [0, 0.4, 0.8, 1], ease: 'easeInOut' }}
      />
      <motion.path
        d="M 30 52 L 45 67 L 72 38"
        stroke={INK}
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{
          pathLength: [0, 0, 1, 1],
          opacity: [0, 0, 1, 1, 0],
        }}
        transition={{ repeat: Infinity, duration: 3, times: [0, 0.35, 0.5, 0.8, 1], ease: 'easeOut' }}
      />
    </svg>
  </motion.div>
);
