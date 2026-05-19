"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Phone, Calendar, CheckCircle2, MessageCircle, MailCheck, BellRing } from 'lucide-react';

/*
 * Simulated live activity tile — King-Kong style social proof in motion.
 *
 * Cycles through realistic system events (lead booked, no-show recovered,
 * SMS sent...) every few seconds so the page feels "alive". Pure
 * presentational; no API calls. Replace `EVENTS` with a real feed when
 * the client connects analytics.
 */

interface ActivityEvent {
  id: string;
  icon: React.ElementType;
  label: string;
  detail: string;
  ago: string;
}

const EVENTS: ActivityEvent[] = [
  { id: 'a', icon: Calendar,      label: 'Consultation booked',     detail: 'Skilled Worker — Toronto',  ago: 'just now' },
  { id: 'b', icon: MessageCircle, label: 'SMS sent in 18s',         detail: 'New lead from Meta',        ago: '12s ago' },
  { id: 'c', icon: BellRing,      label: 'Reminder fired',          detail: '15-min pre-call ping',      ago: '38s ago' },
  { id: 'd', icon: Phone,         label: 'Showed up to call',       detail: 'Student Visa — Dubai',      ago: '1m ago' },
  { id: 'e', icon: MailCheck,     label: 'Pre-nurture delivered',   detail: 'Objection FAQ #2',          ago: '2m ago' },
  { id: 'f', icon: CheckCircle2,  label: 'Closed client',           detail: 'PR Pathway — Manchester',   ago: '4m ago' },
];

export const LiveActivityFeed: React.FC<{ className?: string }> = ({ className }) => {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 2400);
    return () => clearInterval(id);
  }, []);

  // Always show a window of three events; rotate which three by tick.
  const start = tick % EVENTS.length;
  const visible = [0, 1, 2].map((i) => EVENTS[(start + i) % EVENTS.length]);

  return (
    <div
      className={cn(
        'bg-white border-2 border-neutral-200 shadow-[8px_8px_0_0_#E54D2E] p-5 w-full max-w-md',
        className,
      )}
      aria-live="polite"
    >
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-200">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E54D2E] opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#E54D2E]" />
          </span>
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#1A1110]">
            Live System
          </span>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">
          Last 5 min
        </span>
      </div>

      <ul className="space-y-2">
        <AnimatePresence initial={false} mode="popLayout">
          {visible.map((event, i) => {
            const Icon = event.icon;
            return (
              <motion.li
                key={`${event.id}-${tick}-${i}`}
                layout
                initial={{ opacity: 0, y: -10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 14, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 p-3 bg-[#fafaf8] border border-neutral-200"
              >
                <div className="w-9 h-9 bg-white border border-[#E54D2E]/30 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-[#E54D2E]" strokeWidth={2.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-black text-[#1A1110] uppercase tracking-tight truncate">
                    {event.label}
                  </p>
                  <p className="text-xs font-medium text-neutral-600 truncate">
                    {event.detail}
                  </p>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 whitespace-nowrap">
                  {event.ago}
                </span>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default LiveActivityFeed;
