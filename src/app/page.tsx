import { HeroSection } from "./components/HeroSection";
import { ProjectSection } from "./components/ProjectSection";
import { TechSection } from "./components/TechSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TechSection />
      <ProjectSection />
    </div>
  );
}
