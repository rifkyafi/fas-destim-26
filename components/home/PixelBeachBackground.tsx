import PixelSprite from "./PixelSprite";

type PixelCloudProps = {
  className: string;
  durasi: string;
  delay: string;
};

function PixelCloud({ className, durasi, delay }: PixelCloudProps) {
  return (
    <div
      className={`cloud-drift absolute ${className}`}
      style={{ animationDuration: durasi, animationDelay: delay }}
      aria-hidden="true"
    >
      <div className="relative h-7 w-24 border-4 border-ink bg-white">
        <div className="absolute -top-4 left-2 h-5 w-9 border-4 border-b-0 bg-white" />
        <div className="absolute -top-2 right-3 h-4 w-10 border-4 border-b-0 bg-white" />
      </div>
    </div>
  );
}

function PixelSun() {
  return (
    <div
      className="sun-glow absolute right-[10%] top-[8%] h-16 w-16 border-4 border-sun-dark bg-sun"
      aria-hidden="true"
    />
  );
}

/* =====================
   Pohon kelapa
   ===================== */

// Lebar batang dari pangkal (bawah) hingga pucuk (atas),
// makin ke atas makin mengecil seperti pohon sungguhan
const SEGMEN_BATANG = [
  "w-7",
  "w-7",
  "w-6",
  "w-6",
  "w-5",
  "w-5",
  "w-4",
  "w-4",
  "w-3",
  "w-3",
];

type PelepahData = {
  arahX: number;
  arahY: number;
  panjang: number;
};

// Setiap pelepah adalah tangga kotak-kotak yang menyebar dari pusat kanopi
const PELEPAH: PelepahData[] = [
  { arahX: -1, arahY: -1, panjang: 4 }, // kiri atas
  { arahX: -1, arahY: 0, panjang: 5 }, // kiri
  { arahX: -1, arahY: 1, panjang: 4 }, // kiri bawah
  { arahX: 0, arahY: 1, panjang: 5 }, // tengah bawah
  { arahX: 1, arahY: -1, panjang: 4 }, // kanan atas
  { arahX: 1, arahY: 0, panjang: 5 }, // kanan
  { arahX: 1, arahY: 1, panjang: 4 }, // kanan bawah
];

// Warna pelepah: hijau muda, hijau terang, dan hijau tua untuk ujung
const WARNA_PELEPAH = ["#43a047", "#8fd694", "#256d2a"];

// Titik pusat kanopi tempat semua pelepah bertemu (dalam piksel)
const PUSAT_DAUN = { x: 88, y: 30 };

// Jarak antar kotak pelepah (lebih rapat dari ukuran kotak agar tersambung)
const JARAK_ANTAR_KOTAK = 8;

function renderPelepah(pelepah: PelepahData, indeks: number) {
  const kotakPelepah = [];

  for (let langkah = 0; langkah < pelepah.panjang; langkah++) {
    const posisiX = PUSAT_DAUN.x + pelepah.arahX * langkah * JARAK_ANTAR_KOTAK;
    const posisiY = PUSAT_DAUN.y + pelepah.arahY * langkah * JARAK_ANTAR_KOTAK;

    // Kotak terakhir selalu hijau tua supaya ujung pelepah terlihat jelas
    const warnaKotak =
      langkah === pelepah.panjang - 1
        ? WARNA_PELEPAH[2]
        : WARNA_PELEPAH[langkah % 2];

    kotakPelepah.push(
      <div
        key={langkah}
        className="absolute h-2.5 w-2.5"
        style={{
          left: posisiX,
          top: posisiY,
          backgroundColor: warnaKotak,
        }}
      />
    );
  }

  return <div key={indeks} className="absolute inset-0">{kotakPelepah}</div>;
}

function Kanopi() {
  return (
    <div className="palm-sway relative h-40 w-44">
      {PELEPAH.map((pelepah, indeks) => renderPelepah(pelepah, indeks))}

      {/* Buah kelapa */}
      <div className="absolute left-[34px] top-[42px] h-2.5 w-2.5 border-2 border-ink bg-[#7a4a1f]" />
      <div className="absolute left-[44px] top-[46px] h-2.5 w-2.5 border-2 border-ink bg-[#8d5524]" />
      <div className="absolute left-[54px] top-[42px] h-2.5 w-2.5 border-2 border-ink bg-[#6d4119]" />
    </div>
  );
}

function Batang() {
  return (
    <div className="flex flex-col items-center">
      {SEGMEN_BATANG.map(function renderSegmen(lebar, indeks) {
        // Warna batang berselang-seling agar terlihat garis-garis khas 8-bit
        const warnaBatang = indeks % 2 === 0 ? "bg-trunk" : "bg-[#a5672b]";

        return (
          <div
            key={indeks}
            className={`h-2 border-x-2 border-b-2 border-ink ${lebar} ${warnaBatang}`}
          />
        );
      })}

      {/* Pangkal batang yang melebar */}
      <div className="h-1.5 w-8 border-x-2 border-b-2 border-ink bg-trunk" />
    </div>
  );
}

type PixelPalmTreeProps = {
  className: string;
  ukuran: "besar" | "sedang" | "kecil";
};

