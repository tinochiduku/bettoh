import Image from "next/image";
import Link from "next/link";
import { images } from "../assets/images/images";
import { fontVariables } from "../lib/fonts";
import { services } from "../lib/data";
import { Hero } from "../components/Hero";
import { Marquee } from "../components/Marquee";
import { ServiceCard } from "../components/ServiceCard";
import { ProcessSteps } from "../components/ProcessSteps";
import { CtaBanner, Eyebrow } from "../components/Section";
import { Reveal, RevealGroup, RevealItem } from "../components/Reveal";
import { ArrowIcon } from "../components/icons";

export default function HomePage() {
  return (
    <div className={`${fontVariables} font-[family-name:var(--font-body)]`}>
      <Hero />

      <Marquee items={services.map((s) => s.name)} />

      {/* What we build */}
      <section className="bg-[#100f0d] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <Eyebrow dark>What we build</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-4xl md:text-5xl uppercase leading-[0.95] tracking-tight text-white">
              Six ways we put your brand on the street.
            </h2>
          </Reveal>

          <RevealGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <RevealItem key={service.slug}>
                <ServiceCard service={service} index={i} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Proof, not promises */}
      <section className="bg-[#fafaf9] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid grid-cols-1 gap-12 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-5 order-2 md:order-1">
            <Eyebrow>On the ground</Eyebrow>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl md:text-5xl uppercase leading-[0.95] tracking-tight text-[#100f0d]">
              Fabricated, delivered and installed — not just rendered.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-[#646362]">
              This pylon was designed, welded, printed and installed by our
              own team. It's the same structural and finishing standard every
              Bettohtech build is held to, from a single reception logo to a
              multi-site forecourt rollout.
            </p>
            <Link
              href="/services#pylons-fabrication"
              className="mt-7 inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.12em] text-[#ed1c24]"
            >
              See pylon fabrication
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal variant="cut" delay={0.1} className="md:col-span-7 order-1 md:order-2">
            <div className="relative mx-auto max-w-md bt-cut-tl overflow-hidden bg-[#1c1b1a]">
              <Image
                src={images.pylonSign}
                alt="Bettohtech branded pylon sign fabricated and installed on site in Harare"
                className="h-auto w-full"
                sizes="(min-width: 768px) 420px, 90vw"
                priority={false}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#fafaf9] pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <Eyebrow>How a build happens</Eyebrow>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-4xl md:text-5xl uppercase leading-[0.95] tracking-tight text-[#100f0d]">
              Four steps from brief to installed.
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
