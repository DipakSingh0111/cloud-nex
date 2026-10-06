"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Cloud, 
  Server, 
  Shield, 
  Headset, 
  Layout, 
  CloudLightning,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { site, type PortfolioProjectsData, type SectionProps } from "@/data";

const iconMap: Record<string, React.ElementType> = {
  Cloud,
  Server,
  Shield,
  Headset,
  Layout,
  CloudLightning
};

export default function PortfolioGrid({ data, className = "" }: SectionProps<PortfolioProjectsData> = {}) {
  const projects = data || site.portfolio.projects;
  const [activeFilter, setActiveFilter] = useState(projects.filters[0]);

  const filteredProjects = activeFilter === projects.filters[0]
    ? projects.list 
    : projects.list.filter(item => item.category === activeFilter);

  return (
    <section className={`bg-white pt-16 lg:pt-24 pb-12 lg:pb-16 font-sans ${className}`}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[2px] w-10 bg-slate-300 rounded-full inline-block" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#1a6dff] bg-blue-50 px-3 py-1 rounded-full uppercase">
              {projects.badge}
            </span>
            <span className="h-[2px] w-10 bg-slate-300 rounded-full inline-block" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0a1a44] tracking-tight mb-5 leading-tight">
            {projects.heading.main}
            <span className="text-[#3cb024]">{projects.heading.highlight}</span>
          </h2>
          
          <p className="text-[16px] text-[#5c6a7a] font-medium leading-relaxed max-w-2xl mx-auto">
            {projects.description}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          {projects.filters.map((filter, i) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={i}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                  isActive 
                  ? "bg-[#1a6dff] text-white shadow-[0_4px_14px_rgba(26,109,255,0.4)]" 
                  : "bg-white text-[#5c6a7a] border border-[#e4eefb] hover:border-[#1a6dff] hover:text-[#1a6dff]"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((item, idx) => {
            const Icon = iconMap[item.icon] || Cloud;
            return (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-white rounded-[24px] border border-[#f0f4f8] shadow-[0_4px_24px_rgba(0,0,0,0.02)] overflow-hidden hover:shadow-[0_20px_40px_rgba(11,37,69,0.08)] transition-all duration-300 flex flex-col h-full"
              >
                {/* Image Section */}
                <div className="relative w-full h-[220px] overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#0a1a44]/10 group-hover:bg-transparent transition-colors duration-500" />
                  
                  {/* Floating Icon */}
                  <div className="absolute -bottom-6 left-6 w-14 h-14 bg-white rounded-full p-1.5 shadow-lg z-10 group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-full h-full rounded-full bg-blue-50 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#1a6dff] stroke-[2.5]" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 pt-10 flex-1 flex flex-col">
                  <span className="text-[11px] font-bold tracking-widest text-[#1a6dff] uppercase mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-[19px] font-bold text-[#0a1a44] mb-3 leading-snug group-hover:text-[#1a6dff] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-[#5c6a7a] leading-relaxed mb-6 flex-1">
                    {item.description}
                  </p>
                  
                  <Link 
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-[#3cb024] font-bold text-[13px] uppercase tracking-wide hover:text-[#2d9418] transition-colors mt-auto"
                  >
                    {projects.viewDetailsLabel}
                    <ArrowRight className="w-4 h-4 stroke-[3]" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
