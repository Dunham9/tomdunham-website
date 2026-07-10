import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Ephor from "@/components/Ephor";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#111]">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Ephor />
      <Contact />
    </main>
  );
}
