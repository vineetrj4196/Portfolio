import { Breadcrumb } from "@/components/breadcrumb";
import { About } from "@/components/sections/about";
import { Certifications } from "@/components/sections/certifications";
import { Experience } from "@/components/sections/experience";
import { ResumeCta } from "@/components/sections/resume-cta";
import { SkillsRecap } from "@/components/sections/skills";
import { siteConfig } from "@/lib/site-data";

export const metadata = {
  title: "About",
  description:
    "Learn more about Vineet R J — background,experience, education and certifications of a Frontend Developer skilled in React.js, Next.js, Redux and Tailwind CSS.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile",
    title: `About ${siteConfig.name} — ${siteConfig.title}`,
    description: "Background, experience, education and certifications of Frontend Developer Vineet R J.",
    url: `${siteConfig.url}/about`,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "About", item: `${siteConfig.url}/about` },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb page="About" />
      <About variant="full" />
      <SkillsRecap />
      <Experience includeEducation />
      <Certifications />
      <ResumeCta />
    </>
  );
}
