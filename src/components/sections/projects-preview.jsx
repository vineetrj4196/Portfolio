import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/site-data";
import { ProjectCard } from "./project-card";

export function ProjectsPreview() {
  return (
    <section id="work" className="bg-white py-16 dark:bg-[#0f172a] md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto mb-14 max-w-xl text-center">
          <p className="mb-4 inline-flex rounded-full bg-gradient-brand-soft px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
            Portfolio
          </p>
          <h2 className="mb-3 text-3xl font-semibold sm:text-4xl">Featured Projects</h2>
          <p className="text-slate-500 dark:text-slate-400">
            Enterprise-grade SaaS platforms and admin dashboards, from HRMS workflows to client portals.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <Reveal key={project.slug}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-7 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-primary hover:text-primary dark:border-slate-700"
          >
            See All Projects
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
