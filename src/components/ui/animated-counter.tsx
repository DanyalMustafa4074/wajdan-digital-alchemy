"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  suffix = '',
  prefix = '',
  duration = 2,
  className,
  decimals = 0,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const display = useTransform(spring, (current) => {
    return `${prefix}${current.toFixed(decimals)}${suffix}`;
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      spring.set(value);
      setHasAnimated(true);
    }
  }, [isInView, value, spring, hasAnimated]);

  return (
    <motion.span ref={ref} className={cn('tabular-nums', className)}>
      {display}
    </motion.span>
  );
};

// Stats bar component with multiple counters
interface StatItem {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
}

interface StatsBarProps {
  stats: StatItem[];
  className?: string;
  variant?: 'dark' | 'light';
}

const StatsBar: React.FC<StatsBarProps> = ({
  stats,
  className,
  variant = 'dark',
}) => {
  const bgClass = variant === 'dark' 
    ? 'bg-brand-dark border-brand-green/20' 
    : 'bg-white border-gray-200';
  const textClass = variant === 'dark' ? 'text-white' : 'text-brand-dark';
  const labelClass = variant === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const valueClass = variant === 'dark' ? 'text-brand-yellow' : 'text-brand-green';

  return (
    <div className={cn(
      'grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl border',
      bgClass,
      className
    )}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className={cn('text-4xl md:text-5xl font-bold mb-2', valueClass)}>
            <AnimatedCounter
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              decimals={stat.decimals}
            />
          </div>
          <div className={cn('text-sm uppercase tracking-wider', labelClass)}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

// Hero stats with icons
interface HeroStatItem {
  value: string;
  label: string;
  description?: string;
}

interface HeroStatsProps {
  stats: HeroStatItem[];
  className?: string;
}

const HeroStats: React.FC<HeroStatsProps> = ({ stats, className }) => {
  return (
    <div className={cn(
      'flex flex-wrap justify-center gap-8 md:gap-12',
      className
    )}>
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
          className="text-center"
        >
          <div className="text-3xl md:text-4xl font-bold text-brand-yellow mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-gray-400 uppercase tracking-wider">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export { AnimatedCounter, StatsBar, HeroStats };
