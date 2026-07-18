"use client";

import { Atom, Braces, Coffee, Database, FileCode2, Route, Server, Triangle, Wind, Workflow } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { currentlyLearning, skills, tools } from "@/lib/site-data";
import { useCounter } from "@/lib/use-counter";
import { useInView } from "@/lib/use-in-view";

const ICONS = {
  Braces,
  Atom,
  Triangle,
  Workflow,
  Wind,
  FileCode2,
  Coffee,
  Database,
  Server,
  Route,
};

export function Skills() {
  return (
    <section id="skills" className="bg-slate-100 py-16 dark:bg-[#0a0f1e] md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto mb-14 max-w-xl text-center">
          <p className="mb-4 inline-flex rounded-full bg-gradient-brand-soft px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
            Skills
          </p>
          <h2 className="mb-3 text-3xl font-semibold sm:text-4xl">Professional Skills</h2>
          <p className="text-slate-500 dark:text-slate-400">
            Achieving high career growth through continuous learning, staying dynamic and competitive.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((skill) => (
            <Reveal key={skill.name}>
              <SkillBar name={skill.name} icon={ICONS[skill.icon]} percent={skill.percent} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex flex-wrap justify-center gap-3">
          {tools.map((tool) => (
            <span
              key={tool}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium shadow-sm transition hover:-translate-y-1 hover:border-primary dark:border-slate-700 dark:bg-slate-900"
            >
              {tool}
            </span>
          ))}
        </Reveal>

        <Reveal className="mx-auto mt-14 max-w-xl text-center">
          <p className="mb-4 inline-flex rounded-full bg-gradient-brand-soft px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
            Currently Learning
          </p>
          <p className="mb-5 text-slate-500 dark:text-slate-400">
            Building out Node.js and Express.js to grow from frontend into a full-stack developer.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {currentlyLearning.map((item) => {
              const Icon = ICONS[item.icon];
              return (
                <span
                  key={item.name}
                  className="inline-flex items-center gap-2 rounded-full border border-dashed border-primary/40 bg-white px-5 py-3 text-sm font-medium text-primary shadow-sm dark:bg-slate-900"
                >
                  <Icon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
                  {item.name}
                </span>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SkillBar({ name, icon: Icon, percent }) {
  const { ref, inView } = useInView();
  const value = useCounter(percent, inView, 1200);

  return (
    <div ref={ref} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-3 flex items-center justify-between text-sm font-semibold">
        <span className="inline-flex items-center gap-2">
          <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
          {name}
        </span>
        <span className="tabular-nums text-primary">{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
        <div
          className="h-full rounded-full bg-gradient-brand transition-[width] duration-1000 ease-out"
          style={{ width: `${inView ? percent : 0}%` }}
        />
      </div>
    </div>
  );
}

export function SkillsRecap() {
  return (
    <section className="bg-slate-100 py-16 dark:bg-[#0a0f1e] md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto mb-10 max-w-xl text-center">
          <p className="mb-4 inline-flex rounded-full bg-gradient-brand-soft px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
            Skills
          </p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Core Toolkit</h2>
        </Reveal>
        <Reveal className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => {
            const Icon = ICONS[skill.icon];
            return (
              <span
                key={skill.name}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium shadow-sm dark:border-slate-700 dark:bg-slate-900"
              >
                <Icon className="h-[1.1rem] w-[1.1rem] text-primary" aria-hidden="true" />
                {skill.name}
              </span>
            );
          })}
        </Reveal>
        <p className="mt-6 text-center">
          <Link href="/#skills" className="inline-flex rounded-full border border-slate-200 px-5 py-2 text-sm font-medium transition hover:border-primary hover:text-primary dark:border-slate-700">
            See detailed skill levels
          </Link>
        </p>
      </div>
    </section>
  );
}
