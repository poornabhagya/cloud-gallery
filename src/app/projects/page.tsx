"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useGallery } from "@/context/GalleryContext";
import { MapPin, Calendar, Sparkles } from "lucide-react";

const CATEGORIES = [
  "ALL",
  "ARCHITECTURE",
  "INTERIOR DESIGN",
  "LANDSCAPING",
  "FURNITURE",
  "LIGHTING",
] as const;

type ProjectCategory = (typeof CATEGORIES)[number];

interface ProjectItem {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, "ALL">;
  location: string;
  year: string;
  description: string;
  image: string;
  specs: string[];
}

const PROJECTS_DATA: ProjectItem[] = [
  // 1. ARCHITECTURE
  {
    id: "proj-arch-1",
    title: "The Kunsthaus Cloister Pavilions",
    category: "ARCHITECTURE",
    location: "Zurich, Switzerland",
    year: "2025",
    description: "Installation of three nine-ton carved Swedish diabase monoliths within the museum open-air cloister courtyard, creating an acoustic sanctuary and daylight reflector.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=85",
    specs: ["9,200 kg Swedish Diabase", "Hydraulic counter-pivot system", "Seismic anchoring foundation"],
  },
  {
    id: "proj-arch-2",
    title: "Engadin Alpine Sanctuary",
    category: "ARCHITECTURE",
    location: "St. Moritz, Switzerland",
    year: "2024",
    description: "Tamped concrete and raw granite pavilion framing negative voids toward mountain passes at 1,800m altitude. Zero-synthetic binder protocol.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    specs: ["Tamped Alpine Concrete", "Glacial Moraine Aggregate", "Thermal Siphon Heating"],
  },
  {
    id: "proj-arch-3",
    title: "CLOUD GALLERY: Permanent Atelier Cloister",
    category: "ARCHITECTURE",
    location: "Zurich & Copenhagen",
    year: "2026",
    description: "900 square meters of lime-washed spatial clarity and north skylights within a restored 18th-century cloister, featuring monolithic stone plinths.",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=85",
    specs: ["Restored 18th-c. Travertine", "UV-free North Skylights", "Lime-Plaster Acoustics"],
  },

  // 2. INTERIOR DESIGN
  {
    id: "proj-int-1",
    title: "Kyoto Tea Master Residence & Gallery",
    category: "INTERIOR DESIGN",
    location: "Kyoto, Japan",
    year: "2025",
    description: "Custom interior commission pairing blackened cedar joinery, hand-chiseled basalt floor plates, and unbleached flax wall textiles.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
    specs: ["Yakisugi Blackened Cedar", "Hand-Chiseled Basalt", "Raw Flax Drapery"],
  },
  {
    id: "proj-int-2",
    title: "Zurich Lakehouse Minimalist Penthouse",
    category: "INTERIOR DESIGN",
    location: "Zurich, Switzerland",
    year: "2024",
    description: "Monolithic Roman travertine hearth, hand-troweled lime wash finishes, and hidden acoustic baffles overlooking Lake Zurich.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    specs: ["Roman Travertine Hearth", "Venetian Lime Marmorino", "Concealed Spatial Audio"],
  },
  {
    id: "proj-int-3",
    title: "Copenhagen Atelier Living Quarters",
    category: "INTERIOR DESIGN",
    location: "Copenhagen, Denmark",
    year: "2023",
    description: "Solid Douglas fir full-length planks, raw Gotland limestone kitchen monolithic island, and low-iron architectural glazing.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
    specs: ["Dinesen Douglas Fir", "Gotland Limestone Island", "Patinated Brass Details"],
  },

  // 3. LANDSCAPING
  {
    id: "proj-land-1",
    title: "Alpine Granite Monolith Garden",
    category: "LANDSCAPING",
    location: "Andermatt, Switzerland",
    year: "2025",
    description: "Seven-monolith astronomical alignment of split alpine granite stones integrated into high-altitude native moss and pine topography.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85",
    specs: ["Alpine Granite Monoliths", "Native Alpine Moss Flora", "Subsurface Drainage Matrix"],
  },
  {
    id: "proj-land-2",
    title: "Basalt Water Court & Zen Cloister",
    category: "LANDSCAPING",
    location: "Kyoto, Japan",
    year: "2024",
    description: "Hand-hollowed six-ton volcanic basalt water mirror capturing celestial reflections alongside raked granite gravel courtyards.",
    image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=85",
    specs: ["6,000 kg Volcanic Basalt", "Circulating Mineral Reservoir", "Crushed Shirakawa Granite"],
  },
  {
    id: "proj-land-3",
    title: "Gotthard Pass Stone Sanctuary",
    category: "LANDSCAPING",
    location: "Gotthard, Switzerland",
    year: "2023",
    description: "Dry-stacked Gotthard slate retaining plinths and outdoor sculpture terracing designed to endure extreme sub-zero alpine blizzards.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
    specs: ["Dry-Stacked Slate Plinths", "Frost-Proof Granite Joints", "Sub-Zero Structural Mortar"],
  },

  // 4. FURNITURE
  {
    id: "proj-furn-1",
    title: "Monolithic Travertine Dining Plinth",
    category: "FURNITURE",
    location: "Zurich Commission",
    year: "2025",
    description: "Single-block 3.2-meter unfilled Roman travertine table carved from a 14-ton quarry piece. Limited edition of 3.",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=85",
    specs: ["Unfilled Roman Travertine", "Integrated Counter-Pivot", "Hand-Honed Satin Finish"],
  },
  {
    id: "proj-furn-2",
    title: "Carved Diabase Bench Series",
    category: "FURNITURE",
    location: "Permanent Collection",
    year: "2024",
    description: "Solid Swedish diabase monolithic bench with mirror-polished seat face and rough quarry-split flanks, balanced by patinated bronze legs.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85",
    specs: ["Black Swedish Diabase", "Lost-Wax Cast Bronze Feet", "Mirror & Split Contrasts"],
  },
  {
    id: "proj-furn-3",
    title: "Burnt Hinoki Cypress Console Table",
    category: "FURNITURE",
    location: "Kyoto Atelier",
    year: "2025",
    description: "Salvaged 300-year-old temple Hinoki timber treated with traditional soot burning and stabilized with gunmetal bronze inlays.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85",
    specs: ["300-yr Temple Hinoki", "Gunmetal Bronze Braces", "Natural Beeswax Sealant"],
  },

  // 5. LIGHTING
  {
    id: "proj-light-1",
    title: "Alabaster Sconce & Monolith Column Light",
    category: "LIGHTING",
    location: "Geneva Commission",
    year: "2025",
    description: "Translucent Spanish alabaster cylinder carved to 8mm wall thickness, diffusing indirect warm 2400K light against mineral plaster.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=85",
    specs: ["8mm Spanish Alabaster", "2400K High-CRI LED Core", "Concealed Bronze Bracket"],
  },
  {
    id: "proj-light-2",
    title: "Forged Bronze Architectural Chandelier",
    category: "LIGHTING",
    location: "Zurich Salon",
    year: "2024",
    description: "2.4-meter linear lost-wax patinated bronze beam with micro-recessed directional optics creating sculptural shadows across travertine tables.",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=85",
    specs: ["Lost-Wax Cast Bronze", "Micro-Recessed Optics", "Aircraft Cable Suspension"],
  },
  {
    id: "proj-light-3",
    title: "Porous Basalt Totem Lanterns",
    category: "LIGHTING",
    location: "Kyoto Cloister",
    year: "2023",
    description: "Floor-standing volcanic basalt totems cored to house ambient amber illuminators, weathering gracefully outdoors in rain and snow.",
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1200&q=85",
    specs: ["Volcanic Basalt Totem", "IP68 Weatherproof LED", "Dimmable Low-Voltage Circuit"],
  },
];

function ProjectsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const { openEnquiry } = useGallery();

  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("ALL");

  useEffect(() => {
    if (categoryParam) {
      const match = CATEGORIES.find(
        (c) => c.toLowerCase() === categoryParam.toLowerCase()
      );
      if (match) {
        setActiveCategory(match);
      }
    }
  }, [categoryParam]);

  const filteredProjects =
    activeCategory === "ALL"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full bg-white text-black min-h-screen pb-32">
      {/* Hero Banner */}
      <section className="relative w-full h-[380px] sm:h-[480px] lg:h-[540px] bg-black overflow-hidden border-b border-[#E5E5E5]">
        <Image
          src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=2600&q=90"
          alt="Cloud Gallery Architectural Projects & Monoliths"
          fill
          priority
          className="object-cover object-center brightness-[0.82] contrast-[1.05]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute bottom-8 left-6 sm:left-12 max-w-2xl text-white space-y-2">
          <span className="text-[10px] tracking-[0.3em] uppercase bg-black/80 px-3 py-1 border border-white/20 font-medium">
            MONUMENTAL COMMISSIONS & SPATIAL INSTALLATIONS
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal leading-tight text-white">
            Architectural Projects
          </h1>
          <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
            From multi-ton alpine granite cloisters to site-specific museum courtyards, minimalist residential interiors, landscaping monoliths, and bespoke lighting.
          </p>
        </div>
      </section>

      {/* Category Filter Bar (Client Specification) */}
      <section className="border-b border-[#E5E5E5] bg-[#FAFAFA] py-5 px-4 sm:px-6 lg:px-8 sticky top-20 z-30 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-[11px] uppercase tracking-[0.2em] transition-all font-medium border whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? "bg-black text-white border-black font-semibold shadow-xs"
                    : "bg-white text-[#666666] border-[#E5E5E5] hover:border-black hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <button
            onClick={() => openEnquiry(null)}
            className="text-[11px] uppercase tracking-[0.2em] font-medium text-black border border-black px-5 py-2 hover:bg-black hover:text-white transition-colors whitespace-nowrap"
          >
            COMMISSION A PROJECT →
          </button>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#E5E5E5]">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#666666] font-semibold">
            SHOWING {filteredProjects.length} {activeCategory === "ALL" ? "PROJECTS" : activeCategory} DOSSIERS
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#888888]">
            ZURICH · KYOTO · COPENHAGEN
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group border border-[#E5E5E5] bg-white flex flex-col justify-between hover:border-black hover:shadow-lg transition-all duration-300"
            >
              <div>
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-xs text-white text-[9px] tracking-[0.22em] uppercase px-2.5 py-1 font-medium">
                    {project.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-[#777777] font-light">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} /> {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {project.year}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-black font-normal leading-snug group-hover:underline">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#555555] font-light leading-relaxed">
                    {project.description}
                  </p>

                  {project.specs.length > 0 && (
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {project.specs.map((spec, i) => (
                        <span
                          key={i}
                          className="text-[9px] tracking-wider uppercase bg-[#FAFAFA] border border-[#EEEEEE] text-[#666666] px-2 py-0.5"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-transparent group-hover:border-[#F0F0F0] mt-4">
                <button
                  onClick={() => openEnquiry(null)}
                  className="w-full text-center py-2.5 border border-black text-[10px] tracking-[0.2em] uppercase font-medium hover:bg-black hover:text-white transition-colors"
                >
                  PROJECT DOSSIER & ENQUIRY
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ProjectsContent />
    </Suspense>
  );
}
