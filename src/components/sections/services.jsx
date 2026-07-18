import { CodeXml, Database, ShieldCheck, Smartphone, Workflow, Wrench } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { services } from "@/lib/site-data";

const ICONS = {
  CodeXml,
  Workflow,
  Database,
  Smartphone,
  ShieldCheck,
  Wrench,
};

export function Services() {
  return (
    <section id="services" className="bg-slate-100 py-16 dark:bg-[#0a0f1e] md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto mb-14 max-w-xl text-center">
          <p className="mb-4 inline-flex rounded-full bg-gradient-brand-soft px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
            Services
          </p>
          <h2 className="mb-3 text-3xl font-semibold sm:text-4xl">What I Can Help With</h2>
          <p className="text-slate-500 dark:text-slate-400">Practical development services built on my core skill set.</p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <Reveal key={service.title}>
                <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                  <div className="mb-5 grid h-14 w-14 place-items-center rounded-xl bg-gradient-brand-soft text-primary">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{service.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
