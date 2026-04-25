"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

// ==========================================
// WAJDAN CUSTOM SVG ANIMATIONS
// Designed natively to replace generic Lotties
// ==========================================

interface AnimatedIconProps {
  className?: string;
  size?: number;
  loop?: boolean;
  autoplay?: boolean;
}

const colorDark = "#111110";
const colorOrange = "#cf5230";

export const TargetAnimation: React.FC<AnimatedIconProps> = ({ size = 80, className }) => (
  <motion.div className={cn('relative flex items-center justify-center', className)} style={{ width: size, height: size }}>
    <svg width="100%" height="100%" viewBox="0 0 100 100" overflow="visible">
      <circle cx="50" cy="50" r="40" stroke={colorDark} strokeWidth="4" fill="none" opacity={0.2} />
      <circle cx="50" cy="50" r="25" stroke={colorOrange} strokeWidth="4" fill="none" opacity={0.4} />
      <motion.circle cx="50" cy="50" r="10" fill={colorOrange}
        animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} />
      <motion.path d="M 95 5 L 56 44" stroke={colorDark} strokeWidth="5" strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeOut", times: [0, 0.4, 1] }} />
      <motion.path d="M 56 44 L 65 40 M 56 44 L 60 53" stroke={colorDark} strokeWidth="4" strokeLinecap="round" fill="none"
        initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeOut", times: [0, 0.4, 1] }} />
    </svg>
  </motion.div>
);

export const FunnelAnimation: React.FC<AnimatedIconProps> = ({ size = 80, className }) => (
  <motion.div className={cn('relative flex items-center justify-center', className)} style={{ width: size, height: size }}>
    <svg width="100%" height="100%" viewBox="0 0 100 100" overflow="visible">
      {/* Funnel Base */}
      <path d="M 15 20 L 85 20 L 60 60 L 60 85 L 40 85 L 40 60 Z" stroke={colorDark} strokeWidth="4" fill="none" strokeLinejoin="round" />
      <path d="M 15 20 Q 50 10 85 20" stroke={colorDark} strokeWidth="4" fill="none" />
      {/* Incoming Leads */}
      <motion.circle cx="35" cy="5" r="4" fill={colorDark} animate={{ y: [0, 30], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeIn" }} />
      <motion.circle cx="65" cy="-5" r="5" fill={colorDark} animate={{ y: [0, 40], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4, ease: "easeIn" }} />
      <motion.circle cx="50" cy="0" r="3.5" fill={colorDark} animate={{ y: [0, 30], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.8, ease: "easeIn" }} />
      {/* Converted Output */}
      <motion.rect x="44" y="90" width="12" height="12" rx="2" fill={colorOrange}
        animate={{ y: [0, 20], opacity: [1, 0], scale: [1, 1.2] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.6, ease: "easeOut" }} />
    </svg>
  </motion.div>
);

export const ZapAnimation: React.FC<AnimatedIconProps> = ({ size = 80, className }) => (
  <motion.div className={cn('relative flex items-center justify-center', className)} style={{ width: size, height: size }}>
    <svg width="100%" height="100%" viewBox="0 0 100 100" overflow="visible">
      <motion.path 
        d="M 55 10 L 25 55 L 50 55 L 45 95 L 80 45 L 50 45 Z" 
        stroke={colorOrange} strokeWidth="5" strokeLinejoin="round"
        fill="rgba(207, 82, 48, 0.1)"
        animate={{ 
          filter: ['drop-shadow(0px 0px 0px rgba(207,82,48,0))', 'drop-shadow(0px 0px 12px rgba(207,82,48,0.8))', 'drop-shadow(0px 0px 0px rgba(207,82,48,0))'],
          strokeWidth: [4, 6, 4]
        }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }} 
      />
      {/* Sparkles */}
      <motion.circle cx="85" cy="25" r="3" fill={colorOrange} animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }} />
      <motion.circle cx="20" cy="80" r="4" fill={colorOrange} animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.6 }} />
    </svg>
  </motion.div>
);

