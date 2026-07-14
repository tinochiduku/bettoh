import Image from "next/image";
import type { Metadata } from "next";
import { images } from "../../assets/images/images";
import { fontVariables } from "../../lib/fonts";
import { values } from "../../lib/data";
import { Eyebrow, CtaBanner } from "../../components/Section";
import { ProcessSteps } from "../../components/ProcessSteps";
import { Reveal, RevealGroup, RevealItem } from "../../components/Reveal";

export const metadata: Metadata = {
  title: "About — Bettohtech",
  description:
    "Bettohtech is a Harare-based brand architecture studio designing and fabricating signage, vehicle branding and branded environments.",
};

export default function AboutPage() {
  return (
    <div className={`${fontVariables} font-[family-name:var(--font-body)]`}>
      {/* Hero */}
      <section className="bg-[#100f0d] pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Eyebrow dark>About Bettohtech</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-[family-name:var(--font-display)] text-5xl md:text-7xl uppercase leading-[0.92] tracking-tight text-white">
            We're the <span className="text-[#ed1c24]">architects</span> behind the brand you see on the street.
          </h1>
          <p className="mt-6 font-[family-name:var(--font-script)] text-2xl text-[#ed1c24]">
            Brand Architects
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#fafaf9] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid grid-cols-1 gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl md:text-4xl uppercase leading-tight tracking-tight text-[#100f0d]">
              A brand is only as strong as the sign, wrap or fascia carrying it.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-6 flex flex-col justify-center gap-5 text-base leading-relaxed text-[#646362]">
            <p>
              Bettohtech exists at the point where a brand guideline meets the
              physical world — where a logo has to survive weather, distance
              and daylight and still be unmistakably yours. We design and
              fabricate that translation ourselves, rather than outsourcing
              the parts that are hardest to get right.
            </p>
            <p>
              From a single reception logo to a full forecourt rollout, every
              project runs through the same in-house process: consult,
              design, fabricate, install. Nothing leaves our workshop until
              it matches the brief exactly.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#100f0d] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <Eyebrow dark>What we hold ourselves to</Eyebrow>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-4xl md:text-5xl uppercase leading-[0.95] tracking-tight text-white">
              Three things every build has to be.
            </h2>
          </Reveal>
          <RevealGroup className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {values.map((v, i) => (
              <RevealItem key={v.title}>
                <div className="h-full bt-cut-tr bg-[#1c1b1a] p-8">
                  <span className="font-[family-name:var(--font-mono)] text-xs text-[#ed1c24]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl uppercase tracking-tight text-white">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">{v.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Photo feature */}
      <section className="bg-[#fafaf9] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid grid-cols-1 gap-12 md:grid-cols-12 md:items-center">
          <Reveal variant="cut" className="md:col-span-5">
            <div className="relative mx-auto max-w-xs bt-cut-tr overflow-hidden bg-[#1c1b1a]">
              <Image
                src={images.pylonSign}
                alt="Bettohtech branded pylon sign in Harare"
                className="h-auto w-full"
                sizes="(min-width: 768px) 340px, 80vw"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7">
            <Eyebrow>Built in-house</Eyebrow>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl md:text-4xl uppercase leading-tight tracking-tight text-[#100f0d]">
              Our own street-facing sign, held to the same standard we build yours to.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-[#646362]">
              Structural steel frame, illuminated face and a full service
              listing panel — fabricated by the same team and process behind
              every pylon, canopy fascia and reception build we deliver for
              clients.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Process recap */}
      <section className="bg-[#fafaf9] pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <Eyebrow>Working with us</Eyebrow>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-4xl md:text-5xl uppercase leading-[0.95] tracking-tight text-[#100f0d]">
              The same four steps, every time.
            </h2>
          </Reveal>
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
