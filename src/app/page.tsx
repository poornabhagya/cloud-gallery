"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ARTWORKS_DATA, EVENTS_DATA } from "@/data/mockData";
import { useGallery } from "@/context/GalleryContext";
import { ArrowRight, ArrowUpRight, Compass, Sparkles } from "lucide-react";

export default function HomePage() {
  const { openEnquiry } = useGallery();
  const previewArtworks = ARTWORKS_DATA.slice(0, 3);
  const nextEvent = EVENTS_DATA[0];

  return (
    <div className="w-full">
      {/* ========================================================
          HERO SECTION (90vh full-width visual banner)
      ======================================================== */}
      <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden bg-[#2B2A27]">
        {/* Background Image: Brutalist Stone Sculpture */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=2400&q=90"
            alt="Brutalist stone sculpture at Cloud Gallery"
            fill
            priority
            className="object-cover object-center brightness-[0.72] contrast-[1.08] scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-[#F4F0EA] space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#F4F0EA]/30 backdrop-blur-md bg-white/5 text-[10px] tracking-[0.35em] uppercase text-[#EAE5DC]">
            <Sparkles size={11} className="text-[#8C6D53]" />
            ESTABLISHED ZURICH · COPENHAGEN · KYOTO
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-[0.08em] font-light leading-none">
            CLOUD GALLERY
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-[#EAE5DC]/90 font-light tracking-wide leading-relaxed">
            Where spatial design, raw materiality, and contemporary form converge into meditative permanence.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/gallery"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#F4F0EA] hover:bg-[#8C6D53] text-[#2B2A27] hover:text-[#F4F0EA] text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 shadow-lg"
            >
              Explore Gallery
            </Link>
            <Link
              href="/journey"
              className="w-full sm:w-auto px-8 py-3.5 border border-[#F4F0EA]/80 hover:border-[#8C6D53] hover:bg-[#8C6D53]/20 text-[#F4F0EA] text-xs uppercase tracking-[0.25em] font-medium backdrop-blur-sm transition-all duration-300"
            >
              The Artist&apos;s Journey
            </Link>
          </div>
        </div>

        {/* Bottom subtle indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#EAE5DC]/60 text-[10px] tracking-widest uppercase">
          <span>Scroll to Encounter</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#EAE5DC]/60 to-transparent" />
        </div>
      </section>

      {/* ========================================================
          AGENDA TICKER / BANNER (Section 5 item placed high for urgency)
      ======================================================== */}
      <section className="bg-[#EAE5DC] border-y border-[#E2DDD4] py-3.5 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[#8C6D53] animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C6D53] font-semibold">
              LIVE AGENDA
            </span>
            <span className="text-[#2B2A27] font-medium tracking-wide">
              {nextEvent.date} — {nextEvent.title.toUpperCase()}
            </span>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-[#7E7971] hover:text-[#2B2A27] font-medium transition-colors"
          >
            <span>RSVP & View Full Calendar</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* ========================================================
          SECTION 1: COMMERCIAL PREVIEW (Asymmetric 3-artwork showcase)
      ======================================================== */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#E2DDD4] pb-6 gap-4">
          <div>
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#8C6D53] font-medium block mb-2">
              CURATED SELECTIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#2B2A27] font-light">
              Tactile Works in Residence
            </h2>
          </div>
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#2B2A27] hover:text-[#8C6D53] transition-colors"
          >
            <span>View Entire Collection</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Card 1: Dominant height */}
          <div className="md:col-span-5 group cursor-pointer" onClick={() => openEnquiry(previewArtworks[0])}>
            <div className="relative aspect-[3/4] bg-[#EAE5DC] overflow-hidden border border-[#E2DDD4]">
              <Image
                src={previewArtworks[0].image}
                alt={previewArtworks[0].title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute top-4 right-4 bg-[#F4F0EA]/90 backdrop-blur-sm px-3 py-1 text-[10px] tracking-widest uppercase text-[#8C6D53]">
                {previewArtworks[0].category.split(" ")[0]}
              </div>
            </div>
            <div className="mt-5 space-y-1.5">
              <div className="flex justify-between items-baseline">
                <h3 className="font-serif text-2xl text-[#2B2A27] group-hover:text-[#8C6D53] transition-colors italic">
                  {previewArtworks[0].title}
                </h3>
                <span className="text-xs text-[#8C6D53] font-medium">
                  {previewArtworks[0].price}
                </span>
              </div>
              <p className="text-xs text-[#7E7971] tracking-wider uppercase">
                {previewArtworks[0].artist} · {previewArtworks[0].dimensions}
              </p>
              <p className="text-xs text-[#7E7971] font-light line-clamp-2 pt-1">
                {previewArtworks[0].medium}
              </p>
            </div>
          </div>

          {/* Card 2 & 3: Staggered right */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 md:pt-16">
            {previewArtworks.slice(1, 3).map((art, idx) => (
              <div
                key={art.id}
                className={`group cursor-pointer ${idx === 1 ? "sm:translate-y-12" : ""}`}
                onClick={() => openEnquiry(art)}
              >
                <div className="relative aspect-[4/5] bg-[#EAE5DC] overflow-hidden border border-[#E2DDD4]">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                </div>
                <div className="mt-4 space-y-1">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-serif text-xl text-[#2B2A27] group-hover:text-[#8C6D53] transition-colors italic">
                      {art.title}
                    </h3>
                    <span className="text-xs text-[#8C6D53] font-medium">
                      {art.price}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#7E7971] tracking-wider uppercase">
                    {art.artist}
                  </p>
                  <p className="text-[11px] text-[#7E7971] line-clamp-1">
                    {art.medium}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 2: THE ARTIST STORY (2-column split)
      ======================================================== */}
      <section className="bg-[#EAE5DC] py-24 sm:py-32 border-y border-[#E2DDD4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Black & white studio portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] max-w-md mx-auto bg-stone-300 border border-[#D5CEC2] shadow-sm overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85"
                  alt="Henrik Vestergaard in studio"
                  fill
                  className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-2 sm:right-6 bg-[#F4F0EA] border border-[#E2DDD4] px-4 py-2 shadow-sm text-center">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#8C6D53] font-semibold block">
                  ATELIER MONOGRAPH
                </span>
                <span className="font-serif text-sm text-[#2B2A27]">
                  ZURICH NORTH STUDIO
                </span>
              </div>
            </div>

            {/* Right: Philosophy Quote & Cross-disciplinary Practice */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-[11px] tracking-[0.3em] uppercase text-[#8C6D53] font-medium block">
                  THE ARTIST-ARCHITECT
                </span>
                <blockquote className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B2A27] font-light leading-snug">
                  &ldquo;Architecture is frozen music; sculpture is tactile space where the silence of stone speaks.&rdquo;
                </blockquote>
              </div>

              <p className="text-sm text-[#7E7971] leading-relaxed max-w-xl font-light">
                Educated across Scandinavia and Japan, our studio approaches spatial objects not as ornamental decorations, but as primary architectural anchors. Each piece is carved, turned, or cast to capture shifting ambient daylight.
              </p>

              {/* Disciplines List */}
              <div className="pt-2 border-t border-[#D5CEC2] max-w-lg">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#7E7971] block mb-3 font-medium">
                  CORE DISCIPLINES
                </span>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {["Architecture", "Sculpture", "Painting", "Spatial Design", "Material Research"].map(
                    (discipline) => (
                      <span
                        key={discipline}
                        className="px-3.5 py-1.5 bg-[#F4F0EA] border border-[#E2DDD4] text-xs text-[#2B2A27] tracking-wider"
                      >
                        {discipline}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/journey"
                  className="inline-flex items-center gap-2.5 px-7 py-3 bg-[#2B2A27] hover:bg-[#8C6D53] text-[#F4F0EA] text-xs uppercase tracking-[0.25em] font-medium transition-colors"
                >
                  <span>Explore The Full Monograph</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 3: CLOUD ETHOS (Centered editorial statement block)
      ======================================================== */}
      <section className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-6">
        <Compass size={28} strokeWidth={1.2} className="mx-auto text-[#8C6D53]" />
        <span className="text-[11px] tracking-[0.35em] uppercase text-[#8C6D53] font-medium block">
          CURATORIAL ETHOS
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-[#2B2A27] font-light leading-tight">
          We reject the ephemeral. We craft objects meant to outlast trends by centuries.
        </h2>
        <p className="text-sm sm:text-base text-[#7E7971] leading-relaxed max-w-2xl mx-auto font-light">
          Cloud Gallery is rooted in the belief that modern interiors starve for tactile resonance. By combining ancient raw quarry extraction with precision architectural restraint, we create spaces of quiet contemplation.
        </p>
        <div className="pt-4">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8C6D53] hover:text-[#2B2A27] font-medium transition-colors border-b border-[#8C6D53] pb-1"
          >
            <span>Read Our Vision & Manifesto</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ========================================================
          SECTION 4: DUAL BANNERS (50/50 Split Cards)
      ======================================================== */}
      <section className="border-t border-[#E2DDD4]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Card 1: Cloud Artists */}
          <Link
            href="/artists"
            className="group relative h-[450px] sm:h-[550px] flex items-end p-8 sm:p-14 overflow-hidden border-b md:border-b-0 md:border-r border-[#E2DDD4]"
          >
            <Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85"
              alt="Cloud Artists directory"
              fill
              className="object-cover grayscale contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            
            <div className="relative z-10 text-[#F4F0EA] space-y-2">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#EAE5DC]/80 block">
                FEATURING KYOTO, COPENHAGEN, BASEL
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#F4F0EA] font-light flex items-center gap-3">
                <span>Cloud Artists</span>
                <ArrowUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </h3>
              <p className="text-xs text-[#EAE5DC]/80 max-w-sm line-clamp-2">
                Discover the international sculptors, ceramic masters, and mineral painters represented by our salon.
              </p>
            </div>
          </Link>

          {/* Card 2: Cloud Collaborations */}
          <Link
            href="/collaborations"
            className="group relative h-[450px] sm:h-[550px] flex items-end p-8 sm:p-14 overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
              alt="Cloud Collaborations and Pavilions"
              fill
              className="object-cover contrast-105 group-hover:scale-105 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            <div className="relative z-10 text-[#F4F0EA] space-y-2">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#EAE5DC]/80 block">
                SPECIAL CROSS-DISCIPLINARY PROJECTS
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#F4F0EA] font-light flex items-center gap-3">
                <span>Cloud Collaborations</span>
                <ArrowUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </h3>
              <p className="text-xs text-[#EAE5DC]/80 max-w-sm line-clamp-2">
                Architectural installations, bronze foundry experiments, and limited-edition design objects.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
