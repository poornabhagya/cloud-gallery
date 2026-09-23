"use client";

import React, { useState } from "react";
import Image from "next/image";
import { VIDEOS_DATA, CloudVideo } from "@/data/mockData";
import { useGallery } from "@/context/GalleryContext";
import { Play, Film, Clock, User } from "lucide-react";

const VIDEO_CATEGORIES = [
  "All",
  "Studio Visits",
  "Conversations: Art & Architecture",
  "Behind the Work",
  "Artist Interviews",
] as const;

export default function CloudTVPage() {
  const { openVideo } = useGallery();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const featuredVideo = VIDEOS_DATA.find((v) => v.featured) || VIDEOS_DATA[0];

  const filteredVideos = VIDEOS_DATA.filter((v) =>
    selectedCategory === "All" ? true : v.category === selectedCategory
  );

  return (
    <div className="w-full min-h-screen pb-32">
      {/* Header */}
      <section className="bg-[#EAE5DC] border-b border-[#E2DDD4] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-[11px] tracking-[0.35em] uppercase text-[#8C6D53] font-medium block">
            CINEMATIC ARCHIVES & ESSAYS
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#2B2A27] font-light">
            Cloud TV: Moving Images
          </h1>
          <p className="text-xs sm:text-sm text-[#7E7971] max-w-2xl font-light leading-relaxed">
            Short-form documentary cinema capturing raw furnace pours, mountain quarry extractions, and slow architectural philosophy.
          </p>
        </div>
      </section>

      {/* 16:9 CINEMATIC FEATURED VIDEO CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#E2DDD4]">
        <div
          onClick={() => openVideo(featuredVideo)}
          className="group relative aspect-video w-full bg-[#1C1B19] border border-[#E2DDD4] overflow-hidden cursor-pointer shadow-lg"
        >
          <Image
            src={featuredVideo.thumbnail}
            alt={featuredVideo.title}
            fill
            className="object-cover brightness-[0.75] contrast-105 group-hover:scale-105 group-hover:brightness-[0.85] transition-all duration-700"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

          {/* Central Play Badge */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#F4F0EA]/20 backdrop-blur-md border border-[#F4F0EA]/40 flex items-center justify-center text-[#F4F0EA] group-hover:scale-110 group-hover:bg-[#8C6D53] transition-all duration-300">
              <Play size={26} className="translate-x-0.5" fill="currentColor" />
            </div>
          </div>

          {/* Metadata Overlay */}
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 text-[#F4F0EA] space-y-2">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#EAE5DC]/80 font-medium">
              <span className="px-2.5 py-0.5 bg-[#8C6D53] text-[#F4F0EA]">
                FEATURED FILM
              </span>
              <span>{featuredVideo.duration}</span>
              <span>·</span>
              <span>{featuredVideo.category}</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-light">
              {featuredVideo.title}
            </h2>

            <p className="text-xs sm:text-sm text-[#EAE5DC]/80 max-w-2xl line-clamp-2 font-light">
              {featuredVideo.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIZED VIDEO STREAM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E2DDD4] pb-4">
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#8C6D53] font-medium">
            ESSAY REPERTORY
          </span>

          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar">
            {VIDEO_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1 text-[11px] uppercase tracking-wider whitespace-nowrap transition-all border ${
                  selectedCategory === cat
                    ? "bg-[#2B2A27] text-[#F4F0EA] border-[#2B2A27]"
                    : "bg-[#EAE5DC]/60 text-[#7E7971] hover:text-[#2B2A27] border-[#E2DDD4]"
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
              className="group bg-[#F4F0EA] border border-[#E2DDD4] hover:border-[#8C6D53] transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-video bg-black overflow-hidden">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />

                {/* Small play icon */}
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/70 backdrop-blur-xs flex items-center justify-center text-white group-hover:bg-[#8C6D53] transition-colors">
                  <Play size={12} fill="currentColor" className="translate-x-0.5" />
                </div>

                <div className="absolute top-3 left-3 bg-[#F4F0EA]/90 backdrop-blur-xs px-2 py-0.5 text-[9px] uppercase tracking-widest text-[#7E7971]">
                  {video.duration}
                </div>
              </div>

              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] tracking-wider uppercase text-[#8C6D53] block mb-1">
                    {video.category}
                  </span>
                  <h3 className="font-serif text-xl text-[#2B2A27] group-hover:text-[#8C6D53] transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-xs text-[#7E7971] leading-relaxed font-light mt-1.5 line-clamp-2">
                    {video.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E2DDD4] text-[11px] text-[#7E7971] italic">
                  Featuring {video.speaker}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
