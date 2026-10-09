# Cloud Gallery — Project Architecture & Documentation

## 1. Project Overview

**Cloud Gallery** is a high-end luxury fine art platform, auction salon, and curatorial monograph inspired by premier auction houses (such as Sotheby's and Christie's). The platform is dedicated to monumental stone sculptures, wood-fired porcelain vessels, mineral paintings, lost-wax bronze castings, and exclusive architectural commissions.

### Core Objectives & Value Proposition
- **High-Value Acquisitions & Private Sales**: Facilitates condition report requests, valuation estimates, and acquisition enquiries for rare lots.
- **Architectural & Monumental Commissions**: Connects private collectors, institutions, and architects with site-specific monumental works.
- **Artist Representation**: Highlights resident masters and emerging artists across permanent ateliers in Zurich, Kyoto, and Copenhagen.
- **Cross-Disciplinary Collaborations**: Documents museum-grade fusions between sculptors, architects, designers, and luxury brands.
- **Media & Documentary (Cloud TV)**: Houses a 4K documentary video series detailing atelier practices, material extraction, and kiln firings.
- **Events & Salons**: Maintains a live agenda of exhibitions, previews, and talks with RSVP workflows.
- **Open Call & Consignments**: Provides artists and collaborators with direct submission pipelines for consignment and exhibitions.

---

## 2. Tech Stack & Dependencies

| Layer | Technology | Details / Notes |
| :--- | :--- | :--- |
| **Framework** | **Next.js 16.3.6** | App Router (`/src/app`) with React Server and Client Components (`"use client"`). |
| **Compiler & Engine** | **Next.js Turbopack** | Ultra-fast local builds and HMR. |
| **Deployment Target** | **GitHub Pages** | Static export mode (`output: 'export'` in `next.config.ts`) built and deployed via GitHub Actions (`.github/workflows/deploy.yml`). |
| **Language** | **TypeScript 5.x** | Strict typing across interfaces, mock data, and components. |
| **UI Library** | **React 19.0.0** | Modern component architecture and Hooks. |
| **Styling** | **Tailwind CSS v4.0.0** | Configured via `@tailwindcss/postcss` and native `@theme` directives in `src/app/globals.css`. |
| **Iconography** | **Lucide React (v0.475.0)** | Clean hairline SVGs matching luxury gallery aesthetic. |
| **Typography Engine** | **`next/font/google`** | Zero-CLS font optimization for Merriweather, Roboto, Playfair Display, and Inter. |
| **Utilities** | **`clsx` & `tailwind-merge`** | Conditional class merging and dynamic styling. |
| **State Management** | **React Context API** | `GalleryContext` handles global modals, drawers, and active entities. |

---

## 3. Design System & Tokens

The design language strictly reflects Sotheby's and minimalist Scandinavian/Japanese architectural salons: stark contrast, hairline borders, ample negative space, and curated typography.

### 3.1 Color Palette

| Token / Color | Hex Code | Usage & Placement |
| :--- | :--- | :--- |
| **Royal Blue** | `#081757` | Client signature accent; mobile menu blocks (PROJECTS, ARTISTS, EVENTS), active links, and brand badges. |
| **Black** | `#000000` | Core brand color; headers, primary buttons, borders, dark mobile menu blocks (SHOP, COLLABORATIONS, OPEN CALL). |
| **White** | `#FFFFFF` | Primary background, card canvases, white mobile menu blocks (JOURNEY, CLOUD TV), and light contrast text. |
| **Secondary Background** | `#FAFAFA` | Neutral section backgrounds, announcement bars, and lot metric panels. |
| **Hairline Border** | `#E5E5E5` | Structural hairline divider lines (`.hairline`, `.hairline-b`), grid cells, and card outlines. |
| **Subtle Border** | `#EEEEEE` | Internal card separators and specification borders. |
| **Text Primary** | `#000000` | Primary titles, lot titles, prices, and main navigation links. |
| **Text Secondary** | `#555555` | Body copy, artist descriptions, and medium descriptions. |
| **Text Muted** | `#777777` / `#666666` | Small lot metadata, provenance notes, and uppercase section labels. |
| **Navy Accent** | `#002B49` | Heritage tertiary navy. |
| **Charcoal Accent** | `#222222` | Hover state for black buttons and active focus states. |

### 3.2 Typography

