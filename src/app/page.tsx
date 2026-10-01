"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ARTWORKS_DATA, EVENTS_DATA, ARTISTS_DATA } from "@/data/mockData";
import { useGallery } from "@/context/GalleryContext";
import { ArrowRight, ArrowUpRight, ShieldCheck, Sparkles, Building2, Gavel, Award } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";

export default function HomePage() {
  const { openEnquiry } = useGallery();
  const marqueeArtwork = ARTWORKS_DATA[0];
  const featuredLots = ARTWORKS_DATA.slice(1, 7);
  const nextEvent = EVENTS_DATA[0];

  const departments = [
    { title: "Sculptures (stone, granite)", count: "4 Lots", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=85" },
    { title: "Porcelain & Ceramics", count: "3 Lots", image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=800&q=85" },
    { title: "Paintings & Tectonic Linen", count: "3 Lots", image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=85" },
    { title: "Furniture pieces & Plinths", count: "2 Lots", image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=85" },
    { title: "Metal & Lost Wax Bronze", count: "2 Lots", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=85" },
    { title: "Limited Editions & Lighting", count: "4 Lots", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=85" },
  ];

  return (
    <div className="w-full bg-white text-black">
      {/* ========================================================
          1. SOTHEBY'S AUTO-SLIDING HERO CAROUSEL (TOP)
      ======================================================== */}
      <HeroCarousel />
      {/* ========================================================
          LIVE AUCTION & AGENDA ANNOUNCEMENT BANNER
      ======================================================== */}
      <section className="border-b border-[#E5E5E5] bg-[#FAFAFA] py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center px-2 py-0.5 bg-black text-white text-[9px] uppercase tracking-widest font-semibold">
              LIVE AGENDA
            </span>
            <span className="text-[#333333] font-medium tracking-wide">
              {nextEvent.date} — {nextEvent.title.toUpperCase()}
            </span>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-black font-semibold hover:underline"
          >
            <span>Register for Viewing & RSVP</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* ========================================================
          SOTHEBY'S STYLE MARQUEE HERO SECTION (Lead Lot Highlight)
      ======================================================== */}
      <section className="border-b border-[#E5E5E5] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 border-x border-[#E5E5E5]">
            {/* Left: Lead Marquee Masterpiece Image */}
            <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto min-h-[480px] lg:min-h-[640px] bg-[#F7F7F7] border-b lg:border-b-0 lg:border-r border-[#E5E5E5] group overflow-hidden">
              <Image
                src={marqueeArtwork.image}
                alt={marqueeArtwork.title}
                fill
                priority
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute top-6 left-6 bg-white border border-[#E5E5E5] px-3.5 py-1.5 text-[10px] tracking-[0.25em] uppercase font-semibold text-black">
                PREMIER LOT 01 · CURATED SELECTION
              </div>
            </div>

            {/* Right: Auction Masterpiece Details & Call To Action */}
            <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 flex flex-col justify-between bg-white space-y-8">
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#666666] font-semibold block">
                    {marqueeArtwork.category}
                  </span>
                  <p className="text-xs uppercase tracking-[0.2em] font-medium text-black">
                    {marqueeArtwork.artist} (b. 1978, Denmark)
                  </p>
                </div>

                <h1 className="font-serif text-3xl sm:text-5xl lg:text-5xl text-black font-normal italic leading-tight">
                  {marqueeArtwork.title}
                </h1>

                <div className="space-y-2 pt-2 text-xs text-[#555555] font-light border-t border-[#EEEEEE]">
                  <p><strong className="text-black font-medium">Medium:</strong> {marqueeArtwork.medium}</p>
                  <p><strong className="text-black font-medium">Dimensions:</strong> {marqueeArtwork.dimensions}</p>
                  <p><strong className="text-black font-medium">Year:</strong> {marqueeArtwork.year}</p>
                  <p><strong className="text-black font-medium">Provenance:</strong> {marqueeArtwork.provenance}</p>
                </div>

                <div className="pt-4 pb-2 bg-[#FAFAFA] p-4 border border-[#E5E5E5]">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#666666] block">
                    AUCTION ESTIMATE / VALUATION
                  </span>
                  <p className="text-2xl font-serif font-semibold text-black mt-0.5">
                    {marqueeArtwork.price}
                  </p>
                  <p className="text-[10px] text-[#777777] uppercase tracking-wider mt-1">
                    ESTIMATE: {marqueeArtwork.estimate}
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#E5E5E5]">
                <button
                  onClick={() => openEnquiry(marqueeArtwork)}
                  className="w-full bg-black hover:bg-[#222222] text-white py-3.5 text-xs uppercase tracking-[0.25em] font-medium transition-colors"
                >
                  Enquire & Request Condition Report
                </button>
                <Link
                  href="/gallery"
                  className="w-full block text-center border border-black hover:bg-black hover:text-white text-black py-3 text-xs uppercase tracking-[0.25em] font-medium transition-colors"
                >
                  Explore Entire Catalogue (12 Lots)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          DEPARTMENT EXPLORATION (Sotheby's Grid Categories)
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-[#E5E5E5]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-black gap-4">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#666666] font-semibold block mb-1">
              THE GALLERY & PRIVATE SALES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-black">
              Explore Departments & Collecting Categories
            </h2>
          </div>
          <Link
            href="/gallery"
            className="text-xs uppercase tracking-[0.2em] font-semibold text-black hover:underline inline-flex items-center gap-1.5"
          >
            <span>All 9 Categories</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, idx) => (
            <Link
              key={idx}
              href="/gallery"
              className="group block border border-[#E5E5E5] bg-white hover:border-black transition-all"
            >
              <div className="relative aspect-[16/10] bg-[#FAFAFA] overflow-hidden">
                <Image
                  src={dept.image}
                  alt={dept.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 right-3 bg-white/95 px-2.5 py-1 text-[9px] uppercase tracking-widest font-semibold text-black border border-[#E5E5E5]">
                  {dept.count}
                </div>
              </div>
              <div className="p-4 flex items-center justify-between border-t border-[#E5E5E5] bg-white">
                <h3 className="font-serif text-lg text-black group-hover:underline">
                  {dept.title}
                </h3>
                <ArrowRight size={14} className="text-black group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ========================================================
          CURATED LOTS GRID (Sotheby's Auction Catalogue Look)
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-[#E5E5E5]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#E5E5E5] gap-4">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#666666] font-semibold block mb-1">
              CURATED LOTS FOR IMMEDIATE ACQUISITION
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-black">
              Featured Artworks & Monoliths
            </h2>
          </div>
          <Link
            href="/gallery"
            className="px-6 py-2.5 border border-black text-xs uppercase tracking-[0.25em] font-medium hover:bg-black hover:text-white transition-colors"
          >
            View All Lots
          </Link>
        </div>

        {/* Crisp Hairline 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredLots.map((art) => (
            <div
              key={art.id}
              className="border border-[#E5E5E5] bg-white flex flex-col justify-between hover:border-black transition-all group"
            >
              {/* Artwork Image */}
              <div className="relative aspect-[4/5] bg-[#FAFAFA] overflow-hidden border-b border-[#E5E5E5]">
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3 bg-white px-2.5 py-1 text-[9px] uppercase tracking-widest font-semibold text-black border border-[#E5E5E5]">
                  {art.lotNumber || "LOT"}
                </div>
              </div>

              {/* Card Metadata */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#666666] block">
                    {art.category}
                  </span>
                  <p className="text-xs uppercase tracking-wider font-semibold text-black">
                    {art.artist}
                  </p>
                  <h3 className="font-serif text-2xl text-black italic leading-tight group-hover:underline">
                    {art.title}
                  </h3>
                  <p className="text-xs text-[#666666] pt-1 line-clamp-1 font-light">
                    {art.medium}
                  </p>
                  <p className="text-[11px] text-[#888888]">
                    {art.dimensions} · {art.year}
                  </p>
                </div>

                {/* Price & Action */}
                <div className="pt-4 border-t border-[#EEEEEE] flex items-center justify-between">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-[#777777] block">
                      PRICE
                    </span>
                    <span className="font-serif text-lg font-semibold text-black">
                      {art.price}
                    </span>
                  </div>

                  <button
                    onClick={() => openEnquiry(art)}
                    className="px-4 py-2 bg-white border border-black hover:bg-black hover:text-white text-[10px] uppercase tracking-[0.2em] font-medium text-black transition-colors"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          EDITORIAL MONOGRAPH FEATURE (Sotheby's Magazine Layout)
      ======================================================== */}
      <section className="bg-[#FAFAFA] border-b border-[#E5E5E5] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Studio Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] bg-white border border-[#E5E5E5] overflow-hidden shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85"
                  alt="Henrik Vestergaard in the studio"
                  fill
                  className="object-cover grayscale contrast-125"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="absolute -bottom-4 right-4 bg-white border border-[#E5E5E5] px-4 py-2 shadow-sm text-center">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#666666] font-semibold block">
                  ATELIER MONOGRAPH
                </span>
                <span className="font-serif text-sm text-black">
                  HENRIK VESTERGAARD
                </span>
              </div>
            </div>

            {/* Right: Curatorial Thesis & Quote */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-[10px] tracking-[0.3em] uppercase text-black font-semibold block">
                  EDITORIAL FEATURE & ESSAY
                </span>
                <blockquote className="font-serif text-3xl sm:text-4xl lg:text-5xl text-black font-light leading-snug">
                  &ldquo;I do not shape the stone; I excavate the silence that was already resting within it before humans arrived.&rdquo;
                </blockquote>
              </div>

              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed max-w-xl font-light">
                Educated across Scandinavia and Japan, our studio approaches spatial objects not as ornamental decorations, but as primary architectural anchors. Each piece is carved, turned, or cast to capture shifting ambient daylight.
              </p>

              <div className="pt-2 border-t border-[#E5E5E5] max-w-lg">
                <span className="text-[10px] tracking-[0.25em] uppercase text-black block mb-3 font-semibold">
                  CORE DISCIPLINES & MONUMENTAL SPECIALTIES
                </span>
                <div className="flex flex-wrap gap-2">
                  {["Architecture", "Sculpture", "Painting", "Design", "Major Projects", "Studio / Process"].map(
                    (discipline) => (
                      <span
                        key={discipline}
                        className="px-3.5 py-1.5 bg-white border border-[#E5E5E5] text-xs text-black uppercase tracking-wider font-medium"
                      >
                        {discipline}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/journey"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-black hover:bg-[#222222] text-white text-xs uppercase tracking-[0.25em] font-medium transition-colors"
                >
                  <span>Explore The Full Monograph</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          DUAL EDITORIAL BANNERS (Artists & Collaborations)
      ======================================================== */}
      <section className="border-b border-[#E5E5E5]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Card 1: Cloud Artists */}
          <Link
            href="/artists"
            className="group relative h-[450px] sm:h-[520px] flex items-end p-8 sm:p-14 overflow-hidden border-b md:border-b-0 md:border-r border-[#E5E5E5]"
          >
            <Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85"
              alt="Cloud Artists directory"
              fill
              className="object-cover grayscale contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="relative z-10 text-white space-y-2">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#CCCCCC] block font-medium">
                PLATFORM FOR ARTISTS · 6 RESIDENTS
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal flex items-center gap-3">
                <span>Cloud Artists</span>
                <ArrowUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </h3>
              <p className="text-xs text-[#E0E0E0] max-w-sm line-clamp-2 font-light">
                Discover the international sculptors, ceramic masters, and mineral painters represented by our salon.
              </p>
            </div>
          </Link>

          {/* Card 2: Cloud Collaborations */}
          <Link
            href="/collaborations"
            className="group relative h-[450px] sm:h-[520px] flex items-end p-8 sm:p-14 overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
              alt="Cloud Collaborations and Pavilions"
              fill
              className="object-cover contrast-105 group-hover:scale-105 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="relative z-10 text-white space-y-2">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#CCCCCC] block font-medium">
                CROSS-DISCIPLINARY FUSIONS · 4 CASE STUDIES
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal flex items-center gap-3">
                <span>Cloud Collaborations</span>
                <ArrowUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </h3>
              <p className="text-xs text-[#E0E0E0] max-w-sm line-clamp-2 font-light">
                Artist × Artist, Artist × Architect, and Brand collaborations engineered for museum permanence.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* ========================================================
          VIP SERVICES & PRIVATE ADVISORY
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="p-8 sm:p-12 border border-black bg-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#666666] font-semibold block">
              INSTITUTIONAL & COLLECTOR PROTOCOL
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-black">
              Private Sales, Appraisals & Consignment
            </h3>
            <p className="text-xs text-[#555555] leading-relaxed font-light">
              We offer bespoke acquisition advice for private collections, corporate foundations, and architectural studios worldwide. Contact our Zurich or Kyoto salons for private viewings.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button
              onClick={() => openEnquiry(null)}
              className="px-7 py-3 bg-black hover:bg-[#222222] text-white text-xs uppercase tracking-[0.25em] font-medium transition-colors text-center"
            >
              Request Private Consultation
            </button>
            <Link
              href="/open-call"
              className="px-7 py-3 border border-black text-black hover:bg-black hover:text-white text-xs uppercase tracking-[0.25em] font-medium transition-colors text-center"
            >
              Consign Artwork
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
