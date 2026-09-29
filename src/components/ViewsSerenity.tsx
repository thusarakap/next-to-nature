interface ViewsSerenityProps {
  onImageClick?: (src: string, caption: string) => void;
}

export default function ViewsSerenity({ onImageClick }: ViewsSerenityProps) {
  const images = {
    sunset: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-5dSDVINZeQA3nYf2611SYTGjclnMgIBjc4kdZgZ269WkHIFkh4eJfkvLnYFAwVTSKompHg1uCyVIHkOg9-j6G7kMJPTWwBHhfV7pwcg5EVO9gzFtrnoUVaEshe9Ivp53S5QkCZ3a4CrlxiW9CPdhJIwcjmbg9RTIBkeXM22APLIkFEPXrw6ekap6yOpxIglDWhXK_a8yLWRTS5grT0Yt0vQN5CRSl8SSf9l3DspIe5S4NuW_IAVJCWnBmAtPSUciaA",
      caption: "Pink Sunset Twilight over Kandy Hills · Viewed from the verandah balcony",
    },
    avocado: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvF_fmTUmLlyDCGPbkljfAHIAAm6u9KAdN2T5hFm1rGY0uazpmJ1qA9ZXgHBzPWpJd6dfTzDTmQ0mvZXgqgBHt6AvDDn3zznnglegfhaW2hV1W3BAMnfpyk9sLUiJbiDK54RCv96KZYgbUDCwn3tg8TsM8q7fLseh3wQmwKm4FVYos0npLFGKzgq-7yC2RaNYL-fxYrROznqFjdYn01XeU6BRvvQftiCH3hV1Du1oAVblZL_Ap4OXLuiQ7cwQinteSZA",
      caption: "Balcony Terrace Overlooking Avocado Tree · Wild fruit canopy right outside your window",
    },
  };

  return (
    <section
      className="py-24 sm:py-32 bg-forest-900 text-white relative overflow-hidden"
      data-purpose="views-serenity"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-3 text-sage-400 mb-3">
            <span className="h-px w-8 bg-sage-500" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold">
              Morning & Sunset
            </span>
            <span className="h-px w-8 bg-sage-500" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-white leading-tight">
            Wake up to the hills.
          </h2>
          <p className="mt-4 text-ivory-200/80 text-base sm:text-lg font-light leading-relaxed">
            The balconies and open terraces orient directly towards the rolling ridgelines. As dawn
            breaks, cool mountain mist lifts from the canopy; by evening, pink and violet twilight
            settles softly across the valley.
          </p>
        </div>

        {/* Panorama Duo Display */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div
            className="md:col-span-7 group rounded-3xl overflow-hidden relative shadow-2xl aspect-[16/10] bg-forest-950 cursor-pointer"
            onClick={() => onImageClick?.(images.sunset.src, images.sunset.caption)}
          >
            <img
              src={images.sunset.src}
              alt="Ethereal pink and purple sunset sky silhouetted by delicate tree branches and palms in Kandy"
              className="w-full h-full object-cover img-zoom-hover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 text-xs font-mono tracking-widest text-ivory-200 uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-terracotta-500" />
              <span>Sunset from the Balcony</span>
            </div>
          </div>

          <div
            className="md:col-span-5 group rounded-3xl overflow-hidden relative shadow-2xl aspect-[4/5] bg-forest-950 cursor-pointer"
            onClick={() => onImageClick?.(images.avocado.src, images.avocado.caption)}
          >
            <img
              src={images.avocado.src}
              alt="View from private terrace looking directly onto avocado tree branches heavy with green fruit"
              className="w-full h-full object-cover img-zoom-hover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 text-xs font-mono tracking-widest text-ivory-200 uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sage-400" />
              <span>Wild Fruit Canopy Outside Your Window</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
