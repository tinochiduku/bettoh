import { process } from "../lib/data";
import { RevealGroup, RevealItem } from "./Reveal";

export function ProcessSteps() {
  return (
    <RevealGroup className="grid grid-cols-1 gap-px bg-[#e5e4e2] sm:grid-cols-2 lg:grid-cols-4">
      {process.map((p) => (
        <RevealItem key={p.step} className="bg-[#fafaf9] p-8">
          <span className="font-[family-name:var(--font-display)] text-5xl text-[#ed1c24]">
            {p.step}
          </span>
          <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl uppercase tracking-tight text-[#100f0d]">
            {p.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#646362]">{p.description}</p>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
