"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const navLinks = [
    { href: "/gallery", label: "Gallery" },
    { href: "/journey", label: "Journey" },
    { href: "/artists", label: "Artists" },
    { href: "/collaborations", label: "Collaborations" },
    { href: "/events", label: "Events" },
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
              <span className="font-serif tracking-[0.22em] text-2xl sm:text-3xl font-normal text-black block leading-none">
                CLOUD GALLERY
              </span>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#666666]">
                FINE ART, MONOLITHS & PRIVATE SALES · EST. 2018
              </p>
            </div>

            <p className="text-xs text-[#555555] max-w-sm leading-relaxed font-light">
              Dedicated to monumental stone sculpture, wood-fired porcelain vessels, mineral paintings, and high-value architectural acquisitions.
            </p>

            <div className="pt-2 text-[11px] text-[#777777] font-light">
              Curated across permanent atelier spaces in Zurich and Kyoto.
            </div>
          </div>

          {/* ========================================================
              COLUMN 2: COLLECTION & PLATFORM (QUICK LINKS)
          ======================================================== */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.22em] text-black font-semibold block pb-1 border-b border-[#E5E5E5]">
              COLLECTION & PLATFORM
            </span>
            <ul className="space-y-2.5 text-xs text-[#555555]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-black hover:underline transition-colors block"
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
          <div className="md:col-span-4 space-y-4 text-xs text-[#555555]">
            <span className="text-[11px] uppercase tracking-[0.22em] text-black font-semibold block pb-1 border-b border-[#E5E5E5]">
              CONTACT & LOCATION
            </span>

            {/* Location */}
            <div className="space-y-1">
              <p className="font-serif text-black text-sm">Main Gallery Cloister</p>
              <p className="text-[11px] text-[#666666] leading-relaxed">
                Rämistrasse 44, 8001 Zürich, Switzerland
              </p>
            </div>

            {/* Email & Phone */}
            <div className="space-y-2 pt-1">
              <p className="flex items-center gap-2">
                <Mail size={13} className="text-black flex-shrink-0" />
                <a href="mailto:contact@cloudgallery.art" className="text-black hover:underline font-medium">
                  contact@cloudgallery.art
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={13} className="text-black flex-shrink-0" />
                <a href="tel:+41442108800" className="text-black hover:underline font-medium">
                  +41 44 210 88 00
                </a>
              </p>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-wider text-[#777777] block mb-1.5 font-medium">
                Social Channels
              </span>
              <div className="flex items-center space-x-4 text-[11px] text-black font-medium">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Instagram
                </a>
                <span className="text-[#CCCCCC]">·</span>
                <a
                  href="https://vimeo.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Vimeo
                </a>
                <span className="text-[#CCCCCC]">·</span>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
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
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666666]">
          <p className="text-[11px] tracking-wider">
            © {new Date().getFullYear()} CLOUD GALLERY INTERNATIONAL AUCTION HOUSE & STUDIO. ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center space-x-6 text-[10px] tracking-widest uppercase font-medium">
            <Link href="/gallery" className="hover:text-black transition-colors">
              Catalogue Index
            </Link>
            <Link href="/open-call" className="hover:text-black transition-colors">
              Consignment Terms
            </Link>
            <Link href="/events" className="hover:text-black transition-colors">
              Press & Inquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
