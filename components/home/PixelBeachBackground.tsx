const BINTANG: { atas: string; kiri: string; delay: string; durasi: string }[] = [
  { atas: "6%", kiri: "12%", delay: "0s", durasi: "2.4s" },
  { atas: "14%", kiri: "30%", delay: "0.6s", durasi: "3.2s" },
  { atas: "4%", kiri: "45%", delay: "1.1s", durasi: "2.8s" },
  { atas: "10%", kiri: "58%", delay: "0.2s", durasi: "2.2s" },
  { atas: "18%", kiri: "74%", delay: "0.9s", durasi: "3.6s" },
  { atas: "5%", kiri: "86%", delay: "1.4s", durasi: "2.6s" },
  { atas: "26%", kiri: "8%", delay: "0.4s", durasi: "3s" },
  { atas: "30%", kiri: "38%", delay: "1.6s", durasi: "2.4s" },
  { atas: "24%", kiri: "66%", delay: "0.7s", durasi: "3.4s" },
  { atas: "12%", kiri: "20%", delay: "1.2s", durasi: "2s" },
  { atas: "20%", kiri: "52%", delay: "0.3s", durasi: "3.8s" },
  { atas: "8%", kiri: "70%", delay: "1.8s", durasi: "2.8s" },
];

export default function PixelBeachBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden bg-[#5dc1f9] dark:bg-[#0d1f45]" aria-hidden="true">
      {/* Bintang (hanya tampil malam) */}
      <div className="absolute inset-0 opacity-0 dark:opacity-100">
        {BINTANG.map((bintang, i) => (
          <div
            key={i}
            className="star-twinkle absolute h-1 w-1 bg-white"
            style={{
              top: bintang.atas,
              left: bintang.kiri,
              animationDelay: bintang.delay,
              animationDuration: bintang.durasi,
            }}
          />
        ))}
      </div>

      {/* Matahari terbit-tenggelam saat ganti mode */}
      <div className="sky-object sky-sun right-[10%] top-[10%]">
        <div className="sun-glow relative h-14 w-14 rounded-full bg-sun"></div>
      </div>

      {/* Bulan purnama terbit menggantikan matahari */}
      <div className="sky-object sky-moon right-[10%] top-[10%]">
        <div className="moon-glow relative h-14 w-14 rounded-full bg-[#f5f0d8]">
          <div className="absolute left-2 top-3 h-3 w-3 rounded-full bg-[#d8d2b0]" />
          <div className="absolute right-2 top-8 h-2 w-2 rounded-full bg-[#d8d2b0]" />
          <div className="absolute left-4 top-10 h-2 w-2 rounded-full bg-[#d8d2b0]" />
        </div>
      </div>

      {/* Clouds */}
      <Cloud top="15%" scale="scale-150" durasi="80s" delay="0s" />
      <Cloud top="30%" scale="scale-125" durasi="110s" delay="-40s" />

      {/* Ocean */}
      <div className="absolute inset-x-0 top-[62%] bottom-[22%] bg-[#22a2eb] dark:bg-[#0a2a5e]">
        <div className="absolute top-0 inset-x-0 h-1 bg-[#4bc0f8] dark:bg-[#1e5ba8]" />
        <div className="absolute top-1 inset-x-0 h-1 bg-[#37b1f3] dark:bg-[#164a8f]" />
        
        {/* Waves */}
        <div className="absolute top-[20%] left-[10%] h-1 w-16 bg-[#4bc0f8] dark:bg-[#2a6fb8]" />
        <div className="absolute top-[40%] left-[30%] h-1 w-24 bg-[#4bc0f8] dark:bg-[#2a6fb8]" />
        <div className="absolute top-[60%] left-[60%] h-1 w-12 bg-[#4bc0f8] dark:bg-[#2a6fb8]" />
        <div className="absolute top-[80%] left-[20%] h-1 w-32 bg-[#4bc0f8] dark:bg-[#2a6fb8]" />
        {/* Ships */}
        <PixelShip top="-4%" scale="scale-50 opacity-70" durasi="120s" delay="-20s" direction="left" />
        <PixelShip top="4%" scale="scale-75 opacity-90" durasi="95s" delay="-50s" direction="right" />
        <PixelShip top="15%" scale="scale-90" durasi="80s" delay="-10s" direction="left" />
      </div>

      {/* Sand */}
      <div className="absolute inset-x-0 bottom-0 h-[22%] bg-[#f5d5a2] dark:bg-[#2e2a44]">
        <div className="absolute top-0 inset-x-0 h-1 bg-[#ebd0a3] dark:bg-[#3a3556]" />
        
        {/* Pixel Dunes (with dark edge) */}
        <div className="absolute top-[-4px] left-[2%] h-[4px] w-[20%] bg-[#ebd0a3] dark:bg-[#3a3556]" />
        <div className="absolute top-[-2px] left-[2%] h-[4px] w-[20%] bg-[#f5d5a2] dark:bg-[#2e2a44]" />
        <div className="absolute top-[-8px] left-[6%] h-[8px] w-[12%] bg-[#ebd0a3] dark:bg-[#3a3556]" />
        <div className="absolute top-[-6px] left-[6%] h-[8px] w-[12%] bg-[#f5d5a2] dark:bg-[#2e2a44]" />
        
        <div className="absolute top-[-6px] right-[5%] h-[6px] w-[25%] bg-[#ebd0a3] dark:bg-[#3a3556]" />
        <div className="absolute top-[-4px] right-[5%] h-[6px] w-[25%] bg-[#f5d5a2] dark:bg-[#2e2a44]" />
        <div className="absolute top-[-12px] right-[10%] h-[12px] w-[15%] bg-[#ebd0a3] dark:bg-[#3a3556]" />
        <div className="absolute top-[-10px] right-[10%] h-[12px] w-[15%] bg-[#f5d5a2] dark:bg-[#2e2a44]" />
        
        {/* Wave Foam */}
        <div className="absolute top-[-2px] inset-x-0 h-[2px] bg-white opacity-60 dark:bg-[#8a86a8] dark:opacity-40" />
        <div className="absolute top-[-6px] left-[25%] h-[2px] w-8 bg-white opacity-60 dark:bg-[#8a86a8] dark:opacity-40" />
        <div className="absolute top-[-4px] right-[35%] h-[2px] w-12 bg-white opacity-60 dark:bg-[#8a86a8] dark:opacity-40" />
        
        {/* Sand dots */}
        <div className="absolute top-[20%] left-[15%] h-1 w-1 bg-[#e0b87c] dark:bg-[#4a4368]" />
        <div className="absolute top-[50%] left-[5%] h-1 w-1 bg-[#e0b87c] dark:bg-[#4a4368]" />
        <div className="absolute top-[30%] left-[45%] h-1 w-1 bg-[#e0b87c] dark:bg-[#4a4368]" />
        <div className="absolute top-[60%] left-[35%] h-1 w-1 bg-[#e0b87c] dark:bg-[#4a4368]" />
        <div className="absolute top-[40%] left-[75%] h-1 w-1 bg-[#e0b87c] dark:bg-[#4a4368]" />
        <div className="absolute top-[70%] left-[85%] h-1 w-1 bg-[#e0b87c] dark:bg-[#4a4368]" />
      </div>

      {/* Palm Trees */}
      <PixelPalmTree className="bottom-[22%] left-[2%] scale-[1.55]" lean="right" />
      <PixelPalmTree className="bottom-[22%] left-[18%] scale-[1.3]" lean="straight" />
      <PixelPalmTree className="bottom-[22%] left-[10%] scale-[1.0]" lean="straight" />
      
      <PixelPalmTree className="bottom-[22%] right-[5%] scale-[1.45]" lean="left" />
    </div>
  );
}

