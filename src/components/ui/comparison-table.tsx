"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ScrollReveal } from './scroll-reveal';
import { X, Check, Megaphone, ClipboardList, PhoneMissed, CalendarX, BadgeDollarSign, Target, Zap, Bell, Handshake, TrendingUp, ArrowRight, ArrowDown } from 'lucide-react';

interface ComparisonTableProps {
  className?: string;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ className }) => {
  return (
    <div className={cn('py-20', className)}>
      <ScrollReveal className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Your Funnel: <span className="text-red-400">Before</span> vs <span className="text-brand-orange">After</span>
        </h2>
      </ScrollReveal>

      {/* Visual Funnel Comparison */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* WITHOUT - Visual Flow */}
          <ScrollReveal delay={0.1}>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30">
                <X className="w-4 h-4 text-red-400" />
                <span className="text-red-400 font-semibold">Without System</span>
              </div>
            </div>
            
            {/* Visual Flow Diagram */}
            <div className="relative">
              {/* Steps */}
              {[
                { icon: <Megaphone className="w-8 h-8" />, label: 'Generic Ad' },
                { icon: <ClipboardList className="w-8 h-8" />, label: 'Form Submit' },
                { icon: <PhoneMissed className="w-8 h-8" />, label: 'Cold Call' },
                { icon: <CalendarX className="w-8 h-8" />, label: 'No-Show' },
                { icon: <BadgeDollarSign className="w-8 h-8" />, label: 'Wasted $$$' },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <motion.div 
                      className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400"
                      whileHover={{ scale: 1.1, borderColor: 'rgba(239,68,68,0.6)' }}
                    >
                      {step.icon}
                    </motion.div>
                    <span className="text-white font-medium">{step.label}</span>
                    {i < 4 && (
                      <motion.div
                        className="flex-1 h-0.5 bg-gradient-to-r from-red-500/50 to-transparent"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ delay: i * 0.1 + 0.3 }}
                      />
                    )}
                  </div>
                  {i < 4 && (
                    <div className="ml-8 h-6 border-l-2 border-dashed border-red-500/30" />
                  )}
                </motion.div>
              ))}
              
              {/* Result Box */}
              <motion.div 
                className="mt-6 p-6 rounded-2xl bg-red-950/30 border border-red-500/30 text-center"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div 
                  className="text-6xl font-bold text-red-400 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.5 }}
                >
                  28%
                </motion.div>
                <div className="text-red-400/60 text-sm uppercase tracking-wider">Show Rate</div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* WITH - Visual Flow */}
          <ScrollReveal delay={0.2}>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/20 border border-brand-orange/30">
                <Check className="w-4 h-4 text-brand-orange" />
                <span className="text-brand-orange font-semibold">With Wajdan System</span>
              </div>
            </div>
            
            {/* Visual Flow Diagram */}
            <div className="relative">
              {[
                { icon: <Target className="w-8 h-8" />, label: 'Proven Offer' },
                { icon: <Zap className="w-8 h-8" />, label: '18s Response' },
                { icon: <Bell className="w-8 h-8" />, label: 'Auto-Reminders' },
                { icon: <Handshake className="w-8 h-8" />, label: 'Warm Lead' },
                { icon: <TrendingUp className="w-8 h-8" />, label: 'Closed Deal' },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <motion.div 
                      className="w-16 h-16 rounded-2xl bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center text-brand-orange"
                      whileHover={{ scale: 1.1, borderColor: 'rgba(255,107,53,0.6)' }}
                    >
                      {step.icon}
                    </motion.div>
                    <span className="text-white font-medium">{step.label}</span>
                    {i < 4 && (
                      <motion.div
                        className="flex-1 h-0.5 bg-gradient-to-r from-brand-orange/50 to-transparent"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ delay: i * 0.1 + 0.3 }}
                      />
                    )}
                  </div>
                  {i < 4 && (
                    <div className="ml-8 h-6 border-l-2 border-dashed border-brand-orange/30" />
                  )}
                </motion.div>
              ))}
              
              {/* Result Box */}
              <motion.div 
                className="mt-6 p-6 rounded-2xl bg-brand-orange/10 border border-brand-orange/30 text-center"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div 
                  className="text-6xl font-bold text-brand-orange mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.5 }}
                >
                  84%
                </motion.div>
                <div className="text-brand-orange/60 text-sm uppercase tracking-wider">Show Rate</div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>

        {/* Visual Stats Bar */}
        <ScrollReveal delay={0.4} className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '3×', label: 'More Bookings', color: 'brand-orange' },
              { value: '18s', label: 'Response Time', color: 'brand-yellow' },
              { value: '40%', label: 'Cost Reduction', color: 'brand-orange' },
              { value: '60', label: 'Days to Results', color: 'brand-yellow' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-brand-dark/50 border border-white/10 rounded-xl p-6 text-center"
              >
                <motion.div 
                  className={cn(
                    'text-4xl font-bold mb-2',
                    stat.color === 'brand-orange' ? 'text-brand-orange' : 'text-brand-yellow'
                  )}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring', delay: i * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export { ComparisonTable };
