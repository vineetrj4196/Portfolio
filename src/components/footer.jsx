import Link from "next/link";
import { siteConfig } from "@/lib/site-data";
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/social-icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white pb-6 pt-16 dark:border-slate-800 dark:bg-[#0f172a]">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-12 grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Link href="/#home" className="flex items-center gap-2 text-base font-bold">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-brand text-white">V</span>
              {siteConfig.name}
            </Link>
            <p className="mt-3 max-w-[32ch] text-sm text-slate-500 dark:text-slate-400">
              Frontend Developer building scalable web applications with React.js, Next.js and Tailwind CSS.
            </p>
            <div className="mt-5 flex gap-3">
              <SocialIcon href={siteConfig.social.linkedin} label="LinkedIn">
                <LinkedinIcon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
              </SocialIcon>
              <SocialIcon href={siteConfig.social.github} label="GitHub">
                <GithubIcon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
              </SocialIcon>
              <SocialIcon href={siteConfig.social.instagram} label="Instagram">
                <InstagramIcon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
              </SocialIcon>
              <SocialIcon href={siteConfig.social.facebook} label="Facebook">
                <FacebookIcon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
              </SocialIcon>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide">Explore</h3>
            <ul className="grid gap-3 text-sm text-slate-500 dark:text-slate-400">
              <li><Link href="/#about" className="hover:text-primary">About</Link></li>
              <li><Link href="/#skills" className="hover:text-primary">Skills</Link></li>
              <li><Link href="/projects" className="hover:text-primary">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </nav>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide">Get In Touch</h3>
            <ul className="grid gap-3 text-sm text-slate-500 dark:text-slate-400">
              <li><a href={`mailto:${siteConfig.email}`} className="hover:text-primary">{siteConfig.email}</a></li>
              <li><a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="hover:text-primary">{siteConfig.phone}</a></li>
              <li><a href="/assets/resume/Vineet_RJ_Resume.pdf" download className="hover:text-primary">Download Resume</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
          <p>&copy; {year} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-primary">Home</Link>
            <Link href="/contact" className="hover:text-primary">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (opens in new tab)`}
      className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 shadow-sm transition hover:-translate-y-1 hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
    >
      {children}
    </a>
  );
}
