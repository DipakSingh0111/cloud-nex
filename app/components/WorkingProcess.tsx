"use client";

import React from "react";
import { MessageSquare, MonitorCheck, CloudUpload, FileCheck } from "lucide-react";
import { site, type PortfolioProcessData, type SectionProps } from "@/data";

const iconMap: Record<string, React.ElementType> = {
  MessageSquare,
  MonitorCheck,
  CloudUpload,
  FileCheck
};

export default function WorkingProcess({ data, className = "" }: SectionProps<PortfolioProcessData> = {}) {
  const process = data || site.portfolio.process;

  return (
    <section className={`bg-[#f8faff] py-16 lg:py-24 font-sans relative overflow-hidden ${className}`}>
      
      {/* Decorative Lines */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-200 hidden lg:block -translate-y-12 z-0 opacity-50" />
      
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[2px] w-10 bg-[#3cb024] rounded-full inline-block" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#0a1a44] bg-blue-50 px-3 py-1 rounded-full uppercase">
              {process.badge}
            </span>
            <span className="h-[2px] w-10 bg-[#3cb024] rounded-full inline-block" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0a1a44] tracking-tight mb-5 leading-tight">
            {process.heading.main}
            <span className="text-[#3cb024]">{process.heading.highlight}</span>
          </h2>
          
          <p className="text-[16px] text-[#5c6a7a] font-medium leading-relaxed max-w-2xl mx-auto">
            {process.description}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative">
          
          {/* Dashed Line SVG for Desktop */}
          <div className="hidden lg:block absolute top-[60px] left-[15%] right-[15%] h-8 z-0">
            <svg width="100%" height="100%" preserveAspectRatio="none">
              <path 
                d="M 0,15 Q 100,0 200,15 T 400,15 T 600,15 T 800,15" 
                fill="none" 
                stroke="#1a6dff" 
                strokeWidth="2" 
                strokeDasharray="8 8" 
                className="opacity-40 animate-[dash_20s_linear_infinite]"
                style={{ strokeLinecap: "round" }}
              />
            </svg>
          </div>

          {process.list.map((step, idx) => {
            const Icon = iconMap[step.icon] || MessageSquare;
            return (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                
                {/* Step Circle */}
                <div className="relative w-28 h-28 mb-8 rounded-full bg-white shadow-[0_10px_30px_rgba(26,109,255,0.12)] flex items-center justify-center border-[3px] border-white group hover:border-[#1a6dff] transition-colors duration-300">
                  <Icon className="w-10 h-10 text-[#1a6dff] stroke-[1.5]" />
                  
                  {/* Step Number Badge */}
                  <div className={`absolute -top-1 -right-1 w-8 h-8 rounded-full ${step.badgeColor} text-white font-bold text-sm flex items-center justify-center shadow-md border-2 border-white`}>
                    {step.id}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-[19px] font-bold text-[#0a1a44] mb-3">
                  {step.title}
                </h3>
                <p className="text-[14.5px] text-[#5c6a7a] font-medium leading-relaxed max-w-[260px]">
                  {step.description}
                </p>
                
              </div>
            );
          })}
        </div>

      </div>
      
      {/* CSS for animating dash line if needed */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes dash {
          to { stroke-dashoffset: -100; }
        }
      `}} />
    </section>
  );
}
