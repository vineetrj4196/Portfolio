"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { navLinks, siteConfig } from "@/lib/site-data";
import { useLockBodyScroll } from "@/lib/use-lock-body-scroll";
import { useScrollSpy } from "@/lib/use-scroll-spy";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/social-icons";
import { ThemeToggle } from "./theme-toggle";

const HOME_SECTION_IDS = ["home", "about", "skills", "experience", "services"];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(pathname === "/" ? HOME_SECTION_IDS : []);

  useLockBodyScroll(isOpen);

  // Close the mobile drawer on navigation. Adjusted during render (React's
  // documented pattern for resetting state on prop change) rather than in an
  // effect, so it takes effect on the same commit as the route change.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setIsOpen(false);
  }

  useEffect(() => {
    let ticking = false;
    const update = () => {
      setIsScrolled(window.scrollY > 12);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function isActive(href) {
    if (href.startsWith("/#")) {
      return pathname === "/" && activeSection === href.slice(2);
    }
    return pathname === href;
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[700] flex h-17 items-center bg-white/80 backdrop-blur-lg transition-shadow dark:bg-[#0a0f1e]/75",
        isScrolled && "border-b border-slate-200 shadow-sm dark:border-slate-800"
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5">
        <Link href="/#home" className="flex items-center gap-2 text-base font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-brand text-white">V</span>
          {siteConfig.name}
        </Link>

        {/* Mobile overlay */}
        <div
          className={cn(
            "fixed inset-0 z-[719] bg-slate-900/55 transition-opacity lg:hidden",
            isOpen ? "opacity-100" : "pointer-events-none opacity-0"
          )}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />

        <nav
          id="nav-menu"
          aria-label="Primary"
          className={cn(
            "fixed inset-y-0 right-0 z-[720] w-[min(320px,82vw)] overflow-y-auto border-l border-slate-200 bg-white p-6 pt-24 shadow-2xl transition-transform duration-500 dark:border-slate-800 dark:bg-[#0f172a] lg:static lg:z-auto lg:w-auto lg:translate-x-0 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:transition-none lg:dark:bg-transparent",
            isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
          )}
        >
          <ul className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative block py-3 text-base font-medium text-slate-600 transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-brand after:transition-transform hover:text-slate-900 hover:after:scale-x-100 dark:text-slate-300 dark:hover:text-white lg:py-2 lg:text-sm",
                    isActive(link.href) && "text-primary after:scale-x-100 dark:text-primary"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex gap-3 border-t border-slate-200 pt-6 dark:border-slate-800 lg:hidden">
            <SocialIcon href={siteConfig.social.linkedin} label="LinkedIn">
              <LinkedinIcon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
            </SocialIcon>
            <SocialIcon href={siteConfig.social.github} label="GitHub">
              <GithubIcon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
            </SocialIcon>
            <SocialIcon href={siteConfig.social.instagram} label="Instagram">
              <InstagramIcon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
            </SocialIcon>
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="nav-menu"
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800 lg:hidden"
          >
            {isOpen ? <X className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" /> : <Menu className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (opens in new tab)`}
      className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:-translate-y-1 hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
    >
      {children}
    </a>
  );
}
