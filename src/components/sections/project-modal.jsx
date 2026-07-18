"use client";

import Image from "next/image";
import { ExternalLink, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { useLockBodyScroll } from "@/lib/use-lock-body-scroll";

export function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);
  const isOpen = !!project;

  useLockBodyScroll(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    closeRef.current?.focus();

    function onKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[800] grid place-items-center bg-slate-900/55 p-5 backdrop-blur-md transition-opacity ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className={`relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl transition-all duration-500 dark:bg-slate-900 ${
          isOpen ? "translate-y-0 scale-100 opacity-100" : "translate-y-6 scale-[0.98] opacity-0"
        }`}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-slate-900/55 text-white"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        {project && (
          <>
            <div className="relative aspect-video w-full">
              <Image src={project.image} alt={project.title} fill className="rounded-t-2xl object-cover" />
            </div>
            <div className="p-6">
              <h2 id="modal-title" className="mb-3 text-xl font-semibold">
                {project.title}
              </h2>
              <div className="mb-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs dark:bg-slate-800">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mb-5 text-slate-500 dark:text-slate-400">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5"
              >
                Visit Project <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
