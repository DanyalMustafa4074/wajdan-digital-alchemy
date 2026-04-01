"use client";

import React, { useRef, useEffect, useState } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

// ==========================================
// INLINE LOTTIE ANIMATION DATA
// High-quality, purposeful animations for Wajdan
// ==========================================

// Target/Offer Animation Data - Concentric circles forming
export const targetAnimationData = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 100,
  h: 100,
  nm: "Target",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Outer",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [50, 50, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 1, k: [{ t: 0, s: [0, 0], o: { x: 0, y: 0 }, i: { x: 0.5, y: 1 } }, { t: 20, s: [100, 100] }] }
      },
      shapes: [{
        ty: "el",
        s: { a: 0, k: [80, 80] },
        p: { a: 0, k: [0, 0] },
        nm: "Ellipse"
      }, {
        ty: "st",
        c: { a: 0, k: [1, 0.42, 0.21, 1] },
        o: { a: 0, k: 100 },
        w: { a: 0, k: 4 },
        nm: "Stroke"
      }]
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Middle",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [50, 50, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 1, k: [{ t: 10, s: [0, 0], o: { x: 0, y: 0 }, i: { x: 0.5, y: 1 } }, { t: 30, s: [100, 100] }] }
      },
      shapes: [{
        ty: "el",
        s: { a: 0, k: [50, 50] },
        p: { a: 0, k: [0, 0] }
      }, {
        ty: "st",
        c: { a: 0, k: [1, 0.42, 0.21, 1] },
        o: { a: 0, k: 100 },
        w: { a: 0, k: 4 }
      }]
    },
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "Center",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [50, 50, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 1, k: [{ t: 20, s: [0, 0], o: { x: 0, y: 0 }, i: { x: 0.5, y: 1 } }, { t: 40, s: [100, 100] }] }
      },
      shapes: [{
        ty: "el",
        s: { a: 0, k: [20, 20] },
        p: { a: 0, k: [0, 0] }
      }, {
        ty: "fl",
        c: { a: 0, k: [1, 0.42, 0.21, 1] },
        o: { a: 0, k: 100 }
      }]
    }
  ]
};

// Funnel/Video Animation Data - Play button with ripple
export const funnelAnimationData = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 100,
  h: 100,
  nm: "Funnel",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Ripple",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 0, s: [100] }, { t: 30, s: [0] }] },
        p: { a: 0, k: [50, 50, 0] },
        s: { a: 1, k: [{ t: 0, s: [80, 80] }, { t: 30, s: [150, 150] }] }
      },
      shapes: [{
        ty: "el",
        s: { a: 0, k: [60, 60] },
        p: { a: 0, k: [0, 0] }
      }, {
        ty: "st",
        c: { a: 0, k: [1, 0.42, 0.21, 1] },
        o: { a: 0, k: 100 },
        w: { a: 0, k: 3 }
      }]
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Circle",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        p: { a: 0, k: [50, 50, 0] },
        s: { a: 1, k: [{ t: 0, s: [0, 0], i: { x: 0.5, y: 1 } }, { t: 15, s: [100, 100] }] }
      },
      shapes: [{
        ty: "el",
        s: { a: 0, k: [60, 60] },
        p: { a: 0, k: [0, 0] }
      }, {
        ty: "fl",
        c: { a: 0, k: [1, 0.42, 0.21, 1] },
        o: { a: 0, k: 100 }
      }]
    },
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "Play",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        p: { a: 0, k: [53, 50, 0] },
        s: { a: 1, k: [{ t: 10, s: [0, 0], i: { x: 0.5, y: 1 } }, { t: 25, s: [100, 100] }] }
      },
      shapes: [{
        ty: "sh",
        d: 1,
        ks: {
          a: 0,
          k: {
            i: [[0, 0], [0, 0], [0, 0]],
            o: [[0, 0], [0, 0], [0, 0]],
            v: [[-8, -12], [-8, 12], [12, 0]],
            c: true
          }
        }
      }, {
        ty: "fl",
        c: { a: 0, k: [1, 1, 1, 1] },
        o: { a: 0, k: 100 }
      }]
    }
  ]
};

