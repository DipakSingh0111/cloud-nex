"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import {
  ArrowUp,
  CircleCheck,
  Cloud,
  FileText,
  MessageSquare,
  MessageSquareMore,
  Monitor,
  Settings,
} from "lucide-react";
import data from "../../data/cloudNex.json";
import CountUp from "./common/CountUp";

// Custom Stat Icons matching the design
const StatUsers = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none">
    {/* Left/Right green people */}
    <path d="M5 14c-2 0-3 1-3 3v2h4 M19 14c2 0 3 1 3 3v2h-4" stroke="#3cb024" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="5" cy="9" r="2" stroke="#3cb024" strokeWidth="1.5" />
    <circle cx="19" cy="9" r="2" stroke="#3cb024" strokeWidth="1.5" />
    {/* Center white person */}
    <path d="M12 12c-2.5 0-5 1.5-5 4v3h10v-3c0-2.5-2.5-4-5-4z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="7" r="3" stroke="white" strokeWidth="2" />
  </svg>
);

const StatCloud = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none">
    {/* Cloud white */}
    <path d="M7 16a4 4 0 0 1-.88-7.9 6 6 0 0 1 11.76 0A4 4 0 0 1 17 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Server stack green */}
    <rect x="10" y="12" width="10" height="4" rx="1" stroke="#3cb024" strokeWidth="1.5" />
    <rect x="10" y="17" width="10" height="4" rx="1" stroke="#3cb024" strokeWidth="1.5" />
    <circle cx="12" cy="14" r="0.5" fill="#3cb024" />
    <circle cx="12" cy="19" r="0.5" fill="#3cb024" />
    <path d="M15 14h3 M15 19h3" stroke="#3cb024" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const StatShield = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none">
    {/* Shield white */}
    <path d="M12 3l8 3v6c0 5.5-3.8 10.7-8 12-4.2-1.3-8-6.5-8-12V6l8-3z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Check green */}
    <path d="M9 12l2 2 4-4" stroke="#3cb024" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const StatSupport = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none">
    {/* Headphones white */}
    <path d="M4 14v-3a8 8 0 1 1 16 0v3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="2" y="14" width="4" height="6" rx="1" stroke="white" strokeWidth="2" />
    <rect x="18" y="14" width="4" height="6" rx="1" stroke="white" strokeWidth="2" />
    {/* Mic green */}
    <path d="M19 20a4 4 0 0 1-7 1" stroke="#3cb024" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="21" r="1.5" fill="#3cb024" />
  </svg>
);

const BLUE = "#1a6dff";
const GREEN = "#2e9b2e";

const stepIcons: Record<string, ReactNode> = {
  discussion: (
    <div className="relative w-16 h-16 sm:w-[70px] sm:h-[70px] flex items-center justify-center">
      <Image src="/images/icons/message.svg" alt="Project Discussion" fill className="object-contain" />
    </div>
  ),
  planning: (
    <div className="relative w-16 h-16 sm:w-[70px] sm:h-[70px] flex items-center justify-center">
      <Image src="/images/icons/monitor.svg" alt="Planning & Design" fill className="object-contain" />
    </div>
  ),
  implementation: (
    <div className="relative w-16 h-16 sm:w-[70px] sm:h-[70px] flex items-center justify-center">
      <Image src="/images/icons/cloud_upload.svg" alt="Implementation" fill className="object-contain" />
    </div>
  ),
  review: (
    <div className="relative w-16 h-16 sm:w-[70px] sm:h-[70px] flex items-center justify-center">
      <Image src="/images/icons/document.svg" alt="Review & Support" fill className="object-contain" />
    </div>
  ),
};

function CurvedArrow({ className, style }: { className: string; style: CSSProperties }) {
  return (
    <svg viewBox="0 0 130 40" fill="none" className={className} style={style} aria-hidden>
      <path
        d="M4 30 C 40 2, 90 2, 120 26"
        stroke={BLUE}
        strokeWidth="2"
        strokeDasharray="5 5"
        strokeLinecap="round"
      />
      <path
        d="M111 25 L121 27 L118 17"
        stroke={BLUE}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HowItWorks() {
  const { howItWorks } = data;
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "/portfolio";

  return (
    <section className="bg-white pt-0 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto pb-12 lg:pb-16">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-4 mb-4">
            <span className="w-12 h-[2px] bg-[#7fb0ff] rounded-full" />
            <span className="bg-[#e3eefc] text-[#1a5fd6] text-sm font-semibold tracking-[0.15em] uppercase px-5 py-1.5 rounded-md">
              {howItWorks.badge}
            </span>
            <span className="w-12 h-[2px] bg-[#7fb0ff] rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0B2545] tracking-tight leading-tight mb-4">
            {howItWorks.title} <span className="text-[#2e9b2e]">{howItWorks.highlight}</span>
          </h2>

          <p className="text-[#4a5868] text-base sm:text-[18px] leading-relaxed max-w-xl mx-auto">
            {howItWorks.description}
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 pb-8">
          {[1, 2, 3].map((n) => (
            <CurvedArrow
              key={n}
              className="hidden lg:block absolute top-6 w-[120px] -translate-x-1/2"
              style={{ left: `${n * 25}%` }}
            />
          ))}

          {howItWorks.steps.map((step, i) => {
            const isGreen = i % 2 === 1;
            return (
              <motion.div 
                key={step.title} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center px-2"
              >
                <div className="relative mx-auto mb-7 w-32 h-32">
                  <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-[0_10px_35px_rgba(26,95,214,0.12)]">
                    {stepIcons[step.icon]}
                  </div>
                  <span
                    className={`absolute -top-2 -right-2 w-11 h-11 rounded-full text-white text-base font-bold flex items-center justify-center ${
                      isGreen ? "bg-[#2e9b2e]" : "bg-[#1a6dff]"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0B2545] mb-2">{step.title}</h3>
                <p className="text-[#4a5868] text-[15px] leading-relaxed max-w-[260px] mx-auto">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {isHomePage && (
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 bg-[#092147] overflow-hidden">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute left-[10%] top-0 w-[40%] h-full bg-blue-500/20 blur-[100px]" />
          <div className="absolute right-[10%] top-0 w-[40%] h-full bg-[#1a6dff]/10 blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 px-4 sm:px-6 lg:px-8">
          {howItWorks.stats.map((stat, i) => {
            const icons = [<StatUsers key={0} />, <StatCloud key={1} />, <StatShield key={2} />, <StatSupport key={3} />];
            return (
              <div
                key={stat.label}
                className={`flex flex-col sm:flex-row items-center sm:justify-center text-center sm:text-left gap-3 sm:gap-5 py-8 sm:py-12 lg:py-16 ${
                  i > 0 ? "lg:border-l border-white/10" : ""
                } ${i % 2 !== 0 ? "border-l border-white/10" : ""}`}
              >
                <div className="shrink-0 flex items-center justify-center scale-75 sm:scale-100">
                  {icons[i]}
                </div>
                <div className="flex flex-col">
                  <p className="text-3xl sm:text-[2.5rem] lg:text-[3rem] font-bold text-white leading-none mb-1 tracking-tight">
                    <CountUp value={stat.value} />
                  </p>
                  <p className="text-xs sm:text-[14px] text-blue-50/90 font-medium tracking-wide">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      )}
    </section>
  );
}
