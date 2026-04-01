import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowDown, Check, Star, Target, Video, Zap, Megaphone, TrendingUp, ChevronDown, Search, UserCheck, FileText, MessageSquare, TestTube, FileCheck, Clapperboard, Layout, PenTool, FormInput, Calendar, MonitorPlay, Bot, Mail, Bell, RefreshCw, BarChart3, Palette, FlaskConical, Activity, RotateCw, FileBarChart, Link2, CircleDot, Database, PieChart, Brain, LineChart } from 'lucide-react';
import WajdanNavbar from "@/components/WajdanNavbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { AnimatedCounter, StatsBar } from "@/components/ui/animated-counter";
import { ComparisonTable } from "@/components/ui/comparison-table";
import { PricingCards } from "@/components/ui/pricing-cards";
import { GuaranteeSection } from "@/components/ui/guarantee-section";
import { FinalCTA } from "@/components/ui/content-sections";
import { SystemTabsBar, SystemProgressIndicator, FloatingSystemNav } from "@/components/ui/system-tabs";
import { cn } from '@/lib/utils';

// System Layer Detailed Component
interface LayerFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface SystemLayerDetailProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: LayerFeature[];
  stats?: { value: string; label: string }[];
  ctaText: string;
  color: string;
  reversed?: boolean;
}

