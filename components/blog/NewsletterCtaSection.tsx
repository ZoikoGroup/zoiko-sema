"use client"
import { useState } from "react";

const preferences = ["Product News", "Leadership Tips", "Security Alerts"];

export default function NewsletterCtaSection() {
  const [checked, setChecked] = useState<string[]>(["Product News"]);

  const toggle = (pref: string) => {
    setChecked((prev) =>
      prev.includes(pref) ? prev.filter((p) => p !== pref) : [...prev, pref]
    );
  };

  return (
    <section className="bg-[#4F3CE0] px-6 py-14 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-md">
          <h2 className="text-2xl font-bold leading-snug text-white sm:text-[26px]">
            Get practical Zoiko Sema communication insights in your inbox.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Join 45,000+ leaders receiving our weekly playbook on high-performance
            team culture.
          </p>
        </div>

        <div className="w-full max-w-md">
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your business email"
              className="h-12 w-full rounded-xl border border-white/20 bg-[#F7F9FB] px-4 text-sm text-[#6B7280] outline-none transition placeholder:text-[#6B7280] focus:border-white/50 sm:flex-1"
            />
            <button className="h-12 shrink-0 rounded-xl bg-[#FEFCFF] px-6 text-sm font-semibold text-[#4A37D3] transition hover:bg-gray-100">
              Subscribe
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {preferences.map((pref) => (
              <label
                key={pref}
                className="flex items-center gap-2 text-xs text-white/80"
              >
                <input
                  type="checkbox"
                  checked={checked.includes(pref)}
                  onChange={() => toggle(pref)}
                  className="h-3.5 w-3.5 rounded border-white/40 bg-transparent text-[#4F3CE0] focus:ring-white"
                />
                {pref}
              </label>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
