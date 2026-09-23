"use client";

import React from "react";
import { useGallery } from "@/context/GalleryContext";
import { X } from "lucide-react";

export default function VideoLightboxModal() {
  const { activeVideo, closeVideo } = useGallery();

  if (!activeVideo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-[#1C1B19] border border-[#3A3833] shadow-2xl p-4 sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeVideo}
          aria-label="Close video player"
          className="absolute -top-10 right-0 sm:top-4 sm:right-4 p-2 text-[#EAE5DC] hover:text-[#8C6D53] transition-colors"
        >
          <X size={24} strokeWidth={1.5} />
        </button>

        <div className="aspect-video w-full bg-black overflow-hidden relative">
          <video
            src={activeVideo.videoUrl}
            poster={activeVideo.thumbnail}
            controls
            autoPlay
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-4 pt-4 border-t border-[#3A3833] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[#EAE5DC]">
          <div>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#8C6D53] font-medium block">
              {activeVideo.category} · {activeVideo.duration}
            </span>
            <h3 className="font-serif text-xl sm:text-2xl mt-0.5">
              {activeVideo.title}
            </h3>
            <p className="text-xs text-[#A09A90] mt-1 line-clamp-2 max-w-xl">
              {activeVideo.excerpt}
            </p>
          </div>
          <div className="text-xs text-[#7E7971] italic sm:text-right">
            Featuring {activeVideo.speaker}
          </div>
        </div>
      </div>
    </div>
  );
}
