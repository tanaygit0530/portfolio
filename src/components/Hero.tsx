import Image from "next/image";
import { hero } from "@/data/content";
import { ArrowLink, Container, Display } from "./ui";

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative overflow-hidden pt-10 md:pt-16">
      <Container>
        <Display
            as="h1"
            id="hero-heading"
            className="text-center text-[clamp(2.6rem,11.2vw,8.4rem)] leading-[1.04]"
          >
            <span className="block">{hero.headingTop}</span>
            <span className="block">{hero.headingBottom}</span>
          </Display>

        <div className="relative grid grid-cols-2 gap-x-4 pb-10 lg:grid-cols-[1fr_minmax(0,440px)_1fr] lg:gap-x-6 lg:pb-6">
          {/* Portrait — overlaps the bottom of “PORTFOLIO”. */}
          <div className="relative z-10 col-span-2 row-start-1 -mt-[6vw] mx-auto w-[74%] max-w-[440px] lg:col-span-1 lg:col-start-2 lg:-mt-[4.4rem] lg:w-full">
            <Image
              src={hero.portrait.src}
              alt={hero.portrait.alt}
              width={880}
              height={837}
              priority
              sizes="(min-width: 1024px) 440px, 74vw"
              className="h-auto w-full select-none [filter:grayscale(1)_contrast(1.1)] [mask-image:linear-gradient(to_bottom,#000_62%,transparent_96%)]"
            />
          </div>

          {/* Left column */}
          <div className="row-start-2 flex flex-col gap-6 lg:row-start-1 lg:col-start-1 lg:pt-16">
            <p className="label font-medium text-ink">{hero.role}</p>
            <ArrowLink href="#about" dir="down-right" label="Scroll to About" size="lg" className="lg:h-16 lg:w-16" />
          </div>

          {/* Right column */}
          <div className="row-start-2 flex flex-col items-end justify-between gap-8 text-right lg:row-start-1 lg:col-start-3 lg:pt-16">
            <p className="label max-w-[230px] font-medium text-ink">{hero.statement}</p>
            <ul className="label space-y-3 text-ink lg:space-y-5 lg:pb-10" aria-label="Focus areas">
              {hero.focus.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
