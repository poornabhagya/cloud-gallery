"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ARTISTS_DATA, Artist } from "@/data/mockData";
import { useGallery } from "@/context/GalleryContext";
import { MapPin, X, Sparkles, User, Layers, ArrowRight } from "lucide-react";

export default function ArtistsPage() {
  const { openEnquiry } = useGallery();
  const [selectedArtistDossier, setSelectedArtistDossier] = useState<Artist | null>(null);
  const [tierFilter, setTierFilter] = useState<"All" | "Featured" | "Emerging" | "Resident Master">("All");

  const featuredArtist = ARTISTS_DATA[0];

  const displayedArtists =
    tierFilter === "All"
      ? ARTISTS_DATA
      : ARTISTS_DATA.filter((a) => a.tier === tierFilter);

  return (
    <div className="w-full bg-white text-black min-h-screen pb-32">
      {/* ========================================================
          FULL-BLEED CINEMA HERO BANNER (SOTHEBY'S ARTISTS PLATFORM)
      ======================================================== */}
      <section className="relative w-full h-[380px] sm:h-[460px] lg:h-[520px] bg-black overflow-hidden border-b border-[#E5E5E5]">
        <Image
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=2600&q=90"
          alt="Cloud Artists in Atelier and Stone Studio"
          fill
          priority
          className="object-cover object-center brightness-[0.85] contrast-[1.1]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />

        {/* Hero Top Badge */}
        <div className="absolute top-6 left-6 sm:left-12">
          <span className="text-[10px] tracking-[0.3em] uppercase bg-black/80 backdrop-blur-xs px-3.5 py-1.5 border border-white/25 text-white font-medium">
            REPRESENTED MASTERS & RESIDENT ARTISTS · MONOGRAPHS
          </span>
        </div>

        {/* Hero Bottom Title & Metadata */}
        <div className="absolute bottom-8 left-6 sm:left-12 right-6 sm:right-12 text-white max-w-4xl space-y-3">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#CCCCCC]">
            <span className="w-2 h-2 rounded-full bg-[#081757] border border-white/60" />
            <span>CLOUD ARTIST ROSTER & ARCHIVE</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight text-white">
            Cloud Artists
          </h1>
          <p className="font-merriweather text-xs sm:text-sm text-[#DDDDDD] font-light max-w-2xl leading-relaxed italic">
            Representing international sculptors, ceramic masters, lost-wax bronze casters, and spatial painters who reject decorative triviality in pursuit of monolithic permanence and quiet architectural weight.
          </p>
        </div>
      </section>

      {/* ========================================================
          STICKY SECTION JUMP NAVIGATION BAR
      ======================================================== */}
      <nav
        aria-label="Artists Sections Navigation"
        className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-[#E5E5E5] shadow-xs"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#888888] font-bold mr-2 hidden md:inline">
              DIRECT SECTIONS:
            </span>
            <a
              href="#artist-of-the-month"
              className="px-3.5 py-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-medium text-black hover:text-[#081757] hover:bg-neutral-100 border border-transparent hover:border-[#E5E5E5] transition-all whitespace-nowrap"
            >
              ARTIST OF THE MONTH
            </a>
            <a
              href="#our-artists"
              className="px-3.5 py-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-medium text-black hover:text-[#081757] hover:bg-neutral-100 border border-transparent hover:border-[#E5E5E5] transition-all whitespace-nowrap"
            >
              OUR ARTISTS
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#666666] shrink-0 font-medium">
            <span>CURATED ROSTER</span>
            <span>·</span>
            <span>EXCLUSIVE MONOGRAPHS</span>
          </div>
        </div>
      </nav>

      {/* ========================================================
          MAIN CONTENT CONTAINER
      ======================================================== */}
      <div className="space-y-28 pt-16">
        {/* ========================================================
            SECTION 1: ARTIST OF THE MONTH
        ======================================================== */}
        <section
          id="artist-of-the-month"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-36"
        >
          {/* Section Header */}
          <div className="border-b border-black pb-5 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#888888]">
                  SECTION 01 / 02
                </span>
                <span className="h-2 w-px bg-[#CCCCCC]" />
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#081757] font-semibold">
                  MONTHLY MONOGRAPH SPOTLIGHT
                </span>
              </div>

              <h2 className="font-roboto font-bold text-3xl sm:text-4xl text-[#081757] tracking-tight">
                ARTIST OF THE MONTH
              </h2>

              {/* Exact required copy */}
              <p className="font-merriweather text-sm text-[#081757] font-semibold italic">
                Featured artist, their story and selected works. [Details to be added by Cloud Gallery]
              </p>

              <p className="font-merriweather font-light text-xs sm:text-sm text-black max-w-2xl leading-relaxed pt-1">
                Each calendar month, Cloud Gallery dedicates an in-depth monograph and physical exhibition focus to a single represented master.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#777777] font-medium bg-[#FAFAFA] border border-[#E5E5E5] px-3 py-1.5">
                OCTOBER 2026 FEATURED MASTER
              </span>
              <a
                href="#artist-of-the-month"
                className="text-[10px] uppercase tracking-[0.2em] font-bold text-black hover:text-[#081757] transition-colors flex items-center gap-1"
              >
                <span>TOP</span>
                <span>↑</span>
              </a>
            </div>
          </div>

          {/* Featured Artist Spotlight Card */}
          <div className="p-8 sm:p-12 bg-white border border-black grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-xs">
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] bg-[#FAFAFA] border border-[#E5E5E5] overflow-hidden">
                <Image
                  src={featuredArtist.portrait}
                  alt={featuredArtist.name}
                  fill
                  className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
              <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-[9px] uppercase tracking-widest font-semibold">
                Artist of the Month · {featuredArtist.tier}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-[#555555] uppercase tracking-wider font-semibold">
                  <MapPin size={13} className="text-[#081757]" />
                  <span>{featuredArtist.origin}</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-5xl text-black font-normal">
                  {featuredArtist.name}
                </h3>
                <p className="text-xs tracking-widest uppercase text-[#081757] font-bold pt-0.5">
                  {featuredArtist.discipline}
                </p>
              </div>

              <blockquote className="font-serif text-xl sm:text-2xl text-black italic font-light leading-relaxed border-l-2 border-black pl-4 py-1">
                &ldquo;{featuredArtist.statement}&rdquo;
              </blockquote>

              <p className="text-xs text-[#555555] leading-relaxed font-light">
                {featuredArtist.bio}
              </p>

              {/* Story and Field Practice */}
              <div className="pt-3 border-t border-[#E5E5E5] space-y-1.5">
                <span className="text-[10px] uppercase tracking-widest text-[#081757] block font-bold">
                  THEIR STORY & FIELD PRACTICE:
                </span>
                <p className="font-merriweather text-xs text-[#555555] font-light leading-relaxed italic">
                  {featuredArtist.story}
                </p>
              </div>

              {/* Selected Works */}
              <div className="pt-3 border-t border-[#E5E5E5] space-y-1.5">
                <span className="text-[10px] uppercase tracking-widest text-[#081757] block font-bold">
                  SELECTED WORKS IN RESIDENCE:
                </span>
                <p className="font-serif text-sm text-black">
                  {featuredArtist.selectedWorks.join(" · ")}
                </p>
              </div>

              {/* Actions & Client Reference Copy */}
              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[#E5E5E5]">
                <p className="font-merriweather text-xs text-[#777777] italic">
                  Featured artist, their story and selected works. [Details to be added by Cloud Gallery]
                </p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedArtistDossier(featuredArtist)}
                    className="px-6 py-2.5 bg-black hover:bg-[#081757] text-white text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer"
                  >
                    View Full Dossier
                  </button>
                  <button
                    onClick={() => openEnquiry(null)}
                    className="px-6 py-2.5 border border-black text-black hover:bg-black hover:text-white text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer"
                  >
                    Inquire on Works
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Clean Placeholder for Upcoming Month */}
          <div className="mt-8 border-2 border-dashed border-[#DDDDDD] bg-[#FAFAFA] p-8 text-center space-y-3 hover:border-[#888888] transition-colors">
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#888888] font-bold block">
              UPCOMING SPOTLIGHT · NOVEMBER 2026
            </span>
            <h4 className="font-serif text-xl text-black">
              Next Month&apos;s Featured Artist
            </h4>
            <p className="font-merriweather text-xs text-[#081757] font-semibold italic max-w-xl mx-auto">
              Featured artist, their story and selected works. [Details to be added by Cloud Gallery]
            </p>
          </div>
        </section>

        {/* ========================================================
            SECTION 2: OUR ARTISTS
        ======================================================== */}
        <section
          id="our-artists"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-36"
        >
          {/* Section Header */}
          <div className="border-b border-black pb-5 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#888888]">
                  SECTION 02 / 02
                </span>
                <span className="h-2 w-px bg-[#CCCCCC]" />
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#081757] font-semibold">
                  COMPLETE ROSTER & DIRECTORY
                </span>
              </div>

              <h2 className="font-roboto font-bold text-3xl sm:text-4xl text-[#081757] tracking-tight">
                OUR ARTISTS
              </h2>

              {/* Exact required copy */}
              <p className="font-merriweather text-sm text-[#081757] font-semibold italic">
                Individual profiles of every Cloud artist. [Details to be added by Cloud Gallery]
              </p>

              <p className="font-merriweather font-light text-xs sm:text-sm text-black max-w-2xl leading-relaxed pt-1">
                Explore individual profiles, studio biographies, and representative lots across our international resident artist community.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#777777] font-medium bg-[#FAFAFA] border border-[#E5E5E5] px-3 py-1.5">
                {displayedArtists.length} REPRESENTED MASTERS
              </span>
              <a
                href="#our-artists"
                className="text-[10px] uppercase tracking-[0.2em] font-bold text-black hover:text-[#081757] transition-colors flex items-center gap-1"
              >
                <span>TOP</span>
                <span>↑</span>
              </a>
            </div>
          </div>

          {/* Tier Filter Pills */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-4 mb-8 no-scrollbar border-b border-[#EEEEEE]">
            {(["All", "Featured", "Resident Master", "Emerging"] as const).map((tier) => (
              <button
                key={tier}
                onClick={() => setTierFilter(tier)}
                className={`px-4 py-1.5 text-[10px] uppercase tracking-wider transition-all border cursor-pointer ${
                  tierFilter === tier
                    ? "bg-black text-white border-black font-semibold"
                    : "bg-[#FAFAFA] text-[#555555] hover:text-black hover:border-black border-[#E5E5E5]"
                }`}
              >
                {tier === "All" ? "All Artists" : tier}
              </button>
            ))}
          </div>

          {/* 3-Column Profile Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedArtists.map((artist) => (
              <div
                key={artist.id}
                className="group bg-white border border-[#E5E5E5] hover:border-black p-6 space-y-4 transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                {/* Portrait & Tier Tag */}
                <div className="relative aspect-[4/5] bg-[#FAFAFA] overflow-hidden border border-[#E5E5E5]">
                  <Image
                    src={artist.portrait}
                    alt={artist.name}
                    fill
                    className="object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-white px-2.5 py-1 text-[9px] uppercase tracking-widest font-bold text-black border border-[#E5E5E5]">
                    {artist.tier}
                  </div>
                </div>

                {/* Profile Details */}
                <div className="space-y-2">
                  <span className="text-[10px] tracking-wider uppercase text-[#081757] font-semibold block">
                    {artist.origin}
                  </span>
                  <h3 className="font-serif text-2xl text-black group-hover:underline">
                    {artist.name}
                  </h3>
                  <p className="text-xs text-[#555555] tracking-wide font-medium">
                    {artist.discipline}
                  </p>
                  <p className="font-merriweather text-xs text-[#666666] line-clamp-3 font-light pt-1 leading-relaxed italic">
                    {artist.bio}
                  </p>
                </div>

                {/* Selected Works Preview */}
                <div className="pt-3 border-t border-[#EEEEEE] space-y-1 text-xs">
                  <span className="text-[9px] uppercase tracking-widest text-[#777777] font-semibold block">
                    SELECTED WORKS
                  </span>
                  <p className="font-serif italic text-sm text-black truncate">
                    {artist.selectedWorks.join(", ")}
                  </p>
                </div>

                {/* Action Buttons: Dossier & Inquire */}
                <div className="pt-3 border-t border-[#E5E5E5] grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedArtistDossier(artist)}
                    className="w-full text-center py-2 bg-[#FAFAFA] hover:bg-black hover:text-white text-[10px] uppercase tracking-[0.2em] font-medium text-black border border-[#E5E5E5] transition-colors cursor-pointer"
                  >
                    View Dossier
                  </button>
                  <button
                    onClick={() => openEnquiry(null)}
                    className="w-full text-center py-2 bg-black hover:bg-[#081757] text-[10px] uppercase tracking-[0.2em] font-medium text-white transition-colors cursor-pointer"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            ))}

            {/* Clean Curatorial Placeholder Card for Cloud Gallery */}
            <div className="border-2 border-dashed border-[#DDDDDD] bg-[#FAFAFA] p-6 flex flex-col justify-between text-left hover:border-[#888888] transition-colors">
              <div className="space-y-2">
                <span className="text-[9px] uppercase tracking-widest text-[#888888] font-bold block">
                  ROSTER EXPANSION
                </span>
                <h4 className="font-serif text-xl text-black">
                  Artist Ingestion in Progress
                </h4>
                <p className="font-merriweather text-xs text-[#081757] font-semibold italic pt-2">
                  Individual profiles of every Cloud artist. [Details to be added by Cloud Gallery]
                </p>
                <p className="text-xs text-[#777777] font-light leading-relaxed pt-1">
                  Cloud Gallery curators are currently preparing solo monographs, studio visit documentation, and catalogue photography for invited resident artists.
                </p>
              </div>

              <div className="pt-6 border-t border-[#E5E5E5]">
                <Link
                  href="/open-call"
                  className="inline-block text-[10px] uppercase tracking-[0.2em] font-bold text-black hover:text-[#081757] transition-colors"
                >
                  Apply via Open Call →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ========================================================
          INTERACTIVE ARTIST DOSSIER MODAL
      ======================================================== */}
      {selectedArtistDossier && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xs animate-fade-in">
          <div
            className="relative w-full max-w-3xl bg-white border border-[#E5E5E5] shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArtistDossier(null)}
              aria-label="Close dossier"
              className="absolute top-6 right-6 p-2 text-[#666666] hover:text-black transition-colors cursor-pointer"
            >
              <X size={22} strokeWidth={1.5} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-5 relative aspect-[4/5] bg-[#FAFAFA] border border-[#E5E5E5]">
                <Image
                  src={selectedArtistDossier.portrait}
                  alt={selectedArtistDossier.name}
                  fill
                  className="object-cover grayscale"
                  sizes="350px"
                />
              </div>

              <div className="md:col-span-7 space-y-4">
                <div>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-black font-semibold block">
                    {selectedArtistDossier.tier} · {selectedArtistDossier.origin}
                  </span>
                  <h3 className="font-serif text-3xl text-black">
                    {selectedArtistDossier.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#081757] font-bold">
                    {selectedArtistDossier.discipline}
                  </p>
                </div>

                <blockquote className="font-serif text-base italic text-black border-l-2 border-black pl-3 py-0.5">
                  &ldquo;{selectedArtistDossier.statement}&rdquo;
                </blockquote>

                <p className="text-xs text-[#555555] font-light leading-relaxed">
                  {selectedArtistDossier.bio}
                </p>

                <div className="pt-2 border-t border-[#E5E5E5] space-y-1">
                  <span className="text-[9px] uppercase tracking-widest text-[#081757] font-bold block">
                    STUDIO PRACTICE & METHODOLOGY
                  </span>
                  <p className="font-merriweather text-xs text-[#555555] font-light leading-relaxed italic">
                    {selectedArtistDossier.story}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E5E5E5] space-y-1">
                  <span className="text-[9px] uppercase tracking-widest text-[#081757] font-bold block">
                    SELECTED WORKS IN RESIDENCE
                  </span>
                  <p className="font-serif text-sm italic text-black">
                    {selectedArtistDossier.selectedWorks.join(" · ")}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-[#E5E5E5]">
                  <div className="text-[11px] text-[#666666]">
                    {selectedArtistDossier.contactEmail && (
                      <span className="block font-mono text-[10px]">{selectedArtistDossier.contactEmail}</span>
                    )}
                    {selectedArtistDossier.instagram && (
                      <span className="block text-[10px] text-[#888888]">{selectedArtistDossier.instagram}</span>
                    )}
                  </div>
                  <button
                    onClick={() => {
                      setSelectedArtistDossier(null);
                      openEnquiry(null);
                    }}
                    className="px-6 py-2.5 bg-black hover:bg-[#081757] text-white text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer"
                  >
                    Enquire on Artist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
