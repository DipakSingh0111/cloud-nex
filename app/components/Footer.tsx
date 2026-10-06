"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ChevronUp,
  Heart,
} from "lucide-react";
import { site, type FooterData, type SectionProps } from "@/data";

export default function Footer({ data, className = "" }: SectionProps<FooterData> = {}) {
  const footer = data || site.footer;
  const contact = site.topbar;
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className={`relative bg-[#020b18] text-white pt-16 pb-6 overflow-hidden ${className}`}>
      {/* Background Gradient & Glow Effects */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -left-40 bottom-10 w-[500px] h-[300px] bg-emerald-500/20 rounded-full blur-[120px]" />
        <div className="absolute left-1/4 top-0 w-[600px] h-[400px] bg-blue-600/20 rounded-full blur-[140px]" />
        <div className="absolute right-0 bottom-0 w-[500px] h-[350px] bg-cyan-500/15 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 4 Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 pb-16">
          {/* Col 1: Brand Info */}
          <div className="col-span-2 lg:col-span-1 space-y-6">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              {site.header.logo ? (
                <Image
                  src="/images/footer_logo.png"
                  alt={site.global.logo.alt}
                  width={300}
                  height={90}
                  className="h-[85px] object-contain w-auto"
                />
              ) : (
                <div className="flex flex-col justify-center text-white">
                  <div className="text-3xl font-black tracking-tight leading-none">
                    CLOUD<span className="text-[#639818]">NEX</span>
                  </div>
                  <div className="text-[10px] font-bold tracking-[0.2em] text-white mt-1 pl-1">
                    CLOUD SOLUTIONS
                  </div>
                </div>
              )}
            </Link>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed pr-2">
              {footer.description}
            </p>

            {/* Social Icons (Pure SVG - Koi missing package error nahi aayega) */}
            <div className="flex items-center gap-3 pt-2">
              {/* Facebook */}
              <Link
                href={contact.socials.find((s: any) => s.platform === 'facebook')?.url || "#"}
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-slate-900/80 border border-slate-700/60 hover:border-cyan-400 flex items-center justify-center text-gray-300 hover:text-white transition duration-200 shadow-md backdrop-blur-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>

              {/* X / Twitter */}
              <Link
                href={contact.socials.find((s: any) => s.platform === 'x')?.url || "#"}
                aria-label="X"
                className="w-9 h-9 rounded-full bg-slate-900/80 border border-slate-700/60 hover:border-cyan-400 flex items-center justify-center text-gray-300 hover:text-white transition duration-200 shadow-md backdrop-blur-md"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>

              {/* Dribbble / Globe */}
              <Link
                href={contact.socials.find((s: any) => s.platform === 'dribbble')?.url || "#"}
                aria-label="Website"
                className="w-9 h-9 rounded-full bg-slate-900/80 border border-slate-700/60 hover:border-cyan-400 flex items-center justify-center text-gray-300 hover:text-white transition duration-200 shadow-md backdrop-blur-md"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
                  <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
                  <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
                </svg>
              </Link>

              {/* Behance */}
              <Link
                href={contact.socials.find((s: any) => s.platform === 'behance')?.url || "#"}
                aria-label="Behance"
                className="w-9 h-9 rounded-full bg-slate-900/80 border border-slate-700/60 hover:border-cyan-400 flex items-center justify-center text-gray-300 hover:text-white transition duration-200 shadow-md backdrop-blur-md font-bold text-xs"
              >
                Bē
              </Link>

              {/* LinkedIn */}
              <Link
                href={contact.socials.find((s: any) => s.platform === 'linkedin')?.url || "#"}
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-slate-900/80 border border-slate-700/60 hover:border-cyan-400 flex items-center justify-center text-gray-300 hover:text-white transition duration-200 shadow-md backdrop-blur-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Col 2: Company */}
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Company</h3>
            <div className="w-9 h-[2.5px] bg-blue-500 rounded-full mb-6" />

            <ul className="space-y-3.5 text-sm text-gray-400 font-normal">
              {footer.companyLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 group hover:text-cyan-400 transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-blue-500 group-hover:translate-x-0.5 transition-transform" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Solutions */}
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Solutions</h3>
            <div className="w-9 h-[2.5px] bg-blue-500 rounded-full mb-6" />

            <ul className="space-y-3.5 text-sm text-gray-400 font-normal">
              {footer.solutionLinks.map((solution, idx) => (
                <li key={idx}>
                  <Link
                    href={solution.href}
                    className="flex items-center gap-2 group hover:text-cyan-400 transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-blue-500 group-hover:translate-x-0.5 transition-transform" />
                    <span>{solution.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-lg font-bold text-white mb-2">Contact Info</h3>
            <div className="w-9 h-[2.5px] bg-blue-500 rounded-full mb-6" />

            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-900/30 border border-blue-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{contact.phone}</span>
              </li>

              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-950/30 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{contact.email}</span>
              </li>

              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-900/30 border border-blue-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>{contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Horizontal Contact Bar */}
        <div className="relative border-t border-b border-[#0066ff]/20 py-5 mb-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center gap-4 md:gap-10 text-[13px] md:text-sm text-gray-300 w-full pr-[60px] md:pr-0 pl-[20px] md:pl-0">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#5fa815] flex items-center justify-center text-white shrink-0">
                <Phone className="w-4 h-4 fill-current" />
              </div>
              <span>{contact.phone}</span>
            </div>

            <div className="hidden md:block w-px h-5 bg-white/20" />

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#5fa815] flex items-center justify-center text-white shrink-0">
                <Mail className="w-4 h-4 fill-current" />
              </div>
              <span>{contact.email}</span>
            </div>

            <div className="hidden md:block w-px h-5 bg-white/20" />

            {/* Address */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#5fa815] flex items-center justify-center text-white shrink-0">
                <MapPin className="w-4 h-4 fill-current" />
              </div>
              <span>{contact.address}</span>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[#0066ff] bg-[#020b18] hover:bg-[#061935] flex items-center justify-center text-[#0066ff] transition duration-150 cursor-pointer"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>

        {/* Copyright Text */}
        <div className="flex flex-wrap items-center justify-center gap-1 text-[13px] text-gray-400">
          <span>{footer.copyright}</span>
          <Heart className="w-3.5 h-3.5 text-blue-400 inline mx-0.5" />
          <span>by</span>
          <span className="text-[#00d2ff] font-medium ml-1">{site.global.companyName}</span>
        </div>
      </div>
    </footer>
  );
}
