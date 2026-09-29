"use client";

import { useState } from "react";
import { GALLERY_PHOTOS, GalleryPhoto } from "@/data/homestayData";
import { Eye } from "lucide-react";

interface GalleryProps {
  onImageClick?: (src: string, caption: string, photoId?: string) => void;
}

export default function Gallery({ onImageClick }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All (11)" },
    { id: "home", label: "The Home" },
    { id: "rooms", label: "Rooms & Living" },
    { id: "views", label: "Balconies & Views" },
    { id: "garden", label: "Garden & Flora" },
  ];

  const filteredPhotos = GALLERY_PHOTOS.filter((photo) => {
    if (activeCategory === "all") return true;
    return photo.category === activeCategory;
  });

  return (
    <section
      id="gallery"
      className="py-24 sm:py-32 bg-ivory-100 border-t border-ivory-300"
      data-purpose="photo-gallery"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center space-x-3 text-sage-600 mb-3">
            <span className="h-px w-8 bg-sage-500" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold">
              Visual Journal
            </span>
            <span className="h-px w-8 bg-sage-500" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-forest-900 leading-tight">
            Life at Next to Nature
          </h2>

          <p className="text-forest-900/75 text-sm sm:text-base mt-3 font-light">
            An unvarnished look across the home, rooms, verandahs, and grounds.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-forest-900 text-white shadow-sm"
                  : "bg-white text-forest-900 border border-ivory-300 hover:bg-ivory-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => onImageClick?.(photo.src, photo.caption, photo.id)}
              className="gallery-item group rounded-2xl overflow-hidden aspect-[4/3] relative bg-ivory-200 shadow-sm cursor-pointer"
            >
              <img
                src={photo.thumbnail || photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover img-zoom-hover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-forest-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-5 text-white">
                <span className="text-xs font-mono uppercase tracking-widest">{photo.tag}</span>
                <span className="p-1.5 rounded-full bg-white/20 backdrop-blur-md">
                  <Eye className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
