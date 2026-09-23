"use client";

import React, { useState } from "react";
import { EVENTS_DATA, GalleryEvent } from "@/data/mockData";
import { useGallery } from "@/context/GalleryContext";
import { Calendar, MapPin, Clock, ArrowRight, User } from "lucide-react";

export default function EventsPage() {
  const { openRsvp } = useGallery();
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  const events = EVENTS_DATA.filter((e) =>
    activeTab === "upcoming" ? !e.isPast : e.isPast
  );

  // Group by month
  const groupedEvents: { [month: string]: GalleryEvent[] } = {};
  events.forEach((ev) => {
    if (!groupedEvents[ev.monthGroup]) {
      groupedEvents[ev.monthGroup] = [];
    }
    groupedEvents[ev.monthGroup].push(ev);
  });

  return (
    <div className="w-full min-h-screen pb-32">
      {/* Header */}
      <section className="bg-[#EAE5DC] border-b border-[#E2DDD4] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-[11px] tracking-[0.35em] uppercase text-[#8C6D53] font-medium block">
            SALON & EXHIBITION CALENDAR
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#2B2A27] font-light">
            Cloud Events & Vernissages
          </h1>
          <p className="text-xs sm:text-sm text-[#7E7971] max-w-2xl font-light leading-relaxed">
            Gatherings at the intersection of architecture, sound, and monolithic sculpture. Intimate vernissages, curatorial symposiums, and private salon viewings.
          </p>
        </div>
      </section>

      {/* Tabs Switcher */}
      <section className="border-b border-[#E2DDD4] bg-[#F4F0EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-8">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`py-5 text-xs uppercase tracking-[0.25em] font-medium transition-all relative ${
              activeTab === "upcoming"
                ? "text-[#2B2A27]"
                : "text-[#7E7971] hover:text-[#2B2A27]"
            }`}
          >
            Upcoming Salons & Vernissages
            {activeTab === "upcoming" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8C6D53]" />
            )}
          </button>

          <button
            onClick={() => setActiveTab("past")}
            className={`py-5 text-xs uppercase tracking-[0.25em] font-medium transition-all relative ${
              activeTab === "past"
                ? "text-[#2B2A27]"
                : "text-[#7E7971] hover:text-[#2B2A27]"
            }`}
          >
            Past Archives
            {activeTab === "past" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8C6D53]" />
            )}
          </button>
        </div>
      </section>

      {/* Monthly Grouped Events Stream */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {Object.keys(groupedEvents).length === 0 ? (
          <div className="py-24 text-center text-[#7E7971] font-serif text-xl">
            No events cataloged in this period.
          </div>
        ) : (
          Object.entries(groupedEvents).map(([month, monthEvs]) => (
            <div key={month} className="space-y-6">
              {/* Month Group Header */}
              <div className="border-b border-[#E2DDD4] pb-2 flex items-baseline justify-between">
                <h2 className="text-xs uppercase tracking-[0.35em] text-[#8C6D53] font-semibold">
                  {month}
                </h2>
                <span className="text-[11px] text-[#7E7971]">
                  {monthEvs.length} {monthEvs.length === 1 ? "Program" : "Programs"}
                </span>
              </div>

              {/* Event Cards */}
              <div className="space-y-4">
                {monthEvs.map((ev) => (
                  <div
                    key={ev.id}
                    className="p-6 sm:p-8 bg-[#F4F0EA] border border-[#E2DDD4] hover:border-[#8C6D53] transition-colors flex flex-col lg:flex-row lg:items-center justify-between gap-6"
                  >
                    {/* Left: Date Badge & Type */}
                    <div className="flex items-start sm:items-center gap-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#EAE5DC] border border-[#E2DDD4] flex flex-col items-center justify-center flex-shrink-0 text-center">
                        <span className="font-serif text-xl sm:text-2xl text-[#2B2A27] font-semibold leading-none">
                          {ev.displayDate.split(" ")[0]}
                        </span>
                        <span className="text-[9px] uppercase tracking-widest text-[#8C6D53] font-medium mt-1">
                          {ev.displayDate.split(" ")[1]}
                        </span>
                      </div>

                      <div className="space-y-1.5 max-w-xl">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 bg-[#EAE5DC] text-[#8C6D53] text-[9px] uppercase tracking-widest font-semibold border border-[#E2DDD4]">
                            {ev.type}
                          </span>
                          {ev.curator && (
                            <span className="text-[11px] text-[#7E7971] flex items-center gap-1">
                              <User size={11} />
                              Curated by {ev.curator}
                            </span>
                          )}
                        </div>

                        <h3 className="font-serif text-2xl sm:text-3xl text-[#2B2A27]">
                          {ev.title}
                        </h3>

                        <p className="text-xs text-[#7E7971] leading-relaxed font-light">
                          {ev.description}
                        </p>

                        <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#7E7971]">
                          <span className="flex items-center gap-1.5">
                            <Clock size={13} className="text-[#8C6D53]" />
                            {ev.time}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin size={13} className="text-[#8C6D53]" />
                            {ev.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right: RSVP Trigger */}
                    <div className="flex-shrink-0 pt-2 lg:pt-0">
                      {ev.isPast ? (
                        <span className="px-5 py-2.5 bg-[#EAE5DC] text-[#7E7971] text-xs uppercase tracking-widest border border-[#E2DDD4]">
                          Archived Event
                        </span>
                      ) : (
                        <button
                          onClick={() => openRsvp(ev)}
                          className="w-full sm:w-auto px-6 py-3 bg-[#2B2A27] hover:bg-[#8C6D53] text-[#F4F0EA] text-xs uppercase tracking-widest font-medium transition-colors"
                        >
                          Register / RSVP
                        </button>
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