// Lightning/Automation Animation Data
export const automationAnimationData = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 45,
  w: 100,
  h: 100,
  nm: "Automation",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Bolt",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 0, s: [0] }, { t: 5, s: [100] }, { t: 30, s: [100] }, { t: 45, s: [100] }] },
        p: { a: 0, k: [50, 50, 0] },
        s: { a: 1, k: [{ t: 0, s: [0, 0], i: { x: 0.5, y: 1 } }, { t: 15, s: [110, 110] }, { t: 25, s: [100, 100] }] }
      },
      shapes: [{
        ty: "sh",
        d: 1,
        ks: {
          a: 0,
          k: {
            i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
            o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
            v: [[5, -35], [-20, 5], [-3, 5], [-5, 35], [20, -5], [3, -5], [5, -35]],
            c: true
          }
        }
      }, {
        ty: "fl",
        c: { a: 0, k: [1, 0.42, 0.21, 1] },
        o: { a: 0, k: 100 }
      }]
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Glow",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 5, s: [0] }, { t: 15, s: [60] }, { t: 30, s: [0] }] },
        p: { a: 0, k: [50, 50, 0] },
        s: { a: 1, k: [{ t: 5, s: [80, 80] }, { t: 30, s: [150, 150] }] }
      },
      shapes: [{
        ty: "el",
        s: { a: 0, k: [60, 60] },
        p: { a: 0, k: [0, 0] }
      }, {
        ty: "fl",
        c: { a: 0, k: [1, 0.42, 0.21, 1] },
        o: { a: 0, k: 30 }
      }]
    }
  ]
};

// Megaphone/Ads Animation Data
export const megaphoneAnimationData = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 100,
  h: 100,
  nm: "Megaphone",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Wave3",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 30, s: [0] }, { t: 40, s: [100] }, { t: 55, s: [0] }] },
        p: { a: 0, k: [72, 45, 0] },
        s: { a: 0, k: [100, 100] }
      },
      shapes: [{
        ty: "sh",
        ks: { a: 0, k: { v: [[0, -20], [0, 20]], i: [[5, 0], [5, 0]], o: [[-5, 0], [-5, 0]], c: false } }
      }, {
        ty: "st",
        c: { a: 0, k: [1, 0.42, 0.21, 1] },
        w: { a: 0, k: 3 },
        lc: 2
      }]
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Wave2",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 20, s: [0] }, { t: 30, s: [100] }, { t: 45, s: [0] }] },
        p: { a: 0, k: [65, 45, 0] }
      },
      shapes: [{
        ty: "sh",
        ks: { a: 0, k: { v: [[0, -15], [0, 15]], i: [[4, 0], [4, 0]], o: [[-4, 0], [-4, 0]], c: false } }
      }, {
        ty: "st",
        c: { a: 0, k: [1, 0.42, 0.21, 1] },
        w: { a: 0, k: 3 },
        lc: 2
      }]
    },
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "Wave1",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 10, s: [0] }, { t: 20, s: [100] }, { t: 35, s: [0] }] },
        p: { a: 0, k: [58, 45, 0] }
      },
      shapes: [{
        ty: "sh",
        ks: { a: 0, k: { v: [[0, -10], [0, 10]], i: [[3, 0], [3, 0]], o: [[-3, 0], [-3, 0]], c: false } }
      }, {
        ty: "st",
        c: { a: 0, k: [1, 0.42, 0.21, 1] },
        w: { a: 0, k: 3 },
        lc: 2
      }]
    },
    {
      ddd: 0,
      ind: 4,
      ty: 4,
      nm: "Body",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        p: { a: 0, k: [40, 45, 0] },
        s: { a: 1, k: [{ t: 0, s: [0, 0], i: { x: 0.5, y: 1 } }, { t: 15, s: [100, 100] }] },
        r: { a: 1, k: [{ t: 15, s: [0] }, { t: 25, s: [-5] }, { t: 35, s: [5] }, { t: 45, s: [0] }] }
      },
      shapes: [{
        ty: "sh",
        ks: {
          a: 0,
          k: {
            v: [[20, -15], [-15, -25], [-15, 25], [20, 15], [20, -15]],
            i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
            o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
            c: true
          }
        }
      }, {
        ty: "fl",
        c: { a: 0, k: [1, 0.42, 0.21, 1] }
      }]
    }
  ]
};

