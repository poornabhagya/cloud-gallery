"use client";

import React, { useState } from "react";
import { useGallery } from "@/context/GalleryContext";
import { X, Calendar, MapPin, Check, Ticket } from "lucide-react";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fade-in">
      <div
        className="relative w-full max-w-lg bg-white border border-[#E5E5E5] p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeRsvp}
          aria-label="Close modal"
          className="absolute top-6 right-6 p-2 text-[#666666] hover:text-black transition-colors"
        >
          <X size={20} strokeWidth={1.5} />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-black text-white flex items-center justify-center">
              <Check size={24} strokeWidth={2} />
            </div>
            <h3 className="font-serif text-2xl text-black">Guest List Confirmed</h3>
            <p className="text-xs text-[#555555] leading-relaxed max-w-sm mx-auto">
              Your registration for <strong>{selectedEvent.title}</strong> has been secured for {guests} {parseInt(guests) > 1 ? "guests" : "guest"}. An encrypted digital salon pass has been dispatched to {email}.
            </p>
          </div>
        ) : (
          <div>
            <div className="border-b border-[#E5E5E5] pb-4 mb-5">
              <div className="flex items-center gap-2 mb-1.5">
                <Ticket size={14} className="text-black" />
                <span className="text-[10px] tracking-[0.25em] uppercase text-black font-semibold">
                  {selectedEvent.type} · GUEST LIST RESERVATION
                </span>
              </div>
              <h3 className="font-serif text-2xl text-black leading-snug">
                {selectedEvent.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-4 text-xs text-[#555555]">
                <span className="flex items-center gap-1.5 font-medium text-black">
                  <Calendar size={13} />
                  {selectedEvent.date} · {selectedEvent.time}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} />
                  {selectedEvent.location}
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1 font-medium">
                  Primary Attendee Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Julian Sörensen"
                  className="w-full bg-white border border-[#CCCCCC] px-3.5 py-2.5 text-xs text-black placeholder:text-[#999999] focus:outline-none focus:border-black"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. julian@arch.ch"
                    className="w-full bg-white border border-[#CCCCCC] px-3.5 py-2.5 text-xs text-black placeholder:text-[#999999] focus:outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1 font-medium">
                    Party Size
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-white border border-[#CCCCCC] px-3 py-2.5 text-xs text-black focus:outline-none focus:border-black"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons (Private Salon)</option>
                  </select>
                </div>
              </div>

              <div className="pt-3 flex items-center justify-between border-t border-[#E5E5E5]">
                <p className="text-[10px] text-[#777777]">
                  Complimentary collector entry.
                </p>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-black hover:bg-[#222222] text-white text-xs uppercase tracking-widest font-medium transition-colors"
                >
                  Confirm Guest Pass
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
