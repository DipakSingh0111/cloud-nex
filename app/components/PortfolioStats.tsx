"use client";

import React from "react";
import { Users, Cloud, ShieldCheck, Headset } from "lucide-react";
import { site, type PortfolioStatsData, type SectionProps } from "@/data";

const iconMap: Record<string, React.ElementType> = {
  Users,
  Cloud,
  ShieldCheck,
  Headset
};

export default function PortfolioStats({ data, className = "" }: SectionProps<PortfolioStatsData> = {}) {
  const stats = data || site.portfolio.stats;

  return (
    <section className={`bg-[#0a1a44] py-14 lg:py-16 font-sans relative overflow-hidden ${className}`}>
      
      {/* Background Gradients/Patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-t from-green-900/10 to-transparent pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 divide-x-0 lg:divide-x lg:divide-[#1c305c]">
          
          {stats.map((stat, idx) => {
            const Icon = iconMap[stat.icon] || Users;
            return (
              <div key={idx} className="flex items-center gap-5 lg:justify-center">
                
                {/* Icon */}
                <div className="w-16 h-16 shrink-0 flex items-center justify-center">
                  <Icon className="w-10 h-10 text-white stroke-[1.5] opacity-80" />
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  <span className="text-3xl lg:text-[40px] font-extrabold text-white leading-none mb-2 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[14px] text-blue-100/80 font-medium tracking-wide">
                    {stat.label}
                  </span>
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
