"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight, Play, ChevronDown, Check, Clock, Shield, MapPin, Star } from 'lucide-react';
import { PulsingDot } from './lottie-icons';

interface WajdanHeroProps {
  className?: string;
}

const WajdanHero: React.FC<WajdanHeroProps> = ({ className }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const trustBadges = [
    { icon: <Clock className="w-4 h-4" />, text: '60-day booking quality commitment' },
    { icon: <Shield className="w-4 h-4" />, text: 'No long-term contracts' },
    { icon: <MapPin className="w-4 h-4" />, text: 'Based in Europe' },
    { icon: <Check className="w-4 h-4" />, text: 'Built for consultation firms only' },
  ];

  // Stagger animation for children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <div className={cn('relative min-h-[calc(100svh-80px)] sm:min-h-screen overflow-hidden flex flex-col justify-center py-16', className)}>
      {/* Animated Mesh Gradient Background (UI Goodies Premium Style) */}
      <div className="absolute inset-0 bg-brand-dark overflow-hidden">
        <div className="mesh-bg-brand" />

        {/* Animated Grid Pattern slightly refined */}
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] opacity-70"
          animate={{
            backgroundPosition: ['0px 0px', '48px 48px'],
          }}
          transition={{
            duration: 15,
          }}
        />
        
        {/* Radial Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,107,53,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(246,226,127,0.1),transparent_50%)]" />
        
        {/* Animated Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-brand-orange/10 blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.3, 0.15],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 left-20 w-[400px] h-[400px] rounded-full bg-brand-yellow/10 blur-[80px]"
        />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-brand-orange/30 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-20"
      >
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card text-brand-orange text-sm font-semibold tracking-wide mb-8 uppercase"
            >
              <PulsingDot color="bg-brand-orange" />
              For Immigration & Education Consultancies
            </motion.div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[1.1] mb-6 tracking-tight"
          >
            We Build The Most{' '}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-orange inline-block text-glow"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              Ruthless & Effective
            </motion.span>
            <br />
            System for Rapid Scaling of
            <br />
            Consultation Firms on Planet Earth
            <br />
            <motion.span 
              className="text-brand-orange"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              — In 60 Days.
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-10 leading-relaxed"
          >
            While every other agency sells you leads and disappears — we build the complete infrastructure 
            that turns Meta traffic into qualified, pre-nurtured, showed-up consultation bookings. 
            <motion.span 
              className="text-brand-orange font-semibold"
              animate={{ color: ['#FF6B35', '#F6E27F', '#FF6B35'] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {' '}Or we work for free.
            </motion.span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center mb-8 w-full max-w-2xl mx-auto"
          >
            <motion.a
              href="#video"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255,107,53,0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white font-medium hover:bg-white/20 transition-all group w-full sm:w-auto min-h-[56px]"
            >
              <motion.div 
                className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center flex-shrink-0"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Play className="w-4 h-4 fill-white text-white ml-0.5" />
              </motion.div>
              <span className="text-left text-sm sm:text-base">Watch: How The Wajdan System Works — 3 min</span>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex justify-center items-center gap-2 px-8 py-4 bg-brand-orange text-white font-bold rounded-xl hover:bg-brand-orange/90 transition-all shadow-xl shadow-brand-orange/30 overflow-hidden w-full sm:w-auto min-h-[56px]"
            >
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
              <span className="relative text-sm sm:text-base text-center">Show Me What's Broken — Free</span>
              <ArrowRight className="w-5 h-5 flex-shrink-0 relative" />
            </motion.a>
          </motion.div>

          {/* Read on indicator */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2 text-gray-500 text-sm"
          >
            <span>Read on</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 flex flex-wrap justify-center gap-4 md:gap-8"
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, borderColor: 'rgba(255,107,53,0.5)' }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm transition-all"
            >
              <span className="text-brand-orange">{badge.icon}</span>
              <span>{badge.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-brand-orange/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-brand-orange"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

// Video Section Component
const VideoSection: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <section id="video" className={cn('py-20 bg-brand-dark', className)}>
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="relative aspect-video rounded-2xl overflow-hidden border border-brand-orange/20 bg-gradient-to-br from-brand-dark to-black group cursor-pointer shadow-2xl shadow-brand-orange/10"
        >
          {/* Animated border glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: 'linear-gradient(45deg, transparent, rgba(255,107,53,0.1), transparent)',
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Placeholder for video - client will provide actual video */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(255,107,53,0.3)',
                    '0 0 40px rgba(255,107,53,0.5)',
                    '0 0 20px rgba(255,107,53,0.3)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-24 h-24 rounded-full bg-brand-orange/20 border-2 border-brand-orange flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-orange/30 transition-all"
              >
                <Play className="w-10 h-10 text-brand-orange ml-1" />
              </motion.div>
              <p className="text-white text-xl font-semibold mb-2">How The Wajdan System Works</p>
              <p className="text-gray-500">3 minute overview</p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <motion.div 
              className="w-3 h-3 rounded-full bg-red-500"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-500 text-sm mt-4"
        >
          Video placeholder — Client to provide actual video content
        </motion.p>
      </div>
    </section>
  );
};

// Letter Introduction Section - More Visual, Less Text
const LetterIntro: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <section className={cn('py-20 bg-brand-dark', className)}>
      <div className="max-w-5xl mx-auto px-4">
        {/* Quick Visual Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            You've <span className="text-brand-orange">Tried Ads</span> Before
          </h2>
          
          {/* Visual Journey */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            {[
              { emoji: '💰', label: 'Paid Agency' },
              { emoji: '📊', label: 'Got Reports' },
              { emoji: '📋', label: 'Leads Came' },
              { emoji: '❓', label: 'But Where Are Clients?' },
            ].map((step, i) => (
              <React.Fragment key={i}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className={cn(
                    'flex flex-col items-center gap-2 p-4 rounded-xl border',
                    i === 3 
                      ? 'bg-red-950/20 border-red-500/20' 
                      : 'bg-brand-dark/50 border-white/10'
                  )}
                >
                  <span className="text-3xl">{step.emoji}</span>
                  <span className={cn(
                    'text-sm font-medium',
                    i === 3 ? 'text-red-400' : 'text-gray-400'
                  )}>{step.label}</span>
                </motion.div>
                {i < 3 && (
                  <ArrowRight className="w-5 h-5 text-gray-600 hidden md:block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Agency Excuses Visual */}
        <motion.div 
          className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[
            { emoji: '🤷', text: 'Needs more time' },
            { emoji: '🤖', text: 'Algorithm learning' },
            { emoji: '💸', text: 'Need bigger budget' },
          ].map((excuse, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: [-1, 1, 0] }}
              className="bg-red-950/10 border border-red-500/20 rounded-xl p-4 text-center"
            >
              <span className="text-3xl mb-2 block">{excuse.emoji}</span>
              <p className="text-red-400/80 text-sm italic">"{excuse.text}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export { WajdanHero, VideoSection, LetterIntro };
