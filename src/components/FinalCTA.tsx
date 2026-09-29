import { MapPin, ArrowUpRight } from "lucide-react";

interface FinalCTAProps {
  onOpenInquiry?: () => void;
}

export default function FinalCTA({ onOpenInquiry }: FinalCTAProps) {
  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-forest-900 text-white overflow-hidden"
      data-purpose="final-call-to-action"
    >
      {/* Atmospheric Backdrop Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuClcfRxSDDljwgc6dshHbLIGIqSDC0QOw5r2L6G39vPGvQKcvc6bb5HixzUAV3pPupM2jn-UVOFoZUN8thGeI4V1IqdQuG3eAbWZc7knOnddC9GS4L2AHfRdFYJTlkfjGq9ilNN5gNIftF5b_Gzxw9_oaXbBEyiTdNqthWTM4qbnPtAO8n1Vrg1D55XLKfZPmXZ4mK8AA6eobgJ07czHla8oBDwCq1gv1889cA738RKAlBGuUN35V3gYDSaCUwmovNQTw"
          alt="Misty pink sunset over Sri Lankan hills in Kandy"
          className="w-full h-full object-cover opacity-35 filter brightness-75"
        />
        <div className="absolute inset-0 bg-forest-950/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-xs uppercase tracking-[0.25em] font-mono text-sage-400 mb-4">
          Reserve Your Stay in Kandy
        </span>

        <h2 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight mb-6">
          Come stay next to nature.
        </h2>

        <p className="text-base sm:text-xl text-ivory-200 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          A peaceful corner of Kandy, surrounded by tropical green, misty hills, and hosts who are
          genuinely delighted to welcome you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#stays"
            className="w-full sm:w-auto px-8 py-4 bg-white text-forest-950 rounded-full font-semibold text-xs sm:text-sm tracking-widest uppercase hover:bg-ivory-200 transition-all shadow-xl"
          >
            Explore All Stays →
          </a>

          {onOpenInquiry && (
            <button
              type="button"
              onClick={onOpenInquiry}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/25 rounded-full font-semibold text-xs sm:text-sm tracking-widest uppercase transition-all cursor-pointer"
            >
              Direct Inquiry
            </button>
          )}

          <a
            href="https://share.google/jwNHo14OEVOMi8EBl"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 bg-transparent hover:bg-white/10 text-white/90 border border-white/20 rounded-full font-semibold text-xs sm:text-sm tracking-widest uppercase transition-all inline-flex items-center justify-center gap-1.5"
          >
            <MapPin className="w-4 h-4 text-sage-400" />
            <span>Get Directions</span>
          </a>
        </div>
      </div>
    </section>
  );
}
