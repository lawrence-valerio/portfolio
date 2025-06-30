import { ContactSection } from "./components/ContactSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { HeroSection } from "./components/HeroSection";
import { ProjectSection } from "./components/ProjectSection";
import { TechSection } from "./components/TechSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="relative z-10 mt-[100dvh]">
        <TechSection />
      </div>
      <ProjectSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
