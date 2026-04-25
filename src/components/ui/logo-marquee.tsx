"use client";

import React from 'react';
import { cn } from '@/lib/utils';

/*
 * Two-row infinite logo marquee — King Kong style.
 * Uses pure CSS keyframes for smoothness. Each row has its content duplicated
 * so translateX(-50%) loops seamlessly.
 *
 * Logos are presented as styled wordmarks rather than fetched brand assets to
 * avoid trademark issues until the client supplies real logos.
 */

interface LogoItem {
  name: string;
  /** Optional unicode/text mark to suggest the kind of brand visually */
  mark?: string;
}

const ROW_ONE: LogoItem[] = [
  { name: 'Visa Path Co.', mark: '✦' },
  { name: 'BorderBridge' },
  { name: 'Globescholar', mark: '◆' },
  { name: 'Migrant.io' },
  { name: 'Apex Education', mark: '▲' },
  { name: 'Northstar Visa', mark: '★' },
  { name: 'Atlas Consulting' },
  { name: 'Skyline Migrate', mark: '◇' },
];

const ROW_TWO: LogoItem[] = [
  { name: 'Pinnacle Education', mark: '⬢' },
  { name: 'Nimbus Visa Co.' },
  { name: 'Routeway', mark: '➤' },
  { name: 'Vanta Migration' },
  { name: 'Lumen Education', mark: '◉' },
  { name: 'Compass Consulting', mark: '✧' },
  { name: 'Beacon Visa' },
  { name: 'Crossroads', mark: '⟡' },
];

const LogoChip: React.FC<{ item: LogoItem }> = ({ item }) => (
  <div className="shrink-0 flex items-center gap-3 px-7 py-4 bg-white border border-neutral-200 hover:border-[#cf5230]/40 transition-colors mx-3 min-w-[200px] justify-center">
    {item.mark && <span className="text-[#cf5230] text-xl font-black">{item.mark}</span>}
    <span className="font-black uppercase tracking-tight text-[#111110] text-base whitespace-nowrap">
      {item.name}
    </span>
  </div>
);

export const LogoMarquee: React.FC<{ className?: string; eyebrow?: string; heading?: string }> = ({
  className,
  eyebrow = 'Trusted By',
  heading = 'Immigration & education consultancies across Europe, UAE & beyond',
}) => {
  return (
    <section className={cn('py-16 bg-[#fafaf8] overflow-hidden', className)}>
      <div className="max-w-6xl mx-auto px-4 text-center mb-10">
        <p className="text-[#cf5230] text-sm font-bold uppercase tracking-[0.2em] mb-3">{eyebrow}</p>
        <h3 className="text-2xl md:text-3xl font-black text-[#111110] uppercase tracking-tight max-w-3xl mx-auto leading-tight">
          {heading}
        </h3>
      </div>

      <div className="relative">
        <div
          className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-[#fafaf8] to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-[#fafaf8] to-transparent"
          aria-hidden
        />

        <div className="space-y-4">
          <div className="flex marquee-track-left" aria-hidden>
            {[...ROW_ONE, ...ROW_ONE].map((item, i) => (
              <LogoChip key={`r1-${i}`} item={item} />
            ))}
          </div>
          <div className="flex marquee-track-right" aria-hidden>
            {[...ROW_TWO, ...ROW_TWO].map((item, i) => (
              <LogoChip key={`r2-${i}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
