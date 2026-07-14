import type { Metadata } from "next";
import { fontVariables } from "../../lib/fonts";
import { site } from "../../lib/data";
import { Eyebrow } from "../../components/Section";
import { Reveal } from "../../components/Reveal";
import { ContactForm } from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Bettohtech",
  description: "Get a quote from Bettohtech — signage, vehicle branding and fabrication in Harare.",
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(site.location);

  return (
    <div className={`${fontVariables} font-[family-name:var(--font-body)]`}>
      <section className="bg-[#100f0d] pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Eyebrow dark>Contact</Eyebrow>
          <h1 className="mt-5 max-w-2xl font-[family-name:var(--font-display)] text-5xl md:text-7xl uppercase leading-[0.92] tracking-tight text-white">
            Let's build your <span className="text-[#ed1c24]">next sign.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-white/60">
            Tell us what needs branding and where it needs to go. We'll come
            back with scope, timeline and a quote.
          </p>
        </div>
      </section>

      <section className="bg-[#100f0d] pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid grid-cols-1 gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-5 flex flex-col gap-6">
            <div className="bt-cut-tr border border-white/10 p-8">
              <h3 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.16em] text-white/40">
                Workshop
              </h3>
              <p className="mt-3 text-lg text-white">{site.location}</p>
              <p className="mt-1 text-sm text-white/50">{site.hours}</p>
            </div>
            <div className="bt-cut-tr border border-white/10 p-8">
              <h3 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.16em] text-white/40">
                Direct
              </h3>
              <p className="mt-3 text-lg text-white">
                <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
              </p>
              <p className="mt-1 text-lg text-white">
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
            </div>
            <div className="overflow-hidden bt-cut-tr border border-white/10">
              <iframe
                title="Bettohtech location map"
                src={`https://maps.google.com/maps?q=${mapQuery}&z=13&output=embed`}
                className="h-56 w-full grayscale contrast-125 opacity-90"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
