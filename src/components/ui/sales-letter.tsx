import React from 'react';
import { cn } from '@/lib/utils';
import { ScrollReveal } from './scroll-reveal';

export const SalesLetter: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <section className={cn('py-16 md:py-24 bg-background', className)}>
      <div className="max-w-3xl mx-auto px-4 md:px-8 prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-foreground text-foreground">
        
        <ScrollReveal>
          <div className="border border-red-500/20 bg-red-500/10 p-6 md:p-8 rounded-xl mb-12 text-center">
            <h2 className="text-xl md:text-3xl font-black text-red-600 mb-2 uppercase tracking-tight">Warning: This Is Not For The Faint-Hearted</h2>
            <p className="text-foreground/80 font-medium m-0">
              Do not read this page unless you are absolutely obsessed with dominating your market and scaling your consultancy beyond your wildest dreams.
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <p className="text-xl md:text-2xl leading-relaxed font-medium mb-8">
            Dear Founder,
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            If you're reading this, you're likely tired of the same old 'marketing agency' BS.
            You've been burned by empty promises, flashy dashboards that mean absolutely nothing for your bottom line, 
            and 'gurus' who have never actually scaled a consultancy in their life.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            They sell you on "likes," "impressions," and "brand awareness."
            <br />
            <strong>Newsflash: You can't deposit 'likes' into your bank account.</strong>
          </p>
          
          <h2 className="text-3xl md:text-4xl font-extrabold mt-12 mb-6 text-foreground tracking-tight">
            The Industry is Broken. And You Are Paying The Price.
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            Right now, thousands of immigration and education consultancies are battling for the exact same scraps.
            They use the exact same templates, the exact same offers, and the exact same boring ads. 
            No wonder leads are ignoring you, No Show rates are skyrocketing, and your cost per acquisition is through the roof.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6 font-semibold">
            But there is a small elite group of consultancies who are quietly building monopolies.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mb-12">
            They aren't smarter than you. They just have a <strong>system</strong>. A ruthless, predictable, and highly calibrated machine that turns absolute strangers into high-paying, retained clients within days.
            And that is exactly what we build for you.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};