function Cloud({ top, scale, durasi, delay }: { top: string, scale: string, durasi: string, delay: string }) {
  return (
    <div 
      className="absolute inset-x-0 cloud-drift opacity-90"
      style={{ top, animationDuration: durasi, animationDelay: delay }}
    >
      <div className={`relative ${scale}`}>
        <div className="absolute bottom-0 left-0 h-4 w-24 bg-white dark:bg-[#46527a]" />
        <div className="absolute bottom-4 left-2 h-4 w-20 bg-white dark:bg-[#46527a]" />
        <div className="absolute bottom-8 left-6 h-4 w-12 bg-white dark:bg-[#46527a]" />
        <div className="absolute bottom-12 left-8 h-4 w-8 bg-white dark:bg-[#46527a]" />
      </div>
    </div>
  );
}

function PixelShip({ top, scale = "scale-100", durasi, delay, direction = "left" }: { top: string, scale?: string, durasi: string, delay: string, direction?: "left" | "right" }) {
  const isRight = direction === "right";
  const sailClass = isRight ? "ship-sail-reverse" : "ship-sail";

  return (
    <div 
      className={`absolute inset-x-0 ${sailClass}`} 
      style={{ top, animationDuration: durasi, animationDelay: delay }}
    >
      <div className={`relative ship-bob w-32 h-24 origin-bottom ${scale}`}>
        <div className={`absolute inset-0 ${isRight ? '-scale-x-100' : ''}`}>
          {/* Tiang */}
          <div className="absolute bottom-4 left-12 h-16 w-[4px] bg-[#4a2f1d] dark:bg-[#241409]" />
          
          {/* Layar Kiri */}
          <div className="absolute bottom-6 left-6 h-2 w-6 bg-white dark:bg-[#9aa3bd]" />
          <div className="absolute bottom-8 left-8 h-2 w-4 bg-white dark:bg-[#9aa3bd]" />
          <div className="absolute bottom-10 left-10 h-2 w-2 bg-white dark:bg-[#9aa3bd]" />
          <div className="absolute bottom-12 left-10 h-6 w-2 bg-white dark:bg-[#9aa3bd]" />

          {/* Layar Kanan */}
          <div className="absolute bottom-6 left-14 h-10 w-8 bg-white dark:bg-[#9aa3bd]" />
          <div className="absolute bottom-8 left-14 h-8 w-10 bg-white dark:bg-[#9aa3bd]" />
          <div className="absolute bottom-12 left-14 h-4 w-6 bg-white dark:bg-[#9aa3bd]" />
          <div className="absolute bottom-16 left-14 h-2 w-4 bg-white dark:bg-[#9aa3bd]" />

          {/* Badan Kapal */}
          <div className="absolute bottom-0 left-0 h-[8px] w-28 bg-[#8d5524] dark:bg-[#3d2612]" />
          <div className="absolute bottom-[8px] left-2 h-[8px] w-24 bg-[#a66a33] dark:bg-[#4c3018]" />
        </div>
      </div>
    </div>
  );
}

