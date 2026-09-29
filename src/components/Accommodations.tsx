"use client";

import { useState } from "react";
import { STAYS_DATA, StayItem } from "@/data/homestayData";
import { Star, Users, Bed, Bath, Trees, Sparkles, ArrowUpRight, Check } from "lucide-react";

interface AccommodationsProps {
  onImageClick?: (src: string, caption: string) => void;
  onOpenInquiry?: (stayName?: string) => void;
}

export default function Accommodations({
  onImageClick,
  onOpenInquiry,
}: AccommodationsProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredStays = STAYS_DATA.filter((stay) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "couples") return stay.category === "couples";
    if (activeFilter === "family") return stay.category === "family";
    if (activeFilter === "group") return stay.category === "group";
    return true;
  });

  return (
    <section
      id="stays"
      className="py-24 sm:py-32 bg-ivory-100"
      data-purpose="accommodation-offerings"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center space-x-3 text-sage-600 mb-3">
            <span className="h-px w-8 bg-sage-500" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold">Accommodation</span>
            <span className="h-px w-8 bg-sage-500" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium text-forest-900 leading-tight">
            Find your space.
          </h2>
          <p className="font-serif italic text-xl text-sage-600 mt-2">
            One homestay, several ways to stay.
          </p>
          <p className="text-forest-900/75 text-sm sm:text-base mt-4 font-light leading-relaxed">
            Whether you are travelling as a couple, a family, or a group of friends, there is a tailored
            way to experience Next to Nature. All stays feature authentic high-speed Wi-Fi, comfortable
            beds, spotless private facilities, and secure direct booking on Airbnb.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16 no-scrollbar">
          {[
            { id: "all", label: "All Stays (4)" },
            { id: "couples", label: "For Couples (1–2 Guests)" },
            { id: "family", label: "For Families (Up to 4 Guests)" },
            { id: "group", label: "Feature Residence (4–6 Guests)" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeFilter === tab.id
                  ? "bg-forest-900 text-white shadow-sm"
                  : "bg-white text-forest-900 border border-ivory-300 hover:bg-ivory-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Stay Cards */}
        <div className="space-y-16 sm:space-y-24">
          {filteredStays.map((stay) => {
            const isFeature = stay.isFeature;

            return (
              <article
                key={stay.id}
                className={`rounded-3xl p-6 sm:p-10 border transition-all duration-300 shadow-sm hover:shadow-md ${
                  isFeature
                    ? "bg-forest-900 text-white border-forest-800 relative overflow-hidden shadow-xl"
                    : "bg-white text-forest-900 border-ivory-300"
                }`}
                data-purpose={`stay-card-${stay.id}`}
              >
                {/* Subtle backdrop gradient on Feature Card */}
                {isFeature && (
                  <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-sage-500/10 rounded-full blur-3xl pointer-events-none" />
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Photo Display */}
                  <div
                    className={`lg:col-span-7 ${
                      isFeature
                        ? "space-y-4"
                        : "grid grid-cols-1 sm:grid-cols-2 gap-4"
                    }`}
                  >
                    {isFeature ? (
                      <>
                        {/* Main Condo Big Photo */}
                        <div
                          className="group rounded-2xl overflow-hidden aspect-[16/10] bg-forest-950 cursor-pointer relative"
                          onClick={() =>
                            onImageClick?.(stay.images[0].src, stay.images[0].caption)
                          }
                        >
                          <img
                            src={stay.images[0].src}
                            alt={stay.images[0].alt}
                            className="w-full h-full object-cover img-zoom-hover"
                          />
                          <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-sm text-[11px] text-ivory-100 rounded-md font-mono">
                            Click to view full photo
                          </span>
                        </div>

                        {/* Sub Photos */}
                        <div className="grid grid-cols-2 gap-4">
                          {stay.images.slice(1).map((img, idx) => (
                            <div
                              key={idx}
                              className="group rounded-xl overflow-hidden aspect-[4/3] bg-forest-950 cursor-pointer"
                              onClick={() => onImageClick?.(img.src, img.caption)}
                            >
                              <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover img-zoom-hover"
                              />
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      stay.images.map((img, idx) => (
                        <div
                          key={idx}
                          className="group rounded-2xl overflow-hidden aspect-[4/3] bg-ivory-200 cursor-pointer relative"
                          onClick={() => onImageClick?.(img.src, img.caption)}
                        >
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover img-zoom-hover"
                          />
                          <span className="absolute bottom-2.5 left-2.5 px-2 py-0.5 bg-black/50 backdrop-blur-sm text-[10px] text-white rounded font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                            Enlarge
                          </span>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
                    <div>
                      {/* Top Badges & Meta */}
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                        <span
                          className={`text-xs font-mono uppercase tracking-widest font-semibold ${
                            isFeature ? "text-sage-400" : "text-sage-600"
                          }`}
                        >
                          {stay.stayNumber}
                        </span>

                        <div className="flex items-center space-x-2">
                          {stay.badge && (
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${
                                isFeature
                                  ? "bg-terracotta-500 text-white border-terracotta-400 font-semibold shadow-sm"
                                  : "bg-terracotta-500/10 text-terracotta-600 border-terracotta-500/20"
                              }`}
                            >
                              {stay.badge}
                            </span>
                          )}

                          <span
                            className={`text-xs font-semibold flex items-center gap-1 ${
                              isFeature ? "text-ivory-100" : "text-forest-900"
                            }`}
                          >
                            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            <span>{stay.rating.toFixed(2)}</span>
                            <span
                              className={`font-normal ${
                                isFeature ? "text-ivory-300/60" : "text-forest-900/50"
                              }`}
                            >
                              ({stay.reviewCount})
                            </span>
                          </span>
                        </div>
                      </div>

                      {/* Stay Name */}
                      <h3
                        className={`font-serif text-2xl sm:text-3xl font-medium ${
                          isFeature ? "text-white" : "text-forest-900"
                        }`}
                      >
                        {stay.name}
                      </h3>
                      <p
                        className={`text-xs uppercase tracking-widest font-medium mt-1 ${
                          isFeature ? "text-sage-400" : "text-forest-900/60"
                        }`}
                      >
                        {stay.subtitle}
                      </p>

                      <p
                        className={`text-sm sm:text-base font-light leading-relaxed mt-4 ${
                          isFeature ? "text-ivory-200/90" : "text-forest-900/75"
                        }`}
                      >
                        {stay.description}
                      </p>

                      {/* Spec summary */}
                      <div
                        className={`grid grid-cols-2 gap-2 mt-4 p-3 rounded-xl text-xs font-light ${
                          isFeature
                            ? "bg-white/5 border border-white/10 text-ivory-200"
                            : "bg-ivory-50 border border-ivory-200 text-forest-900/80"
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <Bed className="w-3.5 h-3.5 text-sage-500 shrink-0" />
                          <span>{stay.specs.beds}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Bath className="w-3.5 h-3.5 text-sage-500 shrink-0" />
                          <span>{stay.specs.bathrooms}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-sage-500 shrink-0" />
                          <span>{stay.capacity}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Trees className="w-3.5 h-3.5 text-sage-500 shrink-0" />
                          <span>{stay.specs.view}</span>
                        </div>
                      </div>

                      {/* Amenity Chips */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {stay.amenities.map((amenity, i) => (
                          <span
                            key={i}
                            className={`px-2.5 py-1 text-xs rounded-md border flex items-center gap-1 ${
                              isFeature
                                ? "bg-white/10 text-ivory-100 border-white/15"
                                : "bg-ivory-100 text-forest-900 border-ivory-200"
                            }`}
                          >
                            <Check className="w-3 h-3 text-sage-500" />
                            <span>{amenity}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Booking Action */}
                    <div
                      className={`pt-5 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
                        isFeature ? "border-white/15" : "border-ivory-200"
                      }`}
                    >
                      <div
                        className={`text-xs font-mono ${
                          isFeature ? "text-ivory-300/70" : "text-forest-900/60"
                        }`}
                      >
                        Airbnb Listing #{stay.airbnbId}
                      </div>

                      <div className="flex items-center gap-2.5 w-full sm:w-auto">
                        {onOpenInquiry && (
                          <button
                            type="button"
                            onClick={() => onOpenInquiry(stay.name)}
                            className={`px-4 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                              isFeature
                                ? "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                                : "bg-ivory-100 text-forest-900 hover:bg-ivory-200 border border-ivory-300"
                            }`}
                          >
                            Inquire
                          </button>
                        )}
                        <a
                          href={stay.airbnbUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full text-xs uppercase tracking-widest font-semibold transition-all shadow-md gap-1.5 ${
                            isFeature
                              ? "bg-white text-forest-950 hover:bg-ivory-200"
                              : "bg-forest-900 text-white hover:bg-forest-800"
                          }`}
                        >
                          <span>View on Airbnb</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
