"use client";

const MONTHS_ES = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
];

function getSlotMonths() {
  const now = new Date();
  const current = MONTHS_ES[now.getMonth()];
  const nextIndex = (now.getMonth() + 1) % 12;
  const next = MONTHS_ES[nextIndex];
  return { current, next };
}

interface SlotsBadgeProps {
  size?: "sm" | "md";
}

export default function SlotsBadge({ size = "md" }: SlotsBadgeProps) {
  const { current, next } = getSlotMonths();

  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <div
      className={`inline-flex items-center gap-2.5 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-sm ${
        size === "sm"
          ? "px-3 py-1 text-xs"
          : "px-4 py-1.5 text-sm"
      }`}
    >
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
      </span>
      <span className="text-amber-300 font-medium">
        Slots abiertos para{" "}
        <span className="text-amber-200 font-semibold">
          {capitalize(current)} y {capitalize(next)}
        </span>
      </span>
    </div>
  );
}
