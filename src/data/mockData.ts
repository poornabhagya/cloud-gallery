export interface Artwork {
  id: string;
  lotNumber?: string;
  title: string;
  artist: string;
  year: number;
  medium: string;
  dimensions: string;
  price: string;
  estimate?: string;
  category:
    | "Sculptures (stone, granite)"
    | "Porcelain"
    | "Paintings"
    | "Artworks"
    | "Furniture pieces"
    | "Metal"
    | "Limited Editions"
    | "Lighting"
    | "Objects (handles, frames)";
  image: string;
  description: string;
  provenance?: string;
  conditionReport?: string;
  featured?: boolean;
}

export interface Artist {
  id: string;
  name: string;
  origin: string;
  discipline: string;
  tier: "Featured" | "Emerging" | "Resident Master";
  portrait: string;
  bio: string;
  signatureWork: string;
  statement: string;
  story: string;
  contactEmail?: string;
  instagram?: string;
  selectedWorks: string[]; // Artwork titles or image URLs
}

export interface JourneyMilestone {
  id: string;
  year: string;
  title: string;
  discipline: "Architecture" | "Sculpture" | "Painting" | "Design" | "Major Projects" | "Sketches & Ideas" | "Studio / Process";
  description: string;
  location: string;
  image: string;
  specifications?: string[];
}

export interface Collaboration {
  id: string;
  title: string;
  category:
    | "Artist × Artist"
    | "Artist × Architect"
    | "Artist × Designer"
    | "Artist × Craftsperson"
    | "Artist × Brand"
    | "Special Projects";
  collaborators: string;
  peopleInvolved: string[];
  year: number;
  concept: string;
  process: string;
  finalWork: string;
  images: string[];
}

export interface GalleryEvent {
  id: string;
  title: string;
  date: string;
  displayDate: string;
  time: string;
  monthGroup: "SEPTEMBER 2026" | "OCTOBER 2026" | "NOVEMBER 2026" | "DECEMBER 2026" | "PAST ARCHIVES";
  location: string;
  type: "Exhibition" | "Art Show" | "Workshop" | "Artist Talk" | "Launch" | "Collaboration" | "Event";
  isPast: boolean;
  description: string;
  curator?: string;
  participatingArtists: string[];
}

export interface CloudVideo {
  id: string;
  title: string;
  category:
    | "Artist Interviews"
    | "Studio Visits"
    | "Conversations"
    | "Behind the Work"
    | "Discussions"
    | "Project Videos"
    | "Cloud Stories";
  duration: string;
  thumbnail: string;
  videoUrl: string;
  embedType?: "direct" | "youtube" | "tiktok";
  featured?: boolean;
  excerpt: string;
  speaker: string;
}

