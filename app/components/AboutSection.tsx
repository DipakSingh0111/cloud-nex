import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { site, type AboutUsData, type SectionProps } from "@/data";

export default function AboutSection({ data, className = "" }: SectionProps<AboutUsData> = {}) {
  const aboutUs = data || site.about;

  return (
    <section className={`relative overflow-hidden bg-white pt-16 lg:pt-24 pb-6 lg:pb-10 ${className}`}>
      {/* Background Top-Right Dot Pattern */}
      <div className="absolute right-6 top-6 hidden md:grid grid-cols-6 gap-2 opacity-30 pointer-events-none">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="h-1.5 w-1.5 rounded-full bg-slate-400" />
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch">
          {/* LEFT COLUMN: Content */}
          <div className="lg:col-span-5 space-y-6">
            {/* Tagline */}
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-10 bg-[#3cb024] rounded-full inline-block" />
              <span className="text-xs font-bold tracking-widest text-[#0a1a44] uppercase">
                {aboutUs.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1a44] leading-tight tracking-tight">
              {aboutUs.heading.main}
              <span className="text-[#3cb024] block sm:inline">
                {aboutUs.heading.highlight}
              </span>
            </h2>

            {/* Description */}
            <p className="text-[15px] sm:text-base text-[#5c6a7a] leading-relaxed max-w-xl font-medium">
              {aboutUs.description}
            </p>

            {/* 2-Column Feature Checklist with Divider */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 pt-2 pb-4">
              <div className="flex-1 space-y-4">
                {aboutUs.features
                  .filter((_, i) => i % 2 === 0)
                  .map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#0a1a44] text-white">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </span>
                      <span className="text-[15.5px] font-medium text-[#0a1a44]">
                        {feature}
                      </span>
                    </div>
                  ))}
              </div>

              <div className="hidden sm:block w-[1px] bg-slate-200" />

              <div className="flex-1 space-y-4">
                {aboutUs.features
                  .filter((_, i) => i % 2 !== 0)
                  .map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#0a1a44] text-white">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </span>
                      <span className="text-[15.5px] font-medium text-[#0a1a44]">
                        {feature}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Framed Image with Abstract Shapes */}
          <div className="lg:col-span-7 relative flex justify-center mt-10 lg:mt-0 pl-0 lg:pl-10 h-full">
            {/* Top-Right Dot Grid */}
            <div className="absolute -top-10 -right-4 grid grid-cols-6 gap-2 opacity-30 z-0 pointer-events-none">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              ))}
            </div>

            {/* Bottom-Left Dot Grid */}
            <div className="absolute -bottom-10 left-4 grid grid-cols-6 gap-2 opacity-30 z-0 pointer-events-none">
              {Array.from({ length: 24 }).map((_, i) => (
                <div
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-green-600"
                />
              ))}
            </div>

            {/* Background Thick Corner Frames */}
            {/* Top-Left Blue Block */}
            <div className="absolute -top-6 -left-2 w-[180px] h-[180px] bg-[#0047cc] rounded-tl-[40px] rounded-br-[40px] pointer-events-none z-0" />

            {/* Bottom-Right Green Block */}
            <div className="absolute -bottom-6 -right-2 w-[180px] h-[180px] bg-[#3cb024] rounded-br-[40px] rounded-tl-[40px] pointer-events-none z-0" />

            {/* Main Image Container */}
            <div className="relative z-10 w-full h-full min-h-[350px] overflow-hidden rounded-[32px] border-[10px] border-white bg-white shadow-xl">
              <Image
                src={aboutUs.image.src}
                alt="CloudNex Team"
                fill
                className="object-cover object-center rounded-[22px]"
                preload
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
