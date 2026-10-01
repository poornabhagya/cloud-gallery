"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { ARTWORKS_DATA, Artwork } from "@/data/mockData";
import { useGallery } from "@/context/GalleryContext";
import { Filter, SlidersHorizontal, LayoutGrid, List, Search, ShieldCheck } from "lucide-react";

const CATEGORIES = [
  "All",
  "Sculptures (stone, granite)",
  "Porcelain",
  "Paintings",
  "Artworks",
  "Furniture pieces",
  "Metal",
  "Limited Editions",
  "Lighting",
  "Objects (handles, frames)",
] as const;

export default function GalleryPage() {
  const { openEnquiry } = useGallery();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<"default" | "price-desc" | "price-asc" | "lot">("default");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredArtworks = useMemo(() => {
    let result = [...ARTWORKS_DATA];

    if (selectedCategory !== "All") {
      result = result.filter((item) => item.category === selectedCategory);
    }

    if (searchTerm.trim() !== "") {
      const q = searchTerm.toLowerCase();
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.artist.toLowerCase().includes(q) ||
          item.medium.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
      );
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
    } else if (sortBy === "lot") {
      result.sort((a, b) => (a.lotNumber || "").localeCompare(b.lotNumber || ""));
    }

    return result;
  }, [selectedCategory, sortBy, searchTerm]);

  return (
    <div className="w-full bg-white min-h-screen pb-28 text-black">
      {/* ========================================================
          FULL-BLEED HERO IMAGE (SOTHEBY'S CATALOGUE BANNER)
      ======================================================== */}
      <section className="relative w-full h-[360px] sm:h-[460px] lg:h-[520px] bg-black overflow-hidden border-b border-[#E5E5E5]">
        <Image
          src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=2600&q=90"
          alt="The Gallery - Curated Masterworks and Monoliths"
          fill
          priority
          className="object-cover object-center brightness-[0.88] contrast-[1.05]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
        <div className="absolute bottom-6 left-6 sm:left-12 text-white">
          <span className="text-[10px] tracking-[0.3em] uppercase bg-black/75 backdrop-blur-xs px-3 py-1 border border-white/20 font-medium">
            FINE ART & SCULPTURE · 12 CATALOGUED LOTS
          </span>
        </div>
      </section>

      {/* ========================================================
          SOTHEBY'S STYLE AUCTION / SALES HEADER
      ======================================================== */}
      <section className="border-b border-[#E5E5E5] bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-[10px] tracking-[0.3em] uppercase text-black font-semibold bg-[#FAFAFA] border border-[#E5E5E5] px-2.5 py-1">
              CURRENT AUCTION & PRIVATE SALES CATALOGUE
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-black font-normal leading-tight">
            The Gallery: Artworks For Sale
          </h1>
          <p className="text-xs sm:text-sm text-[#555555] max-w-2xl font-light leading-relaxed">
            Curating rare masterworks, monolithic stone sculptures, wood-fired porcelain vessels, and architectural limited editions available for private acquisition and museum accession.
          </p>
        </div>
      </section>

      {/* ========================================================
          STICKY CATEGORY FILTER & SEARCH CONTROLS
      ======================================================== */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-[#E5E5E5] py-3.5 px-4 sm:px-6 lg:px-8 shadow-xs">
        <div className="max-w-7xl mx-auto space-y-3">
          {/* Top Row: Search Input & View Switchers */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            {/* Quick Search */}
            <div className="relative flex-1 max-w-md">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#888888]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Filter by artist, stone, material, medium..."
                className="w-full bg-[#FAFAFA] border border-[#CCCCCC] pl-9 pr-3 py-1.5 text-xs text-black placeholder:text-[#888888] focus:outline-none focus:border-black"
              />
            </div>

            {/* Right Controls: Sort & Grid/List View */}
            <div className="flex items-center justify-between sm:justify-end space-x-4 text-xs text-[#555555]">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-black">
                {filteredArtworks.length} {filteredArtworks.length === 1 ? "Lot" : "Lots"}
              </span>

              <div className="flex items-center space-x-1.5 border border-[#CCCCCC] bg-white px-2 py-1">
                <SlidersHorizontal size={12} className="text-black" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent text-[11px] text-black uppercase tracking-wider focus:outline-none cursor-pointer"
                >
                  <option value="default">Curated Order</option>
                  <option value="lot">Lot Number</option>
                  <option value="price-desc">Valuation: High to Low</option>
                  <option value="price-asc">Valuation: Low to High</option>
                </select>
              </div>

              {/* View Toggle Buttons */}
              <div className="hidden sm:flex items-center border border-[#CCCCCC]">
                <button
                  onClick={() => setViewMode("grid")}
                  aria-label="Grid view"
                  className={`p-1.5 transition-colors ${
                    viewMode === "grid" ? "bg-black text-white" : "bg-white text-[#666666] hover:text-black"
                  }`}
                >
                  <LayoutGrid size={14} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  aria-label="List view"
                  className={`p-1.5 transition-colors ${
                    viewMode === "list" ? "bg-black text-white" : "bg-white text-[#666666] hover:text-black"
                  }`}
                >
                  <List size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Row: 9 Category Filter Pills */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 no-scrollbar border-t border-[#EEEEEE] pt-2.5">
            <span className="text-[10px] uppercase tracking-widest text-black font-semibold pr-2 hidden lg:inline-flex items-center gap-1">
              <Filter size={11} />
              Category:
            </span>
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 text-[10px] uppercase tracking-wider whitespace-nowrap transition-all border ${
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
        </div>
      </section>

      {/* ========================================================
          SOTHEBY'S STYLE PRODUCT LISTINGS
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {filteredArtworks.length === 0 ? (
          <div className="py-24 text-center space-y-4 border border-[#E5E5E5] bg-[#FAFAFA]">
            <p className="font-serif text-2xl text-black">No lots match your filter criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchTerm("");
              }}
              className="text-xs uppercase tracking-widest font-semibold text-black border-b border-black pb-0.5"
            >
              Reset Filters & Search
            </button>
          </div>
        ) : viewMode === "grid" ? (
          /* ================= GRID VIEW ================= */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtworks.map((art) => (
              <div
                key={art.id}
                className="group border border-[#E5E5E5] bg-white hover:border-black transition-all flex flex-col justify-between"
              >
                {/* Image Container with Lot Badge */}
                <div className="relative aspect-[4/5] bg-[#FAFAFA] overflow-hidden border-b border-[#E5E5E5]">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-white px-2.5 py-1 text-[9px] uppercase tracking-widest font-semibold text-black border border-[#E5E5E5]">
                    {art.lotNumber || "LOT"}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/95 px-2 py-0.5 text-[9px] uppercase tracking-wider text-[#666666] border border-[#E5E5E5]">
                    {art.category}
                  </div>
                </div>

                {/* Card details: Image -> Title -> Artist -> Material -> Dimensions -> Price -> Enquire */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-1.5">
                    <p className="text-xs uppercase tracking-widest text-[#555555] font-semibold">
                      {art.artist} ({art.year})
                    </p>
                    <h3 className="font-serif text-2xl text-black italic group-hover:underline leading-tight">
                      {art.title}
                    </h3>
                  </div>

                  <div className="space-y-1 pt-2 border-t border-[#EEEEEE] text-xs text-[#666666] font-light">
                    <p><strong className="text-black font-medium">Material:</strong> {art.medium}</p>
                    <p><strong className="text-black font-medium">Dimensions:</strong> {art.dimensions}</p>
                    {art.estimate && (
                      <p className="text-[11px] text-[#888888] pt-0.5">Estimate: {art.estimate}</p>
                    )}
                  </div>

                  {/* Price & Enquire / Purchase */}
                  <div className="pt-3 border-t border-[#E5E5E5] flex items-center justify-between">
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-[#777777] block">
                        VALUATION
                      </span>
                      <span className="font-serif text-lg font-semibold text-black">
                        {art.price}
                      </span>
                    </div>

                    <button
                      onClick={() => openEnquiry(art)}
                      className="px-5 py-2.5 bg-black hover:bg-[#222222] text-white text-[10px] uppercase tracking-[0.2em] font-medium transition-colors"
                    >
                      Enquire / Purchase
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* ================= LIST / CATALOGUE VIEW ================= */
          <div className="space-y-4">
            {filteredArtworks.map((art) => (
              <div
                key={art.id}
                className="group border border-[#E5E5E5] bg-white hover:border-black p-4 sm:p-6 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex items-center gap-6">
                  {/* Image */}
                  <div className="relative w-24 h-28 sm:w-32 sm:h-36 bg-[#FAFAFA] border border-[#E5E5E5] flex-shrink-0 overflow-hidden">
                    <Image
                      src={art.image}
                      alt={art.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="150px"
                    />
                  </div>

                  {/* Lot Metadata */}
                  <div className="space-y-1 max-w-xl">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-black text-white text-[9px] uppercase tracking-widest font-semibold">
                        {art.lotNumber || "LOT"}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-[#666666]">
                        {art.category}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl text-black italic group-hover:underline">
                      {art.title}
                    </h3>

                    <p className="text-xs uppercase tracking-wider text-black font-medium">
                      {art.artist} · {art.year}
                    </p>

                    <p className="text-xs text-[#666666] font-light">
                      {art.medium} · {art.dimensions}
                    </p>

                    <p className="text-[11px] text-[#888888] italic line-clamp-1">
                      Provenance: {art.provenance}
                    </p>
                  </div>
                </div>

                {/* Price & Action */}
                <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-[#EEEEEE]">
                  <div className="text-left md:text-right">
                    <span className="text-[9px] uppercase tracking-widest text-[#777777] block">
                      VALUATION
                    </span>
                    <span className="font-serif text-xl font-semibold text-black">
                      {art.price}
                    </span>
                  </div>

                  <button
                    onClick={() => openEnquiry(art)}
                    className="px-6 py-2.5 bg-black hover:bg-[#222222] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors whitespace-nowrap"
                  >
                    Enquire / Purchase
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
