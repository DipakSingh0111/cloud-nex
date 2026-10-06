"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import data from "../../data/cloudNex.json";

export interface Breadcrumb {
  label: string;
  url: string;
}

interface PageBannerProps {
  title: string;
  breadcrumbs: Breadcrumb[];
  bgImage?: string;
}

export default function PageBanner({ title, breadcrumbs, bgImage }: PageBannerProps) {
  const bg = bgImage || data.pageBanner.defaultBg;

  return (
    <section className="relative w-full h-[280px] sm:h-[320px] lg:h-[380px] flex items-center justify-center overflow-hidden font-sans mt-[-1px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${bg}')` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-[#061833]/70 backdrop-brightness-90" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 mt-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-lg tracking-tight">
          {title}
        </h1>

        <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded bg-[#092147] text-[13px] sm:text-sm font-bold tracking-wider text-white shadow-xl border border-white/5">
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && (
                <ChevronRight className="w-3.5 h-3.5 text-white stroke-[3] opacity-80" />
              )}
              {idx === breadcrumbs.length - 1 ? (
                <span className="uppercase text-white">{crumb.label}</span>
              ) : (
                <Link href={crumb.url} className="uppercase text-white hover:text-blue-400 transition-colors">
                  {crumb.label}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
