"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ARTISTS_DATA } from "@/data/mockData";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";

export default function ArtistsPage() {
  const spotlightArtist = ARTISTS_DATA[0];

  return (
    <div className="w-full min-h-screen pb-32">
      {/* Header */}
      <section className="bg-[#EAE5DC] border-b border-[#E2DDD4] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-[11px] tracking-[0.35em] uppercase text-[#8C6D53] font-medium block">
            RESIDENCY & REPRESENTATION
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#2B2A27] font-light">
            Cloud Resident Artists
          </h1>
          <p className="text-xs sm:text-sm text-[#7E7971] max-w-2xl font-light leading-relaxed">
            Representing sculptors, ceramic masters, and spatial painters who reject decorative triviality in pursuit of monolithic permanence and quiet architectural weight.
          </p>
        </div>
      </section>

      {/* FEATURED ARTIST TOP SPOTLIGHT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#E2DDD4]">
        <div className="p-8 sm:p-12 bg-[#EAE5DC]/60 border border-[#E2DDD4] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] bg-stone-300 border border-[#D5CEC2] overflow-hidden">
              <Image
                src={spotlightArtist.portrait}
                alt={spotlightArtist.name}
                fill
                className="object-cover grayscale contrast-125"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="absolute top-4 left-4 bg-[#F4F0EA]/90 backdrop-blur-sm px-3 py-1 text-[9px] uppercase tracking-widest text-[#8C6D53]">
              Featured Artist Spotlight
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs text-[#8C6D53] uppercase tracking-wider">
                <MapPin size={13} />
                <span>{spotlightArtist.origin}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#2B2A27]">
                {spotlightArtist.name}
              </h2>
              <p className="text-xs tracking-widest uppercase text-[#7E7971] pt-1">
                {spotlightArtist.discipline}
              </p>
            </div>

            <blockquote className="font-serif text-xl sm:text-2xl text-[#2B2A27] italic font-light leading-relaxed border-l-2 border-[#8C6D53] pl-4 py-1">
              &ldquo;{spotlightArtist.statement}&rdquo;
            </blockquote>

            <p className="text-xs text-[#7E7971] leading-relaxed font-light">
              {spotlightArtist.bio}
            </p>

            <div className="pt-2 flex items-center justify-between border-t border-[#D5CEC2]">
              <div>
                <span className="text-[9px] uppercase tracking-widest text-[#7E7971] block">
                  SIGNATURE BODY OF WORK
                </span>
                <span className="font-serif text-base text-[#2B2A27]">
                  {spotlightArtist.signatureWork}
                </span>
              </div>
              <Link
                href="/gallery"
                className="px-5 py-2.5 bg-[#2B2A27] hover:bg-[#8C6D53] text-[#F4F0EA] text-xs uppercase tracking-widest font-medium transition-colors"
              >
                View Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4-COLUMN DIRECTORY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-between items-baseline border-b border-[#E2DDD4] pb-4 mb-12">
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#8C6D53] font-medium">
            ARTIST DIRECTORY ({ARTISTS_DATA.length})
          </span>
          <span className="text-xs text-[#7E7971]">
            Global representation
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ARTISTS_DATA.map((artist) => (
            <div
              key={artist.id}
              className="group bg-[#F4F0EA] border border-[#E2DDD4] p-5 space-y-4 hover:border-[#8C6D53] transition-all duration-300"
            >
              {/* Portrait */}
              <div className="relative aspect-[4/5] bg-[#EAE5DC] overflow-hidden border border-[#E2DDD4]">
                <Image
                  src={artist.portrait}
                  alt={artist.name}
                  fill
                  className="object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Info */}
              <div className="space-y-1">
                <span className="text-[10px] tracking-wider uppercase text-[#8C6D53] block">
                  {artist.origin}
                </span>
                <h3 className="font-serif text-2xl text-[#2B2A27] group-hover:text-[#8C6D53] transition-colors">
                  {artist.name}
                </h3>
                <p className="text-xs text-[#7E7971] tracking-wider">
                  {artist.discipline}
                </p>
              </div>

              <div className="pt-2 border-t border-[#E2DDD4] text-xs text-[#7E7971] space-y-1">
                <span className="text-[9px] uppercase tracking-widest text-[#7E7971]/70 block">
                  Focus
                </span>
                <p className="font-serif italic text-sm text-[#2B2A27]">
                  {artist.signatureWork}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/gallery"
                  className="w-full text-center py-2 border border-[#2B2A27] group-hover:border-[#8C6D53] group-hover:bg-[#8C6D53] group-hover:text-[#F4F0EA] text-[10px] uppercase tracking-[0.25em] font-medium text-[#2B2A27] block transition-all"
                >
                  View Collection
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
