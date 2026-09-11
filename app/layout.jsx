import { Press_Start_2P, VT323 } from "next/font/google";
import Script from "next/script";
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

export const metadata = {
  title: "Festival Anak Sholeh 2026",
  description:
    "Festival Anak Sholeh 2026: lomba hafalan, adzan, cerita islami, mewarnai, kaligrafi, dan cerdas cermat dengan tema pantai 8-bit.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${pixelFont.variable} ${retroFont.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="font-retro"  cz-shortcut-listen="true">
        <Script id="fas-theme-init" strategy="beforeInteractive">
          {`(function () {
            try {
              var simpan = localStorage.getItem("fas-theme");
              var malam;
              if (simpan === "day" || simpan === "night") {
                malam = simpan === "night";
              } else {
                var jam = new Date().getHours();
                malam = !(jam >= 6 && jam < 18);
              }
              document.documentElement.classList.toggle("dark", malam);
            } catch (e) {}
          })();`}
        </Script>
        {children}
      </body>
    </html>
  );
}
