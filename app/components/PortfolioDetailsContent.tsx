"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle2, 
  Lightbulb, 
  User, 
  LayoutGrid, 
  CalendarDays, 
  CalendarCheck, 
  Coins, 
  MapPin, 
  ArrowRight,
  Link as LinkIcon,
  Mail
} from "lucide-react";
import { site, type PortfolioDetailsData, type SectionProps } from "@/data";

const iconMap: Record<string, React.ElementType> = {
  User,
  LayoutGrid,
  CalendarDays,
  CalendarCheck,
  Coins,
  MapPin
};

export default function PortfolioDetailsContent({ data, className = "" }: SectionProps<PortfolioDetailsData> = {}) {
  const portfolioDetails = data || site.portfolioDetails;
  const { overview, challenges, solution, information } = portfolioDetails;

  return (
    <section className={`bg-white pt-16 lg:pt-24 pb-0 font-sans ${className}`}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column (Main Content) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#3cb024] rounded-full inline-block" />
                <span className="text-sm font-bold text-[#0a1a44]">{overview.badge}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0a1a44] leading-tight tracking-tight whitespace-pre-line">
                {overview.heading.main.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i === 1 && <span className="text-[#3cb024]">{overview.heading.highlight}</span>}
                  </React.Fragment>
                ))}
                {overview.heading.main.indexOf('\n') === -1 && <span className="text-[#3cb024]">{overview.heading.highlight}</span>}
              </h2>
              <div className="space-y-4">
                {overview.description.map((p, i) => (
                  <p key={i} className="text-[15px] sm:text-[16px] text-[#5c6a7a] leading-relaxed font-medium">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[450px] rounded-[24px] overflow-hidden shadow-lg">
              <Image 
                src={overview.image}
                alt="Project Overview"
                fill
                className="object-cover"
              />
            </div>

            {/* Challenges & Solution Split (Actually they are side-by-side in bottom section?) No, the design shows them below image. Wait, the design shows Challenges below the image, and then lists. Let's do a grid for the bottom lists. */}
            <div className="space-y-10">
              
              {/* Top Row: Challenges Text & Solution Box */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
                
                {/* Challenges Text */}
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="h-[2px] w-10 bg-[#3cb024] rounded-full inline-block" />
                    <h3 className="text-2xl font-bold text-[#0a1a44]">{challenges.badge}</h3>
                  </div>
                  <p className="text-[15px] sm:text-[16px] text-[#5c6a7a] leading-relaxed font-medium">
                    {challenges.description}
                  </p>
                </div>

                {/* Our Solution Box */}
                <div className="bg-[#f8fbff] rounded-[24px] p-6 sm:p-8 border border-blue-50 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#1a6dff]/5 rounded-bl-full pointer-events-none" />
                  
                  <div className="flex flex-col sm:flex-row gap-5 relative z-10">
                    <div className="shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-blue-100">
                      <Lightbulb className="w-5 h-5 text-[#1a6dff]" />
                    </div>
                    <div>
                      <h3 className="text-[20px] font-bold text-[#0a1a44] mb-2">{solution.title}</h3>
                      <p className="text-[14px] text-[#5c6a7a] font-medium leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Row: Lists */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                
                {/* Left List: Blue Checkmarks */}
                <div className="space-y-4">
                  {challenges.list.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="shrink-0 w-[22px] h-[22px] rounded-full bg-[#1a6dff] flex items-center justify-center">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-[#5c6a7a] font-medium text-[15px] leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Right List: Green Checkmarks */}
                <div className="space-y-4">
                  {solution.list.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="shrink-0 w-[22px] h-[22px] rounded-full bg-[#3cb024] flex items-center justify-center shadow-[0_2px_8px_rgba(60,176,36,0.3)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white stroke-[3]" />
                      </div>
                      <span className="text-[#5c6a7a] font-medium text-[15px] leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>

          </div>

          {/* Right Column (Sidebar) */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 bg-[#f8fbff] rounded-[24px] p-8 lg:p-10 border border-[#e4eefb]">
              
              <div className="flex items-center gap-3 mb-8">
                <span className="h-[2px] w-8 bg-[#3cb024] rounded-full inline-block" />
                <h3 className="text-[22px] font-bold text-[#0a1a44]">{information.title}</h3>
              </div>

              <div className="space-y-4 mb-10">
                {information.details.map((detail, idx) => {
                  const Icon = iconMap[detail.icon] || User;
                  return (
                    <div key={idx} className="bg-white rounded-[14px] p-4 flex items-center gap-4 shadow-sm border border-slate-100">
                      <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#1a6dff]" />
                      </div>
                      <div className="flex-1 flex justify-between items-center text-[15px]">
                        <span className="font-bold text-[#0a1a44]">{detail.label}</span>
                        <span className="text-[#5c6a7a] font-medium text-right">{detail.value}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Link
                href={information.button.href}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#1a6dff] to-[#3cb024] text-white py-4 rounded-xl font-bold text-[16px] hover:shadow-[0_10px_25px_rgba(60,176,36,0.25)] transition-all active:scale-[0.98]"
              >
                {information.button.label}
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </Link>

              <div className="mt-10">
                <h4 className="text-[17px] font-bold text-[#0a1a44] mb-5">{information.shareTitle}</h4>
                <div className="flex flex-wrap gap-3">
                  <button className="w-11 h-11 rounded-full bg-white flex items-center justify-center border border-slate-200 text-[#5c6a7a] hover:bg-[#1a6dff] hover:text-white hover:border-[#1a6dff] transition-all shadow-sm">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                  </button>
                  <button className="w-11 h-11 rounded-full bg-white flex items-center justify-center border border-slate-200 text-[#5c6a7a] hover:bg-[#1a6dff] hover:text-white hover:border-[#1a6dff] transition-all shadow-sm">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
                  </button>
                  <button className="w-11 h-11 rounded-full bg-white flex items-center justify-center border border-slate-200 text-[#5c6a7a] hover:bg-[#1a6dff] hover:text-white hover:border-[#1a6dff] transition-all shadow-sm">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
                  </button>
                  <button className="w-11 h-11 rounded-full bg-white flex items-center justify-center border border-slate-200 text-[#5c6a7a] hover:bg-[#1a6dff] hover:text-white hover:border-[#1a6dff] transition-all shadow-sm">
                    <LinkIcon className="w-4 h-4" />
                  </button>
                  <button className="w-11 h-11 rounded-full bg-white flex items-center justify-center border border-slate-200 text-[#5c6a7a] hover:bg-[#1a6dff] hover:text-white hover:border-[#1a6dff] transition-all shadow-sm">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
