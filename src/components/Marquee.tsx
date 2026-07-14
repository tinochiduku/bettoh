import { BoltIcon } from "./icons";

export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden bg-[#ed1c24] py-3.5 border-y-2 border-[#100f0d]">
      <div className="bt-marquee-track">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 px-6 font-[family-name:var(--font-display)] text-lg md:text-xl uppercase tracking-wide text-[#100f0d] whitespace-nowrap"
          >
            {item}
            <BoltIcon className="h-4 w-4 text-[#100f0d]" />
          </span>
        ))}
      </div>
    </div>
  );
}
