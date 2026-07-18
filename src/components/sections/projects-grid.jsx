"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { projectFilters, projects } from "@/lib/site-data";
import { ProjectCard } from "./project-card";
import { ProjectModal } from "./project-modal";

export function ProjectsGrid() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  const visible = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <div role="group" aria-label="Filter projects by category" className="mb-10 flex flex-wrap justify-center gap-3">
        {projectFilters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setFilter(f.value)}
            aria-pressed={filter === f.value}
            className={cn(
              "rounded-full border px-5 py-2.5 text-sm font-medium transition",
              filter === f.value
                ? "border-transparent bg-gradient-brand text-white"
                : "border-slate-200 hover:border-primary dark:border-slate-700"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} onView={setSelected} />
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