type Pt = readonly [number, number];

const q = (n: number) => Math.round(n / 2) * 2;

const APEX_Y = 44;

const TRUNK_EDGES: Record<'straight' | 'right', { left: Pt[]; right: Pt[] }> = {
  straight: {
    left: [[64, 180], [64, 130], [66, 80], [66, APEX_Y]],
    right: [[76, 180], [76, 130], [74, 80], [74, APEX_Y]],
  },
  right: {
    left: [[64, 180], [74, 130], [82, 80], [88, APEX_Y]],
    right: [[76, 180], [84, 130], [90, 80], [96, APEX_Y]],
  },
};

const FRONDS_STRAIGHT: [number, number, number][] = [
  [-160, 56, 30],
  [-138, 60, 56],
  [-112, 54, 66],
  [-90, 40, 34],
  [-68, 54, 64],
  [-42, 60, 54],
  [-20, 52, 26],
];

const FRONDS_RIGHT: [number, number, number][] = [
  [-160, 56, 30],
  [-138, 60, 56],
  [-112, 54, 66],
  [-90, 40, 34],
  [-68, 54, 64],
  [-42, 60, 54],
  [-20, 52, 26],
  [2, 46, 22],
];

function cubicPoint(p0: Pt, c1: Pt, c2: Pt, p1: Pt, t: number): Pt {
  const u = 1 - t;
  return [
    q(u * u * u * p0[0] + 3 * u * u * t * c1[0] + 3 * u * t * t * c2[0] + t * t * t * p1[0]),
    q(u * u * u * p0[1] + 3 * u * u * t * c1[1] + 3 * u * t * t * c2[1] + t * t * t * p1[1]),
  ];
}

