import Link from "next/link";
import type { Service } from "../lib/data";
import { serviceIcons, ArrowIcon } from "./icons";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = serviceIcons[service.slug];
  return (
    <Link
      href={`/services#${service.slug}`}
      className="group relative flex flex-col justify-between bt-cut-tr bg-[#1c1b1a] p-7 md:p-8 min-h-[260px] transition-colors hover:bg-[#242322]"
    >
      <div className="flex items-start justify-between">
        <Icon className="h-10 w-10 text-[#ed1c24]" />
        <span className="font-[family-name:var(--font-mono)] text-xs text-white/30">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="mt-8">
        <h3 className="font-[family-name:var(--font-display)] text-2xl uppercase tracking-tight text-white">
          {service.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/55">{service.short}</p>
      </div>
      <div className="mt-6 flex items-center gap-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] text-[#ed1c24]">
        View service
        <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
