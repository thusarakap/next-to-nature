import { MapPin, Navigation, Compass, ExternalLink } from "lucide-react";

export default function Location() {
  const distances = [
    {
      place: "Kandy City Centre & Kandy Lake",
      distance: "~ 4.5 km",
      time: "12–15 mins",
    },
    {
      place: "Royal Botanical Gardens Peradeniya",
      distance: "~ 4.0 km",
      time: "10–12 mins",
    },
    {
      place: "Temple of the Sacred Tooth Relic (Sri Dalada Maligawa)",
      distance: "~ 5.0 km",
      time: "15 mins",
    },
    {
      place: "Ceylon Tea Museum (Hantana)",
      distance: "~ 6.2 km",
      time: "18 mins",
    },
  ];

  return (
    <section
      id="location"
      className="py-24 sm:py-32 bg-ivory-100"
      data-purpose="location-map"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text & Distances */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-3 text-sage-600">
              <span className="h-px w-8 bg-sage-500" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold">
                Location & Surrounds
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-forest-900 leading-tight">
              Close enough to explore.
              <br />
              <span className="italic font-normal">Far enough to breathe.</span>
            </h2>

            <p className="text-forest-900/80 text-base leading-relaxed font-light">
              Situated in the tranquil hill suburbs of Kandy, Next to Nature gives you direct access to
              Sri Lanka’s cultural heart without the relentless horns, dust, and commotion of central
              traffic.
            </p>

            {/* Distances List */}
            <div className="space-y-3 pt-2">
              {distances.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-ivory-200 shadow-2xs"
                >
                  <div>
                    <span className="text-sm font-medium text-forest-900 block">
                      {item.place}
                    </span>
                    <span className="text-[11px] text-forest-900/50 font-mono">
                      Approx {item.time} by Tuk-Tuk
                    </span>
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-ivory-100 rounded-md text-sage-600 border border-ivory-200">
                    {item.distance}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="https://share.google/jwNHo14OEVOMi8EBl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-full bg-forest-900 text-white hover:bg-forest-800 transition-colors text-xs font-semibold tracking-widest uppercase shadow-md"
              >
                <MapPin className="w-4 h-4 text-sage-400" />
                <span>Open in Google Maps →</span>
              </a>
            </div>
          </div>

          {/* Stylized Map / Location Visual */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden border border-ivory-300 bg-white shadow-xl p-3">
              <div className="rounded-2xl overflow-hidden relative aspect-[16/10] bg-ivory-200">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQEoqLR3lNdS_ShSgJNCuj0ppk-920_6SYEyn2EbrOnAAkt6tcxFaF04Kba9y9W-H_bbTGH0INsAE9A-uBShUTFO9iK9GmS3IzYgbkxBNwUXsFwy3NlbUWHbouJq83jutPSFEFzc6gb6MBwi-wIvr6XqAPSj5vIER99dAOwDrEk89LeFmUu7RV4XKj8iwu4TpDi4JG_FxMlczS3U9_6oP_ZHc3tVBPVq4d5xRa6dMMbnSbBO_E_4VCsM1czFyytioMXA"
                  alt="Lush green forested hill slopes bordering Next to Nature Homestay in Kandy"
                  className="w-full h-full object-cover"
                />

                {/* Map Pin Card Overlay */}
                <div className="absolute inset-0 bg-forest-950/40 backdrop-blur-[2px] flex items-center justify-center p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 max-w-sm text-center shadow-2xl border border-white">
                    <div className="w-12 h-12 mx-auto rounded-full bg-forest-900 text-white flex items-center justify-center mb-3 shadow-md">
                      <MapPin className="w-6 h-6 text-sage-300" />
                    </div>
                    <h3 className="font-serif text-xl font-medium text-forest-900">
                      Next to Nature
                    </h3>
                    <p className="text-xs text-forest-900/60 uppercase tracking-widest mt-0.5 font-mono">
                      Kandy · Central Province · Sri Lanka
                    </p>
                    <p className="text-xs text-forest-900/75 mt-3 font-light leading-relaxed">
                      Quiet hillside access with private on-premises parking for scooters, cars, and
                      vans.
                    </p>
                    <a
                      href="https://share.google/jwNHo14OEVOMi8EBl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center justify-center gap-1.5 w-full py-2.5 bg-ivory-100 hover:bg-ivory-200 text-forest-900 text-xs font-semibold rounded-lg transition-colors border border-ivory-300 uppercase tracking-wider"
                    >
                      <Navigation className="w-3.5 h-3.5 text-sage-600" />
                      <span>Navigate with GPS</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
