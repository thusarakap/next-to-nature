"use client";

import { useState } from "react";
import { FAQS, STAYS_DATA } from "@/data/homestayData";
import {
  X,
  Calendar,
  Users,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  Sparkles,
  Send,
  ArrowUpRight,
} from "lucide-react";

interface BookingInquiryProps {
  isOpen: boolean;
  onClose: () => void;
  initialStay?: string;
}

export default function BookingInquiry({
  isOpen,
  onClose,
  initialStay,
}: BookingInquiryProps) {
  const [stay, setStay] = useState(initialStay || STAYS_DATA[0].name);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const selectedStayData = STAYS_DATA.find((s) => s.name === stay) || STAYS_DATA[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-ivory-100 border border-ivory-300 rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl p-6 sm:p-10 relative text-forest-900 my-auto animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-ivory-200 hover:bg-ivory-300 text-forest-900 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 text-sage-600 mb-2">
                <Sparkles className="w-4 h-4 text-terracotta-500" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold font-mono">
                  Direct Guest Inquiries
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-medium text-forest-900">
                Plan your hillside stay.
              </h2>
              <p className="text-forest-900/70 text-xs sm:text-sm font-light mt-1">
                Reach out to Chamari & Nilan for customized dates, group bookings, or local travel
                assistance.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Stay Selection */}
                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-forest-900 mb-1.5">
                    Preferred Accommodation
                  </label>
                  <select
                    value={stay}
                    onChange={(e) => setStay(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-ivory-300 text-forest-900 text-sm focus:outline-none focus:ring-2 focus:ring-sage-500"
                  >
                    {STAYS_DATA.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name} ({s.subtitle})
                      </option>
                    ))}
                    <option value="Entire Homestay (Condo + Stay 1 - Up to 10 Guests)">
                      Entire Homestay (Condo + Stay 1 · Up to 10 Guests)
                    </option>
                  </select>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-forest-900 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-ivory-300 text-forest-900 text-sm focus:outline-none focus:ring-2 focus:ring-sage-500"
                  />
                </div>

                {/* Contact */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-forest-900 mb-1.5">
                    Email or WhatsApp *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="email@example.com or +94..."
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-ivory-300 text-forest-900 text-sm focus:outline-none focus:ring-2 focus:ring-sage-500"
                  />
                </div>

                {/* Check In */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-forest-900 mb-1.5">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-ivory-300 text-forest-900 text-sm focus:outline-none focus:ring-2 focus:ring-sage-500"
                  />
                </div>

                {/* Check Out */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-forest-900 mb-1.5">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-ivory-300 text-forest-900 text-sm focus:outline-none focus:ring-2 focus:ring-sage-500"
                  />
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-forest-900 mb-1.5">
                    Number of Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-ivory-300 text-forest-900 text-sm focus:outline-none focus:ring-2 focus:ring-sage-500"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Direct Airbnb Link */}
                <div className="flex flex-col justify-end">
                  <a
                    href={selectedStayData.airbnbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-ivory-200 border border-ivory-300 text-forest-900 text-xs font-semibold uppercase tracking-wider hover:bg-ivory-300 transition-colors"
                  >
                    <span>Instant Airbnb Booking</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-forest-900 mb-1.5">
                    Special Requests / Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. We are arriving by train at Kandy station around 4 PM, interested in Sri Lankan breakfast."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-ivory-300 text-forest-900 text-sm focus:outline-none focus:ring-2 focus:ring-sage-500"
                  />
                </div>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-forest-900 text-white font-semibold text-xs uppercase tracking-widest hover:bg-forest-800 transition-all shadow-md cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Direct Inquiry</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="py-3.5 px-6 rounded-full bg-transparent border border-ivory-300 text-forest-900 font-semibold text-xs uppercase tracking-widest hover:bg-ivory-200 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>

            {/* FAQs Accordion */}
            <div className="mt-10 pt-8 border-t border-ivory-300">
              <div className="flex items-center gap-2 mb-4 text-forest-900 font-serif text-lg font-medium">
                <HelpCircle className="w-5 h-5 text-sage-600" />
                <span>Frequently Asked Questions</span>
              </div>

              <div className="space-y-2.5">
                {FAQS.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl border border-ivory-200 overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        className="w-full p-3.5 text-left flex items-center justify-between gap-4 text-xs sm:text-sm font-semibold text-forest-900 hover:bg-ivory-50 transition-colors"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-sage-600 transition-transform duration-200 shrink-0 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="p-3.5 pt-0 text-xs sm:text-sm text-forest-900/75 font-light leading-relaxed border-t border-ivory-100">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          /* Submission Confirmation */
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 bg-sage-500/10 text-sage-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-forest-900">
              Thank you, {name}!
            </h3>
            <p className="text-forest-900/80 text-sm max-w-md mx-auto font-light leading-relaxed">
              Your inquiry for <strong>{stay}</strong> ({guests} guests) has been recorded. Chamari &
              Nilan will reach out to <strong>{contact}</strong> shortly.
            </p>
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={selectedStayData.airbnbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-full bg-forest-900 text-white text-xs uppercase tracking-widest font-semibold hover:bg-forest-800 transition-colors shadow-md"
              >
                <span>View {stay} on Airbnb</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-3 rounded-full bg-ivory-200 hover:bg-ivory-300 text-forest-900 text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