export const ARTWORKS_DATA: Artwork[] = [
  {
    id: "cg-01",
    lotNumber: "LOT 01",
    title: "Monolith of Silence IV",
    artist: "Henrik Vestergaard",
    year: 2026,
    medium: "Honed Swedish Diabase & Raw Travertine",
    dimensions: "184 × 62 × 48 cm",
    price: "€ 42,000",
    estimate: "€ 38,000 – € 45,000",
    category: "Sculptures (stone, granite)",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85",
    description: "A monolithic carved dialogue between unyielding granite and porous volcanic stone. Balanced along an uncalibrated pivot line.",
    provenance: "Acquired directly from the artist's Copenhagen studio, 2026.",
    conditionReport: "Pristine natural mineral finish with hand-honed bevels.",
    featured: true,
  },
  {
    id: "cg-02",
    lotNumber: "LOT 02",
    title: "Vessel of Inertia (Oat & Feldspar)",
    artist: "Aoi Minamoto",
    year: 2025,
    medium: "Wood-fired porcelain, feldspar glaze, ash wash",
    dimensions: "44 × 36 × 36 cm",
    price: "€ 8,500",
    estimate: "€ 8,000 – € 11,000",
    category: "Porcelain",
    image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=1000&q=85",
    description: "Hand-thrown reduction chamber porcelain with unglazed tactile raw foot. Crystalline cooling fissures evoke glacial retreat.",
    provenance: "Kyoto Machiya Atelier Private Collection.",
    conditionReport: "Intact single-kiln firing characteristics; wood-ash deposit patina.",
    featured: true,
  },
  {
    id: "cg-03",
    lotNumber: "LOT 03",
    title: "Tectonic Study No. 12 (Alpine Silt)",
    artist: "Kaelen Thorne",
    year: 2026,
    medium: "Raw Belgian linen, gesso, mineral pigment & crushed slate",
    dimensions: "210 × 175 cm",
    price: "€ 28,000",
    estimate: "€ 25,000 – € 32,000",
    category: "Paintings",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85",
    description: "Stratified pigment sweeps applied with wide timber trowels over unprimed flax weave. Examines the cadence of dusk light across architectural facets.",
    provenance: "Commissioned for the Zurich Cloister inaugural vernissage.",
    conditionReport: "Natural unframed Belgian linen stretched over custom kiln-dried spruce.",
    featured: true,
  },
  {
    id: "cg-04",
    lotNumber: "LOT 04",
    title: "The Kyoto Low Plinth Table",
    artist: "Studio Nube × Kenzo Mori",
    year: 2026,
    medium: "Charred Shou Sugi Ban cedar & Honed Jura limestone",
    dimensions: "240 × 90 × 32 cm",
    price: "€ 19,500",
    estimate: "€ 18,000 – € 24,000",
    category: "Furniture pieces",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=85",
    description: "Low-slung tectonic bench plinth carved from ancient cedar logs, capped with cold-jointed Jura limestone slab.",
    provenance: "Studio Nube Prototype Archive, Milan & Kyoto.",
    conditionReport: "Hand-charred timber sealed with organic beeswax emulsion.",
    featured: true,
  },
  {
    id: "cg-05",
    lotNumber: "LOT 05",
    title: "Void & Tension Bronze III",
    artist: "Elena Rostova",
    year: 2025,
    medium: "Lost-wax cast bronze with natural liver-of-sulphur patina",
    dimensions: "92 × 48 × 34 cm",
    price: "€ 34,000",
    estimate: "€ 30,000 – € 38,000",
    category: "Metal",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=85",
    description: "An open armature exploring negative spatial presence. Cast by sand mold in a solitary foundry in Northern Piedmont.",
    provenance: "Exhibited at the Kunstmuseum Cloister, 2025.",
    conditionReport: "Rich chemical patination with micro-crystalline wax seal.",
    featured: true,
  },
  {
    id: "cg-06",
    lotNumber: "LOT 06",
    title: "Cantilevered Column in Calacatta",
    artist: "Henrik Vestergaard",
    year: 2026,
    medium: "Solid Calacatta Viola & Patinated Bronze",
    dimensions: "160 × 40 × 40 cm",
    price: "€ 38,000",
    estimate: "€ 35,000 – € 42,000",
    category: "Sculptures (stone, granite)",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=85",
    description: "Fluted column element carved from a single quarry block, balancing a counter-weighted bronze cap.",
    provenance: "Commissioned for private alpine residence, St. Moritz.",
    conditionReport: "Satin honed natural marble without chemical sealants.",
  },
  {
    id: "cg-07",
    lotNumber: "LOT 07",
    title: "Shadow Sconce (Alabaster Eclipse)",
    artist: "Lucas & Clara Wei",
    year: 2026,
    medium: "Translucent Spanish Alabaster & Raw Gunmetal Brass",
    dimensions: "55 × 28 × 14 cm",
    price: "€ 6,200",
    estimate: "€ 5,500 – € 7,500",
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=85",
    description: "Low-voltage architectural illumination diffused through an 18mm hand-chiseled slab of Spanish vein alabaster.",
    provenance: "Cloud Gallery Lighting Editions, Zurich.",
    conditionReport: "Integrated 2200K high-CRI architectural LED unit with trailing-edge dimmer.",
  },
  {
    id: "cg-08",
    lotNumber: "LOT 08",
    title: "Hand-Forged Architectural Door Handles (Pair)",
    artist: "Studio Vulcanus",
    year: 2026,
    medium: "Hand-forged blackened iron & unlacquered cast bronze",
    dimensions: "42 × 6 × 8 cm each",
    price: "€ 3,400",
    estimate: "€ 3,000 – € 4,000",
    category: "Objects (handles, frames)",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1000&q=85",
    description: "Heft-weighted tactile entry hardware chiseled with subtle organic hammer indexing, designed for monumental timber portals.",
    provenance: "Direct from the Master Smith Atelier, Graz.",
    conditionReport: "Hand-rubbed graphite finish with living natural bronze touchpoints.",
  },
  {
    id: "cg-09",
    lotNumber: "LOT 09",
    title: "Architectural Fragment (Torso of Space)",
    artist: "Henrik Vestergaard",
    year: 2024,
    medium: "Cast cementitious mortar, volcanic aggregate & lime wash",
    dimensions: "115 × 74 × 55 cm",
    price: "€ 22,000",
    estimate: "€ 20,000 – € 26,000",
    category: "Artworks",
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1000&q=85",
    description: "An architectural prototype examining structural compression, salvaged from the pavilion construction framework.",
    provenance: "Engadin Pavilion Archive.",
    conditionReport: "Stable raw aggregate matrix with authentic weathering patina.",
  },
  {
    id: "cg-10",
    lotNumber: "LOT 10",
    title: "Sedimentary Horizon (Diptych)",
    artist: "Kaelen Thorne",
    year: 2026,
    medium: "Oil, limestone dust, cold wax on Belgian linen",
    dimensions: "190 × 260 cm (overall)",
    price: "€ 45,000",
    estimate: "€ 40,000 – € 52,000",
    category: "Paintings",
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=1200&q=85",
    description: "Diptych canvas mapping the geological stratification of coastal chalk bluffs under flat northern skies.",
    provenance: "Basel Art Salon 2026 Solo Presentation.",
    conditionReport: "Signed and dated verso; fitted with flush architectural cleats.",
  },
  {
    id: "cg-11",
    lotNumber: "LOT 11",
    title: "Curvilinear Lounge in Bouclé & Smoked Oak",
    artist: "Studio Nube",
    year: 2025,
    medium: "Hand-loomed wool bouclé, brushed oak, internal steel armature",
    dimensions: "210 × 105 × 68 cm",
    price: "€ 14,800",
    estimate: "€ 13,500 – € 17,000",
    category: "Furniture pieces",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85",
    description: "A continuous organic curve inspired by glacial eratics, offering seating posture without rigid architectural axes.",
    provenance: "Private Salon Exhibition, Copenhagen.",
    conditionReport: "Unstained organic European wool upholstery with solid oak base.",
  },
  {
    id: "cg-12",
    lotNumber: "LOT 12",
    title: "Loom Monotype No. 04 (Edition of 6)",
    artist: "Lucas & Clara Wei",
    year: 2026,
    medium: "Handmade mulberry paper, iron gall ink & copper leaf",
    dimensions: "120 × 90 cm",
    price: "€ 5,400",
    estimate: "€ 4,800 – € 6,500",
    category: "Limited Editions",
    image: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe5?auto=format&fit=crop&w=1000&q=85",
    description: "One of only six impressions created by pressing wet kozo paper into etched copper plates during sunrise humidity.",
    provenance: "Cloud Print Archives, Edition 2 of 6.",
    conditionReport: "Floating mount in museum anti-reflective UV70 glass frame.",
  }
];

