"use client";

import { useState } from "react";

type BeachCharacterProps = {
  jenis: "laki-laki" | "perempuan";
  durasiPerjalanan: string;
  delay: string;
  posisiBawah: string;
  variant?: 1 | 2 | 3;
};

const pixelSize = 5;

const boyColorsBase: Record<string, string> = {
  k: "#16324a", // peci/shoes
  s: "#d49a5b", // skin
  e: "#000000", // eye
};

const girlColorsBase: Record<string, string> = {
  s: "#d49a5b", // skin
  k: "#16324a", // shoes
  e: "#000000", // eye
};

const generateShadow = (grid: string[], colors: Record<string, string>) => {
  const shadows: string[] = [];
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      const char = grid[y][x];
      if (char !== " " && colors[char]) {
        shadows.push(`${x * pixelSize}px ${y * pixelSize}px 0 0.5px ${colors[char]}`);
      }
    }
  }
  return shadows.join(", ");
};

const boyGridStand = [
  "    kkkk    ",
  "   kkkkkk   ",
  "   ssses    ",
  "  ssssss    ",
  "   ssss     ",
  "   wwww     ",
  "  swwwws    ",
  "   wwww     ",
  "   bbbb     ",
  "   b  b     ",
  "  kk  kk    ",
];

const boyGridWalk1 = [
  "    kkkk    ",
  "   kkkkkk   ",
  "   ssses    ",
  "  ssssss    ",
  "   ssss     ",
  "   wwww     ",
  " swwwww     ",
  "   wwww     ",
  "   bbbb     ",
  "  bb  b     ",
  " kk    kk   ",
];

const boyGridWalk2 = [
  "    kkkk    ",
  "   kkkkkk   ",
  "   ssses    ",
  "  ssssss    ",
  "   ssss     ",
  "   wwww     ",
  "   wwwwws   ",
  "   wwww     ",
  "   bbbb     ",
  "    bbb     ",
  "     kk     ",
];

const girlGridStand = [
  "    hhhh    ",
  "   hhhhhh   ",
  "   hhhes    ",
  "  hhhhss    ",
  "   hhhhh    ",
  "   hhhhh    ",
  "  shhhhs    ",
  "   dddd     ",
  "   dddd     ",
  "  d    d    ",
  "  k    k    ",
];

const girlGridWalk1 = [
  "    hhhh    ",
  "   hhhhhh   ",
  "   hhhes    ",
  "  hhhhss    ",
  "   hhhhh    ",
  "   hhhhh    ",
  " shhhhh     ",
  "   dddd     ",
  "  dd  d     ",
  "  k    k    ",
];

const girlGridWalk2 = [
  "    hhhh    ",
  "   hhhhhh   ",
  "   hhhes    ",
  "  hhhhss    ",
  "   hhhhh    ",
  "   hhhhh    ",
  "   hhhhhs   ",
  "   dddd     ",
  "    ddd     ",
  "     k      ",
];

export default function BeachCharacter({
  jenis,
  durasiPerjalanan,
  delay,
  posisiBawah,
  variant = 1,
}: BeachCharacterProps) {
  const [showHai, setShowHai] = useState(false);

  const handleClick = () => {
    setShowHai(true);
    setTimeout(() => {
      setShowHai(false);
    }, 3000);
  };

  const isBoy = jenis === "laki-laki";

  // Pilih warna baju/bawahan berdasarkan variant
  const colors = isBoy
    ? variant === 2
      ? { ...boyColorsBase, w: "#4caf50", b: "#8d5524" } // Hijau, coklat
      : variant === 3
      ? { ...boyColorsBase, w: "#ffd54f", b: "#16324a" } // Kuning, gelap
      : { ...boyColorsBase, w: "#ffffff", b: "#1b7fd4" } // Putih, biru (default)
    : variant === 2
    ? { ...girlColorsBase, h: "#9c27b0", d: "#6a1b9a" } // Ungu
    : variant === 3
    ? { ...girlColorsBase, h: "#29b6f6", d: "#0277bd" } // Biru muda
    : { ...girlColorsBase, h: "#d81b60", d: "#9d1146" }; // Pink (default)

  const f1 = generateShadow(isBoy ? boyGridWalk1 : girlGridWalk1, colors);
  const fStand = generateShadow(isBoy ? boyGridStand : girlGridStand, colors);
  const f2 = generateShadow(isBoy ? boyGridWalk2 : girlGridWalk2, colors);

  const animationName = `mario-walk-${jenis}-${variant}`;

  return (
    <>
      <style>{`
        @keyframes ${animationName} {
          0%, 100% { box-shadow: ${f1}; }
          25%, 75% { box-shadow: ${fStand}; }
          50% { box-shadow: ${f2}; }
        }
        .mario-sprite-${jenis}-${variant} {
          width: ${pixelSize}px;
          height: ${pixelSize}px;
          background: transparent;
        }
      `}</style>
      <div
        className={`walker cursor-pointer pointer-events-auto ${
          showHai ? "is-paused" : ""
        }`}
        onClick={handleClick}
        style={
          {
            bottom: posisiBawah,
            "--durasi-perjalanan": durasiPerjalanan,
            "--delay-perjalanan": delay,
          } as React.CSSProperties
        }
        aria-hidden="true"
      >
        {showHai && (
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 flex flex-col items-center z-50 pointer-events-none">
            <div className="bg-white border-2 border-ink px-2 py-1 text-[8px] sm:text-[10px] font-pixel text-ink">
              Hai!
            </div>
            <div className="h-2 w-2 bg-ink -mt-[2px] ml-1" />
          </div>
        )}
        <div className="walker-inner w-[60px] h-[60px] relative">
          <div
            className={`mario-sprite-${jenis}-${variant} absolute left-0 top-0`}
            style={{ animation: `${animationName} 1s steps(1, end) infinite` }}
          />
        </div>
      </div>
    </>
  );
}
