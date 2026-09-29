"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import PropertyGrounds from "@/components/PropertyGrounds";
import Accommodations from "@/components/Accommodations";
import GroupCallout from "@/components/GroupCallout";
import GardenFlora from "@/components/GardenFlora";
import ViewsSerenity from "@/components/ViewsSerenity";
import Hospitality from "@/components/Hospitality";
import Location from "@/components/Location";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import BookingInquiry from "@/components/BookingInquiry";
import { GALLERY_PHOTOS } from "@/data/homestayData";

export default function Home() {
  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageSrc, setCurrentImageSrc] = useState("");
  const [currentImageCaption, setCurrentImageCaption] = useState("");
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState<number | null>(null);

  // Inquiry Modal State
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryStay, setInquiryStay] = useState<string | undefined>(undefined);

  const handleOpenLightbox = (src: string, caption: string, photoId?: string) => {
    setCurrentImageSrc(src);
    setCurrentImageCaption(caption);

    if (photoId) {
      const idx = GALLERY_PHOTOS.findIndex((p) => p.id === photoId);
      setCurrentGalleryIndex(idx !== -1 ? idx : null);
    } else {
      const idx = GALLERY_PHOTOS.findIndex((p) => p.src === src);
      setCurrentGalleryIndex(idx !== -1 ? idx : null);
    }

    setLightboxOpen(true);
  };

  const handlePrevImage = () => {
    if (currentGalleryIndex !== null && currentGalleryIndex > 0) {
      const newIdx = currentGalleryIndex - 1;
      const prevPhoto = GALLERY_PHOTOS[newIdx];
      setCurrentGalleryIndex(newIdx);
      setCurrentImageSrc(prevPhoto.src);
      setCurrentImageCaption(prevPhoto.caption);
    }
  };

  const handleNextImage = () => {
    if (
      currentGalleryIndex !== null &&
      currentGalleryIndex < GALLERY_PHOTOS.length - 1
    ) {
      const newIdx = currentGalleryIndex + 1;
      const nextPhoto = GALLERY_PHOTOS[newIdx];
      setCurrentGalleryIndex(newIdx);
      setCurrentImageSrc(nextPhoto.src);
      setCurrentImageCaption(nextPhoto.caption);
    }
  };

  const handleOpenInquiry = (stayName?: string) => {
    setInquiryStay(stayName);
    setInquiryOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-ivory-100 text-forest-900 selection:bg-sage-500 selection:text-white">
      {/* Sticky Navigation Header */}
      <Header onOpenInquiry={() => handleOpenInquiry()} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Welcome Section */}
        <Welcome onImageClick={handleOpenLightbox} />

        {/* Property & Grounds */}
        <PropertyGrounds onImageClick={handleOpenLightbox} />

        {/* Accommodation Stays */}
        <Accommodations
          onImageClick={handleOpenLightbox}
          onOpenInquiry={handleOpenInquiry}
        />

        {/* Group Booking Callout */}
        <GroupCallout onOpenInquiry={handleOpenInquiry} />

        {/* Garden & Flora */}
        <GardenFlora onImageClick={handleOpenLightbox} />

        {/* Morning Views & Sunset Serenity */}
        <ViewsSerenity onImageClick={handleOpenLightbox} />

        {/* Hospitality & Hosts Chamari & Nilan */}
        <Hospitality />

        {/* Location & Kandy Exploration */}
        <Location />

        {/* Verified Reviews */}
        <Reviews />

        {/* Visual Journal & Filterable Gallery */}
        <Gallery onImageClick={handleOpenLightbox} />

        {/* Final Reservation CTA */}
        <FinalCTA onOpenInquiry={() => handleOpenInquiry()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fullscreen Photo Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        src={currentImageSrc}
        caption={currentImageCaption}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
        hasPrev={currentGalleryIndex !== null && currentGalleryIndex > 0}
        hasNext={
          currentGalleryIndex !== null &&
          currentGalleryIndex < GALLERY_PHOTOS.length - 1
        }
      />

      {/* Direct Booking & Inquiries Modal */}
      <BookingInquiry
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        initialStay={inquiryStay}
      />
    </div>
  );
}
