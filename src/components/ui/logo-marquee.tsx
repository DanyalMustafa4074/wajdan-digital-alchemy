"use client";

import React from 'react';
import {
  SiMeta,
  SiGoogle,
  SiInstagram,
  SiFacebook,
  SiYoutube,
  SiTiktok,
  SiWhatsapp,
  SiGoogleads,
  SiGoogleanalytics,
  SiHubspot,
  SiCalendly,
  SiMailchimp,
  SiZapier,
  SiStripe,
  SiGmail,
} from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import { cn } from '@/lib/utils';

/*
 * Two-row infinite marquee — real platform brand logos and client logos.
 */

interface ClientLogoItem {
  id: number;
  imageUrl: string;
  name: string;
}

const CLIENT_LOGOS: ClientLogoItem[] = [
  { id: 1, name: "Client 1", imageUrl: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=128&h=128&fit=crop&q=80" },
  { id: 2, name: "Client 2", imageUrl: "https://images.unsplash.com/photo-1620288627223-fa94d6e9f1a2?w=128&h=128&fit=crop&q=80" },
  { id: 3, name: "Client 3", imageUrl: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=128&h=128&fit=crop&q=80" },
  { id: 4, name: "Client 4", imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=128&h=128&fit=crop&q=80" },
  { id: 5, name: "Client 5", imageUrl: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=128&h=128&fit=crop&q=80" },
  { id: 6, name: "Client 6", imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=128&h=128&fit=crop&q=80" },
  { id: 7, name: "Client 7", imageUrl: "https://images.unsplash.com/photo-1517430816045-df4b7ef11df2?w=128&h=128&fit=crop&q=80" },
  { id: 8, name: "Client 8", imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?w=128&h=128&fit=crop&q=80" },
];

interface FeatureLogoItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  colorClass: string;
}

const FEATURE_LOGOS: FeatureLogoItem[] = [
  { id: 'meta', name: 'Meta', icon: <SiMeta />, colorClass: 'text-[#0468FF]' },
  { id: 'facebook', name: 'Facebook', icon: <SiFacebook />, colorClass: 'text-[#1877F2]' },
  { id: 'zapier', name: 'Zapier / Make', icon: <SiZapier />, colorClass: 'text-[#FF4A00]' },
  { id: 'gmail', name: 'Gmail', icon: <SiGmail />, colorClass: 'text-[#EA4335]' },
  { id: 'hubspot', name: 'GoHighLevel', icon: <SiHubspot />, colorClass: 'text-[#FF7A59]' }, // Hubspot as a stand-in or just text
  { id: 'instantly', name: 'Instantly', icon: <SiMailchimp />, colorClass: 'text-[#FFE01B]' },
  { id: 'calendly', name: 'Calendly', icon: <SiCalendly />, colorClass: 'text-[#006BFF]' },
];

const ROW_ONE = CLIENT_LOGOS;
const ROW_TWO = [...FEATURE_LOGOS, ...FEATURE_LOGOS];

const ClientLogoChip: React.FC<{ item: ClientLogoItem }> = ({ item }) => (
  <div className="shrink-0 flex items-center gap-3 px-7 py-4 bg-white border border-neutral-200 hover:border-[#cf5230]/40 transition-colors mx-3 min-w-[200px] justify-center group overflow-hidden">
    <img 
      src={item.imageUrl} 
      alt={item.name} 
      className="w-16 h-16 object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
    />
  </div>
);

const FeatureLogoChip: React.FC<{ item: FeatureLogoItem }> = ({ item }) => (
  <div className="shrink-0 flex items-center gap-3 px-7 py-4 bg-white border border-neutral-200 transition-colors mx-3 min-w-[200px] justify-center group overflow-hidden">
    <div className={cn("w-10 h-10 flex items-center justify-center filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300", item.colorClass)}>
      {React.cloneElement(item.icon as React.ReactElement, { className: 'w-full h-full' })}
    </div>
    <span className="font-bold text-neutral-400 group-hover:text-neutral-800 transition-colors duration-300 uppercase tracking-widest text-sm">
      {item.name}
    </span>
  </div>
);

export const LogoMarquee: React.FC<{
  className?: string;
  eyebrow?: string;
  heading?: string;
}> = ({
  className,
  eyebrow = 'Built On The Platforms That Pay',
  heading = 'Meta, Google, GoHighLevel and the full stack we wire into your funnel',
}) => {
  return (
    <section className={cn('py-16 bg-[#fafaf8] overflow-hidden', className)}>
      <div className="max-w-6xl mx-auto px-4 text-center mb-10">
        <p className="text-[#cf5230] text-sm font-bold uppercase tracking-[0.2em] mb-3">{eyebrow}</p>
        <h3 className="text-2xl md:text-3xl font-black text-[#111110] uppercase tracking-tight max-w-3xl mx-auto leading-tight">
          {heading}
        </h3>
      </div>

      <div className="relative">
        <div
          className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-[#fafaf8] to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-[#fafaf8] to-transparent"
          aria-hidden
        />

        <div className="space-y-4">
          <div className="flex marquee-track-left" aria-hidden>
            {[...ROW_ONE, ...ROW_ONE].map((item, i) => (
              <ClientLogoChip key={`r1-${i}`} item={item} />
            ))}
          </div>
          <div className="flex marquee-track-right" aria-hidden>
            {[...ROW_TWO, ...ROW_TWO].map((item, i) => (
              <FeatureLogoChip key={`r2-${i}`} item={item as FeatureLogoItem} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
