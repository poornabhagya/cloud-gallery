"use client";

import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  UploadCloud,
  Check,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

type FormTab = "artists" | "collaborators" | "events" | "general";

export default function OpenCallPage() {
  const [activeTab, setActiveTab] = useState<FormTab>("artists");
  const [submitted, setSubmitted] = useState(false);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [portfolioLink, setPortfolioLink] = useState("");
  const [discipline, setDiscipline] = useState("Sculpture");
  const [statement, setStatement] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);

  // Collaborator states
  const [collabType, setCollabType] = useState("Architectural Studio");
  const [proposal, setProposal] = useState("");

  // Event states
  const [eventConcept, setEventConcept] = useState("");
  const [proposedDate, setProposedDate] = useState("");
  const [estimatedGuests, setEstimatedGuests] = useState("30–50");

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
    <div className="w-full min-h-screen pb-32">
      {/* Header */}
      <section className="bg-[#EAE5DC] border-b border-[#E2DDD4] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-[11px] tracking-[0.35em] uppercase text-[#8C6D53] font-medium block">
            ENGAGEMENT & SUBMISSIONS
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#2B2A27] font-light">
            Open Call & Studio Coordinates
          </h1>
          <p className="text-xs sm:text-sm text-[#7E7971] max-w-2xl font-light leading-relaxed">
            Cloud Gallery accepts rolling portfolio dossiers from sculptors, ceramicists, and architects, alongside proposals for site-specific collaborations and private salon events.
          </p>
        </div>
      </section>

      {/* Main 2-Column Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* ========================================================
              LEFT COLUMN: STUDIO COORDINATES & VISITING DETAILS
          ======================================================== */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#8C6D53] font-semibold block">
                SALON SPACES & DIALOGUE
              </span>
              <h2 className="font-serif text-3xl text-[#2B2A27]">
                Connect with the Curatorial Board
              </h2>
              <p className="text-xs text-[#7E7971] leading-relaxed font-light">
                Our directors are available for private acquisitions, museum loans, and spatial commissions. Walk-in viewings are welcomed during gallery salon hours.
              </p>
            </div>

            {/* Coordinates Cards */}
            <div className="space-y-4 text-xs text-[#7E7971]">
              {/* Zurich */}
              <div className="p-5 bg-[#EAE5DC]/50 border border-[#E2DDD4] space-y-2">
                <div className="flex items-center gap-2 text-[#8C6D53] uppercase tracking-wider font-semibold text-[11px]">
                  <MapPin size={13} />
                  <span>Zurich Main Cloister & Studio</span>
                </div>
                <p className="text-[#2B2A27] font-medium">
                  Rämistrasse 44, 8001 Zürich, Switzerland
                </p>
                <div className="pt-1 flex items-center gap-4 text-[11px]">
                  <span>Tel: +41 44 210 88 00</span>
                  <span>zurich@cloudgallery.art</span>
                </div>
                <div className="text-[11px] text-[#7E7971]/80 flex items-center gap-1.5 pt-1">
                  <Clock size={12} className="text-[#8C6D53]" />
                  Wednesday – Saturday: 11:00 – 18:00 CET
                </div>
              </div>

              {/* Kyoto */}
              <div className="p-5 bg-[#EAE5DC]/50 border border-[#E2DDD4] space-y-2">
                <div className="flex items-center gap-2 text-[#8C6D53] uppercase tracking-wider font-semibold text-[11px]">
                  <MapPin size={13} />
                  <span>Kyoto Machiya Atelier</span>
                </div>
                <p className="text-[#2B2A27] font-medium">
                  Higashiyama-ku, Kyoto 605-0074, Japan
                </p>
                <div className="pt-1 flex items-center gap-4 text-[11px]">
                  <span>Tel: +81 75 531 22 90</span>
                  <span>kyoto@cloudgallery.art</span>
                </div>
                <div className="text-[11px] text-[#7E7971]/80 flex items-center gap-1.5 pt-1">
                  <Clock size={12} className="text-[#8C6D53]" />
                  By Private Collector Appointment
                </div>
              </div>
            </div>

            {/* Submission Protocol Note */}
            <div className="p-5 bg-[#F4F0EA] border border-[#8C6D53]/40 space-y-2">
              <div className="flex items-center gap-2 text-[#8C6D53] text-xs uppercase tracking-wider font-medium">
                <ShieldCheck size={14} />
                <span>Curatorial Review Protocol</span>
              </div>
              <p className="text-[11px] text-[#7E7971] leading-relaxed">
                All artist portfolios are personally reviewed by the curatorial board every fortnight. We prioritize tactile work demonstrating mastery of raw mineral, timber, or metal craft.
              </p>
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: INTERACTIVE TABBED FORMS
          ======================================================== */}
          <div className="lg:col-span-7 bg-[#F4F0EA] border border-[#E2DDD4] p-6 sm:p-10 shadow-sm">
            {/* Tabs Header */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 border-b border-[#E2DDD4] pb-4 mb-8">
              {[
                { key: "artists", label: "For Artists" },
                { key: "collaborators", label: "Collaborators" },
                { key: "events", label: "For Events" },
                { key: "general", label: "General" },
              ].map((t) => (
                <button
                  key={t.key}
                  onClick={() => {
                    setActiveTab(t.key as FormTab);
                    setSubmitted(false);
                  }}
                  className={`py-2 text-[11px] uppercase tracking-wider font-medium transition-all text-center border ${
                    activeTab === t.key
                      ? "bg-[#2B2A27] text-[#F4F0EA] border-[#2B2A27]"
                      : "bg-[#EAE5DC]/60 text-[#7E7971] hover:text-[#2B2A27] border-[#E2DDD4]"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {submitted ? (
              <div className="py-20 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#8C6D53]/10 border border-[#8C6D53]/30 flex items-center justify-center text-[#8C6D53]">
                  <Check size={24} strokeWidth={2} />
                </div>
                <h3 className="font-serif text-3xl text-[#2B2A27]">
                  Dossier Submitted Successfully
                </h3>
                <p className="text-xs text-[#7E7971] leading-relaxed max-w-md mx-auto">
                  Thank you for your submission. Our curatorial liaison in Zurich will review your materials and contact you directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* 1. FOR ARTISTS */}
                {activeTab === "artists" && (
                  <>
                    <div className="border-b border-[#E2DDD4] pb-3 mb-4">
                      <h3 className="font-serif text-2xl text-[#2B2A27]">
                        Artist Dossier & Representation
                      </h3>
                      <p className="text-xs text-[#7E7971] font-light mt-0.5">
                        Submit your monograph for residency, solo exhibition, or gallery representation.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#7E7971] mb-1 font-medium">
                          Artist Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Maya Lindqvist"
                          className="w-full bg-[#EAE5DC]/40 border border-[#E2DDD4] px-3.5 py-2.5 text-sm text-[#2B2A27] focus:outline-none focus:border-[#8C6D53]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#7E7971] mb-1 font-medium">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. studio@lindqvist.se"
                          className="w-full bg-[#EAE5DC]/40 border border-[#E2DDD4] px-3.5 py-2.5 text-sm text-[#2B2A27] focus:outline-none focus:border-[#8C6D53]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#7E7971] mb-1 font-medium">
                          Primary Medium
                        </label>
                        <select
                          value={discipline}
                          onChange={(e) => setDiscipline(e.target.value)}
                          className="w-full bg-[#EAE5DC]/40 border border-[#E2DDD4] px-3 py-2.5 text-sm text-[#2B2A27] focus:outline-none focus:border-[#8C6D53]"
                        >
                          <option value="Stone & Granite Sculpture">Stone & Granite Sculpture</option>
                          <option value="Wood-Fired Ceramic">Wood-Fired Ceramic / Porcelain</option>
                          <option value="Lost Wax Bronze">Lost Wax Bronze / Metal</option>
                          <option value="Tactile Mineral Painting">Tactile Mineral Painting</option>
                          <option value="Architectural Object">Architectural Objects & Furniture</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#7E7971] mb-1 font-medium">
                          Portfolio / Website URL *
                        </label>
                        <input
                          type="url"
                          required
                          value={portfolioLink}
                          onChange={(e) => setPortfolioLink(e.target.value)}
                          placeholder="https://..."
                          className="w-full bg-[#EAE5DC]/40 border border-[#E2DDD4] px-3.5 py-2.5 text-sm text-[#2B2A27] focus:outline-none focus:border-[#8C6D53]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#7E7971] mb-1 font-medium">
                        Artist Statement & Material Philosophy *
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={statement}
                        onChange={(e) => setStatement(e.target.value)}
                        placeholder="Briefly describe your relationship to raw materiality, spatial harmony, and craft lineage..."
                        className="w-full bg-[#EAE5DC]/40 border border-[#E2DDD4] p-3 text-sm text-[#2B2A27] focus:outline-none focus:border-[#8C6D53] resize-none"
                      />
                    </div>

                    {/* Drag and Drop File Upload Placeholder */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#7E7971] mb-1 font-medium">
                        Dossier PDF / High-Res Imagery (Max 50MB)
                      </label>
                      <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-[#E2DDD4] hover:border-[#8C6D53] bg-[#EAE5DC]/30 cursor-pointer transition-colors">
                        <UploadCloud size={24} className="text-[#8C6D53] mb-2" />
                        <span className="text-xs text-[#2B2A27] font-medium">
                          {fileName ? fileName : "Click to select or drag PDF monograph"}
                        </span>
                        <span className="text-[10px] text-[#7E7971] mt-1">
                          PDF, ZIP, or high-res catalogue accepted
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
                    <div className="border-b border-[#E2DDD4] pb-3 mb-4">
                      <h3 className="font-serif text-2xl text-[#2B2A27]">
                        Cross-Disciplinary Collaboration
                      </h3>
                      <p className="text-xs text-[#7E7971] font-light mt-0.5">
                        For architects, lighting laboratories, foundries, and institutional partners.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#7E7971] mb-1 font-medium">
                          Organization / Partner Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Studio OMA Alumni"
                          className="w-full bg-[#EAE5DC]/40 border border-[#E2DDD4] px-3.5 py-2.5 text-sm text-[#2B2A27] focus:outline-none focus:border-[#8C6D53]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#7E7971] mb-1 font-medium">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. partner@studio.com"
                          className="w-full bg-[#EAE5DC]/40 border border-[#E2DDD4] px-3.5 py-2.5 text-sm text-[#2B2A27] focus:outline-none focus:border-[#8C6D53]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#7E7971] mb-1 font-medium">
                          Collaboration Focus
                        </label>
                        <select
                          value={collabType}
                          onChange={(e) => setCollabType(e.target.value)}
                          className="w-full bg-[#EAE5DC]/40 border border-[#E2DDD4] px-3 py-2.5 text-sm text-[#2B2A27] focus:outline-none focus:border-[#8C6D53]"
                        >
                          <option value="Architectural Studio">Architectural Studio / Pavilion</option>
                          <option value="Bronze / Metal Foundry">Bronze / Foundry Fabricator</option>
                          <option value="Lighting Laboratory">Lighting Laboratory</option>
                          <option value="Brand / Material Research">Brand / Material Research</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#7E7971] mb-1 font-medium">
                          Reference / Project Links
                        </label>
                        <input
                          type="url"
                          value={portfolioLink}
                          onChange={(e) => setPortfolioLink(e.target.value)}
                          placeholder="https://..."
                          className="w-full bg-[#EAE5DC]/40 border border-[#E2DDD4] px-3.5 py-2.5 text-sm text-[#2B2A27] focus:outline-none focus:border-[#8C6D53]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#7E7971] mb-1 font-medium">
                        Project Concept & Scope *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={proposal}
                        onChange={(e) => setProposal(e.target.value)}
                        placeholder="Outline the spatial concept, timeline, and intended physical manifestation..."
                        className="w-full bg-[#EAE5DC]/40 border border-[#E2DDD4] p-3 text-sm text-[#2B2A27] focus:outline-none focus:border-[#8C6D53] resize-none"
                      />
                    </div>
                  </>
                )}

                {/* 3. FOR EVENTS */}
                {activeTab === "events" && (
                  <>
                    <div className="border-b border-[#E2DDD4] pb-3 mb-4">
                      <h3 className="font-serif text-2xl text-[#2B2A27]">
                        Private Salon & Event Inquiries
                      </h3>
                      <p className="text-xs text-[#7E7971] font-light mt-0.5">
                        Host curated symposiums, architectural book launches, or collector viewings.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#7E7971] mb-1 font-medium">
                          Host / Organization *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Swiss Architectural Forum"
                          className="w-full bg-[#EAE5DC]/40 border border-[#E2DDD4] px-3.5 py-2.5 text-sm text-[#2B2A27] focus:outline-none focus:border-[#8C6D53]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#7E7971] mb-1 font-medium">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. events@forum.ch"
                          className="w-full bg-[#EAE5DC]/40 border border-[#E2DDD4] px-3.5 py-2.5 text-sm text-[#2B2A27] focus:outline-none focus:border-[#8C6D53]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#7E7971] mb-1 font-medium">
                          Proposed Date(s)
                        </label>
                        <input
                          type="text"
                          value={proposedDate}
                          onChange={(e) => setProposedDate(e.target.value)}
                          placeholder="e.g. October 2026"
                          className="w-full bg-[#EAE5DC]/40 border border-[#E2DDD4] px-3.5 py-2.5 text-sm text-[#2B2A27] focus:outline-none focus:border-[#8C6D53]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#7E7971] mb-1 font-medium">
                          Anticipated Guests
                        </label>
                        <select
                          value={estimatedGuests}
                          onChange={(e) => setEstimatedGuests(e.target.value)}
                          className="w-full bg-[#EAE5DC]/40 border border-[#E2DDD4] px-3 py-2.5 text-sm text-[#2B2A27] focus:outline-none focus:border-[#8C6D53]"
                        >
                          <option value="10–25 (Intimate Salon)">10–25 (Intimate Salon)</option>
                          <option value="30–60 (Cloister Lecture)">30–60 (Cloister Lecture)</option>
                          <option value="60–120 (Exhibition Opening)">60–120 (Exhibition Opening)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#7E7971] mb-1 font-medium">
                        Event Concept & Acoustic / Spatial Needs *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={eventConcept}
                        onChange={(e) => setEventConcept(e.target.value)}
                        placeholder="Detail the event itinerary, catering requirements, and speaker lineup..."
                        className="w-full bg-[#EAE5DC]/40 border border-[#E2DDD4] p-3 text-sm text-[#2B2A27] focus:outline-none focus:border-[#8C6D53] resize-none"
                      />
                    </div>
                  </>
                )}

                {/* 4. GENERAL ENQUIRIES */}
                {activeTab === "general" && (
                  <>
                    <div className="border-b border-[#E2DDD4] pb-3 mb-4">
                      <h3 className="font-serif text-2xl text-[#2B2A27]">
                        General Enquiries & Press Liaison
                      </h3>
                      <p className="text-xs text-[#7E7971] font-light mt-0.5">
                        For press kits, editorial loans, and curatorial correspondence.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#7E7971] mb-1 font-medium">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Thomas Keller"
                          className="w-full bg-[#EAE5DC]/40 border border-[#E2DDD4] px-3.5 py-2.5 text-sm text-[#2B2A27] focus:outline-none focus:border-[#8C6D53]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#7E7971] mb-1 font-medium">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. thomas@archdaily.com"
                          className="w-full bg-[#EAE5DC]/40 border border-[#E2DDD4] px-3.5 py-2.5 text-sm text-[#2B2A27] focus:outline-none focus:border-[#8C6D53]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#7E7971] mb-1 font-medium">
                        Enquiry Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={statement}
                        onChange={(e) => setStatement(e.target.value)}
                        placeholder="How can Cloud Gallery assist your research or acquisition?"
                        className="w-full bg-[#EAE5DC]/40 border border-[#E2DDD4] p-3 text-sm text-[#2B2A27] focus:outline-none focus:border-[#8C6D53] resize-none"
                      />
                    </div>
                  </>
                )}

                {/* Submit button */}
                <div className="pt-3 flex items-center justify-between">
                  <p className="text-[11px] text-[#7E7971]">
                    Submissions are kept strictly confidential.
                  </p>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-[#2B2A27] hover:bg-[#8C6D53] text-[#F4F0EA] text-xs uppercase tracking-[0.25em] font-medium transition-colors"
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
