"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ScrollReveal } from './scroll-reveal';
import { Phone, Calendar, Clock, Database, ArrowDown, ArrowRight, Puzzle, Check } from 'lucide-react';

const ProblemSection: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('py-20', className)}>
      {/* Visual Problem Diagram */}
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            The <span className="text-red-400">Half-Service</span> Trap
          </h2>
        </ScrollReveal>

        {/* Visual Split Diagram */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* What You Pay For */}
          <ScrollReveal delay={0.1}>
            <div className="bg-brand-dark/50 border border-white/10 rounded-2xl p-8 h-full">
              <div className="text-center mb-6">
                <div className="inline-flex px-4 py-2 rounded-full bg-white/10 text-white font-semibold text-sm">
                  What You Pay For
                </div>
              </div>
              <div className="space-y-4">
                {['Traffic', 'Leads', 'Dashboards'].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-brand-orange/10 border border-brand-orange/20"
                  >
                    <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-brand-orange" />
                    </div>
                    <span className="text-white font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* What You Actually Get */}
          <ScrollReveal delay={0.2}>
            <div className="bg-red-950/20 border border-red-500/20 rounded-2xl p-8 h-full">
              <div className="text-center mb-6">
                <div className="inline-flex px-4 py-2 rounded-full bg-red-500/20 text-red-400 font-semibold text-sm">
                  What's Missing
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { icon: <Phone className="w-5 h-5" />, label: 'Instant Response' },
                  { icon: <Calendar className="w-5 h-5" />, label: 'Pre-Nurturing' },
                  { icon: <Clock className="w-5 h-5" />, label: 'Reminders' },
                  { icon: <Database className="w-5 h-5" />, label: 'CRM System' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-red-950/30 border border-red-500/10"
                  >
                    <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
                      {item.icon}
                    </div>
                    <span className="text-gray-400 line-through">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Result Visual */}
        <ScrollReveal className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-32 h-32 rounded-2xl bg-red-500/10 border border-red-500/30 flex flex-col items-center justify-center"
            >
              <div className="text-4xl font-bold text-red-400">💰</div>
              <div className="text-xs text-gray-400 mt-2">Ad Spend</div>
            </motion.div>
            
            <ArrowRight className="w-8 h-8 text-gray-600 rotate-90 md:rotate-0" />
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-32 h-32 rounded-2xl bg-brand-dark/50 border border-white/10 flex flex-col items-center justify-center"
            >
              <Puzzle className="w-12 h-12 text-gray-500" />
              <div className="text-xs text-gray-400 mt-2">Broken System</div>
            </motion.div>
            
            <ArrowRight className="w-8 h-8 text-gray-600 rotate-90 md:rotate-0" />
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-32 h-32 rounded-2xl bg-red-950/30 border border-red-500/20 flex flex-col items-center justify-center"
            >
              <div className="text-4xl font-bold text-red-400">🔥</div>
              <div className="text-xs text-gray-400 mt-2">Wasted $$$</div>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Solution Tease */}
        <ScrollReveal delay={0.3} className="mt-16 text-center">
          <motion.div
            className="inline-flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <ArrowDown className="w-8 h-8 text-brand-orange animate-bounce mb-4" />
            <p className="text-3xl font-bold text-white mb-2">
              The Solution?
            </p>
            <p className="text-xl text-brand-orange font-semibold">
              Build the other half.
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export { ProblemSection };
