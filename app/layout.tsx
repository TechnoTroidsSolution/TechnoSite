import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../Components/Navigation/Header";
import Footer from "../Components/Navigation/Footer";
import Breadcrumb from "../Components/Navigation/Breadcrumb";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true, // Preload for better performance
  adjustFontFallback: true, // Minimize layout shift
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false, // Don't preload mono font (used less frequently)
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Techamplers - Innovative Technology Solutions",
  description: "Transform your business with cutting-edge technology solutions. We specialize in web development, mobile apps, cloud solutions, and AI/ML services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Header />
        <Breadcrumb />
        <main className="min-h-screen bg-background">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
