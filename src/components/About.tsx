import { about } from "@/data/content";
import { Reveal } from "./Reveal";
import { StatGrid } from "./StatGrid";
import { ArrowLink, Container, Display, pillBase } from "./ui";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-12 md:py-20">
      <Container>
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] md:gap-16">
          <Reveal className="md:sticky md:top-28 md:self-start">
            <div className="relative w-fit">
              <Display id="about-heading" className="text-[clamp(2.6rem,7.4vw,6rem)]">
                {about.heading}
              </Display>
              <ArrowLink
                href="#projects"
                dir="up-right"
                label="Jump to featured projects"
                className="absolute -bottom-3 -right-14 md:-bottom-5 md:-right-8"
              />
            </div>
            <p className="label mt-10 text-muted md:mt-14">{about.more.label}</p>
            <p className="metal mt-4 max-w-[460px] font-display text-[clamp(1.35rem,2.6vw,2.25rem)] font-light uppercase leading-[1.15] tracking-[-0.06em]">
              {about.more.intro}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="md:pt-3">
            <div className="space-y-4 text-[15px] leading-relaxed text-ink/80 md:text-base">
              {about.more.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Interests">
              {about.more.interests.map((i) => (
                <li key={i} className={`${pillBase} border-line`}>
                  {i}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-12 md:mt-16">
          <StatGrid items={about.stats} cols="grid-cols-3" />
        </div>
      </Container>
    </section>
  );
}