export const MegaphoneAnimation: React.FC<AnimatedIconProps> = ({ size = 80, className }) => (
  <motion.div className={cn('relative flex items-center justify-center', className)} style={{ width: size, height: size }}>
    <svg width="100%" height="100%" viewBox="0 0 100 100" overflow="visible">
      {/* Megaphone body */}
      <path d="M 25 45 L 60 25 L 60 75 L 25 55 Z" stroke={colorDark} strokeWidth="4" fill="none" strokeLinejoin="round" />
      <path d="M 25 45 Q 15 50 25 55" stroke={colorDark} strokeWidth="4" fill="none" />
      <path d="M 60 25 Q 70 50 60 75" stroke={colorDark} strokeWidth="4" fill="none" />
      <path d="M 40 64 L 35 85 L 50 85 L 50 69" stroke={colorDark} strokeWidth="4" fill="none" strokeLinejoin="round" />
      
      {/* Sound waves expanding outwards */}
      <motion.path d="M 75 35 Q 85 50 75 65" stroke={colorOrange} strokeWidth="4.5" fill="none" strokeLinecap="round"
        initial={{ opacity: 0, x: -5 }}
        animate={{ opacity: [0, 1, 0], x: [-5, 5, 10] }} 
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }} />
      <motion.path d="M 85 20 Q 105 50 85 80" stroke={colorOrange} strokeWidth="5" fill="none" strokeLinecap="round"
        initial={{ opacity: 0, x: -5 }}
        animate={{ opacity: [0, 1, 0], x: [-5, 8, 15] }} 
        transition={{ repeat: Infinity, duration: 1.5, delay: 0.3, ease: "easeOut" }} />
    </svg>
  </motion.div>
);

export const ChartAnimation: React.FC<AnimatedIconProps> = ({ size = 80, className }) => (
  <motion.div className={cn('relative flex items-center justify-center', className)} style={{ width: size, height: size }}>
    <svg width="100%" height="100%" viewBox="0 0 100 100" overflow="visible">
      {/* Axis */}
      <path d="M 15 15 L 15 85 L 85 85" stroke={colorDark} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Bars */}
      <motion.rect x="25" y="65" width="12" height="20" fill={colorDark} rx="2" animate={{ height: [0, 20, 20], y: [85, 65, 65] }} transition={{ repeat: Infinity, duration: 2.5 }} />
      <motion.rect x="45" y="45" width="12" height="40" fill={colorDark} rx="2" animate={{ height: [0, 40, 40], y: [85, 45, 45] }} transition={{ repeat: Infinity, duration: 2.5, delay: 0.2 }} />
      <motion.rect x="65" y="20" width="12" height="65" fill={colorOrange} rx="2" animate={{ height: [0, 65, 65], y: [85, 20, 20] }} transition={{ repeat: Infinity, duration: 2.5, delay: 0.4 }} />
      {/* Trending Line */}
      <motion.path d="M 15 75 L 31 55 L 51 40 L 71 15" stroke={colorOrange} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1] }} 
        transition={{ repeat: Infinity, duration: 2.5, delay: 0.6, ease: "easeInOut" }} />
    </svg>
  </motion.div>
);

export const RocketAnimation: React.FC<AnimatedIconProps> = ({ size = 80, className }) => (
  <motion.div className={cn('relative flex items-center justify-center', className)} style={{ width: size, height: size }}>
    <svg width="100%" height="100%" viewBox="0 0 100 100" overflow="visible">
      <motion.g animate={{ y: [-2, 2, -2], x: [-1, 1, -1] }} transition={{ repeat: Infinity, duration: 0.4, ease: "linear" }}>
        {/* Rocket body */}
        <path d="M 50 15 C 70 30 70 60 50 75 C 30 60 30 30 50 15 Z" stroke={colorDark} strokeWidth="4" fill="none" strokeLinejoin="round" />
        <path d="M 35 60 L 20 75 L 35 75 Z" stroke={colorOrange} strokeWidth="4" fill="none" strokeLinejoin="round" />
        <path d="M 65 60 L 80 75 L 65 75 Z" stroke={colorOrange} strokeWidth="4" fill="none" strokeLinejoin="round" />
        <circle cx="50" cy="40" r="7" stroke={colorDark} strokeWidth="4" fill={colorDark} opacity={0.1} />
        {/* Thrust flames */}
        <motion.path d="M 40 75 L 50 95 L 60 75 Z" fill={colorOrange}
          animate={{ scaleY: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }} 
          style={{ originY: 0.75 }} 
          transition={{ repeat: Infinity, duration: 0.15 }} />
      </motion.g>
    </svg>
  </motion.div>
);

