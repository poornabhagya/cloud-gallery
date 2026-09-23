"use client";

import React, { createContext, useContext, useState } from "react";
import { Artwork, GalleryEvent, CloudVideo } from "@/data/mockData";

interface GalleryContextType {
  // Enquiry Modal
  isEnquiryOpen: boolean;
  selectedArtwork: Artwork | null;
  openEnquiry: (artwork?: Artwork | null) => void;
  closeEnquiry: () => void;

  // RSVP Modal
  isRsvpOpen: boolean;
  selectedEvent: GalleryEvent | null;
  openRsvp: (event: GalleryEvent) => void;
  closeRsvp: () => void;

  // Video Lightbox Modal
  activeVideo: CloudVideo | null;
  openVideo: (video: CloudVideo) => void;
  closeVideo: () => void;

  // Search Drawer
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  toggleSearch: () => void;
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

export function GalleryProvider({ children }: { children: React.ReactNode }) {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<GalleryEvent | null>(null);

  const [activeVideo, setActiveVideo] = useState<CloudVideo | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const openEnquiry = (artwork?: Artwork | null) => {
    setSelectedArtwork(artwork || null);
    setIsEnquiryOpen(true);
  };

  const closeEnquiry = () => {
    setIsEnquiryOpen(false);
    setSelectedArtwork(null);
  };

  const openRsvp = (event: GalleryEvent) => {
    setSelectedEvent(event);
    setIsRsvpOpen(true);
  };

  const closeRsvp = () => {
    setIsRsvpOpen(false);
    setSelectedEvent(null);
  };

  const openVideo = (video: CloudVideo) => {
    setActiveVideo(video);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);
  const toggleSearch = () => setIsSearchOpen((prev) => !prev);

  return (
    <GalleryContext.Provider
      value={{
        isEnquiryOpen,
        selectedArtwork,
        openEnquiry,
        closeEnquiry,
        isRsvpOpen,
        selectedEvent,
        openRsvp,
        closeRsvp,
        activeVideo,
        openVideo,
        closeVideo,
        isSearchOpen,
        openSearch,
        closeSearch,
        toggleSearch,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
}

export function useGallery() {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error("useGallery must be used within a GalleryProvider");
  }
  return context;
}
