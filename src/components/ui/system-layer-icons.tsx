"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

/*
 * Five system-layer icons rebuilt as pure SVG + Framer Motion.
 *
 * The previous inline Lottie data and the lottie-react player were the source
 * of the "broken animation" reports — the data had a couple of malformed
 * shape definitions and the player doesn't initialise reliably across
 * Next.js's RSC boundary. These are deterministic, scale crisply, and
 * cost a fraction of the bundle.
 *
 * Each icon:
 *  - autoplays an entry sequence on mount
 *  - loops a subtle ambient motion afterwards
 *  - replays its entry on hover (via `whileHover` on the wrapper)
 *  - uses the brand rust-orange exclusively
 */

const ACCENT = '#cf5230';
const ACCENT_SOFT = 'rgba(207, 82, 48, 0.15)';
const INK = '#111110';

interface IconProps {
  size?: number;
  className?: string;
  /** Accepted for backward compatibility with the previous Lottie-based icons. Ignored — these animations always loop. */
  loop?: boolean;
  /** Accepted for backward compatibility. Ignored — these animations always autoplay on mount. */
  autoplay?: boolean;
}

const stage = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 100 100' as const,
  xmlns: 'http://www.w3.org/2000/svg',
});

const Wrapper: React.FC<{
  size: number;
  className?: string;
  children: React.ReactNode;
}> = ({ size, className, children }) => (
  <motion.div
    className={cn('flex items-center justify-center', className)}
    style={{ width: size, height: size }}
    whileHover={{ scale: 1.08 }}
    transition={{ type: 'spring', stiffness: 300, damping: 18 }}
  >
    {children}
  </motion.div>
);

/* ---------------------------------------------------------------- */
/* 01 — Offer Creation: concentric rings draw in, arrow lands centre */
/* ---------------------------------------------------------------- */
export const OfferIcon: React.FC<IconProps> = ({ size = 64, className }) => {
  return (
    <Wrapper size={size} className={className}>
      <svg {...stage(size)}>
        <motion.circle
          cx="50"
          cy="50"
          r="38"
          stroke={ACCENT}
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        />
        <motion.circle
          cx="50"
          cy="50"
          r="24"
          stroke={ACCENT}
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.18 }}
        />
        <motion.circle
          cx="50"
          cy="50"
          r="11"
          fill={ACCENT}
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.15, 1] }}
          transition={{ duration: 0.5, delay: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ transformOrigin: '50px 50px' }}
        />
        {/* Arrow streaks in from upper-left and lands on the bullseye */}
        <motion.line
          x1="20"
          y1="20"
          x2="50"
          y2="50"
          stroke={INK}
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 0.4], opacity: [0, 1, 0] }}
          transition={{ duration: 1.2, delay: 0.9, repeat: Infinity, repeatDelay: 1.8 }}
        />
      </svg>
    </Wrapper>
  );
};

/* ---------------------------------------------------------------- */
/* 02 — Funnel + VSL: dots stream into a funnel, one warm lead drops */
/* ---------------------------------------------------------------- */
export const FunnelIcon: React.FC<IconProps> = ({ size = 64, className }) => {
  const dots = [18, 38, 58, 78];
  return (
    <Wrapper size={size} className={className}>
      <svg {...stage(size)}>
        {/* Funnel shape */}
        <motion.path
          d="M14 22 H86 L62 56 V82 L42 82 V56 Z"
          fill="none"
          stroke={ACCENT}
          strokeWidth="3"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />
        {/* Top inflow dots */}
        {dots.map((cx, i) => (
          <motion.circle
            key={cx}
            cx={cx}
            cy="14"
            r="3"
            fill={ACCENT}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: [-10, 0, 6], opacity: [0, 1, 0] }}
            transition={{
              duration: 1.4,
              delay: 0.6 + i * 0.18,
              repeat: Infinity,
              repeatDelay: 0.8,
              ease: 'easeIn',
            }}
          />
        ))}
        {/* Qualified lead drops out the bottom */}
        <motion.circle
          cx="52"
          cy="82"
          r="4"
          fill={INK}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [0, 10], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.6, delay: 1.6, repeat: Infinity, repeatDelay: 0.6 }}
        />
      </svg>
    </Wrapper>
  );
};

