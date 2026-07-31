import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";

// Font pixel untuk judul (Press Start 2P)
const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});

// Font retro untuk teks biasa (VT323), mudah dibaca
const retroFont = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

export const metadata: Metadata = {
  title: "Festival Anak Sholeh 2026",
  description:
    "Festival Anak Sholeh 2026: lomba hafalan, adzan, cerita islami, mewarnai, kaligrafi, dan cerdas cermat dengan tema pantai 8-bit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${pixelFont.variable} ${retroFont.variable} scroll-smooth`}
    >
      <body className="font-retro">{children}</body>
    </html>
  );
}