// Chart/Analytics Animation Data - Growing bars
export const chartAnimationData = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 45,
  w: 100,
  h: 100,
  nm: "Chart",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Bar1",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        p: { a: 0, k: [25, 70, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 1, k: [{ t: 0, s: [100, 0], i: { x: 0.5, y: 1 } }, { t: 15, s: [100, 100] }] }
      },
      shapes: [{
        ty: "rc",
        d: 1,
        s: { a: 0, k: [15, 30] },
        p: { a: 0, k: [0, -15] },
        r: { a: 0, k: 3 }
      }, {
        ty: "fl",
        c: { a: 0, k: [1, 0.42, 0.21, 0.6] }
      }]
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Bar2",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        p: { a: 0, k: [45, 70, 0] },
        s: { a: 1, k: [{ t: 5, s: [100, 0], i: { x: 0.5, y: 1 } }, { t: 20, s: [100, 100] }] }
      },
      shapes: [{
        ty: "rc",
        d: 1,
        s: { a: 0, k: [15, 45] },
        p: { a: 0, k: [0, -22.5] },
        r: { a: 0, k: 3 }
      }, {
        ty: "fl",
        c: { a: 0, k: [1, 0.42, 0.21, 0.8] }
      }]
    },
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "Bar3",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        p: { a: 0, k: [65, 70, 0] },
        s: { a: 1, k: [{ t: 10, s: [100, 0], i: { x: 0.5, y: 1 } }, { t: 25, s: [100, 100] }] }
      },
      shapes: [{
        ty: "rc",
        d: 1,
        s: { a: 0, k: [15, 55] },
        p: { a: 0, k: [0, -27.5] },
        r: { a: 0, k: 3 }
      }, {
        ty: "fl",
        c: { a: 0, k: [1, 0.42, 0.21, 1] }
      }]
    },
    {
      ddd: 0,
      ind: 4,
      ty: 4,
      nm: "Arrow",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 25, s: [0] }, { t: 35, s: [100] }] },
        p: { a: 1, k: [{ t: 25, s: [20, 60, 0] }, { t: 40, s: [75, 25, 0] }] }
      },
      shapes: [{
        ty: "sh",
        ks: {
          a: 0,
          k: {
            v: [[0, 0], [8, 0], [4, -6]],
            i: [[0, 0], [0, 0], [0, 0]],
            o: [[0, 0], [0, 0], [0, 0]],
            c: true
          }
        }
      }, {
        ty: "fl",
        c: { a: 0, k: [1, 0.42, 0.21, 1] }
      }]
    }
  ]
};

// Success/Checkmark Animation Data
export const successAnimationData = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 45,
  w: 100,
  h: 100,
  nm: "Success",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Circle",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        p: { a: 0, k: [50, 50, 0] },
        s: { a: 1, k: [{ t: 0, s: [0, 0], i: { x: 0.5, y: 1 } }, { t: 15, s: [110, 110] }, { t: 25, s: [100, 100] }] }
      },
      shapes: [{
        ty: "el",
        s: { a: 0, k: [70, 70] },
        p: { a: 0, k: [0, 0] }
      }, {
        ty: "fl",
        c: { a: 0, k: [0.34, 0.65, 0.45, 1] },
        o: { a: 0, k: 100 }
      }]
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Check",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 15, s: [0] }, { t: 25, s: [100] }] },
        p: { a: 0, k: [50, 52, 0] },
        s: { a: 1, k: [{ t: 15, s: [0, 0] }, { t: 30, s: [100, 100] }] }
      },
      shapes: [{
        ty: "sh",
        ks: {
          a: 0,
          k: {
            v: [[-15, 0], [-5, 10], [18, -13]],
            i: [[0, 0], [0, 0], [0, 0]],
            o: [[0, 0], [0, 0], [0, 0]],
            c: false
          }
        }
      }, {
        ty: "st",
        c: { a: 0, k: [1, 1, 1, 1] },
        w: { a: 0, k: 6 },
        lc: 2,
        lj: 2
      }]
    }
  ]
};

// Loading/Spinner Animation Data
export const loadingAnimationData = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 100,
  h: 100,
  nm: "Loading",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Spinner",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 1, k: [{ t: 0, s: [0] }, { t: 60, s: [360] }] },
        p: { a: 0, k: [50, 50, 0] }
      },
      shapes: [{
        ty: "el",
        s: { a: 0, k: [60, 60] },
        p: { a: 0, k: [0, 0] }
      }, {
        ty: "st",
        c: { a: 0, k: [1, 0.42, 0.21, 1] },
        w: { a: 0, k: 5 },
        lc: 2,
        d: [{ n: "d", nm: "dash", v: { a: 0, k: 120 } }, { n: "g", nm: "gap", v: { a: 0, k: 80 } }]
      }]
    }
  ]
};

