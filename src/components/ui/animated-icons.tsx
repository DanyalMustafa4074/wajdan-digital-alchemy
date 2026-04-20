"use client";

import React from 'react';
import Lottie from 'lottie-react';
const LottieComponent = (Lottie as any).default || Lottie;
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  targetAnimationData,
  funnelAnimationData,
  automationAnimationData,
  megaphoneAnimationData,
  chartAnimationData,
  successAnimationData,
  rocketAnimationData
} from './lottie-icons';

// ==========================================
// PREMIUM LOTTIE ANIMATIONS FOR WAJDAN
// Reusing animation data from lottie-icons
// ==========================================

// Use animation data from lottie-icons
const rocketAnimation = rocketAnimationData;
const targetAnimation = targetAnimationData;
const chartAnimation = chartAnimationData;
const zapAnimation = automationAnimationData;
const funnelAnimation = funnelAnimationData;
const successAnimation = successAnimationData;
const megaphoneAnimation = megaphoneAnimationData;
// ==========================================
// ANIMATION COMPONENTS
// ==========================================

interface AnimatedIconProps {
  className?: string;
  size?: number;
  loop?: boolean;
  autoplay?: boolean;
}

export const RocketAnimation: React.FC<AnimatedIconProps> = ({ className, size = 80, loop = true, autoplay = true }) => {
  return (
    <motion.div
      className={cn('relative flex items-center justify-center', className)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{ width: size, height: size, minWidth: size, minHeight: size }}
    >
      <LottieComponent
        animationData={rocketAnimation}
        loop={loop}
        autoplay={autoplay}
        style={{ width: '100%', height: '100%' }}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice'
        }}
      />
    </motion.div>
  );
}

export const TargetAnimation: React.FC<AnimatedIconProps> = ({ className, size = 80, loop = true, autoplay = true }) => {
  return (
    <motion.div
      className={cn('relative flex items-center justify-center', className)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{ width: size, height: size, minWidth: size, minHeight: size }}
    >
      <LottieComponent
        animationData={targetAnimation}
        loop={loop}
        autoplay={autoplay}
        style={{ width: '100%', height: '100%' }}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice'
        }}
      />
    </motion.div>
  );
}

export const ChartAnimation: React.FC<AnimatedIconProps> = ({ className, size = 80, loop = true, autoplay = true }) => {
  return (
    <motion.div
      className={cn('relative flex items-center justify-center', className)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{ width: size, height: size, minWidth: size, minHeight: size }}
    >
      <LottieComponent
        animationData={chartAnimation}
        loop={loop}
        autoplay={autoplay}
        style={{ width: '100%', height: '100%' }}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice'
        }}
      />
    </motion.div>
  );
}

export const ZapAnimation: React.FC<AnimatedIconProps> = ({ className, size = 80, loop = true, autoplay = true }) => {
  return (
    <motion.div
      className={cn('relative flex items-center justify-center', className)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{ width: size, height: size, minWidth: size, minHeight: size }}
    >
      <LottieComponent
        animationData={zapAnimation}
        loop={loop}
        autoplay={autoplay}
        style={{ width: '100%', height: '100%' }}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice'
        }}
      />
    </motion.div>
  );
}

export const FunnelAnimation: React.FC<AnimatedIconProps> = ({ className, size = 80, loop = true, autoplay = true }) => {
  return (
    <motion.div
      className={cn('relative flex items-center justify-center', className)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{ width: size, height: size, minWidth: size, minHeight: size }}
    >
      <LottieComponent
        animationData={funnelAnimation}
        loop={loop}
        autoplay={autoplay}
        style={{ width: '100%', height: '100%' }}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice'
        }}
      />
    </motion.div>
  );
}

export const SuccessAnimation: React.FC<AnimatedIconProps> = ({ className, size = 80, loop = true, autoplay = true }) => {
  return (
    <motion.div
      className={cn('relative flex items-center justify-center', className)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{ width: size, height: size, minWidth: size, minHeight: size }}
    >
      <LottieComponent
        animationData={successAnimation}
        loop={loop}
        autoplay={autoplay}
        style={{ width: '100%', height: '100%' }}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice'
        }}
      />
    </motion.div>
  );
}

export const MegaphoneAnimation: React.FC<AnimatedIconProps> = ({ className, size = 80, loop = true, autoplay = true }) => {
  return (
    <motion.div
      className={cn('relative flex items-center justify-center', className)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{ width: size, height: size, minWidth: size, minHeight: size }}
    >
      <LottieComponent
        animationData={megaphoneAnimation}
        loop={loop}
        autoplay={autoplay}
        style={{ width: '100%', height: '100%' }}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice'
        }}
      />
    </motion.div>
  );
}

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
