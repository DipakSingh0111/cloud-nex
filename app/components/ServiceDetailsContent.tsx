"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Smartphone,
  Zap,
  Search,
  Layers,
  Play,
  Rocket,
  Users,
  UsersRound,
  ShieldCheck,
  TrendingUp,
  ChartColumnIncreasing,
  ArrowRight,
} from "lucide-react";
import { site, type SectionProps, type ServiceDetailsData } from "@/data";

const iconMap: Record<string, React.ElementType> = {
  Smartphone,
  Zap,
  Search,
  Layers,
  Rocket,
  Users,
  UsersRound,
  ShieldCheck,
  TrendingUp,
  ChartColumnIncreasing,
};

export default function ServiceDetailsContent({ data, className = "" }: SectionProps<ServiceDetailsData> = {}) {
  const serviceDetails = data || site.serviceDetails;
  const { overview, approach, benefits } = serviceDetails;

  return (
    <div className={`bg-white font-sans ${className}`}>
      {/* OVERVIEW SECTION */}
      <section className="relative pt-8 lg:pt-12 pb-6 lg:pb-10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            {/* Left Column: Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#3cb024] rounded-full inline-block" />
                <span className="text-xs font-bold tracking-[0.2em] text-[#0a1a44] uppercase">
                  {overview.badge}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0a1a44] leading-tight tracking-tight">
                {overview.heading.main}
                <span className="text-[#3cb024] block sm:inline">
                  {overview.heading.highlight}
                </span>
              </h2>

              <div className="space-y-4">
                {overview.description.map((p, i) => (
                  <p
                    key={i}
                    className="text-[15px] sm:text-[16px] text-[#5c6a7a] leading-relaxed font-medium"
                  >
                    {p}
                  </p>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-6 pt-4">
                {overview.features.map((feature, i) => {
                  const Icon = iconMap[feature.icon] || Layers;
                  return (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-12 h-12 shrink-0 rounded-xl bg-green-50 flex items-center justify-center shadow-sm">
                        <Icon className="w-6 h-6 text-[#3cb024] stroke-[2]" />
                      </div>
                      <span className="text-[15px] font-bold text-[#0a1a44] leading-snug">
                        {feature.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-6 relative flex justify-center mt-10 lg:mt-0 lg:pl-10 h-full min-h-[350px]">
              <div className="absolute -top-6 -left-2 grid grid-cols-6 gap-2 opacity-30 pointer-events-none">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-slate-400"
                  />
                ))}
              </div>
              <div className="absolute -bottom-6 -right-2 w-[180px] h-[180px] bg-[#3cb024] rounded-br-[40px] rounded-tl-[40px] pointer-events-none" />

              <div className="relative z-10 w-full h-full rounded-[32px] border-[10px] border-white shadow-xl overflow-hidden">
                <Image
                  src={overview.image}
                  alt="Overview Image"
                  fill
                  className="object-cover object-center rounded-[22px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH SECTION */}
      <section className="relative py-6 lg:py-10">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Video/Image */}
            <div className="lg:col-span-6 relative w-full h-[300px] sm:h-[400px] rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src={approach.videoThumbnail}
                alt="Approach Video"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#0a1a44]/20" />

              {/* Play Button */}
              <button className="absolute inset-0 m-auto w-20 h-20 bg-[#1a6dff] rounded-full flex items-center justify-center text-white shadow-[0_0_0_10px_rgba(26,109,255,0.3)] hover:scale-110 transition-transform">
                <Play className="w-8 h-8 ml-1 fill-white" />
              </button>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#3cb024] rounded-full inline-block" />
                <span className="text-xs font-bold tracking-[0.2em] text-[#0a1a44] uppercase">
                  {approach.badge}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0a1a44] leading-tight tracking-tight">
                {approach.heading.main}
              </h2>

              <p className="text-[15px] sm:text-[16px] text-[#5c6a7a] leading-relaxed font-medium pb-2">
                {approach.description}
              </p>

              <Link
                href={approach.button.href}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-bold text-[15px] bg-[#3cb024] hover:bg-[#329e1c] transition-all shadow-lg"
              >
                <span>{approach.button.label}</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* KEY BENEFITS SECTION */}
      <section className="relative py-10 lg:py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-2">
              <span className="h-[3px] w-12 bg-[#3cb024] rounded-full inline-block" />
              <span className="text-xs font-bold tracking-[0.15em] text-[#0a1a44] uppercase">
                {benefits.badge}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0a1a44] tracking-tight leading-tight">
              {benefits.heading.main}
              <span className="text-[#3cb024]">{benefits.heading.highlight}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {benefits.list.map((item, i) => {
              const Icon = iconMap[item.icon] || Rocket;
              return (
                <div
                  key={i}
                  className="bg-gradient-to-br from-[#f2f7fe] to-[#f8fbff] rounded-[20px] p-6 lg:p-7 shadow-[0_6px_24px_rgba(26,95,214,0.06)] hover:shadow-[0_14px_34px_rgba(26,95,214,0.12)] hover:-translate-y-1 transition-all duration-300 border border-white"
                >
                  <div
                    className={`w-14 h-14 rounded-full ${item.iconBg} flex items-center justify-center mb-6 shadow-[0_8px_18px_rgba(26,109,255,0.25)]`}
                  >
                    <Icon className={`w-6 h-6 ${item.iconColor} stroke-[2]`} />
                  </div>
                  <h3 className="text-lg font-bold text-[#0a1a44] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-[#4a5868] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
