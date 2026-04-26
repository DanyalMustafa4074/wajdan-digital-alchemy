"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ImageIcon } from 'lucide-react';

/*
 * Placeholder-aware image. When `src` is provided it renders a real <img>;
 * otherwise it shows a brand-styled placeholder so designers can preview
 * the layout before the client delivers the asset.
 *
 * Aspect ratio is enforced via a wrapper so swapping to a real image never
 * shifts layout.
 */

interface WajdanImageProps {
  src?: string;
  alt: string;
  /** CSS aspect ratio, e.g. "16 / 9" or "1 / 1". Default: "16 / 9". */
  aspectRatio?: string;
  /** Tag shown in the placeholder (e.g. "Client Photo", "Founder Headshot"). */
  label?: string;
  className?: string;
  imgClassName?: string;
}

export const WajdanImage: React.FC<WajdanImageProps> = ({
  src,
  alt,
  aspectRatio = '16 / 9',
  label = 'Image',
  className,
  imgClassName,
}) => {
  return (
    <div
      className={cn('relative w-full overflow-hidden bg-[#fafaf8]', className)}
      style={{ aspectRatio }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className={cn('absolute inset-0 w-full h-full object-cover', imgClassName)}
          loading="lazy"
        />
      ) : (
        <Placeholder label={label} />
      )}
    </div>
  );
};

const Placeholder: React.FC<{ label: string }> = ({ label }) => (
  <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_30%_20%,rgba(207,82,48,0.12),transparent_55%),linear-gradient(135deg,#fafaf8_0%,#ececea_100%)] border-2 border-dashed border-neutral-300">
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center text-center px-6"
    >
      <div className="w-12 h-12 bg-white border border-neutral-200 flex items-center justify-center mb-3 shadow-sm">
        <ImageIcon className="w-6 h-6 text-[#cf5230]" />
      </div>
      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#cf5230] mb-1">
        {label}
      </p>
      <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
        Awaiting Wajdan asset
      </p>
    </motion.div>
  </div>
);

export default WajdanImage;
