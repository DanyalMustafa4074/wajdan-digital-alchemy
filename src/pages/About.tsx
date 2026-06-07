"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import WajdanNavbar from "@/components/WajdanNavbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { TransitionLink } from "@/components/ui/transition-link";

// ─── Team ─────────────────────────────────────────────────────────────────────

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string | null;
  initials?: string;
}

const TEAM: TeamMember[] = [
  {
    name: "Wajahat",
    role: "Chief Executive Officer",
    bio: "Drives vision and growth strategy for every client engagement. Wajahat ensures the full 5-layer system is built and delivering before results are ever promised.",
    image: "/team/Wajahat.webp",
  },
  {
    name: "Danyal",
    role: "Chief Operating Officer",
    bio: "Keeps operations tight across every client project — from onboarding to delivery, every milestone lands on time and nothing slips through the cracks.",
    image: "/team/Danyal.webp",
  },
  {
    name: "Rafay",
    role: "GHL Expert",
    bio: "Architects the GoHighLevel infrastructure: CRM pipelines, automation flows, missed-call text-back, and nurture sequences engineered to run 24/7.",
    image: null,
    initials: "RF",
  },
  {
    name: "Umar",
    role: "Project Manager",
    bio: "Coordinates every moving part across client builds — timelines, deliverables, and internal execution stay synchronized from day one to go-live.",
    image: "/team/Umar.webp",
  },
  {
    name: "Aiden",
    role: "Marketing Specialist",
    bio: "Researches markets and manages ad campaigns engineered to book qualified consultations — not just generate clicks and impressions.",
    image: "/team/Aiden.webp",
  },
  {
    name: "Xian",
    role: "Creative Director",
    bio: "Leads creative direction across all assets — landing pages, VSL scripts, and ad creatives built with one goal: conversion.",
    image: "/team/Xuan.webp",
  },
  {
    name: "Ahmad",
    role: "Video Editor",
    bio: "Produces the video assets that make offers undeniable — VSL edits, ad creatives, and scroll-stopping content that carries the brand.",
    image: "/team/Ahmad.webp",
  },
];

// ─── TeamCard ─────────────────────────────────────────────────────────────────

