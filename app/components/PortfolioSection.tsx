"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Cloud,
  Database,
  LayoutGrid,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { site, type PortfolioProjectsData, type SectionProps } from "@/data";

const icons: Record<string, LucideIcon> = {
  Cloud,
  Database,
  ShieldCheck,
  Users,
  LayoutGrid,
};

export default function PortfolioSection({ data, className = "" }: SectionProps<PortfolioProjectsData> = {}) {
  const projects = data || site.portfolio.projects;
  const filterIcons: Record<string, string> = projects.filterIcons;
  const [activeFilter, setActiveFilter] = useState(projects.filters[0]);

  const filteredProjects =
    activeFilter === projects.filters[0]
      ? projects.list
      : projects.list.filter((item) => item.category === activeFilter);

  return (
    <section className={`bg-white pt-16 lg:pt-20 pb-4 lg:pb-8 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-left max-w-3xl mb-10">
          <div className="inline-flex items-center gap-4 mb-4">
            <span className="bg-[#e3eefc] text-[#1a5fd6] text-sm font-semibold tracking-[0.15em] uppercase px-5 py-1.5 rounded-md">
              {projects.badge}
            </span>
            <span className="w-12 h-[2px] bg-[#7fb0ff] rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0B2545] tracking-tight leading-tight mb-4">
            {projects.heading.main}
            <span className="text-[#2e9b2e]">{projects.heading.highlight}</span>
          </h2>

          <p className="text-[#4a5868] text-base sm:text-[17px] leading-relaxed max-w-2xl mx-auto">
            {projects.description}
          </p>
        </div>

        <div className="flex sm:flex-wrap items-center sm:justify-start gap-3 mb-12 overflow-x-auto pb-4 sm:pb-0 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 w-[calc(100%+32px)] sm:w-auto">
          {projects.filters.map((filter) => {
            const Icon = icons[filterIcons[filter]];
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`flex items-center shrink-0 snap-start gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#1a6dff] text-white shadow-[0_6px_16px_rgba(26,109,255,0.35)]"
                    : "bg-white text-[#33414f] border border-gray-200 hover:border-[#1a6dff] hover:text-[#1a6dff]"
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {filter}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => {
            const Icon = icons[project.icon] ?? Cloud;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-white rounded-2xl border border-gray-100 shadow-[0_6px_24px_rgba(26,95,214,0.07)] hover:shadow-[0_14px_34px_rgba(26,95,214,0.14)] transition-all duration-300 p-4 flex gap-4"
              >
                <div className="relative w-[42%] shrink-0 aspect-square rounded-xl overflow-hidden bg-[#061a33]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 160px, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex-1 min-w-0 flex flex-col py-1">
                  <div className="flex items-start gap-2.5 mb-2">
                    <div className="w-9 h-9 shrink-0 rounded-lg bg-[#e8f1ff] text-[#1a6dff] flex items-center justify-center">
                      <Icon className="w-[18px] h-[18px]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-[#0B2545] leading-snug group-hover:text-[#1a6dff] transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-[#1a6dff]">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#4a5868] leading-relaxed mb-3 line-clamp-4">
                    {project.description}
                  </p>

                  <Link
                    href={project.link}
                    className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold text-[#2e9b2e] hover:text-[#237a23] group/link"
                  >
                    {projects.viewDetailsLabel}
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
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
