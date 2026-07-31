import Link from "next/link";
import PixelBeachBackground from "@/components/home/PixelBeachBackground";
import BeachCharacter from "@/components/home/BeachCharacter";
import CountdownTimer from "@/components/home/CountdownTimer";
import PixelNavbar from "@/components/PixelNavbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <PixelBeachBackground />
      <PixelNavbar />

      <main className="relative flex min-h-screen flex-col items-center justify-center px-6 pb-40 pt-24 text-center">
        <p className="fade-up font-pixel text-[10px] text-sky-deep sm:text-xs">
          FESTIVAL ANAK SHOLEH 2026
        </p>

        <h1 className="fade-up mt-6 font-pixel text-base leading-relaxed text-orange-400 pixel-text sm:text-3xl lg:text-5xl">
          Assalaamualaikum
        </h1>

        <p className="fade-up mt-6 max-w-xl text-2xl leading-tight text-ink">
          Selamat datang di pantai seru kami! Ayo ikut lomba-lomba
          seru dan tunjukkan bakatmu, Adik-Adik Sholeh dan Sholehah.
        </p>

        <div className="fade-up mt-10">
          <p className="mb-4 font-pixel text-[10px] text-sun pixel-text-sm">
            HARI H: 27 SEPTEMBER 2026
          </p>
          <CountdownTimer />
        </div>

        <Link
          href="/informasi"
          className="pixel-btn mt-12 px-8 py-4 font-pixel text-xs sm:text-sm"
        >
          Lihat Detail Lomba
        </Link>
      </main>

      {/* Karakter 8-bit yang berjalan mondar-mandir di pantai */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-10 h-48">
        {/* Paling belakang */}
        <BeachCharacter
          jenis="laki-laki"
          durasiPerjalanan="40s"
          delay="-25s"
          posisiBawah="14%"
          variant={1}
        />
        <BeachCharacter
          jenis="perempuan"
          durasiPerjalanan="28s"
          delay="-18s"
          posisiBawah="11%"
          variant={1}
        />
        <BeachCharacter
          jenis="perempuan"
          durasiPerjalanan="34s"
          delay="-12s"
          posisiBawah="8%"
          variant={2}
        />
        <BeachCharacter
          jenis="laki-laki"
          durasiPerjalanan="18s"
          delay="-5s"
          posisiBawah="5%"
          variant={2}
        />
        {/* Paling depan */}
        <BeachCharacter
          jenis="laki-laki"
          durasiPerjalanan="26s"
          delay="0s"
          posisiBawah="2%"
          variant={3}
        />
      </div>

      <Footer />
    </>
  );
}
