import { About } from "@/components/sections/about";
import { Certifications } from "@/components/sections/certifications";
import { ContactCta } from "@/components/sections/contact-cta";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { ProjectsPreview } from "@/components/sections/projects-preview";
import { ResumeCta } from "@/components/sections/resume-cta";
import { Services } from "@/components/sections/services";
import { Skills } from "@/components/sections/skills";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About variant="preview" />
      <Skills />
      <Experience />
      <Services />
      <ProjectsPreview />
      <Certifications />
      <ResumeCta />
      <ContactCta />
    </>
  );
}
