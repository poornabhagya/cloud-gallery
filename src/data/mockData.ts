export interface Artwork {
  id: string;
  title: string;
  artist: string;
  year: number;
  medium: string;
  dimensions: string;
  price: string;
  category: 
    | "Sculptures (Stone, Granite)"
    | "Porcelain"
    | "Paintings"
    | "Artworks"
    | "Furniture Pieces"
    | "Metal"
    | "Limited Editions"
    | "Lighting"
    | "Objects";
  image: string;
  description: string;
  featured?: boolean;
}

export interface Artist {
  id: string;
  name: string;
  origin: string;
  discipline: string;
  portrait: string;
  bio: string;
  signatureWork: string;
  statement: string;
}

export interface JourneyMilestone {
  id: string;
  year: string;
  title: string;
  discipline: "Architecture" | "Sculpture" | "Painting" | "Design";
  description: string;
  location: string;
  image: string;
}

export interface Collaboration {
  id: string;
  title: string;
  category: "Artist × Artist" | "Artist × Architect" | "Artist × Designer" | "Artist × Brand" | "Special Projects";
  collaborators: string;
  year: number;
  concept: string;
  process: string;
  outcome: string;
  images: string[];
}

export interface GalleryEvent {
  id: string;
  title: string;
  date: string;
  displayDate: string;
  time: string;
  monthGroup: "SEPTEMBER 2026" | "OCTOBER 2026" | "NOVEMBER 2026" | "PAST ARCHIVES";
  location: string;
  type: "Exhibition" | "Symposium" | "Private Viewing" | "Vernissage" | "Artist Talk";
  isPast: boolean;
  description: string;
  curator?: string;
}

export interface CloudVideo {
  id: string;
  title: string;
  category: "Artist Interviews" | "Studio Visits" | "Conversations: Art & Architecture" | "Behind the Work";
  duration: string;
  thumbnail: string;
  videoUrl: string;
  featured?: boolean;
  excerpt: string;
  speaker: string;
}

