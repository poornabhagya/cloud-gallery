"use client";

import React, { useState } from "react";
import Image from "next/image";
import { EVENTS_DATA, GalleryEvent } from "@/data/mockData";
import { useGallery } from "@/context/GalleryContext";
import {
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  User,
  Users,
  Ticket,
  Archive,
  Sparkles,
  ExternalLink,
  BookOpen,
  ChevronRight,
} from "lucide-react";

// Additional historical past event archives to enrich the exhibition history
const PAST_ARCHIVES_DATA: GalleryEvent[] = [
  {
    id: "ev-past-1",
    title: "Matter & Horizon: Retrospective Exhibition",
    date: "NOV 12 – DEC 18, 2025",
    displayDate: "12 NOV 2025",
    time: "Archival Record",
    monthGroup: "PAST ARCHIVES",
    location: "Cloud Archival Warehouse, Copenhagen",
    type: "Exhibition",
    isPast: true,
    description: "Major retrospective documenting fifteen years of cross-disciplinary architectural prototypes, lost-wax bronzes, and raw diabase stone chiseling.",
    curator: "Henrik Vestergaard & Dr. Marlene Weill",
    participatingArtists: ["Henrik Vestergaard", "Studio Nube", "Elena Rostova"],
  },
  {
    id: "ev-past-2",
    title: "Alpine Pavilion Vernissage: Engadin Residency",
    date: "FEB 08, 2025",
    displayDate: "08 FEB 2025",
    time: "Archival Record",
    monthGroup: "PAST ARCHIVES",
    location: "Engadin Alpine Sanctuary, Switzerland",
    type: "Event",
    isPast: true,
    description: "Inaugural winter salon presenting site-specific charred timber and board-formed concrete architectural interventions set against fresh snow.",
    curator: "Marc Althaus",
    participatingArtists: ["Studio Nube", "Marc Althaus"],
  },
  {
    id: "ev-past-3",
    title: "Mineral & Canvas: The Basel Monograph",
    date: "OCT 20, 2024",
    displayDate: "20 OCT 2024",
    time: "Archival Record",
    monthGroup: "PAST ARCHIVES",
    location: "Kunsthaus Cloister Annex, Basel",
    type: "Exhibition",
    isPast: true,
    description: "Solo showcase featuring twenty large-format flax canvases rendered with Gotthard pass diabase silt, chalk gesso, and raw river mineral tempera.",
    curator: "Cloud Curatorial Board",
    participatingArtists: ["Kaelen Thorne"],
  },
  {
    id: "ev-past-4",
    title: "The Kyoto Kiln Symposium: 72-Hour Anagama",
    date: "MAY 15 – MAY 18, 2024",
    displayDate: "15 MAY 2024",
    time: "Archival Record",
    monthGroup: "PAST ARCHIVES",
    location: "Machiya Atelier & Hillside Kiln, Kyoto",
    type: "Workshop",
    isPast: true,
    description: "A closed-door three-day symposium observing wood-fired reduction ceramics and thermal shock tests for monolithic interior surfaces.",
    curator: "Aoi Minamoto & Master Kenzo Mori",
    participatingArtists: ["Aoi Minamoto", "Kenzo Mori"],
  },
];

