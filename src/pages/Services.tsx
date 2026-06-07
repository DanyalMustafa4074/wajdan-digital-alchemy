"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowDown, Check, Star, Target, Video, Zap, Megaphone, TrendingUp, ChevronDown, Search, UserCheck, FileText, MessageSquare, TestTube, FileCheck, Clapperboard, Layout, PenTool, FormInput, Calendar, MonitorPlay, Bot, Mail, Bell, RefreshCw, BarChart3, Palette, FlaskConical, Activity, RotateCw, FileBarChart, Link2, CircleDot, Database, PieChart, Brain, LineChart, X, ZoomIn } from 'lucide-react';
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
  extraContent?: React.ReactNode;
  hideDescription?: boolean;
  compactFeatures?: boolean;
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
  extraContent,
  hideDescription = false,
  compactFeatures = false,
}) => {
  const colorClasses = {
    orange: 'bg-[#E54D2E] text-white border-[#E54D2E]',
    yellow: 'bg-[#E54D2E] text-white border-[#E54D2E]',
    green: 'bg-[#E54D2E] text-white border-[#E54D2E]',
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
        <div className={cn("grid lg:grid-cols-2 gap-16 lg:gap-20 items-start", reversed && "lg:flex-row-reverse")}>

          {/* Content */}
          <ScrollReveal className={cn(reversed && "lg:order-2")}>
            <div className="inline-flex items-center gap-3 mb-8">
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
              <span className="text-gray-500 text-sm uppercase tracking-[0.2em] font-bold">Where every system begins</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-5 tracking-tight leading-[1.05]">
              {title}
            </h2>
            <h3 className="text-xl md:text-2xl font-bold text-brand-orange mb-7 leading-snug">
              {subtitle}
            </h3>

            {!hideDescription && (
              <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground leading-relaxed mb-10">
                {description}
              </p>
            )}

            {stats && (
              <div className="flex flex-wrap gap-6 mb-10">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-black text-brand-orange">{stat.value}</div>
                    <div className="text-base text-gray-500 font-medium mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            <motion.a
              href="https://funnel.wajdan.co/booking-page-page"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-7 py-4 bg-brand-orange text-white font-black uppercase tracking-wider text-sm transition-all shadow-[0_4px_0_0_#B83521] hover:shadow-none hover:translate-y-1"
            >
              {ctaText}
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </ScrollReveal>

          {/* Features Grid */}
          <div className={cn(reversed && "lg:order-1")}>
            {compactFeatures ? (
              <StaggerContainer staggerDelay={0.08} className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                {features.map((feature, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      className="glass-card rounded-2xl p-7 group transition-all relative overflow-hidden flex flex-col items-center text-center gap-5 cursor-default"
                      whileHover={{ y: -6, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative z-10 w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-inner [&>svg]:w-8 [&>svg]:h-8">
                        {feature.icon}
                      </div>
                      <h4 className="relative z-10 font-black text-foreground text-lg md:text-xl tracking-tight leading-snug">{feature.title}</h4>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            ) : (
              <StaggerContainer staggerDelay={0.1} className="grid sm:grid-cols-2 gap-5">
                {features.map((feature, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      className="glass-card rounded-xl p-7 group hover-lift transition-all relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative z-10 w-14 h-14 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-6 group-hover:bg-brand-orange/20 transition-colors shadow-inner [&>svg]:w-7 [&>svg]:h-7">
                        {feature.icon}
                      </div>
                      <h4 className="relative z-10 font-black text-foreground mb-3 text-lg tracking-tight">{feature.title}</h4>
                      <p className="relative z-10 text-base md:text-lg text-muted-foreground group-hover:text-muted-foreground transition-colors leading-relaxed">{feature.description}</p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            )}
          </div>
        </div>

        {extraContent && (
          <div className="mt-20 sm:mt-24">
            {extraContent}
          </div>
        )}
      </div>

      {nextLayerId && (
        <ScrollReveal delay={0.5} className="flex justify-center mt-14">
          <motion.a
            href={`#${nextLayerId}`}
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-brand-orange transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-sm font-bold uppercase tracking-wider">See the next layer</span>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.a>
        </ScrollReveal>
      )}
    </section>
  );
};

const LP_IMAGES = [
  '/landing-pages/lp-1.jpg',
  '/landing-pages/lp-2.jpg',
  '/landing-pages/lp-3.jpg',
  '/landing-pages/lp-4.jpg',
  '/landing-pages/lp-5.jpg',
  '/landing-pages/lp-6.jpg',
  '/landing-pages/lp-7.jpg',
  '/landing-pages/lp-10.jpg',
  '/landing-pages/lp-11.jpg',
  '/landing-pages/lp-12.jpg',
  '/landing-pages/lp-13.jpg',
  '/landing-pages/lp-14.jpg',
];

const Services = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const openLightbox = (src: string, index: number) => {
    setLightboxImage(src);
    setLightboxIndex(index);
  };

  const closeLightbox = () => setLightboxImage(null);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prev = (lightboxIndex - 1 + LP_IMAGES.length) % LP_IMAGES.length;
    setLightboxImage(LP_IMAGES[prev]);
    setLightboxIndex(prev);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = (lightboxIndex + 1) % LP_IMAGES.length;
    setLightboxImage(LP_IMAGES[next]);
    setLightboxIndex(next);
  };

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

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 md:mb-7"
          >
            <span className="text-[#E54D2E] font-black uppercase tracking-[0.25em] text-xs md:text-sm">The Complete System</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1110] mb-6 md:mb-8 uppercase tracking-tight md:tracking-tighter leading-[1.08]"
          >
            Not Services.
            <br />
            <span className="text-[#E54D2E]">A System.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed"
          >
            Most businesses lose clients not because demand is low — but because nothing was built to catch,
            qualify, and convert the interest that already exists. We build the complete infrastructure that fixes that. End to end.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center mb-12 md:mb-14"
          >
            <motion.a
              href="https://funnel.wajdan.co/booking-page-page"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center justify-center gap-2 px-7 sm:px-10 py-4 md:py-5 bg-[#140E0E] text-white font-black uppercase tracking-wider text-base md:text-lg transition-all shadow-[0_4px_0_0_#E54D2E] hover:shadow-none hover:translate-y-1"
            >
              Book a Free Funnel Audit
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            <a
              href="#layer-1"
              className="flex items-center justify-center gap-2 text-neutral-700 hover:text-[#E54D2E] transition-colors font-bold text-base md:text-lg"
            >
              See the full system
              <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowDown className="w-4 h-4" />
              </motion.div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <StatsBar stats={heroStats} />
          </motion.div>
        </div>
      </section>

      {/* System Tabs Navigation */}
      <SystemTabsBar />

      {/* Progress Indicator */}
      <SystemProgressIndicator />

      {/* Trusted-by logo marquee */}
      <LogoMarquee />

      {/* Lead lifecycle pipeline */}
      <PipelineFlow />

      {/* Comparison Table */}
      <section className="bg-background pt-12 pb-12">
        <div className="max-w-7xl mx-auto px-6">
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
          hideDescription={true}
          compactFeatures={true}
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
          extraContent={
            <div className="pt-8">
              <div className="text-center mb-12">
                <h4 className="text-2xl md:text-3xl font-black text-foreground tracking-tight leading-[1.15]">The Offer In Action</h4>
                <p className="text-xl md:text-2xl text-muted-foreground mt-4 leading-relaxed">Examples of high-converting offers architecture.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div whileHover={{ y: -6 }} className="rounded-2xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-neutral-200 bg-white">
                  <img src="/offer-screenshot-1.png" alt="Offer Example 1" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
                </motion.div>
                <motion.div whileHover={{ y: -6 }} className="rounded-2xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-neutral-200 bg-white">
                  <img src="/offer-screenshot-2.png" alt="Offer Example 2" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
                </motion.div>
                <motion.div whileHover={{ y: -6 }} className="rounded-2xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-neutral-200 bg-white">
                  <img src="/offer-screenshot-3.png" alt="Offer Example 3" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
                </motion.div>
              </div>
            </div>
          }
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
          hideDescription={true}
          compactFeatures={true}
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
          extraContent={
            <div className="w-full">
              <ScrollReveal>
                <div className="text-center mb-14">
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">Click any to view full size</p>
                </div>
              </ScrollReveal>
              <StaggerContainer staggerDelay={0.04} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2">
                {LP_IMAGES.map((src, i) => (
                  <StaggerItem key={i}>
                    <motion.div
                      className="w-full overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 aspect-[3/4] relative group cursor-pointer"
                      onClick={() => openLightbox(src, i)}
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    >
                      <div className="absolute inset-0 bg-neutral-900/50 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
                          <ZoomIn className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <img
                        src={src}
                        alt={`Landing Page Design Example ${i + 1}`}
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          }
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
      <section className="py-24 md:py-32 bg-[#fafaf8]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1A1110] mb-5 uppercase tracking-tight leading-[1.05]">
              Five Layers. <span className="text-[#E54D2E]">One Machine.</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Remove any one layer and the whole thing leaks. This is the complete system — in the exact sequence we build it.
            </p>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-5">
            {[
              { num: '01', icon: <Target className="w-7 h-7 text-[#E54D2E]" />, title: 'Offer Creation', desc: 'Before any ad spend' },
              { num: '02', icon: <Video className="w-7 h-7 text-[#E54D2E]" />, title: 'Funnel + VSL', desc: 'Pre-warms every lead' },
              { num: '03', icon: <Zap className="w-7 h-7 text-[#E54D2E]" />, title: 'GHL + Automation', desc: 'Zero cracks. Zero excuses.' },
              { num: '04', icon: <Megaphone className="w-7 h-7 text-[#E54D2E]" />, title: 'Meta Campaigns', desc: 'Turned on last' },
              { num: '05', icon: <TrendingUp className="w-7 h-7 text-[#E54D2E]" />, title: 'Conversion Loop', desc: 'Gets smarter every month' },
            ].map((layer, index) => (
              <ScrollReveal key={layer.num} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white border-2 border-neutral-200 p-6 text-center min-w-[175px] cursor-pointer hover:border-[#E54D2E]/40 transition-colors"
                >
                  <div className="flex justify-center mb-4">{layer.icon}</div>
                  <div className="text-xs font-black text-[#E54D2E] mb-1 tracking-wider">{layer.num}</div>
                  <div className="text-sm font-black text-[#1A1110] mb-1.5 uppercase tracking-tight">{layer.title}</div>
                  <div className="text-xs text-neutral-500 font-medium leading-snug">{layer.desc}</div>
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

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              className="absolute top-5 right-5 z-10 text-white hover:text-gray-300 transition-colors bg-white/10 backdrop-blur-sm rounded-full p-2.5 border border-white/20"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 md:left-8 z-10 text-white hover:text-gray-300 transition-colors bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20"
              onClick={prevImage}
            >
              <ArrowLeft className="w-6 h-6" />
            </button>

            {/* Image — scrollable container for tall page screenshots */}
            <motion.div
              key={lightboxImage}
              className="overflow-y-auto rounded-xl shadow-2xl"
              style={{ maxHeight: '88vh', width: 'min(720px, 92vw)' }}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage}
                alt="Landing Page Preview"
                className="w-full h-auto block"
              />
            </motion.div>

            {/* Next */}
            <button
              className="absolute right-4 md:right-8 z-10 text-white hover:text-gray-300 transition-colors bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20"
              onClick={nextImage}
            >
              <ArrowRight className="w-6 h-6" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
              {lightboxIndex + 1} / {LP_IMAGES.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;
