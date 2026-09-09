import Link from "next/link";
import PixelBeachBackground from "@/components/home/PixelBeachBackground";
import PixelNavbar from "@/components/PixelNavbar";
import Footer from "@/components/Footer";
import TimelineSection from "@/components/informasi/TimelineSection";
import LombaSection from "@/components/informasi/LombaSection";
import SyaratSection from "@/components/informasi/SyaratSection";

export const metadata = {
  title: "Informasi Lomba | Festival Anak Sholeh 2026",
  description:
    "Timeline, daftar lomba, serta syarat dan ketentuan Festival Anak Sholeh 2026.",
};

export default function InformasiPage() {
  return (
    <>
      <PixelBeachBackground />
      <PixelNavbar />

      <main className="relative pb-16 pt-28">
        {/* Banner halaman */}
        <section className="px-6">
          <div className="pixel-panel mx-auto max-w-3xl bg-cream px-6 py-10 text-center">
            <p className="font-pixel text-[10px] text-sky-deep">
              SELAMAT DATANG DI PANTAI
            </p>
            <h1 className="mt-4 font-pixel text-xl leading-relaxed text-ink sm:text-3xl">
              Informasi Lomba
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-2xl leading-tight text-ink/80">
              Lengkap sudah panduannya: timeline kegiatan, daftar lomba,
              sampai syarat dan ketentuan. Baca baik-baik ya!
            </p>
            <Link
              href="/"
              className="pixel-btn mt-8 px-6 py-3 font-pixel text-[10px] sm:text-xs"
            >
              &lt; Kembali ke Beranda
            </Link>
          </div>
        </section>

        <TimelineSection />
        <LombaSection />
        <SyaratSection />
      </main>

      <Footer />
    </>
  );
}