export const ARTISTS_DATA: Artist[] = [
  {
    id: "henrik-vestergaard",
    name: "Henrik Vestergaard",
    origin: "Copenhagen, Denmark",
    discipline: "Architectural Sculpture & Spatial Monoliths",
    tier: "Resident Master",
    portrait: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
    bio: "Educated at the Royal Danish Academy of Fine Arts and ETH Zurich, Henrik works at the intersection of monolithic structural architecture and reductive stone sculpture. His practice honors raw mineral presence.",
    signatureWork: "Monolith of Silence Series",
    statement: "I do not shape the stone; I excavate the silence that was already resting within it before humans arrived.",
    story: "Spending up to five months at quarry sites across Norway and Carrara, Henrik selects single granite boulders that exhibit natural tectonic fissures. He uses acoustic frequencies and diamond chisels to cleave each monolith.",
    contactEmail: "henrik@cloudgallery.art",
    instagram: "@henrik.vestergaard.sculpture",
    selectedWorks: ["Monolith of Silence IV", "Cantilevered Column in Calacatta", "Architectural Fragment"]
  },
  {
    id: "aoi-minamoto",
    name: "Aoi Minamoto",
    origin: "Kyoto, Japan",
    discipline: "Ceramic Sculpture & Wood-Fired Porcelain",
    tier: "Featured",
    portrait: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
    bio: "Born into a four-generation lineage of Kyoto potters, Aoi challenges traditional craft definitions by producing oversized monumental vessels that demand architectural setting.",
    signatureWork: "Vessels of Inertia",
    statement: "Clay holds the unwritten memory of fire, water, and human breath. Imperfection is not a flaw; it is time made tangible.",
    story: "Her anagama kiln burns red pine for 72 consecutive hours. The resulting fly ash creates spontaneous crystalline glazes that cannot be replicated by modern electric kilns.",
    contactEmail: "aoi@cloudgallery.art",
    instagram: "@aoi.minamoto.ceramics",
    selectedWorks: ["Vessel of Inertia (Oat)", "Ochre Sediment Plate"]
  },
  {
    id: "kaelen-thorne",
    name: "Kaelen Thorne",
    origin: "Zurich, Switzerland",
    discipline: "Mineral Painting & Tectonic Surfaces",
    tier: "Featured",
    portrait: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85",
    bio: "Kaelen's paintings behave more like architectural facades than framed images. He grinds his own pigments from Alpine granite, limestone, and charcoal.",
    signatureWork: "Tectonic Study Series",
    statement: "A painting should reflect light the way a concrete wall responds to dawn: calm, solemn, and unhurried.",
    story: "Hiking into the Gotthard Pass each spring, Kaelen extracts mineral clays and weathered slate, processing them with mortar and pestle to formulate light-absorbing temperas.",
    contactEmail: "thorne@cloudgallery.art",
    instagram: "@kaelen.thorne.studio",
    selectedWorks: ["Tectonic Study No. 12", "Sedimentary Horizon Diptych"]
  },
  {
    id: "studio-nube",
    name: "Studio Nube (Marc & Seline)",
    origin: "Milan & Basel",
    discipline: "Architectural Objects & Seating Sculptures",
    tier: "Resident Master",
    portrait: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=85",
    bio: "Founded by architect Marc Althaus and textile designer Seline Baur, Studio Nube crafts low-density contemplative furniture using monolithic stones and raw wool.",
    signatureWork: "Kyoto Plinth & Curved Lounges",
    statement: "Furniture is the primary tactile encounter people have with an architectural void.",
    story: "Collaborating with master joiners in Kyoto and stonecutters in Verona, Studio Nube translates heavy geological weight into effortless cantilevered furniture pieces.",
    contactEmail: "nube@cloudgallery.art",
    instagram: "@studionube.arch",
    selectedWorks: ["The Kyoto Low Plinth Table", "Curvilinear Lounge in Bouclé"]
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    origin: "Turin, Italy",
    discipline: "Lost-Wax Cast Bronze Sculpture",
    tier: "Emerging",
    portrait: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85",
    bio: "Elena trained in historical foundries in Northern Italy, developing bespoke chemical patinas that impart deep obsidian and verdant velvet undertones to bronze castings.",
    signatureWork: "Void & Tension Bronze Series",
    statement: "Molten metal at 1,200 degrees Celsius is raw energy frozen into enduring shadow.",
    story: "Working exclusively with sand and lost-wax investment molds, her sculptural forms capture skeletal tensions and negative spatial voids.",
    contactEmail: "elena@cloudgallery.art",
    instagram: "@elena.rostova.bronze",
    selectedWorks: ["Void & Tension Bronze III"]
  },
  {
    id: "lucas-clara-wei",
    name: "Lucas & Clara Wei",
    origin: "Kyoto & Berlin",
    discipline: "Architectural Lighting & Monotypes",
    tier: "Emerging",
    portrait: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
    bio: "The duo pairs translucent Spanish alabaster with high-CRI low-glare solid state electronics, sculpting atmospheric illumination.",
    signatureWork: "Alabaster Eclipse Sconces",
    statement: "Light is not merely something to see by; it is a material that defines the emotional volume of a sanctuary.",
    story: "Their lighting studies undergo rigorous photometric calibration to replicate the natural warmth of evening candle glow across lime-plaster walls.",
    contactEmail: "wei@cloudgallery.art",
    instagram: "@wei.studio.light",
    selectedWorks: ["Shadow Sconce (Alabaster Eclipse)", "Loom Monotype No. 04"]
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
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=85",
    specifications: ["Diabase granite core sampling", "Acoustic pulse stone analysis", "Hand chisel tooling development"]
  },
  {
    id: "j-2",
    year: "2020",
    title: "The Pavilion Residence",
    discipline: "Architecture",
    description: "Completion of the studio's landmark residential commission: a monolithic concrete and charred cedar pavilion nestled into the alpine slope.",
    location: "Engadin Valley, Switzerland",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    specifications: ["Board-formed monolithic concrete", "Shou Sugi Ban larch cladding", "Cold-jointed Jura limestone flooring"]
  },
  {
    id: "j-3",
    year: "2022",
    title: "Mineral & Canvas: The Basel Vernissage",
    discipline: "Painting",
    description: "A sold-out solo exhibition showcasing twenty large-format canvases composed purely of chalk gesso, riverbed silt, and slate.",
    location: "Basel, Switzerland",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=85",
    specifications: ["Gotthard slate tempera", "Raw flax linen substrate", "Zero-synthetic binder protocol"]
  },
  {
    id: "j-4",
    year: "2024",
    title: "The Kyoto Wood-Kiln Research",
    discipline: "Design",
    description: "Collaboration with 16th-generation kiln masters to develop thermal shock-resistant ceramics for architectural facades and wet-room features.",
    location: "Kyoto, Japan",
    image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=1000&q=85",
    specifications: ["72-hour anagama wood reduction", "Wild mountain clay formulations", "Architectural cladding tiles"]
  },
  {
    id: "j-5",
    year: "2025",
    title: "Major Institutional Commission: The Kunsthaus Cloister",
    discipline: "Major Projects",
    description: "Installation of three nine-ton carved diabase monoliths within the museum open-air cloister courtyard, creating an acoustic sanctuary.",
    location: "Zurich, Switzerland",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=85",
    specifications: ["9,200 kg solid Swedish Diabase", "Hydraulic counter-pivot system", "Seismic anchoring foundation"]
  },
  {
    id: "j-6",
    year: "2026",
    title: "CLOUD GALLERY: Permanent Salon Space",
    discipline: "Architecture",
    description: "Official opening of the permanent physical gallery and research studio: 900 square meters of lime-washed spatial clarity and north skylights.",
    location: "Zurich & Copenhagen",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=85",
    specifications: ["Restored 18th-century cloister", "UV-free north light lanterns", "Tactile travertine plinths"]
  }
];

