"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Compass, Sparkles } from "lucide-react";

interface HeaderProps {
  onOpenInquiry?: () => void;
}

export default function Header({ onOpenInquiry }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "The Home", href: "#welcome" },
    { name: "Grounds", href: "#property" },
    { name: "Stays", href: "#stays" },
    { name: "Garden & Flora", href: "#nature" },
    { name: "Location", href: "#location" },
    { name: "Reviews", href: "#reviews" },
    { name: "Gallery", href: "#gallery" },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "glass-nav-scrolled text-forest-900"
          : "glass-nav-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity */}
          <Link
            href="#"
            className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 rounded-lg py-1"
            aria-label="Next to Nature Homestay Kandy"
          >
            <span
              className={`font-serif text-xl sm:text-2xl font-semibold tracking-widest uppercase transition-colors duration-300 ${
                isScrolled ? "text-forest-900" : "text-white"
              }`}
            >
              Next to Nature
            </span>
            <span
              className={`text-[10px] sm:text-xs tracking-[0.25em] uppercase font-medium transition-colors duration-300 ${
                isScrolled ? "text-sage-600" : "text-sage-400"
              }`}
            >
              Kandy · Sri Lanka
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-7 text-sm font-medium tracking-wide"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`py-1 transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:transition-all after:duration-300 hover:after:w-full ${
                  isScrolled
                    ? "hover:text-sage-600 after:bg-forest-900"
                    : "hover:text-sage-300 after:bg-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {onOpenInquiry && (
              <button
                type="button"
                onClick={onOpenInquiry}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 border cursor-pointer inline-flex items-center gap-1.5 ${
                  isScrolled
                    ? "border-ivory-300 text-forest-900 hover:bg-ivory-200"
                    : "border-white/30 text-white hover:bg-white/10"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-terracotta-500" />
                <span>Inquire</span>
              </button>
            )}

            <a
              href="#stays"
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-sm inline-flex items-center gap-1.5 ${
                isScrolled
                  ? "bg-forest-900 text-white hover:bg-forest-800"
                  : "bg-white text-forest-950 hover:bg-ivory-200"
              }`}
            >
              <span>Explore Stays</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-sage-500 ${
                isScrolled ? "text-forest-900" : "text-white"
              }`}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ivory-100/98 text-forest-900 border-b border-ivory-300 shadow-2xl px-6 py-6 transition-all animate-in fade-in slide-in-from-top-4 duration-200 backdrop-blur-xl">
          <nav className="flex flex-col space-y-3.5 text-base font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-item py-1.5 border-b border-ivory-200/80 hover:text-sage-600 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 opacity-40" />
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-2.5">
              {onOpenInquiry && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInquiry();
                  }}
                  className="w-full text-center py-3 bg-ivory-200 border border-ivory-300 text-forest-900 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-ivory-300 transition-colors"
                >
                  Direct Booking Inquiry
                </button>
              )}
              <a
                href="#stays"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block text-center py-3.5 bg-forest-900 text-white rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-forest-800 transition-colors shadow-md"
              >
                Explore All Stays →
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
