"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import { site, type FooterData, type SectionProps } from "@/data";

const socialIcons: Record<string, React.ReactNode> = {
  facebook: (
    <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12c0-5.52-4.48-10-10-10z" />
    </svg>
  ),
  x: (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  dribbble: (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </svg>
  ),
  behance: <span className="text-[15px] font-extrabold leading-none tracking-tight">Bē</span>,
  linkedin: (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.06c.53-1 1.84-2.2 3.8-2.2 4.06 0 4.84 2.67 4.84 6.15V24h-4v-8.1c0-1.93-.03-4.42-2.7-4.42-2.7 0-3.1 2.1-3.1 4.28V24H8V8z" />
    </svg>
  ),
};

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-7">
      <h3 className="text-xl font-bold text-white mb-3">{children}</h3>
      <span className="block w-8 h-[3px] bg-[#1a8cff] rounded-full" />
    </div>
  );
}

function FooterLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul className="space-y-4 text-[15px] text-gray-300">
      {links.map((link) => (
        <li key={link.label}>
          <Link href={link.href} className="flex items-center gap-3 group hover:text-white transition-colors">
            <ChevronRight className="w-4 h-4 text-[#1a8cff] group-hover:translate-x-0.5 transition-transform" />
            <span>{link.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer({ data, className = "" }: SectionProps<FooterData> = {}) {
  const footer = data || site.footer;
  const contact = site.topbar;

  const contactItems = [
    { icon: Phone, value: contact.phone, color: "text-[#3aa0ff]" },
    { icon: Mail, value: contact.email, color: "text-[#3dd68c]" },
    { icon: MapPin, value: contact.address, color: "text-[#3aa0ff]" },
  ];
  return (
    <footer className={`relative bg-[#03102a] text-white pt-16 lg:pt-20 overflow-hidden ${className}`}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(26,109,255,0.25),transparent_60%)]" />
        <svg className="absolute inset-x-0 bottom-0 w-full h-[75%]" viewBox="0 0 1440 400" preserveAspectRatio="none">
          <defs>
            <linearGradient id="footer-wave-green" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#2fbf71" stopOpacity="0.55" />
              <stop offset="1" stopColor="#0a3b5c" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="footer-wave-blue" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#0d4fb3" stopOpacity="0.1" />
              <stop offset="1" stopColor="#1a6dff" stopOpacity="0.45" />
            </linearGradient>
          </defs>
          <path d="M0 120 C 180 60, 300 260, 520 330 L 520 400 L 0 400 Z" fill="url(#footer-wave-green)" />
          <path d="M0 200 C 160 170, 260 320, 420 400 L 0 400 Z" fill="#0b6b4a" fillOpacity="0.35" />
          <path d="M420 330 C 720 220, 980 300, 1180 220 C 1300 170, 1380 190, 1440 170 L 1440 400 L 420 400 Z" fill="url(#footer-wave-blue)" />
          <path d="M600 360 C 860 290, 1100 330, 1440 260 L 1440 400 L 600 400 Z" fill="#0a2f6b" fillOpacity="0.5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_1.25fr] gap-x-8 gap-y-12 pb-14">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center mb-6">
              <Image
                src="/images/footer_logo.png"
                alt={site.global.logo.alt}
                width={1376}
                height={296}
                sizes="254px"
                className="w-[191px] sm:w-[239px] lg:w-[254px] h-auto object-contain"
              />
            </Link>

            <p className="text-gray-300 text-[15px] leading-[1.75] mb-7 max-w-[290px]">
              {footer.description}
            </p>

            <div className="flex items-center gap-3">
              {contact.socials.map((social) => (
                <Link
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  className="w-11 h-11 rounded-full border border-[#2f7cf0]/70 bg-[#06183a]/80 flex items-center justify-center text-white hover:bg-[#1a6dff] hover:border-[#1a6dff] transition-colors"
                >
                  {socialIcons[social.icon] ?? social.platform.charAt(0).toUpperCase()}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:pl-8">
            <FooterHeading>Company</FooterHeading>
            <FooterLinks links={footer.companyLinks} />
          </div>

          <div className="lg:pl-4">
            <FooterHeading>Solutions</FooterHeading>
            <FooterLinks links={footer.solutionLinks} />
          </div>

          <div className="col-span-2 lg:col-span-1">
            <FooterHeading>Contact Info</FooterHeading>
            <ul className="space-y-4 text-[15px] text-gray-200">
              {contactItems.map(({ icon: Icon, value, color }) => (
                <li key={value} className="flex items-center gap-4">
                  <span className={`w-12 h-12 shrink-0 rounded-xl bg-[#0b2a5a] border border-white/5 flex items-center justify-center ${color}`}>
                    <Icon className="w-5 h-5" />
                  </span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-center gap-1.5 text-[13px] text-gray-300">
          <span>{footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}
