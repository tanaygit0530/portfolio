import { Reveal } from "./Reveal";

/** Hairline-bordered grid of big value + small label, as in the reference stats row. */
export function StatGrid({
  items,
  cols,
  valueClass = "text-[clamp(1.25rem,4.4vw,3rem)]",
}: {
  items: { value: string; label: string }[];
  cols: string;
  valueClass?: string;
}) {
  return (
    <Reveal>
      <dl className={`grid border-l border-t border-line ${cols}`}>
        {items.map((s) => (
          <div
            key={s.label}
            className="flex min-w-0 flex-col-reverse justify-end gap-1.5 border-b border-r border-line bg-paper px-3 py-5 sm:px-6 md:gap-3 md:px-9 md:py-12"
          >
            <dt className="text-[9px] uppercase tracking-[0.06em] text-ink sm:text-[11px] md:text-xs">{s.label}</dt>
            <dd className={`font-display font-light uppercase leading-none tracking-[-0.06em] ${valueClass}`}>
              {s.value}
            </dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );
}
