import Link from "next/link";
import { Download } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function ResumeCta() {
  return (
    <section className="bg-white py-16 dark:bg-[#0f172a] md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal direction="scale">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-brand px-8 py-14 text-center text-white">
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(40rem 20rem at 20% 0%, rgba(255,255,255,0.18), transparent 60%)" }}
              aria-hidden="true"
            />
            <h2 className="relative mb-3 text-3xl font-semibold sm:text-4xl">Want the Full Picture?</h2>
            <p className="relative mx-auto mb-6 max-w-[46ch] opacity-90">
              Download my resume for a complete overview of my skills and background.
            </p>
            <div className="relative flex flex-wrap justify-center gap-4">
              <a
                href="/assets/resume/Vineet_RJ_Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-md transition hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4" aria-hidden="true" /> Download Resume
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/50 px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
