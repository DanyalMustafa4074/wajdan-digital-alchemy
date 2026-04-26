"use client";

import { ArrowRight, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";
import { UrgencyPopover } from "@/components/ui/urgency-popover";
import { LiveActivityFeed } from "@/components/ui/live-activity-feed";

/*
 * Hero is now split into two columns on lg+:
 *  - Left: niche badge, headline, subheadline, CTAs, urgency, trust strip.
 *  - Right: always-on inline VSL with mute toggle + LiveActivityFeed below it.
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
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background pt-24 md:pt-28 pb-16">
      {/* Subtle grid backdrop */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          {/* ───── Left column: copy + CTAs ───── */}
          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center px-4 py-1.5 mb-6 text-xs md:text-sm font-bold tracking-widest text-[#cf5230] uppercase bg-orange-50 border border-[#cf5230]/30 shadow-sm animate-fade-in">
              For Immigration & Education Consultancies
            </div>

            <h1 className="vt-hero-headline text-4xl md:text-5xl lg:text-6xl font-black text-[#111110] tracking-tighter leading-[1.05] mb-6 animate-slide-up animation-delay-100 uppercase">
              We Build The Most <span className="text-[#cf5230]">Ruthless & Effective System</span> for Rapid Scaling of Consultation Firms — In <span className="text-[#cf5230]">60 Days</span>.
            </h1>

            <p className="text-lg md:text-xl text-neutral-700 font-medium max-w-xl mb-8 animate-slide-up animation-delay-200 leading-relaxed">
              While every other agency sells you leads and disappears — we build the complete infrastructure that turns Meta traffic into qualified, pre-nurtured, showed-up consultation bookings.
              <span className="block mt-3 font-black uppercase tracking-tight text-[#111110] bg-yellow-200/60 px-2 py-1 -rotate-1 inline-block">
                Or we work for free.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full max-w-lg mb-6 animate-slide-up animation-delay-300">
              <a
                href="#contact"
                className="vt-cta group relative inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-black text-white bg-[#111110] shadow-[0_4px_0_0_#cf5230] hover:bg-[#cf5230] hover:shadow-none hover:translate-y-1 transition-all uppercase tracking-wide"
              >
                Show Me What's Broken — Free
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#system"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-black text-[#111110] bg-white border-2 border-neutral-200 hover:border-[#cf5230] transition-all uppercase tracking-wide"
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
                  <span className="w-8 h-1 bg-[#cf5230]" />
                  <span className="text-xs md:text-sm font-black text-[#111110] uppercase tracking-tight leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ───── Right column: always-on VSL + live feed ───── */}
          <div className="flex flex-col gap-6 w-full animate-slide-up animation-delay-200">
            <div className="relative bg-[#111110] shadow-[12px_12px_0_0_#cf5230] border-2 border-[#111110]">
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
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#cf5230] text-white px-3 py-1.5 shadow-md">
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
                    <VolumeX className="w-5 h-5 text-[#111110]" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-[#cf5230]" />
                  )}
                </button>

                <div className="absolute inset-0 bg-gradient-to-t from-[#111110]/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-5 pointer-events-none">
                  <p className="text-[#cf5230] text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-1">
                    Wajdan System Walkthrough — 3 min
                  </p>
                  <p className="text-white text-sm md:text-base font-bold leading-tight">
                    How we build the complete acquisition machine.
                  </p>
                </div>
              </div>
            </div>

            <LiveActivityFeed className="hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
};
