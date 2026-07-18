import Link from "next/link";

export function Breadcrumb({ page }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-5 pt-24 pb-2">
      <ol className="flex gap-2 text-xs text-slate-500 dark:text-slate-400">
        <li>
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li aria-current="page">{page}</li>
      </ol>
    </nav>
  );
}
