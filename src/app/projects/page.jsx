import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { Reveal } from "@/components/reveal";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { siteConfig } from "@/lib/site-data";

export const metadata = {
  title: "Projects",
  description: "Browse projects by Vineet R J spanning SaaS platforms, admin dashboards and websites built with React.js, Next.js and Redux. Filter by category and view details.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `Projects — ${siteConfig.name}`,
    description: "Browse SaaS, admin dashboard and website projects by Frontend Developer Vineet R J.",
    url: `${siteConfig.url}/projects`,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Projects", item: `${siteConfig.url}/projects` },
  ],
};

export default function ProjectsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb page="Projects" />

      <section className="pb-16 pt-6 md:pb-24">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="mx-auto mb-10 max-w-xl text-center">
            <p className="mb-4 inline-flex rounded-full bg-gradient-brand-soft px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
              Portfolio
            </p>
            <h1 className="mb-3 text-3xl font-semibold sm:text-4xl">My Projects</h1>
            <p className="text-slate-500 dark:text-slate-400">
              Enterprise SaaS platforms, admin dashboards and websites I&apos;ve built at Perisync Technologies.
            </p>
          </Reveal>

          <ProjectsGrid />
        </div>
      </section>

      <section className="bg-slate-100 py-16 dark:bg-[#0a0f1e] md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal direction="scale">
            <div className="rounded-3xl bg-gradient-brand px-8 py-14 text-center text-white">
              <h2 className="mb-3 text-3xl font-semibold sm:text-4xl">Have a Project in Mind?</h2>
              <p className="mx-auto mb-6 max-w-[46ch] opacity-90">
                I&apos;m open to new opportunities and collaborations. Let&apos;s talk about what you&apos;re building.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-md transition hover:-translate-y-0.5"
              >
                Contact Me
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
