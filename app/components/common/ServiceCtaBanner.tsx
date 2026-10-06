"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, FileSearch } from "lucide-react";
import { motion } from "framer-motion";
import { site, type SectionProps, type ServicesCtaBannerData } from "@/data";

export default function ServiceCtaBanner({ data, className = "" }: SectionProps<ServicesCtaBannerData> = {}) {
  const ctaBanner = data || site.ctaBanner;

  return (
    <section className={`bg-white pb-12 lg:pb-14 px-6 sm:px-10 lg:px-16 font-sans ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-[1400px] mx-auto relative overflow-hidden rounded-[24px] bg-gradient-to-r from-[#0d62ff] to-[#3cb024] p-8 lg:p-12 shadow-[0_20px_40px_rgba(13,98,255,0.2)]"
      >
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg
            className="absolute left-0 bottom-0 w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="absolute right-20 bottom-10 grid grid-cols-5 gap-2 opacity-20 pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="h-1.5 w-1.5 rounded-full bg-white" />
          ))}
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-10 text-center lg:text-left flex-1">
            {/* Icon */}
            <div className="shrink-0 flex items-center justify-center w-20 h-20 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm shadow-inner">
              <FileSearch className="w-9 h-9 text-white stroke-[1.5]" />
            </div>

            {/* Content */}
            <div className="flex-1 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white leading-tight mb-4 tracking-tight">
                {ctaBanner.heading.main}
                <span className="text-[#a4f195]">{ctaBanner.heading.highlight}</span>
              </h2>
              <p className="text-[15px] sm:text-base text-blue-50/90 leading-relaxed font-medium">
                {ctaBanner.description}
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="shrink-0">
            <Link
              href={ctaBanner.button.href}
              className="inline-flex items-center gap-3 bg-white text-[#0a1a44] px-8 py-3.5 rounded-full font-bold text-[15px] hover:bg-[#f0f4f8] hover:scale-105 active:scale-95 transition-all shadow-lg"
            >
              {ctaBanner.button.label}
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
