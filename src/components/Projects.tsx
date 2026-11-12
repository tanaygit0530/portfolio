"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { links, projects, type Project } from "@/data/content";
import { CloseIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { Arrow, ArrowLink, Container, Display, pillBase } from "./ui";

export function Projects() {
  const [tab, setTab] = useState(projects.tabs[0].id);
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const closeModal = useCallback(() => setOpenProject(null), []);
  const current = projects.tabs.find((t) => t.id === tab) ?? projects.tabs[0];

  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-12 md:py-20">
      <Container>
        <Reveal>
          <Display id="projects-heading" className="text-center text-[clamp(1.75rem,6.2vw,5rem)]">
            {projects.heading}
          </Display>
        </Reveal>

        <div className="mt-8 flex items-center justify-between gap-4 md:mt-12">
          <div role="tablist" aria-label="Project categories" className="flex">
            {projects.tabs.map((t, i) => {
              const active = t.id === tab;
              return (
                <button
                  key={t.id}
                  role="tab"
                  id={`tab-${t.id}`}
                  aria-selected={active}
                  aria-controls={`panel-${t.id}`}
                  tabIndex={active ? 0 : -1}
                  onClick={() => setTab(t.id)}
                  onKeyDown={(e) => {
                    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
                    const next = projects.tabs[(i + (e.key === "ArrowRight" ? 1 : -1) + projects.tabs.length) % projects.tabs.length];
                    setTab(next.id);
                    document.getElementById(`tab-${next.id}`)?.focus();
                  }}
                  className={`relative inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-[12px] uppercase tracking-[0.04em] transition-colors duration-300 md:px-8 md:py-4 md:text-lg ${
                    i > 0 ? "-ml-4 md:-ml-6" : ""
                  } ${active ? "z-10 border-ink bg-ink text-paper" : "border-line bg-paper text-ink hover:border-ink"}`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
          <ArrowLink href={links.github} dir="up-right" label="All projects on GitHub" external />
        </div>

        <div
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          className="no-scrollbar -mx-4 mt-6 flex scroll-px-4 snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0 md:mt-8 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible"
        >
          <AnimatePresence mode="wait" initial={false}>
            {current.projects.map((p, i) => (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="w-[78%] shrink-0 snap-start sm:w-[60%] md:w-auto"
              >
                <button
                  type="button"
                  onClick={() => setOpenProject(p)}
                  aria-haspopup="dialog"
                  className="group block w-full text-left"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[10px] bg-mock md:rounded-2xl">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      sizes="(min-width: 768px) 560px, 78vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <span className="absolute right-3 top-3 inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/60 bg-paper text-ink transition-colors duration-300 group-hover:bg-ink group-hover:text-paper">
                      <Arrow dir="up-right" />
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-sm font-light uppercase tracking-[-0.04em] md:mt-4 md:text-xl">
                    {p.title}
                  </h3>
                  <p className="label mt-1 text-muted">{p.subtitle}</p>
                </button>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </Container>

      <ProjectModal project={openProject} onClose={closeModal} />
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!project) return;
    lastFocus.current = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      lastFocus.current?.focus();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center bg-ink/50 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90dvh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-paper p-6 sm:rounded-3xl md:p-10"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 id="modal-title" className="metal font-display text-2xl font-light uppercase md:text-4xl">
                  {project.title}
                </h3>
                <p className="label mt-2 text-muted">{project.subtitle}</p>
              </div>
              <button
                ref={closeRef}
                type="button"
                aria-label="Close project details"
                onClick={onClose}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/60 transition-colors hover:bg-ink hover:text-paper"
              >
                <CloseIcon />
              </button>
            </div>

            <ul className="mt-6 space-y-4 border-t border-line pt-6">
              {project.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm leading-relaxed text-ink/85">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                  {b}
                </li>
              ))}
            </ul>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
              {project.stack.map((s) => (
                <li key={s} className={`${pillBase} border-line py-1.5`}>
                  {s}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${pillBase} gap-2 border-ink bg-ink px-6 py-3 text-paper hover:bg-paper hover:text-ink`}
                >
                  GitHub <Arrow dir="up-right" className="!h-4 !w-4" />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${pillBase} gap-2 border-ink px-6 py-3 hover:bg-ink hover:text-paper`}
                >
                  Live <Arrow dir="up-right" className="!h-4 !w-4" />
                </a>
              )}
              {project.note && <p className="label text-muted">{project.note}</p>}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
