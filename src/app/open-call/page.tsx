"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  UploadCloud,
  Check,
  ArrowRight,
  ShieldCheck,
  Globe,
  Building,
} from "lucide-react";

type FormTab = "artists" | "collaborators" | "events" | "general";

export default function OpenCallPage() {
  const [activeTab, setActiveTab] = useState<FormTab>("artists");
  const [submitted, setSubmitted] = useState(false);

  // Artist Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [portfolioLink, setPortfolioLink] = useState("");
  const [discipline, setDiscipline] = useState("Stone & Granite Sculpture");
  const [statement, setStatement] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);

  // Collaborator states
  const [collabType, setCollabType] = useState("Architectural Studio / Pavilion");
  const [proposal, setProposal] = useState("");

  // Event states
  const [eventConcept, setEventConcept] = useState("");
  const [proposedDate, setProposedDate] = useState("");
  const [estimatedGuests, setEstimatedGuests] = useState("30–60 (Cloister Lecture)");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setName("");
      setEmail("");
      setPortfolioLink("");
      setStatement("");
      setProposal("");
      setEventConcept("");
      setFileName(null);
      setSubmitted(false);
    }, 4500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="w-full bg-white text-black min-h-screen pb-32">
      {/* ========================================================
          FULL-BLEED HERO IMAGE (SOTHEBY'S OPEN CALL & LIAISON)
      ======================================================== */}
      <section className="relative w-full h-[360px] sm:h-[460px] lg:h-[520px] bg-black overflow-hidden border-b border-[#E5E5E5]">
        <Image
          src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=2600&q=90"
          alt="Cloud Open Call, Atelier Submissions and Curatorial Coordinates"
          fill
          priority
          className="object-cover object-center brightness-[0.88] contrast-[1.05]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
        <div className="absolute bottom-6 left-6 sm:left-12 text-white">
          <span className="text-[10px] tracking-[0.3em] uppercase bg-black/75 backdrop-blur-xs px-3 py-1 border border-white/20 font-medium">
            PORTFOLIO SUBMISSIONS, CONSIGNMENT & CURATORIAL LIAISON
          </span>
        </div>
      </section>

      {/* ========================================================
          HEADER (SOTHEBY'S CONSIGNMENT & OPEN CALL)
      ======================================================== */}
      <section className="border-b border-[#E5E5E5] bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] tracking-[0.3em] uppercase text-black font-semibold bg-[#FAFAFA] border border-[#E5E5E5] px-2.5 py-1">
              CONSIGNMENT, RESIDENCY & CURATORIAL PROPOSALS
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-black font-normal leading-tight">
            Open Call & Curatorial Liaison
          </h1>
          <p className="text-xs sm:text-sm text-[#555555] max-w-2xl font-light leading-relaxed">
            Cloud Gallery accepts rolling portfolio dossiers from sculptors, ceramicists, and architects, alongside proposals for site-specific collaborations, private salon events, and consignment appraisals.
          </p>
        </div>
      </section>

      {/* ========================================================
          MAIN 2-COLUMN SECTION: COORDINATES & FORMS
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* ========================================================
              LEFT COLUMN: CONTACT DETAILS, SALONS & SOCIAL
          ======================================================== */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-[10px] tracking-[0.3em] uppercase text-black font-semibold block">
                GLOBAL SALONS & COORDINATES
              </span>
              <h2 className="font-serif text-3xl text-black">
                Direct Salon Channels & Physical Addresses
              </h2>
              <p className="text-xs text-[#555555] leading-relaxed font-light">
                Our curatorial directors are available for confidential acquisitions, appraisals, museum loans, and spatial commissions.
              </p>
            </div>

            {/* Coordinates Cards */}
            <div className="space-y-4 text-xs text-[#555555]">
              {/* Zurich */}
              <div className="p-6 bg-[#FAFAFA] border border-[#E5E5E5] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-black uppercase tracking-wider font-semibold text-[11px]">
                    <MapPin size={13} />
                    <span>Zurich Main Cloister & Studio</span>
                  </div>
                  <span className="text-[9px] uppercase tracking-widest text-[#777777] bg-white px-2 py-0.5 border border-[#E5E5E5]">
                    HQ
                  </span>
                </div>
                <p className="text-black font-medium">
                  Rämistrasse 44, 8001 Zürich, Switzerland
                </p>
                <div className="pt-1 space-y-1 text-[11px]">
                  <p className="flex items-center gap-2">
                    <Phone size={12} className="text-black" />
                    <span>Tel: +41 44 210 88 00</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail size={12} className="text-black" />
                    <span>zurich@cloudgallery.art</span>
                  </p>
                  <p className="flex items-center gap-2 text-[#777777]">
                    <Clock size={12} className="text-black" />
                    <span>Wednesday – Saturday: 11:00 – 18:00 CET</span>
                  </p>
                </div>
              </div>

              {/* Kyoto */}
              <div className="p-6 bg-[#FAFAFA] border border-[#E5E5E5] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-black uppercase tracking-wider font-semibold text-[11px]">
                    <MapPin size={13} />
                    <span>Kyoto Machiya Atelier</span>
                  </div>
                  <span className="text-[9px] uppercase tracking-widest text-[#777777] bg-white px-2 py-0.5 border border-[#E5E5E5]">
                    ASIA ATELIER
                  </span>
                </div>
                <p className="text-black font-medium">
                  Higashiyama-ku, Kyoto 605-0074, Japan
                </p>
                <div className="pt-1 space-y-1 text-[11px]">
                  <p className="flex items-center gap-2">
                    <Phone size={12} className="text-black" />
                    <span>Tel: +81 75 531 22 90</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail size={12} className="text-black" />
                    <span>kyoto@cloudgallery.art</span>
                  </p>
                  <p className="flex items-center gap-2 text-[#777777]">
                    <Clock size={12} className="text-black" />
                    <span>By Prior Collector Appointment</span>
                  </p>
                </div>
              </div>

              {/* Copenhagen */}
              <div className="p-6 bg-[#FAFAFA] border border-[#E5E5E5] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-black uppercase tracking-wider font-semibold text-[11px]">
                    <MapPin size={13} />
                    <span>Copenhagen Archival Salon</span>
                  </div>
                  <span className="text-[9px] uppercase tracking-widest text-[#777777] bg-white px-2 py-0.5 border border-[#E5E5E5]">
                    NORDIC SALON
                  </span>
                </div>
                <p className="text-black font-medium">
                  Bredgade 28, 1260 København, Denmark
                </p>
                <div className="pt-1 space-y-1 text-[11px]">
                  <p className="flex items-center gap-2">
                    <Mail size={12} className="text-black" />
                    <span>copenhagen@cloudgallery.art</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Channels Strip */}
            <div className="p-5 bg-white border border-[#E5E5E5] space-y-2">
              <span className="text-[10px] tracking-[0.25em] uppercase text-black font-semibold block">
                CONNECT VIA SOCIAL MEDIA & PRESS
              </span>
              <div className="flex flex-wrap gap-4 text-xs font-medium text-black pt-1">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                  <Globe size={13} />
                  <span>@cloudgallery.art</span>
                </a>
                <span className="text-[#CCCCCC]">|</span>
                <a href="https://vimeo.com" target="_blank" rel="noreferrer" className="hover:underline">
                  Vimeo Cinema
                </a>
                <span className="text-[#CCCCCC]">|</span>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:underline">
                  YouTube TV
                </a>
              </div>
            </div>

            {/* Review Protocol Note */}
            <div className="p-5 bg-[#FAFAFA] border border-black space-y-2">
              <div className="flex items-center gap-2 text-black text-xs uppercase tracking-wider font-semibold">
                <ShieldCheck size={15} />
                <span>Curatorial Review Protocol</span>
              </div>
              <p className="text-[11px] text-[#555555] leading-relaxed font-light">
                All artist submissions and collaboration proposals are personally reviewed by our senior board every fortnight. Submissions are treated with strict confidentiality.
              </p>
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: INTERACTIVE TABBED SUBMISSION FORMS
          ======================================================== */}
          <div className="lg:col-span-7 bg-white border border-[#E5E5E5] p-6 sm:p-10 shadow-xs">
            {/* Tabs Header */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 border-b border-[#E5E5E5] pb-4 mb-8">
              {[
                { key: "artists", label: "For Artists" },
                { key: "collaborators", label: "Collaborators" },
                { key: "events", label: "For Events" },
                { key: "general", label: "General Inquiries" },
              ].map((t) => (
                <button
                  key={t.key}
                  onClick={() => {
                    setActiveTab(t.key as FormTab);
                    setSubmitted(false);
                  }}
                  className={`py-2 text-[10px] uppercase tracking-wider font-semibold transition-all text-center border ${
                    activeTab === t.key
                      ? "bg-black text-white border-black"
                      : "bg-[#FAFAFA] text-[#555555] hover:text-black border-[#E5E5E5]"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {submitted ? (
              <div className="py-20 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-black text-white flex items-center justify-center">
                  <Check size={24} strokeWidth={2} />
                </div>
                <h3 className="font-serif text-3xl text-black">
                  Dossier Transmitted Successfully
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed max-w-md mx-auto">
                  Thank you for your submission. Our curatorial liaison in Zurich will review your materials and contact you directly within 5 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* 1. FOR ARTISTS (Submit Work Form) */}
                {activeTab === "artists" && (
                  <>
                    <div className="border-b border-[#E5E5E5] pb-3 mb-4">
                      <h3 className="font-serif text-2xl text-black">
                        For Artists: Submit Work & Representation Dossier
                      </h3>
                      <p className="text-xs text-[#666666] font-light mt-0.5">
                        Submit your monograph for gallery residency, consignment, or solo exhibition representation.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1 font-medium">
                          Artist Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Maya Lindqvist"
                          className="w-full bg-white border border-[#CCCCCC] px-3.5 py-2.5 text-xs text-black placeholder:text-[#999999] focus:outline-none focus:border-black"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1 font-medium">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. studio@lindqvist.se"
                          className="w-full bg-white border border-[#CCCCCC] px-3.5 py-2.5 text-xs text-black placeholder:text-[#999999] focus:outline-none focus:border-black"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1 font-medium">
                          Primary Medium
                        </label>
                        <select
                          value={discipline}
                          onChange={(e) => setDiscipline(e.target.value)}
                          className="w-full bg-white border border-[#CCCCCC] px-3 py-2.5 text-xs text-black focus:outline-none focus:border-black"
                        >
                          <option value="Stone & Granite Sculpture">Sculptures (stone, granite)</option>
                          <option value="Porcelain & Ceramics">Porcelain & Ceramics</option>
                          <option value="Paintings">Paintings & Tectonic Linen</option>
                          <option value="Lost Wax Bronze">Metal & Lost-Wax Bronze</option>
                          <option value="Furniture Pieces">Furniture Pieces & Plinths</option>
                          <option value="Lighting & Objects">Lighting & Objects</option>
                          <option value="Limited Editions">Limited Editions & Monotypes</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1 font-medium">
                          Portfolio / Website URL *
                        </label>
                        <input
                          type="url"
                          required
                          value={portfolioLink}
                          onChange={(e) => setPortfolioLink(e.target.value)}
                          placeholder="https://..."
                          className="w-full bg-white border border-[#CCCCCC] px-3.5 py-2.5 text-xs text-black placeholder:text-[#999999] focus:outline-none focus:border-black"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1 font-medium">
                        Artist Statement & Material Philosophy *
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={statement}
                        onChange={(e) => setStatement(e.target.value)}
                        placeholder="Detail your relationship to raw mineral extraction, tectonic weight, spatial balance, and lineage..."
                        className="w-full bg-white border border-[#CCCCCC] p-3 text-xs text-black focus:outline-none focus:border-black resize-none leading-relaxed"
                      />
                    </div>

                    {/* PDF Dossier Upload */}
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1 font-medium">
                        Upload Monograph PDF / High-Res Portfolio (Max 50MB)
                      </label>
                      <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-[#CCCCCC] hover:border-black bg-[#FAFAFA] cursor-pointer transition-colors">
                        <UploadCloud size={24} className="text-black mb-2" />
                        <span className="text-xs text-black font-semibold">
                          {fileName ? fileName : "Click to select or drag monograph PDF / ZIP"}
                        </span>
                        <span className="text-[10px] text-[#777777] mt-1">
                          PDF, catalogue sheets, or zip archive
                        </span>
                        <input
                          type="file"
                          accept=".pdf,.zip,.jpg,.png"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </>
                )}

                {/* 2. FOR COLLABORATORS */}
                {activeTab === "collaborators" && (
                  <>
                    <div className="border-b border-[#E5E5E5] pb-3 mb-4">
                      <h3 className="font-serif text-2xl text-black">
                        For Collaborators: Cross-Disciplinary & Special Projects
                      </h3>
                      <p className="text-xs text-[#666666] font-light mt-0.5">
                        For architects, lighting laboratories, foundries, craft guilds, and institutional brands.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1 font-medium">
                          Organization / Studio Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Studio OMA Alumni"
                          className="w-full bg-white border border-[#CCCCCC] px-3.5 py-2.5 text-xs text-black focus:outline-none focus:border-black"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1 font-medium">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. partner@studio.com"
                          className="w-full bg-white border border-[#CCCCCC] px-3.5 py-2.5 text-xs text-black focus:outline-none focus:border-black"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1 font-medium">
                          Collaboration Category
                        </label>
                        <select
                          value={collabType}
                          onChange={(e) => setCollabType(e.target.value)}
                          className="w-full bg-white border border-[#CCCCCC] px-3 py-2.5 text-xs text-black focus:outline-none focus:border-black"
                        >
                          <option value="Artist × Architect">Artist × Architect</option>
                          <option value="Artist × Designer">Artist × Designer</option>
                          <option value="Artist × Craftsperson">Artist × Craftsperson</option>
                          <option value="Artist × Brand">Artist × Brand</option>
                          <option value="Special Projects">Special Projects & Pavilions</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1 font-medium">
                          Website / Reference Link
                        </label>
                        <input
                          type="url"
                          value={portfolioLink}
                          onChange={(e) => setPortfolioLink(e.target.value)}
                          placeholder="https://..."
                          className="w-full bg-white border border-[#CCCCCC] px-3.5 py-2.5 text-xs text-black focus:outline-none focus:border-black"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1 font-medium">
                        Project Scope, Spatial Concept & Timeline *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={proposal}
                        onChange={(e) => setProposal(e.target.value)}
                        placeholder="Detail the spatial parameters, required stone/bronze fabrication, proposed exhibition or architectural site..."
                        className="w-full bg-white border border-[#CCCCCC] p-3 text-xs text-black focus:outline-none focus:border-black resize-none leading-relaxed"
                      />
                    </div>
                  </>
                )}

                {/* 3. FOR EVENTS */}
                {activeTab === "events" && (
                  <>
                    <div className="border-b border-[#E5E5E5] pb-3 mb-4">
                      <h3 className="font-serif text-2xl text-black">
                        For Events: Private Salon & Symposium Proposals
                      </h3>
                      <p className="text-xs text-[#666666] font-light mt-0.5">
                        Host curated symposiums, architectural book launches, or collector viewings at our Zurich or Kyoto salons.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1 font-medium">
                          Host / Organization *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Swiss Architectural Forum"
                          className="w-full bg-white border border-[#CCCCCC] px-3.5 py-2.5 text-xs text-black focus:outline-none focus:border-black"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1 font-medium">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. events@forum.ch"
                          className="w-full bg-white border border-[#CCCCCC] px-3.5 py-2.5 text-xs text-black focus:outline-none focus:border-black"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1 font-medium">
                          Proposed Date(s)
                        </label>
                        <input
                          type="text"
                          value={proposedDate}
                          onChange={(e) => setProposedDate(e.target.value)}
                          placeholder="e.g. November 2026"
                          className="w-full bg-white border border-[#CCCCCC] px-3.5 py-2.5 text-xs text-black focus:outline-none focus:border-black"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1 font-medium">
                          Anticipated Guests
                        </label>
                        <select
                          value={estimatedGuests}
                          onChange={(e) => setEstimatedGuests(e.target.value)}
                          className="w-full bg-white border border-[#CCCCCC] px-3 py-2.5 text-xs text-black focus:outline-none focus:border-black"
                        >
                          <option value="10–25 (Intimate Salon)">10–25 (Intimate Salon)</option>
                          <option value="30–60 (Cloister Lecture)">30–60 (Cloister Lecture)</option>
                          <option value="60–120 (Exhibition Opening)">60–120 (Exhibition Opening)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1 font-medium">
                        Event Program & Spatial / Acoustic Needs *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={eventConcept}
                        onChange={(e) => setEventConcept(e.target.value)}
                        placeholder="Detail the symposium itinerary, speaker roster, catering requirements, and acoustic needs..."
                        className="w-full bg-white border border-[#CCCCCC] p-3 text-xs text-black focus:outline-none focus:border-black resize-none leading-relaxed"
                      />
                    </div>
                  </>
                )}

                {/* 4. FOR GENERAL ENQUIRIES */}
                {activeTab === "general" && (
                  <>
                    <div className="border-b border-[#E5E5E5] pb-3 mb-4">
                      <h3 className="font-serif text-2xl text-black">
                        For General Enquiries, Appraisals & Press
                      </h3>
                      <p className="text-xs text-[#666666] font-light mt-0.5">
                        For press kits, photographic loans, museum research, or valuation inquiries.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1 font-medium">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Thomas Keller"
                          className="w-full bg-white border border-[#CCCCCC] px-3.5 py-2.5 text-xs text-black focus:outline-none focus:border-black"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1 font-medium">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. thomas@archdaily.com"
                          className="w-full bg-white border border-[#CCCCCC] px-3.5 py-2.5 text-xs text-black focus:outline-none focus:border-black"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1 font-medium">
                        Enquiry Message & Request *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={statement}
                        onChange={(e) => setStatement(e.target.value)}
                        placeholder="How can the Cloud Gallery Curatorial Liaison desk assist your acquisition, publication, or loan?"
                        className="w-full bg-white border border-[#CCCCCC] p-3 text-xs text-black focus:outline-none focus:border-black resize-none leading-relaxed"
                      />
                    </div>
                  </>
                )}

                {/* Submit Button */}
                <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-[#E5E5E5]">
                  <p className="text-[10px] text-[#777777]">
                    Confidential submission. Encrypted handling.
                  </p>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 bg-black hover:bg-[#222222] text-white text-xs uppercase tracking-[0.25em] font-medium transition-colors"
                  >
                    Transmit Dossier
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
