"use client";

import React, { useState } from "react";
import { useGallery } from "@/context/GalleryContext";
import { X, Calendar, MapPin, Check } from "lucide-react";

export default function RSVPModal() {
  const { isRsvpOpen, selectedEvent, closeRsvp } = useGallery();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState("1");
  const [submitted, setSubmitted] = useState(false);

  if (!isRsvpOpen || !selectedEvent) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setTimeout(() => {
        closeRsvp();
        setSubmitted(false);
      }, 1800);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-[#F4F0EA] border border-[#E2DDD4] p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeRsvp}
          aria-label="Close modal"
          className="absolute top-6 right-6 p-2 text-[#7E7971] hover:text-[#2B2A27] transition-colors"
        >
          <X size={20} strokeWidth={1.5} />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#8C6D53]/10 border border-[#8C6D53]/30 flex items-center justify-center text-[#8C6D53]">
              <Check size={20} strokeWidth={2} />
            </div>
            <h3 className="font-serif text-2xl text-[#2B2A27]">Guest List Confirmed</h3>
            <p className="text-xs text-[#7E7971] leading-relaxed max-w-sm mx-auto">
              Your registration for <strong>{selectedEvent.title}</strong> has been secured for {guests} {parseInt(guests) > 1 ? "guests" : "guest"}. An entry pass will be emailed to {email}.
            </p>
          </div>
        ) : (
          <div>
            <div className="border-b border-[#E2DDD4] pb-4 mb-5">
              <span className="text-[11px] tracking-[0.25em] uppercase text-[#8C6D53] font-medium block mb-1.5">
                {selectedEvent.type}
              </span>
              <h3 className="font-serif text-2xl text-[#2B2A27]">
                {selectedEvent.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-4 text-xs text-[#7E7971]">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} strokeWidth={1.5} className="text-[#8C6D53]" />
                  {selectedEvent.date} · {selectedEvent.time}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} strokeWidth={1.5} className="text-[#8C6D53]" />
                  {selectedEvent.location}
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#7E7971] mb-1 font-medium">
                  Primary Attendee Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Julian Sörensen"
                  className="w-full bg-[#EAE5DC]/40 border border-[#E2DDD4] px-3.5 py-2.5 text-sm text-[#2B2A27] placeholder:text-[#7E7971]/50 focus:outline-none focus:border-[#8C6D53]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#7E7971] mb-1 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. julian@arch.ch"
                    className="w-full bg-[#EAE5DC]/40 border border-[#E2DDD4] px-3.5 py-2.5 text-sm text-[#2B2A27] placeholder:text-[#7E7971]/50 focus:outline-none focus:border-[#8C6D53]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#7E7971] mb-1 font-medium">
                    Party Size
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-[#EAE5DC]/40 border border-[#E2DDD4] px-3 py-2.5 text-sm text-[#2B2A27] focus:outline-none focus:border-[#8C6D53]"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons (Private Salon)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <p className="text-[11px] text-[#7E7971]">
                  Complimentary attendance.
                </p>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#2B2A27] hover:bg-[#8C6D53] text-[#F4F0EA] text-xs uppercase tracking-widest font-medium transition-colors"
                >
                  Reserve Place
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
