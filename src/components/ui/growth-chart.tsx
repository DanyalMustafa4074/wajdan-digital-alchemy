"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ScrollReveal } from './scroll-reveal';
import { TiltCard } from './tilt-card';

/*
 * King-Kong-inspired growth comparison chart.
 *
 * Two paths: the lower (lighter) line represents "without the system",
 * the upper (brand) line represents "with the system". The strokeDasharray
 * + framer-motion pathLength animates the draw-on. Markers and labels
 * fade in after the lines complete.
 */

export const GrowthChart: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <section className={cn('py-24 bg-[#fafaf8] overflow-hidden', className)}>
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal className="text-center mb-12">
          <p className="text-[#E54D2E] text-sm font-bold uppercase tracking-[0.2em] mb-4">The Curve That Closes</p>
          <h2 className="text-4xl md:text-6xl font-black text-[#1A1110] uppercase tracking-tighter leading-[0.95]">
            Same Ad Spend.<br />
            <span className="text-[#E54D2E]">Twice the Booked Calls.</span>
          </h2>
          <p className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto font-medium">
            What happens when leads stop falling through the cracks — and the algorithm finally optimises for clients, not form-fillers.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <TiltCard intensity={4} lift={18}>
          <div className="sd-reveal bg-white border-2 border-neutral-200 p-6 md:p-12 shadow-[8px_8px_0_0_#111110]">
            <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
              <svg
                viewBox="0 0 800 450"
                className="w-full h-full"
                preserveAspectRatio="xMidYMid meet"
                role="img"
                aria-label="Growth comparison chart: bookings over time"
              >
                {/* Grid */}
                <g stroke="#ececea" strokeWidth="1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <line key={`h-${i}`} x1="60" x2="760" y1={80 + i * 70} y2={80 + i * 70} />
                  ))}
                  {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                    <line key={`v-${i}`} x1={60 + i * 116} x2={60 + i * 116} y1="80" y2="360" />
                  ))}
                </g>

                {/* Axes */}
                <line x1="60" y1="360" x2="760" y2="360" stroke="#140E0E" strokeWidth="2" />
                <line x1="60" y1="80" x2="60" y2="360" stroke="#140E0E" strokeWidth="2" />

                {/* Y-axis label */}
                <text
                  transform="translate(28, 220) rotate(-90)"
                  fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
                  fontWeight="700"
                  fontSize="14"
                  fill="#140E0E"
                  letterSpacing="0.1em"
                  textAnchor="middle"
                >
                  QUALIFIED BOOKINGS
                </text>

                {/* X-axis label */}
                <text
                  x="410"
                  y="410"
                  fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
                  fontWeight="700"
                  fontSize="14"
                  fill="#140E0E"
                  letterSpacing="0.1em"
                  textAnchor="middle"
                >
                  60 DAYS AFTER LAUNCH
                </text>

                {/* Lower line — without the system (flat-ish) */}
                <motion.path
                  d="M 70 320 C 200 310, 360 305, 500 300 S 720 300, 750 305"
                  fill="none"
                  stroke="#9ca3af"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1.6, ease: 'easeOut' }}
                />

                {/* Upper line — with the system (steep growth) */}
                <motion.path
                  d="M 70 320 C 200 290, 320 220, 460 160 S 700 100, 750 90"
                  fill="none"
                  stroke="#E54D2E"
                  strokeWidth="6"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1.8, ease: 'easeOut', delay: 0.3 }}
                />

                {/* End-point markers + labels */}
                <motion.g
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: 1.8 }}
                >
                  <circle cx="750" cy="305" r="7" fill="#9ca3af" />
                  <text
                    x="715"
                    y="285"
                    fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
                    fontWeight="900"
                    fontSize="22"
                    fill="#6b7280"
                    textAnchor="end"
                  >
                    +4
                  </text>
                  <text
                    x="715"
                    y="310"
                    fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
                    fontWeight="700"
                    fontSize="11"
                    fill="#9ca3af"
                    letterSpacing="0.1em"
                    textAnchor="end"
                  >
                    WITHOUT
                  </text>
                </motion.g>

                <motion.g
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: 2.0 }}
                >
                  <circle cx="750" cy="90" r="9" fill="#E54D2E" />
                  <text
                    x="710"
                    y="65"
                    fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
                    fontWeight="900"
                    fontSize="32"
                    fill="#E54D2E"
                    textAnchor="end"
                  >
                    +18
                  </text>
                  <text
                    x="710"
                    y="105"
                    fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
                    fontWeight="700"
                    fontSize="12"
                    fill="#E54D2E"
                    letterSpacing="0.1em"
                    textAnchor="end"
                  >
                    WITH WAJDAN
                  </text>
                </motion.g>

                {/* Origin label */}
                <text
                  x="70"
                  y="345"
                  fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
                  fontWeight="700"
                  fontSize="11"
                  fill="#9ca3af"
                  letterSpacing="0.1em"
                >
                  DAY 0
                </text>
              </svg>
            </div>

            {/* Stat strip under chart */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t-2 border-neutral-200">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-[#E54D2E]">3×</div>
                <div className="text-xs md:text-sm font-black uppercase tracking-wider text-neutral-600 mt-1">
                  More Bookings
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-[#E54D2E]">84%</div>
                <div className="text-xs md:text-sm font-black uppercase tracking-wider text-neutral-600 mt-1">
                  Show Rate
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-[#E54D2E]">40%</div>
                <div className="text-xs md:text-sm font-black uppercase tracking-wider text-neutral-600 mt-1">
                  Lower Cost
                </div>
              </div>
            </div>
          </div>
          </TiltCard>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GrowthChart;
