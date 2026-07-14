import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowIcon } from "./icons";

export function Eyebrow({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] ${
        dark ? "text-white/50" : "text-[#646362]"
      }`}
    >
      <span className="h-1.5 w-1.5 bg-[#ed1c24]" />
      {children}
    </div>
  );
}

export function CtaBanner() {
  return (
    <section className="bg-[#ed1c24]">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20 flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <h2 className="max-w-xl font-[family-name:var(--font-display)] text-4xl md:text-5xl uppercase leading-[0.95] tracking-tight text-[#100f0d]">
          Ready to build something that gets noticed?
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 shrink-0 bt-cut-tr bg-[#100f0d] px-7 py-4 font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.14em] text-white transition-transform hover:-translate-y-0.5"
        >
          Get a Quote
          <ArrowIcon className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