export const COLLABORATIONS_DATA: Collaboration[] = [
  {
    id: "collab-1",
    title: "Resonance in Lost Wax & Diabase",
    category: "Artist × Artist",
    collaborators: "Henrik Vestergaard × Elena Rostova",
    peopleInvolved: ["Henrik Vestergaard (Sculptor)", "Elena Rostova (Master Bronze Caster)", "Turin Foundry Guild"],
    year: 2026,
    concept: "Merging massive carved Swedish diabase stone with delicate lost-wax cast bronze skeletal armatures.",
    process: "Cast on-site over 14 weeks in an artisanal foundry outside Turin. Molten bronze at 1,200°C was poured directly into custom fissures chiseled into diabase stone blocks.",
    finalWork: "A suite of five monumental sculptures exhibited across European museum courtyards and private sculpture parks.",
    images: [
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=85"
    ]
  },
  {
    id: "collab-2",
    title: "The Engadin Alpine Chapel & Pavilion",
    category: "Artist × Architect",
    collaborators: "Cloud Studio × Peter Zumthor Studio Alumni",
    peopleInvolved: ["Marc Althaus (Principal Architect)", "Jonas Lindström (Structural Engineer)", "Graubünden Masonry Guild"],
    year: 2025,
    concept: "An unheated meditation chapel constructed from tamped earth, local piteälven stone, and natural untreated larch beams.",
    process: "Designed to age with alpine winter seasons. Water channels carved into exterior walls collect snow melt to create rhythmic acoustic drops.",
    finalWork: "Recipient of the 2025 Architectural Monograph Award for Tactile Ecology and high-altitude permanence.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=85"
    ]
  },
  {
    id: "collab-3",
    title: "Komorebi Light Objects (Limited Edition)",
    category: "Artist × Brand",
    collaborators: "Cloud Gallery × Viabizzuno Lighting Laboratory",
    peopleInvolved: ["Lucas & Clara Wei (Designers)", "Mario Nanni Studio (Optical Engineering)", "Aragón Alabaster Quarry"],
    year: 2026,
    concept: "Translating the dappled sunlight filtering through bamboo leaves into low-glare architectural alabaster fixtures.",
    process: "Precision 5-axis waterjet stone carving paired with bespoke 2200K high-CRI diode arrays concealed within sand-blasted titanium casings.",
    finalWork: "Exclusive edition of 24 signed pieces installed in selected private residences and galleries worldwide.",
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=85"
    ]
  },
  {
    id: "collab-4",
    title: "Tectonic Plinth & Woven Fiber Dialogue",
    category: "Artist × Craftsperson",
    collaborators: "Studio Nube × Master Joiner Kenzo Mori",
    peopleInvolved: ["Marc Althaus (Architect)", "Kenzo Mori (3rd Gen Sashimono Master)", "Seline Baur (Textile Artist)"],
    year: 2026,
    concept: "Pairing ancient Japanese unnailed interlocking joinery (sashimono) with raw hand-spun bouclé wool.",
    process: "Three-hundred-year-old salvaged hinoki cypress cured for 18 months, hand-planed with Japanese kanna blades to a mirror wood sheen without polyurethane.",
    finalWork: "A collection of low tectonic seating plinths bridging Scandinavian minimalism with Japanese spiritual restraint.",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=85"
    ]
  }
];

