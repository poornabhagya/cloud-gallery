"use client";

import React, { useState } from "react";
import Image from "next/image";
import { JOURNEY_TIMELINE, JourneyMilestone } from "@/data/mockData";
import { ArrowUpRight, Compass, Hammer, Sparkles, BookOpen } from "lucide-react";

const DISCIPLINES = ["All", "Architecture", "Sculpture", "Painting", "Design"] as const;

export default function JourneyPage() {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>("All");

  const filteredMilestones = JOURNEY_TIMELINE.filter((item) =>
    selectedDiscipline === "All" ? true : item.discipline === selectedDiscipline
  );

  return (
    <div className="w-full min-h-screen pb-32">
      {/* Editorial Header */}
      <section className="bg-[#EAE5DC] border-b border-[#E2DDD4] py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-[11px] tracking-[0.35em] uppercase text-[#8C6D53] font-medium block">
            MONOGRAPH & MONUMENTAL TRAJECTORY
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#2B2A27] font-light max-w-4xl">
            The Artist-Architect&apos;s Journey
          </h1>
          <p className="text-xs sm:text-sm text-[#7E7971] max-w-2xl font-light leading-relaxed">
            From deep stone quarry extractions in Larvik to timber-cast alpine pavilions in the Engadin Valley. Documenting fifteen years of cross-disciplinary architectural evolution.
          </p>
        </div>
      </section>

      {/* CASE STUDY HIGHLIGHT: THE PAVILION RESIDENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-[#E2DDD4]">
        <div className="mb-10">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#8C6D53] font-semibold block mb-1">
            LANDMARK ARCHITECTURAL CASE STUDY
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#2B2A27] font-light">
            The Pavilion Residence (Engadin)
          </h2>
          <p className="text-xs text-[#7E7971] uppercase tracking-wider mt-1">
            Completed 2020 · Switzerland · Monolithic Cast Concrete & Charred Cedar
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Architectural Hero Image */}
          <div className="lg:col-span-8 space-y-4">
            <div className="relative aspect-[16/10] bg-[#EAE5DC] border border-[#E2DDD4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
                alt="The Pavilion Residence spatial photography"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
            </div>
            <div className="flex items-center justify-between text-[11px] text-[#7E7971] px-1">
              <span>Plate 01: North-facing winter terrace cantilever</span>
              <span className="italic">Photography by Jonas Lindström</span>
            </div>
          </div>

          {/* Blueprint & Architectural Thesis */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-[#EAE5DC]/60 border border-[#E2DDD4] space-y-4">
              <h3 className="font-serif text-xl text-[#2B2A27] italic">
                Spatial Conception
              </h3>
              <p className="text-xs text-[#7E7971] leading-relaxed font-light">
                Positioned 1,800 meters above sea level, the pavilion emerges directly from the granite bedrock. Three massive timber-formed concrete towers anchor the residence against alpine gales, framing cinematic voids toward the mountain passes.
              </p>
            </div>

            {/* Material Specification List */}
            <div className="border border-[#E2DDD4] p-5 space-y-3 bg-[#F4F0EA]">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#8C6D53] font-medium block">
                TACTILE MATERIAL PALETTE
              </span>
              <ul className="text-xs text-[#7E7971] space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D53] mt-1 flex-shrink-0" />
                  <span>Hand-raked Jura Travertine (cold jointed)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D53] mt-1 flex-shrink-0" />
                  <span>Charred Shou Sugi Ban Swiss Larch siding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D53] mt-1 flex-shrink-0" />
                  <span>Brushed gunmetal & patinated bronze apertures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D53] mt-1 flex-shrink-0" />
                  <span>Unbleached Belgian linen acoustic panels</span>
                </li>
              </ul>
            </div>

            <div className="relative aspect-[4/3] bg-[#EAE5DC] border border-[#E2DDD4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=85"
                alt="Interior detail"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE TIMELINE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E2DDD4] pb-6 mb-12 gap-4">
          <div>
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#8C6D53] font-medium block mb-1">
              CHRONOLOGY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2A27] font-light">
              Milestones & Practice Evolution
            </h2>
          </div>

          {/* Sub-nav Discipline Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1">
            {DISCIPLINES.map((disc) => (
              <button
                key={disc}
                onClick={() => setSelectedDiscipline(disc)}
                className={`px-3.5 py-1.5 text-[11px] uppercase tracking-wider transition-all border ${
                  selectedDiscipline === disc
                    ? "bg-[#2B2A27] text-[#F4F0EA] border-[#2B2A27]"
                    : "bg-[#EAE5DC]/60 text-[#7E7971] hover:text-[#2B2A27] border-[#E2DDD4]"
                }`}
              >
                {disc}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-12">
          {filteredMilestones.map((milestone, idx) => (
            <div
              key={milestone.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 p-6 sm:p-8 bg-[#EAE5DC]/30 border border-[#E2DDD4] items-center hover:border-[#8C6D53] transition-colors"
            >
              {/* Year & Discipline */}
              <div className="md:col-span-3 space-y-1">
                <span className="font-serif text-4xl sm:text-5xl text-[#8C6D53] font-light">
                  {milestone.year}
                </span>
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#7E7971] font-medium">
                  {milestone.discipline} · {milestone.location}
                </p>
              </div>

              {/* Title & Description */}
              <div className="md:col-span-5 space-y-2">
                <h3 className="font-serif text-2xl text-[#2B2A27]">
                  {milestone.title}
                </h3>
                <p className="text-xs text-[#7E7971] leading-relaxed font-light">
                  {milestone.description}
                </p>
              </div>

              {/* Image Preview */}
              <div className="md:col-span-4 relative aspect-[16/10] bg-[#EAE5DC] border border-[#E2DDD4] overflow-hidden">
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

      {/* STUDIO & PROCESS MOODBOARD GRID */}
      <section className="bg-[#EAE5DC] border-t border-[#E2DDD4] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] tracking-[0.35em] uppercase text-[#8C6D53] font-semibold block">
              MATERIAL ARCHIVES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2A27] font-light">
              Studio & Process Moodboard
            </h2>
            <p className="text-xs text-[#7E7971] font-light">
              Raw graphite studies, silica investment casting molds, volcanic aggregates, and foundry trials.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "Graphite Study 08",
                tag: "Sketch",
                img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=85",
              },
              {
                title: "Foundry Crucible Pour",
                tag: "Lost Wax Process",
                img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=85",
              },
              {
                title: "Travertine Quarry Block",
                tag: "Extraction",
                img: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=85",
              },
              {
                title: "Ash Glaze Cooling",
                tag: "Kyoto Kiln",
                img: "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=800&q=85",
              },
            ].map((item, idx) => (
              <div key={idx} className="group relative bg-[#F4F0EA] border border-[#E2DDD4] overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="p-3 border-t border-[#E2DDD4]">
                  <span className="text-[9px] uppercase tracking-widest text-[#8C6D53] block">
                    {item.tag}
                  </span>
                  <p className="font-serif text-sm text-[#2B2A27] truncate mt-0.5">
                    {item.title}
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
