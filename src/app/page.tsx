"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";

export default function HomePage() {
  const destinationSections = [
    {
      id: "shop",
      title: "The Cloud Shop",
      image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1600&q=85",
      ctaText: "EXPLORE SHOP",
      ctaHref: "/shop",
    },
    {
      id: "journey",
      title: "The Cloud Journey",
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1600&q=85",
      ctaText: "DISCOVER OUR JOURNEY",
      ctaHref: "/journey",
    },
    {
      id: "artists",
      title: "Cloud Artists",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=85",
      ctaText: "VIEW ALL ARTISTS",
      ctaHref: "/artists",
    },
    {
      id: "collaborations",
      title: "Cloud Collaborations",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
      ctaText: "EXPLORE COLLABORATIONS",
      ctaHref: "/collaborations",
    },
    {
      id: "cloud-tv",
      title: "Cloud TV",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1600&q=85",
      ctaText: "WATCH CLOUD TV",
      ctaHref: "/cloud-tv",
    },
    {
      id: "events",
      title: "Cloud Events",
      image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1600&q=85",
      ctaText: "VIEW AUCTION CALENDAR",
      ctaHref: "/events",
    },
    {
      id: "open-call",
      title: "Cloud Open Call",
      image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1600&q=85",
      ctaText: "SUBMIT YOUR WORK",
      ctaHref: "/open-call",
    },
  ];

  return (
    <div className="w-full bg-white text-black min-h-screen">
      {/* ========================================================
          1. HERO CAROUSEL BANNER (TOP)
          Retained exactly as requested
      ======================================================== */}
      <HeroCarousel />

      {/* ========================================================
          INSTITUTIONAL CURATORIAL INTRO STRIP
      ======================================================== */}
      

      {/* ========================================================
          EDITORIAL SECTION HEADER
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-10 sm:pb-12 border-b border-[#E5E5E5]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#888888] block">
              EDITORIAL DIRECTORY
            </span>
            <h1 className="font-roboto font-bold text-3xl sm:text-5xl lg:text-6xl text-[#081757] leading-tight">
              Curated Destinations
            </h1>
            <p className="font-merriweather font-light text-xs sm:text-sm text-black max-w-2xl leading-relaxed italic pt-1">
              Explore the dedicated channels of Cloud Gallery—from bespoke boutique acquisitions and archival monographs to international exhibitions and live video streams.
            </p>
          </div>

          <div className="shrink-0">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#081757] font-semibold bg-[#FAFAFA] border border-[#E5E5E5] px-3.5 py-2 block">
              7 PRIMARY DESTINATIONS
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================
          CURATED DESTINATION CARDS (Minimalist Gallery Layout)
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8 sm:space-y-10">
        {/* ========================================================
            CARD 01: THE CLOUD SHOP (Featured Lead Destination)
        ======================================================== */}
        {(() => {
          const shopSection = destinationSections[0];
          return (
            <div
              key={shopSection.id}
              className="group border border-[#E5E5E5] hover:border-black bg-white transition-all duration-300 shadow-xs hover:shadow-md h-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* Visual Half - Clean Image */}
                <div className="lg:col-span-7 relative min-h-[220px] sm:min-h-[260px] lg:min-h-[280px] bg-[#111] overflow-hidden border-b lg:border-b-0 lg:border-r border-[#E5E5E5]">
                  <Image
                    src={shopSection.image}
                    alt={shopSection.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>

                {/* Content Half - Compact Title + CTA Group */}
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 h-auto flex flex-col justify-center items-start gap-4 sm:gap-5 bg-white">
                  <h2 className="font-roboto font-bold text-2xl sm:text-3xl lg:text-4xl text-[#081757] group-hover:text-black transition-colors leading-tight">
                    {shopSection.title}
                  </h2>

                  <div>
                    <Link
                      href={shopSection.ctaHref}
                      className="inline-flex items-center gap-3.5 px-6 sm:px-7 py-3 sm:py-3.5 bg-black hover:bg-[#081757] text-white text-[11px] uppercase tracking-[0.22em] font-medium transition-all duration-200 group/btn shadow-xs"
                    >
                      <span>{shopSection.ctaText}</span>
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* ========================================================
            REMAINING 6 DESTINATION CARDS (Minimalist 2-Column Grid)
        ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {destinationSections.slice(1).map((sec) => (
            <div
              key={sec.id}
              className="group border border-[#E5E5E5] hover:border-black bg-white transition-all duration-300 flex flex-col shadow-xs hover:shadow-md h-auto"
            >
              {/* Image Container - Clean, Unobstructed Image */}
              <div className="relative aspect-[16/10] bg-[#111] overflow-hidden border-b border-[#E5E5E5]">
                <Image
                  src={sec.image}
                  alt={sec.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Content Container - Natural Height with Compact Spacing */}
              <div className="p-5 sm:p-6 h-auto flex flex-col gap-3.5 bg-white">
                <h3 className="font-roboto font-bold text-xl sm:text-2xl text-[#081757] group-hover:text-black transition-colors leading-tight">
                  {sec.title}
                </h3>

                <div className="pt-1">
                  <Link
                    href={sec.ctaHref}
                    className="w-full flex items-center justify-between px-5 py-3 bg-black hover:bg-[#081757] text-white text-[11px] uppercase tracking-[0.22em] font-medium transition-all duration-200 group/link"
                  >
                    <span>{sec.ctaText}</span>
                    <ArrowRight size={14} className="group-hover/link:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