function TeamCard({
  member,
  featured = false,
}: {
  member: TeamMember;
  featured?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="group"
    >
      {/* Portrait */}
      <div
        className={`relative overflow-hidden bg-[#111] mb-5 ${
          featured ? "aspect-[4/5]" : "aspect-[4/5]"
        }`}
      >
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d]">
            <span className="text-7xl font-black text-white/10 select-none">
              {member.initials ?? member.name.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}
        {/* Subtle bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Text */}
      <div>
        <p className="text-[#fafaf8] text-xl font-light tracking-wide mb-0.5">
          {member.name} <span className="text-neutral-600">—</span>
        </p>
        <p className="text-[#fafaf8] text-xl font-bold mb-3">
          {member.role}
        </p>
        <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
          {member.bio}
        </p>
      </div>
    </motion.div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

const About = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#140E0E]">
      <WajdanNavbar theme="dark" />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#140E0E] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(250,250,248,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(250,250,248,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#E54D2E]/6 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E54D2E]/4 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10 text-center">

          {/* Stars strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-10 flex-wrap"
          >
            {[
              '"These guys know their craft"',
              '"Highly recommend"',
              '"250% increase in booked calls"',
            ].map((quote, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-[#E54D2E] text-[#E54D2E]" />
                  ))}
                </div>
                <span className="text-neutral-400 text-xs font-medium italic">{quote}</span>
              </div>
            ))}
          </motion.div>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg sm:text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            We're trying to make growing consultancies a whole lot easier, faster, and more
            predictable — for every consultant who deserves a full calendar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://funnel.wajdan.co/booking-page-page"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#E54D2E] text-white px-8 py-4 font-black uppercase tracking-wider text-base sm:text-lg md:text-xl shadow-[0_4px_0_0_#B83521] hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#B83521] transition-all"
            >
              Work With Us
              <ArrowRight className="w-4 h-4" />
            </a>
            <TransitionLink
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-white/5 text-[#fafaf8] border border-white/10 px-8 py-4 font-black uppercase tracking-wider text-base sm:text-lg md:text-xl hover:bg-white/10 transition-all"
            >
              See Our Services
            </TransitionLink>
          </motion.div>
        </div>
      </section>

      {/* ── STORY ────────────────────────────────────────────────────────── */}
      <section className="bg-[#fafaf8] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-8">

          {/* Updated date */}
          <ScrollReveal>
            <p className="text-neutral-400 text-base font-medium mb-10 border-b border-neutral-200 pb-5">
              Updated: 19th of May, 2026
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="space-y-6 text-[#1A1110] text-lg sm:text-xl md:text-2xl leading-relaxed">

              <p className="font-black text-xl md:text-2xl text-[#1A1110]">
                It looks like you like reading.
              </p>

              <p>
                Or researching. Or maybe a little bit of both.
              </p>

              <p>
                Either way — welcome.
              </p>

              <p className="text-[#E54D2E] font-bold text-lg md:text-xl">
                Your arrival here is probably not an accident.
              </p>

              <p>
                You run a consultancy. You're good at what you do — visas processed, students placed, lives changed.
              </p>

              <p>
                But somewhere between doing the work and growing the business, something broke.
              </p>

              <p>
                <strong className="font-black">Leads come in and ghost you.</strong>
              </p>

              <p>
                Show-rates are embarrassing. Your calendar looks like a ghost town on Monday morning.
              </p>

              <p>
                You hired an agency. They sent beautiful PDF reports. Your results didn't move.
              </p>

              <p>
                <strong className="font-black">You're here because you're done with that.</strong>
              </p>

              <p>
                Not hear our life story.
              </p>

              <p>
                So here's the short version...
              </p>

              {/* Stats block */}
              <div className="border-l-4 border-[#E54D2E] pl-6 my-8 space-y-4">
                <p>
                  We started Wajdan Digital Alchemy because we got tired of watching great
                  consultants bleed leads through broken funnels, while agencies collected retainers
                  and blamed the algorithm.
                </p>
                <p>
                  Since then, we've been building the exact system that fixes it.
                </p>

                <div className="bg-white border border-neutral-200 rounded-2xl p-7 shadow-sm mt-6">
                  <p className="text-[#1A1110] font-black uppercase text-sm tracking-widest mb-5">
                    Here's the stats:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "💼 50+ consultancies served across UK, UAE & Europe",
                      "📞 40%+ average lift in consultation show-rates",
                      "⚡ 18-second average lead response time after system build",
                      "📍 Active in 12+ countries",
                      "🔒 Zero long-term contracts — earned every month",
                    ].map((item, i) => (
                      <li key={i} className="text-[#1A1110]/80 text-base sm:text-lg md:text-xl leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="font-bold">The numbers don't lie.</p>
              </div>

              <p>
                And now, we're on a mission to make sure every consultancy that deserves a full calendar — gets one.
              </p>

              <p>
                But not by throwing more ads at the problem.
              </p>

              <p>
                By building the complete system. End to end. Offer. Funnel. Automation. Ads. Tracking.
              </p>

              <p>
                <strong className="font-black">All five layers. Built before a single lead hits it.</strong>
              </p>

              <p>
                Alright, but enough about us.
              </p>

              <p className="text-[#E54D2E] font-bold text-lg md:text-xl">
                We wanna know about you.
              </p>

              <p>And that begins with this button.</p>

            </div>
          </ScrollReveal>

          {/* CTA button */}
          <ScrollReveal delay={0.2}>
            <div className="mt-10">
              <a
                href="https://funnel.wajdan.co/booking-page-page"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-[#E54D2E] text-white px-8 py-5 font-black uppercase tracking-wider text-base shadow-[0_4px_0_0_#B83521] hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#B83521] transition-all text-center"
              >
                BOOK YOUR FREE STRATEGY CALL
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── OUR OFFERING / SERVICES ──────────────────────────────────────── */}
      <section className="bg-[#140E0E] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-8">

          <ScrollReveal className="text-center mb-14">
            <p className="text-[#E54D2E] text-xs font-black uppercase tracking-[0.25em] mb-4">
              Our Offering
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-[#fafaf8] leading-[1.05] mb-5">
              The complete system.
            </h2>
            <p className="text-neutral-400 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
              Every consultancy we work with gets one thing — a fully integrated 5-layer
              system. Not disconnected tactics.
            </p>
          </ScrollReveal>

          {/* Service cards */}
          <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                label: "HIRE US TO DO IT FOR YOU",
                title: "The Full System",
                desc: "We build your offer, funnel, automation, ad campaigns, and conversion tracking — all five layers — then run the machine month to month. You focus on closing. We fill the calendar.",
                cta: "See What's Included",
                href: "/services",
              },
              {
                label: "BOOK A FREE CALL",
                title: "Strategy Session",
                desc: "Not ready to commit? Book a free 30-minute call. We'll audit your current setup, identify the leaks, and show you exactly what needs to be built — no fluff, no pitch deck, just clarity.",
                cta: "Book Free Strategy Call",
                href: "https://funnel.wajdan.co/booking-page-page",
              },
            ].map((card, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="bg-[#1F1513] border border-white/8 rounded-2xl p-8 md:p-10 flex flex-col h-full"
                >
                  <p className="text-[#E54D2E] text-xs font-black uppercase tracking-[0.2em] mb-3">
                    {card.label}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-black text-[#fafaf8] uppercase tracking-tight mb-4 leading-[1.15]">
                    {card.title}
                  </h3>
                  <p className="text-neutral-400 text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 flex-1">
                    {card.desc}
                  </p>
                  <a
                    href={card.href}
                    target={card.href.startsWith('http') ? '_blank' : undefined}
                    rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center justify-center gap-2 bg-[#E54D2E] text-white px-7 py-4 font-black uppercase tracking-wider text-base md:text-lg shadow-[0_4px_0_0_#B83521] hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#B83521] transition-all"
                  >
                    {card.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* 5-layer strip */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { num: "01", name: "Offer Strategy" },
                { num: "02", name: "Funnel + VSL" },
                { num: "03", name: "GHL Automation" },
                { num: "04", name: "Meta Ads" },
                { num: "05", name: "Conversion Loop" },
              ].map((layer) => (
                <div
                  key={layer.num}
                  className="flex items-center gap-3 bg-white/4 border border-white/8 px-5 py-3 rounded-full"
                >
                  <span className="text-[#E54D2E] text-xs font-black">{layer.num}</span>
                  <span className="text-[#fafaf8] text-sm font-black uppercase tracking-tight">{layer.name}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#080808] border-t border-white/5 py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-8">

          <ScrollReveal className="text-center mb-16">
            <p className="text-[#E54D2E] text-xs font-black uppercase tracking-[0.25em] mb-3">
              From Our Network of Operators
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-[#fafaf8] leading-[1.05]">
              Key People &amp; Contributors
            </h2>
          </ScrollReveal>

          {/* Top row — CEO + COO full width */}
          <StaggerContainer staggerDelay={0.1} className="grid sm:grid-cols-2 gap-8 mb-8">
            {TEAM.slice(0, 2).map((member, i) => (
              <StaggerItem key={i}>
                <TeamCard member={member} featured />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Remaining members — 2-col grid */}
          <StaggerContainer staggerDelay={0.08} className="grid sm:grid-cols-2 gap-8">
            {TEAM.slice(2).map((member, i) => (
              <StaggerItem key={i}>
                <TeamCard member={member} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-[#fafaf8] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-[#E54D2E] text-xs font-black uppercase tracking-[0.25em] mb-6">
              I Guess What We're Trying To Say Is...
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-[#1A1110] leading-[1.3] mb-7">
              You should hit
              <br />
              <span className="text-[#E54D2E]">this button.</span>
            </h2>
            <p className="text-[#1A1110]/60 text-lg sm:text-xl md:text-2xl mb-12 max-w-xl mx-auto leading-relaxed">
              Book a free strategy call. We'll audit your current acquisition setup and show you
              exactly where the leaks are — no fluff, no pitch decks, just clarity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://funnel.wajdan.co/booking-page-page"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#140E0E] text-[#fafaf8] px-10 py-5 font-black uppercase tracking-wider text-base sm:text-lg md:text-xl shadow-[0_4px_0_0_#E54D2E] hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#E54D2E] transition-all"
              >
                Book Your Strategy Call
                <ArrowRight className="w-5 h-5" />
              </a>
              <TransitionLink
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#111110]/20 text-[#1A1110] px-10 py-5 font-black uppercase tracking-wider text-lg md:text-xl hover:border-[#E54D2E] hover:text-[#E54D2E] transition-all"
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
