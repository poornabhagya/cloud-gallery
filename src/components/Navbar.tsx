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

  // Top Utility Nav Links
  const utilityLinks = [
    { href: "/journey", label: "JOURNEY" },
    { href: "/cloud-tv", label: "CLOUD TV" },
    { href: "/open-call", label: "OPEN CALL" },
  ];

  // Core Primary Main Nav Links
  const mainNavLinks = [
    { href: "/gallery", label: "FOR SALE / GALLERY" },
    { href: "/artists", label: "ARTISTS" },
    { href: "/collaborations", label: "COLLABORATIONS" },
    { href: "/events", label: "EVENTS & AUCTIONS" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#E5E5E5] transition-all">
      {/* ========================================================
          1. TOP UTILITY NAV BAR (Sotheby's Dual-Nav Standard)
          Thin, full-width utility navigation with secondary links
      ======================================================== */}
      <div className="border-b border-[#E5E5E5] bg-white text-[10px] uppercase tracking-[0.22em] text-[#666666]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-end space-x-6 sm:space-x-8">
          {utilityLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`py-1 transition-colors relative ${
                  isActive
                    ? "text-black font-semibold"
                    : "text-[#666666] hover:text-black"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-black" />
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* ========================================================
          2. MAIN NAVIGATION BAR
          Logo + Core Primary Links + Search + Action Button
      ======================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: Sotheby's Style Serif Logo */}
        <Link
          href="/"
          className="group flex flex-col justify-center select-none"
        >
          <span className="font-serif tracking-[0.22em] text-2xl sm:text-3xl font-normal text-black transition-opacity group-hover:opacity-75 leading-none">
            CLOUD
          </span>
          <span className="text-[9px] tracking-[0.35em] text-[#666666] uppercase mt-1">
            AUCTION HOUSE & GALLERY
          </span>
        </Link>

        {/* Center: Simplified Core Primary Links */}
        <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8">
          {mainNavLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] tracking-[0.2em] uppercase font-medium transition-all relative py-1.5 ${
                  isActive
                    ? "text-black font-semibold"
                    : "text-[#555555] hover:text-black"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-black" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Search & Enquire Button */}
        <div className="hidden sm:flex items-center space-x-4">
          <button
            onClick={openSearch}
            aria-label="Search catalog"
            className="p-2 text-[#555555] hover:text-black transition-colors flex items-center gap-1.5 text-xs tracking-wider"
          >
            <Search size={16} strokeWidth={1.7} />
            <span className="text-[11px] uppercase tracking-[0.18em] hidden xl:inline">Search</span>
          </button>

          <button
            onClick={() => openEnquiry(null)}
            className="border border-black bg-black text-white hover:bg-white hover:text-black px-5 py-2.5 text-[10px] tracking-[0.25em] uppercase font-medium transition-all duration-200"
          >
            ENQUIRE / CONSIGN
          </button>
        </div>

        {/* Mobile menu triggers */}
        <div className="flex items-center space-x-2 lg:hidden">
          <button
            onClick={openSearch}
            aria-label="Search collection"
            className="p-2 text-black hover:opacity-70"
          >
            <Search size={19} strokeWidth={1.5} />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 text-black"
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* ========================================================
          MOBILE DRAWER
      ======================================================== */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E5E5E5] px-6 py-8 space-y-6 shadow-xl animate-fade-in">
          {/* Primary Nav Links */}
          <div className="space-y-3">
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#888888] font-semibold block">
              PRIMARY DEPARTMENTS
            </span>
            <nav className="flex flex-col space-y-3">
              {mainNavLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-xs uppercase tracking-[0.2em] py-1 transition-colors ${
                      isActive ? "text-black font-bold" : "text-[#555555] hover:text-black"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Secondary Utility Links */}
          <div className="pt-4 border-t border-[#EEEEEE] space-y-3">
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#888888] font-semibold block">
              MONOGRAPH & MEDIA
            </span>
            <nav className="flex flex-col space-y-3">
              {utilityLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-xs uppercase tracking-[0.2em] py-1 transition-colors ${
                      isActive ? "text-black font-bold" : "text-[#666666] hover:text-black"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Mobile Action Button */}
          <div className="pt-4 border-t border-[#E5E5E5]">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                openEnquiry(null);
              }}
              className="w-full text-center bg-black text-white py-3 text-xs tracking-[0.25em] uppercase font-medium hover:bg-[#222222] transition-colors"
            >
              ENQUIRE / CONSIGN LOT
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
