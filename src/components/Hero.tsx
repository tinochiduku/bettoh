"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { images } from "../assets/images/images";
import { ArrowIcon } from "./icons";
import { Eyebrow } from "./Section";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#100f0d]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 pb-16 pt-14 md:grid-cols-12 md:px-8 md:pb-24 md:pt-20">
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <Eyebrow dark>Brand Architects · Harare</Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
            className="mt-5 font-[family-name:var(--font-display)] text-5xl leading-[0.9] tracking-tight text-white sm:text-6xl md:text-6xl lg:text-7xl uppercase"
          >
            We build brands
            <br />
            that <span className="text-[#ed1c24]">stand tall.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: easeOut }}
            className="mt-6 max-w-lg text-base md:text-lg leading-relaxed text-white/60"
          >
            Vehicle branding, signage, pylons and forecourts — designed and
            fabricated in-house, then installed on the ground in Harare.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: easeOut }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bt-cut-tr bg-[#ed1c24] px-6 py-3.5 font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.12em] text-white transition-transform hover:-translate-y-0.5"
            >
              Get a Quote
              <ArrowIcon className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-white/25 px-6 py-3.5 font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.12em] text-white/85 transition-colors hover:border-white/60 hover:text-white"
            >
              View our work
            </Link>
          </motion.div>
        </div>

        <div className="relative md:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
            className="relative mx-auto flex aspect-[4/5] max-w-sm items-center justify-center bt-cut-both bg-gradient-to-br from-[#1c1b1a] to-[#0a0a09] p-10"
          >
            <BoltDrawIn />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-white/35">
              <span>Est. Harare</span>
              <span>Design · Fabricate · Install</span>
            </div>
          </motion.div>

          {/* proof-of-work corner photo */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: 3 }}
            animate={{ opacity: 1, y: 0, rotate: 3 }}
            transition={{ duration: 0.7, delay: 0.55, ease: easeOut }}
            className="absolute -bottom-8 -left-6 hidden w-28 overflow-hidden border-4 border-[#100f0d] shadow-2xl sm:block md:w-32"
          >
            <Image src={images.pylonSign} alt="Bettohtech pylon sign, fabricated and installed in Harare" className="h-auto w-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BoltDrawIn() {
  return (
    <svg viewBox="0 0 100 130" className="h-2/3 w-2/3 max-w-[220px]">
      <motion.path
        d="M62 4 34 66h18L38 126 82 56H62l12-52z"
        fill="none"
        stroke="#ed1c24"
        strokeWidth={2.5}
        strokeLinejoin="round"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0.6 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: easeOut }}
      />
      <motion.path
        d="M62 4 34 66h18L38 126 82 56H62l12-52z"
        fill="#ed1c24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      />
    </svg>
  );
}