// Rocket/Growth Animation Data
export const rocketAnimationData = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 100,
  h: 100,
  nm: "Rocket",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Trail",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 0, s: [0] }, { t: 15, s: [100] }, { t: 45, s: [100] }, { t: 60, s: [0] }] },
        p: { a: 1, k: [{ t: 15, s: [50, 85, 0] }, { t: 45, s: [50, 55, 0] }] }
      },
      shapes: [{
        ty: "sh",
        ks: {
          a: 0,
          k: {
            v: [[-10, 0], [0, 25], [10, 0]],
            i: [[5, 0], [0, 0], [-5, 0]],
            o: [[0, 0], [0, 0], [0, 0]],
            c: true
          }
        }
      }, {
        ty: "gf",
        s: { a: 0, k: [0, 0] },
        e: { a: 0, k: [0, 25] },
        t: 1,
        g: { p: 2, k: { a: 0, k: [0, 1, 0.42, 0.21, 1, 1, 0.42, 0.21, 0, 0, 0, 0] } }
      }]
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Rocket",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        p: { a: 1, k: [{ t: 0, s: [50, 90, 0] }, { t: 20, s: [50, 45, 0] }, { t: 40, s: [50, 50, 0] }, { t: 60, s: [50, 45, 0] }] },
        s: { a: 1, k: [{ t: 0, s: [0, 0] }, { t: 15, s: [100, 100] }] },
        r: { a: 0, k: -45 }
      },
      shapes: [{
        ty: "sh",
        ks: {
          a: 0,
          k: {
            v: [[0, -20], [12, 8], [6, 20], [-6, 20], [-12, 8]],
            i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
            o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
            c: true
          }
        }
      }, {
        ty: "fl",
        c: { a: 0, k: [1, 0.42, 0.21, 1] }
      }]
    }
  ]
};

// ==========================================
// LOTTIE COMPONENT WRAPPERS
// ==========================================

interface LottieIconProps {
  animationData: object;
  className?: string;
  size?: number;
  loop?: boolean;
  autoplay?: boolean;
  playOnHover?: boolean;
  playOnView?: boolean;
}

export const LottieIcon: React.FC<LottieIconProps> = ({
  animationData,
  className,
  size = 64,
  loop = false,
  autoplay = true,
  playOnHover = true,
  playOnView = true,
}) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.5 });
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    if (isInView && playOnView && !hasPlayed && lottieRef.current) {
      lottieRef.current.goToAndPlay(0);
      if (!loop) setHasPlayed(true);
    }
  }, [isInView, playOnView, hasPlayed, loop]);

  const handleMouseEnter = () => {
    if (playOnHover && lottieRef.current) {
      lottieRef.current.goToAndPlay(0);
    }
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      className={cn("cursor-pointer transition-transform flex items-center justify-center", className)}
      style={{ width: size, height: size, minWidth: size, minHeight: size }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        style={{ width: '100%', height: '100%' }}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice'
        }}
      />
    </motion.div>
  );
};

// Pre-configured icons for the 5 system layers
export const OfferIcon: React.FC<{ size?: number; className?: string }> = ({ size = 64, className }) => (
  <LottieIcon animationData={targetAnimationData} size={size} className={className} />
);

export const FunnelIcon: React.FC<{ size?: number; className?: string }> = ({ size = 64, className }) => (
  <LottieIcon animationData={funnelAnimationData} size={size} className={className} />
);

export const AutomationIcon: React.FC<{ size?: number; className?: string }> = ({ size = 64, className }) => (
  <LottieIcon animationData={automationAnimationData} size={size} className={className} />
);

export const AdsIcon: React.FC<{ size?: number; className?: string }> = ({ size = 64, className }) => (
  <LottieIcon animationData={megaphoneAnimationData} size={size} className={className} />
);

export const AnalyticsIcon: React.FC<{ size?: number; className?: string }> = ({ size = 64, className }) => (
  <LottieIcon animationData={chartAnimationData} size={size} className={className} />
);

export const SuccessIcon: React.FC<{ size?: number; className?: string }> = ({ size = 64, className }) => (
  <LottieIcon animationData={successAnimationData} size={size} className={className} loop={false} />
);

export const LoadingIcon: React.FC<{ size?: number; className?: string }> = ({ size = 64, className }) => (
  <LottieIcon animationData={loadingAnimationData} size={size} className={className} loop autoplay />
);

export const RocketIcon: React.FC<{ size?: number; className?: string }> = ({ size = 64, className }) => (
  <LottieIcon animationData={rocketAnimationData} size={size} className={className} />
);

// ==========================================
// ANIMATED SECTION BACKGROUNDS
// ==========================================

