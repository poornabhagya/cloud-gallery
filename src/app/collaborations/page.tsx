"use client";

import React, { useState } from "react";
import Image from "next/image";
import { COLLABORATIONS_DATA, Collaboration } from "@/data/mockData";
import { ArrowRight, Layers, Users, Sparkles } from "lucide-react";

const COLLAB_CATEGORIES = [
  "All",
  "Artist × Artist",
  "Artist × Architect",
  "Artist × Designer",
  "Artist × Brand",
  "Special Projects",
] as const;

export default function CollaborationsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filtered = COLLABORATIONS_DATA.filter((item) =>
    selectedCategory === "All" ? true : item.category === selectedCategory
  );

  return (
    <div className="w-full min-h-screen pb-32">
      {/* Header */}
      <section className="bg-[#EAE5DC] border-b border-[#E2DDD4] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-[11px] tracking-[0.35em] uppercase text-[#8C6D53] font-medium block">
            CROSS-DISCIPLINARY FUSIONS
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#2B2A27] font-light">
            Cloud Collaborations
          </h1>
          <p className="text-xs sm:text-sm text-[#7E7971] max-w-2xl font-light leading-relaxed">
            Where independent masters cross disciplines to pioneer unforeseen architectural archetypes: stone sculptors teaming with bronze foundries, lighting laboratories, and spatial architects.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-30 bg-[#F4F0EA]/95 backdrop-blur-md border-b border-[#E2DDD4] py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center space-x-2 overflow-x-auto no-scrollbar">
          {COLLAB_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 text-[11px] uppercase tracking-wider whitespace-nowrap transition-all border ${
                  isSelected
                    ? "bg-[#2B2A27] text-[#F4F0EA] border-[#2B2A27]"
                    : "bg-[#EAE5DC]/60 text-[#7E7971] hover:text-[#2B2A27] border-[#E2DDD4]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Case Studies Stream */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {filtered.map((collab, index) => (
          <div
            key={collab.id}
            className="border border-[#E2DDD4] bg-[#F4F0EA] p-6 sm:p-10 lg:p-12 space-y-8 shadow-xs"
          >
            {/* Header / People */}
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#E2DDD4] pb-6 gap-4">
              <div className="space-y-1">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#8C6D53] font-medium block">
                  {collab.category} · {collab.year}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2A27]">
                  {collab.title}
                </h2>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#7E7971] bg-[#EAE5DC]/60 px-4 py-2 border border-[#E2DDD4]">
                <Users size={14} className="text-[#8C6D53]" />
                <span className="font-medium">{collab.collaborators}</span>
              </div>
            </div>

            {/* Content 3-Stage Structure: Concept -> Process -> Outcome */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-2">
              <div className="space-y-2">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#8C6D53] font-semibold block">
                  STAGE 01: CONCEPT
                </span>
                <p className="text-xs text-[#7E7971] leading-relaxed font-light">
                  {collab.concept}
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#8C6D53] font-semibold block">
                  STAGE 02: PROCESS
                </span>
                <p className="text-xs text-[#7E7971] leading-relaxed font-light">
                  {collab.process}
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#8C6D53] font-semibold block">
                  STAGE 03: OUTCOME
                </span>
                <p className="text-xs text-[#7E7971] leading-relaxed font-light">
                  {collab.outcome}
                </p>
              </div>
            </div>

            {/* Visual Documentation Carousel / Split Photos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#E2DDD4]">
              {collab.images.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-[16/10] bg-[#EAE5DC] border border-[#E2DDD4] overflow-hidden group"
                >
                  <Image
                    src={img}
                    alt={`${collab.title} plate ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#F4F0EA]/90 backdrop-blur-xs px-2.5 py-1 text-[9px] uppercase tracking-widest text-[#7E7971]">
                    Plate 0{i + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
