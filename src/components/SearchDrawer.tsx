"use client";

import React, { useState, useMemo } from "react";
import { useGallery } from "@/context/GalleryContext";
import { ARTWORKS_DATA, ARTISTS_DATA, EVENTS_DATA } from "@/data/mockData";
import { X, Search, ArrowRight } from "lucide-react";
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
        a.category.toLowerCase().includes(q)
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
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-start pt-16 sm:pt-24 px-4 animate-fade-in">
      <div 
        className="w-full max-w-3xl bg-[#F4F0EA] border border-[#E2DDD4] shadow-2xl p-6 sm:p-8 relative max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeSearch}
          aria-label="Close search"
          className="absolute top-6 right-6 p-2 text-[#7E7971] hover:text-[#2B2A27] transition-colors"
        >
          <X size={20} strokeWidth={1.5} />
        </button>

        <div className="flex items-center gap-3 border-b border-[#E2DDD4] pb-4">
          <Search size={20} strokeWidth={1.5} className="text-[#8C6D53]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sculptures, artists, materials, exhibitions..."
            className="w-full bg-transparent text-lg sm:text-xl font-serif text-[#2B2A27] placeholder:text-[#7E7971]/60 focus:outline-none"
          />
        </div>

        {query.trim() === "" ? (
          <div className="py-12 text-center text-xs text-[#7E7971] space-y-3">
            <p className="tracking-widest uppercase text-[11px] text-[#8C6D53]">
              Popular Spatial Queries
            </p>
            <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto pt-2">
              {["Monolith", "Travertine", "Kyoto Porcelain", "Lost Wax Bronze", "Engadin", "Henrik Vestergaard"].map(
                (term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1 bg-[#EAE5DC] hover:bg-[#8C6D53] hover:text-[#F4F0EA] transition-colors border border-[#E2DDD4] text-[11px]"
                  >
                    {term}
                  </button>
                )
              )}
            </div>
          </div>
        ) : (
          <div className="mt-6 space-y-6">
            {/* Artworks */}
            {filteredArtworks.length > 0 && (
              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#8C6D53] font-medium block mb-3">
                  ARTWORKS & OBJECTS ({filteredArtworks.length})
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {filteredArtworks.map((art) => (
                    <div
                      key={art.id}
                      className="flex gap-3 p-2.5 bg-[#EAE5DC]/50 border border-[#E2DDD4] items-center hover:border-[#8C6D53] transition-colors group cursor-pointer"
                      onClick={() => {
                        closeSearch();
                        openEnquiry(art);
                      }}
                    >
                      <div className="relative w-12 h-14 bg-stone-300 flex-shrink-0">
                        <Image
                          src={art.image}
                          alt={art.title}
                          fill
                          className="object-cover"
                          sizes="60px"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-serif text-sm text-[#2B2A27] group-hover:text-[#8C6D53] transition-colors truncate">
                          {art.title}
                        </h4>
                        <p className="text-[11px] text-[#7E7971] truncate">
                          {art.artist} · {art.price}
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
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#8C6D53] font-medium block mb-3">
                  ARTISTS & RESIDENTS ({filteredArtists.length})
                </span>
                <div className="space-y-2">
                  {filteredArtists.map((artist) => (
                    <Link
                      key={artist.id}
                      href="/artists"
                      onClick={closeSearch}
                      className="flex items-center justify-between p-2.5 bg-[#EAE5DC]/50 border border-[#E2DDD4] hover:border-[#8C6D53] transition-colors"
                    >
                      <div>
                        <p className="font-serif text-base text-[#2B2A27]">{artist.name}</p>
                        <p className="text-[11px] text-[#7E7971]">{artist.discipline} · {artist.origin}</p>
                      </div>
                      <ArrowRight size={14} className="text-[#8C6D53]" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Events */}
            {filteredEvents.length > 0 && (
              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#8C6D53] font-medium block mb-3">
                  EXHIBITIONS & SALONS
                </span>
                <div className="space-y-2">
                  {filteredEvents.map((ev) => (
                    <Link
                      key={ev.id}
                      href="/events"
                      onClick={closeSearch}
                      className="flex items-center justify-between p-2.5 bg-[#EAE5DC]/50 border border-[#E2DDD4] hover:border-[#8C6D53] transition-colors"
                    >
                      <div>
                        <p className="font-serif text-sm text-[#2B2A27]">{ev.title}</p>
                        <p className="text-[11px] text-[#7E7971]">{ev.date} · {ev.location}</p>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-[#8C6D53]">
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
                <div className="py-8 text-center text-xs text-[#7E7971]">
                  No matching artworks, artists, or salons found for &ldquo;{query}&rdquo;.
                </div>
              )}
          </div>
        )}
      </div>
    </div>
  );
}