const SystemLayerDetail: React.FC<SystemLayerDetailProps> = ({
  number,
  title,
  subtitle,
  description,
  features,
  stats,
  ctaText,
  color,
  reversed = false,
}) => {
  const colorClasses = {
    orange: 'bg-brand-orange text-white border-brand-orange',
    green: 'bg-brand-orange text-white border-brand-orange',
    yellow: 'bg-brand-yellow text-brand-dark border-brand-yellow',
    blue: 'bg-brand-blue text-white border-brand-blue',
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className={cn("grid lg:grid-cols-2 gap-12 items-start", reversed && "lg:flex-row-reverse")}>
          {/* Content */}
          <ScrollReveal className={cn(reversed && "lg:order-2")}>
            <div className="inline-flex items-center gap-3 mb-6">
              <motion.div 
                className={cn(
                  "w-14 h-14 rounded-xl flex items-center justify-center text-xl font-bold shadow-lg",
                  colorClasses[color as keyof typeof colorClasses]
                )}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {number}
              </motion.div>
              <span className="text-gray-500 text-sm uppercase tracking-wider">Where every system begins</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {title}
            </h2>
            <h3 className="text-2xl text-brand-orange mb-6">
              {subtitle}
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              {description}
            </p>

            {stats && (
              <div className="flex flex-wrap gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-brand-orange">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white font-semibold rounded-xl hover:bg-brand-orange/90 transition-all shadow-lg shadow-brand-orange/25"
            >
              {ctaText}
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </ScrollReveal>

          {/* Features Grid */}
          <div className={cn(reversed && "lg:order-1")}>
            <StaggerContainer staggerDelay={0.1} className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="glass-card rounded-xl p-6 group hover-lift transition-all relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-orange mb-5 group-hover:bg-brand-orange/20 transition-colors shadow-inner">
                      {feature.icon}
                    </div>
                    <h4 className="relative z-10 font-bold text-white mb-3 text-lg">{feature.title}</h4>
                    <p className="relative z-10 text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">{feature.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <ScrollReveal delay={0.5} className="flex justify-center mt-12">
        <motion.a 
          href="#" 
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-brand-orange transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-sm">See the next layer</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.a>
      </ScrollReveal>
    </section>
  );
};

const Services = () => {
  const heroStats = [
    { value: 5, suffix: '', label: 'System layers', decimals: 0 },
    { value: 60, suffix: '', label: 'Days to results', decimals: 0 },
    { value: 18, suffix: 's', label: 'Lead response time', decimals: 0 },
    { value: 0, suffix: '', label: 'Long-term contracts', decimals: 0 },
  ];

  const systemTabs = [
    { num: '01', label: 'Offer Creation' },
    { num: '02', label: 'Funnel + VSL' },
    { num: '03', label: 'GHL + Automation' },
    { num: '04', label: 'Meta Campaigns' },
    { num: '05', label: 'Conversion Tracking' },
  ];

  const [activeTab, setActiveTab] = useState('01');

  return (
    <div className="min-h-screen bg-brand-dark">
      <WajdanNavbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="mesh-bg-brand" />
          <motion.div
            className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] opacity-70"
            animate={{
              backgroundPosition: ['0px 0px', '48px 48px'],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          
          {/* Floating Gradients & Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-brand-orange/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <span className="text-brand-orange font-semibold">The Complete System</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Not Services.
            <br />
            <span className="text-brand-orange">A System.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-10"
          >
            Most businesses lose clients not because demand is low — but because nothing was built to catch, 
            qualify, and convert the interest that already exists. We build the complete infrastructure that fixes that. End to end.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,107,53,0.35)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-brand-orange text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-orange/25"
            >
              Book a Free Funnel Audit
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            <a
              href="#layer-1"
              className="flex items-center gap-2 text-gray-400 hover:text-brand-orange transition-colors"
            >
              See the full system
              <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowDown className="w-4 h-4" />
              </motion.div>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <StatsBar stats={heroStats} />
          </motion.div>
        </div>
      </section>

      {/* System Tabs Navigation - Using Functional Component */}
      <SystemTabsBar />

      {/* Progress Indicator */}
      <SystemProgressIndicator />

      {/* Comparison Table */}
      <section className="bg-gradient-to-b from-brand-dark to-black">
        <div className="max-w-7xl mx-auto px-4">
          <ComparisonTable />
        </div>
      </section>

      {/* The Bricks Story */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <p className="text-gray-500 mb-8">Here's something nobody in this industry wants to say out loud.</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Most agencies sell you services the same way a builder sells you bricks.
            </h2>
            <p className="text-xl text-gray-400 italic mb-8">Here are your bricks. Good luck with the house.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <motion.div 
              className="bg-brand-dark/50 border border-brand-orange/20 rounded-2xl p-8 mb-8"
              whileHover={{ borderColor: 'rgba(255,107,53,0.5)' }}
            >
              <p className="text-xl text-white mb-2">The problem isn't the bricks.</p>
              <p className="text-2xl text-brand-orange font-bold">It's that nobody built the house.</p>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-gray-400 mb-6">
              You hired an agency that ran your Meta ads. The leads came in. Nothing was built to catch them, 
              qualify them, follow them up, pre-nurture them, or make sure they showed up.
            </p>
            <p className="text-white text-lg mb-6">You paid for bricks. You needed a house.</p>
            <p className="text-gray-500 italic mb-8">
              (And before you ask — yes, we've seen this exact situation more times than we can count. 
              Same story. Different consultancy. Different agency. But the same missing infrastructure.)
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <motion.div 
              className="bg-red-950/30 border border-red-500/20 rounded-xl p-6 mb-8"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-xl text-gray-300 italic">
                "The leads are coming in. Why isn't anyone booking?"
              </p>
              <p className="text-brand-orange font-semibold mt-4">
                Because the system that was supposed to convert them was never actually built.
              </p>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <p className="text-xl text-white mb-4">This is why Wajdan doesn't sell services.</p>
            <motion.p 
              className="text-2xl text-brand-orange font-bold mb-6"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              We sell a system. And the system only works when every part of it exists.
            </motion.p>
            <div className="flex items-center justify-center gap-4 text-white text-xl font-bold">
              <span>Five layers.</span>
              <span className="text-brand-orange">One system.</span>
              <span className="text-brand-yellow">Zero gaps.</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.6} className="mt-8">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,107,53,0.35)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-orange/25"
            >
              Book a Free Funnel Audit
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </ScrollReveal>
        </div>
      </section>

      {/* Layer 1: Offer Creation */}
      <section id="layer-1" className="bg-gradient-to-b from-black to-brand-dark scroll-mt-32">
        <SystemLayerDetail
          number="01"
          title="The Offer."
          subtitle="The Sauce That Waters Every Client's Mouth."
          description="Most agencies start with the ad. We start with what the ad is selling. Because an ad for a bad offer is just expensive noise. Your leads are not bad because your targeting is wrong. They are not bad because your creative is weak. Your leads are bad because your offer is not compelling enough to attract serious people."
          features={[
            { icon: <Search className="w-5 h-5" />, title: "Market Research", description: "Forums, competitor reviews, client language, real pain points. We find the gap nobody is filling." },
            { icon: <Target className="w-5 h-5" />, title: "Competitor Audit", description: "We map what every other consultancy is saying. Then we figure out what they're all missing." },
            { icon: <PenTool className="w-5 h-5" />, title: "Offer Architecture", description: "The offer statement, the positioning, the framing — everything your prospect reads before they decide to trust you." },
            { icon: <MessageSquare className="w-5 h-5" />, title: "Messaging Framework", description: "Every headline, hook, and pain point — in language your ideal client actually uses. Not agency language." },
            { icon: <TestTube className="w-5 h-5" />, title: "Offer Validation", description: "We stress-test the offer before it goes live. Does it survive contact with a real objection? We make sure it does." },
            { icon: <FileCheck className="w-5 h-5" />, title: "Foundation Brief", description: "Everything documented and handed to every other part of the system. The offer becomes the DNA of the funnel, the VSL, and the ads." },
          ]}
          ctaText="Get Your Offer Built"
          color="orange"
        />
      </section>

      {/* Layer 2: Landing Page + VSL */}
      <section id="layer-2" className="bg-brand-dark border-t border-brand-orange/10 scroll-mt-32">
        <SystemLayerDetail
          number="02"
          title="Landing Page + VSL."
          subtitle="Not a Template. The Ambush."
          description="By the time your prospect fills the form — they should already trust you, believe in your system, and be half-sold. If that's not happening, your funnel is a speed bump, not a conversion machine. Most landing pages in this industry are embarrassing. A headline. A stock photo. Three bullet points. A form. A Submit button. And everyone wonders why conversion rate is 8%."
          features={[
            { icon: <Clapperboard className="w-5 h-5" />, title: "VSL Script", description: "Full word-for-word script. Hook, pain, reframe, system, guarantee, CTA. Written in your voice." },
            { icon: <Layout className="w-5 h-5" />, title: "Landing Page Design", description: "Custom designed for your offer and your market. Not a template. Built to convert your specific prospect." },
            { icon: <PenTool className="w-5 h-5" />, title: "Full Copywriting", description: "Every headline, subheading, pain point, proof point, and CTA. Written to persuade — not to describe." },
            { icon: <FormInput className="w-5 h-5" />, title: "Qualification Form", description: "Smart questions that qualify intent before the prospect reaches your calendar. Only serious people get through." },
            { icon: <Calendar className="w-5 h-5" />, title: "Booking Integration", description: "Calendar connected, confirmation page built, full flow tested before a single lead hits it." },
            { icon: <MonitorPlay className="w-5 h-5" />, title: "Thank-You Page + Video", description: "Post-booking nurture video that reduces no-shows before the day arrives. Most agencies skip this entirely." },
          ]}
          stats={[
            { value: "3×", label: "higher booking rate vs generic pages" },
            { value: "84%", label: "show rate after VSL + pre-nurture" },
            { value: "40%", label: "drop in cost per qualified booking" },
          ]}
          ctaText="Build My Funnel"
          color="green"
          reversed
        />
      </section>

      {/* Layer 3: GHL + Automation */}
      <section id="layer-3" className="bg-brand-dark border-t border-brand-orange/10 scroll-mt-32">
        <SystemLayerDetail
          number="03"
          title="GHL Pipeline + Automation."
          subtitle="Zero Cracks. Zero Excuses."
          description="Your team is human. Humans forget. Humans get busy. Humans respond 18 hours later. The system never does. And that difference is the difference between a booked consultation and a cold lead. A lead submits a form at 9:47pm. They're thinking about their visa. Their study application. Their business setup. They're warm. They're ready."
          features={[
            { icon: <Bot className="w-5 h-5" />, title: "Full GHL Build", description: "Complete GoHighLevel setup. Pipeline stages, contact tagging, lead routing. Built for your firm — not a snapshot." },
            { icon: <Zap className="w-5 h-5" />, title: "Instant SMS + Email", description: "30-second SMS. 2-minute email with agenda. Triggered the moment the form is submitted. Every time." },
            { icon: <Mail className="w-5 h-5" />, title: "Pre-Call Nurture Sequence", description: "48-hour email sequence that answers objections, builds trust, sets expectations. Makes showing up feel obvious." },
            { icon: <Bell className="w-5 h-5" />, title: "Reminder System", description: "24-hour, 2-hour, and 15-minute reminders. No-show rate drops dramatically. Because they actually remember." },
            { icon: <RefreshCw className="w-5 h-5" />, title: "Reactivation Flows", description: "For no-shows. For cold leads. For enquiries that never converted. The system keeps working after the human stops." },
            { icon: <BarChart3 className="w-5 h-5" />, title: "Pipeline Reporting", description: "Every lead at every stage. Who submitted. Who booked. Who showed. Who closed. No more guessing." },
          ]}
          ctaText="Build My Automation System"
          color="yellow"
        />
      </section>

      {/* Layer 4: Meta Campaigns */}
      <section id="layer-4" className="bg-brand-dark border-t border-brand-orange/10 scroll-mt-32">
        <SystemLayerDetail
          number="04"
          title="Meta Campaigns."
          subtitle="Now They Have Somewhere to Land."
          description="Most agencies start here. We end here. Because traffic without a system is just money leaving your account and going nowhere. Traffic into a complete system? That's a machine. By the time we turn on a Meta campaign — three things have already been built: the offer is proven, the funnel pre-warms every prospect, and the GHL system catches them the second they submit and never lets go."
          features={[
            { icon: <Palette className="w-5 h-5" />, title: "Creative Strategy", description: "Hook angles, ad copy, creative brief — built from the offer. Not recycled. Written for your market." },
            { icon: <Target className="w-5 h-5" />, title: "Campaign Architecture", description: "Cold traffic, retargeting, warm audiences. Each layer has a purpose. Nothing runs without a reason." },
            { icon: <FlaskConical className="w-5 h-5" />, title: "Creative Testing", description: "Multiple hooks. Multiple angles. Fast testing. Losers killed fast. Winners scaled. Budget goes where it works." },
            { icon: <Activity className="w-5 h-5" />, title: "Weekly Optimisation", description: "Not monthly. Because a week of a bad campaign costs real money. We watch the numbers every day." },
            { icon: <RotateCw className="w-5 h-5" />, title: "Retargeting Sequences", description: "Page visitors. VSL viewers. Form abandons. Everyone who showed interest gets a second chance to convert." },
            { icon: <FileBarChart className="w-5 h-5" />, title: "Weekly Reporting", description: "CPL, booked calls, show rate, qualified booking rate. Not impressions. The metrics that tell you if it's working." },
          ]}
          ctaText="Launch My Meta Campaign"
          color="blue"
          reversed
        />
      </section>

      {/* Layer 5: Conversion Data Loop */}
      <section id="layer-5" className="bg-brand-dark border-t border-brand-orange/10 scroll-mt-32">
        <SystemLayerDetail
          number="05"
          title="Conversion Data Back to Meta."
          subtitle="Campaigns That Compound."
          description="Most agencies stop at the lead. We close the loop. Every closed client fed back into Meta so the algorithm stops optimising for form fillers and starts optimising for people who actually pay. This layer is what makes the whole machine self-improving. Every month it costs less per real client. Every month the results get better. That's not hope — that's compound interest on your ad spend."
          features={[
            { icon: <Link2 className="w-5 h-5" />, title: "Conversions API Setup", description: "Server-side conversion tracking connected to your GHL. Every meaningful action reported back to Meta accurately." },
            { icon: <CircleDot className="w-5 h-5" />, title: "Custom Conversion Events", description: "Booked call, showed up, closed client — tracked separately. Not just \"lead.\" Revenue events." },
            { icon: <Database className="w-5 h-5" />, title: "GHL → Meta Data Loop", description: "Your CRM talks to Meta. When a lead closes — Meta knows. When a no-show is tagged — Meta learns." },
            { icon: <PieChart className="w-5 h-5" />, title: "Attribution Reporting", description: "Which campaigns produced paying clients. Not just leads. Revenue attribution. The real story." },
            { icon: <Brain className="w-5 h-5" />, title: "Lookalike Audience Building", description: "From actual closed clients — not form submitters. Meta finds people who look like your best customers." },
            { icon: <LineChart className="w-5 h-5" />, title: "Monthly Performance Review", description: "What Meta learned, how the campaign shifted, what the next optimisation move is. Never stops improving." },
          ]}
          ctaText="Get the Full System"
          color="green"
        />
      </section>

      {/* Five Layers Summary */}
      <section className="py-20 bg-gradient-to-b from-brand-dark to-black">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Five Layers. One Machine.
            </h2>
            <p className="text-gray-400">
              Remove any one layer and the whole thing leaks. This is the complete system — in the exact sequence we build it.
            </p>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-4">
            {[
                { num: '01', icon: <Target className="w-6 h-6 text-brand-orange" />, title: 'Offer Creation', desc: 'Before any ad spend' },
                { num: '02', icon: <Video className="w-6 h-6 text-brand-orange" />, title: 'Funnel + VSL', desc: 'Pre-warms every lead' },
                { num: '03', icon: <Zap className="w-6 h-6 text-brand-orange" />, title: 'GHL + Automation', desc: 'Zero cracks. Zero excuses.' },
                { num: '04', icon: <Megaphone className="w-6 h-6 text-brand-orange" />, title: 'Meta Campaigns', desc: 'Turned on last' },
                { num: '05', icon: <TrendingUp className="w-6 h-6 text-brand-orange" />, title: 'Conversion Loop', desc: 'Gets smarter every month' },
            ].map((layer, index) => (
              <ScrollReveal key={layer.num} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-brand-dark/50 border border-white/10 rounded-xl p-5 text-center min-w-[160px] cursor-pointer hover:border-brand-orange/30 transition-colors"
                >
                  <div className="flex justify-center mb-3">{layer.icon}</div>
                  <div className="text-sm font-bold text-white mb-1">{layer.title}</div>
                  <div className="text-xs text-gray-500">{layer.desc}</div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-black">
        <PricingCards />
      </section>

      {/* Guarantee Section */}
      <section className="bg-gradient-to-b from-black to-brand-dark">
        <GuaranteeSection />
      </section>

      {/* Final CTA */}
      <section id="contact" className="bg-brand-dark">
        <FinalCTA />
      </section>

      {/* Floating Navigation */}
      <FloatingSystemNav />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;