| Role | Font Family | Weight | Class Utility | Application |
| :--- | :--- | :--- | :--- | :--- |
| **Global Body Font** | **Merriweather** | `300` (Light) | `font-merriweather`, `font-body`, `font-light` | Global `<body>` text, descriptions, essays, and specifications. |
| **Mobile Menu Headers** | **Roboto** | `700` (Bold) | `font-roboto`, `font-bold`, `uppercase` | Full-width mobile navigation blocks and primary mobile triggers. |
| **Editorial Headings** | **Playfair Display** | `400`–`800` | `font-serif` | Masterpiece titles, hero headlines, blockquotes, and artist names. |
| **Utility & Metadata** | **Inter** | `400`–`600` | `font-sans`, `.lot-label` | Uppercase tracking badges, lot numbers, navigation links, and button labels. |

---

## 4. Routing & Page Architecture

All pages reside in the Next.js App Router (`src/app/`):

```
src/app/
├── layout.tsx             # Root layout with font definitions, GalleryProvider, Header, Footer, and Modals
├── page.tsx               # Home Page (Sotheby's Showcase & Marquee Lot)
├── globals.css            # Tailwind v4 theme, custom font rules, and hairline utilities
├── gallery/
│   └── page.tsx           # Full Catalogue & Private Sales
├── shop/
│   └── page.tsx           # Shop view aliasing the gallery collection lots
├── projects/
│   └── page.tsx           # Architectural Commissions & Monolith Installations
├── journey/
│   └── page.tsx           # Studio Monograph, Milestones & Sketchbook
├── artists/
│   └── page.tsx           # Represented Masters & Resident Artists
├── collaborations/
│   └── page.tsx           # Cross-Disciplinary Case Studies & Pavilions
├── events/
│   └── page.tsx           # Calendar, Live Agenda & RSVP Salons
├── cloud-tv/
│   └── page.tsx           # 4K Documentary Cinema & Artist Video Essays
├── open-call/
│   └── page.tsx           # Multi-Disciplinary Submission & Consignment Portal
└── about/
    └── page.tsx           # Curatorial Manifesto & Spatial Laboratory
```

### Page Breakdown & Layout Structure

1. **Home (`/`)**
   - **HeroCarousel**: Full-bleed auto-sliding hero with high-resolution imagery and slide indicators.
   - **Live Auction Announcement Banner**: Real-time next event ticker with direct RSVP link.
   - **Marquee Lot 01 Spotlight**: Editorial split view featuring the lead curated lot, provenance, auction estimate, and condition report request.
   - **Department Exploration Grid**: 6 primary collecting categories (Sculpture, Porcelain, Painting, Furniture, Metal, Lighting).
   - **Curated Lots Catalogue**: 6-item hairline grid with lot numbers, prices, and 1-click enquiry triggers.
   - **Editorial Monograph Essay**: Atelier spotlight (Henrik Vestergaard) with curatorial quotes and core discipline tags.
   - **Dual Visual Banners**: Split gateway cards leading to Artists and Collaborations.
   - **VIP Private Sales Banner**: Private consultation booking and consignment links.

2. **Gallery (`/gallery`)**
   - Sotheby's-style catalog interface with 10 category filter tabs.
   - Real-time text search (filtering by title, artist, medium, category).
   - Sorting dropdown (Price Asc/Desc, Lot Number, Default).
   - Grid / List view mode toggles.
   - Responsive cards with lot numbers, estimates, and Enquiry Modal triggers.

3. **Shop (`/shop`)**
   - High-end e-commerce layout inspired by Sotheby's category reference.
   - Top editorial header with category summary and 6 quick-filter thumbnail cards (`HOME WEAR`, `ACCESSORIES`, `GEMS`, `CLOTHING`, `ANTIQUE`, `PAINTINGS`).
   - Sticky Left Sidebar with full hierarchical category tree, category search input, price range filter, and reset controls.
   - Right Product Grid with lot number badges, valuation estimates, grid/list view toggles, sort options, and 1-click acquisition/enquiry modal triggers.

4. **Projects (`/projects`)**
   - Dedicated portfolio of monumental architectural installations, residential minimalist interiors, landscaping monoliths, plinth furniture, and architectural lighting.
   - Category filtering: `ALL | ARCHITECTURE | INTERIOR DESIGN | LANDSCAPING | FURNITURE | LIGHTING`.
   - Technical specification chips and direct dossier enquiry triggers.

