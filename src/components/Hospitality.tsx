import { Check, Star, HeartHandshake, Coffee, Car, Map, Sparkles } from "lucide-react";

export default function Hospitality() {
  const hostPerks = [
    {
      icon: Coffee,
      text: "Fresh traditional Sri Lankan breakfast on request",
    },
    {
      icon: Car,
      text: "Reliable local Tuk-Tuk & taxi arrangements",
    },
    {
      icon: Map,
      text: "Curated local dining & hidden trail tips",
    },
    {
      icon: Sparkles,
      text: "Laundry assistance & quiet workspace amenities",
    },
  ];

  return (
    <section
      className="py-24 sm:py-32 bg-ivory-50 border-b border-ivory-300"
      data-purpose="hospitality-hosts"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-ivory-300 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-3 text-sage-600">
                <span className="h-px w-8 bg-sage-500" />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold">
                  Genuine Hospitality
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-forest-900 leading-tight">
                Stay somewhere people know you.
              </h2>

              <p className="text-forest-900/80 text-base leading-relaxed font-light">
                Chamari and Nilan live on the property grounds and are genuinely committed to making
                every stay seamless, relaxed, and memorable. Warm, attentive, and discreet, they are
                always on hand whenever you need local guidance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 text-sm text-forest-900/80 font-light">
                {hostPerks.map((perk, i) => (
                  <div key={i} className="flex items-start space-x-3 p-2.5 rounded-lg bg-ivory-100/70 border border-ivory-200/60">
                    <perk.icon className="w-4 h-4 text-sage-600 shrink-0 mt-0.5" />
                    <span>{perk.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Host Quotes Callout */}
            <div className="lg:col-span-5 bg-ivory-100 rounded-2xl p-6 sm:p-8 border border-ivory-200">
              <div className="flex items-center space-x-1 text-amber-500 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <blockquote className="font-serif italic text-base sm:text-lg text-forest-900 leading-relaxed">
                &ldquo;Chamari and Nilan were the most amazing hosts. We were welcomed like lifelong
                friends. The place was pristine, the surrounding nature extraordinary, and their
                local recommendations made our trip unforgettable.&rdquo;
              </blockquote>

              <div className="mt-4 pt-4 border-t border-ivory-300 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-forest-900">
                    Toby & Family
                  </div>
                  <div className="text-[11px] text-forest-900/60 font-mono">
                    Verified Airbnb Guest · Superhost Review
                  </div>
                </div>
                <span className="text-xs uppercase font-mono px-2.5 py-1 bg-white rounded-md border border-ivory-300 text-sage-600 font-semibold shadow-2xs">
                  Superhost
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
