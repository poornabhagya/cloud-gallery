"use client";

import React from "react";
import Image from "next/image";
import { VIDEOS_DATA, CloudVideo } from "@/data/mockData";
import { useGallery } from "@/context/GalleryContext";
import { Play, Film, Video } from "lucide-react";

interface CategorySectionData {
  id: string;
  index: string;
  title: string;
  description: string;
  curatorialNote: string;
  videos: CloudVideo[];
  placeholders: {
    title: string;
    subtitle: string;
    duration: string;
    speaker: string;
    tag: string;
  }[];
}

export default function CloudTVPage() {
  const { openVideo } = useGallery();

  // Curated datasets for all 7 required video categories
  const categorySections: CategorySectionData[] = [
    {
      id: "discussions",
      index: "01",
      title: "DISCUSSIONS",
      description: "Videos will appear here.",
      curatorialNote:
        "Critical symposia, collector roundtables, and philosophical discourses interrogating contemporary materiality, provenance, and the future of private collections.",
      videos: [
        VIDEOS_DATA.find((v) => v.id === "vid-2") || {
          id: "disc-1",
          title: "The Architecture of Silence: Tactile Space & Light",
          category: "Discussions",
          duration: "21:05",
          thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
          videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-building-with-glass-facade-41380-large.mp4",
          embedType: "direct",
          featured: false,
          excerpt: "A deep dialogue on why contemporary spaces must abandon synthetic surfaces in favor of mineral permanence, acoustic silence, and daylight absorption.",
          speaker: "Kaelen Thorne & Dr. Marlene Weill",
        },
        {
          id: "disc-2",
          title: "The Living Antiquity: Longevity in Bronze & Granite",
          category: "Discussions",
          duration: "28:40",
          thumbnail: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85",
          videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-potter-shaping-clay-on-a-wheel-41221-large.mp4",
          embedType: "direct",
          featured: false,
          excerpt: "Gallerists, preservationists, and sculptors convene at Cloud Salon to discuss weathering patinas, chemical oxidation, and multi-century conservation.",
          speaker: "Henrik Vestergaard, Clara Lindholm & Guests",
        },
      ],
      placeholders: [
        {
          title: "Curatorial Symposium: Provenance in the Digital Age",
          subtitle: "Videos will appear here. [Upcoming Stream]",
          duration: "35:00",
          speaker: "International Advisory Board",
          tag: "Symposium Stream",
        },
      ],
    },
    {
      id: "interviews",
      index: "02",
      title: "INTERVIEWS",
      description: "Videos will appear here.",
      curatorialNote:
        "One-on-one monograph conversations with painters, sculptors, and master artisans exploring their internal methodologies, creative crises, and aesthetic origins.",
      videos: [
        VIDEOS_DATA.find((v) => v.id === "vid-4") || {
          id: "int-1",
          title: "Material Memory: Grinding Alpine Pigments by Hand",
          category: "Interviews",
          duration: "11:18",
          thumbnail: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85",
          videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-artist-working-on-a-canvas-with-brush-42797-large.mp4",
          embedType: "direct",
          featured: false,
          excerpt: "Kaelen Thorne reflects on collecting raw hematite and slate in alpine glaciers, pulverizing minerals into archival oils with granite pestles.",
          speaker: "Kaelen Thorne",
        },
        {
          id: "int-2",
          title: "The Sculptor's Hands: Monologue on Form and Resistance",
          category: "Interviews",
          duration: "18:32",
          thumbnail: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=85",
          videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-potter-shaping-clay-on-a-wheel-41221-large.mp4",
          embedType: "direct",
          featured: false,
          excerpt: "Elena Rostova discusses working with Carrara marble, the physical dialogue of hand chisels, and the irrevocable discipline of direct stone carving.",
          speaker: "Elena Rostova",
        },
      ],
      placeholders: [
        {
          title: "In Conversation: The Vision Behind Cloud Gallery",
          subtitle: "Videos will appear here. [Cloud Monograph]",
          duration: "24:10",
          speaker: "Mr. Prasanna & Curatorial Director",
          tag: "Founder Monograph",
        },
      ],
    },
    {
      id: "studio-visits",
      index: "03",
      title: "STUDIO VISITS",
      description: "Videos will appear here.",
      curatorialNote:
        "Cinematic walkthroughs inside private artist ateliers, secluded mountain foundries, and historic wood workshops around the globe.",
      videos: [
        VIDEOS_DATA.find((v) => v.id === "vid-1") || {
          id: "stud-1",
          title: "Inside the Foundry: Lost Wax & 1,200°C Bronze",
          category: "Studio Visits",
          duration: "14:20",
          thumbnail: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=85",
          videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-potter-shaping-clay-on-a-wheel-41221-large.mp4",
          embedType: "direct",
          featured: true,
          excerpt: "Step into the intense heat of the northern Italian foundry where 1,200°C molten bronze is hand-poured into silica investment molds.",
          speaker: "Henrik Vestergaard & Elena Rostova",
        },
        VIDEOS_DATA.find((v) => v.id === "vid-6") || {
          id: "stud-2",
          title: "Kyoto Machiya: Restoring Edo Timber Joinery",
          category: "Studio Visits",
          duration: "13:12",
          thumbnail: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=85",
          videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-potter-shaping-clay-on-a-wheel-41221-large.mp4",
          embedType: "direct",
          featured: false,
          excerpt: "A quiet morning inside Kenzo Mori's workshop in Kyoto, exploring hand-planed Hinoki cypress beams and joinery without nails.",
          speaker: "Kenzo Mori",
        },
      ],
      placeholders: [
        {
          title: "Nordic Atelier: Winter Light & Canvas Primer",
          subtitle: "Videos will appear here. [Upcoming Visit]",
          duration: "15:45",
          speaker: "Studio Nube, Copenhagen",
          tag: "Atelier Tour",
        },
      ],
    },
    {
      id: "event-videos",
      index: "04",
      title: "EVENT VIDEOS",
      description: "Videos will appear here.",
      curatorialNote:
        "High-definition recordings and atmospheric cinema from Cloud Gallery private views, preview vernissages, seasonal galas, and art fair installations.",
      videos: [
        {
          id: "ev-1",
          title: "Autumn Vernissage: Monoliths & Nocturnes",
          category: "Event Videos",
          duration: "08:45",
          thumbnail: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=85",
          videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-building-with-glass-facade-41380-large.mp4",
          embedType: "direct",
          featured: false,
          excerpt: "Patrons, international collectors, and exhibiting artists assemble for the private view opening across Cloud's main exhibition hall.",
          speaker: "Cloud Curatorial Committee",
        },
        {
          id: "ev-2",
          title: "Cloud Gala & Collector Preview: The 2026 Collection",
          category: "Event Videos",
          duration: "12:15",
          thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85",
          videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-potter-shaping-clay-on-a-wheel-41221-large.mp4",
          embedType: "direct",
          featured: false,
          excerpt: "An exclusive evening documenting the unveilings of monumental commissions, live orchestral accompaniment, and keynote remarks.",
          speaker: "VIP Collector Delegation",
        },
      ],
      placeholders: [
        {
          title: "International Biennial: Cloud Pavilion Exhibition",
          subtitle: "Videos will appear here. [Upcoming Event]",
          duration: "19:00",
          speaker: "Biennale Delegation",
          tag: "Event Coverage",
        },
      ],
    },
    {
      id: "behind-the-scenes",
      index: "05",
      title: "BEHIND THE SCENES",
      description: "Videos will appear here.",
      curatorialNote:
        "Unfiltered records of physical labor: the extraction of deep-earth stone, the secret recipes of hand-boiled glazes, and museum-grade crate construction.",
      videos: [
        VIDEOS_DATA.find((v) => v.id === "vid-3") || {
          id: "bts-1",
          title: "Anagama: 72 Hours of Ash and Flame",
          category: "Behind the Scenes",
          duration: "09:44",
          thumbnail: "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=1200&q=85",
          videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-potter-smoothing-clay-on-a-wheel-41223-large.mp4",
          embedType: "direct",
          featured: false,
          excerpt: "Documenting the relentless night shifts keeping the firewood stoked to reach 1,300°C in the hillside kiln outside Kyoto.",
          speaker: "Aoi Minamoto",
        },
        {
          id: "bts-2",
          title: "White Glove Logistics: Packaging a 4-Metre Diptych",
          category: "Behind the Scenes",
          duration: "07:22",
          thumbnail: "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&w=1200&q=85",
          videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-building-with-glass-facade-41380-large.mp4",
          embedType: "direct",
          featured: false,
          excerpt: "Step inside our temperature-controlled conservation vault as master technicians custom-build cedar crates for international air transit.",
          speaker: "Cloud Logistics & Conservation",
        },
      ],
      placeholders: [
        {
          title: "Granite Quarrying: 12-Ton Monolith Extraction",
          subtitle: "Videos will appear here. [Field Footage]",
          duration: "11:30",
          speaker: "Alpine Quarry Masters",
          tag: "Field Footage",
        },
      ],
    },
    {
      id: "project-videos",
      index: "06",
      title: "PROJECT VIDEOS",
      description: "Videos will appear here.",
      curatorialNote:
        "Case studies detailing landmark architectural collaborations, luxury hotel installations, site-specific sculptures, and bespoke residential sanctuaries.",
      videos: [
        VIDEOS_DATA.find((v) => v.id === "vid-5") || {
          id: "proj-1",
          title: "The Engadin Monolith: Winter Construction Log",
          category: "Project Videos",
          duration: "16:40",
          thumbnail: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=85",
          videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-building-with-glass-facade-41380-large.mp4",
          embedType: "direct",
          featured: false,
          excerpt: "Behind the scenes of transporting 9-ton granite blocks across Swiss mountain passes during November blizzards for an alpine sanctuary.",
          speaker: "Marc Althaus",
        },
        {
          id: "proj-2",
          title: "The Coastal Glass Residence: Curating Art in Salt Air",
          category: "Project Videos",
          duration: "13:50",
          thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
          videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-building-with-glass-facade-41380-large.mp4",
          embedType: "direct",
          featured: false,
          excerpt: "How Cloud Gallery collaborated with architects to install weather-resistant bronze and mineral pigments inside an oceanfront estate.",
          speaker: "Cloud Architectural Advisory",
        },
      ],
      placeholders: [
        {
          title: "Grand Atrium Sculpture: Engineering & Rigging",
          subtitle: "Videos will appear here. [Case Study]",
          duration: "14:15",
          speaker: "Cloud Structural Engineering",
          tag: "Architectural Film",
        },
      ],
    },
    {
      id: "short-videos",
      index: "07",
      title: "SHORT VIDEOS",
      description: "Videos will appear here.",
      curatorialNote:
        "Micro-essays, 60-second tactile details, brushstroke close-ups, and audio vignettes formatted for focused, fast viewing.",
      videos: [
        {
          id: "short-1",
          title: "Gold Leaf Sizing: 0.1 Micron Precision",
          category: "Short Videos",
          duration: "00:54",
          thumbnail: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=85",
          videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-artist-working-on-a-canvas-with-brush-42797-large.mp4",
          embedType: "direct",
          featured: false,
          excerpt: "A 54-second sensory capture of pure gold leaf adhering to rabbit-skin glue gesso.",
          speaker: "Master Gilder",
        },
        {
          id: "short-2",
          title: "Chisel Meets Carrara: Sound of the First Cut",
          category: "Short Videos",
          duration: "00:48",
          thumbnail: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=85",
          videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-potter-shaping-clay-on-a-wheel-41221-large.mp4",
          embedType: "direct",
          featured: false,
          excerpt: "The acoustic resonance of tungsten carbide striking virgin white marble in Tuscany.",
          speaker: "Elena Rostova",
        },
        {
          id: "short-3",
          title: "Ceramic Turning: Centering Wet Wild Clay",
          category: "Short Videos",
          duration: "01:12",
          thumbnail: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=85",
          videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-potter-smoothing-clay-on-a-wheel-41223-large.mp4",
          embedType: "direct",
          featured: false,
          excerpt: "Hands coaxing rough Shigaraki clay into a tea bowl on a foot-pedal wheel.",
          speaker: "Aoi Minamoto",
        },
      ],
      placeholders: [
        {
          title: "Mineral Pigment Pulverization: 60-Second Loop",
          subtitle: "Videos will appear here. [Short Clip]",
          duration: "00:59",
          speaker: "Kaelen Thorne",
          tag: "Short Reel",
        },
      ],
    },
  ];

  return (
    <div className="w-full bg-white text-black min-h-screen pb-32">
      {/* ========================================================
          FULL-BLEED CINEMA HERO BANNER (SOTHEBY'S AESTHETIC)
      ======================================================== */}
      <section className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] bg-black overflow-hidden border-b border-[#E5E5E5]">
        <Image
          src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=2600&q=90"
          alt="Cloud TV Documentary Cinema and Studio Essays"
          fill
          priority
          className="object-cover object-center brightness-[0.82] contrast-[1.08]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

        {/* Hero Top Badge */}
        <div className="absolute top-6 left-6 sm:left-12">
          <span className="text-[10px] tracking-[0.3em] uppercase bg-black/80 backdrop-blur-xs px-3.5 py-1.5 border border-white/25 text-white font-medium">
            DOCUMENTARY CINEMA · ARTIST ESSAYS · 4K REPERTORY
          </span>
        </div>

        {/* Hero Bottom Title & Metadata */}
        <div className="absolute bottom-8 left-6 sm:left-12 right-6 sm:right-12 text-white max-w-4xl space-y-3">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#CCCCCC]">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span>CLOUD TV </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight text-white">
            Cloud TV
          </h1>
          <p className="font-merriweather text-xs sm:text-sm text-[#DDDDDD] font-light max-w-2xl leading-relaxed italic">
            Short-form documentary cinema capturing raw furnace bronze pours at 1,200°C, mountain granite quarry extractions in Norway, and slow architectural philosophy.
          </p>
        </div>
      </section>

      {/* ========================================================
          STICKY SECTION JUMP NAVIGATION BAR
      ======================================================== */}
      <nav
        aria-label="Cloud TV Categories Navigation"
        className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-[#E5E5E5] shadow-xs"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center space-x-1 sm:space-x-2 shrink-0">
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#888888] font-bold mr-2 hidden md:inline">
              INDEX:
            </span>
            {categorySections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="px-3 py-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-medium text-black hover:text-[#081757] hover:bg-neutral-100 border border-transparent hover:border-[#E5E5E5] transition-all whitespace-nowrap"
              >
                {section.title}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#666666] shrink-0 font-medium">
            <span>7 DEDICATED CHANNELS</span>
            <span>·</span>
            <span>4K ULTRA HD</span>
          </div>
        </div>
      </nav>


      {/* ========================================================
          ALL 7 VIDEO CATEGORIES AS SCROLLABLE SECTIONS
      ======================================================== */}
      <div className="space-y-24 pt-16">
        {categorySections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-36"
          >
            {/* Category Header (Sotheby's Aesthetic) */}
            <div className="border-b border-black pb-5 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#888888]">
                    SERIES {section.index} / 07
                  </span>
                  <span className="h-2 w-px bg-[#CCCCCC]" />
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#081757] font-semibold">
                    CLOUD TV CHANNEL
                  </span>
                </div>

                <div className="flex flex-wrap items-baseline gap-3">
                  <h2 className="font-roboto font-bold text-3xl sm:text-4xl text-[#081757] tracking-tight">
                    {section.title}
                  </h2>
                </div>

                {/* Exact required line prominently featured */}
                <p className="font-merriweather text-sm text-[#081757] font-semibold italic">
                  ({section.description})
                </p>

                <p className="font-merriweather font-light text-xs sm:text-sm text-black max-w-2xl leading-relaxed pt-1">
                  {section.curatorialNote}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#777777] font-medium bg-[#FAFAFA] border border-[#E5E5E5] px-3 py-1.5">
                  {section.videos.length + section.placeholders.length} TITLES IN ARCHIVE
                </span>
                <a
                  href={`#${section.id}`}
                  className="text-[10px] uppercase tracking-[0.2em] font-bold text-black hover:text-[#081757] transition-colors flex items-center gap-1"
                >
                  <span>TOP</span>
                  <span>↑</span>
                </a>
              </div>
            </div>

            {/* Video Container & Grid Layout */}
            {section.id === "short-videos" ? (
              /* Specific 9:16 or compact vertical reel layout for SHORT VIDEOS */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {section.videos.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => openVideo(video)}
                    className="group bg-white border border-[#E5E5E5] hover:border-black transition-all cursor-pointer flex flex-col justify-between shadow-xs hover:shadow-md"
                  >
                    {/* Vertical Aspect Ratio 4:5 / Reel */}
                    <div className="relative aspect-[4/5] bg-black overflow-hidden border-b border-[#E5E5E5]">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                      {/* Small Reel Play Badge */}
                      <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-black/80 backdrop-blur-xs flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors shadow-lg">
                        <Play size={16} fill="currentColor" className="translate-x-0.5" />
                      </div>

                      <div className="absolute top-3 left-3 bg-white px-2 py-0.5 text-[9px] uppercase tracking-widest font-bold text-black border border-[#E5E5E5]">
                        {video.duration}
                      </div>

                      <div className="absolute bottom-3 left-3 right-16 text-white">
                        <span className="text-[9px] uppercase tracking-[0.2em] text-[#CCCCCC] font-bold block">
                          REEL ESSAY
                        </span>
                        <h4 className="font-serif text-sm text-white line-clamp-2 leading-snug">
                          {video.title}
                        </h4>
                      </div>
                    </div>

                    <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                      <p className="font-merriweather text-xs text-[#666666] leading-relaxed italic line-clamp-2">
                        {video.excerpt}
                      </p>
                      <div className="pt-2 border-t border-[#EEEEEE] text-[10px] text-[#081757] font-semibold uppercase tracking-wider flex items-center justify-between">
                        <span>WATCH SHORT</span>
                        <span>→</span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Short Video Placeholder Card */}
                {section.placeholders.map((ph, idx) => (
                  <div
                    key={idx}
                    className="border-2 border-dashed border-[#DDDDDD] bg-[#FAFAFA] aspect-[4/5] p-5 flex flex-col justify-between text-center relative group hover:border-[#888888] transition-colors"
                  >
                    <div className="flex justify-between items-start text-[9px] uppercase tracking-widest text-[#888888] font-bold">
                      <span>{ph.tag}</span>
                      <span>{ph.duration}</span>
                    </div>

                    <div className="space-y-3 my-auto">
                      <div className="w-12 h-12 mx-auto rounded-full border border-[#CCCCCC] flex items-center justify-center text-[#888888]">
                        <Video size={20} />
                      </div>
                      <h4 className="font-serif text-base text-black font-normal">
                        {ph.title}
                      </h4>
                      <p className="font-merriweather text-xs text-[#081757] italic font-semibold">
                        {ph.subtitle}
                      </p>
                    </div>

                    <div className="text-[10px] text-[#888888] uppercase tracking-[0.18em] border-t border-[#E5E5E5] pt-3">
                      Curatorial Pipeline · {ph.speaker}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Standard 16:9 Cinema 3-Column Grid for Sections 1-6 */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.videos.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => openVideo(video)}
                    className="group bg-white border border-[#E5E5E5] hover:border-black transition-all cursor-pointer flex flex-col justify-between shadow-xs hover:shadow-md"
                  >
                    {/* Thumbnail Container (16:9 Aspect Ratio) */}
                    <div className="relative aspect-video bg-black overflow-hidden border-b border-[#E5E5E5]">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />

                      {/* Small Play Badge */}
                      <div className="absolute bottom-3.5 right-3.5 w-10 h-10 rounded-full bg-black/80 backdrop-blur-xs flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors shadow-lg">
                        <Play size={16} fill="currentColor" className="translate-x-0.5" />
                      </div>

                      <div className="absolute top-3 left-3 bg-white px-2 py-0.5 text-[9px] uppercase tracking-widest font-bold text-black border border-[#E5E5E5]">
                        {video.duration}
                      </div>
                    </div>

                    {/* Video Info Card */}
                    <div className="p-6 space-y-3.5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="text-[10px] tracking-widest uppercase text-[#081757] font-bold">
                            {section.title}
                          </span>
                          <span className="text-[10px] text-[#888888] font-mono">
                            {video.duration}
                          </span>
                        </div>
                        <h3 className="font-serif text-xl text-black group-hover:underline leading-snug">
                          {video.title}
                        </h3>
                        <p className="font-merriweather text-xs text-[#555555] leading-relaxed font-light mt-2 line-clamp-3 italic">
                          {video.excerpt}
                        </p>
                      </div>

                      <div className="pt-3.5 border-t border-[#EEEEEE] text-[11px] text-[#777777] flex items-center justify-between">
                        <span className="italic truncate pr-2">
                          Featuring {video.speaker}
                        </span>
                        <span className="uppercase text-[10px] font-bold text-[#081757] tracking-wider shrink-0 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                          <span>Watch</span>
                          <span>→</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Clean Sotheby's Placeholder Container */}
                {section.placeholders.map((ph, idx) => (
                  <div
                    key={idx}
                    className="border-2 border-dashed border-[#DDDDDD] bg-[#FAFAFA] min-h-[340px] p-6 flex flex-col justify-between text-left group hover:border-[#888888] transition-colors"
                  >
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-[#888888] font-bold border-b border-[#E5E5E5] pb-3">
                      <span>{ph.tag}</span>
                      <span>{ph.duration}</span>
                    </div>

                    <div className="space-y-3 my-auto py-6">
                      <div className="w-12 h-12 rounded-full border border-[#CCCCCC] flex items-center justify-center text-[#888888]">
                        <Film size={20} />
                      </div>
                      <h3 className="font-serif text-xl text-black font-normal">
                        {ph.title}
                      </h3>
                      <p className="font-merriweather text-xs text-[#081757] italic font-semibold">
                        {ph.subtitle}
                      </p>
                      <p className="text-xs text-[#777777] font-light leading-relaxed">
                        Master cinema footage for this {section.title.toLowerCase()} installation is currently undergoing archival color grading and 4K mastering.
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#E5E5E5] flex items-center justify-between text-[10px] uppercase tracking-wider text-[#888888]">
                      <span>{ph.speaker}</span>
                      <span className="font-semibold text-black">IN CURATION</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
