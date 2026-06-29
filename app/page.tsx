import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import NatureAmbience from "@/components/NatureAmbience";
import ParallaxBackground from "@/components/ParallaxBackground";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import SocialSidebar from "@/components/SocialSidebar";

export default function Home() {
  return (
    <>
      <ParallaxBackground />
      <Navbar />
      <SocialSidebar />
      <NatureAmbience />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
