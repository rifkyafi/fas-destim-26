import { TIMELINE_KEGIATAN } from "@/data/timeline";
import SectionHeader from "./SectionHeader";

function renderTahapan(tahapan) {
  return (
    <li key={tahapan.nama} className="relative pl-10 sm:pl-14">
      <div className="absolute left-[14px] top-2 h-4 w-4 bg-sun shadow-[3px_3px_0_0_var(--color-ink)] sm:left-[18px]" />

      <div className="pixel-panel-sm bg-cream px-4 py-5 text-left sm:px-6">
        <span className="pixel-chip inline-block px-3 py-1 font-pixel text-[10px] text-ink">
          {tahapan.tanggal}
        </span>
        <h3 className="mt-3 font-pixel text-xs text-ink sm:text-sm">
          {tahapan.nama}
        </h3>
        <p className="mt-2 text-lg leading-snug text-ink/80 sm:text-xl">
          {tahapan.deskripsi}
        </p>
      </div>
    </li>
  );
}

export default function TimelineSection() {
  return (
    <section className="px-6 py-16">
      <SectionHeader
        nomor="LANGKAH 1"
        judul="Timeline Lomba"
        deskripsi="Ikuti jadwal berikut agar tidak ketinggalan momen penting, mulai dari pendaftaran hingga hari pelaksanaan."
      />

      <ol className="relative mx-auto flex max-w-2xl flex-col gap-8 border-l-4 border-ink pl-6 sm:gap-10">
        {TIMELINE_KEGIATAN.map((tahapan) => renderTahapan(tahapan))}
      </ol>
    </section>
  );
}
