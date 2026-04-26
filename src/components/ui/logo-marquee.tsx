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
} from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import { cn } from '@/lib/utils';

/*
 * Two-row infinite marquee — real platform brand logos.
 *
 * Wajdan operates on the Meta / Google / GoHighLevel stack, so the marquee
 * shows the platforms we actually run campaigns on rather than fake client
 * logos. When real client logos become available, replace each `Mark`
 * function below with an <img> tag.
 */

interface LogoItem {
  name: string;
  Mark: React.FC<{ className?: string }>;
}

// GoHighLevel has no Simple Icon — render it as a typographic mark.
const GhlMark: React.FC<{ className?: string }> = ({ className }) => (
  <span className={cn('text-[1.7em] font-black tracking-tighter leading-none', className)}>
    GHL
  </span>
);

const ROW_ONE: LogoItem[] = [
  { name: 'Meta',                Mark: SiMeta },
  { name: 'Google Ads',          Mark: SiGoogleads },
  { name: 'Facebook',            Mark: SiFacebook },
  { name: 'Instagram',           Mark: SiInstagram },
  { name: 'YouTube',             Mark: SiYoutube },
  { name: 'TikTok',              Mark: SiTiktok },
  { name: 'LinkedIn',            Mark: FaLinkedinIn },
  { name: 'GoHighLevel',         Mark: GhlMark },
];

const ROW_TWO: LogoItem[] = [
  { name: 'Google Analytics',    Mark: SiGoogleanalytics },
  { name: 'WhatsApp',            Mark: SiWhatsapp },
  { name: 'HubSpot',             Mark: SiHubspot },
  { name: 'Calendly',            Mark: SiCalendly },
  { name: 'Mailchimp',           Mark: SiMailchimp },
  { name: 'Zapier',              Mark: SiZapier },
  { name: 'Stripe',              Mark: SiStripe },
  { name: 'Google',              Mark: SiGoogle },
];

const LogoChip: React.FC<{ item: LogoItem }> = ({ item }) => (
  <div className="shrink-0 flex items-center gap-3 px-7 py-4 bg-white border border-neutral-200 hover:border-[#cf5230]/40 transition-colors mx-3 min-w-[200px] justify-center group">
    <item.Mark className="w-7 h-7 text-neutral-400 group-hover:text-[#cf5230] transition-colors" />
    <span className="font-black uppercase tracking-tight text-[#111110] text-sm whitespace-nowrap">
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
              <LogoChip key={`r1-${i}`} item={item} />
            ))}
          </div>
          <div className="flex marquee-track-right" aria-hidden>
            {[...ROW_TWO, ...ROW_TWO].map((item, i) => (
              <LogoChip key={`r2-${i}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
