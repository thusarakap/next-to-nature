interface PropertyGroundsProps {
  onImageClick?: (src: string, caption: string) => void;
}

export default function PropertyGrounds({ onImageClick }: PropertyGroundsProps) {
  const images = {
    aerial: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA04M29LIoUP5fno0Sufen5VIkk69NF_fv-i0kh4HYtZMGQMf9yHD3B8o021QoBk_dkZpUKYZoqk1o1KDISeseVZhJe5qiwnGWjPzmZ9AYTKszTQ0UyU7spmAUhDkfQko2lelQZeYhjLd1DaolzHvJPxQ1gBjkhF4MlXmwEFzBVnJTB_OBcQjCTfgnxNSJ0Cfu3DHULTkBW1gXNtWLc00KgEg3AhpW-wOXAdbRATXMJv0FDB_lmV03TN37ZTLtYhmPNwA",
      caption: "Canopy Perspective · Aerial vantage of the homestay rooflines nestled into native forest",
    },
    clock: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTZxwOE3M0zMkcrsI9kMzjYfBTR2dPNYd5sbVds9_kWRsnp1OLtaJSNWZvRAUDi328hwv7flmdanba6vZTGElrZ86zV-emRp41It_3F39doUwJm2io5thwLowsiY8yDpjqgRAbpiSi4Wkkmsm9gA8rnZkMMNgYKt58EUh5xzZgKWR1H_ZNv5y_6BR2zKiQ9OGOZTWty0J8P-q_gh6JMwWjS0VLwKmTQ4MdNIXWsL7EYd-eA3U4jlCWP_l4kDqotKybpw",
      caption: "Crafted Spaces & Serene Details · Vintage railway clock, Buddha statue, and timber ceilings",
    },
    umbrella: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9kkW_q7U1J70aQQSEGKcrlnNpgyaFy23hcwBIBgvZzZUa2RNvxR4ZkAyITUBQaCFu_dcL7CTbxKkw4WZmggPkPwAABfq3n7WwSD4cmg_5reR1oxZayV5vcsz-lmCz7UvaBijvUPMfup-My4Fg-5ihPSEKZLO6zlo4uQ0ZPTP1MiXMB7iaSJ4gfRV4AU2re0aIqxc-87mpomeQaNAaDvQvG-2RO5Ur64nZGQ1RXKCIbhT_XFhMP9VbyqmG-uX6PcvQbw",
      caption: "Al Fresco Hillside Seating · Minimalist concrete table with umbrella overlooking the valley",
    },
  };

  return (
    <section
      id="property"
      className="py-24 sm:py-32 bg-ivory-50 relative overflow-hidden"
      data-purpose="property-grounds"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-3 text-sage-600 mb-3">
            <span className="h-px w-8 bg-sage-500" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold">
              The Property & Grounds
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-forest-900 leading-tight">
            Come for the views.
            <br />
            <span className="italic font-normal">Stay for the feeling of home.</span>
          </h2>
          <p className="mt-4 text-forest-900/75 text-base sm:text-lg font-light leading-relaxed">
            Wander across terraced flagstone walkways bordered by wild ginger and giant elephant ear
            plants. Find shaded spots under hand-carved eaves, listen to the resident songbirds, or sit
            quietly with a fresh cup of Ceylon tea beneath the umbrella terrace.
          </p>
        </div>

        {/* Asymmetrical Editorial Imagery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Aerial Canopy Photo */}
          <div
            className="md:col-span-7 group rounded-2xl overflow-hidden relative shadow-md bg-ivory-200 flex flex-col justify-end min-h-[380px] lg:min-h-[480px] cursor-pointer"
            onClick={() => onImageClick?.(images.aerial.src, images.aerial.caption)}
          >
            <img
              src={images.aerial.src}
              alt="Drone aerial view showing the homestay roof immersed directly into dense tropical jungle"
              className="absolute inset-0 w-full h-full object-cover img-zoom-hover"
            />
            <div className="relative z-10 bg-gradient-to-t from-forest-950/90 via-forest-950/30 to-transparent p-6 sm:p-8 text-white">
              <span className="text-[11px] tracking-widest uppercase font-mono text-sage-400">
                Canopy Perspective
              </span>
              <h3 className="font-serif text-xl sm:text-2xl mt-1 font-medium">
                Tucked Deep Within the Green
              </h3>
              <p className="text-xs sm:text-sm text-ivory-200/90 mt-2 font-light max-w-xl">
                An aerial vantage of our tiled rooflines, cradled entirely by native trees,
                jackfruit, bamboo, and hill slope flora.
              </p>
            </div>
          </div>

          {/* Side Stack */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-8">
            {/* Verandah with Clock & Buddha */}
            <div
              className="group rounded-2xl overflow-hidden relative shadow-md bg-ivory-200 min-h-[220px] sm:min-h-[240px] flex-1 cursor-pointer"
              onClick={() => onImageClick?.(images.clock.src, images.clock.caption)}
            >
              <img
                src={images.clock.src}
                alt="Vintage railway clock, Buddha statue, and exposed timber verandah roof"
                className="w-full h-full object-cover img-zoom-hover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/20 to-transparent p-5 flex flex-col justify-end text-white">
                <h3 className="font-serif text-lg font-medium">Crafted Spaces & Serene Details</h3>
                <p className="text-xs text-ivory-200 font-light mt-0.5">
                  Teak finishes, Buddha statues, and verandah breezes.
                </p>
              </div>
            </div>

            {/* Concrete Table with Umbrella */}
            <div
              className="group rounded-2xl overflow-hidden relative shadow-md bg-ivory-200 min-h-[220px] sm:min-h-[240px] flex-1 cursor-pointer"
              onClick={() => onImageClick?.(images.umbrella.src, images.umbrella.caption)}
            >
              <img
                src={images.umbrella.src}
                alt="Minimalist concrete dining table with white canopy umbrella overlooking jungle"
                className="w-full h-full object-cover img-zoom-hover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/20 to-transparent p-5 flex flex-col justify-end text-white">
                <h3 className="font-serif text-lg font-medium">Al Fresco Hillside Seating</h3>
                <p className="text-xs text-ivory-200 font-light mt-0.5">
                  Morning breakfast or sunset reading beneath the umbrella.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
