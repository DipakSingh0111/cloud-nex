"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { site, type SectionProps, type ServicesPageData } from "@/data";

export default function ServicesPageGrid({ data, className = "" }: SectionProps<ServicesPageData> = {}) {
  const servicesPage = data || site.servicesPage;

  return (
    <section className={`bg-white pt-8 lg:pt-12 pb-12 lg:pb-14 relative overflow-hidden font-sans ${className}`}>
      {/* Top Background Waves / Gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#f4f8fe] to-white pointer-events-none" />

      {/* Background Decorative Dots */}
      <div className="absolute top-20 right-[5%] grid grid-cols-6 gap-2 opacity-[0.15] pointer-events-none">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="h-1.5 w-1.5 rounded-full bg-[#1a6dff]" />
        ))}
      </div>
      <div className="absolute bottom-20 left-[5%] grid grid-cols-6 gap-2 opacity-[0.15] pointer-events-none">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="h-1.5 w-1.5 rounded-full bg-[#1a6dff]" />
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-[2px] w-12 bg-slate-300 rounded-full" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#5c6a7a] uppercase">
              {servicesPage.header.badge}
            </span>
            <span className="h-[2px] w-12 bg-slate-300 rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0a1a44] leading-tight mb-5 tracking-tight">
            {servicesPage.header.heading.main}
            <span className="text-[#3cb024]">
              {servicesPage.header.heading.highlight}
            </span>
          </h2>

          <p className="text-[16px] text-[#5c6a7a] font-medium leading-relaxed max-w-2xl mx-auto">
            {servicesPage.header.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-8">
          {servicesPage.list.map((service, idx) => {
            return (
              <Link
                href={service.link}
                key={idx}
                className="block group relative bg-white rounded-[20px] p-7 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(11,37,69,0.08)] transition-all duration-300 overflow-hidden border border-[#f0f4f8]"
              >
                {/* ID Number */}
                <div className="absolute top-5 right-6 text-[26px] font-black text-[#f0f4f8] group-hover:text-[#e4eefb] transition-colors pointer-events-none">
                  {service.id}
                </div>

                {/* Service Icon Image */}
                <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] mb-6 group-hover:-translate-y-1 transition-transform duration-300">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="text-[18px] font-bold text-[#0a1a44] mb-3 leading-snug">
                  {service.title}
                </h3>

                <p className="text-[14.5px] text-[#5c6a7a] leading-relaxed mb-6 line-clamp-3">
                  {service.description}
                </p>

                <span className="inline-flex items-center gap-1.5 text-[#3cb024] font-bold text-[14px] group-hover:text-[#2d9418] transition-colors mt-auto">
                  Learn More
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
