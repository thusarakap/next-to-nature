import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Next to Nature | Boutique Nature Homestay in Kandy, Sri Lanka",
  description:
    "A peaceful boutique homestay nestled in the verdant hills of Kandy. Wake to mist through the canopy, organic fruit gardens, birdsong on the verandah, and heartfelt hospitality by Chamari & Nilan.",
  keywords: [
    "Next to Nature",
    "Kandy Homestay",
    "Sri Lanka Homestay",
    "Boutique Stays Kandy",
    "Nature Villa Kandy",
    "Chamari and Nilan",
    "Airbnb Superhost Kandy",
    "Ceylon Hill Country Stays",
  ],
  authors: [{ name: "Next to Nature Homestay" }],
  openGraph: {
    title: "Next to Nature | Boutique Nature Homestay in Kandy, Sri Lanka",
    description:
      "A peaceful boutique homestay nestled in the verdant hills of Kandy. Wake to mist through the canopy, mountain views, and authentic Sri Lankan warmth.",
    url: "https://nexttonaturekandy.com",
    siteName: "Next to Nature Homestay",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlh4iyzOKk-6QydlrduSQb2hSRM8xJRsgMWWg45yACiSAENtBxwN7WdbJQEkqZnvE_2xHQxkXGOIH_Y_8pSo2G2T-ouvDwY6LL07p-6zzRXlXPMs5p7lfB5hLIJ6D1238fVUSM_wU47yfOE0XS6ldCrd5Tt0TthNqKLtuAEbm5ZGfV7RvCEi_zjcQiM--0CRV7Euop1RjBqlB93AXck2tB6inq9C0ki9i8IAH4kxT_TV3TtbapNd2olLoUSSAVoYMW0w",
        width: 1200,
        height: 630,
        alt: "Next to Nature Homestay in Kandy, Sri Lanka",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next to Nature | Boutique Nature Homestay in Kandy",
    description:
      "A peaceful boutique homestay nestled in the verdant hills of Kandy. Wake to mist through the canopy and birdsong.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBlh4iyzOKk-6QydlrduSQb2hSRM8xJRsgMWWg45yACiSAENtBxwN7WdbJQEkqZnvE_2xHQxkXGOIH_Y_8pSo2G2T-ouvDwY6LL07p-6zzRXlXPMs5p7lfB5hLIJ6D1238fVUSM_wU47yfOE0XS6ldCrd5Tt0TthNqKLtuAEbm5ZGfV7RvCEi_zjcQiM--0CRV7Euop1RjBqlB93AXck2tB6inq9C0ki9i8IAH4kxT_TV3TtbapNd2olLoUSSAVoYMW0w",
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#1C281E",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${plusJakarta.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-ivory-100 text-forest-900 selection:bg-sage-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
