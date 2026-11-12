import { footer, links, site } from "@/data/content";
import { Reveal } from "./Reveal";
import { Year } from "./Year";
import { Display, pillBase } from "./ui";

const pills = [
  { label: "GitHub", href: links.github, external: true },
  { label: "LinkedIn", href: links.linkedin, external: true },
  { label: "Resume", href: links.resume, download: true },
  { label: "Contact me", href: `mailto:${links.email}` },
];

// Scattered label offsets (desktop), echoing the reference's loose top row.
const scatter = [
  "md:translate-y-0",
  "md:translate-y-5",
  "md:-translate-y-1",
  "md:translate-y-6",
  "md:translate-y-1",
  "md:translate-y-4",
];

export function Footer() {
  return (
    <footer id="contact" className="on-dark bg-ink text-paper">
      <div className="mx-auto w-full max-w-site px-4 pb-6 pt-12 sm:px-8 md:pt-20 lg:px-16">
        <ul
          className="label flex flex-wrap justify-between gap-x-6 gap-y-3 text-[10px] text-white/55 md:px-6 md:text-[11px]"
          aria-label="Quick facts"
        >
          {footer.scattered.map((s, i) => (
            <li key={s} className={scatter[i % scatter.length]}>
              {s}
            </li>
          ))}
        </ul>

        <Reveal>
          <Display tone="metal-light" className="mt-10 text-center text-[clamp(3rem,14vw,10.5rem)] md:mt-16">
            {footer.heading}
          </Display>
        </Reveal>

        <ul className="mt-8 flex flex-wrap justify-center gap-2 md:mt-12 md:gap-3">
          {pills.map((p) => (
            <li key={p.label}>
              <a
                href={p.href}
                className={`${pillBase} min-w-[112px] border-paper bg-paper px-5 py-2.5 text-ink hover:bg-ink hover:text-paper md:min-w-[150px] md:py-3`}
                {...(p.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                {...(p.download ? { download: "Tanay_Resume.pdf" } : {})}
              >
                {p.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="label mt-14 flex flex-col gap-2 border-t border-white/15 pt-5 text-[10px] text-white/60 sm:flex-row sm:justify-between md:mt-24 md:text-[11px]">
          <p>
            {site.logo} All rights reserved © <Year />
          </p>
          <p>{footer.credit}</p>
        </div>
      </div>
    </footer>
  );
}
