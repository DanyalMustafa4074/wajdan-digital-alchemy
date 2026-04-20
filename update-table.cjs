const fs = require('fs');

const comparisonTablePath = 'src/components/ui/comparison-table.tsx';

const newComparisonTableContent = `
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ScrollReveal } from './scroll-reveal';
import { X, Check, Megaphone, ClipboardList, PhoneMissed, CalendarX, BadgeDollarSign, Target, Zap, Bell, Handshake, TrendingUp } from 'lucide-react';

interface ComparisonTableProps {
  className?: string;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ className }) => {
  return (
    <div className={cn('py-12 md:py-20 relative overflow-hidden bg-[#111110]', className)}>
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />

      <ScrollReveal className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
          Your Pipeline: <span className="text-red-500">Without</span> vs <span className="text-brand-orange">With Wajdan</span>
        </h2>
        <p className="text-xl text-neutral-400 max-w-3xl mx-auto font-medium">
          The difference between burning cash on ads and printing money with a system.
        </p>
      </ScrollReveal>

      {/* Visual Funnel Comparison */}
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* WITHOUT - Visual Flow */}
          <ScrollReveal delay={0.1} className="relative h-full">
            <div className="absolute inset-0 bg-red-950/10 border border-red-500/10 rounded-3xl -z-10" />
            <div className="p-8 md:p-10 h-full flex flex-col">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-500/10 border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
                  <X className="w-5 h-5 text-red-500" strokeWidth={3} />
                  <span className="text-red-500 font-bold uppercase tracking-wider text-sm">The Old Way (Failing)</span>
                </div>
              </div>
              
              {/* Visual Flow Diagram */}
              <div className="relative space-y-4 flex-1">
                {[
                  { icon: <Megaphone className="w-6 h-6" />, label: 'Generic "Hope & Pray" Ads', color: 'text-neutral-400' },
                  { icon: <ClipboardList className="w-6 h-6" />, label: 'Leads Fill Out Basic Form', color: 'text-neutral-400' },
                  { icon: <PhoneMissed className="w-6 h-6" />, label: 'Manual Follow-Up (Too Late)', color: 'text-red-400' },
                  { icon: <CalendarX className="w-6 h-6" />, label: 'Lead Goes Cold & Ghosts', color: 'text-red-500' },
                  { icon: <BadgeDollarSign className="w-6 h-6" />, label: 'ROI Drops to Zero', color: 'text-red-600' },
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-6"
                  >
                    <div className="relative flex flex-col items-center">
                      <div className="w-14 h-14 rounded-xl bg-[#1A1A1A] border border-neutral-800 flex items-center justify-center text-neutral-500 shadow-md">
                        {step.icon}
                      </div>
                      {i < 4 && <div className="w-0.5 h-6 bg-gradient-to-b from-neutral-800 to-red-500/20 my-2" />}
                    </div>
                    <div className={cn("text-lg font-semibold", step.color)}>
                      {step.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Result Box */}
              <motion.div 
                className="mt-8 p-8 rounded-2xl bg-red-950/30 border border-red-500/20 text-center backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-red-500/80 text-sm uppercase tracking-widest font-bold mb-2">Average Show Rate</div>
                <motion.div 
                  className="text-7xl font-black text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.5 }}
                >
                  28%
                </motion.div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* WITH - Visual Flow */}
          <ScrollReveal delay={0.2} className="relative h-full">
            <div className="absolute inset-0 bg-brand-orange/5 border border-brand-orange/20 rounded-3xl -z-10 shadow-[0_0_30px_rgba(255,107,53,0.05)]" />
            <div className="p-8 md:p-10 h-full flex flex-col">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-orange/10 border border-brand-orange/30 shadow-[0_0_20px_rgba(255,107,53,0.2)]">
                  <Check className="w-5 h-5 text-brand-orange" strokeWidth={3} />
                  <span className="text-brand-orange font-bold uppercase tracking-wider text-sm">The Wajdan System</span>
                </div>
              </div>
              
              {/* Visual Flow Diagram */}
              <div className="relative space-y-4 flex-1">
                {[
                  { icon: <Target className="w-6 h-6" />, label: 'Irresistible Mafia Offer Ads', color: 'text-white' },
                  { icon: <Zap className="w-6 h-6" />, label: 'Lead Captures + Instant Qualification', color: 'text-brand-orange' },
                  { icon: <Bell className="w-6 h-6" />, label: 'AI Follows Up in < 60 Seconds', color: 'text-brand-orange' },
                  { icon: <Handshake className="w-6 h-6" />, label: 'Booking Secured Automatically', color: 'text-brand-orange' },
                  { icon: <TrendingUp className="w-6 h-6" />, label: 'Ready-to-Buy Prospect Shows Up', color: 'text-brand-orange' },
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-6"
                  >
                    <div className="relative flex flex-col items-center">
                      <div className="w-14 h-14 rounded-xl bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center text-brand-orange shadow-[0_0_10px_rgba(255,107,53,0.1)]">
                        {step.icon}
                      </div>
                      {i < 4 && <div className="w-0.5 h-6 bg-gradient-to-b from-brand-orange/30 to-brand-orange my-2" />}
                    </div>
                    <div className={cn("text-lg font-bold", step.color)}>
                      {step.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Result Box */}
              <motion.div 
                className="mt-8 p-8 rounded-2xl bg-brand-orange/10 border border-brand-orange/30 text-center backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-brand-orange text-sm uppercase tracking-widest font-bold mb-2">Qualified Show Rate</div>
                <motion.div 
                  className="text-7xl font-black text-brand-orange drop-shadow-[0_0_25px_rgba(255,107,53,0.4)]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.5 }}
                >
                  84%+
                </motion.div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>

        {/* Visual Stats Bar */}
        <ScrollReveal delay={0.4} className="mt-16 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {[
              { value: '3×', label: 'More Bookings', color: 'text-brand-orange' },
              { value: '< 60s', label: 'Response Time', color: 'text-white' },
              { value: '40%', label: 'Lower CPA', color: 'text-brand-orange' },
              { value: '30', label: 'Days to ROI', color: 'text-white' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-[#1A1A1A] border border-neutral-800 hover:border-brand-orange/50 transition-colors rounded-2xl p-8 text-center shadow-lg group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <motion.div 
                  className={cn('text-5xl font-black mb-3 tracking-tighter relative z-10', stat.color)}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring', delay: i * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-neutral-400 font-semibold uppercase tracking-wider text-xs md:text-sm relative z-10">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export { ComparisonTable };
`;

fs.writeFileSync(comparisonTablePath, newComparisonTableContent);
console.log('ComparisonTable updated to dark high-conversion UX theme');
