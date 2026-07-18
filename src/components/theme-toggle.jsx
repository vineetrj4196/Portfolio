"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      aria-pressed={theme === "dark"}
      className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full border border-slate-200 bg-slate-100 text-slate-700 transition hover:rotate-12 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
    >
      {theme === "dark" ? <Moon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" /> : <Sun className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />}
    </button>
  );
}
