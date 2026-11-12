import { about } from "@/data/content";
import { Reveal } from "./Reveal";
import { StatGrid } from "./StatGrid";
import { ArrowLink, Container, Display } from "./ui";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-12 md:py-20">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
          <Reveal className="relative w-fit">
            <Display id="about-heading" className="text-[clamp(2.6rem,7.4vw,6rem)]">
              {about.heading}
            </Display>
            <ArrowLink
              href="#projects"
              dir="up-right"
              label="Jump to featured projects"
              className="absolute -bottom-3 -right-14 md:-bottom-5 md:-right-8"
            />
          </Reveal>
          <Reveal delay={0.1} className="md:max-w-[440px]">
            <blockquote className="label font-medium text-ink">“{about.quote}”</blockquote>
          </Reveal>
        </div>

        <div className="mt-10 md:mt-16">
          <StatGrid items={about.stats} cols="grid-cols-3" />
        </div>
      </Container>
    </section>
  );
}
