import { ContactSection } from "./components/ContactSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { HeroSection } from "./components/HeroSection";
import { ProjectSection } from "./components/ProjectSection";
import { TechSection } from "./components/TechSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TechSection />
      <ProjectSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
