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
    bio: "Built Wajdan Digital Alchemy from the ground up after watching too many great consultants lose clients to agencies that didn't deliver. Now channels that obsession into client acquisition systems that run 24/7, 365 — so consultants never chase leads again.",
    image: "/magnific_in-img2-change-person-dre_2954651202.png",
  },
  {
    id: 2,
    name: "Ahmad",
    role: "Head of Paid Acquisition",
    bio: "Manages six-figure monthly ad budgets across Meta for immigration & education consultants. Every dirham, pound, and rupee is engineered to convert — no spend leaves the account without a clear path to a booked call.",
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
    bio: "Every landing page, VSL script, and opt-in form has his fingerprints on it. He's the reason our client cost-per-booking keeps dropping quarter over quarter.",
    initials: "ZK",
  },
  {
    id: 5,
    name: "Mariam",
    role: "Offer & Positioning Strategist",
    bio: "Helps clients craft offers so compelling that prospects feel foolish saying no. Deep expertise in immigration & education niches across the UK, UAE, and Europe.",
    initials: "MR",
  },
];

const AUTOPLAY_MS = 5000;
const TICK_MS = 50;

// ─── Framer variants for the center info card ────────────────────────────────
const infoCardVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    y: dir > 0 ? 30 : -30,
    scale: 0.95,
  }),
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.42, ease: [0.25, 0.4, 0.25, 1] },
  },
  exit: (dir: number) => ({
    opacity: 0,
    y: dir > 0 ? -30 : 30,
    scale: 0.95,
    transition: { duration: 0.28, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

// ─── Main export ─────────────────────────────────────────────────────────────
export function TeamCarousel() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = TEAM.length;

  const advance = useCallback(
    (dir: number) => {
      setDirection(dir);
      setActive((p) => ((p + dir) % total + total) % total);
      setProgress(0);
    },
    [total]
  );

  const goTo = (idx: number) => {
    const t = ((idx % total) + total) % total;
    setDirection(t > active ? 1 : -1);
    setActive(t);
    setProgress(0);
  };

  // Auto-play + progress
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (tickRef.current) clearInterval(tickRef.current);
    setProgress(0);
    if (!playing) return;
    timerRef.current = setInterval(() => advance(1), AUTOPLAY_MS);
    tickRef.current = setInterval(
      () =>
        setProgress((p) =>
          p >= 100 ? 0 : p + (TICK_MS / AUTOPLAY_MS) * 100
        ),
      TICK_MS
    );
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (tickRef.current) clearInterval(tickRef.current);
    };
  }, [playing, advance]);

  const slot = (offset: number) =>
    TEAM[((active + offset) % total + total) % total];

  return (
    <section className="bg-[#111110] py-20 md:py-28 overflow-hidden relative">
      {/* ── Arch decoration ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-80">
        <svg
          width="680"
          height="340"
          viewBox="0 0 680 340"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 340 A340 340 0 0 1 680 340"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M50 340 A290 290 0 0 1 630 340"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      {/* ── Section heading ── */}
      <div className="text-center mb-14 px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-light text-white leading-snug mb-1"
        >
          Meet the people behind
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl italic text-[#cf5230] font-light leading-snug"
        >
          your growth system
        </motion.p>
      </div>

      {/* ── Carousel row ── */}
      <div className="relative flex items-center justify-center gap-2 md:gap-3 px-2 md:px-6">

        {/* Left nav arrow */}
        <button
          onClick={() => advance(-1)}
          aria-label="Previous"
          className="flex-shrink-0 w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all z-20"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* ±2 photo card — desktop only, very dim, partially cropped */}
        <div
          className="hidden lg:block flex-shrink-0 cursor-pointer"
          style={{ width: 160, opacity: 0.2 }}
          onClick={() => advance(-1)}
        >
          <PhotoCard member={slot(-2)} height={300} />
        </div>

        {/* ±1 photo card — left */}
        <motion.div
          key={`prev-${active}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.55 }}
          className="flex-shrink-0 cursor-pointer hidden sm:block"
          style={{ width: 190 }}
          onClick={() => advance(-1)}
        >
          <PhotoCard member={slot(-1)} height={350} />
        </motion.div>

        {/* ── CENTER: active info card ── */}
        <div className="flex-shrink-0" style={{ width: 210, zIndex: 10 }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={infoCardVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <InfoCard member={TEAM[active]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ±1 photo card — right */}
        <motion.div
          key={`next-${active}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.55 }}
          className="flex-shrink-0 cursor-pointer hidden sm:block"
          style={{ width: 190 }}
          onClick={() => advance(1)}
        >
          <PhotoCard member={slot(1)} height={350} />
        </motion.div>

        {/* ±2 photo card — desktop only, very dim */}
        <div
          className="hidden lg:block flex-shrink-0 cursor-pointer"
          style={{ width: 160, opacity: 0.2 }}
          onClick={() => advance(1)}
        >
          <PhotoCard member={slot(2)} height={300} />
        </div>

        {/* Right nav arrow */}
        <button
          onClick={() => advance(1)}
          aria-label="Next"
          className="flex-shrink-0 w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all z-20"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* ── Controls: pause + progress ── */}
      <div className="flex items-center gap-5 max-w-3xl mx-auto mt-10 px-6 md:px-10">
        {/* Pause / Play — large white circle matching reference */}
        <button
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Pause" : "Play"}
          className="w-16 h-16 rounded-full bg-[#fafaf8] flex-shrink-0 flex items-center justify-center shadow-lg hover:scale-95 transition-transform"
        >
          {playing ? (
            <Pause className="w-6 h-6 text-[#111110]" />
          ) : (
            <Play className="w-6 h-6 text-[#111110] translate-x-0.5" />
          )}
        </button>

        {/* Thin progress bar — white on dark, matching reference */}
        <div className="flex-1 h-[3px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#fafaf8] rounded-full"
            style={{ width: `${progress}%`, transition: "width 0.05s linear" }}
          />
        </div>
      </div>

      {/* ── Dot indicators below progress ── */}
      <div className="flex justify-center gap-2 mt-5">
        {TEAM.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Team member ${i + 1}`}
            className={cn(
              "h-[5px] rounded-full transition-all duration-300",
              i === active
                ? "w-6 bg-[#cf5230]"
                : "w-[5px] bg-white/20 hover:bg-white/40"
            )}
          />
        ))}
      </div>
    </section>
  );
}

// ─── InfoCard: the active center card — colored bg, grid, name, bio ────────

function InfoCard({ member }: { member: TeamMember }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden flex flex-col justify-between"
      style={{
        height: 390,
        backgroundColor: "#cf5230",
      }}
    >
      {/* Dot-grid overlay matching Dribbble reference */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), " +
            "linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Top: name + role */}
      <div className="relative z-10 p-6 pb-0">
        <h3 className="text-xl font-black text-white uppercase tracking-tight leading-tight mb-1">
          {member.name}
        </h3>
        <p className="text-white/60 text-[11px] font-semibold uppercase tracking-widest">
          {member.role}
        </p>
      </div>

      {/* Bottom: bio */}
      <div className="relative z-10 p-6 pt-0">
        <p className="text-white/75 text-[12px] leading-relaxed">
          {member.bio}
        </p>
      </div>
    </div>
  );
}

// ─── PhotoCard: inactive side cards — portrait + always-visible name/role ──

function PhotoCard({
  member,
  height,
}: {
  member: TeamMember;
  height: number;
}) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden w-full"
      style={{ height }}
    >
      {/* Photo or initials placeholder */}
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-[#1c1c1a] to-[#2d1812] flex items-center justify-center">
          <span className="text-6xl font-black text-[#cf5230]/30 select-none">
            {member.initials}
          </span>
        </div>
      )}

      {/* Gradient overlay so text is always readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {/* Name + role — ALWAYS visible at bottom-left, matching reference */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-white font-bold text-sm leading-tight mb-0.5">
          {member.name}
        </p>
        <p className="text-white/50 text-[11px] font-medium">{member.role}</p>
      </div>
    </div>
  );
}
