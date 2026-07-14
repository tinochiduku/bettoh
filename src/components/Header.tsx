"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { images } from "../assets/images/images";
import { nav } from "../lib/data";
import { CloseIcon, MenuIcon } from "./icons";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-[#100f0d]/95 backdrop-blur border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src={images.iconWhite}
            alt="Bettohtech"
            width={40}
            height={42}
            className="h-9 w-auto md:h-10"
            priority
          />
          <span className="font-[family-name:var(--font-display)] text-xl md:text-2xl leading-none tracking-tight text-white">
            Bettoh<span className="text-[#ed1c24]">tech</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-[family-name:var(--font-mono)] text-[13px] uppercase tracking-[0.14em] transition-colors ${
                  active ? "text-white" : "text-white/65 hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-[2px] bg-[#ed1c24] transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center bt-cut-tr bg-[#ed1c24] px-5 py-2.5 font-[family-name:var(--font-mono)] text-[13px] uppercase tracking-[0.12em] text-white transition-transform hover:-translate-y-0.5"
          >
            Get a Quote
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white p-1"
        >
          {open ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-[#100f0d] border-t border-white/10"
          >
            <div className="flex flex-col gap-1 px-5 py-5">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={`block py-3 font-[family-name:var(--font-display)] text-3xl uppercase ${
                      pathname === item.href ? "text-[#ed1c24]" : "text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/contact"
                className="mt-4 inline-flex w-fit items-center bt-cut-tr bg-[#ed1c24] px-5 py-3 font-[family-name:var(--font-mono)] text-[13px] uppercase tracking-[0.12em] text-white"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
