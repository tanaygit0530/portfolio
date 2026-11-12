"use client";

import { useSyncExternalStore } from "react";

const noop = () => () => {};

/** Current year, read on the client so the static build never goes stale. */
export function Year() {
  const year = useSyncExternalStore(
    noop,
    () => new Date().getFullYear(),
    () => null,
  );
  return <span suppressHydrationWarning>{year ?? ""}</span>;
}
