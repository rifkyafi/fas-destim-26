import Link from "next/link";

export default function PixelNavbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 px-4 py-4">
      <nav className="pixel-panel-sm mx-auto flex max-w-3xl items-center justify-between bg-cream px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="font-pixel text-[10px] text-ink sm:text-sm"
        >
          FAS 2026
        </Link>

        <div className="flex items-center gap-3 sm:gap-6">
          <Link href="/" className="text-lg text-ink hover:underline sm:text-xl">
            Beranda
          </Link>
          <Link
            href="/informasi"
            className="text-lg text-ink hover:underline sm:text-xl"
          >
            Informasi Lomba
          </Link>
        </div>
      </nav>
    </header>
  );
}
