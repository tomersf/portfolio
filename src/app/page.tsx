import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:[background-size:0px_0px] -z-20">
      <section className="h-[20vh] md:h-[35vh] lg:h-[55vh]">
        <Hero />
      </section>
      <section className="" id="about">
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
