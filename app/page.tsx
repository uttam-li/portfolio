import TechStack from "@/components/tech-stack";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <>
      <About />
      <SectionDivider />
      <Projects />
      <Experience />
      <TechStack />
    </>
  );
}
