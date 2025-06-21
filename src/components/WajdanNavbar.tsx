
"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function WajdanNavbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  
  return (
    <div className={cn("fixed top-4 inset-x-0 max-w-4xl mx-auto z-50", className)}>
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-brand-green ml-6">Wajdan</div>
        
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#services">Meta Ads That Convert</HoveredLink>
              <HoveredLink href="#services">Social Media Mastery</HoveredLink>
              <HoveredLink href="#services">Content That Converts</HoveredLink>
              <HoveredLink href="#services">Design That Sells</HoveredLink>
              <HoveredLink href="#services">Video That Engages</HoveredLink>
              <HoveredLink href="#services">Websites That Work</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="About">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#about">Our Story</HoveredLink>
              <HoveredLink href="#about">Our Process</HoveredLink>
              <HoveredLink href="#about">Why Choose Us</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Results">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#testimonials">Client Success Stories</HoveredLink>
              <HoveredLink href="#testimonials">Case Studies</HoveredLink>
              <HoveredLink href="#testimonials">Portfolio</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Contact">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#contact">Free Strategy Call</HoveredLink>
              <HoveredLink href="#contact">Get In Touch</HoveredLink>
            </div>
          </MenuItem>
        </Menu>

        <Button className="bg-brand-yellow text-brand-dark hover:bg-brand-yellow/90 font-semibold mr-6">
          Free Strategy Call
        </Button>
      </div>
    </div>
  );
}

export default WajdanNavbar;
