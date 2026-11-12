"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";
import type { ListItem } from "@/data/content";
import { Reveal } from "./Reveal";
import { Arrow, Container, Display } from "./ui";

const circle =
  "inline-flex shrink-0 items-center justify-center rounded-full border transition-colors duration-300";

/**
 * “Services”-style numbered rows: number circle · wide pill · arrow circle.
 * Rows with bullets expand on click (open row turns black with →).
 * Rows without bullets are static and invert on hover.
 */
export function NumberedList({
  id,
  heading,
  intro,
  items,
  defaultOpen = null,
  compact = false,
}: {
  id: string;
  heading: string;
  intro: string;
  items: ListItem[];
  defaultOpen?: number | null;
  compact?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const uid = useId();
  const h = compact ? "h-11 md:h-14" : "h-12 md:h-16";
  const w = compact ? "w-11 md:w-14" : "w-12 md:w-16";

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="py-12 md:py-20">
      <Container>
        <Reveal>
          <Display id={`${id}-heading`} className="text-center text-[clamp(1.9rem,6.2vw,5rem)]">
            {heading}
          </Display>
          <p className="label mx-auto mt-4 max-w-[520px] text-center text-ink md:mt-6">{intro}</p>
        </Reveal>

        <ol className={`mx-auto mt-8 max-w-[900px] md:mt-12 ${compact ? "space-y-1.5" : "space-y-2"}`}>
          {items.map((item, i) => {
            const expandable = !!item.bullets?.length;
            const isOpen = open === i;
            const panelId = `${uid}-panel-${i}`;
            const tone = isOpen
              ? "border-ink bg-ink text-paper"
              : "border-line bg-paper text-ink group-hover:border-ink group-hover:bg-ink group-hover:text-paper";

            const row = (
              <>
                <span className={`${circle} ${h} ${w} text-xs md:text-sm ${tone}`}>{i + 1}</span>
                <span
                  className={`${circle} ${compact ? "h-11 md:h-14" : "min-h-12 py-1.5 md:h-16"} min-w-0 flex-1 px-4 text-center text-[11px] uppercase leading-snug tracking-[0.04em] sm:text-xs md:text-base ${tone}`}
                >
                  <span className="line-clamp-2">{item.title}</span>
                </span>
                <span className={`${circle} ${h} ${w} ${tone}`}>
                  <Arrow dir={isOpen ? "right" : "down"} />
                </span>
              </>
            );

            return (
              <li key={item.title}>
                <Reveal y={12} delay={i * 0.04}>
                  {expandable ? (
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group flex w-full items-center gap-1.5 rounded-full text-left md:gap-2"
                    >
                      {row}
                    </button>
                  ) : (
                    <div className="group flex w-full items-center gap-1.5 md:gap-2">{row}</div>
                  )}
                  <AnimatePresence initial={false}>
                    {expandable && isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-label={item.title}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mx-auto max-w-[720px] px-2 pb-6 pt-5 md:px-6 md:pb-8">
                          {item.meta && <p className="label text-muted">{item.meta}</p>}
                          <ul className="mt-3 space-y-2.5">
                            {item.bullets!.map((b) => (
                              <li key={b} className="flex gap-3 text-sm leading-relaxed text-ink/85">
                                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
