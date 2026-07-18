import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ProjectCard({ project, onView }) {
  const isInteractive = !!onView;

  const media = (
    <div className="group relative aspect-[4/3] overflow-hidden">
      <Image
        src={project.image}
        alt={`Preview of ${project.title}`}
        width={project.width}
        height={project.height}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-slate-900/85 to-transparent to-60% p-4 opacity-0 transition-opacity group-hover:opacity-100">
        <span className="rounded-full bg-white/20 px-3 py-1 text-xs text-white backdrop-blur-xs">{project.categoryLabel}</span>
      </div>
    </div>
  );

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      {isInteractive ? (
        <button type="button" onClick={() => onView(project)} aria-label={`View details for ${project.title}`} className="block w-full text-left">
          {media}
        </button>
      ) : (
        <Link href="/projects" aria-label={`View details for ${project.title}`} className="block">
          {media}
        </Link>
      )}

      <div className="p-5">
        <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
        <p className="mb-4 line-clamp-2 text-sm text-slate-500 dark:text-slate-400">{project.description}</p>
        {isInteractive ? (
          <button
            type="button"
            onClick={() => onView(project)}
            className="group/link inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            View details <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
          </button>
        ) : (
          <Link href="/projects" className="group/link inline-flex items-center gap-2 text-sm font-semibold text-primary">
            View details <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  );
}
