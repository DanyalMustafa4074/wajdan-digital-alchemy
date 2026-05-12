"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image?: string;
  initials?: string;
}

const TEAM: TeamMember[] = [
  {
    id: 1,
    name: "Wajdan",
    role: "Founder & Chief Growth Architect",
    bio: "Built Wajdan Digital Alchemy from the ground up after watching too many great consultants lose clients to agencies that didn't deliver. Now channels that obsession into client acquisition systems that run 24/7, 365 — so consultants never have to chase leads again.",
    image: "/magnific_in-img2-change-person-dre_2954651202.png",
  },
  {
    id: 2,
    name: "Ahmad",
    role: "Head of Paid Acquisition",
    bio: "Manages six-figure monthly ad budgets across Meta for education consultants. Every dirham, pound, and rupee is engineered to convert — no spend leaves the account without a clear path to a booked call.",
    image: "/magnific_change-img1-bg-to-img2-bg_2954621788.png",
  },
  {
    id: 3,
    name: "Sara",
    role: "Automation & Nurture Architect",
    bio: "Architects the SMS, email, and WhatsApp sequences that keep leads warm and show-rates sky-high. If it can be automated without losing the human touch, she'll build it — and A/B test it twice.",
    initials: "SA",
  },
  {
    id: 4,
    name: "Zain",
    role: "Funnel & CRO Specialist",
    bio: "Every landing page, VSL script, and opt-in form has his fingerprints on it. Conversion-obsessed doesn't begin to cover it — he's the reason our client cost-per-booking keeps dropping quarter over quarter.",
    initials: "ZK",
  },
  {
    id: 5,
    name: "Mariam",
    role: "Offer & Positioning Strategist",
    bio: "Helps clients craft offers so compelling that prospects feel foolish saying no. Deep expertise in education niches across the UK, UAE, and Europe.",
    initials: "MR",
  },
];

const AUTOPLAY_MS = 5000;
const TICK_MS = 50;

