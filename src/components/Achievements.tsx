import { achievements } from "@/data/content";
import { StatGrid } from "./StatGrid";
import { Container } from "./ui";

export function Achievements() {
  return (
    <section aria-labelledby="achievements-heading" className="pb-16 pt-4 md:pb-28">
      <Container>
        <h2 id="achievements-heading" className="label mb-4 text-center text-muted md:mb-6">
          {achievements.heading}
        </h2>
        <StatGrid
          items={achievements.items}
          cols="grid-cols-2 md:grid-cols-4"
          valueClass="text-[clamp(1.6rem,3.6vw,2.75rem)]"
        />
      </Container>
    </section>
  );
}
