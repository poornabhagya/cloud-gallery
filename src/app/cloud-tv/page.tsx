"use client";

import React, { useState } from "react";
import Image from "next/image";
import { VIDEOS_DATA, CloudVideo } from "@/data/mockData";
import { useGallery } from "@/context/GalleryContext";
import { Play, Film, Clock, User, Filter, Tv } from "lucide-react";

const VIDEO_CATEGORIES = [
  "All",
  "Artist Interviews",
  "Studio Visits",
  "Conversations",
  "Behind the Work",
  "Discussions",
  "Project Videos",
  "Cloud Stories",
] as const;

export default function CloudTVPage() {
  const { openVideo } = useGallery();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const featuredVideo = VIDEOS_DATA.find((v) => v.featured) || VIDEOS_DATA[0];

  const filteredVideos = VIDEOS_DATA.filter((v) =>
    selectedCategory === "All" ? true : v.category === selectedCategory
  );

  return (
    <div className="w-full bg-white text-black min-h-screen pb-32">
      {/* ========================================================
          FULL-BLEED HERO IMAGE (SOTHEBY'S CINEMA & MOVING IMAGES)
      ======================================================== */}
      <section className="relative w-full h-[360px] sm:h-[460px] lg:h-[520px] bg-black overflow-hidden border-b border-[#E5E5E5]">
        <Image
          src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=2600&q=90"
          alt="Cloud TV Documentary Cinema and Studio Essays"
          fill
          priority
          className="object-cover object-center brightness-[0.88] contrast-[1.05]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
        <div className="absolute bottom-6 left-6 sm:left-12 text-white">
          <span className="text-[10px] tracking-[0.3em] uppercase bg-black/75 backdrop-blur-xs px-3 py-1 border border-white/20 font-medium">
            DOCUMENTARY CINEMA & ARTIST ESSAYS · 4K REPERTORY
          </span>
        </div>
      </section>

      {/* ========================================================
          HEADER (SOTHEBY'S CINEMA & EDITORIAL FILMS)
      ======================================================== */}
      <section className="border-b border-[#E5E5E5] bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] tracking-[0.3em] uppercase text-black font-semibold bg-[#FAFAFA] border border-[#E5E5E5] px-2.5 py-1">
              DOCUMENTARY CINEMA & ARTIST ESSAYS
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-black font-normal leading-tight">
            Cloud TV: Moving Images & Monograph Films
          </h1>
          <p className="text-xs sm:text-sm text-[#555555] max-w-2xl font-light leading-relaxed">
            Short-form documentary cinema capturing raw furnace bronze pours at 1,200°C, mountain granite quarry extractions in Norway, and slow architectural philosophy.
          </p>
        </div>
      </section>

      {/* ========================================================
          16:9 FEATURED CINEMA FILM
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#E5E5E5]">
        <div
          onClick={() => openVideo(featuredVideo)}
          className="group relative aspect-video w-full bg-black border border-[#E5E5E5] overflow-hidden cursor-pointer shadow-lg"
        >
          <Image
            src={featuredVideo.thumbnail}
            alt={featuredVideo.title}
            fill
            className="object-cover brightness-[0.7] contrast-110 group-hover:scale-105 group-hover:brightness-[0.82] transition-all duration-700"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/20" />

          {/* Central Play Badge */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center text-white group-hover:scale-115 group-hover:bg-white group-hover:text-black transition-all duration-300">
              <Play size={28} className="translate-x-0.5" fill="currentColor" />
            </div>
          </div>

          {/* Metadata Overlay */}
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 text-white space-y-3">
            <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#CCCCCC] font-semibold">
              <span className="px-2.5 py-0.5 bg-white text-black">
                PREMIER FILM
              </span>
              <span>{featuredVideo.duration}</span>
              <span>·</span>
              <span>{featuredVideo.category}</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
              {featuredVideo.title}
            </h2>

            <p className="text-xs sm:text-sm text-[#DDDDDD] max-w-2xl line-clamp-2 font-light">
              {featuredVideo.excerpt}
            </p>

            <div className="pt-1 text-xs text-[#AAAAAA] italic">
              Featuring {featuredVideo.speaker}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CATEGORIZED VIDEO ESSAYS GRID
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5E5E5] pb-4">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-black font-semibold block">
              CATALOGUED FILMS ({filteredVideos.length})
            </span>
            <h3 className="font-serif text-2xl text-black">
              Cinema Stream & Video Monograph Archive
            </h3>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar">
            {VIDEO_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 text-[10px] uppercase tracking-wider whitespace-nowrap transition-all border ${
                  selectedCategory === cat
                    ? "bg-black text-white border-black font-medium"
                    : "bg-[#FAFAFA] text-[#555555] hover:text-black border-[#E5E5E5]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => openVideo(video)}
              className="group bg-white border border-[#E5E5E5] hover:border-black transition-all cursor-pointer flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video bg-black overflow-hidden border-b border-[#E5E5E5]">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />

                {/* Small Play Badge */}
                <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-black/80 backdrop-blur-xs flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                  <Play size={14} fill="currentColor" className="translate-x-0.5" />
                </div>

                <div className="absolute top-3 left-3 bg-white px-2 py-0.5 text-[9px] uppercase tracking-widest font-semibold text-black border border-[#E5E5E5]">
                  {video.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] tracking-wider uppercase text-[#666666] font-semibold block mb-1">
                    {video.category}
                  </span>
                  <h4 className="font-serif text-xl text-black group-hover:underline leading-snug">
                    {video.title}
                  </h4>
                  <p className="text-xs text-[#555555] leading-relaxed font-light mt-1.5 line-clamp-2">
                    {video.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EEEEEE] text-[11px] text-[#777777] italic flex items-center justify-between">
                  <span>Featuring {video.speaker}</span>
                  <span className="uppercase text-[9px] font-semibold text-black tracking-wider">Watch Film →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
