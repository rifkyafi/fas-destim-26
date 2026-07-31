import type { Lomba } from "@/data/lomba";
import { DAFTAR_LOMBA } from "@/data/lomba";
import SectionHeader from "./SectionHeader";

function renderKartuLomba(lomba: Lomba) {
  return (
    <article
      key={lomba.id}
      className="pixel-panel flex flex-col gap-4 bg-cream p-5 text-left sm:p-6"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="font-pixel text-xs leading-relaxed text-ink sm:text-sm">
          {lomba.nama}
        </h3>
        <span className="pixel-chip px-3 py-1 font-pixel text-[10px] text-ink">
          {lomba.kategoriUsia}
        </span>
      </div>

      <p className="text-lg leading-snug text-ink/80 sm:text-xl">{lomba.deskripsi}</p>

      <ul className="flex flex-col gap-2">
        {lomba.syarat.map((syarat) => (
          <li key={syarat} className="flex items-start gap-2 text-lg leading-snug text-ink/90 sm:text-xl">
            <span className="mt-2 h-2.5 w-2.5 shrink-0 bg-sun shadow-[2px_2px_0_0_var(--color-ink)]" />
            {syarat}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function LombaSection() {
  return (
    <section className="px-6 py-16">
      <SectionHeader
        nomor="LANGKAH 2"
        judul="Daftar Lomba"
        deskripsi="Pilih lomba yang paling disukai. Setiap lomba punya kategori usia dan syaratnya masing-masing."
      />

      <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
        {DAFTAR_LOMBA.map((lomba) => renderKartuLomba(lomba))}
      </div>
    </section>
  );
}
