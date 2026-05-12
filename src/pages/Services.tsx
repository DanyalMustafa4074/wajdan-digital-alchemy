"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowDown, Check, Star, Target, Video, Zap, Megaphone, TrendingUp, ChevronDown, Search, UserCheck, FileText, MessageSquare, TestTube, FileCheck, Clapperboard, Layout, PenTool, FormInput, Calendar, MonitorPlay, Bot, Mail, Bell, RefreshCw, BarChart3, Palette, FlaskConical, Activity, RotateCw, FileBarChart, Link2, CircleDot, Database, PieChart, Brain, LineChart } from 'lucide-react';
import Link from 'next/link';
import WajdanNavbar from "@/components/WajdanNavbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { AnimatedCounter, StatsBar } from "@/components/ui/animated-counter";
import { ComparisonTable } from "@/components/ui/comparison-table";
import { PricingCards } from "@/components/ui/pricing-cards";
import { GuaranteeSection } from "@/components/ui/guarantee-section";
import { FinalCTA } from "@/components/ui/content-sections";
import { SystemTabsBar, SystemProgressIndicator, FloatingSystemNav } from "@/components/ui/system-tabs";
import { LogoMarquee } from "@/components/ui/logo-marquee";
import { GrowthChart } from "@/components/ui/growth-chart";
import { PipelineFlow } from "@/components/ui/pipeline-flow";
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
  nextLayerId?: string;
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
  nextLayerId,
}) => {
  // Single brand accent — neutrals + rust orange.
  const colorClasses = {
    orange: 'bg-[#cf5230] text-white border-[#cf5230]',
    yellow: 'bg-[#cf5230] text-white border-[#cf5230]',
    green: 'bg-[#cf5230] text-white border-[#cf5230]',
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
              <span className="text-gray-600 text-sm uppercase tracking-wider">Where every system begins</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              {title}
            </h2>
            <h3 className="text-2xl text-brand-orange mb-6">
              {subtitle}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {description}
            </p>

            {stats && (
              <div className="flex flex-wrap gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-brand-orange">{stat.value}</div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-foreground font-semibold rounded-xl hover:bg-brand-orange/90 transition-all shadow-lg shadow-brand-orange/25"
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
                    
                    <div className="relative z-10 w-12 h-12 rounded-xl /5 flex items-center justify-center text-brand-orange mb-5 group-hover:bg-brand-orange/20 transition-colors shadow-inner">
                      {feature.icon}
                    </div>
                    <h4 className="relative z-10 font-bold text-foreground mb-3 text-lg">{feature.title}</h4>
                    <p className="relative z-10 text-sm text-muted-foreground group-hover:text-muted-foreground transition-colors leading-relaxed">{feature.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {nextLayerId && (
        <ScrollReveal delay={0.5} className="flex justify-center mt-12">
          <motion.a 
            href={`#${nextLayerId}`}
            className="flex flex-col items-center gap-2 text-gray-600 hover:text-brand-orange transition-colors"
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
      )}
    </section>
  );
};

const Services = () => {
  const heroStats = [
    { value: 5, suffix: '', label: 'System layers — all built before traffic goes live', decimals: 0 },
    { value: 60, suffix: '', label: 'Days to see measurable improvement — or we work free', decimals: 0 },
    { value: 18, suffix: 's', label: 'Average lead response time after system build', decimals: 0 },
    { value: 0, suffix: '', label: 'Long-term contracts. Month to month. Earned every month.', decimals: 0 }
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
    <div className="min-h-screen bg-background">
      <WajdanNavbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-10 md:pt-32 md:pb-20 overflow-hidden bg-[#fafaf8]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 md:mb-6"
          >
            <span className="text-[#cf5230] font-bold uppercase tracking-[0.2em] text-xs md:text-sm">The Complete System</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-[#111110] mb-5 md:mb-6 uppercase tracking-tight md:tracking-tighter leading-[0.95]"
          >
            Not Services.
            <br />
            <span className="text-[#cf5230]">A System.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed"
          >
            Most businesses lose clients not because demand is low — but because nothing was built to catch,
            qualify, and convert the interest that already exists. We build the complete infrastructure that fixes that. End to end.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center mb-10 md:mb-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center justify-center gap-2 px-6 sm:px-8 py-4 md:py-5 bg-[#111110] text-white font-black uppercase tracking-wider text-sm md:text-base transition-all shadow-[0_4px_0_0_#cf5230] hover:shadow-none hover:translate-y-1"
            >
              Book a Free Funnel Audit
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            <a
              href="#layer-1"
              className="flex items-center justify-center gap-2 text-neutral-700 hover:text-[#cf5230] transition-colors font-bold text-sm md:text-base"
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

      {/* Trusted-by logo marquee */}
      <LogoMarquee />

      {/* Lead lifecycle pipeline */}
      <PipelineFlow />

      {/* Comparison Table */}
      <section className="bg-background pt-12 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <ComparisonTable />
        </div>
      </section>

      {/* Layer 1: Offer Creation */}
      <section id="layer-1" className="bg-[#fafaf8] scroll-mt-32">
        <SystemLayerDetail
          number="01"
          nextLayerId="layer-2"
          title="The Offer."
          subtitle="The Sauce That Waters Every Client's Mouth."
          description="Most agencies start with the ad. We start with what the ad is selling. Because an ad for a bad offer is just expensive noise. Your leads are not bad because your targeting is wrong. They are not bad because your creative is weak. Your leads are bad because your offer is not compelling enough to attract serious people. An offer is not your service. An offer is what your ideal client is desperately searching for — phrased in their language, solving their exact pain — that nobody else in your market is giving them."
          features={[
              {
                icon: <Search className="w-6 h-6" />,
                title: "Market Research",
                description: "Forums, competitor reviews, client language, real pain points. We find the gap nobody is filling."
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Competitor Audit",
                description: "We map what every other consultancy is saying. Then we figure out what they're all missing."
              },
              {
                icon: <PenTool className="w-6 h-6" />,
                title: "Offer Architecture",
                description: "The offer statement, the positioning, the framing — everything your prospect reads before they decide whether to trust you."
              },
              {
                icon: <MessageSquare className="w-6 h-6" />,
                title: "Messaging Framework",
                description: "Every headline, hook, and pain point — in language your ideal client actually uses. Not agency language. Their language."
              },
              {
                icon: <TestTube className="w-6 h-6" />,
                title: "Offer Validation",
                description: "We stress-test the offer before it goes live. Does it survive contact with a real objection? We make sure it does."
              },
              {
                icon: <FileCheck className="w-6 h-6" />,
                title: "Foundation Brief",
                description: "Everything documented and handed to every other part of the system. The offer becomes the DNA of the funnel, the VSL, and the ads."
              }
          ]}
          ctaText="Get Your Offer Built"
          color="orange"
        />
      </section>

      {/* Layer 2: Landing Page + VSL */}
      <section id="layer-2" className="bg-white border-t border-neutral-200 scroll-mt-32">
        <SystemLayerDetail
          number="02"
          nextLayerId="layer-3"
          title="Landing Page + VSL."
          subtitle="Not a Template. The Ambush."
          description="By the time your prospect fills the form — they should already trust you, believe in your system, and be half-sold. If that's not happening, your funnel is a speed bump, not a conversion machine. Most landing pages in this industry are embarrassing. A headline. A stock photo. Three bullet points. A form. A Submit button. And everyone wonders why conversion rate is 8%. A real consultation funnel is an experience — not a page."
          features={[
              {
                icon: <Clapperboard className="w-6 h-6" />,
                title: "VSL Script",
                description: "Full word-for-word script. Hook, pain, reframe, system, guarantee, CTA. Written in your voice."
              },
              {
                icon: <Layout className="w-6 h-6" />,
                title: "Landing Page Design",
                description: "Custom designed for your offer and your market. Not a template. Built to convert your specific prospect."
              },
              {
                icon: <PenTool className="w-6 h-6" />,
                title: "Full Copywriting",
                description: "Every headline, subheading, pain point, proof point, and CTA. Written to persuade — not to describe."
              },
              {
                icon: <FormInput className="w-6 h-6" />,
                title: "Qualification Form",
                description: "Smart questions that qualify intent before the prospect reaches your calendar. Only serious people get through."
              },
              {
                icon: <Calendar className="w-6 h-6" />,
                title: "Booking Integration",
                description: "Calendar connected, confirmation page built, full flow tested before a single lead hits it."
              },
              {
                icon: <MonitorPlay className="w-6 h-6" />,
                title: "Thank-You Page + Video",
                description: "Post-booking nurture video that reduces no-shows before the day arrives. Most agencies skip this entirely."
              }
          ]}
          ctaText="Build My Funnel"
          color="green"
          reversed
        />
      </section>

      {/* Layer 3: GHL + Automation */}
      <section id="layer-3" className="bg-[#fafaf8] border-t border-neutral-200 scroll-mt-32">
        <SystemLayerDetail
            number="03"
            nextLayerId="layer-4"
            title="GHL Workspace Config."
            subtitle="The Net That Catches Everything."
            description="If you don't track it, you can't close it. And if you rely on staff to manually follow up with every lead, you are burning money. The human follow-up fails because humans have calendars. Software doesn't. Our GHL automation is the backbone of the system. Every lead captured. Every prospect nurtured. Every outcome tracked."
            features={[
              {
                icon: <Database className="w-6 h-6" />,
                title: "GHL Account Setup",
                description: "Full workspace configuration, custom pipelines, tagged stages. Built specifically for consultancies."
              },
              {
                icon: <Bot className="w-6 h-6" />,
                title: "Automated Nurture Sequences",
                description: "SMS & Email flows triggered the second a form is submitted."
              },
              {
                icon: <MessageSquare className="w-6 h-6" />,
                title: "Missed-Call Text Back",
                description: "Instantly messages anyone who calls your office while your staff is busy."
              },
              {
                icon: <Bell className="w-6 h-6" />,
                title: "Appointment Reminders",
                description: "24h, 2h, and 15m automated reminders. Drops no-shows to near zero."
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: "Review Management",
                description: "Automated request to satisfied clients to boost your Google My Business ranking."
              },
              {
                icon: <UserCheck className="w-6 h-6" />,
                title: "Staff Training & Handover",
                description: "We don't just build it. We teach your team how to use it."
              }
            ]}
            ctaText="Automate My Backend"
            color="green"
          />
      </section>

      {/* Layer 4: Meta Ads */}
      <section id="layer-4" className="bg-white border-t border-neutral-200 scroll-mt-32">
        <SystemLayerDetail
            number="04"
            nextLayerId="cta"
            title="Meta Ads + Retargeting."
            subtitle="Fuel For The Engine."
            description="You don't need 'more followers' and you don't need 'brand awareness'. You need people sitting in front of you with their credit cards. We build direct-response Meta campaigns designed for one outcome: pushing qualified traffic into the funnel we just built. We run the traffic. The offer gets the click. The funnel books the call. The automation gets them to show up."
            features={[
              {
                icon: <Target className="w-6 h-6" />,
                title: "Campaign Strategy",
                description: "Objective-driven ad strategy using CBOs and precise audience segmentation."
              },
              {
                icon: <Palette className="w-6 h-6" />,
                title: "Ad Creative & Copy",
                description: "Scrolling-stopping visuals combined with direct-response copywriting."
              },
              {
                icon: <RotateCw className="w-6 h-6" />,
                title: "Retargeting Architecture",
                description: "Specific ad sequences tailored for people who clicked but didn't book."
              },
              {
                icon: <Link2 className="w-6 h-6" />,
                title: "Meta Pixel & CAPI Implementation",
                description: "Server-side tracking to ensure no data is lost to iOS updates."
              },
              {
                icon: <FlaskConical className="w-6 h-6" />,
                title: "A/B Split Testing",
                description: "Continuous testing of hooks, headlines, and creatives to lower acquisition costs."
              },
              {
                icon: <Activity className="w-6 h-6" />,
                title: "Weekly Performance Alignment",
                description: "Transparent reporting. We show you the cost per booking, not vanity metrics."
              }
            ]}
            ctaText="Start Getting Leads"
            color="orange"
            reversed={true}
          />
      </section>

      {/* Layer 5: Tracking */}
      <section id="layer-5" className="bg-[#fafaf8] border-t border-neutral-200 scroll-mt-32">
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
      <section className="py-20 bg-[#fafaf8]">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-[#111110] mb-4 uppercase tracking-tight">
              Five Layers. <span className="text-[#cf5230]">One Machine.</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Remove any one layer and the whole thing leaks. This is the complete system — in the exact sequence we build it.
            </p>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-4">
            {[
                { num: '01', icon: <Target className="w-6 h-6 text-[#cf5230]" />, title: 'Offer Creation', desc: 'Before any ad spend' },
                { num: '02', icon: <Video className="w-6 h-6 text-[#cf5230]" />, title: 'Funnel + VSL', desc: 'Pre-warms every lead' },
                { num: '03', icon: <Zap className="w-6 h-6 text-[#cf5230]" />, title: 'GHL + Automation', desc: 'Zero cracks. Zero excuses.' },
                { num: '04', icon: <Megaphone className="w-6 h-6 text-[#cf5230]" />, title: 'Meta Campaigns', desc: 'Turned on last' },
                { num: '05', icon: <TrendingUp className="w-6 h-6 text-[#cf5230]" />, title: 'Conversion Loop', desc: 'Gets smarter every month' },
            ].map((layer, index) => (
              <ScrollReveal key={layer.num} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.04, y: -4 }}
                  className="bg-white border-2 border-neutral-200 p-5 text-center min-w-[160px] cursor-pointer hover:border-[#cf5230]/40 transition-colors"
                >
                  <div className="flex justify-center mb-3">{layer.icon}</div>
                  <div className="text-xs font-black text-[#cf5230] mb-1">{layer.num}</div>
                  <div className="text-sm font-black text-[#111110] mb-1 uppercase tracking-tight">{layer.title}</div>
                  <div className="text-xs text-neutral-600 font-medium">{layer.desc}</div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="">
        <PricingCards />
      </section>

      {/* Guarantee Section */}
      <section>
        <GuaranteeSection />
      </section>

      {/* Final CTA */}
      <section id="contact" className="bg-background">
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


