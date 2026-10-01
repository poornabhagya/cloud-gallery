"use client";

import React, { useState } from "react";
import Image from "next/image";
import { COLLABORATIONS_DATA, Collaboration } from "@/data/mockData";
import { useGallery } from "@/context/GalleryContext";
import { ArrowRight, Layers, Users, Sparkles, Building, Hammer, Check } from "lucide-react";

const COLLAB_CATEGORIES = [
  "All",
  "Artist × Artist",
  "Artist × Architect",
  "Artist × Designer",
  "Artist × Craftsperson",
  "Artist × Brand",
  "Special Projects",
] as const;

export default function CollaborationsPage() {
  const { openEnquiry } = useGallery();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filtered = COLLABORATIONS_DATA.filter((item) =>
    selectedCategory === "All" ? true : item.category === selectedCategory
  );

  return (
    <div className="w-full bg-white text-black min-h-screen pb-32">
      {/* ========================================================
          FULL-BLEED HERO IMAGE (SOTHEBY'S COLLABORATIONS & PAVILIONS)
      ======================================================== */}
      <section className="relative w-full h-[360px] sm:h-[460px] lg:h-[520px] bg-black overflow-hidden border-b border-[#E5E5E5]">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2600&q=90"
          alt="Cloud Collaborations and Architectural Pavilions"
          fill
          priority
          className="object-cover object-center brightness-[0.88] contrast-[1.05]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
        <div className="absolute bottom-6 left-6 sm:left-12 text-white">
          <span className="text-[10px] tracking-[0.3em] uppercase bg-black/75 backdrop-blur-xs px-3 py-1 border border-white/20 font-medium">
            CROSS-DISCIPLINARY CASE STUDIES & SPECIAL PROJECTS
          </span>
        </div>
      </section>

      {/* ========================================================
          HEADER (CROSS-DISCIPLINARY COLLABORATIONS)
      ======================================================== */}
      <section className="border-b border-[#E5E5E5] bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] tracking-[0.3em] uppercase text-black font-semibold bg-[#FAFAFA] border border-[#E5E5E5] px-2.5 py-1">
              CROSS-DISCIPLINARY COMMISSIONS & SPECIAL PROJECTS
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-black font-normal leading-tight">
            Cloud Collaborations
          </h1>
          <p className="text-xs sm:text-sm text-[#555555] max-w-2xl font-light leading-relaxed">
            Where independent masters cross disciplines to pioneer unforeseen architectural archetypes: stone sculptors partnering with bronze foundries, optical lighting laboratories, traditional craft joiners, and alpine architects.
          </p>
        </div>
      </section>

      {/* ========================================================
          STICKY CATEGORY FILTER BAR
      ======================================================== */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-[#E5E5E5] py-3.5 px-4 sm:px-6 lg:px-8 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center space-x-1.5 overflow-x-auto no-scrollbar">
          {COLLAB_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1 text-[10px] uppercase tracking-wider whitespace-nowrap transition-all border ${
                  isSelected
                    ? "bg-black text-white border-black font-medium"
                    : "bg-[#FAFAFA] text-[#555555] hover:text-black hover:border-black border-[#E5E5E5]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          COLLABORATION CASE STUDIES STREAM
          (Layout: Concept → People involved → Process → Final work)
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {filtered.length === 0 ? (
          <div className="py-24 text-center text-[#666666] font-serif text-2xl border border-[#E5E5E5] bg-[#FAFAFA]">
            No collaborations catalogued under this category.
          </div>
        ) : (
          filtered.map((collab, index) => (
            <div
              key={collab.id}
              className="border border-[#E5E5E5] bg-white p-6 sm:p-10 lg:p-12 space-y-8 shadow-xs hover:border-black transition-all"
            >
              {/* Header / Meta */}
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#E5E5E5] pb-6 gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-black font-semibold block">
                    {collab.category} · {collab.year}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-black italic">
                    {collab.title}
                  </h2>
                </div>
                <div className="flex items-center gap-2 text-xs text-black bg-[#FAFAFA] px-4 py-2 border border-[#E5E5E5]">
                  <Users size={14} className="text-black" />
                  <span className="font-semibold uppercase tracking-wider text-[11px]">{collab.collaborators}</span>
                </div>
              </div>

              {/* People Involved Badge Strip */}
              <div className="bg-[#FAFAFA] p-4 border border-[#E5E5E5] flex flex-wrap items-center gap-4 text-xs">
                <span className="text-[9px] uppercase tracking-widest text-[#777777] font-semibold">
                  PEOPLE INVOLVED:
                </span>
                {collab.peopleInvolved.map((person, pIdx) => (
                  <span key={pIdx} className="font-medium text-black bg-white px-2.5 py-1 border border-[#E5E5E5] text-[11px]">
                    {person}
                  </span>
                ))}
              </div>

              {/* Exact 4-Stage Structure: Concept → People involved → Process → Final work */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-2">
                {/* Stage 1: Concept */}
                <div className="space-y-2 p-5 bg-[#FAFAFA] border border-[#E5E5E5]">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-black font-semibold block">
                    STAGE 01: CONCEPT
                  </span>
                  <p className="text-xs text-[#555555] leading-relaxed font-light">
                    {collab.concept}
                  </p>
                </div>

                {/* Stage 2: Process */}
                <div className="space-y-2 p-5 bg-[#FAFAFA] border border-[#E5E5E5]">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-black font-semibold block">
                    STAGE 02: PROCESS
                  </span>
                  <p className="text-xs text-[#555555] leading-relaxed font-light">
                    {collab.process}
                  </p>
                </div>

                {/* Stage 3: Final Work */}
                <div className="space-y-2 p-5 bg-[#FAFAFA] border border-[#E5E5E5]">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-black font-semibold block">
                    STAGE 03: FINAL WORK
                  </span>
                  <p className="text-xs text-[#555555] leading-relaxed font-light">
                    {collab.finalWork}
                  </p>
                </div>
              </div>

              {/* Visual Documentation Split Plates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#E5E5E5]">
                {collab.images.map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-[16/10] bg-[#FAFAFA] border border-[#E5E5E5] overflow-hidden group"
                  >
                    <Image
                      src={img}
                      alt={`${collab.title} plate ${i + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute bottom-3 left-3 bg-white px-2.5 py-1 text-[9px] uppercase tracking-widest font-semibold text-black border border-[#E5E5E5]">
                      Plate 0{i + 1} · Photographic Record
                    </div>
                  </div>
                ))}
              </div>

              {/* Inquire on Collaborative Commission */}
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-[#777777] italic">
                  Site-specific architectural adaptations available by commission.
                </span>
                <button
                  onClick={() => openEnquiry(null)}
                  className="px-6 py-2.5 bg-black hover:bg-[#222222] text-white text-xs uppercase tracking-widest font-medium transition-colors"
                >
                  Commission Special Project
                </button>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
}
