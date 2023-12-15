import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <div className="mb-0 bg-[#141414]">
      <main className="flex min-h-screen flex-col bg-[#141414]">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          {/* <AboutSection />
          <ProjectsSection />
          <ExperienceSection /> */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
