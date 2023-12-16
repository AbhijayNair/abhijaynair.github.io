import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <div className="mb-0 bg-[#141414] scroll-smooth">
      <main className="flex min-h-screen flex-col bg-[#141414]">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
