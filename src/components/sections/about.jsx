"use client";

import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/site-data";
import { useCounter } from "@/lib/use-counter";
import { useInView } from "@/lib/use-in-view";

const META = [
  { label: "Name", value: siteConfig.name },
  { label: "Email", value: siteConfig.email },
  { label: "Focus", value: "Frontend Development (React.js & Next.js)" },
  { label: "Availability", value: "Open to new opportunities" },
];

const COUNTERS = [
  { target: 8, label: "Core Skills" },
  { target: 4, label: "Featured Projects" },
  { target: 1, suffix: ".7+", label: "Years Experience" },
  { target: 100, suffix: "%", label: "Commitment" },
];

export function About({ variant = "preview" }) {
  const isFull = variant === "full";
  const HeadingTag = isFull ? "h1" : "h2";

  return (
    <section id={isFull ? undefined : "about"} className={isFull ? "" : "bg-white py-16 dark:bg-[#0f172a] md:py-24"}>
      <div className="mx-auto max-w-6xl px-5">
        {!isFull && (
          <Reveal className="mx-auto mb-14 max-w-xl text-center">
            <p className="mb-4 inline-flex rounded-full bg-gradient-brand-soft px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
              About Me
            </p>
            <h2 className="mb-3 text-3xl font-semibold sm:text-4xl">Get to Know Me</h2>
            <p className="text-slate-500 dark:text-slate-400">A quick look at who I am and what I&apos;m focused on.</p>
          </Reveal>
        )}

        <div className={`grid items-center gap-12 ${isFull ? "md:grid-cols-[0.85fr_1.15fr] lg:grid-cols-[0.7fr_1.3fr] lg:gap-24" : "md:grid-cols-[0.85fr_1.15fr] lg:grid-cols-[0.7fr_1.3fr]"}`}>
          <Reveal direction="left" className="relative justify-self-center">
            <div className="relative w-[min(340px,100%)] overflow-hidden rounded-3xl shadow-xl">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-brand opacity-35 blur-3xl" aria-hidden="true" />
              <Image
                src="/assets/images/about/profile.jpg"
                alt="Portrait of Vineet R J"
                width={512}
                height={1075}
                className="aspect-[4/5] w-full object-cover"
                priority={isFull}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 grid gap-0.5 rounded-2xl border border-white/40 bg-white/65 px-5 py-4 text-center shadow-md backdrop-blur-lg dark:border-white/10 dark:bg-slate-900/55">
              <strong className="text-lg text-primary">8+</strong>
              <span className="text-xs text-slate-500 dark:text-slate-400">Core Skills</span>
            </div>
          </Reveal>

          <Reveal direction="right">
            {isFull && (
              <p className="mb-4 inline-flex rounded-full bg-gradient-brand-soft px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
                About Me
              </p>
            )}
            <HeadingTag className={isFull ? "mb-4 text-3xl font-semibold sm:text-4xl" : "mb-4 text-2xl font-semibold"}>
              {isFull ? "Hi, I'm Vineet R J" : "I'm Vineet, a Frontend Developer"}
            </HeadingTag>

            <p className="mb-4 text-slate-500 dark:text-slate-400">
              Frontend Developer with 1.7+ years of experience building scalable, high-performance web applications
              using React.js, Next.js, Tailwind CSS, JavaScript (ES6+) and RESTful APIs. I&apos;ve delivered
              enterprise-grade SaaS platforms, HRMS systems and admin dashboards with state management, role-based
              access control (RBAC) and CI/CD-driven deployment workflows.
            </p>
            <p className="mb-4 text-slate-500 dark:text-slate-400">
              I also have working knowledge of Java and SQL fundamentals, with hands-on exposure to Git-based version
              control and CI/CD pipelines. I care about writing clean, component-driven, maintainable code aligned
              with modern engineering standards and Agile collaboration.
            </p>
            <p className="mb-4 text-slate-500 dark:text-slate-400">
              Right now I&apos;m learning Node.js and Express.js to build out the backend side of my skill set and
              grow from frontend into a full-stack developer.
            </p>

            <dl className="my-6 grid gap-3">
              {META.map((item) => (
                <div key={item.label} className="flex gap-3 text-sm">
                  <dt className="w-24 flex-shrink-0 font-semibold">{item.label}</dt>
                  <dd className="text-slate-500 dark:text-slate-400">{item.value}</dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-wrap gap-4">
              {isFull ? (
                <>
                  <a
                    href="/assets/resume/Vineet_RJ_Resume.pdf"
                    download
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5"
                  >
                    <Download className="h-4 w-4" aria-hidden="true" /> Download Resume
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-7 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-primary hover:text-primary dark:border-slate-700"
                  >
                    Contact Me
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5"
                  >
                    Read Full Story
                  </Link>
                  <a
                    href="/assets/resume/Vineet_RJ_Resume.pdf"
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-7 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-primary hover:text-primary dark:border-slate-700"
                  >
                    <Download className="h-4 w-4" aria-hidden="true" /> Download Resume
                  </a>
                </>
              )}
            </div>

            {!isFull && <Counters />}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Counters() {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className="mt-10 grid grid-cols-2 gap-6 text-center xs:grid-cols-4">
      {COUNTERS.map((counter) => (
        <Counter key={counter.label} {...counter} active={inView} />
      ))}
    </div>
  );
}

function Counter({ target, suffix = "", label, active }) {
  const value = useCounter(target, active);
  return (
    <div>
      <span className="text-gradient text-3xl font-bold">
        {value}
        {suffix}
      </span>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{label}</p>
    </div>
  );
}