/* ---------------------------------------------------------------- */
/* 03 — GHL + Automation: lightning bolt strikes with pulsing glow   */
/* ---------------------------------------------------------------- */
export const AutomationIcon: React.FC<IconProps> = ({ size = 64, className }) => {
  return (
    <Wrapper size={size} className={className}>
      <svg {...stage(size)}>
        {/* Soft glow */}
        <motion.circle
          cx="50"
          cy="50"
          r="34"
          fill={ACCENT}
          opacity="0.15"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: [0.6, 1.05, 0.85], opacity: [0, 0.35, 0.15] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '50px 50px' }}
        />
        {/* Bolt */}
        <motion.path
          d="M55 14 L32 52 L46 52 L42 86 L70 44 L54 44 Z"
          fill={ACCENT}
          stroke={INK}
          strokeWidth="2"
          strokeLinejoin="round"
          initial={{ pathLength: 0, fillOpacity: 0 }}
          animate={{ pathLength: [0, 1, 1], fillOpacity: [0, 0, 1] }}
          transition={{ duration: 0.9, ease: 'easeOut', times: [0, 0.6, 1] }}
        />
        {/* Pulse ring on strike */}
        <motion.circle
          cx="50"
          cy="50"
          r="24"
          stroke={ACCENT}
          strokeWidth="2"
          fill="none"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: [0.9, 1.6], opacity: [0.6, 0] }}
          transition={{ duration: 1.2, delay: 1.0, repeat: Infinity, repeatDelay: 0.8 }}
          style={{ transformOrigin: '50px 50px' }}
        />
      </svg>
    </Wrapper>
  );
};

/* ---------------------------------------------------------------- */
/* 04 — Meta Campaigns: megaphone shouts three sound-waves           */
/* ---------------------------------------------------------------- */
export const AdsIcon: React.FC<IconProps> = ({ size = 64, className }) => {
  return (
    <Wrapper size={size} className={className}>
      <svg {...stage(size)}>
        {/* Megaphone body */}
        <motion.path
          d="M14 38 L48 22 L48 78 L14 62 Z"
          fill={ACCENT}
          stroke={INK}
          strokeWidth="2"
          strokeLinejoin="round"
          initial={{ x: -8, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        {/* Handle */}
        <motion.rect
          x="48"
          y="46"
          width="6"
          height="8"
          fill={INK}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          style={{ transformOrigin: '48px 50px' }}
        />
        {/* Sound waves — staggered pulses */}
        {[
          { d: 'M62 46 Q70 50 62 54', delay: 0.6 },
          { d: 'M70 40 Q82 50 70 60', delay: 0.8 },
          { d: 'M78 32 Q94 50 78 68', delay: 1.0 },
        ].map((wave, i) => (
          <motion.path
            key={i}
            d={wave.d}
            stroke={ACCENT}
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: [0, 1, 0], x: [0, 4, 8] }}
            transition={{
              duration: 1.4,
              delay: wave.delay,
              repeat: Infinity,
              repeatDelay: 0.6,
              ease: 'easeOut',
            }}
          />
        ))}
      </svg>
    </Wrapper>
  );
};

/* ---------------------------------------------------------------- */
/* 05 — Conversion Loop: bars climb, trend arrow draws to the top    */
/* ---------------------------------------------------------------- */
export const AnalyticsIcon: React.FC<IconProps> = ({ size = 64, className }) => {
  const bars = [
    { x: 18, h: 24, delay: 0.1 },
    { x: 36, h: 38, delay: 0.22 },
    { x: 54, h: 52, delay: 0.34 },
    { x: 72, h: 66, delay: 0.46 },
  ];
  return (
    <Wrapper size={size} className={className}>
      <svg {...stage(size)}>
        {/* Baseline */}
        <line x1="12" y1="84" x2="88" y2="84" stroke={INK} strokeWidth="2" />
        {/* Growing bars */}
        {bars.map((b) => (
          <motion.rect
            key={b.x}
            x={b.x}
            y={84 - b.h}
            width="10"
            height={b.h}
            rx="2"
            fill={ACCENT}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.6, delay: b.delay, ease: [0.34, 1.56, 0.64, 1] }}
            style={{ transformOrigin: `${b.x + 5}px 84px` }}
          />
        ))}
        {/* Trend arrow */}
        <motion.path
          d="M16 70 L40 56 L60 48 L82 30"
          stroke={INK}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.0, delay: 0.7, ease: 'easeOut' }}
        />
        <motion.path
          d="M82 30 L74 28 M82 30 L80 38"
          stroke={INK}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 1.65 }}
        />
        {/* Pulse dot at the apex */}
        <motion.circle
          cx="82"
          cy="30"
          r="4"
          fill={ACCENT}
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.4, 1, 1.4, 1] }}
          transition={{ duration: 1.6, delay: 1.7, repeat: Infinity, repeatDelay: 0.8 }}
          style={{ transformOrigin: '82px 30px' }}
        />
      </svg>
    </Wrapper>
  );
};

/* ---------------------------------------------------------------- */
/* Pulsing dot — used by sticky tab as active indicator              */
/* ---------------------------------------------------------------- */
export const PulsingDot: React.FC<{ className?: string; color?: string }> = ({
  className,
  color = 'bg-[#cf5230]',
}) => (
  <span className={cn('relative flex h-3 w-3', className)}>
    <span className={cn('animate-ping absolute inline-flex h-full w-full rounded-full opacity-75', color)} />
    <span className={cn('relative inline-flex rounded-full h-3 w-3', color)} />
  </span>
);

/* Map convenience export */
export const SystemLayerIcons = {
  '01': OfferIcon,
  '02': FunnelIcon,
  '03': AutomationIcon,
  '04': AdsIcon,
  '05': AnalyticsIcon,
};
