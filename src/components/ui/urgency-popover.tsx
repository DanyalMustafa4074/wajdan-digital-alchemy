"use client";

import React, { useId, useRef } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

/*
 * Native [popover] urgency notice. Browsers without popover support fall back
 * to a regular dismissible card via the JS toggle handler below.
 */

type PopoverElement = HTMLElement & {
  showPopover?: () => void;
  hidePopover?: () => void;
  popover?: string;
};

export const UrgencyPopover: React.FC<{ className?: string }> = ({ className }) => {
  const id = useId();
  const popoverId = `urgency-${id.replace(/[:]/g, '')}`;
  const ref = useRef<HTMLDivElement>(null);

  const togglePopover = (open: boolean) => {
    const el = ref.current as PopoverElement | null;
    if (!el) return;
    if (typeof el.showPopover === 'function' && typeof el.hidePopover === 'function') {
      try {
        if (open) el.showPopover();
        else el.hidePopover();
        return;
      } catch {
        /* fall through to JS toggle */
      }
    }
    el.style.display = open ? 'block' : 'none';
  };

  return (
    <>
      <motion.button
        type="button"
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => togglePopover(true)}
        // popovertarget activates the native control automatically.
        // @ts-expect-error popovertarget is a valid HTML attr not yet typed in React.
        popovertarget={popoverId}
        className={cn(
          'inline-flex items-center gap-2 px-4 py-2 bg-[#cf5230] text-white text-xs font-black uppercase tracking-widest shadow-[0_4px_0_0_#111110] hover:shadow-none hover:translate-y-1 transition-all',
          className,
        )}
      >
        <AlertTriangle className="w-4 h-4" />
        Only 6 spots / month
      </motion.button>

      <div
        ref={ref}
        id={popoverId}
        // @ts-expect-error popover attribute not yet typed in React.
        popover="auto"
        className="fixed inset-0 m-auto h-fit w-[min(90vw,28rem)] bg-white border-2 border-[#111110] shadow-[8px_8px_0_0_#cf5230] p-6"
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#cf5230]/10 border border-[#cf5230]/40 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-[#cf5230]" strokeWidth={2.5} />
            </div>
            <h3 className="text-lg font-black uppercase tracking-tight text-[#111110]">
              Strict capacity
            </h3>
          </div>
          <button
            type="button"
            onClick={() => togglePopover(false)}
            className="text-neutral-500 hover:text-[#111110] transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <p className="text-neutral-700 leading-relaxed mb-5">
          We onboard a maximum of <strong className="text-[#cf5230] font-black">6 consultancies</strong> each
          month so every system gets built properly. When the spots fill, the next intake opens the following month.
        </p>
        <a
          href="#contact"
          onClick={() => togglePopover(false)}
          className="inline-flex items-center gap-2 px-5 py-3 bg-[#111110] text-white font-black uppercase tracking-wider text-sm shadow-[0_4px_0_0_#cf5230] hover:shadow-none hover:translate-y-1 transition-all"
        >
          Apply for this month
        </a>
      </div>
    </>
  );
};

export default UrgencyPopover;
