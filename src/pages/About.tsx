"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, Target, Shield, TrendingUp } from "lucide-react";
import WajdanNavbar from "@/components/WajdanNavbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { TeamCarousel } from "@/components/ui/team-carousel";
import { TransitionLink } from "@/components/ui/transition-link";

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATS = [
  { value: "50+", label: "Consultancies Served" },
  { value: "12+", label: "Countries" },
  { value: "40%+", label: "Avg. Show-Rate Lift" },
  { value: "3×", label: "Avg. Lead-to-Call Ratio" },
];

const VALUES = [
  {
    icon: Target,
    title: "Results Over Optics",
    body: "We don't care about impressions, views, or vanity metrics. Every system we build is measured by one thing: did it put a qualified prospect in your calendar?",
  },
  {
    icon: Zap,
    title: "Speed Without Sloppiness",
    body: "The market doesn't wait. We move fast — but not at the expense of quality. Every funnel, sequence, and ad goes live tested, not guessed.",
  },
  {
    icon: Shield,
    title: "Full Ownership, Zero Excuses",
    body: "We treat your ad budget like it's ours. When something underperforms, we diagnose it, fix it, and tell you why — not hide it in a PDF report.",
  },
  {
    icon: TrendingUp,
    title: "Systems, Not Sprints",
    body: "We don't do one-off campaigns. We build compounding infrastructure — funnels, automations, and ad systems that get better every month.",
  },
];

const PRESS = [
  "Meta Business Partner",
  "Trusted in UAE, UK & Europe",
  "Consultancy Niche Specialists",
  "Performance-Based",
];

// ─── Component ────────────────────────────────────────────────────────────────

