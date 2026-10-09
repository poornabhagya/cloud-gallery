"use client";

import React from "react";
import Image from "next/image";
import { useGallery } from "@/context/GalleryContext";

export default function JourneyPage() {
  const { openEnquiry } = useGallery();

  const timelineMilestones = [
    {
      year: "2018",
      title: "The Inception & First Mountain Atelier",
      location: "Larvik, Norway",
      description: "Founded on the belief that contemporary culture needed a return to permanent, tactile materiality. The first alpine studio was established adjacent to ancient blue pearl granite quarries.",
      highlight: "Extraction of the first 12-ton tectonic stone blocks",
    },
    {
      year: "2020",
      title: "The Engadin Alpine Pavilion Commission",
      location: "Graubünden, Switzerland",
      description: "Completion of Cloud's landmark residential sanctuary, cantilevered at 1,800 meters. A manifesto of tamped earth, raw granite, and untreated larch timber joinery.",
      highlight: "Winner of the Architectural Monograph Award",
    },
    {
      year: "2022",
      title: "Foundry Guild & Lost-Wax Innovation",
      location: "Turin, Italy",
      description: "Forming exclusive long-term alliances with master bronze casters in northern Italy, pioneering direct 1,200°C bronze pours into natural diabase fissures.",
      highlight: "Creation of the monumental Diabase & Bronze suite",
    },
    {
      year: "2024",
      title: "International Salon & Auction Expansion",
      location: "Kyoto & Zurich",
      description: "Inauguration of Cloud's East Wing pavilion in Kyoto alongside the Zurich gallery hall, uniting Asian wood firing and European mineral painting under a unified curatorial banner.",
      highlight: "72-hour Anagama kiln reduction archives",
    },
    {
      year: "2026",
      title: "Cloud Gallery Today: Global Physical Sanctuaries",
      location: "International Salons",
      description: "A worldwide network encompassing represented masters, curated high-end auction lots, documentary cinema on Cloud TV, and cross-disciplinary collaborations.",
      highlight: "Full institutional catalogue & global consignment platform",
    },
  ];

  return (
    <div className="w-full bg-white text-black min-h-screen pb-32">
      {/* ========================================================
          FULL-BLEED CINEMA HERO BANNER (SOTHEBY'S JOURNEY PLATFORM)
      ======================================================== */}
      <section className="relative w-full h-[380px] sm:h-[460px] lg:h-[520px] bg-black overflow-hidden border-b border-[#E5E5E5]">
        <Image
          src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=2600&q=90"
          alt="Cloud Journey Monograph - Stone Sculpture in Architectural Space"
          fill
          priority
          className="object-cover object-center brightness-[0.85] contrast-[1.08]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />

        {/* Hero Top Badge */}
        <div className="absolute top-6 left-6 sm:left-12">
          <span className="text-[10px] tracking-[0.3em] uppercase bg-black/80 backdrop-blur-xs px-3.5 py-1.5 border border-white/25 text-white font-medium">
            MONOGRAPH & ARCHIVAL RETROSPECTIVE · 2018–2026
          </span>
        </div>

        {/* Hero Bottom Title & Metadata */}
        <div className="absolute bottom-8 left-6 sm:left-12 right-6 sm:right-12 text-white max-w-4xl space-y-3">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#CCCCCC]">
            <span className="w-2 h-2 rounded-full bg-[#081757] border border-white/60" />
            <span>CLOUD ORIGINS & FOUNDER ARCHIVE</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight text-white">
            The Cloud Journey
          </h1>
          <p className="font-merriweather text-xs sm:text-sm text-[#DDDDDD] font-light max-w-2xl leading-relaxed italic">
            From deep stone quarry extractions in Larvik and Carrara to monumental timber-cast alpine pavilions in the Engadin Valley. The founding vision, master craftsmanship, and the story of how Cloud Gallery began.
          </p>
        </div>
      </section>

      {/* ========================================================
          STICKY SECTION JUMP NAVIGATION BAR
      ======================================================== */}
      <nav
        aria-label="Journey Sections Navigation"
        className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-[#E5E5E5] shadow-xs"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#888888] font-bold mr-2 hidden md:inline">
              DIRECT SECTIONS:
            </span>
            <a
              href="#how-cloud-started"
              className="px-3.5 py-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-medium text-black hover:text-[#081757] hover:bg-neutral-100 border border-transparent hover:border-[#E5E5E5] transition-all whitespace-nowrap"
            >
              HOW CLOUD STARTED
            </a>
            <a
              href="#about-mr-prasanna"
              className="px-3.5 py-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-medium text-black hover:text-[#081757] hover:bg-neutral-100 border border-transparent hover:border-[#E5E5E5] transition-all whitespace-nowrap"
            >
              ABOUT MR PRASANNA
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#666666] shrink-0 font-medium">
            <span>FOUNDER MONOGRAPH</span>
            <span>·</span>
            <span>PERMANENT ARCHIVE</span>
          </div>
        </div>
      </nav>

      {/* ========================================================
          MAIN CONTENT CONTAINER
      ======================================================== */}
      <div className="space-y-28 pt-16">
        {/* ========================================================
            SECTION 1: HOW CLOUD STARTED
        ======================================================== */}
        <section
          id="how-cloud-started"
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
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#081757] font-semibold">
                  THE ORIGIN ARCHIVES
                </span>
              </div>

              <h2 className="font-roboto font-bold text-3xl sm:text-4xl text-[#081757] tracking-tight">
                HOW CLOUD STARTED
              </h2>

              {/* Exact required copy */}
              <p className="font-merriweather text-sm text-[#081757] font-semibold italic">
                The story of how Cloud Gallery began. [Details to be added by Cloud Gallery]
              </p>

              <p className="text-xs sm:text-sm text-black max-w-2xl font-light leading-relaxed pt-1">
                The foundational narrative, initial studio experiments, and curatorial principles that established Cloud Gallery as an international platform for monolithic art and architecture.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#777777] font-medium bg-[#FAFAFA] border border-[#E5E5E5] px-3 py-1.5">
                ESTABLISHED 2018
              </span>
              <a
                href="#how-cloud-started"
                className="text-[10px] uppercase tracking-[0.2em] font-bold text-black hover:text-[#081757] transition-colors flex items-center gap-1"
              >
                <span>TOP</span>
                <span>↑</span>
              </a>
            </div>
          </div>

          {/* Story Narrative & Visual Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="border-l-2 border-black pl-5 py-1">
                <h3 className="font-serif text-2xl sm:text-3xl text-black leading-snug">
                  Rejecting Decorative Triviality in Search of Permanence
                </h3>
              </div>

              <p className="font-merriweather text-xs sm:text-sm text-[#444444] font-light leading-relaxed italic">
                The story of how Cloud Gallery began. [Details to be added by Cloud Gallery]
              </p>

              <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
                Cloud Gallery was born from a profound reaction against disposable contemporary trends. In an era dominated by fleeting digital surfaces and mass production, Cloud was conceived as an unyielding physical sanctuary—grounded in the raw weight of stone, the elemental fire of bronze foundries, and the slow quietude of natural wood and mineral pigments.
              </p>

              <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
                What began in 2018 as a series of direct studio dialogues between sculptors, stone masons, and alpine architects quickly expanded into a curated international institution. Today, Cloud operates across major European and Asian capitals, preserving age-old craftsmanship while driving monumental new commissions.
              </p>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E5E5E5]">
                <div className="p-4 bg-[#FAFAFA] border border-[#E5E5E5] space-y-1.5">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#081757] font-bold block">
                    01. MATERIAL INTEGRITY
                  </span>
                  <p className="text-xs text-[#555555] font-light leading-relaxed">
                    Uncompromising adherence to authentic natural mediums—diabase, bronze, travertine, and wild clay.
                  </p>
                </div>

                <div className="p-4 bg-[#FAFAFA] border border-[#E5E5E5] space-y-1.5">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#081757] font-bold block">
                    02. TIMELESS CRAFT
                  </span>
                  <p className="text-xs text-[#555555] font-light leading-relaxed">
                    Centuries-old lost-wax casting and hand timber joinery executed without modern shortcuts.
                  </p>
                </div>

                <div className="p-4 bg-[#FAFAFA] border border-[#E5E5E5] space-y-1.5">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#081757] font-bold block">
                    03. SPATIAL WEIGHT
                  </span>
                  <p className="text-xs text-[#555555] font-light leading-relaxed">
                    Artworks created not for mere decoration, but to command and transform architectural space.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Plate Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-[4/5] bg-[#FAFAFA] border border-[#E5E5E5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                  alt="Early architectural atelier and stone studies"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute bottom-3 left-3 bg-white px-2.5 py-1 text-[9px] uppercase tracking-widest font-semibold text-black border border-[#E5E5E5]">
                  Archival Plate · Founding Atelier Studies
                </div>
              </div>
              <p className="text-[11px] text-[#777777] italic leading-relaxed">
                The story of how Cloud Gallery began. [Details to be added by Cloud Gallery] Historical photographic records from the initial stone studio and architectural pavilion models.
              </p>
            </div>
          </div>

          {/* Timeline Milestones */}
          <div className="mt-16 pt-12 border-t border-[#E5E5E5] space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#888888] font-bold block">
                  CHRONOLOGICAL RECORD
                </span>
                <h3 className="font-serif text-2xl text-black">
                  Key Milestones of the Cloud Journey
                </h3>
              </div>
              <span className="text-xs text-[#777777] italic hidden sm:block">
                2018 — Present Day
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {timelineMilestones.map((milestone) => (
                <div
                  key={milestone.year}
                  className="p-6 bg-white border border-[#E5E5E5] hover:border-black transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-3xl font-normal text-black">
                        {milestone.year}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider text-[#081757] font-semibold bg-[#FAFAFA] px-2 py-0.5 border border-[#E5E5E5]">
                        {milestone.location}
                      </span>
                    </div>
                    <h4 className="font-serif text-lg text-black">
                      {milestone.title}
                    </h4>
                    <p className="text-xs text-[#666666] font-light leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#EEEEEE] text-[10px] uppercase tracking-wider text-[#081757] font-semibold">
                    ✓ {milestone.highlight}
                  </div>
                </div>
              ))}

              {/* Curatorial Placeholder Card for Origins Expansion */}
              <div className="p-6 bg-[#FAFAFA] border-2 border-dashed border-[#DDDDDD] flex flex-col justify-between hover:border-[#888888] transition-colors">
                <div className="space-y-2">
                  <span className="text-[9px] uppercase tracking-widest text-[#888888] font-bold block">
                    ARCHIVE IN PROGRESS
                  </span>
                  <h4 className="font-serif text-lg text-black">
                    Origins Ingestion
                  </h4>
                  <p className="font-merriweather text-xs text-[#081757] font-semibold italic pt-1">
                    The story of how Cloud Gallery began. [Details to be added by Cloud Gallery]
                  </p>
                  <p className="text-xs text-[#777777] font-light leading-relaxed pt-1">
                    Complete archival documentary recordings, founding sketches, and retrospective manuscripts are being assembled by the Curatorial Directorate.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5E5E5]">
                  <span className="text-[10px] uppercase tracking-wider text-[#888888]">
                    Cloud Gallery Directorate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 2: ABOUT MR PRASANNA
        ======================================================== */}
        <section
          id="about-mr-prasanna"
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
                  FOUNDER MONOGRAPH
                </span>
              </div>

              <h2 className="font-roboto font-bold text-3xl sm:text-4xl text-[#081757] tracking-tight">
                ABOUT MR PRASANNA
              </h2>

              {/* Exact required copy */}
              <p className="font-merriweather text-sm text-[#081757] font-semibold italic">
                The founder, his vision and his work. [Details to be added by Cloud Gallery]
              </p>

              <p className="text-xs sm:text-sm text-black max-w-2xl font-light leading-relaxed pt-1">
                The architectural philosophy, creative leadership, and lifelong studio dedication of Cloud Gallery founder Mr. Prasanna.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#777777] font-medium bg-[#FAFAFA] border border-[#E5E5E5] px-3 py-1.5">
                FOUNDER & PRINCIPAL CURATOR
              </span>
              <a
                href="#about-mr-prasanna"
                className="text-[10px] uppercase tracking-[0.2em] font-bold text-black hover:text-[#081757] transition-colors flex items-center gap-1"
              >
                <span>TOP</span>
                <span>↑</span>
              </a>
            </div>
          </div>

          {/* Biographical Monograph Card */}
          <div className="p-8 sm:p-12 bg-white border border-black grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-xs">
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] bg-[#FAFAFA] border border-[#E5E5E5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85"
                  alt="Mr Prasanna in studio"
                  fill
                  className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 right-4 bg-white border border-black px-4 py-2 text-center shadow-md">
                <span className="text-[9px] uppercase tracking-widest text-[#081757] font-bold block">
                  FOUNDER & VISIONARY
                </span>
                <span className="font-serif text-sm text-black font-semibold">
                  MR PRASANNA
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1.5">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#081757] font-bold block">
                  CREATIVE PHILOSOPHY & LEADERSHIP
                </span>
                <h3 className="font-serif text-3xl sm:text-5xl text-black font-normal leading-tight">
                  Mr. Prasanna
                </h3>
                <p className="font-merriweather text-xs text-[#081757] font-semibold italic">
                  The founder, his vision and his work. [Details to be added by Cloud Gallery]
                </p>
              </div>

              <blockquote className="font-serif text-xl sm:text-2xl text-black italic font-light border-l-2 border-black pl-5 py-1 leading-relaxed">
                &ldquo;Architecture is frozen music; sculpture is tactile space where the unyielding density of stone speaks directly to human mortality.&rdquo;
              </blockquote>

              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-light">
                Guiding Cloud Gallery with an unwavering dedication to timeless materials, master craftsmanship, and world-class curatorial standards uniting monumental stone excavation, lost-wax bronze casting, and mineral pigments into enduring spatial environments.
              </p>

              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-light">
                Mr. Prasanna has spent decades traversing remote European and Asian quarries, cultivating direct partnerships with historic foundries and master artisans. His personal monographs and site-specific architectural installations have been recognized across leading international architectural and sculptural institutions.
              </p>

              {/* Curatorial Specifications Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#E5E5E5] text-xs">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-[#777777] font-semibold block">
                    FOUNDING DISCIPLINE
                  </span>
                  <span className="font-serif text-sm text-black mt-0.5 block">
                    Architecture & Stone
                  </span>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-[#777777] font-semibold block">
                    FIELD RESIDENCIES
                  </span>
                  <span className="font-serif text-sm text-black mt-0.5 block">
                    Larvik, Carrara, Kyoto
                  </span>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-[#777777] font-semibold block">
                    CORE MEDIUMS
                  </span>
                  <span className="font-serif text-sm text-black mt-0.5 block">
                    Diabase, Bronze, Timber
                  </span>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-[#777777] font-semibold block">
                    CURATORIAL OFFICE
                  </span>
                  <span className="font-serif text-sm text-black mt-0.5 block">
                    Cloud Gallery Zurich
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[#E5E5E5]">
                <p className="font-merriweather text-xs text-[#777777] italic">
                  The founder, his vision and his work. [Details to be added by Cloud Gallery]
                </p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => openEnquiry(null)}
                    className="px-6 py-2.5 bg-black hover:bg-[#081757] text-white text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer"
                  >
                    Inquire with Founder Office →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Clean Placeholder for Founder Archive */}
          <div className="mt-8 border-2 border-dashed border-[#DDDDDD] bg-[#FAFAFA] p-8 text-center space-y-3 hover:border-[#888888] transition-colors">
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#888888] font-bold block">
              PERMANENT FOUNDER DOSSIER
            </span>
            <h4 className="font-serif text-xl text-black">
              Founder Monograph & Retrospective Ingestion
            </h4>
            <p className="font-merriweather text-xs text-[#081757] font-semibold italic max-w-xl mx-auto">
              The founder, his vision and his work. [Details to be added by Cloud Gallery]
            </p>
            <p className="text-xs text-[#777777] max-w-lg mx-auto font-light leading-relaxed">
              In-depth essays, architectural sketches, and personal monograph chapters are continuously documented for the Cloud permanent archive.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
