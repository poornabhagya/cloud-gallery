"use client";

import React, { useState, useEffect } from "react";
import { useGallery } from "@/context/GalleryContext";
import { X, Check } from "lucide-react";
import Image from "next/image";

export default function EnquiryModal() {
  const { isEnquiryOpen, selectedArtwork, closeEnquiry } = useGallery();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [collectorType, setCollectorType] = useState("Private Collector");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedArtwork) {
      setMessage(`I am enquiring regarding the availability, provenance, and acquisition details of "${selectedArtwork.title}" (${selectedArtwork.year}) by ${selectedArtwork.artist}.`);
    } else {
      setMessage("I would like to enquire with Cloud Gallery regarding acquisitions and private viewings.");
    }
    setSubmitted(false);
  }, [selectedArtwork, isEnquiryOpen]);

  if (!isEnquiryOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setTimeout(() => {
        closeEnquiry();
        setSubmitted(false);
      }, 1800);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-[#F4F0EA] border border-[#E2DDD4] shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeEnquiry}
          aria-label="Close modal"
          className="absolute top-6 right-6 p-2 text-[#7E7971] hover:text-[#2B2A27] transition-colors"
        >
          <X size={20} strokeWidth={1.5} />
        </button>

        {submitted ? (
          <div className="py-16 text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#8C6D53]/10 border border-[#8C6D53]/30 flex items-center justify-center text-[#8C6D53]">
              <Check size={20} strokeWidth={2} />
            </div>
            <h3 className="font-serif text-3xl text-[#2B2A27]">Enquiry Received</h3>
            <p className="text-sm text-[#7E7971] max-w-md mx-auto leading-relaxed">
              Thank you, {name || "esteemed collector"}. A gallery director from our Zurich or Copenhagen salon will contact you within 24 hours with confidential details.
            </p>
          </div>
        ) : (
          <div>
            <div className="border-b border-[#E2DDD4] pb-6 mb-6">
              <span className="text-[11px] tracking-[0.25em] uppercase text-[#8C6D53] font-medium block mb-2">
                ACQUISITION & CONCIERGE
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2B2A27]">
                Private Artwork Enquiry
              </h2>
              <p className="text-xs text-[#7E7971] mt-1 font-light tracking-wide">
                Direct curatorial liaison for institutional and private collections.
              </p>
            </div>

            {selectedArtwork && (
              <div className="flex items-center gap-4 p-4 bg-[#EAE5DC]/60 border border-[#E2DDD4] mb-6">
                <div className="relative w-16 h-20 bg-stone-300 flex-shrink-0 overflow-hidden">
                  <Image
                    src={selectedArtwork.image}
                    alt={selectedArtwork.title}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif text-base italic text-[#2B2A27] truncate">
                    {selectedArtwork.title}
                  </h4>
                  <p className="text-xs text-[#7E7971] tracking-wider uppercase mt-0.5">
                    {selectedArtwork.artist} · {selectedArtwork.year}
                  </p>
                  <p className="text-xs text-[#8C6D53] font-medium mt-1">
                    {selectedArtwork.price}
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#7E7971] mb-1.5 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full bg-[#EAE5DC]/40 border border-[#E2DDD4] px-3.5 py-2.5 text-sm text-[#2B2A27] placeholder:text-[#7E7971]/50 focus:outline-none focus:border-[#8C6D53] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#7E7971] mb-1.5 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. eleanor@vance-studio.com"
                    className="w-full bg-[#EAE5DC]/40 border border-[#E2DDD4] px-3.5 py-2.5 text-sm text-[#2B2A27] placeholder:text-[#7E7971]/50 focus:outline-none focus:border-[#8C6D53] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#7E7971] mb-1.5 font-medium">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+41 ..."
                    className="w-full bg-[#EAE5DC]/40 border border-[#E2DDD4] px-3.5 py-2.5 text-sm text-[#2B2A27] placeholder:text-[#7E7971]/50 focus:outline-none focus:border-[#8C6D53] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#7E7971] mb-1.5 font-medium">
                    Collector Profile
                  </label>
                  <select
                    value={collectorType}
                    onChange={(e) => setCollectorType(e.target.value)}
                    className="w-full bg-[#EAE5DC]/40 border border-[#E2DDD4] px-3 py-2.5 text-sm text-[#2B2A27] focus:outline-none focus:border-[#8C6D53] transition-colors"
                  >
                    <option value="Private Collector">Private Collector</option>
                    <option value="Architectural Studio">Architectural / Interior Studio</option>
                    <option value="Museum / Foundation">Museum / Public Institution</option>
                    <option value="Art Advisor">Art Advisor / Consultant</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#7E7971] mb-1.5 font-medium">
                  Message & Spatial Context
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#EAE5DC]/40 border border-[#E2DDD4] p-3 text-sm text-[#2B2A27] focus:outline-none focus:border-[#8C6D53] transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <p className="text-[11px] text-[#7E7971]">
                  Discreet handling. No public register.
                </p>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#2B2A27] hover:bg-[#8C6D53] text-[#F4F0EA] text-xs uppercase tracking-widest font-medium transition-colors"
                >
                  Submit Enquiry
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