const About = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background">
      <WajdanNavbar theme="dark" />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#111110] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(250,250,248,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(250,250,248,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Orange glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#cf5230]/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#cf5230]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#cf5230] text-xs font-bold uppercase tracking-[0.25em] mb-6"
            >
              About Us
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-[#fafaf8] leading-none mb-4"
            >
              About
              <br />
              <span className="text-[#cf5230]">Wajdan</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-neutral-400 italic font-medium mb-10 max-w-xl"
            >
              digital alchemy for consultancies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap gap-3"
            >
              <TransitionLink
                to="/#pricing"
                className="inline-flex items-center gap-2 bg-[#cf5230] text-white px-7 py-3.5 rounded-xl font-black uppercase tracking-wider text-sm shadow-[0_4px_0_0_#8B3620] hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#8B3620] transition-all"
              >
                Work With Us
                <ArrowRight className="w-4 h-4" />
              </TransitionLink>
              <TransitionLink
                to="/services"
                className="inline-flex items-center gap-2 bg-white/5 text-[#fafaf8] border border-white/10 px-7 py-3.5 rounded-xl font-black uppercase tracking-wider text-sm hover:bg-white/10 transition-all"
              >
                Our Services
              </TransitionLink>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────────────────── */}
      <section className="bg-[#cf5230] py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y-2 md:divide-y-0 md:divide-x-2 divide-white/20">
            {STATS.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.08} direction="none">
                <div className="text-center md:px-8 py-2 md:py-0">
                  <p className="text-4xl md:text-5xl font-black text-white leading-none mb-1">
                    {s.value}
                  </p>
                  <p className="text-white/70 text-xs font-bold uppercase tracking-widest">
                    {s.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR STORY ────────────────────────────────────────────────────── */}
      <section className="bg-[#fafaf8] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left: copy */}
            <ScrollReveal direction="left">
              <div>
                <p className="text-[#cf5230] text-xs font-bold uppercase tracking-[0.25em] mb-6">
                  The Story
                </p>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-[#111110] leading-none mb-8">
                  We Built This
                  <br />
                  <em className="not-italic text-[#cf5230]">Out of Frustration.</em>
                </h2>

                <div className="space-y-5 text-[#111110]/70 text-base md:text-lg leading-loose">
                  <p>
                    You're good at what you do. Great, actually. Your clients get visas. Students land placements. Lives change.
                  </p>
                  <p>
                    But your calendar? It looks like a ghost town on Mondays. You're chasing leads that ghost you, paying agencies that vanish with your budget, and watching show-rates so low you might as well cancel the whole operation.
                  </p>
                  <p>
                    <strong className="text-[#111110] font-black">That's exactly why we built Wajdan Digital Alchemy.</strong>
                  </p>
                  <p>
                    We got tired of watching consultants — smart, expert people — struggle to grow because they were missing one thing: a system that predictably fills their calendar with qualified, pre-sold, showed-up prospects.
                  </p>
                  <p>
                    So we built it. And we've been deploying it across consultancies in the UK, UAE, Europe, and beyond ever since.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: callout + stats list */}
            <ScrollReveal direction="right" delay={0.15}>
              <div className="space-y-6">
                {/* Quote block */}
                <div className="bg-[#111110] rounded-2xl p-8 border-l-4 border-[#cf5230]">
                  <p className="text-[#fafaf8] text-lg md:text-xl font-medium leading-loose mb-4">
                    "Marketers lie. Numbers don't. Every system we deploy has been tested — on our own business first, then on our clients' businesses. We don't guess. We engineer."
                  </p>
                  <p className="text-[#cf5230] text-sm font-black uppercase tracking-widest">
                    — Wajdan, Founder
                  </p>
                </div>

                {/* Stats list */}
                <div className="bg-white border border-neutral-200 rounded-2xl p-7 shadow-sm">
                  <p className="text-[#111110] font-black uppercase text-xs tracking-widest mb-5">
                    Here's the short version:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "50+ consultancies served",
                      "12+ countries across UK, UAE & Europe",
                      "End-to-end: ads → funnel → automation → booking",
                      "Average 40%+ lift in consultation show-rates",
                      "Meta Business Partner certified",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#111110]/80 text-sm">
                        <span className="w-5 h-5 rounded-full bg-[#cf5230]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="w-2 h-2 rounded-full bg-[#cf5230] block" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Press strip */}
                <div className="flex flex-wrap gap-2">
                  {PRESS.map((p, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-[#111110]/5 border border-[#111110]/10 rounded-full text-[#111110]/60 text-xs font-bold uppercase tracking-wide"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── TEAM CAROUSEL ────────────────────────────────────────────────── */}
      <TeamCarousel />

      {/* ── VALUES / MISSION ─────────────────────────────────────────────── */}
      <section className="bg-[#fafaf8] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <p className="text-[#cf5230] text-xs font-bold uppercase tracking-[0.25em] mb-4">
                What We Stand For
              </p>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-[#111110] leading-none">
                Our Mission
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.1} className="grid sm:grid-cols-2 gap-6">
            {VALUES.map((v, i) => (
              <StaggerItem key={i}>
                <div className="bg-white border border-neutral-100 rounded-2xl p-8 shadow-sm hover:shadow-[0_8px_32px_rgba(207,82,48,0.08)] hover:-translate-y-1 transition-all duration-300 group h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#cf5230]/10 flex items-center justify-center mb-6 group-hover:bg-[#cf5230]/20 transition-colors">
                    <v.icon className="w-6 h-6 text-[#cf5230]" />
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-[#111110] mb-3">
                    {v.title}
                  </h3>
                  <p className="text-[#111110]/60 text-sm leading-loose">{v.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── SERVICES SNAPSHOT ────────────────────────────────────────────── */}
      <section className="bg-[#111110] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <p className="text-[#cf5230] text-xs font-bold uppercase tracking-[0.25em] mb-4">
                Our Offering
              </p>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-[#fafaf8] leading-none mb-6">
                One Complete
                <br />
                Growth System.
              </h2>
              <p className="text-neutral-400 text-base md:text-lg leading-loose mb-8">
                Every consultancy we work with gets the same thing — a fully integrated system, not disconnected tactics. Five layers that work together so your calendar fills itself.
              </p>
              <TransitionLink
                to="/services"
                className="inline-flex items-center gap-2 bg-[#cf5230] text-white px-7 py-3.5 rounded-xl font-black uppercase tracking-wider text-sm shadow-[0_4px_0_0_#8B3620] hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#8B3620] transition-all"
              >
                Explore Our Services
                <ArrowRight className="w-4 h-4" />
              </TransitionLink>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15}>
              <div className="space-y-3">
                {[
                  { num: "01", title: "Offer Strategy & Positioning", sub: "Make saying no feel foolish" },
                  { num: "02", title: "Sales Funnel Design & Build", sub: "Turn clicks into booked calls" },
                  { num: "03", title: "Marketing Automation", sub: "Nurture 24/7 without lifting a finger" },
                  { num: "04", title: "Paid Advertising Management", sub: "Meta ads that cost less and convert more" },
                  { num: "05", title: "Analytics & Optimisation", sub: "Every decision backed by data" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex items-center gap-5 bg-white/4 hover:bg-white/7 border border-white/6 rounded-xl px-6 py-4 group cursor-default transition-all"
                  >
                    <span className="text-[#cf5230] font-black text-sm font-mono flex-shrink-0">
                      {item.num}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[#fafaf8] font-black text-sm uppercase tracking-tight">
                        {item.title}
                      </p>
                      <p className="text-neutral-500 text-xs">{item.sub}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#cf5230] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-[#fafaf8] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <ScrollReveal>
            <p className="text-[#cf5230] text-xs font-bold uppercase tracking-[0.25em] mb-5">
              Ready?
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-[#111110] leading-none mb-6">
              Stop Chasing Leads.
              <br />
              <span className="text-[#cf5230]">Start Receiving Them.</span>
            </h2>
            <p className="text-[#111110]/60 text-lg md:text-xl mb-10 max-w-xl mx-auto leading-loose">
              Book a free strategy call. We'll audit your current acquisition setup and show you exactly where the gaps are — no fluff, no pitch decks, just clarity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <TransitionLink
                to="/#pricing"
                className="inline-flex items-center justify-center gap-2 bg-[#111110] text-[#fafaf8] px-9 py-4 rounded-xl font-black uppercase tracking-wider text-sm shadow-[0_4px_0_0_#cf5230] hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#cf5230] transition-all"
              >
                Book Your Strategy Call
                <ArrowRight className="w-4 h-4" />
              </TransitionLink>
              <TransitionLink
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#111110]/20 text-[#111110] px-9 py-4 rounded-xl font-black uppercase tracking-wider text-sm hover:border-[#cf5230] hover:text-[#cf5230] transition-all"
              >
                See Our Services
              </TransitionLink>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
