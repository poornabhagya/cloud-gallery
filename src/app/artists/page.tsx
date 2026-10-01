"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ARTISTS_DATA, Artist } from "@/data/mockData";
import { useGallery } from "@/context/GalleryContext";
import { ArrowRight, Sparkles, MapPin, Mail, ExternalLink, X, Award, Check, Share2 } from "lucide-react";

export default function ArtistsPage() {
  const { openEnquiry } = useGallery();
  const [selectedArtistDossier, setSelectedArtistDossier] = useState<Artist | null>(null);
  const [tierFilter, setTierFilter] = useState<"All" | "Featured" | "Emerging" | "Resident Master">("All");

  const featuredArtists = ARTISTS_DATA.filter((a) => a.tier === "Featured" || a.tier === "Resident Master");
  const emergingArtists = ARTISTS_DATA.filter((a) => a.tier === "Emerging");

  const displayedArtists = tierFilter === "All"
    ? ARTISTS_DATA
    : ARTISTS_DATA.filter((a) => a.tier === tierFilter);

  return (
    <div className="w-full bg-white text-black min-h-screen pb-32">
      {/* ========================================================
          FULL-BLEED HERO IMAGE (SOTHEBY'S ARTISTS PLATFORM)
      ======================================================== */}
      <section className="relative w-full h-[360px] sm:h-[460px] lg:h-[520px] bg-black overflow-hidden border-b border-[#E5E5E5]">
        <Image
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=2600&q=90"
          alt="Cloud Artists in Atelier and Stone Studio"
          fill
          priority
          className="object-cover object-center brightness-[0.88] contrast-[1.1]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
        <div className="absolute bottom-6 left-6 sm:left-12 text-white">
          <span className="text-[10px] tracking-[0.3em] uppercase bg-black/75 backdrop-blur-xs px-3 py-1 border border-white/20 font-medium">
            REPRESENTED MASTERS & RESIDENT ARTISTS
          </span>
        </div>
      </section>

      {/* ========================================================
          HEADER (SOTHEBY'S CONTEMPORARY ARTIST ROSTER)
      ======================================================== */}
      <section className="border-b border-[#E5E5E5] bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] tracking-[0.3em] uppercase text-black font-semibold bg-[#FAFAFA] border border-[#E5E5E5] px-2.5 py-1">
              GALLERY RESIDENTS & REPRESENTED MASTERS
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-black font-normal leading-tight">
            Cloud Artists & Contemporary Masters
          </h1>
          <p className="text-xs sm:text-sm text-[#555555] max-w-2xl font-light leading-relaxed">
            Representing international sculptors, ceramic masters, lost-wax bronze casters, and spatial painters who reject decorative triviality in pursuit of monolithic permanence and quiet architectural weight.
          </p>
        </div>
      </section>

      {/* ========================================================
          SECTION 1: FEATURED ARTIST SPOTLIGHT / MASTER STORY
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-[#E5E5E5]">
        <div className="mb-8 pb-3 border-b border-[#E5E5E5]">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#666666] font-semibold block">
            SPOTLIGHT RESIDENCY & MASTER STORY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-black">
            Featured Master: Henrik Vestergaard
          </h2>
        </div>

        <div className="p-8 sm:p-12 bg-white border border-black grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] bg-[#FAFAFA] border border-[#E5E5E5] overflow-hidden">
              <Image
                src={ARTISTS_DATA[0].portrait}
                alt={ARTISTS_DATA[0].name}
                fill
                className="object-cover grayscale contrast-125"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-[9px] uppercase tracking-widest font-semibold">
              Master Resident
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-[#555555] uppercase tracking-wider font-semibold">
                <MapPin size={13} className="text-black" />
                <span>{ARTISTS_DATA[0].origin}</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-5xl text-black font-normal">
                {ARTISTS_DATA[0].name}
              </h3>
              <p className="text-xs tracking-widest uppercase text-[#666666] pt-0.5">
                {ARTISTS_DATA[0].discipline}
              </p>
            </div>

            <blockquote className="font-serif text-xl sm:text-2xl text-black italic font-light leading-relaxed border-l-2 border-black pl-4 py-1">
              &ldquo;{ARTISTS_DATA[0].statement}&rdquo;
            </blockquote>

            <p className="text-xs text-[#555555] leading-relaxed font-light">
              {ARTISTS_DATA[0].bio}
            </p>

            <div className="pt-2 border-t border-[#E5E5E5] space-y-2">
              <span className="text-[9px] uppercase tracking-widest text-[#777777] block font-semibold">
                ARTIST STORY & FIELD PRACTICE
              </span>
              <p className="text-xs text-[#555555] font-light leading-relaxed">
                {ARTISTS_DATA[0].story}
              </p>
            </div>

            <div className="pt-3 flex flex-wrap items-center justify-between gap-4 border-t border-[#E5E5E5]">
              <div>
                <span className="text-[9px] uppercase tracking-widest text-[#777777] block">
                  SELECTED MONOGRAPH WORKS
                </span>
                <span className="font-serif text-sm text-black">
                  {ARTISTS_DATA[0].selectedWorks.join(" · ")}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedArtistDossier(ARTISTS_DATA[0])}
                  className="px-5 py-2.5 bg-black hover:bg-[#222222] text-white text-xs uppercase tracking-widest font-medium transition-colors"
                >
                  Full Dossier
                </button>
                <Link
                  href="/gallery"
                  className="px-5 py-2.5 border border-black text-black hover:bg-black hover:text-white text-xs uppercase tracking-widest font-medium transition-colors"
                >
                  View Lots
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 2 & 3: ARTIST DIRECTORY (Featured & Emerging Filters)
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-[#E5E5E5]">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E5E5E5] pb-4 mb-10 gap-4">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#666666] font-semibold block mb-1">
              ARTIST PROFILES & DOSSIERS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-black">
              Represented Artists Directory ({displayedArtists.length})
            </h2>
          </div>

          {/* Tier Tabs */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 no-scrollbar">
            {(["All", "Featured", "Emerging", "Resident Master"] as const).map((tier) => (
              <button
                key={tier}
                onClick={() => setTierFilter(tier)}
                className={`px-3 py-1 text-[10px] uppercase tracking-wider transition-all border ${
                  tierFilter === tier
                    ? "bg-black text-white border-black font-medium"
                    : "bg-[#FAFAFA] text-[#555555] hover:text-black border-[#E5E5E5]"
                }`}
              >
                {tier === "All" ? "All Artists" : tier}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedArtists.map((artist) => (
            <div
              key={artist.id}
              className="group bg-white border border-[#E5E5E5] hover:border-black p-6 space-y-4 transition-all flex flex-col justify-between"
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
                <div className="absolute top-3 left-3 bg-white px-2.5 py-1 text-[9px] uppercase tracking-widest font-semibold text-black border border-[#E5E5E5]">
                  {artist.tier}
                </div>
              </div>

              {/* Profile Details */}
              <div className="space-y-2">
                <span className="text-[10px] tracking-wider uppercase text-[#666666] font-semibold block">
                  {artist.origin}
                </span>
                <h3 className="font-serif text-2xl text-black group-hover:underline">
                  {artist.name}
                </h3>
                <p className="text-xs text-[#555555] tracking-wide">
                  {artist.discipline}
                </p>
                <p className="text-xs text-[#666666] line-clamp-3 font-light pt-1 leading-relaxed">
                  {artist.bio}
                </p>
              </div>

              {/* Selected Works Preview */}
              <div className="pt-3 border-t border-[#EEEEEE] space-y-1 text-xs">
                <span className="text-[9px] uppercase tracking-widest text-[#777777] block">
                  SELECTED WORKS
                </span>
                <p className="font-serif italic text-sm text-black truncate">
                  {artist.selectedWorks.join(", ")}
                </p>
              </div>

              {/* Action Buttons: Dossier & Connect */}
              <div className="pt-3 border-t border-[#E5E5E5] grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSelectedArtistDossier(artist)}
                  className="w-full text-center py-2 bg-[#FAFAFA] hover:bg-black hover:text-white text-[10px] uppercase tracking-[0.2em] font-medium text-black border border-[#E5E5E5] transition-colors"
                >
                  View Dossier
                </button>
                <Link
                  href="/gallery"
                  className="w-full text-center py-2 bg-black hover:bg-[#222222] text-[10px] uppercase tracking-[0.2em] font-medium text-white transition-colors"
                >
                  Acquire Works
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          CONNECT WITH ARTISTS & CURATORIAL LIAISON
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="p-8 sm:p-12 border border-black bg-[#FAFAFA] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[10px] tracking-[0.3em] uppercase text-black font-semibold block">
              PLATFORM FOR ARTISTS & RESIDENCY INQUIRIES
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-black">
              Connect With Resident Artists & Commission Works
            </h3>
            <p className="text-xs text-[#555555] leading-relaxed font-light">
              Are you an institutional curator, architectural director, or collector seeking a bespoke commission from our artists? Our Curatorial Liaison office coordinates studio visits and private monographs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={() => openEnquiry(null)}
              className="px-7 py-3 bg-black hover:bg-[#222222] text-white text-xs uppercase tracking-[0.25em] font-medium transition-colors text-center"
            >
              Contact Curatorial Liaison
            </button>
            <Link
              href="/open-call"
              className="px-7 py-3 border border-black text-black hover:bg-black hover:text-white text-xs uppercase tracking-[0.25em] font-medium transition-colors text-center"
            >
              Submit Artist Portfolio
            </Link>
          </div>
        </div>
      </section>

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
              className="absolute top-6 right-6 p-2 text-[#666666] hover:text-black transition-colors"
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
                  <p className="text-xs uppercase tracking-wider text-[#666666]">
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
                  <span className="text-[9px] uppercase tracking-widest text-black font-semibold block">
                    STUDIO PRACTICE & METHODOLOGY
                  </span>
                  <p className="text-xs text-[#555555] font-light leading-relaxed">
                    {selectedArtistDossier.story}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E5E5E5] space-y-1">
                  <span className="text-[9px] uppercase tracking-widest text-black font-semibold block">
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
                    className="px-6 py-2.5 bg-black hover:bg-[#222222] text-white text-xs uppercase tracking-widest font-medium transition-colors"
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
