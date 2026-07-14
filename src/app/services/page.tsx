import type { Metadata } from "next";
import Link from "next/link";
import { fontVariables } from "../../lib/fonts";
import { services } from "../../lib/data";
import { Eyebrow, CtaBanner } from "../../components/Section";
import { Reveal } from "../../components/Reveal";
import { serviceIcons, ArrowIcon } from "../../components/icons";

export const metadata: Metadata = {
  title: "Services — Bettohtech",
  description:
    "Vehicle branding, 3D & 2D signage, events branding, reception designs, pylons fabrication and service station branding — designed and fabricated in-house.",
};

export default function ServicesPage() {
  return (
    <div className={`${fontVariables} font-[family-name:var(--font-body)]`}>
      {/* Hero */}
      <section className="bg-[#100f0d] pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Eyebrow dark>Services</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-[family-name:var(--font-display)] text-5xl md:text-7xl uppercase leading-[0.92] tracking-tight text-white">
            Six disciplines. <span className="text-[#ed1c24]">One workshop.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-white/60">
            Every service below is scoped, designed, fabricated and installed
            by the same in-house team — so the finish on a vehicle wrap
            matches the finish on your pylon, down to the colour.
          </p>
        </div>
      </section>

      {/* Jump nav */}
      <nav className="sticky top-[57px] md:top-[65px] z-30 border-y border-[#e5e4e2] bg-[#fafaf9]/95 backdrop-blur">
        <div className="mx-auto max-w-7xl overflow-x-auto px-5 md:px-8">
          <div className="flex gap-6 py-3 whitespace-nowrap">
            {services.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.1em] text-[#646362] hover:text-[#ed1c24] transition-colors"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Service sections */}
      <div className="bg-[#fafaf9]">
        {services.map((service, i) => {
          const Icon = serviceIcons[service.slug];
          const reversed = i % 2 === 1;
          return (
            <section
              key={service.slug}
              id={service.slug}
              className="scroll-mt-32 border-b border-[#e5e4e2] py-16 md:py-24"
            >
              <div className="mx-auto max-w-7xl px-5 md:px-8">
                <div
                  className={`grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center ${
                    reversed ? "" : ""
                  }`}
                >
                  <Reveal
                    className={`md:col-span-5 ${reversed ? "md:order-2" : "md:order-1"}`}
                  >
                    <div className="inline-flex h-16 w-16 items-center justify-center bt-cut-tr bg-[#100f0d]">
                      <Icon className="h-8 w-8 text-[#ed1c24]" />
                    </div>
                    <span className="mt-6 block font-[family-name:var(--font-mono)] text-xs text-[#ed1c24]">
                      {String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                    </span>
                    <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl md:text-5xl uppercase leading-[0.95] tracking-tight text-[#100f0d]">
                      {service.name}
                    </h2>
                    <p className="mt-4 max-w-md text-base leading-relaxed text-[#646362]">
                      {service.description}
                    </p>
                    <Link
                      href="/contact"
                      className="mt-6 inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.12em] text-[#ed1c24]"
                    >
                      Get a quote
                      <ArrowIcon className="h-4 w-4" />
                    </Link>
                  </Reveal>

                  <Reveal
                    variant="cut"
                    delay={0.1}
                    className={`md:col-span-7 ${reversed ? "md:order-1" : "md:order-2"}`}
                  >
                    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-3 bg-white border border-[#e5e4e2] p-5 text-sm leading-snug text-[#100f0d]"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#ed1c24]" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CtaBanner />
    </div>
  );
}
