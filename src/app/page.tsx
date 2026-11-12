import { About } from "@/components/About";
import { Achievements } from "@/components/Achievements";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { NumberedList } from "@/components/NumberedList";
import { Projects } from "@/components/Projects";
import { experience, services } from "@/data/content";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1440px] bg-paper shadow-[0_0_0_1px_rgba(0,0,0,0.03)]">
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <NumberedList
          id="experience"
          heading={experience.heading}
          intro={experience.intro}
          items={experience.items}
          defaultOpen={0}
        />
        <NumberedList id="services" heading={services.heading} intro={services.intro} items={services.items} compact />
        <Achievements />
      </main>
      <Footer />
    </div>
  );
}
