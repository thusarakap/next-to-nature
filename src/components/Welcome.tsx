interface WelcomeProps {
  onImageClick?: (src: string, caption: string) => void;
}

export default function Welcome({ onImageClick }: WelcomeProps) {
  const verandahImg =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAVjObywKemcJmeAxpwXRn00ZMrY8oHTkMVx2JFo6Qt15Kdz0G4XDnUjVbDO7base0ffhq-W3Rrtrm8Ol5UxTk0PEe16Qzgl-HGXiwGy8PiElfCzulNh0l8bLfrffQj5YO8YzVuzgfRssMrmdXjB_svEAet8pM3Px-v9XwooKsoAkd3ZMdoYNrK6Vh3SF6mw5bJkB99OIWGz1vV74dIEfoG9apSCdy_BEsX9SFN7KmDm8lOzM20UYlL0H9KlRX-xq2ObQ";
  const verandahCaption =
    "The Valley Verandah · The open terrace framing the tropical canopy and distant tea-clad contours of the Mahaweli basin.";

  return (
    <section
      id="welcome"
      className="py-24 sm:py-32 bg-ivory-100 border-b border-ivory-300"
      data-purpose="welcome-concept"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-3 text-sage-600">
              <span className="h-px w-8 bg-sage-500" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold">
                Welcome to Next to Nature
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-forest-900 leading-[1.15]">
              One home.
              <br />
              <span className="italic font-normal">Surrounded by nature.</span>
            </h2>

            <p className="text-forest-900/80 text-base sm:text-lg leading-relaxed font-light">
              Tucked amongst the steep slopes of Kandy, Next to Nature was built to coexist seamlessly
              with the indigenous trees, granite boulders, and bird sanctuaries that inhabit Sri
              Lanka’s central highlands.
            </p>

            <p className="text-forest-900/75 text-sm sm:text-base leading-relaxed font-light">
              Close enough to the sacred city to explore with ease, yet secluded enough to only hear
              wind whispering through bamboo and native birds at dawn. Next to Nature is not a
              conventional hotel, but a refined family-run sanctuary offering distinctive private ways
              to stay — whether you arrive as a solo explorer, a couple seeking quiet hillside
              mornings, or a multi-generational family gathering together.
            </p>

            <div className="pt-4 border-t border-ivory-300 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-forest-900/80">
              <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-ivory-300/60">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-forest-900 text-ivory-100 flex items-center justify-center font-serif text-sm">
                  1
                </span>
                <span className="font-medium">Dedicated private wings & suites</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-ivory-300/60">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-forest-900 text-ivory-100 flex items-center justify-center font-serif text-sm">
                  2
                </span>
                <span className="font-medium">Hosted by Chamari & Nilan</span>
              </div>
            </div>
          </div>

          {/* Editorial Imagery Column */}
          <div className="lg:col-span-6">
            <div className="relative group">
              {/* Background accent geometry */}
              <div className="absolute -inset-3 bg-ivory-300/60 rounded-3xl -rotate-1 transition-transform duration-500 group-hover:rotate-0" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-ivory-300 bg-white">
                <div
                  className="cursor-pointer overflow-hidden"
                  onClick={() => onImageClick?.(verandahImg, verandahCaption)}
                >
                  <img
                    src={verandahImg}
                    alt="Expansive sheltered verandah with potted palms looking out over the misty mountain valley"
                    className="w-full h-[380px] sm:h-[460px] object-cover img-zoom-hover"
                  />
                </div>
                <div className="p-5 sm:p-6 bg-white border-t border-ivory-200 flex items-start justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-forest-900">
                      The Valley Verandah
                    </h3>
                    <p className="text-xs sm:text-sm text-forest-900/65 mt-1 font-light">
                      The open terrace framing the tropical canopy and distant tea-clad contours of
                      the Mahaweli basin.
                    </p>
                  </div>
                  <span className="text-xs tracking-widest text-sage-600 uppercase font-mono font-medium ml-4 mt-1 shrink-0 px-2 py-1 bg-ivory-100 rounded border border-ivory-200">
                    07°17&apos;N
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