5. **Journey (`/journey`)**
   - Studio timeline (2018–2026) documenting diabase monolith quarries, wood-kiln research, and gallery cloister architecture.
   - Interactive 4-plate Architectural Sketchbook (graphite vellum studies, thermal dynamics).
   - Materials laboratory specification breakdown.

6. **Artists (`/artists`)**
   - Represented masters and resident artists roster.
   - Tier filtering: "Featured", "Resident Master", "Emerging".
   - Detailed dossier modal viewing artist exhibitions, awards, and represented works.

7. **Collaborations (`/collaborations`)**
   - Cross-disciplinary fusions: Artist × Artist, Artist × Architect, Artist × Brand, Special Projects.
   - Case studies detailing concept, process, and finalized architectural installations.

8. **Events & Auctions (`/events`)**
   - Upcoming vs Past event switchers.
   - Grouped chronological view by month.
   - Direct integration with `RSVPModal` for seat reservations.

9. **Cloud TV (`/cloud-tv`)**
   - Cinema-inspired 4K repertory with video category filtering.
   - Lead featured cinema player.
   - Interactive grid launching the embedded `VideoLightboxModal`.

10. **Open Call (`/open-call`)**
    - Multi-tab application system: Artists, Architectural Collaborators, Event Hosts, and General Consignments.
    - Portfolio link submission, statement inputs, discipline selection, and instant confirmation feedback.

11. **About (`/about`)**
    - The Cloud Curatorial Manifesto ("Spatial Laboratory rather than passive white cube").
    - Three pillars of permanence: Raw Permanence, Ambient Dialogue, Architectural Anchors.
    - Permanent atelier locations in Zurich and Kyoto.

---

## 5. Component Architecture

All reusable UI components reside in `src/components/`:

```
src/components/
├── Navbar.tsx             # Dual-tier header + Mobile Navigation Menu overlay
├── Footer.tsx             # Sotheby's 3-column global footer
├── HeroCarousel.tsx       # Auto-sliding hero presentation with pagination
├── EnquiryModal.tsx       # Global artwork acquisition & condition report modal
├── RSVPModal.tsx          # Global event registration & guest list modal
├── VideoLightboxModal.tsx # Full-screen 4K cinema video player modal
└── SearchDrawer.tsx       # Slideout real-time search across catalogue and artists
```

### Component Details