export const ARTWORKS_DATA: Artwork[] = [
  {
    id: "cg-01",
    title: "Monolith of Silence IV",
    artist: "Henrik Vestergaard",
    year: 2026,
    medium: "Honed Swedish Diabase & Raw Travertine",
    dimensions: "184 × 62 × 48 cm",
    price: "€ 42,000",
    category: "Sculptures (Stone, Granite)",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85",
    description: "A monolithic carved dialogue between unyielding granite and porous volcanic stone. Balanced along an uncalibrated pivot line.",
    featured: true,
  },
  {
    id: "cg-02",
    title: "Vessel of Inertia (Oat)",
    artist: "Aoi Minamoto",
    year: 2025,
    medium: "Wood-fired porcelain, feldspar glaze, ash wash",
    dimensions: "44 × 36 × 36 cm",
    price: "€ 8,500",
    category: "Porcelain",
    image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=1000&q=85",
    description: "Hand-thrown reduction chamber porcelain with unglazed tactile raw foot. Crystalline cooling fissures evoke glacial retreat.",
    featured: true,
  },
  {
    id: "cg-03",
    title: "Tectonic Study No. 12",
    artist: "Kaelen Thorne",
    year: 2026,
    medium: "Raw Belgian linen, gesso, mineral pigment & crushed slate",
    dimensions: "210 × 175 cm",
    price: "€ 28,000",
    category: "Paintings",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85",
    description: "Stratified pigment sweeps applied with wide timber trowels over unprimed flax weave. Examines the cadence of dusk light across architectural facets.",
    featured: true,
  },
  {
    id: "cg-04",
    title: "The Kyoto Low Plinth Table",
    artist: "Studio Nube × Kenzo Mori",
    year: 2026,
    medium: "Charred Shou Sugi Ban cedar & Honed Jura limestone",
    dimensions: "240 × 90 × 32 cm",
    price: "€ 19,500",
    category: "Furniture Pieces",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=85",
    description: "Low-slung tectonic bench plinth carved from ancient cedar logs, capped with cold-jointed Jura limestone slab.",
  },
  {
    id: "cg-05",
    title: "Void & Tension Bronze III",
    artist: "Elena Rostova",
    year: 2025,
    medium: "Lost-wax cast bronze with natural liver-of-sulphur patina",
    dimensions: "92 × 48 × 34 cm",
    price: "€ 34,000",
    category: "Metal",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=85",
    description: "An open armature exploring negative spatial presence. Cast by sand mold in a solitary foundry in Northern Piedmont.",
    featured: true,
  },
  {
    id: "cg-06",
    title: "Cantilevered Column in Calacatta",
    artist: "Henrik Vestergaard",
    year: 2026,
    medium: "Solid Calacatta Viola & Patinated Bronze",
    dimensions: "160 × 40 × 40 cm",
    price: "€ 38,000",
    category: "Sculptures (Stone, Granite)",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=85",
    description: "Fluted column element carved from a single quarry block, balancing a counter-weighted bronze cap.",
  },
  {
    id: "cg-07",
    title: "Shadow Sconce (Alabaster Eclipse)",
    artist: "Lucas & Clara Wei",
    year: 2026,
    medium: "Translucent Spanish Alabaster & Raw Gunmetal Brass",
    dimensions: "55 × 28 × 14 cm",
    price: "€ 6,200",
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=85",
    description: "Low-voltage architectural illumination diffused through a 18mm hand-chiseled slab of Spanish vein alabaster.",
  },
  {
    id: "cg-08",
    title: "Ochre Sediment Plate",
    artist: "Aoi Minamoto",
    year: 2026,
    medium: "Stoneware, wild clay slips, iron oxide wash",
    dimensions: "52 × 52 × 8 cm",
    price: "€ 4,800",
    category: "Objects",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1000&q=85",
    description: "Convex plate object gathered from river sediment clay, fired once in a single-chamber anagama wood kiln for 72 hours.",
  },
  {
    id: "cg-09",
    title: "Architectural Fragment (Torso of Space)",
    artist: "Henrik Vestergaard",
    year: 2024,
    medium: "Cast cementitious mortar, volcanic aggregate & lime wash",
    dimensions: "115 × 74 × 55 cm",
    price: "Price on Request",
    category: "Artworks",
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1000&q=85",
    description: "An architectural prototype examining structural compression, salvaged from the pavilion construction framework.",
  },
  {
    id: "cg-10",
    title: "Sedimentary Horizon (Diptych)",
    artist: "Kaelen Thorne",
    year: 2026,
    medium: "Oil, limestone dust, cold wax on Belgian linen",
    dimensions: "190 × 260 cm (overall)",
    price: "€ 45,000",
    category: "Paintings",
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=1200&q=85",
    description: "Diptych canvas mapping the geological stratification of coastal chalk bluffs under flat northern skies.",
  },
  {
    id: "cg-11",
    title: "Curvilinear Lounge in Bouclé & Smoked Oak",
    artist: "Studio Nube",
    year: 2025,
    medium: "Hand-loomed wool bouclé, brushed oak, internal steel armature",
    dimensions: "210 × 105 × 68 cm",
    price: "€ 14,800",
    category: "Furniture Pieces",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85",
    description: "A continuous organic curve inspired by glacial eratics, offering seating posture without rigid architectural axes.",
  },
  {
    id: "cg-12",
    title: "Loom Monotype No. 04 (Edition of 6)",
    artist: "Lucas & Clara Wei",
    year: 2026,
    medium: "Handmade mulberry paper, iron gall ink & copper leaf",
    dimensions: "120 × 90 cm",
    price: "€ 5,400",
    category: "Limited Editions",
    image: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe5?auto=format&fit=crop&w=1000&q=85",
    description: "One of only six impressions created by pressing wet kozo paper into etched copper plates during sunrise humidity.",
  }
];

export const ARTISTS_DATA: Artist[] = [
  {
    id: "henrik-vestergaard",
    name: "Henrik Vestergaard",
    origin: "Copenhagen, Denmark",
    discipline: "Architectural Sculpture & Spatial Monoliths",
    portrait: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
    bio: "Educated at the Royal Danish Academy of Fine Arts, Henrik works at the intersection of monolithic structural architecture and reductive stone sculpture. His practice honors raw mineral presence.",
    signatureWork: "Monolith of Silence Series",
    statement: "I do not shape the stone; I excavate the silence that was already resting within it before humans arrived."
  },
  {
    id: "aoi-minamoto",
    name: "Aoi Minamoto",
    origin: "Kyoto, Japan",
    discipline: "Ceramic Sculpture & Earth Vessels",
    portrait: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
    bio: "Born into a lineage of Kyoto potters, Aoi challenges traditional craft definitions by producing oversized monumental vessels that demand architectural setting.",
    signatureWork: "Vessels of Inertia",
    statement: "Clay holds memory of fire, water, and human breath. Imperfection is not a flaw; it is time made tangible."
  },
  {
    id: "kaelen-thorne",
    name: "Kaelen Thorne",
    origin: "Zurich, Switzerland",
    discipline: "Mineral Painting & Tactile Surfaces",
    portrait: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85",
    bio: "Kaelen's paintings behave more like architectural facades than framed images. He grinds his own pigments from Alpine granite, limestone, and charcoal.",
    signatureWork: "Tectonic Study Series",
    statement: "A painting should reflect light the way a concrete wall responds to dawn: calm, solemn, and unhurried."
  },
  {
    id: "studio-nube",
    name: "Studio Nube (Marc & Seline)",
    origin: "Milan & Basel",
    discipline: "Architectural Objects & Seating Sculptures",
    portrait: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=85",
    bio: "Founded by architect Marc Althaus and textile designer Seline Baur, Studio Nube crafts low-density contemplative furniture using monolithic stones and raw wool.",
    signatureWork: "Kyoto Plinth & Curved Lounges",
    statement: "Furniture is the primary tactile encounter people have with an architectural void."
  }
];

