import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:[background-size:0px_0px]">
      <section className="h-[30vh]">
        <Hero />
      </section>
      <section className="h-[30vh]" id="about">
        <About />
      </section>
      <section className="" id="skills">
        <Skills />
      </section>
      <section className="" id="projects">
        <Projects />
      </section>
      <section className="" id="contact">
        <Contact />
      </section>
    </main>
  );
}
