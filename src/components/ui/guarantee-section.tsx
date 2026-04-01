"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ScrollReveal } from './scroll-reveal';
import { Shield, ArrowRight, Star } from 'lucide-react';
import { SuccessIcon, RocketIcon } from './lottie-icons';

interface GuaranteeSectionProps {
  className?: string;
}

const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ className }) => {
  return (
    <div className={cn('py-20 relative overflow-hidden', className)}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/10 via-brand-yellow/10 to-brand-orange/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,107,53,0.15),transparent_70%)]" />
      
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-brand-orange/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <ScrollReveal>
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-brand-orange/20 border-2 border-brand-orange mb-8"
          >
            <Shield className="w-12 h-12 text-brand-orange" />
          </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            How the Hell Can We
            <br />
            <motion.span 
              className="text-brand-orange"
              animate={{ opacity: [1, 0.8, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Guarantee Results?
            </motion.span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-xl text-gray-300 mb-8">Yes. You heard that right.</p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <motion.div
            whileHover={{ scale: 1.02, borderColor: 'rgba(255,107,53,0.7)' }}
            className="bg-brand-dark/80 border-2 border-brand-orange/50 rounded-2xl p-8 mb-8 relative shadow-lg shadow-brand-orange/10"
          >
            <motion.div 
              className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-orange text-white text-sm font-semibold rounded-full"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Our Promise
            </motion.div>
            <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed italic">
              "If we don't improve the quality of your consultation bookings within the first 60 days — 
              we continue optimising your system at no management fee until we do."
            </blockquote>
            
            {/* Animated success icon */}
            <div className="absolute -bottom-6 right-8 opacity-20">
              <SuccessIcon size={80} />
            </div>
          </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="grid sm:grid-cols-3 gap-6 mb-8 text-left">
            {[
              "No paying for \"the algorithm needs more time\"",
              "No paying for leads that never answer",
              "No paying for dashboards that look good but produce nothing",
              "No paying for effort without outcomes",
              "No paying for \"we just need a couple more weeks\" — ever again",
              "No paying for a system that was never actually built",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="flex items-start gap-3 group"
              >
                <motion.div 
                  className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-red-500/40 transition-colors"
                  whileHover={{ scale: 1.2 }}
                >
                  <span className="text-red-400 text-xs">✕</span>
                </motion.div>
                <span className="text-gray-300 text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <p className="text-gray-400 mb-8">
            We can make this commitment because we're not guessing. We've built these systems. 
            We know exactly where immigration and education consultancy funnels break — and we know what the working version produces.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.7}>
          <motion.div 
            className="bg-brand-orange/10 border border-brand-orange/30 rounded-xl p-6 mb-8 relative overflow-hidden"
            whileHover={{ borderColor: 'rgba(255,107,53,0.6)' }}
          >
            {/* Animated glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-orange/10 to-transparent"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
            
            <p className="text-brand-orange font-semibold text-lg mb-2 relative z-10">
              ⚠️ Warning: We Reserve The Right To Revoke This Offer At Any Time.
            </p>
            <p className="text-gray-400 relative z-10">
              We only take on 6 new clients per month. When those spots are gone — they're gone.
            </p>
          </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={0.8}>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 25px 50px rgba(255,107,53,0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 px-6 sm:px-8 py-4 min-h-[64px] bg-brand-orange text-white font-bold rounded-xl text-base sm:text-lg transition-all shadow-lg shadow-brand-orange/25 w-full sm:w-auto text-center"
          >
            <RocketIcon size={24} className="hidden sm:block" />
            <span>Claim Your Free 30-Minute Consultation Funnel Audit</span>
            <ArrowRight className="w-5 h-5 flex-shrink-0 hidden sm:block" />
          </motion.a>
          <p className="text-gray-500 text-sm mt-6">
            Be quick — FREE spots are almost gone for this month
          </p>
          <div className="flex items-center justify-center gap-1 mt-4 text-brand-orange">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <Star className="w-5 h-5 fill-current" />
              </motion.div>
            ))}
          </div>
          <p className="text-gray-400 text-sm">
            Trusted by immigration & education consultancies across Europe, UAE & beyond
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
};

export { GuaranteeSection };