export const EVENTS_DATA: GalleryEvent[] = [
  {
    id: "ev-1",
    title: "FORM & VOID: The Autumn Monolith Vernissage",
    date: "SEP 28, 2026",
    displayDate: "28 SEP",
    time: "18:00 – 22:00 CET",
    monthGroup: "SEPTEMBER 2026",
    location: "Main Cloister, Cloud Gallery Zurich",
    type: "Exhibition",
    isPast: false,
    description: "Opening night for Henrik Vestergaard's monumental stone sculptures. Featuring a live acoustic sound performance composed for stone reverberation.",
    curator: "Dr. Marlene Weill",
    participatingArtists: ["Henrik Vestergaard", "Elena Rostova"]
  },
  {
    id: "ev-2",
    title: "Symposium: The Tactile Space & Mineral Architecture",
    date: "OCT 14, 2026",
    displayDate: "14 OCT",
    time: "14:00 – 17:30 CET",
    monthGroup: "OCTOBER 2026",
    location: "Atelier Hall & Courtyard, Zurich",
    type: "Workshop",
    isPast: false,
    description: "A curatorial panel discussion examining the retreat from digital screens toward brutalist, hand-raked, and porous natural materials.",
    curator: "Cloud Curatorial Board",
    participatingArtists: ["Kaelen Thorne", "Studio Nube", "Marc Althaus"]
  },
  {
    id: "ev-3",
    title: "Private Viewing: Ceramic Monoliths & Tea Vessels",
    date: "OCT 26, 2026",
    displayDate: "26 OCT",
    time: "17:00 – 21:00 CET",
    monthGroup: "OCTOBER 2026",
    location: "East Wing Pavilion & Garden, Kyoto",
    type: "Art Show",
    isPast: false,
    description: "Exclusive collector preview of Aoi Minamoto's wood-fired porcelain vessels alongside unreleased sketchbook studies.",
    curator: "Collector Liaison Office",
    participatingArtists: ["Aoi Minamoto"]
  },
  {
    id: "ev-4",
    title: "Artist Talk: Lost Wax & Bronze Tension",
    date: "NOV 08, 2026",
    displayDate: "08 NOV",
    time: "19:00 – 20:30 CET",
    monthGroup: "NOVEMBER 2026",
    location: "Studio Amphitheatre, Zurich",
    type: "Artist Talk",
    isPast: false,
    description: "Sculptors Henrik Vestergaard and Elena Rostova discuss the chemical risks and physical weight of foundry casting.",
    curator: "Elena Rostova",
    participatingArtists: ["Henrik Vestergaard", "Elena Rostova"]
  },
  {
    id: "ev-5",
    title: "Launch: Monograph Volume IV & Editioned Prints",
    date: "DEC 04, 2026",
    displayDate: "04 DEC",
    time: "18:30 – 21:30 CET",
    monthGroup: "DECEMBER 2026",
    location: "Cloud Salon & Library, Copenhagen",
    type: "Launch",
    isPast: false,
    description: "Book launch of the 340-page cloth-bound monograph documenting Cloud Gallery's architectural decade.",
    curator: "Publisher Hatje Cantz & Cloud Press",
    participatingArtists: ["Lucas & Clara Wei", "Henrik Vestergaard"]
  },
  {
    id: "ev-past-1",
    title: "Matter & Horizon (Retrospective 2025)",
    date: "NOV 12, 2025",
    displayDate: "12 NOV",
    time: "Archived",
    monthGroup: "PAST ARCHIVES",
    location: "Copenhagen Warehouse Space",
    type: "Exhibition",
    isPast: true,
    description: "Exhibition documenting fifteen years of cross-disciplinary architectural prototypes and early granite chiseling.",
    curator: "Henrik Vestergaard",
    participatingArtists: ["Henrik Vestergaard", "Studio Nube"]
  }
];

