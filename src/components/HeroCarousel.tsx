"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselSlide {
  id: string;
  category: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  image: string;
  lotInfo: string;
}

const SLIDES: CarouselSlide[] = [
  {
    id: "slide-1",
    category: "CONTEMPORARY SCULPTURE & MONOLITHS",
    title: "Autumn Fine Art & Stone Monoliths | Zurich",
    description: "Monumental Swedish diabase sculptures, alpine travertine fragments, and lost-wax bronze armatures curated for private and institutional acquisitions.",
    linkText: "BROWSE ALL 12 LOTS",
    linkHref: "/gallery",
    lotInfo: "LIVE AUCTION & PRIVATE SALES · EST. 2018",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=2400&q=90",
  },
  {
    id: "slide-2",
    category: "WOOD-FIRED PORCELAIN & VESSELS",
    title: "Anagama Firing & Tea Vessels | Kyoto",
    description: "Hand-thrown porcelain and stoneware vessels fired for 72 continuous hours in the Kyoto hills, exhibiting spontaneous wood-ash flux and geological fissures.",
    linkText: "EXPLORE PORCELAIN LOTS",
    linkHref: "/gallery",
    lotInfo: "AOI MINAMOTO MONOGRAPH COLLECTION",
    image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=2400&q=90",
  },
  {
    id: "slide-3",
    category: "MINERAL PAINTING & RAW FLAX",
    title: "Tectonic Study Series | Basel Vernissage",
    description: "Large-format unprimed Belgian flax canvases composed with Gotthard slate, Alpine chalk gesso, and raw mineral pigments applied with custom timber trowels.",
    linkText: "VIEW PAINTINGS & LINEN WORKS",
    linkHref: "/gallery",
    lotInfo: "KAELEN THORNE SOLO PRESENTATION",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=2400&q=90",
  },
  {
    id: "slide-4",
    category: "ARCHITECTURAL COMMISSIONS & PAVILIONS",
    title: "Spatial Monoliths & Private Sales | Copenhagen",
    description: "Monolithic timber-formed concrete commissions, Kyoto charred cedar plinths, and bespoke alabaster lighting sculptures engineered for timeless sanctuaries.",
    linkText: "DISCOVER SPECIAL PROJECTS",
    linkHref: "/collaborations",
    lotInfo: "STUDIO NUBE × HENRIK VESTERGAARD",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const handleSelect = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Auto-play logic: swaps images every 5 seconds.
  // Resets timer whenever user manually clicks a slide (currentIndex change) or pauses on hover.
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  return (
    <section className="w-full bg-white py-4 sm:py-6 lg:py-8 border-b border-[#E5E5E5]">
      {/* Framed Container with visible architectural margin */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="group relative w-full h-[500px] sm:h-[580px] lg:h-[660px] bg-black overflow-hidden shadow-sm"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          aria-roledescription="carousel"
          aria-label="Cloud Gallery Exhibition Highlights"
        >
          {/* Background Images with smooth fade transition & subtle zoom */}
          {SLIDES.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={slide.id}
                className="absolute inset-0 pointer-events-none transition-opacity duration-700 ease-in-out"
                style={{
                  opacity: isActive ? 1 : 0,
                  zIndex: isActive ? 10 : 0,
                }}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "eager"}
                  className={`object-cover object-center brightness-[0.95] contrast-[1.02] transition-transform duration-[6000ms] ease-out pointer-events-none ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                  sizes="(max-width: 1400px) 100vw, 1400px"
                />
                {/* Subtle soft gradient protection for UI controls */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/25 pointer-events-none" />
              </div>
            );
          })}

          {/* Minimalist Top Left Tag */}
          <div className="absolute top-6 left-6 sm:left-10 z-30 pointer-events-none">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-xs border border-white/20 text-white text-[9px] uppercase tracking-[0.25em] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              {SLIDES[currentIndex].lotInfo}
            </div>
          </div>

          {/* ========================================================
              ELEGANT NAVIGATION ARROWS
              Fully clickable, z-50, prominent and responsive
          ======================================================== */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-50 pointer-events-auto cursor-pointer w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white bg-black/40 hover:bg-black/75 hover:scale-105 active:scale-95 transition-all duration-200 border border-white/20 shadow-lg backdrop-blur-xs select-none"
          >
            <ChevronLeft size={26} strokeWidth={2} className="pointer-events-none" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Slide"
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-50 pointer-events-auto cursor-pointer w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white bg-black/40 hover:bg-black/75 hover:scale-105 active:scale-95 transition-all duration-200 border border-white/20 shadow-lg backdrop-blur-xs select-none"
          >
            <ChevronRight size={26} strokeWidth={2} className="pointer-events-none" />
          </button>

          {/* ========================================================
              BOTTOM PROGRESS DOTS (Centered, Large Hit Area, z-50)
          ======================================================== */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto flex items-center space-x-1 sm:space-x-2 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
            {SLIDES.map((_, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelect(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className="group/dot p-2 pointer-events-auto cursor-pointer focus:outline-hidden"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-8 bg-white shadow-xs"
                        : "w-2.5 bg-white/40 group-hover/dot:bg-white/80"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