export function TeamCarousel() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = TEAM.length;

  const advance = useCallback(
    (dir = 1) => {
      setDirection(dir);
      setActive((p) => ((p + dir) % total + total) % total);
      setProgress(0);
    },
    [total]
  );

  const goTo = (idx: number) => {
    const target = ((idx % total) + total) % total;
    setDirection(target > active ? 1 : -1);
    setActive(target);
    setProgress(0);
  };

  // Auto-play + progress ticker
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (tickRef.current) clearInterval(tickRef.current);
    setProgress(0);
    if (!playing) return;

    timerRef.current = setInterval(() => advance(1), AUTOPLAY_MS);
    tickRef.current = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + (TICK_MS / AUTOPLAY_MS) * 100));
    }, TICK_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (tickRef.current) clearInterval(tickRef.current);
    };
  }, [playing, advance]);

  const prev = TEAM[((active - 1) % total + total) % total];
  const curr = TEAM[active];
  const next = TEAM[(active + 1) % total];
  const prevPrev = TEAM[((active - 2) % total + total) % total];
  const nextNext = TEAM[(active + 2) % total];

  return (
    <section className="bg-[#111110] py-24 overflow-hidden relative">
      {/* Decorative arch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none select-none">
        <svg width="640" height="320" viewBox="0 0 640 320" fill="none">
          <path
            d="M0 320 A320 320 0 0 1 640 320"
            stroke="#cf5230"
            strokeWidth="1.5"
            strokeOpacity="0.25"
            fill="none"
          />
          <path
            d="M60 320 A260 260 0 0 1 580 320"
            stroke="#cf5230"
            strokeWidth="1"
            strokeOpacity="0.12"
            fill="none"
          />
        </svg>
      </div>

      {/* Heading */}
      <div className="text-center mb-14 px-4 relative z-10">
        <p className="text-[#cf5230] text-xs font-bold uppercase tracking-[0.25em] mb-4">
          The People
        </p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-[#fafaf8] leading-none mb-3">
          Meet The Architects
        </h2>
        <p className="text-lg md:text-xl text-neutral-500 italic font-medium">
          the people behind your growth system
        </p>
      </div>

      {/* Carousel row */}
      <div className="relative flex items-center justify-center gap-3 md:gap-4 px-4 overflow-hidden">
        {/* Prev-prev (desktop only, dimmed) */}
        <motion.div
          className="hidden xl:block flex-shrink-0 cursor-pointer"
          style={{ width: 160 }}
          onClick={() => advance(-1)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 0.4 }}
        >
          <ThumbCard member={prevPrev} dim />
        </motion.div>

        {/* Left arrow */}
        <button
          onClick={() => advance(-1)}
          aria-label="Previous team member"
          className="flex-shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/10 bg-white/5 backdrop-blur flex items-center justify-center text-white hover:border-[#cf5230] hover:bg-[#cf5230]/15 transition-all z-20"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Prev thumbnail */}
        <motion.div
          key={`prev-${active}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.6, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="flex-shrink-0 cursor-pointer"
          style={{ width: 180 }}
          onClick={() => advance(-1)}
        >
          <ThumbCard member={prev} />
        </motion.div>

        {/* Featured center card */}
        <div className="flex-1 max-w-[500px] flex-shrink-0">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={featuredVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <FeaturedCard member={curr} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next thumbnail */}
        <motion.div
          key={`next-${active}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.6, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="flex-shrink-0 cursor-pointer"
          style={{ width: 180 }}
          onClick={() => advance(1)}
        >
          <ThumbCard member={next} />
        </motion.div>

        {/* Right arrow */}
        <button
          onClick={() => advance(1)}
          aria-label="Next team member"
          className="flex-shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/10 bg-white/5 backdrop-blur flex items-center justify-center text-white hover:border-[#cf5230] hover:bg-[#cf5230]/15 transition-all z-20"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Next-next (desktop only, dimmed) */}
        <motion.div
          className="hidden xl:block flex-shrink-0 cursor-pointer"
          style={{ width: 160 }}
          onClick={() => advance(1)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 0.4 }}
        >
          <ThumbCard member={nextNext} dim />
        </motion.div>
      </div>

      {/* Controls bar */}
      <div className="max-w-2xl mx-auto px-6 mt-10 flex items-center gap-5">
        {/* Pause / Play */}
        <button
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Pause" : "Play"}
          className="w-14 h-14 rounded-full bg-[#fafaf8] flex-shrink-0 flex items-center justify-center shadow-[0_4px_0_0_#cf5230] hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#cf5230] transition-all"
        >
          {playing ? (
            <Pause className="w-5 h-5 text-[#111110]" />
          ) : (
            <Play className="w-5 h-5 text-[#111110] translate-x-0.5" />
          )}
        </button>

        {/* Progress bar */}
        <div className="flex-1 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#cf5230] rounded-full"
            style={{ width: `${progress}%`, transition: "width 0.05s linear" }}
          />
        </div>

        {/* Dot indicators */}
        <div className="flex gap-2 flex-shrink-0">
          {TEAM.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to team member ${i + 1}`}
              className={cn(
                "h-[6px] rounded-full transition-all duration-300",
                i === active
                  ? "w-6 bg-[#cf5230]"
                  : "w-[6px] bg-white/25 hover:bg-white/50"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Variants ────────────────────────────────────────────────────────────────

const featuredVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 80 : -80,
    scale: 0.96,
  }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -80 : 80,
    scale: 0.96,
  }),
};

// ─── FeaturedCard ─────────────────────────────────────────────────────────────

function FeaturedCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex h-[360px] md:h-[400px] rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(207,82,48,0.22)] border border-white/5">
      {/* Orange info panel */}
      <div
        className="w-[48%] flex-shrink-0 relative overflow-hidden flex flex-col justify-between p-6 md:p-8"
        style={{ backgroundColor: "#cf5230" }}
      >
        {/* Dot-grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Top: name + role */}
        <div className="relative z-10">
          <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-tight leading-tight mb-1">
            {member.name}
          </h3>
          <p className="text-white/60 text-[10px] md:text-xs font-semibold uppercase tracking-widest">
            {member.role}
          </p>
        </div>
        {/* Bottom: bio */}
        <p className="relative z-10 text-white/80 text-[11px] md:text-xs leading-loose">
          {member.bio}
        </p>
      </div>

      {/* Photo panel */}
      <div className="flex-1 bg-[#1a1a18] relative overflow-hidden">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1e1210] to-[#111110]">
            <span className="text-6xl md:text-7xl font-black text-[#cf5230]/35 leading-none select-none">
              {member.initials}
            </span>
          </div>
        )}
        {/* Subtle gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <p className="text-white/80 text-[10px] font-bold uppercase tracking-widest">
            {member.name}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── ThumbCard ────────────────────────────────────────────────────────────────

function ThumbCard({
  member,
  dim = false,
}: {
  member: TeamMember;
  dim?: boolean;
}) {
  return (
    <div
      className={cn(
        "h-[300px] md:h-[340px] rounded-2xl overflow-hidden relative group",
        dim && "opacity-50"
      )}
    >
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-[#1c1c1a] to-[#2a1510] flex items-center justify-center">
          <span className="text-5xl font-black text-[#cf5230]/30 select-none">
            {member.initials}
          </span>
        </div>
      )}
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-white text-sm font-black uppercase tracking-tight leading-tight">
          {member.name}
        </p>
        <p className="text-[#cf5230] text-[10px] font-medium">{member.role}</p>
      </div>
    </div>
  );
}
