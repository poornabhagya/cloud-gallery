"use client";

import React, { useState } from "react";
import Image from "next/image";
import { JOURNEY_TIMELINE, JourneyMilestone } from "@/data/mockData";
import { ArrowRight, Compass, Hammer, Sparkles, BookOpen, Layers, Pencil, Eye, Check } from "lucide-react";

const DISCIPLINES = [
  "All",
  "Architecture",
  "Sculpture",
  "Painting",
  "Design",
  "Major Projects",
] as const;

export default function JourneyPage() {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>("All");
  const [activeSketch, setActiveSketch] = useState<number>(0);

  const filteredMilestones = JOURNEY_TIMELINE.filter((item) =>
    selectedDiscipline === "All" ? true : item.discipline === selectedDiscipline
  );

  const sketches = [
    {
      title: "Plate 01: Diabase Monolith Sectional Tensions",
      category: "Sculpture & Geometry",
      image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=85",
      notes: "Graphite on vellum. Studies for uncalibrated pivot line and counterweight bronze cap.",
    },
    {
      title: "Plate 02: Engadin Pavilion Structural Elevation",
      category: "Architecture",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
      notes: "Tamped concrete towers framing negative voids toward mountain passes at 1,800m altitude.",
    },
    {
      title: "Plate 03: Kyoto Wood Kiln Thermal Dynamics",
      category: "Porcelain & Process",
      image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=1000&q=85",
      notes: "72-hour anagama reduction flame paths and natural wood-ash flux crystallization points.",
    },
    {
      title: "Plate 04: Lost Wax Bronze Armature Fissures",
      category: "Metal & Foundry",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=85",
      notes: "Direct molten bronze casting channels into quarry stone fractures.",
    },
  ];

  return (
    <div className="w-full bg-white text-black min-h-screen pb-32">
      {/* ========================================================
          FULL-BLEED HERO IMAGE (SOTHEBY'S ABOUT / EDITORIAL STRUCTURE)
      ======================================================== */}
      <section className="relative w-full h-[360px] sm:h-[460px] lg:h-[520px] bg-black overflow-hidden border-b border-[#E5E5E5]">
        <Image
          src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=2600&q=90"
          alt="Cloud Journey Monograph - Stone Sculpture in Architectural Space"
          fill
          priority
          className="object-cover object-center brightness-[0.88] contrast-[1.05]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
        <div className="absolute bottom-6 left-6 sm:left-12 text-white">
          <span className="text-[10px] tracking-[0.3em] uppercase bg-black/75 backdrop-blur-xs px-3 py-1 border border-white/20 font-medium">
            MONOGRAPH & ARCHIVAL RETROSPECTIVE · 2018–2026
          </span>
        </div>
      </section>

      {/* ========================================================
          1. ABOUT THE ARTIST & EDITORIAL MONOGRAPH HEADER
      ======================================================== */}
      <section className="border-b border-[#E5E5E5] bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] tracking-[0.3em] uppercase text-black font-semibold bg-[#FAFAFA] border border-[#E5E5E5] px-2.5 py-1">
              CATALOGUE RAISONNÉ & RETROSPECTIVE MONOGRAPH
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-black font-normal leading-tight max-w-5xl">
            Cloud Journey: The Story of a Creative Life
          </h1>
          <p className="text-xs sm:text-sm text-[#555555] max-w-3xl font-light leading-relaxed">
            From deep stone quarry extractions in Larvik and Carrara to monumental timber-cast alpine pavilions in the Engadin Valley. An authoritative retrospective spanning architecture, monolithic sculpture, tectonic painting, and process archives.
          </p>
        </div>
      </section>

      {/* ========================================================
          SECTION: ABOUT THE ARTIST (Biographical Monograph Profile)
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-[#E5E5E5]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] bg-[#FAFAFA] border border-[#E5E5E5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85"
                alt="Henrik Vestergaard in studio"
                fill
                className="object-cover grayscale contrast-125"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="absolute -bottom-4 right-4 bg-white border border-[#E5E5E5] px-4 py-2 text-center">
              <span className="text-[9px] uppercase tracking-widest text-[#666666] font-semibold block">
                FOUNDER & ARTIST-ARCHITECT
              </span>
              <span className="font-serif text-sm text-black">
                HENRIK VESTERGAARD
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] tracking-[0.25em] uppercase text-black font-semibold block">
                ABOUT THE ARTIST & PHILOSOPHY
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-black font-normal leading-snug">
                Form Conceived as Silent Mass
              </h2>
            </div>

            <blockquote className="font-serif text-xl sm:text-2xl text-black italic font-light border-l-2 border-black pl-4 py-1 leading-relaxed">
              &ldquo;Architecture is frozen music; sculpture is tactile space where the unyielding density of stone speaks directly to human mortality.&rdquo;
            </blockquote>

            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-light">
              Trained at the Royal Danish Academy of Fine Arts in Copenhagen and the Swiss Federal Institute of Technology (ETH Zurich), Henrik Vestergaard founded Cloud Studio in 2018. Rejecting ephemeral commercial design, his practice unites monumental stone excavation, lost-wax bronze casting, and mineral pigments into enduring spatial environments.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#E5E5E5] text-xs">
              <div>
                <span className="text-[9px] uppercase tracking-widest text-[#777777] block">EDUCATION</span>
                <span className="font-medium text-black mt-0.5 block">ETH Zurich / KADK</span>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-widest text-[#777777] block">RESIDENCIES</span>
                <span className="font-medium text-black mt-0.5 block">Larvik, Carrara, Kyoto</span>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-widest text-[#777777] block">MEDIUMS</span>
                <span className="font-medium text-black mt-0.5 block">Diabase, Bronze, Flax</span>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-widest text-[#777777] block">REPRESENTATION</span>
                <span className="font-medium text-black mt-0.5 block">Cloud Gallery Zurich</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. ARCHITECTURE: THE ENGADIN PAVILION RESIDENCE
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-[#E5E5E5]">
        <div className="mb-10 pb-4 border-b border-black flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#666666] font-semibold block mb-1">
              DISCIPLINE I · ARCHITECTURE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-black font-normal">
              The Pavilion Residence (Engadin Valley)
            </h2>
          </div>
          <span className="text-xs uppercase tracking-wider text-black font-semibold">
            COMPLETED 2020 · SWITZERLAND
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-3">
            <div className="relative aspect-[16/10] bg-[#FAFAFA] border border-[#E5E5E5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
                alt="The Pavilion Residence spatial photography"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
            </div>
            <div className="flex justify-between text-[11px] text-[#666666] px-1">
              <span>Plate 01: Cantilevered alpine winter terrace overlooking alpine passes</span>
              <span className="italic">Photography by Jonas Lindström</span>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-[#FAFAFA] border border-[#E5E5E5] space-y-3">
              <h3 className="font-serif text-xl text-black italic">
                Spatial & Structural Conception
              </h3>
              <p className="text-xs text-[#555555] leading-relaxed font-light">
                Positioned 1,800 meters above sea level, the pavilion emerges directly from the granite bedrock. Three massive timber-formed concrete towers anchor the residence against alpine gales, framing cinematic voids toward mountain passes.
              </p>
            </div>

            <div className="border border-[#E5E5E5] p-5 space-y-3 bg-white">
              <span className="text-[10px] tracking-[0.25em] uppercase text-black font-semibold block">
                TACTILE MATERIAL SPECIFICATION
              </span>
              <ul className="text-xs text-[#555555] space-y-2">
                <li className="flex items-start gap-2">
                  <Check size={13} className="text-black mt-0.5 flex-shrink-0" />
                  <span>Hand-raked Jura Travertine (cold jointed)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={13} className="text-black mt-0.5 flex-shrink-0" />
                  <span>Charred Shou Sugi Ban Swiss Larch siding</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={13} className="text-black mt-0.5 flex-shrink-0" />
                  <span>Brushed gunmetal & patinated bronze apertures</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={13} className="text-black mt-0.5 flex-shrink-0" />
                  <span>Unbleached Belgian linen acoustic panels</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4, 5, 6, 7. SCULPTURE, PAINTING, DESIGN & MAJOR PROJECTS (Grid Showcase)
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-[#E5E5E5]">
        <div className="mb-10 pb-4 border-b border-[#E5E5E5] flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#666666] font-semibold block mb-1">
              DISCIPLINES & EXPEDITIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-black">
              Sculpture, Painting, Design & Major Projects
            </h2>
          </div>

          {/* Discipline Filters */}
          <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar pb-1">
            {DISCIPLINES.map((disc) => (
              <button
                key={disc}
                onClick={() => setSelectedDiscipline(disc)}
                className={`px-3 py-1 text-[10px] uppercase tracking-wider transition-all border ${
                  selectedDiscipline === disc
                    ? "bg-black text-white border-black font-medium"
                    : "bg-[#FAFAFA] text-[#555555] hover:text-black border-[#E5E5E5]"
                }`}
              >
                {disc}
              </button>
            ))}
          </div>
        </div>

        {/* Milestone Cards Stream */}
        <div className="space-y-8">
          {filteredMilestones.map((milestone) => (
            <div
              key={milestone.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 p-6 sm:p-8 bg-white border border-[#E5E5E5] items-center hover:border-black transition-all"
            >
              <div className="md:col-span-3 space-y-1">
                <span className="font-serif text-4xl sm:text-5xl text-black font-normal">
                  {milestone.year}
                </span>
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#666666] font-semibold">
                  {milestone.discipline} · {milestone.location}
                </p>
              </div>

              <div className="md:col-span-5 space-y-2">
                <h3 className="font-serif text-2xl text-black italic">
                  {milestone.title}
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed font-light">
                  {milestone.description}
                </p>
                {milestone.specifications && (
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {milestone.specifications.map((spec, i) => (
                      <span key={i} className="text-[9px] uppercase tracking-wider bg-[#FAFAFA] px-2 py-0.5 border border-[#E5E5E5] text-[#555555]">
                        {spec}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="md:col-span-4 relative aspect-[16/10] bg-[#FAFAFA] border border-[#E5E5E5] overflow-hidden">
                <Image
                  src={milestone.image}
                  alt={milestone.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          8. SKETCHES & IDEAS (Interactive Archival Studio Folio)
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-[#E5E5E5]">
        <div className="mb-10 pb-4 border-b border-black flex items-end justify-between">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#666666] font-semibold block mb-1">
              ARCHIVAL FOLIO · SECTION 08
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-black">
              Sketches & Ideas: The Analytical Folio
            </h2>
          </div>
          <span className="text-xs uppercase tracking-wider text-[#666666] hidden sm:block">
            4 Selected Monograph Plates
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Selected Sketch Large View */}
          <div className="lg:col-span-8 space-y-3">
            <div className="relative aspect-[16/10] bg-[#FAFAFA] border border-[#E5E5E5] overflow-hidden">
              <Image
                src={sketches[activeSketch].image}
                alt={sketches[activeSketch].title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
              <div className="absolute top-4 left-4 bg-white border border-[#E5E5E5] px-3 py-1 text-[9px] uppercase tracking-widest font-semibold text-black">
                {sketches[activeSketch].category}
              </div>
            </div>
            <div className="p-4 bg-[#FAFAFA] border border-[#E5E5E5]">
              <h4 className="font-serif text-xl text-black italic">
                {sketches[activeSketch].title}
              </h4>
              <p className="text-xs text-[#555555] mt-1 font-light">
                {sketches[activeSketch].notes}
              </p>
            </div>
          </div>

          {/* Sketchbook Selector Thumbnails */}
          <div className="lg:col-span-4 space-y-3">
            {sketches.map((sketch, idx) => (
              <div
                key={idx}
                onClick={() => setActiveSketch(idx)}
                className={`p-3 border transition-all cursor-pointer flex items-center gap-3 ${
                  activeSketch === idx
                    ? "border-black bg-[#FAFAFA] shadow-xs"
                    : "border-[#E5E5E5] bg-white hover:border-[#888888]"
                }`}
              >
                <div className="relative w-16 h-12 bg-[#EEEEEE] flex-shrink-0 overflow-hidden border border-[#E5E5E5]">
                  <Image
                    src={sketch.image}
                    alt={sketch.title}
                    fill
                    className="object-cover"
                    sizes="60px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[9px] uppercase tracking-wider text-[#777777] block">
                    {sketch.category}
                  </span>
                  <p className="font-serif text-sm text-black truncate italic">
                    {sketch.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          9. STUDIO / PROCESS (Quarry Extractions & Kiln Archives)
      ======================================================== */}
      <section className="bg-[#FAFAFA] border-b border-[#E5E5E5] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[10px] tracking-[0.35em] uppercase text-black font-semibold block">
              PROCESS & FIELD DOCUMENTATION
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-black font-normal">
              The Studio & Process Archives
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
              Raw mineral extraction at 1,400 meters, lost-wax furnace trials at 1,200°C, and 72-hour reduction firings in Kyoto.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Diabase Quarry Extraction",
                tag: "Larvik, Norway",
                img: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=85",
                caption: "Diamond-wire precision sawing of 12-ton tectonic stone blocks.",
              },
              {
                title: "Foundry Crucible Pour (1,200°C)",
                tag: "Turin Foundry Guild",
                img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=85",
                caption: "Lost-wax silica investment casting for skeletal bronze armatures.",
              },
              {
                title: "Anagama Ash Glaze Cooling",
                tag: "Higashiyama, Kyoto",
                img: "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=800&q=85",
                caption: "Red pine wood-ash melting over unglazed stoneware porcelain foot.",
              },
              {
                title: "Gotthard Mineral Slate Grinding",
                tag: "Zurich North Atelier",
                img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=85",
                caption: "Granite mortar formulation of light-absorbing mineral temperas.",
              },
            ].map((item, idx) => (
              <div key={idx} className="group bg-white border border-[#E5E5E5] hover:border-black transition-all flex flex-col justify-between">
                <div className="relative aspect-[3/4] bg-[#FAFAFA] overflow-hidden border-b border-[#E5E5E5]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute top-3 left-3 bg-white px-2 py-0.5 text-[9px] uppercase tracking-wider font-semibold text-black border border-[#E5E5E5]">
                    {item.tag}
                  </div>
                </div>
                <div className="p-4 space-y-1 bg-white">
                  <h4 className="font-serif text-base text-black group-hover:underline">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[#666666] leading-relaxed font-light">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
