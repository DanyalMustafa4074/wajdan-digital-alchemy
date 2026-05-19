"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ScrollReveal } from './scroll-reveal';
import { ClipboardList, MessageCircle, MailCheck, BellRing, CheckCircle2 } from 'lucide-react';

/*
 * Five-step lifecycle of a single lead through the Wajdan system.
 *
 * Each node fades up sequentially, then a brand pulse sweeps left-to-right
 * along the connector line — repeating forever — to show the system is
 * always running. Pairs nicely under the comparison table on the home
 * page or above pricing on the services page.
 */

interface PipelineStep {
  icon: React.ElementType;
  label: string;
  time: string;
}

const STEPS: PipelineStep[] = [
  { icon: ClipboardList, label: 'Form Submit',   time: '0s' },
  { icon: MessageCircle, label: 'SMS Confirm',   time: '18s' },
  { icon: MailCheck,     label: 'Pre-Nurture',   time: '2m' },
  { icon: BellRing,      label: 'Reminders',     time: '24h / 2h / 15m' },
  { icon: CheckCircle2,  label: 'Showed Up',     time: 'Closed' },
];

export const PipelineFlow: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <section className={cn('py-14 bg-white border-y-2 border-neutral-200', className)}>
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <p className="text-[#E54D2E] text-sm font-bold uppercase tracking-[0.2em] mb-4">
            What Actually Happens
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-[#1A1110] uppercase tracking-tighter leading-[0.95]">
            The Lead Lifecycle.<br />
            <span className="text-[#E54D2E]">Every Single Time.</span>
          </h2>
          <p className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto font-medium">
            From the second a prospect submits a form to the second they sit in front of you — automated, monitored, and impossible to forget.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="relative">
            {/* Connector — base + animated brand sweep */}
            <div
              aria-hidden
              className="absolute top-10 left-[10%] right-[10%] h-1 bg-neutral-200 hidden md:block"
            />
            <motion.div
              aria-hidden
              className="absolute top-10 left-[10%] h-1 bg-[#E54D2E] hidden md:block origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: [0, 1, 1, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
                times: [0, 0.6, 0.85, 1],
              }}
              style={{ width: '80%' }}
            />

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 relative">
              {STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
                    className="flex flex-col items-center text-center"
                  >
                    <motion.div
                      className="relative w-20 h-20 bg-white border-2 border-[#E54D2E] flex items-center justify-center mb-4 shadow-[0_4px_0_0_#111110]"
                      whileHover={{ y: -4 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Icon className="w-9 h-9 text-[#E54D2E]" strokeWidth={2.2} />
                      <span className="absolute -top-3 -right-3 bg-[#140E0E] text-white text-xs font-black px-2 py-0.5 uppercase tracking-wider">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </motion.div>
                    <p className="text-sm md:text-base font-black uppercase tracking-tight text-[#1A1110]">
                      {step.label}
                    </p>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#E54D2E] mt-1">
                      {step.time}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PipelineFlow;
