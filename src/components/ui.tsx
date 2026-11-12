import type { ReactNode } from "react";

type Dir = "down-right" | "up-right" | "down" | "right";

const rotation: Record<Dir, string> = {
  right: "rotate-0",
  "down-right": "rotate-45",
  down: "rotate-90",
  "up-right": "-rotate-45",
};

export function Arrow({ dir, className = "" }: { dir: Dir; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`h-[42%] w-[42%] transition-transform duration-300 ${rotation[dir]} ${className}`}
    >
      <path d="M4 12h16M13 5l7 7-7 7" />
    </svg>
  );
}

const circleBase =
  "inline-flex shrink-0 items-center justify-center rounded-full border transition-colors duration-300";

export const circleTone = {
  light: "border-ink/70 bg-paper text-ink hover:bg-ink hover:text-paper hover:border-ink",
  solid: "border-ink bg-ink text-paper",
};

/** Circular arrow button rendered as a link. Inverts to black on hover. */
export function ArrowLink({
  href,
  dir,
  label,
  size = "md",
  className = "",
  external,
}: {
  href: string;
  dir: Dir;
  label: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
}) {
  const s = size === "lg" ? "h-14 w-14" : size === "sm" ? "h-11 w-11" : "h-12 w-12 md:h-14 md:w-14";
  return (
    <a
      href={href}
      aria-label={label}
      className={`group ${circleBase} ${circleTone.light} ${s} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <Arrow dir={dir} className="group-hover:scale-110" />
    </a>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-site px-4 sm:px-8 lg:px-16 ${className}`}>{children}</div>;
}

/** Huge uppercase display heading with the metallic fill. */
export function Display({
  children,
  as: Tag = "h2",
  className = "",
  tone = "metal",
  id,
}: {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
  tone?: "metal" | "metal-light";
  id?: string;
}) {
  return (
    <Tag
      id={id}
      className={`font-display font-light uppercase leading-[0.95] tracking-[-0.075em] ${tone} ${className}`}
    >
      {children}
    </Tag>
  );
}

export const pillBase =
  "label inline-flex items-center justify-center rounded-full border px-4 py-2 transition-colors duration-300";
