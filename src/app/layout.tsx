import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { GalleryProvider } from "@/context/GalleryContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import RSVPModal from "@/components/RSVPModal";
import VideoLightboxModal from "@/components/VideoLightboxModal";
import SearchDrawer from "@/components/SearchDrawer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CLOUD GALLERY | Architectural Art & Creative Studio Portfolio",
  description:
    "An ultra-minimalist, high-end architectural art gallery and creative studio portfolio. Spatial design, monolithic sculpture, raw materiality, and tactile luxury.",
  keywords: [
    "Architectural Gallery",
    "Monolith Sculpture",
    "Norm Architects aesthetic",
    "Hauser & Wirth",
    "Travertine Furniture",
    "Ceramic vessels",
    "Contemporary art portfolio",
  ],
  openGraph: {
    title: "CLOUD GALLERY | Architectural Art & Creative Studio",
    description: "Where spatial design, raw materiality, and contemporary form converge.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${inter.variable} antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-[#F4F0EA] text-[#2B2A27] font-sans selection:bg-[#8C6D53] selection:text-[#F4F0EA]"
      >
        <GalleryProvider>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
          <EnquiryModal />
          <RSVPModal />
          <VideoLightboxModal />
          <SearchDrawer />
        </GalleryProvider>
      </body>
    </html>
  );
}
