"use client";

import React from "react";
import { useGallery } from "@/context/GalleryContext";
import { X, Film } from "lucide-react";

export default function VideoLightboxModal() {
  const { activeVideo, closeVideo } = useGallery();

  if (!activeVideo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-4xl bg-black border border-[#333333] shadow-2xl p-4 sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeVideo}
          aria-label="Close video player"
          className="absolute -top-10 right-0 sm:top-4 sm:right-4 p-2 text-white hover:opacity-75 transition-opacity"
        >
          <X size={24} strokeWidth={1.5} />
        </button>

        <div className="aspect-video w-full bg-black overflow-hidden relative border border-[#222222]">
          <video
            src={activeVideo.videoUrl}
            poster={activeVideo.thumbnail}
            controls
            autoPlay
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-4 pt-4 border-t border-[#333333] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white">
          <div>
            <div className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-[#AAAAAA] font-medium">
              <Film size={12} className="text-white" />
              <span>{activeVideo.category} · {activeVideo.duration}</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl mt-1 text-white">
              {activeVideo.title}
            </h3>
            <p className="text-xs text-[#CCCCCC] mt-1 line-clamp-2 max-w-xl font-light">
              {activeVideo.excerpt}
            </p>
          </div>
          <div className="text-xs text-[#999999] italic sm:text-right flex-shrink-0">
            Featuring {activeVideo.speaker}
          </div>
        </div>
      </div>
    </div>
  );
}
