"use client";

import { useState } from "react";

type BeachCharacterProps = {
  jenis: "laki-laki" | "perempuan";
  durasiPerjalanan: string;
  delay: string;
  posisiBawah: string;
};

function KarakterLakiLaki() {
  return (
    <div className="character-body flex flex-col items-center">
      {/* Peci */}
      <div className="h-2 w-5 bg-ink" />

      {/* Kepala */}
      <div className="relative h-4 w-5 bg-skin">
        <div className="absolute left-0.5 top-1 h-1 w-1 bg-ink" />
        <div className="absolute right-0.5 top-1 h-1 w-1 bg-ink" />
      </div>

      {/* Baju koko dengan lengan yang berayun */}
      <div className="relative h-5 w-6 bg-white">
        <div className="absolute inset-x-0 top-0 h-1 bg-sky-deep" />
        <div className="absolute left-2 top-1 h-1.5 w-1 bg-sky-deep" />
        <div className="limb-left absolute -left-1.5 top-0.5 h-2.5 w-1.5 bg-white" />
        <div className="limb-right absolute -right-1.5 top-0.5 h-2.5 w-1.5 bg-white" />
      </div>

      {/* Kaki yang berayun bergantian */}
      <div className="flex gap-1.5">
        <div className="limb-left h-3 w-1.5 bg-ink" />
        <div className="limb-right h-3 w-1.5 bg-ink" />
      </div>
    </div>
  );
}

function KarakterPerempuan() {
  return (
    <div className="character-body flex flex-col items-center">
      {/* Hijab */}
      <div className="relative h-5 w-7 bg-hijab">
        <div className="absolute left-1 top-1 h-1 w-1 bg-ink" />
        <div className="absolute left-3 top-1 h-1 w-1 bg-ink" />
        <div className="absolute -inset-x-1 bottom-0 h-2 bg-hijab-dark" />
      </div>

      {/* Gaun panjang */}
      <div className="h-6 w-8 bg-hijab" />
      <div className="h-1.5 w-8 bg-hijab-dark" />

      {/* Sepatu kecil */}
      <div className="flex gap-2">
        <div className="limb-left h-1 w-1.5 bg-ink" />
        <div className="limb-right h-1 w-1.5 bg-ink" />
      </div>
    </div>
  );
}

export default function BeachCharacter({
  jenis,
  durasiPerjalanan,
  delay,
  posisiBawah,
}: BeachCharacterProps) {
  const [showHai, setShowHai] = useState(false);

  const handleClick = () => {
    setShowHai(true);
    setTimeout(() => {
      setShowHai(false);
    }, 3000);
  };

  return (
    <div
      className={`walker cursor-pointer pointer-events-auto ${showHai ? "is-paused" : ""}`}
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
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center z-50 pointer-events-none">
          <div className="bg-white border-2 border-ink px-2 py-1 text-[8px] sm:text-[10px] font-pixel text-ink">
            Hai!
          </div>
          <div className="h-2 w-2 bg-ink -mt-[2px] ml-1" />
        </div>
      )}
      <div className="walker-inner">
        {jenis === "laki-laki" ? <KarakterLakiLaki /> : <KarakterPerempuan />}
      </div>
    </div>
  );
}
