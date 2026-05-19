"use client";

import { ArrowRight, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";
import { UrgencyPopover } from "@/components/ui/urgency-popover";

/*
 * Hero is stacked vertically:
 *  - Top: niche badge, headline, subheadline, CTAs, urgency, trust strip.
 *  - Bottom: always-on inline VSL with mute toggle + LiveActivityFeed below it.
 *
 * The video autoplays muted, loops, and is `playsInline` so iOS doesn't
 * fullscreen it. Swap the `src` for the real VSL the moment Wajdan delivers
 * it — no other markup change needed.
 */
export const WajdanHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <section className="relative overflow-hidden bg-background pt-20 md:pt-24 pb-10">
      {/* Subtle grid backdrop */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center">
        {/* ───── Top copy area ───── */}
        <div className="flex flex-col items-center text-center w-full max-w-6xl">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 text-xs md:text-sm font-bold tracking-widest text-[#E54D2E] uppercase bg-orange-50 border border-[#E54D2E]/30 shadow-sm animate-fade-in">
            For Consultancies
          </div>

          <h1 className="vt-hero-headline font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1A1110] tracking-tighter leading-[1.35] sm:leading-[1.35] md:leading-[1.35] lg:leading-[1.35] mb-6 max-w-4xl animate-slide-up animation-delay-100 uppercase">
            We Build The Most <span className="text-[#E54D2E]">Ruthless & Effective System</span> for Rapid Scaling of Consultation Firms — In <span className="text-[#E54D2E]">60 Days</span>.
          </h1>

          <p className="text-lg sm:text-xl md:text-xl text-neutral-700 font-medium max-w-3xl mb-8 animate-slide-up animation-delay-200 leading-loose">
            While every other agency sells you leads and disappears — we build the complete infrastructure that turns Meta traffic into qualified, pre-nurtured, showed-up consultation bookings.
            <span className="block mt-3 font-black uppercase tracking-tight text-[#1A1110] bg-yellow-200/60 px-2 py-1 -rotate-1 inline-block">
              Or we work for free.
            </span>
          </p>

          <div className="flex flex-col gap-6 w-full max-w-4xl mb-12 animate-slide-up animation-delay-200">
            <div className="relative bg-[#140E0E] shadow-[12px_12px_0_0_#E54D2E] border-2 border-[#111110]">
              <div className="relative aspect-video w-full overflow-hidden">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  poster="/placeholder.svg"
                  src="https://cdn.coverr.co/videos/coverr-typing-on-the-laptop-2330/1080p.mp4"
                  aria-label="Wajdan system walkthrough"
                />

                {/* Top-left running badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#E54D2E] text-white px-3 py-1.5 shadow-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest">Live Demo</span>
                </div>

                {/* Mute toggle */}
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={muted ? 'Unmute video' : 'Mute video'}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/95 hover:bg-white transition-colors flex items-center justify-center shadow-md"
                >
                  {muted ? (
                    <VolumeX className="w-5 h-5 text-[#1A1110]" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-[#E54D2E]" />
                  )}
                </button>

                <div className="absolute inset-0 bg-gradient-to-t from-[#111110]/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-5 pointer-events-none">
                  <p className="text-[#E54D2E] text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-1">
                    Wajdan System Walkthrough — 3 min
                  </p>
                  <p className="text-white text-sm md:text-base font-bold leading-tight">
                    How we build the complete acquisition machine.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full max-w-lg mb-6 animate-slide-up animation-delay-300">
            <a
              href="#contact"
              className="vt-cta group relative inline-flex items-center justify-center gap-2 px-7 py-4 text-base md:text-lg font-black text-white bg-[#140E0E] shadow-[0_4px_0_0_#E54D2E] hover:shadow-none hover:translate-y-1 transition-all uppercase tracking-wide"
            >
              Show Me What's Broken — Free
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#system"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base md:text-lg font-black text-[#1A1110] bg-white border-2 border-neutral-200 hover:border-[#E54D2E] transition-all uppercase tracking-wide"
            >
              See The System
            </a>
          </div>

          <div className="mb-10 animate-slide-up animation-delay-300">
            <UrgencyPopover />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 pt-8 border-t-2 border-neutral-200 w-full animate-slide-up animation-delay-400">
            {[
              '60-day booking quality commitment',
              'No long-term contracts',
              'Based in Europe',
              'Built for consultation firms only',
            ].map((label) => (
              <div key={label} className="flex flex-col gap-2">
                <span className="w-8 h-1 bg-[#E54D2E]" />
                <span className="text-sm md:text-base font-black text-[#1A1110] uppercase tracking-tight leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
