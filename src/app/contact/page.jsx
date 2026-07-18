import { Breadcrumb } from "@/components/breadcrumb";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { ContactInfo } from "@/components/sections/contact-info";
import { siteConfig } from "@/lib/site-data";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Vineet R J for opportunities, collaborations or questions. Send a message directly through the contact form.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact ${siteConfig.name} — ${siteConfig.title}`,
    description: "Get in touch with Vineet R J for opportunities, collaborations or questions.",
    url: `${siteConfig.url}/contact`,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${siteConfig.url}/contact` },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb page="Contact" />

      <section className="pb-16 pt-6 md:pb-24">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="mx-auto mb-10 max-w-xl text-center">
            <p className="mb-4 inline-flex rounded-full bg-gradient-brand-soft px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
              Contact
            </p>
            <h1 className="mb-3 text-3xl font-semibold sm:text-4xl">Let&apos;s Build Something Together</h1>
            <p className="text-slate-500 dark:text-slate-400">Have an opportunity, question, or just want to say hi? Send a message below.</p>
          </Reveal>

          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <Reveal direction="left">
              <ContactInfo />
            </Reveal>
            <Reveal direction="right">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
