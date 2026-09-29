import { REVIEWS_DATA } from "@/data/homestayData";
import { Star, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function Reviews() {
  const stats = [
    { value: "4.93", label: "Average Rating", highlight: false },
    { value: "678+", label: "Airbnb Reviews", highlight: false },
    { value: "8 Yrs", label: "Hosting Experience", highlight: false },
    { value: "100%", label: "Superhost Standard", highlight: true },
  ];

  return (
    <section
      id="reviews"
      className="py-24 sm:py-32 bg-ivory-50 border-t border-ivory-300"
      data-purpose="guest-reviews"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Aggregate Stats */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center space-x-3 text-sage-600 mb-3">
            <span className="h-px w-8 bg-sage-500" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold">
              Reputation & Trust
            </span>
            <span className="h-px w-8 bg-sage-500" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-forest-900 leading-tight">
            Hundreds of guests.
            <br />
            <span className="italic font-normal">One very happy home.</span>
          </h2>

          <p className="text-forest-900/75 text-base sm:text-lg font-light mt-4 leading-relaxed">
            Consistently recognized as an Airbnb Superhost and Guest Favourite across every room
            category.
          </p>

          {/* 4 Score Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="p-5 bg-white rounded-2xl border border-ivory-200 shadow-sm transition-transform hover:-translate-y-0.5"
              >
                <span
                  className={`font-serif text-3xl sm:text-4xl font-semibold block ${
                    stat.highlight ? "text-terracotta-500" : "text-forest-900"
                  }`}
                >
                  {stat.value}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-sage-600 mt-1 block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Verbatim Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-ivory-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex text-amber-400 text-sm mb-3">
                  {[...Array(review.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-forest-900/80 text-sm leading-relaxed font-light italic">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-ivory-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-forest-900">{review.name}</span>
                <span className="text-forest-900/50 font-mono flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-sage-500" />
                  <span>{review.date}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Read All On Airbnb Button */}
        <div className="text-center mt-12">
          <a
            href="https://www.airbnb.com/rooms/22510914"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-forest-900 hover:text-sage-600 transition-colors px-6 py-3 rounded-full border border-ivory-300 bg-white shadow-2xs hover:shadow-sm"
          >
            <span>Read all 670+ reviews on Airbnb</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
