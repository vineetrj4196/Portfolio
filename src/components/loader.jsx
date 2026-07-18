"use client";

import { useEffect, useState } from "react";

export function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const hide = () => setHidden(true);
    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide);
    }
    // Safety net so a slow-loading resource never traps the user.
    const timer = setTimeout(hide, 3500);
    return () => {
      window.removeEventListener("load", hide);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[10000] grid place-items-center bg-slate-50 transition-opacity duration-500 dark:bg-[#0a0f1e] ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="grid place-items-center gap-4">
        <div className="h-14 w-14 animate-spin-slow rounded-full border-[3.5px] border-slate-200 border-t-primary dark:border-slate-700" />
        <span className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Loading</span>
      </div>
    </div>
  );
}
