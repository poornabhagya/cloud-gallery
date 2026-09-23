"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { ARTWORKS_DATA, Artwork } from "@/data/mockData";
import { useGallery } from "@/context/GalleryContext";
import { Filter, SlidersHorizontal } from "lucide-react";

const CATEGORIES = [
  "All",
  "Sculptures (Stone, Granite)",
  "Porcelain",
  "Paintings",
  "Artworks",
  "Furniture Pieces",
  "Metal",
  "Limited Editions",
  "Lighting",
  "Objects",
] as const;

export default function GalleryPage() {
  const { openEnquiry } = useGallery();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc">("default");

  const filteredArtworks = useMemo(() => {
    let result = [...ARTWORKS_DATA];
    if (selectedCategory !== "All") {
      result = result.filter((item) => item.category === selectedCategory);
    }

    if (sortBy === "price-desc") {
      result.sort((a, b) => {
        const pa = parseInt(a.price.replace(/[^0-9]/g, "")) || 0;
        const pb = parseInt(b.price.replace(/[^0-9]/g, "")) || 0;
        return pb - pa;
      });
    } else if (sortBy === "price-asc") {
      result.sort((a, b) => {
        const pa = parseInt(a.price.replace(/[^0-9]/g, "")) || 0;
        const pb = parseInt(b.price.replace(/[^0-9]/g, "")) || 0;
        return pa - pb;
      });
    }

    return result;
  }, [selectedCategory, sortBy]);

  return (
    <div className="w-full min-h-screen pb-28">
      {/* Header Banner */}
      <section className="bg-[#EAE5DC] border-b border-[#E2DDD4] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-[11px] tracking-[0.35em] uppercase text-[#8C6D53] font-medium block">
            CLOUD REPERTORY & COLLECTION
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#2B2A27] font-light">
            Architectural Artworks & Monoliths
          </h1>
          <p className="text-xs sm:text-sm text-[#7E7971] max-w-2xl font-light leading-relaxed">
            Each artwork is commissioned or cataloged for its tactile materiality, purity of line, and architectural harmony. Works are available for private acquisition and museum loans.
          </p>
        </div>
      </section>

      {/* Sticky Category Filter Bar */}
      <section className="sticky top-20 z-30 bg-[#F4F0EA]/95 backdrop-blur-md border-b border-[#E2DDD4] py-4 px-4 sm:px-6 lg:px-8 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Scrollable Category Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            <span className="text-[10px] uppercase tracking-widest text-[#7E7971] pr-2 hidden sm:inline-flex items-center gap-1">
              <Filter size={12} />
              Filter:
            </span>
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-[11px] uppercase tracking-wider whitespace-nowrap transition-all border ${
                    isSelected
                      ? "bg-[#2B2A27] text-[#F4F0EA] border-[#2B2A27]"
                      : "bg-[#EAE5DC]/60 text-[#7E7971] hover:text-[#2B2A27] hover:bg-[#EAE5DC] border-[#E2DDD4]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Sort Controller & Count */}
          <div className="flex items-center justify-between md:justify-end space-x-4 flex-shrink-0 text-xs text-[#7E7971]">
            <span className="text-[11px] tracking-widest uppercase">
              {filteredArtworks.length} {filteredArtworks.length === 1 ? "Piece" : "Pieces"}
            </span>

            <div className="flex items-center space-x-2">
              <SlidersHorizontal size={13} className="text-[#8C6D53]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent border border-[#E2DDD4] px-2.5 py-1 text-[11px] text-[#2B2A27] uppercase tracking-wider focus:outline-none focus:border-[#8C6D53]"
              >
                <option value="default">Curated Order</option>
                <option value="price-desc">Valuation: High to Low</option>
                <option value="price-asc">Valuation: Low to High</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Column Asymmetric Masonry Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {filteredArtworks.length === 0 ? (
          <div className="py-24 text-center space-y-4">
            <p className="font-serif text-2xl text-[#2B2A27]">No pieces found in this category.</p>
            <button
              onClick={() => setSelectedCategory("All")}
              className="text-xs uppercase tracking-widest text-[#8C6D53] border-b border-[#8C6D53] pb-0.5"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredArtworks.map((art, index) => {
              // Asymmetric heights for gallery rhythm
              const isTall = index % 3 === 0;
              const isWide = index % 4 === 1;

              return (
                <div
                  key={art.id}
                  className="group flex flex-col bg-[#F4F0EA] border border-[#E2DDD4] hover:border-[#8C6D53]/60 transition-all duration-300"
                >
                  {/* Image container */}
                  <div
                    className={`relative w-full bg-[#EAE5DC] overflow-hidden ${
                      isTall ? "aspect-[3/4]" : isWide ? "aspect-[4/4.5]" : "aspect-[4/5]"
                    }`}
                  >
                    <Image
                      src={art.image}
                      alt={art.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Category pill overlay */}
                    <div className="absolute top-3.5 left-3.5 bg-[#F4F0EA]/90 backdrop-blur-xs px-2.5 py-1 text-[9px] uppercase tracking-widest text-[#7E7971]">
                      {art.category.split(" ")[0]}
                    </div>
                  </div>

                  {/* Card Content & Metadata */}
                  <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                    <div className="space-y-1">
                      <div className="flex justify-between items-baseline gap-2">
                        <h3 className="font-serif text-2xl text-[#2B2A27] italic group-hover:text-[#8C6D53] transition-colors leading-tight">
                          {art.title}
                        </h3>
                      </div>
                      <p className="text-xs uppercase tracking-widest text-[#7E7971] pt-1">
                        {art.artist} ({art.year})
                      </p>
                    </div>

                    <div className="space-y-1 pt-2 border-t border-[#E2DDD4] text-xs text-[#7E7971] font-light">
                      <p className="line-clamp-1">{art.medium}</p>
                      <p className="text-[11px] text-[#7E7971]/80">{art.dimensions}</p>
                    </div>

                    {/* Price & Action */}
                    <div className="pt-2 flex items-center justify-between border-t border-[#E2DDD4]">
                      <div>
                        <span className="text-[9px] uppercase tracking-widest text-[#7E7971] block">
                          VALUATION
                        </span>
                        <span className="text-xs font-semibold text-[#8C6D53]">
                          {art.price}
                        </span>
                      </div>

                      <button
                        onClick={() => openEnquiry(art)}
                        className="px-4 py-2 border border-[#2B2A27] hover:border-[#8C6D53] hover:bg-[#8C6D53] hover:text-[#F4F0EA] text-[10px] uppercase tracking-[0.25em] font-medium text-[#2B2A27] transition-all"
                      >
                        Enquire
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
