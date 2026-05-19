"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from 'next/link';

const NotFound = () => {
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route"
    );
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafaf8]">
      <div className="text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-8xl md:text-9xl font-black text-[#E54D2E] mb-4 tracking-tighter"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-neutral-700 mb-8 font-bold uppercase tracking-tight"
        >
          Oops! This page doesn't exist
        </motion.p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#140E0E] text-white font-black uppercase tracking-wider shadow-[0_4px_0_0_#E54D2E] hover:shadow-none hover:translate-y-1 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