#### 1. `Navbar.tsx` (Global Header & Mobile Navigation)
- **Top Utility Navigation**: Clean secondary bar with Journey (click-to-toggle full-width Mega Menu covering strictly 2 columns: "HOW CLOUD STARTED" and "ABOUT MR PRASANNA"), Cloud TV, and Open Call.
- **Main Desktop Bar**: Serif logo ("CLOUD AUCTION HOUSE & GALLERY"), primary links with click-triggered dropdowns (PROJECTS dropdown with 5 sub-categories; SHOP 6-column Sotheby's Mega Menu covering Home Wear, Accessories, Gems, Clothing, Antique, Paintings, and "SHOP ALL" footer; ARTISTS full-width 2-column Mega Menu covering "ARTIST OF THE MONTH" and "OUR ARTISTS" with bottom action bar; COLLABORATIONS; EVENTS; all equipped with mutually exclusive state, click-outside and escape-key dismissal), quick search button, and "ENQUIRE / CONSIGN" action button.
- **Mobile Navigation Menu Overlay**:
  - Activates via the hamburger button (`X` to close).
  - Strictly follows the client's design reference with 8 large full-width blocks in exact order:
    1. **PROJECTS**: Royal Blue bg (`#081757`), White text, White arrow (`→`). Functions as an interactive accordion toggle expanding 5 client sub-links: `ARCHITECTURE`, `INTERIOR DESIGN`, `LANDSCAPING`, `FURNITURE`, `LIGHTING`.
    2. **SHOP**: Black bg (`#000000`), White text, White arrow (`→`). Functions as an interactive slide-over drill-down menu featuring a clean `<` back arrow icon on the left, "SHOP ALL →" link on the right, and graceful expand/collapse interaction for department categories (Home Wear, Accessories, Gems, Clothing [Ladies & Men's Wear], Antique, Paintings).
    3. **JOURNEY**: White bg (`#FFFFFF`), Royal Blue text (`#081757`), Royal Blue arrow, thin black border outline (`border border-black`). Functions as an interactive accordion toggle expanding 2 client sub-links: `HOW CLOUD STARTED` and `ABOUT MR PRASANNA`, with muted serif descriptions targeting `#how-cloud-started` and `#about-mr-prasanna`.
    4. **ARTISTS**: Royal Blue bg (`#081757`), White text, White arrow (`→`). Functions as an interactive accordion toggle expanding 2 client sub-links: `ARTIST OF THE MONTH` (targeting `#artist-of-the-month`) and `OUR ARTISTS` (targeting `#our-artists`), with bold Roboto titles in Royal Blue (`#081757`) and muted Merriweather serif descriptions.
    5. **COLLABORATIONS**: Black bg (`#000000`), White text, White arrow (`→`).
    6. **CLOUD TV**: White bg (`#FFFFFF`), Royal Blue text (`#081757`), Royal Blue arrow, thin black border outline (`border border-black`).
    7. **EVENTS**: Royal Blue bg (`#081757`), White text, White arrow (`→`).
    8. **OPEN CALL**: Black bg (`#000000`), White text, White arrow (`→`).
  - Styled with **Roboto Bold** uppercase typography (`font-roboto font-bold uppercase`).

#### 2. `Footer.tsx` (Global Footer)
- **Brand Column**: Est. 2018 fine art summary and dual atelier locations (Zurich & Kyoto).
- **Collection Links**: Fast navigation across departments and monographs.
- **Contact & Inquiries**: Direct phone, email, and cloister address with social links.

#### 3. `HeroCarousel.tsx`
- Features 3 curated exhibition slides.
- Automatic timer-based sliding with manual pagination indicators.
- Seamless responsive image filling and text overlay.

#### 4. `EnquiryModal.tsx`
- Connects to `GalleryContext`.
- Dynamically receives the selected lot or general consignments.
- Form fields for Collector Name, Email, Phone, Private Viewing Requests, and Condition Report downloads.

#### 5. `RSVPModal.tsx`
- Connects to `GalleryContext`.
- Displays selected event date, location, and title.
- Collects guest name, email, and guest counts.

#### 6. `VideoLightboxModal.tsx`
- Full-screen cinema player overlay with backdrop blur.
- Displays video title, director notes, and high-definition playback.

#### 7. `SearchDrawer.tsx`
- Slides out smoothly from the right side.
- Live queries mock data across Artworks, Artists, and Events simultaneously with instant navigation links.

---

## 6. State Management (`GalleryContext.tsx`)

A single React Context provider wraps the entire application in `layout.tsx`:

```tsx
interface GalleryContextType {
  isEnquiryOpen: boolean;
  selectedArtwork: Artwork | null;
  openEnquiry: (artwork?: Artwork | null) => void;
  closeEnquiry: () => void;

  isRsvpOpen: boolean;
  selectedEvent: GalleryEvent | null;
  openRsvp: (event: GalleryEvent) => void;
  closeRsvp: () => void;

  activeVideo: CloudVideo | null;
  openVideo: (video: CloudVideo) => void;
  closeVideo: () => void;

  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  toggleSearch: () => void;
}
```

This ensures any component or page can trigger an enquiry, RSVP, video playback, or catalog search with zero prop drilling.

---

## 7. Data Layer (`mockData.ts`)

The dataset is typed with TypeScript interfaces:
- **`Artwork`**: Catalog items with lot number, artist, dimensions, medium, provenance, price, estimate, and images.
- **`Artist`**: Biographies, atelier locations, represented works, exhibitions, and tiering.
- **`JourneyMilestone`**: Historical atelier milestones from 2018 to 2026.
- **`Collaboration`**: Cross-disciplinary studies with collaborator rosters and materials.
- **`GalleryEvent`**: Upcoming and past exhibitions, auctions, vernissages, and salons.
- **`CloudVideo`**: 4K video essays with durations, directors, and Vimeo/YouTube streaming sources.

---

## 8. Deployment & CI/CD Pipeline

- **Platform**: GitHub Pages
- **Configuration**: `next.config.ts` sets `output: 'export'`, `basePath: '/cloud-gallery'`, and `assetPrefix: '/cloud-gallery/'` for production builds.
- **Workflow**: `.github/workflows/deploy.yml` triggers on pushes to `main`, executes `npm install`, runs `next build`, and uploads the static `./out` folder to GitHub Pages.
