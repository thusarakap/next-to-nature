interface GroupCalloutProps {
  onOpenInquiry?: (stayName?: string) => void;
}

export default function GroupCallout({ onOpenInquiry }: GroupCalloutProps) {
  return (
    <section
      className="py-16 bg-ivory-200/90 border-y border-ivory-300"
      data-purpose="group-booking-callout"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-sage-600 font-semibold font-mono">
              Group & Family Bookings
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-forest-900 font-medium">
              Travelling together with family or friends?
            </h3>
            <p className="text-sm sm:text-base text-forest-900/75 max-w-2xl font-light leading-relaxed">
              Combine the Condo (accommodates 4–6) with Next to Nature 1 (accommodates up to 4).
              Together, the homestay comfortably hosts up to 10 guests under one roof across
              discrete, private self-contained wings.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenInquiry?.("Entire Homestay (Condo + Stay 1 - Up to 10 Guests)")}
            className="shrink-0 px-7 py-3.5 rounded-full border border-forest-900 text-forest-900 hover:bg-forest-900 hover:text-white transition-all text-xs uppercase tracking-widest font-semibold cursor-pointer shadow-sm hover:shadow-md"
          >
            Inquire for Entire Home →
          </button>
        </div>
      </div>
    </section>
  );
}
