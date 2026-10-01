"use client";

import React, { useState } from "react";
import Image from "next/image";
import { EVENTS_DATA, GalleryEvent } from "@/data/mockData";
import { useGallery } from "@/context/GalleryContext";
import { Calendar, MapPin, Clock, ArrowRight, User, Users, Ticket, Download, Filter } from "lucide-react";

export default function EventsPage() {
  const { openRsvp, openEnquiry } = useGallery();
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const [selectedType, setSelectedType] = useState<string>("All");

  const EVENT_TYPES = [
    "All",
    "Exhibition",
    "Art Show",
    "Workshop",
    "Artist Talk",
    "Launch",
    "Collaboration",
    "Event",
  ];

  const events = EVENTS_DATA.filter((e) => {
    const matchesTab = activeTab === "upcoming" ? !e.isPast : e.isPast;
    const matchesType = selectedType === "All" ? true : e.type === selectedType;
    return matchesTab && matchesType;
  });

  // Group by month
  const groupedEvents: { [month: string]: GalleryEvent[] } = {};
  events.forEach((ev) => {
    if (!groupedEvents[ev.monthGroup]) {
      groupedEvents[ev.monthGroup] = [];
    }
    groupedEvents[ev.monthGroup].push(ev);
  });

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
            AUCTION CALENDAR & VERNISSAGES · AUTUMN 2026
          </span>
        </div>
      </section>

      {/* ========================================================
          HEADER (SOTHEBY'S CALENDAR & AUCTIONS)
      ======================================================== */}
      <section className="border-b border-[#E5E5E5] bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] tracking-[0.3em] uppercase text-black font-semibold bg-[#FAFAFA] border border-[#E5E5E5] px-2.5 py-1">
              AUCTION CALENDAR, VERNISSAGES & SYMPOSIUMS
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-black font-normal leading-tight">
            Cloud Events & Auctions
          </h1>
          <p className="text-xs sm:text-sm text-[#555555] max-w-2xl font-light leading-relaxed">
            Gatherings at the intersection of architecture, sound, and monolithic stone sculpture. Intimate vernissages, live curatorial symposiums, private collector viewings, and exhibition launches across Zurich, Copenhagen, and Kyoto.
          </p>
        </div>
      </section>

      {/* ========================================================
          TABS & TYPE FILTER CONTROLS
      ======================================================== */}
      <section className="border-b border-[#E5E5E5] bg-white sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#EEEEEE] gap-4">
            {/* Upcoming vs Past Tabs */}
            <div className="flex items-center space-x-8">
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`py-4 text-xs uppercase tracking-[0.25em] font-semibold transition-all relative ${
                  activeTab === "upcoming"
                    ? "text-black"
                    : "text-[#777777] hover:text-black"
                }`}
              >
                Upcoming Salons & Auctions
                {activeTab === "upcoming" && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />
                )}
              </button>

              <button
                onClick={() => setActiveTab("past")}
                className={`py-4 text-xs uppercase tracking-[0.25em] font-semibold transition-all relative ${
                  activeTab === "past"
                    ? "text-black"
                    : "text-[#777777] hover:text-black"
                }`}
              >
                Past Archives & Catalogues
                {activeTab === "past" && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />
                )}
              </button>
            </div>

            {/* Total count */}
            <span className="text-xs uppercase tracking-wider text-[#666666] font-medium hidden sm:block">
              {events.length} {events.length === 1 ? "Program" : "Programs"} Catalogued
            </span>
          </div>

          {/* Event Type Filter Pills */}
          <div className="py-2.5 flex items-center space-x-1.5 overflow-x-auto no-scrollbar">
            <span className="text-[10px] uppercase tracking-widest text-black font-semibold pr-2 hidden md:inline-flex items-center gap-1">
              <Filter size={11} />
              Type:
            </span>
            {EVENT_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-3 py-1 text-[10px] uppercase tracking-wider whitespace-nowrap transition-all border ${
                  selectedType === type
                    ? "bg-black text-white border-black font-medium"
                    : "bg-[#FAFAFA] text-[#555555] hover:text-black border-[#E5E5E5]"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          MONTHLY GROUPED EVENTS STREAM
          (Group by months: SEPTEMBER 2026, OCTOBER 2026, NOVEMBER 2026...)
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {Object.keys(groupedEvents).length === 0 ? (
          <div className="py-24 text-center text-[#666666] font-serif text-2xl border border-[#E5E5E5] bg-[#FAFAFA]">
            No events scheduled under the selected filter.
          </div>
        ) : (
          Object.entries(groupedEvents).map(([month, monthEvs]) => (
            <div key={month} className="space-y-6">
              {/* Month Group Header */}
              <div className="border-b-2 border-black pb-2 flex items-baseline justify-between">
                <h2 className="font-serif text-2xl text-black font-normal tracking-wide">
                  {month}
                </h2>
                <span className="text-xs uppercase tracking-widest text-[#666666]">
                  {monthEvs.length} {monthEvs.length === 1 ? "Event" : "Events"}
                </span>
              </div>

              {/* Event Cards */}
              <div className="space-y-4">
                {monthEvs.map((ev) => (
                  <div
                    key={ev.id}
                    className="p-6 sm:p-8 bg-white border border-[#E5E5E5] hover:border-black transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-xs"
                  >
                    {/* Left: Date Badge & Event Details */}
                    <div className="flex items-start sm:items-center gap-6">
                      {/* Date Block */}
                      <div className="w-18 h-18 sm:w-22 sm:h-22 bg-[#FAFAFA] border border-[#E5E5E5] flex flex-col items-center justify-center flex-shrink-0 text-center p-2">
                        <span className="font-serif text-2xl sm:text-3xl text-black font-semibold leading-none">
                          {ev.displayDate.split(" ")[0]}
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-black font-semibold mt-1">
                          {ev.displayDate.split(" ")[1]}
                        </span>
                      </div>

                      {/* Event Meta: Title | Location | Description | Artists */}
                      <div className="space-y-2 max-w-2xl">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2.5 py-0.5 bg-black text-white text-[9px] uppercase tracking-widest font-semibold">
                            {ev.type}
                          </span>
                          {ev.curator && (
                            <span className="text-[11px] text-[#666666] flex items-center gap-1">
                              <User size={11} className="text-black" />
                              Curated by {ev.curator}
                            </span>
                          )}
                        </div>

                        <h3 className="font-serif text-2xl sm:text-3xl text-black italic">
                          {ev.title}
                        </h3>

                        <p className="text-xs text-[#555555] leading-relaxed font-light">
                          {ev.description}
                        </p>

                        {/* Participating Artists */}
                        {ev.participatingArtists && ev.participatingArtists.length > 0 && (
                          <div className="flex items-center gap-2 text-xs text-black pt-0.5 font-medium">
                            <Users size={12} className="text-[#666666]" />
                            <span className="text-[11px] uppercase tracking-wider text-[#666666]">Participating Artists:</span>
                            <span className="text-[11px]">{ev.participatingArtists.join(" · ")}</span>
                          </div>
                        )}

                        {/* Date & Location */}
                        <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#666666] border-t border-[#EEEEEE]">
                          <span className="flex items-center gap-1.5 font-medium text-black">
                            <Clock size={13} />
                            {ev.time}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin size={13} />
                            {ev.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Actions (Register / Enquire / Download Catalogue) */}
                    <div className="flex-shrink-0 pt-2 lg:pt-0 flex flex-col sm:flex-row lg:flex-col gap-2">
                      {ev.isPast ? (
                        <div className="space-y-2">
                          <span className="block px-5 py-2 bg-[#FAFAFA] text-[#777777] text-xs uppercase tracking-widest border border-[#E5E5E5] text-center">
                            Archived Program
                          </span>
                          <button
                            onClick={() => openEnquiry(null)}
                            className="w-full flex items-center justify-center gap-1.5 px-4 py-2 border border-[#CCCCCC] text-[10px] uppercase tracking-wider text-black hover:bg-black hover:text-white transition-colors"
                          >
                            <Download size={12} />
                            <span>Request Catalogue PDF</span>
                          </button>
                        </div>
                      ) : (
                        <>
                          <button
                            onClick={() => openRsvp(ev)}
                            className="w-full sm:w-auto px-7 py-3 bg-black hover:bg-[#222222] text-white text-xs uppercase tracking-widest font-medium transition-colors"
                          >
                            Register / RSVP
                          </button>
                          <button
                            onClick={() => openEnquiry(null)}
                            className="w-full sm:w-auto px-5 py-2 border border-black hover:bg-[#FAFAFA] text-black text-[10px] uppercase tracking-widest font-medium transition-colors"
                          >
                            Private Viewing Enquiry
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
}
