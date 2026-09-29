interface GardenFloraProps {
  onImageClick?: (src: string, caption: string) => void;
}

export default function GardenFlora({ onImageClick }: GardenFloraProps) {
  const images = {
    walkway: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfuosDZPpUKZwRNAElKGTyqmh084tMfSHLIPScnNTl4t60JoV-hhwVWNEGMp5-f28zC-5d4-Y2fMQhtZwyblvIYF7nmn7cR7NI8PwfzBKAlPyP-vABwwFpHwesSoKFTQ74ZWZrxBpQMYp6wlbia2hSny_uPEEnxlhbMyqG88pLB7SEPz6RWNEsla_IIP2Oz2xbhJKulDaTfloR9tp12YA0Z7Alc9ZSkJ_taZ2lL7Z4plKDc1MMZ7RIdiH7Qo0oq-2afQ",
      caption: "The Garden Walkway & Tropical Vines · Paved path amidst giant ferns and foliage",
    },
    lawn: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6MiUoZ2Mb2IMlpsPSJG2fL-WoMCxFv1bOITerKLRIqCUu0YrAyC79RaamJYnLJqE1WOPk8sN3j6_49qsS4ifxX3gKV-1JLUlTGmI9wQ6RFQCxZ7Gm9S0Hc6Vhwxwsz9LAdtCXkO2MIBKyNsPoJAwx30gmVAz07lzxZzX6o9YWHz0vZF2rzAw79185nk5AD3rOqVZ50dFt0jHZa6pFMMmZBb5CooPfaV5hZXcjlDZgejaAV3IZIYO49tCc0oLNkySn8Q",
      caption: "Garden Lawn & Elephant Ear Plants · Granite boulders framed by jungle flora",
    },
    bamboo: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRKwdrVnaZG6iq46ahkJDDu22Qxz1LiJF1EkiLW9f_qfl1bAUFjBP2Z4iCXN6zFEKGhTGBL-M291WiMEwHPSbg-wKWF98N9_b0HIaCo95VP1SbTLvBa8pmYlvM8k3X8kpUMll9DxLX7bqjehadslVey7MHzrIocNtn3r_oWLdHR82UIwjKHDtgOqWF7gCDpsxT_Mpf0oZrT6cHPMbzCPin09c32BpAxQNohpnnacCJojjAmtLKhpx95rd1bCDx-3GUcQ",
      caption: "Golden Bamboo Grove & Entrance Court · Towering golden bamboo and cobblestones",
    },
  };

  return (
    <section
      id="nature"
      className="py-24 sm:py-32 bg-ivory-100"
      data-purpose="garden-flora"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Copy */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center space-x-3 text-sage-600">
              <span className="h-px w-8 bg-sage-500" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold">
                The Garden & Flora
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-forest-900 leading-tight">
              There is a little jungle around the house.
            </h2>

            <p className="text-forest-900/80 text-base leading-relaxed font-light">
              Banana, guava, soursop, pineapple, ginger, lemongrass, turmeric, and ayurvedic herbs grow
              organically around the property grounds, alongside native ferns and ancient moss-draped
              boulders.
            </p>

            <p className="text-forest-900/75 text-sm sm:text-base leading-relaxed font-light">
              Because of the rich vegetative buffer, the grounds are frequented by endemic
              birds—including Asian Paradise Flycatchers, Sri Lanka Hanging Parrots, and sunbirds.
              Stroll barefoot along the tiled garden path, unwind under the giant golden bamboo cluster,
              or take in the quiet scent of wild greenery after hill rain.
            </p>

            {/* Botanical Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-white rounded-xl border border-ivory-300 shadow-2xs">
                <span className="block text-[10px] uppercase tracking-wider text-sage-600 font-mono">
                  Organic
                </span>
                <span className="text-xs sm:text-sm font-serif font-medium text-forest-900">
                  Soursop & Guava
                </span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-ivory-300 shadow-2xs">
                <span className="block text-[10px] uppercase tracking-wider text-sage-600 font-mono">
                  Fauna
                </span>
                <span className="text-xs sm:text-sm font-serif font-medium text-forest-900">
                  Bird Sanctuary
                </span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-ivory-300 shadow-2xs">
                <span className="block text-[10px] uppercase tracking-wider text-sage-600 font-mono">
                  Native
                </span>
                <span className="text-xs sm:text-sm font-serif font-medium text-forest-900">
                  Golden Bamboo
                </span>
              </div>
            </div>
          </div>

          {/* Triple Garden Photo Grid */}
          <div className="lg:col-span-7 order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              className="group rounded-2xl overflow-hidden aspect-[3/4] bg-ivory-200 cursor-pointer shadow-sm"
              onClick={() => onImageClick?.(images.walkway.src, images.walkway.caption)}
            >
              <img
                src={images.walkway.src}
                alt="Paved walkway through lush tropical garden with climbing morning glory vines and elephant ears"
                className="w-full h-full object-cover img-zoom-hover"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <div
                className="group rounded-2xl overflow-hidden aspect-square bg-ivory-200 cursor-pointer shadow-sm"
                onClick={() => onImageClick?.(images.lawn.src, images.lawn.caption)}
              >
                <img
                  src={images.lawn.src}
                  alt="Stone lawn table bordered by massive elephant ear tropical plants and hill trees"
                  className="w-full h-full object-cover img-zoom-hover"
                />
              </div>
              <div
                className="group rounded-2xl overflow-hidden aspect-square bg-ivory-200 cursor-pointer shadow-sm"
                onClick={() => onImageClick?.(images.bamboo.src, images.bamboo.caption)}
              >
                <img
                  src={images.bamboo.src}
                  alt="Rustic cobblestone forecourt with towering golden bamboo cluster and bench"
                  className="w-full h-full object-cover img-zoom-hover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
