"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShoppingBag, Compass, Users, Layers, Film, Calendar, Send } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";

export default function HomePage() {
  const destinationSections = [
    {
      id: "shop",
      index: "01",
      badge: "CURATED E-COMMERCE & BOUTIQUE",
      icon: ShoppingBag,
      title: "The Cloud Shop",
      subtitle: "Curated Department Collections & Fine Objects",
      description:
        "Curated high-end boutique acquisitions spanning certified natural gems, museum-grade antique artifacts, monumental original paintings, rare statues, and bespoke apparel with worldwide insured transit.",
      categories: ["Jewelry & Gems", "Antiques", "Paintings", "Sculptures", "Bespoke Wear"],
      image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1600&q=85",
      ctaText: "EXPLORE SHOP",
      ctaHref: "/shop",
      accent: "bg-black text-white",
    },
    {
      id: "journey",
      index: "02",
      badge: "ORIGIN ARCHIVES & FOUNDER",
      icon: Compass,
      title: "The Cloud Journey",
      subtitle: "How Cloud Started & About Mr. Prasanna",
      description:
        "The story of how Cloud Gallery began—from deep stone quarry excavations in Larvik to monumental alpine pavilions—alongside the architectural philosophy and lifelong dedication of founder Mr. Prasanna.",
      categories: ["How Cloud Started", "About Mr Prasanna", "Material Philosophy", "Permanent Archive"],
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1600&q=85",
      ctaText: "DISCOVER OUR JOURNEY",
      ctaHref: "/journey",
      accent: "bg-black text-white",
    },
    {
      id: "artists",
      index: "03",
      badge: "REPRESENTED MASTERS & RESIDENCIES",
      icon: Users,
      title: "Cloud Artists",
      subtitle: "Artist of the Month & Permanent Roster",
      description:
        "International sculptors, ceramic masters, lost-wax bronze casters, and spatial painters who reject decorative triviality in pursuit of monolithic permanence and quiet architectural weight.",
      categories: ["Artist of the Month", "Our Artists Roster", "Studio Profiles", "Collector Dossiers"],
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=85",
      ctaText: "VIEW ALL ARTISTS",
      ctaHref: "/artists",
      accent: "bg-black text-white",
    },
    {
      id: "collaborations",
      index: "04",
      badge: "CROSS-DISCIPLINARY COMMISSIONS",
      icon: Layers,
      title: "Cloud Collaborations",
      subtitle: "Current & Past Landmark Initiatives",
      description:
        "Where independent masters cross disciplines to pioneer unforeseen forms: stone sculptors partnering with northern Italian bronze foundries, optical lighting laboratories, and alpine architects.",
      categories: ["Current Collaborations", "Past Collaborations", "Artist × Architect", "Foundry Guilds"],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
      ctaText: "EXPLORE COLLABORATIONS",
      ctaHref: "/collaborations",
      accent: "bg-black text-white",
    },
    {
      id: "cloud-tv",
      index: "05",
      badge: "4K CINEMA STREAM & ESSAYS",
      icon: Film,
      title: "Cloud TV",
      subtitle: "Documentary Cinema & Moving Image Repertory",
      description:
        "Short-form documentary cinema capturing raw furnace bronze pours at 1,200°C, alpine granite quarry extractions, in-depth artist dialogues, studio visits, and behind-the-scenes preservation.",
      categories: ["Discussions", "Interviews", "Studio Visits", "Behind the Scenes", "Short Videos"],
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1600&q=85",
      ctaText: "WATCH CLOUD TV",
      ctaHref: "/cloud-tv",
      accent: "bg-black text-white",
    },
    {
      id: "events",
      index: "06",
      badge: "LIVE AUCTIONS & CALENDAR",
      icon: Calendar,
      title: "Cloud Events",
      subtitle: "Upcoming Previews & Archived Salons",
      description:
        "Seasonal gallery vernissages, private collector previews, curatorial symposiums, and international art fair pavilions across our European and Asian exhibition halls.",
      categories: ["Upcoming Events", "Past Events", "Private Previews", "Symposia Calendar"],
      image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1600&q=85",
      ctaText: "VIEW AUCTION CALENDAR",
      ctaHref: "/events",
      accent: "bg-black text-white",
    },
    {
      id: "open-call",
      index: "07",
      badge: "GLOBAL ARTIST SUBMISSIONS",
      icon: Send,
      title: "Cloud Open Call",
      subtitle: "Join Cloud & Submission Guidelines",
      description:
        "An open international portal for painters, sculptors, and creative collaborators to submit portfolios for representation, featured solo exhibitions, and tailored global acquisitions.",
      categories: ["Join With Cloud", "Be A Featured Artist", "Collaboration Artists", "Submission Guidelines"],
      image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1600&q=85",
      ctaText: "SUBMIT YOUR WORK",
      ctaHref: "/open-call",
      accent: "bg-black text-white",
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
      <section className="border-b border-[#E5E5E5] bg-[#FAFAFA] py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#081757] shrink-0" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-black font-semibold">
              CLOUD AUCTION HOUSE & GALLERY · CURATING MONOLITHIC ART & PRIVATE COLLECTIONS
            </span>
          </div>

          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-[#777777]">
            <span>ZURICH</span>
            <span>·</span>
            <span>KYOTO</span>
            <span>·</span>
            <span>COPENHAGEN</span>
          </div>
        </div>
      </section>

      {/* ========================================================
          EDITORIAL SECTION HEADER
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 border-b border-[#E5E5E5]">
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
          CURATED DESTINATION CARDS & SECTION BANNERS
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16 sm:space-y-20">
        {/* ========================================================
            CARD 01: THE CLOUD SHOP (Lead Full-Width Destination Banner)
        ======================================================== */}
        {(() => {
          const shopSection = destinationSections[0];
          return (
            <div
              key={shopSection.id}
              className="group border border-[#E5E5E5] hover:border-black bg-white transition-all duration-300 shadow-xs hover:shadow-md"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* Visual Half */}
                <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[460px] bg-black overflow-hidden border-b lg:border-b-0 lg:border-r border-[#E5E5E5]">
                  <Image
                    src={shopSection.image}
                    alt={shopSection.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  <div className="absolute top-6 left-6">
                    <span className="bg-black/80 backdrop-blur-xs text-white border border-white/20 px-3 py-1 text-[9px] uppercase tracking-[0.25em] font-semibold">
                      SECTION {shopSection.index} / 07
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <div className="flex flex-wrap gap-1.5">
                      {shopSection.categories.map((cat) => (
                        <span
                          key={cat}
                          className="bg-white/15 backdrop-blur-xs text-white text-[9px] uppercase tracking-wider px-2.5 py-1 border border-white/20"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Editorial Content Half */}
                <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8 bg-white">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <ShoppingBag size={14} className="text-[#081757]" />
                      <span className="text-[10px] tracking-[0.3em] uppercase text-[#081757] font-bold">
                        {shopSection.badge}
                      </span>
                    </div>

                    <h2 className="font-roboto font-bold text-3xl sm:text-4xl lg:text-5xl text-[#081757] leading-tight">
                      {shopSection.title}
                    </h2>

                    <p className="font-merriweather text-xs sm:text-sm text-[#081757] font-semibold italic">
                      {shopSection.subtitle}
                    </p>

                    <p className="font-merriweather font-light text-xs sm:text-sm text-black leading-relaxed">
                      {shopSection.description}
                    </p>
                  </div>

                  {/* Direct Action CTA */}
                  <div className="pt-6 border-t border-[#E5E5E5]">
                    <Link
                      href={shopSection.ctaHref}
                      className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-4 px-8 py-4 bg-black hover:bg-[#081757] text-white text-xs uppercase tracking-[0.25em] font-medium transition-all duration-200 group/btn shadow-xs"
                    >
                      <span>{shopSection.ctaText}</span>
                      <ArrowRight size={15} className="group-hover/btn:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* ========================================================
            REMAINING 6 DESTINATION CARDS (Balanced 2-Column Grid)
        ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {destinationSections.slice(1).map((sec) => (
            <div
              key={sec.id}
              className="group border border-[#E5E5E5] hover:border-black bg-white transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              {/* Image Container with 16:10 Ratio */}
              <div className="relative aspect-[16/10] bg-black overflow-hidden border-b border-[#E5E5E5]">
                <Image
                  src={sec.image}
                  alt={sec.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20" />

                <div className="absolute top-4 left-4">
                  <span className="bg-black/80 backdrop-blur-xs text-white border border-white/20 px-2.5 py-0.5 text-[9px] uppercase tracking-[0.25em] font-semibold">
                    SECTION {sec.index} / 07
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5">
                  {sec.categories.slice(0, 3).map((cat) => (
                    <span
                      key={cat}
                      className="bg-white/20 backdrop-blur-xs text-white text-[9px] uppercase tracking-wider px-2 py-0.5 border border-white/25"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Text Information & CTA Container */}
              <div className="p-7 sm:p-9 flex-1 flex flex-col justify-between space-y-6 bg-white">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <sec.icon size={13} className="text-[#081757]" />
                    <span className="text-[10px] tracking-[0.28em] uppercase text-[#081757] font-bold block">
                      {sec.badge}
                    </span>
                  </div>

                  <h3 className="font-roboto font-bold text-2xl sm:text-3xl text-[#081757] group-hover:underline leading-snug">
                    {sec.title}
                  </h3>

                  <p className="font-merriweather text-xs text-[#081757] font-semibold italic">
                    {sec.subtitle}
                  </p>

                  <p className="font-merriweather font-light text-xs text-black leading-relaxed line-clamp-3">
                    {sec.description}
                  </p>
                </div>

                {/* Direct Action CTA Button */}
                <div className="pt-5 border-t border-[#EEEEEE]">
                  <Link
                    href={sec.ctaHref}
                    className="w-full flex items-center justify-between px-6 py-3.5 bg-black hover:bg-[#081757] text-white text-[11px] uppercase tracking-[0.22em] font-medium transition-all duration-200 group/link"
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
