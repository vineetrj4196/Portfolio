"use client";

import { Briefcase, Check, Clock, Mail, MapPin, Phone, Share2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/social-icons";
import { siteConfig } from "@/lib/site-data";

export function ContactInfo() {
  const [copyState, setCopyState] = useState("idle");
  const resetTimer = useRef(undefined);

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    } finally {
      clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setCopyState("idle"), 2500);
    }
  }

  return (
    <div className="grid gap-4">
      <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <IconBadge><Mail className="h-5 w-5" aria-hidden="true" /></IconBadge>
        <div>
          <p className="mb-1 text-xs text-slate-500 dark:text-slate-400">Email</p>
          <button type="button" onClick={copyEmail} className="inline-flex items-center gap-1.5 text-left text-sm font-semibold">
            {siteConfig.email}
            {copyState === "copied" && (
              <span className="inline-flex items-center gap-1 text-xs font-medium text-success">
                <Check className="h-3.5 w-3.5" aria-hidden="true" /> Copied
              </span>
            )}
            {copyState === "failed" && <span className="text-xs font-medium text-error">Copy failed</span>}
          </button>
        </div>
      </div>

      <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <IconBadge><Phone className="h-5 w-5" aria-hidden="true" /></IconBadge>
        <div>
          <p className="mb-1 text-xs text-slate-500 dark:text-slate-400">Phone</p>
          <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="text-sm font-semibold">
            {siteConfig.phone}
          </a>
        </div>
      </div>

      <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <IconBadge><MapPin className="h-5 w-5" aria-hidden="true" /></IconBadge>
        <div>
          <p className="mb-1 text-xs text-slate-500 dark:text-slate-400">Location</p>
          <p className="text-sm font-semibold">{siteConfig.location}</p>
        </div>
      </div>

      <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <IconBadge><Clock className="h-5 w-5" aria-hidden="true" /></IconBadge>
        <div>
          <p className="mb-1 text-xs text-slate-500 dark:text-slate-400">Response Time</p>
          <p className="text-sm font-semibold">Usually within 24–48 hours</p>
        </div>
      </div>

      <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <IconBadge><Briefcase className="h-5 w-5" aria-hidden="true" /></IconBadge>
        <div>
          <p className="mb-1 text-xs text-slate-500 dark:text-slate-400">Availability</p>
          <p className="text-sm font-semibold">Open to new opportunities</p>
        </div>
      </div>

      <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <IconBadge><Share2 className="h-5 w-5" aria-hidden="true" /></IconBadge>
        <div>
          <p className="mb-2 text-xs text-slate-500 dark:text-slate-400">Connect</p>
          <div className="flex gap-3">
            <SocialIcon href={siteConfig.social.linkedin} label="LinkedIn"><LinkedinIcon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" /></SocialIcon>
            <SocialIcon href={siteConfig.social.github} label="GitHub"><GithubIcon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" /></SocialIcon>
            <SocialIcon href={siteConfig.social.instagram} label="Instagram"><InstagramIcon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" /></SocialIcon>
            <SocialIcon href={siteConfig.social.facebook} label="Facebook"><FacebookIcon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" /></SocialIcon>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconBadge({ children }) {
  return <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-gradient-brand-soft text-primary">{children}</div>;
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (opens in new tab)`}
      className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:-translate-y-1 hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
    >
      {children}
    </a>
  );
}
