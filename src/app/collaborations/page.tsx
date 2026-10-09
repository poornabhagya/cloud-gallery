"use client";

import React from "react";
import Image from "next/image";
import { COLLABORATIONS_DATA } from "@/data/mockData";
import { useGallery } from "@/context/GalleryContext";
import { Users, Layers, Clock } from "lucide-react";

export default function CollaborationsPage() {
  const { openEnquiry } = useGallery();

  // Divide into Current (in progress / active year) and Past (archived / completed)
  const currentCollaborations = COLLABORATIONS_DATA.filter(
    (item) => item.year === 2026 || item.id === "collab-1" || item.id === "collab-3"
  );

  const pastCollaborations = COLLABORATIONS_DATA.filter(
    (item) => item.year < 2026 || item.id === "collab-2" || item.id === "collab-4"
  );

  return (
    <div className="w-full bg-white text-black min-h-screen pb-32">
      {/* ========================================================
          FULL-BLEED CINEMA HERO IMAGE (SOTHEBY'S COLLABORATIONS)
      ======================================================== */}
      <section className="relative w-full h-[380px] sm:h-[460px] lg:h-[520px] bg-black overflow-hidden border-b border-[#E5E5E5]">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2600&q=90"
          alt="Cloud Collaborations and Architectural Pavilions"
          fill
          priority
          className="object-cover object-center brightness-[0.85] contrast-[1.08]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />

        {/* Hero Top Badge */}
        <div className="absolute top-6 left-6 sm:left-12">
          <span className="text-[10px] tracking-[0.3em] uppercase bg-black/80 backdrop-blur-xs px-3.5 py-1.5 border border-white/25 text-white font-medium">
            CROSS-DISCIPLINARY CASE STUDIES & SPECIAL COMMISSIONS
          </span>
        </div>

        {/* Hero Bottom Title & Metadata */}
        <div className="absolute bottom-8 left-6 sm:left-12 right-6 sm:right-12 text-white max-w-4xl space-y-3">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#CCCCCC]">
            <span className="w-2 h-2 rounded-full bg-[#081757] border border-white/60" />
            <span>CLOUD COLLABORATIVE ATELIER</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight text-white">
            Cloud Collaborations
          </h1>
          <p className="font-merriweather text-xs sm:text-sm text-[#DDDDDD] font-light max-w-2xl leading-relaxed italic">
            Where independent masters cross disciplines to pioneer unforeseen sculptural forms and architectural archetypes: stone sculptors partnering with bronze foundries, optical lighting laboratories, and alpine architects.
          </p>
        </div>
      </section>

      {/* ========================================================
          STICKY SECTION JUMP NAVIGATION BAR
      ======================================================== */}
      <nav
        aria-label="Collaborations Sections Navigation"
        className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-[#E5E5E5] shadow-xs"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#888888] font-bold mr-2 hidden md:inline">
              DIRECT SECTIONS:
            </span>
            <a
              href="#current-collaborations"
              className="px-3.5 py-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-medium text-black hover:text-[#081757] hover:bg-neutral-100 border border-transparent hover:border-[#E5E5E5] transition-all whitespace-nowrap"
            >
              CURRENT COLLABORATIONS
            </a>
            <a
              href="#past-collaborations"
              className="px-3.5 py-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-medium text-black hover:text-[#081757] hover:bg-neutral-100 border border-transparent hover:border-[#E5E5E5] transition-all whitespace-nowrap"
            >
              PAST COLLABORATIONS
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#666666] shrink-0 font-medium">
            <span>CURATED COMMISSIONS</span>
            <span>·</span>
            <span>INTERNATIONAL NETWORK</span>
          </div>
        </div>
      </nav>

      {/* ========================================================
          MAIN CONTENT CONTAINER
      ======================================================== */}
      <div className="space-y-28 pt-16">
        {/* ========================================================
            SECTION 1: CURRENT COLLABORATIONS
        ======================================================== */}
        <section
          id="current-collaborations"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-36"
        >
          {/* Section Header */}
          <div className="border-b border-black pb-5 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#888888]">
                  SECTION 01 / 02
                </span>
                <span className="h-2 w-px bg-[#CCCCCC]" />
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#081757] font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  ACTIVE INITIATIVES
                </span>
              </div>

              <h2 className="font-roboto font-bold text-3xl sm:text-4xl text-[#081757] tracking-tight">
                CURRENT COLLABORATIONS
              </h2>

              {/* Exact required text */}
              <p className="font-merriweather text-sm text-[#081757] font-semibold italic">
                Collaborations happening now. [Details to be added by Cloud Gallery]
              </p>

              <p className="font-merriweather font-light text-xs sm:text-sm text-black max-w-2xl leading-relaxed pt-1">
                Active cross-disciplinary engagements in live production across our European, Japanese, and Nordic partner ateliers.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#777777] font-medium bg-[#FAFAFA] border border-[#E5E5E5] px-3 py-1.5">
                {currentCollaborations.length} INITIATIVES IN PROGRESS
              </span>
              <a
                href="#current-collaborations"
                className="text-[10px] uppercase tracking-[0.2em] font-bold text-black hover:text-[#081757] transition-colors flex items-center gap-1"
              >
                <span>TOP</span>
                <span>↑</span>
              </a>
            </div>
          </div>

          {/* Current Collaborations Stream */}
          <div className="space-y-12">
            {currentCollaborations.map((collab) => (
              <div
                key={collab.id}
                className="border border-[#E5E5E5] bg-white p-6 sm:p-10 lg:p-12 space-y-8 shadow-xs hover:border-black transition-all"
              >
                {/* Header / Meta */}
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#E5E5E5] pb-6 gap-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2.5 py-0.5 bg-black text-white text-[9px] uppercase tracking-widest font-bold">
                        ACTIVE INITIATIVE · {collab.year}
                      </span>
                      <span className="text-[10px] tracking-[0.25em] uppercase text-[#666666] font-semibold">
                        {collab.category}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-black">
                      {collab.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-black bg-[#FAFAFA] px-4 py-2 border border-[#E5E5E5]">
                    <Users size={14} className="text-[#081757]" />
                    <span className="font-semibold uppercase tracking-wider text-[11px]">
                      {collab.collaborators}
                    </span>
                  </div>
                </div>

                {/* People Involved Strip */}
                <div className="bg-[#FAFAFA] p-4 border border-[#E5E5E5] flex flex-wrap items-center gap-3 text-xs">
                  <span className="text-[9px] uppercase tracking-widest text-[#777777] font-semibold">
                    PARTICIPATING ARTISANS & STUDIOS:
                  </span>
                  {collab.peopleInvolved.map((person, pIdx) => (
                    <span
                      key={pIdx}
                      className="font-medium text-black bg-white px-2.5 py-1 border border-[#E5E5E5] text-[11px]"
                    >
                      {person}
                    </span>
                  ))}
                </div>

                {/* 3-Stage Development Structure */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-2">
                  <div className="space-y-2 p-5 bg-[#FAFAFA] border border-[#E5E5E5]">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-black font-semibold block">
                      STAGE 01: CONCEPT
                    </span>
                    <p className="font-merriweather text-xs text-[#555555] leading-relaxed font-light italic">
                      {collab.concept}
                    </p>
                  </div>

                  <div className="space-y-2 p-5 bg-[#FAFAFA] border border-[#E5E5E5]">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-black font-semibold block">
                      STAGE 02: ACTIVE PROCESS
                    </span>
                    <p className="text-xs text-[#555555] leading-relaxed font-light">
                      {collab.process}
                    </p>
                  </div>

                  <div className="space-y-2 p-5 bg-[#FAFAFA] border border-[#E5E5E5]">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#081757] font-bold block">
                      STAGE 03: CURRENT MILESTONE
                    </span>
                    <p className="text-xs text-[#555555] leading-relaxed font-light">
                      {collab.finalWork}
                    </p>
                  </div>
                </div>

                {/* Image Documentation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#E5E5E5]">
                  {collab.images.map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-[16/10] bg-[#FAFAFA] border border-[#E5E5E5] overflow-hidden group"
                    >
                      <Image
                        src={img}
                        alt={`${collab.title} documentation ${i + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute bottom-3 left-3 bg-white px-2.5 py-1 text-[9px] uppercase tracking-widest font-semibold text-black border border-[#E5E5E5]">
                        Work-in-Progress Record 0{i + 1}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Action Strip */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="font-merriweather text-xs text-[#777777] italic">
                    Collaborations happening now. [Details to be added by Cloud Gallery]
                  </span>
                  <button
                    onClick={() => openEnquiry(null)}
                    className="px-6 py-2.5 bg-black hover:bg-[#081757] text-white text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer self-start sm:self-auto"
                  >
                    Inquire on Commission →
                  </button>
                </div>
              </div>
            ))}

            {/* Clean Curatorial Placeholder Container */}
            <div className="border-2 border-dashed border-[#DDDDDD] bg-[#FAFAFA] p-8 sm:p-12 text-center space-y-4 hover:border-[#888888] transition-colors">
              <div className="w-12 h-12 mx-auto rounded-full border border-[#CCCCCC] flex items-center justify-center text-[#888888]">
                <Clock size={20} />
              </div>
              <h3 className="font-serif text-2xl text-black font-normal">
                New Current Collaboration in Ingestion
              </h3>
              <p className="font-merriweather text-sm text-[#081757] font-semibold italic max-w-xl mx-auto">
                Collaborations happening now. [Details to be added by Cloud Gallery]
              </p>
              <p className="text-xs text-[#777777] max-w-lg mx-auto font-light leading-relaxed">
                Cloud Gallery curators and collaborating studios are preparing documentation plates, material samples, and joint artist statements for ongoing initiatives.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => openEnquiry(null)}
                  className="px-5 py-2 border border-black text-black hover:bg-black hover:text-white text-[10px] uppercase tracking-widest font-medium transition-colors"
                >
                  Propose a Collaboration
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 2: PAST COLLABORATIONS
        ======================================================== */}
        <section
          id="past-collaborations"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-36"
        >
          {/* Section Header */}
          <div className="border-b border-black pb-5 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#888888]">
                  SECTION 02 / 02
                </span>
                <span className="h-2 w-px bg-[#CCCCCC]" />
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#081757] font-semibold">
                  ARCHIVAL RECORD
                </span>
              </div>

              <h2 className="font-roboto font-bold text-3xl sm:text-4xl text-[#081757] tracking-tight">
                PAST COLLABORATIONS
              </h2>

              {/* Exact required text */}
              <p className="font-merriweather text-sm text-[#081757] font-semibold italic">
                Collaborations that have happened. [Details to be added by Cloud Gallery]
              </p>

              <p className="font-merriweather font-light text-xs sm:text-sm text-black max-w-2xl leading-relaxed pt-1">
                Completed monumental projects, permanent architectural pavilions, and editioned design monographs catalogued in the Cloud permanent archive.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#777777] font-medium bg-[#FAFAFA] border border-[#E5E5E5] px-3 py-1.5">
                {pastCollaborations.length} ARCHIVAL CASE STUDIES
              </span>
              <a
                href="#past-collaborations"
                className="text-[10px] uppercase tracking-[0.2em] font-bold text-black hover:text-[#081757] transition-colors flex items-center gap-1"
              >
                <span>TOP</span>
                <span>↑</span>
              </a>
            </div>
          </div>

          {/* Past Collaborations Stream */}
          <div className="space-y-12">
            {pastCollaborations.map((collab) => (
              <div
                key={collab.id}
                className="border border-[#E5E5E5] bg-white p-6 sm:p-10 lg:p-12 space-y-8 shadow-xs hover:border-black transition-all"
              >
                {/* Header / Meta */}
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#E5E5E5] pb-6 gap-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2.5 py-0.5 bg-[#EEEEEE] text-black text-[9px] uppercase tracking-widest font-bold border border-[#DDDDDD]">
                        COMPLETED ARCHIVE · {collab.year}
                      </span>
                      <span className="text-[10px] tracking-[0.25em] uppercase text-[#666666] font-semibold">
                        {collab.category}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-black">
                      {collab.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-black bg-[#FAFAFA] px-4 py-2 border border-[#E5E5E5]">
                    <Users size={14} className="text-[#081757]" />
                    <span className="font-semibold uppercase tracking-wider text-[11px]">
                      {collab.collaborators}
                    </span>
                  </div>
                </div>

                {/* People Involved Strip */}
                <div className="bg-[#FAFAFA] p-4 border border-[#E5E5E5] flex flex-wrap items-center gap-3 text-xs">
                  <span className="text-[9px] uppercase tracking-widest text-[#777777] font-semibold">
                    PARTICIPATING COLLABORATORS:
                  </span>
                  {collab.peopleInvolved.map((person, pIdx) => (
                    <span
                      key={pIdx}
                      className="font-medium text-black bg-white px-2.5 py-1 border border-[#E5E5E5] text-[11px]"
                    >
                      {person}
                    </span>
                  ))}
                </div>

                {/* 3-Stage Development Structure */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-2">
                  <div className="space-y-2 p-5 bg-[#FAFAFA] border border-[#E5E5E5]">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-black font-semibold block">
                      STAGE 01: CONCEPT
                    </span>
                    <p className="font-merriweather text-xs text-[#555555] leading-relaxed font-light italic">
                      {collab.concept}
                    </p>
                  </div>

                  <div className="space-y-2 p-5 bg-[#FAFAFA] border border-[#E5E5E5]">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-black font-semibold block">
                      STAGE 02: REALIZATION PROCESS
                    </span>
                    <p className="text-xs text-[#555555] leading-relaxed font-light">
                      {collab.process}
                    </p>
                  </div>

                  <div className="space-y-2 p-5 bg-[#FAFAFA] border border-[#E5E5E5]">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#081757] font-bold block">
                      STAGE 03: FINAL WORK & CATALOGUE
                    </span>
                    <p className="text-xs text-[#555555] leading-relaxed font-light">
                      {collab.finalWork}
                    </p>
                  </div>
                </div>

                {/* Image Documentation */}
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
                        Archival Photographic Record 0{i + 1}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Action Strip */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="font-merriweather text-xs text-[#777777] italic">
                    Collaborations that have happened. [Details to be added by Cloud Gallery]
                  </span>
                  <button
                    onClick={() => openEnquiry(null)}
                    className="px-6 py-2.5 bg-black hover:bg-[#081757] text-white text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer self-start sm:self-auto"
                  >
                    View Exhibition Catalogue →
                  </button>
                </div>
              </div>
            ))}

            {/* Clean Curatorial Placeholder Container */}
            <div className="border-2 border-dashed border-[#DDDDDD] bg-[#FAFAFA] p-8 sm:p-12 text-center space-y-4 hover:border-[#888888] transition-colors">
              <div className="w-12 h-12 mx-auto rounded-full border border-[#CCCCCC] flex items-center justify-center text-[#888888]">
                <Layers size={20} />
              </div>
              <h3 className="font-serif text-2xl text-black font-normal">
                Archival Collaboration Ingestion
              </h3>
              <p className="font-merriweather text-sm text-[#081757] font-semibold italic max-w-xl mx-auto">
                Collaborations that have happened. [Details to be added by Cloud Gallery]
              </p>
              <p className="text-xs text-[#777777] max-w-lg mx-auto font-light leading-relaxed">
                Prior collaborative monographs, site installations, and bespoke commissions are continuously digitized into Cloud Gallery&apos;s archival catalogue.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => openEnquiry(null)}
                  className="px-5 py-2 border border-black text-black hover:bg-black hover:text-white text-[10px] uppercase tracking-widest font-medium transition-colors"
                >
                  Request Archive Dossier
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
