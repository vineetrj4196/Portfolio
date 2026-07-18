"use client";

import Image from "next/image";
import Link from "next/link";
import { CodeXml } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/social-icons";
import { siteConfig, typingWords } from "@/lib/site-data";
import { useTypewriter } from "@/lib/use-typewriter";

export function Hero() {
  const role = useTypewriter(typingWords);

  return (
    <section id="home" className="relative flex min-h-svh items-center overflow-clip pt-17">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(48rem 28rem at 85% 12%, rgba(37,99,235,0.16), transparent 60%), radial-gradient(40rem 26rem at 8% 85%, rgba(124,58,237,0.14), transparent 60%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 md:grid-cols-[1.1fr_0.9fr]">
        <Reveal direction="left">
          <p className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
            <span className="h-2 w-2 animate-pulse-ring rounded-full bg-success" />
            Available for opportunities
          </p>

          <h1 className="mb-5 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Hi, I&apos;m <span className="text-gradient">{siteConfig.name}</span>
          </h1>

          <p className="mb-5 min-h-[1.4em] text-xl font-medium text-slate-500 dark:text-slate-400 md:text-2xl">
            <span>{role}</span>
            <span className="ml-0.5 inline-block w-0.5 animate-blink bg-primary align-middle" style={{ height: "1.1em" }} />
          </p>

          <p className="mb-6 max-w-[46ch] text-slate-500 dark:text-slate-400">
            I build scalable, high-performance web applications with React.js, Next.js, Redux and Tailwind CSS —
            delivering enterprise-grade SaaS platforms and admin dashboards with clean, component-driven code.
          </p>

          <div className="mb-7 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(37,99,235,0.15),0_12px_32px_rgba(37,99,235,0.18)]"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-7 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-primary hover:text-primary dark:border-slate-700"
            >
              Get In Touch
            </Link>
          </div>

          <div className="flex gap-3">
            <SocialIcon href={siteConfig.social.linkedin} label="LinkedIn"><LinkedinIcon className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" /></SocialIcon>
            <SocialIcon href={siteConfig.social.github} label="GitHub"><GithubIcon className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" /></SocialIcon>
            <SocialIcon href={siteConfig.social.instagram} label="Instagram"><InstagramIcon className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" /></SocialIcon>
            <SocialIcon href={siteConfig.social.facebook} label="Facebook"><FacebookIcon className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" /></SocialIcon>
          </div>
        </Reveal>

        <Reveal direction="right" className="relative justify-self-center">
          <div className="relative aspect-square w-[min(340px,78vw)] overflow-hidden bg-gradient-brand shadow-2xl [animation:var(--animate-blob),var(--animate-float)]">
            <Image
              src="/assets/images/about/profile.jpg"
              alt="Portrait of Vineet R J"
              fill
              priority
              sizes="340px"
              className="object-cover"
              style={{ objectPosition: "center 42%" }}
            />
          </div>
          <div className="absolute -bottom-3.5 -right-2.5 flex items-center gap-3 rounded-2xl border border-white/40 bg-white/65 px-4 py-3 shadow-md backdrop-blur-lg dark:border-white/10 dark:bg-slate-900/55">
            <CodeXml className="h-6 w-6 text-primary" aria-hidden="true" />
            <span className="text-xs font-semibold leading-tight">
              React &amp; Next.js
              <br />
              Development
            </span>
          </div>
        </Reveal>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-slate-500 dark:text-slate-400 sm:flex"
      >
        <span className="relative h-9 w-6 rounded-full border-2 border-slate-300 dark:border-slate-600">
          <span className="absolute left-1/2 top-1.5 h-2 w-1 -translate-x-1/2 animate-scroll-cue rounded-full bg-primary" />
        </span>
        Scroll
      </a>
    </section>
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
