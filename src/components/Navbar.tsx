"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { links, nav, site } from "@/data/content";
import {
  CloseIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MenuIcon,
} from "./Icons";
import { pillBase } from "./ui";

const iconBtn =
  "inline-flex h-8 w-8 items-center justify-center rounded-full border border-line text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper md:h-9 md:w-9";

const noopSubscribe = () => () => {};

const socials = [
  { label: "GitHub", href: links.github, Icon: GitHubIcon, external: true },
  {
    label: "LinkedIn",
    href: links.linkedin,
    Icon: LinkedInIcon,
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${links.email}`,
    Icon: MailIcon,
    external: false,
  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const menuBtn = useRef<HTMLButtonElement>(null);
  // Portal target only exists on the client; the overlay must live on <body>
  // so the header's backdrop-filter doesn't trap its `position: fixed`.
  const mounted = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );

  // Highlight the pill for the section currently in view.
  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries)
          if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => {
    setOpen(false);
    menuBtn.current?.focus();
  };

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-site items-center justify-between gap-4 px-4 sm:px-8 lg:px-16 md:h-[72px]">
        <a
          href="#home"
          className="font-display text-[13px] font-light tracking-[0.18em] md:text-sm"
        >
          {site.logo}
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1.5 lg:gap-2">
            {nav.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`${pillBase} whitespace-nowrap px-3 py-1.5 lg:min-w-[108px] lg:px-4 ${
                      isActive
                        ? "border-ink bg-ink text-paper"
                        : "border-line bg-paper hover:border-ink"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          {socials.map(({ label, href, Icon, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className={`${iconBtn} hidden sm:inline-flex`}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <Icon />
            </a>
          ))}
          <button
            ref={menuBtn}
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
            className={`${iconBtn} ml-1 w-12 md:w-12`}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                aria-label="Menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="on-dark fixed inset-0 z-50 flex h-dvh flex-col bg-ink px-4 pb-8 text-paper sm:px-8"
              >
                <div className="flex h-16 items-center justify-between md:h-[72px]">
                  <span className="font-display text-[13px] font-light tracking-[0.18em]">
                    {site.logo}
                  </span>
                  <button
                    type="button"
                    autoFocus
                    aria-label="Close menu"
                    onClick={close}
                    className="inline-flex h-9 w-12 items-center justify-center rounded-full border border-white/40 hover:bg-paper hover:text-ink"
                  >
                    <CloseIcon />
                  </button>
                </div>
                <nav
                  aria-label="Mobile"
                  className="flex flex-1 flex-col justify-center"
                >
                  <ul className="space-y-2">
                    {nav.map((item, i) => (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 * i + 0.1 }}
                      >
                        <a
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="metal-light font-display text-[clamp(2.25rem,10vw,6rem)] font-light uppercase leading-[1.1] tracking-[-0.06em]"
                        >
                          {item.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
                <div className="flex flex-wrap gap-2">
                  {socials.map(({ label, href, external }) => (
                    <a
                      key={label}
                      href={href}
                      className={`${pillBase} border-white/40 hover:bg-paper hover:text-ink`}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </header>
  );
}