export default function EventsPage() {
  const { openRsvp, openEnquiry } = useGallery();
  const [activeSectionView, setActiveSectionView] = useState<"all" | "upcoming" | "past">("all");

  const upcomingEvents = EVENTS_DATA.filter((e) => !e.isPast);
  const pastEvents = [...EVENTS_DATA.filter((e) => e.isPast), ...PAST_ARCHIVES_DATA.slice(1)];

  return (
    <div className="w-full bg-white text-black min-h-screen pb-32">
      {/* ========================================================
          FULL-BLEED HERO IMAGE (SOTHEBY'S CALENDAR & AUCTIONS)
      ======================================================== */}
      <section className="relative w-full h-[360px] sm:h-[460px] lg:h-[520px] bg-black overflow-hidden border-b border-[#E5E5E5]">
        <Image
          src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=2600&q=90"
          alt="Cloud Events, Vernissages and Auction Salons"
          fill
          priority
          className="object-cover object-center brightness-[0.88] contrast-[1.05]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
        <div className="absolute bottom-6 left-6 sm:left-12 text-white">
          <span className="text-[10px] tracking-[0.3em] uppercase bg-black/75 backdrop-blur-xs px-3 py-1 border border-white/20 font-medium">
            CALENDAR OF SALONS, VERNISSAGES & CURATORIAL ARCHIVES
          </span>
        </div>
      </section>

      {/* ========================================================
          PAGE HEADER
      ======================================================== */}
      <section className="border-b border-[#E5E5E5] bg-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] tracking-[0.3em] uppercase text-black font-semibold bg-[#FAFAFA] border border-[#E5E5E5] px-2.5 py-1">
              INTERNATIONAL PROGRAMME · AUTUMN 2026 & RETROSPECTIVES
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-black font-normal leading-tight">
            Cloud Events
          </h1>
          <p className="font-merriweather text-xs sm:text-sm text-[#555555] max-w-3xl leading-relaxed italic">
            Gatherings at the confluence of architecture, sound, and monolithic stone sculpture. Intimate vernissages, live curatorial symposiums, private collector viewings, and monographic exhibition launches across Zurich, Copenhagen, and Kyoto.
          </p>
        </div>
      </section>

      {/* ========================================================
          STICKY NAVIGATION & FILTER BAR
      ======================================================== */}
      <nav className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-[#E5E5E5] py-3.5 px-4 sm:px-6 lg:px-8 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center space-x-2 sm:space-x-4 text-[10px] uppercase tracking-wider font-semibold">
            <a
              href="#upcoming-events"
              onClick={() => setActiveSectionView("all")}
              className="px-3.5 py-1.5 bg-[#081757] text-white hover:bg-black rounded-xs transition-colors flex items-center gap-1.5"
            >
              <span>01. UPCOMING EVENTS</span>
              <span className="text-xs">↓</span>
            </a>
            <a
              href="#past-events"
              onClick={() => setActiveSectionView("all")}
              className="px-3.5 py-1.5 bg-[#FAFAFA] text-[#444444] border border-[#E5E5E5] hover:text-black hover:border-black rounded-xs transition-colors flex items-center gap-1.5"
            >
              <span>02. PAST EVENTS & ARCHIVES</span>
              <span className="text-xs">↓</span>
            </a>
          </div>

          <span className="text-[10px] uppercase tracking-widest text-[#777777] font-mono hidden md:inline-block">
            {upcomingEvents.length} UPCOMING · {pastEvents.length} ARCHIVED
          </span>
        </div>
      </nav>

      {/* ========================================================
          SECTION 1: UPCOMING EVENTS
      ======================================================== */}
      <section id="upcoming-events" className="scroll-mt-32 border-b border-[#E5E5E5] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-black pb-4 gap-4">
            <div className="space-y-2">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#081757] font-bold block">
                SECTION 01
              </span>
              <h2 className="font-roboto font-bold text-3xl sm:text-5xl text-[#081757]">
                Upcoming Events
              </h2>
              <p className="font-merriweather font-light text-xs sm:text-sm text-black italic">
                Scheduled vernissages, live curatorial panels, and private collector viewings.
              </p>
            </div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#888888] font-bold font-mono">
              SEASON 2026 / 2027
            </span>
          </div>

          {/* Upcoming Event Cards Grid */}
          <div className="space-y-8">
            {upcomingEvents.map((ev) => (
              <div
                key={ev.id}
                className="border border-[#E5E5E5] bg-white p-6 sm:p-10 transition-all hover:border-[#081757] hover:shadow-md space-y-6 group"
              >
                {/* Meta Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#EEEEEE] pb-5">
                  <div className="flex items-center gap-4">
                    {/* Date Block */}
                    <div className="bg-[#081757] text-white px-4 py-3 text-center shrink-0 min-w-[90px]">
                      <span className="font-roboto font-bold text-lg sm:text-xl block leading-none">
                        {ev.displayDate.split(" ")[0]}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-[#B0C4DE] font-semibold mt-0.5 block">
                        {ev.displayDate.split(" ")[1]} 2026
                      </span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[#081757] font-bold">
                        {ev.type}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl text-black group-hover:text-[#081757] transition-colors">
                        {ev.title}
                      </h3>
                    </div>
                  </div>

                  {/* Badges / Admission */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 bg-[#FAFAFA] border border-[#E5E5E5] text-[10px] uppercase tracking-wider font-semibold text-black flex items-center gap-1.5">
                      <Clock size={12} className="text-[#081757]" />
                      <span>{ev.time}</span>
                    </span>
                    <span className="px-3 py-1 bg-[#FAFAFA] border border-[#E5E5E5] text-[10px] uppercase tracking-wider font-semibold text-black flex items-center gap-1.5">
                      <MapPin size={12} className="text-[#081757]" />
                      <span>{ev.location}</span>
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-8 space-y-3">
                    <p className="font-merriweather text-xs sm:text-sm text-[#444444] leading-relaxed italic">
                      {ev.description}
                    </p>

                    {/* Participating Artists Strip */}
                    <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
                      <span className="text-[10px] uppercase tracking-widest text-[#888888] font-bold">
                        PARTICIPANTS:
                      </span>
                      {ev.participatingArtists.map((artist) => (
                        <span
                          key={artist}
                          className="px-2.5 py-0.5 bg-[#FAFAFA] border border-[#E5E5E5] text-[11px] font-medium text-black"
                        >
                          {artist}
                        </span>
                      ))}
                      {ev.curator && (
                        <span className="text-[11px] text-[#777777] italic ml-2">
                          Curated by {ev.curator}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch lg:items-end justify-center gap-3">
                    <button
                      onClick={() => openRsvp(ev)}
                      className="bg-[#081757] hover:bg-black text-white px-6 py-3 text-[10px] uppercase tracking-[0.25em] font-roboto font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <Ticket size={13} />
                      <span>RESERVE INVITATION / RSVP</span>
                    </button>
                    <button
                      onClick={() => openEnquiry(null)}
                      className="border border-[#CCCCCC] hover:border-black text-black px-6 py-2.5 text-[10px] uppercase tracking-[0.22em] font-roboto font-medium transition-colors text-center cursor-pointer"
                    >
                      <span>INQUIRE VENUE / DETAILS</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Placeholder Notice for Cloud Gallery Additions */}
            <div className="p-8 border border-dashed border-[#CCCCCC] bg-[#FAFAFA] text-center space-y-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#888888] font-bold block">
                UPCOMING SALON SCHEDULE EXPANSION
              </span>
              <p className="font-merriweather text-xs sm:text-sm text-[#666666] italic max-w-xl mx-auto">
                Additional private collector viewings and symposium dates for Winter 2026/2027 will be announced following curatorial confirmations. [Details to be added by Cloud Gallery]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 2: PAST EVENTS & ARCHIVES
      ======================================================== */}
      <section id="past-events" className="scroll-mt-32 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-black pb-4 gap-4">
            <div className="space-y-2">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#081757] font-bold block">
                SECTION 02
              </span>
              <h2 className="font-roboto font-bold text-3xl sm:text-5xl text-[#081757]">
                Past Events
              </h2>
              <p className="font-merriweather font-light text-xs sm:text-sm text-black italic">
                Permanent records, historical vernissages, catalogues, and institutional collaborations.
              </p>
            </div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#888888] font-bold font-mono">
              RETROSPECTIVE DOSSIERS
            </span>
          </div>

          {/* Past Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((ev) => (
              <div
                key={ev.id}
                className="bg-white border border-[#E5E5E5] p-8 sm:p-10 space-y-6 shadow-xs hover:border-[#081757] transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Meta Bar */}
                  <div className="flex items-center justify-between border-b border-[#EEEEEE] pb-3 text-xs">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#081757] font-bold">
                      {ev.type} ARCHIVE
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#777777] bg-[#FAFAFA] px-2 py-0.5 border border-[#E5E5E5]">
                      {ev.displayDate}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-black">
                    {ev.title}
                  </h3>

                  <div className="space-y-1 text-xs text-[#666666]">
                    <p className="flex items-center gap-1.5 text-black font-medium">
                      <MapPin size={12} className="text-[#081757]" />
                      <span>{ev.location}</span>
                    </p>
                  </div>

                  <p className="font-merriweather text-xs text-[#555555] leading-relaxed italic">
                    {ev.description}
                  </p>

                  {/* Participating Artists */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {ev.participatingArtists.map((artist) => (
                      <span
                        key={artist}
                        className="px-2 py-0.5 bg-[#FAFAFA] border border-[#E5E5E5] text-[10px] uppercase tracking-wider font-medium text-black"
                      >
                        {artist}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-6 border-t border-[#EEEEEE] flex items-center justify-between text-xs">
                  <span className="font-merriweather text-[11px] text-[#888888] italic">
                    Archival catalogue on file.
                  </span>
                  <button
                    onClick={() => openEnquiry(null)}
                    className="text-[10px] uppercase tracking-[0.2em] font-roboto font-bold text-[#081757] hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>REQUEST CATALOGUE / DOSSIER</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Historical Highlights Timeline Bar */}
          <div className="p-8 sm:p-10 bg-white border border-[#E5E5E5] space-y-6">
            <div className="flex items-center justify-between border-b border-[#EEEEEE] pb-4">
              <div className="flex items-center gap-2">
                <Archive size={16} className="text-[#081757]" />
                <h3 className="font-roboto font-bold text-xs uppercase tracking-[0.25em] text-black">
                  Exhibition Archives & Institutional Milestones
                </h3>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#888888] font-mono">
                2018 – 2026
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
              <div className="space-y-1 border-l-2 border-[#081757] pl-3">
                <span className="font-mono text-[10px] font-bold text-[#081757]">2025</span>
                <p className="font-semibold text-black">Kunsthaus Cloister Installation</p>
                <p className="font-merriweather text-[11px] text-[#666666] italic">Zurich diabase stone placement.</p>
              </div>
              <div className="space-y-1 border-l-2 border-[#CCCCCC] pl-3">
                <span className="font-mono text-[10px] font-bold text-[#777777]">2024</span>
                <p className="font-semibold text-black">Kyoto Wood-Kiln Exposition</p>
                <p className="font-merriweather text-[11px] text-[#666666] italic">Porcelain & wild clay studies.</p>
              </div>
              <div className="space-y-1 border-l-2 border-[#CCCCCC] pl-3">
                <span className="font-mono text-[10px] font-bold text-[#777777]">2022</span>
                <p className="font-semibold text-black">Mineral & Canvas Basel Vernissage</p>
                <p className="font-merriweather text-[11px] text-[#666666] italic">Twenty large-format canvases.</p>
              </div>
              <div className="space-y-1 border-l-2 border-[#CCCCCC] pl-3">
                <span className="font-mono text-[10px] font-bold text-[#777777]">2020</span>
                <p className="font-semibold text-black">Engadin Pavilion Residence</p>
                <p className="font-merriweather text-[11px] text-[#666666] italic">Charred cedar alpine architecture.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