function PixelPalmTree({ className, ukuran }: PixelPalmTreeProps) {
  // Pohon kecil diberi warna lebih redup supaya terlihat jauh di cakrawala
  const kelasUkuran =
    ukuran === "besar"
      ? ""
      : ukuran === "sedang"
        ? "scale-75"
        : "scale-[0.45] opacity-80";

  return (
    <div className={`absolute ${kelasUkuran} ${className}`} aria-hidden="true">
      <div className="flex flex-col items-center">
        <Kanopi />
        <Batang />

        {/* Bayangan pohon di atas pasir */}
        <div className="h-1.5 w-16 bg-ink/25" />
        <div className="h-1 w-24 bg-ink/15" />
      </div>
    </div>
  );
}

/* =====================
   Gundukan dan ornamen pasir
   ===================== */

type GundukanPasirProps = {
  className: string;
};

function GundukanPasir({ className }: GundukanPasirProps) {
  return (
    <div className={`absolute ${className}`} aria-hidden="true">
      <div className="h-2 w-16 bg-[#f2cd72]" />
      <div className="h-2 w-24 bg-[#ecbf58]" />
      <div className="h-2 w-32 bg-[#e5b248]" />
      <div className="h-2 w-40 bg-[#dda63c]" />
    </div>
  );
}

// Bintang laut: X tebal dengan warna terang di ujung
const BINTANG_LAUT = [
  "ll...ll",
  "lo...ol",
  ".oo.oo.",
  "..owo..",
  ".oo.oo.",
  "lo...ol",
  "ll...ll",
];

const WARNA_BINTANG_LAUT = {
  o: "#ff8a50",
  l: "#ffb37a",
  w: "#fff3d6",
};

// Kerang: kipas putih dengan garis pink
const KERANG = [
  ".wwwww.",
  "wwppwww",
  "wwwwwww",
  "wwppwww",
  ".wwwww.",
];

const WARNA_KERANG = {
  w: "#fde8d7",
  p: "#f3a6bd",
};

// Bola pantai: garis-garis merah, putih, dan biru dengan bingkai gelap
const BOLA_PANTAI = [
  "kkkkkkkk",
  "kwrrwwbk",
  "kwrrwwbk",
  "kwrrwwbk",
  "kwrrwwbk",
  "kwrrwwbk",
  "kwrrwwbk",
  "kkkkkkkk",
];

const WARNA_BOLA_PANTAI = {
  k: "#16324a",
  r: "#e53935",
  w: "#ffffff",
  b: "#1e88e5",
};

type OrnamenPasirProps = {
  baris: string[];
  warna: Record<string, string>;
  className: string;
  ukuranPiksel?: number;
};

// Ornamen dibungkus dengan garis bayangan tipis agar terkesan
// setengah tertanam di pasir, bukan sekadar menempel
function OrnamenPasir({
  baris,
  warna,
  className,
  ukuranPiksel = 4,
}: OrnamenPasirProps) {
  return (
    <div className={`absolute ${className}`} aria-hidden="true">
      <PixelSprite baris={baris} warna={warna} ukuranPiksel={ukuranPiksel} />
      <div className="mt-1 h-1.5 bg-[#d3a848]/70" />
    </div>
  );
}

export default function PixelBeachBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden" aria-hidden="true">
      {/* Langit pantai */}
      <div className="absolute inset-x-0 top-0 h-[55%] bg-gradient-to-b from-sky to-sky-deep" />

      <PixelSun />

      <PixelCloud className="top-[12%] left-0" durasi="80s" delay="0s" />
      <PixelCloud className="top-[24%] left-0" durasi="100s" delay="-40s" />

      {/* Laut dengan garis ombak yang bergerak */}
      <div className="absolute inset-x-0 bottom-[16%] top-[55%] bg-gradient-to-b from-ocean to-ocean-deep">
        <div className="wave-band absolute inset-x-0 top-0 h-4" />
        <div className="wave-band-2 absolute inset-x-0 top-4 h-4" />
      </div>

      {/* Pohon kelapa: besar di kanan, sedang di kiri, kecil di cakrawala */}
      <PixelPalmTree
        className="right-[4%] bottom-[12%] hidden md:flex"
        ukuran="besar"
      />
      <PixelPalmTree
        className="left-[6%] bottom-[13%] hidden lg:flex"
        ukuran="sedang"
      />
      <PixelPalmTree
        className="left-[38%] bottom-[16%] hidden sm:flex"
        ukuran="kecil"
      />

      {/* Pasir pantai */}
      <div className="absolute inset-x-0 bottom-0 h-[16%] bg-gradient-to-b from-sand to-sand-dark">
        {/* Buih ombak di garis pertemuan laut dan pasir */}
        <div className="sand-foam absolute inset-x-0 top-0 h-2.5" />
        <div className="absolute inset-x-0 top-[10px] h-2 bg-sand-dark/60" />

        {/* Butiran pasir */}
        <div className="sand-dots absolute inset-0" />

        {/* Gundukan pasir di sisi kiri dan kanan */}
        <GundukanPasir className="bottom-0 left-0" />
        <GundukanPasir className="bottom-0 right-0" />

        {/* Ornamen pantai */}
        <OrnamenPasir
          className="bottom-[4%] left-[10%]"
          baris={BINTANG_LAUT}
          warna={WARNA_BINTANG_LAUT}
        />
        <OrnamenPasir
          className="bottom-[2%] left-[24%]"
          baris={KERANG}
          warna={WARNA_KERANG}
        />
        <OrnamenPasir
          className="bottom-[3%] right-[14%]"
          baris={BOLA_PANTAI}
          warna={WARNA_BOLA_PANTAI}
        />
        <OrnamenPasir
          className="bottom-[2%] right-[26%]"
          baris={KERANG}
          warna={WARNA_KERANG}
        />
      </div>
    </div>
  );
}
