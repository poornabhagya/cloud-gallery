"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen pb-32">
      {/* Manifesto Header */}
      <section className="bg-[#EAE5DC] border-b border-[#E2DDD4] py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[11px] tracking-[0.35em] uppercase text-[#8C6D53] font-medium block">
            THE CLOUD MANIFESTO
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#2B2A27] font-light leading-tight">
            We are not merely a white cube. We are an active spatial laboratory.
          </h1>
          <p className="text-xs sm:text-sm text-[#7E7971] font-light leading-relaxed">
            Most galleries exist as passive stages for whatever works are delivered. Cloud Gallery was established under a singular radical conviction: that true spatial art must be conceived in dialogue with the physical room that holds it.
          </p>
        </div>
      </section>

      {/* Manifesting Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-[#E2DDD4]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-3 p-6 bg-[#EAE5DC]/40 border border-[#E2DDD4]">
            <span className="font-serif text-3xl text-[#8C6D53]">01</span>
            <h3 className="font-serif text-2xl text-[#2B2A27]">
              Raw Permanence
            </h3>
            <p className="text-xs text-[#7E7971] leading-relaxed font-light">
              We work exclusively in authentic, unpainted substances: Swedish diabase, volcanic basalt, alpine granite, lime mortars, and bronze. Materials that record weather and sunlight rather than decaying.
            </p>
          </div>

          <div className="space-y-3 p-6 bg-[#EAE5DC]/40 border border-[#E2DDD4]">
            <span className="font-serif text-3xl text-[#8C6D53]">02</span>
            <h3 className="font-serif text-2xl text-[#2B2A27]">
              Architectural Scale
            </h3>
            <p className="text-xs text-[#7E7971] leading-relaxed font-light">
              Our sculptures and objects do not sit passively upon pedestals. They anchor rooms, interrupt spatial axes, and alter acoustic reverberation. They are micro-architecture.
            </p>
          </div>

          <div className="space-y-3 p-6 bg-[#EAE5DC]/40 border border-[#E2DDD4]">
            <span className="font-serif text-3xl text-[#8C6D53]">03</span>
            <h3 className="font-serif text-2xl text-[#2B2A27]">
              Contemplative Solitude
            </h3>
            <p className="text-xs text-[#7E7971] leading-relaxed font-light">
              We limit attendance during exhibitions. We design our spaces with generous negative void so each visitor can encounter works in profound, unhurried silence.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Architecture Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        <div className="max-w-2xl">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#8C6D53] font-semibold block mb-2">
            PHYSICAL TOPOLOGY
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#2B2A27] font-light">
            The Spaces: Zurich & Kyoto
          </h2>
          <p className="text-xs text-[#7E7971] font-light mt-2">
            Our permanent spaces were converted from historical cloister buildings, stripping away centuries of ornamental plaster to reveal raw stonework.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Zurich Space */}
          <div className="space-y-4">
            <div className="relative aspect-[16/11] bg-[#EAE5DC] border border-[#E2DDD4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=85"
                alt="Cloud Gallery Zurich Cloister"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 bg-[#EAE5DC]/50 border border-[#E2DDD4] space-y-3">
              <div className="flex justify-between items-baseline">
                <h3 className="font-serif text-2xl text-[#2B2A27]">
                  Zurich Main Cloister
                </h3>
                <span className="text-xs uppercase tracking-widest text-[#8C6D53]">
                  900 m²
                </span>
              </div>
              <p className="text-xs text-[#7E7971] leading-relaxed font-light">
                Featuring 5.5-meter ceilings with restored 18th-century timber trusses and lime-washed masonry. Naturally illuminated by continuous north-facing skylights designed to eliminate ultraviolet glare on raw stone works.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs text-[#7E7971]">
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-[#8C6D53]" />
                  Rämistrasse 44, Zürich
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={13} className="text-[#8C6D53]" />
                  Wed – Sat: 11:00 – 18:00
                </span>
              </div>
            </div>
          </div>

          {/* Kyoto Atelier */}
          <div className="space-y-4">
            <div className="relative aspect-[16/11] bg-[#EAE5DC] border border-[#E2DDD4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=85"
                alt="Cloud Gallery Kyoto Machiya"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 bg-[#EAE5DC]/50 border border-[#E2DDD4] space-y-3">
              <div className="flex justify-between items-baseline">
                <h3 className="font-serif text-2xl text-[#2B2A27]">
                  Kyoto Machiya Atelier
                </h3>
                <span className="text-xs uppercase tracking-widest text-[#8C6D53]">
                  340 m²
                </span>
              </div>
              <p className="text-xs text-[#7E7971] leading-relaxed font-light">
                An authentic preserved Edo-era machiya townhouse featuring internal moss gravel courtyard (tsuboniwa) and shoji partitions, dedicated to displaying ceramic vessels, monotypes, and tea sculptures.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs text-[#7E7971]">
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-[#8C6D53]" />
                  Higashiyama-ku, Kyoto
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={13} className="text-[#8C6D53]" />
                  By Private Appointment
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Private Viewing CTA */}
        <div className="p-8 sm:p-12 bg-[#2B2A27] text-[#F4F0EA] flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#3A3833]">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#8C6D53] font-medium block">
              COLLECTOR PROTOCOL
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light">
              Arrange a Private Salon Viewing
            </h3>
            <p className="text-xs text-[#EAE5DC]/70 max-w-lg">
              We offer exclusive after-hours appointments for private collectors, museum trustees, and architects seeking site-specific commissions.
            </p>
          </div>
          <Link
            href="/open-call"
            className="px-7 py-3 bg-[#F4F0EA] hover:bg-[#8C6D53] text-[#2B2A27] hover:text-[#F4F0EA] text-xs uppercase tracking-[0.25em] font-medium transition-colors flex-shrink-0"
          >
            Request Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
