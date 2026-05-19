"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import WajdanNavbar from "@/components/WajdanNavbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { TransitionLink } from "@/components/ui/transition-link";

// ─── Team ─────────────────────────────────────────────────────────────────────

const TEAM = [
  {
    name: "Wajdan",
    role: "Founder & Chief Growth Architect",
    bio: "Built Wajdan Digital Alchemy from the ground up after watching too many great consultants lose clients to agencies that never delivered. Now channels that obsession into 5-layer client acquisition systems that run 24/7 — so consultants never chase leads again.",
    image: "/magnific_in-img2-change-person-dre_2954651202.png",
  },
  {
    name: "Ahmad",
    role: "Head of Paid Acquisition",
    bio: "Manages six-figure monthly ad budgets across Meta for education consultants across the UK, UAE and Europe. Every dirham, pound and euro is engineered to convert — no spend leaves without a clear path to a booked call.",
    image: "/magnific_change-img1-bg-to-img2-bg_2954621788.png",
  },
];

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
            className="flex items-center justify-center gap-8 mb-10 flex-wrap"
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

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-[#fafaf8] leading-[1.0] mb-8"
          >
            The team
            <br />
            <span className="text-[#E54D2E]">behind the</span>
            <br />
            machine.
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-[1.75]"
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
            <TransitionLink
              to="/#pricing"
              className="inline-flex items-center justify-center gap-2 bg-[#E54D2E] text-white px-8 py-4 font-black uppercase tracking-wider text-sm shadow-[0_4px_0_0_#B83521] hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#B83521] transition-all"
            >
              Work With Us
              <ArrowRight className="w-4 h-4" />
            </TransitionLink>
            <TransitionLink
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-white/5 text-[#fafaf8] border border-white/10 px-8 py-4 font-black uppercase tracking-wider text-sm hover:bg-white/10 transition-all"
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
            <p className="text-neutral-400 text-sm font-medium mb-10 border-b border-neutral-200 pb-5">
              Updated: 19th of May, 2026
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="space-y-7 text-[#1A1110] text-lg md:text-xl leading-[1.8]">

              <p className="font-black text-2xl md:text-3xl text-[#1A1110]">
                It looks like you like reading.
              </p>

              <p>
                Or researching. Or maybe a little bit of both.
              </p>

              <p>
                Either way — welcome.
              </p>

              <p className="text-[#E54D2E] font-bold text-xl md:text-2xl">
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
                      <li key={i} className="text-[#1A1110]/80 text-base md:text-lg leading-relaxed">
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

              <p className="text-[#E54D2E] font-bold text-xl md:text-2xl">
                We wanna know about you.
              </p>

              <p>And that begins with this button.</p>

            </div>
          </ScrollReveal>

          {/* CTA button */}
          <ScrollReveal delay={0.2}>
            <div className="mt-10">
              <TransitionLink
                to="/#pricing"
                className="inline-flex items-center justify-center gap-2 w-full bg-[#E54D2E] text-white px-8 py-5 font-black uppercase tracking-wider text-base shadow-[0_4px_0_0_#B83521] hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#B83521] transition-all text-center"
              >
                BOOK YOUR FREE STRATEGY CALL
                <ArrowRight className="w-5 h-5" />
              </TransitionLink>
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
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-[#fafaf8] leading-[1.0] mb-5">
              The complete system.
            </h2>
            <p className="text-neutral-400 text-xl md:text-2xl max-w-2xl mx-auto leading-[1.75]">
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
                href: "/#pricing",
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
                  <h3 className="text-3xl md:text-4xl font-black text-[#fafaf8] uppercase tracking-tight mb-4 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-neutral-400 text-lg leading-[1.75] mb-8 flex-1">
                    {card.desc}
                  </p>
                  <TransitionLink
                    to={card.href}
                    className="inline-flex items-center justify-center gap-2 bg-[#E54D2E] text-white px-7 py-4 font-black uppercase tracking-wider text-sm shadow-[0_4px_0_0_#B83521] hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#B83521] transition-all"
                  >
                    {card.cta}
                    <ArrowRight className="w-4 h-4" />
                  </TransitionLink>
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
      <section className="bg-[#140E0E] border-t border-white/5 py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-8">

          <ScrollReveal className="text-center mb-14">
            <p className="text-[#E54D2E] text-xs font-black uppercase tracking-[0.25em] mb-4">
              The People
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-[#fafaf8] leading-[1.0] mb-3">
              Meet The Team
            </h2>
            <p className="text-neutral-500 text-xl md:text-2xl italic font-medium leading-relaxed">
              Two operators obsessed with one thing — filling your calendar.
            </p>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.15} className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {TEAM.map((member, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                  className="group flex flex-col items-center text-center"
                >
                  {/* Circular image */}
                  <div className="relative mb-6">
                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/10 group-hover:border-[#E54D2E]/50 transition-all duration-500 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                    {/* Orange ring on hover */}
                    <div className="absolute inset-0 rounded-full border-4 border-[#E54D2E] scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
                  </div>

                  {/* Name */}
                  <h3 className="text-2xl md:text-3xl font-black text-[#fafaf8] uppercase tracking-tight mb-1.5">
                    {member.name}
                  </h3>

                  {/* Role */}
                  <p className="text-[#E54D2E] text-xs font-black uppercase tracking-[0.2em] mb-4">
                    {member.role}
                  </p>

                  {/* Bio */}
                  <p className="text-neutral-400 text-base md:text-lg leading-[1.75] max-w-sm">
                    {member.bio}
                  </p>
                </motion.div>
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
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-[#1A1110] leading-[1.0] mb-7">
              You should hit
              <br />
              <span className="text-[#E54D2E]">this button.</span>
            </h2>
            <p className="text-[#1A1110]/60 text-xl md:text-2xl mb-12 max-w-xl mx-auto leading-[1.75]">
              Book a free strategy call. We'll audit your current acquisition setup and show you
              exactly where the leaks are — no fluff, no pitch decks, just clarity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <TransitionLink
                to="/#pricing"
                className="inline-flex items-center justify-center gap-2 bg-[#140E0E] text-[#fafaf8] px-10 py-5 font-black uppercase tracking-wider text-base shadow-[0_4px_0_0_#E54D2E] hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#E54D2E] transition-all"
              >
                Book Your Strategy Call
                <ArrowRight className="w-5 h-5" />
              </TransitionLink>
              <TransitionLink
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#111110]/20 text-[#1A1110] px-10 py-5 font-black uppercase tracking-wider text-base hover:border-[#E54D2E] hover:text-[#E54D2E] transition-all"
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
