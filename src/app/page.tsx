import About from "@/components/about";
import Contact from "@/components/contant";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:[background-size:0px_0px]">
      <section className="h-[60vh]" id="about">
        <About />
      </section>
      <section className="h-[60vh]" id="skills">
        <Skills />
      </section>
      <section className="h-[60vh]" id="projects">
        <Projects />
      </section>
      <section className="h-[20vh]" id="contact">
        <Contact />
      </section>
    </main>
  );
}
