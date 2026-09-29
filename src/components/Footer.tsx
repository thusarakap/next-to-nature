import { STAYS_DATA } from "@/data/homestayData";
import { ArrowUpRight, Heart, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-forest-950 text-ivory-300 pt-16 pb-12 border-t border-forest-900"
      data-purpose="site-footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="font-serif text-2xl tracking-widest text-white uppercase font-semibold">
              Next to Nature
            </div>
            <p className="text-xs uppercase tracking-widest text-sage-400 font-mono">
              Kandy · Central Province · Sri Lanka
            </p>
            <p className="text-sm text-ivory-300/70 font-light max-w-sm leading-relaxed">
              A boutique hillside homestay dedicated to calm mornings, organic nature gardens, and
              warm hospitality by Chamari and Nilan.
            </p>
          </div>

          {/* Accommodation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-widest text-white font-mono font-semibold">
              Stays
            </div>
            <ul className="space-y-2.5 text-xs text-ivory-300/80">
              {STAYS_DATA.map((stay) => (
                <li key={stay.id}>
                  <a
                    href={stay.airbnbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>
                      {stay.name} ({stay.capacity})
                    </span>
                    <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation & Location */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs uppercase tracking-widest text-white font-mono font-semibold">
              Direct Airbnb Booking
            </div>
            <p className="text-xs text-ivory-300/70 font-light leading-relaxed">
              All reservations are handled transparently and securely via Airbnb with verified guest
              protections.
            </p>
            <div className="pt-2">
              <a
                href="https://share.google/jwNHo14OEVOMi8EBl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs text-sage-400 hover:text-white transition-colors"
              >
                <span>View Location on Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright & Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-300/50 font-light">
          <div>
            © {new Date().getFullYear()} Next to Nature Homestay, Kandy. All rights reserved.
          </div>
          <div className="flex items-center space-x-4 text-[11px] uppercase tracking-wider font-mono">
            <span className="flex items-center gap-1">
              <Heart className="w-3 h-3 text-terracotta-500 fill-terracotta-500" />
              <span>Hosted with Care</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1 text-sage-400">
              <Sparkles className="w-3 h-3" />
              <span>Airbnb Superhost</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
