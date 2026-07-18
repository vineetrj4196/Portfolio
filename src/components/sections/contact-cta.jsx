import Link from "next/link";
import { Reveal } from "@/components/reveal";

export function ContactCta() {
  return (
    <section id="contact" className="bg-slate-100 py-16 text-center dark:bg-[#0a0f1e] md:py-24">
      <Reveal className="mx-auto max-w-6xl px-5">
        <p className="mb-4 inline-flex rounded-full bg-gradient-brand-soft px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
          Contact
        </p>
        <h2 className="mb-3 text-3xl font-semibold sm:text-4xl">Let&apos;s Build Something Together</h2>
        <p className="mx-auto mb-6 max-w-[52ch] text-slate-500 dark:text-slate-400">
          Have an opportunity or question? I&apos;d love to hear from you.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5"
        >
          Go to Contact Form
        </Link>
      </Reveal>
    </section>
  );
}
