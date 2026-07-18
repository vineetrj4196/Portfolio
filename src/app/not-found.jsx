import Link from "next/link";
import { Home } from "lucide-react";

export const metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist. Return to the Vineet R J portfolio homepage.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="grid min-h-[70svh] place-items-center px-5 py-24 text-center">
      <div>
        <p className="text-gradient text-8xl font-bold leading-none sm:text-9xl">404</p>
        <h1 className="my-4 text-3xl font-semibold sm:text-4xl">Page Not Found</h1>
        <p className="mx-auto mb-6 max-w-[42ch] text-slate-500 dark:text-slate-400">
          The page you&apos;re looking for doesn&apos;t exist, may have been moved, or the link is broken.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5"
          >
            <Home className="h-4 w-4" aria-hidden="true" /> Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-7 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-primary hover:text-primary dark:border-slate-700"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
