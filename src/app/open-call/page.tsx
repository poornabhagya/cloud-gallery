"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Check,
  ArrowRight,
  ShieldCheck,
  Send,
  Palette,
  Hammer,
  Compass,
  Camera,
  Scissors,
  Sparkles,
  FileText,
  Users,
  MessageSquare,
  ChevronDown,
} from "lucide-react";

export default function OpenCallPage() {
  // Inquiry Form state
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [inquiryCategory, setInquiryCategory] = useState("General Inquiry");
  const [inquirySubject, setInquirySubject] = useState("");
  const [inquiryMessage, setInquiryMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Active discipline tab for JOIN WITH CLOUD section
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>("painters");

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setInquiryName("");
      setInquiryEmail("");
      setInquiryCategory("General Inquiry");
      setInquirySubject("");
      setInquiryMessage("");
      setSubmitted(false);
    }, 5000);
  };

  // Section 1: Join with Cloud disciplines data
  const disciplines = [
    {
      id: "painters",
      title: "Painters",
      icon: Palette,
      summary: "How painters submit what they are selling",
      steps: [
        { num: "01", title: "Send your portfolio", desc: "Digital catalogue, monograph or photographic records of recent original works." },
        { num: "02", title: "Cloud reviews your work", desc: "Our curatorial board evaluates medium permanence and exhibition resonance." },
        { num: "03", title: "Agree terms and pricing", desc: "Collaborative consignment valuation, provenance documentation, and reserve agreements." },
        { num: "04", title: "Deliver work to Cloud", desc: "Insured transit dispatch to Cloud Gallery vaults and gallery presentation." },
      ],
      note: "[Details to be added by Cloud Gallery]",
    },
    {
      id: "sculptors",
      title: "Sculptors",
      icon: Hammer,
      summary: "How sculptors submit what they are selling",
      steps: [
        { num: "01", title: "Send your portfolio", desc: "High-resolution dimensional imagery, material specifications (granite, bronze, stone), and weights." },
        { num: "02", title: "Cloud reviews your work", desc: "Assessment of spatial presence, physical integrity, and monolithic architectural quality." },
        { num: "03", title: "Agree terms and pricing", desc: "Valuation, plinth/installation specifications, and agreed consignment terms." },
        { num: "04", title: "Deliver work to Cloud", desc: "Specialist crate freight and direct delivery to Cloud exhibition spaces." },
      ],
      note: "[Details to be added by Cloud Gallery]",
    },
    {
      id: "designers",
      title: "Designers",
      icon: Compass,
      summary: "How designers submit what they are selling",
      steps: [
        { num: "01", title: "Send your portfolio", desc: "Technical drawings, prototypes, and material schedules for furniture, plinths, or objects." },
        { num: "02", title: "Cloud reviews your work", desc: "Design board review focusing on craftsmanship, function, and aesthetic dialogue." },
        { num: "03", title: "Agree terms and pricing", desc: "Edition numbering, production run limits, and consignment agreements." },
        { num: "04", title: "Deliver work to Cloud", desc: "Finished piece delivery for salon staging and collector acquisition." },
      ],
      note: "[Details to be added by Cloud Gallery]",
    },
    {
      id: "photographers",
      title: "Photographers",
      icon: Camera,
      summary: "How photographers submit what they are selling",
      steps: [
        { num: "01", title: "Send your portfolio", desc: "Series concept statement, low-res preview contact sheets, and printing specs." },
        { num: "02", title: "Cloud reviews your work", desc: "Editorial review of narrative depth, archival paper quality, and tonal richness." },
        { num: "03", title: "Agree terms and pricing", desc: "Limited edition print caps, museum-grade framing options, and pricing structures." },
        { num: "04", title: "Deliver work to Cloud", desc: "Delivery of signed, certified prints to the Cloud archival vaults." },
      ],
      note: "[Details to be added by Cloud Gallery]",
    },
    {
      id: "craft-makers",
      title: "Craft Makers",
      icon: Scissors,
      summary: "How craft makers submit what they are selling",
      steps: [
        { num: "01", title: "Send your portfolio", desc: "Studio photos of handmade ceramics, glassware, wood joinery, or textile works." },
        { num: "02", title: "Cloud reviews your work", desc: "Review of tactile quality, kiln technique, historic craft lineage, and finish." },
        { num: "03", title: "Agree terms and pricing", desc: "One-off or small-batch consignment valuation and retail inventory terms." },
        { num: "04", title: "Deliver work to Cloud", desc: "Packaged, protected delivery directly into Cloud Gallery inventory." },
      ],
      note: "[Details to be added by Cloud Gallery]",
    },
  ];

  return (
    <div className="w-full bg-white text-black min-h-screen pb-32">
      {/* ========================================================
          FULL-BLEED HERO IMAGE (SOTHEBY'S OPEN CALL & LIAISON)
      ======================================================== */}
      <section className="relative w-full h-[360px] sm:h-[460px] lg:h-[520px] bg-black overflow-hidden border-b border-[#E5E5E5]">
        <Image
          src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=2600&q=90"
          alt="Cloud Open Call, Atelier Submissions and Curatorial Liaison"
          fill
          priority
          className="object-cover object-center brightness-[0.88] contrast-[1.05]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
        <div className="absolute bottom-6 left-6 sm:left-12 text-white">
          <span className="text-[10px] tracking-[0.3em] uppercase bg-black/75 backdrop-blur-xs px-3 py-1 border border-white/20 font-medium">
            PORTFOLIO SUBMISSIONS, ARTIST REPRESENTATION & CURATORIAL LIAISON
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
              CURATORIAL OPEN CALL · AUTUMN 2026
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-black font-normal leading-tight">
            Open Call & Artist Submissions
          </h1>
          <p className="font-merriweather text-xs sm:text-sm text-[#555555] max-w-3xl leading-relaxed italic">
            Cloud Gallery accepts rolling submissions from painters, sculptors, designers, photographers, and master craftspeople worldwide. Explore our open call programs, representation tiers, collaborative commissions, and guidelines below.
          </p>
        </div>
      </section>

      {/* ========================================================
          STICKY SECTION JUMP BAR
      ======================================================== */}
      <nav className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-[#E5E5E5] py-3 px-4 sm:px-6 lg:px-8 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center space-x-1 sm:space-x-2 overflow-x-auto no-scrollbar text-[10px] uppercase tracking-wider font-semibold">
          {[
            { id: "join-with-cloud", label: "01. Join with Cloud" },
            { id: "featured-artist", label: "02. Be a Featured Artist" },
            { id: "collaboration-artist", label: "03. Be a Collaboration Artist" },
            { id: "submission-guidelines", label: "04. Submission Guidelines" },
            { id: "contact-cloud", label: "05. Contact Cloud" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="px-3 py-1.5 whitespace-nowrap text-[#666666] hover:text-black hover:bg-neutral-100 rounded-xs transition-colors border border-transparent hover:border-[#E5E5E5]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ========================================================
          SECTION 1: JOIN WITH CLOUD
      ======================================================== */}
      <section id="join-with-cloud" className="scroll-mt-32 border-b border-[#E5E5E5] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Header */}
          <div className="space-y-3 max-w-3xl">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#081757] font-bold block">
              SECTION 01
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-black">
              Join with Cloud
            </h2>
            <p className="font-merriweather text-xs sm:text-sm text-[#555555] leading-relaxed italic">
              Whether you create paintings, monumental sculpture, fine furniture, photographic series, or one-of-a-kind craft, Cloud provides an international platform for representation, collectors, and consignments. Select your discipline below to review the four-stage submission workflow:
            </p>
          </div>

          {/* Discipline Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 border-b border-[#E5E5E5] pb-4">
            {disciplines.map((d) => {
              const Icon = d.icon;
              const isSelected = selectedDiscipline === d.id;
              return (
                <button
                  key={d.id}
                  onClick={() => setSelectedDiscipline(d.id)}
                  className={`flex items-center justify-center gap-2 py-3 px-3 border transition-all text-left ${
                    isSelected
                      ? "bg-[#081757] text-white border-[#081757] shadow-xs"
                      : "bg-[#FAFAFA] text-[#444444] border-[#E5E5E5] hover:text-black hover:border-black"
                  }`}
                >
                  <Icon size={14} className={isSelected ? "text-white" : "text-[#081757]"} />
                  <span className="text-[11px] font-roboto font-bold uppercase tracking-wider">
                    {d.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Discipline Detailed Card */}
          {(() => {
            const current = disciplines.find((d) => d.id === selectedDiscipline) || disciplines[0];
            const Icon = current.icon;

            return (
              <div className="bg-[#FAFAFA] border border-[#E5E5E5] p-6 sm:p-10 space-y-8 animate-fade-in">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5E5E5] pb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#081757] text-white flex items-center justify-center shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-roboto font-bold text-lg sm:text-xl uppercase tracking-wider text-[#081757]">
                        {current.title}
                      </h3>
                      <p className="font-merriweather text-xs text-[#666666] italic mt-0.5">
                        {current.summary}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#888888] font-mono bg-white px-3 py-1.5 border border-[#E5E5E5] self-start sm:self-auto">
                    {current.note}
                  </span>
                </div>

                {/* 4-Step Process Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {current.steps.map((step) => (
                    <div
                      key={step.num}
                      className="bg-white p-6 border border-[#E5E5E5] space-y-3 relative group hover:border-[#081757] transition-colors"
                    >
                      <span className="font-serif text-3xl font-bold text-[#CCCCCC] group-hover:text-[#081757] transition-colors">
                        {step.num}
                      </span>
                      <h4 className="font-roboto font-bold text-xs uppercase tracking-wider text-black">
                        {step.title}
                      </h4>
                      <p className="font-merriweather text-xs text-[#555555] leading-relaxed italic">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Footnote banner */}
                <div className="pt-4 border-t border-[#E5E5E5] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <span className="font-merriweather text-xs text-[#666666] italic">
                    How {current.title.toLowerCase()} submit what they are selling: 1) Send your portfolio. 2) Cloud reviews your work. 3) Agree terms and pricing. 4) Deliver work to Cloud. {current.note}
                  </span>
                  <a
                    href="#contact-cloud"
                    className="text-[10px] uppercase tracking-[0.2em] font-roboto font-bold text-[#081757] hover:underline inline-flex items-center gap-1 shrink-0"
                  >
                    <span>INITIATE SUBMISSION</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            );
          })()}

          {/* Quick Overview Accordion / List for all 5 disciplines */}
          <div className="space-y-3 pt-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#888888] font-bold block">
              COMPLETE DISCIPLINES REFERENCE
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {disciplines.map((d) => (
                <div key={d.id} className="p-5 border border-[#E5E5E5] bg-white space-y-2 hover:border-black transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-roboto font-bold text-xs uppercase tracking-wider text-[#081757]">
                      {d.title}
                    </span>
                    <span className="text-[9px] uppercase tracking-widest text-[#999999]">
                      4 STEPS
                    </span>
                  </div>
                  <p className="font-merriweather text-xs text-[#555555] leading-relaxed italic">
                    {d.summary}: 1) Send your portfolio. 2) Cloud reviews your work. 3) Agree terms and pricing. 4) Deliver work to Cloud. {d.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 2: BE A FEATURED ARTIST
      ======================================================== */}
      <section id="featured-artist" className="scroll-mt-32 border-b border-[#E5E5E5] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Header */}
          <div className="space-y-3 max-w-3xl">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#081757] font-bold block">
              SECTION 02
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-black">
              Be a Featured Artist
            </h2>
            <p className="font-merriweather text-xs sm:text-sm text-[#555555] leading-relaxed italic">
              Cloud Featured Artists receive prominent placement across our international exhibition salons, solo monographs on Cloud TV, and tailored acquisitions campaigns for global collectors.
            </p>
          </div>

          {/* 2 Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: How to Be Featured */}
            <div className="bg-white p-8 sm:p-10 border border-[#E5E5E5] space-y-5 shadow-xs hover:border-[#081757] transition-all">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#081757]" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#081757] font-bold">
                  PROGRAM CRITERIA
                </span>
              </div>
              <h3 className="font-serif text-2xl text-black">
                How to Be Featured
              </h3>
              <p className="font-merriweather text-xs sm:text-sm text-[#555555] leading-relaxed italic">
                Eligibility and selection process for featured artists. [Details to be added by Cloud Gallery]
              </p>
              <div className="pt-4 border-t border-[#EEEEEE] space-y-2 text-xs text-[#666666]">
                <div className="flex items-start gap-2">
                  <Check size={14} className="text-[#081757] mt-0.5 shrink-0" />
                  <span className="font-light">Demonstrated dedication to high material permanence and distinct artistic voice.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={14} className="text-[#081757] mt-0.5 shrink-0" />
                  <span className="font-light">Curatorial board review conducted on a bi-monthly calendar.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={14} className="text-[#081757] mt-0.5 shrink-0" />
                  <span className="font-light">Selected artists receive dedicated monographic documentation and collector previews.</span>
                </div>
              </div>
            </div>

            {/* Card 2: How to Submit Work */}
            <div className="bg-white p-8 sm:p-10 border border-[#E5E5E5] space-y-5 shadow-xs hover:border-[#081757] transition-all">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#081757]" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#081757] font-bold">
                  SUBMISSION DOSSIER
                </span>
              </div>
              <h3 className="font-serif text-2xl text-black">
                How to Submit Work
              </h3>
              <p className="font-merriweather text-xs sm:text-sm text-[#555555] leading-relaxed italic">
                Steps to submit your work for a feature. [Details to be added by Cloud Gallery]
              </p>
              <div className="pt-4 border-t border-[#EEEEEE] space-y-2 text-xs text-[#666666]">
                <div className="flex items-start gap-2">
                  <Check size={14} className="text-[#081757] mt-0.5 shrink-0" />
                  <span className="font-light">Prepare comprehensive portfolio PDF with dimensions, year, and artist statement.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={14} className="text-[#081757] mt-0.5 shrink-0" />
                  <span className="font-light">Transmit portfolio to curatorial liaison via the inquiry channel below.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={14} className="text-[#081757] mt-0.5 shrink-0" />
                  <span className="font-light">Personal response and confidential appraisal within 5 business days.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 3: BE A COLLABORATION ARTIST
      ======================================================== */}
      <section id="collaboration-artist" className="scroll-mt-32 border-b border-[#E5E5E5] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Header */}
          <div className="space-y-3 max-w-3xl">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#081757] font-bold block">
              SECTION 03
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-black">
              Be a Collaboration Artist
            </h2>
            <p className="font-merriweather text-xs sm:text-sm text-[#555555] leading-relaxed italic">
              Where sculptors cross paths with alpine architects, lighting laboratories, and monolithic stone quarries to create unrepeatable site-specific commissions.
            </p>
          </div>

          {/* 2 Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: How Collaboration Works */}
            <div className="p-8 sm:p-10 border border-[#E5E5E5] bg-white space-y-5 hover:border-[#081757] transition-all">
              <div className="flex items-center gap-2">
                <Users size={14} className="text-[#081757]" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#081757] font-bold">
                  FRAMEWORK & PLANNING
                </span>
              </div>
              <h3 className="font-serif text-2xl text-black">
                How Collaboration Works
              </h3>
              <p className="font-merriweather text-xs sm:text-sm text-[#555555] leading-relaxed italic">
                How a collaboration with Cloud is planned and delivered. [Details to be added by Cloud Gallery]
              </p>
              <div className="pt-4 border-t border-[#EEEEEE] space-y-2 text-xs text-[#666666]">
                <p className="leading-relaxed font-light">
                  • Stage 01: Concept alignment and multidisciplinary pairing (e.g. Sculptor × Architect).
                </p>
                <p className="leading-relaxed font-light">
                  • Stage 02: Material prototyping, site assessments, and production scheduling.
                </p>
                <p className="leading-relaxed font-light">
                  • Stage 03: Final work exhibition, archival monograph film, and private sale release.
                </p>
              </div>
            </div>

            {/* Card 2: How to Submit Work */}
            <div className="p-8 sm:p-10 border border-[#E5E5E5] bg-white space-y-5 hover:border-[#081757] transition-all">
              <div className="flex items-center gap-2">
                <FileText size={14} className="text-[#081757]" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#081757] font-bold">
                  PROJECT PROPOSAL
                </span>
              </div>
              <h3 className="font-serif text-2xl text-black">
                How to Submit Work
              </h3>
              <p className="font-merriweather text-xs sm:text-sm text-[#555555] leading-relaxed italic">
                Steps to propose and submit collaboration work. [Details to be added by Cloud Gallery]
              </p>
              <div className="pt-4 border-t border-[#EEEEEE] space-y-2 text-xs text-[#666666]">
                <p className="leading-relaxed font-light">
                  • Submit a collaboration treatment detailing concept, desired medium cross-pollination, and physical scale.
                </p>
                <p className="leading-relaxed font-light">
                  • Our spatial directors review architectural feasibility and institutional sponsorship opportunities.
                </p>
                <p className="leading-relaxed font-light">
                  • Propose a dedicated project via our inquiry terminal below.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 4: SUBMISSION GUIDELINES
      ======================================================== */}
      <section id="submission-guidelines" className="scroll-mt-32 border-b border-[#E5E5E5] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Header */}
          <div className="space-y-3 max-w-3xl">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#081757] font-bold block">
              SECTION 04
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-black">
              Submission Guidelines
            </h2>
            <p className="font-merriweather text-xs sm:text-sm text-[#555555] leading-relaxed italic">
              Cloud operates under rigorous international art-market protocols to preserve artist integrity, establish clear copyright boundaries, and guarantee insured handling.
            </p>
          </div>

          {/* 2 Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Legal Details */}
            <div className="bg-white p-8 sm:p-10 border border-[#E5E5E5] space-y-5 shadow-xs hover:border-[#081757] transition-all">
              <div className="flex items-center gap-2 text-black font-semibold text-xs uppercase tracking-wider">
                <ShieldCheck size={16} className="text-[#081757]" />
                <span className="font-roboto font-bold text-[10px] tracking-[0.25em] text-[#081757]">
                  RIGHTS & LEGAL TERMS
                </span>
              </div>
              <h3 className="font-serif text-2xl text-black">
                Legal Details
              </h3>
              <p className="font-merriweather text-xs sm:text-sm text-[#555555] leading-relaxed italic">
                Rights, ownership, commission and legal terms. [Details to be added by Cloud Gallery]
              </p>
              <div className="pt-4 border-t border-[#EEEEEE] space-y-2 text-xs text-[#666666]">
                <p className="leading-relaxed font-light">
                  • <strong>Copyright & Authorship:</strong> The artist retains full moral and intellectual property rights at all times.
                </p>
                <p className="leading-relaxed font-light">
                  • <strong>Consignment Terms:</strong> Clear consignment commission structure agreed in writing prior to public presentation.
                </p>
                <p className="leading-relaxed font-light">
                  • <strong>Insured Transit:</strong> All artworks are covered under Lloyd&apos;s fine art policy from pick-up to acquisition.
                </p>
              </div>
            </div>

            {/* Card 2: Submission Process */}
            <div className="bg-white p-8 sm:p-10 border border-[#E5E5E5] space-y-5 shadow-xs hover:border-[#081757] transition-all">
              <div className="flex items-center gap-2 text-black font-semibold text-xs uppercase tracking-wider">
                <FileText size={16} className="text-[#081757]" />
                <span className="font-roboto font-bold text-[10px] tracking-[0.25em] text-[#081757]">
                  CURATORIAL PROTOCOL
                </span>
              </div>
              <h3 className="font-serif text-2xl text-black">
                Submission Process
              </h3>
              <p className="font-merriweather text-xs sm:text-sm text-[#555555] leading-relaxed italic">
                The full step-by-step submission process. [Details to be added by Cloud Gallery]
              </p>
              <div className="pt-4 border-t border-[#EEEEEE] space-y-2 text-xs text-[#666666]">
                <p className="leading-relaxed font-light">
                  • <strong>Step 1:</strong> Prepare artist bio, CV, statement, and high-resolution portfolio images (PDF format preferred).
                </p>
                <p className="leading-relaxed font-light">
                  • <strong>Step 2:</strong> Submit dossier via the direct liaison portal below.
                </p>
                <p className="leading-relaxed font-light">
                  • <strong>Step 3:</strong> Initial curatorial review and formal acknowledgment within 48 hours.
                </p>
                <p className="leading-relaxed font-light">
                  • <strong>Step 4:</strong> Comprehensive evaluation and invitation for studio visit or consignment execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 5: CONTACT CLOUD
      ======================================================== */}
      <section id="contact-cloud" className="scroll-mt-32 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="space-y-3 max-w-3xl">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#081757] font-bold block">
              SECTION 05
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-black">
              Contact Cloud
            </h2>
            <p className="font-merriweather text-xs sm:text-sm text-[#555555] leading-relaxed italic">
              Connect directly with our curatorial directors, arrange confidential appraisals, or transmit your proposals and inquiries to Cloud Gallery.
            </p>
          </div>

          {/* 2-Column Layout: Contact Details & Send an Inquiry Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left: Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border-b border-[#E5E5E5] pb-4">
                <h3 className="font-serif text-2xl text-black">
                  Contact Details
                </h3>
                <p className="font-merriweather text-xs text-[#666666] italic mt-1">
                  Address, phone and email of Cloud Gallery. [Details to be added by Cloud Gallery]
                </p>
              </div>

              {/* Salons list */}
              <div className="space-y-4 text-xs">
                {/* Zurich HQ */}
                <div className="p-5 bg-[#FAFAFA] border border-[#E5E5E5] space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-roboto font-bold text-xs uppercase tracking-wider text-[#081757] flex items-center gap-1.5">
                      <MapPin size={13} />
                      Zurich Main Cloister & Studio
                    </span>
                    <span className="text-[9px] uppercase tracking-widest text-[#777777] bg-white px-2 py-0.5 border border-[#E5E5E5]">
                      HQ
                    </span>
                  </div>
                  <p className="text-black font-medium">
                    Rämistrasse 44, 8001 Zürich, Switzerland
                  </p>
                  <div className="space-y-1 text-[#666666] pt-1 text-[11px]">
                    <p className="flex items-center gap-2">
                      <Phone size={12} className="text-black" />
                      <span>Tel: +41 44 210 88 00</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail size={12} className="text-black" />
                      <span>zurich@cloudgallery.art</span>
                    </p>
                    <p className="flex items-center gap-2 text-[#888888]">
                      <Clock size={12} className="text-black" />
                      <span>Wednesday – Saturday: 11:00 – 18:00 CET</span>
                    </p>
                  </div>
                </div>

                {/* Kyoto Atelier */}
                <div className="p-5 bg-[#FAFAFA] border border-[#E5E5E5] space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-roboto font-bold text-xs uppercase tracking-wider text-[#081757] flex items-center gap-1.5">
                      <MapPin size={13} />
                      Kyoto Machiya Atelier
                    </span>
                    <span className="text-[9px] uppercase tracking-widest text-[#777777] bg-white px-2 py-0.5 border border-[#E5E5E5]">
                      ASIA
                    </span>
                  </div>
                  <p className="text-black font-medium">
                    Higashiyama-ku, Kyoto 605-0074, Japan
                  </p>
                  <div className="space-y-1 text-[#666666] pt-1 text-[11px]">
                    <p className="flex items-center gap-2">
                      <Phone size={12} className="text-black" />
                      <span>Tel: +81 75 531 22 90</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail size={12} className="text-black" />
                      <span>kyoto@cloudgallery.art</span>
                    </p>
                  </div>
                </div>

                {/* Copenhagen Archival Salon */}
                <div className="p-5 bg-[#FAFAFA] border border-[#E5E5E5] space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-roboto font-bold text-xs uppercase tracking-wider text-[#081757] flex items-center gap-1.5">
                      <MapPin size={13} />
                      Copenhagen Archival Salon
                    </span>
                    <span className="text-[9px] uppercase tracking-widest text-[#777777] bg-white px-2 py-0.5 border border-[#E5E5E5]">
                      NORDIC
                    </span>
                  </div>
                  <p className="text-black font-medium">
                    Bredgade 28, 1260 København, Denmark
                  </p>
                  <div className="space-y-1 text-[#666666] pt-1 text-[11px]">
                    <p className="flex items-center gap-2">
                      <Mail size={12} className="text-black" />
                      <span>copenhagen@cloudgallery.art</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Send an Inquiry Form */}
            <div className="lg:col-span-7 bg-white border border-[#E5E5E5] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="border-b border-[#E5E5E5] pb-4">
                <div className="flex items-center gap-2">
                  <MessageSquare size={16} className="text-[#081757]" />
                  <span className="font-roboto font-bold text-[10px] tracking-[0.25em] text-[#081757]">
                    DIRECT LIAISON TERMINAL
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-black mt-1">
                  Send an Inquiry
                </h3>
                <p className="font-merriweather text-xs text-[#666666] italic mt-1">
                  Send inquiries, ideas and suggested changes to Cloud. [Details to be added by Cloud Gallery]
                </p>
              </div>

              {submitted ? (
                <div className="py-16 text-center space-y-4 bg-[#FAFAFA] border border-[#E5E5E5]">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#081757] text-white flex items-center justify-center">
                    <Check size={22} strokeWidth={2.2} />
                  </div>
                  <h4 className="font-serif text-2xl text-black">
                    Inquiry Dispatched Successfully
                  </h4>
                  <p className="font-merriweather text-xs text-[#555555] max-w-md mx-auto italic">
                    Thank you. Your message has been received by Cloud curatorial liaison. We will review your materials and respond promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1 font-medium font-roboto">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        placeholder="e.g. Maya Lindqvist"
                        className="w-full bg-white border border-[#CCCCCC] px-3.5 py-2.5 text-xs text-black placeholder:text-[#999999] focus:outline-none focus:border-black font-roboto"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1 font-medium font-roboto">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={inquiryEmail}
                        onChange={(e) => setInquiryEmail(e.target.value)}
                        placeholder="e.g. artist@studio.art"
                        className="w-full bg-white border border-[#CCCCCC] px-3.5 py-2.5 text-xs text-black placeholder:text-[#999999] focus:outline-none focus:border-black font-roboto"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1 font-medium font-roboto">
                        Inquiry Category
                      </label>
                      <select
                        value={inquiryCategory}
                        onChange={(e) => setInquiryCategory(e.target.value)}
                        className="w-full bg-white border border-[#CCCCCC] px-3 py-2.5 text-xs text-black focus:outline-none focus:border-black font-roboto"
                      >
                        <option value="General Inquiry">General Inquiries</option>
                        <option value="Artist Submission">Artist Submission & Portfolio</option>
                        <option value="Featured Artist Proposal">Featured Artist Proposal</option>
                        <option value="Collaboration Proposal">Collaboration Proposal</option>
                        <option value="Suggested Changes">Suggested Changes & Ideas</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1 font-medium font-roboto">
                        Subject *
                      </label>
                      <input
                        type="text"
                        required
                        value={inquirySubject}
                        onChange={(e) => setInquirySubject(e.target.value)}
                        placeholder="Subject of inquiry or proposal"
                        className="w-full bg-white border border-[#CCCCCC] px-3.5 py-2.5 text-xs text-black placeholder:text-[#999999] focus:outline-none focus:border-black font-roboto"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1 font-medium font-roboto">
                      Message / Proposal / Suggested Changes *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={inquiryMessage}
                      onChange={(e) => setInquiryMessage(e.target.value)}
                      placeholder="Please describe your submission, proposal, ideas, or questions for Cloud Gallery..."
                      className="w-full bg-white border border-[#CCCCCC] px-3.5 py-2.5 text-xs text-black placeholder:text-[#999999] focus:outline-none focus:border-black font-roboto resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="font-merriweather text-[11px] text-[#777777] italic">
                      Confidential review guaranteed under gallery terms.
                    </span>
                    <button
                      type="submit"
                      className="bg-black hover:bg-[#081757] text-white px-6 py-3 text-[10px] uppercase tracking-[0.25em] font-roboto font-bold transition-colors inline-flex items-center gap-2 cursor-pointer"
                    >
                      <Send size={12} />
                      <span>TRANSMIT INQUIRY</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
