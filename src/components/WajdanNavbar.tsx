
"use client";
import React from "react";
import { Home, User, Briefcase, FileText, Phone } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { cn } from "@/lib/utils";

function WajdanNavbar({ className }: { className?: string }) {
  const navItems = [
    { name: 'Services', url: '#services', icon: Briefcase },
    { name: 'About', url: '#about', icon: User },
    { name: 'Results', url: '#testimonials', icon: FileText },
    { name: 'Contact', url: '#contact', icon: Home },
    { name: 'Free Strategy Call', url: '#contact', icon: Phone, isButton: true }
  ];

  return (
    <div className={cn("fixed top-4 inset-x-0 max-w-6xl mx-auto z-50", className)}>
      <div className="flex items-center justify-between px-6">
        <div className="text-2xl font-bold text-brand-green">Wajdan</div>
        
        <div className="flex-1 flex justify-center">
          <NavBar items={navItems} className="relative" />
        </div>
      </div>
    </div>
  );
}

export default WajdanNavbar;
