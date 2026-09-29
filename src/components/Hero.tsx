import Link from "next/link";
import { ChevronDown, MapPin, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center text-white overflow-hidden"
      data-purpose="hero-banner"
    >
      {/* Background Image with Ambient Film Layers */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlh4iyzOKk-6QydlrduSQb2hSRM8xJRsgMWWg45yACiSAENtBxwN7WdbJQEkqZnvE_2xHQxkXGOIH_Y_8pSo2G2T-ouvDwY6LL07p-6zzRXlXPMs5p7lfB5hLIJ6D1238fVUSM_wU47yfOE0XS6ldCrd5Tt0TthNqKLtuAEbm5ZGfV7RvCEi_zjcQiM--0CRV7Euop1RjBqlB93AXck2tB6inq9C0ki9i8IAH4kxT_TV3TtbapNd2olLoUSSAVoYMW0w"
          alt="Next to Nature architectural exterior nestled in lush green hills of Kandy"
          className="w-full h-full object-cover object-center transform scale-105 animate-fade-in duration-1000"
        />
        {/* Multi-stage cinematic gradients for readability and depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-950/50 to-forest-950/35" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20">
        {/* Location Eyebrow */}
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-6 sm:mb-8 shadow-sm">
          <MapPin className="w-3.5 h-3.5 text-sage-400" />
          <span className="text-xs uppercase tracking-[0.25em] font-sans font-medium text-ivory-100">
            Kandy · Central Province, Sri Lanka
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.08] mb-6">
          A little closer <br className="hidden sm:inline" />
          <span className="italic font-normal font-serif text-ivory-200">to nature.</span>
        </h1>

        {/* Subtitle Editorial Paragraph */}
        <p className="max-w-2xl mx-auto text-base sm:text-xl text-ivory-200/90 font-light leading-relaxed mb-8">
          A peaceful boutique homestay in the verdant hills of Kandy. Wake to mist through the
          canopy, birdsong on the verandah, and heartfelt hospitality.
        </p>

        {/* Feature Pills List */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 text-xs sm:text-sm text-ivory-300 mb-10 tracking-wide font-light">
          <span>Quiet mornings</span>
          <span className="text-sage-400">·</span>
          <span>Tropical fruit gardens</span>
          <span className="text-sage-400">·</span>
          <span>Mountain views</span>
          <span className="text-sage-400">·</span>
          <span>Warm Sri Lankan hosting</span>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <a
            href="#stays"
            className="w-full sm:w-auto px-8 py-4 bg-white text-forest-900 rounded-full font-semibold text-xs sm:text-sm tracking-widest uppercase hover:bg-ivory-200 transition-all duration-300 shadow-xl transform hover:-translate-y-0.5"
          >
            Explore our stays
          </a>
          <a
            href="#location"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-semibold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300"
          >
            Find us in Kandy ↓
          </a>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <a
        href="#welcome"
        aria-label="Scroll down to welcome section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/70 hover:text-white transition-colors duration-200"
      >
        <span className="text-[10px] uppercase tracking-widest mb-1.5 font-sans">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
