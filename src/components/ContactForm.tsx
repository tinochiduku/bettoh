"use client";

import { useState, type FormEvent } from "react";
import { services } from "../lib/data";
import { ArrowIcon } from "./icons";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    // TODO: wire this up to a real endpoint — e.g. an API route, Formspree,
    // or your CRM's inbound-lead webhook. This demo just simulates a call.
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      console.log("Contact form submission:", data);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bt-cut-tr bg-[#1c1b1a] p-8 md:p-10">
        <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.14em] text-[#ed1c24]">
          Message sent
        </span>
        <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl uppercase text-white">
          We've got your brief.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/60">
          Someone from the Bettohtech team will get back to you shortly to
          confirm scope and schedule a site visit if one's needed.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] text-white/50 hover:text-white"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bt-cut-tr bg-[#1c1b1a] p-8 md:p-10 space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Phone" name="phone" type="tel" required />
      </div>
      <Field label="Email" name="email" type="email" required />

      <label className="block">
        <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] text-white/50">
          Service you need
        </span>
        <select
          name="service"
          required
          defaultValue=""
          className="mt-2 w-full border border-white/15 bg-[#100f0d] px-4 py-3 text-sm text-white outline-none focus:border-[#ed1c24]"
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </label>

      <label className="block">
        <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] text-white/50">
          Project details
        </span>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Tell us what you need branded, and where."
          className="mt-2 w-full resize-none border border-white/15 bg-[#100f0d] px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none focus:border-[#ed1c24]"
        />
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 bg-[#ed1c24] px-6 py-3.5 font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.12em] text-white transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
        {status !== "submitting" && <ArrowIcon className="h-4 w-4" />}
      </button>

      {status === "error" && (
        <p className="text-sm text-[#ed1c24]">
          Something went wrong sending that — try again, or email us directly.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] text-white/50">
        {label}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full border border-white/15 bg-[#100f0d] px-4 py-3 text-sm text-white outline-none focus:border-[#ed1c24]"
      />
    </label>
  );
}
