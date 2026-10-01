"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

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

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play logic: swaps images every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section className="w-full bg-white py-4 sm:py-6 lg:py-8 border-b border-[#E5E5E5]">
      {/* Sotheby's Framed Container with visible white space on left and right */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="group relative w-full h-[500px] sm:h-[580px] lg:h-[660px] bg-black overflow-hidden select-none shadow-sm"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          aria-roledescription="carousel"
          aria-label="Sotheby's Auction & Exhibition Hero Highlights"
        >
          {/* Background Images with smooth fade transition */}
          {SLIDES.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className={`object-cover object-center brightness-[0.88] contrast-[1.05] transition-transform duration-[6000ms] ease-out ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                  sizes="(max-width: 1400px) 100vw, 1400px"
                />
                {/* Subtle Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30" />
              </div>
            );
          })}

          {/* Top Left Badge */}
          <div className="absolute top-6 left-6 sm:left-10 z-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/75 backdrop-blur-xs border border-white/20 text-white text-[9px] uppercase tracking-[0.25em] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              {SLIDES[currentIndex].lotInfo}
            </div>
          </div>

          {/* ========================================================
              HOVER-ONLY ELEGANT NAVIGATION ARROWS
              Hidden by default, visible on group hover without heavy square box
          ======================================================== */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300 absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full flex items-center justify-center text-white/90 hover:text-white bg-black/30 hover:bg-black/60 backdrop-blur-xs transition-all drop-shadow-md"
          >
            <ChevronLeft size={28} strokeWidth={1.5} />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300 absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full flex items-center justify-center text-white/90 hover:text-white bg-black/30 hover:bg-black/60 backdrop-blur-xs transition-all drop-shadow-md"
          >
            <ChevronRight size={28} strokeWidth={1.5} />
          </button>

          {/* ========================================================
              SOTHEBY'S STYLE OVERLAY CONTENT BOX
              Positioned at bottom right corner overlapping the image
          ======================================================== */}
          <div className="absolute bottom-6 right-4 sm:right-8 sm:bottom-8 lg:right-10 lg:bottom-10 z-20 max-w-lg w-[calc(100%-2rem)] sm:w-auto">
            <div className="bg-[#002B49]/95 sm:bg-[#002B49]/90 backdrop-blur-md text-white p-6 sm:p-8 lg:p-10 border border-white/15 shadow-2xl space-y-4 transition-all duration-500">
              <div className="space-y-1.5">
                <span className="text-[10px] tracking-[0.28em] uppercase text-[#E0E0E0] font-medium block">
                  {SLIDES[currentIndex].category}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-tight">
                  {SLIDES[currentIndex].title}
                </h2>
              </div>

              <p className="text-xs text-[#CCCCCC] leading-relaxed font-light line-clamp-3">
                {SLIDES[currentIndex].description}
              </p>

              <div className="pt-2 border-t border-white/20">
                <Link
                  href={SLIDES[currentIndex].linkHref}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-white hover:text-[#D4AF37] transition-colors group/link"
                >
                  <span>{SLIDES[currentIndex].linkText}</span>
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* ========================================================
              NAVIGATION DOTS (Bottom Center of the Slider)
          ======================================================== */}
          <div className="absolute bottom-6 left-6 sm:left-10 lg:left-1/2 lg:-translate-x-1/2 z-20 flex items-center space-x-2.5">
            {SLIDES.map((_, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-300 ${
                    isActive
                      ? "w-8 h-1.5 bg-white"
                      : "w-2.5 h-1.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
