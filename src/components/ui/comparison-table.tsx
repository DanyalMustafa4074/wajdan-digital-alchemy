"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ScrollReveal } from './scroll-reveal';
import {
  X, Check, Megaphone, ClipboardList, PhoneMissed, CalendarX,
  BadgeDollarSign, Target, Zap, Bell, Handshake, TrendingUp,
} from 'lucide-react';

interface ComparisonTableProps {
  className?: string;
}

const withoutSteps = [
  { icon: <Megaphone className="w-6 h-6" />, label: 'Generic ad — attracts nobody specific' },
  { icon: <ClipboardList className="w-6 h-6" />, label: 'Lead submits form — silence' },
  { icon: <PhoneMissed className="w-6 h-6" />, label: 'Staff calls tomorrow — lead is cold' },
  { icon: <CalendarX className="w-6 h-6" />, label: 'No reminder. No-show. Slot wasted' },
  { icon: <BadgeDollarSign className="w-6 h-6" />, label: 'Budget burns. Blame the ads' },
];

const withSteps = [
  { icon: <Target className="w-6 h-6" />, label: 'Ad built on a proven offer' },
  { icon: <Zap className="w-6 h-6" />, label: 'System triggers in 18 seconds' },
  { icon: <Bell className="w-6 h-6" />, label: 'Reminders at 24h, 2h, 15min' },
  { icon: <Handshake className="w-6 h-6" />, label: 'Prospect shows up warm and ready' },
  { icon: <TrendingUp className="w-6 h-6" />, label: 'Conversion data loops back to Meta' },
];

const ComparisonTable: React.FC<ComparisonTableProps> = ({ className }) => {
  return (
    <div className={cn('py-8 md:py-14 relative overflow-hidden bg-[#fafaf8]', className)}>
        <ScrollReveal className="text-center mb-16 relative z-10 px-4">
        <p className="text-[#E54D2E] text-lg sm:text-xl font-bold uppercase tracking-[0.2em] mb-4">Without vs With</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1110] mb-6 uppercase tracking-tight leading-tight">
          What Your Funnel Looks Like<br/>
          <span className="text-[#E54D2E]">Right Now vs After.</span>
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto font-medium leading-relaxed">
          You don't need a thousand words to understand the problem. This is it.
        </p>
      </ScrollReveal>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <ScrollReveal delay={0.1} className="relative h-full">
            <div className="bg-white border-2 border-neutral-200 p-5 sm:p-7 md:p-10 h-full flex flex-col shadow-[8px_8px_0_0_#111110]">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#140E0E] text-white">
                  <X className="w-5 h-5" strokeWidth={3} />
                  <span className="font-black uppercase tracking-wider text-sm">Without the System</span>
                </div>
              </div>

              <div className="relative space-y-4 flex-1">
                {withoutSteps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-5"
                  >
                    <div className="relative flex flex-col items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#fafaf8] border-2 border-neutral-200 flex items-center justify-center text-neutral-500">
                        {step.icon}
                      </div>
                      {i < withoutSteps.length - 1 && <div className="w-0.5 h-6 bg-neutral-200 my-2" />}
                    </div>
                    <div className="text-base sm:text-lg md:text-xl font-bold text-neutral-700">{step.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div className="mt-6 p-4 sm:p-6 md:p-8 bg-[#fafaf8] border-2 border-neutral-200 text-center" whileHover={{ scale: 1.01 }}>
                <div className="text-neutral-500 text-base sm:text-lg uppercase tracking-widest font-black mb-2">Average Show Rate</div>
                <motion.div
                  className="text-4xl sm:text-5xl md:text-7xl font-black text-[#1A1110]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.4 }}
                >
                  28%
                </motion.div>
              </motion.div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="relative h-full">
            <div className="bg-[#140E0E] text-white p-5 sm:p-7 md:p-10 h-full flex flex-col shadow-[8px_8px_0_0_#E54D2E]">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E54D2E] text-white">
                  <Check className="w-5 h-5" strokeWidth={3} />
                  <span className="font-black uppercase tracking-wider text-sm">With the Wajdan System</span>
                </div>
              </div>

              <div className="relative space-y-4 flex-1">
                {withSteps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-5"
                  >
                    <div className="relative flex flex-col items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#E54D2E]/15 border-2 border-[#E54D2E] flex items-center justify-center text-[#E54D2E]">
                        {step.icon}
                      </div>
                      {i < withSteps.length - 1 && <div className="w-0.5 h-6 bg-[#E54D2E]/40 my-2" />}
                    </div>
                    <div className="text-base sm:text-lg md:text-xl font-bold text-white">{step.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div className="mt-6 p-4 sm:p-6 md:p-8 bg-[#E54D2E]/10 border-2 border-[#E54D2E] text-center" whileHover={{ scale: 1.01 }}>
                <div className="text-[#E54D2E] text-base sm:text-lg uppercase tracking-widest font-black mb-2">After the System</div>
                <motion.div
                  className="text-4xl sm:text-5xl md:text-7xl font-black text-[#E54D2E]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.4 }}
                >
                  84%
                </motion.div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.4} className="mt-16 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {[
              { value: '3×', label: 'More Bookings' },
              { value: '18s', label: 'Response Time' },
              { value: '40%', label: 'Lower Cost' },
              { value: '60', label: 'Days to ROI' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04, y: -4 }}
                className="bg-white border-2 border-neutral-200 hover:border-[#E54D2E]/40 transition-colors p-4 sm:p-5 md:p-8 text-center"
              >
                <motion.div
                  className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 tracking-tighter text-[#E54D2E]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring', delay: i * 0.08 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-neutral-700 font-black uppercase tracking-wider text-xs md:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export { ComparisonTable };
