export type TahapanKegiatan = {
  nama: string;
  tanggal: string;
  deskripsi: string;
};

export const TIMELINE_KEGIATAN: TahapanKegiatan[] = [
  {
    nama: "Pendaftaran Dibuka",
    tanggal: "3 Agustus 2026",
    deskripsi:
      "Pendaftaran peserta lomba dibuka melalui formulir online yang dibagikan panitia.",
  },
  {
    nama: "Pendaftaran Ditutup",
    tanggal: "20 September 2026",
    deskripsi:
      "Tenggat terakhir pengisian formulir pendaftaran. Setelah tanggal ini, tidak ada tambahan peserta.",
  },
  {
    nama: "Technical Meeting",
    tanggal: "25 September 2026",
    deskripsi:
      "Penjelasan teknis lomba, pembagian nomor peserta, dan sesi tanya jawab untuk peserta dan orang tua.",
  },
  {
    nama: "Hari Pelaksanaan",
    tanggal: "27 September 2026",
    deskripsi:
      "Acara puncak: pembukaan, seluruh lomba dilaksanakan, hingga pengumuman pemenang.",
  },
];