export const SuccessAnimation: React.FC<AnimatedIconProps> = ({ size = 80, className }) => (
  <motion.div className={cn('relative flex items-center justify-center', className)} style={{ width: size, height: size }}>
    <svg width="100%" height="100%" viewBox="0 0 100 100" overflow="visible">
      {/* Circle draws first */}
      <motion.circle cx="50" cy="50" r="40" stroke={colorOrange} strokeWidth="5" fill="none"
        initial={{ pathLength: 0, opacity: 0 }} 
        animate={{ 
          pathLength: [0, 1, 1, 1], 
          opacity: [0, 1, 1, 0] 
        }} 
        transition={{ repeat: Infinity, duration: 3, times: [0, 0.4, 0.8, 1], ease: "easeInOut" }} />
      {/* Checkmark snaps right after circle starts */}
      <motion.path d="M 30 50 L 45 65 L 70 35" stroke={colorDark} strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }} 
        animate={{ 
          pathLength: [0, 0, 1, 1], 
          opacity: [0, 0, 1, 0] 
        }} 
        transition={{ repeat: Infinity, duration: 3, times: [0, 0.3, 0.5, 1], ease: "easeOut" }} />
    </svg>
  </motion.div>
);


// ==========================================
// ANIMATED HERO ICONS SECTION
// ==========================================

export const AnimatedHeroIcons: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('flex justify-center items-center gap-6 md:gap-10 flex-wrap py-4', className)}>
      <motion.div
        whileHover={{ scale: 1.15, y: -8 }}
        whileTap={{ scale: 0.95 }}
        className="flex flex-col items-center gap-3 p-4 rounded-xl bg-brand-dark/30 border border-white/5 hover:border-brand-orange/30 transition-all cursor-pointer"
      >
        <TargetAnimation size={64} autoplay={true} loop={true} />
        <span className="text-sm font-medium text-muted-foreground">Offer</span>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.15, y: -8 }}
        whileTap={{ scale: 0.95 }}
        className="flex flex-col items-center gap-3 p-4 rounded-xl bg-brand-dark/30 border border-white/5 hover:border-brand-orange/30 transition-all cursor-pointer"
      >
        <FunnelAnimation size={64} autoplay={true} loop={true} />
        <span className="text-sm font-medium text-muted-foreground">Funnel</span>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.15, y: -8 }}
        whileTap={{ scale: 0.95 }}
        className="flex flex-col items-center gap-3 p-4 rounded-xl bg-brand-dark/30 border border-white/5 hover:border-brand-orange/30 transition-all cursor-pointer"
      >
        <ZapAnimation size={64} autoplay={true} loop={true} />
        <span className="text-sm font-medium text-muted-foreground">Automation</span>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.15, y: -8 }}
        whileTap={{ scale: 0.95 }}
        className="flex flex-col items-center gap-3 p-4 rounded-xl bg-brand-dark/30 border border-white/5 hover:border-brand-orange/30 transition-all cursor-pointer"
      >
        <MegaphoneAnimation size={64} autoplay={true} loop={true} />
        <span className="text-sm font-medium text-muted-foreground">Ads</span>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.15, y: -8 }}
        whileTap={{ scale: 0.95 }}
        className="flex flex-col items-center gap-3 p-4 rounded-xl bg-brand-dark/30 border border-white/5 hover:border-brand-orange/30 transition-all cursor-pointer"
      >
        <ChartAnimation size={64} autoplay={true} loop={true} />
        <span className="text-sm font-medium text-muted-foreground">Results</span>
      </motion.div>
    </div>
  );
};

// ==========================================
// SYSTEM LAYER ANIMATED CARDS
// ==========================================

interface LayerCardProps {
  number: string;
  title: string;
  animationType: 'target' | 'funnel' | 'zap' | 'megaphone' | 'chart';
  isActive?: boolean;
  onClick?: () => void;
}

export const AnimatedLayerCard: React.FC<LayerCardProps> = ({
  number,
  title,
  animationType,
  isActive,
  onClick
}) => {
  const AnimationComponent = {
    target: TargetAnimation,
    funnel: FunnelAnimation,
    zap: ZapAnimation,
    megaphone: MegaphoneAnimation,
    chart: ChartAnimation,
  }[animationType];

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'flex flex-col items-center gap-3 p-6 rounded-2xl border transition-all',
        isActive
          ? 'bg-brand-orange/10 border-brand-orange/50 shadow-lg shadow-brand-orange/20'
          : 'bg-brand-dark/50 border-black/10 hover:border-brand-orange/30'
      )}
    >
      <div className="flex items-center justify-center">
        <AnimationComponent size={56} loop={isActive} autoplay={true} />
      </div>
      <div className="text-center">
        <span className={cn(
          'text-xs font-bold',
          isActive ? 'text-brand-orange' : 'text-gray-600'
        )}>
          {number}
        </span>
        <p className={cn(
          'text-sm font-medium',
          isActive ? 'text-white' : 'text-muted-foreground'
        )}>
          {title}
        </p>
      </div>
    </motion.button>
  );
};
