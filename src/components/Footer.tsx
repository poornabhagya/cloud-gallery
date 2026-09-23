"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="bg-[#EAE5DC] border-t border-[#E2DDD4] text-[#2B2A27] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-[#E2DDD4]">
          {/* Col 1 & 2: Newsletter & Identity */}
          <div className="lg:col-span-2 space-y-5">
            <div className="space-y-1">
              <span className="font-serif tracking-[0.45em] text-2xl font-normal text-[#2B2A27] block">
                C L O U D
              </span>
              <p className="text-xs uppercase tracking-[0.25em] text-[#7E7971]">
                ARCHITECTURAL GALLERY & STUDIO
              </p>
            </div>
            
            <p className="text-xs text-[#7E7971] max-w-sm leading-relaxed">
              Dedicated to raw materiality, monolithic form, and contemplative spatial design. Curating limited architectural works, bronze sculptures, and natural mineral works.
            </p>

            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#8C6D53] block mb-2">
                Private Viewings & Studio Notes
              </span>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-[#8C6D53] py-2">
                  <Check size={14} />
                  <span>Your address has been added to our private dispatch.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex max-w-md">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter collector or studio email..."
                    className="flex-1 bg-[#F4F0EA] border border-[#E2DDD4] border-r-0 px-3.5 py-2 text-xs text-[#2B2A27] placeholder:text-[#7E7971]/60 focus:outline-none focus:border-[#8C6D53]"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="bg-[#2B2A27] hover:bg-[#8C6D53] text-[#F4F0EA] px-4 py-2 text-xs uppercase tracking-widest font-medium transition-colors flex items-center justify-center"
                  >
                    <ArrowRight size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Col 3: Sitemap */}
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#8C6D53] font-semibold block mb-4">
              COLLECTION
            </span>
            <ul className="space-y-2.5 text-xs text-[#7E7971]">
              <li>
                <Link href="/gallery" className="hover:text-[#2B2A27] transition-colors">
                  All Artworks
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#2B2A27] transition-colors">
                  Monolithic Sculptures
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#2B2A27] transition-colors">
                  Wood-fired Porcelain
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#2B2A27] transition-colors">
                  Tectonic Paintings
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#2B2A27] transition-colors">
                  Architectural Lighting
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Studio & Practice */}
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#8C6D53] font-semibold block mb-4">
              PRACTICE
            </span>
            <ul className="space-y-2.5 text-xs text-[#7E7971]">
              <li>
                <Link href="/journey" className="hover:text-[#2B2A27] transition-colors">
                  Artist&apos;s Journey
                </Link>
              </li>
              <li>
                <Link href="/artists" className="hover:text-[#2B2A27] transition-colors">
                  Resident Artists
                </Link>
              </li>
              <li>
                <Link href="/collaborations" className="hover:text-[#2B2A27] transition-colors">
                  Collaborations
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-[#2B2A27] transition-colors">
                  Salon Agenda
                </Link>
              </li>
              <li>
                <Link href="/cloud-tv" className="hover:text-[#2B2A27] transition-colors">
                  Cloud TV Films
                </Link>
              </li>
              <li>
                <Link href="/open-call" className="hover:text-[#2B2A27] transition-colors">
                  Open Call
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Physical Spaces */}
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#8C6D53] font-semibold block mb-4">
              SPACES
            </span>
            <div className="space-y-4 text-xs text-[#7E7971]">
              <div>
                <p className="font-serif text-[#2B2A27] text-sm">Zurich Cloister</p>
                <p className="text-[11px] leading-relaxed">Rämistrasse 44, 8001 Zürich, Switzerland</p>
              </div>
              <div>
                <p className="font-serif text-[#2B2A27] text-sm">Kyoto Atelier</p>
                <p className="text-[11px] leading-relaxed">Higashiyama-ku, Kyoto 605-0074, Japan</p>
              </div>
              <div className="pt-2">
                <span className="text-[10px] tracking-widest uppercase text-[#8C6D53] block mb-1">
                  Private Salon Visits
                </span>
                <p className="text-[11px]">By prior appointment only.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7E7971]">
          <p className="text-[11px] tracking-wider">
            © {new Date().getFullYear()} CLOUD GALLERY ARCHITECTURAL STUDIO. ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center space-x-6 text-[11px] tracking-widest uppercase">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#2B2A27] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://vimeo.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#2B2A27] transition-colors"
            >
              Vimeo
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#2B2A27] transition-colors"
            >
              YouTube
            </a>
            <Link href="/about" className="hover:text-[#2B2A27] transition-colors">
              Manifesto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
