import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Experience from "@/components/sections/experience";
import Skills from "@/components/sections/skills";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] -z-20 flex flex-col gap-24 md:gap-16">
      <section className="">
        <Hero />
      </section>
      <section className="max-h-[800px] md:mb-24" id="about">
        <About />
      </section>
      <section className="relative lg:-top-28" id="experience">
        <Experience />
      </section>
      <section className="relative" id="skills">
        <BackgroundGradientAnimation
          containerClassName="overflow-hidden p-2 top-1/2 md:max-h-[600px] shadow-sm absolute -z-10"
          interactive={false}
          size="25%"
        />
        <Skills />
      </section>
      <section className="" id="contact">
        <Contact />
      </section>
    </main>
  );
}
