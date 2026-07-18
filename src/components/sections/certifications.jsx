import { BadgeCheck, ExternalLink, FileText } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { certifications } from "@/lib/site-data";

export function Certifications() {
  return (
    <section id="certifications" className="bg-slate-100 py-16 dark:bg-[#0a0f1e] md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto mb-14 max-w-xl text-center">
          <p className="mb-4 inline-flex rounded-full bg-gradient-brand-soft px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
            Certifications
          </p>
          <h2 className="mb-3 text-3xl font-semibold sm:text-4xl">Licenses &amp; Certifications</h2>
          <p className="text-slate-500 dark:text-slate-400">Courses, virtual experience programs and events completed so far.</p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <Reveal key={i}>
              <article className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="grid h-13 w-13 flex-shrink-0 place-items-center rounded-xl bg-gradient-brand-soft text-primary">
                  <BadgeCheck className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="mb-1 text-sm font-semibold">{cert.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{cert.issuer}</p>
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{cert.date}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-4">
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                    >
                      <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                      View Certificate
                    </a>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-primary hover:underline dark:text-slate-400"
                      >
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        Verify
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
