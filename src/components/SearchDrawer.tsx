"use client";

import React, { useState, useMemo } from "react";
import { useGallery } from "@/context/GalleryContext";
import { ARTWORKS_DATA, ARTISTS_DATA, EVENTS_DATA } from "@/data/mockData";
import { X, Search, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SearchDrawer() {
  const { isSearchOpen, closeSearch, openEnquiry } = useGallery();
  const [query, setQuery] = useState("");

  const filteredArtworks = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return ARTWORKS_DATA.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.artist.toLowerCase().includes(q) ||
        a.medium.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        (a.lotNumber && a.lotNumber.toLowerCase().includes(q))
    ).slice(0, 4);
  }, [query]);

  const filteredArtists = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return ARTISTS_DATA.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        a.origin.toLowerCase().includes(q) ||
        a.discipline.toLowerCase().includes(q)
    ).slice(0, 3);
  }, [query]);

  const filteredEvents = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return EVENTS_DATA.filter(
      (e) =>
        e.title.toLowerCase().includes(q) ||
        e.location.toLowerCase().includes(q) ||
        e.type.toLowerCase().includes(q)
    ).slice(0, 2);
  }, [query]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex flex-col items-center justify-start pt-16 sm:pt-24 px-4 animate-fade-in">
      <div
        className="w-full max-w-3xl bg-white border border-[#E5E5E5] shadow-2xl p-6 sm:p-8 relative max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeSearch}
          aria-label="Close search"
          className="absolute top-6 right-6 p-2 text-[#666666] hover:text-black transition-colors"
        >
          <X size={20} strokeWidth={1.5} />
        </button>

        {/* Search Input */}
        <div className="flex items-center gap-3 border-b-2 border-black pb-4">
          <Search size={22} strokeWidth={1.7} className="text-black" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search lot number, artist, medium, department, or auction..."
            className="w-full bg-transparent text-lg sm:text-xl font-serif text-black placeholder:text-[#999999] focus:outline-none"
          />
        </div>

        {query.trim() === "" ? (
          <div className="py-12 text-center text-xs text-[#666666] space-y-4">
            <p className="tracking-widest uppercase text-[11px] font-semibold text-black">
              POPULAR AUCTION & CATALOGUE SEARCHES
            </p>
            <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto pt-2">
              {[
                "Henrik Vestergaard",
                "Swedish Diabase",
                "Wood-fired porcelain",
                "Lost wax bronze",
                "Engadin Pavilion",
                "LOT 01",
                "Limestone Plinth",
              ].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-3.5 py-1.5 bg-[#FAFAFA] hover:bg-black hover:text-white transition-colors border border-[#E5E5E5] text-[11px] uppercase tracking-wider text-[#333333]"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-6 space-y-6">
            {/* Artworks */}
            {filteredArtworks.length > 0 && (
              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-black font-semibold block mb-3 pb-1 border-b border-[#E5E5E5]">
                  CATALOGUED LOTS & ARTWORKS ({filteredArtworks.length})
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {filteredArtworks.map((art) => (
                    <div
                      key={art.id}
                      className="flex gap-3 p-3 bg-[#FAFAFA] border border-[#E5E5E5] items-center hover:border-black transition-colors group cursor-pointer"
                      onClick={() => {
                        closeSearch();
                        openEnquiry(art);
                      }}
                    >
                      <div className="relative w-14 h-16 bg-[#EEEEEE] flex-shrink-0 border border-[#E5E5E5]">
                        <Image
                          src={art.image}
                          alt={art.title}
                          fill
                          className="object-cover"
                          sizes="60px"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-[9px] uppercase tracking-wider text-[#777777] block">
                          {art.lotNumber || "LOT"} · {art.category}
                        </span>
                        <h4 className="font-serif text-sm text-black group-hover:underline truncate italic">
                          {art.title}
                        </h4>
                        <p className="text-[11px] text-[#555555] truncate">
                          {art.artist} · <strong className="text-black">{art.price}</strong>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Artists */}
            {filteredArtists.length > 0 && (
              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-black font-semibold block mb-3 pb-1 border-b border-[#E5E5E5]">
                  ARTISTS & MASTERS ({filteredArtists.length})
                </span>
                <div className="space-y-2">
                  {filteredArtists.map((artist) => (
                    <Link
                      key={artist.id}
                      href="/artists"
                      onClick={closeSearch}
                      className="flex items-center justify-between p-3 bg-[#FAFAFA] border border-[#E5E5E5] hover:border-black transition-colors"
                    >
                      <div>
                        <p className="font-serif text-base text-black">{artist.name}</p>
                        <p className="text-[11px] text-[#666666]">
                          {artist.discipline} · {artist.origin}
                        </p>
                      </div>
                      <ArrowRight size={14} className="text-black" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Events */}
            {filteredEvents.length > 0 && (
              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-black font-semibold block mb-3 pb-1 border-b border-[#E5E5E5]">
                  AUCTIONS & SALONS
                </span>
                <div className="space-y-2">
                  {filteredEvents.map((ev) => (
                    <Link
                      key={ev.id}
                      href="/events"
                      onClick={closeSearch}
                      className="flex items-center justify-between p-3 bg-[#FAFAFA] border border-[#E5E5E5] hover:border-black transition-colors"
                    >
                      <div>
                        <p className="font-serif text-sm text-black">{ev.title}</p>
                        <p className="text-[11px] text-[#666666]">
                          {ev.date} · {ev.location}
                        </p>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-black bg-white px-2 py-1 border border-[#E5E5E5]">
                        {ev.type}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {filteredArtworks.length === 0 &&
              filteredArtists.length === 0 &&
              filteredEvents.length === 0 && (
                <div className="py-12 text-center text-xs text-[#666666]">
                  No matching lots, artists, or auction events found for &ldquo;{query}&rdquo;.
                </div>
              )}
          </div>
        )}
      </div>
    </div>
  );
}