export const AnimatedGridBackground: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,53,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,53,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Floating orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-brand-orange/20 to-transparent blur-3xl"
          style={{
            width: 200 + i * 50,
            height: 200 + i * 50,
            left: `${10 + i * 20}%`,
            top: `${10 + i * 15}%`,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export const ParticleField: React.FC<{ count?: number; className?: string }> = ({ count = 30, className }) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-brand-orange/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// ==========================================
// ANIMATED TEXT EFFECTS
// ==========================================

export const GlowText: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return (
    <motion.span
      className={cn("relative inline-block", className)}
      whileHover={{ scale: 1.02 }}
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute inset-0 bg-brand-orange/20 blur-xl -z-10"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.span>
  );
};

export const TypewriterText: React.FC<{ 
  text: string; 
  className?: string;
  speed?: number;
}> = ({ text, className, speed = 50 }) => {
  const [displayText, setDisplayText] = useState('');
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let i = 0;
      const timer = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
        }
      }, speed);
      return () => clearInterval(timer);
    }
  }, [isInView, text, speed]);

  return (
    <span ref={ref} className={className}>
      {displayText}
      <motion.span
        className="inline-block w-0.5 h-[1em] bg-brand-orange ml-1"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </span>
  );
};

// ==========================================
// SVG ANIMATED ICONS (Fallback)
// ==========================================

export const AnimatedTargetIcon: React.FC<{ className?: string; size?: number }> = ({ className, size = 48 }) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, rotate: 10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      <motion.circle
        cx="12"
        cy="12"
        r="6"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      <motion.circle
        cx="12"
        cy="12"
        r="2"
        fill="currentColor"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.8 }}
      />
    </motion.svg>
  );
};

export const AnimatedVideoIcon: React.FC<{ className?: string; size?: number }> = ({ className, size = 48 }) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.rect
        x="2"
        y="4"
        width="20"
        height="16"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.path
        d="M10 8L16 12L10 16V8Z"
        fill="currentColor"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      />
    </motion.svg>
  );
};

export const AnimatedZapIcon: React.FC<{ className?: string; size?: number }> = ({ className, size = 48 }) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <motion.path
        d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
        fill="currentColor"
        initial={{ pathLength: 0, fillOpacity: 0 }}
        whileInView={{ pathLength: 1, fillOpacity: 1 }}
        transition={{ duration: 0.8 }}
      />
    </motion.svg>
  );
};

export const AnimatedMegaphoneIcon: React.FC<{ className?: string; size?: number }> = ({ className, size = 48 }) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      initial={{ scale: 0.8, opacity: 0, x: -10 }}
      whileInView={{ scale: 1, opacity: 1, x: 0 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.path
        d="M18 4L8 8H4C2.9 8 2 8.9 2 10V14C2 15.1 2.9 16 4 16H5L7 22H9L8 16H8L18 20V4Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.path
        d="M20 8V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      />
      <motion.path
        d="M22 10V14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.3, delay: 0.7 }}
      />
    </motion.svg>
  );
};

export const AnimatedChartIcon: React.FC<{ className?: string; size?: number }> = ({ className, size = 48 }) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.rect
        x="3"
        y="14"
        width="4"
        height="7"
        fill="currentColor"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{ originY: 1 }}
      />
      <motion.rect
        x="10"
        y="8"
        width="4"
        height="13"
        fill="currentColor"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ originY: 1 }}
      />
      <motion.rect
        x="17"
        y="3"
        width="4"
        height="18"
        fill="currentColor"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ originY: 1 }}
      />
    </motion.svg>
  );
};

// Animated Number Counter with visual effect
export const AnimatedNumber: React.FC<{
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}> = ({ value, suffix = '', prefix = '', className, duration = 2 }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const incrementTime = (duration * 1000) / end;
      
      const timer = setInterval(() => {
        start += 1;
        setDisplayValue(start);
        if (start >= end) {
          clearInterval(timer);
          setDisplayValue(end);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <motion.span
      ref={ref}
      className={cn("tabular-nums font-bold", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {prefix}{displayValue}{suffix}
    </motion.span>
  );
};

// Pulsing dot indicator
export const PulsingDot: React.FC<{ className?: string; color?: string }> = ({ 
  className, 
  color = "bg-brand-orange" 
}) => {
  return (
    <span className={cn("relative flex h-3 w-3", className)}>
      <span className={cn(
        "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
        color
      )} />
      <span className={cn(
        "relative inline-flex rounded-full h-3 w-3",
        color
      )} />
    </span>
  );
};

// ==========================================
// SYSTEM LAYER ICONS MAP
// ==========================================

export const SystemLayerIcons = {
  '01': OfferIcon,
  '02': FunnelIcon,
  '03': AutomationIcon,
  '04': AdsIcon,
  '05': AnalyticsIcon,
};

export default LottieIcon;
