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
  { id: 1, name: "Aspire Edge", imageUrl: "/client%20logos/ASPIRE%20EDGE%20CONSULTANTS.jpg" },
  { id: 2, name: "Double Entry Academy", imageUrl: "/client%20logos/DOUBE%20ENTRY%20ACADEMY.jpg" },
  { id: 3, name: "Global Minds", imageUrl: "/client%20logos/GLOBAL%20MINDS%20CONSULTANTS.jpg" },
  { id: 4, name: "Hainan Corporate Services", imageUrl: "/client%20logos/HAINAN%20CORPORATE%20SERVICES%20GROUP.jpg" },
  { id: 5, name: "Indus Bazaar", imageUrl: "/client%20logos/Indus%20Bazaar.jpg" },
  { id: 6, name: "IRT Consultants", imageUrl: "/client%20logos/IRT%20CONSULTANTS.jpg" },
  { id: 7, name: "One Roof Consultants", imageUrl: "/client%20logos/ONE%20ROOF%20CONSULTATS.jpg" },
  { id: 8, name: "Pantree", imageUrl: "/client%20logos/PANTREE.jpg" },
  { id: 9, name: "Portfolyio", imageUrl: "/client%20logos/PORTFOLYIO.png" },
  { id: 10, name: "Spectrum Consulting", imageUrl: "/client%20logos/Spectrum%20Consulting.jpg" },
  { id: 11, name: "Study Prime", imageUrl: "/client%20logos/STUDY%20PRIME.jpg" },
  { id: 12, name: "Verticalsols", imageUrl: "/client%20logos/VERTICALSOLS.jpg" },
  { id: 13, name: "Wisdom Weavers", imageUrl: "/client%20logos/WISDOM%20WEAVERS.jpg" },
  { id: 14, name: "Zarveen", imageUrl: "/client%20logos/ZARVEEN.jpg" },
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
      className="w-16 h-16 object-contain transition-all duration-300"
    />
  </div>
);

const FeatureLogoChip: React.FC<{ item: FeatureLogoItem }> = ({ item }) => (
  <div className="shrink-0 flex items-center gap-3 px-7 py-4 bg-white border border-neutral-200 transition-colors mx-3 min-w-[200px] justify-center group overflow-hidden">
    <div className={cn("w-10 h-10 flex items-center justify-center transition-all duration-300", item.colorClass)}>
      {React.cloneElement(item.icon as React.ReactElement, { className: 'w-full h-full' })}
    </div>
    <span className="font-bold text-neutral-800 transition-colors duration-300 uppercase tracking-widest text-sm">
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
