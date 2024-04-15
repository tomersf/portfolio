import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Experience from "@/components/sections/experience";
import Skills from "@/components/sections/skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:[background-size:0px_0px] -z-20 flex flex-col gap-24 md:gap-16">
      <section className="md:h-[35vh] lg:h-[55vh]">
        <Hero />
      </section>
      <section className="max-h-[800px]" id="about">
        <About />
      </section>
      <section className="relative lg:-top-28" id="projects">
        <Experience />
      </section>
      <section className="" id="skills">
        <Skills />
      </section>
      <section className="" id="contact">
        <Contact />
      </section>
    </main>
  );
}
