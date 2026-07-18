import { Reveal } from "@/components/reveal";
import { education, experience } from "@/lib/site-data";

export function Experience({ includeEducation = false }) {
  const items = includeEducation ? [...experience, ...education] : experience;

  return (
    <section id="experience" className="bg-white py-16 dark:bg-[#0f172a] md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto mb-14 max-w-xl text-center">
          <p className="mb-4 inline-flex rounded-full bg-gradient-brand-soft px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
            Experience
          </p>
          <h2 className="mb-3 text-3xl font-semibold sm:text-4xl">{includeEducation ? "Where I've Worked" : "My Journey"}</h2>
          <p className="text-slate-500 dark:text-slate-400">
            {includeEducation ? "My professional experience and education." : "Building enterprise-grade web applications, one release at a time."}
          </p>
        </Reveal>

        <div className="relative mx-auto max-w-3xl border-l-2 border-slate-200 pl-8 dark:border-slate-800">
          {items.map((item, i) => (
            <Reveal key={item.role + i} className={i === items.length - 1 ? "relative" : "relative pb-12"}>
              <TimelineItem item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item }) {
  return (
    <div className="relative">
      <span className="absolute -left-[calc(2rem+7px)] top-1 h-3.5 w-3.5 rounded-full bg-gradient-brand ring-4 ring-white dark:ring-[#0f172a]" />
      <span className="mb-3 inline-block rounded-full bg-gradient-brand-soft px-3.5 py-1.5 text-xs font-semibold text-primary">
        {item.date}
      </span>
      <h3 className="mb-1 text-lg font-semibold">{item.role}</h3>
      <p className="mb-3 text-sm font-medium text-slate-500 dark:text-slate-400">{item.org}</p>
      <ul className="grid gap-2 text-sm text-slate-500 dark:text-slate-400">
        {item.bullets.map((bullet) => (
          <li key={bullet} className="relative pl-5">
            <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-primary" />
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
