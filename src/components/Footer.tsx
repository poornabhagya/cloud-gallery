"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  const navLinks = [
    { href: "/projects", label: "Projects" },
    { href: "/shop", label: "Shop" },
    { href: "/artists", label: "Artists" },
    { href: "/collaborations", label: "Collaborations" },
    { href: "/events", label: "Events" },
    { href: "/journey", label: "Journey" },
    { href: "/cloud-tv", label: "Cloud TV" },
    { href: "/open-call", label: "Open Call" },
  ];

  return (
    <footer className="bg-white border-t border-[#E5E5E5] text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Balanced 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-14 border-b border-[#E5E5E5]">
          {/* ========================================================
              COLUMN 1: BRAND IDENTITY & PHILOSOPHY
          ======================================================== */}
          <div className="md:col-span-5 space-y-4">
            <div className="space-y-1.5">
              <span className="font-roboto font-bold tracking-[0.22em] text-2xl sm:text-3xl text-black block leading-none">
                CLOUD GALLERY
              </span>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#081757] font-semibold">
                FINE ART, MONOLITHS & PRIVATE SALES · EST. 2018
              </p>
            </div>

            <p className="text-xs text-black max-w-sm leading-relaxed font-merriweather font-light">
              Dedicated to monumental stone sculpture, wood-fired porcelain vessels, mineral paintings, and high-value architectural acquisitions.
            </p>

            <div className="pt-2 text-[11px] text-black font-merriweather font-light">
              Curated across permanent atelier spaces in Zurich, Copenhagen, and Kyoto.
            </div>
          </div>

          {/* ========================================================
              COLUMN 2: COLLECTION & PLATFORM (QUICK LINKS)
          ======================================================== */}
          <div className="md:col-span-3 space-y-4">
            <span className="font-roboto font-bold text-[11px] uppercase tracking-[0.22em] text-[#081757] block pb-2 border-b border-black">
              COLLECTION & PLATFORM
            </span>
            <ul className="space-y-2 text-xs font-merriweather font-light">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-black hover:text-[#081757] transition-colors block py-0.5 tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ========================================================
              COLUMN 3: CONTACT DETAILS & LOCATION
          ======================================================== */}
          <div className="md:col-span-4 space-y-4 text-xs">
            <span className="font-roboto font-bold text-[11px] uppercase tracking-[0.22em] text-[#081757] block pb-2 border-b border-black">
              CONTACT & LOCATION
            </span>

            {/* Location */}
            <div className="space-y-1">
              <p className="font-roboto font-bold text-black text-sm">Main Gallery Cloister</p>
              <p className="text-[11px] text-black font-merriweather font-light leading-relaxed">
                Rämistrasse 44, 8001 Zürich, Switzerland
              </p>
            </div>

            {/* Email & Phone */}
            <div className="space-y-2 pt-1 font-merriweather font-light">
              <p className="flex items-center gap-2">
                <Mail size={13} className="text-[#081757] flex-shrink-0" />
                <a href="mailto:contact@cloudgallery.art" className="text-black hover:text-[#081757] hover:underline">
                  contact@cloudgallery.art
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={13} className="text-[#081757] flex-shrink-0" />
                <a href="tel:+41442108800" className="text-black hover:text-[#081757] hover:underline">
                  +41 44 210 88 00
                </a>
              </p>
            </div>

            {/* Social Media Links */}
            <div className="pt-2 font-merriweather font-light">
              <span className="text-[10px] uppercase tracking-wider text-[#081757] font-bold block mb-1.5">
                Social Channels
              </span>
              <div className="flex items-center space-x-4 text-[11px] text-black">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#081757] hover:underline"
                >
                  Instagram
                </a>
                <span className="text-[#CCCCCC]">·</span>
                <a
                  href="https://vimeo.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#081757] hover:underline"
                >
                  Vimeo
                </a>
                <span className="text-[#CCCCCC]">·</span>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#081757] hover:underline"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            BOTTOM BAR: COPYRIGHT & POLICIES
        ======================================================== */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-black">
          <p className="text-[11px] tracking-wider font-merriweather font-light">
            © {new Date().getFullYear()} CLOUD GALLERY INTERNATIONAL AUCTION HOUSE & STUDIO. ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center space-x-6 text-[10px] tracking-widest uppercase font-merriweather font-light">
            <Link href="/shop" className="text-black hover:text-[#081757] transition-colors">
              Catalogue Index
            </Link>
            <Link href="/open-call" className="text-black hover:text-[#081757] transition-colors">
              Consignment Terms
            </Link>
            <Link href="/events" className="text-black hover:text-[#081757] transition-colors">
              Press & Inquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
