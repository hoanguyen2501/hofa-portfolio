import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Experience />
      <TechStack />
      <Contact />
    </div>
  );
}
