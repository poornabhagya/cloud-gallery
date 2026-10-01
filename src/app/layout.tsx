import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { GalleryProvider } from "@/context/GalleryContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import RSVPModal from "@/components/RSVPModal";
import VideoLightboxModal from "@/components/VideoLightboxModal";
import SearchDrawer from "@/components/SearchDrawer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CLOUD GALLERY | High-End Fine Art, Monoliths & Private Sales",
  description:
    "A premier luxury auction house & fine art gallery. Specializing in monumental stone sculpture, wood-fired porcelain, mineral paintings, and exclusive architectural commissions.",
  keywords: [
    "Sotheby's style art gallery",
    "Fine Art Auctions",
    "Monolithic stone sculpture",
    "Private art sales",
    "Contemporary masterworks",
    "Architectural art",
    "Zurich Kyoto Copenhagen art salon",
  ],
  openGraph: {
    title: "CLOUD GALLERY | Fine Art, Sculpture & Private Sales",
    description: "Curating rare masterworks, monolithic sculptures, and high-value architectural acquisitions.",
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
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-white text-black font-sans selection:bg-black selection:text-white"
      >
        <GalleryProvider>
          <Navbar />
          <main className="flex-1 w-full bg-white">{children}</main>
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
