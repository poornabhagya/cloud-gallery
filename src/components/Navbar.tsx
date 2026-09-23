"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGallery } from "@/context/GalleryContext";
import { Search, Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { openEnquiry, openSearch } = useGallery();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/gallery", label: "GALLERY" },
    { href: "/journey", label: "JOURNEY" },
    { href: "/artists", label: "ARTISTS" },
    { href: "/collaborations", label: "COLLABORATIONS" },
    { href: "/events", label: "EVENTS" },
    { href: "/cloud-tv", label: "CLOUD TV" },
    { href: "/about", label: "ABOUT" },
    { href: "/open-call", label: "OPEN CALL" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F4F0EA]/90 backdrop-blur-md border-b border-[#E2DDD4] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: Architectural Spaced Logo */}
        <Link 
          href="/" 
          className="group flex flex-col justify-center select-none"
        >
          <span className="font-serif tracking-[0.45em] text-xl sm:text-2xl font-normal text-[#2B2A27] transition-opacity group-hover:opacity-80">
            C L O U D
          </span>
          <span className="text-[8px] tracking-[0.35em] text-[#7E7971] -mt-0.5 uppercase">
            ARCHITECTURAL GALLERY
          </span>
        </Link>

        {/* Center / Right Links: Desktop */}
        <nav className="hidden xl:flex items-center space-x-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] font-medium tracking-[0.25em] transition-all relative py-1 ${
                  isActive 
                    ? "text-[#2B2A27] font-semibold" 
                    : "text-[#7E7971] hover:text-[#2B2A27]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#8C6D53]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center space-x-5">
          {/* Search button */}
          <button
            onClick={openSearch}
            aria-label="Search collection"
            className="p-2 text-[#7E7971] hover:text-[#2B2A27] transition-colors"
          >
            <Search size={17} strokeWidth={1.5} />
          </button>

          {/* Hairline Outline ENQUIRE Button */}
          <button
            onClick={() => openEnquiry(null)}
            className="border border-[#2B2A27] hover:border-[#8C6D53] hover:bg-[#8C6D53] hover:text-[#F4F0EA] px-5 py-2 text-[10px] tracking-[0.3em] uppercase font-medium transition-all text-[#2B2A27]"
          >
            ENQUIRE
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center space-x-2 xl:hidden">
          <button
            onClick={openSearch}
            aria-label="Search collection"
            className="p-2 text-[#7E7971] hover:text-[#2B2A27]"
          >
            <Search size={18} strokeWidth={1.5} />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 text-[#2B2A27]"
          >
            {isMobileMenuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-[#F4F0EA] border-b border-[#E2DDD4] px-6 py-8 space-y-5 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-xs tracking-[0.25em] transition-colors ${
                    isActive ? "text-[#8C6D53] font-semibold" : "text-[#7E7971] hover:text-[#2B2A27]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="pt-4 border-t border-[#E2DDD4] flex flex-col space-y-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                openEnquiry(null);
              }}
              className="w-full text-center border border-[#2B2A27] py-2.5 text-xs tracking-[0.25em] uppercase font-medium hover:bg-[#8C6D53] hover:border-[#8C6D53] hover:text-white transition-all"
            >
              ENQUIRE WITH THE SALON
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
