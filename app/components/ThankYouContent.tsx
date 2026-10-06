import React from "react";
import Link from "next/link";
import { Check, Mail, Clock, Users, Settings, ArrowRight } from "lucide-react";
import { site, type SectionProps, type ThankYouPageData } from "@/data";

const iconMap: Record<string, React.ElementType> = {
  Mail,
  Clock,
  Users,
  Settings,
};

export default function ThankYouContent({ data, className = "" }: SectionProps<ThankYouPageData> = {}) {
  const thankYouPage = data || site.thankYou;

  return (
    <section className={`min-h-screen bg-gradient-to-b from-[#f8fbff] to-[#ebf4ff] font-sans overflow-hidden relative ${className}`}>
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[100px]" />
        <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] bg-emerald-400/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] left-[30%] w-[500px] h-[500px] bg-blue-300/10 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          {/* Giant Checkmark */}
          <div className="relative mb-10">
            {/* Outer rings */}
            <div className="absolute inset-0 rounded-full border-2 border-emerald-100 animate-ping opacity-20" />
            <div className="absolute -inset-4 rounded-full border border-emerald-200 opacity-50" />
            <div className="absolute -inset-8 rounded-full border border-emerald-100 border-dashed opacity-40 animate-[spin_20s_linear_infinite]" />

            <div className="w-28 h-28 lg:w-36 lg:h-36 bg-gradient-to-tr from-emerald-400 to-teal-300 rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(52,211,153,0.3)] relative z-10">
              <Check className="w-14 h-14 lg:w-16 lg:h-16 text-white stroke-[3]" />
            </div>

            {/* Decorative particles */}
            <div className="absolute -top-6 -right-6 w-4 h-4 bg-blue-400 rounded-full" />
            <div className="absolute top-10 -left-10 w-2 h-2 bg-emerald-400 rounded-full" />
            <div className="absolute -bottom-4 right-10 w-3 h-3 bg-blue-500 rounded-full" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B2545] tracking-tight leading-tight mb-4">
            {thankYouPage.heading.main}
            <span className="text-[#3cb024]">{thankYouPage.heading.highlight}</span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b4c] mb-5">
            {thankYouPage.subtitle}
          </h2>

          <p className="text-gray-500 text-base sm:text-lg mb-10 max-w-xl leading-relaxed">
            {thankYouPage.description}
          </p>

          <Link
            href={thankYouPage.button.href}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-bold text-[15px] bg-[#1a6dff] hover:bg-[#1558d6] active:scale-95 transition-all shadow-[0_8px_20px_rgba(26,109,255,0.25)] hover:shadow-[0_10px_25px_rgba(26,109,255,0.35)] mb-20"
          >
            <span>{thankYouPage.button.label}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>

        {/* Features Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {thankYouPage.list.map((feature, idx) => {
            const Icon = iconMap[feature.icon] ?? Check;
            const isGreen = idx % 2 === 0;
            return (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-white hover:-translate-y-1 transition-transform duration-300"
              >
                <div
                  className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-5 ${
                    isGreen
                      ? "bg-emerald-50 text-emerald-500"
                      : "bg-blue-50 text-blue-500"
                  }`}
                >
                  <Icon className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h3 className="text-[17px] font-bold text-[#0B2545] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-[14.5px] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