export const JOURNEY_TIMELINE: JourneyMilestone[] = [
  {
    id: "j-1",
    year: "2018",
    title: "Foundation: The Quarry Residencies",
    discipline: "Sculpture",
    description: "Six months spent living at the historic Carrara and Larvik quarries, learning the ancient mechanics of geological extraction and fracture analysis.",
    location: "Larvik, Norway",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=85"
  },
  {
    id: "j-2",
    year: "2020",
    title: "The Pavilion Residence",
    discipline: "Architecture",
    description: "Completion of the studio's landmark residential commission: a monolithic concrete and charred cedar pavilion nestled into the alpine slope.",
    location: "Engadin Valley, Switzerland",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "j-3",
    year: "2022",
    title: "Mineral & Canvas: The Basel Vernissage",
    discipline: "Painting",
    description: "A sold-out solo exhibition showcasing twenty large-format canvases composed purely of chalk gesso and riverbed silt.",
    location: "Basel, Switzerland",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=85"
  },
  {
    id: "j-4",
    year: "2024",
    title: "The Kyoto Wood-Kiln Research",
    discipline: "Design",
    description: "Collaboration with 16th-generation kiln masters to develop thermal shock-resistant ceramics for architectural facades and wet-room features.",
    location: "Kyoto, Japan",
    image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=1000&q=85"
  },
  {
    id: "j-5",
    year: "2026",
    title: "CLOUD GALLERY: Inaugural Space",
    discipline: "Architecture",
    description: "Official opening of the permanent physical gallery and research studio: 900 square meters of lime-washed spatial clarity.",
    location: "Zurich & Copenhagen",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=85"
  }
];

export const COLLABORATIONS_DATA: Collaboration[] = [
  {
    id: "collab-1",
    title: "Resonance in Lost Wax",
    category: "Artist × Artist",
    collaborators: "Henrik Vestergaard × Elena Rostova",
    year: 2026,
    concept: "Merging massive carved Swedish diabase stone with delicate lost-wax cast bronze skeletal armatures.",
    process: "Cast on-site over 14 weeks in an abandoned foundry outside Turin. The bronze was poured directly into fissures chiselled into stone blocks.",
    outcome: "A suite of five monumental sculptures exhibited across the Kunstmuseum outdoor cloister.",
    images: [
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=85"
    ]
  },
  {
    id: "collab-2",
    title: "The Engadin Alpine Pavilion",
    category: "Artist × Architect",
    collaborators: "Cloud Studio × Peter Zumthor Studio Alumni",
    year: 2025,
    concept: "An unheated meditation chapel constructed from tamped earth, local piteälven stone, and natural untreated larch beams.",
    process: "Designed to age with the alpine winter seasons. Water channels carved into exterior walls collect snow melt to create acoustic drops.",
    outcome: "Recipient of the 2025 Architectural Monograph Award for Tactile Ecology.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=85"
    ]
  },
  {
    id: "collab-3",
    title: "Komorebi Light Objects",
    category: "Artist × Brand",
    collaborators: "Cloud Gallery × Viabizzuno Lighting Laboratory",
    year: 2026,
    concept: "Translating the dappled sunlight filtering through bamboo leaves into low-glare architectural alabaster fixtures.",
    process: "Precision waterjet carving paired with bespoke 2200K high-CRI diode arrays concealed within sand-blasted titanium casings.",
    outcome: "Exclusive edition of 24 signed pieces installed in selected private residences worldwide.",
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=85"
    ]
  }
];