export const VIDEOS_DATA: CloudVideo[] = [
  {
    id: "vid-1",
    title: "Inside the Studio: Lost Wax & 1,200°C Bronze Foundry",
    category: "Studio Visits",
    duration: "14:20",
    thumbnail: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=85",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-potter-shaping-clay-on-a-wheel-41221-large.mp4",
    embedType: "direct",
    featured: true,
    excerpt: "Step into the intense heat of the northern Italian foundry where 1,200°C liquid bronze is hand-poured into silica investment molds.",
    speaker: "Henrik Vestergaard & Elena Rostova"
  },
  {
    id: "vid-2",
    title: "The Architecture of Silence: Tactile Space",
    category: "Conversations",
    duration: "21:05",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-building-with-glass-facade-41380-large.mp4",
    embedType: "direct",
    featured: false,
    excerpt: "A deep dialogue on why contemporary spaces must abandon glossy synthetic materials in favor of mineral permanence and light absorption.",
    speaker: "Kaelen Thorne & Dr. Marlene Weill"
  },
  {
    id: "vid-3",
    title: "Anagama: 72 Hours of Ash and Flame",
    category: "Behind the Work",
    duration: "09:44",
    thumbnail: "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=1000&q=85",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-potter-smoothing-clay-on-a-wheel-41223-large.mp4",
    embedType: "direct",
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
    embedType: "direct",
    featured: false,
    excerpt: "Kaelen Thorne hikes into the Gotthard pass to quarry raw slate, chalk, and hematite, processing them with granite pestles in the studio.",
    speaker: "Kaelen Thorne"
  },
  {
    id: "vid-5",
    title: "The Engadin Monolith: Winter Construction Log",
    category: "Project Videos",
    duration: "16:40",
    thumbnail: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=85",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-building-with-glass-facade-41380-large.mp4",
    embedType: "direct",
    featured: false,
    excerpt: "Behind the scenes of transporting 9-ton granite blocks across Swiss mountain passes during November blizzards.",
    speaker: "Marc Althaus"
  },
  {
    id: "vid-6",
    title: "Kyoto Machiya: Restoring Edo Timber Joinery",
    category: "Cloud Stories",
    duration: "13:12",
    thumbnail: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=85",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-potter-shaping-clay-on-a-wheel-41221-large.mp4",
    embedType: "direct",
    featured: false,
    excerpt: "How our Kyoto atelier was preserved with traditional wood joinery without modern adhesives or fasteners.",
    speaker: "Kenzo Mori"
  }
];
