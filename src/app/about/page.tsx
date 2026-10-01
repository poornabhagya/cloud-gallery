"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, ShieldCheck, Award, Building, Check } from "lucide-react";
import { useGallery } from "@/context/GalleryContext";

export default function AboutPage() {
  const { openEnquiry } = useGallery();

  return (
    <div className="w-full bg-white text-black min-h-screen pb-32">
      {/* ========================================================
          FULL-BLEED HERO IMAGE (SOTHEBY'S ABOUT / MANIFESTO)
      ======================================================== */}
      <section className="relative w-full h-[360px] sm:h-[460px] lg:h-[520px] bg-black overflow-hidden border-b border-[#E5E5E5]">
        <Image
          src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=2600&q=90"
          alt="Cloud Gallery Architecture and Cloister"
          fill
          priority
          className="object-cover object-center brightness-[0.88] contrast-[1.05]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
        <div className="absolute bottom-6 left-6 sm:left-12 text-white">
          <span className="text-[10px] tracking-[0.3em] uppercase bg-black/75 backdrop-blur-xs px-3 py-1 border border-white/20 font-medium">
            SPATIAL LAB & CURATORIAL MANIFESTO
          </span>
        </div>
      </section>

      {/* Manifesto Header */}
      <section className="border-b border-[#E5E5E5] bg-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] tracking-[0.3em] uppercase text-black font-semibold bg-[#FAFAFA] border border-[#E5E5E5] px-2.5 py-1">
              THE CLOUD CURATORIAL MANIFESTO
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-black font-normal leading-tight">
            We are not merely a white cube. We are an active spatial laboratory.
          </h1>
          <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
            Most galleries exist as passive sales stages for whatever works are delivered. Cloud Gallery was established under a singular radical conviction: that true spatial fine art must be conceived in dialogue with the room and ambient light that holds it.
          </p>
        </div>
      </section>

      {/* Manifesting Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-[#E5E5E5]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3 p-8 bg-white border border-[#E5E5E5] hover:border-black transition-all">
            <span className="font-serif text-4xl text-black font-normal">01</span>
            <h3 className="font-serif text-2xl text-black italic">
              Raw Permanence
            </h3>
            <p className="text-xs text-[#555555] leading-relaxed font-light">
              We work exclusively in authentic, unpainted substances: Swedish diabase, volcanic basalt, alpine granite, lime mortars, and lost-wax bronze. Materials that record weather and sunlight rather than decaying.
            </p>
          </div>

          <div className="space-y-3 p-8 bg-white border border-[#E5E5E5] hover:border-black transition-all">
            <span className="font-serif text-4xl text-black font-normal">02</span>
            <h3 className="font-serif text-2xl text-black italic">
              Architectural Scale
            </h3>
            <p className="text-xs text-[#555555] leading-relaxed font-light">
              Our sculptures and objects do not sit passively upon pedestals. They anchor rooms, interrupt spatial axes, and alter acoustic reverberation. They are micro-architecture.
            </p>
          </div>

          <div className="space-y-3 p-8 bg-white border border-[#E5E5E5] hover:border-black transition-all">
            <span className="font-serif text-4xl text-black font-normal">03</span>
            <h3 className="font-serif text-2xl text-black italic">
              Contemplative Solitude
            </h3>
            <p className="text-xs text-[#555555] leading-relaxed font-light">
              We limit attendance during exhibitions and private viewings. We design our spaces with generous negative void so each visitor can encounter works in profound, unhurried silence.
            </p>
          </div>
        </div>
      </section>

      {/* Physical Topology / Salons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        <div className="max-w-2xl">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#666666] font-semibold block mb-2">
            PHYSICAL TOPOLOGY
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-black font-normal">
            The Salons: Zurich & Kyoto
          </h2>
          <p className="text-xs text-[#555555] font-light mt-2">
            Our permanent spaces were converted from historical cloister and machiya buildings, stripping away modern ornament to reveal raw stonework.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Zurich Space */}
          <div className="space-y-4">
            <div className="relative aspect-[16/11] bg-[#FAFAFA] border border-[#E5E5E5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=85"
                alt="Cloud Gallery Zurich Cloister"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 bg-[#FAFAFA] border border-[#E5E5E5] space-y-3">
              <div className="flex justify-between items-baseline">
                <h3 className="font-serif text-2xl text-black">
                  Zurich Main Cloister
                </h3>
                <span className="text-xs uppercase tracking-widest font-semibold text-black">
                  900 m²
                </span>
              </div>
              <p className="text-xs text-[#555555] leading-relaxed font-light">
                Featuring 5.5-meter ceilings with restored 18th-century timber trusses and lime-washed masonry. Naturally illuminated by continuous north-facing skylights designed to eliminate ultraviolet glare on raw stone works.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#666666]">
                <span className="flex items-center gap-1.5 font-medium text-black">
                  <MapPin size={13} />
                  Rämistrasse 44, Zürich
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={13} />
                  Wed – Sat: 11:00 – 18:00
                </span>
              </div>
            </div>
          </div>

          {/* Kyoto Atelier */}
          <div className="space-y-4">
            <div className="relative aspect-[16/11] bg-[#FAFAFA] border border-[#E5E5E5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=85"
                alt="Cloud Gallery Kyoto Machiya"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 bg-[#FAFAFA] border border-[#E5E5E5] space-y-3">
              <div className="flex justify-between items-baseline">
                <h3 className="font-serif text-2xl text-black">
                  Kyoto Machiya Atelier
                </h3>
                <span className="text-xs uppercase tracking-widest font-semibold text-black">
                  340 m²
                </span>
              </div>
              <p className="text-xs text-[#555555] leading-relaxed font-light">
                An authentic preserved Edo-era machiya townhouse featuring an internal moss gravel courtyard (tsuboniwa) and shoji partitions, dedicated to displaying ceramic vessels, monotypes, and tea sculptures.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#666666]">
                <span className="flex items-center gap-1.5 font-medium text-black">
                  <MapPin size={13} />
                  Higashiyama-ku, Kyoto
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={13} />
                  By Private Appointment
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Private Viewing CTA */}
        <div className="p-8 sm:p-12 bg-black text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-black">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#CCCCCC] font-semibold block">
              COLLECTOR PROTOCOL
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-white">
              Arrange a Private Salon Viewing
            </h3>
            <p className="text-xs text-[#DDDDDD] max-w-lg font-light">
              We offer exclusive after-hours appointments for private collectors, museum trustees, and architects seeking site-specific commissions.
            </p>
          </div>
          <button
            onClick={() => openEnquiry(null)}
            className="px-7 py-3 bg-white text-black hover:bg-[#EEEEEE] text-xs uppercase tracking-[0.25em] font-medium transition-colors flex-shrink-0"
          >
            Request Appointment
          </button>
        </div>
      </section>
    </div>
  );
}