export const EVENTS_DATA: GalleryEvent[] = [
  {
    id: "ev-1",
    title: "FORM & VOID: The Monolith Exhibition",
    date: "SEP 28, 2026",
    displayDate: "28 SEP",
    time: "18:00 – 22:00 CET",
    monthGroup: "SEPTEMBER 2026",
    location: "Main Cloister, Cloud Gallery Zurich",
    type: "Vernissage",
    isPast: false,
    description: "Opening night for Henrik Vestergaard's monumental stone sculptures. Featuring a live acoustic sound performance composed for stone reverberation.",
    curator: "Dr. Marlene Weill"
  },
  {
    id: "ev-2",
    title: "Symposium: The Tactile Space",
    date: "OCT 14, 2026",
    displayDate: "14 OCT",
    time: "14:00 – 17:30 CET",
    monthGroup: "OCTOBER 2026",
    location: "Atelier Hall & Courtyard",
    type: "Symposium",
    isPast: false,
    description: "A panel discussion examining the retreat from digital surfaces toward brutalist, hand-raked and porous natural materials.",
    curator: "Cloud Curatorial Board"
  },
  {
    id: "ev-3",
    title: "Private Viewing: Ceramic Monoliths",
    date: "OCT 26, 2026",
    displayDate: "26 OCT",
    time: "17:00 – 21:00 CET",
    monthGroup: "OCTOBER 2026",
    location: "East Wing Pavilion",
    type: "Private Viewing",
    isPast: false,
    description: "Exclusive collector preview of Aoi Minamoto's wood-fired porcelain vessels alongside unreleased sketchbook studies.",
    curator: "Collector Liaison Office"
  },
  {
    id: "ev-4",
    title: "Artist Talk: Lost Wax & Bronze Tension",
    date: "NOV 08, 2026",
    displayDate: "08 NOV",
    time: "19:00 – 20:30 CET",
    monthGroup: "NOVEMBER 2026",
    location: "Studio Amphitheatre",
    type: "Artist Talk",
    isPast: false,
    description: "Sculptors Henrik Vestergaard and Elena Rostova discuss the chemical risks and physical weight of foundry casting.",
    curator: "Elena Rostova"
  },
  {
    id: "ev-past-1",
    title: "Matter & Horizon (Retrospective 2025)",
    date: "NOV 12, 2025",
    displayDate: "12 NOV",
    time: "Archived",
    monthGroup: "PAST ARCHIVES",
    location: "Copenhagen Temporary Warehouse",
    type: "Exhibition",
    isPast: true,
    description: "Exhibition documenting twenty years of cross-disciplinary architectural prototypes and early granite chiseling.",
    curator: "Henrik Vestergaard"
  }
];

export const VIDEOS_DATA: CloudVideo[] = [
  {
    id: "vid-1",
    title: "Inside the Studio: Lost Wax & Bronze Foundry",
    category: "Studio Visits",
    duration: "14:20",
    thumbnail: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=85",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-potter-shaping-clay-on-a-wheel-41221-large.mp4",
    featured: true,
    excerpt: "Step into the intense heat of the northern Italian foundry where 1,200°C liquid bronze is hand-poured into silica investment molds.",
    speaker: "Henrik Vestergaard"
  },
  {
    id: "vid-2",
    title: "The Architecture of Silence: Tactile Space",
    category: "Conversations: Art & Architecture",
    duration: "21:05",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-building-with-glass-facade-41380-large.mp4",
    featured: false,
    excerpt: "A deep dive into why contemporary architecture must abandon glossy synthetic materials in favor of mineral permanence and light absorption.",
    speaker: "Kaelen Thorne & Dr. Marlene Weill"
  },
  {
    id: "vid-3",
    title: "Anagama: 72 Hours of Ash and Flame",
    category: "Behind the Work",
    duration: "09:44",
    thumbnail: "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=1000&q=85",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-potter-smoothing-clay-on-a-wheel-41223-large.mp4",
    featured: false,
    excerpt: "Documenting the relentless night shifts keeping the firewood stoked to reach 1,300°C in the hillside kiln outside Kyoto.",
    speaker: "Aoi Minamoto"
  },
  {
    id: "vid-4",
    title: "Material Memory: Grinding Alpine Pigments",
    category: "Artist Interviews",
    duration: "11:18",
    thumbnail: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=85",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-artist-working-on-a-canvas-with-brush-42797-large.mp4",
    featured: false,
    excerpt: "Kaelen Thorne hikes into the Gotthard pass to quarry raw slate, chalk, and hematite, processing them with granite pestles in the studio.",
    speaker: "Kaelen Thorne"
  }
];