function frondParts(crown: Pt, angleDeg: number, len: number, droop: number, wBase: number) {
  const rad = (angleDeg * Math.PI) / 180;
  const dir: Pt = [Math.cos(rad), Math.sin(rad)];
  let perp: Pt = [-dir[1], dir[0]];
  if (perp[1] < 0) perp = [-perp[0], -perp[1]];

  const tip: Pt = [q(crown[0] + dir[0] * len), q(crown[1] + dir[1] * len + droop)];
  const c1: Pt = [q(crown[0] + (dir[0] * len) / 3), q(crown[1] + (dir[1] * len) / 3 + droop / 9)];
  const c2: Pt = [q(crown[0] + (dir[0] * len * 2) / 3), q(crown[1] + (dir[1] * len * 2) / 3 + (droop * 4) / 9)];
  const w = (t: number) => wBase * (1 - 0.85 * t);

  const o1L: Pt = [q(c1[0] + perp[0] * w(1 / 3) * 1.1), q(c1[1] + perp[1] * w(1 / 3) * 1.1)];
  const o2L: Pt = [q(c2[0] + perp[0] * w(2 / 3) * 1.1), q(c2[1] + perp[1] * w(2 / 3) * 1.1)];
  const o1U: Pt = [q(c1[0] - perp[0] * w(1 / 3) * 0.9), q(c1[1] - perp[1] * w(1 / 3) * 0.9)];
  const o2U: Pt = [q(c2[0] - perp[0] * w(2 / 3) * 0.9), q(c2[1] - perp[1] * w(2 / 3) * 0.9)];

  const blade = `M ${crown[0]} ${crown[1]} C ${o1L[0]} ${o1L[1]} ${o2L[0]} ${o2L[1]} ${tip[0]} ${tip[1]} C ${o2U[0]} ${o2U[1]} ${o1U[0]} ${o1U[1]} ${crown[0]} ${crown[1]} Z`;
  const spine = `M ${crown[0]} ${crown[1]} C ${c1[0]} ${c1[1]} ${c2[0]} ${c2[1]} ${tip[0]} ${tip[1]}`;

  const leaflets: string[] = [];
  for (const t of [0.5, 0.67, 0.84, 0.97]) {
    const p = cubicPoint(crown, c1, c2, tip, t);
    const wt = w(t);
    const base: Pt = [q(p[0] + perp[0] * wt), q(p[1] + perp[1] * wt)];
    const llen = 8 * (1.4 - t);
    const ld: Pt = [perp[0] * 0.7 + dir[0] * 0.55, perp[1] * 0.7 + dir[1] * 0.55 + 0.35];
    const ll = Math.hypot(ld[0], ld[1]);
    leaflets.push(
      `M ${base[0]} ${base[1]} L ${q(base[0] + (ld[0] / ll) * llen)} ${q(base[1] + (ld[1] / ll) * llen)}`
    );
  }

  return { blade, spine, leaflets, tip };
}

