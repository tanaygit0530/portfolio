import { about } from "@/data/content";
import { Reveal } from "./Reveal";
import { StatGrid } from "./StatGrid";
import { ArrowLink, Container, Display, pillBase } from "./ui";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-12 md:py-20">
      <Container>
        <Reveal className="relative w-fit">
          <Display id="about-heading" className="text-[clamp(2.6rem,7.4vw,6rem)]">
            {about.heading}
          </Display>
          <ArrowLink
            href="#projects"
            dir="up-right"
            label="Jump to featured projects"
            className="absolute -bottom-3 -right-14 md:-bottom-5 md:-right-10"
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-10 md:mt-14">
          <div className="gap-12 space-y-4 text-[15px] leading-relaxed text-ink/80 md:columns-2 md:text-base [&>p]:break-inside-avoid">
            {about.more.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Interests">
            {about.more.interests.map((i) => (
              <li key={i} className={`${pillBase} border-line`}>
                {i}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-12 md:mt-16">
          <StatGrid items={about.stats} cols="grid-cols-3" />
        </div>
      </Container>
    </section>
  );
}
