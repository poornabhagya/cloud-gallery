"use client";

import React, { useState, useEffect } from "react";
import { useGallery } from "@/context/GalleryContext";
import { X, Check, ShieldCheck, Mail, Phone, Building } from "lucide-react";
import Image from "next/image";

export default function EnquiryModal() {
  const { isEnquiryOpen, selectedArtwork, closeEnquiry } = useGallery();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [collectorType, setCollectorType] = useState("Private Collector");
  const [enquiryType, setEnquiryType] = useState<"Acquisition" | "Private Sale" | "Consignment" | "Condition Report">("Acquisition");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedArtwork) {
      setMessage(`I am enquiring regarding ${selectedArtwork.lotNumber || "Lot"} - "${selectedArtwork.title}" (${selectedArtwork.year}) by ${selectedArtwork.artist}. Please provide full provenance details, high-resolution condition reports, and acquisition instructions.`);
    } else {
      setMessage("I would like to enquire with Cloud Gallery regarding private acquisitions, valuations, and private salon viewings.");
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xs animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-white border border-[#E5E5E5] shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeEnquiry}
          aria-label="Close modal"
          className="absolute top-6 right-6 p-2 text-[#666666] hover:text-black transition-colors"
        >
          <X size={20} strokeWidth={1.5} />
        </button>

        {submitted ? (
          <div className="py-16 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-black text-white flex items-center justify-center">
              <Check size={24} strokeWidth={2} />
            </div>
            <h3 className="font-serif text-3xl text-black">Private Enquiry Received</h3>
            <p className="text-xs text-[#555555] max-w-md mx-auto leading-relaxed">
              Thank you, {name || "Collector"}. A Senior Specialist from our Private Sales Liaison Office in Zurich will contact you directly within 24 hours.
            </p>
          </div>
        ) : (
          <div>
            <div className="border-b border-[#E5E5E5] pb-5 mb-6">
              <span className="text-[10px] tracking-[0.25em] uppercase text-black font-semibold block mb-1">
                SOTHEBY&apos;S STYLE PRIVATE SALES DESK
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-black">
                Artwork Acquisition & Enquiry
              </h2>
              <p className="text-xs text-[#666666] mt-1 font-light">
                Direct curatorial liaison for institutional collections, architects, and private patrons.
              </p>
            </div>

            {selectedArtwork && (
              <div className="flex items-center gap-4 p-4 bg-[#FAFAFA] border border-[#E5E5E5] mb-6">
                <div className="relative w-16 h-20 bg-[#EEEEEE] flex-shrink-0 overflow-hidden border border-[#E5E5E5]">
                  <Image
                    src={selectedArtwork.image}
                    alt={selectedArtwork.title}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[9px] uppercase tracking-widest text-[#666666] block">
                    {selectedArtwork.lotNumber || "CATALOGUED LOT"} · {selectedArtwork.category}
                  </span>
                  <h4 className="font-serif text-lg text-black truncate italic">
                    {selectedArtwork.title}
                  </h4>
                  <p className="text-xs text-[#555555] tracking-wider uppercase mt-0.5">
                    {selectedArtwork.artist} · {selectedArtwork.year}
                  </p>
                  <p className="text-xs font-semibold text-black mt-1">
                    Price / Valuation: {selectedArtwork.price}
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1.5 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Lord Eleanor Vance"
                    className="w-full bg-white border border-[#CCCCCC] px-3.5 py-2.5 text-xs text-black placeholder:text-[#999999] focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1.5 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. collector@vance-holdings.ch"
                    className="w-full bg-white border border-[#CCCCCC] px-3.5 py-2.5 text-xs text-black placeholder:text-[#999999] focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1.5 font-medium">
                    Phone / WhatsApp (Optional)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+41 44 ..."
                    className="w-full bg-white border border-[#CCCCCC] px-3.5 py-2.5 text-xs text-black placeholder:text-[#999999] focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1.5 font-medium">
                    Collector Profile
                  </label>
                  <select
                    value={collectorType}
                    onChange={(e) => setCollectorType(e.target.value)}
                    className="w-full bg-white border border-[#CCCCCC] px-3 py-2.5 text-xs text-black focus:outline-none focus:border-black transition-colors"
                  >
                    <option value="Private Collector">Private Collector</option>
                    <option value="Architectural Studio">Architectural / Interior Studio</option>
                    <option value="Museum / Foundation">Museum / Public Institution</option>
                    <option value="Art Advisor">Art Advisor / Consultant</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1.5 font-medium">
                  Enquiry Specifics & Instructions
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white border border-[#CCCCCC] p-3 text-xs text-black focus:outline-none focus:border-black transition-colors resize-none leading-relaxed"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-[#E5E5E5]">
                <div className="flex items-center gap-1.5 text-[10px] text-[#666666]">
                  <ShieldCheck size={13} className="text-black" />
                  <span>Strictly confidential. No public registry.</span>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3 bg-black hover:bg-[#222222] text-white text-xs uppercase tracking-widest font-medium transition-colors"
                >
                  Submit Private Enquiry
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
