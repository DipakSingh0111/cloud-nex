'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import data from '../../data/cloudNex.json';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] w-full font-sans relative z-50">
      <div className="py-0 px-4 sm:px-6 lg:px-8 flex justify-between items-center w-full max-w-7xl mx-auto">
        <Link href="/" className="flex items-center">
        {data.navbar.logo ? (
          <Image 
            src={data.navbar.logo} 
            alt="Logo" 
            width={300} 
            height={90}
            priority
            className="h-16 sm:h-20 lg:h-[85px] object-contain w-auto"
          />
        ) : (
          <div className="flex flex-col justify-center text-[#052136]">
            <div className="text-2xl sm:text-3xl font-black tracking-tight leading-none">
              CLOUD<span className="text-[#639818]">NEX</span>
            </div>
            <div className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-[#052136] mt-1 pl-1">
              CLOUD SOLUTIONS
            </div>
          </div>
        )}
      </Link>

      {/* Desktop Links */}
      <ul className="hidden lg:flex gap-10 list-none m-0 p-0">
        {data.navbar.links.map((link, index) => {
          const isActive = pathname === link.url;
          return (
            <li key={index}>
              <Link 
                href={link.url} 
                className={`text-[16px] font-semibold relative transition-colors duration-300 py-2 group ${
                  isActive ? 'text-[#639818]' : 'text-[#052136] hover:text-[#639818]'
                }`}
              >
                {link.label}
                <span 
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#639818] transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Desktop CTA */}
      <Link 
        href={data.navbar.cta.url} 
        className="hidden sm:flex bg-gradient-to-br from-[#74a822] to-[#528010] text-white py-3 px-6 lg:py-3.5 lg:px-8 text-[15px] lg:text-[17px] rounded-full font-semibold items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(99,152,24,0.4)] group cursor-pointer border-none"
      >
        {data.navbar.cta.label}
        <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] lg:w-[20px] lg:h-[20px] fill-none stroke-current stroke-2 transition-transform duration-300 group-hover:translate-x-1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>

      {/* Mobile Menu Toggle */}
      <button 
        className="lg:hidden text-[#052136] p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <ul className="flex flex-col py-4 px-6 space-y-4">
              {data.navbar.links.map((link, index) => {
                const isActive = pathname === link.url;
                return (
                  <li key={index}>
                    <Link 
                      href={link.url}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block text-[16px] font-semibold ${
                        isActive ? 'text-[#639818]' : 'text-[#052136]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              {/* Mobile CTA */}
              <li className="pt-4 border-t border-gray-100 sm:hidden">
                <Link 
                  href={data.navbar.cta.url}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex bg-gradient-to-br from-[#74a822] to-[#528010] text-white py-3 px-6 text-[15px] rounded-full font-semibold items-center gap-2"
                >
                  {data.navbar.cta.label}
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
