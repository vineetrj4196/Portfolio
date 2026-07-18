"use client";

import { useScrollProgress } from "@/lib/use-scroll-progress";

export function ScrollProgressBar() {
  const percent = useScrollProgress();

  return (
    <div
      role="progressbar"
      aria-label="Scroll progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(percent)}
      className="fixed left-0 top-0 z-[710] h-[3px] bg-gradient-brand transition-[width] duration-75"
      style={{ width: `${percent}%` }}
    />
  );
}
