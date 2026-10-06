"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CircleCheck,
  Crown,
  HandCoins,
  ShieldCheck,
} from "lucide-react";
import { site, type PackagesData, type SectionProps } from "@/data";

type Billing = "monthly" | "yearly";

const medalColors: Record<
  string,
  { from: string; to: string; ribbon: string }
> = {
  bronze: { from: "#f0a46a", to: "#b5612a", ribbon: "#1a5fd6" },
  silver: { from: "#f1f4f8", to: "#9aa5b4", ribbon: "#2e9b2e" },
  gold: { from: "#ffe27a", to: "#e3a31a", ribbon: "#e0453a" },
};

function Medal({ type }: { type: string }) {
  const c = medalColors[type] ?? medalColors.gold;
  const id = `medal-${type}`;
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10" aria-hidden>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={c.from} />
          <stop offset="1" stopColor={c.to} />
        </linearGradient>
      </defs>
      <path d="M15 2h7l4 14h-7z" fill={c.ribbon} />
      <path d="M33 2h-7l-4 14h7z" fill={c.ribbon} opacity="0.8" />
      <circle cx="24" cy="30" r="14" fill={`url(#${id})`} />
      <circle
        cx="24"
        cy="30"
        r="10"
        fill="none"
        stroke="#fff"
        strokeOpacity="0.6"
        strokeWidth="1.5"
      />
      <path
        d="M24 23.5l2 4 4.4.6-3.2 3.1.8 4.4-4-2.1-4 2.1.8-4.4-3.2-3.1 4.4-.6z"
        fill="#fff"
        fillOpacity="0.9"
      />
    </svg>
  );
}

export default function PricingSection({ data, className = "" }: SectionProps<PackagesData> = {}) {
  const page = data || site.packages;
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section className={`relative overflow-hidden bg-gradient-to-b from-white to-[#f5f9ff] py-14 lg:py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <svg
        viewBox="0 0 200 120"
        className="absolute -top-4 right-0 w-[420px] text-[#e6effc] pointer-events-none hidden md:block"
        aria-hidden
      >
        <path
          d="M50 100h110a35 35 0 0 0 0-70 48 48 0 0 0-90 12 30 30 0 0 0-20 58z"
          fill="currentColor"
        />
      </svg>

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-white fill-[#2e9b2e]" />
              <span className="text-sm font-semibold text-[#0B2545]">
                {page.badge}
              </span>
              <span className="w-12 h-[2px] bg-[#2e9b2e] rounded-full ml-1" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0B2545] leading-[1.1] tracking-tight mb-4">
              {page.heading.main}
              <br />
              {page.heading.line2}{" "}
              <span className="text-[#2e9b2e]">{page.heading.highlight}</span>
            </h2>
            <p className="text-[#4a5868] text-base leading-relaxed">
              {page.description}
            </p>
          </div>

          <div className="inline-flex self-start lg:self-center bg-white rounded-full p-1.5 shadow-[0_6px_24px_rgba(26,95,214,0.12)]">
            {(["monthly", "yearly"] as const).map((key) => (
              <button
                key={key}
                onClick={() => setBilling(key)}
                className={`px-7 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  billing === key
                    ? "bg-gradient-to-r from-[#1a6dff] to-[#0b4fd1] text-white shadow-md"
                    : "text-[#0B2545] hover:text-[#1a6dff]"
                }`}
              >
                {page.billing[key].label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {page.list.map((plan) => {
            const green = plan.popular;
            const accent = green ? "text-[#2e9b2e]" : "text-[#1a5fd6]";

            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                  green
                    ? "bg-gradient-to-b from-[#f0faf0] to-white border-2 border-[#3cb043] shadow-[0_16px_40px_rgba(46,155,46,0.18)]"
                    : "bg-white border border-gray-100 shadow-[0_10px_34px_rgba(26,95,214,0.08)]"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 bg-[#2e9b2e] text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
                    <Crown className="w-3.5 h-3.5 fill-white" />
                    {page.popularLabel}
                  </span>
                )}

                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#0B2545]">
                      {plan.name} <span className={accent}>Plan</span>
                    </h3>
                    <p className="text-sm text-[#4a5868] mt-1">
                      {page.subtitle}
                    </p>
                  </div>
                  <div className="w-16 h-16 shrink-0 rounded-full bg-white flex items-center justify-center shadow-[0_6px_20px_rgba(11,37,69,0.12)]">
                    <Medal type={plan.medal} />
                  </div>
                </div>

                <p className="mb-4">
                  <span
                    className={`text-4xl lg:text-[44px] font-extrabold ${accent}`}
                  >
                    {plan.price[billing]}
                  </span>
                  <span className="text-sm font-semibold text-[#0B2545] ml-1">
                    {page.billing[billing].suffix}
                  </span>
                </p>

                <div
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 mb-5 text-sm font-semibold text-[#0B2545] ${
                    green ? "bg-[#e3f4e3]" : "bg-[#eaf2fe]"
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-white ${
                      green ? "bg-[#2e9b2e]" : "bg-[#1a5fd6]"
                    }`}
                  >
                    <HandCoins className="w-3.5 h-3.5" />
                  </span>
                  {page.guarantee}
                </div>

                <ul
                  className={`rounded-xl p-4 space-y-3 mb-6 flex-grow ${
                    green ? "bg-white/70" : "bg-[#f6f9fe]"
                  }`}
                >
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 text-sm text-[#33414f]"
                    >
                      <CircleCheck
                        className={`w-[18px] h-[18px] shrink-0 text-white ${
                          green ? "fill-[#2e9b2e]" : "fill-[#1a5fd6]"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.button.href}
                  className={`h-12 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 group ${
                    green
                      ? "bg-gradient-to-r from-[#2e9b2e] to-[#1f7a1f] shadow-[0_8px_20px_rgba(46,155,46,0.35)]"
                      : "bg-gradient-to-r from-[#1a6dff] to-[#0b3fb8] shadow-[0_8px_20px_rgba(26,109,255,0.35)]"
                  }`}
                >
                  {plan.button.label}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
