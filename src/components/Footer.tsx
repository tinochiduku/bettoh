import Image from "next/image";
import Link from "next/link";
import { images } from "../assets/images/images";
import { nav, services, site } from "../lib/data";

export function Footer() {
  return (
    <footer className="bg-[#100f0d] text-white/70">
      <div className="mx-auto max-w-7xl px-5 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <Image src={images.iconWhite} alt="" width={40} height={42} className="h-10 w-auto" />
              <span className="font-[family-name:var(--font-display)] text-2xl text-white">
                Bettoh<span className="text-[#ed1c24]">tech</span>
              </span>
            </div>
            <p className="mt-2 font-[family-name:var(--font-script)] text-lg text-[#ed1c24]">
              Brand Architects
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">{site.descriptor}</p>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.16em] text-white/40">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.16em] text-white/40">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.16em] text-white/40">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>{site.location}</li>
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">
                  {site.email}
                </a>
              </li>
              <li className="text-white/40">{site.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-[family-name:var(--font-mono)] text-xs text-white/35">
            © {new Date().getFullYear()} Bettohtech. All rights reserved.
          </p>
          <div className="flex gap-5 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] text-white/50">
            <a href={site.social.instagram} className="hover:text-white transition-colors">
              Instagram
            </a>
            <a href={site.social.facebook} className="hover:text-white transition-colors">
              Facebook
            </a>
            <a href={site.social.linkedin} className="hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