function PixelPalmTree({ className, lean }: { className: string; lean: 'left' | 'right' | 'straight' }) {
  const key = lean === 'straight' ? 'straight' : 'right';
  const apexX = key === 'straight' ? 70 : 92;
  const crown: Pt = [apexX, APEX_Y + 2];
  const edges = TRUNK_EDGES[key];
  const { left, right } = edges;
  const fronds = key === 'straight' ? FRONDS_STRAIGHT : FRONDS_RIGHT;

  const trunkPath = `M ${left[0][0]} ${left[0][1]} C ${left[1][0]} ${left[1][1]} ${left[2][0]} ${left[2][1]} ${left[3][0]} ${left[3][1]} C ${right[2][0]} ${right[2][1]} ${right[1][0]} ${right[1][1]} ${right[0][0]} ${right[0][1]} Z`;

  const rings: string[] = [];
  for (let t = 0.08; t <= 0.85; t += 0.11) {
    const L = cubicPoint(left[0], left[1], left[2], left[3], t);
    const R = cubicPoint(right[0], right[1], right[2], right[3], t);
    const m = [q((L[0] + R[0]) / 2), q((L[1] + R[1]) / 2)];
    rings.push(`M ${L[0]} ${L[1]} Q ${m[0]} ${m[1] + 4} ${R[0]} ${R[1]}`);
  }

  const prepared = fronds.map(([a, l, d], i) => ({
    ...frondParts(crown, a, l, d, (8 * l) / 60),
    id: `palm-${key}-${i}`,
    isUp: a >= -100 && a <= -80,
  }));

  return (
    <div className={`absolute ${className} palm-sway dark:brightness-[0.45] dark:saturate-[0.55]`}>
      <div className={lean === 'left' ? '-scale-x-100' : undefined}>
        <svg width={150} height={180} viewBox="0 0 150 180" fill="none" shapeRendering="crispEdges">
          <defs>
            <linearGradient id={`trunk-${key}`} gradientUnits="userSpaceOnUse" x1={50} y1={0} x2={105} y2={0}>
              <stop offset="0" stopColor="#7c4a26" />
              <stop offset="0.3" stopColor="#a67c52" />
              <stop offset="0.65" stopColor="#c9a06e" />
              <stop offset="1" stopColor="#ddb98b" />
            </linearGradient>
            {prepared.map((f) => (
              <linearGradient
                key={f.id}
                id={f.id}
                gradientUnits="userSpaceOnUse"
                x1={crown[0]}
                y1={crown[1]}
                x2={f.tip[0]}
                y2={f.tip[1]}
              >
                <stop offset="0" stopColor={f.isUp ? "#7ad35f" : "#63c457"} />
                <stop offset="0.45" stopColor="#459e3d" />
                <stop offset="1" stopColor="#2e7d32" />
              </linearGradient>
            ))}
          </defs>

          <path d={trunkPath} fill={`url(#trunk-${key})`} />
          {rings.map((d, i) => (
            <path key={i} d={d} stroke="#7a4a2b" strokeWidth={2} opacity={0.5} fill="none" />
          ))}

          {/* Base sand mound to embed the tree */}
          <ellipse className="dark:opacity-0" cx={70} cy={178} rx={22} ry={6} fill="#ebd0a3" />
          <ellipse className="dark:opacity-0" cx={70} cy={176} rx={16} ry={4} fill="#f5d5a2" />

          <ellipse cx={crown[0]} cy={crown[1] + 8} rx={30} ry={14} fill="#1f5e21" opacity={0.25} />

          <ellipse cx={crown[0] - 6} cy={crown[1] + 8} rx={4} ry={4} fill="#6b4423" stroke="#4c2f15" strokeWidth={1} />
          <ellipse cx={crown[0] + 4} cy={crown[1] + 10} rx={4} ry={4} fill="#6b4423" stroke="#4c2f15" strokeWidth={1} />
          <ellipse cx={crown[0] + 2} cy={crown[1] + 6} rx={4} ry={4} fill="#5c3a1e" />
          <ellipse cx={crown[0] - 6} cy={crown[1] + 8} rx={2} ry={2} fill="#8a6238" />

          {prepared.map((f) => (
            <g key={f.id}>
              <path d={f.blade} fill={`url(#${f.id})`} />
              <path d={f.spine} stroke="#256129" strokeWidth={2} strokeLinecap="square" opacity={0.6} />
              {!f.isUp &&
                f.leaflets.map((d, j) => (
                  <path key={j} d={d} stroke="#2b6b2c" strokeWidth={2} strokeLinecap="square" />
                ))}
            </g>
          ))}

          <path d={`M ${crown[0]} ${crown[1] + 2} Q ${crown[0] - 12} ${crown[1] - 20} ${crown[0] - 8} ${crown[1] - 34}`} stroke="#7ed957" strokeWidth={6} strokeLinecap="square" />
          <path d={`M ${crown[0]} ${crown[1] + 2} Q ${crown[0]} ${crown[1] - 26} ${crown[0]} ${crown[1] - 40}`} stroke="#7ed957" strokeWidth={6} strokeLinecap="square" />
          <path d={`M ${crown[0]} ${crown[1] + 2} Q ${crown[0] + 12} ${crown[1] - 20} ${crown[0] + 8} ${crown[1] - 34}`} stroke="#7ed957" strokeWidth={6} strokeLinecap="square" />
        </svg>
      </div>
    </div>
  );
}
